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
    if (dataInput[index] > 0) {
      tong += dataInput[index];
    }
    index++;
  }
  document.querySelector(
    ".kq2"
  ).innerHTML = `<p><i class='fa-solid fa-shuffle me-3'></i>Tổng dương là: ${tong}</p>`;
};

//Bài 2 - Đếm số dương
document.getElementById("btnDemSoDuong").onclick = () => {
  let dataInput = luuTruDuLieuMang(mangN);
  let dem = 0;
  let mangDuong = [];

  for (let i = 0; i < dataInput.length; i++) {
    if (dataInput[i] > 0) {
      dem++;
      mangDuong.push(dataInput[i]);
    }
  }
  document.querySelector(
    ".kq3"
  ).innerHTML = `<p><i class='fa-solid fa-shuffle me-3'></i>Số dương: ${dem} số </p>`;
};

//Bài 3 - Tìm số dương nhỏ nhất trong mảng
document.getElementById("btnTimSoNhoNhat").onclick = () => {
  let dataInput = luuTruDuLieuMang(mangN);
  let min = 0;
  let a = dataInput.split();
  console.log(a);
  // for (let index in dataInput) {
  //   if (dataInput[index] > 0) {
  //     const numArray = dataInput.split(",").map(Number);
  //     console.log(numArray);
  //   }
  // }
};

let a = [1, 5, 100, 9, 0, 1000];
let b = Math.min(a);
console.log(Math.min(100, 10, 12));
