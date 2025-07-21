import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Pandit Aditya Guruji
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to book your puja or need spiritual guidance? Connect with us through any of these convenient methods
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground mb-2">For immediate consultation and booking</p>
                    <a href="tel:+918707880017" className="text-primary font-medium hover:underline">
                      +91 87078 80017
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-spiritual-saffron/10 rounded-lg flex items-center justify-center">
                    <span className="text-spiritual-saffron font-bold">💬</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground mb-2">Quick consultation and puja booking</p>
                    <Button 
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => window.open('https://wa.me/918707880017?text=Namaste Guruji, I need puja consultation', '_blank')}
                    >
                      Message on WhatsApp
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <span className="text-accent font-bold">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground mb-2">For detailed inquiries and documentation</p>
                    <a href="mailto:panditadityaguruji@gmail.com" className="text-primary font-medium hover:underline">
                      panditadityaguruji@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-spiritual-deep-blue/10 rounded-lg flex items-center justify-center">
                    <span className="text-spiritual-deep-blue font-bold">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground mb-2">Sacred Jyotirlinga Temple Complex</p>
                    <address className="text-foreground not-italic">
                      Trimbakeshwar Temple<br />
                      Nashik, Maharashtra 422212<br />
                      India
                    </address>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-primary/5 to-spiritual-saffron/5">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Temple Timings</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-foreground">Morning</p>
                    <p className="text-muted-foreground">5:00 AM - 12:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Evening</p>
                    <p className="text-muted-foreground">4:00 PM - 9:00 PM</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  * Puja timings may vary based on festivals and special occasions
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Booking */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Quick Consultation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  For immediate puja booking or spiritual consultation, please contact us directly. 
                  We prefer personal conversation to understand your specific needs and provide 
                  appropriate guidance.
                </p>

                <div className="space-y-4">
                  <Button 
                    className="w-full text-lg py-6 bg-primary hover:bg-primary/90"
                    onClick={() => window.location.href = 'tel:+918707880017'}
                  >
                    Call Now: +91 87078 80017
                  </Button>
                  
                  <Button 
                    className="w-full text-lg py-6 bg-green-600 hover:bg-green-700"
                    onClick={() => window.open('https://wa.me/918707880017?text=Namaste Guruji, I need puja consultation', '_blank')}
                  >
                    WhatsApp Consultation
                  </Button>
                </div>

                <div className="bg-spiritual-cream/30 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3 text-foreground">What to Mention When Contacting:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Type of puja required</li>
                    <li>• Preferred date and time</li>
                    <li>• Number of family members</li>
                    <li>• Any specific concerns or requirements</li>
                    <li>• Your location (if home visit needed)</li>
                  </ul>
                </div>

                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Available for consultations daily from 6 AM to 8 PM
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-spiritual-deep-blue/10 to-accent/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Special Note for Devotees
              </h3>
              <p className="text-lg text-muted-foreground">
                Pandit Aditya Guruji personally attends to each devotee's needs. For the best 
                spiritual guidance and authentic Vedic ceremonies, please book in advance, 
                especially during festival seasons and auspicious dates.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;