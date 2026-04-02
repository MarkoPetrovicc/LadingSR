export type QuizOption = { id: string; label: string; tags: string[] };

export type QuizQuestion = {
  id: string;
  prompt: string;
  options: QuizOption[];
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "urges",
    prompt:
      "Kada si sam, kada se najčešće jave jaki porivi za pornografijom?",
    options: [
      {
        id: "urges_night",
        label: "Uveče pred spavanje",
        tags: ["urge_pattern", "triggers"],
      },
      {
        id: "urges_morning",
        label: "Ujutru ili odmah nakon buđenja",
        tags: ["urge_pattern"],
      },
      {
        id: "urges_afternoon",
        label: "Tokom dana (pauze, dosada, telefon u ruci)",
        tags: ["urge_pattern", "triggers"],
      },
    ],
  },
  {
    id: "aftermath",
    prompt: "Kada se desi da pogledaš sadržaj, kako se osećaš nakon toga?",
    options: [
      {
        id: "after_shame",
        label: "Sramota, krivica ili gađenje prema sebi",
        tags: ["shame_cycle", "mental_load"],
      },
      {
        id: "after_frustrated",
        label: "Frustracija, ali nastavim dalje kao da ništa nije bilo",
        tags: ["discipline_gap"],
      },
      { id: "after_numb", label: "Prazno ili otupelo, bez emocija", tags: ["dopamine_reset"] },
    ],
  },
  {
    id: "focus",
    prompt: "U odnosu na pre 6 meseci, kakvi su fokus i jasnoća misli?",
    options: [
      {
        id: "focus_worse",
        label: "Gore. Više magle i teže se skoncentrišem.",
        tags: ["brain_fog", "dopamine_reset"],
      },
      { id: "focus_same", label: "Otprilike isto", tags: ["stagnation"] },
      { id: "focus_better", label: "Bolje", tags: [] },
    ],
  },
  {
    id: "social",
    prompt: "Da li ti je ovaj šablon uticao na samopouzdanje, veze ili društveni život?",
    options: [
      {
        id: "social_yes",
        label: "Da. Jasno me koči.",
        tags: ["confidence", "isolation"],
      },
      { id: "social_sometimes", label: "Ponekad osetim", tags: ["confidence"] },
      { id: "social_no", label: "Ne baš", tags: [] },
    ],
  },
  {
    id: "help",
    prompt: "Šta bi ti sada najviše pomoglo?",
    options: [
      {
        id: "help_sos",
        label: "Brza pomoć kad krene poriv",
        tags: ["need_sos", "ai_mentor"],
      },
      {
        id: "help_structure",
        label: "Dnevna struktura i odgovornost",
        tags: ["need_structure", "streaks"],
      },
      {
        id: "help_both",
        label: "Oboje. Treba mi ceo sistem.",
        tags: ["need_sos", "need_structure", "ai_mentor", "streaks"],
      },
    ],
  },
];

export const TAG_TO_LINE: Record<string, string> = {
  urge_pattern: "Česti porivi. Brza reakcija umesto „gutanja“ volje.",
  triggers: "Vidi obrasce: vreme, raspoloženje, kontekst.",
  shame_cycle: "Sramota posle poklizavanja. Reset i preokret spirale.",
  mental_load: "Mentalni teret. Kratak dnevnik iz haosa pravi korake.",
  discipline_gap: "Kreneš pa staneš. Check in vraća ritam.",
  brain_fog: "Magla u glavi. Struktura i male pobede vraćaju fokus.",
  dopamine_reset: "Previše stimulusa. Ritam malih pobeda umesto hitova.",
  stagnation: "Osećaj zastoja. Milestone čine napredak vidljivim.",
  confidence: "Samopouzdanje pada. Prati dokaz dok rasteš.",
  isolation: "Privatna podrška kad ti je teško.",
  need_sos: "Poriv skoči. SOS u tom trenutku.",
  ai_mentor: "Saveti po tvojoj situaciji, ne generički.",
  need_structure: "Dnevna struktura za pravi život.",
  streaks: "Pukao streak. Brz povratak bez starta iz nule.",
};

export const QUIZ_COPY = {
  introEyebrow: "Provera od 2 minuta",
  introStatPercent: "87%",
  introStatSubtitle:
    "ljudi nisu ni svesni svog stepena zavisnosti i kako to utiče na svakodnevni život.",
  introTitle: "Saznaj svoj stepen zavisnosti od pornografije.",
  introBody:
    "Odgovori na par pitanja, vidi rizik, pa pogledaj kako HabitBreaker pomaže.",
  progress: (n: number, total: number) => `Pitanje ${n} od ${total}`,
  backCta: "Nazad",
  riskEyebrow: "Tvoj profil",
  riskTitle: "Uočen visok rizik",
  riskSubtitle:
    "Tvoji odgovori se poklapaju sa kritičnim tačkama koje HabitBreaker rešava.",
  riskMeter: "Intenzitet obrasca",
  problemsHeading: "Šta se ističe i kako pomažemo",
  releasingSoon: "Lansiranje sledeće nedelje",
  firstMonthFree:
    "Prvi mesec besplatno ako se prijaviš na listu pre lansiranja sledeće nedelje.",
  pdfBonusHighlight:
    "Besplatan PDF za dopamin detoks kad se prijaviš. Preuzmi ga odmah posle prijave.",
  waitlistHighlights: [
    "SOS alati kad poriv skoči. Brzo, privatno, bez osuđivanja.",
    "Streak i dnevni check in za pravi život, ne za „savršenstvo“.",
    "AI mentor po tvom obrascu, ne generički saveti.",
    "Tvoji podaci ostaju tvoji. Ne prodajemo email niti priču.",
  ],
  resultsPitch:
    "Lansiranje sledeće nedelje. Dobijaš besplatan PDF za dopamin detoks i prvi mesec besplatno.",
  pdfDownloadLabel: "Preuzmi PDF za dopamin detoks",
  waitlistTitle: "Vesti o lansiranju + besplatan mesec",
  waitlistSub: "Šaljemo samo lansiranje i tvoju ponudu.",
  waitlistSocialProof: "257 ljudi se već prijavilo.",
  emailLabel: "Email",
  emailPlaceholder: "tvoj@email.com",
  emailCta: "Prijavi se",
  successTitle: "Na listi si.",
  successBody:
    "Javićemo ti za lansiranje sledeće nedelje sa prvim besplatnim mesecom. PDF za dopamin detoks je ispod. Bez spama.",
  privacy:
    "Privatnost je bitna. Čuvamo minimum podataka, ne prodajemo email i možeš da tražiš brisanje kad god želiš.",
  invalidEmail: "Unesi ispravan email.",
  genericError: "Nešto nije u redu. Pokušaj ponovo.",
  fallbackProblems: [
    "Porivi u slabom trenutku. SOS kad zatreba.",
    "Disciplina skače. Streak i struktura.",
    "Magla posle poklizavanja. Praćenje vraća ritam.",
  ],
};
