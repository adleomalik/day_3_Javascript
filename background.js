let bgColor = document.getElementById(`bg-color`);
let txtColor = document.getElementById(`txt-color`);

bgColor.addEventListener("change", (event) => {
  document.body.style.backgroundColor = bgColor.value;
});

txtColor.addEventListener("change", (event) => {
  document.body.style.color = txtColor.value;
});

function addBarang() {
  return alert(`HALOOOOOO`);
}
