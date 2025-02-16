'use client'
import Image from "next/image"
import { useState } from "react"

 

const ImageHover = ({
    src,
    hoverSrc,
    alt,
}:{
    src:string
    hoverSrc:string
    alt:string 
})  =>{
    const [isHoverd,setIsHovered] = useState(false)
    let hoverTimeout: any

    const handleMouseEnter = () =>{
        hoverTimeout = setTimeout(() =>setIsHovered(true),1000)  // for one second delay
    }
    const handleMouseLeave = () =>{
        clearTimeout(hoverTimeout)
        setIsHovered(false)
    }
    return (
        <div className="relative h-52" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Image src={src} alt={alt} fill sizes="80vh" className={`object-contain transition-opacity duration-500 ${isHoverd ?
                 'opacity-0' : 'opacity-100'}`} />
             <Image src={hoverSrc} alt={alt} fill 
             className={`absolute inset-0 object-contain transition-opacity duration-500 ${isHoverd ? 'opacity-100' : 'opacity-0' }`} 
             />    
        </div>
    )
}

export default ImageHover