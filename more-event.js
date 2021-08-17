document.getElementById('delete-button').addEventListener('click', function () {
    const deleted = document.getElementById('secret-info');
    deleted.style.display = "none";
});

document.getElementById('delete-confirm').addEventListener('focus', function () {

    document.body.style.backgroundColor = "lightcoral";

});

document.getElementById('delete-confirm').addEventListener('blur', function () {

    document.body.style.backgroundColor = "white";

});

// document.getElementById('delete-confirm').addEventListener('keydown', function () {

//     const deleteField = document.getElementById('delete-confirm');
//     console.log(deleteField.value);

// });

// document.getElementById('delete-confirm').addEventListener('keypress', function () {

//     const deleteField = document.getElementById('delete-confirm');
//     console.log(deleteField.value);

// });



// document.getElementById('delete-confirm').addEventListener('keyup', function () {

//     // const deleteField = document.getElementById('delete-confirm');
//     // console.log(deleteField.value);

// });


document.getElementById('delete-confirm').addEventListener('keyup', function (event) {

    // console.log(event.target.value);

    const deleteButton = document.getElementById('delete-button');
    if (event.target.value === 'delete') {
        deleteButton.removeAttribute('disabled');
    } else {
        deleteButton.setAttribute('disabled', true)
    }

});

document.getElementById('delete-confirm').addEventListener('change', function () {

    const deleteField = document.getElementById('delete-confirm');
    console.log(deleteField.value);

});
