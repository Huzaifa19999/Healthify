import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';
import { NAV_LINKS } from '../constants/data';
import { useResponsive } from '../utils/responsive';

export default function Navbar() {
  const { isDesktop } = useResponsive();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkPress = (href) => {
    setActiveLink(href);
    setMobileMenuOpen(false);
    if (typeof window !== 'undefined') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <View className="bg-white border-b border-[#EAEFE8] w-full" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      <View className="max-w-[1240px] w-full px-6 h-[74px] flex-row items-center justify-between self-center">
        {/* Brand / Logo */}
        <Pressable
          className="flex-col items-center justify-center"
          onPress={() => handleLinkPress('#')}
          accessibilityRole="link"
          accessibilityLabel="Healthify Home"
        >
          <Text className="text-sm font-bold text-[#1D261C] leading-4 tracking-wide">صحتك</Text>
          <Text className="text-[11px] font-extrabold text-[#1D261C] tracking-[2px] -mt-0.5">HEALTHIFY</Text>
        </Pressable>

        {/* Desktop Navigation Links */}
        {isDesktop && (
          <View className="flex-row items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Pressable
                key={link.label}
                onPress={() => handleLinkPress(link.href)}
                className="py-2"
                accessibilityRole="link"
              >
                <Text
                  className={`text-[13.5px] font-medium tracking-[0.1px] ${
                    activeLink === link.href ? 'text-primary font-bold' : 'text-[#38463B]'
                  }`}
                >
                  {link.label}
                </Text>
              </Pressable>
            ))}
          </View>
        )}

        {/* Header Right Actions */}
        <View className="flex-row items-center gap-3">
          <Pressable
            className="flex-row items-center gap-2 bg-primary py-2.5 px-5 rounded-full"
            onPress={() => handleLinkPress('#plans')}
            accessibilityRole="button"
            accessibilityLabel="Get Started"
          >
            <Text className="text-white text-[13.5px] font-semibold tracking-[0.2px]">Get Started</Text>
            <Feather name="arrow-right" size={16} color="#FFFFFF" />
          </Pressable>

          {/* Mobile Menu Toggle Button */}
          {!isDesktop && (
            <Pressable
              className="p-1.5 rounded-lg bg-bg-light"
              onPress={toggleMobileMenu}
              accessibilityRole="button"
              accessibilityLabel="Toggle Menu"
            >
              <Ionicons
                name={mobileMenuOpen ? 'close' : 'menu'}
                size={26}
                color={COLORS.primary}
              />
            </Pressable>
          )}
        </View>
      </View>

      {/* Mobile Drawer Menu */}
      {!isDesktop && mobileMenuOpen && (
        <View className="bg-white border-t border-[#E2E8DF] px-6 py-4 shadow-md">
          {NAV_LINKS.map((link) => (
            <Pressable
              key={link.label}
              onPress={() => handleLinkPress(link.href)}
              className="flex-row justify-between items-center py-3.5 border-b border-[#F2F6F3]"
            >
              <Text className="text-[15px] font-semibold text-[#2B382D]">{link.label}</Text>
              <Feather name="chevron-right" size={16} color={COLORS.textLight} />
            </Pressable>
          ))}
          <View className="mt-4 gap-3">
            <View className="flex-row items-center gap-2">
              <Feather name="globe" size={16} color={COLORS.textSecondary} />
              <Text className="text-[13px] text-[#5A6B5F] font-medium">Language: English (EN)</Text>
            </View>
            <Pressable
              className="flex-row items-center justify-center gap-2 bg-primary py-3 rounded-[25px] mt-1.5"
              onPress={() => handleLinkPress('#plans')}
            >
              <Text className="text-white text-[15px] font-semibold">Explore Plans</Text>
              <Feather name="arrow-right" size={16} color="#FFFFFF" />
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
}
