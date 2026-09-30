import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { COLORS, FONTS } from '../constants/theme';
import { MEAL_PLANS_DATA } from '../constants/data';
import { useResponsive } from '../utils/responsive';

export default function MealPlansSection() {
  const { isDesktop, isTablet, isMobile } = useResponsive();
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectPlan = (planId) => {
    setSelectedPlan(planId);
    if (typeof window !== 'undefined') {
      const element = document.querySelector('#plans');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <View nativeID="services" style={styles.sectionWrapper}>
      <View style={styles.container}>
        {/* Section Header: Left Title + Right Link */}
        <View style={styles.headerRow}>
          <View style={styles.headerLeft}>
            <Text style={styles.kickerText}>OUR SERVICES</Text>
            <Text style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>
              Healthy Meal Plans for Every Lifestyle
            </Text>
          </View>

          <Pressable
            style={styles.viewAllBtn}
            onPress={() => handleSelectPlan('all')}
            accessibilityRole="link"
            accessibilityLabel="View All Services"
          >
            <Text style={styles.viewAllText}>View All Services</Text>
            <Feather name="arrow-right" size={14} color="#384628" />
          </Pressable>
        </View>

        {/* 4 Cards Grid */}
        <View
          style={[
            styles.plansGrid,
            isTablet && styles.plansGridTablet,
            isMobile && styles.plansGridMobile,
          ]}
        >
          {MEAL_PLANS_DATA.map((plan) => {
            const isSelected = selectedPlan === plan.id;

            return (
              <Pressable
                key={plan.id}
                onPress={() => handleSelectPlan(plan.id)}
                style={({ hovered }) => [
                  styles.planCard,
                  isTablet && styles.planCardTablet,
                  isMobile && styles.planCardMobile,
                  hovered && styles.planCardHovered,
                  isSelected && styles.planCardSelected,
                ]}
                accessibilityRole="button"
                accessibilityLabel={plan.title}
              >
                {/* Food Image */}
                <View style={styles.imageContainer}>
                  <Image
                    source={{ uri: plan.image }}
                    style={styles.planImage}
                    resizeMode="cover"
                  />
                </View>

                {/* Content */}
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{plan.title}</Text>
                  <Text style={styles.cardDescription}>{plan.description}</Text>

                  {/* Circular Action Arrow Bottom Right */}
                  <View style={styles.arrowButton}>
                    <Feather name="arrow-right" size={14} color="#384628" />
                  </View>
                </View>
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionWrapper: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 72,
    borderBottomWidth: 1,
    borderBottomColor: '#EAEFE8',
  },
  container: {
    maxWidth: 1240,
    marginHorizontal: 'auto',
    width: '100%',
    paddingHorizontal: 24,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 36,
    flexWrap: 'wrap',
    gap: 16,
  },
  headerLeft: {
    alignItems: 'flex-start',
  },
  kickerText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#485C31',
    letterSpacing: 2,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  sectionTitle: {
    fontFamily: FONTS.serif,
    fontSize: 32,
    fontWeight: '700',
    color: '#1D261C',
    letterSpacing: -0.3,
  },
  sectionTitleMobile: {
    fontSize: 24,
  },
  viewAllBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    cursor: 'pointer',
    paddingBottom: 4,
  },
  viewAllText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#384628',
  },
  plansGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
  plansGridTablet: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
  plansGridMobile: {
    flexDirection: 'column',
    gap: 20,
    alignItems: 'center',
  },
  planCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E2E8DF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 10,
    cursor: 'pointer',
    transitionDuration: '200ms',
  },
  planCardTablet: {
    width: '47%',
    flex: 'none',
  },
  planCardMobile: {
    width: '100%',
    maxWidth: 380,
  },
  planCardHovered: {
    transform: [{ translateY: -3 }],
    borderColor: COLORS.borderHover,
    shadowOpacity: 0.08,
  },
  planCardSelected: {
    borderColor: COLORS.primary,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 150,
    overflow: 'hidden',
  },
  planImage: {
    width: '100%',
    height: '100%',
  },
  cardContent: {
    padding: 16,
    alignItems: 'flex-start',
    position: 'relative',
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1D261C',
    marginBottom: 6,
    lineHeight: 20,
  },
  cardDescription: {
    fontSize: 12,
    lineHeight: 18,
    color: '#5A6B5F',
    marginBottom: 16,
  },
  arrowButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#EEF3EA',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
});
