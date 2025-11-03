# 🛠️ Developer Guide

## Project Structure

```
src/
├── app/
│   ├── data/
│   │   └── siteData.js          # 🎯 MAIN DATA FILE (edit this!)
│   ├── hooks/
│   │   └── useSiteData.js       # Hook for accessing data
│   ├── component/
│   │   ├── Hero.js              # ✅ Uses fake backend
│   │   ├── Stats.js             # ✅ Uses fake backend  
│   │   ├── Testimonial.js       # ✅ Uses fake backend
│   │   ├── Testimonials.js      # ✅ Uses fake backend
│   │   ├── CorporateWebsites.js # ✅ Uses fake backend
│   │   └── JourneyMap.js        # ✅ Uses fake backend
│   └── locales/
│       ├── ar.json              # Fallback Arabic translations
│       └── en.json              # Fallback English translations
```

## How the Fake Backend Works

1. **Data Source**: All content comes from `src/app/data/siteData.js`
2. **Hook**: Components use `useSiteData()` to get processed data
3. **Language Support**: Automatic Arabic/English switching
4. **Fallback**: If fake backend fails, falls back to JSON files

## Adding New Sections

```javascript
// 1. Add data to siteData.js
export const newSectionData = {
  title: {
    en: "New Section",
    ar: "قسم جديد"
  },
  items: [...]
};

// 2. Update useSiteData.js hook
const getNewSectionData = () => {
  return {
    title: getLocalizedText(newSectionData.title),
    items: newSectionData.items.map(item => ({
      ...item,
      name: getLocalizedText(item.name)
    }))
  };
};

// 3. Create component
import { useSiteData } from "../hooks/useSiteData";

export default function NewSection() {
  const { newSection } = useSiteData();
  return <div>{newSection.title}</div>;
}
```

## Image Management

### Current Image Structure:
```
public/images/
├── eng img no bg.png           # Hero color image
├── eng img catroonish.png      # Hero cartoon image
├── 0a76d4007f8cc7694c998df6b10dfe65cd978952.jpg # Background
├── client1.jpg, client2.jpg    # Testimonial photos
├── project1.jpg, project2.jpg  # Portfolio images
└── website1.jpg, website2.jpg  # Website screenshots
```

### To Replace Images:
1. Add new images to `public/images/`
2. Update paths in `siteData.js`
3. Keep same aspect ratios for best results

## Testing

```bash
# Check for errors
npm run lint

# Run development server
npm run dev

# Test backend data
node test-backend.js
```

## Test Pages

- `/test-changes` - Shows current fake backend values
- `/test-sections` - Displays all sections
- `/test-data` - Technical data structure test

## Deployment Ready

✅ No documentation files  
✅ Enhanced code comments  
✅ MUI-only styling  
✅ Fake backend system  
✅ Bilingual support  
✅ Error-free code  

## Common Issues

**Q: Changes not showing?**  
A: Make sure you're editing `siteData.js`, not the JSON files

**Q: Images not loading?**  
A: Check image paths start with `/images/` and files exist in `public/images/`

**Q: Broken layout?**  
A: Run `npm run lint` to check for syntax errors

## Performance Notes

- All data loads instantly (no API calls)
- Images are optimized with Next.js Image component
- Responsive design works on all devices
- SEO-friendly structure
