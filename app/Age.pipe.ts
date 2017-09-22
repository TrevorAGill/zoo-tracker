import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "Age",
  pure: false
})

export class AgePipe implements PipeTransform {

  transform(input: Animal[], desiredAge) {
    var output: Animal[] = [];
    if(desiredAge === "allAnimals") {
      for (var i = 0; i <input.length; i++) {
        output.push(input[i]);
      }
      return output;
    } else if (desiredAge === "youngAnimals") {
        for (var i = 0; i <input.length; i++) {
          if (input[i].age < 2){
            output.push(input[i]);
          }
        }
      return output;
    } else if (desiredAge === "matureAnimals") {
        for (var i = 0; i <input.length; i++) {
          if (input[i].age >= 2){
            output.push(input[i]);
          }
        }
      return output;
    } else {
      return input;
    }
  }
}
