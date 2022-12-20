const btn = document.querySelector("button");
const input = document.querySelector("input");
const container = document.getElementById("container");
const form = document.querySelector("form");

container.addEventListener("click", (eo) => {
  switch (eo.target.className) {
    case "icon-bin icon":
      eo.target.parentElement.parentElement.remove();
      break;
    case "icon-angry2 icon":
      eo.target.className = "icon-heart";

      eo.target.parentElement.parentElement
        .getElementsByTagName("p")[0]
        .classList.add("finich");

      break;

    case "icon-star-full icon":
      eo.target.classList.add("orange");
      container.prepend(eo.target.parentElement);
      break;
    case "icon-star-full icon orange":
      eo.target.classList.remove("orange");
      break;
    default:
      break;
  }
});

form.addEventListener("submit", (eo) => {
  eo.preventDefault();

  const task = `

  <div class="task">
        <span class="icon-star-full icon"></span>
        <p>${input.value}</p>
  
        <div>
          <span class="icon-bin icon"></span>
  
          <span class="icon-angry2 icon"></span>
        </div>
  
        <!--  <span class="icon-heart"></span>  -->
      </div>
  
  
  
  `;

  container.innerHTML += task;
  input.value = "";
});
