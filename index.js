
  const easy= document.getElementById("easy");
  const normal= document.getElementById("normal");
  const hard= document.getElementById("hard");
  easy.addEventListener('click',function (){
    numberOfFaces=2;
    restart();
  })
  normal.addEventListener('click',function (){
    numberOfFaces=5;
    restart();
  })
  hard.addEventListener('click',function (){
    numberOfFaces=8;
    restart();
  })

  let numberOfFaces = 5;
  let numberOfGames = 0;
  const theLeftSide =document.getElementById("leftSide");
  const theRightSide=document.getElementById("rightSide");
  const btn = document.getElementById('restart');
 
 function restart() {
  while (theLeftSide.firstChild) {
      theLeftSide.removeChild(theLeftSide.firstChild);
            }
    while (theRightSide.firstChild) {
      theRightSide.removeChild(theRightSide.firstChild);
            }
  generateFaces();
  numberOfGames = 0;
   
 }

  btn.addEventListener('click', () => {
       btn.style.display = 'none';
       restart()
    });
 
  function generateFaces(test){
    for(let i=0;i<numberOfFaces;i++) {
      let face=document.createElement("img");
      face.src = 'images/smile.png';
      let randomTop= Math.floor(Math.random()*400+1);
      let randomLeft=Math.floor(Math.random()*400+1);
      face.style.top = randomTop + 'px';
      face.style.left = randomLeft + 'px';
      theLeftSide.appendChild(face);
    }
    const leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);
     for( let i=0;i<numberOfFaces;i++){
       if (i===numberOfFaces-1){
         theLeftSide.children[i].addEventListener('click',nextLevel);
       }else{theLeftSide.children[i].addEventListener('click',gameOver);
       }
       
    }
    theRightSide.addEventListener('click',gameOver);
  }
  function nextLevel(event) {
    numberOfGames += 1;
    event.stopPropagation();
    numberOfFaces += 5;
    while (theLeftSide.firstChild) {
      theLeftSide.removeChild(theLeftSide.firstChild);
            }
    while (theRightSide.firstChild) {
      theRightSide.removeChild(theRightSide.firstChild);
            }

    generateFaces();
  }

  function gameOver(){
    alert("Game Over! You have tried "+numberOfGames+" times!");
    document.body.removeEventListener('click',gameOver);
    theLeftSide.lastChild.removeEventListener('click',nextLevel);
    btn.style.display='block'
    
  }
  

