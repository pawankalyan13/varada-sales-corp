import showroomImg from "@/assets/showroom-visit.jpg";
import { MapPin, Phone, Clock } from "lucide-react";

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
                <p>Maripalem, Visakhapatnam<br />Andhra Pradesh, India</p>
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
            href="https://maps.google.com/?q=Maripalem+Visakhapatnam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-foreground text-background px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-tannin transition-colors"
          >
            Get Directions
          </a>
        </div>
        <div className="lg:col-span-8">
          <div className="w-full aspect-video bg-granite relative overflow-hidden">
            <img
              src={showroomImg}
              alt="Varada Sales Corporation showroom"
              loading="lazy"
              width={1200}
              height={600}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border border-card/10 m-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowroomSection;
