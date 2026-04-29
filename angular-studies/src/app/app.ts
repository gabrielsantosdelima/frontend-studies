import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Greeting } from './components/greeting/greeting';
import { Card } from './components/card/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Greeting, Card],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-studies');
}
