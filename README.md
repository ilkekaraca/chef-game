# Hot Kitchen

[Click here to see deployed game](http://github.com)

## Description

Hot kitchen is a game which has to complete the orders in full, on time and reach the target score.The game ends when the target score is not reached and the game is not finished in the set time.After that, a score is calculated and if the player wants to play again, the player can restart the game.

## MVP(DOM-CANVAS)

<ul>
<li>game has a chef that moves left,right,up and down</li>
<li>orders appear randomly on the screen</li>
<li>orders are prepared</li>
<li>completed orders are delivered to the service area</li>
<li>failure to reach the target score within the set time limit ends the game</li>
</ul>

## Backlog

- More levels and more recipes
- Better animations and better sprites

## Data structure

#index.js

- This file has declarations of game objects. The game loop is in this file.

#objects.js

- All the game objects are declared here.
- Game objects are classes and I used OOP in this file.
- All the objects extended from base class the GameObject.

#orders.js

- Draws order panel
- Countdown logic and score logic

## Links

- [Slides Link](http://slides.com)
- [Github repository Link](https://github.com/ilkekaraca/chef-game)
- [Deployment Link](https://ilkekaraca.github.io/chef-game/)
