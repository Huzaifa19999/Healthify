import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
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
    <View style={styles.sectionWrapper}>
      <View style={styles.container}>
        <View style={[styles.contentRow, !isDesktop && styles.contentColumn]}>
          {/* Left Column: Heading, description, and View All FAQs button */}
          <View style={[styles.infoCol, !isDesktop && styles.infoColFull]}>
            <Text style={styles.kickerText}>{FAQS_DATA.kicker}</Text>

            <Text style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>
              {FAQS_DATA.title}
            </Text>

            <Text style={styles.descriptionText}>{FAQS_DATA.description}</Text>

            <Pressable
              style={({ hovered, pressed }) => [
                styles.viewAllBtn,
                hovered && styles.viewAllBtnHovered,
                pressed && styles.viewAllBtnPressed,
              ]}
              accessibilityRole="link"
              accessibilityLabel="View All FAQs"
            >
              <Text style={styles.viewAllBtnText}>{FAQS_DATA.buttonText}</Text>
              <Feather name="arrow-right" size={15} color="#FFFFFF" />
            </Pressable>
          </View>

          {/* Right Column: Accordion List with plus sign */}
          <View style={[styles.faqCol, !isDesktop && styles.faqColFull]}>
            <View style={styles.accordionContainer}>
              {FAQS_DATA.items.map((item) => {
                const isOpen = !!openIds[item.id];

                return (
                  <View
                    key={item.id}
                    style={[styles.faqItem, isOpen && styles.faqItemOpen]}
                  >
                    <Pressable
                      style={styles.faqHeader}
                      onPress={() => toggleFaq(item.id)}
                      accessibilityRole="button"
                      accessibilityLabel={item.question}
                    >
                      <Text style={styles.faqQuestion}>{item.question}</Text>
                      <Feather
                        name={isOpen ? 'minus' : 'plus'}
                        size={18}
                        color="#65766A"
                      />
                    </Pressable>

                    {isOpen && (
                      <View style={styles.faqBody}>
                        <Text style={styles.faqAnswer}>{item.answer}</Text>
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

const styles = StyleSheet.create({
  sectionWrapper: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 76,
  },
  container: {
    maxWidth: 1240,
    marginHorizontal: 'auto',
    width: '100%',
    paddingHorizontal: 24,
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 56,
  },
  contentColumn: {
    flexDirection: 'column',
    gap: 40,
  },
  infoCol: {
    flex: 0.9,
    alignItems: 'flex-start',
  },
  infoColFull: {
    width: '100%',
  },
  kickerText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#485C31',
    letterSpacing: 2,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  sectionTitle: {
    fontFamily: FONTS.serif,
    fontSize: 38,
    fontWeight: '700',
    color: '#1D261C',
    lineHeight: 46,
    letterSpacing: -0.3,
    marginBottom: 16,
  },
  sectionTitleMobile: {
    fontSize: 28,
    lineHeight: 34,
  },
  descriptionText: {
    fontSize: 14.5,
    lineHeight: 24,
    color: '#5A6B5F',
    marginBottom: 28,
    maxWidth: 440,
  },
  viewAllBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 16,
    cursor: 'pointer',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.16,
    shadowRadius: 8,
  },
  viewAllBtnHovered: {
    backgroundColor: COLORS.primaryHover,
    transform: [{ translateY: -1 }],
  },
  viewAllBtnPressed: {
    transform: [{ translateY: 0 }],
  },
  viewAllBtnText: {
    fontSize: 13.5,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: 0.2,
  },
  faqCol: {
    flex: 1.1,
  },
  faqColFull: {
    width: '100%',
  },
  accordionContainer: {
    gap: 12,
  },
  faqItem: {
    backgroundColor: '#F8FAF6',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E6ECE2',
    overflow: 'hidden',
  },
  faqItemOpen: {
    backgroundColor: '#FFFFFF',
    borderColor: '#D4DDD1',
  },
  faqHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    cursor: 'pointer',
  },
  faqQuestion: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1D261C',
    flex: 1,
    marginRight: 12,
  },
  faqBody: {
    paddingHorizontal: 20,
    paddingBottom: 16,
    paddingTop: 0,
  },
  faqAnswer: {
    fontSize: 13,
    lineHeight: 22,
    color: '#5A6B5F',
  },
});
