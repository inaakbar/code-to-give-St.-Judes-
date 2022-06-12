window.onload = function () {
  console.log("window loaded!");
  // console.log(educationDocuments);
  var educationDocuments = document.getElementById("educationDocuments");
  educationDocuments.style.display = "none";
  var healthDocuments = document.getElementById("healthDocuments");
  healthDocuments.style.display = "none";
  var Livelihood = document.getElementById("Livelihood");
  Livelihood.style.display = "none";
   multilang = new MultiLang("languages.json", item, this.initList);
};

var typeOfRequest = document.getElementById("typeOfRequest");
typeOfRequest.addEventListener("change", () => {
  let selectedOption = typeOfRequest.options[typeOfRequest.selectedIndex].value;
  console.log(selectedOption);

  switch (selectedOption) {
    case "Education":
      educationDocuments.style.display = "block";
      healthDocuments.style.display = "none";
      Livelihood.style.display = "none";
      break;
    case "Health":
      educationDocuments.style.display = "none";
      healthDocuments.style.display = "block";
      Livelihood.style.display = "none";
      break;
    case "Livelihood":
        educationDocuments.style.display = "none";
        healthDocuments.style.display = "none";
        Livelihood.style.display = "block";
        break;
    default:
        educationDocuments.style.display = "none";
        healthDocuments.style.display = "none";
        Livelihood.style.display = "none";
        break;

  }
});
