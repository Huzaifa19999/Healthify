import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS } from '../constants/theme';
import { PRICING_DATA, PRICING_SIDE_CARD } from '../constants/data';
import { useResponsive } from '../utils/responsive';

export default function PricingSection() {
  const { isDesktop, isTablet, isMobile } = useResponsive();
  const [selectedPlanId, setSelectedPlanId] = useState('price-2');

  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'compass':
      case 'leaf':
        return <Ionicons name="leaf-outline" size={20} color={COLORS.primary} />;
      case 'award':
        return <Ionicons name="ribbon-outline" size={20} color={COLORS.primary} />;
      case 'bar-chart':
        return <Ionicons name="bar-chart-outline" size={20} color={COLORS.primary} />;
      default:
        return <Ionicons name="checkmark-circle-outline" size={20} color={COLORS.primary} />;
    }
  };

  return (
    <View nativeID="plans" style={styles.sectionWrapper}>
      <View style={styles.container}>
        {/* Top Header: Left Title + Right Link */}
        <View style={styles.topHeaderRow}>
          <View style={styles.headerLeft}>
            <Text style={styles.kickerText}>GROWTH PLANS</Text>
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
            <Feather name="arrow-right" size={14} color="#384628" />
          </Pressable>
        </View>

        {/* 4 Cards Row: 3 Pricing Plans + 1 Promo Card */}
        <View
          style={[
            styles.cardsLayout,
            !isDesktop && styles.cardsLayoutTablet,
            isMobile && styles.cardsLayoutMobile,
          ]}
        >
          {PRICING_DATA.map((plan) => {
            const isPopular = plan.popular;

            return (
              <View
                key={plan.id}
                style={[
                  styles.pricingCard,
                  isPopular && styles.popularPricingCard,
                  isTablet && styles.pricingCardTablet,
                  isMobile && styles.pricingCardMobile,
                ]}
              >
                {/* Popular Top Full Banner */}
                {isPopular && (
                  <View style={styles.popularBanner}>
                    <Text style={styles.popularBannerText}>{plan.badge}</Text>
                  </View>
                )}

                <View style={[styles.cardInner, isPopular && styles.cardInnerPopular]}>
                  {/* Top Icon */}
                  <View style={styles.planIconWrapper}>
                    {renderIcon(plan.icon)}
                  </View>

                  {/* Title & Subtitle */}
                  <Text style={styles.planName}>{plan.name}</Text>
                  <Text style={styles.planSubtitle}>{plan.subtitle}</Text>

                  {/* Price */}
                  <View style={styles.priceContainer}>
                    <Text style={styles.priceValue}>{plan.price}</Text>
                    <Text style={styles.pricePeriod}>{plan.period}</Text>
                  </View>

                  {/* Features List */}
                  <View style={styles.featuresList}>
                    {plan.features.map((feature, fIndex) => (
                      <View key={fIndex} style={styles.featureItem}>
                        <Feather name="check" size={13} color="#4C6134" />
                        <Text style={styles.featureText}>{feature}</Text>
                      </View>
                    ))}
                  </View>

                  {/* Button */}
                  <Pressable
                    style={({ hovered, pressed }) => [
                      styles.planBtn,
                      isPopular ? styles.planBtnPopular : styles.planBtnOutline,
                      hovered && styles.planBtnHovered,
                      pressed && styles.planBtnPressed,
                    ]}
                    onPress={() => setSelectedPlanId(plan.id)}
                    accessibilityRole="button"
                    accessibilityLabel={plan.buttonText}
                  >
                    <Text
                      style={[
                        styles.planBtnText,
                        isPopular ? styles.planBtnTextPopular : styles.planBtnTextOutline,
                      ]}
                    >
                      {plan.buttonText}
                    </Text>
                  </Pressable>
                </View>
              </View>
            );
          })}

          {/* Rightmost Visual Image Card: "Invest in a Healthier You" */}
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
              <View style={styles.sideCardContent}>
                <Ionicons name="leaf-outline" size={26} color="#FFFFFF" style={styles.sideCardEmblem} />
                <Text style={styles.sideCardSerifTitle}>
                  Invest in
                  {'\n'}
                  a Healthier
                  {'\n'}
                  You
                </Text>
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
  topHeaderRow: {
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
  cardsLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 18,
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
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E2E8DF',
    overflow: 'hidden',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 10,
  },
  pricingCardTablet: {
    width: '48%',
    flex: 'none',
    marginBottom: 16,
  },
  pricingCardMobile: {
    width: '100%',
    maxWidth: 340,
    marginBottom: 16,
  },
  popularPricingCard: {
    borderColor: '#384628',
    borderWidth: 1.5,
  },
  popularBanner: {
    backgroundColor: '#384628',
    paddingVertical: 7,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  popularBannerText: {
    color: '#FFFFFF',
    fontSize: 10.5,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  cardInner: {
    padding: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  cardInnerPopular: {
    paddingTop: 16,
  },
  planIconWrapper: {
    width: 32,
    height: 32,
    marginBottom: 12,
    justifyContent: 'center',
  },
  planName: {
    fontSize: 16.5,
    fontWeight: '700',
    color: '#1D261C',
    marginBottom: 4,
  },
  planSubtitle: {
    fontSize: 11.5,
    lineHeight: 16,
    color: '#65766A',
    marginBottom: 14,
    minHeight: 32,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 18,
  },
  priceValue: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1D261C',
    letterSpacing: -0.3,
  },
  pricePeriod: {
    fontSize: 12,
    color: '#65766A',
    fontWeight: '500',
    marginLeft: 4,
  },
  featuresList: {
    gap: 10,
    marginBottom: 24,
    flex: 1,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  featureText: {
    fontSize: 12,
    color: '#344437',
    lineHeight: 16,
  },
  planBtn: {
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    width: '100%',
  },
  planBtnOutline: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#384628',
  },
  planBtnPopular: {
    backgroundColor: '#384628',
  },
  planBtnHovered: {
    opacity: 0.88,
  },
  planBtnPressed: {
    transform: [{ scale: 0.98 }],
  },
  planBtnText: {
    fontSize: 13,
    fontWeight: '600',
  },
  planBtnTextOutline: {
    color: '#384628',
  },
  planBtnTextPopular: {
    color: '#FFFFFF',
  },
  sideVisualCard: {
    flex: 1,
    borderRadius: 18,
    overflow: 'hidden',
    position: 'relative',
    minHeight: 360,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },
  sideVisualCardTablet: {
    width: '48%',
    flex: 'none',
    minHeight: 360,
  },
  sideVisualCardMobile: {
    width: '100%',
    maxWidth: 340,
    minHeight: 320,
  },
  sideCardImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  sideCardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(23, 31, 20, 0.68)',
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sideCardContent: {
    alignItems: 'center',
    textAlign: 'center',
  },
  sideCardEmblem: {
    marginBottom: 12,
    opacity: 0.9,
  },
  sideCardSerifTitle: {
    fontFamily: FONTS.serif,
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 32,
    letterSpacing: -0.3,
  },
});
