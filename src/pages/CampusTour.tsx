
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Calendar as CalendarIcon } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const CampusTour = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    toast({
      title: "Tour Scheduled",
      description: "Your campus tour has been scheduled! Check your email for confirmation details.",
    });
  };
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="University campus buildings" 
          className="w-full h-[60vh] object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-merriweather font-bold mb-4">
            Schedule a Campus Tour
          </h1>
          <p className="max-w-2xl text-lg mb-8">
            See Genezio for yourself. A campus tour is the best way to experience our vibrant community, world-class facilities, and beautiful grounds.
          </p>
        </div>
      </section>

      {/* Tour Information */}
      <section className="container-section">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="section-title text-center mb-8">What's Included in Your Tour</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <img 
                src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Student tour guide with visitors" 
                className="rounded-lg shadow-md mb-6"
              />
              <h3 className="text-xl font-bold mb-3">Tour Experience</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 text-genezio-accent">•</div>
                  <span>A guided walking tour by a student ambassador</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-genezio-accent">•</div>
                  <span>Visits to classrooms, labs, and dormitories</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-genezio-accent">•</div>
                  <span>Information session with Admissions</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-genezio-accent">•</div>
                  <span>Q&A with current students and faculty</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="University library" 
                className="rounded-lg shadow-md mb-6"
              />
              <h3 className="text-xl font-bold mb-3">Tour Logistics</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 text-genezio-accent">•</div>
                  <span>Tours run Monday through Friday at 10 a.m. and 2 p.m.</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-genezio-accent">•</div>
                  <span>Tours last approximately 90 minutes</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-genezio-accent">•</div>
                  <span>Comfortable walking shoes recommended</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-genezio-accent">•</div>
                  <span>Registration required (see form below)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Form */}
      <section className="bg-genezio-light py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-10">Schedule Your Tour</h2>
          {formSubmitted ? (
            <Card className="shadow-md max-w-2xl mx-auto">
              <CardContent className="pt-6 text-center">
                <div className="text-5xl mb-4">🎉</div>
                <h2 className="text-2xl font-bold mb-4">Your Tour is Scheduled!</h2>
                <p className="mb-6">
                  Thank you for scheduling a campus tour with Genezio University. You will receive a confirmation email with all the details shortly.
                </p>
                <p className="mb-6">
                  Please arrive 15 minutes before your scheduled tour time at the Visitor Center in the main Administration Building.
                </p>
                <Button className="btn-primary" asChild>
                  <a href="/">Return to Homepage</a>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="shadow-md max-w-2xl mx-auto">
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
                    <Input id="phone" type="tel" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Preferred Tour Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Select a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          disabled={(date) => {
                            const day = date.getDay();
                            // Disable weekends (0 is Sunday, 6 is Saturday)
                            return day === 0 || day === 6;
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Tour Time</Label>
                    <Select>
                      <SelectTrigger id="time">
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10am">10:00 AM</SelectItem>
                        <SelectItem value="2pm">2:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="visitors">Number of Visitors</Label>
                    <Select defaultValue="1">
                      <SelectTrigger id="visitors">
                        <SelectValue placeholder="Select number of visitors" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="5">5+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="interests">Areas of Interest (Optional)</Label>
                    <Select>
                      <SelectTrigger id="interests">
                        <SelectValue placeholder="Select program or facility" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ai-ethics">AI & Ethics Program</SelectItem>
                        <SelectItem value="data-science">Data Science Program</SelectItem>
                        <SelectItem value="communication">Communication Program</SelectItem>
                        <SelectItem value="educational-tech">Educational Technology</SelectItem>
                        <SelectItem value="housing">Student Housing</SelectItem>
                        <SelectItem value="athletics">Athletic Facilities</SelectItem>
                        <SelectItem value="library">Library & Study Spaces</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="pt-4">
                    <Button type="submit" className="btn-primary w-full">Schedule My Tour</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
      
      {/* Virtual Tour */}
      <section className="container-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title mb-6">Can't Visit In Person?</h2>
          <p className="text-lg mb-8">
            Explore our campus virtually through our interactive 360° tour or schedule a personalized virtual information session with an admissions counselor.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="btn-primary">Take a Virtual Tour</Button>
            <Button variant="outline" className="border-genezio-lavender text-genezio-dark hover:bg-genezio-light">
              Schedule Virtual Session
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampusTour;
