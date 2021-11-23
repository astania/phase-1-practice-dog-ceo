console.log('%c HI', 'color: firebrick')


window.addEventListener('DOMContentLoaded', (e) => {
  getDogPics()
  getDogBreeds()
  dropdownEventListener()
  // getDropdownBox()
})

//global variables
let breeds = []

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
}


function dropdownEventListener() {
  //select dropdown box
  const dropdownBox = document.getElementById("breed-dropdown")

  //select list of dogs on DOM
  const dogList = document.getElementById('dog-breeds').childNodes

  //when the value in the dropdown box changes, iterate through the list of dog names on the DOM and compare that new value to the first letter of each dog breed name
  dropdownBox.addEventListener("change", (e) => {
    if (e.target.value === "a") {
      filterBreeds("a")
    } else if (e.target.value === "b") {
      filterBreeds("b")
    } else if (e.target.value === "c") {
      filterBreeds("c")
    } else if (e.target.value === "d") {
      filterBreeds("d")
    }
  })
}

  function filterBreeds(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)))
  }

  function updateBreedList(breeds){
    const dogList = document.getElementById('dog-breeds')
    removeAllChildNodes(dogList)
    breeds.forEach(breed => addDogBreeds(breed))
  }

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}