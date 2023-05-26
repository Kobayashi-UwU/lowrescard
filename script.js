function previewFile() {
  var preview = document.querySelector("img");
  var file = document.getElementById("uploadBtn").files[0];
  var reader = new FileReader();
  console.log(file);

  reader.onloadend = function () {
    document.getElementById("result_img").src = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}

function previewFile_mobile() {
  var preview_mobile = document.querySelector("img");
  var file_mobile = document.getElementById("uploadBtn_mobile").files[0];
  var reader_mobile = new FileReader();
  console.log(file_mobile);
  reader_mobile.onloadend = function () {
    document.getElementById("result_img_mobile").src = reader_mobile.result;
  };

  if (file_mobile) {
    reader_mobile.readAsDataURL(file_mobile);
  } else {
    preview_mobile.src = "";
  }
}

// function previewImage_mobile() {
//   var fileInput = document.getElementById("uploadBtn_mobile");
//   var file = fileInput.files[0];
//   var reader = new FileReader();

//   reader.onloadend = function () {
//     var img = new Image();
//     img.onload = function () {
//       var canvas = document.createElement("canvas");
//       var ctx = canvas.getContext("2d");

//       // Calculate the aspect ratio of the uploaded image
//       var aspectRatio = img.width / img.height;

//       // Calculate the desired width and height for cropping
//       var desiredWidth = 280;
//       var desiredHeight = 345;

//       // Calculate the actual width and height based on the aspect ratio
//       var actualWidth, actualHeight;

//       if (aspectRatio > desiredWidth / desiredHeight) {
//         actualWidth = img.width;
//         actualHeight = img.width / (desiredWidth / desiredHeight);
//       } else {
//         actualWidth = img.height * (desiredWidth / desiredHeight);
//         actualHeight = img.height;
//       }

//       // Calculate the cropping coordinates to center the image
//       var offsetX = (img.width - actualWidth) / 2;
//       var offsetY = (img.height - actualHeight) / 2;

//       // Set the canvas dimensions to the desired final size
//       canvas.width = desiredWidth;
//       canvas.height = desiredHeight;

//       // Draw the cropped image onto the canvas
//       ctx.drawImage(
//         img,
//         offsetX,
//         offsetY,
//         actualWidth,
//         actualHeight,
//         0,
//         0,
//         desiredWidth,
//         desiredHeight
//       );

//       // Get the cropped image as a data URL
//       var croppedDataUrl = canvas.toDataURL();

//       // Display the cropped image
//       var previewImage = document.getElementById("previewImage");
//       previewImage.src = croppedDataUrl;
//     };

//     img.src = reader.result;
//   };

//   if (file) {
//     reader.readAsDataURL(file);
//   } else {
//     // Clear the preview image if no file is selected
//     var previewImage = document.getElementById("previewImage");
//     previewImage.src = "";
//   }
// }

function displayText() {
  var first_name = document.getElementById("first_name_input").value;
  var last_name = document.getElementById("last_name_input").value;
  var member_id = document.getElementById("member_id").value;
  var regist_date = document.getElementById("regist_date").value;

  console.log(name);

  document.getElementById("first_name_p").innerHTML = first_name;
  document.getElementById("last_name_p").innerHTML = last_name;
  document.getElementById("member_id_p").innerHTML = member_id;
  document.getElementById("regist_date_p").innerHTML = regist_date;
}

function displayText_mobile() {
  var first_name_mobile = document.getElementById(
    "first_name_input_mobile"
  ).value;
  var last_name_mobile = document.getElementById(
    "last_name_input_mobile"
  ).value;
  var member_id_mobile = document.getElementById(
    "member_id_input_mobile"
  ).value;
  var register_date_mobile = document.getElementById(
    "register_date_input_mobile"
  ).value;

  console.log(name);

  document.getElementById("first_name_p_mobile").innerHTML = first_name_mobile;
  document.getElementById("last_name_p_mobile").innerHTML = last_name_mobile;
  document.getElementById("member_id_p_mobile").innerHTML = member_id_mobile;
  document.getElementById("register_date_p_mobile").innerHTML =
    register_date_mobile;
}
