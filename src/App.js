import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🥝": "kiwi",
  "🍇": "grapes",
  "🍈": "melon",
  "🍉": "watermelon",
  "🍊": "tangerine",
  "🍋": "lemon",
  "🍌": "banana",
  "🍍": "pineapple",
  "🥭": "mango",
  "🍎": "apple",
  "🍏": "green apple",
  "🍐": "pear",
  "🍒": "cherry",
  "🍓": "strawberry",
  "🥥": "coconut"
};

var emojis = Object.keys(emojiDictionary);

//styles
var containerCenter = { "max-width": "800px", margin: "auto" };
var navBrand = { "text-align": "left", "font-size": "1.5rem" };

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = " We don't know what this emoji means 😔";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <nav>
        <div style={navBrand}>fruitEmojis</div>
      </nav>
      <div style={containerCenter}>
        <h1>Fruit Emoji Interpretor</h1>
        <input
          onChange={emojiInputHandler}
          placeholder="Enter emoji here"
        ></input>
        <h2>{meaning}</h2>

        {emojis.map((emoji) => {
          return (
            <span
              style={{
                fontSize: "2.5rem",
                padding: "1.5rem",
                margin: "0.5rem",
                cursor: "pointer"
              }}
              key={emoji}
              onClick={() => emojiClickHandler(emoji)}
            >
              {emoji}
            </span>
          );
        })}
      </div>
      <footer>An apple a day keeps the doctor away !</footer>
    </div>
  );
}

// things to notice
// instead of class className is used
// style - takes an object

// VISER - View Interact State in Event handler  React to it

// is reactdom same as browser dom
// react translates react dom to browser dom
