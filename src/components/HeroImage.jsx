export default function HeroImage({image,index, desc}){
    return(
        <div data-aos="fade-up" data-aos-duration="1000">
            <img src={image} className={`rounded-4xl hover:scale-105 brightness-50 duration-300 transition-all ${index % 2 === 0 ? "h-125" : "h-137.5"}`} alt={desc}/>
        </div>
    )
}