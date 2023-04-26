import posterImg from "../../assets/img.jpg"
import styles from "./styles.module.css"

export default function Card() {
  return (
    <div className={styles.containerFather} >
      <div className={styles.container}>
        <img className={styles.poster} src={posterImg} alt="imagem poster" />
        <div>
          <h2>Poster do Filme Star Wars</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus illum deserunt quam! Quae labore amet nesciunt molestias dolorem! Deleniti atque est rerum at suscipit laborum officia labore iusto eius aut sint tempora, magnam hic? Laudantium tempora qui sunt dicta nesciunt.</p>
          <button>Comprar Agora</button>
        </div>
      </div>
    </div>
  )
}