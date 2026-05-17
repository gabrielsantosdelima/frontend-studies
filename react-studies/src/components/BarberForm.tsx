import { useState, type ChangeEvent, type SyntheticEvent } from "react";

interface BarberInput {
    name: string;
    specialty: string;
}

interface Barber extends BarberInput {
    id: number;
}

export function BarberForm(){
    const [barberInput, setBarberInput] = useState<BarberInput>(
        { name: '', specialty: '' },
    );

    const [barbers, setBarbers] = useState<Barber[]>([
        { id: 1, name: 'barber 1', specialty: 'specialty 1' },
    ]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setBarberInput((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAddBarber = (event: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
        event.preventDefault();

        const nextId = barbers.length > 0 ? barbers[barbers.length-1].id+1 : 1;

        const newBarber: Barber = {
            id: nextId,
            ...barberInput
        };

        setBarbers((prevBarbers) => [...prevBarbers, newBarber]);
        setBarberInput({name: '', specialty: ''});
    };

    return (
        <div>
            <h3>Add barber:</h3>
            <form onSubmit={handleAddBarber}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={barberInput.name}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label>Specialty:</label>
                    <input
                        type="text"
                        name="specialty"
                        value={barberInput.specialty}
                        onChange={handleInputChange}
                    />
                </div>

                <button type="submit">
                    Add Barber
                </button>
            </form>

            <h3>Barbers: </h3>
            <ul>
                {barbers.map((barber) => (
                    <li key={barber.id}>
                        {barber.name} - {barber.specialty}
                    </li>
                ))}
            </ul>
        </div>
    )
}