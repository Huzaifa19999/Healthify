import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';
import { TESTIMONIALS_DATA } from '../constants/data';
import { useResponsive } from '../utils/responsive';

export default function TestimonialsSection() {
  const { isDesktop, isTablet, isMobile } = useResponsive();

  return (
    <View style={styles.sectionWrapper}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerBox}>
          <View style={styles.kickerBadge}>
            <Text style={styles.kickerText}>{TESTIMONIALS_DATA.kicker}</Text>
          </View>
          <Text style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>
            {TESTIMONIALS_DATA.title}
          </Text>
        </View>

        {/* 3 Review Cards */}
        <View
          style={[
            styles.cardsRow,
            isTablet && styles.cardsRowTablet,
            isMobile && styles.cardsRowMobile,
          ]}
        >
          {TESTIMONIALS_DATA.reviews.map((item) => (
            <View
              key={item.id}
              style={[
                styles.reviewCard,
                isTablet && styles.reviewCardTablet,
                isMobile && styles.reviewCardMobile,
              ]}
            >
              {/* Star Rating */}
              <View style={styles.starsRow}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <FontAwesome
                    key={star}
                    name="star"
                    size={15}
                    color={COLORS.starGold}
                    style={{ marginRight: 3 }}
                  />
                ))}
              </View>

              {/* Quote */}
              <Text style={styles.reviewQuote}>{item.review}</Text>

              {/* User Bio */}
              <View style={styles.userInfoRow}>
                <Image
                  source={{ uri: item.avatar }}
                  style={styles.userAvatar}
                  accessibilityLabel={item.name}
                />
                <View style={styles.userDetails}>
                  <Text style={styles.userName}>{item.name}</Text>
                  <Text style={styles.userLocation}>{item.location}</Text>
                </View>
              </View>
            </View>
          ))}
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
    letterSpacing: -0.5,
  },
  sectionTitleMobile: {
    fontSize: 26,
  },
  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 24,
  },
  cardsRowTablet: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
  cardsRowMobile: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
  },
  reviewCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 28,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#E8EFEA',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.04,
    shadowRadius: 10,
    justifyContent: 'space-between',
  },
  reviewCardTablet: {
    width: '48%',
    flex: 'none',
  },
  reviewCardMobile: {
    width: '100%',
    maxWidth: 380,
  },
  starsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  reviewQuote: {
    fontSize: 14,
    lineHeight: 24,
    color: COLORS.textPrimary,
    fontStyle: 'italic',
    marginBottom: 24,
  },
  userInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  userAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: COLORS.primaryLight,
  },
  userDetails: {
    flexDirection: 'column',
  },
  userName: {
    fontSize: 15,
    fontWeight: '800',
    color: COLORS.textDark,
  },
  userLocation: {
    fontSize: 12,
    color: COLORS.textLight,
    fontWeight: '500',
    marginTop: 2,
  },
});
