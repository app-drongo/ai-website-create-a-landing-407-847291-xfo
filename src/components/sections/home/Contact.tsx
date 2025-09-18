'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  Headphones,
  Database,
  Shield,
  Zap,
} from 'lucide-react';

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/');
  };
  const handleSecondaryAction = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('SAP integration consultation request:', formData);
    handlePrimaryAction();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'SAP Integration Consultation',
      description: 'Discuss your ERP requirements',
      contact: 'sap@sapintegrator.com',
      action: 'Schedule Consultation',
    },
    {
      icon: Phone,
      title: 'Technical Support Hotline',
      description: '24/7 SAP system support',
      contact: '+1 (555) SAP-HELP',
      action: 'Call Support',
    },
    {
      icon: MessageSquare,
      title: 'Enterprise Chat',
      description: 'Real-time SAP assistance',
      contact: 'Available for Enterprise clients',
      action: 'Start Enterprise Chat',
    },
  ];

  const offices = [
    {
      city: 'Frankfurt',
      address: 'SAP Allee 1, 69190 Walldorf',
      timezone: 'CET (UTC+1)',
    },
    {
      city: 'Silicon Valley',
      address: '3410 Hillview Ave, Palo Alto',
      timezone: 'PST (UTC-8)',
    },
    {
      city: 'Singapore',
      address: '30 Pasir Panjang Rd, Mapletree Business City',
      timezone: 'SGT (UTC+8)',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20">
            <Database className="size-3 mr-2" />
            SAP Integration Support
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              ERP Infrastructure?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Connect with our SAP certified consultants to discuss your enterprise integration needs.
            We'll design a custom solution that scales with your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border/50 bg-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2 text-foreground">
                <Send className="size-6 text-primary" />
                Request SAP Integration Quote
              </CardTitle>
              <CardDescription>
                Tell us about your current ERP challenges and we'll provide a tailored integration
                strategy within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 text-foreground"
                    >
                      IT Manager Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-foreground"
                      placeholder="Sarah Chen"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-foreground"
                    >
                      Business Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-foreground"
                      placeholder="sarah.chen@enterprise.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-2 text-foreground"
                  >
                    Enterprise Organization *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-foreground"
                    placeholder="Global Manufacturing Corp"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-foreground"
                  >
                    SAP Integration Requirements *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none text-foreground"
                    placeholder="We need to integrate SAP S/4HANA with our existing CRM and supply chain systems. Currently managing 50,000+ transactions daily across 15 global locations..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full text-base py-6 group bg-primary hover:bg-primary/90"
                >
                  Request Integration Consultation
                  <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-foreground">
                <Headphones className="size-5 text-primary" />
                SAP Expert Support Channels
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card
                      key={index}
                      className="border-border/50 hover:border-primary/20 transition-colors cursor-pointer group bg-card"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1 text-foreground">{method.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              {method.description}
                            </p>
                            <p className="font-medium text-primary">{method.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Office Locations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-foreground">
                <MapPin className="size-5 text-primary" />
                Global SAP Centers
              </h3>
              <div className="space-y-3">
                {offices.map((office, index) => (
                  <div key={index} className="p-4 border border-border/50 rounded-lg bg-card">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground">{office.city}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{office.address}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {office.timezone}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <Card className="border-border/50 bg-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4 text-foreground">
                  <Clock className="size-5 text-primary" />
                  SAP Support Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Business Critical Support</span>
                    <span className="text-foreground">24/7 Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Standard Consultations</span>
                    <span className="text-foreground">8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Implementation Planning</span>
                    <span className="text-foreground">Mon - Fri, 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <Shield className="size-4" />
                    Priority support for SAP S/4HANA Enterprise customers
                  </p>
                </div>
                <div className="mt-3 p-3 bg-accent/10 rounded-lg">
                  <p className="text-sm text-accent font-medium flex items-center gap-2">
                    <Zap className="size-4" />
                    Emergency hotline: +1 (555) SAP-911 for system outages
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
