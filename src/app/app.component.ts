import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      imgURL: 'assets/images/tree.jpeg',
      title: 'Neat Tree',
      username: 'JohnThough',
      content: 'Climbed this beautiful tree today',
    },
    {
      imgURL: 'assets/images/mountain.jpeg',
      title: 'Snowy Mountain',
      username: 'JohnDough',
      content: 'Climbed this beautiful mountain today',
    },
    {
      imgURL: 'assets/images/biking.jpeg',
      title: 'Biker',
      username: 'JohnDoh',
      content: 'Climbed onto this beautiful bike today',
    },
    {
      imgURL: 'assets/images/tree.jpeg',
      title: 'Neat Tree',
      username: 'JohnThough',
      content: 'Climbed this beautiful tree today',
    },
    {
      imgURL: 'assets/images/mountain.jpeg',
      title: 'Snowy Mountain',
      username: 'JohnDough',
      content: 'Climbed this beautiful mountain today',
    },
    {
      imgURL: 'assets/images/biking.jpeg',
      title: 'Biker',
      username: 'JohnDoh',
      content: 'Climbed onto this beautiful bike today',
    },
  ];
}
