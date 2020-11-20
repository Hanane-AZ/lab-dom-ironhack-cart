// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey");
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const unitPrice = price.innerHTML;
  const val = quantity.value;
  const subT = unitPrice * val;
  const subTotalPrice = product.querySelector(".subtotal");
  subTotalPrice.innerHTML = "$" + subT;
  
  console.log(subT);
  console.log(subTotalPrice);
  
  // console.log("hanane",unitPrice);
 
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 
  // end of test
  const lesProduits = document.querySelector(".product");
  let sum = 0;
  lesProduits.forEach((produit) => {
    // console.log(produit);
    let update = updateSubtotal(produit);
    let toTal = sum + update;
    return toTal;
  });


  // ITERATION 2
  //je n'ai pas réussis à faire cette partie j'ai essayé d'appliquer le for eac

  // ITERATION 3
  //
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
