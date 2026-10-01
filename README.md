# 🥗 Healthify - Healthy Meals Landing Page

> Frontend Development Assessment: Full-featured, responsive Healthy Meals landing page built with **React Native for Web**, Expo, modern design tokens, modular component hierarchy, and Vercel deployment.

---

## 🌟 Live Demo & Repository

* **Live Vercel Deployment**: https://healthify-iota-olive.vercel.app/
* **GitHub Repository**: https://github.com/Huzaifa19999/Healthify

---

## 📸 Overview & Design Implementation

This project is a reproduction of the supplied Healthy Meals ("Healthify") assessment design reference.

### 1. Sticky Header & Brand Navigation

* Arabic calligraphy + Latin brand logo (`صحتك HEALTHIFY`).
* Anchor links to key page sections: About Us, Services, Advantages, Growth Plans, Blogs, and Contact Us.
* Language selector (`EN`) and `Get Started` primary CTA.
* Mobile hamburger navigation drawer with collapsible menu.

### 2. Hero Section

* `Healthy Meals Happier Lives` status badge.
* High-contrast typography: *"Fresh. Nutritious. Convenient. Delivered to You."*
* Dual CTAs: `Explore Meal Plans` and `Learn More`.
* Social proof row with overlapping UAE customer avatars and 4.9/5 star ratings.
* High-resolution culinary hero presentation with floating badges:

  * *Good Food, Brighter You*
  * *Nutrient Details (420 kcal • 32g Protein • 100% Organic)*

### 3. Statistics & Trust Indicators

* `1M+` Meals Delivered.
* `30k+` Happy Customers.
* `4.8/5` Star Rating.
* `350+` Recipes Available.

### 4. About / Brand Section

**Heading:** Your Trusted Healthy Food Partner

* Gourmet skillet food visual with a floating *Nourishing Lives Daily* badge.
* Information about Healthify's chef-prepared meal deliveries in Dubai.
* Checklist badges:

  * Freshly Prepared Daily.
  * Extended Nutrition.
  * Great Taste.

### 5. Meal Plans / Services

**Heading:** Healthy Meal Plans for Every Lifestyle

Four interactive cards featuring food imagery and category tags:

* Healthy Ready-To-Eat Meals.
* Customized Meal Plans.
* Weight Management Plans.
* High Protein Meal Plans.

Features include interactive hover states and circular arrow buttons.

### 6. Advantages

**Heading:** Why Choose Healthify?

A 2 × 2 feature card grid featuring:

* **Premium Quality:** Organic, high-grade ingredients.
* **Health Focused:** Nutritionist-approved meals.
* **Convenient Delivery:** Morning doorstep delivery.
* **Flexible Plans:** Pause or modify your plan anytime.

### 7. Growth Plans & Pricing

Three structured pricing cards:

| Plan             |          Price | Description                          |
| ---------------- | -------------: | ------------------------------------ |
| Essential Plan   | AED 299 / week | Essential healthy meal options       |
| Balanced Plan    | AED 499 / week | Balanced meals for everyday wellness |
| Performance Plan | AED 699 / week | Meals designed for active lifestyles |

The Balanced Plan is highlighted with a *Most Popular* badge.

A promotional visual card complements the pricing section with the message *Invest In a Healthier You*.

### 8. How It Works

**Heading:** Healthy Eating in 3 Simple Steps

1. **Choose Your Plan:** Select a meal plan that suits your lifestyle.
2. **We Prepare Fresh Meals:** Enjoy freshly prepared meals.
3. **Enjoy Convenient Delivery:** Receive your meals conveniently.

The steps are connected through visual indicators and directional flow.

### 9. Customer Stories & Testimonials

Customer testimonials featuring:

* Sarah M.
* Ahmed K.
* Fatima R.

The section includes customer quotes, five-star ratings, customer avatars, and UAE locations.

### 10. Frequently Asked Questions (FAQ)

* Interactive accordion with expand/collapse functionality.
* Five key questions and answers.
* Active question highlighting and responsive styling.

### 11. Bottom Call-To-Action Banner

A deep emerald green banner (`#183B2B`) featuring:

**"Transform Your Health, One Meal At A Time"**

Includes a CTA button with smooth-scroll navigation to the relevant page section.

### 12. Complete Footer

A responsive four-column footer featuring:

* **Brand:** Brand story and social links for Facebook, X, Instagram, and LinkedIn.
* **Quick Links:** Navigation to important website sections.
* **Services:** Links to available meal plans and services.
* **Contact Information:** Downtown Dubai, UAE, phone number, email, and operating hours.
* **Legal:** Copyright and legal policies.

A floating WhatsApp action button links to WhatsApp using `wa.me`.

---

## 🛠️ Technology Stack

