document.addEventListener("DOMContentLoaded", (event) => {
  // bloquear el scroll de la pagina
  document.body.style.overflow = "hidden";
  imageAnimation.play();
  fetch("./static/data.json")
    .then((response) => response.json())
    .then((data) => {
      const cardDiv = document.getElementById("card");
      data.forEach((model) => {
        const divcol = document.createElement("div");
        divcol.className = "col-12 col-md-4 col-xl-3 col-lg-3 mt-4";
        cardDiv.appendChild(divcol);

        const cardCol = document.createElement("div");
        cardCol.className = "card bg-dark border-dark";
        cardCol.style = "height: 400px";

        const img = document.createElement("img");
        img.className = "card-img-top align-self-center";
        img.src = model.img;
        img.style = "width: 200px";

        const cardbody = document.createElement("div");
        cardbody.className = "card-body";

        const cardtitle = document.createElement("h5");
        cardtitle.className = "card-title text-white d-flex justify-content-center";
        cardtitle.textContent = model.name;

        const cardtext = document.createElement("p");
        cardtext.className = "card-text text-white d-flex justify-content-center text-center";
        cardtext.textContent = model.desc;

        const cardfooter = document.createElement("div");
        cardfooter.className = "card-footer bg-dark border-white d-flex justify-content-center";        

        const small = document.createElement("small");
        small.className = "card-text text-white d-flex justify-content-center";
        small.textContent = "Revisa los pokemon en la pokedex";

        const btn = document.createElement("button");
        btn.className = "btn btn-light mx-auto d-block";
        btn.style.marginTop = "auto";
        btn.textContent = "Ver más";
        btn.onclick = function () {
          showDetail(model.id);
        };


        
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
    .catch((error) => console.error("Error:", error)).finally(() => {
      document.querySelector("#loading").style.display = 'none';
      // desbloquear el scroll de la 
      document.body.style.overflow = "auto";
    });
});



function showDetail(id) {
  window.location.href = "https://pokeapi.co/api/v2/pokemon/" +  id;
}

var imageAnimation = new mojs.Html({
  el: '#play',
  angle: { 0: 260 },
  scale: { 0.5: 1.0 },
  duration: 1000,
  repeat: 10,
  isYoyo: true,
  easing: "quad.in",
});
