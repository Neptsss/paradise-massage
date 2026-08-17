import useEmblaCarousel from "embla-carousel-react";
import CardReview from "../components/CardReview";
import Autoplay from "embla-carousel-autoplay";
import { reviewData as data } from "../data/review";
import { useTranslation } from "react-i18next";
export default function Review() {
    const [emblaRef] = useEmblaCarousel({
        loop: true
    }, [
        Autoplay({
            delay : 4000, 
            stopOnInteraction: true
        })
    ]);
    const {t} = useTranslation()
  
    return (
        <>
            <div className="fade-up">
                <h2 className="text-4xl font-display font-bold text-center text-primary">{t(`section.review.title`)}</h2>
                <p className="text-center font-body mt-5 text-body md:text-xl md:w-[80%] m-auto">{t(`section.review.sub-title`)}</p>
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