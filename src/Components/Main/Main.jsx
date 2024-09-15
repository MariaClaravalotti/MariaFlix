import React, { useState, useEffect } from "react"
import axios from "axios"
import styles from "./Main.module.css"

function Main() {

    //Esse array [] vai guardar as informações que forem puxadas da API
    const [data, setData] = useState([])
  
  
    //( ASYNC)É uma função que não é sincronizada com a página, ou seja, não depende da página para ser ativada, depende somente dos dados vindo da API.
    const getData = async () => {
  
      const resp = await axios.get('https://api.sampleapis.com/movies/horror')
      setData(resp.data)
  
      //setData é a forma de atualizar o estado(data), resp são as informações da API, então. Pegue os dados da API e coloque no meu estado.
  
      //await: espere , get: pegue/pegar => Espere o axios pegar os dados da API filmes e guarde dentro da variável const "resp"
  
      console.log(resp)
  
    }
  
    //O HOOK USEEFFECT PERMITE QUE EXECUTAMOS EFEITOS COLATERAIS EM COMPONENTES FUNCIONAIS. NESTE CASOM QUEREMOS CARREGAR OS DADOS ASSIM QUE O COMPONENTE FUNCIONAL FOR MONTADO. 
    //O ARRAY VAZIO [] SERVE COMO ARGUMENTE PARA GARANTIR QUE O EFEITO SEJA EXUTADO APENAS UMA VEZ.
  
    useEffect(() => {
      getData()
    }, [])
  
  
    return (
      <main class={styles.main}>
  
        {data.map((item) => (
            <a href="https://www.netflix.com/br/" target="_blank">

          <section>
            <img src={item.posterURL} alt={item.title} />
            <h2>{item.title} </h2> 
            {/* <h3>{item.id}</h3> */}
          </section></a>
        ))}
        
      </main>
    )
  }
  
  export default Main