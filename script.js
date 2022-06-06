var x = "Financial",
  y = "Education",
  name_institute = "Yes";
function f1() {
  var select = document.getElementById("cat1");
  x = select.value;
}
function f2() {
  var select = document.getElementById("cat2");
  y = select.value;
}
function f3() {
  if (x == "Financial" && y == "Education") {
    window.location.href = "edu.html";
  }
  if (x == "Financial" && y == "Health") {
    window.location.href = "health.html";
  }
  if (x == "Financial" && y == "Livelihood") {
    window.location.href = "health.html";
  }
}

function edu1() {
  var select = document.getElementById("select2");
  name_institute = select.value;
  if (name_institute == "No") {
    document.getElementById("institute").disabled = true;
    document.getElementById("time").disabled = true;
  } else {
    document.getElementById("institute").disabled = false;
    document.getElementById("time").disabled = false;
  }
}
