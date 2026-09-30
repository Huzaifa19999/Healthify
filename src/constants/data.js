export const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Advantages', href: '#advantages' },
  { label: 'Growth Plans', href: '#plans' },
  { label: 'Blogs', href: '#process' },
  { label: 'Contact Us', href: '#contact' },
];

export const HERO_DATA = {
  headlinePart1: 'Healthy Meals',
  headlinePart2: 'Happier Lives',
  scriptText: 'Good Food\nBrighter You',
  subheading: 'Fresh. Nutritious. Convenient. Delivered to You.',
  description:
    'At Healthify, we make healthy eating simple and enjoyable with chef-prepared meals, customized plans and a commitment to your wellness goals.',
  ctaPrimary: 'Explore Meal Plans',
  ctaSecondary: 'Learn More',
  heroImage:
    'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80',
  floatingBadge: {
    title: 'Nutritious Meals',
    subtitle: 'A Healthier Tomorrow',
  },
  features: [
    { label: 'Fresh Ingredients', icon: 'leaf-outline' },
    { label: 'Nutritionist Approved', icon: 'shield-checkmark-outline' },
    { label: 'Delivered to Your Door', icon: 'car-outline' },
  ],
};

export const STATS_DATA = [
  { value: '1M+', label: 'Meals Delivered', icon: 'leaf' },
  { value: '30K+', label: 'Happy Customers', icon: 'sprout' },
  { value: '4.8/5', label: 'Customer Satisfaction', icon: 'star' },
  { value: '550+', label: 'Corporate Clients', icon: 'users' },
];

export const ABOUT_DATA = {
  kicker: 'ABOUT HEALTHIFY',
  title: 'Your Trusted Healthy\nFood Partner',
  description:
    'At Healthify, we believe healthy eating should be convenient, affordable, and enjoyable. Based in Dubai, we prepare fresh, balanced meals using high-quality ingredients to help individuals and families achieve their health goals without sacrificing taste.',
  features: [
    { label: 'Freshly Prepared Daily', icon: 'leaf' },
    { label: 'Balanced Nutrition', icon: 'scale' },
    { label: 'Great Taste', icon: 'heart' },
  ],
  buttonText: 'More About Us',
  mainImage:
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
  subImage:
    'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80',
  badgeText: 'Nourishing\nLives Daily',
};

export const MEAL_PLANS_DATA = [
  {
    id: 'plan-1',
    title: 'Healthy Ready-To-Eat Meals',
    description: 'Fresh, balanced meals prepared daily and ready to enjoy.',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'plan-2',
    title: 'Customized Meal Plans',
    description: 'Personalized nutrition plans designed for your goals.',
    image:
      'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'plan-3',
    title: 'Weight Management Plans',
    description: 'Delicious meals to support your weight loss or maintenance journey.',
    image:
      'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'plan-4',
    title: 'High-Protein Meal Plans',
    description: 'Nutrient-rich meals for active lifestyles and fitness goals.',
    image:
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
  },
];

export const ADVANTAGES_DATA = {
  kicker: 'OUR ADVANTAGES',
  title: 'Why Choose Healthify',
  description:
    'More than just meals — we deliver a healthier, happier you with benefits that fit your lifestyle.',
  buttonText: 'Discover All Advantages',
  items: [
    {
      id: 'adv-1',
      title: 'Premium Quality',
      description: 'High-quality, fresh ingredients',
      icon: 'diamond',
    },
    {
      id: 'adv-2',
      title: 'Health Focused',
      description: 'Nutritionist designed meals',
      icon: 'heart',
    },
    {
      id: 'adv-3',
      title: 'Convenient Delivery',
      description: 'To your home or office',
      icon: 'truck',
    },
    {
      id: 'adv-4',
      title: 'Flexible Plans',
      description: 'Options for every dietary need',
      icon: 'leaf',
    },
  ],
};

export const PRICING_DATA = [
  {
    id: 'price-1',
    name: 'Essential Plan',
    subtitle: 'Great for individuals starting their healthy journey.',
    price: 'AED 299',
    period: '/ month',
    popular: false,
    icon: 'compass',
    features: [
      'Fresh daily meals',
      'Balanced nutrition',
      'Flexible delivery',
    ],
    buttonText: 'Get Started',
  },
  {
    id: 'price-2',
    name: 'Balanced Plan',
    subtitle: 'Our best value plan for a healthier lifestyle.',
    price: 'AED 499',
    period: '/ month',
    popular: true,
    badge: 'MOST POPULAR ★',
    icon: 'award',
    features: [
      'Customized meal options',
      'Wide variety of meals',
      'Nutritionist support',
      'Flexible delivery',
    ],
    buttonText: 'Get Started',
  },
  {
    id: 'price-3',
    name: 'Performance Plan',
    subtitle: 'For fitness enthusiasts and active lifestyles.',
    price: 'AED 699',
    period: '/ month',
    popular: false,
    icon: 'bar-chart',
    features: [
      'High-protein meals',
      'Performance-focused nutrition',
      'Personalized plans',
      'Priority support',
    ],
    buttonText: 'Get Started',
  },
];

