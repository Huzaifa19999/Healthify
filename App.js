import React from 'react';
import { StyleSheet, View, ScrollView, Platform } from 'react-native';
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
    <View style={styles.appContainer}>
      <StatusBar style="dark" />

      {/* Global Web Styles Injection for Smooth Scrolling */}
      {Platform.OS === 'web' && (
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html {
                scroll-behavior: smooth;
              }
              body {
                margin: 0;
                padding: 0;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                background-color: #FFFFFF;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                overflow-x: hidden;
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
        style={styles.mainScrollView}
        contentContainerStyle={styles.scrollContent}
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

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: '100%',
    minHeight: '100vh',
    position: 'relative',
  },
  mainScrollView: {
    flex: 1,
    width: '100%',
  },
  scrollContent: {
    flexGrow: 1,
  },
});
