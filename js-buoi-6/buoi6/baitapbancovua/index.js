//Yeeu cầu bài tập bàn cờ vua: thực hiện viết một chức năng (function) xử lí tạo ra layout một bàn cờ vua với 8 cột và 8 dòng
// saukhi hoàn thành chức năng , xử lý dữ liệu động cho function để có thể tạo giao diện phù hợp với số cột và số dofngddc cung cấp từ người dùng

let baiTap = document.getElementById("baiTapBanCoVua");

// function taoO() {

// }
function renderBanCoVua(soCot = 0, soDong = 0) {

    let oTrang = "<div class='oTrang'></div";
    let oDen = "<div class='oDen'></div";
    let dong = "";

    for (let z = 1; z <= 8; z++) {
        for (let i = 1; i <= 8; i++) {
            //Taạo cột cho dòng lẻ
            if (z % 2 == 1) {
                if (i % 2 == 1) {
                    dong += oTrang;
                }
                else {
                    dong += oDen;
                }
                //  i%2==1?(dong+=oTrang):(dong+=oDen);
            }
            // Tạo cột cho dòng chẵn
            else {
                if (i % 2 == 1) {
                    dong += oDen;
                }
                else {
                    dong += oTrang;
                }
                i % 2 == 1 ? (dong += oDen) : (dong += oTrang);
            }
            baiTap.innerHTML += dong;
        }
    }
    //Thực hiện thêm HTML lên giao diện
    ketQua += `<div>${dong}</div>`;
    return ketQua;
}
// document.getElementById("baiTapBanCoVua").innerHTML += `<div>${dong}</div>`;




document.getElementById("baiTapBanCoVua").innerHTML += renderBanCoVua();
