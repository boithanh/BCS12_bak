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
  document.getElementById(
    "kqMangN"
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
  document.getElementById(
    "kqTinhTong"
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
  document.getElementById(
    "kqDemSo"
  ).innerHTML = `<p><i class='fa-solid fa-shuffle me-3'></i>Số dương: ${dem} số </p>`;
};

//Bài 3 - Tìm số dương nhỏ nhất trong mảng
document.getElementById("btnTimSoNhoNhat").onclick = () => {
  let dataInput = luuTruDuLieuMang(mangN);
  let min = "";
  min = Math.min(...dataInput)
  document.getElementById(
    "kqSoNhoNhat"
  ).innerHTML = `<p><i class='fa-solid fa-shuffle me-3'></i>Số nhỏ nhất: ${min}</p>`;
};


//Bài 4 - Tìm số dương nhỏ nhất trong mảng
let newArr = [];
document.getElementById("btnTimSoDuongNhoNhat").onclick = () => {
  let dataInput = luuTruDuLieuMang(mangN);
  let min = "";
  for (let index in dataInput) {
    dataInput[index] > 0 && newArr.push(dataInput[index]);
  }
  Math.min(...newArr) == "Infinity" ? min = "Mảng bạn nhập toàn là số âm :(((" : min = Math.min(...newArr)
  document.getElementById(
    "kqSoDuongNhoNhat"
  ).innerHTML = `<p><i class='fa-solid fa-shuffle me-3'></i>Số nhỏ nhất: ${min}</p>`;
};


// Bài 5 tìm số chẵn cuối cùng
// 1) Đầu vào Mảng số n
// 2) Tạo 1 biến để chứa số chẵn cuối cùng, dùng vòng lặp kiểm tra mảng, nếu phần tử đó chẵn thì gán vào biến
//3) Đầu ra: số là số chẫn và ở vị trí cuối cùng trong mảng người dùng nhập vào

function kiemTraSoChanCuoi(mangN) {
  let soCuoiCung = 0;
  for (let index in mangN) {
    if (mangN[index] % 2 == 0) {
      soCuoiCung = mangN[index];
    }
  }
  return soCuoiCung;
}

document.getElementById("btnSoChanCuoi").onclick = () => {
  if (kiemTraSoChanCuoi(mangN)) {
    let sccc = kiemTraSoChanCuoi(mangN);
    document.getElementById(
      "kqSoChanCuoi"
    ).innerHTML = `<p><i class='fa-solid fa-shuffle me-3'></i>Số chẵn cuối cùng: ${sccc}</p>`;
  }
  else {
    document.getElementById(
      "kqSoChanCuoi"
    ).innerHTML = "Rất tiếc đã có lỗi xảy ra,vui lòng thử lại";
  }
}


//Bài 6 - Đổi chỗ 2 vị trí trong mảng


function hoanVi(mangN) {
  let duLieuVao = luuTruDuLieuMang(mangN);
  let viTriMot = document.getElementById("viTriMot").value * 1;
  let viTriHai = document.getElementById("viTriHai").value * 1;
  let temp = 0; temp = duLieuVao[viTriMot - 1];
  duLieuVao[viTriMot - 1] = duLieuVao[viTriHai - 1];
  duLieuVao[viTriHai - 1] = temp;
  let convertStr = duLieuVao.join(",");
  return convertStr;
}

document.getElementById("btnDoiCho").onclick = () => {
  // console.log("ta là ma đây");
  document.getElementById(
    "kqDoiCho"
  ).innerHTML = `<p><i class='fa-solid fa-shuffle me-3'></i>Mảng sau khi đổi: ${hoanVi(mangN)}</p>`;

}


//Bài 7 -Sắp xếp tăng dần
document.getElementById("btnsapXep").onclick = () => {
  let dataInput = luuTruDuLieuMang(mangN);
  let sapXeptangDan = dataInput.sort(function (a, b) { return a - b });
  document.getElementById(
    "kqsapXep"
  ).innerHTML = `<p><i class='fa-solid fa-shuffle me-3'></i>Mảng sau khi sắp xếp: ${sapXeptangDan}</p>`;
}

//Bài 8 -Tìm só nguyên tố đầu tiên có trong mảng

document.getElementById("btnTimNguyenTo").onclick = () => {
  let theDiv = document.getElementById("kqTimNguyenTo");
  let arrUserInput = luuTruDuLieuMang(mangN);
  let soNguyenTo;
  for (let i = 0; i < arrUserInput.length; i++) {
    if (kiemTraSoNguyenTo(arrUserInput[i])) {
      soNguyenTo = arrUserInput[i];
      break;
    }
  }
  theDiv.innerHTML = `<p><i class='fa-solid fa-shuffle me-3'></i>Số nguyên tố tìm thấy đầu tiên là: ${soNguyenTo ? soNguyenTo : 'Không có số nguyên tố nào trong mảng :((('}</p>`;
}

function kiemTraSoNguyenTo(soCanKiemTra) {
  if (soCanKiemTra < 2) {
    return false;
  }
  else {
    if (soCanKiemTra == 2) {
      return true;
    }
    else {
      if (soCanKiemTra % 2 == 0) {
        return false;
      }
    }
  }
  return true;
}

// Bài 9 - Đếm Số nguyên
let arrSoNguyen = [];
let soNguyen = document.getElementById("soNguyen");

function luuTruMangNguyen(arrSoNguyen) {
  return arrSoNguyen;
}

document.getElementById("btnThemNguyen").onclick = function () {
  let theDivDauVao = document.getElementById("kqThemNguyen");
  let soNg = soNguyen.value * 1;
  arrSoNguyen.push(soNg);
  luuTruMangNguyen(arrSoNguyen);
  theDivDauVao.innerHTML = `<p><i class='fa-solid fa-shuffle me-3'></i>${arrSoNguyen}</p>`;
};

document.getElementById("btnDemNguyen").onclick = () => {
  let theDiv = document.getElementById("kqDemNguyen");
  let mangNguyen = luuTruMangNguyen(arrSoNguyen);
  let dem = 0;
  for (item of mangNguyen) {
    if (Number.isInteger(item)) {
      dem += 1;
    }
  }
  theDiv.innerHTML = `<p><i class='fa-solid fa-shuffle me-3'></i>Số Nguyên: ${dem}</p>`;
}







// Bài 10 - So sánh số lượng số âm và số dương
document.getElementById("btnSoSanh").onclick = () => {
  theDiv = document.getElementById("kqSoSanh");
  let dataInput = luuTruDuLieuMang(mangN);
  let soAm = 0;
  let soDuong = 0;
  let chuoiKetQua = "";
  for (let item of dataInput) {
    item > 0 ? soDuong += 1 : soAm += 1;
  }
  if (soDuong > soAm) {
    chuoiKetQua = "số dương > số âm";
  }
  else if (soDuong = soAm) {
    chuoiKetQua = "số dương = số âm";
  }
  else {
    chuoiKetQua = "số âm > số dương";
  }
  theDiv.innerHTML = `<p><i class='fa-solid fa-shuffle me-3'></i>${chuoiKetQua}</p>`;
}
