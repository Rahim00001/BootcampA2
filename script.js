let seeMoreBtn = document.querySelector('#seeMore-btn');
let currentItem = 6;

seeMoreBtn.onclick = () => {
    let items = [...document.querySelectorAll('.item-card')];
    for (var i = currentItem; i < currentItem + 6; i++) {
        items[i].style.display = 'inline-block';
    }
    currentItem += 6;
    console.log('dsdsdsds');
}