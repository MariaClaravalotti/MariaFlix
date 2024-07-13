import styles from "./Header.module.css"


export default function Header (){


    return(
        
        <header className={styles.header}>
          <h1>MariaFlix</h1>
          <nav>
            <a href="#">Home</a>
            <a href="#">Assisitr</a>
            <a href="#">Favoritos </a>
          </nav>

        </header>
        
    )
}