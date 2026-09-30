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
      case 'leaf':
        return <Ionicons name="leaf-outline" size={24} color={COLORS.primary} />;
      case 'sprout':
        return <Ionicons name="nutrition-outline" size={24} color={COLORS.primary} />;
      case 'star':
        return <Ionicons name="star-outline" size={24} color={COLORS.primary} />;
      case 'users':
        return <Feather name="users" size={22} color={COLORS.primary} />;
      default:
        return <Ionicons name="leaf-outline" size={24} color={COLORS.primary} />;
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
            <React.Fragment key={item.label}>
              <View style={styles.statCard}>
                <View style={styles.iconWrapper}>{renderIcon(item.icon)}</View>
                <View style={styles.textGroup}>
                  <Text style={styles.statValue}>{item.value}</Text>
                  <Text style={styles.statLabel}>{item.label}</Text>
                </View>
              </View>
              {index < STATS_DATA.length - 1 && !isMobile && (
                <View style={styles.verticalDivider} />
              )}
            </React.Fragment>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statsWrapper: {
    backgroundColor: '#F7F9F5',
    paddingVertical: 26,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#EAEFE8',
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
    gap: 20,
    alignItems: 'flex-start',
    paddingHorizontal: 16,
  },
  statCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  iconWrapper: {
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textGroup: {
    flexDirection: 'column',
  },
  statValue: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1D261C',
    letterSpacing: -0.3,
  },
  statLabel: {
    fontSize: 12,
    color: '#65766A',
    fontWeight: '500',
    marginTop: 1,
  },
  verticalDivider: {
    width: 1,
    height: 36,
    backgroundColor: '#DFE6DC',
  },
});
