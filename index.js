let imgArray = [
  "./images/photo_1.jpg",
  "./images/photo_2.jpg",
  "./images/photo_3.jpg",
  "./images/photo_4.jpg",
  "./images/photo_5.jpg",
  "./images/photo_6.jpg"
];




const images = document.querySelector('.images');

let img = document.createElement('img');
img.src = imgArray[0];
images.appendChild(img);


let index = 1;


document.getElementById('next_button').addEventListener('click', () =>{
    if(index > imgArray.length-1){
        index = 0;
    }
    img.src = imgArray[index];
    index++;
})

document.getElementById('prev_button').addEventListener('click', () =>{
    if(index < 0){
        index = imgArray.length -1``;
    }
    img.src = imgArray[index]
    index--;
})