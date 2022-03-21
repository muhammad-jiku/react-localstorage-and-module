// setting data to localstorage
const addToDb = (id) => {
  // adding multiple data as object
  let shoppingCart = {};

  // getting cart from localstorage
  const storedCart = localStorage.getItem('shopping-cart');
  if (storedCart) {
    // console.log(storedCart);
    shoppingCart = JSON.parse(storedCart);
  } else {
    shoppingCart = {};
  }

  let quantity = shoppingCart[id];
  //   console.log(quantity);
  if (quantity) {
    const newQuantity = quantity + 1;
    // console.log(newQuantity);
    shoppingCart[id] = newQuantity;
    // console.log(shoppingCart[id]);
    // localStorage.setItem(id, newQuantity);
  } else {
    shoppingCart[id] = 1;
    // console.log(shoppingCart[id], id);
    // localStorage.setItem(id, 1);
  }
  localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
};

const removeFromDb = (id) => {
  console.log('removing', id);
  const storedCart = localStorage.getItem('shopping-cart');
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
  }
};

const deleteDb = () => {
  localStorage.removeItem('shopping-cart');
};

export { addToDb, removeFromDb, deleteDb };
