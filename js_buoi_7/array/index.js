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

}

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
for (let i = doDaimang - 1; i >= 0; i--) {
    if (danhSachSinhVien[i] == "Vân") {
        viTriVan = i;
        break;
    }
}
console.log(viTriVan);
