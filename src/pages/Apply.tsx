
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Apply = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/4143796/pexels-photo-4143796.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Student filling out application on laptop" 
          className="w-full h-[60vh] object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-merriweather font-bold mb-4">
            Apply to Genezio University
          </h1>
          <p className="max-w-2xl text-lg mb-8">
            Ready to shape your future? Applying to Genezio University is easy. Whether you're a first-year student, transfer applicant, or returning learner, our application portal will guide you step-by-step.
          </p>
        </div>
      </section>

      {/* Application Process */}
      <section className="container-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-10">Application Process</h2>
          <div className="bg-genezio-lavender bg-opacity-10 p-8 rounded-lg mb-12">
            <h3 className="text-xl font-bold mb-6">Required Documents:</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-3 text-genezio-accent">•</div>
                <span>High school or college transcripts</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 text-genezio-accent">•</div>
                <span>Statement of Purpose</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 text-genezio-accent">•</div>
                <span>Recommendation letters (optional)</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 text-genezio-accent">•</div>
                <span>Proof of English proficiency (for international students)</span>
              </li>
            </ul>
            <p className="mt-6">
              Application deadlines vary by term. Contact our admissions team with any questions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Undergraduate Applicants</h3>
                <p className="mb-6">
                  First-year and transfer students can apply through our online portal. The application takes approximately 30-45 minutes to complete.
                </p>
                <Button className="w-full btn-primary">Start Undergraduate Application</Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Graduate Applicants</h3>
                <p className="mb-6">
                  Graduate program applications are program-specific. Choose your intended program from the dropdown menu in our application portal.
                </p>
                <Button className="w-full btn-primary">Start Graduate Application</Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Need Assistance?</h3>
            <p className="mb-6">
              Our admissions team is here to help you through every step of the application process.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="outline" className="border-genezio-lavender text-genezio-dark hover:bg-genezio-light">
                Contact Admissions
              </Button>
              <Button variant="outline" className="border-genezio-lavender text-genezio-dark hover:bg-genezio-light" asChild>
                <a href="/international-guide">International Student Guide</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apply;
