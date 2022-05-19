let fullImgBox = document.querySelector('#fullImgBox');
let fullImg = document.querySelector('#fullImg');

//Open full image on mouse click
function openFullImg(picture) {
    fullImgBox.style.display = 'flex';
    fullImg.src = picture;
}

// close full image on mouse click
function closeFullImg() {
    fullImgBox.style.display = 'none';
}