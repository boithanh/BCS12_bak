console.log("Hello BCS12 EXternal file");
// -------Biến ( variable )--------------
// Ten bien ko băt dau bang so
// Ten bien khong co khoang cach hoac ky tu dac biet
// Luu y dat ten bien phai co y nghia
// vd:
let hoTen = "Boi Thanh";
console.log(hoTen);

// Không sử dụng var để khai báo biến vì 1 số nguyên nhân: 
// Do var không thông báo rõ ràng về việc biến chưa đc khởi tạo mà sử dụng + Với việc var có thể tạo nhiều biến giống tên nhau. Sẽ bị ghi đè biến nếu code chung 1 dự án mà nhiều người đặt tên giống nhau trong khi Let tạo ra 1 biến duy nhất, ko được tạo lần 2.

// ---------------Kiểu dữ liệu----------------
let tenSinhVien = "Đông Trần"; // Kiểu dữ liệu chuỗi
let namSinh = 2000; //Kiểu dữ liệu số tuyệt đối ko có số 0 ở đầu, nếu có nó sẽ là dạng chuỗi bắt buột có dấu ngoặc kép
namSinh = 2002;
console.log(namSinh);

// ------------------Toán Tử (Operator)-----------------------
let diemTrungBinh = (9 + 8) / 2;
console.log(diemTrungBinh);
let tienTietKiem = 30 + "40"; //Lưu ý việc tính toán chỉ bằng dữ liệu số vs nhau nếu là chuỗi và số nó sẽ nối thành 1 chuỗi dài --> Sai kết quả tính toán

console.log(typeof tienTietKiem); //Typeof Được dùng kiểm tra dữ liệu trước khi đưa vào tính toán để đảm bảo tính chính xác

let bienSoA = 15 % 2; // --> 1  Phép chia lấy phần dư dùng %

// 365 --> 14 Muốn lấy hàng đơn vị thì lấy 365 chia lấy dư  cho 10. Còn lấy hàng chục thì chia 100.

let diemToanKien = 2;
//Phép tăng (++)
diemToanKien++;
console.log(diemToanKien); //Kết quả là 3 do đã được +1 vào
//Phép giảm (--);
diemToanKien--;
console.log(diemToanKien);

let diemVan = 8;
let diemSu = 3;
let tong = ++diemVan + diemSu++ // tong=20 dấu cộng ở trước và sau sẽ cho ra kq khác nhau

let tongTienMonAn = 50000;
tongTienMonAn = tongTienMonAn + 10000;
console(tongTienMonAn);
// Phép gán += giúp rút ngắn dòng lệnh đài dòng ở dòng 43
tongTienMonAn += 10000;
// Có thể tạo nhanh dòng Consolog bằng cách cài Extention: ES7 trên VScode






