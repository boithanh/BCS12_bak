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