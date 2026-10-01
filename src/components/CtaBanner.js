import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { FONTS } from '../constants/theme';
import { CTA_DATA } from '../constants/data';
import { useResponsive } from '../utils/responsive';

export default function CtaBanner() {
  const { isDesktop, isMobile } = useResponsive();

  const handleCtaPress = () => {
    if (typeof window !== 'undefined') {
      const element = document.querySelector('#plans');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <View className="bg-primary py-14 relative overflow-hidden w-full">
      {/* Decorative leaf watermarks on left and right */}
      <View className="absolute -left-5 -top-5 opacity-60" style={{ pointerEvents: 'none' }}>
        <Ionicons name="leaf" size={130} color="rgba(255, 255, 255, 0.05)" />
      </View>
      <View className="absolute -right-5 -bottom-5 opacity-60" style={{ pointerEvents: 'none' }}>
        <Ionicons name="leaf" size={150} color="rgba(255, 255, 255, 0.05)" />
      </View>

      <View className="max-w-[1240px] w-full px-6 self-center" style={{ zIndex: 2 }}>
        <View
          className={`${
            isDesktop
              ? 'flex-row items-center justify-between gap-8'
              : 'flex-col items-start gap-6'
          }`}
        >
          {/* Left Side: Headline & Subtitle */}
          <View className={`${isDesktop ? 'flex-1' : 'w-full'} items-start`}>
            <Text className="text-[10.5px] font-bold text-[#CAD8B8] tracking-[2px] mb-2 uppercase">
              {CTA_DATA.kicker}
            </Text>
            <Text
              style={{ fontFamily: FONTS.serif }}
              className={`font-bold text-white tracking-tight mb-1.5 ${isMobile ? 'text-[22px]' : 'text-[28px]'}`}
            >
              {CTA_DATA.headline}
            </Text>
            <Text className="text-[13px] text-[#DFE7D6] leading-5">{CTA_DATA.subheadline}</Text>
          </View>

          {/* Right Side: White Pill CTA Button */}
          <Pressable
            className="flex-row items-center gap-2 bg-white py-3 px-6 rounded-full"
            onPress={handleCtaPress}
            accessibilityRole="button"
            accessibilityLabel={CTA_DATA.buttonText}
            style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.15, shadowRadius: 8 }}
          >
            <Text className="text-[#384628] text-[13.5px] font-bold">{CTA_DATA.buttonText}</Text>
            <Feather name="arrow-right" size={15} color="#384628" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
