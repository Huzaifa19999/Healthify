import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS } from '../constants/theme';
import { ADVANTAGES_DATA } from '../constants/data';
import { useResponsive } from '../utils/responsive';

export default function AdvantagesSection() {
  const { isMobile } = useResponsive();

  const renderCardIcon = (iconName) => {
    switch (iconName) {
      case 'diamond':
        return <Ionicons name="diamond-outline" size={24} color={COLORS.primary} />;
      case 'heart':
        return <Ionicons name="heart-outline" size={24} color={COLORS.primary} />;
      case 'truck':
        return <Feather name="truck" size={22} color={COLORS.primary} />;
      case 'leaf':
        return <Ionicons name="leaf-outline" size={24} color={COLORS.primary} />;
      default:
        return <Ionicons name="checkmark" size={22} color={COLORS.primary} />;
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
    <View nativeID="advantages" className="bg-[#F2F5EE] py-20">
      <View className="max-w-[1240px] w-full px-6 self-center">
        <View className={`${isMobile ? 'flex-col items-start gap-9' : 'flex-row items-center gap-10'}`}>
          {/* Left / Top Narrative Area */}
          <View className={`${isMobile ? 'w-full' : 'w-[300px]'} items-start flex-shrink-0`}>
            <Text className="text-[11px] font-bold text-[#485C31] tracking-[2px] mb-2.5 uppercase">
              {ADVANTAGES_DATA.kicker}
            </Text>

            <Text
              style={{ fontFamily: FONTS.serif }}
              className={`font-bold text-[#1D261C] tracking-tight mb-4 ${
                isMobile ? 'text-[28px] leading-[34px]' : 'text-[36px] leading-11'
              }`}
            >
              {ADVANTAGES_DATA.title}
            </Text>

            <Text className="text-[14.5px] leading-6 text-[#5A6B5F] mb-7">
              {ADVANTAGES_DATA.description}
            </Text>

            <Pressable
              className="flex-row items-center gap-2 bg-primary py-3 px-6 rounded-2xl"
              onPress={handleScroll}
              accessibilityRole="button"
              accessibilityLabel={ADVANTAGES_DATA.buttonText}
              style={{ shadowColor: COLORS.primary, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.16, shadowRadius: 8 }}
            >
              <Text className="text-white text-[13.5px] font-semibold tracking-[0.2px]">
                {ADVANTAGES_DATA.buttonText}
              </Text>
              <Feather name="arrow-right" size={15} color="#FFFFFF" />
            </Pressable>
          </View>

          {/* Right / Static Horizontal Card Row */}
          <View className="flex-1 flex-row flex-wrap gap-4 w-full">
            {ADVANTAGES_DATA.items.map((item) => (
              <View
                key={item.id}
                className="flex-1 min-w-[180px] bg-white py-6 px-4 rounded-[18px] border border-[#E2E8DF] items-start"
                style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.03, shadowRadius: 8 }}
              >
                <View className="w-[46px] h-[46px] rounded-full bg-bg-light items-center justify-center mb-4">
                  {renderCardIcon(item.icon)}
                </View>
                <Text className="text-[14.5px] font-bold text-[#1D261C] mb-1.5">{item.title}</Text>
                <Text className="text-xs leading-[18px] text-[#65766A]">{item.description}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}