
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FinancialAid = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/4963462/pexels-photo-4963462.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Student working on laptop with financial documents" 
          className="w-full h-[60vh] object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-merriweather font-bold mb-4">
            International Student Financial Aid
          </h1>
          <p className="max-w-2xl text-lg mb-8">
            We understand that studying abroad is a major investment. Genezio University offers transparent cost estimates and generous financial aid opportunities for international students.
          </p>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="container-section">
        <h2 className="section-title text-center mb-10">Estimated Annual Costs (2024–2025)</h2>
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg mb-8">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardTitle className="text-center text-2xl">Total Estimated Cost: $53,700</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Item</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-900">Estimated Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-4 font-medium">Tuition and Fees</td>
                      <td className="py-4 px-4 text-right font-bold text-blue-600">$35,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-4">Room and Board</td>
                      <td className="py-4 px-4 text-right">$12,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-4">Books and Supplies</td>
                      <td className="py-4 px-4 text-right">$1,200</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-4">Health Insurance</td>
                      <td className="py-4 px-4 text-right">$2,500</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-4">Personal Expenses</td>
                      <td className="py-4 px-4 text-right">$3,000</td>
                    </tr>
                    <tr className="bg-blue-50 font-bold">
                      <td className="py-4 px-4">Total</td>
                      <td className="py-4 px-4 text-right text-blue-600">$53,700</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                *These are average estimates and actual costs may vary depending on your housing, program, and lifestyle choices.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Financial Aid Options */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-6">Financial Aid Options for International Students</h2>
          <p className="text-center mb-10 max-w-3xl mx-auto">
            While international students are not eligible for U.S. federal financial aid (FAFSA), Genezio University offers comprehensive support through institutional scholarships and work opportunities.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card className="shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-2xl mr-3">🌍</span>
                  Global Diversity Scholarships
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <div className="text-2xl font-bold text-blue-600 mb-1">$5,000 - $15,000</div>
                  <div className="text-sm text-blue-700">per year</div>
                </div>
                <p className="mb-4">Awards based on country of origin, leadership experience, and contribution to campus diversity.</p>
                <ul className="space-y-2 text-sm">
                  <li>• Renewable for up to 4 years</li>
                  <li>• No separate application required</li>
                  <li>• Based on admission application</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-2xl mr-3">🎓</span>
                  Academic Merit Scholarships
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-purple-50 p-4 rounded-lg mb-4">
                  <div className="text-2xl font-bold text-purple-600 mb-1">Up to $20,000</div>
                  <div className="text-sm text-purple-700">per year</div>
                </div>
                <p className="mb-4">Based on academic performance, standardized test scores, and extracurricular involvement.</p>
                <ul className="space-y-2 text-sm">
                  <li>• GPA and test score requirements</li>
                  <li>• Leadership experience valued</li>
                  <li>• Automatic consideration upon admission</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-2xl mr-3">💼</span>
                  On-Campus Employment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <div className="text-2xl font-bold text-green-600 mb-1">Up to 20 hours</div>
                  <div className="text-sm text-green-700">per week</div>
                </div>
                <p className="mb-4">Work opportunities in campus offices, dining halls, libraries, and research labs.</p>
                <ul className="space-y-2 text-sm">
                  <li>• $12-15 per hour starting wage</li>
                  <li>• Flexible scheduling around classes</li>
                  <li>• Professional development opportunities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-2xl mr-3">🔬</span>
                  Graduate Assistantships
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-orange-50 p-4 rounded-lg mb-4">
                  <div className="text-2xl font-bold text-orange-600 mb-1">Limited Positions</div>
                  <div className="text-sm text-orange-700">for graduate students</div>
                </div>
                <p className="mb-4">Partial tuition waivers and stipends in exchange for teaching or research support.</p>
                <ul className="space-y-2 text-sm">
                  <li>• 50-75% tuition reduction</li>
                  <li>• Monthly stipend included</li>
                  <li>• Valuable teaching/research experience</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Important Note</h3>
            <p className="mb-4">
              <strong>Scholarships are automatically considered at the time of application.</strong> No separate scholarship application form is needed.
            </p>
            <p className="text-gray-600">
              Our financial aid team will notify you of any awards along with your admission decision.
            </p>
          </div>
        </div>
      </section>

      {/* Financial Aid Statistics */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-12">
        <div className="container mx-auto px-4 text-white text-center">
          <h2 className="section-title text-white mb-10">Financial Aid Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">80%</div>
              <div className="text-lg">of international students receive merit scholarships</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$12,500</div>
              <div className="text-lg">average scholarship award per student</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">42%</div>
              <div className="text-lg">of our student body is international</div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply for Aid */}
      <section className="container-section">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title mb-6">How to Apply for Financial Aid</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-3">1</div>
              <h3 className="font-bold mb-2">Submit Application</h3>
              <p className="text-sm">Complete your admission application by the deadline</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-3">2</div>
              <h3 className="font-bold mb-2">Automatic Review</h3>
              <p className="text-sm">We automatically consider you for all available scholarships</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-3">3</div>
              <h3 className="font-bold mb-2">Receive Award</h3>
              <p className="text-sm">Award notifications come with admission decisions</p>
            </div>
          </div>
          <p className="text-gray-600 mb-8">
            Although international students cannot apply for U.S. federal aid, Genezio provides generous scholarship packages to make education accessible.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="btn-primary px-8 py-3" asChild>
              <Link to="/apply">Start Your Application</Link>
            </Button>
            <Button variant="outline" className="border-genezio-lavender text-genezio-dark hover:bg-genezio-light px-8 py-3">
              Contact Financial Aid Office
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialAid;
