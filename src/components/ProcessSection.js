import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS } from '../constants/theme';
import { PROCESS_DATA } from '../constants/data';
import { useResponsive } from '../utils/responsive';

export default function ProcessSection() {
  const { isDesktop, isMobile } = useResponsive();

  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'utensils':
        return <Ionicons name="nutrition-outline" size={24} color={COLORS.primary} />;
      case 'pot':
        return <Ionicons name="restaurant-outline" size={24} color={COLORS.primary} />;
      case 'truck':
        return <Feather name="truck" size={22} color={COLORS.primary} />;
      default:
        return <Ionicons name="leaf-outline" size={24} color={COLORS.primary} />;
    }
  };

  return (
    <View nativeID="process" style={styles.sectionWrapper}>
      <View style={styles.container}>
        {/* Header: Left Title + Right Link */}
        <View style={styles.headerRow}>
          <View style={styles.headerLeft}>
            <Text style={styles.kickerText}>{PROCESS_DATA.kicker}</Text>
            <Text style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>
              {PROCESS_DATA.title}
            </Text>
          </View>

          <Pressable
            style={styles.rightLink}
            accessibilityRole="link"
            accessibilityLabel={PROCESS_DATA.linkText}
          >
            <Text style={styles.rightLinkText}>{PROCESS_DATA.linkText}</Text>
            <Feather name="arrow-right" size={14} color="#384628" />
          </Pressable>
        </View>

        {/* 3 Steps Row */}
        <View style={[styles.stepsRow, !isDesktop && styles.stepsColumn]}>
          {PROCESS_DATA.steps.map((stepItem, index) => (
            <React.Fragment key={stepItem.step}>
              <View style={[styles.stepItem, !isDesktop && styles.stepItemMobile]}>
                {/* Number Circle + Icon Row */}
                <View style={styles.badgeRow}>
                  <View style={styles.numberCircle}>
                    <Text style={styles.numberText}>{stepItem.step}</Text>
                  </View>
                  <View style={styles.iconCircle}>
                    {renderIcon(stepItem.icon)}
                  </View>
                </View>

                {/* Content */}
                <Text style={styles.stepTitle}>{stepItem.title}</Text>
                <Text style={styles.stepDescription}>{stepItem.description}</Text>
              </View>

              {/* Connecting arrow between steps on desktop */}
              {isDesktop && index < PROCESS_DATA.steps.length - 1 && (
                <View style={styles.arrowConnector}>
                  <Feather name="arrow-right" size={20} color="#718274" />
                </View>
              )}
            </React.Fragment>
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
    marginBottom: 44,
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
  stepsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
  },
  stepsColumn: {
    flexDirection: 'column',
    gap: 32,
    alignItems: 'flex-start',
  },
  stepItem: {
    flex: 1,
    alignItems: 'flex-start',
  },
  stepItemMobile: {
    width: '100%',
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  numberCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E0EAD9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: '#384628',
    fontSize: 14,
    fontWeight: '800',
  },
  iconCircle: {
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1D261C',
    marginBottom: 6,
  },
  stepDescription: {
    fontSize: 12.5,
    lineHeight: 18,
    color: '#5A6B5F',
    maxWidth: 240,
  },
  arrowConnector: {
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
