
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Students walking on campus" 
          className="w-full h-[60vh] object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-merriweather font-bold mb-4">
            Genezio University
          </h1>
          <h2 className="text-xl md:text-3xl font-merriweather mb-6">
            Empowering Minds, Shaping Futures
          </h2>
          <p className="max-w-2xl text-lg mb-8">
            Europe's first cloud-native university preparing students for careers in technology, leadership, and lifelong growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg shadow-lg border-2 border-yellow-500" asChild>
              <Link to="/apply">Apply Now</Link>
            </Button>
            <Button variant="outline" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white px-8 py-6 rounded-full text-lg" asChild>
              <Link to="/request-info">Request Info</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* University Statistics */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">14%</div>
              <div className="text-sm opacity-90">Acceptance Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">3,800</div>
              <div className="text-sm opacity-90">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">42%</div>
              <div className="text-sm opacity-90">International</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">#7</div>
              <div className="text-sm opacity-90">Eastern Europe Tech Transfer</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Genezio? Section */}
      <section className="container-section">
        <h2 className="section-title text-center mb-10">Why Genezio?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-blue-500">
            <CardHeader className="text-center">
              <div className="text-4xl mb-4">🎓</div>
              <CardTitle>95% Job Placement Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">Our graduates are in high demand across industries, with most securing positions within three months of graduation in leading tech companies.</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-purple-500">
            <CardHeader className="text-center">
              <div className="text-4xl mb-4">💻</div>
              <CardTitle>Leading Programs in AI & Cloud Systems</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">Cutting-edge curriculum developed with industry leaders like NVIDIA, Meta Reality Labs, and CERN ensures our students are prepared for tomorrow's challenges.</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-green-500">
            <CardHeader className="text-center">
              <div className="text-4xl mb-4">🌎</div>
              <CardTitle>Global, Innovative Campus</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">Our diverse community represents over 50 countries, housed in Europe's most advanced Cyber-Physical Campus with 90% solar power and zero-waste facilities.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* University History Timeline */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-10">Our Innovation Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  2018
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Founded as Europe's First Cloud-Native University</h3>
                  <p className="text-gray-600">Established with a vision to revolutionize higher education through technology-integrated learning.</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  2021
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-purple-800 mb-2">Awarded "Most Innovative Curriculum" by EDUtech Europe</h3>
                  <p className="text-gray-600">Recognition for groundbreaking integration of AI, cloud computing, and quantum technologies in education.</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  2023
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-green-800 mb-2">Opened Bucharest Cyber-Physical Campus</h3>
                  <p className="text-gray-600">20,000 m² state-of-the-art facility featuring the Digital Fabrication Lab and NVIDIA GPU research center.</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  2025
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-yellow-800 mb-2">Ranked #7 in Eastern Europe for Tech Transfer</h3>
                  <p className="text-gray-600">Leading innovation ecosystem with 5 successful spin-off companies and €45M in combined valuation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Begin Your Journey at Genezio</h2>
          <p className="mb-8 max-w-2xl mx-auto">Join a community dedicated to excellence, innovation, and personal growth at Europe's most advanced university.</p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-10 py-6 rounded-full border-2 border-yellow-500" asChild>
            <Link to="/campus-tour">Schedule a Campus Tour</Link>
          </Button>
        </div>
      </section>

      {/* News Section */}
      <section className="container-section">
        <h2 className="section-title text-center mb-10">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
            <img 
              src="https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Professor teaching students" 
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <CardHeader>
              <CardTitle>Ph.D. Quantum Computing Program Launches</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Fully-funded research program with CERN partnership now accepting applications for Fall 2025.</p>
              <Link to="/academics" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</Link>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
            <img 
              src="https://images.pexels.com/photos/5428163/pexels-photo-5428163.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Student completing application" 
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <CardHeader>
              <CardTitle>Admissions Open – Deadline August 15</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Applications for undergraduate and graduate programs are now being accepted for the Fall 2025 semester. 80% of students receive merit scholarships.</p>
              <Link to="/admissions" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</Link>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
            <img 
              src="https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Campus event" 
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <CardHeader>
              <CardTitle>HackInnovate 2025: 600+ Participants Expected</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Eastern Europe's largest student hackathon returns with €50,000 in prizes from Google and UiPath sponsors.</p>
              <Link to="/campus-life" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</Link>
            </CardContent>
          </Card>
        </div>
        <div className="text-center">
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">View All News</Button>
        </div>
      </section>

      {/* Chatbot Callout */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-4xl mb-4">💬</div>
            <h2 className="text-2xl font-merriweather font-bold mb-4">Chat with GenezioBot</h2>
            <p className="mb-6">Have questions about admissions, programs, or campus life? Our AI assistant is available 24/7 to help you. Look for the chat icon in the lower-left corner.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
