/**
 * Site Data Configuration
 * 
 * This file contains all the dynamic content for the website.
 * It acts as a local backend data source that can be easily modified
 * without changing component code.
 * 
 * Structure:
 * - Site metadata and configuration
 * - Navigation and menu items
 * - Hero section content
 * - Statistics and achievements
 * - Project portfolio data
 * - Contact information
 * - Social media links
 */

export const siteConfig = {
  // Site Metadata
  siteName: "Engineer Ahmed Al-Mubayed",
  tagline: "Architect & Planner",
  description: "Professional portfolio website for Engineer Ahmed - Architect and Planner specializing in innovative design and sustainable solutions.",
  
  // Contact Information
  contact: {
    email: "Ahmed@gmail.com",
    phone: "+966 XX XXX XXXX",
    location: "Saudi Arabia",
    workingHours: "Sun - Thu: 9:00 AM - 6:00 PM"
  },
  
  // Social Media Links
  socialMedia: {
    instagram: "https://instagram.com/eng_ahmed",
    twitter: "https://twitter.com/eng_ahmed",
    linkedin: "https://linkedin.com/in/eng_ahmed",
    youtube: "https://youtube.com/@eng_ahmeddddd",
    tiktok: "https://tiktok.com/@eng_ahmeddddd"
  }
};

export const navigationData = {
  // Main Navigation Items
  mainNav: [
    { id: 'home', href: '/', labelEn: 'Home', labelAr: 'الرئيسية' },
    { id: 'projects', href: '/projects', labelEn: 'Projects', labelAr: 'المشاريع' },
    { id: 'contact', href: '/contactttt', labelEn: 'Contact', labelAr: 'التواصل' }
  ],
  
  // Call-to-Action Button
  ctaButton: {
    href: '/contact',
    labelEn: 'Book a Quick Session',
    labelAr: 'احجز جلسة سريعة'
  }
};

export const heroData = {
  // Background Images
  backgroundImage: "/images/0a76d4007f8cc7694c998df6b10dfe65cd978952.jpg",
  characterColorImage: "/images/eng img no bg.png",
  characterCartoonImage: "/images/eng img catroonish.png",
  
  // Hero Content
  titles: {
    architect: {
      en: "Architect",
      ar: "مهندس معماي"
    },
    planner: {
      en: "Planner", 
      ar: "مخط"
    }
  },
  
  descriptions: {
    architect: {
      en: "Specialized in innovative design and interior/exterior spaces with attention to ideas, details, and implementation",
      ar: "متخصص في التصميم المبتكر والمساحات الداخلية والخارجية مع الاهتمام بالأفكار والتفاصيل والتنفيذ"
    },
    planner: {
      en: "Works on developing sustainable and beautiful designs and enriches existing companies' work with his passion for delivering the best results",
      ar: "يعمل على تطوير تصاميم مستدامة وجميلة ويثري عمل الشركات الموجودة بشغفه لتقديم أفضل النتائج"
    }
  },
  
  // Floating Labels
  floatingLabels: {
    en: ["Project Analysis", "Creative", "Modern", "Project Development", "Planner", "Urban"],
    ar: ["تحليل المشاريع", "إبداعي", "حديث", "تطوير المشاريع", "مخطط", "حضري"]
  }
};

export const statsData = {
  // Section Header
  title: {
    en: "A Journey of Creativity Told in Numbers",
    ar: "رحلة إبداع تحكيها الأرقام"
  },
  subtitle: {
    en: "Since our launch, we have achieved great success in delivering innovative and high-quality architectural solutions, always committed to exceeding client expectations.",
    ar: "منذ انطلاقنا، حققنا نجاحاً كبيراً في تقديم حلول معمارية مبتكرة وعالية الجودة، ملتزمين دائماً بتجاوز توقعات العملاء."
  },
  
  // Statistics
  statistics: [
    {
      id: 'stat1',
      value: "Billion",
      valueAr: "مليار",
      label: {
        en: "Total channel views on social media platforms",
        ar: "إجمالي مشاهدات القناة على منصات التواصل الاجتماعي"
      }
    },
    {
      id: 'stat2', 
      value: "1000",
      valueAr: "1000",
      label: {
        en: "Villas designed with precision and creativity",
        ar: "فيلا مصممة بدقة وإبداع"
      },
      hasPlus: true
    },
    {
      id: 'stat3',
      value: "3",
      valueAr: "3", 
      label: {
        en: "Specialized companies founded",
        ar: "شركات متخصصة تأسست"
      }
    }
  ],
  
  // Call-to-Action
  cta: {
    en: "Book a Quick Session",
    ar: "احجز جلسة سريعة"
  }
};

