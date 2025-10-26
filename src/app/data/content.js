// Fake Database - Content Management System
// This simulates backend data that can be easily updated

export const journeyStages = {
  ar: [
    {
      id: 1,
      title: "المرحلة الأولى",
      subtitle: "تحليل وتقييم المشروع",
      description: "أجتمع معي شخصياً مدة 30 دقيقة لأفهم بقراءة مشروعك وإيجاد تقرأت فنية ووضع خطة مبدئية تجعلك الأخطاء كبيرة.\n\nوضوح كامل للرؤية والأهداف\n(نتائج عن المرحلة الأولى – فهم الأهداف وتحليل المشروع) سيفهم تماماً ما تحتاجه، وما يحتث بحثه، ويستخدم أهدافك بوضوح لبنى عليها كل مراحل التصميم"
    },
    {
      id: 2,
      title: "المرحلة الثانية",
      subtitle: "دراسة شاملة مع تقرير الاستطلاعات 2D",
      description: "نقوم بدراسة شاملة للموقع وإعداد المخططات الأولية ثنائية الأبعاد مع تقرير مفصل عن جميع العوامل المؤثرة على المشروع"
    },
    {
      id: 3,
      title: "المرحلة الثالثة",
      subtitle: "تصميم 3D",
      description: "نحول الأفكار إلى تصاميم ثلاثية الأبعاد واقعية تمكنك من رؤية مشروعك قبل التنفيذ بكل تفاصيله"
    },
    {
      id: 4,
      title: "المرحلة الرابعة",
      subtitle: "مخططات تنفيذية",
      description: "نعد المخططات التفصيلية للتنفيذ مع جميع المواصفات الفنية والهندسية اللازمة"
    },
    {
      id: 5,
      title: "المرحلة الخامسة",
      subtitle: "حصر الكميات والمواد",
      description: "نحدد جميع المواد والكميات المطلوبة بدقة لضمان عدم وجود مفاجآت في التكاليف"
    },
    {
      id: 6,
      title: "المرحلة السادسة",
      subtitle: "مراقبة تنفيذ",
      description: "نشرف على التنفيذ لضمان الجودة والالتزام بالمخططات والمواصفات المعتمدة"
    },
    {
      id: 7,
      title: "المرحلة السابعة",
      subtitle: "استلام نهائي",
      description: "نسلمك مشروعك بأعلى معايير الجودة مع ضمان رضاك التام عن النتيجة النهائية"
    }
  ],
  en: [
    {
      id: 1,
      title: "Stage One",
      subtitle: "Project Analysis and Evaluation",
      description: "Meet with me personally for 30 minutes to understand your project by reading and finding technical reports and setting an initial plan that avoids major mistakes.\n\nComplete Clarity of Vision and Goals\n(Results from Stage One – Understanding Goals and Project Analysis) You will fully understand what you need, what needs to be researched, and your goals will be clearly used to build upon in all design stages"
    },
    {
      id: 2,
      title: "Stage Two",
      subtitle: "Comprehensive Study with 2D Survey Report",
      description: "We conduct a comprehensive site study and prepare initial 2D plans with a detailed report on all factors affecting the project"
    },
    {
      id: 3,
      title: "Stage Three",
      subtitle: "3D Design",
      description: "We transform ideas into realistic three-dimensional designs that allow you to see your project before implementation with all its details"
    },
    {
      id: 4,
      title: "Stage Four",
      subtitle: "Executive Plans",
      description: "We prepare detailed implementation plans with all necessary technical and engineering specifications"
    },
    {
      id: 5,
      title: "Stage Five",
      subtitle: "Quantity and Material Survey",
      description: "We accurately determine all required materials and quantities to ensure no surprises in costs"
    },
    {
      id: 6,
      title: "Stage Six",
      subtitle: "Implementation Monitoring",
      description: "We supervise implementation to ensure quality and compliance with approved plans and specifications"
    },
    {
      id: 7,
      title: "Stage Seven",
      subtitle: "Final Delivery",
      description: "We deliver your project with the highest quality standards with a guarantee of your complete satisfaction with the final result"
    }
  ]
};

