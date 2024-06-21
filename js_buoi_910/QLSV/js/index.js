/** Các chức năng có trong dự án quản lí sinh viên
 * Thêm Sinh Viên
 * Đưa dữ liệu các sinh viên hiển thị lên bảng
 * Xoá Sinh Viên
 * Chỉnh sửa thông tin sinh viên
 * Reset dữ liệu sinh viên trên form
 * Lưu và lấy dữ liệu được lưu trữ ở localStorage
 * Validation dữ liệu người dùng nhập (Ràng buộc)
 * Tìm kiếm sinh viên
 *
 */

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

let formSV = document.getElementById("formQLSV");
let arrSinhVien = getLocalStorage();

function getValueSinhVien() {
  let arrField = document.querySelectorAll("#formQLSV input, #formQLSV select");
  //   console.log(arrField);
  //Khởi tạo một đối tượng, từ lớp đối tượng sinh viên 
  let sinhVien = new SinhVien();
  for (let field of arrField) {
    // có thể lấy value (giá trị) hoặc id của input  hoặc nhiều thứ khác
    // console.log(field.value);
    let { value, id } = field;
    sinhVien[id] = value;
  }
  return sinhVien;
}

//*************Tối ưu
//hàm rendersinhvien và saveLocal stograte sử dụng  nhiều, có thể tạo 1 hàm mới đồng bộ dữ liệu để thực hien

// Thêm Sinh Viên

renderArrSinhVien();
formSV.onsubmit = function (event) {
  event.preventDefault();
  // console.log("tô là submit");
  let sinhVien = getValueSinhVien();
  arrSinhVien.push(sinhVien);
  //Lưu trữ mảng đã được thêm một phần tử mới vào localStorage
  saveLocalStorage();
  // console.log(arrSinhVien);
  renderArrSinhVien(arrSinhVien);
  hienThiThongBao("Thêm sinh viên thành công", 3000, "bg-success");
  //Phwuong thức reset
  formSV.reset();
};

//Hiển thị dữ liệu trong mảng lên giao diện
function renderArrSinhVien(arr = arrSinhVien) {
  let content = "";
  for (let sinhVien of arr) {
    // sinhVien là object đang có dữ liệu và không có phương thức tính điểm trung bình (được cho) do local chỉ lưu trử thuộc tính mà ko lưu trữ phuong thức --> khi reload lại trang sẽ ko có dữ liệu tính điểm trung bình
    //newSinhVien được khởi tạo từ lớp đối tượng  sinhVien có phương thức nhưng không có dữ liệu
    let newSinhVien = new SinhVien();
    Object.assign(newSinhVien, sinhVien)
    //destructuring
    let { txtEmail, txtMaSV, txtNgaySinh, txtTenSV, khSV } = sinhVien;
    // console.log(newSinhVien);
    let diemTrungBinh = newSinhVien.tinhDiemTrungBinh();
    content += `<tr>
              <td>${txtMaSV}</td>
              <td>${txtTenSV}</td>
              <td>${txtEmail}</td>
              <td>${txtNgaySinh}</td>
              <td>${khSV}</td>
              <td>${diemTrungBinh.toFixed(2)}</td>
              <td> <button onclick="deleteSinhVien('${txtMaSV}')" class="btn btn-warning">Xoa</button></td>
              <td><button onclick="getInfoSinhVien('${txtMaSV}')" class="btn btn-dark">Sua</button></td>
              
            </tr>
            `
    //Chỗ này lưu ý: Phần biến txtMaSV khi gán vào theo phương thức này  phải thêm dấu nháy đơn bao xung quanh để nó biết đó là biến vì phía ngoài đã có dấu kép, nó sẽ tưởng là chuỗi bth --> Báo lỗi hàm
    // sau khi bốc tách thì thay thế sinhvien.txtmaSV thành ddooois tượng txtsV
  }
  document.getElementById("tbodySinhVien").innerHTML = content;
}

//Thực hiện lưu trữ localStogare
// [] => ["a"] => ["a","b"] ==> Lấy dữ liệu mới nhất sau khi thêm phần tử vào mảng xuống local storage
function saveLocalStorage(key = "arrSinhVien", value = arrSinhVien) {
  let strJson = JSON.stringify(value);
  localStorage.setItem(key, strJson); // Setitem Local storage nhớ để thêm key
}



function getLocalStorage(key = "arrSinhVien") {
  // Lấy dữ liệu từ localStorage lên
  let dataLocal = localStorage.getItem(key);
  //convert từ chuỗi json về object
  let newDatalocal = JSON.parse(dataLocal);
  // console.log(newDatalocal);
  // if (newDatalocal) { arrSinhVien = newDatalocal; }
  return newDatalocal ? newDatalocal : [];
}

