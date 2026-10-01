import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
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
    <View className="bg-[#F7F9F5] py-6 border-t border-b border-[#EAEFE8]">
      <View className="max-w-[1240px] w-full px-6 self-center">
        <View
          className={`${
            isMobile
              ? 'flex-col gap-5 items-start px-4'
              : isTablet
              ? 'flex-row flex-wrap gap-5 justify-around'
              : 'flex-row items-center justify-between'
          }`}
        >
          {STATS_DATA.map((item, index) => (
            <React.Fragment key={item.label}>
              <View className="flex-row items-center gap-3.5 py-1.5 px-3">
                <View className="w-[38px] h-[38px] items-center justify-center">
                  {renderIcon(item.icon)}
                </View>
                <View className="flex-col">
                  <Text className="text-2xl font-extrabold text-[#1D261C] tracking-tight">{item.value}</Text>
                  <Text className="text-xs text-[#65766A] font-medium mt-px">{item.label}</Text>
                </View>
              </View>
              {index < STATS_DATA.length - 1 && !isMobile && (
                <View className="w-px h-9 bg-[#DFE6DC]" />
              )}
            </React.Fragment>
          ))}
        </View>
      </View>
    </View>
  );
}
