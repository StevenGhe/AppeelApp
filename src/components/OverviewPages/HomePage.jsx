import React from "react";
import styles from "./overviewPages.module.css"

const HomePage = () => {
    return (
        <div className={styles.body}>
            <h1>Welcome to my assessment!</h1>
            <h2>Technologies used</h2>
            <ul>
                <li><a href="https://reactrouter.com/web/guides/quick-start">React router</a> (General routing)</li>
                <li><a href="https://react-bootstrap.github.io/">React Bootstrap</a> (Styling)</li>
                <li><a href="https://material-ui.com/">Material UI</a> (Styling)</li>
                <li><a href="https://www.npmjs.com/package/react-router-bootstrap">React Router Bootstrap </a>(Enable React Router while using the React Bootstrap components (using LinkContainer))</li>
                <li>GitHub REST API</li>
                <li>Css modules</li>
                <li>Redux (State management) + React-Redux + Redux-Thunk Middleware (Defining async actions)</li>
                <li>Axios for more Browser support compared to JS fetch</li>
                <li>Favorite repositories </li>
            </ul>
            <h2>TODO's features</h2>
            <ul>
                <li>TODO: BEM CSS: http://getbem.com/introduction/</li>
                <li>TODO: Endless scrolling (Error onderaan ipv overlapping)</li>
                <li>TODO: ES6 features (ES6 import, arrow function)</li>
                <li>TODO: Testing (edge cases API)</li>
            </ul>
        </div>
    );
}

export default HomePage;