function deleteSinhVien(masv) {
  // console.log(sv.masv);
  //Tìm kiếm vị trí index của phần tử cần xóa
  //Sử dụng hàm splice  để xóa phần tử khỏi mảng
  let index = arrSinhVien.findIndex((item, index) => {
    //Object
    return item.txtMaSV == masv;
  });
  if (index != -1) {
    arrSinhVien.splice(index, 1);
    renderArrSinhVien();
    saveLocalStorage();
  }
  console.log(arrSinhVien);
}

//Lấy thông tin sinh viên
function getInfoSinhVien(masv) {
  console.log(masv);
  //let sinhVien=> find
  //Đưa dữ liệu lên các input của form
  let sinhVien = arrSinhVien.find((item, index) => {
    //Object
    return item.txtMaSV == masv;
  });
  if (sinhVien) {
    //Thao tác đưa dữ liệu lên giao diện  (cụ thể là Các Input)
    let arrField = document.querySelectorAll("#formQLSV input, #formQLSV select");
    // console.log(arrField);
    for (let item of arrField) {
      let { id } = item; //txtmaSv
      item.value = sinhVien[id];

      if (id == "txtMaSV") {
        item.readOnly = true;
      }
    }
  };
}
// Cập nhật sinh viên
//Thực hiện tạo một lệnh DOM tới button cập nhật và gắn hàm updateSinhVien
// function updateSinhVien() {
//   //Thực hiện xử lý dữ lijeu từ form  (coi lại xử lý thêm Sinh viên) => nhìn thửu thêm sinh viên và update có gì giống nhau? ++> có thể tách hàm không?
//   // Tìm kiếm vị trí của phàn tử  đang cần chỉnh sửa trong mảng ==> findINdex
//   //a
//   //arrSinhVien[index]=newSinhVien
//   //chạy lại render và đồng bộ dữ liệu với localStorage
//   //Cho phép Input mã SV được thực hiện nhập dữ liệu

//   let sinhvien = getValueSinhVien();
//   let index = arrSinhVien.findIndex((item, index) => {
//     //Object
//     return item.txtMaSV == sinhvien.masv;
//   });
//   if (index != -1) {
//     arrSinhVien[index] = sinhvien;
//     renderArrSinhVien();
//     saveLocalStorage();
//   }

// }
// KhAI
function updateSinhVien(event) {
  event.preventDefault();

  // thực hiện xử lí lấy dữ liệu từ form (coi lại xử lí thêm sinh viên) ==> nhìn thử thêm sinh viên và update có gì giống nhau ? ==> có thể tách hàm không
  let sinhVien = getValueSinhVien();
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
  formSV.reset();
  document.getElementById("txtMaSV").readOnly = false;
  // cho phép input mã SV được thực hiện nhập dữ liệu
}
// Xử lý khi hàm caaf truyền tham số
// document.querySelector(".btn-info").onsubmit = function (event) {
//   event.preventDefault();
//   updateSinhVien(masv);
// }
document.querySelector(".btn-info").onclick = updateSinhVien;


//các phương thức tương tác với : localStorate
// Phương thức thêm dữ liệu vào localStogate
// let sinhVienLam = {
//   hoTen: "Lâm Trần",
//   tuoi: 22
// }

// // Trước khi lưu trữ dữ liệu object cần chuyển đổi dữ liệu về một chuỗi JSON
// let sinhVienLamJSON = JSON.stringify(sinhVienLam);
// // tham số đầu tiên đại diện cho key cần lưu trữ
// // tham số thứ 2 sẽ là giá trị cần lưu trữ
// localStorage.setItem("hoTen", sinhVienLamJSON);

// let arrNumber = [21, 45, 33];
// // yêu cầu : thực hiện lưu trữ mảng arrNumber ở localstorage với tên key là arrNumber

// let arrNumberJson = JSON.stringify(arrNumber);

// //Nhớ lưu đúng dữ liệu là arrNumberJson (Phải chuyển đổi về kiểu Json trước khi gắn vào object nếu ko sẽ ra dạng chuỗi -> sai)
// // localStorage.setItem("arrNumber", arrNumberJson);


// //Phương thức lấy dữ liệu từ localStorage
// let localLam = localStorage.getItem("hoTen");
// console.log(localLam.hoTen);
// let convertLocalLam = JSON.parse(localLam);
// console.log(convertLocalLam);

// //Phương thức xóa dữ liệu từ localStorage
// localStorage.removeItem("so"); 



