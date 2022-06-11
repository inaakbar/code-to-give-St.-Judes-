var global_lang;
// console.log("Global_variable=",global_lang)

// var multilang;
// function onLoad() {
//   // create object, load JSON file, default to 'nl', and callback to initList when ready loading
//   multilang = new MultiLang("languages.json", "hn", this.initList);

//   // alternatively
//   //multilang = new MultiLang('languages.json', null, this.initList); // default to browser language
//   //multilang = new MultiLang('languages.json'); // only load JSON, no callback
// }
// // var langg="en"
// // function langSelectChange1() {
// //     langg=document.getElementById("l").value;
// //     console.log(langg);
// //     langSelectChange(langg);
// // }
// function langSelectChange(sel) {
//   // console.log(document.getElementById("lang").value);
//   // switch to selected language code
//   console.log(sel.value);
//   multilang.setLanguage(sel.value);
//   // refresh labels
//   refreshLabels();
// }

// function initList() {
//   // get language list element
//   var list = document.getElementsByName("listlanguages")[0];
//   // clear all options
//   list.options.length = 0;

//   // add all available languages
//   for (var key in multilang.phrases) {
//     // create new language option
//     var lang = document.createElement("option");
//     lang.value = key;
//     lang.innerHTML = multilang.phrases[key]["langdesc"];

//     // append to select element
//     list.appendChild(lang);
//   }

//   refreshLabels();
// }

// function refreshLabels() {
//   // Basically do the following for all document elements:
//   //document.getElementById("Options").textContent = multilang.get("Options");

//   // loop through all document elements
//   var allnodes = document.body.getElementsByTagName("button");

//   for (var i = 0, max = allnodes.length; i < max; i++) {
//     // get id current elements
//     var idname = allnodes[i].id;
//     // if id exists, set get id current elements
//     if (idname != "") {
//       allnodes[i].textContent = multilang.get(idname);
//     }
//   }
// }

// var selectTag = "English",translateFrom="English",translateTo="Hindi",src_text="";
// // function f() {
// //   var select = document.getElementById("lang");
// //   selectTag = select.value;
// //   //console.log(s.value);
// //    src_text = document.getElementById("main-login");
// //   src_text = src_text.innerHTML;
// //    translateFrom = "English";
// //    translateTo = selectTag;

// //   console.log("current-lang:", translateFrom);
// //   console.log("final-lang:", translateTo);
// //   console.log(src_text);
// //   // toText.setAttribute("placeholder", "Translating");

// //   let apiURL = `https://api.mymemory.translated.net/get?q=${src_text}&langpair=${translateFrom}|${translateTo}`;
// //   var toText = "";
// //   fetch(apiURL)
// //     .then((res) => res.json())
// //     .then((data) => {
// //       console.log(data.responseData.translatedText);
// //       toText = data.responseData.translatedText;
// //       document.getElementById("main-login").innerHTML =
// //         data.responseData.translatedText;
// //       //toText.setAttribute("placeholder", "Translation");
// //     });
// //   //document.getElementById("from-text").innerHTML = toText;
// //   console.log(toText);
// // }

// const btns = document.querySelectorAll("button");
// for (const btn of btns) {
//     src_text = btn.innerHTML;
//     // translateFrom = "English";
//     // translateTo = selectTag;

//     console.log("current-lang:", translateFrom);
//     console.log("final-lang:", translateTo);
//     console.log(src_text);
//     // toText.setAttribute("placeholder", "Translating");

//     let apiURL = `https://api.mymemory.translated.net/get?q=${src_text}&langpair=${translateFrom}|${translateTo}`;
//    // var toText = "";
//     fetch(apiURL)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data.responseData.translatedText);
//         //toText = data.responseData.translatedText;
//         btn.innerHTML =data.responseData.translatedText;
//         //toText.setAttribute("placeholder", "Translation");
//       });
//   };
// import i18next from "https://deno.land/x/i18next/index.js";
// // or import i18next from 'https://raw.githubusercontent.com/i18next/i18next/master/src/index.js'
// // or import i18next from 'https://cdn.jsdelivr.net/gh/i18next/i18next/src/index.js'
// // import "./i18";

// import { useTranslation } from "/Users/varunjain/Desktop/react_tut/node_modules/i18next.js";

// const { t, i18n } = useTranslation();
//   const changeLanguage = (ln) => {
//     return () => {
//       i18n.changeLanguage(ln);
//       console.log(`${ln}`);
//     };
// };
// i18n.changeLanguage("en-US");

//var val={t("document.getElementById("main-login").innerHTML")};

// selectTag.forEach((tag, id) => {
//     for(const country_code in countries){
//         //console.log(country_code)
//         let selected;
//         if(id == 0 && country_code == "en-GB"){
//             selected = "selected"
//         }else if(id == 1 && country_code == "hi-IN"){
//             selected = "selected"
//         }

//         let option = `<option value="${country_code}" ${selected}>${countries[country_code]}</option>`
//         tag.insertAdjacentHTML("beforeend", option)

//     }
// })
// // exchangeIcon.addEventListener("click", () => {
// //     let tempText = fromText.value;
// //     let tempLang = selectTag[0].value;

// //     fromText.value = toText.value;
// //     selectTag[0].value = selectTag[1].value
// //     selectTag[1].value = tempLang
// // })

// translateBtn.addEventListener("click", () => {
//     let text = fromText.value;
//     let translateFrom = selectTag[0].value
//     let translateTo = selectTag[1].value

//     if(!text){
//         return
//     }
//     toText.setAttribute("placeholder", "Translating")

//     let apiURL = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`
//     fetch(apiURL).then(res => res.json()).then(data => {
//         //console.log(data)
//         toText.value = data.responseData.translatedText
//         toText.setAttribute("placeholder", "Translation")
//     })
//     //console.log(text)
// })

// icons.forEach(icon => {
//     icon.addEventListener("click", ({target}) =>{
//         console.log(target)
//         if(target.classList.contains("fa-copy")){
//             if(target.id == "from"){
//                 navigator.clipboard.writeText(fromText.value)
//             }else{
//                 navigator.clipboard.writeText(toText.value)
//             }
//         }else{
//             let utterance
//             if(target.id == "from"){
//                utterance = new SpeechSynthesisUtterance(fromText.value)
//                utterance.lang = selectTag[0].value
//             }else{
//                 utterance = new SpeechSynthesisUtterance(toText.value)
//                 utterance.lang = selectTag[1].value
//             }
//             speechSynthesis.speak(utterance) //speak the pass utterance
//         }
//     })
// })
