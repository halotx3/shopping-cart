let itemList = [{

}];

let addCart = function(){
    let itemName = $(this)[0].innerText;
    let itemCat = $(this).attr('data-catagory');
    let itemPrice = $(this).val;

    console.log(itemName);
    console.log(itemCat);
    console.log(itemPrice);
}

$('#sector').on('click', '.item', addCart);
