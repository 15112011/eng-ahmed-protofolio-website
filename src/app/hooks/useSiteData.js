import { useLanguage } from "./useLanguage";
import { 
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
} from "../data/siteData";

/**
 * Custom hook for accessing site data with language support
 * 
 * This hook provides easy access to the fake backend data
 * with automatic language switching and fallback support.
 * 
 * @returns {Object} Site data with language-aware getters
 */
export function useSiteData() {
  const { language } = useLanguage();

  /**
   * Get localized text with fallback to English
   * @param {Object} textObj - Object with language keys (en, ar)
   * @returns {string} Localized text
   */
  const getLocalizedText = (textObj) => {
    if (typeof textObj === 'string') return textObj;
    return textObj[language] || textObj.en || textObj.ar || '';
  };

  /**
   * Get navigation items with localized labels
   * @returns {Array} Navigation items with current language labels
   */
  const getNavigation = () => {
    return navigationData.mainNav.map(item => ({
      ...item,
      label: language === 'ar' ? item.labelAr : item.labelEn
    }));
  };

  /**
   * Get CTA button text
   * @returns {string} Localized CTA button text
   */
  const getCTAText = () => {
    return language === 'ar' ? navigationData.ctaButton.labelAr : navigationData.ctaButton.labelEn;
  };

  /**
   * Get hero section data with localized content
   * @returns {Object} Hero data with current language content
   */
  const getHeroData = () => {
    return {
      ...heroData,
      titles: {
        architect: getLocalizedText(heroData.titles.architect),
        planner: getLocalizedText(heroData.titles.planner)
      },
      descriptions: {
        architect: getLocalizedText(heroData.descriptions.architect),
        planner: getLocalizedText(heroData.descriptions.planner)
      },
      floatingLabels: heroData.floatingLabels[language] || heroData.floatingLabels.en
    };
  };

  /**
   * Get statistics data with localized content
   * @returns {Object} Stats data with current language content
   */
  const getStatsData = () => {
    return {
      title: getLocalizedText(statsData.title),
      subtitle: getLocalizedText(statsData.subtitle),
      cta: getLocalizedText(statsData.cta),
      statistics: statsData.statistics.map(stat => ({
        ...stat,
        value: language === 'ar' ? stat.valueAr : stat.value,
        label: getLocalizedText(stat.label)
      }))
    };
  };

  /**
   * Get about section data with localized content
   * @returns {Object} About data with current language content
   */
  const getAboutData = () => {
    return {
      title: getLocalizedText(aboutData.title),
      description: getLocalizedText(aboutData.description),
      badges: aboutData.badges.map(badge => getLocalizedText(badge))
    };
  };

  /**
   * Get projects data with localized content
   * @returns {Object} Projects data with current language content
   */
  const getProjectsData = () => {
    return {
      featured: projectsData.featured.map(project => ({
        ...project,
        title: getLocalizedText(project.title),
        description: getLocalizedText(project.description)
      })),
      categories: projectsData.categories.map(category => ({
        ...category,
        label: language === 'ar' ? category.labelAr : category.labelEn
      }))
    };
  };

  /**
   * Get company data with localized content
   * @returns {Object} Company data with current language content
   */
  const getCompanyData = () => {
    return {
      companies: companyData.companies.map(company => ({
        ...company,
        name: language === 'ar' ? company.nameAr : company.name,
        description: getLocalizedText(company.description)
      }))
    };
  };

  /**
   * Get testimonials data with localized content
   * @returns {Object} Testimonials data with current language content
   */
  const getTestimonialsData = () => {
    return {
      title: getLocalizedText(testimonialsData.title),
      subtitle: getLocalizedText(testimonialsData.subtitle),
      testimonials: testimonialsData.testimonials.map(testimonial => ({
        ...testimonial,
        name: getLocalizedText(testimonial.name),
        title: getLocalizedText(testimonial.title),
        review: getLocalizedText(testimonial.review),
        project: getLocalizedText(testimonial.project),
        location: getLocalizedText(testimonial.location)
      }))
    };
  };

  /**
   * Get corporate websites data with localized content
   * @returns {Object} Corporate websites data with current language content
   */
  const getCorporateWebsitesData = () => {
    return {
      title: getLocalizedText(corporateWebsitesData.title),
      subtitle: getLocalizedText(corporateWebsitesData.subtitle),
      description: getLocalizedText(corporateWebsitesData.description),
      features: corporateWebsitesData.features.map(feature => ({
        ...feature,
        title: getLocalizedText(feature.title),
        description: getLocalizedText(feature.description)
      })),
      portfolioSites: corporateWebsitesData.portfolioSites.map(site => ({
        ...site,
        name: getLocalizedText(site.name)
      }))
    };
  };

  /**
   * Get journey map data with localized content
   * @returns {Object} Journey map data with current language content
   */
  const getJourneyMapData = () => {
    return {
      title: getLocalizedText(journeyMapData.title),
      subtitle: getLocalizedText(journeyMapData.subtitle),
      description: getLocalizedText(journeyMapData.description),
      cta: getLocalizedText(journeyMapData.cta),
      steps: journeyMapData.steps.map(step => ({
        ...step,
        title: getLocalizedText(step.title),
        description: getLocalizedText(step.description),
        duration: getLocalizedText(step.duration),
        deliverables: step.deliverables.map(deliverable => getLocalizedText(deliverable))
      }))
    };
  };

  return {
    // Raw data access
    siteConfig,
    language,
    
    // Language-aware getters
    getLocalizedText,
    getNavigation,
    getCTAText,
    getHeroData,
    getStatsData,
    getAboutData,
    getProjectsData,
    getCompanyData,
    getTestimonialsData,
    getCorporateWebsitesData,
    getJourneyMapData,
    
    // Direct access to processed data
    navigation: getNavigation(),
    ctaText: getCTAText(),
    hero: getHeroData(),
    stats: getStatsData(),
    about: getAboutData(),
    projects: getProjectsData(),
    companies: getCompanyData(),
    testimonials: getTestimonialsData(),
    corporateWebsites: getCorporateWebsitesData(),
    journeyMap: getJourneyMapData()
  };
}
