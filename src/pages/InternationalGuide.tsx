
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const InternationalGuide = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/2451616/pexels-photo-2451616.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="International students on campus" 
          className="w-full h-[60vh] object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-merriweather font-bold mb-4">
            International Student Admissions
          </h1>
          <p className="max-w-2xl text-lg mb-8">
            Genezio University proudly welcomes students from over 50 countries. We are committed to supporting international students from application through graduation, offering tailored services, visa guidance, and community integration.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title mb-6">🎓 Admission Requirements</h2>
          <p className="text-lg mb-4">
            In addition to the standard admission requirements for undergraduate or graduate programs, international students must submit:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <div className="mr-3 text-genezio-accent">•</div>
              <span>TOEFL (minimum 80) or IELTS (minimum 6.5) scores for non-native English speakers</span>
            </li>
            <li className="flex items-start">
              <div className="mr-3 text-genezio-accent">•</div>
              <span>Official transcripts with certified English translations</span>
            </li>
            <li className="flex items-start">
              <div className="mr-3 text-genezio-accent">•</div>
              <span>Financial documentation showing sufficient funds for tuition and living expenses</span>
            </li>
            <li className="flex items-start">
              <div className="mr-3 text-genezio-accent">•</div>
              <span>Copy of passport identification page</span>
            </li>
            <li className="flex items-start">
              <div className="mr-3 text-genezio-accent">•</div>
              <span>International Student Supplement Form</span>
            </li>
          </ul>
          <p className="mb-6">
            All documents must be submitted in English or accompanied by certified English translations.
          </p>
          <p className="mb-6">
            We recommend applying at least 6 months before your intended start date to allow sufficient time for visa processing.
          </p>
          <p className="mb-8">
            If you have questions about the international admission process, please contact our International Student Services office.
          </p>

          <div className="border-t border-gray-200 my-10"></div>

          <h2 className="section-title mb-6">✈️ Visa Support Services</h2>
          <p className="text-lg mb-4">
            Our International Student Services office provides comprehensive support for F-1 student visa applications.
          </p>
          <p className="mb-6">
            Once you're admitted and submit your enrollment deposit, we will issue the required Form I-20 for your visa application.
          </p>
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Visa Support Includes:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 text-genezio-accent">•</div>
                  <span>Assistance preparing required documentation</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-genezio-accent">•</div>
                  <span>Tips and prep for the visa interview</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-genezio-accent">•</div>
                  <span>Pre-arrival orientation sessions</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-genezio-accent">•</div>
                  <span>Ongoing immigration advising and updates</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="border-t border-gray-200 my-10"></div>

          <h2 className="section-title mb-6">🤝 International Student Support</h2>
          <h3 className="text-xl font-bold mb-4">Orientation Program:</h3>
          <p className="mb-6">
            A comprehensive orientation specifically designed for international students to help you adjust to life on campus, American academic culture, and legal expectations.
          </p>
          <h3 className="text-xl font-bold mb-4">Cultural Integration:</h3>
          <p className="mb-4">We offer a vibrant range of activities including:</p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <div className="mr-3 text-genezio-accent">•</div>
              <span>International student clubs and community events</span>
            </li>
            <li className="flex items-start">
              <div className="mr-3 text-genezio-accent">•</div>
              <span>Peer mentoring programs</span>
            </li>
            <li className="flex items-start">
              <div className="mr-3 text-genezio-accent">•</div>
              <span>Local excursions and cultural exchange meetups</span>
            </li>
          </ul>
          <h3 className="text-xl font-bold mb-4">Academic Support:</h3>
          <p className="mb-4">To help you succeed academically, we provide:</p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <div className="mr-3 text-genezio-accent">•</div>
              <span>English language support and tutoring</span>
            </li>
            <li className="flex items-start">
              <div className="mr-3 text-genezio-accent">•</div>
              <span>Dedicated academic advisors experienced in international education</span>
            </li>
            <li className="flex items-start">
              <div className="mr-3 text-genezio-accent">•</div>
              <span>Workshops on time management, research skills, and presentation techniques</span>
            </li>
          </ul>
        </div>

        <div className="max-w-4xl mx-auto text-center mt-10">
          <Button className="btn-primary" asChild>
            <a href="/financial-aid">View Financial Aid Options</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default InternationalGuide;
