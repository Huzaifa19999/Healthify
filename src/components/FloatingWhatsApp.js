import React, { useState } from 'react';
import { View, Text, Pressable, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  const handleOpenWhatsApp = () => {
    Linking.openURL('https://wa.me/923106733754?text=Hi%20Healthify!%20I%20would%20like%20to%20learn%20more%20about%20your%20meal%20plans.');
  };

  return (
    <View
      className="flex-row items-center gap-3"
      style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 9999 }}
    >
      {hovered && (
        <View
          className="bg-text-dark py-2 px-3 rounded-lg"
          style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.15, shadowRadius: 8 }}
        >
          <Text className="text-white text-xs font-semibold">Chat with our nutritionist</Text>
        </View>
      )}

      <Pressable
        className="w-14 h-14 rounded-full items-center justify-center"
        style={{
          backgroundColor: hovered ? '#20BA5A' : COLORS.whatsapp,
          transform: [{ scale: hovered ? 1.08 : 1 }],
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 0.2,
          shadowRadius: 10,
          elevation: 8,
        }}
        onHoverIn={() => setHovered(true)}
        onHoverOut={() => setHovered(false)}
        onPress={handleOpenWhatsApp}
        accessibilityRole="button"
        accessibilityLabel="Chat on WhatsApp"
      >
        <Ionicons name="logo-whatsapp" size={28} color="#FFFFFF" />
      </Pressable>
    </View>
  );
}
