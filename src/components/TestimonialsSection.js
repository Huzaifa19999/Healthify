import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { FONTS } from '../constants/theme';
import { TESTIMONIALS_DATA } from '../constants/data';
import { useResponsive } from '../utils/responsive';

export default function TestimonialsSection() {
  const { isTablet, isMobile } = useResponsive();

  return (
    <View className="bg-white py-[72px] border-b border-[#EAEFE8]">
      <View className="max-w-[1240px] w-full px-6 self-center">
        {/* Header: Left Title + Right Link */}
        <View className="flex-row justify-between items-end mb-9 flex-wrap gap-4">
          <View className="items-start">
            <Text className="text-[11px] font-bold text-[#485C31] tracking-[2px] mb-2 uppercase">
              {TESTIMONIALS_DATA.kicker}
            </Text>
            <Text
              style={{ fontFamily: FONTS.serif }}
              className={`font-bold text-[#1D261C] tracking-tight ${isMobile ? 'text-2xl' : 'text-[32px]'}`}
            >
              {TESTIMONIALS_DATA.title}
            </Text>
          </View>

          <Pressable
            className="flex-row items-center gap-1.5 pb-1"
            accessibilityRole="link"
            accessibilityLabel={TESTIMONIALS_DATA.linkText}
          >
            <Text className="text-[13px] font-semibold text-[#384628]">{TESTIMONIALS_DATA.linkText}</Text>
            <Feather name="arrow-right" size={14} color="#384628" />
          </Pressable>
        </View>

        {/* 3 Review Cards */}
        <View
          className={`${
            isMobile
              ? 'flex-col items-center gap-4'
              : isTablet
              ? 'flex-row flex-wrap justify-center gap-5'
              : 'flex-row justify-between gap-5'
          }`}
        >
          {TESTIMONIALS_DATA.reviews.map((item) => (
            <View
              key={item.id}
              className={`bg-white p-[22px] rounded-[18px] border border-[#E2E8DF] justify-between ${
                isMobile ? 'w-full max-w-[380px]' : isTablet ? 'w-[48%]' : 'flex-1'
              }`}
              style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.03, shadowRadius: 8 }}
            >
              {/* Quote */}
              <Text className="text-[13.5px] leading-[22px] text-[#2B382D] mb-6">{item.review}</Text>

              {/* Bottom Row: User Avatar/Name on left, Stars on right */}
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center gap-2.5">
                  <Image
                    source={{ uri: item.avatar }}
                    className="w-9 h-9 rounded-full"
                    accessibilityLabel={item.name}
                  />
                  <View className="flex-col">
                    <Text className="text-[13.5px] font-bold text-[#1D261C]">{item.name}</Text>
                    <Text className="text-[11px] text-[#65766A] mt-px">{item.location}</Text>
                  </View>
                </View>

                {/* 5 Stars Rating on bottom right */}
                <View className="flex-row items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FontAwesome
                      key={star}
                      name="star"
                      size={12}
                      color="#EBA525"
                      style={{ marginLeft: 2 }}
                    />
                  ))}
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
