let itemList = [{

}];

let render = function(){

}

let addCart = function(){
    let itemName = $(this)[0].innerText;
    let itemCat = $(this).attr('data-catagory');
    let itemPrice = $(this).attr('data-price');

    console.log(itemName);
    console.log(itemList.name);
    console.log(itemCat);
    console.log(itemPrice);

    render();
}

$('#sector').on('click', '.item', addCart);
