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
        cardCol.className = "card bg-dark border-dark";

        const img = document.createElement("img");
        img.className = "card-img-top align-self-center";
        img.src = model.img;
        img.style = "width: 200px";

        const cardbody = document.createElement("div");
        cardbody.className = "card-body";

        const cardtitle = document.createElement("h5");
        cardtitle.className = "card-title text-white";
        cardtitle.textContent = model.name;

        const cardtext = document.createElement("p");
        cardtext.className = "card-text text-white";
        cardtext.textContent = "This is a wider card with supporting text below as a natural lead-in to additional content.";

        const cardfooter = document.createElement("div");
        cardfooter.className = "card-footer";        

        const small = document.createElement("small");
        small.className = "card-text text-white";
        small.textContent = "Revisa los pokemon en la pokedex";

        const btn = document.createElement("button");
        btn.className = "btn btn-light mx-auto d-block";
        btn.style.marginTop = "auto";
        btn.textContent = "Ver Detalles";


        
        cardCol.appendChild(img);
        cardCol.appendChild(cardbody);
        cardbody.appendChild(cardtitle);
        cardbody.appendChild(cardtext);
        cardbody.appendChild(btn);
        cardCol.appendChild(cardfooter);
        cardfooter.appendChild(small);
        divcol.appendChild(cardCol);
      });
    })
    .catch((error) => console.error("Error:", error));
});
