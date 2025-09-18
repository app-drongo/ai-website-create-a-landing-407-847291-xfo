'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import {
  Database,
  Shield,
  Zap,
  Globe,
  BarChart3,
  Settings,
  Cloud,
  Users,
  CheckCircle,
} from 'lucide-react';

export default function Features() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/');
  };
  const handleSecondaryAction = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const features = [
    {
      icon: Database,
      title: 'SAP ERP Integration',
      description:
        'Seamlessly connect your SAP ERP system with third-party applications and cloud services.',
      badge: 'Core',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description:
        'Bank-grade encryption and SAP-certified security protocols protect your business data.',
      badge: 'Security',
    },
    {
      icon: Zap,
      title: 'Real-Time Sync',
      description: 'Instant data synchronization across all connected systems with zero downtime.',
      badge: 'Performance',
    },
    {
      icon: Globe,
      title: 'Multi-System Support',
      description: 'Connect SAP with Salesforce, Microsoft 365, Oracle, and 200+ other platforms.',
      badge: 'Connectivity',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description:
        'Real-time dashboards and reporting for complete visibility into your operations.',
      badge: 'Analytics',
    },
    {
      icon: Settings,
      title: 'Custom Workflows',
      description: 'Build automated business processes that span across your entire tech stack.',
      badge: 'Automation',
    },
    {
      icon: Cloud,
      title: 'Cloud-Native Architecture',
      description: 'Scalable cloud infrastructure that grows with your business needs.',
      badge: 'Infrastructure',
    },
    {
      icon: Users,
      title: 'Expert Implementation',
      description:
        'Dedicated SAP-certified consultants guide you through every step of integration.',
      badge: 'Support',
    },
    {
      icon: CheckCircle,
      title: 'Compliance Ready',
      description: 'Built-in compliance for GDPR, SOX, HIPAA, and industry-specific regulations.',
      badge: 'Compliance',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20">
            SAP Integration Platform
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Enterprise-Grade SAP
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Integration Solutions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Connect your SAP ERP system with any application, automate business processes, and
            unlock the full potential of your enterprise data.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden bg-card border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to transform your SAP integration strategy?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handlePrimaryAction}
              className="px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Schedule SAP Assessment
            </Button>
            <Button
              variant="outline"
              onClick={handleSecondaryAction}
              className="px-8 py-3 border-border hover:bg-accent transition-colors"
            >
              View Integration Demos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
