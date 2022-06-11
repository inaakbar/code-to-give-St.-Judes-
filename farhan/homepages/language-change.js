var multilang;
var item = localStorage.getItem("global_lang");
console.log(item);
function onLoad() {
  //console.log(JSON.parse(localStorage.getItem("global_lang")))
  // create object, load JSON file, default to 'nl', and callback to initList when ready loading
  multilang = new MultiLang("languages.json", item, this.initList);

  // alternatively
  //multilang = new MultiLang('languages.json', null, this.initList); // default to browser language
  //multilang = new MultiLang('languages.json'); // only load JSON, no callback
}
function langSelectChange(sel) {
  // console.log(document.getElementById("lang").value);
  // switch to selected language code
  // console.log(sel.value)
  // global_lang = sel.value;
  localStorage.setItem("global_lang", sel.value);
  multilang.setLanguage(sel.value);
  // refresh labels
  refreshLabels();
}

function initList() {
  // get language list element
  var list = document.getElementsByName("listlanguages")[0];
  // clear all options
  list.options.length = 0;

  // add all available languages
  for (var key in multilang.phrases) {
    // create new language option
    var lang = document.createElement("option");
    lang.value = key;
    lang.innerHTML = multilang.phrases[key]["langdesc"];

    // append to select element
    list.appendChild(lang);
  }

  refreshLabels();
}

function refreshLabels() {
  // Basically do the following for all document elements:
  //document.getElementById("Options").textContent = multilang.get("Options");

  // loop through all document elements
  var allnodes = document.body.getElementsByTagName("*");

  for (var i = 0, max = allnodes.length; i < max; i++) {
    // get id current elements
    var idname = allnodes[i].id;
    // if id exists, set get id current elements
    if (idname != "") {
      allnodes[i].textContent = multilang.get(idname);
    }
  }
}