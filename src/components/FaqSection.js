import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';
import { FAQS_DATA } from '../constants/data';
import { useResponsive } from '../utils/responsive';

export default function FaqSection() {
  const { isDesktop, isMobile } = useResponsive();
  const [openIds, setOpenIds] = useState({ 'faq-1': true }); // First FAQ open by default

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
          {/* Left Column: Heading and info */}
          <View style={[styles.infoCol, !isDesktop && styles.infoColFull]}>
            <View style={styles.kickerBadge}>
              <Text style={styles.kickerText}>{FAQS_DATA.kicker}</Text>
            </View>

            <Text style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>
              {FAQS_DATA.title}
            </Text>

            <Text style={styles.descriptionText}>{FAQS_DATA.description}</Text>

            <Pressable
              style={styles.viewAllBtn}
              accessibilityRole="link"
              accessibilityLabel="View All FAQs"
            >
              <Text style={styles.viewAllBtnText}>{FAQS_DATA.buttonText}</Text>
              <Feather name="arrow-right" size={15} color={COLORS.primary} />
            </Pressable>
          </View>

          {/* Right Column: Accordion List */}
          <View style={[styles.faqCol, !isDesktop && styles.faqColFull]}>
            <View style={styles.accordionContainer}>
              {FAQS_DATA.items.map((item) => {
                const isOpen = !!openIds[item.id];

                return (
                  <View
                    key={item.id}
                    style={[
                      styles.faqItem,
                      isOpen && styles.faqItemOpen,
                    ]}
                  >
                    <Pressable
                      style={({ hovered }) => [
                        styles.faqHeader,
                        hovered && styles.faqHeaderHovered,
                      ]}
                      onPress={() => toggleFaq(item.id)}
                      accessibilityRole="button"
                      accessibilityLabel={item.question}
                    >
                      <Text
                        style={[
                          styles.faqQuestion,
                          isOpen && styles.faqQuestionActive,
                        ]}
                      >
                        {item.question}
                      </Text>
                      <View
                        style={[
                          styles.chevronCircle,
                          isOpen && styles.chevronCircleOpen,
                        ]}
                      >
                        <Feather
                          name={isOpen ? 'chevron-up' : 'chevron-down'}
                          size={18}
                          color={isOpen ? COLORS.textWhite : COLORS.textPrimary}
                        />
                      </View>
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
    paddingVertical: 80,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderLight,
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
    gap: 60,
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
  kickerBadge: {
    backgroundColor: COLORS.accentLight,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginBottom: 16,
  },
  kickerText: {
    fontSize: 12,
    fontWeight: '800',
    color: COLORS.accent,
    letterSpacing: 1,
  },
  sectionTitle: {
    fontSize: 38,
    fontWeight: '900',
    color: COLORS.textDark,
    lineHeight: 46,
    marginBottom: 18,
    letterSpacing: -0.5,
  },
  sectionTitleMobile: {
    fontSize: 28,
    lineHeight: 36,
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 26,
    color: COLORS.textSecondary,
    marginBottom: 28,
    maxWidth: 440,
  },
  viewAllBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.primaryBorder,
    backgroundColor: COLORS.bgLight,
    cursor: 'pointer',
  },
  viewAllBtnText: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.primary,
  },
  faqCol: {
    flex: 1.1,
  },
  faqColFull: {
    width: '100%',
  },
  accordionContainer: {
    gap: 14,
  },
  faqItem: {
    backgroundColor: COLORS.bgLight,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E8EFEA',
    overflow: 'hidden',
    transitionDuration: '200ms',
  },
  faqItemOpen: {
    backgroundColor: '#FFFFFF',
    borderColor: COLORS.accent,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 10,
  },
  faqHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingHorizontal: 22,
    cursor: 'pointer',
  },
  faqHeaderHovered: {
    opacity: 0.9,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.textDark,
    flex: 1,
    marginRight: 16,
  },
  faqQuestionActive: {
    color: COLORS.primary,
  },
  chevronCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2ECE5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chevronCircleOpen: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  faqBody: {
    paddingHorizontal: 22,
    paddingBottom: 20,
    paddingTop: 4,
  },
  faqAnswer: {
    fontSize: 14,
    lineHeight: 24,
    color: COLORS.textSecondary,
  },
});
