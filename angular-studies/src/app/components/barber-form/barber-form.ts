import { Component, output } from "@angular/core";
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from "@angular/forms";

interface Barber {
    id: number;
    name: string;
    specialty: string;
    isAvailable: boolean;
}

@Component({
    selector: 'app-barber-form',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './barber-form.html',
    styleUrl: './barber-form.scss'
})

export class BarberForm {
    barberAdded = output<Omit<Barber, 'id'>>();

     form = new FormGroup({
        name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
        specialty: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
        isAvailable: new FormControl(true, { nonNullable: true }),
    });

    onSubmit() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        const { name, specialty, isAvailable } = this.form.getRawValue();
        this.barberAdded.emit({ name, specialty, isAvailable });
        this.form.reset({ name: '', specialty: '', isAvailable: true });
    }
}