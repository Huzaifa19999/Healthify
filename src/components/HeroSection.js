import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';
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
      <View style={styles.container}>
        <View style={[styles.contentRow, !isDesktop && styles.contentColumn]}>
          {/* Left Column: Headline and CTAs */}
          <View style={[styles.textCol, !isDesktop && styles.textColFull]}>
            {/* Tag Badge */}
            <View style={styles.badgeWrapper}>
              <View style={styles.badgeDot} />
              <Text style={styles.badgeText}>{HERO_DATA.badge}</Text>
            </View>

            {/* Main Headline */}
            <Text style={[styles.headline, isMobile && styles.headlineMobile]}>
              Fresh. Nutritious. Convenient.{' '}
              <Text style={styles.headlineHighlight}>Delivered to You.</Text>
            </Text>

            {/* Subtitle / Paragraph */}
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
                <Feather name="arrow-right" size={17} color={COLORS.textWhite} />
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

            {/* Social Proof Row */}
            <View style={styles.socialProofContainer}>
              <View style={styles.avatarStack}>
                {HERO_DATA.socialProof.avatars.map((url, index) => (
                  <Image
                    key={index}
                    source={{ uri: url }}
                    style={[
                      styles.avatarImage,
                      { marginLeft: index === 0 ? 0 : -10 },
                    ]}
                  />
                ))}
              </View>
              <View style={styles.ratingInfo}>
                <View style={styles.starsRow}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FontAwesome
                      key={star}
                      name="star"
                      size={14}
                      color={COLORS.starGold}
                      style={{ marginRight: 2 }}
                    />
                  ))}
                  <Text style={styles.ratingScore}>
                    {HERO_DATA.socialProof.rating}
                  </Text>
                </View>
                <Text style={styles.reviewCountText}>
                  From {HERO_DATA.socialProof.reviewCount} across UAE
                </Text>
              </View>
            </View>
          </View>

          {/* Right Column: Hero Dish Visual & Floating Badges */}
          <View style={[styles.visualCol, !isDesktop && styles.visualColFull]}>
            <View style={styles.dishFrame}>
              {/* Circular Backdrop Glow */}
              <View style={styles.dishCircleGlow} />

              {/* Main Food Bowl Image */}
              <Image
                source={{ uri: HERO_DATA.heroImage }}
                style={styles.heroImage}
                resizeMode="cover"
                accessibilityLabel="Fresh gourmet Mediterranean salad bowl"
              />

              {/* Floating Badge 1 (Top Left) */}
              <View style={styles.floatingBadgeTop}>
                <View style={styles.floatingBadgeIconWrapper}>
                  <Ionicons name="sparkles" size={16} color={COLORS.accent} />
                </View>
                <View>
                  <Text style={styles.floatingBadgeTitle}>
                    {HERO_DATA.floatingBadge1.title}
                  </Text>
                  <Text style={styles.floatingBadgeSubtitle}>
                    {HERO_DATA.floatingBadge1.subtitle}
                  </Text>
                </View>
              </View>

              {/* Floating Badge 2 (Bottom Right) */}
              <View style={styles.floatingBadgeBottom}>
                <View style={styles.floatingBadgeHeaderRow}>
                  <Text style={styles.nutrientTitle}>
                    {HERO_DATA.floatingBadge2.title}
                  </Text>
                  <View style={styles.organicTag}>
                    <Text style={styles.organicTagText}>
                      {HERO_DATA.floatingBadge2.badge}
                    </Text>
                  </View>
                </View>
                <View style={styles.macroPillsRow}>
                  <View style={styles.macroPill}>
                    <Ionicons name="flame" size={12} color="#E05638" />
                    <Text style={styles.macroText}>
                      {HERO_DATA.floatingBadge2.calories}
                    </Text>
                  </View>
                  <View style={styles.macroPill}>
                    <Ionicons name="barbell" size={12} color={COLORS.accent} />
                    <Text style={styles.macroText}>
                      {HERO_DATA.floatingBadge2.protein}
                    </Text>
                  </View>
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
    backgroundColor: COLORS.bgLight,
    paddingTop: 50,
    paddingBottom: 70,
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
    gap: 48,
  },
  contentColumn: {
    flexDirection: 'column',
    gap: 40,
  },
  textCol: {
    flex: 1.1,
    alignItems: 'flex-start',
  },
  textColFull: {
    width: '100%',
  },
  badgeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: COLORS.accentLight,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 30,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#D4EBD9',
  },
  badgeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.accent,
  },
  badgeText: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.primary,
    letterSpacing: 0.3,
  },
  headline: {
    fontSize: 48,
    fontWeight: '900',
    color: COLORS.textDark,
    lineHeight: 56,
    marginBottom: 20,
    letterSpacing: -0.5,
  },
  headlineMobile: {
    fontSize: 34,
    lineHeight: 42,
  },
  headlineHighlight: {
    color: COLORS.primary,
  },
  description: {
    fontSize: 16,
    lineHeight: 26,
    color: COLORS.textSecondary,
    marginBottom: 32,
    maxWidth: 540,
  },
  ctaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 38,
    flexWrap: 'wrap',
  },
  primaryCta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 30,
    cursor: 'pointer',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  primaryCtaHovered: {
    backgroundColor: COLORS.primaryHover,
    transform: [{ translateY: -2 }],
  },
  primaryCtaPressed: {
    transform: [{ translateY: 0 }],
  },
  primaryCtaText: {
    color: COLORS.textWhite,
    fontSize: 15,
    fontWeight: '700',
  },
  secondaryCta: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: COLORS.primaryBorder,
    cursor: 'pointer',
  },
  secondaryCtaHovered: {
    backgroundColor: COLORS.primaryLight,
  },
  secondaryCtaPressed: {
    opacity: 0.85,
  },
  secondaryCtaText: {
    color: COLORS.primary,
    fontSize: 15,
    fontWeight: '600',
  },
  socialProofContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    flexWrap: 'wrap',
  },
  avatarStack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarImage: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  ratingInfo: {
    flexDirection: 'column',
    gap: 2,
  },
  starsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingScore: {
    fontSize: 14,
    fontWeight: '800',
    color: COLORS.textDark,
    marginLeft: 4,
  },
  reviewCountText: {
    fontSize: 12,
    color: COLORS.textLight,
  },
  visualCol: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  visualColFull: {
    width: '100%',
    marginTop: 10,
  },
  dishFrame: {
    position: 'relative',
    width: 380,
    height: 380,
    maxWidth: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dishCircleGlow: {
    position: 'absolute',
    width: 360,
    height: 360,
    borderRadius: 180,
    backgroundColor: '#E4F0E8',
    opacity: 0.8,
  },
  heroImage: {
    width: 320,
    height: 320,
    borderRadius: 160,
    shadowColor: '#1A3D2F',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.25,
    shadowRadius: 24,
  },
  floatingBadgeTop: {
    position: 'absolute',
    top: 10,
    left: -10,
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 14,
    borderWidth: 1,
    borderColor: '#EEF4F0',
  },
  floatingBadgeIconWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.accentLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingBadgeTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: COLORS.textDark,
  },
  floatingBadgeSubtitle: {
    fontSize: 11,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
  floatingBadgeBottom: {
    position: 'absolute',
    bottom: 10,
    right: -10,
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    borderWidth: 1,
    borderColor: '#EEF4F0',
    minWidth: 170,
  },
  floatingBadgeHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    gap: 8,
  },
  nutrientTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.textDark,
  },
  organicTag: {
    backgroundColor: COLORS.accentLight,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 6,
  },
  organicTagText: {
    fontSize: 9,
    fontWeight: '700',
    color: COLORS.accent,
  },
  macroPillsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  macroPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: COLORS.bgLight,
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 8,
  },
  macroText: {
    fontSize: 11,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
});
