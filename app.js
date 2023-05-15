const form = document.querySelector("#meme-form");
const memeContainer = document.querySelector("#meme-container");

const letters = document.querySelectorAll(".letter");

function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

setInterval(function () {
  for (let letter of letters) {
    letter.style.color = black();

    form.style.backgroundColor = green();
  }
}, 1000);
document.addEventListener("mousemove", function (e) {
  const r = Math.round((e.pageX * 255) / window.innerWidth);

  const b = Math.round((e.pageY * 255) / window.innerHeight);
  const color = `rgb(${r}, 0, ${b})`;

  document.body.style.backgroundColor = color;
});

alert(
  "For the part where it says image URL, you have to go to google search for an image and copy its image address and paste here and that's it!! "
);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const topText = document.querySelector("#top-text").value;
  const bottomText = document.querySelector("#bottom-text").value;
  const imageUrl = document.querySelector("#image-url").value;

  if (!topText || !bottomText || !imageUrl) {
    alert("Please fill in all fields.");
    return;
  }

  const memeDiv = document.createElement("div");
  memeDiv.classList.add("meme");

  const memeImage = document.createElement("img");
  memeImage.src = imageUrl;
  memeDiv.appendChild(memeImage);

  const topTextDiv = document.createElement("div");
  topTextDiv.classList.add("top-text");

  topTextDiv.innerText = topText;
  memeDiv.appendChild(topTextDiv);

  const bottomTextDiv = document.createElement("div");
  bottomTextDiv.classList.add("bottom-text");
  bottomTextDiv.innerText = bottomText;
  memeDiv.appendChild(bottomTextDiv);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");

  deleteButton.innerText = "X";

  deleteButton.addEventListener("click", function () {
    memeContainer.removeChild(memeDiv);
  });

  memeDiv.appendChild(deleteButton);

  memeContainer.appendChild(memeDiv);

  form.reset();
});
