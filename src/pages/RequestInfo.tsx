import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from "@/hooks/use-toast";

const RequestInfo = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    toast({
      title: "Information Request Submitted",
      description: "Thank you for your interest in Genezio University. We'll be in touch soon!",
    });
  };
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Students discussing information" 
          className="w-full h-[40vh] object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-merriweather font-bold mb-4">
            Request More Information
          </h1>
          <p className="max-w-2xl text-lg">
            Curious about Genezio? Whether you're exploring programs, campus life, or financial aid, we're here to answer your questions.
          </p>
        </div>
      </section>

      {/* Request Form */}
      <section className="container-section">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-center mb-10">
            Complete the form to receive a personalized packet with brochures, program details, and a direct contact from our admissions office.
          </p>
          
          {formSubmitted ? (
            <Card className="shadow-md">
              <CardContent className="pt-6 text-center">
                <div className="text-5xl mb-4">🎉</div>
                <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                <p className="mb-6">
                  Your information request has been submitted successfully. Our admissions team will send you a personalized information packet within 3-5 business days.
                </p>
                <Button className="btn-primary" asChild>
                  <a href="/">Return to Homepage</a>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="shadow-md">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="level">I am interested in:</Label>
                    <Select defaultValue="undergraduate">
                      <SelectTrigger id="level">
                        <SelectValue placeholder="Select program level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="undergraduate">Undergraduate Programs</SelectItem>
                        <SelectItem value="graduate">Graduate Programs</SelectItem>
                        <SelectItem value="certificate">Certificate Programs</SelectItem>
                        <SelectItem value="continuing">Continuing Education</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="program">Area of Interest</Label>
                    <Select defaultValue="undecided">
                      <SelectTrigger id="program">
                        <SelectValue placeholder="Select area of interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="undecided">Undecided</SelectItem>
                        <SelectItem value="ai-ethics">AI & Ethics</SelectItem>
                        <SelectItem value="data-science">Data Science</SelectItem>
                        <SelectItem value="communication">Communication & Society</SelectItem>
                        <SelectItem value="education">Educational Technology</SelectItem>
                        <SelectItem value="learning-design">Learning Design</SelectItem>
                        <SelectItem value="ai-systems">AI Systems</SelectItem>
                        <SelectItem value="coaching">Coaching</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="questions">Questions or Comments</Label>
                    <Textarea id="questions" rows={4} />
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox id="international" />
                    <Label htmlFor="international" className="font-normal">
                      I am an international student
                    </Label>
                  </div>
                  
                  <div className="pt-4">
                    <Button type="submit" className="btn-primary w-full">Submit Request</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
      
      {/* Other Ways to Connect */}
      <section className="bg-genezio-light py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Other Ways to Connect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl mb-3">📞</div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p>(555) 123-4567</p>
              <p className="text-sm mt-2">Mon-Fri, 9am-5pm EST</p>
            </div>
            
            <div>
              <div className="text-3xl mb-3">✉️</div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p>admissions@genezio.edu</p>
              <p className="text-sm mt-2">Response within 24 hours</p>
            </div>
            
            <div>
              <div className="text-3xl mb-3">🏫</div>
              <h3 className="text-xl font-semibold mb-2">Visit Campus</h3>
              <p>Schedule a personalized tour</p>
              <Button variant="outline" className="mt-2 border-genezio-lavender text-genezio-dark hover:bg-genezio-light" asChild>
                <a href="/campus-tour">Campus Tour Info</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RequestInfo;
