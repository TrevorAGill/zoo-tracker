import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div *ngIf="childSelectedAnimal">
      <table>
        <tr height="32px">
        <td valign="bottom"><label for="name">Name </label></td>
        <td><input id="name" [(ngModel)]="childSelectedAnimal.name"></td>
        </tr>
        <tr height="32px">
        <td valign="bottom"><label for="species">Species </label></td>
        <td><input id="species" [(ngModel)]="childSelectedAnimal.species"></td>
        </tr>
        <tr height="32px">
        <td valign="bottom"><label for="age">Age </label></td>
        <td><input id="age" [(ngModel)]="childSelectedAnimal.age"></td>
        </tr>
        <tr height="32px">
        <td valign="bottom"><label for="diet">Diet </label></td>
        <td><input id="diet" [(ngModel)]="childSelectedAnimal.diet"></td>
        </tr>
        <tr height="32px">
        <td valign="bottom"><label for="location">Location </label></td>
        <td><input id="location" [(ngModel)]="childSelectedAnimal.location"></td>
        </tr>
        <tr height="32px">
        <td valign="bottom"><label for="sex">Sex </label></td>
        <td><input id="sex" [(ngModel)]="childSelectedAnimal.sex"></td>
        </tr>
        <tr height="32px">
        <td valign="bottom"><label for="caretakers">Caretakers </label></td>
        <td><input id="caretakers" [(ngModel)]="childSelectedAnimal.caretakers"></td>
        </tr>
        <tr height="32px">
        <td valign="bottom"><label for="likes">Likes </label></td>
        <td><input id="likes" [(ngModel)]="childSelectedAnimal.likes"></td>
        </tr>
        <tr height="32px">
        <td valign="bottom"><label for="dislikes">Dislikes </label></td>
        <td><input id="dislikes" [(ngModel)]="childSelectedAnimal.dislikes"></td>
        </tr>
        <button class="btn btn-primary" (click)="doneButtonClicked()">Done</button>
      </table>

    </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

  changeFieldColor(id) {
    console.log(id);
    document.getElementById(id).style.backgroundColor = "red";
  }
}
