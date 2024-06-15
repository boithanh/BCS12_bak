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
let arrSinhVien = [];
formSV.onsubmit = function (event) {
  event.preventDefault();
  console.log("tô là submit");
  let arrField = document.querySelectorAll("#formQLSV input, #formQLSV select");
  //   console.log(arrField);
  let sinhVien = new SinhVien();
  for (let field of arrField) {
    // có thể lấy value (giá trị) hoặc id của input  hoặc nhiều thứ khác
    // console.log(field.value);
    let { value, id } = field;
    sinhVien[id] = value;
  }
  arrSinhVien.push(sinhVien);
  console.log(arrSinhVien);
  formSV.reset();
};