export const aboutData = {
  title: {
    en: "Engineer Ahmed Al-Mubayed: Personal Experience and an Inspirational Success Story in Design and Decoration",
    ar: "المهندس أحمد المبيض: خبرة شخصية وقصة نجاح ملهمة في التصميم والديكور"
  },
  description: {
    en: "Engineer Ahmed Al-Mubayed, an architect specializing in interior design, has a creative and sustainable vision and has established himself as one of the leading architects and planners. He has extensive experience in architectural design, interior decoration, and urban planning, making him a trusted reference in the field. He offers his services to a diverse range of clients, from private homeowners to large companies, focusing on innovative designs that combine beauty, authenticity, and modernity.",
    ar: "المهندس أحمد المبيض، مهندس معماري متخصص في التصميم الداخلي، لديه رؤية إبداعية ومستدامة وقد رسخ نفسه كواحد من المهندسين المعماريين والمخططين الرائدين. لديه خبرة واسعة في التصميم المعماري والديكور الداخلي والتخطيط الحضري، مما يجعله مرجعاً موثوقاً في هذا المجال. يقدم خدماته لمجموعة متنوعة من العملاء، من أصحاب المنازل الخاصة إلى الشركات الكبيرة، مع التركيز على التصاميم المبتكرة التي تجمع بين الجمال والأصالة والحداثة."
  },
  badges: [
    {
      en: "Sustainable Solutions",
      ar: "حلول مستدامة"
    },
    {
      en: "Unlimited Creativity", 
      ar: "إبداع لا محدود"
    }
  ]
};

export const projectsData = {
  // Featured Projects
  featured: [
    {
      id: 'villa-modern-1',
      title: {
        en: "Modern Villa Design",
        ar: "تصميم فيلا عصرية"
      },
      description: {
        en: "Contemporary villa with sustainable features and innovative interior design",
        ar: "فيلا معاصرة بميزات مستدامة وتصميم داخلي مبتكر"
      },
      image: "/images/project1.jpg",
      category: "residential",
      year: 2024,
      location: "Riyadh, Saudi Arabia"
    },
    {
      id: 'office-complex-1',
      title: {
        en: "Corporate Office Complex",
        ar: "مجمع مكاتب شركات"
      },
      description: {
        en: "Modern office space designed for productivity and employee wellbeing",
        ar: "مساحة مكتبية حديثة مصممة للإنتاجية ورفاهية الموظفين"
      },
      image: "/images/project2.jpg", 
      category: "commercial",
      year: 2023,
      location: "Jeddah, Saudi Arabia"
    }
  ],
  
  // Project Categories
  categories: [
    { id: 'all', labelEn: 'All Projects', labelAr: 'جميع المشاريع' },
    { id: 'residential', labelEn: 'Residential', labelAr: 'سكني' },
    { id: 'commercial', labelEn: 'Commercial', labelAr: 'تجاري' },
    { id: 'interior', labelEn: 'Interior Design', labelAr: 'تصميم داخلي' },
    { id: 'planning', labelEn: 'Urban Planning', labelAr: 'تخطيط حضري' }
  ]
};

