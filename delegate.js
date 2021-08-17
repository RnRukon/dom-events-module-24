// item remove form list
// const items = document.getElementsByClassName('item');
// console.log(items);
// for (const item of items) {
//     item.addEventListener('click', function (event) {
//         // console.log('remove item');
//         // ----------------------------
//         // document.getElementById('item-container').removeChild(item);
//         // ----------------------------

//         event.target.parentNode.removeChild(event.target);
//     });
// }



// -------------------------------------------------------------------
// new item add to list

document.getElementById('add-item').addEventListener('click', function () {
    const li = document.createElement('li');
    // console.log(li);

    li.innerText = "Brand New Item";

    li.classList.add('item')
    const parent = document.getElementById('item-container');
    parent.appendChild(li);


})

document.getElementById('item-container').addEventListener('click', function (event) {
    // console.log(event.target);
    event.target.parentNode.removeChild(event.target);
})
