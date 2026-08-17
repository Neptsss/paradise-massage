import { useEffect, useState } from "react"
export default function Navbar() {
    const [isSticky, setIsStiky] = useState(false)
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setIsStiky(window.scrollY > 480)
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-40% 0px -50% 0px",
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);
    return (
        <nav className={`  border border-white/20 rounded-full p-2 m-auto md:w-[50%] w-full sticky top-10 inset-x-0 z-50 duration-500 ${isSticky ? "bg-white/20 backdrop-blur-xl " : "bg-gray-300"}`} data-aos="flip-up" data-aos-duration="600">
            <ul className="flex justify-evenly gap-3 font-body items-center transition-all duration-300 md:text-xl">
                <li className="w-full">
                    <a href="#home" className={`block text-center rounded-full p-3 duration-300 ${activeSection === "home" ? "bg-primary text-white font-bold" : "text-primary hover:font-bold hover:bg-white/70"}`}>
                        Home
                    </a>
                </li>
                <li className="w-full">
                    <a href="#layanan" className={`block text-center rounded-full p-3 duration-300 ${activeSection === "layanan" ? "bg-primary text-white font-bold" : "text-primary hover:font-bold hover:bg-white/70"}`}>
                        Layanan
                    </a>
                </li>
                <li className="w-full">
                    <a href="#kontak" className={`block text-center rounded-full p-3 duration-300 ${activeSection === "kontak" ? "bg-primary text-white font-bold" : "text-primary hover:font-bold hover:bg-white/70"}`}>
                        Kontak
                    </a>
                </li>
               

            </ul>
        </nav>
    )
}