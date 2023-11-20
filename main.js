
let text_input = document.getElementById('text_input');
text_input.textContent = '';
text_input.focus();
//text_input.hidden = true;
let isFocus = true;

text_input.addEventListener('focus', () => {isFocus = true;});
text_input.addEventListener('blur', () => {isFocus = false;});

let output_container = document.getElementById('output_container');
let practice_text = "Two roads diverged in a yellow wood,\nAnd sorry I could not travel both\nAnd be one traveler, long I stood\nAnd looked down one as far as I could\nTo where it bent in the undergrowth;\nThen took the other, as just as fair,\nAnd having perhaps the better claim,\nBecause it was grassy and wanted wear;\nThough as for that the passing there\nHad worn them really about the same,\nAnd both that morning equally lay\nIn leaves no step had trodden black.\nOh, I kept the first for another day!\nYet knowing how way leads on to way,\nI doubted if I should ever come back.\nI shall be telling this with a sigh\nSomewhere ages and ages hence:\nTwo roads diverged in a wood, and I—\nI took the one less traveled by,\nAnd that has made all the difference.";
let practice_text_array = practice_text.split(/(?=[' '])|(?<=[' '])|(?<=['\n'])/g); // https://medium.com/@shemar.gordon32/how-to-split-and-keep-the-delimiter-s-d433fb697c65
//let practice_text_array = practice_text.split(' ');
let span_word_array = [];
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
            console.log('return');
        }
        //text_input.textContent += word;
    });
}
populate_practice();

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



let poem_list_container = document.getElementById('poem_list_container');
let populate_poem_container = function(){
    poem_object_array.forEach(poem_object => {
        //console.log(poem_object_array);
        //console.log(poem_object);
        let newPoemDiv = document.createElement('div');
        newPoemDiv.textContent = poem_object.title;
        newPoemDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        newPoemDiv.style.margin = '2px';
        newPoemDiv.style.padding = '2px';
        newPoemDiv.style.borderRadius = '5px';

        poem_list_container.append(newPoemDiv);
        console.log('loop ');
    });
}

let update_poem_text = function(){

}


const apiUrl = './poems.json';
let poem_object_array = [];
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

/*
document.onkeypress = function (e) {
    e = e || window.event;
    // use e.keyCode
};
addEvent(document, "keypress", function (e) {
    alert('all');
    // use e.keyCode
});
*/

let update_output = function (){

}


