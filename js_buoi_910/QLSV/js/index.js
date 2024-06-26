/** Các chức năng có trong dự án quản lí sinh viên
 * Thêm Sinh Viên
 * Đưa dữ liệu các sinh viên hiển thị lên bảng
 * Xoá Sinh Viên
 * Chỉnh sửa thông tin sinh viên
 * Reset dữ liệu sinh viên trên form
 * Lưu và lấy dữ liệu được lưu trữ ở localStorage
 * Validation dữ liệu người dùng nhập (Ràng buộc)
 * Tìm kiếm sinh viên
 * Nếu kiểm tra về độ dài, thì sẽ có một chuỗi trong data-validation="doDai"
 * Nếu kiểm tra về email, thì sẽ có một chuỗi trong data-validation="email"
 */
let arrSinhVien = getLocalStorage();
renderArrSinhVien();
// 3 ==> đưa lên giao diện

// getValueSinhVien
function getValueSinhVien() {
  // sử dụng querySelectorAll
  let arrField = document.querySelectorAll("#formQLSV input, #formQLSV select");
  // khởi tạo một đối tượng từ lớp đối tượng SinhVien
  let sinhVien = new SinhVien();
  let isValid = true;
  // Phép toán nhị phân true (1), false(0)
  // true & false ==> 1 & 0 ==> 0(false)
  // true & true ==> 1 & 1 ==> 1 (true)

  for (let field of arrField) {
    // destructuring
    let { value, id } = field; // txtMaSV // txtTenSV
    // thực hiện lấy data-attribute của input
    let dataValidation = field.getAttribute("data-validation");
    console.log(dataValidation);
    sinhVien[id] = value;

    // Thực hiện validation dữ liệu người dùng
    // Thực hiện từ lệnh DOM đang có tới các input và select, sẽ sử dụng phương thức parentElement để DOM tới thẻ cha gần nhất
    let theCha = field.parentElement;
    let theSpanThongBao = theCha.querySelector("span");
    // console.log(theCha.querySelector("span"));

    let isEmpty = checkEmptyValue(value, theSpanThongBao); // true false
    isValid &= isEmpty;
    // xử lí nếu dữ liệu rỗng thì sẽ không xử lí bất kỳ hành động nào bên dưới
    if (!isEmpty) {
      continue;
    }
    // if (id == "txtTenSV") {
    //   isValid &= checkMinMaxValue(value, theSpanThongBao, 6, 10);
    // }
    // if (id == "txtEmail") {
    //   isValid &= checkEmailValue(value, theSpanThongBao);
    // }
    if (dataValidation == "doDai") {
      isValid &= checkMinMaxValue(value, theSpanThongBao, 6, 10);
    } else if (dataValidation == "email") {
      isValid &= checkEmailValue(value, theSpanThongBao);
    }
  }

  // thực hiện kiểm tra nếu isValid mang giá trị false thì return và không trả về sinhVien
  if (!isValid) {
    return;
  }
  return sinhVien;
}

// function dongBoDuLieu() {
//   renderArrSinhVien();
//   saveLocalStorage();
// }

// Thêm Sinh Viên
let formQLSV = document.getElementById("formQLSV");
formQLSV.onsubmit = function (event) {
  event.preventDefault();

  // Thực hiện chạy getValueSinhVien để lấy dữ liệu từ form
  let sinhVien = getValueSinhVien();
  if (!sinhVien) {
    return;
  }

  arrSinhVien.push(sinhVien);
  // lưu trữ mảng đã được thêm 1 phần tử mới vào localStorage
  saveLocalStorage();

  // hiển thị dữ liệu từ mảng lên giao diện
  renderArrSinhVien();
  hienThiThongBao("Thêm sinh viên thành công", 3000, "bg-success");
  // phương thức reset
  formQLSV.reset();
};

// Hiển thị dữ liệu trong mảng lên giao diện
function renderArrSinhVien(arr = arrSinhVien) {
  let content = "";
  for (let sinhVien of arr) {
    // console.log(sinhVien);
    // sinhVien là object đang có dữ liệu và không có phương thức tính điểm trung bình (được cho)
    // newSinhVien được khởi tạo từ lớp đối tượng sinhvien có phương thức nhưng không có dữ liệu (được nhận)
    let newSinhVien = new SinhVien();
    Object.assign(newSinhVien, sinhVien);
    // destructuring
    let { txtMaSV, txtTenSV, txtEmail, txtNgaySinh, khSV } = newSinhVien;
    let diemTrungBinh = newSinhVien.tinhDiemTrungBinh();

    content += `
    <tr>
      <td>${txtMaSV}</td>
      <td>${txtTenSV}</td>
      <td>${txtEmail}</td>
      <td>${txtNgaySinh}</td>
      <td>${khSV}</td>
      <td>${diemTrungBinh.toFixed(2)}</td>
      <td>
        <button onclick="deleteSinhVien('${txtMaSV}')" class="btn btn-danger">Xoá</button>
        <button onclick="getInfoSinhVien('${txtMaSV}')" class="btn btn-warning">Sửa</button>
      </td>
    </tr>
    `;
  }
  document.getElementById("tbodySinhVien").innerHTML = content;
}

// Thực hiện lưu trữ localStorage
// [] ==> ["a"] ==> ["a","b"] ==>
function saveLocalStorage(key = "arrSinhVien", value = arrSinhVien) {
  let stringJson = JSON.stringify(value);
  localStorage.setItem(key, stringJson);
}

