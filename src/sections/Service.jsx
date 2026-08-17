import Card from "../components/Card";

import {dataLayanan as dataCard} from '../data/layanan'
import { dataUnggulan as serviceItem } from "../data/unggulan";
export default function Service() {
 
    return (
        <section id="layanan" className="my-28">
            <div data-aos="fade-up">
                <h2 className="text-4xl font-display font-bold text-center text-primary">Layanan Kami</h2>
                <p className="text-center font-body mt-5 text-body md:text-xl md:w-[80%] m-auto">Pilih dari rangkaian perawatan holistik kami yang dirancang khusus untuk memenuhi kebutuhan relaksasi dan peremajaan tubuh Anda.</p>
            </div>
            <div className="md:my-20 my-10 flex flex-wrap items-center justify-center gap-10 ">
                {dataCard.map((item, index) => (
                    <Card key={index} data={item} />
                ))}
            </div>

            <div
                className="rounded-3xl bg-primary shadow-xl md:p-14 p-6 mt-20"
                data-aos="zoom-in"
            >
                <div className="text-center text-white">
                    <h2 className="md:text-4xl text-2xl font-bold font-display">
                        Mengapa Memilih Kami?
                    </h2>

                    <p className="font-body mt-4 md:w-[70%] mx-auto text-white/90">
                        Dedikasi kami adalah memberikan pengalaman spa premium yang
                        menenangkan tubuh, pikiran, dan jiwa melalui layanan terbaik
                        serta suasana yang nyaman.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-12 ">
                    {serviceItem.map((item, index) => (
                        <div
                            key={index}
                            className=" bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6  text-white hover:-translate-y-1 transition-all duration-300 "
                        >
                            <item.icon className="md:text-5xl text-3xl  mb-4 text-white" />

                            <h3 className="font-display text-xl font-bold mb-3">
                                {item.title}
                            </h3>

                            <p className="font-body text-white/80">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}