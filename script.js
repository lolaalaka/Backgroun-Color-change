var root = document.querySelector('.btn');
var boxColor = document.querySelector('.box-0'); 
var paraText = document.querySelector('.text');
var selectClass,arr, arrColor, index, timer;
index = 0;
 arr = [];
 arrColor = ['#3c4470', '#f151af','#cc3f6e', ' #ff004c', '#66ff00', ' #00a2ff', ' #00a2ff', '#5b6e2d', ' #e28b07','#e73414', '#9b187a', '#b97189', '#918a4d', '#8a6b88'];
 for (var i = 0; i < 15; i++){}


function beginning() {
  paraText.textContent = ' HEX COLOR : ' + arrColor[index++];
  selectClass = 'box-' + arr.push(i); //defines the class of the button
  boxColor.classList.add(selectClass);// attches the class 
}




function eventCall(){
  
  beginning();
  
  if(arr > 0) {
    root.style.display='none';
    boxColor.addEventListener('click', beginning);
  
  }

  
}
root.addEventListener ('click', eventCall);




/*function change(){
  if(index >= arrColor.length){
    clearInterval(timer);
  }
 timer = setInterval(change, 300);

}
*/