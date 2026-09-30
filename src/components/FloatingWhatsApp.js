import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Linking } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  const handleOpenWhatsApp = () => {
    Linking.openURL('https://wa.me/97141234567?text=Hi%20Healthify!%20I%20would%20like%20to%20learn%20more%20about%20your%20meal%20plans.');
  };

  return (
    <View style={styles.floatingContainer}>
      {hovered && (
        <View style={styles.tooltipBox}>
          <Text style={styles.tooltipText}>Chat with our nutritionist</Text>
        </View>
      )}

      <Pressable
        style={({ pressed }) => [
          styles.whatsappButton,
          hovered && styles.whatsappButtonHovered,
          pressed && styles.whatsappButtonPressed,
        ]}
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

const styles = StyleSheet.create({
  floatingContainer: {
    position: 'fixed',
    bottom: 24,
    right: 24,
    zIndex: 9999,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  tooltipBox: {
    backgroundColor: COLORS.textDark,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  tooltipText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  whatsappButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.whatsapp,
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
    transitionDuration: '200ms',
  },
  whatsappButtonHovered: {
    transform: [{ scale: 1.08 }],
    backgroundColor: '#20BA5A',
  },
  whatsappButtonPressed: {
    transform: [{ scale: 0.95 }],
  },
});