export const reviews = {
  ar: [
    {
      id: 1,
      text: "كل نقطة بانتباهها في الجلسة الأولى، شعرنا بفهمها لمدخل منزل إبداعي الواقع بحل التفاصيل ما في شيء عشوائي.",
      name: "علي الهويش",
      location: "لندن",
      rating: 5,
      bgColor: "bg-green-50"
    },
    {
      id: 2,
      text: "لما انتهيت مع شركات قبل، بس لما جيت أحسن أن الشركات ما في تصميم احترافي وتفصيل محترف عمل شغل احترافي وتفصيل تهبل.",
      name: "فهد المحيسن",
      location: "الكويت",
      rating: 5,
      bgColor: "bg-blue-50"
    },
    {
      id: 3,
      text: "النتيجة اللي وصلت إليهم ما قدمنا حولت حلمنا، ما شفنا أفكار حاصة بيتي، كانوا غامروا معانا.",
      name: "منى الفارسي",
      location: "الإمارات العربية المتحدة",
      rating: 5,
      bgColor: "bg-pink-50"
    },
    {
      id: 4,
      text: "وبطريقة شخصية عجبوني على مشاكل كانت لهم عندنا، لكن قدموا كانت حلول عملية، ما هو مجرد كلام.",
      name: "محمد بن راشد",
      location: "الإمارات العربية المتحدة",
      rating: 5,
      bgColor: "bg-yellow-50"
    }
  ],
  en: [
    {
      id: 1,
      text: "Every detail was carefully considered in the first session. We felt his understanding of creating an innovative home entrance with no random elements.",
      name: "Ali Al-Huwaish",
      location: "London",
      rating: 5,
      bgColor: "bg-green-50"
    },
    {
      id: 2,
      text: "After working with other companies, I realized they lack professional design and detail. Ahmed's work is professional with amazing attention to detail.",
      name: "Fahad Al-Mohsen",
      location: "Kuwait",
      rating: 5,
      bgColor: "bg-blue-50"
    },
    {
      id: 3,
      text: "The result they delivered transformed our dream. We saw unique ideas for our home that they took a chance on with us.",
      name: "Mona Al-Farsi",
      location: "United Arab Emirates",
      rating: 5,
      bgColor: "bg-pink-50"
    },
    {
      id: 4,
      text: "They personally impressed me with the problems we had, but they provided practical solutions, not just talk.",
      name: "Mohammed bin Rashid",
      location: "United Arab Emirates",
      rating: 5,
      bgColor: "bg-yellow-50"
    }
  ]
};

export const partners = {
  ar: [
    {
      id: 1,
      name: "دريم استديو",
      logo: "/images/dream stodiu.png",
      description: "أثاث عصري ، جودة عالية ، تنوع فخم تصميمات تلائم كل ذوق.",
      link: "#",
      buttonText: "دريم استديو"
    },
    {
      id: 2,
      name: "دوريسكو",
      logo: "/images/دوريسكو.png",
      description: "تصميم داخلي فاخر تنفيذ احترافي ، لمسات إبداعية ،مواد عصرية",
      link: "#",
      buttonText: "دريكورستوديو"
    }
  ],
  en: [
    {
      id: 1,
      name: "Dream Studio",
      logo: "/images/dream stodiu.png",
      description: "Modern furniture, high quality, luxurious variety of designs to suit every taste.",
      link: "#",
      buttonText: "Dream Studio"
    },
    {
      id: 2,
      name: "Dorisco",
      logo: "/images/دوريسكو.png",
      description: "Luxurious interior design, professional implementation, creative touches, modern materials",
      link: "#",
      buttonText: "Decor Studio"
    }
  ]
};

export const beforeAfterProjects = [
  {
    id: 1,
    beforeImage: "/images/before1.jpg",
    afterImage: "/images/after1.jpg",
    title: {
      ar: "تحويل غرفة المعيشة",
      en: "Living Room Transformation"
    }
  },
  {
    id: 2,
    beforeImage: "/images/before2.jpg",
    afterImage: "/images/after2.jpg",
    title: {
      ar: "تجديد المطبخ",
      en: "Kitchen Renovation"
    }
  }
];

