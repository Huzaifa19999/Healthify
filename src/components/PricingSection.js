import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';
import { PRICING_DATA, PRICING_SIDE_CARD } from '../constants/data';
import { useResponsive } from '../utils/responsive';

export default function PricingSection() {
  const { isDesktop, isTablet, isMobile } = useResponsive();
  const [selectedPlanId, setSelectedPlanId] = useState('price-2'); // Default to popular
  const [billingCycle, setBillingCycle] = useState('weekly'); // weekly / monthly toggle

  return (
    <View nativeID="plans" style={styles.sectionWrapper}>
      <View style={styles.container}>
        {/* Top Header */}
        <View style={styles.topHeaderRow}>
          <View style={styles.headerLeft}>
            <View style={styles.kickerBadge}>
              <Text style={styles.kickerText}>GROWTH PLANS</Text>
            </View>
            <Text style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>
              Find the Perfect Plan for You
            </Text>
          </View>

          <Pressable
            style={styles.viewAllBtn}
            accessibilityRole="link"
            accessibilityLabel="View All Plans"
          >
            <Text style={styles.viewAllText}>View All Plans</Text>
            <Feather name="arrow-right" size={15} color={COLORS.primary} />
          </Pressable>
        </View>

        {/* Pricing Cards Grid + Side Highlight Card */}
        <View
          style={[
            styles.cardsLayout,
            !isDesktop && styles.cardsLayoutTablet,
            isMobile && styles.cardsLayoutMobile,
          ]}
        >
          {PRICING_DATA.map((plan) => {
            const isPopular = plan.popular;
            const isSelected = selectedPlanId === plan.id;

            return (
              <View
                key={plan.id}
                style={[
                  styles.pricingCard,
                  isPopular && styles.popularPricingCard,
                  isSelected && styles.selectedPricingCard,
                  isTablet && styles.pricingCardTablet,
                  isMobile && styles.pricingCardMobile,
                ]}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <View style={styles.popularBadge}>
                    <Ionicons name="sparkles" size={13} color="#FFFFFF" />
                    <Text style={styles.popularBadgeText}>{plan.badge}</Text>
                  </View>
                )}

                <View style={styles.cardHeader}>
                  <Text style={styles.planName}>{plan.name}</Text>
                  <Text style={styles.planSubtitle}>{plan.subtitle}</Text>
                </View>

                {/* Price Display */}
                <View style={styles.priceContainer}>
                  <Text style={styles.priceValue}>{plan.price}</Text>
                  <Text style={styles.pricePeriod}>{plan.period}</Text>
                </View>

                <View style={styles.divider} />

                {/* Features List */}
                <View style={styles.featuresList}>
                  {plan.features.map((feature, fIndex) => (
                    <View key={fIndex} style={styles.featureItem}>
                      <View
                        style={[
                          styles.checkBadge,
                          isPopular && styles.checkBadgePopular,
                        ]}
                      >
                        <Feather
                          name="check"
                          size={12}
                          color={isPopular ? COLORS.primary : COLORS.accent}
                        />
                      </View>
                      <Text style={styles.featureText}>{feature}</Text>
                    </View>
                  ))}
                </View>

                {/* CTA Button */}
                <Pressable
                  style={({ hovered, pressed }) => [
                    styles.planCta,
                    isPopular ? styles.planCtaPopular : styles.planCtaStandard,
                    hovered && styles.planCtaHovered,
                    pressed && styles.planCtaPressed,
                  ]}
                  onPress={() => setSelectedPlanId(plan.id)}
                  accessibilityRole="button"
                  accessibilityLabel={`Select ${plan.name}`}
                >
                  <Text
                    style={[
                      styles.planCtaText,
                      isPopular && styles.planCtaTextPopular,
                    ]}
                  >
                    {isSelected ? 'Selected Plan' : plan.buttonText}
                  </Text>
                </Pressable>
              </View>
            );
          })}

          {/* Right Side Visual Promo Card */}
          <View
            style={[
              styles.sideVisualCard,
              isTablet && styles.sideVisualCardTablet,
              isMobile && styles.sideVisualCardMobile,
            ]}
          >
            <Image
              source={{ uri: PRICING_SIDE_CARD.image }}
              style={styles.sideCardImage}
              resizeMode="cover"
            />
            <View style={styles.sideCardOverlay}>
              <View style={styles.sideCardTag}>
                <Ionicons name="leaf" size={14} color={COLORS.accent} />
                <Text style={styles.sideCardTagText}>Healthify Promise</Text>
              </View>
              <Text style={styles.sideCardTitle}>{PRICING_SIDE_CARD.title}</Text>
              <Text style={styles.sideCardSubtitle}>
                {PRICING_SIDE_CARD.subtitle} Every calorie accounted for, every bite crafted for vitality.
              </Text>
              <View style={styles.sideCardMetric}>
                <Text style={styles.sideMetricNumber}>100%</Text>
                <Text style={styles.sideMetricLabel}>Natural Chef Prepared</Text>
              </View>
            </View>
          </View>
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
  topHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 44,
    flexWrap: 'wrap',
    gap: 16,
  },
  headerLeft: {
    alignItems: 'flex-start',
  },
  kickerBadge: {
    backgroundColor: COLORS.accentLight,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginBottom: 12,
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
    letterSpacing: -0.5,
  },
  sectionTitleMobile: {
    fontSize: 26,
  },
  viewAllBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.primaryBorder,
    backgroundColor: '#FFFFFF',
    cursor: 'pointer',
  },
  viewAllText: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.primary,
  },
  cardsLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
  cardsLayoutTablet: {
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  cardsLayoutMobile: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  pricingCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: '#E8EFEA',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    position: 'relative',
    justifyContent: 'space-between',
  },
  pricingCardTablet: {
    width: '48%',
    flex: 'none',
    marginBottom: 20,
  },
  pricingCardMobile: {
    width: '100%',
    maxWidth: 360,
  },
  popularPricingCard: {
    borderColor: COLORS.accent,
    borderWidth: 2,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 18,
    transform: [{ translateY: -6 }],
  },
  selectedPricingCard: {
    borderColor: COLORS.primary,
  },
  popularBadge: {
    position: 'absolute',
    top: -14,
    alignSelf: 'center',
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 4,
    paddingHorizontal: 14,
    borderRadius: 14,
    zIndex: 10,
  },
  popularBadgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  cardHeader: {
    marginBottom: 16,
    marginTop: 6,
  },
  planName: {
    fontSize: 20,
    fontWeight: '900',
    color: COLORS.textDark,
    marginBottom: 6,
  },
  planSubtitle: {
    fontSize: 12,
    lineHeight: 18,
    color: COLORS.textSecondary,
    minHeight: 36,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 16,
  },
  priceValue: {
    fontSize: 28,
    fontWeight: '900',
    color: COLORS.primary,
    letterSpacing: -0.5,
  },
  pricePeriod: {
    fontSize: 13,
    color: COLORS.textSecondary,
    fontWeight: '500',
    marginLeft: 6,
  },
  divider: {
    height: 1,
    backgroundColor: '#EDF2EE',
    marginBottom: 18,
  },
  featuresList: {
    gap: 12,
    marginBottom: 26,
    flex: 1,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  checkBadge: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: COLORS.accentLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  checkBadgePopular: {
    backgroundColor: '#D7ECD9',
  },
  featureText: {
    fontSize: 13,
    color: COLORS.textPrimary,
    lineHeight: 20,
    flex: 1,
  },
  planCta: {
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transitionDuration: '200ms',
  },
  planCtaStandard: {
    backgroundColor: COLORS.bgLight,
    borderWidth: 1,
    borderColor: COLORS.primaryBorder,
  },
  planCtaPopular: {
    backgroundColor: COLORS.primary,
  },
  planCtaHovered: {
    opacity: 0.9,
    transform: [{ translateY: -1 }],
  },
  planCtaPressed: {
    transform: [{ translateY: 1 }],
  },
  planCtaText: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.primary,
  },
  planCtaTextPopular: {
    color: '#FFFFFF',
  },
  sideVisualCard: {
    flex: 1,
    borderRadius: 24,
    overflow: 'hidden',
    position: 'relative',
    minHeight: 380,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
  },
  sideVisualCardTablet: {
    width: '48%',
    flex: 'none',
    minHeight: 380,
  },
  sideVisualCardMobile: {
    width: '100%',
    maxWidth: 360,
    minHeight: 320,
  },
  sideCardImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  sideCardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(15, 39, 27, 0.82)',
    padding: 26,
    justifyContent: 'space-between',
  },
  sideCardTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  sideCardTagText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  sideCardTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#FFFFFF',
    lineHeight: 30,
    marginTop: 20,
    marginBottom: 10,
  },
  sideCardSubtitle: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: 20,
    marginBottom: 20,
  },
  sideCardMetric: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
    paddingTop: 16,
  },
  sideMetricNumber: {
    fontSize: 28,
    fontWeight: '900',
    color: COLORS.accent,
  },
  sideMetricLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.85)',
    fontWeight: '600',
    marginTop: 2,
  },
});
