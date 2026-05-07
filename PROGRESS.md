## Step 1
1 React: Setup + Hello World -> Today I set up a React 19 project with Vite. Learned that a component is just a function that returns JSX. <br/>
2 Angular: Setup + Hello World -> Bootstrapped Angular 21. Standalone means component no longer need NgModule. More similar to React than I expected.<br/>

## Step 2
3 React: Typed Props -> Props in React = function parameters. TypeScript forces me to define the contract.<br/>
4 Angular: Signal-based input() -> Angular 21 uses input() instead of the old @Input(). It's a signal, I read it by calling it as a function.<br/>

## Step 3
5 React: children and composition -> children is React magic prop. Anything between the tags goes into it. Composition > inheritance.<br/>
6 Angular: How each library passes data parent>child -> React passes children as a prop. Angular projects them via <ng-content>. Same concept, different syntax.<br/>

## Step 4
7 React: useState -> useState returns [value, setter]. React re-renders when the setter is called. I never mutate directly.<br/>
8 Angular: Signals -> Signal is a granular reactivity. More explicit than useState, I know exactly when I'm reading (calling as function).<br/>

## Step 5
9 React: Handlers -> React wraps native events in SyntheticEvent so my handlers behave the same across browsers, e.target.value is just the typed input's current text.<br/>
10 Angular: Event binding -> Angular has explicit syntax: () for events, [] for properties, [()] for two-way.<br/>

## Step 6
11 React: Derived state -> Don't store what you can compute. Classic bug: storing what can be derived, state = bare minimum. Compute the rest.<br/>
12 Angular: Same derived sum using computed() -> React re-renders the whole component. Angular Signals updates only what depends on the signal. <br/>

## Step 7
13 React: Rendering Lists -> List of 5 barbers, render as cards.<br/>
14 Angular: @for -> The new Angular control flow is cleaner than *ngFor. track is the equivalent of React's key.<br/>