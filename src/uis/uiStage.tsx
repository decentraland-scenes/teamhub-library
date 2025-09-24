import { engine, MeshCollider } from '@dcl/sdk/ecs'
import { type GameController } from '../controllers/game.controller'
import { withPlayerInfo } from '../utils'
import { stageWall } from '../entities'

export class StageUI {
  public hostTarget = engine.addEntity()
  public hostTargetText = engine.addEntity()
  public gameController: GameController
  public stageUiVisibility: boolean = false
  playerSelected: string = ''

  private readonly stageWall = stageWall

  private readonly stageWallColliderComponent = MeshCollider.get(this.stageWall)

  constructor(gameController: GameController) {
    this.gameController = gameController

    this.gameController.playerController.onHostChange((newHosts) => {
      this.checkPlayerAccess(newHosts)
    })

    this.checkPlayerAccess(this.gameController.playerController.getHosts())
  }

  checkPlayerAccess(hosts: string[] | undefined): void {
    withPlayerInfo((player) => {
      const isHost = this.gameController.playerController.isHost(player.userId, hosts)
      const noHosts = hosts == null || hosts.length === 0

      if (noHosts || isHost) {
        this.unlockAccessToStage()
      } else {
        this.lockAccessToStage()
      }
    })
  }

  lockAccessToStage(): void {
    // Hack to ensure the collider is added
    let i = 0
    engine.addSystem(
      () => {
        MeshCollider.createOrReplace(this.stageWall, this.stageWallColliderComponent)
        i++
        if (i > 2) {
          engine.removeSystem('hackToEnsureColliderIsAdded')
        }
      },
      0,
      'hackToEnsureColliderIsAdded'
    )
  }

  unlockAccessToStage(): void {
    MeshCollider.deleteFrom(this.stageWall)
  }

  addAsHost(userID: string): void {
    if (userID === undefined) return
    this.gameController.playerController.setHost(userID, true)
  }
}
