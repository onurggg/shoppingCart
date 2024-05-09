const productsArray = [
  { id: "1", title: "Coffee", price: 4.99 },
  { id: "2", title: "Camera", price: 50.99 },
  { id: "3", title: "Sunglasses", price: 39.99 },
];

function getProductData(id) {
  let productData = productsArray.find((products) => products.id === id);

  if (productData === undefined) {
    console.log("Product data does not exits for ID:" + id);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
