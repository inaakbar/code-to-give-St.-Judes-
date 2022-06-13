window.onload = function () {
  console.log("window loaded!");
  // console.log(educationDocuments);
  var educationForm = document.getElementById("educationForm");
  educationForm.style.display = "none";
  var healthForm = document.getElementById("healthForm");
  healthForm.style.display = "none";
  var lifeskillsForm = document.getElementById("lifeskillsForm");
  lifeskillsForm.style.display = "none";
  var amountNeededDiv = document.getElementById("amountNeededDiv");
  amountNeededDiv.style.display = "none";
};

var Category = document.getElementById("Category");
var subCategory = document.getElementById("subCategory");

Category.addEventListener("change", () => {
  let selectedOption = Category.options[Category.selectedIndex].value;
  if (selectedOption === "Financial") {
    amountNeededDiv.style.display = "block";
  } else {
    amountNeededDiv.style.display = "none";
  }
});

subCategory.addEventListener("change", () => {
  let selectedOption = subCategory.options[subCategory.selectedIndex].value;
  console.log(selectedOption);

  switch (selectedOption) {
    case "Education":
      educationForm.style.display = "block";
      healthForm.style.display = "none";
      lifeskillsForm.style.display = "none";
      break;
    case "Health":
      educationForm.style.display = "none";
      healthForm.style.display = "block";
      lifeskillsForm.style.display = "none";
      break;
    case "Life skills":
      educationForm.style.display = "none";
      healthForm.style.display = "none";
      lifeskillsForm.style.display = "block";
      break;
    default:
      educationForm.style.display = "none";
      healthForm.style.display = "none";
      lifeskillsForm.style.display = "none";
      break;
  }
});