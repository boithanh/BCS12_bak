//Tạo 1 số hằng số để quản lí các dữ liệu chuỗi:
const UBER_CAR = "uberCar";
const UBER_SUV = "uberSUV";
const UBER_BLACK = "uberBlack";


let thoiGianCho = document.getElementById("txt-thoiGianCho");

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

function tinhTienDuoi1km(loaiXe, soKm) {
    return tiemKiemGiaTienKmDauTien(loaiXe) * soKm;
}

function tinhTienTu1Den19km(loaiXe, soKm) {
    return tiemKiemGiaTienKmDauTien(loaiXe) + ((soKm - 1) * timKiemGiaTienTu1Den19(loaiXe));
}

function tinhTienTren19km(loaiXe, soKm) {
    return tiemKiemGiaTienKmDauTien(loaiXe) + (18 * timKiemGiaTienTu1Den19(loaiXe)) + ((soKm - 19) * timKiemGiaTienTu19TroLen(loaiXe));
}

function tinhTienTheoThoiGianCho(loaiXe, TGC) {
    if (TGC >= 3) {
        let soLanBiPhatTheoThoiGianCho = Math.floor((TGC - 3) / 3);
        let tongTienPhatThoiGianCho = timKiemGiaTienThoiGianCho(loaiXe) * soLanBiPhatTheoThoiGianCho;
        return tongTienPhatThoiGianCho;
    } else {
        return 0;
    }
}

// function phanRaSoKM(soKm) {
// let chang1=0;
// let chang2=0;
// let chang3=0;
// }


document.getElementById("btnTinhTien").onclick = function () {
    //Truy xuat va lấy dữ liệu của các input số Km thời gian chờ và loại xe
    let soKm = document.getElementById("txt-km").value * 1; //*1 để ép về kiểu dữ liệu số để tính toán

    // let loaiXe = document.getElementsByName("uber-x").checked;
    // console.log(loaiXe);
    // console.log(loaiXe);
    // let loaiXe = document.querySelector("li input:checked");
    // console(loaiXe); --> cách 1
    let loaiXe = document.querySelector("input[type='radio']:checked").value;
    TGC = thoiGianCho.value * 1;

    // XỬ lý tìm kiếm giá tiền phù hợp
    let tienKmDauTien = tiemKiemGiaTienKmDauTien(loaiXe);
    let tienKmTu1Den19 = timKiemGiaTienTu1Den19(loaiXe);
    let tienKmTu19TroLen = timKiemGiaTienTu19TroLen(loaiXe);
    let tienThoiGianCho = timKiemGiaTienThoiGianCho(loaiXe);

    let tongTien = 0;
    if (soKm <= 1)
    //nguoi dùng đi khoảng 1km
    {
        tongTien = tinhTienDuoi1km(loaiXe, soKm);
        console.log(tongTien);
    }
    //Người dùng đi trong khoảng từ 1 đến 19
    else if (soKm > 1 && soKm <= 19) {
        tongTien = tinhTienTu1Den19km(loaiXe, soKm);
        console.log(tongTien);
    }
    else {
        //TH3: Người dùng đi trên 19KM
        tongTien = tinhTienTren19km(loaiXe, soKm);
        console.log(tongTien);
    }

    //BTVN (tính thời gian chờ) 10p ==> (10 - 3) /3 
    let tongCongTatCa = tongTien + tinhTienTheoThoiGianCho(loaiXe, TGC);

    document.getElementById("divThanhTien").style.display = "block";
    document.getElementById("xuatTien").innerHTML = tongCongTatCa.toLocaleString("vi",
        {
            currency: "VND",
            style: "currency"
        }
    )
}


