import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Card({ data }) {
    const message = encodeURIComponent(`Halo, saya tertarik dengan layanan ${data.title} yang ditawarkan oleh Paradise Massage & Treatment. Apakah masih tersedia untuk reservasi? Terima kasih!`);
    const {t} = useTranslation()
    return (
        <div data-aos="fade-up">
            <div className="bg-white shadow-xl md:w-80 w-full rounded-xl  flex flex-col my-5 md:my-0 hover:scale-105 duration-300 transition-all hover:bg-primary group">
                <Link to={`/layanan/${data.slug}`}   >
                    <div className="block h-64 w-full overflow-hidden rounded-t-xl">
                        <img
                            src={data.image}
                            alt={data.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                        <h3 className="font-display text-primary md:text-3xl text-2xl font-bold mb-5  md:min-h-20 group-hover:text-white">
                            {t(`services.${data.slug}.title`)}
                        </h3>

                        <p className="text-body md:text-xl flex-1 group-hover:text-white">
                        {
                                t(`services.${data.slug}.description`).length > 200 ? t(`services.${data.slug}.description`).slice(0, 200) + "..." : t(`services.${data.slug}.description`)
                        }
                          
                        </p>
                    </div>
                </Link>
                <div className="px-6 pb-6">
                    <hr className="text-gray-300 my-6" />
                    <a
                        href={`https://wa.me/6285719290327?text=${message}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-5 px-4 py-2 rounded-xl text-primary group-hover:text-white md:text-xl font-body hover:border-b-4 hover:border-secondary hover:scale-105 duration-300 transition-all bg-white/10"
                        onClick={() => {
                            if (typeof window.gtag === 'function') {
                                window.gtag('event', 'conversion', { 'send_to': 'AW-18360368271/PrCXCLyw0N8cEI_587JE' });
                            }
                        }}
                    >
                        <FaWhatsapp className="text-xl" />
                        <p className="text-xl">{t(`section.services.cta.text-button`)}</p>
                    </a>
                </div>
            </div>
        </div>

    )
}
