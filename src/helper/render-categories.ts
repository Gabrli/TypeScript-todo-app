import { Category } from "../categories/categories";
export const renderCategories = (categories: Category[], categoriesContainer: HTMLElement, inputChangeCallback: (category: Category) => void) => {
    categories.forEach((category) => {
      const categoryElement: HTMLElement = document.createElement("li");
      categoryElement.textContent = category;
      const categoryCheckBox: HTMLInputElement = document.createElement("input");
  
      categoryCheckBox.type = "radio";
      categoryCheckBox.name = "category";
      categoryCheckBox.value = category;
      categoryCheckBox.id = `category-${category}`;
      categoryElement.appendChild(categoryCheckBox);
      categoriesContainer.appendChild(categoryElement);
      categoryCheckBox.addEventListener("change", () => {
        inputChangeCallback(category)
      });
    });
  };