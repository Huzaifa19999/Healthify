import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS } from '../constants/theme';
import { CTA_DATA } from '../constants/data';
import { useResponsive } from '../utils/responsive';

export default function CtaBanner() {
  const { isDesktop, isMobile } = useResponsive();

  const handleCtaPress = () => {
    if (typeof window !== 'undefined') {
      const element = document.querySelector('#plans');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <View style={styles.bannerWrapper}>
      {/* Decorative leaf watermarks on left and right */}
      <View style={styles.leafLeft}>
        <Ionicons name="leaf" size={130} color="rgba(255, 255, 255, 0.05)" />
      </View>
      <View style={styles.leafRight}>
        <Ionicons name="leaf" size={150} color="rgba(255, 255, 255, 0.05)" />
      </View>

      <View style={styles.container}>
        <View style={[styles.contentRow, !isDesktop && styles.contentColumn]}>
          {/* Left Side: Headline & Subtitle */}
          <View style={[styles.textGroup, !isDesktop && styles.textGroupFull]}>
            <Text style={styles.kickerText}>{CTA_DATA.kicker}</Text>
            <Text style={[styles.headline, isMobile && styles.headlineMobile]}>
              {CTA_DATA.headline}
            </Text>
            <Text style={styles.subheadline}>{CTA_DATA.subheadline}</Text>
          </View>

          {/* Right Side: White Pill CTA Button */}
          <Pressable
            style={({ hovered, pressed }) => [
              styles.ctaButton,
              hovered && styles.ctaButtonHovered,
              pressed && styles.ctaButtonPressed,
            ]}
            onPress={handleCtaPress}
            accessibilityRole="button"
            accessibilityLabel={CTA_DATA.buttonText}
          >
            <Text style={styles.ctaButtonText}>{CTA_DATA.buttonText}</Text>
            <Feather name="arrow-right" size={15} color="#384628" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bannerWrapper: {
    backgroundColor: '#384628',
    paddingVertical: 56,
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
  },
  leafLeft: {
    position: 'absolute',
    left: -20,
    top: -20,
    opacity: 0.6,
    pointerEvents: 'none',
  },
  leafRight: {
    position: 'absolute',
    right: -20,
    bottom: -20,
    opacity: 0.6,
    pointerEvents: 'none',
  },
  container: {
    maxWidth: 1240,
    marginHorizontal: 'auto',
    width: '100%',
    paddingHorizontal: 24,
    zIndex: 2,
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 32,
  },
  contentColumn: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 24,
  },
  textGroup: {
    flex: 1,
    alignItems: 'flex-start',
  },
  textGroupFull: {
    width: '100%',
  },
  kickerText: {
    fontSize: 10.5,
    fontWeight: '700',
    color: '#CAD8B8',
    letterSpacing: 2,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  headline: {
    fontFamily: FONTS.serif,
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: -0.2,
    marginBottom: 6,
  },
  headlineMobile: {
    fontSize: 22,
  },
  subheadline: {
    fontSize: 13,
    color: '#DFE7D6',
    lineHeight: 20,
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 999,
    cursor: 'pointer',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  ctaButtonHovered: {
    backgroundColor: '#F7FAF5',
    transform: [{ translateY: -1 }],
  },
  ctaButtonPressed: {
    transform: [{ translateY: 0 }],
  },
  ctaButtonText: {
    color: '#384628',
    fontSize: 13.5,
    fontWeight: '700',
  },
});
