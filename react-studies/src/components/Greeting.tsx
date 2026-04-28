const Greeting = (props: GreetingsProp) => {
    return <h1> Hello, {props.name}! </h1>;
}

interface GreetingsProp {
    name: string;
}
export default Greeting;