let spanCharArray = [];

export class Typewriter {

  poemString = "";
  poemStringSplit = [];
  

  containerDivId = "";
  containerDiv = document.createElement('div');

  typewriterDiv = document.createElement('div');
  typewriterInput = document.createElement('textarea');



  constructor(poemString, containerDivId) {
    this.containerDivId = containerDivId;
    this.containerDiv = document.getElementById(containerDivId);
    this.containerDiv.style.backgroundColor = 'lightgray';

    

    // BELOW IS NEEDED!
    // -----------------------------------
    //this.typewriterDiv = document.createElement('div');
    this.typewriterDiv = document.getElementById('typewriterDiv');
    this.containerDiv.appendChild(this.typewriterDiv);
    
    //this.typewriterDiv.scrollTo(0, -100);
    this.typewriterDiv.style.height = '100%';
    //this.typewriterDiv.style.width = '100%';
    //this.typewriterDiv.style.border = 'solid black 1px';
    

    this.poemString = poemString;
    this.setNewPoem(poemString);
    console.log(this.poemStringSplit);


    
  }

  setNewPoem(newPoemString){

    this.typewriterDiv.innerHTML = '';

    this.poemStringSplit = newPoemString.split(/(?=[' '])|(?<=['\n'])/g); // https://medium.com/@shemar.gordon32/how-to-split-and-keep-the-delimiter-s-d433fb697c65
    
    this.typewriterDiv = populateDiv(this.poemStringSplit, this.typewriterDiv);

    this.typewriterInput = addTypewriterInput(this.containerDiv);

    this.adjustTextVertically(); // initial adjustment

    this.typewriterInput.addEventListener('keyup', (event) => {
      this.check_strings(this.poemString, event.target);
      this.adjustTextVertically();
    });

    
    //this.containerDiv.style.backgroundColor = 'blue';
    //document.getElementById(this.containerDivId);// = this.containerDiv;
  }


  adjustTextVertically = function(){
    let fractionWritten = this.typewriterInput.value.length / this.poemString.length;
    /*
    //console.log('percent ' + percentWritten);
    console.log('text height: ' + this.typewriterDiv.style.height);
    console.log(this.typewriterInput.value.length);
    console.log(this.typewriterInput.offsetHeight);
    console.log(this.typewriterDiv.scrollHeight);

    let heightDiff = this.typewriterDiv.scrollHeight - this.typewriterInput.offsetHeight;
    console.log('------');
    console.log(this.typewriterInput.offsetHeight/2);
    console.log(heightDiff);
    console.log(fractionWritten);
    */
    //this.typewriterDiv.style.top = ( 50 - 2 * percentWritten ) + '%';
    //console.log(Math.floor(this.typewriterInput.offsetHeight/2 - heightDiff * fractionWritten) + 'px');
    this.typewriterDiv.style.top = (this.typewriterInput.offsetHeight/2 - (this.typewriterDiv.scrollHeight * fractionWritten)) + 'px';
  }
  

  check_strings(poemString, typewriterDiv){
    console.log('checking strings');

    for(let i = 0; i<poemString.length; i++){
      //console.log(i);
      if(i >= typewriterDiv.value.length){
        spanCharArray[i].style.color = 'black';
        spanCharArray[i].style.backgroundColor = 'rgba(0, 0, 0, 0)';
      }
      else {
          //console.log(typewriterDiv.value[i] + ' ?= ' + practice_text[i])
          if(typewriterDiv.value[i] == poemString[i]){
            spanCharArray[i].style.color = 'green';
            spanCharArray[i].style.backgroundColor = 'rgba(0, 100, 0, 0.3)';
          }
          else{
            spanCharArray[i].style.color = 'red';
            spanCharArray[i].style.backgroundColor = 'rgba(100, 0, 0, 0.3)';
          }
      }
  }
  }

}






let addTypewriterInput = function(containerDiv){
  let typewriterInput = document.createElement('textarea');
  containerDiv.appendChild(typewriterInput);
  typewriterInput.style.position = 'relative';
  typewriterInput.style.width = '100%';
  typewriterInput.style.height = '100%';
  typewriterInput.style.top = '0px';
  typewriterInput.style.border = 'none';
  typewriterInput.style.backgroundColor = 'rgba(255,255,255,0.0)';

  return typewriterInput;
}



let populateDiv = function(stringArray, typewriterDiv) {
  let char_index = 0;
  let detect_return = false;
  spanCharArray = [];


  stringArray.forEach(word => {
      let span_word = document.createElement('span');
      span_word.className = 'span_word';
      //span_word.textContent = word + ' ';
      for(let i=0; i < word.length; i++){
          let charSpan = document.createElement('span');
          charSpan.textContent = word[i];
          charSpan.id = char_index + '';
          charSpan.style.borderRadius = '5px';
          charSpan.style.padding = '2px';
          charSpan.style.margin = '1px';
          charSpan.style.fontSize = '3rem';
          spanCharArray.push(charSpan);
          span_word.appendChild(charSpan);
          if(charSpan.textContent == '\n')
              detect_return = true;
      }
      console.log(typeof(typewriterDiv));
      typewriterDiv.appendChild(span_word);
      if(detect_return){
          typewriterDiv.appendChild(document.createElement('br'));
          detect_return = false;
          //console.log('return');
      }
      //text_input.textContent += word;
  });

  return typewriterDiv;
}




