import styles from "./Container.module.css"


export default function Container({ clildren }) {
    return (
        <section className={styles.container}>
            {clildren}
        </section>
    );
}