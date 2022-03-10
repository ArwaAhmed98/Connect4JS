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
    
    // console.log( document.getElementsByClassName('c0 ')[0] || document.getElementsByClassName('c7')[0] )
// element = document.getElementsByTagName("div")
// function check(){
//   element.get
//   if (element.className > computerMove) {
//     computerMove=generaterandom()

//   }
// }

    function generaterandom()
    {
        return Math.floor(Math.random() * 7) 
    }
    function findX(i){
      

    }
    
    counter=0;
    pcTurn=0
    arr = new Array();
    // for 0 => 42
    // document.querySelectorAll("[class^=c]")[i].classList[0].substring(1,2)
    // var computerMove = Math.floor(generaterandom(counter,43)) ;
    for (let i = 0; i < 6; i++) {
      // squares[ generaterandom(0,41) ].click()
      squares[i].onclick = () => {
        if( squares[35+i].classList.contains("taken"))
                  i=i+7
        // alert(i)
        arr.push(i)
        // console.log(i)
        var computerMove =  Math.floor(Math.random() * (i) ) 
        //if the square below your current square is taken, you can go ontop of it
        if (squares[i + 7].classList.contains('taken') &&!squares[i].classList.contains('taken')
        || squares[computerMove + 7].classList.contains('taken') &&!squares[computerMove].classList.contains('taken') ) {
          if (currentPlayer == 1 && pcTurn == 0) {
            squares[i].classList.add('taken')
            arr.push(i);
            // i = t
            squares[i].classList.add('player-one')
            pcTurn=1
            counter++
            currentPlayer=2
            displayCurrentPlayer.innerHTML = currentPlayer
           
          
          }
            else  if(pcTurn == 1 && currentPlayer==2){
              // setInterval(()=>{
          
              // if(computerMove <  )
                computerMove = Math.floor(generaterandom()) ;
                if( ! arr.includes(computerMove)){
                squares[computerMove].classList.add('taken')
                squares[computerMove].classList.add('player-two')
                currentPlayer = 1
                displayCurrentPlayer.innerHTML = currentPlayer  
                pcTurn=0    
                counter++  
                }
              // },20)
            
      
            }
      
          } 
        check(i)
      }
     
    }
    
  })