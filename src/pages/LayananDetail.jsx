import BreadCrumbs from '../components/BreadCrumbs';
import logo from '../assets/images/logo.webp';
import { Link, useParams } from 'react-router-dom';
import { dataLayanan } from '../data/layanan';
import { FaArrowLeft, FaWhatsapp, FaArrowRight, FaArrowUp } from "react-icons/fa";
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { useState } from 'react';

export default function LayananDetail() {
    const [showBackToTop, setShowBackToTop] = useState(false)
    const { layananName } = useParams()
    const layanan = dataLayanan.find(
        item => item.slug === layananName
    )
    const message = encodeURIComponent(`Halo, saya tertarik dengan layanan ${layanan.title} yang ditawarkan oleh Paradise Massage & Treatment. Apakah masih tersedia untuk reservasi? Terima kasih!`);

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setShowBackToTop(true)
            } else {
                setShowBackToTop(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => { window.removeEventListener('scroll', handleScroll) }
    }, [])
    return (
        <div className='relative'>
            <div className="flex items-center gap-5">
                <img src={logo} className="w-10" alt='logo paradise massage' />
                <h1 className="uppercase font-bold text-secondary m:text-5xl font-display text-3xl">paradise<span className="text-secondary">.</span></h1>
            </div>
            <BreadCrumbs layananTitle={layanan.title} />
            <Link to={'/'} className='px-4 py-3 shadow-md flex items-center gap-4 rounded-md w-max text-primary hover:bg-primary hover:text-white hover:-translate-y-1 transition-all ease-in-out duration-300 hover:font-bold font-body ' >
                <FaArrowLeft />
                <p>Kembali</p>
            </Link>

            <div className='flex flex-col gap-10 mt-12'>
                <div className='w-full h-72 md:h-140 overflow-hidden rounded-md'>
                    <img src={layanan.image} alt={layanan.title} className='w-full h-full object-cover ' />
                </div>
                <h1 className='text-primary font-display md:text-4xl text-2xl font-bold'>{layanan.title}</h1>
                <div className='font-body '>
                    <p className='text-body md:text-xl text-base'>{layanan.description}</p>
                    <div className='mt-5'>
                        <p className='text-primary font-display font-semibold md:text-3xl text-xl'>Manfaat</p>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch mt-10 mb-20'>
                            {
                                layanan.benefits.map((item, index) => (
                                    <div key={index} className='h-full px-6 py-6 bg-primary font-body text-center text-white rounded-md shadow-md flex flex-col justify-evenly gap-5'>
                                        <p className='md:text-xl text-base font-semibold'>{item.title}</p>
                                        <p>{item.description}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className=' md:w-[80%] w-full mx-auto p-10 rounded-md shadow-xl '>
                        <div className='text-center mb-5'>
                            <p className='md:text-2xl text-xl font-display font-bold text-primary mb-5'>Tertarik Dengan Layanan Kami </p>
                            <p className='text-sm md:text-xl text-body font-body'>Nikmati waktu relaksasi bersama Paradise Massage & Treatment. Hubungi kami untuk melakukan reservasi.</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <a href={`https://wa.me/6285719290327?text=${message}`} className="relative px-6 py-3 font-semibold border border-primary/30 overflow-hidden group rounded-xl w-full cursor-pointer shadow-md  " onClick={() => {
                                if (typeof window.gtag === 'function') {
                                    window.gtag('event', 'conversion', {
                                        send_to: 'AW-18360368271/PrCXCLyw0N8cEI_587JE'
                                    });
                                }
                            }} >
                                <span className='absolute inset-0 bg-primary -translate-x-full group-hover:translate-x-0 rounded-xl transition-transform duration-500'>
                                </span>
                                <span className='relative flex items-center gap-5 justify-center md:text-xl z-10 text-primary group-hover:text-white transition-colors duration-500'>
                                    <FaWhatsapp />
                                    <p> Hubungi Kami </p>
                                    <FaArrowRight className='absolute right-6 top-1/2 -translate-y-1/2 md:transalte-x-4 opacity-0 md:group-hover:translate-x-0 group-hover:translate-x-5 group-hover:opacity-100 transition-all duration-500' />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
            {showBackToTop && (
                <a href='#' className='group overflow-hidden rounded-full text-xl border p-4  border-primary/10  fixed right-5 bottom-5 z-50 shadow-md backdrop-blur-md'>
                    <span className='absolute inset-0 m-auto w-3 h-3 rounded-full bg-primary scale-0 group-hover:scale-[8] transition-transform duration-500 ease-out' />
                    <FaArrowUp className='relative z-10 text-primary group-hover:text-white transition-transform duration-300 group-hover:-translate-y-1' />
                </a>
            )}
        </div>
    )
}