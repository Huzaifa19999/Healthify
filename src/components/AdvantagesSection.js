import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS } from '../constants/theme';
import { ADVANTAGES_DATA } from '../constants/data';
import { useResponsive } from '../utils/responsive';

export default function AdvantagesSection() {
  const { isMobile } = useResponsive();

  const renderCardIcon = (iconName) => {
    switch (iconName) {
      case 'diamond':
        return <Ionicons name="diamond-outline" size={24} color={COLORS.primary} />;
      case 'heart':
        return <Ionicons name="heart-outline" size={24} color={COLORS.primary} />;
      case 'truck':
        return <Feather name="truck" size={22} color={COLORS.primary} />;
      case 'leaf':
        return <Ionicons name="leaf-outline" size={24} color={COLORS.primary} />;
      default:
        return <Ionicons name="checkmark" size={22} color={COLORS.primary} />;
    }
  };

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      const element = document.querySelector('#plans');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <View nativeID="advantages" style={styles.sectionWrapper}>
      <View style={styles.container}>
        <View style={[styles.horizontalWrapper, isMobile && styles.verticalWrapper]}>
          {/* Left / Top Narrative Area */}
          <View style={[styles.textCol, isMobile && styles.textColMobile]}>
            <Text style={styles.kickerText}>{ADVANTAGES_DATA.kicker}</Text>

            <Text style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>
              {ADVANTAGES_DATA.title}
            </Text>

            <Text style={styles.descriptionText}>{ADVANTAGES_DATA.description}</Text>

            <Pressable
              style={({ hovered, pressed }) => [
                styles.actionBtn,
                hovered && styles.actionBtnHovered,
                pressed && styles.actionBtnPressed,
              ]}
              onPress={handleScroll}
              accessibilityRole="button"
              accessibilityLabel={ADVANTAGES_DATA.buttonText}
            >
              <Text style={styles.actionBtnText}>{ADVANTAGES_DATA.buttonText}</Text>
              <Feather name="arrow-right" size={15} color="#FFFFFF" />
            </Pressable>
          </View>

          {/* Right / Bottom Horizontal Card Row */}
          <View style={styles.cardsWrapper}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.horizontalScrollContainer}
            >
              {ADVANTAGES_DATA.items.map((item) => (
                <View key={item.id} style={styles.advantageCard}>
                  <View style={styles.iconCircle}>{renderCardIcon(item.icon)}</View>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardDescription}>{item.description}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionWrapper: {
    backgroundColor: '#F2F5EE',
    paddingVertical: 76,
  },
  container: {
    maxWidth: 1240,
    marginHorizontal: 'auto',
    width: '100%',
    paddingHorizontal: 0,
  },
  horizontalWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 48,
  },
  verticalWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 36,
  },
  textCol: {
    width: 340,
    flexShrink: 0,
    alignItems: 'flex-start',
  },
  textColMobile: {
    width: '100%',
  },
  kickerText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#485C31',
    letterSpacing: 2,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  sectionTitle: {
    fontFamily: FONTS.serif,
    fontSize: 36,
    fontWeight: '700',
    color: '#1D261C',
    lineHeight: 44,
    letterSpacing: -0.3,
    marginBottom: 16,
  },
  sectionTitleMobile: {
    fontSize: 28,
    lineHeight: 34,
  },
  descriptionText: {
    fontSize: 14.5,
    lineHeight: 24,
    color: '#5A6B5F',
    marginBottom: 28,
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
  cardsWrapper: {
    flex: 1,
    width: '00%',
  },
  horizontalScrollContainer: {
    flexDirection: 'row',
    gap: 16,
    paddingVertical: 8,
  },
  advantageCard: {
    width: 220,
    backgroundColor: '#FFFFFF',
    paddingVertical: 24,
    paddingHorizontal: 20,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E2E8DF',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
  },
  iconCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#F3F6F1',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1D261C',
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 12.5,
    lineHeight: 18,
    color: '#65766A',
  },
});