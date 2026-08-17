import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next";
import { MdOutlineTranslate } from "react-icons/md";
export default function Navbar() {
    const [isSticky, setIsStiky] = useState(false)
    const [activeSection, setActiveSection] = useState("home");
    const [langOpen, setLangOpen] = useState(false)
    const [langHover, setLangHover] = useState(false)
    const langStorage = localStorage.getItem('lang') 
    const [lang, setLang] = useState( langStorage || 'id')
    const { t, i18n } = useTranslation()

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

    const changeLanguage = (language) => {
        setLang(language)
        setLangOpen(false)
        i18n.changeLanguage(language)
        localStorage.setItem('lang', language)
    }
    return (
        <nav className={` border border-white/20 rounded-full p-2 m-auto md:w-[50%] w-full sticky top-10 inset-x-0 z-50 duration-500 ${isSticky ? "bg-white/20 backdrop-blur-xl " : "bg-gray-300"}`} data-aos="flip-up" data-aos-duration="600">
            <ul className="flex justify-evenly gap-3 font-body items-center transition-all duration-300 md:text-xl">
                <li className="w-full">
                    <a href="#home" className={`block text-center rounded-full p-3 duration-300 ${activeSection === "home" ? "bg-primary text-white font-bold" : "text-primary hover:font-bold hover:bg-white/70"}`}>
                        {t('navbar.home')}
                    </a>
                </li>
                <li className="w-full">
                    <a href="#layanan" className={`block text-center rounded-full p-3 duration-300 ${activeSection === "layanan" ? "bg-primary text-white font-bold" : "text-primary hover:font-bold hover:bg-white/70"}`}>
                        {t('navbar.services')}
                    </a>
                </li>
                <li className="w-full">
                    <a href="#kontak" className={`block text-center rounded-full p-3 duration-300 ${activeSection === "kontak" ? "bg-primary text-white font-bold" : "text-primary hover:font-bold hover:bg-white/70"}`}>
                        {t('navbar.contact')}
                    </a>

                </li>
                <li className="w-max relative  " onMouseEnter={()=>setLangHover(true)} onMouseLeave={()=>setLangHover(false)}>
                    <div className="flex items-center md:gap-3 gap-2 cursor-pointer rounded-full py-3 md:px-6 px-3  text-primary hover:bg-white/70 hover:font-bold" onClick={() => setLangOpen(!langOpen)}>
                        <MdOutlineTranslate className="md:block hidden" />
                        <p> {(lang === 'id') ? 'ID' : 'EN'}</p>
                    </div>
                    <div className={`${langOpen || langHover ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-2 pointer-events-none'} top-full duration-500 absolute  rounded-2xl bg-white/80 p-2 mt-3 right-0 w-44 shadow-md transition-all backdrop-blur-xl`}>
                        <button className={`w-full flex items-center gap-3 rounded-xl px-3 py-2 text-primary cursor-pointer transition  ${(lang==='id' ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white')}`} onClick={() => changeLanguage('id')} >
                            <span className="text-sm">ID</span>
                            <span>Indonesia</span>
                        </button>
                        <button className={`w-full flex items-center gap-3 rounded-xl px-3 py-2 text-primary cursor-pointer transition  ${(lang==='en' ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white')}`} onClick={() => changeLanguage('en')} >
                            <span className="text-sm">EN</span>
                            <span>English</span>
                        </button>
                    </div>
                </li>

            </ul>
        </nav>
    )
}