import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      title: "Kaal Sarp Dosh Puja",
      description: "Complete remedy for Kaal Sarp Dosh with proper rituals and mantras as per Vedic traditions.",
      duration: "3-4 Hours",
      price: "Contact for pricing"
    },
    {
      title: "Pitru Dosh Puja",
      description: "Special puja for ancestral peace and liberation from Pitru Dosh effects.",
      duration: "2-3 Hours", 
      price: "Contact for pricing"
    },
    {
      title: "Rudrabhishek",
      description: "Sacred abhishek of Lord Shiva with milk, honey, and other divine offerings.",
      duration: "1-2 Hours",
      price: "Contact for pricing"
    },
    {
      title: "Maha Mrityunjaya Jaap",
      description: "Powerful chanting of Mrityunjaya mantra for health, longevity, and protection.",
      duration: "2-3 Hours",
      price: "Contact for pricing"
    },
    {
      title: "Mangal Dosh Nivaran",
      description: "Complete remedy for Mangal Dosh through proper puja and homas.",
      duration: "2-3 Hours",
      price: "Contact for pricing"
    },
    {
      title: "Navagrah Shanti",
      description: "Comprehensive puja for appeasing all nine planets and their positive influence.",
      duration: "4-5 Hours",
      price: "Contact for pricing"
    },
    {
      title: "Kumbh/Ark Vivah",
      description: "Symbolic marriage ceremony for Manglik individuals before actual marriage.",
      duration: "1-2 Hours",
      price: "Contact for pricing"
    },
    {
      title: "Vastu Shanti",
      description: "Puja for home and workplace harmony according to Vastu principles.",
      duration: "2-3 Hours",
      price: "Contact for pricing"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sacred Services
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Authentic Vedic ceremonies performed with devotion and traditional precision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow group">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {service.description}
                </p>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-primary font-medium">Duration: {service.duration}</span>
                </div>
                
                <div className="pt-4 border-t">
                  <Button 
                    className="w-full"
                    variant="outline"
                  >
                    Book This Service
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Custom Pujas & Ceremonies
              </h3>
              <p className="text-muted-foreground mb-6">
                In addition to the above services, Pandit Aditya Guruji performs various other 
                Vedic ceremonies including Griha Pravesh, Satyanarayan Puja, Lakshmi Puja, 
                and personalized rituals based on individual needs.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Consult for Custom Puja
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;