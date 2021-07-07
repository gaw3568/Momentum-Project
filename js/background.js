const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// HTML의 Element생성 함수 : createElement()
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// Body 내에 새로운 HTML요소를 추가
document.body.appendChild(bgImage);