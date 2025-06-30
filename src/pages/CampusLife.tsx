
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CampusLife = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1584467735871-6d631b588a84?fit=crop&w=1200&q=80" 
          alt="Students enjoying outdoor campus activities" 
          className="w-full h-[60vh] object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-merriweather font-bold mb-4">
            Campus Life at Genezio
          </h1>
          <p className="max-w-2xl text-lg mb-8">
            Explore what life at Genezio University is really like—from residence halls to student clubs, fitness centers, and local cafés.
          </p>
        </div>
      </section>

      {/* Campus Overview */}
      <section className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="section-title mb-6">A Vibrant Community</h2>
            <p className="text-lg mb-6">
              Our campus brings together 3,800 students from over 50 countries, creating a dynamic environment where innovation meets tradition.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">3,800</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">42%</div>
                <div className="text-sm text-gray-600">International</div>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Diverse group of students on campus" 
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Student Activities */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-10">Student Activities</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card className="shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-2xl mr-3">💻</span>
                  HackInnovate Annual Competition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Largest student-run hackathon in Eastern Europe with 600+ participants from across the continent.</p>
                <div className="bg-orange-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-orange-800 mb-2">2024 Highlights:</h4>
                  <ul className="space-y-1 text-sm text-orange-700">
                    <li>• €50,000 in prizes awarded</li>
                    <li>• 120 projects submitted</li>
                    <li>• 15 startups launched</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">Google Sponsor</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">UiPath Partner</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-2xl mr-3">🌱</span>
                  Green Campus Initiative
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Award-winning sustainability program making Genezio a leader in environmental responsibility.</p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Solar Power Coverage</span>
                    <span className="text-sm font-bold text-green-600">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Zero-waste dining halls</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Electric campus shuttles</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>LEED Platinum buildings</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-xl font-bold mb-4">80+ Student Organizations</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl mb-2">🎭</div>
                <div className="text-sm font-medium">Arts & Culture</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl mb-2">⚽</div>
                <div className="text-sm font-medium">Sports & Recreation</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl mb-2">🤝</div>
                <div className="text-sm font-medium">Community Service</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl mb-2">💼</div>
                <div className="text-sm font-medium">Professional</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="container-section">
        <h2 className="section-title text-center mb-10">World-Class Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-2xl mr-3">🔧</span>
                Digital Fabrication Lab
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">24/7 access to cutting-edge prototyping equipment for hands-on learning and innovation.</p>
              <ul className="space-y-2 text-sm">
                <li>• Industrial-grade 3D printers</li>
                <li>• Laser cutting stations</li>
                <li>• IoT prototyping kits</li>
                <li>• CNC machining center</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-2xl mr-3">🏊</span>
                Athletics Complex
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">State-of-the-art fitness and recreation facilities for student wellness and community building.</p>
              <ul className="space-y-2 text-sm">
                <li>• Olympic-sized swimming pool</li>
                <li>• VR fitness training center</li>
                <li>• Rock climbing wall</li>
                <li>• Multiple sports courts</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-2xl mr-3">🏠</span>
                Live on Campus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Modern residence halls designed for community living and academic success.</p>
              <ul className="space-y-2 text-sm">
                <li>• Smart home technology</li>
                <li>• Themed housing communities</li>
                <li>• Study lounges & maker spaces</li>
                <li>• Sustainable living options</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Campus Events */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-12">
        <div className="container mx-auto px-4 text-white">
          <h2 className="section-title text-center mb-10 text-white">Campus Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🎵</div>
              <h3 className="font-bold mb-2">Concerts</h3>
              <p className="text-sm opacity-90">Monthly performances featuring local and international artists</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="font-bold mb-2">Guest Lectures</h3>
              <p className="text-sm opacity-90">Industry leaders and Nobel laureates share insights</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🎬</div>
              <h3 className="font-bold mb-2">Movie Nights</h3>
              <p className="text-sm opacity-90">Outdoor screenings and film festival premieres</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🍕</div>
              <h3 className="font-bold mb-2">Food Festivals</h3>
              <p className="text-sm opacity-90">Celebrating our diverse international community</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-section text-center">
        <h2 className="section-title mb-6">Experience Campus Life</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          The best way to understand our community is to see it for yourself. Schedule a campus tour and discover what makes Genezio special.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="btn-primary px-8 py-3" asChild>
            <Link to="/campus-tour">Schedule a Campus Tour</Link>
          </Button>
          <Button variant="outline" className="border-genezio-lavender text-genezio-dark hover:bg-genezio-light px-8 py-3" asChild>
            <Link to="/request-info">Request More Info</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CampusLife;
