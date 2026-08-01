import { FaQuoteLeft, FaStar } from "react-icons/fa";

export default function CardReview({ nama, ulasan }) {
    return (
        <article className="flex flex-col h-full bg-white lg:rounded-3xl rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-5 md:p-6 lg:p-8 "  >
            <FaQuoteLeft className="text-4xl md:text-5xl text-primary/20 mb-6" />
            <div className="flex-1">
                <p className=" text-gray-700 text-sm md:text-base leading-7 md:leading-8 min-h-36 " >
                    {ulasan}
                </p>

            </div>

            <div className="mt-8 border-t border-gray-100 pt-5">

                <div className="flex gap-1 text-yellow-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                    ))}
                </div>

                    <div>
                        <h3 className="font-display font-semibold text-primary text-base md:text-lg">
                            {nama}
                        </h3>

                        <p className="text-sm text-gray-400">
                            Google Review
                        </p>
                    </div>


            </div>
        </article>
    );
}