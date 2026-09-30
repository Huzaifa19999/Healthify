import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { COLORS, FONTS } from '../constants/theme';
import { TESTIMONIALS_DATA } from '../constants/data';
import { useResponsive } from '../utils/responsive';

export default function TestimonialsSection() {
  const { isDesktop, isTablet, isMobile } = useResponsive();

  return (
    <View style={styles.sectionWrapper}>
      <View style={styles.container}>
        {/* Header: Left Title + Right Link */}
        <View style={styles.headerRow}>
          <View style={styles.headerLeft}>
            <Text style={styles.kickerText}>{TESTIMONIALS_DATA.kicker}</Text>
            <Text style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>
              {TESTIMONIALS_DATA.title}
            </Text>
          </View>

          <Pressable
            style={styles.rightLink}
            accessibilityRole="link"
            accessibilityLabel={TESTIMONIALS_DATA.linkText}
          >
            <Text style={styles.rightLinkText}>{TESTIMONIALS_DATA.linkText}</Text>
            <Feather name="arrow-right" size={14} color="#384628" />
          </Pressable>
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
              {/* Quote */}
              <Text style={styles.reviewQuote}>{item.review}</Text>

              {/* Bottom Row: User Avatar/Name on left, Stars on right */}
              <View style={styles.bottomRow}>
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

                {/* 5 Stars Rating on bottom right */}
                <View style={styles.starsRow}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FontAwesome
                      key={star}
                      name="star"
                      size={12}
                      color="#EBA525"
                      style={{ marginLeft: 2 }}
                    />
                  ))}
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
  headerRow: {
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
  rightLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    cursor: 'pointer',
    paddingBottom: 4,
  },
  rightLinkText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#384628',
  },
  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
  cardsRowTablet: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
  cardsRowMobile: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 18,
  },
  reviewCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 22,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E2E8DF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
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
  reviewQuote: {
    fontSize: 13.5,
    lineHeight: 22,
    color: '#2B382D',
    marginBottom: 24,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  userAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  userDetails: {
    flexDirection: 'column',
  },
  userName: {
    fontSize: 13.5,
    fontWeight: '700',
    color: '#1D261C',
  },
  userLocation: {
    fontSize: 11,
    color: '#65766A',
    marginTop: 1,
  },
  starsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