document.getElementById("btnInHoaDon").onclick = function () {
    let loaiXe = document.querySelector("input[type='radio']:checked").value;
    let soKm = document.getElementById("txt-km").value * 1;
    let trangThaiCho = thoiGianCho.value;
    let tongTienCho = tinhTienTheoThoiGianCho(loaiXe, TGC);
    let tongTien = 0;
    let tongCongTatCa = 0;
    let chang1 = 0;
    let chang2 = 0;
    let chang3 = 0;
    let kmDaDi1 = 0;
    let kmDaDi2 = 0;
    let kmDaDi3 = 0;


    if (soKm <= 1) {
        tongTien = tiemKiemGiaTienKmDauTien(loaiXe) * soKm;
        chang1 = tongTien;
        kmDaDi1 = soKm;
        tongCongTatCa = (tongTien + tongTienCho).toLocaleString("vi",
            {
                currency: "VND",
                style: "currency"
            }
        )

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
              <td>${kmDaDi1}</td>
              <td>${tiemKiemGiaTienKmDauTien(loaiXe)}</td>
              <td>${chang1}</td>
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
            <td>${trangThaiCho}</td>
            <td></td>
            <td></td>
          </tr>
            <tr>
              <td colspan="4" scope="row">TỔNG TIỀN: ${tongCongTatCa}</td>
            </tr>
          </tbody>
        </table>
      </div>`;
    }

    else if (soKm > 1 && soKm <= 19) {

        chang1 = tinhTienTu1Den19km(loaiXe, soKm) - ((soKm - 1) * timKiemGiaTienTu1Den19(loaiXe));
        chang2 = tinhTienTu1Den19km(loaiXe, soKm) - chang1;
        kmDaDi1 = 1;
        kmDaDi2 = soKm - kmDaDi1;
        tongTien = (chang1 + chang2);
        tongCongTatCa = (tongTien + tongTienCho).toLocaleString("vi",
            {
                currency: "VND",
                style: "currency"
            }
        )

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
              <td>${kmDaDi1}</td>
              <td>${tiemKiemGiaTienKmDauTien(loaiXe)}</td>
              <td>${chang1}</td>
            </tr>
            <tr>
              <td scope="row">TỪ 1 ĐẾN 19 KM</td>
              <td>${kmDaDi2}</td>
              <td>${timKiemGiaTienTu1Den19(loaiXe)}</td>
              <td>${chang2}</td>
            </tr>
            <tr>
              <td scope="row">TỪ 19KM TRỞ LÊN</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
            <td scope="row">THỜI GIAN CHỜ</td>
            <td>${trangThaiCho}</td>
            <td></td>
            <td></td>
          </tr>
            <tr>
              <td colspan="4" scope="row">TỔNG TIỀN: ${tongCongTatCa}</td>
            </tr>
          </tbody>
        </table>
      </div>`;

    }
    else {
        chang1 = tinhTienTren19km(loaiXe, soKm) - ((18 * timKiemGiaTienTu1Den19(loaiXe)) + ((soKm - 19) * timKiemGiaTienTu19TroLen(loaiXe)));
        chang2 = tinhTienTren19km(loaiXe, soKm) - (tiemKiemGiaTienKmDauTien(loaiXe) + (soKm - 19) * timKiemGiaTienTu19TroLen(loaiXe))
        chang3 = tinhTienTren19km(loaiXe, soKm) - chang1 - chang2;
        kmDaDi1 = 1;
        kmDaDi2 = 18;
        kmDaDi3 = soKm - kmDaDi1 - kmDaDi2;
        tongTien = chang1 + chang2 + chang3;
        tongCongTatCa = (tongTien + tongTienCho).toLocaleString("vi",
            {
                currency: "VND",
                style: "currency"
            }
        )

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
              <td>${kmDaDi1}</td>
              <td>${tiemKiemGiaTienKmDauTien(loaiXe)}</td>
              <td>${chang1}</td>
            </tr>
            <tr>
              <td scope="row">TỪ 1 ĐẾN 19 KM</td>
              <td>${kmDaDi2}</td>
              <td>${timKiemGiaTienTu1Den19(loaiXe)}</td>
              <td>${chang2}</td>
            </tr>
            <tr>
              <td scope="row">TỪ 19KM TRỞ LÊN</td>
            <td>${kmDaDi3}</td>
              <td>${timKiemGiaTienTu19TroLen(loaiXe)}</td>
              <td>${chang3}</td>
            </tr>
            <tr>
            <td scope="row">THỜI GIAN CHỜ</td>
            <td>${trangThaiCho}</td>
            <td></td>
            <td></td>
          </tr>
            <tr>
              <td colspan="4" scope="row">TỔNG TIỀN: ${tongCongTatCa}</td>
            </tr>
          </tbody>
        </table>
      </div>`;
    }
    //so 

    // Thực hiện xử lý Fill các KQ đã tính toán bên trên vào Modal In hóa đơn dưới dạng hóa đơn chi tiết.

    //Gọi đến modal để hiển thị
    $('#exampleModal').modal('show');
}

function printPage() {
    window.print();
}