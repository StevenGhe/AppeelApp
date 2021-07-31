import React from "react";
import Header from "../common/Header";
import styles from "./overviewPages.module.css"
import { featureList, es6List } from "./featureList";
import List from "../common/List";

const HomePage = () => {
    return (
        <div className={styles.body}>
            <Header text="Welcome to my assessment!" size="large" />
            <Header text="Technologies used" size="medium" />
            <List items={featureList} />
            
            <Header text="ES6 features used" size="medium" />
            <List items={es6List} />

            <Header text="TODO features" size="medium" />
            <ul>
                <li>TODO: BEM CSS: http://getbem.com/introduction/</li>
                <li>TODO: Endless scrolling (Error onderaan ipv overlapping)</li>
                <li><a href=" https://blog.logrocket.com/validating-react-component-props-with-prop-types-ef14b29963fc/">Prop types (Repocard + commitcard)</a></li>
            </ul>
        </div>
    );
}

export default HomePage;