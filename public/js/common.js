
function ensureOneCheck(checkBoxName, messageId, submitId) {
  const checkBoxes = $("[name=" + checkBoxName + "]");
  let checkCount = 0;
  for (let i = 0; i < checkBoxes.length; i++) {
    if (checkBoxes[i].checked) checkCount++;
  }
  if (checkCount === 0) {
    $("#" + messageId).show();
    $("#" + submitId).prop("disabled", true);
    return false;
  } else {
    $("#" + messageId).hide();
    $("#" + submitId).prop("disabled", false);
    return true;
  }
}

function ensureThreeCheck(checkBoxName, messageId, submitId) {
    const checkBoxes = $("[name=" + checkBoxName + "]");
    let checkCount = 0;
    for (let i = 0; i < checkBoxes.length; i++) {
      if (checkBoxes[i].checked) checkCount++;
    }
    if (checkCount < 3 || checkCount > 5) {
      $("#" + messageId).show();
      $("#" + submitId).prop("disabled", true);
      return false;
    } else {
      $("#" + messageId).hide();
      $("#" + submitId).prop("disabled", false);
      return true;
    }
  }

  function validateStartDate(startDateid, errorMessageID, submitId) {
    startDatevalue = document.getElementById(startDateid).value;
    console.log("startdatevalue:", startDatevalue);
    var currentdate = new Date();
    if (startDatevalue < currentdate) {
      $("#" + errorMessageID).show();
      $("#" + submitId).prop("disabled", true);
      return false;
    } else if (startDatevalue == null) {
      $("#" + errorMessageID).hide();
      $("#" + submitId).prop("disabled", false);
      return true;
    } else {
      $("#" + errorMessageID).hide();
      $("#" + submitId).prop("disabled", false);
      return true;
    }
  }

// function initialiseTitle() {
//   let title = $("#title").val();
//   let titleArr = [];
//   let initTitle = "";
//   if (title) {
//     titleArr = title.trim().split(" ");
//     for (let i = 0; i < titleArr.length; i++) {
//       initTitle +=
//         titleArr[i].charAt(0).toUpperCase() +
//         titleArr[i].slice(1) +
//         (i == titleArr.length - 1 ? "" : " ");
//     }
//     $("#title").val(initTitle);
//   }
// }


// $(".custom-file-input").on("change", function () {
//     var fileName = $(this).val().split("\\").pop();
//     $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
//     });


$('#avatarUpload').on('change', function () {
        let formdata = new FormData();
        let image = $("#avatarUpload")[0].files[0];
        let poster = document.getElementById("poster");
        if (image) {
            poster.src = URL.createObjectURL(image);
        }
           
});

$('#campaignUpload').on('change', function () {
  let formdata = new FormData();
  let image = $("#campaignUpload")[0].files[0];
  let poster = document.getElementById("poster");
  if (image) {
      poster.src = URL.createObjectURL(image);
  }
     
});

$('#searchImg').on('change', function () {
  let formdata = new FormData();
  document.getElementById("load").style.display = "block";
  let image = $("#searchImg")[0].files[0];
  formdata.append('searchImg', image);
  fetch('/searchImage', {
  method: 'POST',
  body: formdata,
  // redirect: "login"
  }).then(res => {
    $.ajax({
      type: 'POST',
      url: '/search',
      success: function(data) {
        var x = String(data[0].className).split(",")
        console.log(x[0])
        document.getElementById("load").style.display = "none";
        if (x[0] != "undefined"){
          window.location.href = "/category/" + x[0];
        }
        else {
          window.location.href = "/"
        }
        
      }
  
    })
  })
  
  
  });
  