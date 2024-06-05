import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FilterableProductTable from "./FilterableProductTable"
import { products } from "./data"



ReactDOM.render(<FilterableProductTable products={products} />, document.getElementById('root'));