export const companyData = {
  // Founded Companies
  companies: [
    {
      id: 'dream-studio',
      name: "Dream Studio",
      nameAr: "استوديو الأحلام",
      description: {
        en: "Specialized in architectural design and creative solutions",
        ar: "متخصص في التصميم المعماري والحلول الإبداعية"
      },
      focus: "Design"
    },
    {
      id: 'decor-stores', 
      name: "Decor Stores",
      nameAr: "متاجر الديكور",
      description: {
        en: "Premium furniture and interior decoration solutions",
        ar: "أثاث فاخر وحلول ديكور داخلي"
      },
      focus: "Furniture"
    },
    {
      id: 'vfx-studio',
      name: "VFX Studio", 
      nameAr: "استوديو المؤثرات البصرية",
      description: {
        en: "Visual effects and 3D architectural visualization",
        ar: "مؤثرات بصرية وتصور معماري ثلاثي الأبعاد"
      },
      focus: "Visual Effects"
    }
  ]
};

// Happy Clients/Testimonials Data - عملاؤنا السعداء يشاركون تجربتهم معنا
export const testimonialsData = {
  title: {
    en: "Our Happy Clients Share Their Experience With Us",
    ar: "عملاؤنا السعداء يشاركون تجربتهم معنا"
  },
  subtitle: {
    en: "Discover what our clients say about their journey with Engineer Ahmed Al-Mubayed",
    ar: "اكتشف ما يقوله عملاؤنا عن رحلتهم مع المهندس أحمد المبيض"
  },
  testimonials: [
    {
      id: 'client-1',
      name: {
        en: "Mohammed Al-Rashid",
        ar: "محمد الراشد"
      },
      title: {
        en: "Villa Owner",
        ar: "مالك فيلا"
      },
      image: "/images/client1.jpg",
      rating: 5,
      review: {
        en: "15 years of creative architecture in residential and commercial projects",
        ar: "“ 15عاماً من الإبداع المعماري في السكني والتجاري”"
      },
      project: {
        en: "Modern Villa Design",
        ar: "تصميم فيلا عصرية"
      },
      location: {
        en: "Riyadh",
        ar: "الرياض"
      }
    },
    {
      id: 'client-2',
      name: {
        en: "Fatima Al-Zahra",
        ar: "فاطمة الزهراء"
      },
      title: {
        en: "Business Owner",
        ar: "صاحب أعمال"
      },
      image: "/images/client2.jpg",
      rating: 2,
      review: {
        en: "Working with Ahmed was an incredible experience. He understood our vision perfectly and delivered a stunning office space that reflects our brand identity.",
        ar: "العمل مع أحمد كان تجربة رائعة. فهم رؤيتنا بشكل مثالي وقدم مساحة مكتبية مذهلة تعكس هوية علامتنا التجارية."
      },
      project: {
        en: "Corporate Office Design",
        ar: "تصميم مكتب شركة"
      },
      location: {
        en: "Jeddah",
        ar: "جدة"
      }
    },
    {
      id: 'client-3',
      name: {
        en: "Ahmed Al-Mansouri",
        ar: "أحمد المنصوري"
      },
      title: {
        en: "Restaurant Owner",
        ar: "مالك مطعم"
      },
      image: "/images/client3.jpg",
      rating: 5,
      review: {
        en: "Ahmed's innovative design approach transformed our restaurant into a unique dining experience. Customer satisfaction has increased significantly since the renovation.",
        ar: "نهج أحمد المبتكر في التصميم حول مطعمنا إلى تجربة طعام فريدة. رضا العملاء ازداد بشكل كبير منذ التجديد."
      },
      project: {
        en: "Restaurant Interior Design",
        ar: "تصميم داخلي للمطعم"
      },
      location: {
        en: "Dammam",
        ar: "الدمام"
      }
    }
  ]
};

