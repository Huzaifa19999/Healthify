import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';
import { PROCESS_DATA } from '../constants/data';
import { useResponsive } from '../utils/responsive';

export default function ProcessSection() {
  const { isDesktop, isMobile } = useResponsive();

  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'clipboard-list':
        return <Feather name="clipboard" size={24} color={COLORS.primary} />;
      case 'utensils':
        return <Ionicons name="restaurant-outline" size={24} color={COLORS.primary} />;
      case 'package-check':
        return <Feather name="check-circle" size={24} color={COLORS.primary} />;
      default:
        return <Feather name="activity" size={24} color={COLORS.primary} />;
    }
  };

  return (
    <View nativeID="process" style={styles.sectionWrapper}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerBox}>
          <View style={styles.kickerBadge}>
            <Text style={styles.kickerText}>{PROCESS_DATA.kicker}</Text>
          </View>
          <Text style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>
            {PROCESS_DATA.title}
          </Text>
        </View>

        {/* 3 Steps Row */}
        <View
          style={[
            styles.stepsRow,
            !isDesktop && styles.stepsColumn,
          ]}
        >
          {PROCESS_DATA.steps.map((stepItem, index) => (
            <React.Fragment key={stepItem.step}>
              <View
                style={[
                  styles.stepCard,
                  !isDesktop && styles.stepCardMobile,
                ]}
              >
                {/* Step Number + Icon Header */}
                <View style={styles.badgeHeader}>
                  <View style={styles.stepNumberBadge}>
                    <Text style={styles.stepNumberText}>{stepItem.step}</Text>
                  </View>
                  <View style={styles.iconCircle}>
                    {renderIcon(stepItem.icon)}
                  </View>
                </View>

                {/* Content */}
                <Text style={styles.stepTitle}>{stepItem.title}</Text>
                <Text style={styles.stepDescription}>{stepItem.description}</Text>
              </View>

              {/* Connecting arrow/divider between cards on desktop */}
              {isDesktop && index < PROCESS_DATA.steps.length - 1 && (
                <View style={styles.connectorWrapper}>
                  <View style={styles.connectorLine} />
                  <Feather name="chevron-right" size={20} color={COLORS.accent} />
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
  stepsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },
  stepsColumn: {
    flexDirection: 'column',
    gap: 28,
  },
  stepCard: {
    flex: 1,
    backgroundColor: COLORS.bgLight,
    padding: 28,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#E8EFEA',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
  },
  stepCardMobile: {
    width: '100%',
  },
  badgeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
  },
  stepNumberBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepNumberText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },
  iconCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E2EBE5',
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.textDark,
    marginBottom: 10,
  },
  stepDescription: {
    fontSize: 14,
    lineHeight: 22,
    color: COLORS.textSecondary,
  },
  connectorWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  connectorLine: {
    width: 24,
    height: 2,
    backgroundColor: '#DFECE3',
  },
});
