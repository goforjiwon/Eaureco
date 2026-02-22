import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Recycle, Snowflake, TrendingDown, AlertTriangle, Trash2, Skull, Droplets, XCircle, DollarSign, Timer, Thermometer, CheckCircle, Mail, MapPin, TrendingUp, Scale } from "lucide-react";
import { useLanguage } from "../Layout";

export default function Home() {
  const { language } = useLanguage();
  
  const translations = {
    en: {
      hero: {
        tagline: "Stay Cool, Stay Green",
        subtitle: "Sustainable ice packs for fresh food delivery and cold chain companies",
        cta: "Discover Our Solution"
      },
      stats: {
        biodegradable: "Biodegradable",
        biodegradableDesc: "Both content and packaging",
        freezing: "Faster Freezing",
        freezingDesc: "Compared to water-based packs",
        retention: "Longer Retention",
        retentionDesc: "Keeps things cool for longer",
        emissions: "Lower Carbon Emissions",
        emissionsDesc: "vs. traditional ice packs"
      },
      why: {
        badge: "Why Eaureco?",
        title: "Sustainable Innovation",
        description: "We create high-performance, sustainable, and affordable ice packs.",
        sustainable: "Sustainable",
        sustainableDesc: "Made from renewable materials",
        performance: "Superior Performance",
        performanceDesc: "Freezes faster and lasts longer",
        costEffective: "Cost-Effective",
        costEffectiveDesc: "Cheaper than traditional alternatives",
        learnMore: "Learn More"
      },
      cta: {
        title: "Ready to Go Green?",
        subtitle: "Join us in revolutionizing sustainable cooling solutions",
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
        ctaBtn: {
          title: "Stop Compromising",
          subtitle: "Eaureco delivers performance and sustainability in one package.",
          button: "See the Solution"
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
            desc: "Flush it down the toilet or toss in compost. No special handling, no disposal fees, no environmental guilt"
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
          title: "The Clear Winner",
          subtitle: "Eaureco outperforms traditional ice packs in every category that matters: performance, cost-effectiveness, and sustainability",
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
          tagline: "Stay Cool, Stay Green",
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
        freezingDesc: "Comparado con paquetes a base de agua",
        retention: "Mayor Retención",
        retentionDesc: "Mantiene las cosas frías por más tiempo",
        emissions: "Menores Emisiones de Carbono",
        emissionsDesc: "vs. paquetes de hielo tradicionales"
      },
      why: {
        badge: "¿Por Qué Eaureco?",
        title: "Innovación Sostenible",
        description: "Creamos paquetes de hielo sostenibles, de alto rendimiento y económicos.",
        sustainable: "Sostenible",
        sustainableDesc: "Hecho de materiales renovables",
        performance: "Rendimiento Superior",
        performanceDesc: "Se congela más rápido y dura más",
        costEffective: "Costo-Efectivo",
        costEffectiveDesc: "Más barato que las alternativas tradicionales",
        learnMore: "Aprende Más"
      },
      cta: {
        title: "¿Listo para Ser Ecológico?",
        subtitle: "Únete a nosotros en la revolución de soluciones de enfriamiento sostenibles",
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
        ctaBtn: {
          title: "Deja de Comprometerte",
          subtitle: "Eaureco ofrece rendimiento y sostenibilidad en un solo paquete.",
          button: "Ver la Solución"
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
            desc: "Tíralo por el inodoro o al compost. Sin manejo especial, sin tarifas de eliminación, sin culpa ambiental"
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
          title: "El Claro Ganador",
          subtitle: "Eaureco supera a los paquetes de hielo tradicionales en todas las categorías que importan: rendimiento, costo-efectividad y sostenibilidad",
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
        tagline: "Stay Cool, Stay Green",
        subtitle: "신선한 식품 배송 및 콜드체인 기업을 위한 지속 가능한 아이스팩",
        cta: "솔루션 알아보기"
      },
      stats: {
        biodegradable: "생분해성",
        biodegradableDesc: "내용물과 포장 모두",
        freezing: "더 빠른 냉동",
        freezingDesc: "물 기반 팩 대비",
        retention: "더 긴 보냉",
        retentionDesc: "더 오래 차갑게 유지",
        emissions: "낮은 탄소 배출",
        emissionsDesc: "기존 아이스팩 대비"
      },
      why: {
        badge: "왜 Eaureco인가?",
        title: "지속 가능한 혁신",
        description: "우리는 고성능의 지속 가능하고 저렴한 아이스팩을 만듭니다.",
        sustainable: "지속 가능",
        sustainableDesc: "재생 가능한 재료로 제작",
        performance: "뛰어난 성능",
        performanceDesc: "더 빠르게 얼고 더 오래 지속",
        costEffective: "비용 효율적",
        costEffectiveDesc: "기존 대안보다 저렴",
        learnMore: "자세히 알아보기"
      },
      cta: {
        title: "친환경으로 전환할 준비가 되셨나요?",
        subtitle: "지속 가능한 냉각 솔루션 혁명에 동참하세요",
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
        ctaBtn: {
          title: "타협하지 마세요",
          subtitle: "Eaureco는 성능과 지속 가능성을 하나의 패키지로 제공합니다.",
          button: "솔루션 보기"
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
          green: "100% 친환경",
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
            desc: "화장실에 버리거나 퇴비에 버리세요. 특별한 처리, 폐기 비용, 환경적 죄책감이 없습니다"
          }
        },
        general: {
          badge: "주요 이점",
          title: "필요한 모든 것",
          perf: "우수한 성능",
          perfDesc: "냉동 속도 및 보냉 시간에서 기존 옵션을 능가",
          cost: "비용 효율적",
          costDesc: "품질이나 지속 가능성을 타협하지 않는 경쟁력 있는 가격",
          eco: "100% 친환경",
          ecoDesc: "환경 영향 제로의 완전 생분해성",
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
          subtitle: "우리의 아이스팩은 환경과 수익에 더 나은 뛰어난 성능을 제공합니다",
          cheap: "저렴함",
          effective: "효과적"
        },
        metrics: {
          freezes: "더 빠르게 얼음",
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
          biodegradable: "생분해성",
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
      },
      contact: {
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
        bottom: {
          tagline: "Stay Cool, Stay Green",
          desc: "식품 배송 및 콜드체인 물류를 위한 친환경 미래를 함께 만들어갑시다."
        }
      }
    }
  };

  const t = translations[language];

  const comparisonData = [
    {
      feature: t.comparison.table.biodegradable,
      eaureco: true,
      sap: false,
      water: false,
      compost: "(Plastic package)"
    },
    {
      feature: t.comparison.table.freezing,
      eaureco: "0.25",
      sap: "0.76",
      water: "1.0",
      compost: ">1"
    },
    {
      feature: t.comparison.table.retention,
      eaureco: "260 min",
      sap: "220 min",
      water: "180 min",
      compost: "200 min"
    },
    {
      feature: t.comparison.table.cost,
      eaureco: true,
      sap: true,
      water: true,
      compost: false
    },
    {
      feature: t.comparison.table.impact,
      eaureco: t.comparison.table.positive,
      sap: t.comparison.table.negative,
      water: t.comparison.table.neutral,
      compost: t.comparison.table.positive
    }
  ];

  const OptionCard = ({ icon, title, subtitle, pros, cons, theme }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow border border-gray-100"
    >
      <div className={`inline-flex p-3 rounded-lg mb-4 ${theme === 'red' ? 'bg-rose-100' : theme === 'blue' ? 'bg-blue-100' : 'bg-teal-100'}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className="text-gray-500 text-sm mb-4">{subtitle}</p>
      
      <div className="space-y-3">
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Pros</p>
          {pros.map((pro, i) => (
            <div key={i} className="flex items-start gap-2 mb-1">
              <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-700">{pro}</p>
            </div>
          ))}
        </div>
        
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Cons</p>
          {cons.map((con, i) => (
            <div key={i} className="flex items-start gap-2 mb-1">
              <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-700">{con}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen">
      {/* HOME SECTION */}
      <section id="home" className="relative min-h-[85vh] flex items-center justify-center px-4 py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690e0407081d3063332a3e99/0885b584e_image.png')"
          }}>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/85 via-teal-900/75 to-cyan-900/85"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            <div className="mb-6 flex justify-center">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690e0407081d3063332a3e99/802916f9d_KakaoTalk_20260203_182916893_03.png" 
                alt="eaureco" 
                className="h-24 md:h-32 w-auto"
              />
            </div>
            <div className="inline-block bg-gradient-to-r from-lime-400 to-emerald-400 px-8 py-4 rounded-2xl shadow-2xl mb-8">
              <p className="text-2xl md:text-4xl font-bold neo-text text-gray-900">
                {t.hero.tagline}
              </p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }} 
            className="text-xl md:text-2xl text-white/95 font-medium mb-12 max-w-3xl mx-auto">
            {t.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group">
              <div className="nav-glass rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Recycle className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-5xl font-bold neo-text text-emerald-600 mb-2 mt-4">100%</h3>
                <p className="text-lg font-semibold text-gray-800">{t.stats.biodegradable}</p>
                <p className="text-sm text-gray-600 mt-2">{t.stats.biodegradableDesc}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative group">
              <div className="nav-glass rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Snowflake className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-5xl font-bold neo-text text-cyan-600 mb-2 mt-4">4x</h3>
                <p className="text-lg font-semibold text-gray-800">{t.stats.freezing}</p>
                <p className="text-sm text-gray-600 mt-2">{t.stats.freezingDesc}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative group">
              <div className="nav-glass rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                  <TrendingDown className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-5xl font-bold neo-text text-teal-600 mb-2 mt-4">63.4%</h3>
                <p className="text-lg font-semibold text-gray-800">{t.stats.emissions}</p>
                <p className="text-sm text-gray-600 mt-2">{t.stats.emissionsDesc}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Eaureco Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}>
              <div className="space-y-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 rounded-3xl blur-2xl opacity-60"></div>
                  <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 shadow-2xl">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690e0407081d3063332a3e99/d8c04ec5c_KakaoTalk_20260208_211839501.jpg"
                      alt="eaureco ice pack"
                      className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}>
              <div className="inline-block bg-gradient-to-r from-lime-400 to-emerald-400 px-6 py-2 rounded-full mb-6">
                <h2 className="text-sm font-bold neo-text text-gray-900 uppercase tracking-wider">{t.why.badge}</h2>
              </div>
              
              <h3 className="text-5xl font-bold neo-text text-gray-900 mb-6 leading-tight">
                {t.why.title}
              </h3>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {t.why.description}
              </p>

              <div className="space-y-4">
                <div className="nav-glass rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-lg mb-1 flex items-center gap-2">
                    <span className="text-emerald-600">♻️</span> {t.why.sustainable}
                  </h4>
                  <p className="text-gray-700">{t.why.sustainableDesc}</p>
                </div>
                <div className="nav-glass rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-lg mb-1 flex items-center gap-2">
                    <span className="text-cyan-600">❄️</span> {t.why.performance}
                  </h4>
                  <p className="text-gray-700">{t.why.performanceDesc}</p>
                </div>
                <div className="nav-glass rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-lg mb-1 flex items-center gap-2">
                    <span className="text-lime-600">$</span> {t.why.costEffective}
                  </h4>
                  <p className="text-gray-700">{t.why.costEffectiveDesc}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section id="problem" className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        {/* Hero Section */}
        <section className="py-24 px-6 md:px-12 border-b border-gray-200 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-gray-900 leading-tight">
                {t.problem.header.title}
              </h1>
              <p className="text-2xl text-gray-500 font-medium max-w-2xl mx-auto">
                {t.problem.header.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Scale Statistic */}
        <section className="py-20 px-6 bg-gray-900 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <div className="flex flex-col items-center justify-center gap-4">
              <AlertTriangle className="w-12 h-12 text-orange-500 mb-2" />
              <span className="text-7xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
                {t.problem.scale.line1}
              </span>
              <span className="text-xl md:text-2xl text-gray-400 font-light tracking-wide uppercase">
                {t.problem.scale.line2}
              </span>
            </div>
          </motion.div>
        </section>

        {/* Current Options Grid */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold mb-4">{t.problem.options.title}</h2>
              <p className="text-gray-500">{t.problem.options.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              <OptionCard 
                icon={<Skull className="w-8 h-8 text-rose-500" />}
                title={t.problem.options.sap.title}
                subtitle={t.problem.options.sap.subtitle}
                pros={t.problem.options.sap.pros}
                cons={t.problem.options.sap.cons}
                theme="red"
              />
              <OptionCard 
                icon={<Droplets className="w-8 h-8 text-blue-500" />}
                title={t.problem.options.water.title}
                subtitle={t.problem.options.water.subtitle}
                pros={t.problem.options.water.pros}
                cons={t.problem.options.water.cons}
                theme="blue"
              />
              <OptionCard 
                icon={<Snowflake className="w-8 h-8 text-teal-500" />}
                title={t.problem.options.eco.title}
                subtitle={t.problem.options.eco.subtitle}
                pros={t.problem.options.eco.pros}
                cons={t.problem.options.eco.cons}
                theme="teal"
              />
            </div>
          </div>
        </section>

        {/* The Hidden Cost */}
        <section className="py-24 px-6 bg-gray-100">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.problem.impact.title}</h2>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <Trash2 className="w-12 h-12 text-gray-700 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gray-900 mb-2">{t.problem.impact.years}</h3>
              <p className="text-gray-600">{t.problem.impact.yearsDesc}</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <DollarSign className="w-12 h-12 text-gray-700 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gray-900 mb-2">{t.problem.impact.costs}</h3>
              <p className="text-gray-600">{t.problem.impact.costsDesc}</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <AlertTriangle className="w-12 h-12 text-gray-700 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gray-900 mb-2">{t.problem.impact.damage}</h3>
              <p className="text-gray-600">{t.problem.impact.damageDesc}</p>
            </motion.div>
          </div>
        </section>

        {/* Zero-Sum Game */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">{t.problem.stuck.title}</h2>
            <p className="text-xl text-gray-500 mb-12">{t.problem.stuck.subtitle}</p>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl"
              >
                <h3 className="text-2xl font-bold mb-3">{t.problem.stuck.performance}</h3>
                <p className="text-gray-600">{t.problem.stuck.performanceDesc}</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl"
              >
                <h3 className="text-2xl font-bold mb-3">{t.problem.stuck.sustainability}</h3>
                <p className="text-gray-600">{t.problem.stuck.sustainabilityDesc}</p>
              </motion.div>
            </div>
          </div>
        </section>
      </section>

      {/* SOLUTION SECTION */}
      <section id="solution" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Product Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20">
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl shadow-2xl p-12 text-center text-white">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
                <p className="text-sm font-bold uppercase tracking-wider">{t.solution.hero.badge}</p>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 neo-text">{t.solution.hero.title}</h1>
              <p className="text-2xl font-medium mb-8 max-w-3xl mx-auto">
                {t.solution.hero.tagline}
              </p>
            </div>
          </motion.div>

          {/* Performance Comparison */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}>
              <div className="nav-glass rounded-2xl shadow-xl p-8 h-full hover:shadow-2xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Typical usage</p>
                    <p className="text-sm font-bold text-emerald-600">{t.solution.performance.efficiencyDesc}</p>
                  </div>
                </div>
                <h3 className="text-4xl font-bold neo-text bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
                  {t.solution.performance.efficiency}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t.solution.performance.efficiencyDetail}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}>
              <div className="nav-glass rounded-2xl shadow-xl p-8 h-full hover:shadow-2xl transition-shadow">
                <Thermometer className="w-12 h-12 text-cyan-600 mb-4" strokeWidth={2} />
                <h3 className="text-2xl font-bold neo-text bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-3">
                  {t.solution.performance.lasts}
                </h3>
                <p className="text-6xl font-bold neo-text text-gray-900 mb-2">260</p>
                <p className="text-gray-600 font-medium">
                  {t.solution.performance.lastsDesc}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}>
              <div className="nav-glass rounded-2xl shadow-xl p-8 h-full bg-gradient-to-br from-lime-50 to-emerald-50 hover:shadow-2xl transition-shadow">
                <CheckCircle className="w-12 h-12 text-lime-600 mb-4" strokeWidth={2} />
                <h3 className="text-2xl font-bold neo-text bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent mb-3">
                  {t.solution.performance.green}
                </h3>
                <p className="text-3xl font-bold neo-text text-gray-900 mb-2">{t.solution.performance.greenTitle}</p>
                <p className="text-gray-600 font-medium">
                  {t.solution.performance.greenDesc}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Business Benefits */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}>
              <div className="bg-white rounded-2xl shadow-xl p-10 h-full hover:shadow-2xl transition-shadow">
                <TrendingUp className="w-10 h-10 text-emerald-600 mb-4" strokeWidth={2} />
                <h3 className="text-2xl font-bold neo-text text-gray-900 mb-4">
                  {t.solution.benefits.turnover.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.solution.benefits.turnover.desc}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}>
              <div className="bg-white rounded-2xl shadow-xl p-10 h-full hover:shadow-2xl transition-shadow">
                <Recycle className="w-10 h-10 text-cyan-600 mb-4" strokeWidth={2} />
                <h3 className="text-2xl font-bold neo-text text-gray-900 mb-4">
                  {t.solution.benefits.disposal.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.solution.benefits.disposal.desc}
                </p>
              </div>
            </motion.div>
          </div>

          {/* General Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20">
            <div className="inline-block bg-gradient-to-r from-lime-400 to-emerald-400 px-6 py-2 rounded-full mb-8">
              <h2 className="text-sm font-bold neo-text text-gray-900 uppercase tracking-wider">{t.solution.general.badge}</h2>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold neo-text text-gray-900 mb-12">{t.solution.general.title}</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-lg mb-2">{t.solution.general.perf}</h3>
                <p className="text-gray-600 text-sm">{t.solution.general.perfDesc}</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-lg mb-2">{t.solution.general.cost}</h3>
                <p className="text-gray-600 text-sm">{t.solution.general.costDesc}</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-lg mb-2">{t.solution.general.eco}</h3>
                <p className="text-gray-600 text-sm">{t.solution.general.ecoDesc}</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-lg mb-2">{t.solution.general.safe}</h3>
                <p className="text-gray-600 text-sm">{t.solution.general.safeDesc}</p>
              </div>
            </div>
          </motion.div>

          {/* Environmental Impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl shadow-2xl p-12 border border-emerald-100">
              <div className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-2 rounded-full mb-8">
                <h2 className="text-sm font-bold text-white uppercase tracking-wider">{t.solution.impact.badge}</h2>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold neo-text text-gray-900 mb-4">{t.solution.impact.title}</h2>
              <p className="text-xl text-gray-700 mb-12 max-w-3xl">{t.solution.impact.subtitle}</p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trash2 className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t.solution.impact.waste}</h3>
                  <p className="text-gray-600">{t.solution.impact.wasteDesc}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Droplets className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t.solution.impact.ocean}</h3>
                  <p className="text-gray-600">{t.solution.impact.oceanDesc}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingDown className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t.solution.impact.carbon}</h3>
                  <p className="text-gray-600">{t.solution.impact.carbonDesc}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ESG Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl shadow-2xl p-12 text-center text-white">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
                <h2 className="text-sm font-bold uppercase tracking-wider">{t.solution.esg.badge}</h2>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 neo-text">{t.solution.esg.title}</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
                {t.solution.esg.subtitle}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMPARISON SECTION */}
      <section id="comparison" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-16">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl shadow-2xl p-12 border border-emerald-100">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold neo-text text-gray-900 mb-6">
                  {t.comparison.value.title}
                </h2>
                <p className="text-xl text-gray-700 mb-8">
                  {t.comparison.value.subtitle}
                </p>
                
                <div className="inline-block bg-white rounded-2xl shadow-xl p-8">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <DollarSign className="w-12 h-12 text-emerald-600 mx-auto mb-3" strokeWidth={2} />
                      <p className="text-3xl font-bold neo-text text-emerald-600">{t.comparison.value.cheap}</p>
                    </div>
                    <div className="text-center">
                      <TrendingUp className="w-12 h-12 text-cyan-600 mx-auto mb-3" strokeWidth={2} />
                      <p className="text-3xl font-bold neo-text text-cyan-600">{t.comparison.value.effective}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Performance Metrics */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}>
              <div className="nav-glass rounded-2xl shadow-xl p-8 h-full hover:shadow-2xl transition-shadow">
                <Timer className="w-12 h-12 text-emerald-600 mb-4" strokeWidth={2} />
                <h3 className="text-2xl font-bold neo-text bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
                  {t.comparison.metrics.freezes}
                </h3>
                <p className="text-6xl font-bold neo-text text-gray-900 mb-2">4x</p>
                <p className="text-gray-600 font-medium">
                  {t.comparison.metrics.freezesDesc}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}>
              <div className="nav-glass rounded-2xl shadow-xl p-8 h-full hover:shadow-2xl transition-shadow">
                <Thermometer className="w-12 h-12 text-cyan-600 mb-4" strokeWidth={2} />
                <h3 className="text-2xl font-bold neo-text bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-3">
                  {t.comparison.metrics.lasts}
                </h3>
                <p className="text-6xl font-bold neo-text text-gray-900 mb-2">260</p>
                <p className="text-gray-600 font-medium">
                  {t.comparison.metrics.lastsDesc}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}>
              <div className="nav-glass rounded-2xl shadow-xl p-8 h-full bg-gradient-to-br from-lime-50 to-emerald-50 hover:shadow-2xl transition-shadow">
                <CheckCircle className="w-12 h-12 text-lime-600 mb-4" strokeWidth={2} />
                <h3 className="text-2xl font-bold neo-text bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent mb-3">
                  {t.comparison.metrics.green}
                </h3>
                <p className="text-3xl font-bold neo-text text-gray-900 mb-2">{t.comparison.metrics.greenTitle}</p>
                <p className="text-gray-600 font-medium">
                  {t.comparison.metrics.greenDesc}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Detailed Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16">
            <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 px-6 py-2 rounded-full mb-8 shadow-md">
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider">{t.comparison.table.badge}</h2>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="px-6 py-5 text-left bg-gray-50">
                        <span className="font-bold text-lg text-gray-900">{t.comparison.table.feature}</span>
                      </th>
                      <th className="px-6 py-5 text-center bg-gradient-to-br from-emerald-50 to-lime-50 border-l border-gray-200">
                        <div className="font-bold text-xl neo-text text-emerald-600">Eaureco</div>
                      </th>
                      <th className="px-6 py-5 text-center bg-gray-50 border-l border-gray-200">
                        <div className="font-semibold text-gray-900">SAP ({language === 'en' ? 'Plastic' : language === 'es' ? 'Plástico' : '플라스틱'})</div>
                      </th>
                      <th className="px-6 py-5 text-center bg-gray-50 border-l border-gray-200">
                        <div className="font-semibold text-gray-900">{language === 'en' ? 'Water' : language === 'es' ? 'Agua' : '물'}</div>
                      </th>
                      <th className="px-6 py-5 text-center bg-gray-50 border-l border-gray-200">
                        <div className="font-semibold text-gray-900">{language === 'en' ? 'Compost' : language === 'es' ? 'Composta' : '기타 친환경 아이스팩'}</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) =>
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                          {row.feature}
                        </td>
                        <td className="px-6 py-4 text-center bg-gradient-to-br from-emerald-50/50 to-lime-50/50 border-l border-gray-200">
                          {typeof row.eaureco === 'boolean' ?
                            row.eaureco ?
                              <CheckCircle className="w-7 h-7 text-emerald-600 mx-auto" strokeWidth={2.5} /> :
                              <XCircle className="w-7 h-7 text-red-500 mx-auto" strokeWidth={2.5} /> :
                            <span className="font-bold text-lg text-emerald-600">{row.eaureco}</span>
                          }
                        </td>
                        <td className="px-6 py-4 text-center border-l border-gray-200">
                          {typeof row.sap === 'boolean' ?
                            row.sap ?
                              <CheckCircle className="w-7 h-7 text-emerald-600 mx-auto" strokeWidth={2.5} /> :
                              <XCircle className="w-7 h-7 text-red-500 mx-auto" strokeWidth={2.5} /> :
                            <span className="font-medium text-gray-700">{row.sap}</span>
                          }
                        </td>
                        <td className="px-6 py-4 text-center border-l border-gray-200">
                          {typeof row.water === 'boolean' ?
                            row.water ?
                              <CheckCircle className="w-7 h-7 text-emerald-600 mx-auto" strokeWidth={2.5} /> :
                              <XCircle className="w-7 h-7 text-red-500 mx-auto" strokeWidth={2.5} /> :
                            <span className="font-medium text-gray-700">{row.water}</span>
                          }
                        </td>
                        <td className="px-6 py-4 text-center border-l border-gray-200">
                          {typeof row.compost === 'boolean' ?
                            row.compost ?
                              <CheckCircle className="w-7 h-7 text-emerald-600 mx-auto" strokeWidth={2.5} /> :
                              <XCircle className="w-7 h-7 text-red-500 mx-auto" strokeWidth={2.5} /> :
                            <span className="font-medium text-gray-700">{row.compost}</span>
                          }
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl shadow-2xl p-12 text-center">
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                {t.comparison.summary.subtitle}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-2xl font-medium text-gray-700 max-w-3xl mx-auto">
              {t.contact.header.subtitle}
            </p>
          </motion.div>

          {/* Main Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100 h-full hover:shadow-3xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Mail className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h2 className="text-3xl font-bold neo-text text-gray-900 mb-4 text-center">
                  {t.contact.info.email}
                </h2>
                <a
                  href="mailto:goforjiwon@kaist.ac.kr"
                  className="block text-center text-xl font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  {t.contact.info.emailValue}
                </a>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100 h-full hover:shadow-3xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <MapPin className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h2 className="text-3xl font-bold neo-text text-gray-900 mb-4 text-center">
                  {t.contact.info.location}
                </h2>
                <p className="text-center text-xl font-bold text-cyan-600 mb-4">
                  {t.contact.info.locationValue}
                </p>
                <p className="text-center text-gray-600 font-medium">
                  {t.contact.info.locationDesc}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-lime-50 to-emerald-50 rounded-3xl shadow-xl p-12 text-center border border-emerald-100">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690e0407081d3063332a3e99/19088c638_KakaoTalk_20260203_182916893_02.png" 
                alt="eaureco" 
                className="h-16 md:h-20 w-auto mx-auto mb-4"
              />
              <p className="text-2xl font-bold text-emerald-600 mb-4">{t.contact.bottom.tagline}</p>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">{t.contact.bottom.desc}</p>
            </div>
            
            {/* Copyright Notice */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                © 2025 eaureco. All rights reserved. Content may not be copied or reproduced without permission.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}