// Corporate Websites Data - المواقع الإلكترونية الشركاتي
export const corporateWebsitesData = {
  title: {
    en: "Corporate Websites",
    ar: "المواقع الإلكترونية الشركاتي"
  },
  subtitle: {
    en: "Professional digital presence for modern businesses",
    ar: "حضور رقمي احترافي للشركات العصرية"
  },
  description: {
    en: "We create stunning corporate websites that reflect your brand identity and drive business growth through modern design and user experience.",
    ar: "نقوم بإنشاء مواقع إلكترونية شركاتية مذهلة تعكس هوية علامتك التجارية وتدفع نمو الأعمال من خلال التصميم الحديث وتجربة المستخدم."
  },
  features: [
    {
      id: 'responsive-design',
      title: {
        en: "Responsive Design",
        ar: "تصميم متجاوب"
      },
      description: {
        en: "Websites that work perfectly on all devices",
        ar: "مواقع تعمل بشكل مثالي على جميع الأجهزة"
      },
      icon: "📱"
    },
    {
      id: 'modern-ui',
      title: {
        en: "Modern UI/UX",
        ar: "واجهة مستخدم عصرية"
      },
      description: {
        en: "Clean, professional design with excellent user experience",
        ar: "تصميم نظيف واحترافي مع تجربة مستخدم ممتازة"
      },
      icon: "🎨"
    },
    {
      id: 'seo-optimized',
      title: {
        en: "SEO Optimized",
        ar: "محسن لمحركات البحث"
      },
      description: {
        en: "Built with search engine optimization in mind",
        ar: "مبني مع مراعاة تحسين محركات البحث"
      },
      icon: "🔍"
    },
    {
      id: 'fast-loading',
      title: {
        en: "Fast Loading",
        ar: "تحميل سريع"
      },
      description: {
        en: "Optimized for speed and performance",
        ar: "محسن للسرعة والأداء"
      },
      icon: "⚡"
    }
  ],
  portfolioSites: [
    {
      id: 'site-1',
      name: {
        en: "Dream Studio Website",
        ar: "موقع استوديو الأحلام"
      },
      url: "https://dreamstudio.example.com",
      image: "/images/website1.jpg",
      category: "Design Agency",
      technologies: ["React", "Next.js", "MUI"]
    },
    {
      id: 'site-2',
      name: {
        en: "Decor Stores Platform",
        ar: "منصة متاجر الديكور"
      },
      url: "https://decorstores.example.com",
      image: "/images/website2.jpg",
      category: "E-commerce",
      technologies: ["Next.js", "Stripe", "MongoDB"]
    }
  ]
};

