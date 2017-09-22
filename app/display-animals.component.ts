import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';
import { AgePipe } from './Age.pipe';
import { DietPipe } from './Diet.pipe';


@Component({
  selector: 'display-animals',
  template: `
  <table id="filterTable">
  <tr>
  <td><span id="filter">FILTERS</span></td>
  <td><select (change)="ageFilterChange($event.target.value)">
     <option value="allAnimals" selected="selected">All Ages</option>
     <option value="youngAnimals">Young Animals</option>
     <option value="matureAnimals">Mature Animals</option>
   </select></td>
   <td><select (change)="dietFilterChange($event.target.value)">
      <option value="allAnimals" selected="selected">All Diets</option>
      <option value="carnivores">Carnivores Only</option>
      <option value="herbivores">Herbivores Only</option>
      <option value="omnivores">Omnivores Only</option>
    </select></td>
   </tr>
   </table>


    <table class="table table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Species</th>
          <th>Age</th>
          <th>Diet</th>
          <th>Location</th>
          <th>Sex</th>
          <th>Caretakers</th>
          <th>Likes</th>
          <th>Dislikes</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor='let currentAnimal of childAnimalList | Age:filterByAge | Diet:filterByDiet'>
          <td>{{currentAnimal.name}}</td>
          <td>{{currentAnimal.species}}</td>
          <td>{{currentAnimal.age}}</td>
          <td>{{currentAnimal.diet}}</td>
          <td>{{currentAnimal.location}}</td>
          <td>{{currentAnimal.sex}}</td>
          <td>{{currentAnimal.caretakers}}</td>
          <td>{{currentAnimal.likes}}</td>
          <td>{{currentAnimal.dislikes}}</td>
          <td><button class="btn btn-primary" (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button></td>
        </tr>
      </tbody>
    </table>
  `
})

export class DisplayAnimalsComponent {
  @Input() childAnimalList: Animal[];
  @Output() editClickSender = new EventEmitter();

  filterByAge: string = "allAnimals";
  filterByDiet: string = "allAnimals";

  editButtonHasBeenClicked(animalToEdit : Animal) {
    this.editClickSender.emit(animalToEdit);
  }

  ageFilterChange(optionFromMenu){
    this.filterByAge = optionFromMenu;
  }

  dietFilterChange(optionFromMenu){
    this.filterByDiet = optionFromMenu;
  }
}
