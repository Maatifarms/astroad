import { Button } from '@/components/ui/button';
import heroImage from '@/assets/spiritual-hero.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-spiritual-deep-blue/80 to-primary/60"></div>
      </div>
      
      <div className="container relative z-10 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Pandit Aditya Guruji
          </h1>
          <h2 className="text-xl md:text-3xl mb-4 text-spiritual-gold">
            Renowned Vedic Priest
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            30+ Years of Sacred Service • 32,000+ Pujas Performed
            <br />
            Trimbakeshwar, Nashik - The Sacred Jyotirlinga
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-3 bg-spiritual-saffron hover:bg-spiritual-saffron/90"
            >
              Book Puja Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-spiritual-deep-blue"
            >
              WhatsApp Consultation
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-3xl font-bold text-spiritual-gold">30+</h3>
              <p className="text-white/90">Years Experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-3xl font-bold text-spiritual-gold">32,000+</h3>
              <p className="text-white/90">Pujas Performed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-3xl font-bold text-spiritual-gold">100%</h3>
              <p className="text-white/90">Satisfied Devotees</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;