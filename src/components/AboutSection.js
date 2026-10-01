import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { COLORS, FONTS } from '../constants/theme';
import { ABOUT_DATA } from '../constants/data';
import { useResponsive } from '../utils/responsive';

export default function AboutSection() {
  const { isDesktop, isMobile } = useResponsive();

  const handleScrollToServices = () => {
    if (typeof window !== 'undefined') {
      const element = document.querySelector('#services');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const renderFeatureIcon = (iconName) => {
    switch (iconName) {
      case 'leaf':
        return <Ionicons name="leaf-outline" size={17} color={COLORS.primary} />;
      case 'scale':
        return <Ionicons name="scale-outline" size={17} color={COLORS.primary} />;
      case 'heart':
        return <Ionicons name="heart-outline" size={17} color={COLORS.primary} />;
      default:
        return <Ionicons name="checkmark" size={17} color={COLORS.primary} />;
    }
  };

  return (
    <View nativeID="about" className="bg-white py-20 relative overflow-hidden">
      {/* Decorative leaf branch watermark on the right */}
      <View className="absolute -right-10 top-10 opacity-80" style={{ pointerEvents: 'none' }}>
        <Ionicons name="leaf-outline" size={260} color="rgba(76, 97, 52, 0.03)" />
      </View>

      <View className="max-w-[1240px] w-full px-6 self-center">
        <View className={`${isDesktop ? 'flex-row items-center justify-between gap-14' : 'flex-col gap-10'}`}>
          {/* Left Visual Column: 2 Overlapping Photos + Floating Badge */}
          <View className={`${isDesktop ? 'flex-1' : 'w-full'} items-center`}>
            <View className="relative w-[480px] h-[380px] max-w-full">
              {/* Main Top Bowl Photo */}
              <View
                className="absolute top-0 right-0 w-[330px] h-[250px] rounded-[22px] overflow-hidden"
                style={{ shadowColor: '#1A3320', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.12, shadowRadius: 18 }}
              >
                <Image
                  source={{ uri: ABOUT_DATA.mainImage }}
                  className="w-full h-full"
                  resizeMode="cover"
                  accessibilityLabel="Fresh nutritious healthy meal"
                />
              </View>

              {/* Smaller Bottom-Left Salad Prep Photo */}
              <View
                className="absolute bottom-5 left-0 w-[220px] h-[190px] rounded-[20px] overflow-hidden border-4 border-white"
                style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.14, shadowRadius: 20 }}
              >
                <Image
                  source={{ uri: ABOUT_DATA.subImage }}
                  className="w-full h-full"
                  resizeMode="cover"
                  accessibilityLabel="Hands preparing fresh organic salad"
                />
              </View>

              {/* Overlapping Pill Badge */}
              <View
                className="absolute bottom-[60px] left-[170px] bg-white py-2 px-4 rounded-[20px] flex-row items-center gap-2.5 border border-[#E8EFE5]"
                style={{ zIndex: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.12, shadowRadius: 14 }}
              >
                <View className="w-8 h-8 rounded-full bg-accent-light items-center justify-center">
                  <Ionicons name="leaf" size={15} color={COLORS.primary} />
                </View>
                <View>
                  <Text className="text-[11.5px] font-bold text-[#1D261C] leading-[14px]">Nourishing</Text>
                  <Text className="text-[11.5px] font-bold text-[#1D261C] leading-[14px]">Lives Daily</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Right Text Column */}
          <View className={`${isDesktop ? 'flex-1' : 'w-full'} items-start`}>
            {/* Kicker */}
            <Text className="text-[11px] font-bold text-[#485C31] tracking-[2px] mb-3 uppercase">
              {ABOUT_DATA.kicker}
            </Text>

            {/* Title */}
            <Text
              style={{ fontFamily: FONTS.serif }}
              className={`font-bold text-[#1D261C] tracking-tight mb-4 ${isMobile ? 'text-[30px] leading-9' : 'text-[40px] leading-[46px]'}`}
            >
              {ABOUT_DATA.title}
            </Text>

            {/* Paragraph */}
            <Text className="text-[14.5px] leading-6 text-[#55655A] mb-7 max-w-[500px]">
              {ABOUT_DATA.description}
            </Text>

            {/* 3 Features in Row with Circular Outline Icons */}
            <View className="flex-row items-center gap-5 mb-8 flex-wrap">
              {ABOUT_DATA.features.map((feature) => (
                <View key={feature.label} className="flex-row items-center gap-2">
                  <View className="w-[30px] h-[30px] rounded-full border border-[#D4DDD1] items-center justify-center bg-white">
                    {renderFeatureIcon(feature.icon)}
                  </View>
                  <Text className="text-[12.5px] font-semibold text-[#2B382D]">{feature.label}</Text>
                </View>
              ))}
            </View>

            {/* CTA Button */}
            <Pressable
              className="flex-row items-center gap-2 bg-primary py-3 px-6 rounded-2xl"
              onPress={handleScrollToServices}
              accessibilityRole="button"
              accessibilityLabel={ABOUT_DATA.buttonText}
              style={{ shadowColor: COLORS.primary, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.16, shadowRadius: 8 }}
            >
              <Text className="text-white text-[13.5px] font-semibold tracking-[0.2px]">{ABOUT_DATA.buttonText}</Text>
              <Feather name="arrow-right" size={15} color="#FFFFFF" />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