export const faqs = {
  ar: [
    {
      id: 1,
      question: "كم تستغرق مدة تحليل المشروع؟ وهل تشمل زيارة للموقع؟",
      answer: "تستغرق مرحلة تحليل المشروع من 3-5 أيام عمل، وتشمل زيارة ميدانية للموقع لفهم جميع التفاصيل والمتطلبات بدقة."
    },
    {
      id: 2,
      question: "هل أحتاج إلى مخططات هندسية قبل البدء في تحليل للمشروع؟",
      answer: "لا، ليس من الضروري. يمكننا البدء بالتحليل والتقييم حتى بدون مخططات، وسنقوم بإعداد جميع المخططات اللازمة."
    },
    {
      id: 3,
      question: "هل تقدمون تصميم ثلاثي الأبعاد (3D) لأفهم الشكل النهائي؟",
      answer: "نعم، نقدم تصاميم ثلاثية الأبعاد واقعية تمكنك من رؤية مشروعك بكل تفاصيله قبل التنفيذ."
    },
    {
      id: 4,
      question: "هل يمكن تعديل التصميم لاحقاً بعد تقديمه؟",
      answer: "نعم، نوفر جولتين من التعديلات المجانية على التصميم لضمان رضاك التام عن النتيجة النهائية."
    },
    {
      id: 5,
      question: "هل يشمل التصميم الداخلي تأثيث واختيار الألوان والإضاءة؟",
      answer: "نعم، التصميم الداخلي يشمل اختيار الأثاث والألوان والإضاءة والديكورات بشكل متكامل."
    },
    {
      id: 6,
      question: "هل التصميم يكون حسب ذوق أو حسب رؤية للمصمم؟",
      answer: "التصميم يكون مزيجاً من ذوقك الشخصي ورؤيتنا الاحترافية، نستمع لاحتياجاتك ونضيف لمستنا الإبداعية."
    },
    {
      id: 7,
      question: "هل الخدمة مقيدة إذا كان المنزل قديم؟ أم فقط للمشاريع الجديدة؟",
      answer: "نقدم خدماتنا للمشاريع الجديدة والقديمة على حد سواء، سواء كان تجديد أو بناء جديد."
    },
    {
      id: 8,
      question: "كيف يمكنني حجز لتحليل المشروع؟ وما هي الخطوة التالية؟",
      answer: "يمكنك حجز جلسة استشارية من خلال نموذج التواصل أو الاتصال المباشر، وسنبدأ فوراً بجدولة الزيارة."
    },
    {
      id: 9,
      question: "متى أبدأ بخدماتكم؟",
      answer: "يمكنك البدء فوراً بعد الحجز، نحن جاهزون لاستقبال مشروعك في أي وقت."
    },
    {
      id: 10,
      question: "كم رح يكلفني المشروع كامل؟",
      answer: "التكلفة تعتمد على حجم المشروع ومتطلباته، سنقدم لك عرض سعر مفصل بعد الاجتماع الأولي."
    },
    {
      id: 11,
      question: "ليش الإجتماع فيه رسوم؟ كيف أعمل تصميم بالذكاء الاصطناعي بلاش؟",
      answer: "الاجتماع الاستشاري يتضمن تحليل احترافي ودراسة معمقة لمشروعك، وهو استثمار في جودة التصميم النهائي."
    },
    {
      id: 12,
      question: "سجلت ودفعت، متى حدا بتواصل معي؟",
      answer: "سيتم التواصل معك خلال 24 ساعة من التسجيل لتحديد موعد الاجتماع الأولي."
    }
  ],
  en: [
    {
      id: 1,
      question: "How long does project analysis take? Does it include a site visit?",
      answer: "The project analysis phase takes 3-5 business days and includes a field visit to the site to understand all details and requirements accurately."
    },
    {
      id: 2,
      question: "Do I need engineering plans before starting the project analysis?",
      answer: "No, it's not necessary. We can start with analysis and evaluation even without plans, and we will prepare all necessary plans."
    },
    {
      id: 3,
      question: "Do you provide 3D design to understand the final look?",
      answer: "Yes, we provide realistic three-dimensional designs that allow you to see your project in all its details before implementation."
    },
    {
      id: 4,
      question: "Can the design be modified later after submission?",
      answer: "Yes, we provide two rounds of free design modifications to ensure your complete satisfaction with the final result."
    },
    {
      id: 5,
      question: "Does interior design include furnishing, color selection, and lighting?",
      answer: "Yes, interior design includes furniture selection, colors, lighting, and decorations in an integrated manner."
    },
    {
      id: 6,
      question: "Is the design based on my taste or the designer's vision?",
      answer: "The design is a blend of your personal taste and our professional vision. We listen to your needs and add our creative touch."
    },
    {
      id: 7,
      question: "Is the service limited if the house is old? Or only for new projects?",
      answer: "We provide our services for both new and old projects, whether it's renovation or new construction."
    },
    {
      id: 8,
      question: "How can I book for project analysis? What is the next step?",
      answer: "You can book a consultation session through the contact form or direct call, and we will immediately schedule the visit."
    },
    {
      id: 9,
      question: "When can I start with your services?",
      answer: "You can start immediately after booking. We are ready to receive your project at any time."
    },
    {
      id: 10,
      question: "How much will the complete project cost me?",
      answer: "The cost depends on the project size and requirements. We will provide you with a detailed price quote after the initial meeting."
    },
    {
      id: 11,
      question: "Why does the meeting have fees? How can I design with AI for free?",
      answer: "The consultation meeting includes professional analysis and in-depth study of your project, and is an investment in the quality of the final design."
    },
    {
      id: 12,
      question: "I registered and paid, when will someone contact me?",
      answer: "You will be contacted within 24 hours of registration to schedule the initial meeting."
    }
  ]
};
