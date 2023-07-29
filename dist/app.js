import { render } from "./helper/render-tasks.js";
import { renderCategories } from "./helper/render-categories.js";
const inputElement = document.querySelector(".input-todo");
const btnAdd = document.querySelector(".btn-add");
const todoContainer = document.querySelector(".todo-list");
const categoriesContainer = document.querySelector(".categories-box");
let selectedCategory;
const categories = ["general", "work", "gym", "hobby"];
const tasks = [];
const addTask = () => {
    const inputValue = inputElement.value;
    const newItem = {
        title: inputValue,
        done: false,
        category: selectedCategory,
        id: Math.random(),
    };
    tasks.push(newItem);
    render(tasks, todoContainer);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
renderCategories(categories, categoriesContainer, updateSelectedCategory);
btnAdd.addEventListener("click", addTask);
