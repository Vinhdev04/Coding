// // Lấy các phần tử từ DOM
// const rangeBtn = document.querySelector(".btn-range");
// const rangeNumbers = document.querySelector(".range-numbers");
// const resultInput = document.querySelector(".result-input");
// const copyBtn = document.querySelector(".btn-copy");
// const generateBtn = document.querySelector(".generator");

// const uppercaseType = document.querySelector("#uppercase");
// const lowercaseType = document.querySelector("#lowercase");
// const numberType = document.querySelector("#numbers");
// const char = document.querySelector("#chars");

// // Các chuỗi ký tự có sẵn
// const uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lowercases = "abcdefghijklmnopqrstuvwxyz";
// const numbers = "0123456789";
// const chars =
//   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=<>?/[]{}";

// // Cập nhật giá trị thanh range khi thay đổi
// rangeBtn.addEventListener("input", (e) => {
//   rangeNumbers.innerHTML = e.target.value; // Cập nhật giá trị hiển thị dải số
// });

// // Hàm mã hóa Caesar Cipher
// function caesarEncrypt(text, shift) {
//   let encryptedText = "";
//   for (let i = 0; i < text.length; i++) {
//     let char = text[i];
//     if (char >= "A" && char <= "Z") {
//       encryptedText += String.fromCharCode(
//         ((char.charCodeAt(0) - 65 + shift) % 26) + 65
//       );
//     } else if (char >= "a" && char <= "z") {
//       encryptedText += String.fromCharCode(
//         ((char.charCodeAt(0) - 97 + shift) % 26) + 97
//       );
//     } else {
//       encryptedText += char; // Không thay đổi các ký tự không phải chữ cái
//     }
//   }
//   return encryptedText;
// }

// // Tạo mật khẩu ngẫu nhiên khi nhấn nút "Generate"
// generateBtn.addEventListener("click", () => {
//   const passwordOptions = []; // Mảng để chứa các loại ký tự chọn
//   let generatedPassword = ""; // Mật khẩu được tạo ra

//   // Kiểm tra xem người dùng đã chọn loại ký tự nào
//   if (uppercaseType.checked) passwordOptions.push(uppercases);
//   if (lowercaseType.checked) passwordOptions.push(lowercases);
//   if (numberType.checked) passwordOptions.push(numbers);
//   if (char.checked) passwordOptions.push(chars);

//   // Nếu không có loại ký tự nào được chọn, yêu cầu người dùng chọn ít nhất một loại
//   if (passwordOptions.length === 0) {
//     alert("Please select at least one character type!");
//     return;
//   }

//   // Tạo mật khẩu ngẫu nhiên
//   const allPossibleChars = passwordOptions.join(""); // Ghép tất cả các chuỗi ký tự thành một chuỗi duy nhất

//   // Tạo mật khẩu có độ dài theo giá trị thanh range
//   for (let i = 0; i < rangeBtn.value; i++) {
//     const randomIndex = Math.floor(Math.random() * allPossibleChars.length); // Chọn ngẫu nhiên một ký tự
//     generatedPassword += allPossibleChars[randomIndex]; // Thêm ký tự vào mật khẩu
//   }

//   // Mã hóa mật khẩu bằng Caesar Cipher
//   const shiftValue = 3; // Chọn giá trị dịch chuyển (có thể thay đổi tùy theo nhu cầu)
//   const encryptedPassword = caesarEncrypt(generatedPassword, shiftValue);

//   resultInput.value = encryptedPassword; // Hiển thị mật khẩu đã mã hóa vào ô nhập
// });

// // Sao chép mật khẩu khi nhấn nút "Copy"
// copyBtn.addEventListener("click", () => {
//   if (resultInput.value.length === 0) {
//     // Kiểm tra xem có mật khẩu không
//     alert("Please generate a password first!");
//     return;
//   }

