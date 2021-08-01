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
        </div>
    );
}

export default HomePage;