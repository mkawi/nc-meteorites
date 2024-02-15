import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

function Navigation({ total }) {
    const location = useLocation()

    const [isHome, setIsHome] = useState(location.pathname === "/" ? true : false)
    const [onHover, setHover] = useState(false)

    return (
        <header className="absolute top-0 right-0 z-10 p-7 flex flex-col items-end">
            {isHome ?
                <Link to="/list" onClick={() => setIsHome(false)}>
                    <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                        <path d="M8 6.00067L21 6.00139M8 12.0007L21 12.0015M8 18.0007L21 18.0015M3.5 6H3.51M3.5 12H3.51M3.5 18H3.51M4 6C4 6.27614 3.77614 6.5 3.5 6.5C3.22386 6.5 3 6.27614 3 6C3 5.72386 3.22386 5.5 3.5 5.5C3.77614 5.5 4 5.72386 4 6ZM4 12C4 12.2761 3.77614 12.5 3.5 12.5C3.22386 12.5 3 12.2761 3 12C3 11.7239 3.22386 11.5 3.5 11.5C3.77614 11.5 4 11.7239 4 12ZM4 18C4 18.2761 3.77614 18.5 3.5 18.5C3.22386 18.5 3 18.2761 3 18C3 17.7239 3.22386 17.5 3.5 17.5C3.77614 17.5 4 17.7239 4 18Z" stroke={onHover ? "#fff" : "#EA1B23"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link> :
                <Link to="/" onClick={() => setIsHome(true)}>
                    <svg fill={onHover ? "#fff" : "#EA1B23"} height="32px" width="32px" viewBox="0 0 300 300" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                        <path d="M150,0C67.29,0,0,67.29,0,150s67.29,150,150,150s150-67.29,150-150S232.71,0,150,0z M150,270c-66.169,0-120-53.832-120-120
	S83.831,30,150,30s120,53.832,120,120S216.168,270,150,270z"/>
                    </svg>
                </Link>
            }
            <p className="text-white mt-3">{total}</p>
            <p className="text-white">Meteorites</p>
        </header>
    )
}

export default Navigation