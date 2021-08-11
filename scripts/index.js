//create html 
function createCard(todo) {
    const card = document.createElement('div');

    const cardContent = document.createElement('div');
    const cardConteiner = document.createElement('label');
    const cardTitle = document.createElement('h2');
    const cardCheckbox = document.createElement('input');
    const cardTime = document.createElement('p');
    const cardText = document.createElement('p');
    const cardButton = document.createElement('button');

    cardTitle.textContent = todo.title;
    cardTime.textContent = todo.time;
    cardText.textContent = todo.text;
    cardButton.textContent = 'Delete';

    card.className = `card bg-gradient-to-r from-blue-300 to-purple-300`;
    cardCheckbox.type = 'checkbox';
    cardContent.className = 'content';
    cardConteiner.className = 'container';
    cardTitle.className = 'title';
    cardTime.className = 'text';
    cardText.className = 'text';
    cardButton.className ='button';

    cardConteiner.append(cardCheckbox, cardTitle);
    cardContent.append(cardConteiner, cardTime, cardText);
    card.append(cardContent, cardButton);

    root.append(card);
}  

function createModal() {
    const modal = document.createElement('div');
    modal.className = 'fixed z-10 inset-0 overflow-y-auto hidden';
    modal.id = "modal";
    root.append(modal);

    const owerlay = document.createElement('div');
    owerlay.className = "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0";
    modal.append(owerlay);

    const back = document.createElement('div');
    back.className = 'fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity';
    owerlay.append(back);

    const content = document.createElement('span');
    content.className = 'hidden sm:inline-block sm:align-middle sm:h-screen';
    content.textContent = ' ';
    back.append(content);

    const align = document.createElement('div');
    align.className = 'inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'
    back.append(align);

    const backgroundWhite = document.createElement('div');
    backgroundWhite.className = "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4";
    align.append(backgroundWhite);

    const flex = document.createElement('div');
    flex.className = "sm:flex sm:items-start";
    backgroundWhite.append(flex);

    const img = document.createElement('div');
    img.className = "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10";
    img.innerHTML = `<svg class="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>`
    flex.append(img);

    const text = document.createElement('div');
    text.className = "mt-3 text-center sm:mt-2 sm:ml-4 sm:text-left";
    flex.append(text);

    const header = document.createElement('h3');
    header.className = "text-lg leading-6 font-medium text-gray-900";
    header.textContent = "Create new item";
    text.append(header);

    const article = document.createElement('div');
    article.className = "mt-2";
    text.append(article);

    const input = document.createElement('div');
    input.className = "mt-7";
    article.append(input);

    const inputTitle = document.createElement('input');
    const inputTime = document.createElement('input');
    const inputText = document.createElement('input');

    inputText.type = 'text';
    inputTime.type = 'text';
    inputTitle.type = 'text';

    inputText.id = 'inputText';
    inputTime.id = 'inputTime';
    inputTitle.id = 'inputTitle';

    inputTime.placeholder = 'Enter time';
    inputTitle.placeholder = 'Enetr title';
    inputText.placeholder = "Enter text";

    input.append(inputTitle, inputTime, inputText);

    const buttons = document.createElement('div');
    buttons.className = "bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse";
    align.append(buttons);

    const okButton = document.createElement('button');
    okButton.className = "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-7 py-2 bg-gradient-to-r from-blue-400 to-purple-400 text-base font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 sm:ml-3 sm:w-auto sm:text-sm";
    okButton.textContent = "Add";
    okButton.id = "okButton"
    buttons.append(okButton);

    const cancelButton = document.createElement('button');
    cancelButton.className = "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm";
    cancelButton.textContent = "Cancel";
    cancelButton.id = 'cancelButton';
    buttons.append(cancelButton);
}

function createAddButton(){
    const newButton = document.createElement('button');
    newButton.textContent = 'Add item';
    newButton.className = 'root--button bg-gradient-to-r from-blue-300 to-purple-300';
    newButton.id = 'addButton';
    root.append(newButton);
}




//root
const root = document.querySelector(".root");

//DATA
let todos = [];


createAddButton();
createModal();

const okButton = document.querySelector("#okButton");
const cancelButton = document.querySelector("#cancelButton");
const addButton = document.querySelector("#addButton");


addButton.addEventListener('click', () => {
    const modal = document.querySelector("#modal");
    modal.classList.toggle('hidden');
}) 

cancelButton.addEventListener('click', () => {
    const modal = document.querySelector("#modal");
    inputText.value = '';
    inputTime.value = '';
    inputTitle.value = '';
    modal.classList.toggle('hidden');
}) 

okButton.addEventListener('click', () => {
    const inputText = document.querySelector("#inputText");
    const inputTitle = document.querySelector("#inputTitle");
    const inputTime = document.querySelector("#inputTime");
    let todo = {};
    todo.title = inputTitle.value;
    todo.time = inputTime.value;
    todo.text = inputText.value;
    inputText.value = '';
    inputTime.value = '';
    inputTitle.value = '';
    modal.classList.toggle('hidden');
    createCard(todo);
    todos.push(todo);
})
