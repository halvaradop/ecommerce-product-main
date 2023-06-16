import { useState, useRef } from "react"
import { imagesShooes } from "../utils/resources"
import nextArrow from "../assets/next.svg"
import previousArrow from "../assets/previous.svg"

const sliderClassImages = new Map <number, string> ([
    [-3, "translate-x-[300%]"],
    [-2, "translate-x-[200%]"],
    [-1, "translate-x-full"],
    [0, "translate-x-0"],
    [1, "-translate-x-full"],
    [2, "-translate-x-[200%]"],
    [3, "-translate-x-[300%]"],
])


const ShowShooes = () => {
    const [index, setIndex] = useState(0)
    const sliderRef = useRef<HTMLElement> (null)

    const handleNextImage = () => {
        const nextIndex = (index +1) % 4
        handleClickImages(index, nextIndex)
    }

    const handlePreviusImage = () => {
        const nextIndex = index -1 >= -3? index -1 : 0
        handleClickImages(index, nextIndex)
    }

    const handleClickImages = (previous: number, next: number) => {
        const nextClass = sliderClassImages.get(next) ?? ""
        const prevClass = sliderClassImages.get(previous) ?? ""
        sliderRef.current?.classList.remove(prevClass)
        sliderRef.current?.classList.add(nextClass)
        setIndex(next)
    }

    return (
        <div className="flex items-center overflow-hidden">
            <section className="w-full flex transition-all duration-500" ref={sliderRef}>
                {imagesShooes.map((link, key) =>
                    <img key={key} src={link} alt="shooes img" />
                )}
            </section>
            {index <= 2 && <figure className="w-4 h-4 flex items-center justify-center absolute right-1 rounded-full bg-blue-300" onClick={handleNextImage}>
                <img src={nextArrow} alt="arrow to left" />
            </figure>}
            {index >= 1 && <figure className="w-4 h-4 flex items-center justify-center absolute left-1 rounded-full bg-blue-300" onClick={handlePreviusImage}>
                <img src={previousArrow} alt="arrow to right" />
            </figure>}
        </div>
    )
}

export { ShowShooes }