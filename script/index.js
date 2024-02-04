document.addEventListener("DOMContentLoaded", (event) => {
  fetch("http://127.0.0.1:8001/v1/pokemons/")
    .then((response) => response.json())
    .then((data) => {
      const cardDiv =  document.getElementById('card');
      data.forEach(model => {
        const divcol = document.createElement('div');
        divcol.className = 'col-md-3 col-sm-12 mt-4';
        cardDiv.appendChild(divcol);
        
        const cardCol = document.createElement('div')
        cardCol.className = 'card';
        // cardCol.innerHTML = model.name;

        const pcard =document.createElement('h2');
        pcard.className = 'card-title d-flex justify-content-center';
        pcard.innerHTML = model.name;

        const img = document.createElement('img');
        img.className = 'card-img-top';
        img.src = model.img;
        
        cardCol.appendChild(pcard);
        cardCol.appendChild(img);
        divcol.appendChild(cardCol);

        

        // card.appendChild(img);
        // cardDiv.appendChild(card);
        // divcol.appendChild(cardDiv);
      });
      console.log(cardDiv);
    }).catch(error => console.error('Error:', error));
});
