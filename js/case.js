

document.getElementById("btn-plus").addEventListener("click", function(){
 const quantityInput = document.getElementById("quantity-input");
 const quantityInputString = quantityInput.value;
 const quantityMainNmuber = parseInt(quantityInputString);
 const quantity = quantityMainNmuber +1;

 quantityInput.value = quantity;

})

document.getElementById("btn-minus").addEventListener("click", function(){
    const quantityInput = document.getElementById("quantity-input");
    const quantityInputString = quantityInput.value;
    const quantityMainNmuber = parseInt(quantityInputString);
    const quantity = quantityMainNmuber -1;
   
    quantityInput.value = quantity;
});