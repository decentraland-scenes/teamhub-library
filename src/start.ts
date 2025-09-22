import { GameController } from './controllers/game.controller'

export class TeamHub {
  gameController = new GameController()
  constructor() {
    this.gameController.start()
  }
}
