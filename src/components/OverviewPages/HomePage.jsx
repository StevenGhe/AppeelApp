import React from "react";
import Header from "../common/Header";
import styles from "./overviewPages.module.css"
import { featureList } from "./featureList";
import List from "../common/List";

const HomePage = () => {
    return (
        <div className={styles.body}>
            <Header text="Welcome to my assessment!" size="large" />
            <Header text="Technologies used" size="medium" />
            <List items={featureList} />
            
            <Header text="TODO features" size="medium" />
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