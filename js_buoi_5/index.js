// "Điện thoại samsung" --> dien thoại samsung. includes
//dien thoai

//Thực hiện tính toán về giá trịn món ăn
//Giá món, số lượng món ăn.


function tinhTienMonAn(giaMon, soLuongMonAn = 10) {
    // let giaMua = 35000;
    // let soLuongMonAn = 10;
    // console.log(giaMon);
    // console.log(soLuongMonAn);
    // Đầu tiên khi console ra sẽ báo lỗi do tham số truyền vào chwua đc khởi tạo nên undefine

    let tongTien = giaMon * soLuongMonAn;
    // console.log(tongTien);
    // return tongTien;
    //Trả về kq cho hàm ko cần consolog vì coslolelog chỉ dùng để hiển thị thông tin.
    // Thường trong hàm sẽ chỉ có 1lệnh return nếu có nhiều thì doc có cấu trúc rẽ nhánh
    if (tongTien > 900000) {
        return ("giá món ăn đắt quá");
    }
    else {
        return ("Giá món ăn rẻ quá");
    }
}

// Cách thực thi Hàm
// tinhTienMonAn();
//Sủi cảo --> 50000, 15

tinhTienMonAn(50000, 12);
// tinhTienMonAn(15000, 20);
// nếu sử lý trong thực tế thì nếu có 400 món thì phải nhập vào tham số rất nhiều, thậm chí có khách ko gửi dữ liệu món hoặc dữ liệu giá tiền --> Nhưu vậy sẽ bị lỗi khi thực thi. cách giải quyết bên dưới :

//Default Parameter (ES6)
// Tính toán số tiền làm trong tuần
//Số giờ làm
//Tiền lương nhân viên
//Hệ số lương ==> nhân viên (1) ==> trưởng phòng (1.5) ==> giám đốc (2)
//Function liieral: Ko có cơ chế hosting như khi viết hàm function bình thường
//cơ chế hosting: KHi bạn khởi tạo 1 hàm, trong hàm có biến đó, những phần tử gọi biến đó ở trc hàm vẫn chạy mà ko bị undefine do cơ chế này mang biến đi lên đầu file để sử dụng

let tinhTienLuongTrongTuan = function (soGioLam, soTienLuong, heSoLuong = 1) {
    return soGioLam * soTienLuong * heSoLuong;
}
let nhanVienSang = tinhTienLuongTrongTuan(40, 150000);
console.log(nhanVienSang);

// Arrow Function
// Tạo một thẻ div có nội dung hello buổi sáng T7 ở trên giao diện
let renderNoiDung = () => {
    return (document.querySelector("body")).innerHTML = "<div class='bg-danger text-white'>Hello buổi sag thứ 7</div";
}
renderNoiDung();


//Tính điểm trung bình cho môn toán và lý
let diemToan = 9;
let diemLy = 10;
// let tinhDiemHaiMon = (toan, ly) => {
//     return (toan + ly) / 2
// }
// Cách viết rút gọn: let bienTaora = bienThamso => tinhToan
// Nếu có tham số sẵn thì phải dặt trong dấu ngoặc tròn như bên dưới
let tinhDiemHaiMon = (toan = 9) => toan / 2;
let diemCuaLam = tinhDiemHaiMon(diemToan, diemLy);
console.log(diemCuaLam);
