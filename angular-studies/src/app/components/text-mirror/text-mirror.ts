import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-text-mirror',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './text-mirror.html',
    styleUrl: './text-mirror.scss'
})

export class TextMirror {
    mirroredText = '';
}