document.addEventListener("DOMContentLoaded", (event) => {
  fetch("http://127.0.0.1:8001/v1/pokemons/")
    .then((response) => response.json())
    .then((data) => {
      const cardDiv = document.getElementById("card");
      data.forEach((model) => {
        const divcol = document.createElement("div");
        divcol.className = "col-12 col-md-4 col-xl-3 col-lg-3 mt-4";
        cardDiv.appendChild(divcol);

        const cardCol = document.createElement("div");
        cardCol.className = "card";

        const img = document.createElement("img");
        img.className = "card-img-top align-self-center";
        img.src = model.img;
        img.style = "width: 200px";

        const cardbody = document.createElement("div");
        cardbody.className = "card-body";

        const cardtitle = document.createElement("h5");
        cardtitle.className = "card-title";
        cardtitle.textContent = model.name;

        const cardtext = document.createElement("p");
        cardtext.className = "card-text";
        cardtext.textContent = "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.";

        const cardfooter = document.createElement("div");
        cardfooter.className = "card-footer";

        const small = document.createElement("small");
        small.className = "text-muted";
        small.textContent = "Revisa los pokemon en la pokedex";

        
        cardCol.appendChild(img);
        cardCol.appendChild(cardbody);
        cardbody.appendChild(cardtitle);
        cardbody.appendChild(cardtext);
        cardCol.appendChild(cardfooter);
        cardfooter.appendChild(small);
        divcol.appendChild(cardCol);
      });
      console.log(cardDiv);
    })
    .catch((error) => console.error("Error:", error));
});
