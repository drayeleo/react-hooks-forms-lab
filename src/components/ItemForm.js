import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm( {onItemFormSubmit}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function onChangeName(event) {
    setName(event.target.value);
    //console.log(event.target.value);
  }

  function onChangeCategory(event) {
    setCategory(event.target.value);
  }

  function handleSubmit(event) {
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: name,
      category: category,
    }; 
    event.preventDefault();
    //console.log("Yo");
    onItemFormSubmit(newItem);
  }
  
  return (
    <form className="NewItem" onSubmit={handleSubmit} >
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={onChangeName} />
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={onChangeCategory} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
