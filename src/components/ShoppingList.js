import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onAddNewItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchItem, setSearchItem] = useState(``);

  function handleCategoryChange(event) {
    return setSelectedCategory(event);
  }

  // const itemsArray = items.map((item) => {
  //   const nameArray = item.name.split("");
  //   return console.log(nameArray);
  // });
  // function toArray() {
  //   const array = searchItem.split("");
  //   array.filter((letter) => {});
  // }
  // toArray();

  // item.name.toLowerCase() === searchItem.toLowerCase()

  // const partialSearch = items.map((item) => {
  //   return item.name.toLowerCase().includes(searchItem.toLocaleLowerCase())
  //     ? item
  //     : null;
  // });

  const itemsToDisplay = items.filter((item) => {
    if ((selectedCategory === "All") & (searchItem.length === 0)) {
      return true;
    }
    if (item.category === selectedCategory) {
      return item;
    }
    if (item.name.toLowerCase().includes(searchItem.toLocaleLowerCase())) {
      return item;
    } else {
      return null;
    }
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={(e) => onAddNewItem(e)} />
      <Filter
        onCategoryChange={(e) => handleCategoryChange(e)}
        onSearchChange={(e) => setSearchItem(e.target.value)}
        search={searchItem} //check Later
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;