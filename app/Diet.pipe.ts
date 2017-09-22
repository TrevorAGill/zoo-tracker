import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "Diet",
  pure: false
})

export class DietPipe implements PipeTransform {

  transform(input: Animal[], desiredDiet) {
    var output: Animal[] = [];
    if(desiredDiet === "All") {
      for (var i = 0; i <input.length; i++) {
        output.push(input[i]);
      }
      return output;
    } else if (desiredDiet === "carnivores") {
        for (var i = 0; i <input.length; i++) {
          if (input[i].diet === "carnivore"){
            output.push(input[i]);
          }
        }
      return output;
    } else if (desiredDiet === "herbivores") {
        for (var i = 0; i <input.length; i++) {
          if (input[i].diet === "herbivore"){
            output.push(input[i]);
          }
        }
      return output;
    } else if (desiredDiet === "omnivores") {
        for (var i = 0; i <input.length; i++) {
          if (input[i].diet === "omnivore"){
            output.push(input[i]);
          }
        }
      return output;
    } else {
      return input;
    }
  }
}
