$(document).ready(function(){
  $(".food-menu-container button").click(function(){
    $name_of_food = $(".food-menu-container button h5").text();
    $price = $(".food-menu-container button h6").text();
    $( "<p id='test'>Food name: "+$name_of_food+", Price: "+$price+"</p>" ).appendTo(".item-in-troll-container" );
  });
});