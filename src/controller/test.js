// Create a product:

    const ProductModel = require('./productModel');

const newProductData = {
    title: "Shirt",
    short_des: "XXL size white formal shirt",
    price: 150.00,
    discount: 25,
    image: "productImage.jpg",
    stock: "In stock",
    star: "4",
    remark: "Very good quality",
};

ProductModel.create(newProductData)
    .then(product => {
        console.log("Product created successfully:", product);
    })
    .catch(error => {
        console.error("Error creating product:", error);
    });

// Read the data of a single product:

    const ProductModel = require('./productModel');

// Replace "specific_product_id" with the actual ID of the product you want to read
const productId = "specific_product_id";

ProductModel.findById(productId)
    .then(product => {
        if (product) {
            console.log("Product found:", product);
        } else {
            console.log("Product not found");
        }
    })
    .catch(error => {
        console.error("Error reading product:", error);
    });

// Delete a product based on a specific ID:

    const ProductModel = require('./productModel');

// Replace "specific_product_id" with the actual ID of the product you want to delete
const productId = "specific_product_id";

ProductModel.findByIdAndDelete(productId)
    .then(product => {
        if (product) {
            console.log("Product deleted successfully:", product);
        } else {
            console.log("Product not found");
        }
    })
    .catch(error => {
        console.error("Error deleting product:", error);
    });

// Update a product based on a specific ID:

    const ProductModel = require('./productModel');

// Replace "specific_product_id" with the actual ID of the product you want to update
const productId = "specific_product_id";

const updatedProductData = {
    title: "Shirt",
    short_des: "XXL size white formal shirt",
    price: 149.99,
    discount: 20,
    image: "newProductImage.jpg",
    stock: "In stock",
    star: "4",
    remark: "Very good quality",
};

ProductModel.findByIdAndUpdate(productId, updatedProductData, { new: true })
    .then(updatedProduct => {
        if (updatedProduct) {
            console.log("Product updated successfully:", updatedProduct);
        } else {
            console.log("Product not found");
        }
    })
    .catch(error => {
        console.error("Error updating product:", error);
    });

// [Assuming productModel.js is in the same directory]










