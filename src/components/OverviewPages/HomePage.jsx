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
            </ul>
            <h2>Design principles</h2>
            <ul>
                <li>Performant:
                    <ul>
                        <li>Fetching repo's in App.js so they don't need to be refetched every time a page is reloaded</li>
                        <li>Client-side commit filtering (On author name + commit message)</li>
                        <li>TODO</li>
                    </ul>
                </li>
                <li>Mobile first styling</li>
                <li></li>
            </ul>

            <h2>TODO's features</h2>
            <ul>
                <li>Separating class components and functional components Check</li>
                <li>TODO: BEM CSS: http://getbem.com/introduction/</li>
                <li>TODO: Endless scrolling</li>
                <li>TODO: Changing repository location in list</li>
                <li>TODO: ES6 features (ES6 import, arrow function)</li>
                <li>TODO: Testing</li>
                <li>TODO: Edge cases (API failing etc)</li>
            </ul>
        </div>
    );
}

export default HomePage;