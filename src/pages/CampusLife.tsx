
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CampusLife = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1584467735871-6d631b588a84?fit=crop&w=1200&q=80" 
          alt="Students enjoying outdoor campus activities" 
          className="w-full h-[60vh] object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-merriweather font-bold mb-4">
            Campus Life
          </h1>
          <p className="max-w-2xl text-lg mb-8">
            Experience a vibrant community where learning extends beyond the classroom.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container-section">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">Life at Genezio</h2>
          <p className="text-lg">
            Our campus is a dynamic environment where students grow academically, socially, and personally. Discover the many ways you can engage with our community and make the most of your Genezio experience.
          </p>
        </div>
      </section>
      
      {/* Campus Life Tabs */}
      <section className="bg-genezio-light py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-10">Explore Campus Life</h2>
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="clubs" className="w-full">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="clubs">Clubs & Activities</TabsTrigger>
                <TabsTrigger value="housing">Housing</TabsTrigger>
                <TabsTrigger value="dining">Dining</TabsTrigger>
                <TabsTrigger value="wellness">Wellness</TabsTrigger>
              </TabsList>
              
              <TabsContent value="clubs" className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="shadow-md hover:shadow-genezio transition-shadow duration-300">
                    <CardHeader className="text-center">
                      <div className="text-4xl mb-4">🎭</div>
                      <CardTitle>Drama & Public Speaking</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center mb-4">Develop performance skills and confidence through theater productions and public speaking workshops.</p>
                      <div className="text-center">
                        <Button variant="outline" className="border-genezio-lavender text-genezio-dark hover:bg-genezio-light">Learn More</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-md hover:shadow-genezio transition-shadow duration-300">
                    <CardHeader className="text-center">
                      <div className="text-4xl mb-4">🧘</div>
                      <CardTitle>Mental Wellness Circles</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center mb-4">Join peer-led groups focused on mindfulness, stress reduction, and emotional wellbeing.</p>
                      <div className="text-center">
                        <Button variant="outline" className="border-genezio-lavender text-genezio-dark hover:bg-genezio-light">Learn More</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-md hover:shadow-genezio transition-shadow duration-300">
                    <CardHeader className="text-center">
                      <div className="text-4xl mb-4">🧪</div>
                      <CardTitle>Innovation Lab</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center mb-4">Experiment with emerging technologies and collaborative problem-solving in our student-run innovation space.</p>
                      <div className="text-center">
                        <Button variant="outline" className="border-genezio-lavender text-genezio-dark hover:bg-genezio-light">Learn More</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-md hover:shadow-genezio transition-shadow duration-300">
                    <CardHeader className="text-center">
                      <div className="text-4xl mb-4">⚽</div>
                      <CardTitle>Genezio Athletics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center mb-4">Participate in recreational and competitive sports teams, from soccer and basketball to yoga and rock climbing.</p>
                      <div className="text-center">
                        <Button variant="outline" className="border-genezio-lavender text-genezio-dark hover:bg-genezio-light">Learn More</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="housing" className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <img 
                      src="https://images.pexels.com/photos/1571450/pexels-photo-1571450.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                      alt="Modern student dormitory" 
                      className="rounded-lg shadow-md mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">Modern Residence Halls</h3>
                    <p>Our housing facilities feature modern amenities, study spaces, and community areas designed to foster connection and academic success.</p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Housing Options</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="mr-3 text-genezio-accent">•</div>
                        <span><strong>First-Year Communities:</strong> Specially designed for new students with extra support and programming</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 text-genezio-accent">•</div>
                        <span><strong>Upper-Class Apartments:</strong> More independent living options for returning students</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 text-genezio-accent">•</div>
                        <span><strong>Themed Living:</strong> Communities centered around academic interests or lifestyle preferences</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 text-genezio-accent">•</div>
                        <span><strong>Inclusive Housing:</strong> Gender-inclusive options and accessible accommodations</span>
                      </li>
                    </ul>
                    <div className="pt-4">
                      <Button className="btn-primary">Housing Portal</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="dining" className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Dining Experience</h3>
                    <p className="mb-2">At Genezio, we believe that good food fuels academic excellence. Our dining services offer diverse, nutritious options that cater to all dietary needs and preferences.</p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="mr-3 text-genezio-accent">•</div>
                        <span><strong>International Cuisine:</strong> Dishes from around the world prepared by our talented culinary team</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 text-genezio-accent">•</div>
                        <span><strong>Allergy-Safe Zones:</strong> Dedicated preparation areas for common food allergies</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 text-genezio-accent">•</div>
                        <span><strong>Sustainable Practices:</strong> Local sourcing and waste reduction initiatives</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 text-genezio-accent">•</div>
                        <span><strong>Flexible Meal Plans:</strong> Options designed for various student lifestyles and budgets</span>
                      </li>
                    </ul>
                    <div className="pt-4">
                      <Button className="btn-primary">View Dining Locations</Button>
                    </div>
                  </div>
                  <div>
                    <img 
                      src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                      alt="Modern campus dining hall" 
                      className="rounded-lg shadow-md mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">Campus Dining Halls</h3>
                    <p>Our dining facilities are more than just places to eat—they're gathering spaces where our community comes together.</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="wellness" className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <img 
                      src="https://images.pexels.com/photos/7991484/pexels-photo-7991484.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                      alt="Campus wellness center" 
                      className="rounded-lg shadow-md mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">Wellness Center</h3>
                    <p>Our state-of-the-art wellness center offers comprehensive services focused on physical and mental health.</p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Wellness Services</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="mr-3 text-genezio-accent">•</div>
                        <span><strong>24/7 Counseling:</strong> Professional mental health support available around the clock</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 text-genezio-accent">•</div>
                        <span><strong>Fitness Facilities:</strong> Modern gym equipment, group classes, and personal training</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 text-genezio-accent">•</div>
                        <span><strong>Meditation & Yoga:</strong> Regular sessions promoting mindfulness and stress reduction</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 text-genezio-accent">•</div>
                        <span><strong>Peer Coaching Circles:</strong> Student-led support groups focused on various aspects of wellbeing</span>
                      </li>
                    </ul>
                    <div className="pt-4">
                      <Button className="btn-primary">Wellness Resources</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Campus Events */}
      <section className="container-section">
        <h2 className="section-title text-center mb-10">Upcoming Campus Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-10">
          <Card className="shadow-md hover:shadow-genezio transition-shadow duration-300">
            <img 
              src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Tech symposium" 
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <CardHeader>
              <CardTitle>Innovation Tech Symposium</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2"><strong>Date:</strong> June 15, 2025</p>
              <p className="mb-4">A showcase of student and faculty technology projects, featuring guest speakers from leading tech companies.</p>
              <Button variant="outline" className="border-genezio-lavender text-genezio-dark hover:bg-genezio-light w-full">Event Details</Button>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-genezio transition-shadow duration-300">
            <img 
              src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Cultural festival" 
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <CardHeader>
              <CardTitle>Global Cultural Festival</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2"><strong>Date:</strong> July 8-10, 2025</p>
              <p className="mb-4">Celebrate the diversity of our campus community with performances, food, and interactive activities from around the world.</p>
              <Button variant="outline" className="border-genezio-lavender text-genezio-dark hover:bg-genezio-light w-full">Event Details</Button>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-genezio transition-shadow duration-300">
            <img 
              src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Wellness retreat" 
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <CardHeader>
              <CardTitle>Wellness Weekend Retreat</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2"><strong>Date:</strong> August 20-22, 2025</p>
              <p className="mb-4">A weekend of mindfulness, fitness, and relaxation activities designed to promote student wellbeing before the semester begins.</p>
              <Button variant="outline" className="border-genezio-lavender text-genezio-dark hover:bg-genezio-light w-full">Event Details</Button>
            </CardContent>
          </Card>
        </div>
        <div className="text-center">
          <Button className="btn-primary">View All Events</Button>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="bg-genezio-lavender bg-opacity-10 py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-10">Student Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic mb-4">"The community at Genezio has been transformative for me. Between the clubs, events, and incredible people I've met in my residence hall, I've grown so much beyond academics."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-genezio-lavender rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">MT</div>
                <div>
                  <p className="font-bold">Maya T.</p>
                  <p className="text-sm">Junior, B.Sc. in Data Science</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic mb-4">"As an international student, I was worried about finding my place on campus. The inclusive housing options and global student association made it easy to feel at home while experiencing American university life."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-genezio-lavender rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">RL</div>
                <div>
                  <p className="font-bold">Ravi L.</p>
                  <p className="text-sm">Graduate Student, M.Sc. in AI Systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-section">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Experience Genezio University</h2>
          <p className="mb-8">The best way to understand what makes our campus special is to visit in person. Schedule a tour to see our facilities and meet current students.</p>
          <Button className="btn-primary text-lg">Schedule a Campus Tour</Button>
        </div>
      </section>
    </div>
  );
};

export default CampusLife;
