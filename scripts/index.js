

//DATA
let todos = [];

//import functions

import {createAddButton} from "./templates.js";
import {createModal} from "./templates.js";
import {createCard} from "./templates.js";

const root = document.querySelector(".root");


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
