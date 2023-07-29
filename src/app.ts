import { Task } from "./types/types";
import { Category } from "./categories/categories";
import { render } from "./helper/render-tasks.js";
import { renderCategories } from "./helper/render-categories.js";
const inputElement: HTMLInputElement = document.querySelector(".input-todo");
const btnAdd: HTMLButtonElement = document.querySelector(".btn-add");
const todoContainer: HTMLElement = document.querySelector(".todo-list");
const categoriesContainer: HTMLElement =
  document.querySelector(".categories-box");

let selectedCategory: Category;

const categories: Category[] = ["general", "work", "gym", "hobby"];
const tasks: Task[] = [];

const addTask = () => {
  const inputValue: string = inputElement.value;

  const newItem = {
    title: inputValue,
    done: false,
    category: selectedCategory,
    id: Math.random(),
  };
  tasks.push(newItem);

  render(tasks, todoContainer);
};

const updateSelectedCategory = (newCategory: Category) => {
  selectedCategory = newCategory;
};

renderCategories(categories, categoriesContainer, updateSelectedCategory);

btnAdd.addEventListener("click", addTask);
