import { useEffect, useState } from "react"
export default function Navbar () {
    const [isSticky, setIsStiky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsStiky(window.scrollY > 450)
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])
    return (
        <nav className={`  border border-white/20 rounded-full p-2 m-auto md:w-[45%] w-full sticky top-10 inset-x-0 z-50 ${isSticky ? "bg-white/20 backdrop-blur-xl " : "bg-gray-300"}`} data-aos="flip-up" data-aos-duration="600">
            <ul className="flex justify-evenly gap-5 font-body items-center transition-all duration-300 md:text-xl">
                <li className="w-full">
                    <a href="#home" className="bg-primary block text-center py-3 px-4 rounded-full text-white font-bold w-full">
                        Home
                    </a>
                </li>
                <li className="w-full">
                    <a href="#layanan" className="text-primary block text-center hover:bg-white/70 hover:rounded-full hover:p-3 hover:font-bold duration-300 ">Layanan</a>
                </li>
                <li className="w-full">
                    <a href="#kontak" className="text-primary block text-center hover:bg-white/70 hover:rounded-full hover:p-3 hover:font-bold duration-300">Kontak</a>
                </li>

            </ul>
        </nav>
    )
}