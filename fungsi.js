var dataBarang = [`buku`, `spidol`, `meja`, `kursi`];

function showBarang() {
  var listBarang = document.getElementById(`list-barang`);
  //clear list barang
  listBarang.innerHTML = ``;
  //cetak semua barang
  for (let i = 0; i < dataBarang.length; i++) {
    var btnEdit = `<a href="#" onclick='editBarang(${i})'>Edit</a>`;
    var btnHapus = `<a href="#" onclick='deleteBarang(${i})'>Hapus</a>`;

    listBarang.innerHTML += `<li>${dataBarang[i]} [${btnHapus} | ${btnEdit}]</li>`;
  }
}

function addBarang() {
  var input = document.querySelector(`input[name=barang]`);
  if (input.value !== ``) {
    dataBarang.push(input.value);
  } else {
    alert(`Nama Barang tidak boleh kosong`);
  }

  input.value = ``;
  showBarang();
}
function deleteBarang(i) {
  dataBarang.splice(i, 1);
  showBarang();
}

function editBarang(i) {
  let edit = prompt(`edit`);
  dataBarang[i] = edit;
  showBarang();
}
