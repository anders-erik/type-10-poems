
export let fetch_poems = function(uri){
    fetch(uri)
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

