import { useState } from "react";
import styles from './RenderingList.module.css';

interface Barber {
    id: number;
    name: string;
    specialty: string;
    isAvailable: boolean;
}

interface BarberCardProps {
    barber: Barber;
}

const initialBarbers:  Barber[] = [
    {id: 1, name: 'barber 1', specialty: 'haircut 1', isAvailable: true},
    {id: 2, name: 'barber 2', specialty: 'haircut 2', isAvailable: false},
    {id: 3, name: 'barber 3', specialty: 'haircut 3', isAvailable: true},
    {id: 4, name: 'barber 4', specialty: 'haircut 4', isAvailable: true},
    {id: 5, name: 'barber 5', specialty: 'haircut 5', isAvailable: false},
];

function BarberCard( {barber} : BarberCardProps) {
    return (
        <article className={styles.card}>
            <h3> {barber.name} </h3>
            <p>{barber.specialty}   </p>
            <p className={`${styles.status} ${
                barber.isAvailable ? styles.available : styles.busy
            }`}>

                {barber.isAvailable? '🟢 Available' : '🔴 Busy' }
            </p>
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
