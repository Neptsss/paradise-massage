import Card from "../components/Card";
import { GiAchievement } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";
import { MdPrivacyTip } from "react-icons/md";
import layanan1 from '/layanan1.jpg'
import traditional from '/traditional_message.jpg'
import layanan3 from '/layanan3.jpg'
import scrape from '/scrape.jpg'
import accupunture from '/acupuncture.jpg'
import bruise from '/bruise.jpg'
import shiatsu from '/shiatsu.jpg'

export default function Service() {
    const dataCard = [
        {
            title: "Pijat Tradisional (Traditional Massage)",
            description: "Pijatan relaksasi menggunakan teknik tradisional dan minyak esensial untuk membantu meredakan stres, mengurangi ketegangan otot, serta memberikan rasa nyaman pada tubuh.",
            image: traditional
        },
        {
            title: "Refleksi",
            description: "Terapi pijat pada titik-titik refleksi kaki yang dipercaya dapat membantu melancarkan peredaran darah, mengurangi kelelahan, dan meningkatkan keseimbangan tubuh.",
            image: layanan1
        },
        {
            title: "Totok Wajah (Face Acupressure)",
            description: "Perawatan wajah dengan teknik penekanan pada titik-titik tertentu untuk membantu merilekskan otot wajah, meningkatkan sirkulasi darah, dan membuat kulit tampak lebih segar.",
            image: layanan3
        },
        {
            title: "Terapi Kerokan (Scraping)",
            description: "Terapi kerokan modern menggunakan alat khusus untuk membantu meredakan pegal-pegal, meningkatkan aliran darah, serta membantu tubuh merasa lebih ringan dan rileks.",
            image: scrape
        },
        {
            title: "Pijat Cedera & Memar",
            description: "Terapi pemulihan yang berfokus pada area memar atau ketegangan otot untuk membantu mempercepat proses pemulihan dan mengurangi rasa tidak nyaman pada tubuh.",
            image: bruise
        },
        {
            title: "Acupuncture",
            description: "Metode pengobatan tradisional dengan stimulasi titik-titik tertentu pada tubuh untuk membantu meredakan nyeri, meningkatkan energi, dan mendukung kesehatan secara menyeluruh.",
            image: accupunture
        },
        {
            title: "Shiatsu",
            description: "Teknik pijat asal Jepang yang menggunakan tekanan jari pada titik-titik energi tubuh untuk membantu mengurangi stres, memperbaiki postur, dan meningkatkan relaksasi.",
            image: shiatsu
        }
    ];
    const serviceItem = [
        {
            title: "Terapis Ahli & Tersertifikasi",
            icon: GiAchievement,
            description: "Tim kami telah melewati pelatihan ketat dan memiliki jam terbang tinggi."
        },
        {
            title: "Bahan 100% Organik",
            icon: FaLeaf,
            description: "Kami hanya menggunakan minyak dan produk perawatan berbahan alami tanpa zat kimia berbahaya."
        },
        {
            title: "Privasi Terjaga",
            icon: MdPrivacyTip,
            description: "Kamar perawatan pribadi yang kedap suara untuk relaksasi total tanpa gangguan."
        },


    ]
    return (
        <section id="layanan" className="my-28">
            <div data-aos="fade-up">
                <h2 className="text-4xl font-display font-bold text-center text-primary">Layanan Kami</p>
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