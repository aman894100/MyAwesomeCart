<script>
if (localStorage.getItem('cart') == null)
{
  var cart={};
}
else{
  cart = JSON.parse(localStorage.getItem('cart'));
  document.getElementById('cart').innerHTML = Object.keys(cart).length;
  
}

{% comment %} jqery starts here {% endcomment %}

$('.cart').click(function(){
var idstr = this.id.toString();
console.log(idstr);
if(cart[idstr]!= undefined){
  cart[idstr] += 1;
}
else{
  cart[idstr] = 1;
}
console.log(cart);
localStorage.setItem('cart', JSON.stringify(cart));
document.getElementById('cart').innerHTML = Object.keys(cart).length;
});


</script>