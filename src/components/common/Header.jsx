import styles from "./common.module.css"

const Header = props => {
    return props.size === "large" ? (
        <h1 className={styles.header}>{props.text}</h1>
    ) : props.size === "medium" ? (
        <h2 className={styles.header}>{props.text}</h2>
    ) : (
        <h3 className={styles.header}>{props.text}</h3>
    );
}

export default Header;