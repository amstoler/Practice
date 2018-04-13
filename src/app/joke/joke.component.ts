import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  joke: object;

  constructor() {
    this.joke = {
      setup: 'What did the cheese say when it looked in the mirror?',
      punchline: 'Halloumi'
    };
  }

  ngOnInit() {
  }

}
