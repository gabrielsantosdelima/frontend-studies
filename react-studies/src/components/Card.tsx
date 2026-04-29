    export function Card (props: CardProps) {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.children}
        </div>
    );
}

interface CardProps {
    title: string;
    children: React.ReactNode;
}