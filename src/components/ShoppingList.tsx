import { useEffect, useRef } from "react"
import { ShoppingCart } from "./ShoppingCart"
//import { ShoppingCart } from "./ShoppingCart";

type ElementCart = {
    id: number,
    img: string,
    title: string
    price: number,
    quantity: number,
}  

interface ListProps {
    isOpen: boolean,
    cartList: Array<ElementCart>,
    onDelete: (id: number) => void
}

const CartList = ({ cartList, isOpen, onDelete }: ListProps ) => {
    const ref = useRef <HTMLElement> (null)

    useEffect(() => {
        if(isOpen) {
            ref.current?.classList.replace("hidden", "block")
        }else {
            ref.current?.classList.replace("block", "hidden")
        }
    }, [isOpen])


    return (
        <aside className="w-90 max-w-2xl mr-[5%] ml-auto hidden absolute inset-x-0 top-9 z-20 rounded-md shadow-list bg-white base:max-w-xl base:rounded-3xl lg:mr-[10%]" ref={ref}>
            <h2 className="p-2 text-black text-sm font-bold border-b border-blue-100">Cart</h2>
            <section className="flex items-center flex-col">
                <span className="hidden text-blue-200 text-sm font-bold first-of-type:p-5 first:only:block">Your cart is empty.</span>
                {cartList.map(({ id, img, title, price, quantity }, key) => <ShoppingCart key={key} id={id} img={img} title={title}  price={price} quantity={quantity} onDelete={onDelete} /> )}
            </section>
        </aside>
    )
}

export { CartList }