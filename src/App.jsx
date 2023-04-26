import Card from "./components/Card"
import posterImg from "./assets/img.jpg"
import posterImg2 from "./assets/img2.jpg"
import posterImg3 from "./assets/img3.jpg"

export default function App() {
  return (
    <div className="app">
      <Card title="Pôster: Star Wars (1977)" img={posterImg} />
      <Card title="Pôster: Empire Strikes Back (1980)" img={posterImg2} />
      <Card title="Pôster: Return of the Jedi (1983)" img={posterImg3} />
    </div>
  )
}