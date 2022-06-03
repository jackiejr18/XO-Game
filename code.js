const PLAYER_ONE_SYMBOL = 'X';
const LAYER_TWO_SYMBOL = 'O';

class TicTacToeGame {
  
  
  handleSquareClick(event){
    console.log(event.target.id);  
  }
  
  drawBoard(){
    document.body.innerHTML = "";
    let gameBoard = document.createElement('div');
    gameBoard.id = 'gameBoard';
    gameBoard.classList.add('board');
    gameBoard.addEventListener('click', this.handleSquareClick.bind(this));
    
    this.board.forEach((square, index) => {
      let squareElement = document.createElement('div');
      squareElement.id = index; 
      squareElement.classList.add('square');
      gameBoard.appendChild(squareElement);
    });
    document.body.appendChild(gameBoard);
  }
  
  start(){
    this.board = ["", "", "",
                  "", "", "",
                  "", "", ""];
    this.drawBoard();
  }
}

const game = new TicTacToeGame();
game.start();