import { useTranslation } from 'react-i18next';
import homeImage from '../assets/images/home_img.webp';
export default function Home() {
    const {t} = useTranslation()
    return (
        <section id="home" className="my-28" data-aos="fade-up" data-aos-duration="1000">
            <div className="md:flex items-center justify-center gap-10 ">
                <div className="bg-slate-300 rounded-xl md:p-6 p-3 self-stretch shrink -rotate-3 md:mb-0 mb-10">
                    <img src={homeImage} className="rounded-xl h-full rotate-3 w-80 " alt='Terapis Paradise Massage menuangkan minyak aromaterapi untuk layanan pijat relaksasi dan spa di Yogyakarta'/>
                </div>
                <div className="flex-1">
                    <p className="font-semibold text-secondary text-xl font-body">{t(`section.home.sub-title`)}</p>
                    <h2 className="font-bold text-primary md:text-4xl text-2xl font-display">{t(`section.home.title`)}</h2>
                    <div className="font-body flex flex-col gap-5 my-5 text-body md:text-xl  ">
                        <p>
                            {t(`section.home.description1`)}
                        </p>
                        <p>
                            {t(`section.home.description2`)}

                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}