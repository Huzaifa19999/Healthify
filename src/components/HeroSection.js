import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { COLORS, FONTS } from '../constants/theme';
import { HERO_DATA } from '../constants/data';
import { useResponsive } from '../utils/responsive';

export default function HeroSection() {
  const { isDesktop, isMobile } = useResponsive();

  const handleScroll = (id) => {
    if (typeof window !== 'undefined') {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <View style={styles.sectionWrapper}>
      {/* Decorative leaf branch corner watermarks */}
      <View style={styles.leafTopLeft}>
        <Ionicons name="leaf-outline" size={140} color="rgba(76, 97, 52, 0.04)" />
      </View>
      <View style={styles.leafTopRight}>
        <Ionicons name="leaf-outline" size={180} color="rgba(76, 97, 52, 0.04)" />
      </View>

      <View style={styles.container}>
        <View style={[styles.contentRow, !isDesktop && styles.contentColumn]}>
          {/* Left Column: Headlines & Features */}
          <View style={[styles.textCol, !isDesktop && styles.textColFull]}>
            {/* Serif Big Headline */}
            <Text style={[styles.headline, isMobile && styles.headlineMobile]}>
              {HERO_DATA.headlinePart1}
              {'\n'}
              {HERO_DATA.headlinePart2}
            </Text>

            {/* Subheading */}
            <Text style={styles.subheading}>{HERO_DATA.subheading}</Text>

            {/* Paragraph */}
            <Text style={styles.description}>{HERO_DATA.description}</Text>

            {/* CTA Buttons */}
            <View style={styles.ctaRow}>
              <Pressable
                style={({ hovered, pressed }) => [
                  styles.primaryCta,
                  hovered && styles.primaryCtaHovered,
                  pressed && styles.primaryCtaPressed,
                ]}
                onPress={() => handleScroll('#plans')}
                accessibilityRole="button"
                accessibilityLabel="Explore Meal Plans"
              >
                <Text style={styles.primaryCtaText}>{HERO_DATA.ctaPrimary}</Text>
                <Feather name="arrow-right" size={16} color="#FFFFFF" />
              </Pressable>

              <Pressable
                style={({ hovered, pressed }) => [
                  styles.secondaryCta,
                  hovered && styles.secondaryCtaHovered,
                  pressed && styles.secondaryCtaPressed,
                ]}
                onPress={() => handleScroll('#about')}
                accessibilityRole="button"
                accessibilityLabel="Learn More"
              >
                <Text style={styles.secondaryCtaText}>{HERO_DATA.ctaSecondary}</Text>
              </Pressable>
            </View>

            {/* 3 Horizontal Badges */}
            <View style={styles.featuresRow}>
              <View style={styles.featureItem}>
                <Ionicons name="leaf-outline" size={16} color={COLORS.primary} />
                <Text style={styles.featureLabel}>Fresh Ingredients</Text>
              </View>

              <View style={styles.featureItem}>
                <Ionicons name="shield-checkmark-outline" size={16} color={COLORS.primary} />
                <Text style={styles.featureLabel}>Nutritionist Approved</Text>
              </View>

              <View style={styles.featureItem}>
                <Ionicons name="car-outline" size={16} color={COLORS.primary} />
                <Text style={styles.featureLabel}>Delivered to Your Door</Text>
              </View>
            </View>
          </View>

          {/* Right Column: Circular Food Bowl + Script + Floating Badge */}
          <View style={[styles.visualCol, !isDesktop && styles.visualColFull]}>
            <View style={styles.dishFrame}>
              {/* Handwritten script note */}
              <View style={styles.scriptBadge}>
                <Text style={styles.scriptText}>{HERO_DATA.scriptText}</Text>
                <Ionicons
                  name="arrow-down"
                  size={16}
                  color="#556B3A"
                  style={styles.scriptArrow}
                />
              </View>

              {/* Main Food Bowl Image */}
              <View style={styles.imageRing}>
                <Image
                  source={{ uri: HERO_DATA.heroImage }}
                  style={styles.heroImage}
                  resizeMode="cover"
                  accessibilityLabel="Fresh gourmet chicken salad bowl"
                />
              </View>

              {/* Floating Badge (Bottom Right) */}
              <View style={styles.floatingBadge}>
                <View style={styles.floatingIconCircle}>
                  <Ionicons name="leaf" size={16} color={COLORS.primary} />
                </View>
                <View>
                  <Text style={styles.floatingTitle}>
                    {HERO_DATA.floatingBadge.title}
                  </Text>
                  <Text style={styles.floatingSubtitle}>
                    {HERO_DATA.floatingBadge.subtitle}
                  </Text>
                </View>
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
    backgroundColor: '#F9FAF7',
    paddingTop: 54,
    paddingBottom: 64,
    position: 'relative',
    overflow: 'hidden',
  },
  leafTopLeft: {
    position: 'absolute',
    top: -20,
    left: -30,
    opacity: 0.7,
    pointerEvents: 'none',
  },
  leafTopRight: {
    position: 'absolute',
    top: -30,
    right: -30,
    opacity: 0.6,
    pointerEvents: 'none',
  },
  container: {
    maxWidth: 1240,
    marginHorizontal: 'auto',
    width: '100%',
    paddingHorizontal: 24,
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 40,
  },
  contentColumn: {
    flexDirection: 'column',
    gap: 44,
  },
  textCol: {
    flex: 1.1,
    alignItems: 'flex-start',
    zIndex: 2,
  },
  textColFull: {
    width: '100%',
  },
  headline: {
    fontFamily: FONTS.serif,
    fontSize: 52,
    fontWeight: '700',
    color: '#1D261C',
    lineHeight: 58,
    letterSpacing: -0.5,
    marginBottom: 16,
  },
  headlineMobile: {
    fontSize: 36,
    lineHeight: 42,
  },
  subheading: {
    fontSize: 16.5,
    fontWeight: '700',
    color: '#263428',
    marginBottom: 12,
    letterSpacing: 0.1,
  },
  description: {
    fontSize: 14.5,
    lineHeight: 24,
    color: '#55655A',
    marginBottom: 32,
    maxWidth: 480,
  },
  ctaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginBottom: 36,
    flexWrap: 'wrap',
  },
  primaryCta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 26,
    borderRadius: 16,
    cursor: 'pointer',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
  },
  primaryCtaHovered: {
    backgroundColor: COLORS.primaryHover,
    transform: [{ translateY: -1 }],
  },
  primaryCtaPressed: {
    transform: [{ translateY: 0 }],
  },
  primaryCtaText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  secondaryCta: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D4DDD1',
    cursor: 'pointer',
  },
  secondaryCtaHovered: {
    backgroundColor: '#F3F6F1',
  },
  secondaryCtaPressed: {
    opacity: 0.85,
  },
  secondaryCtaText: {
    color: '#2B382D',
    fontSize: 14,
    fontWeight: '600',
  },
  featuresRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    flexWrap: 'wrap',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  featureLabel: {
    fontSize: 12.5,
    fontWeight: '500',
    color: '#475549',
  },
  visualCol: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  visualColFull: {
    width: '100%',
    marginTop: 10,
  },
  dishFrame: {
    position: 'relative',
    width: 440,
    height: 440,
    maxWidth: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scriptBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
    transform: [{ rotate: '-8deg' }],
    alignItems: 'center',
  },
  scriptText: {
    fontFamily: FONTS.script,
    fontSize: 24,
    fontWeight: '700',
    color: '#556B3A',
    lineHeight: 24,
    textAlign: 'center',
  },
  scriptArrow: {
    marginTop: 2,
    transform: [{ rotate: '-25deg' }],
  },
  imageRing: {
    width: 390,
    height: 390,
    maxWidth: '92%',
    maxHeight: 390,
    borderRadius: 200,
    overflow: 'hidden',
    backgroundColor: '#EAEFE7',
    borderWidth: 6,
    borderColor: '#FFFFFF',
    shadowColor: '#1A3320',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.16,
    shadowRadius: 28,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  floatingBadge: {
    position: 'absolute',
    bottom: 24,
    right: -12,
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    borderWidth: 1,
    borderColor: '#E8EFE5',
    zIndex: 10,
  },
  floatingIconCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: COLORS.accentLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1D261C',
  },
  floatingSubtitle: {
    fontSize: 11,
    color: '#697A6E',
    fontWeight: '500',
  },
});
