export const renderCategories = (categories, categoriesContainer, inputChangeCallback) => {
    categories.forEach((category) => {
        const categoryElement = document.createElement("li");
        categoryElement.textContent = category;
        const categoryCheckBox = document.createElement("input");
        categoryCheckBox.type = "radio";
        categoryCheckBox.name = "category";
        categoryCheckBox.value = category;
        categoryCheckBox.id = `category-${category}`;
        categoryElement.appendChild(categoryCheckBox);
        categoriesContainer.appendChild(categoryElement);
        categoryCheckBox.addEventListener("change", () => {
            inputChangeCallback(category);
        });
    });
};
