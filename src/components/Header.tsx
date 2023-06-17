import { useRef, useState, useEffect } from "react"
import menu from "../assets/menu.svg"
import logo from "../assets/logo.svg"
import cart from "../assets/cart.svg"
import user from "../assets/avatar.png"
import close from "../assets/close.svg"
import { CartList } from "./ShoppingList"

const menuHeader: Array<string> = ["Collections", "Men", "Women", "About", "Contact"]

type ElementCart = {
    id: number,
    img: string,
    title: string
    price: number,
    quantity: number,
}
  
type HeaderProps = {
    cartList: Array<ElementCart>,
    onDelete: (id: number) => void
}

const Header = ({ cartList, onDelete }: HeaderProps ) => {
    const [cartIsOpen, setCartIsOpen] = useState(false)
    const menuRef = useRef <HTMLElement> (null)

    useEffect(() => {
        const matchMenu = () => {
            menuRef.current?.classList.remove('translate-x-0')
        }
        const match = matchMedia('(min-width: 840px')
        match.addEventListener('change', matchMenu)
        return () => match.removeEventListener('change', matchMenu)
    }, [])

    const handleMenu = () => {
        menuRef.current?.classList.toggle("translate-x-0")
        setCartIsOpen(false)
    }

    const handleCart = () => {
        const targetRef = menuRef.current?.classList
        if(targetRef?.contains("translate-x-0")) 
           targetRef?.remove("translate-x-0")
        setCartIsOpen(!cartIsOpen)
    }

    return (
        <header className="w-full overflow-hidden bg-white">
            <nav className="w-90 h-8 mx-auto flex items-center justify-between base:border-b-2 lg:w-85">
                <figure className="flex items-center gap-x-2 sm:gap-x-3 base:-order-1">
                    <img className="hover:cursor-pointer base:hidden" src={menu} alt="menu icon" onClick={handleMenu} />
                    <img src={logo} alt="logo icon" />
                </figure>
                <figure className="flex items-center gap-x-2 sm:gap-x-3">
                    <img className="hover:cursor-pointer" src={cart} alt="cart icon" onClick={handleCart} />
                    <img className="w-3 h-3 base:w-4 base:h-4 hover:cursor-pointer" src={user} alt="avatar image" />
                </figure>
                <menu className="w-3/4 max-w-2xl py-3 px-2 absolute inset-y-0 left-0 z-10 border-r -translate-x-full transition-all duration-500 border-slate-400 bg-blue-300 sm:py-4 sm:px-3 base:w-auto base:max-w-none base:mr-auto base:ml-6 base:p-0 base:-order-1 base:relative base:border-r-0 base:translate-x-0 base:transition-none base:bg-transparent" ref={menuRef}>
                    <img className="hover:cursor-pointer base:hidden" src={close} alt="close icon" onClick={handleMenu} />
                    <ul className="mt-4 flex items-start flex-col gap-y-2 text-md font-bold sm:mt-5 base:m-0 base:flex-row base:gap-x-2 base:text-sm base:font-normal">
                        {menuHeader.map((item, key) =>
                            <li className="hover:cursor-pointer" key={key}>{item}</li>
                        )}
                    </ul>
                </menu>
            </nav>
            <CartList cartList={cartList} isOpen={cartIsOpen} onDelete={onDelete} />
        </header>
    )
}

export { Header }