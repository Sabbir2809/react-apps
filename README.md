# React.js

### Getting Started with React

**Terms:** JSX, DOM, Virtual DOM, Components: functional vs class, JS Library & Framework

1. React is a JavaScript library for building dynamic and interactive user interfaces.

1. In React applications, we don’t query and update the DOM. Instead, we describe our application using small, reusable components. React will take care of efficiently creating and updating DOM elements.

1. React components can be created using a function or a class. Function-based components are the preferred approach as they’re more concise and easier to work with.

1. JSX stands for JavaScript XML. It is a syntax that allows us to write components that combine HTML and JavaScript in a readable and expressive way, making it easier to create complex user interfaces.

1. When our application starts, React takes a tree of components and builds a JavaScript data structure called the virtual DOM. This virtual DOM is different from the actual DOM in the browser. It’s a lightweight, in-memory representation of our component tree.

1. When the state or the data of a component changes, React updates the corresponding node in the virtual DOM to reflect the new state. Then, it compares the current version of virtual DOM with the previous version to identify the nodes that should be updated. It’ll then update those nodes in the actual DOM.

1. In browser-based apps, updating the DOM is done by a companion library called ReactDOM. In mobile apps, React Native uses native components to render the user interface.

1. Since React is just a library and not a framework like Angular or Vue, we often need other tools for concerns such as routing, state management, internationalization, form validation, etc.

### Building Components

**Terms:** Fragment, Immutable, Props, State Hooks

1. In React apps, a component can only return a single element. To return multiple elements, we wrap them in a fragment, which is represented by empty angle brackets.

1. To render a list in JSX, we use the ‘array.map()’ method. When mapping items, each item must have a unique key, which can be a string or a number.

1. To conditionally render content, we can use an ‘if’ statement or a ternary operator.

1. We use the state hook to define state (data that can change over time) in a component. A hook is a function that allows us to tap into built-in features in React.
1. Components can optionally have props (short for properties) to accept input.

1. We can pass data and functions to a component using props. Functions are used to notify the parent (consumer) of a component about certain events that occur in the component, such as an item being clicked or selected.

1. We should treat props as immutable (read-only) and not modify them.

1. When the state or props of a component change, React will re-render the component and update the DOM accordingly.

1. In React apps, a component can only return a single element. To return multiple elements, we wrap them in a fragment, which is represented by empty angle brackets.

### Styling Components

**Terms:** CSS-in-JS, CSS Modules, Inline Styles, Vanilla CSS

1. We have several options for styling React components, including vanilla CSS, CSS modules, CSS-in-JS, and inline styles.

1. With vanilla CSS, we write our component styles in a separate CSS file and import it into the component file. However, we may encounter conflicts if the same CSS classes are defined in multiple files.

1. CSS modules resolve this issue by generating unique class names during the build process.

1. With CSS-in-JS, we define all the styles for a component alongside its code. Like CSS modules, this provides scoping for CSS classes and eliminates conflicts. It also makes it easier for us to change or delete a component without affecting other components.

1. The separation of concerns principle suggests that we divide a program into distinct sections or modules where each section handles a specific functionality. It helps us build modular and maintainable applications.

1. With this principle, the complexity and implementation details of a module are hidden behind a well-defined interface.

1. Separation of concerns is not just about organizing code into files, but rather dividing areas of functionality. Therefore, CSS-in-JS does not violate the separation of concerns principle as all the complexity for a component remains hidden behind its interface.

1. Although inline styles are easy to apply, they can make our code difficult to maintain over time and should only be used as a last resort.

1. We can add icons to our applications using the react-icons library.

1. There are several UI libraries available that can assist us in quickly building beautiful and modern applications. Some popular options include Bootstrap, Material UI, TailwindCSS, DaisyUI, ChakraUI, and more.

### Managing Component State

**Terms:** Asynchronous, Lifting State, Pure Component, Strict Mode

1. The state hook allows us to add state to function components.
1. Hooks can only be called at the top level of components.
1. State variables, unlike local variables in a function, stay in memory as long as the component is visible on the screen. This is because state is tied to the component instance, and React will destroy the component and its state when it is removed from the screen.
1. React updates state in an asynchronous manner, so updates are not applied immediately. Instead, they’re batched and applied at once after all event handlers have finished execution. Once the state is updated, React re-renders our component.
1. Group related state variables into an object to keep them organized.
1. Avoid deeply nested state objects as they can be hard to update and maintain.
1. To keep state as minimal as possible, avoid redundant state variables that can be computed from existing variables.
1. A pure function is one that always returns the same result given the same input. Pure functions should not modify objects outside of the function.Managing Component State
1. React expects our function components to be pure. A pure component should always return the same JSX given the same input.
1. To keep our components pure, we should avoid making changes during the render phase.
1. Strict mode helps us catch potential problems such as impure components. Starting from React 18, it is enabled by default. It renders our components twice in development mode to detect any potential side effects.
1. When updating objects or arrays, we should treat them as immutable objects. Instead of mutating them, we should create new objects or arrays to update the state.
1. Immer is a library that can help us update objects and arrays in a more concise and mutable way.
1. To share state between components, we should lift the state up to the closest parent component and pass it down as props to child components.
1. The component that holds some state should be the one that updates it. If a child component needs to update some state, it should notify the parent component using a callback function passed down as a prop.

### Building Forums

**Terms:** React Hook Form, Ref Hook, Schema-based validation libraries, Zod

1. To handle form submissions, we set the onSubmit attribute of the form element.
1. We can use the ref hook to access elements in the DOM. This technique is often used to read the value of input fields upon submitting a form.
1. We can also use the state hook to create state variables and update them as the user types into input fields. With this technique, every time the user types a character into an input field, the component containing the form gets re-rendered. While in theory this can cause a performance penalty, in practice this is often negligible.
1. React Hook Form is a popular library that helps us build forms quickly with less code. With React Hook Form, we no longer have to worry about using the ref or state hooks to manage the form state.
1. React Hook Form supports the standard HTML attributes for data validation such as required, minLength, etc.
1. We can validate our forms using schema-based validation libraries such as joi, yup, zod, etc. With these libraries, we can define all our validation rules in a single place called a schema.

[GitHub Repository](https://github.com/mosh-hamedani/react-course-part1)
