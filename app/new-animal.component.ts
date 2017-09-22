import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <button *ngIf="showNewAnimalForm === false" class="btn btn-primary" (click)="showNewAnimalForm = !showNewAnimalForm">New Animal</button>
    <div *ngIf="showNewAnimalForm === true">
    <table>
      <tr height="32px">
      <td valign="bottom"><label for="name">Name </label></td>
      <td><input id="name" type="text" #name required></td>
      </tr>
      <tr height="32px">
      <td valign="bottom"><label for="species">Species </label></td>
      <td><input id="species" type="text" #species required></td>
      </tr>
      <tr height="32px">
      <td valign="bottom"><label for="age">Age </label></td>
      <td><input id="age" type="number" #age required></td>
      </tr>
      <tr height="32px">
      <td valign="bottom"><label for="diet">Diet </label></td>
      <td><input id="diet" type="text" #diet required></td>
      </tr>
      <tr height="32px">
      <td valign="bottom"><label for="location">Location </label></td>
      <td><input id="location" type="text" #location required></td>
      </tr>
      <tr height="32px">
      <td valign="bottom"><label for="sex">Sex </label></td>
      <td><input id="sex" type="text" #sex required></td>
      </tr>
      <tr height="32px">
      <td valign="bottom"><label for="caretakers">Caretakers </label></td>
      <td><input id="caretakers" type="number" #caretakers required></td>
      </tr>
      <tr height="32px">
      <td valign="bottom"><label for="likes">Likes </label></td>
      <td><input id="likes"type= "text" #likes required></td>
      </tr>
      <tr height="32px">
      <td valign="bottom"><label for="dislikes">Dislikes </label></td>
      <td><input id="dislikes" type="text" #dislikes required></td>
      </tr>
    </table>

      <button class="btn btn-primary" (click)=
        "submitForm(
          name.value,
          species.value,
          age.value,
          diet.value,
          location.value,
          sex.value,
          caretakers.value,
          likes.value,
          dislikes.value
        );
        showNewAnimalForm = false">Add</button>
      <button class="btn btn-primary" (click)="showNewAnimalForm = false">Hide Form</button>
    </div>
  `
})

export class NewAnimalComponent {
  showNewAnimalForm = false;
  @Output() newAnimalSender = new EventEmitter();

  submitForm(name: string,
    species: string,
    age: number,
    diet: string,
    location: string,
    sex: string,
    caretakers: number,
    likes: string,
    dislikes: string
  ) {
    var newAnimalToAdd: Animal = new Animal(
      name,
      species,
      age,
      diet,
      location,
      sex,
      caretakers,
      likes,
      dislikes
    );
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
