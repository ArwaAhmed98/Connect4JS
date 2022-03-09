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

    function generaterandom(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    counter=0;
    // var computerMove = Math.floor(generaterandom(counter,43)) ;
    for (let i = 0; i < squares.length; i++) {
      squares[i].onclick = () => {
        //if the square below your current square is taken, you can go ontop of it
        if (squares[i + 7].classList.contains('taken') &&!squares[i].classList.contains('taken')) {
          // if (currentPlayer == 1) {
            squares[i].classList.add('taken')
            squares[i].classList.add('player-one')
            // currentPlayer = 2
            counter++
            displayCurrentPlayer.innerHTML = currentPlayer
          // } else if (currentPlayer == 2){
            setTimeout(() => {
                  computerMove = Math.floor(generaterandom(counter,43)) ;
                  squares[computerMove].classList.add('taken')
                  squares[computerMove].classList.add('player-two')
                  // currentPlayer = 1
                  displayCurrentPlayer.innerHTML = currentPlayer      
                  counter++  
            }, 500);
            
          }   
        // } else alert('cant go here')
        check(i)
      }
    }
    
  })