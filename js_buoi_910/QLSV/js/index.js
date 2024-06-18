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
// Thêm Sinh Viên
let formSV = document.getElementById("formQLSV");
let arrSinhVien = getLocalStorage();
renderArrSinhVien();
formSV.onsubmit = function (event) {
  event.preventDefault();
  // console.log("tô là submit");
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
  arrSinhVien.push(sinhVien);
  //Lưu trữ mảng đã được thêm một phần tử mới vào localStorage
  saveLocalStorage();
  // console.log(arrSinhVien);
  renderArrSinhVien(arrSinhVien);
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
    console.log(newSinhVien);
    let diemTrungBinh = newSinhVien.tinhDiemTrungBinh();
    content += `<tr>
              <td>${txtMaSV}</td>
              <td>${txtTenSV}</td>
              <td>${txtEmail}</td>
              <td>${txtNgaySinh}</td>
              <td>${khSV}</td>
              <td>${diemTrungBinh.toFixed(2)}</td>
              <td><button></button></td>
              <td></td>
              
            </tr>
            `
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



