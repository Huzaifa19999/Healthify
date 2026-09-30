import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { COLORS, FONTS } from '../constants/theme';
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

  const renderFeatureIcon = (iconName) => {
    switch (iconName) {
      case 'leaf':
        return <Ionicons name="leaf-outline" size={17} color={COLORS.primary} />;
      case 'scale':
        return <Ionicons name="scale-outline" size={17} color={COLORS.primary} />;
      case 'heart':
        return <Ionicons name="heart-outline" size={17} color={COLORS.primary} />;
      default:
        return <Ionicons name="checkmark" size={17} color={COLORS.primary} />;
    }
  };

  return (
    <View nativeID="about" style={styles.sectionWrapper}>
      {/* Decorative leaf branch watermark on the right */}
      <View style={styles.leafRightWatermark}>
        <Ionicons name="leaf-outline" size={260} color="rgba(76, 97, 52, 0.03)" />
      </View>

      <View style={styles.container}>
        <View style={[styles.contentRow, !isDesktop && styles.contentColumn]}>
          {/* Left Visual Column: 2 Overlapping Photos + Floating Badge */}
          <View style={[styles.visualCol, !isDesktop && styles.visualColFull]}>
            <View style={styles.imageComposition}>
              {/* Main Top Bowl Photo */}
              <View style={styles.mainImageWrapper}>
                <Image
                  source={{ uri: ABOUT_DATA.mainImage }}
                  style={styles.mainImage}
                  resizeMode="cover"
                  accessibilityLabel="Fresh nutritious healthy meal"
                />
              </View>

              {/* Smaller Bottom-Left Salad Prep Photo */}
              <View style={styles.subImageWrapper}>
                <Image
                  source={{ uri: ABOUT_DATA.subImage }}
                  style={styles.subImage}
                  resizeMode="cover"
                  accessibilityLabel="Hands preparing fresh organic salad"
                />
              </View>

              {/* Overlapping Pill Badge */}
              <View style={styles.nourishBadge}>
                <View style={styles.nourishIconCircle}>
                  <Ionicons name="leaf" size={15} color={COLORS.primary} />
                </View>
                <View>
                  <Text style={styles.nourishBadgeText}>Nourishing</Text>
                  <Text style={styles.nourishBadgeText}>Lives Daily</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Right Text Column */}
          <View style={[styles.textCol, !isDesktop && styles.textColFull]}>
            {/* Kicker */}
            <Text style={styles.kickerText}>{ABOUT_DATA.kicker}</Text>

            {/* Title */}
            <Text style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>
              {ABOUT_DATA.title}
            </Text>

            {/* Paragraph */}
            <Text style={styles.descriptionText}>{ABOUT_DATA.description}</Text>

            {/* 3 Features in Row with Circular Outline Icons */}
            <View style={styles.featuresRow}>
              {ABOUT_DATA.features.map((feature) => (
                <View key={feature.label} style={styles.featureItem}>
                  <View style={styles.featureIconCircle}>
                    {renderFeatureIcon(feature.icon)}
                  </View>
                  <Text style={styles.featureLabel}>{feature.label}</Text>
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
              <Feather name="arrow-right" size={15} color="#FFFFFF" />
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
    paddingVertical: 76,
    position: 'relative',
    overflow: 'hidden',
  },
  leafRightWatermark: {
    position: 'absolute',
    right: -40,
    top: 40,
    opacity: 0.8,
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
    gap: 56,
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
  imageComposition: {
    position: 'relative',
    width: 480,
    height: 380,
    maxWidth: '100%',
  },
  mainImageWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 330,
    height: 250,
    borderRadius: 22,
    overflow: 'hidden',
    shadowColor: '#1A3320',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 18,
  },
  mainImage: {
    width: '100%',
    height: '100%',
  },
  subImageWrapper: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    width: 220,
    height: 190,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 4,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.14,
    shadowRadius: 20,
  },
  subImage: {
    width: '100%',
    height: '100%',
  },
  nourishBadge: {
    position: 'absolute',
    bottom: 60,
    left: 170,
    backgroundColor: '#FFFFFF',
    paddingVertical: 9,
    paddingHorizontal: 15,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 14,
    borderWidth: 1,
    borderColor: '#E8EFE5',
    zIndex: 10,
  },
  nourishIconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.accentLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nourishBadgeText: {
    fontSize: 11.5,
    fontWeight: '700',
    color: '#1D261C',
    lineHeight: 14,
  },
  textCol: {
    flex: 1.1,
    alignItems: 'flex-start',
  },
  textColFull: {
    width: '100%',
  },
  kickerText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#485C31',
    letterSpacing: 2,
    marginBottom: 12,
    textTransform: 'uppercase',
  },
  sectionTitle: {
    fontFamily: FONTS.serif,
    fontSize: 40,
    fontWeight: '700',
    color: '#1D261C',
    lineHeight: 46,
    letterSpacing: -0.3,
    marginBottom: 16,
  },
  sectionTitleMobile: {
    fontSize: 30,
    lineHeight: 36,
  },
  descriptionText: {
    fontSize: 14.5,
    lineHeight: 24,
    color: '#55655A',
    marginBottom: 28,
    maxWidth: 500,
  },
  featuresRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginBottom: 32,
    flexWrap: 'wrap',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  featureIconCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#D4DDD1',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  featureLabel: {
    fontSize: 12.5,
    fontWeight: '600',
    color: '#2B382D',
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 16,
    cursor: 'pointer',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.16,
    shadowRadius: 8,
  },
  actionBtnHovered: {
    backgroundColor: COLORS.primaryHover,
    transform: [{ translateY: -1 }],
  },
  actionBtnPressed: {
    transform: [{ translateY: 0 }],
  },
  actionBtnText: {
    color: '#FFFFFF',
    fontSize: 13.5,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
});
