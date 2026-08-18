/**
 * Dados centrais do site — endereço, contato, credenciais.
 * Editar aqui propaga em metadata, JSON-LD, footer, contato e WhatsApp.
 */
export const SITE = {
  name: "Rosana Leal Rodrigues",
  brand: "Rosana Leal Rodrigues · Nutrição e Saúde",
  shortName: "Rosana Leal",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://rosanalealnutri.com.br",
  description:
    "Farmacêutica e Nutricionista Clínica em Campina Grande-PB. Atendimento que entende como medicamentos, alimentação e corpo conversam.",
  phone: "+5583988030138",
  phoneDisplay: "(83) 98803-0138",
  whatsappMessage:
    "Olá Rosana! Vim pelo seu site e gostaria de agendar uma consulta.",
  instagram: "https://www.instagram.com/rosanalealnutri/",
  instagramHandle: "@rosanalealnutri",
  email: "", // pendente
  address: {
    street: "[Endereço do consultório — a preencher]",
    city: "Campina Grande",
    state: "PB",
    country: "BR",
    zip: "",
  },
  credentials: {
    crfPB: "CRF-PB nº XXXX",
    crn6: "CRN-6 nº XXXX",
    yearsOfPractice: 12, // placeholder — ajustar com a Rosana
  },
  hours: "Segunda a sexta · 8h às 18h · Sábado: agenda especial",
} as const;

/**
 * Link para o WhatsApp com mensagem pré-preenchida.
 * Aceita uma mensagem customizada (ex: "vim pela seção de serviços").
 */
export function whatsappUrl(customMessage?: string): string {
  const number = SITE.phone.replace(/\D/g, "");
  const text = encodeURIComponent(customMessage ?? SITE.whatsappMessage);
  return `https://wa.me/${number}?text=${text}`;
}

/**
 * Locais de atendimento — usados nos cards de localização em Contato
 * (endereço, telefone, mapa embutido, "como chegar").
 *
 * Endereços abaixo são placeholder — trocar pelos reais assim que a
 * Rosana definir os dois locais (consultório, clínica parceira, etc).
 */
export const LOCATIONS = [
  {
    name: "Consultório",
    street: "Rua Exemplo, 123",
    neighborhood: "Centro",
    city: "Campina Grande",
    state: "PB",
    zip: "58400-000",
    phone: SITE.phoneDisplay,
    whatsappMessage:
      "Olá Rosana! Vim pelo site e gostaria de agendar uma consulta no consultório.",
  },
  {
    name: "Unidade 2",
    street: "Rua Exemplo, 456",
    neighborhood: "Bairro das Cidades",
    city: "Campina Grande",
    state: "PB",
    zip: "58400-100",
    phone: SITE.phoneDisplay,
    whatsappMessage:
      "Olá Rosana! Gostaria de saber mais sobre o atendimento nesta unidade.",
  },
] as const;

/* =============================================================
   Conteúdo — serviços, jornada, FAQ
   ============================================================= */

export const SERVICES = [
  {
    id: "consultorio",
    title: "Consulta clínica no consultório",
    description:
      "Atendimento presencial individualizado. Anamnese completa com revisão de exames, medicamentos em uso e histórico, plano nutricional personalizado e acompanhamento contínuo.",
    image: "/images/rosana-service.jpg",
    imageAlt:
      "Rosana Leal Rodrigues em retrato profissional, postura confiante de braços cruzados",
    whatsappPrompt:
      "Olá Rosana! Tenho interesse em uma consulta no consultório. Como funciona?",
  },
  {
    id: "domiciliar",
    title: "Atendimento domiciliar",
    description:
      "O cuidado vai até você. Indicado para rotina corrida, idosos, pós-cirúrgico ou quem prefere o conforto da própria casa. Mesmo rigor clínico, mesmo plano personalizado.",
    image: "/images/branch-horizontal.png",
    imageAlt: "Ilustração botânica de ramo horizontal",
    whatsappPrompt:
      "Olá Rosana! Tenho interesse no atendimento domiciliar. Você atende minha região?",
  },
] as const;

