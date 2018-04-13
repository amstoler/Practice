import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  joke: string;

  constructor() {
    this.joke = 'What did the cheese say when it looked in the mirror?';
  }

  ngOnInit() {
  }

}