// Journey Map Data - خارطة رحلتك مع أحمد المبيض
export const journeyMapData = {
  title: {
    en: "Your Journey Map with Ahmed Al-Mubayed",
    ar: "خارطة رحلتك مع أحمد المبيض"
  },
  subtitle: {
    en: "A step-by-step guide to bringing your architectural dreams to life",
    ar: "دليل خطوة بخطوة لتحقيق أحلامك المعمارية"
  },
  description: {
    en: "From initial consultation to final delivery, discover the comprehensive process that ensures your project's success.",
    ar: "من الاستشارة الأولى إلى التسليم النهائي، اكتشف العملية الشاملة التي تضمن نجاح مشروعك."
  },
  steps: [
    {
      id: 'step-1',
      number: 1,
      title: {
        en: "Initial Consultation",
        ar: "الاستشارة الأولى"
      },
      description: {
        en: "We start with understanding your vision, needs, and budget through a detailed consultation session.",
        ar: "نبدأ بفهم رؤيتك واحتياجاتك وميزانيتك من خلال جلسة استشارة مفصلة."
      },
      duration: {
        en: "1-2 hours",
        ar: "1-2 ساعة"
      },
      icon: "💬",
      deliverables: [
        {
          en: "Project brief document",
          ar: "وثيقة موجز المشروع"
        },
        {
          en: "Budget estimation",
          ar: "تقدير الميزانية"
        }
      ]
    },
    {
      id: 'step-2',
      number: 2,
      title: {
        en: "Site Analysis & Survey",
        ar: "تحليل ومسح الموقع"
      },
      description: {
        en: "Comprehensive site analysis including measurements, environmental factors, and regulatory requirements.",
        ar: "تحليل شامل للموقع يشمل القياسات والعوامل البيئية والمتطلبات التنظيمية."
      },
      duration: {
        en: "2-3 days",
        ar: "2-3 أيام"
      },
      icon: "📐",
      deliverables: [
        {
          en: "Site survey report",
          ar: "تقرير مسح الموقع"
        },
        {
          en: "Technical drawings",
          ar: "الرسوم التقنية"
        }
      ]
    },
    {
      id: 'step-3',
      number: 3,
      title: {
        en: "Concept Development",
        ar: "تطوير المفهوم"
      },
      description: {
        en: "Creating initial design concepts and 3D visualizations based on your requirements and site analysis.",
        ar: "إنشاء مفاهيم التصميم الأولية والتصورات ثلاثية الأبعاد بناءً على متطلباتك وتحليل الموقع."
      },
      duration: {
        en: "1-2 weeks",
        ar: "1-2 أسبوع"
      },
      icon: "🎨",
      deliverables: [
        {
          en: "Concept sketches",
          ar: "رسوم المفهوم"
        },
        {
          en: "3D renderings",
          ar: "التصورات ثلاثية الأبعاد"
        }
      ]
    },
    {
      id: 'step-4',
      number: 4,
      title: {
        en: "Design Development",
        ar: "تطوير التصميم"
      },
      description: {
        en: "Refining the approved concept into detailed architectural and interior design plans.",
        ar: "تطوير المفهوم المعتمد إلى خطط معمارية وتصميم داخلي مفصلة."
      },
      duration: {
        en: "2-4 weeks",
        ar: "2-4 أسابيع"
      },
      icon: "📋",
      deliverables: [
        {
          en: "Detailed floor plans",
          ar: "مخططات الطوابق المفصلة"
        },
        {
          en: "Elevation drawings",
          ar: "رسوم الواجهات"
        },
        {
          en: "Interior design plans",
          ar: "خطط التصميم الداخلي"
        }
      ]
    },
    {
      id: 'step-5',
      number: 5,
      title: {
        en: "Documentation & Permits",
        ar: "التوثيق والتصاريح"
      },
      description: {
        en: "Preparing all necessary documentation and assisting with permit applications and approvals.",
        ar: "إعداد جميع الوثائق اللازمة والمساعدة في طلبات التصاريح والموافقات."
      },
      duration: {
        en: "2-6 weeks",
        ar: "2-6 أسابيع"
      },
      icon: "📄",
      deliverables: [
        {
          en: "Construction documents",
          ar: "وثائق البناء"
        },
        {
          en: "Permit applications",
          ar: "طلبات التصاريح"
        }
      ]
    },
    {
      id: 'step-6',
      number: 6,
      title: {
        en: "Construction Support",
        ar: "دعم البناء"
      },
      description: {
        en: "Ongoing support during construction phase including site visits and quality control.",
        ar: "الدعم المستمر خلال مرحلة البناء بما في ذلك زيارات الموقع ومراقبة الجودة."
      },
      duration: {
        en: "Project duration",
        ar: "مدة المشروع"
      },
      icon: "🏗️",
      deliverables: [
        {
          en: "Site supervision",
          ar: "إشراف الموقع"
        },
        {
          en: "Quality reports",
          ar: "تقارير الجودة"
        }
      ]
    },
    {
      id: 'step-7',
      number: 7,
      title: {
        en: "Final Delivery",
        ar: "التسليم النهائي"
      },
      description: {
        en: "Project completion with final inspections, handover documentation, and post-completion support.",
        ar: "إنجاز المشروع مع التفتيش النهائي ووثائق التسليم والدعم بعد الإنجاز."
      },
      duration: {
        en: "1 week",
        ar: "أسبوع واحد"
      },
      icon: "🎉",
      deliverables: [
        {
          en: "Final inspection report",
          ar: "تقرير التفتيش النهائي"
        },
        {
          en: "As-built drawings",
          ar: "رسوم كما تم البناء"
        },
        {
          en: "Maintenance guide",
          ar: "دليل الصيانة"
        }
      ]
    }
  ],
  cta: {
    en: "Start Your Journey Today",
    ar: "ابدأ رحلتك اليوم"
  }
};

// Export all data as a single object for easy importing
const allSiteData = {
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
};

export default allSiteData;
