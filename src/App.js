import React, { Component } from 'react';
import CategorySelector from './components/CategorySelector';
import ProductList from './components/ProductList';

class App extends Component {
  state = {
    selectedCategory: { id: 0, name: 'All Categories' },
    categories: [
      { id: 0, name: 'All Categories' },
      { id: 1, name: 'Electronics' },
      { id: 2, name: 'Clothing' },
      { id: 3, name: 'Books' },
    ],
    products: [
      { id: 1, name: 'Laptop', idCategory: 1 },
      { id: 2, name: 'Shirt', idCategory: 2 },
      { id: 3, name: 'Phone', idCategory: 1 },
      { id: 4, name: 'Novel', idCategory: 3 },
    ]
  };

  handleSelectCategory = (category) => {
    this.setState({ selectedCategory: category });
  };

  render() {
    const { selectedCategory, products, categories } = this.state;

    let filteredProducts = products; 
    if (selectedCategory.id !== 0) {
      filteredProducts = products.filter(
        (product) => product.idCategory === selectedCategory.id
      );
    }

    return (
      <div>
        <h1>Product Filter</h1>
        <CategorySelector
          categories={categories}
          onSelectCategory={this.handleSelectCategory}
        />
        <ProductList products={filteredProducts} />
      </div>
    );
  }
}

export default App;
