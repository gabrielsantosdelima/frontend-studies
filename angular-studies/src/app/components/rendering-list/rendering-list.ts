import { Component, signal } from "@angular/core";

@Component({
    selector: 'app-rendering-list',
    standalone: true,
    templateUrl: './rendering-list.html',
    styleUrl: './rendering-list.scss'
})

export class RenderingList {
    barbers = signal([
        {id: 1, name: 'barber 1', specialty: 'haircut 1'},
        {id: 2, name: 'barber 2', specialty: 'haircut 2'},
        {id: 3, name: 'barber 3', specialty: 'haircut 3'},
        {id: 4, name: 'barber 4', specialty: 'haircut 4'},
        {id: 5, name: 'barber 5', specialty: 'haircut 5'},
    ])
}