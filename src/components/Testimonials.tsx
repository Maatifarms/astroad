import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai, Maharashtra",
      text: "Pandit Aditya Guruji performed Kaal Sarp Dosh puja for our family. Within months, we noticed positive changes in our business and health. His knowledge and devotion are truly remarkable.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      location: "Delhi",
      text: "The Mangal Dosh Nivaran puja conducted by Guruji was performed with such dedication. I found my life partner shortly after. Highly recommended for anyone seeking genuine spiritual guidance.",
      rating: 5
    },
    {
      name: "Amit Patel",
      location: "Pune, Maharashtra",
      text: "Guruji's Pitru Dosh puja brought peace to our family. The ancestral issues that plagued us for years were resolved. His expertise in Vedic rituals is unparalleled.",
      rating: 5
    },
    {
      name: "Sunita Agarwal",
      location: "Nashik, Maharashtra",
      text: "The Navagrah Shanti puja performed by Pandit Aditya Guruji brought harmony to our home. His calm demeanor and profound knowledge create a truly divine atmosphere.",
      rating: 5
    },
    {
      name: "Vikram Singh",
      location: "Jaipur, Rajasthan",
      text: "Traveled from Jaipur specifically for Guruji's puja services. The Maha Mrityunjaya Jaap he performed helped my father recover from a serious illness. Truly blessed.",
      rating: 5
    },
    {
      name: "Meera Reddy",
      location: "Bangalore, Karnataka",
      text: "The Vastu Shanti puja transformed our new home's energy completely. Guruji's attention to detail and proper ritual performance made all the difference.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Devotee Testimonials
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Blessed words from thousands of satisfied devotees who found peace and prosperity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-spiritual-gold text-lg">★</span>
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </blockquote>
                
                <footer className="border-t pt-4">
                  <cite className="not-italic">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </cite>
                </footer>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-spiritual-saffron/10 to-spiritual-gold/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Join Thousands of Satisfied Devotees
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Experience the transformative power of authentic Vedic rituals performed with 
                traditional knowledge and modern understanding of devotee needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                  <div className="text-muted-foreground">Pujas Performed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">98%</div>
                  <div className="text-muted-foreground">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;