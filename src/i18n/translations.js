// Shared page translations with safe fallback support

const KO_SHARED = {
  biodegradable: "생분해성",
  ecoFriendly: "100% 친환경",
  costEffective: "비용 효율적",
  contactCta: "문의하기",
  stayCoolStayGreen: "Stay Cool, Stay Green",
};

export const translations = {
  home: {
    en: {
      hero: {
        tagline: KO_SHARED.stayCoolStayGreen,
        subtitle: "Sustainable ice packs for fresh food delivery and cold chain companies",
        cta: "Discover Our Solution"
      },
      stats: {
        biodegradable: "Biodegradable",
        biodegradableDesc: "Both content and packaging",
        freezing: "Faster Freezing",
        freezingDesc: "Measured against equal-size water packs in the same freezer cycle",
        retention: "Longer Retention",
        retentionDesc: "Up to 260 minutes in insulated parcel tests at room temperature",
        emissions: "Lower Carbon Emissions",
        emissionsDesc: "vs. traditional ice packs"
      },
      why: {
        badge: "Why Eaureco?",
        title: "Built for Cold Chain Operations",
        description: "Designed for teams that track pack turnover, delivery temperature, and disposal steps.",
        sustainable: "Sustainable",
        sustainableDesc: "Made from renewable materials",
        performance: "Operational Performance",
        performanceDesc: "Freezes in shorter cycles and holds cooling through last-mile delivery windows",
        costEffective: "Cost-Effective",
        costEffectiveDesc: "Lower pack inventory and fewer disposal handoffs reduce operating cost",
        learnMore: "Learn More"
      },
      cta: {
        title: "Plan Operations, Cost, and Compliance",
        subtitle: "Review pack turnover, disposal workflow, and ESG reporting fit with your current routes",
        button: "Get in Touch"
      },
      problem: {
        header: {
          title: "The Cold Chain Dilemma",
          subtitle: "The industry is forced to choose between sustainability and performance."
        },
        scale: {
          line1: "1 Billion",
          line2: "ice packs landfill annually in North America"
        },
        options: {
          title: "Current Solutions Failed",
          subtitle: "Every existing option comes with a critical compromise.",
          sap: {
            title: "SAP Ice Packs",
            subtitle: "Plastic-based polymers",
            pros: ["Good performance", "Long lasting"],
            cons: ["Toxic microplastics", "Clogs sewage", "100+ years to decompose"]
          },
          water: {
            title: "Water Packs",
            subtitle: "100% Water",
            pros: ["Eco-friendly", "Safe disposal"],
            cons: ["Melts too fast", "Poor retention", "Inefficient logistics"]
          },
          eco: {
            title: "Other Eco-Gels",
            subtitle: "Alternative solutions",
            pros: ["Biodegradable", "Sustainable"],
            cons: ["Prohibitively expensive", "Lower performance", "Hard to scale"]
          }
        },
        impact: {
          title: "The Hidden Cost",
          years: "100+ Years",
          yearsDesc: "Time for SAP packs to decompose in landfills",
          costs: "$ Millions",
          costsDesc: "Spent by cities on sewage repair & cleanup",
          damage: "Irreversible",
          damageDesc: "Microplastics permanently contaminating our oceans"
        },
        stuck: {
          title: "The Zero-Sum Game",
          subtitle: "Until now, you couldn't have both.",
          performance: "Performance",
          performanceDesc: "Means using toxic plastics",
          sustainability: "Sustainability",
          sustainabilityDesc: "Means sacrificing efficiency"
        },
        breakthrough: {
          title: "Until Now.",
          subtitle: "Introducing the breakthrough that changes everything"
        }
      },
      solution: {
        header: {
          title: "Our Solution",
          subtitle: "High-performance sustainable ice packs that don't compromise"
        },
        hero: {
          title: "Eaureco Ice Packs",
          badge: "Sustainable Cooling",
          tagline: "Better Performance. Lower Cost. Zero Waste."
        },
        sizes: {
          badge: "Available Sizes",
          title: "Flexible Options for Every Need",
          subtitle: "Choose the size that fits your business requirements"
        },
        performance: {
          badge: "Performance Data",
          title: "Superior Cold Chain Performance",
          efficiency: "50% Less Inventory",
          efficiencyDesc: "10,000 packs/day",
          efficiencyDetail: "Cut pack inventory from 40,000 to 20,000 units without changing deliveries",
          lasts: "Lasts Longer",
          lastsDesc: "260 minutes of cooling retention time",
          green: "100% Green",
          greenTitle: "Biodegradable",
          greenDesc: "Content and packaging both break down naturally"
        },
        benefits: {
          badge: "Business Benefits",
          turnover: {
            title: "Faster Turnover",
            desc: "Freezes 4x faster than alternatives, meaning faster restocking cycles and higher throughput for your operations"
          },
          disposal: {
            title: "Zero Disposal Cost",
            desc: "Toss in compost. No special handling, no disposal fees, no environmental guilt"
          }
        },
        general: {
          badge: "Key Benefits",
          title: "Everything You Need",
          perf: "Superior Performance",
          perfDesc: "Outperforms traditional options in freezing speed and retention time",
          cost: "Cost Effective",
          costDesc: "Competitive pricing without compromising on quality or sustainability",
          eco: "100% Eco-Friendly",
          ecoDesc: "Completely biodegradable with zero environmental impact",
          safe: "Safe & Convenient",
          safeDesc: "Non-toxic, easy to dispose, and hassle-free to use"
        },
        impact: {
          badge: "Environmental Impact",
          title: "Making a Real Difference",
          subtitle: "Every Eaureco ice pack helps build a cleaner future",
          waste: "Zero Landfill Waste",
          wasteDesc: "Completely biodegradable materials",
          ocean: "Ocean Cleanup",
          oceanDesc: "Reduces environmental impact",
          carbon: "Lower Carbon Footprint",
          carbonDesc: "Sustainable production process"
        },
        esg: {
          badge: "ESG Compliance",
          title: "Meet Your Sustainability Goals",
          subtitle: "Eaureco helps your business achieve ESG targets while improving operational performance",
          button: "Get Started"
        }
      },
      comparison: {
        header: {
          title: "Comparison",
          subtitle: "See how Eaureco outperforms traditional ice pack solutions"
        },
        value: {
          title: "Eaureco is Cheaper & More Effective",
          subtitle: "Our ice packs deliver superior performance while being better for the environment and your bottom line",
          cheap: "Cheap",
          effective: "Effective"
        },
        metrics: {
          freezes: "Freezes Faster",
          freezesDesc: "Faster freezing than water-based ice packs",
          lasts: "Lasts Longer",
          lastsDesc: "Minutes of cooling retention time",
          green: "100% Green",
          greenTitle: "Biodegradable",
          greenDesc: "Content and packaging both break down naturally"
        },
        table: {
          badge: "Detailed Comparison",
          feature: "Feature",
          biodegradable: "Biodegradable",
          freezing: "Freezing Speed",
          retention: "Retention Time",
          cost: "Cost Effective",
          impact: "Environmental Impact",
          reusable: "Reusable",
          positive: "Positive",
          negative: "Negative",
          neutral: "Neutral"
        },
        summary: {
          title: "Operations, Cost, Compliance, Disposal",
          subtitle: "Compare freezing cycle time, cooling duration, unit economics, and end-of-life handling in one view",
          button: "Get in Touch →"
        }
      },
      contact: {
        header: {
          title: "Contact Us",
          subtitle: "Ready to make the switch to sustainable cooling?"
        },
        info: {
          badge: "Get in Touch",
          email: "Email Us",
          emailValue: "goforjiwon@kaist.ac.kr",
          location: "Location",
          locationValue: "Daejeon, South Korea",
          locationDesc: "Visit us at KAIST campus"
        },
        bottom: {
          tagline: KO_SHARED.stayCoolStayGreen,
          desc: "Let's work together to create a green future for food delivery and cold chain logistics."
        }
      }
    },
    es: {
      hero: {
        tagline: "Mantente Fresco, Mantente Verde",
        subtitle: "Paquetes de hielo sostenibles para entrega de alimentos frescos y empresas de cadena de frío",
        cta: "Descubre Nuestra Solución"
      },
      stats: {
        biodegradable: "Biodegradable",
        biodegradableDesc: "Tanto contenido como empaque",
        freezing: "Congelación Más Rápida",
        freezingDesc: "Medido frente a paquetes de agua del mismo tamaño en el mismo ciclo de congelador",
        retention: "Mayor Retención",
        retentionDesc: "Hasta 260 minutos en pruebas de paquete aislado a temperatura ambiente",
        emissions: "Menores Emisiones de Carbono",
        emissionsDesc: "vs. paquetes de hielo tradicionales"
      },
      why: {
        badge: "¿Por Qué Eaureco?",
        title: "Diseñado para Operaciones de Cadena de Frío",
        description: "Pensado para equipos que controlan rotación de paquetes, temperatura de entrega y pasos de descarte.",
        sustainable: "Sostenible",
        sustainableDesc: "Hecho de materiales renovables",
        performance: "Rendimiento Operativo",
        performanceDesc: "Se congela en ciclos más cortos y mantiene frío durante ventanas de última milla",
        costEffective: "Costo-Efectivo",
        costEffectiveDesc: "Menor inventario de paquetes y menos etapas de descarte reducen el costo operativo",
        learnMore: "Aprende Más"
      },
      cta: {
        title: "Planifica Operación, Costo y Cumplimiento",
        subtitle: "Revisa rotación de paquetes, flujo de descarte y encaje con reportes ESG en tus rutas actuales",
        button: "Contáctanos"
      },
      problem: {
        header: {
          title: "El Dilema de la Cadena de Frío",
          subtitle: "La industria se ve obligada a elegir entre sostenibilidad y rendimiento."
        },
        scale: {
          line1: "1 Billón",
          line2: "de paquetes de hielo en vertederos anualmente en Norteamérica"
        },
        options: {
          title: "Las Soluciones Actuales Fallaron",
          subtitle: "Cada opción existente viene con un compromiso crítico.",
          sap: {
            title: "Paquetes SAP",
            subtitle: "Polímeros plásticos",
            pros: ["Buen rendimiento", "Larga duración"],
            cons: ["Microplásticos tóxicos", "Obstruye desagües", "+100 años en descomponerse"]
          },
          water: {
            title: "Paquetes de Agua",
            subtitle: "100% Agua",
            pros: ["Ecológico", "Eliminación segura"],
            cons: ["Se derrite rápido", "Poca retención", "Logística ineficiente"]
          },
          eco: {
            title: "Otros Eco-Geles",
            subtitle: "Soluciones alternativas",
            pros: ["Biodegradable", "Sostenible"],
            cons: ["Prohibitivamente caro", "Menor rendimiento", "Difícil de escalar"]
          }
        },
        impact: {
          title: "El Costo Oculto",
          years: "+100 Años",
          yearsDesc: "Tiempo para que los paquetes SAP se descompongan",
          costs: "$ Millones",
          costsDesc: "Gastados por ciudades en limpieza y reparaciones",
          damage: "Irreversible",
          damageDesc: "Microplásticos contaminando permanentemente nuestros océanos"
        },
        stuck: {
          title: "El Juego de Suma Cero",
          subtitle: "Hasta ahora, no podías tener ambos.",
          performance: "Rendimiento",
          performanceDesc: "Significa usar plásticos tóxicos",
          sustainability: "Sostenibilidad",
          sustainabilityDesc: "Significa sacrificar eficiencia"
        },
        breakthrough: {
          title: "Hasta Ahora.",
          subtitle: "Presentamos el avance que lo cambia todo"
        }
      },
      solution: {
        header: {
          title: "Nuestra Solución",
          subtitle: "Paquetes de hielo sostenibles de alto rendimiento sin compromisos"
        },
        hero: {
          title: "Paquetes de Hielo Eaureco",
          badge: "Enfriamiento Sostenible",
          tagline: "Mejor Rendimiento. Menor Costo. Cero Residuos."
        },
        sizes: {
          badge: "Tamaños Disponibles",
          title: "Opciones Flexibles para Cada Necesidad",
          subtitle: "Elige el tamaño que se adapte a tus requisitos de negocio"
        },
        performance: {
          badge: "Datos de Rendimiento",
          title: "Rendimiento Superior de la Cadena de Frío",
          efficiency: "50% Menos Inventario",
          efficiencyDesc: "10,000 paquetes/día",
          efficiencyDetail: "Reduce el inventario de 40,000 a 20,000 unidades sin cambiar entregas",
          lasts: "Dura Más Tiempo",
          lastsDesc: "260 minutos de tiempo de retención de enfriamiento",
          green: "100% Verde",
          greenTitle: "Biodegradable",
          greenDesc: "Contenido y empaque se descomponen naturalmente"
        },
        benefits: {
          badge: "Beneficios de Negocio",
          turnover: {
            title: "Rotación Más Rápida",
            desc: "Se congela 4x más rápido que las alternativas, lo que significa ciclos de reabastecimiento más rápidos y mayor rendimiento"
          },
          disposal: {
            title: "Costo Cero de Eliminación",
            desc: "Tíralo al compost. Sin manejo especial, sin tarifas de eliminación, sin culpa ambiental"
          }
        },
        general: {
          badge: "Beneficios Clave",
          title: "Todo Lo Que Necesitas",
          perf: "Rendimiento Superior",
          perfDesc: "Supera a las opciones tradicionales en velocidad de congelación y tiempo de retención",
          cost: "Costo Efectivo",
          costDesc: "Precios competitivos sin comprometer calidad o sostenibilidad",
          eco: "100% Ecológico",
          ecoDesc: "Completamente biodegradable con cero impacto ambiental",
          safe: "Seguro y Conveniente",
          safeDesc: "No tóxico, fácil de desechar y sin complicaciones"
        },
        impact: {
          badge: "Impacto Ambiental",
          title: "Haciendo una Diferencia Real",
          subtitle: "Cada paquete de hielo Eaureco ayuda a construir un futuro más limpio",
          waste: "Cero Residuos en Vertederos",
          wasteDesc: "Materiales completamente biodegradables",
          ocean: "Limpieza del Océano",
          oceanDesc: "Reduce el impacto ambiental",
          carbon: "Menor Huella de Carbono",
          carbonDesc: "Proceso de producción sostenible"
        },
        esg: {
          badge: "Cumplimiento ESG",
          title: "Alcanza Tus Objetivos de Sostenibilidad",
          subtitle: "Eaureco ayuda a tu empresa a lograr objetivos ESG mientras mejora el rendimiento operativo",
          button: "Empezar"
        }
      },
      comparison: {
        header: {
          title: "Comparación",
          subtitle: "Ve cómo Eaureco supera a las soluciones tradicionales de paquetes de hielo"
        },
        value: {
          title: "Eaureco es Más Barato y Más Efectivo",
          subtitle: "Nuestros paquetes de hielo ofrecen un rendimiento superior mientras son mejores para el medio ambiente y tu negocio",
          cheap: "Económico",
          effective: "Efectivo"
        },
        metrics: {
          freezes: "Se Congela Más Rápido",
          freezesDesc: "Más rápido que los paquetes de hielo a base de agua",
          lasts: "Dura Más Tiempo",
          lastsDesc: "Minutos de tiempo de retención de enfriamiento",
          green: "100% Verde",
          greenTitle: "Biodegradable",
          greenDesc: "El contenido y el empaque se descomponen naturalmente"
        },
        table: {
          badge: "Comparación Detallada",
          feature: "Característica",
          biodegradable: "Biodegradable",
          freezing: "Velocidad de Congelación",
          retention: "Tiempo de Retención",
          cost: "Costo Efectivo",
          impact: "Impacto Ambiental",
          reusable: "Reutilizable",
          positive: "Positivo",
          negative: "Negativo",
          neutral: "Neutral"
        },
        summary: {
          title: "Operación, Costo, Cumplimiento y Descarte",
          subtitle: "Compara tiempo de congelación, duración de enfriamiento, economía por unidad y manejo al final de vida en una sola vista",
          button: "Contáctanos →"
        }
      },
      contact: {
        header: {
          title: "Contáctanos",
          subtitle: "¿Listo para cambiar a enfriamiento sostenible?"
        },
        info: {
          badge: "Ponte en Contacto",
          email: "Envíanos un Email",
          emailValue: "goforjiwon@kaist.ac.kr",
          location: "Ubicación",
          locationValue: "Daejeon, Corea del Sur",
          locationDesc: "Visítanos en el campus KAIST"
        },
        bottom: {
          tagline: "Mantente Fresco, Mantente Verde",
          desc: "Trabajemos juntos para crear un futuro verde para la entrega de alimentos y la logística de cadena de frío."
        }
      }
    },
    ko: {
      hero: {
        tagline: KO_SHARED.stayCoolStayGreen,
        subtitle: "신선한 식품 배송 및 콜드체인 기업을 위한 지속 가능한 아이스팩",
        cta: "솔루션 알아보기"
      },
      stats: {
        biodegradable: KO_SHARED.biodegradable,
        biodegradableDesc: "내용물과 포장 모두",
        freezing: "더 빠른 냉동",
        freezingDesc: "동일 크기 물 팩과 같은 냉동 사이클에서 측정",
        retention: "더 긴 보냉",
        retentionDesc: "상온 기준 단열 포장 테스트에서 최대 260분 유지",
        emissions: "낮은 탄소 배출",
        emissionsDesc: "기존 아이스팩 대비"
      },
      why: {
        badge: "왜 Eaureco인가?",
        title: "콜드체인 운영에 맞춘 설계",
        description: "팩 회전율, 배송 온도, 폐기 절차를 관리하는 운영팀 기준으로 설계했습니다.",
        sustainable: "지속 가능",
        sustainableDesc: "재생 가능한 재료로 제작",
        performance: "운영 성능",
        performanceDesc: "더 짧은 냉동 사이클로 준비되고 라스트마일 배송 구간까지 보냉 유지",
        costEffective: "비용 효율적",
        costEffectiveDesc: "필요 재고와 폐기 처리 단계를 줄여 운영 비용을 낮춤",
        learnMore: "자세히 알아보기"
      },
      cta: {
        title: "운영·비용·컴플라이언스를 함께 검토",
        subtitle: "현재 배송 경로 기준으로 팩 회전율, 폐기 흐름, ESG 보고 적합성을 점검하세요",
        button: "문의하기"
      },
      problem: {
        header: {
          title: "콜드체인의 딜레마",
          subtitle: "산업은 지속 가능성과 성능 사이에서 선택을 강요받고 있습니다."
        },
        scale: {
          line1: "10억 개",
          line2: "매년 북미에서 매립되는 아이스팩 수량"
        },
        options: {
          title: "실패한 기존 솔루션",
          subtitle: "모든 기존 옵션에는 치명적인 타협점이 있습니다.",
          sap: {
            title: "SAP 아이스팩",
            subtitle: "플라스틱 기반 폴리머",
            pros: ["좋은 성능", "오래 지속"],
            cons: ["유독성 미세 플라스틱", "하수구 막힘", "분해에 100년 이상"]
          },
          water: {
            title: "물 아이스팩",
            subtitle: "100% 물",
            pros: ["친환경", "안전한 폐기"],
            cons: ["너무 빨리 녹음", "낮은 보냉력", "비효율적인 물류"]
          },
          eco: {
            title: "기타 친환경 젤",
            subtitle: "대안 솔루션",
            pros: ["생분해성", "지속 가능"],
            cons: ["터무니없이 비쌈", "낮은 성능", "확장 어려움"]
          }
        },
        impact: {
          title: "숨겨진 비용",
          years: "100년 이상",
          yearsDesc: "매립지에서 SAP 팩이 분해되는 시간",
          costs: "수백만 달러",
          costsDesc: "하수 처리 및 정화에 지출되는 도시 예산",
          damage: "돌이킬 수 없는",
          damageDesc: "바다를 영구적으로 오염시키는 미세 플라스틱"
        },
        stuck: {
          title: "제로섬 게임",
          subtitle: "지금까지는 두 마리 토끼를 잡을 수 없었습니다.",
          performance: "성능",
          performanceDesc: "유독성 플라스틱 사용을 의미",
          sustainability: "지속 가능성",
          sustainabilityDesc: "효율성 희생을 의미"
        },
        breakthrough: {
          title: "이제는 가능합니다.",
          subtitle: "모든 것을 바꾸는 혁신을 소개합니다"
        }
      },
      solution: {
        header: {
          title: "우리의 솔루션",
          subtitle: "타협 없는 고성능 지속 가능한 아이스팩"
        },
        hero: {
          title: "Eaureco 아이스팩",
          badge: "지속 가능한 냉각",
          tagline: "더 나은 성능. 더 낮은 비용. 제로 폐기물."
        },
        sizes: {
          badge: "이용 가능한 크기",
          title: "모든 필요에 맞는 유연한 옵션",
          subtitle: "비즈니스 요구 사항에 맞는 크기를 선택하세요"
        },
        performance: {
          badge: "성능 데이터",
          title: "우수한 콜드체인 성능",
          efficiency: "재고 50% 감소",
          efficiencyDesc: "하루 10,000개 팩",
          efficiencyDetail: "배송 변경 없이 재고를 40,000개에서 20,000개로 감축",
          lasts: "더 오래 지속",
          lastsDesc: "260분의 냉각 보유 시간",
          green: KO_SHARED.ecoFriendly,
          greenTitle: "생분해성",
          greenDesc: "내용물과 포장이 모두 자연적으로 분해"
        },
        benefits: {
          badge: "비즈니스 혜택",
          turnover: {
            title: "더 빠른 회전율",
            desc: "대안보다 4배 빠르게 얼어 더 빠른 재입고 주기와 더 높은 처리량 제공"
          },
          disposal: {
            title: "제로 폐기 비용",
            desc: "퇴비로 배출하세요. 별도 처리나 폐기 비용이 들지 않아 운영 부담을 줄일 수 있습니다"
          }
        },
        general: {
          badge: "주요 이점",
          title: "필요한 모든 것",
          perf: "우수한 성능",
          perfDesc: "냉동 속도 및 보냉 시간에서 기존 옵션을 능가",
          cost: KO_SHARED.costEffective,
          costDesc: "품질과 지속 가능성을 모두 고려한 경쟁력 있는 가격",
          eco: "100% 친환경",
          ecoDesc: "환경 부담을 줄이는 완전 생분해 소재",
          safe: "안전하고 편리함",
          safeDesc: "무독성, 쉬운 폐기, 사용이 간편함"
        },
        impact: {
          badge: "환경 영향",
          title: "진정한 변화 만들기",
          subtitle: "모든 Eaureco 아이스팩은 더 깨끗한 미래를 만드는 데 도움이 됩니다",
          waste: "제로 매립 폐기물",
          wasteDesc: "완전 생분해성 재료",
          ocean: "해양 정화",
          oceanDesc: "환경 영향 감소",
          carbon: "낮은 탄소 발자국",
          carbonDesc: "지속 가능한 생산 프로세스"
        },
        esg: {
          badge: "ESG 준수",
          title: "지속 가능성 목표 달성",
          subtitle: "Eaureco는 운영 성능을 향상시키면서 ESG 목표를 달성하는 데 도움을 줍니다",
          button: "시작하기"
        }
      },
      comparison: {
        header: {
          title: "비교",
          subtitle: "Eaureco가 기존 아이스팩 솔루션을 능가하는 방법을 확인하세요"
        },
        value: {
          title: "Eaureco는 더 저렴하고 더 효과적입니다",
          subtitle: "Eaureco 아이스팩은 환경성과 수익성 모두에서 더 나은 성능을 제공합니다",
          cheap: "저렴함",
          effective: "효과적"
        },
        metrics: {
          freezes: "더 빠른 냉동",
          freezesDesc: "물 기반 아이스팩보다 빠른 냉동",
          lasts: "더 오래 지속",
          lastsDesc: "냉각 보유 시간(분)",
          green: KO_SHARED.ecoFriendly,
          greenTitle: "생분해성",
          greenDesc: "내용물과 포장 모두 자연적으로 분해"
        },
        table: {
          badge: "상세 비교",
          feature: "특징",
          biodegradable: KO_SHARED.biodegradable,
          freezing: "냉동 속도",
          retention: "보냉 시간",
          cost: KO_SHARED.costEffective,
          impact: "환경 영향",
          reusable: "재사용 가능",
          positive: "긍정적",
          negative: "부정적",
          neutral: "중립"
        },
        summary: {
          title: "운영·비용·컴플라이언스·폐기 비교",
          subtitle: "냉동 소요 시간, 보냉 지속 시간, 단가 구조, 사용 후 처리 방식을 한 화면에서 비교하세요",
          button: "문의하기 →"
        }
      },
      contact: {
        header: {
          title: "연락처",
          subtitle: "지속 가능한 냉각으로 전환할 준비가 되셨나요?"
        },
        info: {
          badge: KO_SHARED.contactCta,
          email: "이메일 보내기",
          emailValue: "goforjiwon@kaist.ac.kr",
          location: "위치",
          locationValue: "대전, 대한민국",
          locationDesc: "KAIST 캠퍼스 방문"
        },
        bottom: {
          tagline: KO_SHARED.stayCoolStayGreen,
          desc: "식품 배송 및 콜드체인 물류를 위한 친환경 미래를 함께 만들어갑시다."
        }
      }
    }
  },
  problem: {
    en: {
      header: {
        title: "The Cold Chain Dilemma",
        subtitle: "The industry is forced to choose between sustainability and performance."
      },
      scale: {
        line1: "1 Billion",
        line2: "ice packs landfill annually in North America"
      },
      options: {
        title: "Current Solutions Failed",
        subtitle: "Every existing option comes with a critical compromise.",
        sap: {
          title: "SAP Ice Packs",
          subtitle: "Plastic-based polymers",
          pros: ["Good performance", "Long lasting"],
          cons: ["Toxic microplastics", "Clogs sewage", "100+ years to decompose"]
        },
        water: {
          title: "Water Packs",
          subtitle: "100% Water",
          pros: ["Eco-friendly", "Safe disposal"],
          cons: ["Melts too fast", "Poor retention", "Inefficient logistics"]
        },
        eco: {
          title: "Other Eco-Gels",
          subtitle: "Alternative solutions",
          pros: ["Biodegradable", "Sustainable"],
          cons: ["Prohibitively expensive", "Lower performance", "Hard to scale"]
        }
      },
      impact: {
        title: "The Hidden Cost",
        years: "100+ Years",
        yearsDesc: "Time for SAP packs to decompose in landfills",
        costs: "$ Millions",
        costsDesc: "Spent by cities on sewage repair & cleanup",
        damage: "Irreversible",
        damageDesc: "Microplastics permanently contaminating our oceans"
      },
      stuck: {
        title: "The Zero-Sum Game",
        subtitle: "Until now, you couldn't have both.",
        performance: "Performance",
        performanceDesc: "Means using toxic plastics",
        sustainability: "Sustainability",
        sustainabilityDesc: "Means sacrificing efficiency"
      },
      cta: {
        title: "Stop Compromising",
        subtitle: "Eaureco delivers performance and sustainability in one package.",
        button: "See the Solution"
      }
    },
    es: {
      header: {
        title: "El Dilema de la Cadena de Frío",
        subtitle: "La industria se ve obligada a elegir entre sostenibilidad y rendimiento."
      },
      scale: {
        line1: "1 Billón",
        line2: "de paquetes de hielo en vertederos anualmente en Norteamérica"
      },
      options: {
        title: "Las Soluciones Actuales Fallaron",
        subtitle: "Cada opción existente viene con un compromiso crítico.",
        sap: {
          title: "Paquetes SAP",
          subtitle: "Polímeros plásticos",
          pros: ["Buen rendimiento", "Larga duración"],
          cons: ["Microplásticos tóxicos", "Obstruye desagües", "+100 años en descomponerse"]
        },
        water: {
          title: "Paquetes de Agua",
          subtitle: "100% Agua",
          pros: ["Ecológico", "Eliminación segura"],
          cons: ["Se derrite rápido", "Poca retención", "Logística ineficiente"]
        },
        eco: {
          title: "Otros Eco-Geles",
          subtitle: "Soluciones alternativas",
          pros: ["Biodegradable", "Sostenible"],
          cons: ["Prohibitivamente caro", "Menor rendimiento", "Difícil de escalar"]
        }
      },
      impact: {
        title: "El Costo Oculto",
        years: "+100 Años",
        yearsDesc: "Tiempo para que los paquetes SAP se descompongan",
        costs: "$ Millones",
        costsDesc: "Gastados por ciudades en limpieza y reparaciones",
        damage: "Irreversible",
        damageDesc: "Microplásticos contaminando permanentemente nuestros océanos"
      },
      stuck: {
        title: "El Juego de Suma Cero",
        subtitle: "Hasta ahora, no podías tener ambos.",
        performance: "Rendimiento",
        performanceDesc: "Significa usar plásticos tóxicos",
        sustainability: "Sostenibilidad",
        sustainabilityDesc: "Significa sacrificar eficiencia"
      },
      cta: {
        title: "Deja de Comprometerte",
        subtitle: "Eaureco ofrece rendimiento y sostenibilidad en un solo paquete.",
        button: "Ver la Solución"
      }
    },
    ko: {
      header: {
        title: "콜드체인의 딜레마",
        subtitle: "산업은 지속 가능성과 성능 사이에서 선택을 강요받고 있습니다."
      },
      scale: {
        line1: "10억 개",
        line2: "매년 북미에서 매립되는 아이스팩 수량"
      },
      options: {
        title: "실패한 기존 솔루션",
        subtitle: "모든 기존 옵션에는 치명적인 타협점이 있습니다.",
        sap: {
          title: "SAP 아이스팩",
          subtitle: "플라스틱 기반 폴리머",
          pros: ["좋은 성능", "오래 지속"],
          cons: ["유독성 미세 플라스틱", "하수구 막힘", "분해에 100년 이상"]
        },
        water: {
          title: "물 아이스팩",
          subtitle: "100% 물",
          pros: ["친환경", "안전한 폐기"],
          cons: ["너무 빨리 녹음", "낮은 보냉력", "비효율적인 물류"]
        },
        eco: {
          title: "기타 친환경 젤",
          subtitle: "대안 솔루션",
          pros: ["생분해성", "지속 가능"],
          cons: ["터무니없이 비쌈", "낮은 성능", "확장 어려움"]
        }
      },
      impact: {
        title: "숨겨진 비용",
        years: "100년 이상",
        yearsDesc: "매립지에서 SAP 팩이 분해되는 시간",
        costs: "수백만 달러",
        costsDesc: "하수 처리 및 정화에 지출되는 도시 예산",
        damage: "돌이킬 수 없는",
        damageDesc: "바다를 영구적으로 오염시키는 미세 플라스틱"
      },
      stuck: {
        title: "제로섬 게임",
        subtitle: "지금까지는 두 마리 토끼를 잡을 수 없었습니다.",
        performance: "성능",
        performanceDesc: "유독성 플라스틱 사용을 의미",
        sustainability: "지속 가능성",
        sustainabilityDesc: "효율성 희생을 의미"
      },
      cta: {
        title: "타협하지 마세요",
        subtitle: "Eaureco는 성능과 지속 가능성을 하나의 패키지로 제공합니다.",
        button: "솔루션 보기"
      }
    }
  },
  solution: {
    en: {
      header: {
        title: "Our Solution",
        subtitle: "Revolutionizing cold chain with sustainable materials"
      },
      hero: {
        badge: "Meet Eaureco",
        title: "Your sustainable cooling solution",
        features: [
        { title: "Organic Ice Pack", desc: "100% biodegradable, both content and packaging" },
        { title: "Better Thermal Properties", desc: "Superior cooling performance that lasts longer" },
        { title: "Sustainable Origin", desc: "Made from renewable bio-based materials" }]

      },
      sizes: {
        large: { name: "LARGE", weight: "500g", desc: "Ideal for grocery delivery, seafood, pharmaceutical logistics" },
        medium: { name: "MEDIUM", weight: "250g", desc: "Ideal for restaurants, food delivery, meal kits" },
        small: { name: "SMALL", weight: "100g", desc: "Ideal for meal kits, bakeries, subscription boxes" }
      },
      performance: {
        title: "Superior Performance",
        freezing: "Freezing Time",
        retention: "Stays Cool for Longer",
        water: "Water",
        sap: "SAP (Plastic)",
        note: "* Experiments conducted in laboratory conditions using 4% solution for SAP and eaureco"
      },
      turnover: {
        title: "Higher Turnover Rate",
        desc: "4x faster freezing means your ice packs are ready quicker. Process more orders and boost efficiency without extra freezer space."
      },
      disposal: {
        title: "Simple Disposal",
        desc: "100% biodegradable from gel to outer package — no cutting, no separating. Just toss it away and let nature do the rest."
      },
      sargassum: {
        badge: "From Waste to Wonder",
        title: "Millions of tons washed up, millions of wasted tax for disposal",
        desc: "Sargassum seaweed is a massive environmental problem. It washes up on beaches in enormous quantities, costing communities millions in cleanup and disposal. We transform this waste into a valuable resource."
      },
      benefits: {
        badge: "Why Choose eaureco",
        biodegradable: "Biodegradable",
        biodegradableDesc: "100% biodegradable materials that break down naturally without harming the environment",
        sustainable: "Sustainable",
        sustainableDesc: "Made from renewable materials, creating value from nature",
        costEfficient: "Cost-Efficient",
        costEfficientDesc: "Competitive pricing that doesn't compromise on performance or sustainability"
      },
      impact: {
        badge: "Environmental Impact",
        title: "The Power of Switching to Eaureco",
        subtitle: "By replacing just 50% of ice packs in North America",
        co2: "CO₂-equivalent/year",
        credit: "Carbon Credit",
        desc: "Join the movement towards a sustainable future",
        emissions: "Lower Cold-Chain Emissions",
        emissionsDesc: "vs. traditional LDPE/Water ice packs"
      },
      esg: {
        badge: "ESG COMPLIANCE",
        title: "Eaureco reduces your cooling emissions by more than half, with zero changes to your operations.",
        benefits: [
        "Made from advanced biodegradable bio-materials",
        "Breaks down naturally in <45 days",
        "No microplastics, no toxic residues",
        "Safe disposal options",
        "Supports Scope 3 reductions and corporate ESG metrics"],

        quote: "Switching to Eaureco saves as much CO₂ as planting 3 trees, for every 1,000 deliveries.",
        subtitle: "Lower carbon. Lower cost. Zero operational trade-offs.",
        saved: "187 kg CO₂e",
        savedDesc: "Saved by 1,000 eaureco ice pack"
      }
    },
    es: {
      header: {
        title: "Nuestra Solución",
        subtitle: "Revolucionando la cadena de frío con materiales sostenibles"
      },
      hero: {
        badge: "Conoce Eaureco",
        title: "Tu solución de enfriamiento sostenible",
        features: [
        { title: "Paquete de Hielo Orgánico", desc: "100% biodegradable, tanto contenido como empaque" },
        { title: "Mejores Propiedades Térmicas", desc: "Rendimiento de enfriamiento superior que dura más" },
        { title: "Origen Sostenible", desc: "Hecho de materiales bio-basados renovables" }]

      },
      sizes: {
        large: { name: "GRANDE", weight: "500g", desc: "Ideal para entrega de comestibles, mariscos, logística farmacéutica" },
        medium: { name: "MEDIANO", weight: "250g", desc: "Ideal para restaurantes, entrega de comida, kits de comida" },
        small: { name: "PEQUEÑO", weight: "100g", desc: "Ideal para kits de comida, panaderías, cajas de suscripción" }
      },
      performance: {
        title: "Rendimiento Superior",
        freezing: "Tiempo de Congelación",
        retention: "Se Mantiene Frío por Más Tiempo",
        water: "Agua",
        sap: "SAP (Plástico)",
        note: "* Experimentos realizados en condiciones de laboratorio usando solución al 4% para SAP y eaureco"
      },
      turnover: {
        title: "Mayor Tasa de Rotación",
        desc: "La congelación 4 veces más rápida significa que tus paquetes de hielo están listos más rápido. Procesa más pedidos y aumenta la eficiencia sin espacio adicional en el congelador."
      },
      disposal: {
        title: "Eliminación Simple",
        desc: "100% biodegradable desde el gel hasta el paquete exterior — sin cortar, sin separar. Solo deséchalo y deja que la naturaleza haga el resto."
      },
      sargassum: {
        badge: "De Residuo a Maravilla",
        title: "Millones de toneladas arrastradas, millones de impuestos desperdiciados en eliminación",
        desc: "Las algas sargazo son un problema ambiental masivo. Llegan a las playas en cantidades enormes, costando a las comunidades millones en limpieza y eliminación. Transformamos estos residuos en un recurso valioso."
      },
      benefits: {
        badge: "Por Qué Elegir eaureco",
        biodegradable: "Biodegradable",
        biodegradableDesc: "Materiales 100% biodegradables que se descomponen naturalmente sin dañar el medio ambiente",
        sustainable: "Sostenible",
        sustainableDesc: "Hecho de materiales renovables, creando valor desde la naturaleza",
        costEfficient: "Costo-Eficiente",
        costEfficientDesc: "Precios competitivos que no comprometen el rendimiento ni la sostenibilidad"
      },
      impact: {
        badge: "Impacto Ambiental",
        title: "El Poder de Cambiar a Eaureco",
        subtitle: "Al reemplazar solo el 50% de los paquetes de hielo en América del Norte",
        co2: "equivalente-CO₂/año",
        credit: "Crédito de Carbono",
        desc: "Únete al movimiento hacia un futuro sostenible",
        emissions: "Menores Emisiones de Cadena de Frío",
        emissionsDesc: "vs. paquetes de hielo tradicionales LDPE/Agua"
      },
      esg: {
        badge: "CUMPLIMIENTO ESG",
        title: "Eaureco reduce tus emisiones de enfriamiento en más de la mitad, sin cambios en tus operaciones.",
        benefits: [
        "Hecho de biomateriales biodegradables avanzados",
        "Se descompone naturalmente en <45 días",
        "Sin microplásticos, sin residuos tóxicos",
        "Opciones de eliminación seguras",
        "Apoya las reducciones de Alcance 3 y las métricas ESG corporativas"],

        quote: "Cambiar a Eaureco ahorra tanto CO₂ como plantar 3 árboles, por cada 1,000 entregas.",
        subtitle: "Menor carbono. Menor costo. Cero compromisos operacionales.",
        saved: "187 kg CO₂e",
        savedDesc: "Ahorrado por 1,000 paquetes de hielo eaureco"
      }
    },
    ko: {
      header: {
        title: "솔루션",
        subtitle: "지속 가능한 소재를 활용한 콜드체인 혁명"
      },
      hero: {
        badge: "Eaureco를 만나보세요",
        title: "지속 가능한 냉각 솔루션",
        features: [
        { title: "유기농 아이스팩", desc: "내용물과 포장 모두 100% 생분해성" },
        { title: "우수한 열 특성", desc: "더 오래 지속되는 뛰어난 냉각 성능" },
        { title: "지속 가능한 원료", desc: "재생 가능한 바이오 소재로 제작" }]

      },
      sizes: {
        large: { name: "대형", weight: "500g", desc: "식료품 배송, 해산물, 제약 물류에 이상적" },
        medium: { name: "중형", weight: "250g", desc: "레스토랑, 음식 배달, 밀키트에 이상적" },
        small: { name: "소형", weight: "100g", desc: "밀키트, 제과점, 구독 박스에 이상적" }
      },
      performance: {
        title: "뛰어난 성능",
        freezing: "냉동 시간",
        retention: "더 오래 차갑게 유지",
        water: "물",
        sap: "SAP (플라스틱)",
        note: "* SAP 및 eaureco의 4% 용액을 사용한 실험실 조건에서 수행된 실험"
      },
      turnover: {
        title: "높은 회전율",
        desc: "대안 대비 4배 빠른 냉동 속도로 재입고 주기를 단축하고 처리량을 높일 수 있습니다."
      },
      disposal: {
        title: "간편한 폐기",
        desc: "젤부터 외부 포장까지 100% 생분해성 — 자르거나 분리할 필요 없이 그냥 버리면 자연이 처리합니다."
      },
      sargassum: {
        badge: "폐기물의 가치 전환",
        title: "수백만 톤이 밀려오고, 수백만의 세금이 처리에 낭비됩니다",
        desc: "모자반 해조류는 막대한 환경 문제입니다. 엄청난 양이 해변에 밀려오며, 지역 사회는 청소 및 처리에 수백만 달러를 지출합니다. 우리는 이 폐기물을 귀중한 자원으로 변환합니다."
      },
      benefits: {
        badge: "eaureco를 선택하는 이유",
        biodegradable: KO_SHARED.biodegradable,
        biodegradableDesc: "환경에 해를 끼치지 않고 자연적으로 분해되는 100% 생분해성 재료",
        sustainable: "지속 가능",
        sustainableDesc: "재생 가능한 소재로 제작되어 가치를 창출",
        costEfficient: "비용 효율적",
        costEfficientDesc: "성능이나 지속 가능성을 훼손하지 않는 경쟁력 있는 가격"
      },
      impact: {
        badge: "환경 영향",
        title: "Eaureco로 전환하는 힘",
        subtitle: "북미에서 아이스팩의 50%만 교체해도",
        co2: "CO₂ 상당량/년",
        credit: "탄소 크레딧",
        desc: "지속 가능한 미래를 향한 운동에 동참하세요",
        emissions: "탄소 배출량 감소",
        emissionsDesc: "기존 LDPE/물 아이스팩 대비"
      },
      esg: {
        badge: "ESG 준수",
        title: "Eaureco는 운영에 변화 없이 냉각 배출을 절반 이상 줄입니다.",
        benefits: [
        "고급 생분해성 바이오 소재로 제작",
        "45일 이내에 자연 분해",
        "미세 플라스틱 없음, 독성 잔류물 없음",
        "안전한 폐기 옵션",
        "범위 3 감축 및 기업 ESG 지표 지원"],

        quote: "Eaureco로 전환하면 1,000건의 배송당 나무 3그루를 심는 것만큼 CO₂를 절약합니다.",
        subtitle: "낮은 탄소. 낮은 비용. 운영상 타협 없음.",
        saved: "187 kg CO₂e",
        savedDesc: "Eaureco 아이스팩 1,000개 사용 기준 절감량"
      }
    }
  },
  comparison: {
    en: {
      header: {
        title: "Comparison",
        subtitle: "See how Eaureco outperforms traditional ice pack solutions"
      },
      value: {
        title: "Eaureco is Cheaper & More Effective",
        subtitle: "Our ice packs deliver superior performance while being better for the environment and your bottom line",
        cheap: "Cheap",
        effective: "Effective"
      },
      metrics: {
        freezes: "Freezes Faster",
        freezesDesc: "Faster freezing than water-based ice packs",
        lasts: "Lasts Longer",
        lastsDesc: "Minutes of cooling retention time",
        green: "100% Green",
        greenTitle: "Biodegradable",
        greenDesc: "Content and packaging both break down naturally"
      },
      table: {
        badge: "Detailed Comparison",
        feature: "Feature",
        biodegradable: "Biodegradable",
        freezing: "Freezing Speed",
        retention: "Retention Time",
        cost: "Cost Effective",
        impact: "Environmental Impact",
        reusable: "Reusable",
        positive: "Positive",
        negative: "Negative",
        neutral: "Neutral"
      },
      summary: {
        title: "The Clear Winner",
        subtitle: "Eaureco outperforms traditional ice packs in every category that matters: performance, cost-effectiveness, and sustainability",
        button: "Get in Touch →"
      }
    },
    es: {
      header: {
        title: "Comparación",
        subtitle: "Ve cómo Eaureco supera a las soluciones tradicionales de paquetes de hielo"
      },
      value: {
        title: "Eaureco es Más Barato y Más Efectivo",
        subtitle: "Nuestros paquetes de hielo ofrecen un rendimiento superior mientras son mejores para el medio ambiente y tu negocio",
        cheap: "Económico",
        effective: "Efectivo"
      },
      metrics: {
        freezes: "Se Congela Más Rápido",
        freezesDesc: "Más rápido que los paquetes de hielo a base de agua",
        lasts: "Dura Más Tiempo",
        lastsDesc: "Minutos de tiempo de retención de enfriamiento",
        green: "100% Verde",
        greenTitle: "Biodegradable",
        greenDesc: "El contenido y el empaque se descomponen naturalmente"
      },
      table: {
        badge: "Comparación Detallada",
        feature: "Característica",
        biodegradable: "Biodegradable",
        freezing: "Velocidad de Congelación",
        retention: "Tiempo de Retención",
        cost: "Costo Efectivo",
        impact: "Impacto Ambiental",
        reusable: "Reutilizable",
        positive: "Positivo",
        negative: "Negativo",
        neutral: "Neutral"
      },
      summary: {
        title: "El Claro Ganador",
        subtitle: "Eaureco supera a los paquetes de hielo tradicionales en todas las categorías que importan: rendimiento, costo-efectividad y sostenibilidad",
        button: "Contáctanos →"
      }
    },
    ko: {
      header: {
        title: "비교",
        subtitle: "Eaureco가 기존 아이스팩 솔루션을 능가하는 방법을 확인하세요"
      },
      value: {
        title: "Eaureco는 더 저렴하고 더 효과적입니다",
        subtitle: "Eaureco 아이스팩은 환경성과 수익성 모두에서 더 나은 성능을 제공합니다",
        cheap: "저렴함",
        effective: "효과적"
      },
      metrics: {
        freezes: "더 빠른 냉동",
        freezesDesc: "물 기반 아이스팩보다 빠른 냉동",
        lasts: "더 오래 지속",
        lastsDesc: "냉각 보유 시간(분)",
        green: "100% 친환경",
        greenTitle: "생분해성",
        greenDesc: "내용물과 포장 모두 자연적으로 분해"
      },
      table: {
        badge: "상세 비교",
        feature: "특징",
        biodegradable: KO_SHARED.biodegradable,
        freezing: "냉동 속도",
        retention: "보냉 시간",
        cost: "비용 효율적",
        impact: "환경 영향",
        reusable: "재사용 가능",
        positive: "긍정적",
        negative: "부정적",
        neutral: "중립"
      },
      summary: {
        title: "명백한 승자",
        subtitle: "성능, 비용 효율성 및 지속 가능성 - Eaureco는 중요한 모든 범주에서 기존 아이스팩을 능가합니다",
        button: "문의하기 →"
      }
    }
  },
  contact: {
    en: {
      header: {
        title: "Contact Us",
        subtitle: "Ready to make the switch to sustainable cooling?"
      },
      info: {
        badge: "Get in Touch",
        email: "Email Us",
        emailValue: "goforjiwon@kaist.ac.kr",
        location: "Location",
        locationValue: "Daejeon, South Korea",
        locationDesc: "Visit us at KAIST campus"
      },

      why: {
        badge: "Why Work With Us",
        sustainable: "Sustainable Solution",
        sustainableDesc: "100% biodegradable ice packs that help clean our oceans",
        performance: "Better Performance",
        performanceDesc: "Superior cooling that lasts longer and freezes faster",
        cost: "Cost Effective",
        costDesc: "Competitive pricing without compromising quality"
      },
      bottom: {
        tagline: KO_SHARED.stayCoolStayGreen,
        desc: "Let's work together to create a green future for food delivery and cold chain logistics."
      }
    },
    es: {
      header: {
        title: "Contáctanos",
        subtitle: "¿Listo para cambiar a enfriamiento sostenible?"
      },
      info: {
        badge: "Ponte en Contacto",
        email: "Envíanos un Email",
        emailValue: "goforjiwon@kaist.ac.kr",
        location: "Ubicación",
        locationValue: "Daejeon, Corea del Sur",
        locationDesc: "Visítanos en el campus KAIST"
      },

      why: {
        badge: "Por Qué Trabajar Con Nosotros",
        sustainable: "Solución Sostenible",
        sustainableDesc: "Paquetes de hielo 100% biodegradables que ayudan a limpiar nuestros océanos",
        performance: "Mejor Rendimiento",
        performanceDesc: "Enfriamiento superior que dura más y se congela más rápido",
        cost: "Costo Efectivo",
        costDesc: "Precios competitivos sin comprometer la calidad"
      },
      bottom: {
        tagline: "Mantente Fresco, Mantente Verde",
        desc: "Trabajemos juntos para crear un futuro verde para la entrega de alimentos y la logística de cadena de frío."
      }
      },
      ko: {
      header: {
        title: "연락처",
        subtitle: "지속 가능한 냉각으로 전환할 준비가 되셨나요?"
      },
      info: {
        badge: "문의하기",
        email: "이메일 보내기",
        emailValue: "goforjiwon@kaist.ac.kr",
        location: "위치",
        locationValue: "대전, 대한민국",
        locationDesc: "KAIST 캠퍼스 방문"
      },

      why: {
        badge: "우리와 함께 일하는 이유",
        sustainable: "지속 가능한 솔루션",
        sustainableDesc: "해양을 정화하는 데 도움이 되는 100% 생분해성 아이스팩",
        performance: "더 나은 성능",
        performanceDesc: "더 오래 유지되고 더 빠르게 냉동되는 안정적인 보냉 성능",
        cost: "비용 효율적",
        costDesc: "품질을 유지하면서도 경쟁력 있는 가격"
      },
      bottom: {
        tagline: KO_SHARED.stayCoolStayGreen,
        desc: "식품 배송 및 콜드체인 물류를 위한 친환경 미래를 함께 만들어갑시다."
      }
      }
      },
};

const isPlainObject = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);

const mergeWithFallback = (fallback, current) => {
  if (Array.isArray(fallback)) {
    return Array.isArray(current) ? current : fallback;
  }

  if (!isPlainObject(fallback)) {
    return current === undefined ? fallback : current;
  }

  const merged = { ...fallback };
  const source = isPlainObject(current) ? current : {};

  Object.keys(source).forEach((key) => {
    merged[key] = key in fallback
      ? mergeWithFallback(fallback[key], source[key])
      : source[key];
  });

  return merged;
};

export const getT = (language) => {
  const langKey = language && language in translations.home ? language : 'en';

  return {
    home: mergeWithFallback(translations.home.en, translations.home[langKey]),
    problem: mergeWithFallback(translations.problem.en, translations.problem[langKey]),
    solution: mergeWithFallback(translations.solution.en, translations.solution[langKey]),
    comparison: mergeWithFallback(translations.comparison.en, translations.comparison[langKey]),
    contact: mergeWithFallback(translations.contact.en, translations.contact[langKey]),
  };
};
