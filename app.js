//?SELECTORS

const gelirInput = document.getElementById("gelir-input");
const ekleBtn = document.getElementById("ekle-btn");
const ekleFormu = document.getElementById("ekle-formu");

//?VARİABLES

let gelirler = 0;

//?EVENTS

// formun submıt btn a basıldıgında otomatı kolarak bu event e gelır
ekleFormu.addEventListener("submit", (e) => {
  e.preventDefault(); //? reload'u engeller
  gelirler = gelirler + Number(gelirInput.value); //? string eklemiyi engelledik

  //? gelirlerin kalıcı olmasi icin localStorage a kopyaliyoruz
  localStorage.setItem("gelirler", gelirler);

  //? input degerini sifrladik
  ekleFormu.reset();

  //? Degisiklikleri sonuc tablosuna yazan fonks.
  hesaplaVeGuncelle();
});

//?FUNCTİONS
