import Field from './field';
import Goblin from './goblin';

export default class Game {
  init() {
    this.field = new Field(document.querySelector('.field'));
    this.playGame();
  }

  playGame() {
    this.timer = setInterval(() => {
      this.field.clearHoles();
      this.currentField = this.field.getHole();
      Goblin.showGoblin(this.currentField);
    }, 1250);
  }
}
