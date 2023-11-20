

let poemObjectArray = [
    {
        "id": "8",
        "author": "Emma Lazarus",
        "title": "The New Colossus",
        "text": "Not like the brazen giant of Greek fame,\nWith conquering limbs astride from land to land;\nHere at our sea-washed, sunset gates shall stand\nA mighty woman with a torch, whose flame\nIs the imprisoned lightning, and her name\nMother of Exiles. From her beacon-hand\nGlows world-wide welcome; her mild eyes command\nThe air-bridged harbor that twin cities frame.\n“Keep, ancient lands, your storied pomp!” cries she\nWith silent lips. “Give me your tired, your poor,\nYour huddled masses yearning to breathe free,\nThe wretched refuse of your teeming shore.\nSend these, the homeless, tempest-tossed to me,\nI lift my lamp beside the golden door!”"
    },
    {
        "id": "9",
        "author": "Robert Frost",
        "title": "The Road Not Taken",
        "text": "Two roads diverged in a yellow wood,\nAnd sorry I could not travel both\nAnd be one traveler, long I stood\nAnd looked down one as far as I could\nTo where it bent in the undergrowth;\nThen took the other, as just as fair,\nAnd having perhaps the better claim,\nBecause it was grassy and wanted wear;\nThough as for that the passing there\nHad worn them really about the same,\nAnd both that morning equally lay\nIn leaves no step had trodden black.\nOh, I kept the first for another day!\nYet knowing how way leads on to way,\nI doubted if I should ever come back.\nI shall be telling this with a sigh\nSomewhere ages and ages hence:\nTwo roads diverged in a wood, and I—\nI took the one less traveled by,\nAnd that has made all the difference."
    }
]

import { Typewriter } from "./modules/Typewriter.js";
let typewriter = new Typewriter(poemObjectArray[0].text ,"containerDiv");
//console.log(typewriter.contentString);
//typewriter.setNewPoem(poemObjectArray[1].text);



//let text_input = document.getElementById('text_input');
//text_input.textContent = '';
//text_input.focus();
//text_input.hidden = true;
let isFocus = true;

//text_input.addEventListener('focus', () => {isFocus = true;});
//text_input.addEventListener('blur', () => {isFocus = false;});



/*
let output_container = document.getElementById('output_container');
let practice_text = "Two roads diverged in a yellow wood,\nAnd sorry I could not travel both\nAnd be one traveler, long I stood\nAnd looked down one as far as I could\nTo where it bent in the undergrowth;\nThen took the other, as just as fair,\nAnd having perhaps the better claim,\nBecause it was grassy and wanted wear;\nThough as for that the passing there\nHad worn them really about the same,\nAnd both that morning equally lay\nIn leaves no step had trodden black.\nOh, I kept the first for another day!\nYet knowing how way leads on to way,\nI doubted if I should ever come back.\nI shall be telling this with a sigh\nSomewhere ages and ages hence:\nTwo roads diverged in a wood, and I—\nI took the one less traveled by,\nAnd that has made all the difference.";
let practice_text_array = practice_text.split(/(?=[' '])|(?<=[' '])|(?<=['\n'])/g); // https://medium.com/@shemar.gordon32/how-to-split-and-keep-the-delimiter-s-d433fb697c65
//let practice_text_array = practice_text.split(' ');
//let span_word_array = [];
let span_char_array = [];

let populate_practice = function() {
    let char_index = 0;
    let detect_return = false;
    practice_text_array.forEach(word => {
        let span_word = document.createElement('span');
        span_word.className = 'span_word';
        //span_word.textContent = word + ' ';
        for(let i=0; i < word.length; i++){
            let span_char = document.createElement('span');
            span_char.textContent = word[i];
            span_char.id = char_index + '';
            span_char.style.borderRadius = '5px';
            span_char.style.padding = '2px';
            span_char.style.margin = '1px';
            span_char_array.push(span_char);
            span_word.appendChild(span_char);
            if(span_char.textContent == '\n')
                detect_return = true;
        }
        output_container.appendChild(span_word);
        if(detect_return){
            output_container.appendChild(document.createElement('br'));
            detect_return = false;
            //console.log('return');
        }
        //text_input.textContent += word;
    });
}
populate_practice();
*/

/*
text_input.addEventListener('keyup', function(event) {
    let char_count = text_input.value.length;
    //alert(char_count)
    //output_container.textContent += char_count + '';
    //alert('change')
    check_strings();
  });


let check_strings = function(){
    for(let i = 0; i<practice_text.length; i++){
        if(i >= text_input.value.length){
            span_char_array[i].style.color = 'black';
            span_char_array[i].style.backgroundColor = 'rgba(0, 0, 0, 0)';
        }
        else {
            //console.log(text_input.value[i] + ' ?= ' + practice_text[i])
            if(text_input.value[i] == practice_text[i]){
                span_char_array[i].style.color = 'green';
                span_char_array[i].style.backgroundColor = 'rgba(0, 100, 0, 0.3)';
            }
            else{
                span_char_array[i].style.color = 'red';
                span_char_array[i].style.backgroundColor = 'rgba(100, 0, 0, 0.3)';
            }
        }
    }
}







let poemMenuDiv = document.getElementById('poemMenuDiv');
let populatePoemMenu = function(){
    //console.log('populatePoemMenu');
    poemObjectArray.forEach(poemObject => {
        //console.log(poem_object_array);
        //console.log(poem_object);
        let newPoemDiv = document.createElement('div');
        newPoemDiv.textContent = poemObject.title;
        newPoemDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        newPoemDiv.style.margin = '2px';
        newPoemDiv.style.padding = '2px';
        newPoemDiv.style.borderRadius = '5px';

        poemMenuDiv.append(newPoemDiv);
        //console.log('loop ');
    });
}
populatePoemMenu();


let update_poem_text = function(){

}


const apiUrl = './poems.json';
let poem_object_array = [];
import { fetch_poems } from "./modules/fetch_poems.js";

fetch_poems(apiUrl, (poem_object_array) => {
    
    //populatePoemMenu();
});
*/




/*
let fetch_poems = function(uri){
    fetch(apiUrl)
  .then(response => {
    // Check if the request was successful (status code 200)
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    // Parse the JSON data
    return response.json();
  })
  .then(data => {
    // Handle the JSON data
    //console.log(typeof(data));
    console.log('data:');
    console.log(data);
    poem_object_array = data;
    populate_poem_container();
    
  })
  .catch(error => {
    // Handle errors during the fetch
    console.error('Fetch error:', error);
  });

}
function calb(){
    console.log('called back');
}
fetch_poems(apiUrl);
*/