* **Framework:** React Native for Web.
* **Platform:** Expo.
* **UI Components:** React Native `View`, `Text`, `Image`, `Pressable`, and `ScrollView`.
* **Iconography:** `@expo/vector-icons` (`Feather`, `Ionicons`, and `FontAwesome`).
* **Typography & Styling:** Responsive design tokens and reusable styles.
* **Responsive Layout:** Custom `useResponsive()` hook.
* **Web Bundler:** Metro for Web using `expo export -p web`.
* **Deployment:** Vercel with a custom `vercel.json` configuration.
* **Version Control:** Git and GitHub.

---

## 🚀 Getting Started

### Prerequisites

* Node.js (a version compatible with your installed Expo SDK).
* npm or Yarn.
* Git.

### 1. Clone the Repository

```bash
git clone https://github.com/Huzaifa19999/Healthify.git
cd Healthify
```

### 2. Install Dependencies

```bash
npm install
```

If npm reports dependency-resolution conflicts, review the conflicting package versions before using `--legacy-peer-deps`.

### 3. Start the Development Server

```bash
npm run web
```

Open the local URL displayed in your terminal, typically:

http://localhost:8081

### 4. Build for Production

```bash
npm run build:web
```

The production web export should be generated in the `dist/` directory.

### 5. Preview the Production Build

```bash
npx serve dist
```

Open the local URL displayed in your terminal to preview the exported website.

---

## 🌐 Deploying to Vercel

The project is configured for deployment as a static web application using Expo's web export.

### Vercel Configuration

The following is an example `vercel.json` for a static Expo web export:

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

Ensure this configuration matches your project's actual build output and routing requirements.

### Option A: Deploy Using the Vercel Dashboard

1. Push the latest project changes to GitHub.
2. Visit https://vercel.com/.
3. Click **Add New Project**.
4. Import the repository: `Huzaifa19999/Healthify`.
5. Set the build command to `npm run build:web`.
6. Set the output directory to `dist`.
7. Deploy the project.

### Option B: Deploy Using the Vercel CLI

Install or run the Vercel CLI:

```bash
npx vercel
```

Deploy to production:

```bash
npx vercel --prod
```

### Live Deployment

Visit the deployed website:

**https://healthify-iota-olive.vercel.app/**

---

## 📱 Responsive Design

The layout is designed to adapt to desktop, tablet, and mobile screen sizes.

| Device  | Breakpoint       | Layout                                       |
| ------- | ---------------- | -------------------------------------------- |
| Desktop | 1024px and above | Multi-column layouts and expanded navigation |
| Tablet  | 640px–1023px     | Two-column grids and adjusted spacing        |
| Mobile  | Below 640px      | Single-column sections and mobile navigation |

Responsive features include:

* Flexible layouts and responsive typography.
* Adaptive meal plan and feature grids.
* Touch-friendly buttons.
* Mobile navigation drawer.
* Responsive images and cards.
* Consistent spacing across screen sizes.

---

## 🔒 Environment Variables

If the project uses environment variables, create a local `.env` file based on the provided `.env.example` file.

```bash
cp .env.example .env
```

On Windows Command Prompt, you can use:

```cmd
copy .env.example .env
```

Example public configuration:

```env
EXPO_PUBLIC_APP_NAME=Healthify
EXPO_PUBLIC_SUPPORT_EMAIL=support@example.com
EXPO_PUBLIC_WHATSAPP_PHONE=971500000000
```

| Variable                     | Description                                         |
| ---------------------------- | --------------------------------------------------- |
| `EXPO_PUBLIC_APP_NAME`       | Application display name                            |
| `EXPO_PUBLIC_SUPPORT_EMAIL`  | Customer support email address                      |
| `EXPO_PUBLIC_WHATSAPP_PHONE` | WhatsApp inquiry number, including the country code |

**Note:** Replace the example email and WhatsApp number with the appropriate project values. Expo public environment variables are embedded in the client bundle, so never store secrets or private API keys in them.

---

## ✨ Key Features

* Responsive healthy meals landing page.
* Modern, clean user interface.
* Reusable React Native components.
* Responsive desktop, tablet, and mobile layouts.
* Interactive navigation and call-to-action buttons.
* Meal plan and pricing cards.
* Customer testimonials and trust indicators.
* Expandable FAQ accordion.
* WhatsApp contact integration.
* Modular component architecture.
* Static web export for deployment.
* GitHub version control and Vercel hosting.

---

## 📄 License

This project is released under the MIT License.

Designed and implemented for a Frontend Development Assessment.

---

## 🔗 Project Links

* **Live Website:** https://healthify-iota-olive.vercel.app/
* **GitHub Repository:** https://github.com/Huzaifa19999/Healthify
