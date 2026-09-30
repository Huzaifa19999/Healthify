import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';
import { ABOUT_DATA } from '../constants/data';
import { useResponsive } from '../utils/responsive';

export default function AboutSection() {
  const { isDesktop, isMobile } = useResponsive();

  const handleScrollToServices = () => {
    if (typeof window !== 'undefined') {
      const element = document.querySelector('#services');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <View nativeID="about" style={styles.sectionWrapper}>
      <View style={styles.container}>
        <View style={[styles.contentRow, !isDesktop && styles.contentColumn]}>
          {/* Left Visual Column */}
          <View style={[styles.visualCol, !isDesktop && styles.visualColFull]}>
            <View style={styles.imageCardWrapper}>
              <Image
                source={{ uri: ABOUT_DATA.mainImage }}
                style={styles.mainImage}
                resizeMode="cover"
                accessibilityLabel="Fresh gourmet meal preparation"
              />

              {/* Floating Circular Badge */}
              <View style={styles.floatingNourishBadge}>
                <View style={styles.nourishIconCircle}>
                  <Ionicons name="nutrition-outline" size={20} color={COLORS.accent} />
                </View>
                <Text style={styles.nourishBadgeTitle}>Nourishing</Text>
                <Text style={styles.nourishBadgeSubtitle}>Lives Daily</Text>
              </View>
            </View>
          </View>

          {/* Right Text Column */}
          <View style={[styles.textCol, !isDesktop && styles.textColFull]}>
            {/* Kicker */}
            <View style={styles.kickerBadge}>
              <Text style={styles.kickerText}>{ABOUT_DATA.kicker}</Text>
            </View>

            {/* Title */}
            <Text style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>
              {ABOUT_DATA.title}
            </Text>

            {/* Paragraph */}
            <Text style={styles.descriptionText}>{ABOUT_DATA.description}</Text>

            {/* Features List */}
            <View style={styles.featuresRow}>
              {ABOUT_DATA.features.map((feature) => (
                <View key={feature} style={styles.featurePill}>
                  <View style={styles.checkCircle}>
                    <Feather name="check" size={13} color={COLORS.primary} />
                  </View>
                  <Text style={styles.featureText}>{feature}</Text>
                </View>
              ))}
            </View>

            {/* CTA Button */}
            <Pressable
              style={({ hovered, pressed }) => [
                styles.actionBtn,
                hovered && styles.actionBtnHovered,
                pressed && styles.actionBtnPressed,
              ]}
              onPress={handleScrollToServices}
              accessibilityRole="button"
              accessibilityLabel={ABOUT_DATA.buttonText}
            >
              <Text style={styles.actionBtnText}>{ABOUT_DATA.buttonText}</Text>
              <Feather name="arrow-right" size={16} color={COLORS.textWhite} />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionWrapper: {
    backgroundColor: '#FFFFFF',
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
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 60,
  },
  contentColumn: {
    flexDirection: 'column',
    gap: 40,
  },
  visualCol: {
    flex: 1,
    alignItems: 'center',
  },
  visualColFull: {
    width: '100%',
  },
  imageCardWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: 480,
    aspectRatio: 1.15,
  },
  mainImage: {
    width: '100%',
    height: '100%',
    borderRadius: 24,
    shadowColor: '#1A3D2F',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
  },
  floatingNourishBadge: {
    position: 'absolute',
    bottom: -20,
    left: 20,
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    borderWidth: 1,
    borderColor: '#EEF4F0',
  },
  nourishIconCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: COLORS.accentLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  nourishBadgeTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: COLORS.textDark,
  },
  nourishBadgeSubtitle: {
    fontSize: 11,
    fontWeight: '600',
    color: COLORS.accent,
  },
  textCol: {
    flex: 1.1,
    alignItems: 'flex-start',
  },
  textColFull: {
    width: '100%',
  },
  kickerBadge: {
    backgroundColor: COLORS.accentLight,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginBottom: 16,
  },
  kickerText: {
    fontSize: 12,
    fontWeight: '800',
    color: COLORS.accent,
    letterSpacing: 1,
  },
  sectionTitle: {
    fontSize: 38,
    fontWeight: '900',
    color: COLORS.textDark,
    lineHeight: 46,
    marginBottom: 18,
    letterSpacing: -0.5,
  },
  sectionTitleMobile: {
    fontSize: 28,
    lineHeight: 36,
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 26,
    color: COLORS.textSecondary,
    marginBottom: 28,
  },
  featuresRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 34,
  },
  featurePill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: COLORS.bgLight,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E2ECE5',
  },
  checkCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: COLORS.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureText: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: COLORS.primary,
    paddingVertical: 13,
    paddingHorizontal: 26,
    borderRadius: 25,
    cursor: 'pointer',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  actionBtnHovered: {
    backgroundColor: COLORS.primaryHover,
    transform: [{ translateY: -2 }],
  },
  actionBtnPressed: {
    transform: [{ translateY: 0 }],
  },
  actionBtnText: {
    color: COLORS.textWhite,
    fontSize: 14,
    fontWeight: '700',
  },
});
