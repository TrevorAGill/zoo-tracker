# Zoo Tracker

#### Zoo Tracker, Sept 2017

#### By Trevor Gill

## Description
_An application for keeping track of important details related to the animals at a zoo._

## Setup/Installation Requirements
* Clone the repo
* Install node and npm
* Install bower
* Build gulfile.js
* Open index.html in your preferred browser to launch the application

## Specifications
| Behavior      | Input      | Output       |
| ------------- | ---------- | ------------ |
| The application shall be able to take animal information from a user and create a new animal to be added to the zoo | Animal name: Bingo, Animal species: Panda, etc... | new Animal object |
| The application shall be able to display all details of all animals that have been added to the application | allAnimals = [{Bingo, Claude, Belle}] | Display all details about Bingo, Claude, and Belle |
| The application shall be able to filter the display of animals based on age (animals under 2 and animals over 2 shall be able to be filtered into separate displays) | Display "young animals only" | Display Claude |
| The application shall be able to filter the display of animals based on diet | Display "herbivores only" | Display Claude |
| The application shall allow the user to calculate the total number of caretakers needed based on the animals in the zoo | Animal[] | 12 caretakers |

# Screenshot
![Main page](resources/images/screenshot.jpg)

# Potential Future Improvements
* Add ability to remove animals if they are transferred to another zoo
* Add filter species, for cases where there are multiple animals of a particular species
* Track images of animals
* Add property to track admittance date for animals

## Technologies Used
* HTML/CSS
* Angular 2
* atom
* node + npm
* gulp

### License
Copyright &copy; 2017 Trevor Gill
