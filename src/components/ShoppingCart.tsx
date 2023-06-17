import { Button } from "./Button"
import trash from "../assets/delete.svg"

type ShoppingCartProps = {
    id: number,
    img: string,
    title: string
    price: number,
    quantity: number,
    onDelete: (id: number) => void
}


const ShoppingCart = ({ id, img, title, price, quantity, onDelete }: ShoppingCartProps) => {
    return (
        <article className="w-full p-2 next:border-b">
            <figure className="w-full mb-1.5 flex items-center justify-between gap-x-1">
                <img className="w-5 h-5 rounded-md" src={img} alt="picture shoes" />
                <img className="order-1 hover:cursor-pointer" src={trash} alt="trash icon" onClick={() => onDelete(id)} />
                <figcaption className="flex items-start flex-col text-blue-200 text-xs">
                    <h2 className="font-bold">{title}</h2>
                    <div className="w-full flex gap-x-2">
                        <span>${price} x {quantity}</span>
                        <span className="text-blue font-bold">$ {price * quantity}.00</span>
                    </div>
                </figcaption>
            </figure>
            <Button className="w-full" color="orange" size="sm">Checkout</Button>
        </article>
    )
}

export { ShoppingCart }
