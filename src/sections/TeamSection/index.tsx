import { useState, useRef } from "react";
import { TeamTabList } from "@/sections/TeamSection/components/TeamTabList";
import { TeamTabPanel } from "@/sections/TeamSection/components/TeamTabPanel";

const panelsData = [
  {
    tab: "Coleta",
    title: "Colete avaliações no piloto automático",
    description: "Envie solicitações automáticas por email e WhatsApp após cada compra. Sem esforço manual, sem fricção.",
    features: ["Envio automático pós-compra", "Modelos prontos de mensagem", "Integração com WhatsApp e email", "Follow-up inteligente"],
    learnMoreText: "Ver como funciona →",
    learnMoreHref: "#coleta",
    placeholderColor: "from-violet-500 to-purple-600",
    placeholderIcon: "📩",
    statText: "Até 3x mais avaliações coletadas",
  },
  {
    tab: "Gestão",
    title: "Gerencie tudo em um só painel",
    description: "Visualize, filtre e responda avaliações de todas as plataformas em um único dashboard centralizado.",
    features: ["Dashboard unificado", "Filtros por nota, data e origem", "Respostas rápidas com IA", "Alertas de avaliações negativas"],
    learnMoreText: "Conhecer o painel →",
    learnMoreHref: "#gestao",
    placeholderColor: "from-blue-500 to-cyan-500",
    placeholderIcon: "📊",
    statText: "Responda 5x mais rápido",
  },
  {
    tab: "Exibição",
    title: "Mostre suas avaliações onde elas convertem",
    description: "Widgets prontos para embed no seu site, landing page ou loja. Personalize cores, layout e formato.",
    features: ["Widgets responsivos", "Personalização total", "Embed com 1 linha de código", "Carrossel, grid e lista"],
    learnMoreText: "Ver widgets →",
    learnMoreHref: "#exibicao",
    placeholderColor: "from-emerald-500 to-teal-500",
    placeholderIcon: "🎨",
    statText: "Até 40% mais conversão com widgets",
  },
  {
    tab: "Integrações",
    title: "Conecte com suas ferramentas favoritas",
    description: "Sincronize avaliações do Google, Hotmart, Kiwify e mais. Importe e exporte sem dor de cabeça.",
    features: ["Google Reviews sync", "Hotmart e Kiwify", "Importação em massa (CSV)", "API aberta"],
    learnMoreText: "Ver integrações →",
    learnMoreHref: "#integracoes",
    placeholderColor: "from-amber-500 to-orange-500",
    placeholderIcon: "🔗",
    statText: "+20 integrações disponíveis",
  },
  {
    tab: "Resultados",
    title: "Transforme prova social em receita",
    description: "Acompanhe métricas de conversão, engajamento com widgets e impacto real das avaliações no seu faturamento.",
    features: ["Dashboard de métricas", "Taxa de conversão por widget", "Relatórios exportáveis", "Comparativo antes/depois"],
    learnMoreText: "Ver métricas →",
    learnMoreHref: "#resultados",
    placeholderColor: "from-rose-500 to-pink-500",
    placeholderIcon: "📈",
    statText: "Até 25% mais receita com prova social",
  },
];

export const TeamSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevIndex = useRef(0);

  const handleTabChange = (index: number) => {
    if (index === activeIndex) return;
    prevIndex.current = activeIndex;
    setActiveIndex(index);
  };

  return (
    <section className="box-border caret-transparent outline-[3px] pt-12 pb-20 md:pt-24 md:pb-28">
      <div className="box-border caret-transparent max-w-[1080px] outline-[3px] w-full mx-auto px-6 md:w-[90%] md:px-0">
        <div className="relative items-center box-border caret-transparent flex flex-col justify-center max-w-full outline-[3px] text-center z-[1] mb-8 mx-auto md:max-w-[80%] md:mb-[88px]">
          <h2 className="text-[28px] font-semibold bg-clip-text bg-[linear-gradient(92deg,rgb(17,24,39)_70%,rgba(30,43,72,0.9)_95%)] box-border caret-transparent tracking-[-0.42px] leading-8 min-h-[auto] min-w-[auto] outline-[3px] mb-[11.2px] md:text-5xl md:tracking-[-0.72px] md:leading-[56px] md:mb-[19.2px]">
            Tudo que você precisa para dominar suas avaliações.
          </h2>
          <p className="text-gray-700 text-xl box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] outline-[3px] md:text-2xl md:leading-8">
            Da coleta à conversão, o ManyFeed cuida de cada etapa da sua prova social.
          </p>
        </div>
        <div className="relative items-center box-border caret-transparent flex flex-col justify-start outline-[3px] md:[align-items:normal] md:block md:flex-row md:justify-normal">
          <div className="relative items-center box-border caret-transparent flex flex-col justify-start min-h-[auto] min-w-[auto] outline-[3px] md:min-h-0 md:min-w-0">
            <TeamTabList tabs={panelsData.map(p => p.tab)} activeIndex={activeIndex} onTabChange={handleTabChange} />
            <div className="relative items-start box-border caret-transparent justify-center max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden" style={{ minHeight: 0 }}>
              {panelsData.map((panel, i) => (
                <TeamTabPanel
                  key={i}
                  isActive={activeIndex === i}
                  direction={i >= prevIndex.current ? "right" : "left"}
                  title={panel.title}
                  description={panel.description}
                  features={panel.features}
                  learnMoreText={panel.learnMoreText}
                  learnMoreHref={panel.learnMoreHref}
                  placeholderColor={panel.placeholderColor}
                  placeholderIcon={panel.placeholderIcon}
                  statText={panel.statText}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
