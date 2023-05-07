const itemform = document.getElementById('item-form')
const itemInput = document.getElementById('item-input')
const itemList = document.getElementById('item-list')
const clearBtn  = document.getElementById('clearAll-btn')
const itemFilter = document.getElementById('item-input1')

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
  
    // Add li in the DOM
    itemList.appendChild(li)
    itemInput.value = ''
    // console.log(li)
}

function createButton(classes) {
    const button = document.createElement('button')
    button.className = classes;
    const icons = createIcon('fa-circle-xmark')
    button.appendChild(icons)
    return button;
}

function createIcon(classes) {
    const icons = document.createElement('i')
    icons.className = classes;
    return icons
}

function removeItem (e) {
    if(e.target.parentElement.classList.contains('remove-btn')) {
        // console.log('click')
        e.target.parentElement.parentElement.remove()
    }
}

function clearList () {
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild)
    }
    console.log('clear')
}


function checkUI() {
const items = itemList.querySelectorAll('li')
    console.log(items)
    if(items.length === 0){
        console.log('none')
        clearBtn.style.display = 'none';
        itemFilter.style.display = 'none';
    }else {
        clearBtn.style.display = 'block';
        itemFilter.style.display = 'block';
    }
}

//event listeners
itemform.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
clearBtn.addEventListener('click',clearList);



checkUI();