var button_programming = document.getElementById("programming-skills")
var button_research = document.getElementById("research-skills")
var button_languages = document.getElementById("languages-skills")

function toggle_programming_function(){
    if (button_programming.style.display === "none"){
        button_programming.style.display = "grid"
        button_research.style.display = "none"
        button_languages.style.display = "none"
    } else {
        button_programming.style.display = "none"
    }
}

function toggle_research_function(){
    if (button_research.style.display === "none"){
        button_research.style.display = "block"
        button_programming.style.display = "none"
        button_languages.style.display = "none"
    } else {
        button_research.style.display = "none"
    }
}

function toggle_languages_function(){
    if (button_languages.style.display === "none"){
        button_languages.style.display = "block"
        button_programming.style.display = "none"
        button_research.style.display = "none"
    } else {
        button_languages.style.display = "none"
    }
}

toggle_programming_function()
toggle_research_function()
toggle_languages_function()

