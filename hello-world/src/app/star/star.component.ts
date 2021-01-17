import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

export interface StarChangedEventArgs{
  nameOfProperty: boolean
}

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.sass']
})
export class StarComponent  {
  @Input('is-Favorite') isFavorite:boolean = true;
  @Output('change') click = new EventEmitter<StarChangedEventArgs>();

  onClick(){
    this.isFavorite = !this.isFavorite;
    this.click.emit({ nameOfProperty: this.isFavorite});
  }


}

