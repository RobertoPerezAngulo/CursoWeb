document.addEventListener("DOMContentLoaded", (event) => {
  fetch("http://127.0.0.1:8001/pokemons/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    }).catch(error => console.error('Error:', error));
});
