//?SELECTORS

const gelirInput = document.getElementById("gelir-input");
const ekleBtn = document.getElementById("ekle-btn");
const ekleFormu = document.getElementById("ekle-formu");

//?VARİABLES

let gelirler = "";

//?EVENTS

// formun submıt btn a basıldıgında otomatı kolarak bu event e gelır
ekleFormu.addEventListener("submit", (e) => {
  e.preventDefault();
  gelirler += gelirInput.value;
  console.log(gelirler);
});

//?FUNCTİONS
