import { useEffect, useRef } from "react"

interface Props {
    isOpen: boolean
}

const CartList = ({ isOpen }: Props) => {
    const ref = useRef <HTMLElement> (null);

    useEffect(() => {
        if(isOpen) {
            ref.current?.classList.replace("hidden", "block")
        }else {
            ref.current?.classList.replace("block", "hidden")
        }
    }, [isOpen])

    return (
        <aside className={`w-90 mx-auto hidden absolute inset-x-0 top-9 rounded-md bg-white`} ref={ref}>
            <h2 className="py-2 px-2.5 text-black text-sm font-bold">Cart</h2>
            <section className="grid place-content-center border-t border-blue-100">
                <span className="text-blue-200 text-sm font-bold first-of-type:p-5">Your cart is empty.</span>
            </section>
        </aside>
    )
}

export { CartList }