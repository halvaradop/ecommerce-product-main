import { useState, useRef, useEffect, MouseEvent } from "react"
import { imagesShooes, imagesShooesThumbnail } from "../utils/resources"
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


const SliderItems = () => {
    const [index, setIndex] = useState(0)
    const sliderRef = useRef <HTMLElement> (null)
    const figureRef = useRef <HTMLElement | null> (null)


    useEffect(() => {
        figureRef.current?.firstElementChild?.classList.add('is-active')
    }, [])

    const handleNextImage = () => {
        const nextIndex = (index +1) % 4
        handleClickImages(index, nextIndex)
    }

    const handlePreviusImage = () => {
        const nextIndex = index -1 >= -3? index -1 : 0
        handleClickImages(index, nextIndex)
    }

    const handleClickThumbnail = (event: MouseEvent <HTMLImageElement> ) => {
        const imageNode = event.target as HTMLImageElement
        const newIndex = parseInt(imageNode?.getAttribute('data-index') ?? '')
        if(figureRef.current?.firstElementChild?.classList.contains('is-active')) {
            figureRef.current?.firstElementChild?.classList.remove('is-active')
        }else {
            figureRef.current?.classList.remove('is-active')
        }
        imageNode.classList.add('is-active')
        figureRef.current = imageNode
        handleClickImages(index, newIndex)
    }

    const handleClickImages = (previous: number, next: number) => {
        const nextClass = sliderClassImages.get(next) ?? ""
        const prevClass = sliderClassImages.get(previous) ?? ""
        sliderRef.current?.classList.remove(prevClass)
        sliderRef.current?.classList.add(nextClass)
        setIndex(next)
    }

    return (
        <div className="max-h-[50rem] flex items-center relative overflow-hidden base:max-h-none base:flex-col base:gap-y-2">
            <section className="w-full flex transition-all duration-500 base:max-h-[50rem]" ref={sliderRef}>
                {imagesShooes.map((link, key) =>
                    <img className="w-full base:flex-1 base:rounded-lg" key={key} src={link} alt="shooes img" />
                )}
            </section>
            {index <= 2 && <figure className="w-4 h-4 flex items-center justify-center absolute right-1 rounded-full bg-blue-300 base:hidden" onClick={handleNextImage}>
                <img src={nextArrow} alt="arrow to left" />
            </figure>}
            {index >= 1 && <figure className="w-4 h-4 flex items-center justify-center absolute left-1 rounded-full bg-blue-300 base:hidden" onClick={handlePreviusImage}>
                <img src={previousArrow} alt="arrow to right" />
            </figure>}
            <figure className="hidden base:w-full base:flex base:items-center base:justify-start base:gap-x-2" ref={figureRef}>
                {imagesShooesThumbnail.map((link, key) => 
                    <img className="base:w-6 base:aspect-square base:rounded-sm base:border-2 base:border-transparent lg:w-7.5 hover:cursor-pointer is-img:border-orange" data-index={key} key={key} src={link} alt="picture thumbnail" onClick={handleClickThumbnail} />
                )}
            </figure>
        </div>
    )
}

export { SliderItems }