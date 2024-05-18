let arrInput = document.querySelectorAll("input");
//enforce that only a float can be inputed
function enforceFloat() {
  var valid = /^\-?\d+\.\d*$|^\-?[\d]*$/;
  var number = /\-\d+\.\d*|\-[\d]*|[\d]+\.[\d]*|[\d]+/;
  if (!valid.test(this.value)) {
    var n = this.value.match(number);
    // this.value = n ? n[0] : "";
    if ((this.value = n)) {
      n[0];
    } else {
      ("");
      // this.setCustomValidity("Nhập số nha bạn ơiiiiiii !");
      // this.reportValidity();
    }
  }
}
arrInput.forEach((input) => {
  input.onkeyup = input.onchange = enforceFloat;
});

let domID = function (id) {
  return document.getElementById(id);
};

// Bài tập 1
let tinhTienLuong = domID("tinhTienLuong");
tinhTienLuong.addEventListener("click", function () {
  let soNgayLam = Number(domID("soNgayLam").value);
  if (soNgayLam == "") {
    return false;
  } else {
    let tongTienLuong = soNgayLam * 100000;
    let ketQua = document.querySelector(".ketQuaBai1");
    ketQua.innerHTML = `Số ngày làm việc là ${soNgayLam} , Tổng tiền lương tháng này là ${tongTienLuong.toLocaleString(
      "it-IT",
      { style: "currency", currency: "VND" }
    )}`;
  }
});

// Bài tập 2
let tinhTrungBinh = document.getElementById("tinhTrungBinh");
tinhTrungBinh.addEventListener("click", function () {
  let number1 = Number(domID("number1").value);
  let number2 = Number(domID("number2").value);
  let number3 = Number(domID("number3").value);
  let number4 = Number(domID("number4").value);
  let number5 = Number(domID("number5").value);

  if (
    number1 == "" &&
    number2 == "" &&
    number3 == "" &&
    number4 == "" &&
    number5 == ""
  ) {
    return false;
  } else {
    let giaTriTB = (number1 + number2 + number3 + number4 + number5) / 5;
    let ketQua = document.querySelector(".ketQuaBai2");
    ketQua.innerHTML = `Các số bạn đã nhập là: ${number1} , ${number2} , ${number3} , ${number4} , ${number5} và giá trị trung bình của 5 số này là : ${giaTriTB}`;
  }
});

// Bài tập 3
let btnQuyDoi = domID("btnQuyDoi");
btnQuyDoi.addEventListener("click", function () {
  let soTienUSD = Number(domID("soTienUSD").value);
  let giaTriQuyDoi = soTienUSD * 23500;
  let ketquaBai3 = document.querySelector(".ketquaBai3");
  if (soTienUSD == "") {
    return false;
  } else {
    ketquaBai3.innerHTML = `Giá trị tiền Việt là : ${giaTriQuyDoi.toLocaleString(
      "it-IT",
      { style: "currency", currency: "VND" }
    )}`;
  }
});

// Bài tập 4
let btnTinh = domID("btnTinh");
btnTinh.addEventListener("click", function (e) {
  let chieuDai = Number(domID("chieuDai").value);
  let chieuRong = Number(domID("chieuRong").value);
  let dienTich = chieuDai * chieuRong;
  let chuVi = (chieuDai + chieuRong) * 2;
  let ketquaBai4 = document.querySelector(".ketquaBai4");
  if (chieuDai == "" || chieuRong == "") {
    return false;
  } else {
    if (!chieuDai == "" && !chieuRong == "") {
      ketquaBai4.innerHTML = `Chiều dài là ${chieuDai} , chiều rộng là ${chieuRong} ... Diện tích HCN là ${dienTich} , Chu vi HCN là ${chuVi}`;
    }
  }
});

// Bài tập 5
let btntinhTong = domID("btntinhTong");
btntinhTong.addEventListener("click", function () {
  let soNhapVao = Number(domID("nhapSo").value);
  let soHangChuc = parseInt(soNhapVao / 10);
  let soHangDonVi = soNhapVao % 10;
  let ketquaBai5 = document.querySelector(".ketquaBai5");
  if (soNhapVao == "") {
    return false;
  } else {
    ketquaBai5.innerHTML = `Số đã nhập vào là ${soNhapVao} , tổng 2 ký số là ${
      soHangChuc + soHangDonVi
    }`;
  }
});
