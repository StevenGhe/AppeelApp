import React, { Component } from "react";

class HomePage extends Component {
    state = {}
    render() {
        return (
            <div >
                <h1>Welcome to my assessment!</h1>
                <h2>Technologies used</h2>
                <ul>
                    <li><a href="https://reactrouter.com/web/guides/quick-start">React router</a> (General routing)</li>
                    <li><a href="https://react-bootstrap.github.io/">React Bootstrap</a> (Styling)</li>
                    <li><a href="https://material-ui.com/">Material UI</a> (Styling)</li>
                    <li><a href="https://www.npmjs.com/package/react-router-bootstrap">React Router Bootstrap </a>(enable React Router while using the React Bootstrap components (using LinkContainer))</li>
                    <li>GitHub REST API</li>
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
                    <li>TODO: Css modules</li>
                    <li>TODO: Endless scrolling</li>
                    <li>TODO: Changing repository location in list</li>
                    <li>TODO: Look into extra state management</li>
                    <li>TODO: ES6 features</li>
                    <li>TODO: Testing</li>
                    <li>TODO: Edge cases (API failing etc)</li>
                </ul>
            </div>
        );
    }
}

export default HomePage;