import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
export default function Footer() {
    return (
        <>
        <section className="border-t-8 border-primary shadow-md p-6 md:flex items-center justify-between mt-20 mb-10 rounded-xl" id="kontak" data-aos="fade-up">
            <div>
                <p className="uppercase text-primary font-display text-4xl font-semibold">paradise<span className="text-secondary">.</span></p>
                    <p className="font-body text-body md:text-xl mt-3">Kunjungi kami langsung atau hubungi kami via WhatsApp untuk reservasi slot waktu favorit Anda sekarang!</p>
                <div className="flex flex-col gap-5 mt-10 font-body">
                    <div className="flex item-center gap-2 ">
                        <CiLocationOn className="text-3xl  text-primary" />
                        <p className="md:text-xl text-body">Jl. Prawirotaman No 34 B, Brontokusuman</p>
                    </div>
                    <div className="flex item-center gap-2">
                        <CiPhone className="text-3xl  text-primary" />
                        <p className="md:text-xl text-body">+62 8571-9290-327</p>
                    </div>
                  
                </div>
            </div>

            <div className="h-72 rounded-xl">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.7211624250167!2d110.36931707432302!3d-7.819310677651109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57a3d0b05957%3A0x2b6a060bf246c2c2!2sPrayogo%20Lama%20Family%20Guest%20House!5e0!3m2!1sid!2sid!4v1780309670370!5m2!1sid!2sid"  loading="lazy" className="w-full h-full rounded-xl md:my-0 my-10"></iframe>

            </div>
        </section>
            <p className=" text-body font-display font-semibold text-center">
                © 2026 Paradise Massage & Treatment. All Rights Reserved.
            </p>
        </>
    )
}