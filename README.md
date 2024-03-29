# Timer with React

```
Challenge: Create SPA using ReactJS
```

#### Project:

Some functionalities of this Timer:

- Add task name
- Add task time to the task
- Start timer/task
- Interrupt timer/task
- Custom table with timers and informations (running, stopped and finished)

###### Knowledges used:

- Application Structure (Styled Components, Global Styles (colors, fonts and types), ESLint)
- Forms (React Hook Form, Validations)
- Hooks (useEffect, useState)
- ContextAPI (contextCreate, useContext) to solve Prop Drilling situation
- Date Format (date-fns lib)
- Reducer (useReducer, actions, reducers)
- ImmerJS immutable state by mutating the current one, for refatoring of large map sintax
- LocalStorage

#### Techs:

[<img height="32em" alt="Rickelme used Typescript" src="https://www.svgrepo.com/show/349540/typescript.svg" />][ts][<img height="32em" alt="Rickelme used Vite" src="https://www.svgrepo.com/show/374167/vite.svg" />][vite][<img height="32em" alt="Rickelme used Vite" src="https://www.svgrepo.com/show/354259/react.svg" />][react]

#### How to run:

1. Clone this repository;
2. Run `npm install` to install the dependencies;
3. Run `npm run dev` to run the project;
4. When finish the previous commands, open the *localhost url* on the console log and use the application.

###### How to use the ESLint:

If you are thinking about to contribute to this repository is important to follow the coding pattern, check below how to do it.

- Add the [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension to your vscode
- After write the code, just run on the terminal `npm run lint::fix `, it will fix all.



[styledcomponents]: https://styled-components.com/docs
[react]: https://reactjs.org/docs/getting-started.html
[vite]: https://vitejs.dev/
[ts]:https://www.typescriptlang.org/docs/