export const JOURNEY = [
  {
    step: "01",
    title: "Agendamento",
    description:
      "Você fala comigo pelo WhatsApp e marcamos a primeira consulta no melhor horário.",
  },
  {
    step: "02",
    title: "Anamnese completa",
    description:
      "Conversa profunda sobre histórico, exames recentes, medicamentos em uso e rotina.",
  },
  {
    step: "03",
    title: "Plano personalizado",
    description:
      "Em até 7 dias você recebe um plano nutricional desenhado para o seu corpo e a sua vida.",
  },
  {
    step: "04",
    title: "Acompanhamento",
    description:
      "Reavaliações periódicas para ajustar o plano conforme você evolui — sem fórmula pronta.",
  },
] as const;

export const FAQ = [
  {
    question: "Atende convênio?",
    answer:
      "No momento o atendimento é particular. Forneço recibo para reembolso de planos de saúde quando aplicável.",
  },
  {
    question: "Quanto custa a consulta?",
    answer:
      "Os valores variam entre consulta inicial e retornos. Mande mensagem no WhatsApp que te passo os valores atualizados.",
  },
  {
    question: "Atende crianças e idosos?",
    answer:
      "Sim. Atendo todas as faixas etárias — a abordagem é sempre adaptada à idade e à condição clínica de cada pessoa.",
  },
  {
    question: "Como funciona o atendimento domiciliar?",
    answer:
      "Atendo em domicílio dentro de Campina Grande e região metropolitana. Há um valor adicional pelo deslocamento, que depende do bairro. Combine pelo WhatsApp.",
  },
  {
    question: "Preciso levar exames recentes?",
    answer:
      "Sim, sempre que possível. Exames de até 6 meses ajudam muito na anamnese e na construção de um plano realmente preciso — bioquímico, hemograma, perfil lipídico, vitaminas, hormônios tireoidianos.",
  },
  {
    question: "Em quanto tempo recebo o plano nutricional?",
    answer:
      "Em até 7 dias após a consulta inicial. O plano é entregue em PDF e revisado nas consultas de retorno.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Cheguei na Rosana cansada e tomando vários remédios. Em três meses, mudei minha relação com a comida e meu corpo respondeu de um jeito que eu não imaginava.",
    author: "Maria S.",
    context: "paciente há 2 anos",
  },
  {
    quote:
      "A diferença é que ela olha o medicamento e a alimentação juntos. Isso fez total sentido pra mim, que tomo medicação contínua há anos.",
    author: "Carlos M.",
    context: "atendimento domiciliar",
  },
  {
    quote:
      "Atendimento humano, profundo, sem promessa milagrosa. Saio de cada consulta entendendo mais do meu próprio corpo.",
    author: "Ana P.",
    context: "paciente há 1 ano",
  },
  {
    quote:
      "Tomo medicação pra pressão há 6 anos. Foi a Rosana que me explicou pela primeira vez como aquilo afetava minha disposição — e ajustou minha alimentação em volta disso. Pareceu óbvio depois, mas ninguém tinha feito.",
    author: "Patrícia L.",
    context: "paciente há 8 meses",
  },
  {
    quote:
      "Comecei marcando pra minha mãe, idosa, com 8 medicamentos diários. Em pouco tempo virei paciente também. O olhar da Rosana é diferente — ela vê a pessoa inteira.",
    author: "Eduardo M.",
    context: "atendimento domiciliar",
  },
  {
    quote:
      "Meus exames de ferro nunca voltavam ao normal, mesmo tomando suplemento. Foi a Rosana que descobriu que era o antiácido bloqueando a absorção. Coisas que ninguém me disse em 10 anos.",
    author: "Beatriz F.",
    context: "paciente há 6 meses",
  },
  {
    quote:
      "Acompanhamento sério, sem fórmulas mágicas. Em cada consulta saio sabendo mais sobre o que meu corpo precisa — não menos.",
    author: "Roberto C.",
    context: "paciente há 1 ano",
  },
] as const;
