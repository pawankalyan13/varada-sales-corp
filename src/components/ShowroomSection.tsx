import { MapPin, Phone, Clock } from "lucide-react";
import showroomImg from "@/assets/showroom-visit.jpg";

const ShowroomSection = () => {
  return (
    <section id="showroom" className="mt-24 lg:mt-32 mb-16 max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-4 space-y-8">
          <h3 className="font-serif text-4xl">
            Visit Our
            <br />
            Showroom.
          </h3>
          <div className="space-y-6 text-sm text-muted-foreground">
            <div className="flex gap-3 items-start">
              <MapPin size={18} className="text-tannin mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Varada Sales Corporation</p>
                <p>6WW+C5C, PF Office Rd,<br />Marripalem VUDA Layout, Marripalem,<br />Visakhapatnam, Andhra Pradesh 530009</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <Clock size={18} className="text-tannin mt-0.5 shrink-0" />
              <div>
                <p>Mon – Sat: 9:30 AM – 8:00 PM</p>
                <p>Sunday: 10:00 AM – 2:00 PM</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <Phone size={18} className="text-tannin mt-0.5 shrink-0" />
              <p>Call us for enquiries</p>
            </div>
          </div>
          <a
            href="https://share.google/a9pmfvmYesFASDCXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-foreground text-background px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-tannin transition-colors"
          >
            Get Directions
          </a>
        </div>
        <div className="lg:col-span-8">
          <div className="w-full aspect-video bg-granite relative overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=6WW%2BC5C+PF+Office+Rd+Marripalem+VUDA+Layout+Visakhapatnam+530009&output=embed"
              title="Varada Sales Corporation showroom location on Google Maps"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0 grayscale contrast-110"
              allowFullScreen
            />
            <div className="absolute inset-0 border border-card/10 m-4 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowroomSection;
