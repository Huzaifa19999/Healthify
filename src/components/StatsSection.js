import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons, Feather, FontAwesome5 } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';
import { STATS_DATA } from '../constants/data';
import { useResponsive } from '../utils/responsive';

export default function StatsSection() {
  const { isMobile, isTablet } = useResponsive();

  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'utensils':
        return <Ionicons name="restaurant-outline" size={24} color={COLORS.primary} />;
      case 'users':
        return <Feather name="users" size={24} color={COLORS.primary} />;
      case 'star':
        return <Ionicons name="star-outline" size={24} color={COLORS.starGold} />;
      case 'book-open':
        return <Feather name="book-open" size={24} color={COLORS.primary} />;
      default:
        return <Feather name="check" size={24} color={COLORS.primary} />;
    }
  };

  return (
    <View style={styles.statsWrapper}>
      <View style={styles.container}>
        <View
          style={[
            styles.statsGrid,
            isMobile && styles.statsGridMobile,
            isTablet && styles.statsGridTablet,
          ]}
        >
          {STATS_DATA.map((item, index) => (
            <View
              key={item.label}
              style={[
                styles.statCard,
                index < STATS_DATA.length - 1 && !isMobile && styles.statCardBorder,
              ]}
            >
              <View style={styles.iconCircle}>{renderIcon(item.icon)}</View>
              <Text style={styles.statValue}>{item.value}</Text>
              <Text style={styles.statLabel}>{item.label}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statsWrapper: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 36,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderLight,
  },
  container: {
    maxWidth: 1240,
    marginHorizontal: 'auto',
    width: '100%',
    paddingHorizontal: 24,
  },
  statsGrid: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statsGridTablet: {
    flexWrap: 'wrap',
    gap: 20,
    justifyContent: 'space-around',
  },
  statsGridMobile: {
    flexDirection: 'column',
    gap: 24,
    alignItems: 'center',
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  statCardBorder: {
    borderRightWidth: 1,
    borderRightColor: '#EDF2EE',
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.bgLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  statValue: {
    fontSize: 32,
    fontWeight: '900',
    color: COLORS.textDark,
    marginBottom: 4,
    letterSpacing: -0.5,
  },
  statLabel: {
    fontSize: 14,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
});