// Thực hiện lấy dữ liệu từ localStorage
function getLocalStorage(key = "arrSinhVien") {
  // lấy dữ liệu từ localStorage lên
  let dataLocal = localStorage.getItem(key);
  // convert từ chuỗi JSON về object
  let newDataLocal = JSON.parse(dataLocal);
  console.log(newDataLocal);
  // if (newDataLocal) {
  //   return newDataLocal;
  // } else {
  //   return [];
  // }
  return newDataLocal ? newDataLocal : [];
}

// Xoá sinh viên
function deleteSinhVien(mssv) {
  // findIndex ==> index ==> -1
  // find ==> item ==> undefined
  console.log(mssv);
  // tìm kiếm vị trí index của phần tử cần xoá
  let index = arrSinhVien.findIndex((item, index) => {
    // ==> Object
    return item.txtMaSV == mssv;
  });
  if (index != -1) {
    arrSinhVien.splice(index, 1);
    renderArrSinhVien();
    saveLocalStorage();
    hienThiThongBao("Xoá sinh viên thành công", 3000, "bg-danger");
  }
  console.log(arrSinhVien);
  // sử dụng hàm splice để xoá phần tử khỏi mảng
}

// Lấy thông tin sinh viên
function getInfoSinhVien(mssv) {
  console.log(mssv);
  // let sinhVien ==> find
  // đưa dữ liệu lên các input của form
  let sinhVien = arrSinhVien.find((item, index) => {
    return item.txtMaSV == mssv;
  });
  if (sinhVien) {
    // thao tác đưa dữ liệu lên giao diện
    let arrField = document.querySelectorAll(
      "#formQLSV input, #formQLSV select"
    );
    for (let item of arrField) {
      let { id } = item; // txtMaSV
      item.value = sinhVien[id];
      if (id == "txtMaSV") {
        item.readOnly = true;
      }
    }
    // dom tới input có id txtMaSV và thực hiện ngăn chặn chỉnh sửa
    // document.getElementById("txtMaSV").readOnly = true;
  }
}

// cập nhật sinh viên
// Thực hiện tạo một lệnh DOM tới button cập nhật và gắn hàm updateSinhVien
function updateSinhVien() {
  // thực hiện xử lí lấy dữ liệu từ form (coi lại xử lí thêm sinh viên) ==> nhìn thử thêm sinh viên và update có gì giống nhau ? ==> có thể tách hàm không
  let sinhVien = getValueSinhVien();
  if (!sinhVien) {
    return;
  }
  // tìm kiếm vị trí của phần tử đang cần chỉnh sửa trong mảng ==> findIndex
  let index = arrSinhVien.findIndex((item, index) => {
    return item.txtMaSV == sinhVien.txtMaSV;
  });
  if (index != -1) {
    arrSinhVien[index] = sinhVien;
  }
  // arrSinhVien[index] = newSinhVien
  // chạy lại render và động bộ dữ liệu với localStorage
  renderArrSinhVien();
  saveLocalStorage();
  formQLSV.reset();
  document.getElementById("txtMaSV").readOnly = false;
  // cho phép input mã SV được thực hiện nhập dữ liệu
}

// Xử lí khi hàm cần truyền tham số
// document.querySelector(".btn-info").onclick = function () {
//   updateSinhVien("abc");
// };

document.querySelector(".btn-info").onclick = updateSinhVien;

// Xử lí thông báo
function hienThiThongBao(text, duration, className) {
  Toastify({
    text,
    className,
    duration,
    // destination: "https://github.com/apvarun/toastify-js",
    // newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    // style: {
    //   // background: "linear-gradient(to right, #00b09b, #96c93d)",
    //   background: "red",
    // },
    backgroundColor: "orange",
  }).showToast();
}

// Tìm kiếm sinh viên
document.getElementById("txtSearch").oninput = function (event) {
  // console.log(event.target.value); // â ==> a
  // sản phẩm = "Nồi cơm điện" ==> "Noi com dien" ==> 'noi com dien'
  // keyword = '   noi com dien   ' ==> "   noi com dien   " ==> 'noi com dien'
  let newKeyWord = removeVietnameseTones(event.target.value)
    .trim()
    .toLowerCase();
  // console.log(newKeyWord);
  // includes "noi com dien" | "dien"
  // console.log("noi com dien".includes("di")); // true | false
  // tên sản phẩm .includes(newKeyWord) ==> true | false
  let arrFilter = arrSinhVien.filter((item, index) => {
    let newTenSV = removeVietnameseTones(item.txtTenSV).trim().toLowerCase();
    return newTenSV.includes(newKeyWord);
  });
  renderArrSinhVien(arrFilter);
};

// // Các phương thức tương tác với localStorage
// // Phương thức thêm dữ liệu vào localStorage
// let sinhVienLam = {
//   hoTen: "Lâm Trần",
//   tuoi: 22,
// };
// // Trước khi lưu trữ dữ liệu object cần chuyển đổi dữ liệu về một chuỗi JSON
// let sinhVienLamJSON = JSON.stringify(sinhVienLam);
// // tham số đầu tiên đại diện cho key cần lưu trữ
// // tham số thứ 2 sẽ là giá trị cần lưu trữ
// // localStorage.setItem("hoTen", sinhVienLamJSON);

// let arrNumber = [21, 45, 33];
// let arrNumberJSON = JSON.stringify(arrNumber);
// // yêu cầu : thực hiện lưu trữ mảng arrNumber ở localstorage với tên key là arrNumber
// localStorage.setItem("arrNumber", arrNumberJSON);

// // Phương thức lấy dữ liệu từ localStorage
// let localLam = localStorage.getItem("hoTen");
// let convertLocalLam = JSON.parse(localLam);
// console.log(convertLocalLam);

// // Phương thức xoá dữ liệu từ localStorage
// localStorage.removeItem("arrNumber");
