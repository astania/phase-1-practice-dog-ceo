console.log('%c HI', 'color: firebrick')


window.addEventListener('DOMContentLoaded', (e) => {
    getDogPics()
    getDogBreeds()
    dropdownEventListener()
    // getDropdownBox()
})


//getting dogs

function getDogPics() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(response => response.json())
        .then(dogPics => dogPics.message.forEach(dogImageURL => renderDogsToDOM(dogImageURL)))
}

function getDogBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(dogBreeds => Object.keys(dogBreeds.message).forEach(breed => addDogBreeds(breed)))
}

//Renderers
function renderDogsToDOM(pic) {
    const pictureDisplay = document.getElementById("dog-image-container")
    const img = document.createElement('img')
    img.src = pic
    pictureDisplay.appendChild(img)

}

function addDogBreeds(breed) {
    //Get nodes
    const dogBreedList = document.getElementById("dog-breeds")
    const dropdownBox = document.getElementById("breed-dropdown")
    
    //create li, set text, add event listener, add to DOM
    const li = document.createElement("li")
    li.innerText = breed
    li.addEventListener('click', (e) => li.style.color = "red")
    dogBreedList.appendChild(li)
    

    //compare li's text to value of dropdown box. If different, remove from dom
    

    // if (dropdownBox.value !== li.innerText.startsWith(dropdownBox.value)) {
    //     li.remove
    // }
}


function dropdownEventListener(){
    const dropdownBox = document.getElementById("breed-dropdown")
    const dogList = document.getElementById('dog-breeds').childNodes
    dropdownBox.addEventListener("change", (e) =>{
        if(dropdownBox.value === "a"){
            dogList.filter(breed =>{
                console.log(breed.startsWith("a"))
                return breed.startsWith("a") 
            })
        }
    })
}
























// function getDropdownBox() {
//     //get dropdown box
//     const dropdownBox = document.getElementById("breed-dropdown")
//     //get list of dog breeds from DOM
//     const liList = Array.from(document.getElementById("dog-breeds").childNodes)
//     liList.filter(checkFirstLetter)
//     //go through list of breed names and compare the first letter of each one to the value of the dropdown box
//     //if the first letter and the value are ===, do nothing
//     //if the first letter and the value are !==, remove that breed name
//     function checkFirstLetter(breedName){
//         return breedName.startsWith(dropdownBox.value)
//     }

// }

