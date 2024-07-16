let selectedLayout = "layout_1.html"; // Default layout

function produceCookBook() {
  var topics = [];
  for (var i = 1; i <= topicCount; i++) {
    var topic = document.getElementById("recipe" + i).value.trim();
    if (topic) {
      topics.push(topic);
    }
  }

  if (topics.length === 0) {
    alert("Please fill in at least one topic.");
    return;
  }
  toggleLoading(true);

  const payload = {
    topics: topics,
    layout: selectedLayout,
  };

  fetch("http://localhost:8000/generate_recipe", {
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

let topicCount = 1;

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
