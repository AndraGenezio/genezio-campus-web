
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Admissions = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Students reading books" 
          className="w-full h-[60vh] object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-merriweather font-bold mb-4">
            Admissions
          </h1>
          <p className="max-w-2xl text-lg mb-8">
            Join our community of ambitious scholars and future leaders.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container-section">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">Begin Your Journey at Genezio</h2>
          <p className="text-lg">
            The admissions process at Genezio University is designed to be thorough yet accessible. We seek candidates who demonstrate academic excellence, leadership potential, and a passion for learning.
          </p>
        </div>
      </section>
      
      {/* Admissions Requirements */}
      <section className="bg-genezio-light py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Undergraduate Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-genezio-lavender rounded-full p-1 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>High School Diploma or equivalent</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-genezio-lavender rounded-full p-1 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Entrance Exam or SAT/ACT (Optional)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-genezio-lavender rounded-full p-1 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Statement of Purpose</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-genezio-lavender rounded-full p-1 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Two Recommendation Letters</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Graduate Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-genezio-lavender rounded-full p-1 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Bachelor's Degree from accredited institution</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-genezio-lavender rounded-full p-1 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Personal Statement</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-genezio-lavender rounded-full p-1 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Optional GRE</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-genezio-lavender rounded-full p-1 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Resume or Interview (Program-specific)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="container-section">
        <h2 className="section-title text-center mb-10">Important Dates</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card className="shadow-md hover:shadow-genezio transition-shadow duration-300">
            <CardHeader className="text-center pb-2">
              <div className="text-2xl mb-2">📅</div>
              <CardTitle>July 12</CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <p>Entrance Exam</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-genezio transition-shadow duration-300">
            <CardHeader className="text-center pb-2">
              <div className="text-2xl mb-2">📅</div>
              <CardTitle>August 15</CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <p>Final Application Deadline</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-genezio transition-shadow duration-300">
            <CardHeader className="text-center pb-2">
              <div className="text-2xl mb-2">📅</div>
              <CardTitle>August 25</CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <p>Admission Decisions</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Scholarships & Aid */}
      <section className="bg-genezio-light py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-8">Scholarships & Financial Aid</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Available Financial Support</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 text-genezio-accent">•</div>
                  <span><strong>Merit Scholarships:</strong> Based on academic excellence and leadership potential</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-genezio-accent">•</div>
                  <span><strong>Genezio Access Grant:</strong> Need-based financial assistance</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-genezio-accent">•</div>
                  <span><strong>Work-Study Programs:</strong> On-campus employment opportunities</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-genezio-accent">•</div>
                  <span><strong>Department Scholarships:</strong> Program-specific awards</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">How to Apply</h3>
              <p className="mb-4">Complete the Financial Aid section of your application to be considered for all available scholarships and grants.</p>
              <p className="mb-4">Submit the FAFSA (for U.S. students) or the International Student Financial Aid Application.</p>
              <Button className="btn-primary">Financial Aid Resources</Button>
            </div>
          </div>
        </div>
      </section>

      {/* International Students */}
      <section className="container-section">
        <h2 className="section-title text-center mb-8">International Students</h2>
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-lg text-center mb-8">
            Genezio University welcomes students from around the globe. Our international community enriches the educational experience for all.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-center">Language Requirements</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>TOEFL (min. 90) or IELTS (min. 7.0) for non-native English speakers</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-center">Visa Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>Dedicated international student office to assist with visa applications and documentation</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-center">Peer Mentoring</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>Connect with current international students for guidance and support</p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="text-center">
          <Button className="btn-primary">International Student Guide</Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-genezio-lavender bg-opacity-10 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Apply?</h2>
          <p className="mb-8 max-w-2xl mx-auto">Take the first step toward your future at Genezio University. Our admissions team is here to support you through the process.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="btn-primary">Start Application</Button>
            <Button variant="outline" className="border-genezio-lavender text-genezio-dark hover:bg-genezio-light">Contact Admissions</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
