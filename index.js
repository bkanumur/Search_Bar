const searchBarContainerEl = document.querySelector(".search-bar-container");
const magnifierEl = document.querySelector(".magnifier");
const inputEl = document.querySelector(".input");
const micIconEl = document.querySelector(".mic-icon");
const suggestionsEl = document.querySelector(".suggestions");

const suggestions = [
  "puppy",
  "pure",
  "purple",
  "puma",
  "punch",
  "puncture",
  "pumpkin",
  "punctual",
  "punishment",
  "puzzling",
];

// Web Speech API
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// Toggle search bar visibility
magnifierEl.addEventListener("click", () => {
  searchBarContainerEl.classList.toggle("active");
  if (searchBarContainerEl.classList.contains("active")) {
    inputEl.focus();
  }
});

// Search functionality on "Enter"
inputEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const query = inputEl.value.trim();
    if (query) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
    }
  }
});

// Show suggestions while typing
inputEl.addEventListener("input", () => {
  const query = inputEl.value.trim().toLowerCase();
  suggestionsEl.innerHTML = ""; // Clear previous suggestions

  if (query) {
    const filteredSuggestions = suggestions.filter((item) =>
      item.toLowerCase().startsWith(query)
    );

    filteredSuggestions.forEach((suggestion) => {
      const suggestionItem = document.createElement("li");
      suggestionItem.textContent = suggestion;
      suggestionItem.classList.add("suggestion-item");

      // Add click event to auto-fill input with suggestion
      suggestionItem.addEventListener("click", () => {
        inputEl.value = suggestion;
        suggestionsEl.innerHTML = ""; // Clear suggestions
      });

      suggestionsEl.appendChild(suggestionItem);
    });
  }
});

// Voice search using microphone icon
micIconEl.addEventListener("click", () => {
  if (!recognition) {
    alert("Speech recognition is not supported in your browser.");
    return;
  }

  recognition.start(); // Start listening
});

// Populate input with recognized speech
recognition.onresult = (event) => {
  const speechToText = event.results[0][0].transcript;
  inputEl.value = speechToText;
  suggestionsEl.innerHTML = ""; // Clear suggestions

  // Perform Google search if input is filled after recognition
  setTimeout(() => {
    if (inputEl.value.trim()) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(inputEl.value.trim())}`, "_blank");
    }
  }, 500);
};

// Handle recognition errors
recognition.onerror = (event) => {
  console.error("Speech recognition error:", event.error);
};