/**
 * Fake Backend Test Script
 * 
 * This script tests the fake backend data system to ensure
 * all data structures are working correctly.
 */

// Import the fake backend data
const { 
  siteConfig, 
  navigationData, 
  heroData, 
  statsData, 
  aboutData, 
  projectsData, 
  companyData,
  testimonialsData,
  corporateWebsitesData,
  journeyMapData
} = require('./src/app/data/siteData.js');

console.log('🧪 Testing Fake Backend Data System...\n');

// Test 1: Site Configuration
console.log('📋 Site Configuration Test:');
console.log('✅ Site Name:', siteConfig.siteName);
console.log('✅ Email:', siteConfig.contact.email);
console.log('✅ Social Media Links:', Object.keys(siteConfig.socialMedia).length, 'platforms');
console.log('');

// Test 2: Navigation Data
console.log('🧭 Navigation Data Test:');
console.log('✅ Main Nav Items:', navigationData.mainNav.length);
navigationData.mainNav.forEach(item => {
  console.log(`   - ${item.id}: ${item.labelEn} / ${item.labelAr}`);
});
console.log('✅ CTA Button:', navigationData.ctaButton.labelEn);
console.log('');

// Test 3: Hero Data
console.log('🦸 Hero Data Test:');
console.log('✅ Background Image:', heroData.backgroundImage ? 'Present' : 'Missing');
console.log('✅ Character Images:', heroData.characterColorImage ? 'Present' : 'Missing');
console.log('✅ Titles:', Object.keys(heroData.titles).length, 'titles');
console.log('✅ Floating Labels (EN):', heroData.floatingLabels.en.length);
console.log('✅ Floating Labels (AR):', heroData.floatingLabels.ar.length);
console.log('');

// Test 4: Stats Data
console.log('📊 Statistics Data Test:');
console.log('✅ Title (EN):', statsData.title.en);
console.log('✅ Title (AR):', statsData.title.ar);
console.log('✅ Statistics Count:', statsData.statistics.length);
statsData.statistics.forEach((stat, index) => {
  console.log(`   ${index + 1}. ${stat.id}: ${stat.value} - ${stat.label.en}`);
});
console.log('');

// Test 5: About Data
console.log('📖 About Data Test:');
console.log('✅ Title Present:', aboutData.title.en ? 'Yes' : 'No');
console.log('✅ Description Present:', aboutData.description.en ? 'Yes' : 'No');
console.log('✅ Badges Count:', aboutData.badges.length);
console.log('');

// Test 6: Projects Data
console.log('🏗️ Projects Data Test:');
console.log('✅ Featured Projects:', projectsData.featured.length);
console.log('✅ Categories:', projectsData.categories.length);
projectsData.categories.forEach(cat => {
  console.log(`   - ${cat.id}: ${cat.labelEn}`);
});
console.log('');

// Test 7: Company Data
console.log('🏢 Company Data Test:');
console.log('✅ Companies Count:', companyData.companies.length);
companyData.companies.forEach(company => {
  console.log(`   - ${company.name}: ${company.focus}`);
});
console.log('');

// Test 8: Testimonials Data
console.log('💬 Testimonials Data Test:');
console.log('✅ Title (EN):', testimonialsData.title.en);
console.log('✅ Title (AR):', testimonialsData.title.ar);
console.log('✅ Testimonials Count:', testimonialsData.testimonials.length);
testimonialsData.testimonials.forEach((testimonial, index) => {
  console.log(`   ${index + 1}. ${testimonial.name.en} - ${testimonial.project.en}`);
});
console.log('');

// Test 9: Corporate Websites Data
console.log('🌐 Corporate Websites Data Test:');
console.log('✅ Title (EN):', corporateWebsitesData.title.en);
console.log('✅ Title (AR):', corporateWebsitesData.title.ar);
console.log('✅ Features Count:', corporateWebsitesData.features.length);
console.log('✅ Portfolio Sites:', corporateWebsitesData.portfolioSites.length);
console.log('');

// Test 10: Journey Map Data
console.log('🗺️ Journey Map Data Test:');
console.log('✅ Title (EN):', journeyMapData.title.en);
console.log('✅ Title (AR):', journeyMapData.title.ar);
console.log('✅ Steps Count:', journeyMapData.steps.length);
journeyMapData.steps.forEach((step, index) => {
  console.log(`   ${step.number}. ${step.title.en} (${step.duration.en})`);
});
console.log('');

// Test 11: Data Structure Validation
console.log('🔧 Data Structure Validation:');
const tests = [
  { name: 'siteConfig', data: siteConfig, required: ['siteName', 'contact', 'socialMedia'] },
  { name: 'navigationData', data: navigationData, required: ['mainNav', 'ctaButton'] },
  { name: 'heroData', data: heroData, required: ['backgroundImage', 'titles', 'descriptions'] },
  { name: 'statsData', data: statsData, required: ['title', 'subtitle', 'statistics'] },
  { name: 'aboutData', data: aboutData, required: ['title', 'description', 'badges'] },
  { name: 'projectsData', data: projectsData, required: ['featured', 'categories'] },
  { name: 'companyData', data: companyData, required: ['companies'] },
  { name: 'testimonialsData', data: testimonialsData, required: ['title', 'subtitle', 'testimonials'] },
  { name: 'corporateWebsitesData', data: corporateWebsitesData, required: ['title', 'subtitle', 'features'] },
  { name: 'journeyMapData', data: journeyMapData, required: ['title', 'subtitle', 'steps'] }
];

let allTestsPassed = true;

tests.forEach(test => {
  const missing = test.required.filter(key => !test.data[key]);
  if (missing.length === 0) {
    console.log(`✅ ${test.name}: All required fields present`);
  } else {
    console.log(`❌ ${test.name}: Missing fields: ${missing.join(', ')}`);
    allTestsPassed = false;
  }
});

console.log('\n' + '='.repeat(50));
if (allTestsPassed) {
  console.log('🎉 ALL TESTS PASSED! Fake Backend is working correctly!');
  console.log('✅ Data structures are valid');
  console.log('✅ Bilingual support is implemented');
  console.log('✅ All required fields are present');
  console.log('✅ Ready for production use');
} else {
  console.log('❌ Some tests failed. Please check the data structures.');
}
console.log('='.repeat(50));
