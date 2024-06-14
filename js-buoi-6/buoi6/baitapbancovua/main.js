let oTrang = "<div class='oTrang'></div>";
let oDen = "<div class='oDen'></div>";
let dong = "";
let kQ = document.getElementById("baiTapBanCoVua");
let banCo = document.getElementById("banCo");
for (z = 1; z <= 8; z++) {
  for (let i = 1; i <= 8; i++) {
    if (z % 2 == 1) {
      if (i % 2 == 1) {
        dong += oTrang;
      } else {
        dong += oDen;
      }
    } else {
      if (i % 2 == 1) {
        dong += oDen;
      } else {
        dong += oTrang;
      }
    }
  }
  banCo.innerHTML += `<div>${dong}</div>`;
}
