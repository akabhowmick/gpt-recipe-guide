let selectedLayout = "layout_1.html"; // Default layout

function produceCookBook() {
  var ingredientList = document.getElementById("ingredients-list").value.split(",");
  var cuisines = document.getElementById("cuisine-list").value.split(",");
  var desiredCookingTime = parseInt(document.getElementById("cook-time").value, 10);

  if (ingredientList.length === 0) {
    alert("Please fill in at least one ingredient.");
    return;
  }
  toggleLoading(true);
  const payload = {
    ingredientList: ingredientList,
    cuisines: cuisines,
    desiredCookingTime: desiredCookingTime,
    layout: selectedLayout,
  };

  fetch("http://localhost:8000/generate_cookbook", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => {
      toggleLoading(false);
      displayRecipe(data);
    })
    .catch((error) => {
      toggleLoading(false);
      console.error("Error:", error);
    });
}

function toggleLoading(isLoading) {
  const loadingSection = document.getElementById("loading");
  const loadingRecipes = document.getElementById("loadingRecipes");
  const messages = [
    "Looking for recipes...",
    "Curating recipes...",
    "Writing recipes...",
    "Editing final recipes...",
  ];
  loadingRecipes.style.fontFamily = "'Gill Sans', sans-serif";
  if (isLoading) {
    loadingSection.classList.remove("hidden");
    let messageIndex = 0;
    loadingRecipes.textContent = messages[messageIndex];
    const interval = setInterval(() => {
      if (messageIndex < messages.length - 1) {
        messageIndex++;
        loadingRecipes.textContent = messages[messageIndex];
      } else {
        clearInterval(interval);
      }
    }, 12000);
    loadingSection.dataset.intervalId = interval;
  } else {
    loadingSection.classList.add("hidden");
    clearInterval(loadingSection.dataset.intervalId);
  }
}

window.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("produceCookbook").addEventListener("click", produceCookbook);
  document.querySelectorAll(".layout-icon").forEach((icon) => {
    icon.addEventListener("click", selectLayout);
  });
});

function displayRecipe(data) {
  if (data.path) {
    window.location.href = data.path;
  } else {
    console.error("Error: Recipe path not found");
  }
}
