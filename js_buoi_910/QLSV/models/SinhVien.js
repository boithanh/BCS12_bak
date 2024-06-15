class SinhVien {
  txtMaSV = "";
  txtTenSV = "";
  txtEmail = "";
  txtPass = "";
  txtNgaySinh = "";
  khSV = "";
  txtDiemToan = "";
  txtDiemLy = "";
  txtDiemHoa = "";
  // Phương thức
  tinhDiemTrungBinh = function () {
    return (this.txtDiemToan + this.txtDiemLy + this.txtDiemHoa) / 3;
  };
}
