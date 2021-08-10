//root
const root = document.querySelector(".root");

//DATA
let todos = [
    {
        title: 'Drink',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti nemo maxime illum quaerat voluptatem doloribus dolores',
        time: '12:00',
    },
    {
        title: 'Drink',
        text: 'I need to drink right now',
        time: '12:00',
    }
]

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

    card.className = 'card bg-gradient-to-r from-blue-300 to-purple-300';
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

function createInput() {
    const input = document.createElement('div');
    const inputHeading = document.createElement('h2');
    const inputContent = document.createElement('div');
    const inputTitle = document.createElement('input');
    const inputTime = document.createElement('input');
    const inputText = document.createElement('input');
    const send = document.createElement('button');

    inputHeading.textContent = 'Enter new data';
    send.textContent = 'Send';

    inputText.type = 'text';
    inputTime.type = 'text';
    inputTitle.type = 'text';

    inputContent.className = 'data'
    inputHeading.className ='heading';
    input.className = 'card bg-gradient-to-r from-blue-300 to-purple-300';
    send.className = 'button';

    inputTime.placeholder = 'Enter time';
    inputTitle.placeholder = 'Enetr title';
    inputText.placeholder = "Enter text";

    inputContent.append(inputTitle, inputTime, inputText)
    input.append(inputHeading, inputContent, send);
    root.append(input);
}

function render() {
    todos.forEach(obj => {
        createCard(obj);
    })
}

//app
createInput();
render();

