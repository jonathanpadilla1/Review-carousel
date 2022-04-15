// local reviews data
const reviews = [
  {
    id: 0,
    name: "sara jones",
    job: "ux designer",
    img: "./person-0.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed. do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "./person-1.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry. I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up.",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "./person-2.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal. Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "./person-3.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.  Velit aliquet sagittis id consectetur purus ut faucibus. Lorem mollis aliquam ut porttitor leo a diam sollicitudin.  Odio tempor orci dapibus ultrices in iaculis nunc. Adipiscing commodo elit at.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "./person-4.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    name: "katherine valente",
    job: "senior engineer",
    img: "./person-5.jpg",
    text: "Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Amet consectetur adipiscing elit ut aliquam purus sit amet. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Commodo sed egestas egestas fringilla phasellus. Placerat in egestas erat imperdiet sed. Urna neque viverra justo nec ultrices. Urna nec tincidunt praesent semper feugiat.",
  },
];

let value = 0;
let newName = document.getElementById("author");

function nextReview() {
  ++value;
  switch (true) {
    case value === 1 || value === -5:
      newName = reviews[1].name;
      document.getElementById("author").textContent = reviews[1].name;
      document.getElementById("job").textContent = reviews[1].job;
      document.getElementById("info").textContent = reviews[1].text;
      document.getElementById("person-img").src = "./person-1.jpg";
      break;
    case value === 2 || value === -4:
      newName = reviews[2].name;
      document.getElementById("author").textContent = reviews[2].name;
      document.getElementById("job").textContent = reviews[2].job;
      document.getElementById("info").textContent = reviews[2].text;
      document.getElementById("person-img").src = "./person-2.jpg";
      break;
    case value === 3 || value === -3:
      newName = reviews[3].name;
      document.getElementById("author").textContent = reviews[3].name;
      document.getElementById("job").textContent = reviews[3].job;
      document.getElementById("info").textContent = reviews[3].text;
      document.getElementById("person-img").src = "./person-3.jpg";
      break;
    case value === 4 || value === -2:
      newName = reviews[4].name;
      document.getElementById("author").textContent = reviews[4].name;
      document.getElementById("job").textContent = reviews[4].job;
      document.getElementById("info").textContent = reviews[4].text;
      document.getElementById("person-img").src = "./person-4.jpg";
      break;
    case value === 5 || value === -1:
      newName = reviews[5].name;
      document.getElementById("author").textContent = reviews[5].name;
      document.getElementById("job").textContent = reviews[5].job;
      document.getElementById("info").textContent = reviews[5].text;
      document.getElementById("person-img").src = "./person-5.jpg";
      break;
    default:
      value = 0;
      newName = reviews[0].name;
      document.getElementById("author").textContent = reviews[0].name;
      document.getElementById("job").textContent = reviews[0].job;
      document.getElementById("info").textContent = reviews[0].text;
      document.getElementById("person-img").src = "./person-0.jpg";
  }
  // console.log(value);
}
const btn = document.querySelector(".next-btn");
btn.addEventListener("click", nextReview);

function prevReview() {
  --value;
  switch (true) {
    case value === -5 || value === 1:
      newName = reviews[1].name;
      document.getElementById("author").textContent = reviews[1].name;
      document.getElementById("job").textContent = reviews[1].job;
      document.getElementById("info").textContent = reviews[1].text;
      document.getElementById("person-img").src = "./person-1.jpg";
      break;
    case value === -4 || value === 2:
      newName = reviews[2].name;
      document.getElementById("author").textContent = reviews[2].name;
      document.getElementById("job").textContent = reviews[2].job;
      document.getElementById("info").textContent = reviews[2].text;
      document.getElementById("person-img").src = "./person-2.jpg";
      break;
    case value === -3 || value === 3:
      newName = reviews[3].name;
      document.getElementById("author").textContent = reviews[3].name;
      document.getElementById("job").textContent = reviews[3].job;
      document.getElementById("info").textContent = reviews[3].text;
      document.getElementById("person-img").src = "./person-3.jpg";
      break;
    case value === -2 || value === 4:
      newName = reviews[4].name;
      document.getElementById("author").textContent = reviews[4].name;
      document.getElementById("job").textContent = reviews[4].job;
      document.getElementById("info").textContent = reviews[4].text;
      document.getElementById("person-img").src = "./person-4.jpg";
      break;
    case value === -1 || value === 5:
      newName = reviews[5].name;
      document.getElementById("author").textContent = reviews[5].name;
      document.getElementById("job").textContent = reviews[5].job;
      document.getElementById("info").textContent = reviews[5].text;
      document.getElementById("person-img").src = "./person-5.jpg";
      break;
    default:
      value = 0;
      newName = reviews[0].name;
      document.getElementById("author").textContent = reviews[0].name;
      document.getElementById("job").textContent = reviews[0].job;
      document.getElementById("info").textContent = reviews[0].text;
      document.getElementById("person-img").src = "./person-0.jpg";
  }
  // console.log(value);
}
const btn2 = document.querySelector(".prev-btn");
btn2.addEventListener("click", prevReview);

function randReview() {
  let randValue = Math.floor(Math.random() * reviews.length);
  value = `${randValue}`;
  newName = reviews[0].name;
  document.getElementById("author").textContent = reviews[`${randValue}`].name;
  document.getElementById("job").textContent = reviews[`${randValue}`].job;
  document.getElementById("info").textContent = reviews[`${randValue}`].text;
  document.getElementById("person-img").src = `./person-${randValue}.jpg`;

  // console.log("'Surprise' button clicked!");
  // console.log(randValue);
}
const btn3 = document.querySelector(".random-btn");
btn3.addEventListener("click", randReview);

// console.log(reviews[1].name);
// console.log(value);
