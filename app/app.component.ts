import { Component } from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html'
})

export class AppComponent {
  selectedAnimal = null;
  masterAnimalList: Animal[] = [
    new Animal("Bingo","panda",6,"vegetarian","biodome 4","male",4,"soccer balls","competitive gymnastics"),
    new Animal("Claude","cobra",8,"carnivore","biodome 9","male",4,"oxford commas","hot sauce"),
    new Animal("Shelly","hermit crab",6,"omnivore","biodome 2","female",2,"playing devil's advocate","soliciters"),
  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  };

}
