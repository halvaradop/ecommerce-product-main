import { useState } from "react" 
import { Button } from "./Button"
import { ShowShooes } from "./ShowShooes"
import minus from "../assets/minus.svg"
import plus from "../assets/plus.svg"
import cart from "../assets/cart.svg"

const Main = () => {
    const [quantityBuy, setQuantityBuy] = useState(0)

    const handleAddBuy = () => {
        
    }

    const handleMinusQuantity = () => {
        const less = quantityBuy -1
        setQuantityBuy(less > 0? less : 0)
    }

    const handlePlusQuantity = () => {
        setQuantityBuy(quantityBuy +1)
    }

    return (
        <main>
            <ShowShooes/>
            <section className="py-2 px-3">
                <article>
                    <h2 className="text-orange text-xs font-bold uppercase">sneaker company</h2>
                    <h2 className="mt-1 mb-1.5 text-blue text-base/10 font-bold capitalize">Fall Limited Edition Sneakers</h2>
                    <p className="text-blue-200 text-sm">
                        These low-profile sneakers are your perfect casual wear companion. Featuring a
                        durable rubber outer sole, they’ll withstand everything the weather can offer.
                    </p>
                </article>
                <section className="my-3 flex items-center justify-between">
                    <div className="flex items-center gap-x-2">
                        <h3 className="text-blue text-base font-bold">$125.00</h3>
                        <span className="py-0.5 px-1 text-orange text-xs font-bold rounded-md bg-orange-100">50%</span>
                    </div>
                    <span className="text-blue-200 text-md font-bold line-through decoration-2">$250.00</span>
                </section>
                <figure className="p-1.5 flex items-center justify-between rounded-md bg-blue-300">
                    <img src={minus} alt="minus icon" onClick={handleMinusQuantity} />
                    <figcaption className="text-blue text-sm font-bold">
                        {quantityBuy}
                    </figcaption>
                    <img src={plus} alt="plus icon" onClick={handlePlusQuantity} />
                </figure>
                <Button className="w-full mt-2 mb-5 flex items-center justify-center gap-x-1" color="orange" size="sm" onClick={handleAddBuy}>
                    <>
                        <img src={cart} alt="cart icon" />
                        <span>Add to cart</span>
                    </>
                </Button>
            </section>
        </main>
    )
}

export { Main }