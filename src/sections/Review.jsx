import useEmblaCarousel from "embla-carousel-react";
import CardReview from "../components/CardReview";
import Autoplay from "embla-carousel-autoplay";

export default function Review() {
    const [emblaRef] = useEmblaCarousel({
        loop: true
    }, [
        Autoplay({
            delay : 4000, 
            stopOnInteraction: true
        })
    ])
    const data = [
        {
            id: 1,
            nama: 'Dafik Rusdianto',
            ulasan: 'Tempatnya nyaman, pelayanan ramah, badan jadi segar...wajib coba'
        },
        {
            id: 2,
            nama: 'Yudi Susanto',
            ulasan: 'Tempatnya nyaman, pelayanannya luar biasa buat pokok nya begtu selesai seger badan nya good lah'
        },
        {
            id: 3,
            nama: 'Musa Kasim',
            ulasan: 'TERBAIK MASSAGE DISINI, Tidak korupsi waktu pelayanan super'
        },
        {
            id: 4,
            nama: 'Dini Erlyta',
            ulasan: 'Massage nyaa enduulll bgt,mba nya ramaah..pokoknya oke laah..wajib dicoba looh!!'
        },
        {
            id: 5,
            nama: 'Marwahyu Ningsih',
            ulasan: 'Therapistnya berpengalaman semua sdh beberapa kali order d sini'
        },
        {
            id: 6,
            nama: 'Tri Ndoko',
            ulasan: 'Tempatnya nyaman..dan pelayanannya luar biasa..'
        },
    ];



    return (
        <>
            <div className="fade-up">
                <h2 className="text-4xl font-display font-bold text-center text-primary">Apa Kata Mereka</h2>
                <p className="text-center font-body mt-5 text-body md:text-xl md:w-[80%] m-auto"> Simak pengalaman pelanggan setelah menikmati layanan massage dan treatment profesional kami.</p>
            </div>
            <div className="overflow-hidden mt-16" ref={emblaRef}>
                <div className="flex p-6">
                    {
                        data.map((review) => (
                            <div className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-2" key={review.id}>
                                <CardReview  nama={review.nama} ulasan={review.ulasan} />
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    );
}