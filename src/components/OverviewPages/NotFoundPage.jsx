import React from "react";
import Header from "../common/Header";
import styles from "./overviewPages.module.css"

const NotFoundPage = () => {
    return (
        <div className={styles.body}>
            <Header text="Error: page not found" size="large" />
        </div>
    );
}

export default NotFoundPage;