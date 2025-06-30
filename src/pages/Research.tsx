
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Research = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Research laboratory with advanced equipment" 
          className="w-full h-[60vh] object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-merriweather font-bold mb-4">
            Research & Innovation
          </h1>
          <p className="max-w-2xl text-lg mb-8">
            Pioneering breakthroughs at the intersection of technology and human potential
          </p>
        </div>
      </section>

      {/* Research Statistics */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">€3.8M</div>
              <div className="text-sm opacity-90">Total Active Funding</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">17</div>
              <div className="text-sm opacity-90">Q1 Publications (2024)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">8</div>
              <div className="text-sm opacity-90">Patents Pending</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">5</div>
              <div className="text-sm opacity-90">Spin-off Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Research Projects */}
      <section className="container-section">
        <h2 className="section-title text-center mb-10">Active Research Projects</h2>
        
        <div className="overflow-x-auto mb-8">
          <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Project</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Funding</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Outcomes</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="font-medium text-gray-900">Neuro-Cloud Interfaces</div>
                  <div className="text-sm text-gray-500">Brain-computer interface for cloud computing control</div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">€2.1M Horizon Europe</td>
                <td className="px-6 py-4 text-sm text-gray-900">3 patents pending</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="font-medium text-gray-900">Bioprinting Tissue Scaffolds</div>
                  <div className="text-sm text-gray-500">3D bioprinting for regenerative medicine</div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">€1.7M ERC Grant</td>
                <td className="px-6 py-4 text-sm text-gray-900">Clinical trials starting 2026</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Phase II
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-2xl mr-3">🧠</span>
                Neuro-Cloud Interfaces
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Revolutionary research combining neuroscience with cloud computing to enable direct brain control of distributed systems.</p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Progress:</span>
                  <span className="text-sm font-medium">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm font-semibold text-blue-800">Next Milestone: Human trials Q2 2025</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-2xl mr-3">🧬</span>
                Bioprinting Tissue Scaffolds
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Advanced 3D bioprinting technology for creating tissue scaffolds that could revolutionize organ transplantation and regenerative medicine.</p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Progress:</span>
                  <span className="text-sm font-medium">60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm font-semibold text-green-800">Achievement: FDA pre-approval received</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Innovation Ecosystem */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-10">Innovation Ecosystem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-md">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">🏢</div>
                <CardTitle>Spin-off Companies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center mb-4">5 successful companies launched from campus research, with combined valuation of €45M.</p>
                <ul className="space-y-2 text-sm">
                  <li>• NeuralLink Dynamics (€15M Series A)</li>
                  <li>• CloudMind Technologies (€12M Seed)</li>
                  <li>• BioScaffold Solutions (€8M Pre-A)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <CardTitle>Industry Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center mb-4">Strategic collaborations with leading technology companies and research institutions.</p>
                <ul className="space-y-2 text-sm">
                  <li>• CERN (Quantum Computing)</li>
                  <li>• Meta Reality Labs (AR/VR)</li>
                  <li>• NVIDIA (AI Research)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <CardTitle>Tech Transfer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center mb-4">Ranked #7 in Eastern Europe for technology transfer and commercialization success.</p>
                <ul className="space-y-2 text-sm">
                  <li>• 23 technologies licensed (2024)</li>
                  <li>• €2.3M in licensing revenue</li>
                  <li>• 89% commercialization rate</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-12">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Join Our Research Community</h2>
          <p className="mb-8 max-w-2xl mx-auto">Be part of groundbreaking research that's shaping the future of technology and human potential.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3" asChild>
              <a href="/apply">Apply for Graduate Programs</a>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3">
              Contact Research Office
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
