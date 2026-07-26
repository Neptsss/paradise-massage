import homeImage from '../assets/images/home_img.webp';
export default function Home() {
    return (
        <section id="home" className="my-28" data-aos="fade-up" data-aos-duration="1000">
            <div className="md:flex items-center justify-center gap-10 ">
                <div className="bg-slate-300 rounded-xl md:p-6 p-3 self-stretch shrink -rotate-3 md:mb-0 mb-10">
                    <img src={homeImage} className="rounded-xl h-full rotate-3 w-80 " alt='Terapis Paradise Massage menuangkan minyak aromaterapi untuk layanan pijat relaksasi dan spa di Yogyakarta'/>
                </div>
                <div className="flex-1">
                    <p className="font-semibold text-secondary text-xl font-body">Filosofi Kami</p>
                    <h2 className="font-bold text-primary md:text-4xl text-2xl font-display">Oase Ketenangan di Tengah Hiruk-Pikuk Kota</h2>
                    <div className="font-body flex flex-col gap-5 my-5 text-body md:text-xl  ">
                        <p>
                            Di Paradise Massage, kami percaya bahwa kedamaian sejati bermula dari keseimbangan antara tubuh dan pikiran. Berdiri sebagai oase ketenangan, filosofi kami berpusat pada seni penyembuhan tradisional yang dipadukan dengan standar kenyamanan modern yang elegan.
                        </p>
                        <p>
                            Setiap detail di tempat kami, mulai dari aroma terapi yang menenangkan, alunan musik yang lembut, hingga sentuhan ahli dari para terapis kami, dirancang secara khusus untuk memulihkan energi jiwa Anda.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}