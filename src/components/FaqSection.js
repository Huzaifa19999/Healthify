import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { COLORS, FONTS } from '../constants/theme';
import { FAQS_DATA } from '../constants/data';
import { useResponsive } from '../utils/responsive';

export default function FaqSection() {
  const { isDesktop, isMobile } = useResponsive();
  const [openIds, setOpenIds] = useState({});

  const toggleFaq = (id) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <View className="bg-white py-20">
      <View className="max-w-[1240px] w-full px-6 self-center">
        <View
          className={`${
            isDesktop
              ? 'flex-row items-start justify-between gap-14'
              : 'flex-col gap-10'
          }`}
        >
          {/* Left Column: Heading, description, and View All FAQs button */}
          <View className={`${isDesktop ? 'flex-[0.9]' : 'w-full'} items-start`}>
            <Text className="text-[11px] font-bold text-[#485C31] tracking-[2px] mb-2.5 uppercase">
              {FAQS_DATA.kicker}
            </Text>

            <Text
              style={{ fontFamily: FONTS.serif }}
              className={`font-bold text-[#1D261C] tracking-tight mb-4 ${
                isMobile ? 'text-[28px] leading-[34px]' : 'text-[38px] leading-[46px]'
              }`}
            >
              {FAQS_DATA.title}
            </Text>

            <Text className="text-[14.5px] leading-6 text-[#5A6B5F] mb-7 max-w-[440px]">
              {FAQS_DATA.description}
            </Text>

            <Pressable
              className="flex-row items-center gap-2 bg-primary py-3 px-6 rounded-2xl"
              accessibilityRole="link"
              accessibilityLabel="View All FAQs"
              style={{ shadowColor: COLORS.primary, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.16, shadowRadius: 8 }}
            >
              <Text className="text-[13.5px] font-semibold text-white tracking-[0.2px]">{FAQS_DATA.buttonText}</Text>
              <Feather name="arrow-right" size={15} color="#FFFFFF" />
            </Pressable>
          </View>

          {/* Right Column: Accordion List with plus sign */}
          <View className={`${isDesktop ? 'flex-[1.1]' : 'w-full'}`}>
            <View className="gap-3">
              {FAQS_DATA.items.map((item) => {
                const isOpen = !!openIds[item.id];

                return (
                  <View
                    key={item.id}
                    className={`rounded-[14px] border overflow-hidden ${
                      isOpen
                        ? 'bg-white border-[#D4DDD1]'
                        : 'bg-[#F8FAF6] border-[#E6ECE2]'
                    }`}
                  >
                    <Pressable
                      className="flex-row items-center justify-between py-4 px-5"
                      onPress={() => toggleFaq(item.id)}
                      accessibilityRole="button"
                      accessibilityLabel={item.question}
                    >
                      <Text className="text-sm font-semibold text-[#1D261C] flex-1 mr-3">
                        {item.question}
                      </Text>
                      <Feather
                        name={isOpen ? 'minus' : 'plus'}
                        size={18}
                        color="#65766A"
                      />
                    </Pressable>

                    {isOpen && (
                      <View className="px-5 pb-4 pt-0">
                        <Text className="text-[13px] leading-[22px] text-[#5A6B5F]">{item.answer}</Text>
                      </View>
                    )}
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
