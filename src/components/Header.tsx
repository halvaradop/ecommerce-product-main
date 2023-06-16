import { useRef, useState } from "react"
import menu from "../assets/menu.svg"
import logo from "../assets/logo.svg"
import cart from "../assets/cart.svg"
import user from "../assets/avatar.png"
import close from "../assets/close.svg"
import { CartList } from "./CartList"

const menuHeader: Array<string> = ["Collections", "Men", "Women", "About", "Contact"]

const Header = () => {

    const [cartIsOpen, setCartIsOpen] = useState(false)
    const menuRef = useRef <HTMLElement> (null)

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
            <nav className="w-90 h-8 mx-auto flex items-center justify-between">
                <figure className="flex items-center gap-x-2">
                    <img src={menu} alt="menu icon" onClick={handleMenu} />
                    <img src={logo} alt="logo icon" />
                </figure>
                <figure className="flex items-center gap-x-2">
                    <img src={cart} alt="cart icon" onClick={handleCart} />
                    <img className="w-3 h-3" src={user} alt="avatar image" />
                </figure>
            </nav>
            <menu className="w-3/4 py-3 px-2 absolute inset-y-0 left-0 border-r -translate-x-full transition-all duration-500 border-slate-400 bg-blue-300" ref={menuRef}>
                <img src={close} alt="close icon" onClick={handleMenu} />
                <ul className="mt-4 flex items-start flex-col gap-y-2 text-md font-bold">
                    {menuHeader.map((item, key) =>
                        <li key={key}>{item}</li>
                    )}
                </ul>
            </menu>
            <CartList isOpen={cartIsOpen} />
        </header>
    )
}

export { Header }