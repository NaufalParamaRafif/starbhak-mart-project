$(document).ready(function(){
  $(".menu").click(function(){
    
    nameFood = $("h5", this).text();
    unitPrice = $("h6", this).text();

    if ($("."+nameFood+"").length) {
      quantity = parseInt($("."+nameFood+" .quantity span").text());
      totalPrice = parseFloat(convertRupiahToInt($("."+nameFood+" .total-price span").text()));
      unitPrice = parseFloat(convertRupiahToInt($("."+nameFood+".unit-price span").text()));
      quantity++;
      totalPrice += unitPrice;

      $("."+nameFood+" .quantity span").text(quantity);
      $("."+nameFood+" .total-price span").text(totalPrice);
      
    } else {
      newElement = '<div class="item-in-troll '+nameFood+'">' +
          '<p class="name-of-food">'+nameFood+'</p>' +
          '<p class="total-price right"><span class="right">'+unitPrice+'</span></p>' +
          '<div class="item-in-troll-image">' +
            '<img src="images/trash.svg" alt="">' +
          '</div>' +
          '<p class="unit-price">Unit price <span class="right" id="unit-price">'+unitPrice+'</span></p>' +
          '<p class="quantity">Quantity: <span class="right">1</span></p>' +
        '</div>';
      $(newElement).appendTo(".item-in-troll-container" );
    }
  });
});

function convertRupiahToInt(hargaString){
  hargadislide = hargaString.slice(4);
  hargaInt = parseInt(hargadislide);
  return hargaInt;
}