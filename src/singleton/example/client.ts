import { Game1 } from './game1'
import { Game2 } from './game2'
import { Game3 } from './game3'


const game1 = new Game1()
game1.addWinner(3, 'qwe')

const game2 = new Game2()
game2.addWinner(2, 'asd')

const game3 = new Game3()
game3.addWinner(1, 'zxc')

game1.leaderboard.print()
game2.leaderboard.print()
game3.leaderboard.print()