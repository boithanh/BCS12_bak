window.onload = function () {
  document.querySelector(".block_item").classList.add("light-way");
};
let mangN = [];
let soN = document.getElementById("soN");

function luuTruDuLieuMang(mangN) {
  return mangN;
}

document.getElementById("btnThemSo").onclick = function () {
  let n = soN.value * 1;
  mangN.push(n);
  luuTruDuLieuMang(mangN);
  document.querySelector(
    ".kq"
  ).innerHTML = `<p><i class='fa-solid fa-shuffle me-3'></i>${mangN}</p>`;
};

//Bài 1 - Tính Tổng các số dương
document.getElementById("btnTinhTongSoDuong").onclick = function () {
  dataInput = luuTruDuLieuMang(mangN);
  let index = 0;
  let tong = 0;
  while (index < dataInput.length) {
    tong += dataInput[index];
    index++;
  }
  document.querySelector(
    ".kq2"
  ).innerHTML = `<p><i class='fa-solid fa-shuffle me-3'></i>Tổng dương là: ${tong}</p>`;
};
