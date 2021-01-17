import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "TitleCase"
})

export class TitleTransformService implements PipeTransform{
  transform(value:string){
    if(!value)
      return null;
    let prepositions = ['of', 'the'];
    let words = value.split(" ");
    for(var i=0; i<words.length; i++){
      if(words[i].includes(words[i])){
        words[i] = words[i].toLowerCase();
      }
      else{
        words[i] = words[i].substr(0,1).toUpperCase()+ words[i].substr(1).toLowerCase();
      }
    }

      return words.join(" ");
    }
}
