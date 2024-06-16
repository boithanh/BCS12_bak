// //Thực hiện tạo một mảng chứa tên SV trong trường đại học
let danhSachSinhVien = ["Hoa", "Vân", "Sang", "Nguyên", "Tấn Khải", "Vân"];
// //Lấy độ dài mảng
let doDaiMang = danhSachSinhVien.length;
// console.log(doDaiMang);
// //Lấy phần tử cuối cùng bằng cách lấy dộ dài mảng trừ đi 1 vì index chạy từ 0 và số phần tử mảng chạy từ 1 --> Do đó phải lùi 1 số
// let sinhvienVan = danhSachSinhVien[doDaiMang - 1];
// console.log(sinhvienVan);
// danhSachSinhVien[4] = "Bích";
// console.log(danhSachSinhVien);

let arrNumber = [1, 8, 4, 9];
document.querySelector(".btn-dark").onclick = () => {
  let soN = document.getElementById("soN").value * 1;
  arrNumber.push(soN);
  // Đưa kq lên giao diện
  document.getElementById("ketQua1").innerHTML = arrNumber;

  //Demo phương thức pop
  // let phanTuCuoiMang = arrNumber.pop();
  // console.log(phanTuCuoiMang);
  // console.log(arrNumber);
};

document.querySelector(".btn-success").onclick = () => {
  let tong = 0;
  let dem = 0;
  // for (let i = 0; i < arrNumber; i++) {
  //     tong += arrNumber[i];

  //     console.log(tong);
  // }
  for (let i = 0; i < arrNumber; i++) {
    if (arrNumber[i] % 2 == 0) {
      dem++;
    }
  }
  console.log(dem);
};

//Phương thức indexOf và lastIndexOF
//Trả về phần tử đầu tiên tìm thấy trong mảng
// let vitriNguyen = danhSachSinhVien.indexOf("Vân");
// console.log(vitriNguyen);

// //Trả về phần tử cuối cùng tìm thấy trong mảng
// let viTriVan = danhSachSinhVien.lastIndexOf("Vân");
// console.log(viTriVan);

// TRong mảng phần từ ko có mặc định có giá trị -1, nếu tìm ko thấy sẽ trả về -1
let vitriNguyen = -1;
for (let i = 0; i < danhSachSinhVien; i++) {
  if (danhSachSinhVien[i] == "Nguyên") {
    vitriNguyen = i;
    break; //Có break để khi tìm kiếm thấy giá trị cần tìm sẽ ngưng lại luôn, ko chạy tiếp nửa.
  }
}
console.log(vitriNguyen);

let viTriVan = -1;
for (let i = doDaiMang - 1; i >= 0; i--) {
  if (danhSachSinhVien[i] == "Vân") {
    viTriVan = i;
    break;
  }
}
console.log(viTriVan);

let arrString = ["h", "e", "l", "l", "o"];
let doDaiM = arrString.length;
// let daonguoc = [];
// console.log(arrString.reverse());
// Yêu cầu: đảo ngược độ dài mảng bằng vòng lặp

// for (let i = ddm - 1; i >= 0; i--) {
//     daonguoc.push(daonguoc[i]);

// }
// console.log(daonguoc);

for (let i = doDaiM; i >= 0; i--) {
    // let lastItem = arrString.pop();
    // arrString.unshift(lastItem);
    // console.log(arrString[i]);
    arrString[doDaiM - 1] = arrString[i];
    console.log(arrString[i]);
}


let arrFood = ["Mì Xào", "Mì gõ", "Bánh canh", "cơm tấm", "Bánh cuốn", "Bún bò", "Sủi cảo"];

// console.log(arrFood.soft().reverse());

let arrSode = [1, 9, 11, 34, 45];
console.log(
    arrSode.sort(function (a, b) {
        return b - a;
    })
);

console.log(arrSode.sort((a, b) => b - a));


//Thực hiện chuyện đổi đảo ngược chuỗi hello => olleh
let string = "hello";
// console.log(reverseString(string));
let arrStringConvert = string.split("").reverse().join("");
// function reverseString(string) {
//     return .
// }

console.log(arrStringConvert);

// PHUONG THỨC SLIE GIÚP CẮT RA THÀNH 1 MẢNG MỚI HOẶC CẮT BBOR 1 PHẦN TỬ BẤT KỲ HOẶC THÊM VÀO 1 PHẦN TỬ BẤT KÝ Ở VỊ TRÍ CHIWR ĐỊNH

let arrHocVien = ["Toàn", "Vân", "Đông", "Kiên", "Mai", "Hoàng"];

let newArrHocVien = arrHocVien.slice(0, 4);
console.log(newArrHocVien);
arrHocVien.splice(2, 1);
console.log(arrHocVien
);
arrHocVien.splice(6, 0, "sang", "khải");
console.log(arrHocVien);

let arrSoXo = [1, 98, 4];
let arrSoLo = [5, 1, 56];
let newArrNumber = arrSoXo.concat(arrSoLo);
console.log(newArrNumber);

//Yêu cầu: KH cung cấp 1 mảng các số, trong mảng sẽ có các phần tử bị lặp, loại bỏ ra các phàn tử trung lập

let arrNumberCustom = [1, 45, 21, 3, 67, 45, 53, 98, 21, 67, 1, 143, 678, 67];
// cách 1:
let doDai = arrNumberCustom.length;
let kiemTra = "";
for (let i = 0; i <= doDai; i++) {
    let phanTuNamViTriIndex = arrNumberCustom[i];
    for (let z = i + 1; z <= doDai; z++) {
        {
            if (arrNumberCustom[z] == phanTuNamViTriIndex) {
                //Phần tử nằm ở cị trí z chính là phần tử bị lặp
                arrNumberCustom.splice(z, 1);
            }
        }
    }
}
console.log(arrNumberCustom);

//Cách nâng cao (Ko bị ảnh hưởng hiệu suất vì cách trên chạy 2 vòng lập, nếu Data lướn sẽ rất chậm )

// let object = {};
// for (let i = 0; i < arrNumberCustom.length; i++) {
//     if (object[arrNumberCustom[i]] != arrNumberCustom[i]) {
//         object[arrNumberCustom[i]] = arrNumberCustom[i];
//     }
//     else {
//         arrNumberCustom.splice(i, 1);
//     }
// }



// console.log(arrNumberCustom);


let arrMonAnThai = ["Xôi Xoài", "Tom Yum", "Lẩu Thái", "Sầu riêng", "cơm dứa"];
//for in (Tạo ra một biến chứa vị trí index của các phần tử)
// for (let index in arrMonAnThai) {
//     console.log(arrMonAnThai[index]);
// }
for (let item of arrMonAnThai) {
    console.log(item);
}


arrMonAnThai.forEach(function (item, index) {
    console.log(index);
    console.log(item);
});

let soTien = [15000, 100000, 35000, 87000, 45000];

let newArrSoTien = soTien.filter(function (item, index) {
    return item >= 87000;
});
console.log(newArrSoTien);

//map
let newArrMonAnThai = arrMonAnThai.map(function (item, index) {
    return "Hello " + item;
}
)

let arrInput = document.querySelectorAll("#baiTap2 input #baiTap2 button");
console.log(arrInput);
//Sử dụng vòng lặp để duyệt mảng
for (let dom of arrInput) {
    console.log(dom.id);
}

let arrButtonDark = document.getElementsByClassName("btn-dark");

