import useWindowWidth from "../hooks/useWindowWidht";
import HeroImage from "./HeroImage";
import heroImage1 from '../assets/images/hero1.webp'
import heroImage2 from '../assets/images/hero2.webp'
import heroImage3 from '../assets/images/hero3.webp'
import heroImage4 from '../assets/images/hero4.webp'
import heroImage5 from '../assets/images/hero5.webp'
import { useTranslation } from "react-i18next";

export default function Hero() {
    const windowWidth = useWindowWidth();
    const {t} = useTranslation()
    let dataHero = 5;
    if (windowWidth < 900 && windowWidth >= 700) {
        dataHero = 3;
    } else if (windowWidth < 700) {
        dataHero = 2;
    }
    const heroImage = [
        {
            index: 1,
            image: heroImage1,
            desc:'Terapis profesional melakukan pijat punggung tradisional untuk meredakan pegal di Yogyakarta'
        },
        {
            index: 2,
            image: heroImage2,
            desc:'Layanan pijat refleksi tangan yang menenangkan untuk pelanggan di area Yogyakarta'
        },
        {
            index: 3,
            image: heroImage3,
            desc:'Treatment pijat relaksasi kepala dan wajah untuk menghilangkan stres dan pusing'
        },
        {
            index: 4,
            image: heroImage4,
            desc:'Pijat kebugaran dan relaksasi otot kaki oleh terapis spa berpengalaman'
        },
        {
            index: 5,
            image: heroImage5,
            desc:'Pijat panggilan shiatsu dan refleksi kaki dengan minyak esensial terbaik di Jogja'
        },
    ]

    return (
        <div className="relative">
            <div className="flex items-center justify-center gap-10 my-10">
                {heroImage.slice(0, dataHero).map((item, index) => (
                    <HeroImage image={item.image} key={index} index={item.index} desc={item.desc} />
                ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none" data-aos="fade-up" data-aos-duration="1500">
                <div className="bg-[#D9D9D9]/90 rounded-xl shadow-md text-center flex flex-col items-center justify-center gap-5 md:w-[60%] w-full m-auto md:px-6 md:py-10 px-3 py-5">
                    <p className="font-body uppercase text-secondary md:text-xl ">welcome to serenity</p>
                    <h1 className="font-display md:text-5xl text-2xl font-bold text-primary uppercase w-[86%] ">paradise massage & treatment</h1>
                    <p className="md:text-xl text-body ">{t(`section.hero.sub-title`)}</p>
                </div>
            </div>
        </div>
    )
}