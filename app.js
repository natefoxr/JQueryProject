$(document).ready(function() {

    const randomNumber = Math.ceil(Math.random() * 83)

    $.get(
        `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`,
        function(data) {
            $('.name').text(`Name: ${data['name']}`);
            $('.height').text(`Height: ${data['height']} meters`);
            $('.mass').text(`Mass: ${data['mass']} kilograms`);
            $('.homeworld').text(`Homeworld: ${data['homeworld']}`);
            $('.species').text(`Species: ${data['species']}`);
            $('.eye-color').text(`Eye Color: ${data['eyeColor']}`);
            $('.hair-color').text(`Hair Color: ${data['hairColor']}`);
            $('.person-img').html(`<img class="image-pull" src="${data['image']}">`);
            $('.image-pull').css("height", "300px");
    })

    $('button').on("click", () => {
        location.reload();
    })

    $('input').on("blur", function() {
        let idNum = $(this).val();
        $.get(
            `https://akabab.github.io/starwars-api/api/id/${idNum}.json`,
            function(data) {
                $('.name').text(`Name: ${data['name']}`);
                $('.height').text(`Height: ${data['height']} meters`);
                $('.mass').text(`Mass: ${data['mass']} kilograms`);
                $('.homeworld').text(`Homeworld: ${data['homeworld']}`);
                $('.species').text(`Species: ${data['species']}`);
                $('.eye-color').text(`Eye Color: ${data['eyeColor']}`);
                $('.hair-color').text(`Hair Color: ${data['hairColor']}`);
                $('.person-img').html(`<img class="image-pull" src="${data['image']}">`);
                $('.image-pull').css("height", "300px");
        })
        
    })


})