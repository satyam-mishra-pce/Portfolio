// Initializing important variables
const sectionIDs = ["home", "personal", "education"];
const sections = 
sectionIDs.map(sectionID => {
    return document.querySelector("#" + sectionID)
});
let currentSectionID = "home";
const sectionBtns = Array.from(document.querySelectorAll("#page-list button"));
// Adding the home button (from breadcrumb) into the sectionBtns list
sectionBtns.splice(0, 0, document.querySelector("#home-btn"));
console.log(sectionBtns);


// Function to update the sections on screen by ID
const updateSections = sectionID => {
    sections.forEach(section => {
        section.style.display = "none";
        section.classList.add("invisible");
    });
    let index = sectionIDs.indexOf(sectionID);
    sections[index].style.display = null;
    setTimeout(() => {
        sections[index].classList.remove("invisible");
    });
    currentSectionID = sectionID;
}


// Function to handle click on section buttons.
const handleSection = idx => {
    if (sectionIDs[idx] == currentSectionID) {
        return; // Return if the section is same.
    }

    // Update the button colors on page list
    sectionBtns.forEach(btn => {
        btn.classList.remove("active");
    })
    if (idx != 0) {
        sectionBtns[idx].classList.add("active");
    }

    // Update the sections
    updateSections(sectionIDs[idx]);
}


const init = () => {
    updateSections(currentSectionID);
    for (let i = 0; i < sectionBtns.length; i++) {
        sectionBtns[i].addEventListener("click", () => {
            handleSection(i);
        })
    }
}

init();