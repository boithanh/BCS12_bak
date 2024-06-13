//Yeeu cầu bài tập bàn cờ vua: thực hiện viết một chức năng (function) xử lí tạo ra layout một bàn cờ vua với 8 cột và 8 dòng
// saukhi hoàn thành chức năng , xử lý dữ liệu động cho function để có thể tạo giao diện phù hợp với số cột và số dofngddc cung cấp từ người dùng

// function renderBanCoVua(soCot = 0, soDong = 0) {

let oTrang = "<div class='oTrang'></div>"
let oDen = "<div class='oDen'></div>"
let dong = "";
//Tạo ra các dòng chẵn và lẻ theo điều kiện If bên trong  
for (let z = 1; z <= 8; z++) {
    //Tạo cho nó có các dòng dựa trên dòng lẻ hoặc dòng chẫn
    for (let i = 1; i <= 8; i++) {
        //Tao cột chẵn và lẻ
        if (z % 2 == 1) {
            //Tạo cột cho dòng lẻ
            if (i % 2 == 1) {
                dong += oTrang;
            }
            else {
                dong += oDen
            }
        }    //  i%2==1?(dong+=oTrang):(dong+=oDen);
        // }
        // Tạo cột cho dòng chẵn
        else {
            if (i % 2 == 0) {
                dong += oDen;
            }
            else {
                dong += oTrang;
            }

        }

        // i % 2 == 1 ? (dong += oDen) : (dong += oTrang);
        // }

        // baiTap.innerHTML += dong;
        // }
        // }
        //Thực hiện thêm HTML lên giao diện
        // ketQua += `<div>${dong}</div>`;
        // return ketQua;

    }

}
document.getElementById("baiTapBanCoVua").innerHTML += `<div>${dong}</div>`;





// document.getElementById("baiTapBanCoVua").innerHTML += renderBanCoVua();

