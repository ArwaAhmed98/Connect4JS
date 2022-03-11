document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const result = document.querySelector('#result')
  const displayCurrentPlayer = document.querySelector('#current-player')
  let currentPlayer = 1


  
  function check(y){
      //row win
      if (squares[y].classList.contains('taken') &&  squares[y].classList.contains('player-one') && squares[y+1].classList.contains('player-one') && squares[y+2].classList.contains('player-one') && squares[y+3].classList.contains('player-one'))
{
          result.innerHTML = 'Player One Wins!'

}
      if (squares[y].classList.contains('taken') &&  squares[y].classList.contains('player-one') && squares[y-1].classList.contains('player-one') && squares[y-2].classList.contains('player-one') && squares[y-3].classList.contains('player-one'))
{

  result.innerHTML = 'Player One Wins!'

}
if (squares[y].classList.contains('taken') &&  squares[y].classList.contains('player-two') && squares[y+1].classList.contains('player-two') && squares[y+2].classList.contains('player-two') && squares[y+3].classList.contains('player-two'))
{

  result.innerHTML = 'Player Two Wins!'

}
if (squares[y].classList.contains('taken') &&  squares[y].classList.contains('player-two') && squares[y-1].classList.contains('player-two') && squares[y-2].classList.contains('player-two') && squares[y-3].classList.contains('player-two'))
{

  result.innerHTML = 'Player Two Wins!'

}
// col win
if (squares[y].classList.contains('taken') &&  squares[y].classList.contains('player-one') && squares[y+7].classList.contains('player-one') && squares[y+14].classList.contains('player-one') && squares[y+21].classList.contains('player-one'))
{
          result.innerHTML = 'Player One Wins!'

}
if (squares[y].classList.contains('taken') &&  squares[y].classList.contains('player-one') && squares[y-7].classList.contains('player-one') && squares[y-14].classList.contains('player-one') && squares[y-21].classList.contains('player-one'))
{
          result.innerHTML = 'Player One Wins!'

}
if (squares[y].classList.contains('taken') &&  squares[y].classList.contains('player-two') && squares[y+7].classList.contains('player-two') && squares[y+14].classList.contains('player-two') && squares[y+21].classList.contains('player-two'))
{
          result.innerHTML = 'Player two Wins!'

}
if (squares[y].classList.contains('taken') &&  squares[y].classList.contains('player-two') && squares[y-7].classList.contains('player-two') && squares[y-14].classList.contains('player-two') && squares[y-21].classList.contains('player-two'))
{
          result.innerHTML = 'Player two Wins!'

}
//dia win
if (squares[y].classList.contains('taken') &&  squares[y].classList.contains('player-one') && squares[y+(7-1)].classList.contains('player-one') && squares[y+(2*7-2)].classList.contains('player-one') && squares[y+(3*7-3)].classList.contains('player-one'))
{
          result.innerHTML = 'Player One Wins!'

}
if (squares[y].classList.contains('taken') &&  squares[y].classList.contains('player-one') && squares[y+(1+7)].classList.contains('player-one') && squares[y+(2+2*7)].classList.contains('player-one') && squares[y+(3+3*7)].classList.contains('player-one'))
{
          result.innerHTML = 'Player One Wins!'

}
if (squares[y].classList.contains('taken') &&  squares[y].classList.contains('player-two') && squares[y+(7-1)].classList.contains('player-two') && squares[y+(2*7-2)].classList.contains('player-two') && squares[y+(3*7-3)].classList.contains('player-two'))
{
          result.innerHTML = 'Player two Wins!'

}
if (squares[y].classList.contains('taken') &&  squares[y].classList.contains('player-two') && squares[y+(1+7)].classList.contains('player-two') && squares[y+(2+2*7)].classList.contains('player-two') && squares[y+(3+3*7)].classList.contains('player-two'))
{
          result.innerHTML = 'Player two Wins!'

}

  }

  function generaterandom()
  {
      return Math.floor(Math.random() * (41 - 0 + 1)) + 0
  }
  // if the number under ther number we want to color it 
  console.log(generaterandom())
  //******************* 

  function pcTurn(){
    var randomNumber = generaterandom();
    var flag = 1
    displayCurrentPlayer.innerHTML = "TEst"
      while (flag)
      if (squares[randomNumber + 7].classList.contains('taken') && !squares[randomNumber].classList.contains('taken')) {
        
          squares[randomNumber].classList.add('taken')
          squares[randomNumber].classList.add('player-two')
          
          flag = 0
          check(randomNumber)

        
      } else {

        randomNumber = generaterandom();

      }
      
       
  }

  for (let i = 0; i < squares.length; i++) {
    squares[i].onclick = () => {
      //if the square below your current square is taken, you can go ontop of it
      if (squares[i + 7].classList.contains('taken') &&!squares[i].classList.contains('taken')) {
        if (currentPlayer == 1) {
          squares[i].classList.add('taken')
          squares[i].classList.add('player-one')
          // console.log("player one : "+ i)
          displayCurrentPlayer.innerHTML = currentPlayer
          pcTurn()
          
        } 
      } else alert('cant go here')
      check(i)
    }
  }
  
})