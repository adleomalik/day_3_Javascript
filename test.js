// let hasil = document.getElementBy(`hasil-output`);
// console.log(hasil);
// hasil.innerHTML = "<p>Aku suka javascript</p>";

// const nama = `OGYA TEKNO NUSANTARA`;
// const visitedCount = 8293891;
// const isActive = true;
// const url = `www.ogya.co.id`;

// let yakin = confirm(`Selamat datang di ${nama}`);

// if (yakin) {
//   window.Location = `https://ogya.co.id/`;
// } else {
//   document.write(`baiklahhh`);
// }

// document.write(`Nama situs ${nama} <hr>`);
// document.write(`Jumlah Pengunjung ${visitedCount} <hr>`);
// document.write(`Status Aktif ${isActive} <hr>`);
// document.write(`Alamat URL ${url} <hr>`);

// let a = 5;
// console.log(a);
// console.log(typeof a);

// a = `dor`;
// console.log(a);

// let nama = prompt(`Masukkan nama mu boss`);

// document.write(`<h1>Hallo ${nama}</h1>`);

// let a = `4`;
// let b = 5;

// let c = a + b;
// let d = c + 3;
// console.log(d);

// var pertanyaan = confirm(`Apakah kamu upper 18`);

// var hasil = pertanyaan ? `welocme ` : `tidak welcome`;
// document.write(hasil);

// let belanja = prompt(`total belanja`, 0);

// if (belanja >= 100000) {
//   document.write(`<h1>Anak Sultan/h1>`);
// } else {
//   document.write(`<h1>Miskin</h1>`);
// }
// let username = prompt(`Masukkan Username`);
// let password = prompt(`Masukkan Password`);

// if (username == `boss` && password == `mantap`) {
//   document.write(`<h1>selamat datang ${username}</h1>`);
// } else {
//   alert(`Ada kesalahan`);
// }

// let nilai = prompt(`masukkan nilai ente :`);

// if (nilai >= 90) {
//   document.write(`<h1>Pinter bet nilai kamu A : ${nilai}</h1>`);
// } else if (nilai >= 75) {
//   document.write(`<h1>Pinter nilai kamu B : ${nilai}</h1>`);
// } else if (nilai > 60) {
//   document.write(`<h1>Biasa aja nilai kamu C : ${nilai}</h1>`);
// } else {
//   document.write(`<h1>Jangan main mulu boss nilai kamu D : ${nilai}</h1>`);
// }

// let jawab = Number(prompt(`masukkan hadiah`));
// let hadiah = ``;

// switch (jawab) {
//   case 1:
//     hadiah = "bola";
//     break;
//   case 2:
//     hadiah = "buku";
//     break;
//   case 3:
//     hadiah = "baju";
//     break;
//   case 4:
//     hadiah = "celana";
//     break;
//   case 5:
//     hadiah = "Uang 50rb rupiah";
//     break;
//   default:
//     document.write(`<p>Opsi tidak ada</p>`);
// }

// if (hadiah === ``) {
//   document.write(`<p>kamu gagal dapat hadiah</p>`);
// } else {
//   document.write(`<p>kamu dapat ${hadiah}</p>`);
// }

// let jwb = prompt(`aw`);
// let jawaban = jwb.toLocaleUpperCase() == `IYA` ? `Benar` : `Salah`;

// document.write(`jawaban anda : <b>${jawaban}</b>iya`);
// for (let i = 0; i < 10; i++) {
//   document.write(`<p>kamu gagal dapat ${i} hadiah</p>`);
// }

// var ulangi = confirm(`ulang?`);
// var counter = 0;

// while (ulangi) {
//   var jawab = confirm(`apakah anda mau mengulangi?`);
//   counter++;
//   if (jawab == false) {
//     ulangi = false;
//   }
// }

// document.write(`Perulangan sudah ${counter}`);

// let products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = products.filter(check);
// function check(data) {
//   return data % 2 == 0;
// }
// const filterAngka = products.filter(check);
// document.write(filterAngka);

// var adaAngka = products.includes(1);
// document.write(adaAngka);

// const filterArray = products.forEach((data) => {
//   document.write(`array index ke - ${data}`);
//   document.write(`<br>`);
// });

// for (let i = 0; i < products.length; i++) {
//   document.write(`array index ke - ${products[i]}`);
//   document.write(`<br>`);
// }
// products.forEach((data) => {
//   document.write(`array index ke - ${data}`);
//   document.write(`<br>`);
// });

// let a = products.push(`kuda`);
// products.forEach((data) => {
//   document.write(`array index ke - ${data}`);
//   document.write(`<br>`);
// });

// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }

// document.body.style.backgroundColor = `red`;

// let tutorial = document.getElementById(`hasil-output`);

let paragraf = document.getElementsByClassName(`paragraf`);
setInterval(function () {
  paragraf[0].style.color = `red`;
  paragraf[1].style.color = `green`;
  paragraf[2].style.color = `blue`;

  setTimeout(function () {
    paragraf[0].style.color = `blue`;
    paragraf[1].style.color = `pink`;
    paragraf[2].style.color = `aqua`;
  }, 500);
}, 1000);

// console.log(paragraf);
// paragraf[0].style.color = `red`;