export const PRICING_SIDE_CARD = {
  title: 'Invest in a\nHealthier\nYou',
  image:
    'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80',
};

export const PROCESS_DATA = {
  kicker: 'OUR APPROACH',
  title: 'Healthy Eating in 3 Simple Steps',
  linkText: "It's Easy to Get Started",
  steps: [
    {
      step: '1',
      title: 'Choose Your Plan',
      description: 'Select the meal plan that fits your goals.',
      icon: 'utensils',
    },
    {
      step: '2',
      title: 'We Prepare Fresh Meals',
      description: 'Our chefs prepare nutritious meals with care.',
      icon: 'pot',
    },
    {
      step: '3',
      title: 'Enjoy Convenient Delivery',
      description: 'Receive your meals and enjoy a healthier you.',
      icon: 'truck',
    },
  ],
};

export const TESTIMONIALS_DATA = {
  kicker: 'CUSTOMER STORIES',
  title: 'What Our Customers Say',
  linkText: 'View More Reviews',
  reviews: [
    {
      id: 'rev-1',
      name: 'Sara M.',
      location: 'Dubai, UAE',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      review:
        '"Healthify has completely changed my eating habits. The meals are delicious, fresh, and so convenient!"',
    },
    {
      id: 'rev-2',
      name: 'Ahmed R.',
      location: 'Dubai, UAE',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      review:
        '"Finally a healthy meal service that tastes amazing! It fits perfectly into my busy lifestyle."',
    },
    {
      id: 'rev-3',
      name: 'Fatima K.',
      location: 'Dubai, UAE',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      review:
        '"Great quality, variety, and customer service. I feel healthier and more energized every day."',
    },
  ],
};

export const FAQS_DATA = {
  kicker: 'FREQUENTLY ASKED QUESTIONS',
  title: "Have Questions?\nWe've Got Answers.",
  description:
    'Find quick answers to common questions about our meal plans, delivery, and more.',
  buttonText: 'View All FAQs',
  items: [
    {
      id: 'faq-1',
      question: 'What are your meal plans?',
      answer:
        'We offer four primary categories: Ready-To-Eat Balanced Meals, Customized Dietary Plans, Weight Management Plans, and High-Protein Meal Plans.',
    },
    {
      id: 'faq-2',
      question: 'How does delivery work?',
      answer:
        'Meals are delivered fresh daily to your doorstep or office across Dubai in temperature-controlled cooler packaging.',
    },
    {
      id: 'faq-3',
      question: 'Can I customize my meals?',
      answer:
        'Yes, you can easily exclude allergens, choose your preferred protein portions, and swap recipes through your dashboard.',
    },
    {
      id: 'faq-4',
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit/debit cards, Apple Pay, Google Pay, and flexible installment payment options.',
    },
    {
      id: 'faq-5',
      question: 'Do you have a mobile app?',
      answer:
        'Yes! The Healthify app is available on iOS and Android to manage deliveries, track macros, and consult with nutritionists.',
    },
  ],
};

export const CTA_DATA = {
  kicker: 'READY TO START?',
  headline: 'Transform Your Health, One Meal At A Time',
  subheadline:
    'Fresh. Nutritious. Convenient. Join thousands of happy customers today.',
  buttonText: 'Get Started Today',
};

export const FOOTER_DATA = {
  about:
    'At Healthify, we believe healthy eating should be convenient, affordable, and enjoyable.',
  quickLinks: [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Advantages', href: '#advantages' },
    { label: 'Growth Plans', href: '#plans' },
    { label: 'Blogs', href: '#process' },
    { label: 'Contact Us', href: '#contact' },
  ],
  services: [
    { label: 'Healthy ready-to-eat meals', href: '#services' },
    { label: 'Customized meal plans', href: '#services' },
    { label: 'Weight management meals', href: '#services' },
    { label: 'High-protein meal plans', href: '#services' },
    { label: 'Corporate meal solutions', href: '#services' },
    { label: 'Fitness and wellness nutrition', href: '#services' },
    { label: 'Healthy snacks and beverages', href: '#services' },
    { label: 'Delivery and pickup services', href: '#services' },
  ],
  contact: {
    address: 'Karachi, Pakistan',
    phone: '+923 10 673 3754',
    email: 'info@healthify.ae',
  },
  socials: [
    { name: 'facebook', label: 'Facebook', href: '#' },
    { name: 'twitter', label: 'X', href: '#' },
    { name: 'instagram', label: 'Instagram', href: '#' },
    { name: 'youtube', label: 'YouTube', href: '#' },
  ],
  copyright: 'Copyright © 2026 Healthify. All Rights Reserved.',
  legal: ['Privacy Policy', 'Terms of Service'],
};
