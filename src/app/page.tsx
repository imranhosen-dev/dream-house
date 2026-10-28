import { Footer } from "@/components/layout/footer/Footer";
import { Hero } from "@/components/layout/hero/Hero";
import { Info } from "@/components/layout/hero/Info";

export default function Home() {
    return (
        <div className="bg-fuchsia-50">
            <Hero />
            <div>
                <Info />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}
