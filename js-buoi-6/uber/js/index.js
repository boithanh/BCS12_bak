//Tạo 1 số hằng số để quản lí các dữ liệu chuỗi:
const UBER_CAR = "uberCar";
const UBER_SUV = "uberSUV";
const UBER_BLACK = "uberBlack";

function tiemKiemGiaTienKmDauTien(loaiXe) {
    switch (loaiXe) {
        case UBER_CAR: {
            return 8000;
        }
        case UBER_SUV: {
            return 9000;
        }
        case UBER_BLACK: {
            return 10000;
        }
    }
}

function timKiemGiaTienTu1Den19(loaiXe) {
    switch (loaiXe) {
        case UBER_CAR: {
            return 7500;
        }
        case UBER_SUV: {
            return 8500;
        }
        case UBER_BLACK: {
            return 9500;
        }
    }
};

function timKiemGiaTienTu19TroLen(loaiXe) {
    switch (loaiXe) {
        case UBER_CAR: {
            return 7000;
        }
        case UBER_SUV: {
            return 8000;
        }
        case UBER_BLACK: {
            return 9000;
        }
    }
};
function timKiemGiaTienThoiGianCho(loaiXe) {
    switch (loaiXe) {
        case UBER_CAR: {
            return 2000;
        }
        case UBER_SUV: {
            return 3000
        }
        case UBER_BLACK: {
            return 3500
        }
    }
};
document.getElementById("btnTinhTien").onclick = function () {
    //Truy xuat va lấy dữ liệu của các input số Km thời gian chờ và loại xe
    let soKm = document.getElementById("txt-km").value * 1; //*1 để ép về kiểu dữ liệu số để tính toán
    let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;
    // let loaiXe = document.getElementsByName("uber-x").checked;
    // console.log(loaiXe);
    // console.log(loaiXe);
    // let loaiXe = document.querySelector("li input:checked");
    // console(loaiXe); --> cách 1
    let loaiXe = document.querySelector("input[type='radio']:checked").value;

    // XỬ lý tìm kiếm giá tiền phù hợp
    let tienKmDauTien = tiemKiemGiaTienKmDauTien(loaiXe);
    let tienKmTu1Den19 = timKiemGiaTienTu1Den19(loaiXe);
    let tienKmTu19TroLen = timKiemGiaTienTu19TroLen(loaiXe);
    let tienThoiGianCho = timKiemGiaTienThoiGianCho(loaiXe);
    console.log(thoiGianCho);

    let tongTien = 0;
    if (soKm <= 1)
    //nguoi dùng đi khoảng 1km
    {
        tongTien = tienKmDauTien * soKm;
    }
    //Người dùng đi trong khoảng từ 1 đến 19
    else if (soKm > 1 && soKm <= 19) {
        tongTien = tienKmDauTien + ((soKm - 1) * tienKmTu1Den19);
    }
    else {
        //TH3: Người dùng đi trên 19KM
        tongTien = tienKmDauTien + (18 * tienKmTu1Den19) + ((soKm - 19) * tienKmTu19TroLen);
    }

    //BTVN (tính thời gian chờ) 10p ==> (10 - 3) /3 
    let soLanBiPhatTheoThoiGianCho = Math.floor((thoiGianCho - 3) / 3);
    let tongTienPhatThoiGianCho = tienThoiGianCho * soLanBiPhatTheoThoiGianCho;
    let tongCongTatCa = tongTien + tongTienPhatThoiGianCho;
    document.getElementById("divThanhTien").style.display = "block";
    document.getElementById("xuatTien").innerHTML = tongCongTatCa.toLocaleString("vi",
        {
            currency: "VND",
            style: "currency"
        }
    )
    let tongTiennHoaDon = () => {
        return tongCongTatCa;
    }

}



document.getElementById("btnInHoaDon").onclick = function () {

    //Thực hiện xử lý tính toán



    // Thực hiện xử lý Fill các KQ đã tính toán bên trên vào Modal In hóa đơn dưới dạng hóa đơn chi tiết.
    document.getElementById("modal-body").innerHTML = `<div class="table-responsive py-5">
    <table class="table table-primary hoa-don-ne">
      <thead>
        <tr>
          <th colspan=" 4" scope="col">CHI TIẾT HÓA ĐƠN</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="row">CHI TIẾT</td>
          <td>SỬ DỤNG</td>
          <td>ĐƠN GIÁ(1000đ)</td>
          <td>THÀNH TIỀN(1000đ)</td>
        </tr>
        <tr>
          <td scope="row">KM ĐẦU TIÊN</td>
          <td></td>
          <td>TÙY THEO LOẠI GRAB</td>
          <td></td>
        </tr>
        <tr>
          <td scope="row">TỪ 1 ĐẾN 19 KM</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td scope="row">TỪ 19KM TRỞ LÊN</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
        <td scope="row">THỜI GIAN CHỜ</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
        <tr>
          <td colspan="4" scope="row">TỔNG TIỀN</td>
        </tr>
      </tbody>
    </table>
  </div>`;
    //Gọi đến modal để hiển thị
    $('#exampleModal').modal('show');
}

function printPage() {
    window.print();
}