import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';

const Pooja = () => {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const poojaServices = [
    {
      title: "कालसर्प दोष पूजा",
      description: "जब सभी ग्रह राहु और केतु के बीच आ जाते हैं, तो कुंडली में कालसर्प दोष बनता है। यह दोष जीवन में बाधाओं और मानसिक तनाव का कारण बनता है। त्र्यंबकेश्वर में यह पूजा अत्यंत प्रभावी मानी जाती है।",
      duration: "3-4 घंटे"
    },
    {
      title: "पितृ दोष निवारण पूजा", 
      description: "पूर्वजों की अपूर्ण इच्छाओं या अनुष्ठानिक त्रुटियों के कारण जीवन में परेशानियां आती हैं। इस पूजा से पितृों की कृपा मिलती है और परिवार में सुख-शांति आती है।",
      duration: "2-3 घंटे"
    },
    {
      title: "महामृत्युंजय जाप",
      description: "यह शक्ति देने वाला वैदिक जाप गंभीर बीमारियों, भय और मानसिक अस्थिरता से मुक्ति के लिए कराया जाता है।",
      duration: "2-3 घंटे"
    },
    {
      title: "रुद्राभिषेक पूजा", 
      description: "भगवान शिव का जल, दूध, शहद आदि से अभिषेक कर शिव कृपा प्राप्त की जाती है। यह पूजा जीवन में सुख, समृद्धि और स्वास्थ्य प्रदान करती है।",
      duration: "1-2 घंटे"
    },
    {
      title: "नवग्रह शांति पूजा",
      description: "कुंडली में ग्रहों की प्रतिकूल स्थिति को शांत करने हेतु यह पूजा अत्यंत फलदायी मानी जाती है।",
      duration: "4-5 घंटे"
    },
    {
      title: "मंगलीक दोष निवारण",
      description: "मंगल दोष से उत्पन्न विवाह में रुकावटों और दांपत्य जीवन की समस्याओं से मुक्ति दिलाने हेतु विशेष पूजा।",
      duration: "2-3 घंटे"
    },
    {
      title: "कुंभ/अर्क विवाह",
      description: "मंगलीक दोष के समाधान के लिए यह प्रतीकात्मक विवाह किया जाता है, जिससे वैवाहिक जीवन शुभ होता है।",
      duration: "1-2 घंटे"
    },
    {
      title: "गृह प्रवेश / वास्तु शांति",
      description: "नए घर में प्रवेश करते समय की जाने वाली यह पूजा घर में सकारात्मक ऊर्जा और सुरक्षा सुनिश्चित करती है।",
      duration: "2-3 घंटे"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-spiritual-saffron/20 to-spiritual-gold/20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            हमारी पूजा सेवाएं
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            त्र्यंबकेश्वर, नासिक की पवित्र भूमि पर स्थित पंडित आदित्य गुरुजी पिछले 10 वर्षों से शुद्ध वैदिक पद्धति से 
            विभिन्न प्रकार की धार्मिक पूजाएं कराते आ रहे हैं। उनके अनुभव और अब तक की 10,000+ सफल पूजाओं ने 
            श्रद्धालुओं को मानसिक शांति, स्वास्थ्य और जीवन में सकारात्मक ऊर्जा प्रदान की है।
          </p>
          <p className="text-base text-muted-foreground mt-4 max-w-3xl mx-auto">
            हर पूजा शास्त्रों के अनुसार, उचित मुहूर्त और विधिविधान से सम्पन्न कराई जाती है।
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {poojaServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group h-full">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors text-center">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex flex-col h-full">
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  
                   <div className="flex justify-between items-center text-sm pt-4 border-t">
                     <span className="text-primary font-medium">अवधि: {service.duration}</span>
                   </div>
                   
                   <div className="pt-4">
                     <Button 
                       className="w-full bg-primary hover:bg-primary/90"
                       onClick={() => {
                         setSelectedService(service.title);
                         setIsBookingFormOpen(true);
                       }}
                     >
                       पूजा बुक करें
                     </Button>
                   </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-spiritual-deep-blue/10 to-primary/10">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  विशेष सुविधाएं
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-primary">पूजा की विशेषताएं:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• शुद्ध वैदिक पद्धति के अनुसार</li>
                      <li>• उचित मुहूर्त का चयन</li>
                      <li>• संपूर्ण विधि-विधान</li>
                      <li>• गुणवत्तापूर्ण पूजा सामग्री</li>
                      <li>• व्यक्तिगत परामर्श</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-primary">बुकिंग की जानकारी:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• पूर्व बुकिंग आवश्यक</li>
                      <li>• त्योहारों में विशेष व्यवस्था</li>
                      <li>• घर पर पूजा की सुविधा</li>
                      <li>• फोन/व्हाट्सऐप पर संपर्क</li>
                      <li>• निःशुल्क प्रारंभिक परामर्श</li>
                    </ul>
                  </div>
                </div>

                 <div className="mt-8 p-6 bg-spiritual-cream/30 rounded-lg">
                   <h4 className="font-semibold mb-3 text-foreground">संपर्क के लिए:</h4>
                   <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <Button 
                       className="bg-primary hover:bg-primary/90"
                       onClick={() => setIsBookingFormOpen(true)}
                     >
                       पूजा बुक करें अभी
                     </Button>
                     <Button 
                       className="bg-primary/90 hover:bg-primary"
                       onClick={() => window.location.href = 'tel:+918707880017'}
                     >
                       फोन: +91 87078 80017
                     </Button>
                     <Button 
                       className="bg-green-600 hover:bg-green-700"
                       onClick={() => window.open('https://wa.me/918707880017?text=नमस्ते गुरुजी, मुझे पूजा की जानकारी चाहिए', '_blank')}
                     >
                       व्हाट्सऐप पर संदेश भेजें
                     </Button>
                   </div>
                 </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <BookingForm 
        isOpen={isBookingFormOpen} 
        onClose={() => setIsBookingFormOpen(false)}
        serviceName={selectedService}
      />
      
      <Footer />
    </div>
  );
};

export default Pooja;