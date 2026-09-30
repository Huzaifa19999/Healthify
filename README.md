# 🥗 Healthify - Healthy Meals Landing Page

> Frontend Development Assessment: Full-featured, responsive Healthy Meals landing page built with **React Native for Web**, Expo, modern design tokens, modular component hierarchy, and zero-config Vercel deployment.

---

## 🌟 Live Demo & Repository

- **Live Vercel Deployment**: [https://healthify-meals-web.vercel.app](https://healthify-meals-web.vercel.app) *(Deploy URL placeholder — see Deployment section below)*
- **GitHub Repository**: [https://github.com/username/healthify-landing-page](https://github.com/username/healthify-landing-page)

---

## 📸 Overview & Design Implementation

This project is a reproduction of the supplied Healthy Meals ("Healthify") assessment design reference:

1. **Sticky Header & Brand Navigation**:
   - Arabic calligraphy + Latin brand logo (`صحتك HEALTHIFY`)
   - Anchor links to key page sections (`About Us`, `Services`, `Advantages`, `Growth Plans`, `Blogs`, `Contact Us`)
   - Language selector (`EN`) and `Get Started ->` primary CTA
   - Mobile hamburger navigation drawer with collapsible menu

2. **Hero Section**:
   - `Healthy Meals Happier Lives` status badge
   - High-contrast typography: *"Fresh. Nutritious. Convenient. Delivered to You."*
   - Dual CTAs: `Explore Meal Plans` and `Learn More`
   - Social proof row with overlapping UAE customer avatars and 4.9/5 star ratings
   - High-res culinary hero presentation with dual floating badges:
     - *"Good Food, Brighter You"*
     - *"Nutrient Details (420 kcal • 32g Protein • 100% Organic)"*

3. **Statistics & Trust Indicators**:
   - `1M+` Meals Delivered
   - `30k+` Happy Customers
   - `4.8/5` Star Rating
   - `350+` Recipes Available

4. **About / Brand Section** (*"Your Trusted Healthy Food Partner"*):
   - Gourmet skillet food visual with floating *"Nourishing Lives Daily"* badge
   - Narrative copy about Healthify's chef-prepared meal deliveries in Dubai
   - Checklist badges: *Freshly Prepared Daily*, *Extended Nutrition*, *Great Taste*

5. **Meal Plans / Services** (*"Healthy Meal Plans for Every Lifestyle"*):
   - 4 Interactive cards with food imagery and category tags:
     - *Healthy Ready-To-Eat Meals*
     - *Customized Meal Plans*
     - *Weight Management Plans*
     - *High Protein Meal Plans*
   - Interactive hover states and circular arrow buttons

6. **Advantages** (*"Why Choose Healthify"*):
   - 2x2 Feature card grid:
     - *Premium Quality* (Organic, high-grade ingredients)
     - *Health Focused* (Nutritionist approved)
     - *Convenient Delivery* (Morning doorstep delivery)
     - *Flexible Plans* (Pause or modify anytime)

7. **Growth Plans & Pricing**:
   - 3 structured pricing cards:
     - *Essential Plan* (`AED 299 / week`)
     - *Balanced Plan* (`AED 499 / week`) — Highlighted with *"Most Popular"* crown badge
     - *Performance Plan* (`AED 699 / week`)
   - Side visual promo card: *"Invest In a Healthier You"*

8. **Step Process** (*"Healthy Eating in 3 Simple Steps"*):
   - Step 1: Choose Your Plan
   - Step 2: We Prepare Fresh Meals
   - Step 3: Enjoy Convenient Delivery
   - Connected with badges and directional flow

9. **Customer Stories / Testimonials**:
   - UAE client reviews (Sarah M., Ahmed K., Fatima R.)
   - 5-star ratings, quotes, verified customer avatars, and locations

10. **Frequently Asked Questions (FAQ)**:
    - Usable interactive accordion with expand/collapse states for 5 key questions
    - Active highlight styling

11. **Bottom Call-To-Action Banner**:
    - Deep emerald green banner (`#183B2B`) with *"Transform Your Health, One Meal At A Time"*
    - Secondary CTA button with smooth scroll navigation

12. **Complete 4-Column Footer**:
    - Brand story & social links (Facebook, X, Instagram, LinkedIn)
    - Quick Links & Services directories
    - Contact info: Downtown Dubai, UAE, phone, email, and operating hours
    - Copyright & legal policies
    - Sticky floating WhatsApp action button (`wa.me`)

---

## 🛠️ Technology Stack

- **Framework**: [React Native for Web](https://necolas.github.io/react-native-web/) + [Expo SDK 57](https://expo.dev/)
- **UI Components & Primitives**: `View`, `Text`, `Image`, `Pressable`, `ScrollView`
- **Iconography**: `@expo/vector-icons` (`Feather`, `Ionicons`, `FontAwesome`)
- **Typography & Styling**: Clean mobile-first design tokens with responsive hooks (`useResponsive()`)
- **Web Bundler**: Metro for Web (`expo export -p web`)
- **Deployment**: Vercel ready via `vercel.json`

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/username/healthify-landing-page.git
   cd healthify-landing-page
   ```

2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

3. Run local development server:
   ```bash
   npm run web
   ```
   Open [http://localhost:8081](http://localhost:8081) in your browser.

4. Build production web export:
   ```bash
   npm run build:web
   ```
   The static web distribution will be generated in the `dist/` directory.

5. Preview the production build locally:
   ```bash
   npx serve dist
   ```

---

## 🌐 Deploying to Vercel

This repository includes a configured `vercel.json`:

```json
{
  "version": 2,
  "buildCommand": "npm run build:web",
  "outputDirectory": "dist",
  "framework": null,
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Steps to Deploy:

1. **Option A: Using Vercel Dashboard**:
   - Push your code to GitHub.
   - Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
   - Import your GitHub repository.
   - Vercel will automatically read `vercel.json` (Build command: `npm run build:web`, Output directory: `dist`).
   - Click **Deploy**.

2. **Option B: Using Vercel CLI**:
   ```bash
   npx vercel
   # For production:
   npx vercel --prod
   ```

---

## 📱 Responsive Breakpoints Tested

- **Desktop (1024px - 1440px+)**: Multi-column layouts, floating visual badges, expanded navigation bar.
- **Tablet (640px - 1023px)**: 2-column wrapping grids, adjusted typography and spacing.
- **Mobile (< 640px)**: Stacked single-column layout, touch-optimized button hit targets, sliding drawer mobile menu.

---

## 🔒 Environment Variables

Safe public template values are documented in `.env.example`:

```bash
cp .env.example .env
```

| Variable | Description |
|---|---|
| `EXPO_PUBLIC_APP_NAME` | Application display name |
| `EXPO_PUBLIC_SUPPORT_EMAIL` | Customer support email address |
| `EXPO_PUBLIC_WHATSAPP_PHONE` | WhatsApp inquiry number |

---

## 📄 License

MIT License. Designed and implemented for the Frontend Development Assessment.
