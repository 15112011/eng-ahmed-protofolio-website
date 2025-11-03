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
    },
     {
      id: 5,
      text: "كل نقطة بانتباهها في الجلسة الأولى، شعرنا بفهمها لمدخل منزل إبداعي الواقع بحل التفاصيل ما في شيء عشوائي.",
      name: "علي الهويش",
      location: "لندن",
      rating: 5,
      bgColor: "bg-green-50"
    },
    {
      id: 6,
      text: "لما انتهيت مع شركات قبل، بس لما جيت أحسن أن الشركات ما في تصميم احترافي وتفصيل محترف عمل شغل احترافي وتفصيل تهبل.",
      name: "فهد المحيسن",
      location: "الكويت",
      rating: 5,
      bgColor: "bg-blue-50"
    },
    {
      id: 7,
      text: "النتيجة اللي وصلت إليهم ما قدمنا حولت حلمنا، ما شفنا أفكار حاصة بيتي، كانوا غامروا معانا.",
      name: "منى الفارسي",
      location: "الإمارات العربية المتحدة",
      rating: 5,
      bgColor: "bg-pink-50"
    },
    {
      id: 8,
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
    },
     {
      id: 5,
      text: "Every detail was carefully considered in the first session. We felt his understanding of creating an innovative home entrance with no random elements.",
      name: "Ali Al-Huwaish",
      location: "London",
      rating: 5,
      bgColor: "bg-green-50"
    },
    {
      id: 6,
      text: "After working with other companies, I realized they lack professional design and detail. Ahmed's work is professional with amazing attention to detail.",
      name: "Fahad Al-Mohsen",
      location: "Kuwait",
      rating: 5,
      bgColor: "bg-blue-50"
    },
    {
      id: 7,
      text: "The result they delivered transformed our dream. We saw unique ideas for our home that they took a chance on with us.",
      name: "Mona Al-Farsi",
      location: "United Arab Emirates",
      rating: 5,
      bgColor: "bg-pink-50"
    },
    {
      id: 8,
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
     
      buttonText: "دريكورستوديو",
    },
    {
      id: 2,
      name: "دوريسكو",
      logo: "/images/دوريسكو.png",
      description: "تصميم داخلي فاخر تنفيذ احترافي ، لمسات إبداعية ،مواد عصرية",
      link: "#",
      
        buttonText: "دريم استديو",
      
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
    sec1: [
      {
        id: 1,
        question: "كم تستغرق مدة تحليل المشروع؟ وهل تشمل زيارة للموقع؟",
        answer: "تستغرق مرحلة تحليل المشروع من 3-5 أيام عمل، وتشمل زيارة ميدانية للموقع لفهم جميع التفاصيل والمتطلبات بدقة.",
        category: "التحليل والمراحل"
      },
      {
        id: 2,
        question: "هل أحتاج إلى مخططات هندسية قبل البدء في تحليل للمشروع؟",
        answer: "لا، ليس من الضروري. يمكننا البدء بالتحليل والتقييم حتى بدون مخططات، وسنقوم بإعداد جميع المخططات اللازمة.",
        category: "التحليل والمراحل"
      },
      {
        id: 3,
        question: "هل تقدمون تصميم ثلاثي الأبعاد (3D) لأفهم الشكل النهائي؟",
        answer: "نعم، نقدم تصاميم ثلاثية الأبعاد واقعية تمكنك من رؤية مشروعك بكل تفاصيله قبل التنفيذ.",
        category: "التصميم والتعديلات"
      },
      {
        id: 4,
        question: "هل يمكن تعديل التصميم لاحقاً بعد تقديمه؟",
        answer: "نعم، نوفر جولتين من التعديلات المجانية على التصميم لضمان رضاك التام عن النتيجة النهائية.",
        category: "التصميم والتعديلات"
      },
      {
        id: 5,
        question: "هل يشمل التصميم الداخلي تأثيث واختيار الألوان والإضاءة؟",
        answer: "نعم، التصميم الداخلي يشمل اختيار الأثاث والألوان والإضاءة والديكورات بشكل متكامل.",
        category: "التصميم والتعديلات"
      },
      {
        id: 6,
        question: "هل التصميم يكون حسب ذوقي أو حسب رؤية المصمم؟",
        answer: "التصميم يكون مزيجاً من ذوقك الشخصي ورؤيتنا الاحترافية، نستمع لاحتياجاتك ونضيف لمستنا الإبداعية.",
        category: "التصميم والتعديلات"
      },
      {
        id: 7,
        question: "هل الخدمة مقيدة إذا كان المنزل قديم؟ أم فقط للمشاريع الجديدة؟",
        answer: "نقدم خدماتنا للمشاريع الجديدة والقديمة على حد سواء، سواء كان تجديد أو بناء جديد.",
        category: "التحليل والمراحل"
      },
      {
        id: 8,
        question: "كيف يمكنني حجز تحليل للمشروع؟ وما هي الخطوة التالية؟",
        answer: "يمكنك حجز جلسة استشارية من خلال نموذج التواصل أو الاتصال المباشر، وسنبدأ فوراً بجدولة الزيارة.",
        category: "الحجز والتواصل"
      },
      {
        id: 9,
        question: "متى أبدأ بخدماتكم؟",
        answer: "يمكنك البدء فوراً بعد الحجز، نحن جاهزون لاستقبال مشروعك في أي وقت.",
        category: "الحجز والتواصل"
      },
      {
        id: 10,
        question: "كم رح يكلفني المشروع كامل؟",
        answer: "التكلفة تعتمد على حجم المشروع ومتطلباته، وسنقدم لك عرض سعر مفصل بعد الاجتماع الأولي.",
        category: "الأسعار والدفع"
      },
      {
        id: 11,
        question: "ليش الاجتماع فيه رسوم؟ كيف أعمل تصميم بالذكاء الاصطناعي بلاش؟",
        answer: "الاجتماع الاستشاري يتضمن تحليل احترافي ودراسة معمقة لمشروعك، وهو استثمار في جودة التصميم النهائي.",
        category: "الأسعار والدفع"
      },
      {
        id: 12,
        question: "سجلت ودفعت، متى حدا بتواصل معي؟",
        answer: "سيتم التواصل معك خلال 24 ساعة من التسجيل لتحديد موعد الاجتماع الأولي.",
        category: "الحجز والتواصل"
      }
    ],
    sec2: [
      {
        id: 1,
        question: "هل في رقم اتصال مباشر؟",
        answer: "نعم، يمكنك التواصل مباشرة عبر أرقام الهاتف أو الواتساب المخصصة للدعم.",
        category: "الحجز والتواصل"
      },
      {
        id: 2,
        question: "شو خطوات العمل معكم؟",
        answer: "نبدأ بتحليل المشروع، ثم تقديم عرض التصميم، وبعدها التنفيذ حسب الجدول الزمني المتفق عليه.",
        category: "التحليل والمراحل"
      },
      {
        id: 3,
        question: "شو تشمل المرحلة الأولى تحديداً؟",
        answer: "تشمل الزيارة الميدانية، تحليل احتياجات العميل، وجمع المعلومات قبل التصميم.",
        category: "التحليل والمراحل"
      },
      {
        id: 4,
        question: "بدي أحكي مع المهندس أحمد مباشرة.",
        answer: "يمكنك طلب موعد مع المهندس عبر التواصل من خلال البريد أو الهاتف.",
        category: "الحجز والتواصل"
      },
      {
        id: 5,
        question: "بدي بس فكرة لهالمساحة بدون تصميم كامل.",
        answer: "يمكننا تقديم تصور مبدئي بسيط للمساحة قبل البدء بالتصميم الكامل.",
        category: "التصميم والتعديلات"
      },
      {
        id: 6,
        question: "بيتي خارج الإمارات، بتشتغلوا برا؟",
        answer: "نعم، نقدم خدمات التصميم أونلاين للمشاريع داخل وخارج الإمارات.",
        category: "الحجز والتواصل"
      },
      {
        id: 7,
        question: "بدي أعرف تكلفة كل المراحل قبل ما أسجل.",
        answer: "نعم، نوفر لك جدول تسعيري مفصل لكل مرحلة قبل التوقيع.",
        category: "الأسعار والدفع"
      },
      {
        id: 8,
        question: "شو الخدمات اللي بتقدموها بالضبط؟",
        answer: "نقدم تحليل مشروع، تصميم داخلي، تصميم ثلاثي الأبعاد، واستشارات تنفيذية.",
        category: "التحليل والمراحل"
      },
      {
        id: 9,
        question: "وين موقع المكتب؟",
        answer: "مكتبنا في دبي، ويمكنك حجز موعد للزيارة من خلال الموقع الإلكتروني.",
        category: "الحجز والتواصل"
      },
      {
        id: 10,
        question: "سجلت وما حد تواصل معي.",
        answer: "نأسف لذلك، تواصلي معنا عبر البريد أو الهاتف وسيتم الرد فوراً.",
        category: "الحجز والتواصل"
      },
      {
        id: 11,
        question: "هل تحليل المشروع مناسب لي؟",
        answer: "نعم، التحليل يتم تصميمه حسب احتياجات كل عميل لضمان أفضل نتيجة.",
        category: "التحليل والمراحل"
      }
    ],
    sec3: [
      {
        id: 1,
        question: "ما الذي يميز تحليل المشروع لديكم؟",
        answer: "يتميز بدقة في التفاصيل، وفريق محترف يجمع بين الخبرة والرؤية الفنية.",
        category: "التحليل والمراحل"
      },
      {
        id: 2,
        question: "أنا أتابع أفكاركم على السوشيال ميديا لكن بعضها غير منطقية.",
        answer: "الأفكار المعروضة للتوضيح والإلهام، والتصميم الفعلي يتم حسب واقع المشروع.",
        category: "التصميم والتعديلات"
      },
      {
        id: 3,
        question: "ما هي الضمانات أن يكون تحليل المشروع مناسب لي؟",
        answer: "نقدم مراجعات مستمرة وضمان رضا العميل قبل اعتماد أي تصميم نهائي.",
        category: "التحليل والمراحل"
      },
      {
        id: 4,
        question: "هل يمكن تعديل التصميم لاحقاً بعد تقديمه؟",
        answer: "نعم، يمكنك طلب جولة تعديلات مجانية بعد التسليم المبدئي.",
        category: "التصميم والتعديلات"
      }
    ]
  }
]
,
 en: [
  {
    sec1: [
      {
        id: 1,
        question: "How long does the project analysis take? Does it include a site visit?",
        answer: "The project analysis phase usually takes 3–5 working days and includes a site visit to fully understand all details and requirements.",
        category: "Analysis & Phases"
      },
      {
        id: 2,
        question: "Do I need architectural drawings before starting the project analysis?",
        answer: "No, it’s not required. We can start the analysis and evaluation without drawings, and we’ll prepare all necessary plans.",
        category: "Analysis & Phases"
      },
      {
        id: 3,
        question: "Do you provide 3D designs to visualize the final look?",
        answer: "Yes, we provide realistic 3D renders so you can see your project in detail before execution.",
        category: "Design & Modifications"
      },
      {
        id: 4,
        question: "Can I request design changes later after it’s delivered?",
        answer: "Yes, we offer two free rounds of design revisions to ensure your full satisfaction.",
        category: "Design & Modifications"
      },
      {
        id: 5,
        question: "Does the interior design include furniture, colors, and lighting?",
        answer: "Yes, the interior design covers furniture selection, colors, lighting, and decorative details.",
        category: "Design & Modifications"
      },
      {
        id: 6,
        question: "Is the design based on my taste or the designer’s vision?",
        answer: "The design combines your personal taste with our professional vision — we listen to your needs and add our creative touch.",
        category: "Design & Modifications"
      },
      {
        id: 7,
        question: "Is the service limited to new projects only, or do you work on existing homes too?",
        answer: "We provide our services for both new and existing projects — whether renovation or new construction.",
        category: "Analysis & Phases"
      },
      {
        id: 8,
        question: "How can I book a project analysis? What’s the next step?",
        answer: "You can book a consultation session through our contact form or by phone, and we’ll schedule your visit immediately.",
        category: "Booking & Communication"
      },
      {
        id: 9,
        question: "When can I start with your services?",
        answer: "You can start right after booking. Our team is ready to begin at any time.",
        category: "Booking & Communication"
      },
      {
        id: 10,
        question: "How much will the entire project cost?",
        answer: "The total cost depends on your project’s size and requirements. A detailed quotation will be shared after the initial meeting.",
        category: "Pricing & Payment"
      },
      {
        id: 11,
        question: "Why does the consultation have a fee? Isn’t it supposed to be free?",
        answer: "The consultation includes professional analysis and an in-depth study of your project — it’s an investment in the final design quality.",
        category: "Pricing & Payment"
      },
      {
        id: 12,
        question: "I registered and paid. When will someone contact me?",
        answer: "Our team will contact you within 24 hours of registration to schedule the first meeting.",
        category: "Booking & Communication"
      }
    ],
    sec2: [
      {
        id: 1,
        question: "Is there a direct phone number to contact you?",
        answer: "Yes, you can reach us directly via phone or WhatsApp for quick support.",
        category: "Booking & Communication"
      },
      {
        id: 2,
        question: "What are the steps of working with you?",
        answer: "We start with project analysis, then move to design presentation, and finally execution according to the approved timeline.",
        category: "Analysis & Phases"
      },
      {
        id: 3,
        question: "What exactly does the first phase include?",
        answer: "It includes a site visit, client needs analysis, and data collection before the design stage.",
        category: "Analysis & Phases"
      },
      {
        id: 4,
        question: "Can I speak directly with Engineer Ahmed?",
        answer: "You can schedule a meeting with the engineer through email or phone request.",
        category: "Booking & Communication"
      },
      {
        id: 5,
        question: "I just want a simple idea for my space, not a full design.",
        answer: "We can provide a simple conceptual sketch before starting the full design process.",
        category: "Design & Modifications"
      },
      {
        id: 6,
        question: "My house is outside the UAE — do you work internationally?",
        answer: "Yes, we offer online design services for clients both inside and outside the UAE.",
        category: "Booking & Communication"
      },
      {
        id: 7,
        question: "Can I know the cost of each stage before I register?",
        answer: "Of course — we provide a detailed pricing table for every phase before signing the contract.",
        category: "Pricing & Payment"
      },
      {
        id: 8,
        question: "What exactly are the services you provide?",
        answer: "We offer project analysis, interior design, 3D visualization, and executive consultations.",
        category: "Analysis & Phases"
      },
      {
        id: 9,
        question: "Where is your office located?",
        answer: "Our office is in Dubai, and you can schedule a visit appointment through our website.",
        category: "Booking & Communication"
      },
      {
        id: 10,
        question: "I registered but no one contacted me.",
        answer: "We’re sorry for the delay — please reach out via email or phone and we’ll respond immediately.",
        category: "Booking & Communication"
      },
      {
        id: 11,
        question: "Is the project analysis really suitable for me?",
        answer: "Yes, our analysis is fully customized to each client’s goals and project type.",
        category: "Analysis & Phases"
      }
    ],
    sec3: [
      {
        id: 1,
        question: "What makes your project analysis unique?",
        answer: "Our process is detail-oriented, handled by a professional team that blends creativity with technical expertise.",
        category: "Analysis & Phases"
      },
      {
        id: 2,
        question: "I follow your ideas on social media, but some of them seem unrealistic.",
        answer: "Our social media ideas are meant for inspiration — actual designs are tailored to each project’s real conditions.",
        category: "Design & Modifications"
      },
      {
        id: 3,
        question: "What guarantees that the project analysis will fit my needs?",
        answer: "We provide continuous reviews and ensure client approval before finalizing any design stage.",
        category: "Analysis & Phases"
      },
      {
        id: 4,
        question: "Can I request design changes later after delivery?",
        answer: "Yes, you can request one free revision round after receiving the initial design.",
        category: "Design & Modifications"
      }
    ]
  }
]
  
};
