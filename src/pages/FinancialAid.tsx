
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FinancialAid = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/5428163/pexels-photo-5428163.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Student working on financial aid application" 
          className="w-full h-[60vh] object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-merriweather font-bold mb-4">
            Financial Information for International Students
          </h1>
          <p className="max-w-2xl text-lg mb-8">
            We understand that studying in another country is a major investment. Genezio University offers transparent cost estimates and financial aid opportunities specifically for international students.
          </p>
        </div>
      </section>

      {/* Cost Estimates */}
      <section className="container-section">
        <h2 className="section-title text-center mb-8">📊 Estimated Annual Costs (2024–2025)</h2>
        <div className="max-w-3xl mx-auto overflow-x-auto mb-12">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-genezio-lavender bg-opacity-20">
                <th className="border border-genezio-lavender border-opacity-40 p-4 text-left">Item</th>
                <th className="border border-genezio-lavender border-opacity-40 p-4 text-left">Estimated Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-genezio-lavender border-opacity-40 p-4">Tuition and Fees</td>
                <td className="border border-genezio-lavender border-opacity-40 p-4">$35,000</td>
              </tr>
              <tr className="bg-genezio-lavender bg-opacity-10">
                <td className="border border-genezio-lavender border-opacity-40 p-4">Room and Board</td>
                <td className="border border-genezio-lavender border-opacity-40 p-4">$12,000</td>
              </tr>
              <tr>
                <td className="border border-genezio-lavender border-opacity-40 p-4">Books and Supplies</td>
                <td className="border border-genezio-lavender border-opacity-40 p-4">$1,200</td>
              </tr>
              <tr className="bg-genezio-lavender bg-opacity-10">
                <td className="border border-genezio-lavender border-opacity-40 p-4">Health Insurance</td>
                <td className="border border-genezio-lavender border-opacity-40 p-4">$2,500</td>
              </tr>
              <tr>
                <td className="border border-genezio-lavender border-opacity-40 p-4">Personal Expenses</td>
                <td className="border border-genezio-lavender border-opacity-40 p-4">$3,000</td>
              </tr>
              <tr className="bg-genezio-primary bg-opacity-20 font-bold">
                <td className="border border-genezio-lavender border-opacity-40 p-4">Total</td>
                <td className="border border-genezio-lavender border-opacity-40 p-4">$53,700</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          These are average estimates and actual costs may vary depending on your housing, program, and lifestyle.
        </p>
      </section>

      {/* Financial Aid Options */}
      <section className="bg-genezio-light py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-10">🎓 Financial Aid Options for International Students</h2>
          <p className="text-center max-w-3xl mx-auto mb-10">
            International students are not eligible for U.S. federal financial aid (FAFSA), but Genezio University offers the following support:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-md hover:shadow-genezio transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Global Diversity Scholarships</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Awards ranging from $5,000 to $15,000 per year, based on country of origin and leadership experience.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-genezio transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Academic Merit Scholarships</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Up to $20,000 per year based on academic performance, standardized test scores, and extracurricular involvement.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-genezio transition-shadow duration-300">
              <CardHeader>
                <CardTitle>On-Campus Employment</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Work up to 20 hours per week in campus offices, dining halls, or libraries. These jobs are paid hourly and help cover living costs.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-genezio transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Graduate Assistantships</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  A limited number of assistantships are available for graduate students. These include partial tuition waivers and a stipend in exchange for teaching or research support.
                </p>
              </CardContent>
            </Card>
          </div>
          <p className="text-center mt-10 max-w-3xl mx-auto text-lg font-semibold">
            Scholarships are automatically considered at the time of application. No separate form is needed.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-section">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Take the Next Step?</h2>
          <p className="mb-8">Apply today to be considered for our international student scholarships and financial aid opportunities.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="btn-primary" asChild>
              <a href="/apply">Apply Now</a>
            </Button>
            <Button variant="outline" className="border-genezio-lavender text-genezio-dark hover:bg-genezio-light" asChild>
              <a href="/request-info">Request More Information</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialAid;
