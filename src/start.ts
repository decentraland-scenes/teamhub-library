import { GameController } from './controllers/game.controller'
import './uis/ui.registry'
export * from './controllers/ui.controller'

export class TeamHub {
  gameController = new GameController()
  constructor() {
    this.gameController.start()
  }
}
