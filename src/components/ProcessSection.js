import React from 'react';
import { View, Text, Pressable } from 'react-native';
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
    <View nativeID="process" className="bg-white py-[72px] border-b border-[#EAEFE8]">
      <View className="max-w-[1240px] w-full px-6 self-center">
        {/* Header: Left Title + Right Link */}
        <View className="flex-row justify-between items-end mb-11 flex-wrap gap-4">
          <View className="items-start">
            <Text className="text-[11px] font-bold text-[#485C31] tracking-[2px] mb-2 uppercase">
              {PROCESS_DATA.kicker}
            </Text>
            <Text
              style={{ fontFamily: FONTS.serif }}
              className={`font-bold text-[#1D261C] tracking-tight ${isMobile ? 'text-2xl' : 'text-[32px]'}`}
            >
              {PROCESS_DATA.title}
            </Text>
          </View>

          <Pressable
            className="flex-row items-center gap-1.5 pb-1"
            accessibilityRole="link"
            accessibilityLabel={PROCESS_DATA.linkText}
          >
            <Text className="text-[13px] font-semibold text-[#384628]">{PROCESS_DATA.linkText}</Text>
            <Feather name="arrow-right" size={14} color="#384628" />
          </Pressable>
        </View>

        {/* 3 Steps Row */}
        <View
          className={`${
            isDesktop
              ? 'flex-row items-center justify-between gap-5'
              : 'flex-col gap-8 items-start'
          }`}
        >
          {PROCESS_DATA.steps.map((stepItem, index) => (
            <React.Fragment key={stepItem.step}>
              <View className={`${isDesktop ? 'flex-1' : 'w-full'} items-start`}>
                {/* Number Circle + Icon Row */}
                <View className="flex-row items-center gap-3 mb-4">
                  <View className="w-8 h-8 rounded-full bg-[#E0EAD9] items-center justify-center">
                    <Text className="text-[#384628] text-sm font-extrabold">{stepItem.step}</Text>
                  </View>
                  <View className="w-[38px] h-[38px] items-center justify-center">
                    {renderIcon(stepItem.icon)}
                  </View>
                </View>

                {/* Content */}
                <Text className="text-base font-bold text-[#1D261C] mb-1.5">{stepItem.title}</Text>
                <Text className="text-[12.5px] leading-[18px] text-[#5A6B5F] max-w-[240px]">
                  {stepItem.description}
                </Text>
              </View>

              {/* Connecting arrow between steps on desktop */}
              {isDesktop && index < PROCESS_DATA.steps.length - 1 && (
                <View className="px-2 items-center justify-center">
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
