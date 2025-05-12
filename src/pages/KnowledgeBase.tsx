
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';

const KnowledgeBase = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-genezio-lavender py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-merriweather font-bold mb-4 text-white">
            Genezio University Knowledge Base
          </h1>
          <p className="max-w-2xl mx-auto text-lg mb-8 text-white">
            Explore quick links to essential resources and information.
          </p>
          <div className="max-w-2xl mx-auto relative">
            <Input
              type="text"
              placeholder="Search for answers..."
              className="py-6 pl-10 pr-4 text-lg rounded-lg border-2 border-white shadow-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>
      </section>

      {/* KB Categories */}
      <section className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="shadow-md hover:shadow-genezio transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="text-4xl mb-4">📝</div>
              <CardTitle>Admissions</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-4">Deadlines, Requirements, International Help</p>
              <Button variant="outline" className="border-genezio-lavender text-genezio-dark hover:bg-genezio-light" asChild>
                <Link to="/admissions">Explore</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-genezio transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="text-4xl mb-4">🎓</div>
              <CardTitle>Academics</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-4">Course Overviews, Calendars, Requirements</p>
              <Button variant="outline" className="border-genezio-lavender text-genezio-dark hover:bg-genezio-light" asChild>
                <Link to="/academics">Explore</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-genezio transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <CardTitle>Financial Aid</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-4">Scholarships, Application Process, Deadlines</p>
              <Button variant="outline" className="border-genezio-lavender text-genezio-dark hover:bg-genezio-light" asChild>
                <Link to="/financial-aid">Explore</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-genezio transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="text-4xl mb-4">💬</div>
              <CardTitle>GenezioBot</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-4">AI Chat Support Guide, Common Questions</p>
              <Button 
                variant="outline" 
                className="border-genezio-lavender text-genezio-dark hover:bg-genezio-light"
                onClick={() => {
                  const chatbotElement = document.querySelector('[aria-label="Open chatbot"]');
                  if (chatbotElement && chatbotElement instanceof HTMLElement) {
                    chatbotElement.click();
                  }
                }}
              >
                Ask GenezioBot
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="bg-genezio-light py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-10">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="admissions" className="w-full">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="admissions">Admissions</TabsTrigger>
                <TabsTrigger value="academics">Academics</TabsTrigger>
                <TabsTrigger value="financial">Financial</TabsTrigger>
                <TabsTrigger value="campus">Campus Life</TabsTrigger>
              </TabsList>
              
              <TabsContent value="admissions" className="animate-fade-in">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-2">What are the application deadlines?</h3>
                    <p>For Fall 2025 admission, all undergraduate applications must be submitted by August 15, 2025. Early decision applications are due by January 15, 2025. Graduate program deadlines vary by department.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-2">Are standardized tests required?</h3>
                    <p>Genezio University has adopted a test-optional policy for undergraduate admissions. Graduate programs may still require GRE scores, but many departments offer waivers based on academic or professional experience.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-2">How do I check my application status?</h3>
                    <p>You can track your application status through our applicant portal. After submitting your application, you'll receive credentials to log in and check for updates, missing documents, and admission decisions.</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="academics" className="animate-fade-in">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-2">What academic support services are available?</h3>
                    <p>Genezio offers comprehensive academic support including tutoring, writing assistance, academic coaching, and specialized support for students with learning differences. All services are available both in-person and online.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-2">Can I create a custom degree program?</h3>
                    <p>Yes, through our Interdisciplinary Studies program, students can design a customized major combining courses from multiple departments. This option requires faculty sponsorship and approval from the Curriculum Committee.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-2">What is the typical class size?</h3>
                    <p>Our student-to-faculty ratio is 15:1. Most undergraduate classes range from 20-35 students, while graduate seminars are smaller, typically 8-15 students. Some introductory courses may be larger but include smaller recitation sections.</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="financial" className="animate-fade-in">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-2">What financial aid options are available?</h3>
                    <p>Genezio offers institutional scholarships, grants, work-study opportunities, and loans. We also accept federal and state financial aid. Over 85% of our students receive some form of financial assistance.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-2">When will I receive my financial aid package?</h3>
                    <p>Financial aid packages are typically sent within 2-3 weeks after admission for students who have completed their FAFSA or International Student Financial Aid Application by the priority deadline.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-2">Are there payment plans available?</h3>
                    <p>Yes, Genezio offers semester payment plans that allow families to spread tuition payments over 4-5 installments each term. There is a small enrollment fee, but no interest is charged.</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="campus" className="animate-fade-in">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-2">Is on-campus housing guaranteed?</h3>
                    <p>Housing is guaranteed for all first-year students. Returning students select housing through a lottery system, with priority given based on academic year and special circumstances.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-2">What dining options are available for students with dietary restrictions?</h3>
                    <p>All dining halls offer vegetarian, vegan, gluten-free, and allergen-free options. Our nutritional team works with students individually to accommodate specific dietary needs and restrictions.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-2">How do I get involved in campus activities?</h3>
                    <p>The Student Engagement Office hosts an activities fair at the beginning of each semester where you can learn about and join clubs and organizations. You can also browse and sign up for activities through our online student portal.</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* AI Support Section */}
      <section className="container-section">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3 flex justify-center">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/8943/8943377.png" 
              alt="AI support icon" 
              className="w-48 h-48"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">24/7 Support with GenezioBot</h2>
            <p className="text-lg mb-4">
              Can't find what you're looking for? Our AI assistant is always ready to help with immediate answers to your questions about admissions, academics, campus resources, and more.
            </p>
            <p className="mb-6">
              Simply click the chat icon in the lower-right corner of any page to start a conversation with GenezioBot.
            </p>
            <Button 
              className="btn-primary"
              onClick={() => {
                const chatbotElement = document.querySelector('[aria-label="Open chatbot"]');
                if (chatbotElement && chatbotElement instanceof HTMLElement) {
                  chatbotElement.click();
                }
              }}
            >
              See What GenezioBot Can Do
            </Button>
          </div>
        </div>
      </section>

      {/* Help Center Contact */}
      <section className="bg-genezio-light py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Still Need Help?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Our support team is available to assist with more complex inquiries. Reach out to us during business hours for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="btn-primary">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Call Help Center
            </Button>
            <Button variant="outline" className="border-genezio-lavender text-genezio-dark hover:bg-genezio-white">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Email Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KnowledgeBase;
