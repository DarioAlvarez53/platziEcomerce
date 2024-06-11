import { useState, useEffect } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail";

function Home() {
  //Creando la variable para guardar los datos de los productos
  const [items, setItems] = useState(null);

  //Creando el consumo de la informacion
  useEffect(() => {
    fetch('https://fakestoreapi.com/products') //aqui trae la informacion como una promesa
    .then(response => response.json())//Aqui consumimos la informacion como promesa pero llendo a conertirla a JSON
    .then(data => setItems(data))//Aqui guardamos la informacion en el setItem
  }, [])

  return (
    <Layout>
      <div className="grid gap-3 grid-cols-4 w-full max-w-screen-lg">
        {
          items?.map(item => (
            <Card key={item.id} data={item} />
          ))
        }  
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home
