
import styles from "./styles.module.css"
import Button from "../Button"

export default function Card(props) {
  return (
    <div className={styles.containerFather} >
      <div className={styles.container}>
        <img className={styles.poster} src={props.img} alt={props.title} />
        <div>
          <h2>{props.title}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus illum deserunt quam! Quae labore amet nesciunt molestias dolorem! Deleniti atque est rerum at suscipit laborum officia labore iusto eius aut sint tempora, magnam hic? Laudantium tempora qui sunt dicta nesciunt.</p>
          <Button />
        </div>
      </div>
    </div>
  )
}