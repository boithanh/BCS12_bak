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

    console.log("Toi vua an nut tinh tien");
    //Truy xuat va lấy dữ liệu của các input số Km thời gian chờ và loại xe

    let soKm = document.getElementById("txt-km").value * 1; //*1 để ép về kiểu dữ liệu số để tính toán
    let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;
    // let loaiXe = document.getElementsByName("uber-x").checked;

    console.log(soKm);
    console.log(thoiGianCho);
    // console.log(loaiXe);
    // console.log(loaiXe);
    // let loaiXe = document.querySelector("li input:checked");
    // console(loaiXe); --> cách 1
    let loaiXe = document.querySelector("input[type='radio']:checked").value;
    console.log(loaiXe);
    // XỬ lý tìm kiếm giá tiền phù hợp
    let soKmDauTien = tiemKiemGiaTienKmDauTien(loaiXe);
    let soKmTu1Den19 = timKiemGiaTienTu1Den19(loaiXe);
    let soKmTu19TroLen = timKiemGiaTienTu19TroLen(loaiXe);
    let tienThoiGianCho = timKiemGiaTienThoiGianCho(loaiXe);
    console.log(soKmDauTien);
    console.log(soKmTu1Den19);
    console.log(soKmTu19TroLen);
    console.log(tienThoiGianCho);

    let tongTien = 0;
    if (soKm <= 1)
    //nguoi dùng đi khoảng 1km
    {
        tongTien = soKmDauTien * soKm
    }
    //Người dùng đi trong khoảng từ 1 đến 19
    else if (soKm > 1 && soKm <= 19) {
        tongTien = soKmDauTien + (soKm - 1) * soKmTu1Den19
    }
    else {
        //TH3: Người dùng đi trên 19KM
        tongTien = soKmDauTien + 18 * soKmTu1Den19 + (soKm - 19) * soKmTu1Den19
    }

    //BTVN (tính thời gian chờ) 10p ==> (10 - 3) /3 
    //let tongtienthoigiancho

    document.getElementById(divThanhTien).style.display = "black";
    document.getElementById("xuathien").innerHTML = tongTien.toLocaleString
}


document.getElementById("btnInHoaDon").onclick = function () {
    //Thực hiện xử lý tính toán




    document.getElementById("model-body").innerHTML = `  <div
    class="table-responsive"
  >
    <table
      class="table table-primary"
    >
      <thead>
        <tr>
          <th scope="col">Column 1</th>
          <th scope="col">Column 2</th>
          <th scope="col">Column 3</th>
        </tr>
      </thead>
      <tbody>
        <tr class="">
          <td scope="row">R1C1</td>
          <td>R1C2</td>
          <td>R1C3</td>
        </tr>
        <tr class="">
          <td scope="row">Item</td>
          <td>Item</td>
          <td>Item</td>
        </tr>
      </tbody>
    </table>
  </div>`;
    //Gọi đến modal để hiển thị
    $('#myModal').modal('show');
}