//   // Sao chép mật khẩu vào clipboard
//   resultInput.select();
//   resultInput.setSelectionRange(0, 100000); // Chọn toàn bộ nội dung
//   navigator.clipboard.writeText(resultInput.value); // Sao chép vào clipboard
// });
// Lấy các phần tử từ DOM
const rangeBtn = document.querySelector(".btn-range");
const rangeNumbers = document.querySelector(".range-numbers");
const resultInput = document.querySelector(".result-input");
const copyBtn = document.querySelector(".btn-copy");
const generateBtn = document.querySelector(".generator");

const uppercaseType = document.querySelector("#uppercase");
const lowercaseType = document.querySelector("#lowercase");
const numberType = document.querySelector("#numbers");
const char = document.querySelector("#chars");

// Các chuỗi ký tự có sẵn
const uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercases = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=<>?/[]{}";

// Cập nhật giá trị thanh range khi thay đổi
rangeBtn.addEventListener("input", (e) => {
  rangeNumbers.innerHTML = e.target.value; // Cập nhật giá trị hiển thị dải số
});

// Hàm mã hóa Caesar Cipher
function caesarEncrypt(text, shift) {
  let encryptedText = "";
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char >= "A" && char <= "Z") {
      encryptedText += String.fromCharCode(
        ((char.charCodeAt(0) - 65 + shift) % 26) + 65
      );
    } else if (char >= "a" && char <= "z") {
      encryptedText += String.fromCharCode(
        ((char.charCodeAt(0) - 97 + shift) % 26) + 97
      );
    } else {
      encryptedText += char; // Không thay đổi các ký tự không phải chữ cái
    }
  }
  return encryptedText;
}

// Tạo mật khẩu ngẫu nhiên khi nhấn nút "Generate"
generateBtn.addEventListener("click", () => {
  const passwordOptions = []; // Mảng để chứa các loại ký tự chọn
  let generatedPassword = ""; // Mật khẩu được tạo ra

  // Kiểm tra xem người dùng đã chọn loại ký tự nào
  if (uppercaseType.checked) passwordOptions.push(uppercases);
  if (lowercaseType.checked) passwordOptions.push(lowercases);
  if (numberType.checked) passwordOptions.push(numbers);
  if (char.checked) passwordOptions.push(chars);

  // Nếu không có loại ký tự nào được chọn, yêu cầu người dùng chọn ít nhất một loại
  if (passwordOptions.length === 0) {
    alert("Please select at least one character type!");
    return;
  }

  // Tạo mật khẩu ngẫu nhiên
  const allPossibleChars = passwordOptions.join(""); // Ghép tất cả các chuỗi ký tự thành một chuỗi duy nhất

  // Tạo mật khẩu có độ dài theo giá trị thanh range
  for (let i = 0; i < rangeBtn.value; i++) {
    const randomIndex = Math.floor(Math.random() * allPossibleChars.length); // Chọn ngẫu nhiên một ký tự
    generatedPassword += allPossibleChars[randomIndex]; // Thêm ký tự vào mật khẩu
  }

  // Mã hóa mật khẩu bằng Caesar Cipher
  const shiftValue = 3; // Chọn giá trị dịch chuyển (có thể thay đổi tùy theo nhu cầu)
  const encryptedPassword = caesarEncrypt(generatedPassword, shiftValue);

  resultInput.value = encryptedPassword; // Hiển thị mật khẩu đã mã hóa vào ô nhập
});

// Sao chép mật khẩu khi nhấn nút "Copy"
copyBtn.addEventListener("click", () => {
  if (resultInput.value.length === 0) {
    // Kiểm tra xem có mật khẩu không
    alert("Please generate a password first!");
    return;
  }

  // Sao chép mật khẩu vào clipboard
  resultInput.select();
  resultInput.setSelectionRange(0, 100000); // Chọn toàn bộ nội dung
  navigator.clipboard.writeText(resultInput.value); // Sao chép vào clipboard
});
