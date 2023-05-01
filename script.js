const itemform = document.getElementById('item-form')
const itemInput = document.getElementById('item-input')
const itemList = document.getElementById('item-list')


function addItem (e) {
    e.preventDefault();
    const newItem = itemInput.value

    //validate Input
    if(newItem === ''){
        alert("Please enter an Item")
        return;
    }

    //create list item 
    const li= document.createElement('li')
    li.appendChild(document.createTextNode(newItem));

    const button = createButton('remove-btn')
    li.appendChild(button)

    itemList.appendChild(li)

    itemInput.value = ''
    // console.log(li)
}

function createButton(classes) {
    const button = document.createElement('button')
    button.className = classes;
    const icons = createIcon('fa-solid fa-circle-xmark')
    button.appendChild(icons)
    return button;
}

function createIcon(classes) {
    const icons = document.createElement('i')
    icons.className = classes;
    return icons
}

//event listeners
itemform.addEventListener('submit',addItem);

