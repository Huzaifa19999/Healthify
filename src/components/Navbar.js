import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';
import { NAV_LINKS } from '../constants/data';
import { useResponsive } from '../utils/responsive';

export default function Navbar() {
  const { isDesktop, isMobile } = useResponsive();
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
    <View style={styles.headerWrapper}>
      <View style={styles.container}>
        {/* Brand / Logo */}
        <Pressable
          style={styles.logoContainer}
          onPress={() => handleLinkPress('#')}
          accessibilityRole="link"
          accessibilityLabel="Healthify Home"
        >
          <View style={styles.logoMarkWrapper}>
            <Ionicons name="leaf" size={20} color={COLORS.accent} />
          </View>
          <View style={styles.logoTextWrapper}>
            <Text style={styles.arabicLogo}>صحتك</Text>
            <Text style={styles.brandTitle}>HEALTHIFY</Text>
          </View>
        </Pressable>

        {/* Desktop Navigation Links */}
        {isDesktop && (
          <View style={styles.navLinks}>
            {NAV_LINKS.map((link) => (
              <Pressable
                key={link.label}
                onPress={() => handleLinkPress(link.href)}
                style={({ hovered }) => [
                  styles.navLinkItem,
                  hovered && styles.navLinkItemHovered,
                ]}
                accessibilityRole="link"
              >
                <Text
                  style={[
                    styles.navLinkText,
                    activeLink === link.href && styles.navLinkTextActive,
                  ]}
                >
                  {link.label}
                </Text>
              </Pressable>
            ))}
          </View>
        )}

        {/* Header Right Actions */}
        <View style={styles.rightActions}>
          {isDesktop && (
            <Pressable
              style={({ hovered }) => [
                styles.langButton,
                hovered && styles.langButtonHovered,
              ]}
              accessibilityRole="button"
              accessibilityLabel="Change Language"
            >
              <Feather name="globe" size={15} color={COLORS.textSecondary} />
              <Text style={styles.langText}>EN</Text>
              <Feather name="chevron-down" size={13} color={COLORS.textSecondary} />
            </Pressable>
          )}

          <Pressable
            style={({ hovered, pressed }) => [
              styles.ctaButton,
              hovered && styles.ctaButtonHovered,
              pressed && styles.ctaButtonPressed,
            ]}
            onPress={() => handleLinkPress('#plans')}
            accessibilityRole="button"
            accessibilityLabel="Get Started"
          >
            <Text style={styles.ctaButtonText}>Get Started</Text>
            <Feather name="arrow-right" size={16} color={COLORS.textWhite} />
          </Pressable>

          {/* Mobile Menu Toggle Button */}
          {!isDesktop && (
            <Pressable
              style={styles.menuToggleButton}
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
        <View style={styles.mobileDrawer}>
          {NAV_LINKS.map((link) => (
            <Pressable
              key={link.label}
              onPress={() => handleLinkPress(link.href)}
              style={styles.mobileNavItem}
            >
              <Text style={styles.mobileNavText}>{link.label}</Text>
              <Feather name="chevron-right" size={16} color={COLORS.textLight} />
            </Pressable>
          ))}
          <View style={styles.mobileDrawerFooter}>
            <View style={styles.mobileLangRow}>
              <Feather name="globe" size={16} color={COLORS.textSecondary} />
              <Text style={styles.mobileLangText}>Language: English (EN)</Text>
            </View>
            <Pressable
              style={styles.mobileCtaButton}
              onPress={() => handleLinkPress('#plans')}
            >
              <Text style={styles.mobileCtaText}>Explore Plans</Text>
              <Feather name="arrow-right" size={16} color={COLORS.textWhite} />
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderLight,
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    width: '100%',
  },
  container: {
    maxWidth: 1240,
    marginHorizontal: 'auto',
    width: '100%',
    paddingHorizontal: 24,
    height: 76,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    cursor: 'pointer',
  },
  logoMarkWrapper: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.accentLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoTextWrapper: {
    flexDirection: 'column',
  },
  arabicLogo: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.primary,
    lineHeight: 12,
    letterSpacing: 0.5,
  },
  brandTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: COLORS.primary,
    letterSpacing: 1.5,
  },
  navLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 28,
  },
  navLinkItem: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    cursor: 'pointer',
  },
  navLinkItemHovered: {
    opacity: 0.75,
  },
  navLinkText: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.textPrimary,
    letterSpacing: 0.2,
  },
  navLinkTextActive: {
    color: COLORS.accent,
    fontWeight: '700',
  },
  rightActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  langButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.borderLight,
    cursor: 'pointer',
  },
  langButtonHovered: {
    backgroundColor: COLORS.bgLight,
  },
  langText: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    cursor: 'pointer',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  ctaButtonHovered: {
    backgroundColor: COLORS.primaryHover,
    transform: [{ translateY: -1 }],
  },
  ctaButtonPressed: {
    opacity: 0.9,
    transform: [{ translateY: 1 }],
  },
  ctaButtonText: {
    color: COLORS.textWhite,
    fontSize: 14,
    fontWeight: '600',
  },
  menuToggleButton: {
    padding: 6,
    borderRadius: 8,
    backgroundColor: COLORS.bgLight,
    cursor: 'pointer',
  },
  mobileDrawer: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: COLORS.borderLight,
    paddingHorizontal: 24,
    paddingVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },
  mobileNavItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F6F3',
    cursor: 'pointer',
  },
  mobileNavText: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  mobileDrawerFooter: {
    marginTop: 18,
    gap: 12,
  },
  mobileLangRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  mobileLangText: {
    fontSize: 13,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
  mobileCtaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    borderRadius: 25,
    marginTop: 6,
  },
  mobileCtaText: {
    color: COLORS.textWhite,
    fontSize: 15,
    fontWeight: '600',
  },
});
