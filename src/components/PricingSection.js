import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS } from '../constants/theme';
import { PRICING_DATA, PRICING_SIDE_CARD } from '../constants/data';
import { useResponsive } from '../utils/responsive';

export default function PricingSection() {
  const { isDesktop, isTablet, isMobile } = useResponsive();
  const [selectedPlanId, setSelectedPlanId] = useState('price-2');

  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'compass':
      case 'leaf':
        return <Ionicons name="leaf-outline" size={20} color={COLORS.primary} />;
      case 'award':
        return <Ionicons name="ribbon-outline" size={20} color={COLORS.primary} />;
      case 'bar-chart':
        return <Ionicons name="bar-chart-outline" size={20} color={COLORS.primary} />;
      default:
        return <Ionicons name="checkmark-circle-outline" size={20} color={COLORS.primary} />;
    }
  };

  return (
    <View nativeID="plans" className="bg-white py-[72px] border-b border-[#EAEFE8]">
      <View className="max-w-[1240px] w-full px-6 self-center">
        {/* Top Header: Left Title + Right Link */}
        <View className="flex-row justify-between items-end mb-9 flex-wrap gap-4">
          <View className="items-start">
            <Text className="text-[11px] font-bold text-[#485C31] tracking-[2px] mb-2 uppercase">
              GROWTH PLANS
            </Text>
            <Text
              style={{ fontFamily: FONTS.serif }}
              className={`font-bold text-[#1D261C] tracking-tight ${isMobile ? 'text-2xl' : 'text-[32px]'}`}
            >
              Find the Perfect Plan for You
            </Text>
          </View>

          <Pressable
            className="flex-row items-center gap-1.5 pb-1"
            accessibilityRole="link"
            accessibilityLabel="View All Plans"
          >
            <Text className="text-[13px] font-semibold text-[#384628]">View All Plans</Text>
            <Feather name="arrow-right" size={14} color="#384628" />
          </Pressable>
        </View>

        {/* 4 Cards Row: 3 Pricing Plans + 1 Promo Card */}
        <View
          className={`${
            isMobile
              ? 'flex-col items-center gap-0'
              : !isDesktop
              ? 'flex-row flex-wrap justify-center gap-[18px]'
              : 'flex-row justify-between gap-[18px]'
          }`}
        >
          {PRICING_DATA.map((plan) => {
            const isPopular = plan.popular;

            return (
              <View
                key={plan.id}
                className={`bg-white rounded-[18px] overflow-hidden relative ${
                  isPopular ? 'border border-[#384628]' : 'border border-[#E2E8DF]'
                } ${isMobile ? 'w-full max-w-[340px] mb-4' : isTablet ? 'w-[48%] mb-4' : 'flex-1'}`}
                style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.04, shadowRadius: 10 }}
              >
                {/* Popular Top Full Banner */}
                {isPopular && (
                  <View className="bg-[#384628] py-[7px] items-center justify-center w-full">
                    <Text className="text-white text-[10.5px] font-bold tracking-[0.8px]">{plan.badge}</Text>
                  </View>
                )}

                <View className={`p-5 flex-1 justify-between ${isPopular ? 'pt-4' : ''}`}>
                  {/* Top Icon */}
                  <View className="w-8 h-8 mb-3 justify-center">
                    {renderIcon(plan.icon)}
                  </View>

                  {/* Title & Subtitle */}
                  <Text className="text-[16.5px] font-bold text-[#1D261C] mb-1">{plan.name}</Text>
                  <Text className="text-[11.5px] leading-4 text-[#65766A] mb-3.5 min-h-[32px]">{plan.subtitle}</Text>

                  {/* Price */}
                  <View className="flex-row items-baseline mb-4">
                    <Text className="text-[22px] font-extrabold text-[#1D261C] tracking-tight">{plan.price}</Text>
                    <Text className="text-xs text-[#65766A] font-medium ml-1">{plan.period}</Text>
                  </View>

                  {/* Features List */}
                  <View className="gap-2.5 mb-6 flex-1">
                    {plan.features.map((feature, fIndex) => (
                      <View key={fIndex} className="flex-row items-center gap-2">
                        <Feather name="check" size={13} color="#4C6134" />
                        <Text className="text-xs text-[#344437] leading-4">{feature}</Text>
                      </View>
                    ))}
                  </View>

                  {/* Button */}
                  <Pressable
                    className={`py-2.5 rounded-[10px] items-center justify-center w-full ${
                      isPopular
                        ? 'bg-[#384628]'
                        : 'bg-white border border-[#384628]'
                    }`}
                    onPress={() => setSelectedPlanId(plan.id)}
                    accessibilityRole="button"
                    accessibilityLabel={plan.buttonText}
                  >
                    <Text
                      className={`text-[13px] font-semibold ${
                        isPopular ? 'text-white' : 'text-[#384628]'
                      }`}
                    >
                      {plan.buttonText}
                    </Text>
                  </Pressable>
                </View>
              </View>
            );
          })}

          {/* Rightmost Visual Image Card: "Invest in a Healthier You" */}
          <View
            className={`rounded-[18px] overflow-hidden relative ${
              isMobile ? 'w-full max-w-[340px] min-h-[320px]' : isTablet ? 'w-[48%] min-h-[360px]' : 'flex-1 min-h-[360px]'
            }`}
            style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.08, shadowRadius: 10 }}
          >
            <Image
              source={{ uri: PRICING_SIDE_CARD.image }}
              className="w-full h-full absolute"
              resizeMode="cover"
            />
            <View
              className="absolute inset-0 p-6 justify-center items-center"
              style={{ backgroundColor: 'rgba(23, 31, 20, 0.68)' }}
            >
              <View className="items-center">
                <Ionicons name="leaf-outline" size={26} color="#FFFFFF" style={{ marginBottom: 12, opacity: 0.9 }} />
                <Text
                  style={{ fontFamily: FONTS.serif }}
                  className="text-2xl font-bold text-white text-center leading-8 tracking-tight"
                >
                  Invest in{'\n'}a Healthier{'\n'}You
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
