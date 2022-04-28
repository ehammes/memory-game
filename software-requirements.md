# Software Requirements

## Vision

### What is the vision of this product?

A simple matching game where players click on 'cards' trying to match the images on back side of them.

### What pain point does this project solve?

This game will provide memory improvement in the form of an entertaining game.

### Why should we care about your product?

Doing things to try to improve memory might not always be fun.  Playing a game increases learning and makes it enjoyable.

## Scope (In/Out)

### In - what will your product do?

* Website will have several pages, linked together and able to be navigated to and from.

* Website will take in a username, and scores linked with those usernames will persist in local storage.

* The persisted data will be viewable by users on high scores page

* Each new game will be randomized - the images on the backs of the cards in the game will be in a different layout each time.

* A timer will be displayed on the page and count down while users are playing the game.

### Out - What will your product not do?

* This will not be a mobile app

* This will not reference any APIs or outside libraries

* This will not support multiple users' scores across different devices - only single user's scores on a session-to-session basis, stored locally

## Minimum Viable Product

* A home page with a username input form
* Game
  * A gameplay page with a 4x4 grid of clickable 'cards'
  * Two matching cards stay on page to indicate a match
  * If/when all matches are made, score is logged
* User scores persist in local storage
* A high scores page that displayed persisted score data
* CSS
  * Game centered in page
  * margins between cards
  * Same color scheme on all pages - appealing contrast
  * Same header/footer layout on all pages

## Stretch Goals

* Buttons to increase size of game from 4x4 up to 6x6 and 8x8
* CSS styling for appealing animation/transformation of 'card flips' when cards are clicked on
* Scoring - combine accuracy and time to calculate a score stat
* User inputs - players can choose theme of images on cards (dogs, cars, faces, etc).
* Players can choose color scheme of gameplay area
* Players can choose an avatar that is displayed next their username
