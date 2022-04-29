import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchPhrase, setSearchPhrase] = useState("");
  //const [newItemInput, setNewItemInput] = useState({name:"", category:"Dairy"});   //need to change starting value to produce, this is to test when it takes effect
  

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchPhrase(event.target.value);
  }

  // Delete maybe
  // function handleItemFormChange(event) {
  //   const name = 
  //   setNewItemInput({...newItemInput, })
  // }




  // const itemsToDisplay = items.filter((item) => {
  //   console.log(item.name.slice(0, searchPhrase.length));
  //   if (selectedCategory === "All") return true;

  //   return item.category === selectedCategory;
  // });

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" || item.category === selectedCategory) {
      if (searchPhrase.length > 0) {
        return item.name.includes(searchPhrase);
      } else {
        return true;
      }
    }
    return false;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} searchPhrase={searchPhrase} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
