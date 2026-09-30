export const NAV_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Advantages', href: '#advantages' },
  { label: 'Growth Plans', href: '#plans' },
  { label: 'Blogs', href: '#process' },
  { label: 'Contact Us', href: '#contact' },
];

export const HERO_DATA = {
  badge: 'Healthy Meals Happier Lives',
  headline: 'Fresh. Nutritious. Convenient. Delivered to You.',
  description:
    'At Healthify, we make healthy eating simple and enjoyable with chef-prepared meals, customized plans and a commitment to your wellbeing goals.',
  ctaPrimary: 'Explore Meal Plans',
  ctaSecondary: 'Learn More',
  heroImage:
    'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80',
  floatingBadge1: {
    title: 'Good Food',
    subtitle: 'Brighter You',
  },
  floatingBadge2: {
    title: 'Nutrient Details',
    calories: '420 kcal',
    protein: '32g Protein',
    badge: '100% Organic',
  },
  socialProof: {
    rating: '4.9/5',
    reviewCount: '12k+ reviews',
    avatars: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    ],
  },
};

export const STATS_DATA = [
  { value: '1M+', label: 'Meals Delivered', icon: 'utensils' },
  { value: '30k+', label: 'Happy Customers', icon: 'users' },
  { value: '4.8/5', label: 'Star Rating', icon: 'star' },
  { value: '350+', label: 'Recipes Available', icon: 'book-open' },
];

export const ABOUT_DATA = {
  kicker: 'OUR SERVICES',
  title: 'Your Trusted Healthy Food Partner',
  description:
    'At Healthify, we believe healthy eating should be convenient, affordable, and accessible. Based in Dubai, we prepare fresh, chef-curated meals using high quality ingredients to help individuals and families achieve their health goals without sacrificing taste.',
  features: [
    'Freshly Prepared Daily',
    'Extended Nutrition',
    'Great Taste',
  ],
  buttonText: 'More About Us',
  mainImage:
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
  subImage:
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80',
  badgeText: 'Nourishing Lives Daily',
};

export const MEAL_PLANS_DATA = [
  {
    id: 'plan-1',
    title: 'Healthy Ready-To-Eat Meals',
    description: 'Fresh, balanced meals prepared daily and ready to enjoy anytime.',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80',
    tag: 'Daily Balance',
  },
  {
    id: 'plan-2',
    title: 'Customized Meal Plans',
    description: 'Tailored to your dietary preferences, allergies, and lifestyle goals.',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=500&q=80',
    tag: 'Personalized',
  },
  {
    id: 'plan-3',
    title: 'Weight Management Plans',
    description: 'Calorie-controlled, nutrient-rich meals designed to support fat loss.',
    image:
      'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=500&q=80',
    tag: 'Calorie Counted',
  },
  {
    id: 'plan-4',
    title: 'High Protein Meal Plans',
    description: 'Nutrient-dense meals packed with lean protein to fuel your workouts.',
    image:
      'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=500&q=80',
    tag: 'Fitness & Fuel',
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
      description: 'Locally sourced organic produce and high-grade lean meats.',
      icon: 'award',
    },
    {
      id: 'adv-2',
      title: 'Health Focused',
      description: 'Formulated by certified clinical dietitians and nutritionists.',
      icon: 'heart',
    },
    {
      id: 'adv-3',
      title: 'Convenient Delivery',
      description: 'Delivered fresh to your doorstep every morning before 7 AM.',
      icon: 'truck',
    },
    {
      id: 'adv-4',
      title: 'Flexible Plans',
      description: 'Pause, modify, or swap your meals anytime through our portal.',
      icon: 'calendar',
    },
  ],
};

export const PRICING_DATA = [
  {
    id: 'price-1',
    name: 'Essential Plan',
    subtitle: 'Great for individuals starting their healthy journey.',
    price: 'AED 299',
    period: '/ week',
    popular: false,
    features: [
      '3 Fresh meals per day',
      'Daily doorstep morning delivery',
      'Balanced macro distribution',
      'Weekly rotating seasonal menu',
    ],
    buttonText: 'Get Started',
  },
  {
    id: 'price-2',
    name: 'Balanced Plan',
    subtitle: 'Our signature program for sustained vitality and optimal health.',
    price: 'AED 499',
    period: '/ week',
    popular: true,
    badge: 'Most Popular',
    features: [
      '4 Meals + 1 Healthy Snack daily',
      'Full custom macro & calorie tuning',
      'Priority early-bird delivery',
      'Monthly 1-on-1 Nutritionist consult',
      'Free weekend cold-pressed juice',
    ],
    buttonText: 'Get Started',
  },
  {
    id: 'price-3',
    name: 'Performance Plan',
    subtitle: 'High protein nutrition built for athletes and fitness enthusiasts.',
    price: 'AED 699',
    period: '/ week',
    popular: false,
    features: [
      '5 Meals + 2 Recovery snacks daily',
      'High protein & complex carb targets',
      'Flexible delivery time windows',
      'Direct dietitian & trainer chat',
      '24/7 VIP priority support',
    ],
    buttonText: 'Get Started',
  },
];

export const PRICING_SIDE_CARD = {
  title: 'Invest In a Healthier You',
  subtitle: 'Real nutrition fuels real life.',
  image:
    'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
};

