
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const Academics = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Students in computer lab" 
          className="w-full h-[60vh] object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-merriweather font-bold mb-4">
            Academic Programs
          </h1>
          <p className="max-w-2xl text-lg mb-8">
            Innovative education designed for tomorrow's leaders and problem-solvers.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container-section">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">World-Class Education</h2>
          <p className="text-lg">
            At Genezio University, our academic programs blend theoretical knowledge with practical application, preparing students for meaningful careers and lifelong learning.
          </p>
        </div>
      </section>
      
      {/* Undergraduate Programs */}
      <section className="bg-genezio-light py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-10">Undergraduate Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-md hover:shadow-genezio transition-shadow duration-300">
              <CardHeader>
                <CardTitle>B.Sc. in AI & Ethics</CardTitle>
                <CardDescription>4-year program</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Explore the frontier of artificial intelligence development while addressing the ethical implications and societal impacts of these technologies.</p>
                <Button variant="outline" className="border-genezio-lavender text-genezio-dark hover:bg-genezio-light">Program Details</Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-md hover:shadow-genezio transition-shadow duration-300">
              <CardHeader>
                <CardTitle>B.Sc. in Data Science</CardTitle>
                <CardDescription>4-year program</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Develop expertise in collecting, analyzing, and interpreting complex data to drive decision-making across industries and sectors.</p>
                <Button variant="outline" className="border-genezio-lavender text-genezio-dark hover:bg-genezio-light">Program Details</Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-md hover:shadow-genezio transition-shadow duration-300">
              <CardHeader>
                <CardTitle>B.A. in Communication & Society</CardTitle>
                <CardDescription>4-year program</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Study how communication shapes our world, with focus on digital media, intercultural communication, and strategic messaging.</p>
                <Button variant="outline" className="border-genezio-lavender text-genezio-dark hover:bg-genezio-light">Program Details</Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-md hover:shadow-genezio transition-shadow duration-300">
              <CardHeader>
                <CardTitle>B.A. in Educational Technology</CardTitle>
                <CardDescription>4-year program</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Learn to design, develop, and implement technology-enhanced learning experiences for diverse educational contexts.</p>
                <Button variant="outline" className="border-genezio-lavender text-genezio-dark hover:bg-genezio-light">Program Details</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Graduate Programs */}
      <section className="container-section">
        <h2 className="section-title text-center mb-10">Graduate Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <Card className="shadow-md hover:shadow-genezio transition-shadow duration-300">
            <CardHeader>
              <CardTitle>M.Ed. in Learning Design</CardTitle>
              <CardDescription>2-year program</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Design innovative learning experiences that leverage technology and evidence-based methodologies for diverse educational settings.</p>
              <Button variant="outline" className="border-genezio-lavender text-genezio-dark hover:bg-genezio-light">Program Details</Button>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-genezio transition-shadow duration-300">
            <CardHeader>
              <CardTitle>M.Sc. in AI Systems</CardTitle>
              <CardDescription>2-year program</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Advance your expertise in artificial intelligence theory and application, focusing on machine learning, neural networks, and AI implementation.</p>
              <Button variant="outline" className="border-genezio-lavender text-genezio-dark hover:bg-genezio-light">Program Details</Button>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* New Coaching Program */}
      <section className="bg-genezio-lavender bg-opacity-10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <span className="bg-genezio-lavender text-white text-xs font-bold px-3 py-1 rounded-full mr-2">NEW</span>
                <h2 className="text-2xl md:text-3xl font-bold">M.A. in Coaching</h2>
              </div>
              <p className="mb-4 text-lg">Our innovative 2-year program prepares you for a rewarding career in professional coaching, with options for online and hybrid learning.</p>
              
              <h3 className="text-xl font-bold mb-3">Program Highlights:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-genezio-accent">•</div>
                  <span>Leadership training and coaching psychology</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-genezio-accent">•</div>
                  <span>Team dynamics and organizational behavior</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-genezio-accent">•</div>
                  <span>Preparation for ICF Certification</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-genezio-accent">•</div>
                  <span>Industry practicum partnerships</span>
                </li>
              </ul>
              
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                <p className="italic">"Genezio gave me the skills to coach confidently. The program's blend of theory and practice was perfect for my career transition."</p>
                <p className="font-semibold mt-2">— Jordan M., Class of 2024</p>
              </div>
              
              <Button className="btn-primary">Request Program Information</Button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Group coaching session" 
                className="rounded-lg shadow-md h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Academic Approach */}
      <section className="container-section">
        <h2 className="section-title text-center mb-8">Our Academic Approach</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-md">
            <CardHeader className="text-center">
              <div className="text-3xl mb-2">🔍</div>
              <CardTitle>Research-Driven</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">Our curriculum is informed by cutting-edge research and industry developments.</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md">
            <CardHeader className="text-center">
              <div className="text-3xl mb-2">🌱</div>
              <CardTitle>Growth-Oriented</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">We foster a growth mindset and lifelong learning through our educational philosophy.</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md">
            <CardHeader className="text-center">
              <div className="text-3xl mb-2">🤝</div>
              <CardTitle>Collaborative</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">Students engage in team projects and interdisciplinary work that mirrors real-world environments.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-genezio-dark text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Find Your Academic Path</h2>
          <p className="mb-8 max-w-2xl mx-auto">Explore our programs and discover how Genezio University can help you achieve your educational and career goals.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-genezio-lavender hover:bg-genezio-accent text-white">Download Program Guide</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/campus-tour">Schedule a Campus Tour</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
