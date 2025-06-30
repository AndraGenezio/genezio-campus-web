
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Academics = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Students studying in modern library" 
          className="w-full h-[60vh] object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-merriweather font-bold mb-4">
            Academic Excellence
          </h1>
          <p className="max-w-2xl text-lg mb-8">
            Cutting-edge programs designed for tomorrow's innovators and leaders
          </p>
        </div>
      </section>

      {/* Undergraduate Programs */}
      <section className="container-section">
        <h2 className="section-title text-center mb-10">Undergraduate Degrees</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-blue-600">
            <CardHeader>
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">☁️</span>
                <CardTitle className="text-xl">B.Sc. Cloud Systems Engineering</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">120-credit program with AWS/Azure certification embedded. Specializations in distributed systems or edge computing.</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Industry-integrated curriculum with hands-on cloud labs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Senior capstone project with industry partners</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Professional certifications included in tuition</span>
                </li>
              </ul>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm font-semibold text-blue-800">Career Outcomes: 95% job placement in cloud engineering roles</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-purple-600">
            <CardHeader>
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">🎨</span>
                <CardTitle className="text-xl">B.A. Digital Interaction Design</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Combines UX principles with AR/VR development. Features year-long studio collaboration with Meta Reality Labs.</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Mixed reality design studio with VR/AR equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Direct mentorship from Meta Reality Labs designers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Portfolio development with real client projects</span>
                </li>
              </ul>
              <div className="bg-purple-50 p-3 rounded-lg">
                <p className="text-sm font-semibold text-purple-800">Partnership: Exclusive collaboration with Meta Reality Labs</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Graduate Programs */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-10">Graduate Programs</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-green-600">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">🤖</span>
                  <CardTitle className="text-xl">M.S. Artificial Intelligence</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Thesis track with NVIDIA GPU lab access. 100% internship placement at AI startups.</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Access to NVIDIA DGX systems for research</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Guaranteed internship placement program</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Research collaboration with industry leaders</span>
                  </li>
                </ul>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-green-800">Success Rate: 100% internship placement at AI startups</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-indigo-600">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">⚛️</span>
                  <CardTitle className="text-xl">Ph.D. Quantum Computing</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Fully-funded research program with CERN partnership. Requires published paper in Tier-1 journal.</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Full funding including stipend and benefits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Research collaboration with CERN scientists</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Access to quantum computing hardware</span>
                  </li>
                </ul>
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-indigo-800">Partnership: Direct collaboration with CERN research teams</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Faculty Spotlight */}
      <section className="container-section">
        <h2 className="section-title text-center mb-10">Distinguished Faculty</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">AP</span>
              </div>
              <CardTitle>Dr. Anya Petrova</CardTitle>
              <p className="text-gray-600">Chair of Quantum Computing</p>
            </CardHeader>
            <CardContent>
              <p className="mb-3">Former lead at IBM Q Network. Research focus on topological qubits and quantum error correction.</p>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm font-semibold text-blue-800">Publications: 47 peer-reviewed papers, 3 quantum patents</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">MB</span>
              </div>
              <CardTitle>Dr. Marco Bianchi</CardTitle>
              <p className="text-gray-600">Head of Bio-Digital Interfaces</p>
            </CardHeader>
            <CardContent>
              <p className="mb-3">TED Speaker and pioneer in thought-controlled prosthetics. Leading research in brain-computer interfaces.</p>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm font-semibold text-green-800">Achievement: Developed first FDA-approved thought-controlled arm</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Shape the Future?</h2>
          <p className="mb-8 max-w-2xl mx-auto">Join our innovative programs and work alongside world-class faculty on cutting-edge research.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3" asChild>
              <Link to="/apply">Apply Now</Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3" asChild>
              <Link to="/campus-tour">Schedule a Campus Tour</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
