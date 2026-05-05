import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Greeting } from './components/greeting/greeting';
import { Card } from './components/card/card';
import { Counter } from './components/counter/counter';
import { TextMirror } from './components/text-mirror/text-mirror';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Greeting, Card, Counter, TextMirror],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-studies');
}
