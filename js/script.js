var list = document.getElementById('list'),
    add = document.getElementById('js-add_elem');


add.addEventListener('click', function(){
  var element = document.createElement('li'),
  		li_quantity = list.getElementsByTagName('li').length;

  element.innerHTML = 'item ' + li_quantity;
  list.appendChild(element);

});
