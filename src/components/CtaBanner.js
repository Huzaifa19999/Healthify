import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';
import { CTA_DATA } from '../constants/data';
import { useResponsive } from '../utils/responsive';

export default function CtaBanner() {
  const { isMobile } = useResponsive();

  const handleCtaPress = () => {
    if (typeof window !== 'undefined') {
      const element = document.querySelector('#plans');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <View style={styles.bannerOuter}>
      <View style={styles.container}>
        <View style={styles.bannerCard}>
          {/* Background decorative leaf */}
          <View style={styles.bgIconWrapper}>
            <Ionicons name="leaf" size={160} color="rgba(255, 255, 255, 0.05)" />
          </View>

          {/* Content */}
          <View style={styles.contentBox}>
            <Text style={[styles.headline, isMobile && styles.headlineMobile]}>
              {CTA_DATA.headline}
            </Text>
            <Text style={styles.subheadline}>{CTA_DATA.subheadline}</Text>

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
              <Feather name="arrow-right" size={17} color={COLORS.primary} />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bannerOuter: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 50,
  },
  container: {
    maxWidth: 1240,
    marginHorizontal: 'auto',
    width: '100%',
    paddingHorizontal: 24,
  },
  bannerCard: {
    backgroundColor: COLORS.primary,
    borderRadius: 32,
    paddingVertical: 60,
    paddingHorizontal: 36,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
  },
  bgIconWrapper: {
    position: 'absolute',
    right: -20,
    bottom: -30,
    zIndex: 1,
  },
  contentBox: {
    alignItems: 'center',
    textAlign: 'center',
    zIndex: 2,
    maxWidth: 720,
  },
  headline: {
    fontSize: 38,
    fontWeight: '900',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 16,
    letterSpacing: -0.5,
  },
  headlineMobile: {
    fontSize: 26,
    lineHeight: 34,
  },
  subheadline: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.85)',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
    cursor: 'pointer',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  ctaButtonHovered: {
    backgroundColor: '#F3FAF5',
    transform: [{ translateY: -2 }],
  },
  ctaButtonPressed: {
    transform: [{ translateY: 0 }],
  },
  ctaButtonText: {
    color: COLORS.primary,
    fontSize: 15,
    fontWeight: '800',
  },
});
