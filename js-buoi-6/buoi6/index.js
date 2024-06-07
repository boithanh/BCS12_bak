// // Yêu cầu: Thực hiện hiển thị 20 console.log với các nội dung tôi đang ở quận 1,2,3
// let buocNhay = 1;
// //Xử lý cho vòng lập sẽ có lúc ngưng lại
// while (buocNhay <= 20) {
//     // 4 Xử lý các yêu cầu từ người dùng
//     console.log(`tôi đang ở ${buocNhay}`);

//     // 3 tăng hoặc giảm biến bước nhảy

//     buocNhay++;
// }

//yêu cầu: 

// document.querySelector(".btn-dark").onclick = function () {
//     let dauVao = document.getElementById("soN").value * 1;
//     let index = 1;
//     let tong = 0;
//     // console.log(dauVao);
//     while (index <= dauVao) {
//         if (index % 2 == 0) {
//             tong += index;
//         }
//         index++;
//     }
//     console.log(tong);

//     Theo hiệu suất thì làm cách 1 chạy quá nhiều, để giảm khả năng chạy và nhanh hơn thì làm cách 2
// }

//Cách viết function và gọi function đó qua thao tác click của người dùng
// function tinhTongCacSoChan() {
//     let soN = document.getElementById("soN").value * 1;
//     let tong = 0;
//     let index = 2;
//     while (index <= soN) {
//         tong += index;
//         index += 2;
//     }
//     // console.log(tong);
// }
// document.querySelector(".btn-dark").onclick = tinhTongCacSoChan;

// Lưu ý nếu gọi hàm có dấu ngoặc tròn thì khi load trang sẽ thực thi luôn function mà ko cần đựi ng dùng nhập vào, nếu chỉ gọi tên hàm thì hàm sẽ được gọi khi có thao tác click từ người dùng.


//Bài Tập 2

//Yêu cầu: Đếm xem trong khoảng từ 0 đến 1000 có bao nhiêu số chia hết cho 3;
// let count = 0;
// let i = 0;
// do {
//     //Những hành động xử lý khi vòng lập chạy
//     if (i % 3 == 0) {
//         count++;
//     }
//     //Tăng hoặc giảm bước nhảy
//     i++;
// } while (i <= 1000);
// console.log(count);

// Để cho linh động hơn thì ở phần đk while sẽ thay bàn tham số mà ng dùng nhập vào và ta sẽ viết rieg hàm fuction để thực hiên chức năng kiểm tra và gọi lại nó để sử dụng.

// function demCacSoChiaHetCho3(soN) {
//     let soN = document.getElementById("soN").value * 1;
//     let count = 0;
//     let i = 0;
//     do {
//         //Những hành động xử lý khi vòng lập chạy
//         if (i % 3 == 0) {
//             count++;
//         }
//         //Tăng hoặc giảm bước nhảy
//         i++;
//     } while (i <= soN);
//     console.log(count);
// }
// document.querySelector(".btn-dark").onclick = demCacSoChiaHetCho3(soN);

// Yêu cầu: tạo trên layout 10 thẻ div. Lưu ý các thẻ div nằm ở vị trí lẻ thì sẽ có màu đỏ, còn các thẻ div chẫn thì sẽ có màu xanh nước.

// document.getElementById("baiTap1").innerHTML += "<div class='bg-danger py-3'></div>";
// let content = "";
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 1) {
//         content += "<div class='bg-danger py-3'></div>";
//     }
//     else {
//         content += "<div class='bg-primary py-3'></div>";
//     }
// }
// console.log(content);
// document.getElementById("baiTap1").innerHTML += content;
//cach 2 sử dụng cú phaspncreate element.

let baiTap1 = document.getElementById("baiTap1");
for (let i = 1; i <= 10; i++) {
    let theDiv = document.createElement("div");
    if (i % 2 == 1) {
        theDiv.className = "bg-success py-3"
    }
    else {
        theDiv.className = "bg-primary py-3"
    }
    // Đưa thẻ div lên giao diện
    baiTap1.appendChild(theDiv);
}

//Vòng Lặp Lồng
// let dongNgoiSao = "";
// let ketQua = "";
// for (let i = 1; i <= 30; i++) {
//     ketQua += dongNgoiSao + "<br>";
// }

// document.getElementById("baiTap2").innerHTML = ketQua;
// for (let i = 1; i <= 4; i++) {
//     let dongNgoiSao = "";
//     for (let z = 1; z <= i; z++) {
//         dongNgoiSao += "* ";
//     }
//     ketQua += dongNgoiSao + "<br>";
// }
// document.getElementById("baiTap2").innerHTML = ketQua;


// function

function taoNgoiSaoTamGiac(soDong) {
    let ketQua = "";
    for (let i = 1; i <= soDong; i++) {
        //cos thể truyền tham số vào điều kiện để có thể man=ng đi sử dụng nhiều nơi
        let dongNgoiSao = "";
        for (let z = 1; z <= i; z++) {
            dongNgoiSao += "* ";
        }
        ketQua += dongNgoiSao + "<br>";
    }
    return ketQua;
}

document.getElementById("baiTap2").innerHTML = taoNgoiSaoTamGiac(100);