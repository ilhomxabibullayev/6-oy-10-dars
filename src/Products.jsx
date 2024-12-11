import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(response => setProducts(response.data.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h2>Popular Products</h2>
            <div className="products">
                {products.map(product => (
                    <div key={product.id} className="product">
                        <Link to={`/product/${product.id}`}>
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
