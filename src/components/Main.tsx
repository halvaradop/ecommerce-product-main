import { useRef, useState, MouseEvent } from "react" 
import { Button } from "./Button"
import { SliderItems } from "./SliderItem"
import minus from "../assets/minus.svg"
import plus from "../assets/plus.svg"
import cart from "../assets/cart.svg"

type MainProps = {
    handleClickBuy: (price: number, quantity: number, title: string) => void
}

const Main = ({ handleClickBuy }: MainProps ) => {
    const modalRef = useRef <HTMLDialogElement> (null)
    const priceRef = useRef <HTMLHeadingElement> (null)
    const nameElementRef = useRef <HTMLHeadingElement> (null)
    const [quantityBuy, setQuantityBuy] = useState(0)

    const handleAddBuy = () => {
        if(quantityBuy > 0) {
            const price = parseInt(priceRef.current?.textContent?.slice(1) ?? "")
            const title = nameElementRef.current?.textContent ?? ""
            setQuantityBuy(0)
            handleClickBuy(price, quantityBuy, title)
        }
    }

    const handleMinusQuantity = () => {
        const less = quantityBuy -1
        setQuantityBuy(less > 0? less : 0)
    }

    const handlePlusQuantity = () => {
        setQuantityBuy(quantityBuy +1)
    }

    const handleOpenModal = (event: MouseEvent <HTMLElement> ) => {
        event.target
        if(matchMedia('(min-width: 900px)').matches) {
            modalRef.current?.showModal()
        }
    }

    const handleCloseModal = (event: MouseEvent <HTMLElement> ) => {
        event.target
        modalRef.current?.close()
    }

    return (
        <main className="base:w-90 base:h-[calc(100vh-8rem)] base:mx-auto base:grid base:items-center base:grid-cols-2 lg:w-85 lg:max-w-screen-2xl">
            <SliderItems onDoubleClick={handleOpenModal} />
            <section className="max-w-4xl mx-auto py-2 px-3 sm:py-3 sm:px-4 md:max-w-5xl">
                <article>
                    <h2 className="text-orange text-xs font-bold uppercase">sneaker company</h2>
                    <h2 className="mt-1 mb-1.5 text-blue text-base/10 font-bold capitalize md:text-lg/none" ref={nameElementRef}>Fall Limited Edition Sneakers</h2>
                    <p className="text-blue-200 text-sm">
                        These low-profile sneakers are your perfect casual wear companion. Featuring a
                        durable rubber outer sole, they’ll withstand everything the weather can offer.
                    </p>
                </article>
                <section className="my-3 flex items-center justify-between md:mt-3.5 md:mb-4 base:mt-2 base:mb-3 base:items-start base:flex-col">
                    <div className="flex items-center gap-x-2">
                        <h3 className="text-blue text-base font-bold" ref={priceRef}>$125.00</h3>
                        <span className="py-0.5 px-1 text-orange text-xs font-bold rounded-md bg-orange-100">50%</span>
                    </div>
                    <span className="text-blue-200 text-md font-bold line-through decoration-2">$250.00</span>
                </section>
                <section className="md:flex md:items-center md:gap-x-3">
                    <figure className="p-1.5 flex items-center justify-between rounded-md bg-blue-300 md:w-2/5">
                        <img className="hover:cursor-pointer" src={minus} alt="minus icon" onClick={handleMinusQuantity} />
                        <figcaption className="text-blue text-sm font-bold">
                            {quantityBuy}
                        </figcaption>
                        <img className="hover:cursor-pointer" src={plus} alt="plus icon" onClick={handlePlusQuantity} />
                    </figure>
                    <Button className="w-full mt-2 mb-5 flex items-center justify-center gap-x-1 md:w-3/5 md:m-0" color="orange" size="sm" onClick={handleAddBuy}>
                        <img src={cart} alt="cart icon" />
                        <span>Add to cart</span>
                    </Button>
                </section>
            </section>
            <dialog className="w-full h-screen max-w-none max-h-none open:flex items-center justify-center relative inset-y-0 bg-transparent backdrop:bg-slate-700/70 focus:outline-none" ref={modalRef}>
                <SliderItems className="w-[50rem] mx-auto relative">
                    <div className="w-3 h-2.5 flex items-center justify-center flex-col self-end -order-1 hover:cursor-pointer" onClick={handleCloseModal}>
                        <span className="w-3 h-0.2 block absolute -rotate-45 bg-white"></span>
                        <span className="w-3 h-0.2 block absolute rotate-45 bg-white"></span>
                    </div>
                </SliderItems>
            </dialog>
        </main>
    )
}

export { Main }