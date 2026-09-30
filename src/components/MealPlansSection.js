import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';
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
        {/* Section Header */}
        <View style={styles.headerBox}>
          <View style={styles.kickerBadge}>
            <Text style={styles.kickerText}>OUR SERVICES</Text>
          </View>
          <Text style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>
            Healthy Meal Plans for Every Lifestyle
          </Text>
          <Text style={styles.subtitleText}>
            Fresh chef-curated meals crafted with high-grade organic ingredients to match your personal wellness and dietary aspirations.
          </Text>
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
                  <View style={styles.tagBadge}>
                    <Text style={styles.tagText}>{plan.tag}</Text>
                  </View>
                </View>

                {/* Content */}
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{plan.title}</Text>
                  <Text style={styles.cardDescription}>{plan.description}</Text>

                  {/* Circular Action Arrow */}
                  <View
                    style={[
                      styles.arrowButton,
                      isSelected && styles.arrowButtonSelected,
                    ]}
                  >
                    <Feather
                      name="arrow-right"
                      size={16}
                      color={isSelected ? COLORS.textWhite : COLORS.primary}
                    />
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
    backgroundColor: COLORS.bgLight,
    paddingVertical: 80,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderLight,
  },
  container: {
    maxWidth: 1240,
    marginHorizontal: 'auto',
    width: '100%',
    paddingHorizontal: 24,
  },
  headerBox: {
    alignItems: 'center',
    marginBottom: 50,
    textAlign: 'center',
  },
  kickerBadge: {
    backgroundColor: COLORS.accentLight,
    paddingVertical: 5,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginBottom: 14,
  },
  kickerText: {
    fontSize: 12,
    fontWeight: '800',
    color: COLORS.accent,
    letterSpacing: 1,
  },
  sectionTitle: {
    fontSize: 36,
    fontWeight: '900',
    color: COLORS.textDark,
    textAlign: 'center',
    marginBottom: 14,
    letterSpacing: -0.5,
  },
  sectionTitleMobile: {
    fontSize: 26,
  },
  subtitleText: {
    fontSize: 15,
    color: COLORS.textSecondary,
    textAlign: 'center',
    maxWidth: 620,
    lineHeight: 24,
  },
  plansGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 24,
  },
  plansGridTablet: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 24,
  },
  plansGridMobile: {
    flexDirection: 'column',
    gap: 20,
    alignItems: 'center',
  },
  planCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E8EFEA',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
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
    transform: [{ translateY: -4 }],
    borderColor: COLORS.accent,
    shadowOpacity: 0.12,
  },
  planCardSelected: {
    borderColor: COLORS.primary,
    borderWidth: 2,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 180,
    overflow: 'hidden',
  },
  planImage: {
    width: '100%',
    height: '100%',
  },
  tagBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  tagText: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.primary,
  },
  cardContent: {
    padding: 20,
    alignItems: 'flex-start',
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: COLORS.textDark,
    marginBottom: 8,
    lineHeight: 22,
  },
  cardDescription: {
    fontSize: 13,
    lineHeight: 20,
    color: COLORS.textSecondary,
    marginBottom: 20,
  },
  arrowButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.bgLight,
    borderWidth: 1,
    borderColor: COLORS.borderLight,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  arrowButtonSelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
});
