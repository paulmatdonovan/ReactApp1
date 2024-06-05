import React from "react";
import SearchBar from "./SearchBar";



function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  )
}

export default App;
