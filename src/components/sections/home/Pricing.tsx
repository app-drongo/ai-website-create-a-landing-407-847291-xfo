'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function Pricing() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handleStarterAction = () => {
    router.push('/');
  };
  const handleProfessionalAction = () => {
    router.push('/');
  };
  const handleEnterpriseAction = () => {
    router.push('/');
  };
  const handleDemoAction = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const plans = [
    {
      name: 'Essential',
      description: 'Perfect for small businesses starting their SAP journey',
      price: '$2,500',
      period: '/month',
      badge: null,
      features: [
        'Basic SAP ERP integration',
        'Standard data migration',
        'Email support',
        'Monthly system health checks',
        'Basic reporting dashboard',
        'Up to 50 users',
      ],
      cta: 'Start Integration',
      popular: false,
      action: handleStarterAction,
    },
    {
      name: 'Professional',
      description: 'Complete SAP integration for growing enterprises',
      price: '$7,500',
      period: '/month',
      badge: 'Most Popular',
      features: [
        'Full SAP S/4HANA integration',
        'Advanced data transformation',
        '24/7 priority support',
        'Real-time system monitoring',
        'Custom workflow automation',
        'Advanced analytics & BI',
        'Multi-system connectivity',
        'Dedicated integration specialist',
      ],
      cta: 'Deploy Now',
      popular: true,
      action: handleProfessionalAction,
    },
    {
      name: 'Enterprise',
      description: 'Mission-critical SAP solutions for large organizations',
      price: 'Custom',
      period: '',
      badge: 'White Glove',
      features: [
        'Complete SAP landscape integration',
        'Enterprise-grade security',
        '24/7 dedicated support team',
        'Custom API development',
        'Advanced compliance tools',
        'SLA with 99.9% uptime',
        'On-site implementation team',
        'Executive success manager',
      ],
      cta: 'Discuss Requirements',
      popular: false,
      action: handleEnterpriseAction,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20">
            SAP Integration Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Transparent SAP
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Integration Pricing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Choose the right SAP integration package for your business. No hidden costs, complete
            transparency. Scale as your enterprise grows.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm border border-primary/20">
              Monthly
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Annual Contract
              <Badge variant="secondary" className="ml-2 text-xs bg-primary/10 text-primary">
                Save 15%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg border',
                plan.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105 bg-card'
                  : 'border-muted hover:border-primary/20 bg-card'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge
                    variant="outline"
                    className="mb-4 mx-auto w-fit border-primary/20 text-primary"
                  >
                    {plan.badge}
                  </Badge>
                )}

                <CardTitle className="text-2xl mb-2 text-foreground">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6 text-muted-foreground">
                  {plan.description}
                </CardDescription>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground mb-1">{plan.period}</span>}
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={plan.action}
                  className={cn(
                    'w-full text-base py-6',
                    plan.popular
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                      : 'border-primary/20 hover:bg-primary/5'
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === 'Professional' && (
                  <p className="text-center text-sm text-muted-foreground">
                    30-day implementation guarantee • Dedicated project manager
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Need a custom SAP integration solution?
          </h3>
          <p className="text-muted-foreground mb-6">
            Every enterprise has unique SAP requirements. Our integration specialists will design a
            tailored solution that fits your specific business processes and technical landscape.
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={handleDemoAction}
            className="border-primary/20 hover:bg-primary/5 text-foreground"
          >
            Schedule SAP Assessment
          </Button>
        </div>
      </div>
    </section>
  );
}
