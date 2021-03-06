var cart = [];

function total() {
  let t = 0

  for (let i = 0, l = cart.length; i < l; i++) {
    for (let item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart(){
  return cart
}

function setCart(new_cart = []){
  cart = new_cart
}

function addToCart(item){
  tempHash = {}
  tempHash[item] = Math.floor((Math.random() * 100) + 1);
  cart.push(tempHash);
  console.log(item+" has been added to your cart.");
  return cart
}

function viewCart(){
  if (cart.length > 0){
    var tempCart = [];
    for (var i = 0; i < cart.length; i++){
    for (var item in cart[i]){
      tempCart.push(item + " at $" + cart[i][item]);
    }
   }
   console.log("In your cart, you have " + tempCart.join(",")+".");
 } else
   console.log('Your shopping cart is empty.');
}

function removeFromCart(item){
  var checkItem = false;
  for (let i = 0; i < cart.length; i++){
    for (var key in cart[i]){
      if (key == item){
        checkItem = true
        delete cart[i];
      }
    }
  }
  checkItem ? cart : console.log('That item is not in your cart.');
}

function placeOrder(cc){
  if (cc === undefined){
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log("Your total cost is " + total() + ", which will be charged to "+cc+".")
    setCart();
  }
}
