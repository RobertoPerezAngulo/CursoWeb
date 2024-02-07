document.addEventListener("DOMContentLoaded", (event) => {
  fetch("http://127.0.0.1:8001/v1/pokemons/")
    .then((response) => response.json())
    .then((data) => {
      const cardDiv = document.getElementById("card");
      data.forEach((model) => {
        const divcol = document.createElement("div");
        divcol.className = "col-md-3 col-xs-12 col-sm-6 mt-4 justify-content-center d-flex";
        cardDiv.appendChild(divcol);

        const cardCol = document.createElement("div");
        cardCol.className = "card";
        cardCol.style = "width: 18rem;";

        const pcard = document.createElement("h2");
        pcard.className = "card-title d-flex justify-content-center";
        pcard.innerHTML = model.name;

        const img = document.createElement("img");
        img.className = "card-img-top";
        img.src = model.img;

        cardCol.appendChild(img);
        cardCol.appendChild(pcard);
        divcol.appendChild(cardCol);
      });
      console.log(cardDiv);
    })
    .catch((error) => console.error("Error:", error));
});
