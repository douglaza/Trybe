var el = document.querySelector(".carta");


el.addEventListener("click", showCard, false);

function showCard(evt) {
    var div = document.createElement("DIV");
    document.body.appendChild(div);
    // el.style.transform = 'translateX(300px)';
    console.log("clicked on box.")
}