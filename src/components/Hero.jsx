import useWindowWidth from "../hooks/useWindowWidht";
import HeroImage from "./HeroImage";
import heroImage1 from '/hero1.jpg'
import heroImage2 from '/hero2.jpg'
import heroImage3 from '/hero3.jpg'
import heroImage4 from '/hero4.jpg'
import heroImage5 from '/hero5.jpg'

export default function Hero() {
    const windowWidth = useWindowWidth();
    let dataHero = 5;
    if (windowWidth < 900 && windowWidth >= 700) {
        dataHero = 3;
    } else if (windowWidth < 700) {
        dataHero = 2;
    }
    const heroImage = [
        {
            index: 1,
            image: heroImage1
        },
        {
            index: 2,
            image: heroImage2
        },
        {
            index: 3,
            image: heroImage3
        },
        {
            index: 4,
            image: heroImage4
        },
        {
            index: 5,
            image: heroImage5
        },
    ]

    return (
        <div className="relative">
            <div className="flex items-center justify-center gap-10 my-10">
                {heroImage.slice(0, dataHero).map((item, index) => (
                    <HeroImage image={item.image} key={index} index={item.index} />
                ))}

            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none" data-aos="fade-up" data-aos-duration="1500">
                <div className="bg-[#D9D9D9]/90 rounded-xl shadow-md text-center flex flex-col items-center justify-center gap-5 md:w-[60%] w-full m-auto md:px-6 md:py-10 px-3 py-5">
                    <p className="font-body uppercase text-secondary md:text-xl ">welcome to serenity</p>
                    <p className="font-display md:text-5xl text-2xl font-bold text-primary uppercase w-[86%] ">paradise massage & treatment</p>
                    <p className="md:text-xl text-body ">Sentuhan penyembuhan yang memebawa ketenangan jiwa dan kesegaran raga dalam balutan kemewahan minimalis</p>
                </div>
            </div>
        </div>
    )
}