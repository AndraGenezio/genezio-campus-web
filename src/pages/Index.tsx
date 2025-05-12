
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
            A modern institution preparing students for careers in technology, leadership, and lifelong growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-genezio-lavender hover:bg-genezio-accent text-white px-8 py-6 rounded-full text-lg shadow-lg" asChild>
              <Link to="/apply">Apply Now</Link>
            </Button>
            <Button variant="outline" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white px-8 py-6 rounded-full text-lg" asChild>
              <Link to="/request-info">Request Info</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Genezio? Section */}
      <section className="container-section">
        <h2 className="section-title text-center mb-10">Why Genezio?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-md hover:shadow-genezio transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="text-4xl mb-4">🎓</div>
              <CardTitle>95% Job Placement Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">Our graduates are in high demand across industries, with most securing positions within three months of graduation.</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-genezio transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="text-4xl mb-4">💻</div>
              <CardTitle>Leading Programs in AI & Leadership</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">Cutting-edge curriculum developed with industry leaders ensures our students are prepared for tomorrow's challenges.</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-genezio transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="text-4xl mb-4">🌎</div>
              <CardTitle>Global, Inclusive Campus</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">Our diverse community represents over 80 countries, creating a rich learning environment where different perspectives thrive.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-genezio-light py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Begin Your Journey at Genezio</h2>
          <p className="mb-8 max-w-2xl mx-auto">Join a community dedicated to excellence, innovation, and personal growth.</p>
          <Button className="btn-primary text-lg px-10 py-6" asChild>
            <Link to="/campus-tour">Schedule a Campus Tour</Link>
          </Button>
        </div>
      </section>

      {/* News Section */}
      <section className="container-section">
        <h2 className="section-title text-center mb-10">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <Card className="shadow-md hover:shadow-genezio transition-shadow duration-300">
            <img 
              src="https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Professor teaching students" 
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <CardHeader>
              <CardTitle>M.A. in Coaching Launching Fall 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Our new program prepares leaders for careers in professional coaching, with a focus on team dynamics and leadership psychology.</p>
              <Link to="/academics" className="text-genezio-accent hover:text-genezio-lavender font-medium">Learn More →</Link>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-genezio transition-shadow duration-300">
            <img 
              src="https://images.pexels.com/photos/5428163/pexels-photo-5428163.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Student completing application" 
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <CardHeader>
              <CardTitle>Admissions Open – Deadline August 15</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Applications for undergraduate and graduate programs are now being accepted for the Fall 2025 semester.</p>
              <Link to="/admissions" className="text-genezio-accent hover:text-genezio-lavender font-medium">Learn More →</Link>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-genezio transition-shadow duration-300">
            <img 
              src="https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Campus event" 
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <CardHeader>
              <CardTitle>Campus Welcome Week: Sept 5–12</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Join us for a week of orientation events, campus tours, and community building activities for all new students.</p>
              <Link to="/campus-life" className="text-genezio-accent hover:text-genezio-lavender font-medium">Learn More →</Link>
            </CardContent>
          </Card>
        </div>
        <div className="text-center">
          <Button variant="outline" className="border-genezio-lavender text-genezio-dark hover:bg-genezio-light">View All News</Button>
        </div>
      </section>

      {/* Chatbot Callout */}
      <section className="bg-genezio-lavender bg-opacity-10 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-4xl mb-4">💬</div>
            <h2 className="text-2xl font-merriweather font-bold mb-4">Chat with GenezioBot</h2>
            <p className="mb-6">Have questions about admissions, programs, or campus life? Our AI assistant is available 24/7 to help you. Look for the chat icon in the lower-right corner.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
