# memory-game

## Authors

* Brady Davenport
* Cheri Hodge
* Ben Small
* Elizabeth Hammes

## Memory game description

### Summary of project

#### A memory matching game using cards

The player is shown all of the cards for a few seconds, and then all cards are turned over, now hidden from the player. The player has X seconds to find as many matches as possible.

#### What problem or pain point does it solve?

The memory game provides users to practice memory recall using a combination of photos and numbers. Users can review their previous scores to gauge their improvement for each round. The goal for the user is to find all matches within the given time limit.

#### Minimum Viable Product (MVP) definition

* Ask for the user to input their name
* For each round, the cards need to be randomized
* A user is shown 16 cards in a 4x4 table/grid format
* A user needs to be able to indicate when to start the game
* Once the game begins, all cards need to be visible for 10 seconds before the content of the cards are hidden. A timer should indicate the 10 seconds.
* After the cards are hidden, reset the timer to display a countdown of 60 seconds and the timer automatically begins. The user begins to select one card at a time, showing the content of the card. If the user selects two cards that are the same, a match is counted and the pair of cards remain shown. If the users selects two cards that do not match, a match is not counted and the cards flip back over to hide the content.
* Card object flip transition will be default behavior, displaying the content on click
* Once time has expired, the user's score is recorded: user's name, number of matches, time elapsed
* Display scoreboard of results
