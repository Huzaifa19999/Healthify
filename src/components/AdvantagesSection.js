import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';
import { ADVANTAGES_DATA } from '../constants/data';
import { useResponsive } from '../utils/responsive';

export default function AdvantagesSection() {
  const { isDesktop, isMobile } = useResponsive();

  const renderCardIcon = (iconName) => {
    switch (iconName) {
      case 'award':
        return <Ionicons name="diamond-outline" size={26} color={COLORS.primary} />;
      case 'heart':
        return <Ionicons name="heart-outline" size={26} color={COLORS.primary} />;
      case 'truck':
        return <Feather name="truck" size={26} color={COLORS.primary} />;
      case 'calendar':
        return <Feather name="repeat" size={24} color={COLORS.primary} />;
      default:
        return <Feather name="check" size={24} color={COLORS.primary} />;
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
        <View style={[styles.contentRow, !isDesktop && styles.contentColumn]}>
          {/* Left Column: Heading and narrative */}
          <View style={[styles.textCol, !isDesktop && styles.textColFull]}>
            <View style={styles.kickerBadge}>
              <Text style={styles.kickerText}>{ADVANTAGES_DATA.kicker}</Text>
            </View>

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
              <Feather name="arrow-right" size={16} color={COLORS.textWhite} />
            </Pressable>
          </View>

          {/* Right Column: 2x2 Feature Grid */}
          <View style={[styles.gridCol, !isDesktop && styles.gridColFull]}>
            <View style={[styles.gridContainer, isMobile && styles.gridContainerMobile]}>
              {ADVANTAGES_DATA.items.map((item) => (
                <View
                  key={item.id}
                  style={[styles.advantageCard, isMobile && styles.advantageCardMobile]}
                >
                  <View style={styles.iconCircle}>{renderCardIcon(item.icon)}</View>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardDescription}>{item.description}</Text>
                </View>
              ))}
            </View>
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
  textCol: {
    flex: 0.9,
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
    marginBottom: 32,
    maxWidth: 460,
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
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
  gridCol: {
    flex: 1.1,
  },
  gridColFull: {
    width: '100%',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
  gridContainerMobile: {
    flexDirection: 'column',
    gap: 16,
  },
  advantageCard: {
    width: '47%',
    backgroundColor: COLORS.bgLight,
    padding: 24,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E8EFEA',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
  },
  advantageCardMobile: {
    width: '100%',
  },
  iconCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5EDE8',
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: COLORS.textDark,
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 13,
    lineHeight: 20,
    color: COLORS.textSecondary,
  },
});
