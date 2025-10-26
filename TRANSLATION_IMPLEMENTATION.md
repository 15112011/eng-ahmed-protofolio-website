# Translation Implementation Guide

## ✅ Completed
1. **Translation Files Created**
   - `ar.json` - Complete Arabic translations
   - `en.json` - Complete English translations
   - Language Provider already set up in layout.js
   - Navbar already using translations

2. **Components Updated**
   - Hero.js - Mobile titles now use translations

## 📝 To Implement

### Add to each component:
```javascript
import { useLanguage } from "../hooks/useLanguage"
import ar from "../locales/ar.json"
import en from "../locales/en.json"

// In component:
const { language } = useLanguage()
const t = language === "ar" ? ar : en
```

### Components to Update:

1. **Hero.js** (Desktop sections)
   - Replace "مهندس معماري" with `{t.hero.architect}`
   - Replace "مخطط" with `{t.hero.planner}`
   - Update floating labels

2. **About.js**
   - Title: `{t.about.title}`
   - Description: `{t.about.description}`
   - Badges: `{t.about.badge1}`, `{t.about.badge2}`

3. **Experience.js**
   - Title: `{t.experience.title}`
   - Description: `{t.experience.description}`
   - Stats: `{t.experience.stat1-4}`
   - Buttons: `{t.experience.cta}`, `{t.experience.watchVideo}`

4. **Stats.js**
   - Title: `{t.stats.title}`
   - Labels: `{t.stats.projects}`, `{t.stats.clients}`, `{t.stats.awards}`, `{t.stats.years}`

5. **BeforeAfter.js**
   - Title: `{t.beforeAfter.title}`
   - Subtitle: `{t.beforeAfter.subtitle}`
   - Labels: `{t.beforeAfter.before}`, `{t.beforeAfter.after}`

6. **Testimonial.js**
   - Subtitle: `{t.testimonial.subtitle}`
   - Title: `{t.testimonial.title}`
   - CTA: `{t.testimonial.cta}`

7. **Reviews.js**
   - Subtitle: `{t.reviews.subtitle}`
   - Title: `{t.reviews.title}`
   - CTA: `{t.reviews.cta}`

8. **Journey.js**
   - Title: `{t.journey.title}`
   - Steps: `{t.journey.step1Title-4Title}`, `{t.journey.step1Desc-4Desc}`

9. **Partners.js**
   - Title: `{t.partners.title}`
   - Buttons: `{t.partners.button1}`, `{t.partners.button2}`

10. **Contact Page**
    - All form fields and labels use `{t.contactPage.*}`

## Direction (RTL/LTR)
Add to layout.js or each page:
```javascript
<html lang={language} dir={language === "ar" ? "rtl" : "ltr"}>
```

## Font Handling
- Arabic: Use Cairo font (already set up)
- English: Use Geist Sans (already set up)
- Apply conditionally based on language
