import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import logo from '../assets/images/logo.webp';

export default function Footer() {
    return (
        <>
            <section className="border-t-8 border-primary shadow-md p-6 md:flex items-center justify-between mt-20 mb-10 rounded-xl" id="kontak" data-aos="fade-up">
                <div>
                    <div className="flex items-center gap-5">
                        <img src={logo} className="w-12" alt="logo paradise massage" />
                        <p className="uppercase text-primary font-display text-4xl font-semibold">paradise<span className="text-secondary">.</span></p>
                    </div>
                    <p className="font-body text-body md:text-xl mt-3">Kunjungi kami langsung atau hubungi kami via WhatsApp untuk reservasi slot waktu favorit Anda sekarang!</p>
                    <div className="flex flex-col gap-5 mt-10 font-body">
                        <div className="flex item-center gap-2 ">
                            <CiLocationOn className="text-3xl  text-primary" />
                            <p className="md:text-xl text-body">Jl. Prawirotaman, Brontokusuman</p>
                        </div>
                        <div className="flex item-center gap-2">
                            <CiPhone className="text-3xl  text-primary" />
                            <p className="md:text-xl text-body">+62 8571-9290-327</p>
                        </div>

                    </div>
                </div>
                <div className="h-72 rounded-xl">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.7249128236986!2d110.3691951!3d-7.8189148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59005364a5b9%3A0x7b2e1db1d5234beb!2sParadise%20Massage!5e0!3m2!1sid!2sid!4v1784875186309!5m2!1sid!2sid" loading="lazy" className="w-full h-full rounded-xl md:my-0 my-10"></iframe>

                </div>
            </section>
            <p className=" text-body font-display font-semibold text-center">
                © 2026 Paradise Massage & Treatment. All Rights Reserved.
            </p>
        </>
    )
}