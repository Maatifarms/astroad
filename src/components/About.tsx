import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Pandit Aditya Guruji
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A distinguished Vedic scholar and priest with over a decade of dedicated service
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">Sacred Heritage</h3>
                <p className="text-muted-foreground">
                  Born into a traditional Brahmin family in Trimbakeshwar, Pandit Aditya Guruji has been 
                  immersed in Vedic traditions from childhood. His deep understanding of ancient scriptures 
                  and rituals has been cultivated over a decade of dedicated practice.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-accent">Expertise & Knowledge</h3>
                <p className="text-muted-foreground">
                  Master of Sanskrit, expert in Vedic astrology, and proficient in all major Hindu rituals 
                  including Kaal Sarp Dosh remedies, Pitru Dosh puja, and various Shanti ceremonies. 
                  His guidance has helped thousands find peace and prosperity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-spiritual-saffron">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-spiritual-saffron">Mission & Vision</h3>
                <p className="text-muted-foreground">
                  To preserve and share the ancient wisdom of Vedic traditions while helping devotees 
                  overcome life's challenges through proper rituals, spiritual guidance, and divine blessings.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Qualifications & Achievements</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-muted-foreground">Shastriji (Sanskrit Scholar) from Kashi Vidyapeeth</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-muted-foreground">Certified Vedic Astrologer (Jyotish Acharya)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-muted-foreground">10+ Years serving at Trimbakeshwar Temple</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-muted-foreground">Expert in Kaal Sarp Dosh and Pitru Dosh remedies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-muted-foreground">Performed 10,000+ successful pujas and ceremonies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-muted-foreground">Spiritual guide to thousands of devotees worldwide</span>
                </li>
              </ul>
            </div>

            <div className="text-center p-6 bg-spiritual-cream/50 rounded-lg">
              <blockquote className="text-lg italic text-foreground mb-4">
                "Dharma is the foundation of all prosperity. When we align our actions with divine will, 
                all obstacles dissolve naturally."
              </blockquote>
              <cite className="text-primary font-semibold">- Pandit Aditya Guruji</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;