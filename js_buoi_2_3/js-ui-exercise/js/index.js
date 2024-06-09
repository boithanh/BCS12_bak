
window.onload = function () {
    document.querySelector(".block_item:last-child").classList.add("light-way");
}

function giaoDienTrang() {

    let kq = document.querySelector(".kq");
    let xoayXoay = document.querySelector(".shuriken");
    xoayXoay.classList.add("xoay");
    xoayXoay.style.background = "white";
    kq.style.border = "2px dashed white";
}



//Bài Tập 1
document.getElementById("frmBaiTap1").onsubmit = function (event) {
    // console.log("Ta la nut tinh luong");
    event.preventDefault();
    let luong1Ngay = document.getElementById("luong1Ngay").value;
    let soNgayLam = document.getElementById("soNgayLam").value;
    let soTienLuong = document.getElementById("soTienLuong");
    if (luong1Ngay <= 0 || soNgayLam <= 0) {
        alert("Bạn chưa nhập liệu");
    }
    else {
        soTienLuong.innerHTML = tinhTienLuong(luong1Ngay, soNgayLam);
        giaoDienTrang();
        event.target.reset();
    }
}

function tinhTienLuong(luong1Ngay, soNgayLam) {
    let tongTien = luong1Ngay * soNgayLam;
    return tongTien;
}

//Bài tập 2
document.getElementById("frmBaiTap2").onsubmit = function (event) {
    // console.log("Ta la nut tinh diem trung binh");
    event.preventDefault();
    let soThuNhat = document.getElementById("soThuNhat").value * 1;
    let soThuHai = document.getElementById("soThuHai").value * 1;
    let soThuBa = document.getElementById("soThuBa").value * 1;
    let soThuTu = document.getElementById("soThuTu").value * 1;
    let soThuNam = document.getElementById("soThuNam").value * 1;
    let trungBinh = document.getElementById("trungBinhCong");
    if (soThuNhat <= 0 || soThuHai <= 0 || soThuBa <= 0 || soThuTu <= 0 || soThuNam <= 0) {
        alert("Bạn chưa nhập liệu!");
    }
    else {
        trungBinh.innerHTML = trungBinhCong(soThuNhat, soThuHai, soThuBa, soThuTu, soThuNam);
        event.target.reset();
    }


}

function trungBinhCong(soThuNhat, soThuHai, soThuBa, soThuTu, soThuNam) {
    let diemTB = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam) / 5;
    return diemTB;
}
//Bài Tập 3 - Quy đổi tiền
const TYGIAUSD = 23500;

document.getElementById("frmBaiTap3").onsubmit = function (event) {
    event.preventDefault();
    let tienCanQuyDoi = document.getElementById("tienCanQuyDoi").value * 1;
    let theHtml = document.getElementById("soTienQuyDoi");
    if (tienCanQuyDoi <= 0) {

        alert("bạn chưa nhập liệu");
    }
    else {
        theHtml.innerHTML = quyDoiTien(tienCanQuyDoi).toLocaleString("vi", {
            style: "currency",
            currency: "VND",
        });
        event.target.reset();
    }
}

function quyDoiTien(tienCanQuyDoi) {
    let tienDaQuyDoi = parseInt(tienCanQuyDoi * TYGIAUSD);
    return tienDaQuyDoi;
}

//Bài tạp 4 - Tính diện tích chu vi 

const DIENTICH = "dienTich";
const CHUVI = "chuVi";

function tinhDienTich(chieuDai = 0, chieuRong = 0) {
    let dienTich = chieuDai * chieuRong;
    return dienTich;
}

function tinhChuVi(chieuDai = 0, chieuRong = 0) {
    let chuVi = (chieuDai + chieuRong) * 2;
    return chuVi;
}

document.getElementById("frmBaiTap4").onsubmit = function (event) {
    event.preventDefault();
    let chieuDai = document.getElementById("chieuDai").value * 1;
    let chieuRong = document.getElementById("chieuRong").value * 1;
    let selectBox = document.getElementById("chucNang");
    let chucNang = selectBox.value;
    let theP = document.getElementById("kqPhepTinh");
    console.log(chucNang);

    switch (chucNang) {
        case DIENTICH: {
            return theP.innerHTML = tinhDienTich(chieuDai, chieuRong);
            break;
        }
        case CHUVI: {
            return theP.innerHTML = tinhChuVi(chieuDai, chieuRong);
            break;
        }
        default: {
            theP.innerHTML = "Bạn chưa chọn chức năng, vui lòng chọn và thử lại nhé!!"
        }
    }
}

//Bài 5 - Tổng của 2 ký số


document.getElementById("frmBaiTap5").onsubmit = function (event) {
    event.preventDefault();
    let soHaiChuSo = document.getElementById("soHaiChuSo").value * 1;
    let htmlKySo = document.getElementById("tongKySo");
    let soHangChuc = (soHaiChuSo, tinhToan) => {
        tinhToan = parseInt(soHaiChuSo / 10);
        if (tinhToan <= 9 && tinhToan > 0) {
            return tinhToan;
        }
        else {
            return "Sai Số";
        }
    }
    let soHangDonVi = (soHaiChuSo) => {
        return soHaiChuSo % 10;
    }
    if (Number.isInteger(soHangChuc(soHaiChuSo)) == true) {
        let kqKySo = soHangChuc(soHaiChuSo) + soHangDonVi(soHaiChuSo);
        htmlKySo.innerHTML = kqKySo;
    }
    else (
        htmlKySo.innerHTML = "Bạn vừa nhập số lớn hơn hoặc nhỏ hơn 2 chữ số"
    )
    event.target.reset();
}







