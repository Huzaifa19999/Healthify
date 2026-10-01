import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { COLORS, FONTS } from '../constants/theme';
import { MEAL_PLANS_DATA } from '../constants/data';
import { useResponsive } from '../utils/responsive';

export default function MealPlansSection() {
  const { isDesktop, isTablet, isMobile } = useResponsive();
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectPlan = (planId) => {
    setSelectedPlan(planId);
    if (typeof window !== 'undefined') {
      const element = document.querySelector('#plans');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <View nativeID="services" className="bg-white py-[72px] border-b border-[#EAEFE8]">
      <View className="max-w-[1240px] w-full px-6 self-center">
        {/* Section Header: Left Title + Right Link */}
        <View className="flex-row justify-between items-end mb-9 flex-wrap gap-4">
          <View className="items-start">
            <Text className="text-[11px] font-bold text-[#485C31] tracking-[2px] mb-2 uppercase">
              OUR SERVICES
            </Text>
            <Text
              style={{ fontFamily: FONTS.serif }}
              className={`font-bold text-[#1D261C] tracking-tight ${isMobile ? 'text-2xl' : 'text-[32px]'}`}
            >
              Healthy Meal Plans for Every Lifestyle
            </Text>
          </View>

          <Pressable
            className="flex-row items-center gap-1.5 pb-1"
            onPress={() => handleSelectPlan('all')}
            accessibilityRole="link"
            accessibilityLabel="View All Services"
          >
            <Text className="text-[13px] font-semibold text-[#384628]">View All Services</Text>
            <Feather name="arrow-right" size={14} color="#384628" />
          </Pressable>
        </View>

        {/* 4 Cards Grid */}
        <View
          className={`${
            isMobile
              ? 'flex-col gap-5 items-center'
              : isTablet
              ? 'flex-row flex-wrap justify-center gap-5'
              : 'flex-row justify-between gap-5'
          }`}
        >
          {MEAL_PLANS_DATA.map((plan) => {
            const isSelected = selectedPlan === plan.id;

            return (
              <Pressable
                key={plan.id}
                onPress={() => handleSelectPlan(plan.id)}
                className={`bg-white rounded-[18px] overflow-hidden border ${
                  isSelected ? 'border-primary' : 'border-[#E2E8DF]'
                } ${isMobile ? 'w-full max-w-[380px]' : isTablet ? 'w-[47%]' : 'flex-1'}`}
                style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.04, shadowRadius: 10 }}
                accessibilityRole="button"
                accessibilityLabel={plan.title}
              >
                {/* Food Image */}
                <View className="w-full h-[150px] overflow-hidden">
                  <Image
                    source={{ uri: plan.image }}
                    className="w-full h-full"
                    resizeMode="cover"
                  />
                </View>

                {/* Content */}
                <View className="p-4 items-start relative">
                  <Text className="text-[15px] font-bold text-[#1D261C] mb-1.5 leading-5">{plan.title}</Text>
                  <Text className="text-xs leading-[18px] text-[#5A6B5F] mb-4">{plan.description}</Text>

                  {/* Circular Action Arrow Bottom Right */}
                  <View className="w-7 h-7 rounded-full bg-primary-light items-center justify-center self-end">
                    <Feather name="arrow-right" size={14} color="#384628" />
                  </View>
                </View>
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
}
