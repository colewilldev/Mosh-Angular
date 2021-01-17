import { StarChangedEventArgs } from './star/star.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  tweet = {
    body: "This is the body of the tweet",
    isLiked: true,
    likesCount: 10
  }
  title = 'This is an Angular tutorial!';
  post = {
    isFavorite: true
  }
  onFavoriteChanged(inputFromEvent: StarChangedEventArgs){
    console.log("Favorite Changed:", inputFromEvent.nameOfProperty);
  }
}
