import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Feather, Ionicons, FontAwesome } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';
import { FOOTER_DATA } from '../constants/data';
import { useResponsive } from '../utils/responsive';

export default function Footer() {
  const { isDesktop, isTablet, isMobile } = useResponsive();

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
        return <FontAwesome name="facebook-f" size={15} color="#FFFFFF" />;
      case 'twitter':
        return <FontAwesome name="twitter" size={15} color="#FFFFFF" />;
      case 'instagram':
        return <FontAwesome name="instagram" size={16} color="#FFFFFF" />;
      case 'linkedin':
        return <FontAwesome name="linkedin" size={15} color="#FFFFFF" />;
      default:
        return <Feather name="share-2" size={15} color="#FFFFFF" />;
    }
  };

  return (
    <View nativeID="contact" style={styles.footerWrapper}>
      <View style={styles.container}>
        {/* Main 4-Column Grid */}
        <View
          style={[
            styles.footerColumns,
            isTablet && styles.footerColumnsTablet,
            isMobile && styles.footerColumnsMobile,
          ]}
        >
          {/* Column 1: Brand & Socials */}
          <View
            style={[
              styles.column,
              styles.brandColumn,
              isTablet && styles.columnTablet,
              isMobile && styles.columnMobile,
            ]}
          >
            <View style={styles.brandRow}>
              <View style={styles.logoMarkWrapper}>
                <Ionicons name="leaf" size={20} color={COLORS.accent} />
              </View>
              <View>
                <Text style={styles.arabicLogo}>صحتك</Text>
                <Text style={styles.brandTitle}>HEALTHIFY</Text>
              </View>
            </View>

            <Text style={styles.brandDescription}>{FOOTER_DATA.about}</Text>

            <View style={styles.socialIconsRow}>
              {FOOTER_DATA.socials.map((social) => (
                <Pressable
                  key={social.name}
                  style={({ hovered }) => [
                    styles.socialCircle,
                    hovered && styles.socialCircleHovered,
                  ]}
                  accessibilityRole="link"
                  accessibilityLabel={social.label}
                >
                  {renderSocialIcon(social.name)}
                </Pressable>
              ))}
            </View>
          </View>

          {/* Column 2: Quick Links */}
          <View
            style={[
              styles.column,
              isTablet && styles.columnTablet,
              isMobile && styles.columnMobile,
            ]}
          >
            <Text style={styles.columnHeading}>Quick Links</Text>
            <View style={styles.linksList}>
              {FOOTER_DATA.quickLinks.map((link) => (
                <Pressable
                  key={link.label}
                  onPress={() => handleLinkPress(link.href)}
                  style={({ hovered }) => [
                    styles.linkItem,
                    hovered && styles.linkItemHovered,
                  ]}
                >
                  <Text style={styles.linkText}>{link.label}</Text>
                </Pressable>
              ))}
            </View>
          </View>

          {/* Column 3: Our Services */}
          <View
            style={[
              styles.column,
              isTablet && styles.columnTablet,
              isMobile && styles.columnMobile,
            ]}
          >
            <Text style={styles.columnHeading}>Our Services</Text>
            <View style={styles.linksList}>
              {FOOTER_DATA.services.map((service) => (
                <Pressable
                  key={service.label}
                  onPress={() => handleLinkPress(service.href)}
                  style={({ hovered }) => [
                    styles.linkItem,
                    hovered && styles.linkItemHovered,
                  ]}
                >
                  <Text style={styles.linkText}>{service.label}</Text>
                </Pressable>
              ))}
            </View>
          </View>

          {/* Column 4: Get In Touch */}
          <View
            style={[
              styles.column,
              isTablet && styles.columnTablet,
              isMobile && styles.columnMobile,
            ]}
          >
            <Text style={styles.columnHeading}>Get In Touch</Text>
            <View style={styles.contactList}>
              <View style={styles.contactItem}>
                <Ionicons name="location-outline" size={18} color={COLORS.accent} />
                <Text style={styles.contactText}>{FOOTER_DATA.contact.address}</Text>
              </View>

              <View style={styles.contactItem}>
                <Feather name="phone" size={17} color={COLORS.accent} />
                <Text style={styles.contactText}>{FOOTER_DATA.contact.phone}</Text>
              </View>

              <View style={styles.contactItem}>
                <Feather name="mail" size={17} color={COLORS.accent} />
                <Text style={styles.contactText}>{FOOTER_DATA.contact.email}</Text>
              </View>

              <View style={styles.contactItem}>
                <Feather name="clock" size={17} color={COLORS.accent} />
                <Text style={styles.contactText}>{FOOTER_DATA.contact.workingHours}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Bottom Sub-bar */}
        <View style={styles.bottomBar}>
          <Text style={styles.copyrightText}>{FOOTER_DATA.copyright}</Text>

          <View style={styles.legalLinksRow}>
            {FOOTER_DATA.legal.map((item, index) => (
              <Pressable key={index} style={styles.legalLink}>
                <Text style={styles.legalLinkText}>{item}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerWrapper: {
    backgroundColor: COLORS.primaryDark,
    paddingTop: 70,
    paddingBottom: 30,
  },
  container: {
    maxWidth: 1240,
    marginHorizontal: 'auto',
    width: '100%',
    paddingHorizontal: 24,
  },
  footerColumns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 40,
    marginBottom: 60,
  },
  footerColumnsTablet: {
    flexWrap: 'wrap',
    gap: 30,
  },
  footerColumnsMobile: {
    flexDirection: 'column',
    gap: 36,
  },
  column: {
    flex: 1,
  },
  columnTablet: {
    width: '45%',
    flex: 'none',
  },
  columnMobile: {
    width: '100%',
  },
  brandColumn: {
    flex: 1.3,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 16,
  },
  logoMarkWrapper: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arabicLogo: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.accent,
    lineHeight: 12,
  },
  brandTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 1.5,
  },
  brandDescription: {
    fontSize: 13,
    lineHeight: 22,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 24,
    maxWidth: 320,
  },
  socialIconsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  socialCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transitionDuration: '150ms',
  },
  socialCircleHovered: {
    backgroundColor: COLORS.accent,
  },
  columnHeading: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 20,
    letterSpacing: 0.3,
  },
  linksList: {
    gap: 12,
  },
  linkItem: {
    cursor: 'pointer',
  },
  linkItemHovered: {
    opacity: 0.8,
  },
  linkText: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.75)',
    lineHeight: 20,
  },
  contactList: {
    gap: 14,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  contactText: {
    fontSize: 13,
    lineHeight: 20,
    color: 'rgba(255, 255, 255, 0.75)',
    flex: 1,
  },
  bottomBar: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    paddingTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 16,
  },
  copyrightText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.5)',
  },
  legalLinksRow: {
    flexDirection: 'row',
    gap: 20,
  },
  legalLink: {
    cursor: 'pointer',
  },
  legalLinkText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.5)',
  },
});
