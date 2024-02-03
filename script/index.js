document.addEventListener("DOMContentLoaded", (event) => {
  fetch("http://127.0.0.1:8001/pokemons/")
    .then((response) => response.json())
    .then((data) => {
      data.forEach(model => {
        console.log(model);
        const cardDiv =  document.getElementById('card');
        const card = document.createElement('div');
        card.className = "card col-3"
        card.innerHTML = model.name;
        // const img = document.createElement('img');
        // img.className = "card-img-top";
        // img.src = data.get("img");
        // card.appendChild(img);
        cardDiv.appendChild(card);
      });
    }).catch(error => console.error('Error:', error));
});
