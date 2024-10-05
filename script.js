const buttonSubmit = document.querySelector('.button_submit');
const ratingContainer = document.querySelector('.rating_container');
const thankYouContainer = document.querySelector('.thank-you_container');
const buttonRating = document.querySelectorAll('.button_rating');
const thankYouSpan = document.querySelector('.thank-you_span')
let numberRating;

buttonRating.forEach(item => {

    item.addEventListener('click', () => {
        buttonRating.forEach(item => {
            if (item.classList.contains('button_active')) {
                item.classList.remove('button_active');
            }
        })
        
        item.classList.add('button_active');
        numberRating = item.textContent;
        thankYouSpan.replaceWith(numberRating); 
    })
})

console.log(numberRating);


buttonSubmit.addEventListener('click', () => {
    ratingContainer.style.display = "none";
    thankYouContainer.style.display = "flex";
})
