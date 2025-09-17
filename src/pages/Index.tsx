import { HeroSection } from "@/components/HeroSection";
import { ServiceCard } from "@/components/ServiceCard";
import { 
  Calendar, 
  UserCheck, 
  Pill, 
  Newspaper, 
  CreditCard, 
  MapPin, 
  AlertTriangle, 
  PawPrint 
} from "lucide-react";

const services = [
  {
    title: "Appointment Corner",
    description: "Book appointments with doctors, manage schedules, and get reminders",
    icon: Calendar,
    href: "/appointments"
  },
  {
    title: "Doctor Details & Schedule",
    description: "View doctor profiles, specializations, and available time slots",
    icon: UserCheck,
    href: "/doctors"
  },
  {
    title: "Medicine Delivery",
    description: "Order medicines online with home delivery and prescription tracking",
    icon: Pill,
    href: "/medicine"
  },
  {
    title: "News & Articles",
    description: "Stay updated with latest health news and medical research",
    icon: Newspaper,
    href: "/news"
  },
  {
    title: "Payment Gateway",
    description: "Secure payment processing for all medical services and bills",
    icon: CreditCard,
    href: "/payments"
  },
  {
    title: "Nearby Hospitals",
    description: "Find hospitals and clinics near your location with directions",
    icon: MapPin,
    href: "/hospitals"
  },
  {
    title: "Emergency Patient",
    description: "Immediate assistance for medical emergencies and ambulance services",
    icon: AlertTriangle,
    href: "/emergency",
    variant: "emergency" as const
  },
  {
    title: "Veterinary Services",
    description: "Pet healthcare services, vet appointments, and animal emergency care",
    icon: PawPrint,
    href: "/veterinary"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Comprehensive Healthcare Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Access all your healthcare needs through our integrated platform. 
              From routine checkups to emergency care, we've got you covered.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
                variant={service.variant}
                className="hover:shadow-hero"
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-lg opacity-90">Patients Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Doctors Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Partner Hospitals</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Emergency Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;