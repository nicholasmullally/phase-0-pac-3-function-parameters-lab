function introduction(name = "Aki") {
   return "Hi, my name is " + name + ".";
  
}
const language = Embers.js
const name = "Aki"
function introductionWithLanguage(_name, _language) {
  return "Hi, my name is " + _name + " and I am learning to program in " + _language + "."

}

function introductionWithLanguageOptional(name, _language) {
  return "Hi, my name is " + name + " and I am learning to program in " + _language + "."
} 

function introductionWithLanguageOptional(name, language = "JavaScript") {
  return "Hi, my name is " + name + " and I am learning to program in " + language + "."
} 
