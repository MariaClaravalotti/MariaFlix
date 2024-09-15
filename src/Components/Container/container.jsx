
import styles from "./Container.module.css"
const btn = document.querySelector('.btn');

    btn.addEventListener('click', ()=>{
        btn.style.backgroundColor= '#ffac09'
        btn.style.boxShadow= '0 0 40px #ffac09'
        btn.style.transition= '.5s ease'
    });


export default function Container({ clildren }) {
    
    return (
        <section className={styles.container}>
            {clildren}
            <button class="btn">CADASTRE-SE</button>
        </section>


    )
    
}
