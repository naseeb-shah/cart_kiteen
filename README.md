
# Exploding Kitten Game

## Introduction
This is a single-player card game built using React and Redux, based on the popular card game "Exploding Kittens". The objective of the game is to draw cards from the deck, avoiding the exploding kitten card, and successfully draw all other cards to win.

## Features
- Start the game with a deck of 5 cards.
- Draw a random card from the deck each time the player clicks on it.
- Remove cat cards, defuse cards, and shuffle cards from the deck as per the game rules.
- Lose the game if an exploding kitten card is drawn.
- Win the game by successfully drawing all other cards from the deck.

## Game Rules
1. **Cat Card 😼**: The card is removed from the deck when drawn.
2. **Exploding Kitten Card 💣**: The player loses the game if this card is drawn.
3. **Defuse Card 🙅‍♂️**: The card is removed from the deck, and it can be used to defuse one bomb that may come in subsequent cards.
4. **Shuffle Card 🔀**: The game is restarted, and the deck is filled with 5 cards again.

## Installation and Setup
1. Clone the repository to your local machine.
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory.
   ```
   cd exploding-kitten-game
   ```
3. Install dependencies using npm or yarn.
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

## Usage
1. Start the React app.
   ```
   npm start
   ```
   or
   ```
   yarn start
   ```
2. Access the game in your browser at `http://localhost:3000`.
3. Click on the "Start Game" button to begin playing.
4. Click on the deck to draw a card and follow the game rules to continue playing.
5. Continue drawing cards until you either win or lose the game.

## Technologies Used
- React
- Redux
- HTML
- CSS



## Author
- [naseeb-shah]


