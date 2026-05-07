import { useState } from "react";

interface Barber {
    id: number;
    name: string;
    specialty: string;
}

interface BarberCardProps {
    barber: Barber;
}

const initialBarbers:  Barber[] = [
    {id: 1, name: 'barber 1', specialty: 'haircut 1'},
    {id: 2, name: 'barber 2', specialty: 'haircut 2'},
    {id: 3, name: 'barber 3', specialty: 'haircut 3'},
    {id: 4, name: 'barber 4', specialty: 'haircut 4'},
    {id: 5, name: 'barber 5', specialty: 'haircut 5'},
];

function BarberCard({barber} : BarberCardProps) {
    return (
        <article>
            <h3>{barber.name}</h3>
            <p>{barber.specialty}</p>
        </article>
    )
}


export function RenderingList() {
    const [barbers] = useState<Barber[]>(initialBarbers);

    return(
        <section>
            <h2>Barbers: </h2>
            <div>
                {barbers.map((barber) => 
                    <BarberCard key={barber.id} barber={barber}/>
                )}
            </div>
        </section>
    )
}
