import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function ItemForm({ onItemFormSubmit }) {
  const [itemCategory, setAddItemCategory] = useState(`Produce`);
  const [itemName, setAddItemName] = useState(``);
  const newItem = {
    id: uuid(),
    name: itemName,
    category: itemCategory,
  };

  return (
    <form
      className="NewItem"
      onSubmit={(event) => {
        event.preventDefault();
        onItemFormSubmit(newItem);
      }}
    >
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={(e) => setAddItemName(e.target.value)}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          onChange={(e) => setAddItemCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;