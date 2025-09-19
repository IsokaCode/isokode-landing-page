import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  CheckCircle, 
  Wrench, 
  Target, 
  Shield, 
  Star,
  ArrowRight,
  Menu,
  X,
  Award,
  TrendingUp,
  Users
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showStickyButton, setShowStickyButton] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyButton(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.service) {
      alert('Please fill in all required fields before scheduling your call.');
      return;
    }
    
    // Use Calendly's custom question pre-fill format
    const calendlyParams = new URLSearchParams({
      // Basic guest information (these work)
      name: formData.name,
      email: formData.email,
      // Custom questions - map to your specific questions
      a1: formData.service, // Question 1: Service Type
      a2: formData.company || '', // Question 2: Company Name/Website
      // Force UK timezone
      timezone: 'Europe/London',
    });
    
    // Your actual Calendly link
    const calendlyUrl = `https://calendly.com/uisoka1/free-strategy-call?${calendlyParams.toString()}`;
    
    // Debug: Log the URL to see what's being generated
    console.log('Calendly URL:', calendlyUrl);
    console.log('Form data:', formData);
    
    // Open Calendly in new tab
    window.open(calendlyUrl, '_blank');
    
    // Optional: Show success message
    alert('Redirecting to schedule your free strategy call...');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToForm = () => {
    document.getElementById('booking-form')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const scrollToGuarantee = () => {
    document.getElementById('guarantee-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200/50 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-3xl font-black text-transparent bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text tracking-tight cursor-pointer hover:opacity-80 transition-opacity duration-200"
              >
                Isokode
              </div>
            </div>
            
            <div className="hidden md:block">
              <button
                onClick={scrollToForm}
                className="bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Book Free Strategy Call
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-700"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-2">
              <button
                onClick={() => {
                  scrollToForm();
                  setIsMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300"
              >
                Book Free Strategy Call
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-blue-50 via-slate-50 to-blue-50/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23e2e8f0&quot; fill-opacity=&quot;0.3&quot;%3E%3Ccircle cx=&quot;7&quot; cy=&quot;7&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-blue-100/80 backdrop-blur-sm text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-8 border border-blue-200/50">
            <Award className="w-4 h-4 mr-2" />
            Trusted by London's Finest Construction & Trade Businesses
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-[1.1] tracking-tight">
            Your Website Should Bring You Jobs —{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 bg-clip-text">
              Not Just Look Good
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            We turn contractor, trades, and construction websites into{' '}
            <span className="font-bold text-blue-800 bg-blue-100/50 px-2 py-1 rounded-lg">24/7 job-booking machines</span>{' '}
            built to capture enquiries and qualify clients,<br />
            backed by our <button 
              onClick={scrollToGuarantee}
              className="font-bold text-blue-800 bg-blue-100/50 px-2 py-1 rounded-lg hover:bg-blue-200/50 transition-colors duration-200 cursor-pointer"
            >
              Zero-Risk Guarantee
            </button>.
          </p>

          <button
            onClick={scrollToForm}
            className="bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white px-12 py-5 rounded-2xl text-xl font-black transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 group"
          >
            Book Free Strategy Call
            <ArrowRight className="inline-block ml-3 transition-transform duration-300 group-hover:translate-x-1" size={24} />
          </button>

          <div className="mt-16">
            <div className="max-w-7xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 text-center">
                Before/After Website Screenshots
              </h3>
              
              <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                {/* Old Site */}
                <div className="text-center">
                  <h4 className="text-4xl md:text-5xl font-black text-red-600 mb-6">
                    Old Site
                  </h4>
                  <p className="text-xl md:text-2xl font-semibold text-red-600 mb-8">
                    Just a Digital Brochure
                  </p>
                  <div className="bg-white rounded-3xl shadow-2xl p-2 md:p-3 border border-gray-200">
                    <img 
                     src="/image copy.png"
                      alt="Old website - just a digital brochure"
                      className="w-full h-80 md:h-96 object-contain rounded-2xl"
                    />
                  </div>
                </div>

                {/* New Site */}
                <div className="text-center">
                  <h4 className="text-4xl md:text-5xl font-black text-green-600 mb-6">
                    New Site
                  </h4>
                  <p className="text-xl md:text-2xl font-semibold text-green-600 mb-8">
                    24/7 Job-Booking Machine
                  </p>
                  <div className="bg-white rounded-3xl shadow-2xl p-2 md:p-3 border border-gray-200">
                    <img 
                     src="/image copy copy.png"
                      alt="New website - 24/7 job-booking machine"
                      className="w-full h-80 md:h-96 object-contain rounded-2xl my-2"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats Bar */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-blue-700 font-bold text-xl">Capture leads even if you miss the call.</div>
              </div>
              <div className="text-center">
                <div className="text-blue-700 font-bold text-xl">Filter out time-wasters and low-budget jobs.</div>
              </div>
              <div className="text-center">
                <div className="text-blue-700 font-bold text-xl">Built for trades & construction, not generic templates.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              What Our <span className="text-transparent bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              Real results from trades & construction businesses we've helped.
            </p>
          </div>

          {/* Main Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center mb-6">
                <img 
                  src="/grillseekers bbq and catering.png" 
                  alt="Grill Seekers Logo" 
                  className="w-16 h-16 shadow-lg"
                />
              </div>
              <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                "I already got 2 bookings just from showing the site preview to one of my colleagues."
              </p>
              <p className="text-blue-700 font-bold text-lg">— Javhan</p>
              <p className="text-gray-600 font-semibold">Grill Seekers</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center mb-6">
                <img 
                  src="/knights heating.png" 
                  alt="Knights Heating Logo" 
                  className="w-16 h-16 shadow-lg"
                />
              </div>
              <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                "Good thing I found you — my old site wasn't bringing me any business. Now I'm getting leads left, right and centre… it's just up to me to close them."
              </p>
              <p className="text-blue-700 font-bold text-lg">— Jack</p>
              <p className="text-gray-600 font-semibold">Knights Heating</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center mb-6">
                <img 
                  src="/omg.PNG" 
                  alt="OMG Agency Logo" 
                  className="w-16 h-16 shadow-lg"
                />
              </div>
              <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                "I know you work quick, and I appreciate the white glove service you offer."
              </p>
              <p className="text-blue-700 font-bold text-lg">— Dre</p>
              <p className="text-gray-600 font-semibold">OMG Agency</p>
            </div>
          </div>

          {/* Additional Testimonials Carousel */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-8 rounded-2xl border border-blue-200/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <img 
                    src="/steeledge.png" 
                    alt="Steeledge UK Logo" 
                    className="w-12 h-12 shadow-lg object-contain"
                  />
                </div>
                <p className="text-gray-700 italic mb-4 text-base leading-relaxed">
                  "I want you to get the same results for my other two businesses."
                </p>
                <p className="text-blue-700 font-bold">— Yash</p>
                <p className="text-gray-600 font-semibold text-sm">Steeledge UK</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-8 rounded-2xl border border-blue-200/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <img 
                    src="/acdi-electrovent.png" 
                    alt="ACDI Electrovent Logo" 
                    className="w-12 h-12 shadow-lg"
                  />
                </div>
                <p className="text-gray-700 italic mb-4 text-base leading-relaxed">
                  "The current website isn't bringing me any business. I could use it as another avenue to get clients consistently instead of gambling on jobs."
                </p>
                <p className="text-blue-700 font-bold">— KC</p>
                <p className="text-gray-600 font-semibold text-sm">ACDI Electrovent</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional CTA Section */}
      <section className="py-4 bg-gradient-to-br from-blue-50/40 via-white to-slate-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23dbeafe&quot; fill-opacity=&quot;0.15&quot;%3E%3Ccircle cx=&quot;7&quot; cy=&quot;7&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <button
            onClick={scrollToForm}
            className="bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white px-20 py-12 rounded-3xl text-4xl font-black transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 group mb-6"
          >
            Book Your Free Strategy Call
            <ArrowRight className="inline-block ml-6 transition-transform duration-300 group-hover:translate-x-1" size={40} />
          </button>
          
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            We only take on 2 new contractors per month to ensure quality. Book your slot now.
          </p>
        </div>
      </section>

      {/* Pain/Problem Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-slate-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Most Contractor Websites Are Just <span className="text-red-600 relative">
                Digital Brochures
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-red-200 rounded-full"></div>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              They look nice but don't convert visitors into paying customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors duration-300">
                <X className="text-red-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Miss a Call = Lost Lead</h3>
              <p className="text-gray-600 leading-relaxed">
                When potential clients call and can't reach you, they move on to your competitors immediately.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors duration-300">
                <TrendingUp className="text-red-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Wasted Ad Spend</h3>
              <p className="text-gray-600 leading-relaxed">
                Running ads to a website that doesn't convert is like pouring money down the drain.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors duration-300">
                <Users className="text-red-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Time Wasters</h3>
              <p className="text-gray-600 leading-relaxed">
                Without proper qualification, you waste time on prospects who can't afford your services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50/30 via-white to-slate-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23dbeafe&quot; fill-opacity=&quot;0.2&quot;%3E%3Ccircle cx=&quot;7&quot; cy=&quot;7&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              The <span className="text-transparent bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text">Isokode Solution</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Transform your website into a lead-generating powerhouse with our proven 3-pillar system
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-10 rounded-3xl text-center border border-blue-200/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-6">Conversion-First Design</h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                Every element is strategically placed to guide visitors towards booking a consultation or requesting a quote.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-10 rounded-3xl text-center border border-blue-200/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Wrench size={32} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-6">Automated Booking & Lead Capture</h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                24/7 lead capture system that works even when you're on-site. Never miss another opportunity.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-10 rounded-3xl text-center border border-blue-200/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Shield size={32} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-6">Qualified Clients Only</h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                Smart filtering system that pre-qualifies leads, ensuring you only speak with serious, ready-to-buy prospects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Reversal Section */}
      <section id="guarantee-section" className="py-24 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;7&quot; cy=&quot;7&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-gradient-to-br from-blue-800/50 to-blue-900/50 backdrop-blur-sm p-12 md:p-16 rounded-3xl text-center border border-blue-600/30 shadow-2xl">
            <div className="text-white mb-8">
              <div className="bg-white/10 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <Shield size={48} />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
              Zero-Risk Guarantee
            </h2>
            <div className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto font-medium">
              <p className="mb-6">
                To make it a no-brainer decision, we'll create a{' '}
                <span className="font-black text-white bg-white/10 px-3 py-1 rounded-lg">tailored website preview</span>{' '}
                for you at no extra cost.
              </p>
              <p className="mb-6">
                You'll see exactly how your site could generate more leads{' '}
                <span className="font-black text-white bg-white/10 px-3 py-1 rounded-lg">before you spend a penny</span>.
              </p>
              <p>
                If you like the preview, you move forward.{' '}
                <span className="font-black text-white bg-white/10 px-3 py-1 rounded-lg">If not, you walk away</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="booking-form" className="py-24 bg-gradient-to-br from-blue-50/40 via-slate-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23dbeafe&quot; fill-opacity=&quot;0.15&quot;%3E%3Ccircle cx=&quot;7&quot; cy=&quot;7&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Book Your <span className="text-transparent bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text">Free Strategy Call</span>
            </h2>
            <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
              Let's discuss how we can transform your website into a lead-generating machine
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="bg-white p-10 md:p-16 rounded-3xl shadow-2xl border border-gray-100 relative z-10">
            <div className="mb-8">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg font-medium bg-gray-50 focus:bg-white cursor-text pointer-events-auto"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg font-medium bg-gray-50 focus:bg-white cursor-text pointer-events-auto"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">
                  Company Name / Website
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg font-medium bg-gray-50 focus:bg-white cursor-text pointer-events-auto"
                  placeholder="Your company or website"
                />
              </div>
            </div>

            <div className="mb-10">
              <label htmlFor="service" className="block text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">
                Service Provided *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg font-medium bg-gray-50 focus:bg-white cursor-pointer pointer-events-auto"
              >
                <option value="">Select your service...</option>
                <option value="Plumber">Plumber</option>
                <option value="Electrical">Electrical</option>
                <option value="Construction">Construction</option>
                <option value="Roofing">Roofing</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white px-8 py-6 rounded-2xl text-xl font-black transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 group"
            >
              Book My Call
              <ArrowRight className="inline-block ml-3 transition-transform duration-300 group-hover:translate-x-1" size={24} />
            </button>

            <p className="text-sm text-gray-500 text-center mt-6 font-medium">
              * Required fields. We respect your privacy and never share your information.
            </p>
          </form>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;7&quot; cy=&quot;7&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
            Ready to Double Your Job Leads?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            Don't let another potential customer slip through the cracks. 
            Transform your website today.
          </p>
          <button
            onClick={scrollToForm}
            className="bg-white text-blue-800 hover:bg-gray-50 px-12 py-6 rounded-2xl text-xl font-black transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/25 group"
          >
            Book Free Strategy Call
            <ArrowRight className="inline-block ml-3 transition-transform duration-300 group-hover:translate-x-1" size={24} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <div className="text-3xl font-black text-transparent bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text">
                Isokode
              </div>
              <p className="text-gray-400 mt-2 font-medium">Transforming websites into lead machines</p>
            </div>
            <div className="flex items-center space-x-8">
              <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                <Mail size={18} className="mr-3" />
                <span className="font-medium">hello@isokode.com</span>
              </div>
              <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                <Phone size={18} className="mr-3" />
                <span className="font-medium">07853554242</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
            <p className="font-medium">&copy; 2025 Isokode. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky CTA Button */}
      {showStickyButton && (
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={scrollToForm}
            className="bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white px-8 py-4 rounded-2xl font-black shadow-2xl transition-all duration-300 transform hover:scale-110 animate-pulse hover:animate-none group"
          >
            Book Free Call
            <ArrowRight className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
          </button>
        </div>
      )}
    </div>
  );
}

export default App;