import './global.css';
import React from 'react';
import { View, ScrollView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Components
import Navbar from './src/components/Navbar';
import HeroSection from './src/components/HeroSection';
import StatsSection from './src/components/StatsSection';
import AboutSection from './src/components/AboutSection';
import MealPlansSection from './src/components/MealPlansSection';
import AdvantagesSection from './src/components/AdvantagesSection';
import PricingSection from './src/components/PricingSection';
import ProcessSection from './src/components/ProcessSection';
import TestimonialsSection from './src/components/TestimonialsSection';
import FaqSection from './src/components/FaqSection';
import CtaBanner from './src/components/CtaBanner';
import Footer from './src/components/Footer';
import FloatingWhatsApp from './src/components/FloatingWhatsApp';

export default function App() {
  return (
    <View className="flex-1 bg-white w-full relative">
      <StatusBar style="dark" />

      {/* Global Web Styles Injection for Google Fonts & Styles */}
      {Platform.OS === 'web' && (
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

              html {
                scroll-behavior: smooth;
              }
              body {
                margin: 0;
                padding: 0;
                font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                background-color: #FFFFFF;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                overflow-x: hidden;
                color: #2B382D;
              }
              * {
                box-sizing: border-box;
              }
              button, a {
                outline: none;
              }
            `,
          }}
        />
      )}

      {/* Sticky Header / Navbar */}
      <Navbar />

      {/* Main Content Scroll View */}
      <ScrollView
        className="flex-1 w-full"
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <MealPlansSection />
        <AdvantagesSection />
        <PricingSection />
        <ProcessSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaBanner />
        <Footer />
      </ScrollView>

      {/* Floating Sticky WhatsApp Button */}
      <FloatingWhatsApp />
    </View>
  );
}