export const PROCESS_DATA = {
  kicker: 'OUR STEP PROCESS',
  title: 'Healthy Eating in 3 Simple Steps',
  steps: [
    {
      step: '1',
      title: 'Choose Your Plan',
      description: 'Select the meal plan and dietary preferences that match your goals.',
      icon: 'clipboard-list',
    },
    {
      step: '2',
      title: 'We Prepare Fresh Meals',
      description: 'Our expert chefs cook delicious, balanced meals using pure ingredients.',
      icon: 'utensils',
    },
    {
      step: '3',
      title: 'Enjoy Convenient Delivery',
      description: 'Receive chilled eco-friendly deliveries and enjoy guilt-free eating.',
      icon: 'package-check',
    },
  ],
};

export const TESTIMONIALS_DATA = {
  kicker: 'CUSTOMER STORIES',
  title: 'What Our Customers Say',
  reviews: [
    {
      id: 'rev-1',
      name: 'Sarah M.',
      location: 'Dubai, UAE',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      review:
        '"Healthify has completely changed my eating habits. The meals are delicious, fresh, and so convenient! I have noticed a huge boost in my daily energy."',
    },
    {
      id: 'rev-2',
      name: 'Ahmed K.',
      location: 'Dubai, UAE',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      review:
        '"Finally a healthy meal service that tastes amazing! It is so fresh and fits my busy work schedule perfectly. Truly the best meal subscription in UAE."',
    },
    {
      id: 'rev-3',
      name: 'Fatima R.',
      location: 'Dubai, UAE',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      review:
        '"Great quality, variety, and customer support. I feel healthier and more energized every day! The portion sizes are just right and delivery is always on time."',
    },
  ],
};

export const FAQS_DATA = {
  kicker: 'FREQUENTLY ASKED QUESTIONS',
  title: "Have Questions? We've Got Answers.",
  description:
    'Find quick answers to common questions about our meal plans, delivery, and customization.',
  buttonText: 'View All FAQs',
  items: [
    {
      id: 'faq-1',
      question: 'What are your meal plans?',
      answer:
        'We offer four primary categories: Ready-To-Eat Balanced Meals, Customized Dietary Plans (Keto, Low-Carb, Vegan), Weight Management Plans, and High Protein Athletic Plans. Each plan is designed by certified dietitians and cooked daily by professional chefs.',
    },
    {
      id: 'faq-2',
      question: 'How does delivery work?',
      answer:
        'Meals are delivered fresh daily between 5:00 AM and 7:00 AM across Dubai and the UAE. They arrive in temperature-controlled, insulated thermal bags with cold gel packs to preserve peak freshness even if you are not awake.',
    },
    {
      id: 'faq-3',
      question: 'Can I customize my meals?',
      answer:
        'Yes! You can exclude specific allergens, choose your preferred protein choices, adjust carbohydrate targets, and swap dishes up to 24 hours prior to scheduled delivery via your account dashboard.',
    },
    {
      id: 'faq-4',
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major debit and credit cards (Visa, MasterCard, American Express), Apple Pay, and interest-free installment options like Tabby and Tamara.',
    },
    {
      id: 'faq-5',
      question: 'Do you have a mobile app?',
      answer:
        'Yes, the Healthify mobile app is available on both iOS App Store and Google Play Store, allowing you to manage meals, track calories, log water intake, and chat with your nutritionist on the go.',
    },
  ],
};

export const CTA_DATA = {
  headline: 'Transform Your Health, One Meal At A Time',
  subheadline:
    'Fresh, Nutritious, Convenient. Join Thousands of Happy Customers Today.',
  buttonText: 'Get Started Today',
};

export const FOOTER_DATA = {
  about:
    'At Healthify, we make healthy eating effortless with gourmet chef-crafted meal deliveries customized to your lifestyle and fitness ambitions.',
  quickLinks: [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Growth Plans', href: '#plans' },
    { label: 'Blogs', href: '#process' },
    { label: 'Contact Us', href: '#contact' },
  ],
  services: [
    { label: 'Weight Loss Meal Plan', href: '#services' },
    { label: 'Muscle Gain Plan', href: '#services' },
    { label: 'Keto Plan', href: '#services' },
    { label: 'Detox & Cleanse', href: '#services' },
    { label: 'Healthy Snacks and Beverages', href: '#services' },
    { label: 'Delivery and Pickup Services', href: '#services' },
  ],
  contact: {
    address: 'Downtown Dubai, Boulevard Plaza Tower 1, UAE',
    phone: '+971 4 123 4567',
    email: 'info@healthify.ae',
    workingHours: 'Mon - Sun: 7:00 AM - 10:00 PM',
  },
  socials: [
    { name: 'facebook', label: 'Facebook', href: '#' },
    { name: 'twitter', label: 'X (Twitter)', href: '#' },
    { name: 'instagram', label: 'Instagram', href: '#' },
    { name: 'linkedin', label: 'LinkedIn', href: '#' },
  ],
  copyright: 'Copyright © 2026 Healthify. All Rights Reserved.',
  legal: ['Privacy Policy', 'Terms of Service', 'Cookie Preferences'],
};
