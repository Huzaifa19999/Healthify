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
            <View style={styles.brandBox}>
              <Text style={styles.arabicLogo}>صحتك</Text>
              <Text style={styles.brandTitle}>HEALTHIFY</Text>
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
                <Ionicons name="location-outline" size={16} color="rgba(255, 255, 255, 0.7)" />
                <Text style={styles.contactText}>{FOOTER_DATA.contact.address}</Text>
              </View>

              <View style={styles.contactItem}>
                <Feather name="phone" size={15} color="rgba(255, 255, 255, 0.7)" />
                <Text style={styles.contactText}>{FOOTER_DATA.contact.phone}</Text>
              </View>

              <View style={styles.contactItem}>
                <Feather name="mail" size={15} color="rgba(255, 255, 255, 0.7)" />
                <Text style={styles.contactText}>{FOOTER_DATA.contact.email}</Text>
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
    backgroundColor: '#132218',
    paddingTop: 64,
    paddingBottom: 24,
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
    gap: 36,
    marginBottom: 48,
  },
  footerColumnsTablet: {
    flexWrap: 'wrap',
    gap: 28,
  },
  footerColumnsMobile: {
    flexDirection: 'column',
    gap: 32,
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
    flex: 1.2,
  },
  brandBox: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  arabicLogo: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
    lineHeight: 16,
    letterSpacing: 0.5,
  },
  brandTitle: {
    fontSize: 11,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 2,
    marginTop: -2,
  },
  brandDescription: {
    fontSize: 12.5,
    lineHeight: 20,
    color: 'rgba(255, 255, 255, 0.65)',
    marginBottom: 20,
    maxWidth: 280,
  },
  socialIconsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  socialCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.25)',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  socialCircleHovered: {
    borderColor: '#FFFFFF',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  columnHeading: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 16,
    letterSpacing: 0.2,
  },
  linksList: {
    gap: 10,
  },
  linkItem: {
    cursor: 'pointer',
  },
  linkItemHovered: {
    opacity: 0.85,
  },
  linkText: {
    fontSize: 12.5,
    color: 'rgba(255, 255, 255, 0.65)',
    lineHeight: 18,
  },
  contactList: {
    gap: 12,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  contactText: {
    fontSize: 12.5,
    color: 'rgba(255, 255, 255, 0.75)',
  },
  bottomBar: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.08)',
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 14,
  },
  copyrightText: {
    fontSize: 11,
    color: 'rgba(255, 255, 255, 0.45)',
  },
  legalLinksRow: {
    flexDirection: 'row',
    gap: 18,
  },
  legalLink: {
    cursor: 'pointer',
  },
  legalLinkText: {
    fontSize: 11,
    color: 'rgba(255, 255, 255, 0.45)',
  },
});
