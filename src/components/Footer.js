import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Feather, Ionicons, FontAwesome } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';
import { FOOTER_DATA } from '../constants/data';
import { useResponsive } from '../utils/responsive';

export default function Footer() {
  const { isTablet, isMobile } = useResponsive();

  const handleLinkPress = (href) => {
    if (typeof window !== 'undefined' && href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const renderSocialIcon = (name) => {
    switch (name) {
      case 'facebook':
        return <FontAwesome name="facebook-f" size={13} color="#FFFFFF" />;
      case 'twitter':
        return <FontAwesome name="twitter" size={13} color="#FFFFFF" />;
      case 'instagram':
        return <FontAwesome name="instagram" size={13} color="#FFFFFF" />;
      case 'youtube':
        return <FontAwesome name="youtube-play" size={13} color="#FFFFFF" />;
      default:
        return <Feather name="share-2" size={13} color="#FFFFFF" />;
    }
  };

  return (
    <View nativeID="contact" className="bg-[#132218] pt-12 pb-6 w-full">
      <View className="w-full max-w-[1240px] self-center px-6">
        {/* Main 4-Column Grid */}
        <View
          className={`${
            isMobile
              ? 'flex-col gap-7'
              : isTablet
              ? 'flex-row flex-wrap justify-between gap-7'
              : 'flex-row justify-between gap-7'
          } mb-10 w-full`}
        >
          {/* Column 1: Brand & Socials */}
          <View className={`${isMobile ? 'w-full' : isTablet ? 'w-[47%]' : 'flex-[1.2]'}`}>
            <View className="flex-col items-start mb-4">
              <Text className="text-sm font-bold text-white leading-[18px] tracking-wide">صحتك</Text>
              <Text className="text-[11px] font-extrabold text-white tracking-[2px]">HEALTHIFY</Text>
            </View>

            <Text className="text-[12.5px] leading-5 text-white/65 mb-5 max-w-[280px] flex-shrink">
              {FOOTER_DATA.about}
            </Text>

            <View className="flex-row items-center flex-wrap gap-2.5">
              {FOOTER_DATA.socials.map((social) => (
                <Pressable
                  key={social.name}
                  className="w-8 h-8 rounded-full border border-white/25 items-center justify-center"
                  accessibilityRole="link"
                  accessibilityLabel={social.label}
                >
                  {renderSocialIcon(social.name)}
                </Pressable>
              ))}
            </View>
          </View>

          {/* Column 2: Quick Links */}
          <View className={`${isMobile ? 'w-full' : isTablet ? 'w-[47%]' : 'flex-1'}`}>
            <Text className="text-sm font-bold text-white mb-4 tracking-[0.2px]">Quick Links</Text>
            <View className="gap-2.5 w-full">
              {FOOTER_DATA.quickLinks.map((link) => (
                <Pressable
                  key={link.label}
                  onPress={() => handleLinkPress(link.href)}
                >
                  <Text className="text-[12.5px] text-white/65 leading-5 flex-shrink">{link.label}</Text>
                </Pressable>
              ))}
            </View>
          </View>

          {/* Column 3: Our Services */}
          <View className={`${isMobile ? 'w-full' : isTablet ? 'w-[47%]' : 'flex-1'}`}>
            <Text className="text-sm font-bold text-white mb-4 tracking-[0.2px]">Our Services</Text>
            <View className="gap-2.5 w-full">
              {FOOTER_DATA.services.map((service) => (
                <Pressable
                  key={service.label}
                  onPress={() => handleLinkPress(service.href)}
                >
                  <Text className="text-[12.5px] text-white/65 leading-5 flex-shrink">{service.label}</Text>
                </Pressable>
              ))}
            </View>
          </View>

          {/* Column 4: Get In Touch */}
          <View className={`${isMobile ? 'w-full' : isTablet ? 'w-[47%]' : 'flex-1'}`}>
            <Text className="text-sm font-bold text-white mb-4 tracking-[0.2px]">Get In Touch</Text>
            <View className="gap-3.5 w-full">
              <View className="flex-row items-start gap-2.5 w-full">
                <Ionicons name="location-outline" size={16} color="rgba(255, 255, 255, 0.7)" />
                <Text className="flex-1 flex-shrink text-[12.5px] leading-[19px] text-white/75">
                  {FOOTER_DATA.contact.address}
                </Text>
              </View>
              <View className="flex-row items-start gap-2.5 w-full">
                <Feather name="phone" size={15} color="rgba(255, 255, 255, 0.7)" />
                <Text className="flex-1 flex-shrink text-[12.5px] leading-[19px] text-white/75">
                  {FOOTER_DATA.contact.phone}
                </Text>
              </View>
              <View className="flex-row items-start gap-2.5 w-full">
                <Feather name="mail" size={15} color="rgba(255, 255, 255, 0.7)" />
                <Text className="flex-1 flex-shrink text-[12.5px] leading-[19px] text-white/75">
                  {FOOTER_DATA.contact.email}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Bottom Sub-bar */}
        <View className="border-t border-white/[0.08] pt-5 flex-row justify-between items-center flex-wrap gap-3.5 w-full">
          <Text className="text-[11px] leading-[18px] text-white/45 flex-shrink">{FOOTER_DATA.copyright}</Text>

          <View className="flex-row flex-wrap items-center gap-3">
            {FOOTER_DATA.legal.map((item, index) => (
              <Pressable key={index}>
                <Text className="text-[11px] leading-[18px] text-white/45">{item}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}
