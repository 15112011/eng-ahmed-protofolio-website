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
  articlesData,
  circularSectionsData,
  contactPageData,
  journeyMapData,
  experienceData
} from "./siteData";

const getLocalizedText = (textObj, language) => {
  if (typeof textObj === 'string') return textObj;
  return textObj[language] || textObj.en || textObj.ar || '';
};

export const processSiteData = (language) => {
  const getNav = () => {
    return navigationData.mainNav.map(item => ({
      ...item,
      label: language === 'ar' ? item.labelAr : item.labelEn
    }));
  };

  const getCTA = () => {
    return language === 'ar' ? navigationData.ctaButton.labelAr : navigationData.ctaButton.labelEn;
  };

  const getHero = () => {
    return {
      ...heroData,
      titles: {
        architect: getLocalizedText(heroData.titles.architect, language),
        planner: getLocalizedText(heroData.titles.planner, language)
      },
      descriptions: {
        architect: getLocalizedText(heroData.descriptions.architect, language),
        planner: getLocalizedText(heroData.descriptions.planner, language)
      },
      floatingLabels: heroData.floatingLabels[language] || heroData.floatingLabels.en
    };
  };

  const getStats = () => {
    return {
      title: getLocalizedText(statsData.title, language),
      subtitle: getLocalizedText(statsData.subtitle, language),
      cta: getLocalizedText(statsData.cta, language),
      statistics: statsData.statistics.map(stat => ({
        ...stat,
        value: language === 'ar' ? stat.valueAr : stat.value,
        label: getLocalizedText(stat.label, language)
      }))
    };
  };

  const getAbout = () => {
    return {
      title: getLocalizedText(aboutData.title, language),
      description: getLocalizedText(aboutData.description, language),
      viewWork: getLocalizedText(aboutData.viewWork, language),
      cta: getLocalizedText(aboutData.cta, language),
      followMe: getLocalizedText(aboutData.followMe, language),
      badges: aboutData.badges.map(badge => getLocalizedText(badge, language))
    };
  };

  const getProjects = () => {
    return {
      featured: projectsData.featured.map(project => ({
        ...project,
        title: getLocalizedText(project.title, language),
        description: getLocalizedText(project.description, language)
      })),
      categories: projectsData.categories.map(category => ({
        ...category,
        label: language === 'ar' ? category.labelAr : category.labelEn
      }))
    };
  };

  const getCompanies = () => {
    return {
      title: getLocalizedText(companyData.title, language),
      companies: companyData.companies.map(company => ({
        ...company,
        name: language === 'ar' ? company.nameAr : company.name,
        description: getLocalizedText(company.description, language)
      }))
    };
  };

  const getTestimonials = () => {
    return {
      title: getLocalizedText(testimonialsData.title, language),
      subtitle: getLocalizedText(testimonialsData.subtitle, language),
      testimonials: testimonialsData.testimonials.map(testimonial => ({
        ...testimonial,
        name: getLocalizedText(testimonial.name, language),
        title: getLocalizedText(testimonial.title, language),
        review: getLocalizedText(testimonial.review, language),
        project: getLocalizedText(testimonial.project, language),
        location: getLocalizedText(testimonial.location, language)
      }))
    };
  };

  const getCorporateWebsites = () => {
    return {
      title: getLocalizedText(corporateWebsitesData.title, language),
      subtitle: getLocalizedText(corporateWebsitesData.subtitle, language),
      description: getLocalizedText(corporateWebsitesData.description, language),
      features: corporateWebsitesData.features.map(feature => ({
        ...feature,
        title: getLocalizedText(feature.title, language),
        description: getLocalizedText(feature.description, language)
      })),
      portfolioSites: corporateWebsitesData.portfolioSites.map(site => ({
        ...site,
        name: getLocalizedText(site.name, language)
      }))
    };
  };

  const getArticles = () => {
    return {
      title: getLocalizedText(articlesData.title, language),
      subtitle: getLocalizedText(articlesData.subtitle, language),
      viewAll: getLocalizedText(articlesData.viewAll, language),
      readMore: getLocalizedText(articlesData.readMore, language)
    };
  };

  const getCircularSections = () => {
    return {
      sections: circularSectionsData.sections.map(section => ({
        ...section,
        label: getLocalizedText(section.label, language)
      }))
    };
  };

  const getContactPage = () => {
    return {
      title: getLocalizedText(contactPageData.title, language),
      subtitle: getLocalizedText(contactPageData.subtitle, language),
      services: getLocalizedText(contactPageData.services, language),
      name: getLocalizedText(contactPageData.name, language),
      phone: getLocalizedText(contactPageData.phone, language),
      email: getLocalizedText(contactPageData.email, language),
      submit: getLocalizedText(contactPageData.submit, language),
      privacy: getLocalizedText(contactPageData.privacy, language)
    };
  };

  const getExperience = () => {
    return {
      stats: [
        { label: getLocalizedText(experienceData.stats.stat1, language), value: "100%" },
        { label: getLocalizedText(experienceData.stats.stat2, language), value: "500+" },
        { label: getLocalizedText(experienceData.stats.stat3, language), value: "1000+" },
        { label: getLocalizedText(experienceData.stats.stat4, language), value: "15+" },
      ],
      titleSub: getLocalizedText(experienceData.titleSub, language)
    };
  };

  const getJourneyMap = () => {
    return {
      title: getLocalizedText(journeyMapData.title, language),
      subtitle: getLocalizedText(journeyMapData.subtitle, language),
      description: getLocalizedText(journeyMapData.description, language),
      cta: getLocalizedText(journeyMapData.cta, language),
      steps: journeyMapData.steps.map(step => ({
        ...step,
        title: getLocalizedText(step.title, language),
        description: getLocalizedText(step.description, language),
        duration: getLocalizedText(step.duration, language),
        deliverables: step.deliverables.map(deliverable => getLocalizedText(deliverable, language))
      }))
    };
  };

  return {
    siteConfig,
    navigation: getNav(),
    ctaText: getCTA(),
    hero: getHero(),
    stats: getStats(),
    about: getAbout(),
    projects: getProjects(),
    companies: getCompanies(),
    testimonials: getTestimonials(),
    corporateWebsites: getCorporateWebsites(),
    articles: getArticles(),
    circularSections: getCircularSections(),
    contactPage: getContactPage(),
    journeyMap: getJourneyMap(),
    experience: getExperience()
  };
};
