import { FaWhatsapp } from "react-icons/fa";
export default function Card({ data }) {
    const message = encodeURIComponent(`Halo, saya tertarik dengan layanan ${data.title} yang ditawarkan oleh Paradise Massage & Treatment. Apakah masih tersedia untuk reservasi? Terima kasih!`);
    return (
        <div className="bg-white shadow-xl md:w-80 w-full rounded-xl  flex flex-col my-5 md:my-0" data-aos="fade-up"  >
            <div className="h-64 w-full overflow-hidden rounded-t-xl">
                <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-primary md:text-3xl text-2xl font-bold mb-5  md:min-h-20">
                    {data.title}
                </h3>

                <p className="text-body md:text-xl flex-1">
                    {data.description}
                </p>
                <hr className="text-gray-300 my-6" />
                <a
                    href={`https://wa.me/6285719290327?text=${message}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" flex items-center justify-self-center gap-5 px-4 py-2 rounded-xl text-primary md:text-xl font-body hover:border-b-4 hover:border-primary hover:scale-105 duration-300 transition-all"
                >
                    <FaWhatsapp />
                    <p>Hubungi kami</p>
                </a>
            </div>
        </div>
    )
}