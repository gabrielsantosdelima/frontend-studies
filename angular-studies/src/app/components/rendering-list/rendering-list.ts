import { Component, signal } from "@angular/core";

interface Barber {
    id: number;
    name: string;
    specialty: string;
    isAvailable: boolean;
}

@Component({
    selector: 'app-rendering-list',
    standalone: true,
    templateUrl: './rendering-list.html',
    styleUrl: './rendering-list.scss'
})

export class RenderingList {
    barbers = signal<Barber[]>([
        {id: 1, name: 'barber 1', specialty: 'haircut 1', isAvailable: true},
        {id: 2, name: 'barber 2', specialty: 'haircut 2', isAvailable: false},
        {id: 3, name: 'barber 3', specialty: 'haircut 3', isAvailable: false},
        {id: 4, name: 'barber 4', specialty: 'haircut 4', isAvailable: true},
        {id: 5, name: 'barber 5', specialty: 'haircut 5', isAvailable: false},
    ])
}