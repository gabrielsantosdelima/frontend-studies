import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Greeting } from './components/greeting/greeting';
import { Card } from './components/card/card';
import { Counter } from './components/counter/counter';
import { TextMirror } from './components/text-mirror/text-mirror';
import { SumList } from './components/sum-list/sum-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Greeting, Card, Counter, TextMirror, SumList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-studies');
}
