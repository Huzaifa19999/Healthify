import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { COLORS, FONTS } from '../constants/theme';
import { HERO_DATA } from '../constants/data';
import { useResponsive } from '../utils/responsive';

export default function HeroSection() {
  const { isDesktop, isMobile } = useResponsive();

  const handleScroll = (id) => {
    if (typeof window !== 'undefined') {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <View className="bg-[#F9FAF7] pt-14 pb-16 relative overflow-hidden">
      {/* Decorative leaf branch corner watermarks */}
      <View className="absolute -top-5 -left-8 opacity-70" style={{ pointerEvents: 'none' }}>
        <Ionicons name="leaf-outline" size={140} color="rgba(76, 97, 52, 0.04)" />
      </View>
      <View className="absolute -top-8 -right-8 opacity-60" style={{ pointerEvents: 'none' }}>
        <Ionicons name="leaf-outline" size={180} color="rgba(76, 97, 52, 0.04)" />
      </View>

      <View className="max-w-[1240px] w-full px-6 self-center">
        <View className={`${isDesktop ? 'flex-row items-center justify-between gap-10' : 'flex-col gap-11'}`}>
          {/* Left Column: Headlines & Features */}
          <View className={`${isDesktop ? 'flex-1' : 'w-full'} items-start`} style={{ zIndex: 2 }}>
            {/* Serif Big Headline */}
            <Text
              style={{ fontFamily: FONTS.serif }}
              className={`font-bold text-[#1D261C] mb-4 tracking-tight ${isMobile ? 'text-[36px] leading-[42px]' : 'text-[52px] leading-[58px]'}`}
            >
              {HERO_DATA.headlinePart1}
              {'\n'}
              {HERO_DATA.headlinePart2}
            </Text>

            {/* Subheading */}
            <Text className="text-[16.5px] font-bold text-[#263428] mb-3 tracking-[0.1px]">
              {HERO_DATA.subheading}
            </Text>

            {/* Paragraph */}
            <Text className="text-[14.5px] leading-6 text-[#55655A] mb-8 max-w-[480px]">
              {HERO_DATA.description}
            </Text>

            {/* CTA Buttons */}
            <View className="flex-row items-center gap-3.5 mb-9 flex-wrap">
              <Pressable
                className="flex-row items-center gap-2 bg-primary py-3 px-6 rounded-2xl shadow-md"
                onPress={() => handleScroll('#plans')}
                accessibilityRole="button"
                accessibilityLabel="Explore Meal Plans"
              >
                <Text className="text-white text-sm font-semibold tracking-[0.2px]">{HERO_DATA.ctaPrimary}</Text>
                <Feather name="arrow-right" size={16} color="#FFFFFF" />
              </Pressable>

              <Pressable
                className="py-3 px-6 rounded-2xl bg-white border border-[#D4DDD1]"
                onPress={() => handleScroll('#about')}
                accessibilityRole="button"
                accessibilityLabel="Learn More"
              >
                <Text className="text-[#2B382D] text-sm font-semibold">{HERO_DATA.ctaSecondary}</Text>
              </Pressable>
            </View>

            {/* 3 Horizontal Badges */}
            <View className="flex-row items-center gap-5 flex-wrap">
              <View className="flex-row items-center gap-1.5">
                <Ionicons name="leaf-outline" size={16} color={COLORS.primary} />
                <Text className="text-[12.5px] font-medium text-[#475549]">Fresh Ingredients</Text>
              </View>
              <View className="flex-row items-center gap-1.5">
                <Ionicons name="shield-checkmark-outline" size={16} color={COLORS.primary} />
                <Text className="text-[12.5px] font-medium text-[#475549]">Nutritionist Approved</Text>
              </View>
              <View className="flex-row items-center gap-1.5">
                <Ionicons name="car-outline" size={16} color={COLORS.primary} />
                <Text className="text-[12.5px] font-medium text-[#475549]">Delivered to Your Door</Text>
              </View>
            </View>
          </View>

          {/* Right Column: Circular Food Bowl + Script + Floating Badge */}
          <View
            className={`${isDesktop ? 'flex-1' : 'w-full mt-2.5'} items-center justify-center`}
            style={{ zIndex: 2 }}
          >
            <View className="relative w-[440px] h-[440px] max-w-full items-center justify-center">
              {/* Handwritten script note */}
              <View
                className="absolute top-2.5 left-2.5 items-center"
                style={{ zIndex: 10, transform: [{ rotate: '-8deg' }] }}
              >
                <Text style={{ fontFamily: FONTS.script }} className="text-2xl font-bold text-[#556B3A] leading-6 text-center">
                  {HERO_DATA.scriptText}
                </Text>
                <Ionicons
                  name="arrow-down"
                  size={16}
                  color="#556B3A"
                  style={{ marginTop: 2, transform: [{ rotate: '-25deg' }] }}
                />
              </View>

              {/* Main Food Bowl Image */}
              <View
                className="w-[390px] h-[390px] max-w-[92%] rounded-[200px] overflow-hidden bg-[#EAEFE7] border-[6px] border-white"
                style={{ maxHeight: 390, shadowColor: '#1A3320', shadowOffset: { width: 0, height: 16 }, shadowOpacity: 0.16, shadowRadius: 28 }}
              >
                <Image
                  source={{ uri: HERO_DATA.heroImage }}
                  className="w-full h-full"
                  resizeMode="cover"
                  accessibilityLabel="Fresh gourmet chicken salad bowl"
                />
              </View>

              {/* Floating Badge (Bottom Right) */}
              <View
                className="absolute -bottom-6 -right-3 bg-white py-2.5 px-4 rounded-2xl flex-row items-center gap-3 border border-[#E8EFE5]"
                style={{ zIndex: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.1, shadowRadius: 16 }}
              >
                <View className="w-[34px] h-[34px] rounded-full bg-accent-light items-center justify-center">
                  <Ionicons name="leaf" size={16} color={COLORS.primary} />
                </View>
                <View>
                  <Text className="text-[13px] font-bold text-[#1D261C]">{HERO_DATA.floatingBadge.title}</Text>
                  <Text className="text-[11px] text-[#697A6E] font-medium">{HERO_DATA.floatingBadge.subtitle}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
