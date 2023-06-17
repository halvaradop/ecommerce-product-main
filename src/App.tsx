import { useState } from "react"
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import icon from "./assets/product-1-thumbnail.jpg"

type ElementCart = {
  id: number,
  img: string,
  title: string
  price: number,
  quantity: number,
}

const App = () => {
  const [cartList, setCartList] = useState <Array<ElementCart>> ([])

  const handleClickBuy = (price: number, quantity: number, title: string) => {
    setCartList([...cartList, { id: cartList.length +1, img: icon, price, quantity, title }])
  }

  const handleDeleteBuy = (id: number) => {
    setCartList(cartList.filter(buy => buy.id !== id))
  }

  return (
    <>
      <Header cartList={cartList} onDelete={handleDeleteBuy} />
      <Main handleClickBuy={handleClickBuy} />
    </>
  )
}

export default App