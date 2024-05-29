//Tương tác với thẻ HTML qua id
// Thay đổi nội dung của thẻ
//Câu lệnh DOM (data Object model)
let theh1 = document.getElementById("title");
console.log(theh1);
//innerHTML dung de thay doi HTML
theh1.innerHTML = "hello Dong tran";

//Thực hiện viết câu lệnh dom tới thẻ H2 có id demo và thay đổi nội dung thành oh my god

let demo = document.getElementById("demo");
demo.innerHTML = "oh may chuối";

document.getElementById('demo').style.backgroundColor = "red";

//Thực hiện gọi tới thẻ h1 có id title màu nền đen, chữ trắng, có thêm padding 10px
document.getElementById('title').style.background = "black";
document.getElementById('title').style.color = "white";
document.getElementById('title').style.padding = "10px";

// Để dễ dàng bảo trì code sau này nên tạo 1 biến rồi gán dom vào đó.
theh1.style.background = "black";
theh1.style.color = "white";
theh1.style.padding = "10px";


// TƯơng tác vs thẻ ko có nội dung như img 
document.getElementById('hinhanh').src = "https://cybersoft.edu.vn/wp-content/uploads/2022/08/IMG_1001.jpg";


// Tuowng tac thêm vs 1 số class vào trong thẻ HTML
let theh3 = document.getElementById("title_2").className;
// console.log(theh3);
//Phải lấy thông tin class hiện tại trc, sau đó mới thay thế hoặc insert class vào
document.getElementById("title_2").className = "bgblack text-white";

document.getElementById("title_2").className += "bg black bg-white" // "a" + "b" -> "ab"

//Tương tác vs thẻ input
let hoten = document.getElementById("hoten").value;
console.log(hoten);

// Sự kiện click
// document.getElementById("btnBaiTap1").onclick = function () {
//     //Tương tác lấy dữ liệu input người dùng
//     let email = document.getElementById("email").value;
//     let matkhau = document.getElementById("matkhau").value;
//     console.log(email);
//     console.log(matkhau);
// }

//Sự kieej doubleClick
// document.getElementById("btnBaiTap1").ondblclick = function () {
//     // Khi thao tác gặp lỗi cannot read propertise of null là do sai id, id ko có trong HTML
//     console.log("Hello tôi là nút button");
// }


// Tương tác vs thẻ ko có id hoặc class
document.querySelector(".container .btn-dark").onclick = function () {
    let email = document.getElementById("email").value;
    let matkhau = document.getElementById("matkhau").value;
    console.log(email);
    console.log(matkhau);
}
// Sử dụng query selector nên cần gọi đúng class của phần tử mình muốn, tránh gọi và phần tử có class trùng nhau vì sự kiện onlick chỉ bắt phần tử đầu tiên khi có nhiều phần tử cùng class



// Yêu cầu bài tập bật tắt bóng đèn
// Thực hiện xây dựng 2 chức năng  click dành cho nút bật đèn và tắt đèn
// Khi người dùng bấm vào nút tắt đèn, thực hiện cho bóng đèn tắt đi (thay đổi ở thẻ img)
// Khi người dùng bấm vào nút bật đèn, thực hiện cho bóng đèn sáng
//Sau khi hoàn thành 2 chwusc năng, tối ưu hóa lại các phần code để bảo trì và sửa lỗi cho tốt (khi sử dụng dom cho một thẻ nhiều lần nên tạo biến lưu trữ)

// document.getElementById("btnTat").onclick = function () {

//     document.getElementById("hinhbongden").src = './img/pic_bulboff.gif'
// }

// document.getElementById("btnMo").onclick = function () {

//     document.getElementById("hinhbongden").src = './img/pic_bulbon.gif'
// }

let hinhbongden = document.getElementById("hinhbongden");
document.querySelector(".btn-dark").onclick = function () {
    console.log("Toi la nut tat");
    // Thay đổi hình ảnh của img thành bóng đèn tắt
    hinhbongden.src = './img/pic_bulboff.gif';
}
document.querySelector(".btn-primary").onclick = function () {
    console.log("Toi la nut mo");
    // Thay đổi hình ảnh của img thành bóng đèn tắt
    hinhbongden.src = './img/pic_bulbon.gif';
}
// Hành động di chuột vào và ra
hinhbongden.onmouseenter = function () {
    console.log('Tôi đang ở vùng thẻ IMG');
    hinhbongden.src = './img/pic_bulboff.gif';

}
hinhbongden.onmouseleave = function () {
    console.log('Tôi đang ở vùng thẻ IMG');
    hinhbongden.src = './img/pic_bulbon.gif';
}

// Làm Darkthem light theme
document.querySelector(".btn-warning").onclick = function () {
    // Classlist.toggle kiểm tra có class đó chưa, nếu chưa có thì thêm vào và nếu có rồi thì sẽ xóa ra --> phục vụ cho việc gắn class dark vào để kích hoạt thêm tối hoặc gỡ ra đê có light theme: 
    document.querySelector("body").classList.toggle("dark");

    //classList.add giúp thêm class vào cho thẻ nhưng chỉ thêm 1 lần, nếu đã tồn tại class thì không thêm nửa và cũng không gỡ ra -> Áp dụng cho việc thêm nhanh CSS vào theo tương tác của người dùng và giữ nguyên kết quả đó:
    // document.getElementById("demo3").classList.add("mauChuDo");
    // Quay lại vd trên , nếu dùng thuộc tính classname thì mỗi lần click nó ko kiểm tra dc class đó có thêm vào chưa và cứ thêm vào mãi, còn classlist.add thì có thể check được

    //classList.remove giúp gỡ bỏ CSS ra khỏi thẻ, có thể kết hợp vs classList.add để custom giao diện
    // document.getElementById("demo3").classList.remove("hehe");
}

// Tương tác tạo thẻ HTML thông qua javascript
// Sử dụng createElement để tạo the
let theImg = document.createElement("img");
console.log(theImg);
theImg.src =
    "https://i.pinimg.com/236x/4f/9a/0c/4f9a0c9fa8a6589706a6d9f59bdc6737.jpg";
theImg.className = "h-100 w-100";
document.getElementById("demoCreateElement").appendChild(theImg);

let phepTinh = 3 + 7;
// Swr dujng chuoi HTML
//Ki Thuật string template
// Nếu sử dụng string template bắt buộc phải sử dụng dấu huyền ở 2đầu (Thay ngoặc kép bằng dấu huyền)
document.getElementById("demo3").innerHTML += `
<div class="card demo_card" style="width: 18rem;" id="card">
  <img src=${srcImg} class="card-img-top" alt="...">
  <div class="card-body" id='card-body'>
    <h5 class="card-title">${hoTenPokemon}</h5>
    <p class="card-text">${3 + 4 + 50 * 200}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`;

// Thực hiện viết DOM tới thẻ div vừa tạo ra va thay đổi nội dung
document.getElementById("card-body").classList.add("bg-danger");