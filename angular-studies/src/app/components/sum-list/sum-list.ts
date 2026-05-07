import { Component, computed, signal } from "@angular/core";

@Component({
    selector: 'app-sum-list',
    standalone: true,
    templateUrl: './sum-list.html',
    styleUrl: './sum-list.scss'
})

export class SumList {
    numbers = signal([
        {id: 1, value: 11},
        {id: 2, value: 22},
        {id: 3, value: 33},
        {id: 4, value: 44},
    ])

    totalSum = computed(() => 
        this.numbers().reduce((acc, n) => acc + n.value, 0 )
    );
}