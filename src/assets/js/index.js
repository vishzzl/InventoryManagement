function setSvgStyles() {
  document.querySelectorAll("svg").forEach((item) => {
    item.style.fill = "white";
    item.style.width = "18px";
    item.style.height = "18px";
  });
}

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("navbar").id = "navbar-dark";
    document.getElementById("icon").id = "icon-scroll";
    document.querySelectorAll("svg").forEach((item) => {
      item.style.fill = "navy";
    });
  } else {
    document.getElementById("navbar-dark").id = "navbar";
    document.getElementById("icon-scroll").id = "icon";
    setSvgStyles();
  }
}



document.addEventListener('DOMContentLoaded', function() {
  setSvgStyles();
});

window.addEventListener('scroll', function () {
  scrollFunction();
});

window.addEventListener('load', function() {
  // observeAnimations();
});

const observe = new IntersectionObserver(entries =>{
  entries.forEach(entry =>{
    const elements =entry.target.querySelectorAll('[data-animation]')
    console.log(elements)
    elements.forEach(element=>{
      var animation = element.getAttribute("data-animation");
      if(entry.isIntersecting){
        console.log("visible")
        element.classList.add('animate__'+animation)
        return
      }
      else{
        element.classList.remove('animate__'+animation)
      }
    })
   
  })
})

observe.observe(document.querySelector('.cnt-wrapper'))
observe.observe(document.querySelector("#client-wrapper"))
observe.observe(document.querySelector(".stone-types"))

function countUp(target, endValue, duration) {
  let start = 0;
  const increment = endValue / duration;
  const element = document.getElementById(target);
  const interval = setInterval(function () {
      start += increment;
      element.innerText = Math.floor(start) + "%";
      if (start >= endValue) {
          element.innerText = endValue + "%";
          clearInterval(interval);
      }
  }, 1000);
}

// Count up the numbers when the section is in the viewport
function startCounting() {
  const elementsToAnimate = ["count1", "count2", "count3", "count4"];
  const endValues = [45, 100, 10, 15]; // Specify the end values for each element
  elementsToAnimate.forEach((element, index) => {
      setTimeout(() => {
          countUp(element, endValues[index], 2); // You can adjust the duration here
      }, index * 1000); // Delay each count-up animation by 1 second
  });
}

// Check if the section is in the viewport and trigger the counting
const section = document.querySelector(".section");
const observer = new IntersectionObserver(
  (entries) => {
      if (entries[0].isIntersecting) {
          startCounting();
      }
  },
  { threshold: 0.2 } // Adjust the threshold as needed
);

    observer.observe(document.querySelector('#bzvalue'));

const stones = [
  {
    name: 'Italian',
    description: 'Italian marble is renowned worldwide for its exceptional quality, beauty, and versatility. Italy has a rich history of marble quarrying and production, and Italian marble has been used in countless architectural and artistic masterpieces. Here is comprehensive information about Italian marble:',
    // Add other properties and data as needed
  },
  {
    name: 'Onyx',
    description: 'Onyx is a beautiful and widely recognized variety of cryptocrystalline quartz. It is known for its striking appearance, characterized by parallel bands of alternating colors, which give it a distinctive and elegant look. Here is comprehensive information about onyx:',
  },
  // Add information for Granite
  {
    name: 'Granite',
    description: 'Granite is a common and widely recognized type of igneous rock known for its durability, natural beauty, and various applications in construction and design. Here is comprehensive information about granite:',
  },
  {
    name: 'Travertine',
    description: 'Travertine is a sedimentary rock that forms from the precipitation of calcium carbonate in underground water bodies, such as hot springs and caves. It is characterized by its unique appearance, which features a porous, banded, or concentrically layered texture. Here is comprehensive information about travertine:',
  },
  // Add information for Marble
  {
    name: 'Statuario',
    description: 'Statuario marble is a high-quality and highly prized variety of marble known for its stunning white color, distinct veining, and elegant appearance. It is widely used in architecture, interior design, and sculpture due to its exceptional beauty and rarity. Here is comprehensive information about Statuario marble',
  },
  {
    name: 'Kota',
    description: 'Kota stone is a natural limestone that is indigenous to the Kota region in the state of Rajasthan, India. It is a popular and widely used building material known for its distinctive blue-gray, greenish-blue, and brown colors, as well as its durability and suitability for various construction applications. Here is comprehensive information about Kota stone:',
  },
  {
    name: 'Quartz',
    description: 'Quartz is a mineral that is one of the most abundant and widely distributed minerals on Earth. It has a diverse range of uses and comes in various forms, each with its unique properties. Here is comprehensive information about quartz:',
  }
  // Add information for other stones
];

const stoneElements = document.querySelectorAll('.hex');
stoneElements.forEach((stoneElement) => {
  stoneElement.addEventListener('click', () => {
    // Get the stone identifier from the data-stone attribute
    const stoneId = stoneElement.querySelector('img').getAttribute('data-stone');
    console.log(stoneId)
    // Find the corresponding stone information in the array
    const selectedStone = stones.find((stone) => stone.name.toLowerCase() === stoneId);
    console.log(selectedStone)
    // Update the content based on the selected stone
    const stoneTitle = document.getElementById('stone-title');
    const stonedesc = document.getElementById('stone-desc');
    stoneTitle.textContent = selectedStone.name;
    stonedesc.textContent = selectedStone.description
  });

});


