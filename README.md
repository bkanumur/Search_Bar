Search Bar with Voice Input and Suggestions

This project features an interactive, animated search bar with neumorphism design, real-time suggestions, and voice input functionality. Users can type or speak search queries, receive suggestions, and perform a Google search.

Features

	•	Animated Search Bar: Expands and collapses smoothly with a click.
	•	Real-time Suggestions: Displays matching suggestions as the user types.
	•	Voice Input: Supports speech-to-text using the Web Speech API for hands-free interaction.
	•	Google Search Integration: Redirects to Google search results for the entered query on pressing Enter.
	•	Responsive Design: Fully functional on various screen sizes.

Demo

User Flow:

	1.	Click the magnifier icon to expand the search bar.
	2.	Type a query to see suggestions.
	3.	Click a suggestion or press Enter to search on Google.
	4.	Use the microphone icon to input queries via voice.

Technologies Used

	•	HTML: For structuring the web page.
	•	CSS: For styling, animations, and neumorphism effects.
	•	JavaScript: For interactivity, suggestion filtering, and voice input functionality.

How to Use

1. Clone the Repository

git clone https://github.com/your-username/animated-search-bar.git
cd animated-search-bar

2. Open the Project

Open the index.html file in any modern browser.

Code Overview

Key Files

	•	index.html: Contains the structure of the animated search bar.
	•	style.css: Provides the styling and animations for the search bar.
	•	index.js: Handles interactivity, including:
	•	Suggestions generation
	•	Speech recognition
	•	Google search redirection

Browser Compatibility

Feature	Chrome	Edge	Safari	Firefox
Search Suggestions	✔️	✔️	✔️	✔️
Voice Input (Speech API)	✔️	✔️	❌	❌

Customization

	1.	Update Suggestions:
Add or modify suggestions in the index.js file:

const suggestions = [
  "puppy",
  "pure",
  "purple",
  "puma",
  // Add more suggestions here
];


	2.	Styling:
Modify the style.css file to change colors, animations, or layout.

Future Enhancements

	•	Dynamic Suggestions: Integrate with an API like Google Autocomplete for real-time, location-based suggestions.
	•	Keyboard Navigation: Add support for navigating suggestions using the arrow keys.
	•	Multilingual Voice Input: Enable recognition in multiple languages using Web Speech API configurations.

Contribution

Contributions are welcome! Please feel free to submit a pull request or open an issue for suggestions and improvements.

License

This project is licensed under the MIT License. Feel free to use and modify it as needed.
