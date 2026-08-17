import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Home from '../sections/Home';
import Service from '../sections/Service';
import Review from '../sections/Review';
import schema from '../seo/schema';
import logo from '../assets/images/logo.webp';

export default function HomePage() {
    return (
        <>
            <div className="flex items-center gap-5">
                <img src={logo} className="w-10" alt='logo paradise massage' />
                <h1 className="uppercase font-bold text-secondary m:text-5xl font-display text-3xl">paradise<span className="text-secondary">.</span></h1>
            </div>
            <Hero />
            <Navbar />
            <Home />
            <Service />
            <Review />
            <Footer />
            <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        </>

    )
}