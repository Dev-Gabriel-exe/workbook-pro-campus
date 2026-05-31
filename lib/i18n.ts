export type Lang = "en" | "pt"

export const LANGS: Lang[] = ["en", "pt"]

export type NavEntry = { id: string; index: string; label: string }
type Element = { title: string; description: string }
type TimelineItem = { year: string; title: string; detail: string }
type Discipline = { subject: string; teacher: string; app: string; description: string }
type Project = { name: string; student: string; app: string; result: string }
type Stat = { value: number; suffix: string; headline: string; note: string }
type TitleDetail = { title: string; detail: string }
type TitleDesc = { title: string; description: string }
type Fact = { label: string; value: string }

export type Content = {
  ui: {
    distinguishedSchool: string
    workbookTitle: string
    schoolName: string
    locationShort: string
    locationFull: string
    exportPrint: string
    openMenu: string
    closeMenu: string
    langLabel: string
  }
  nav: NavEntry[]
  cover: {
    eyebrow: string
    subtitle: string
    intro: string
  }
  profile: {
    eyebrow: string
    title: string
    paragraphs: string[]
    facts: Fact[]
  }
  vision: {
    eyebrow: string
    title: string
    intro: string[]
    elements: Element[]
    milestones: { year: string; title: string; detail: string }[]
    closing: string
  }
  teachers: {
    eyebrow: string
    title: string
    lead: string
    bullets: string[]
    cbl: TitleDetail
    ai: TitleDetail
    appsTitle: string
    apps: string[]
  }
  infrastructure: {
    eyebrow: string
    title: string
    features: TitleDetail[]
    timelineTitle: string
    timeline: TimelineItem[]
  }
  inspire: {
    eyebrow: string
    title: string
    intro: string
    disciplines: Discipline[]
  }
  imagine: {
    eyebrow: string
    title: string
    intro: string
    projects: Project[]
    callouts: TitleDetail[]
  }
  impact: {
    eyebrow: string
    title: string
    stats: Stat[]
    chartTitle: string
    chartSubtitle: string
    chartData: { label: string; value: number }[]
    evidenceTitle: string
    evidenceText: string
    timelineTitle: string
  }
  accessibility: {
    eyebrow: string
    title: string
    intro: string
    features: TitleDesc[]
    quote: string
  }
  next: {
    eyebrow: string
    title: string
    cards: TitleDetail[]
    fieldStudiesTitle: string
    fieldStudiesText: string
  }
  closing: {
    eyebrow: string
    title: string
    quote: string
    signature: string
  }
}

const en: Content = {
  ui: {
    distinguishedSchool: "Apple Distinguished School",
    workbookTitle: "Apple Distinguished School Workbook 2026",
    schoolName: "Colégio Pro Campus Júnior",
    locationShort: "Teresina, PI",
    locationFull: "Teresina, Piauí — Brazil",
    exportPrint: "Download PDF",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    langLabel: "Language",
  },
  nav: [
    { id: "cover", index: "00", label: "Cover" },
    { id: "profile", index: "01", label: "School Profile" },
    { id: "vision", index: "02", label: "Vision & Leadership" },
    { id: "teachers", index: "03", label: "Teacher Development" },
    { id: "infrastructure", index: "04", label: "Connected Classroom" },
    { id: "inspire", index: "05", label: "Inspire" },
    { id: "imagine", index: "06", label: "Imagine" },
    { id: "impact", index: "07", label: "Cause Impact" },
    { id: "accessibility", index: "08", label: "Accessibility" },
    { id: "next", index: "09", label: "What's Next" },
    { id: "closing", index: "10", label: "Closing" },
  ],
  cover: {
    eyebrow: "Apple Distinguished School",
    subtitle: "Apple Distinguished School Workbook 2026",
    intro:
      "A supplement to our ADS renewal video — a deeper look at who we are, how we teach, and where we're going.",
  },
  profile: {
    eyebrow: "School Profile",
    title: "Who We Are",
    paragraphs: [
      "Colégio Pro Campus Júnior is a school in **Teresina, Piauí, Brazil**, with more than a decade of investment in integrating technology and learning. Since 2014, with the adoption of the UNO system, the school has built a consistent digital culture.",
      "**A defining milestone:** in 2021 the school launched its 1:1 project for 6th and 7th grades. In 2023 it expanded to 8th grade. In 2025, 9th grade was included — completing the goal of 100% of Middle School with an individual iPad for every student.",
      "The school maintains a continuous partnership with **SEJUNTA**, an Apple Authorised Education Specialist, running monthly in-person and online training with the entire teaching team. Innovation lives in the **Technology Room 3.0** — a dedicated space for monthly training, Apple certifications and technology projects.",
    ],
    facts: [
      { label: "Middle School", value: "6th to 9th grade — 4 years" },
      { label: "1:1 iPad", value: "Every Middle School student" },
      { label: "Faculty", value: "100% Apple Teachers, Portfolio complete" },
      { label: "Advisory", value: "SEJUNTA — monthly training" },
    ],
  },
  vision: {
    eyebrow: "Vision & Leadership",
    title: "Vision & Leadership",
    intro: [
      "Pro Campus Júnior holds a modern, innovative vision for technology as a central pedagogical tool. The school consolidated its 1:1 project across every Middle School grade, ensuring each student uses the iPad as an instrument of personalized learning. In 2025, it advanced the integration of artificial intelligence into classroom practice and grew its number of certified Apple Teachers.",
      "Leadership — direction and coordination — uses the **six elements of the Apple framework** as a compass. Every pedagogical decision is weighed against these elements.",
    ],
    elements: [
      { title: "Vision", description: "A clear, shared belief that technology is the medium of learning, not an add-on." },
      { title: "Culture", description: "A consistent digital culture built steadily since 2014 across every classroom." },
      { title: "Capacity", description: "100% of teachers certified as Apple Teachers with completed Portfolios." },
      { title: "Team", description: "Leadership, coordination and faculty aligned through monthly training." },
      { title: "Community", description: "Families, partners and SEJUNTA engaged in a shared educational project." },
      { title: "Measurement", description: "Decisions validated with real survey data and pedagogical evidence." },
    ],
    milestones: [
      { year: "2024", title: "Leadership Journey", detail: "Training of direction and coordination together with SEJUNTA." },
      { year: "2025", title: "Curriculum Modeling", detail: "Restructuring the curriculum to intentionally integrate digital competencies into traditional subjects." },
    ],
    closing:
      "Day to day, coordination actively follows the insertion of active methodologies, monitors app usage and ensures teachers' planning translates into efficient classroom dynamics. Every student has a **daily agenda of activities integrated with the iPad across all subjects.**",
  },
  teachers: {
    eyebrow: "Teacher Development",
    title: "Building a Team of Apple Teachers",
    lead: "Since 2020, every teacher takes part in specific, continuous training with SEJUNTA. Today, **100% of faculty are Apple Teachers with a completed Portfolio.**",
    bullets: [
      "Monthly training — in person in Room 3.0 and online",
      "Focus on pedagogical apps, active methodologies and innovative strategies",
      "Bimonthly curriculum modeling connecting content to digital tools",
    ],
    cbl: {
      title: "CBL — Challenge-Based Learning",
      detail:
        "In 2024 and 2025, the school adopted Apple's CBL as a structuring methodology. It changed the teacher's posture: it is no longer only about using existing apps — students now **create their own solutions**, including their own apps, becoming protagonists of their learning.",
    },
    ai: {
      title: "AI in the Classroom — 2026",
      detail:
        "Teachers were trained to use AI productively. In 8th and 9th grade literature, students read Machado de Assis and brought fictional characters to life — each with a personality, Instagram profile, followers, likes and images. 19th-century characters living in the 21st.",
    },
    appsTitle: "Apps mastered by teachers",
    apps: [
      "Canva", "Padlet", "Kahoot", "SimpleMind", "Freeform", "Keynote", "Pages", "GeoGebra",
      "Numbers", "Clips", "iMovie", "GarageBand", "Swift Playgrounds", "Teachy", "Blooket", "Timeline 3D",
    ],
  },
  infrastructure: {
    eyebrow: "Infrastructure",
    title: "The Connected Classroom",
    features: [
      { title: "1:1 iPad Program", detail: "An individual iPad for every Middle School student, and a dedicated iPad for each teacher." },
      { title: "Classroom App", detail: "Used daily to mirror content, share activities and monitor each student's progress in real time." },
      { title: "Apple School Manager", detail: "Central tool to manage the device lifecycle and distribute apps to specific classes at scale." },
      { title: "Technology Room 3.0", detail: "A dedicated space for monthly training, Apple certifications and special projects." },
      { title: "Daily Integration", detail: "A daily agenda keeps iPad-integrated activities present across every subject." },
      { title: "100% Middle School", detail: "From 6th to 9th grade, the connected classroom is the standard — not the exception." },
    ],
    timelineTitle: "The road to 100% — our 1:1 journey",
    timeline: [
      { year: "2014", title: "Digital culture begins", detail: "Adoption of the UNO system sets the foundation." },
      { year: "2020", title: "Apple Teacher training", detail: "Continuous certification with SEJUNTA starts." },
      { year: "2021", title: "1:1 launches", detail: "Individual iPad for 6th and 7th grades." },
      { year: "2023", title: "Expansion", detail: "8th grade joins the 1:1 program." },
      { year: "2024", title: "CBL & Leadership", detail: "Challenge-Based Learning adopted; Leadership Journey." },
      { year: "2025", title: "Goal achieved", detail: "9th grade added — 100% of Middle School; Curriculum Modeling." },
      { year: "2026", title: "AI & ADS renewal", detail: "AI integrated into classrooms; ADS renewal year." },
    ],
  },
  inspire: {
    eyebrow: "Inspire",
    title: "Inspire — Learning Reimagined",
    intro:
      "This section expands on what the videos show, detailing the pedagogical intentionality behind each practice — subject by subject.",
    disciplines: [
      { subject: "Coding", teacher: "Prof. Gabriel", app: "Swift Playgrounds", description: "Students work through Everyone Can Code: Puzzles and Adventures, building real apps — group raffles, virtual stores and management tools — with AI support." },
      { subject: "English", teacher: "Prof. Gabriela", app: "iPad · Apple Books", description: "Fully personalized assessment on iPad with digital books matched to each student's proficiency level and real-time progress tracking." },
      { subject: "Art — Stop Motion", teacher: "Prof. Iulianna · 9th", app: "FlipaClip · iMovie · GarageBand", description: "Students built frame-by-frame animated stories, uniting art, narrative and technology — animation, editing and original soundtrack in one project." },
      { subject: "Mathematics", teacher: "8th grade", app: "Numbers · Keynote", description: "Community interviews became real statistical charts in Numbers, presented in Keynote. Visual support helped struggling students; advanced learners explored deeper analysis." },
      { subject: "Science", teacher: "7th grade", app: "Pages", description: "After visiting the Zoobotanical Park, students produced a full scientific report in Pages — introduction, taxonomy and iPad photo documentation." },
      { subject: "Chemistry", teacher: "Prof. Layse", app: "Safari · Pages", description: "Students modeled atoms with clay, researched reactions in Safari and recorded results in Pages reports. The classroom became a laboratory." },
      { subject: "Literature + AI", teacher: "8th & 9th", app: "AI · Instagram", description: "Reading Machado de Assis, students gave fictional characters Instagram profiles — 19th-century figures living in the 21st, with posts, followers and AI imagery." },
      { subject: "Writing — AJULE", teacher: "Academia Juvenil de Letras", app: "Apple Books", description: "Students write and publish digital books on Apple Books, adopted as supplementary reading across the whole school. The student as published author." },
    ],
  },
  imagine: {
    eyebrow: "Imagine",
    title: "Imagine — Students Building Real Things",
    intro:
      "Through Challenge-Based Learning, students identify real problems and develop solutions with the iPad. These are not exercises — they are products used by families, businesses and the school community.",
    projects: [
      { name: "Cafeteria Manager", student: "Garcês · 7th", app: "Swift Playgrounds", result: "A management app built for the school cafeteria." },
      { name: "Hydration Reminder", student: "Garcês · 7th", app: "Swift Playgrounds", result: "An app reminding students to drink water during breaks." },
      { name: "Hardware Store System", student: "Heitor de Jesus", app: "Swift Playgrounds", result: "Inventory, sales, reviews, star ratings, cart and payment methods for his father's store." },
      { name: "Personal Study AI", student: "Heitor Soares", app: "Swift Playgrounds", result: "His own AI that reads images and generates flashcards and mind maps to help him study." },
      { name: "China Travel Guide", student: "Samuel · 9th", app: "Swift Playgrounds", result: "A guide for immigrants and tourists — translations, everyday phrases and landmarks." },
      { name: "Inventory Manager", student: "Arthur", app: "Swift Playgrounds", result: "A management app his mother now uses at her own workplace for stock control." },
      { name: "16 Real Companies", student: "9th — Entrepreneurship Fair", app: "Swift Playgrounds", result: "Food, stationery and apparel businesses with management apps, branding, marketing and Instagram." },
      { name: '"Senhora" Cinematic Video', student: "Antony · 9th", app: "Clips", result: "A video on José de Alencar's novel with effects, captions and cinematic cuts." },
      { name: "El Quixote Field Studies", student: "Interdisciplinary", app: "Pages · iPad", result: "Ubajara documented across Geography, History and Portuguese." },
    ],
    callouts: [
      { title: "El Quixote — 2026 Field Studies", detail: "In Ubajara, a single trip became Geography (Caatinga relief and vegetation), History (regional culture) and Portuguese work. In 2026, students will visit São Luís (MA) and Pedro II (PI), creating informative apps about local culture, economy and tourism." },
      { title: "AJULE — Books on Apple Books", detail: "Students in the Academia Juvenil de Letras publish digital books on Apple Books, adopted as supplementary reading by the whole school. The highest level of creative protagonism: the student as a published author." },
    ],
  },
  impact: {
    eyebrow: "Cause Impact",
    title: "Cause Impact — The Numbers Behind the Story",
    stats: [
      { value: 85.5, suffix: "%", headline: "of families believe the iPad improved learning", note: "Survey conducted in March 2026 with 83 families" },
      { value: 77, suffix: "%", headline: "of families perceive a digital culture growing at the school", note: "Same survey — Mar 2026" },
      { value: 100, suffix: "%", headline: "of teachers are Apple Teachers with completed Portfolio", note: "Continuous certification with SEJUNTA since 2020" },
      { value: 100, suffix: "%", headline: "of teachers in the program since 2023 report meaningful change in practice", note: "More dynamic classes, higher engagement and student autonomy" },
      { value: 16, suffix: "", headline: "real companies created by 9th graders at the Entrepreneurship Fair", note: "Functional apps, visual identity and marketing strategy" },
      { value: 100, suffix: "%", headline: "of Middle School covered by the 1:1 program", note: "Goal achieved in 2025" },
    ],
    chartTitle: "Family Survey — March 2026",
    chartSubtitle: "Based on responses from 83 families.",
    chartData: [
      { label: "Improved learning", value: 85.5 },
      { label: "Digital culture", value: 77 },
    ],
    evidenceTitle: "Evidence, not assumption",
    evidenceText:
      "Measurement is one of the six Apple elements that guide us. We validate our project with real data from the families who live it — and the results consistently confirm that the iPad is changing how our students learn.",
    timelineTitle: "The 1:1 project timeline",
  },
  accessibility: {
    eyebrow: "Accessibility & Inclusion",
    title: "Technology as a Tool for Every Student",
    intro:
      "At Pro Campus Júnior, the iPad is a tool for inclusion. Here are concrete examples of how Apple accessibility features are part of everyday learning.",
    features: [
      { title: "iPad Zoom", description: "Teachers enable Zoom for students with low visual acuity during reading, without interrupting the class." },
      { title: "Adjustable Contrast", description: "Screens are configured to ease visualization for students with specific visual needs." },
      { title: "Teachy", description: "Prof. Layla generates personalized curriculum adaptations for neurodivergent students — weekly adapted versions for each profile." },
      { title: "Voice Control", description: "Students with motor difficulties navigate and answer activities without relying on touch." },
      { title: "Dictation & Live Captions", description: "Spoken Content, Dictation and Live Captions are planned as the next steps for diverse learning needs." },
    ],
    quote: "Accessibility is not the exception — it is the routine.",
  },
  next: {
    eyebrow: "Roadmap",
    title: "Looking Ahead",
    cards: [
      { title: "High School Expansion", detail: "Extending the 1:1 program to High School — individual devices, teacher training and a sustained digital culture through the transition." },
      { title: "AI Across Segments", detail: "Broadening AI integration and training teachers to gamify classes and create personalized materials with AI." },
      { title: "Multisensory Books", detail: "AJULE's student-made digital books will become multisensory, with audio description — extending accessibility beyond the school walls." },
      { title: "Inter-school Collaboration", detail: "Connecting with another school to exchange best practices and collaborative projects via Shared iPad or Freeform." },
    ],
    fieldStudiesTitle: "2026 Field Studies",
    fieldStudiesText:
      "Students will visit São Luís (MA) and Pedro II (PI), creating informative apps about local culture, economy and tourism — bringing the classroom to the country and the country into the iPad.",
  },
  closing: {
    eyebrow: "Closing",
    title: "More Than a School. A Community of Builders.",
    quote:
      "At Pro Campus Júnior, technology is not a tool we add to education. It is the medium through which our students think, create, solve, and express. Since 2014, we have been building — not just digital skills, but a generation of students who see problems as opportunities and code as a language. This workbook is our story. The ADS title is our commitment to keep telling it.",
    signature: "Colégio Pro Campus Júnior · Teresina, PI — Brazil · 2026",
  },
}

const pt: Content = {
  ui: {
    distinguishedSchool: "Apple Distinguished School",
    workbookTitle: "Workbook Apple Distinguished School 2026",
    schoolName: "Colégio Pro Campus Júnior",
    locationShort: "Teresina, PI",
    locationFull: "Teresina, Piauí — Brasil",
    exportPrint: "Baixar PDF",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    langLabel: "Idioma",
  },
  nav: [
    { id: "cover", index: "00", label: "Capa" },
    { id: "profile", index: "01", label: "Perfil da Escola" },
    { id: "vision", index: "02", label: "Visão & Liderança" },
    { id: "teachers", index: "03", label: "Formação Docente" },
    { id: "infrastructure", index: "04", label: "Sala Conectada" },
    { id: "inspire", index: "05", label: "Inspirar" },
    { id: "imagine", index: "06", label: "Imaginar" },
    { id: "impact", index: "07", label: "Gerar Impacto" },
    { id: "accessibility", index: "08", label: "Acessibilidade" },
    { id: "next", index: "09", label: "Próximos Passos" },
    { id: "closing", index: "10", label: "Encerramento" },
  ],
  cover: {
    eyebrow: "Apple Distinguished School",
    subtitle: "Workbook Apple Distinguished School 2026",
    intro:
      "Um complemento ao nosso vídeo de renovação ADS — um olhar mais profundo sobre quem somos, como ensinamos e para onde estamos indo.",
  },
  profile: {
    eyebrow: "Perfil da Escola",
    title: "Quem Somos",
    paragraphs: [
      "O Colégio Pro Campus Júnior é uma escola em **Teresina, Piauí, Brasil**, com mais de uma década de investimento na integração entre tecnologia e aprendizagem. Desde 2014, com a adoção do sistema UNO, a escola construiu uma cultura digital consistente.",
      "**Um marco decisivo:** em 2021 a escola lançou seu projeto 1:1 para o 6º e 7º anos. Em 2023 expandiu para o 8º ano. Em 2025, o 9º ano foi incluído — concluindo a meta de 100% do Ensino Fundamental II com um iPad individual para cada estudante.",
      "A escola mantém uma parceria contínua com a **SEJUNTA**, uma Apple Authorised Education Specialist, realizando formações mensais presenciais e online com toda a equipe docente. A inovação vive na **Sala de Tecnologia 3.0** — um espaço dedicado a formações mensais, certificações Apple e projetos de tecnologia.",
    ],
    facts: [
      { label: "Ensino Fundamental II", value: "Do 6º ao 9º ano — 4 anos" },
      { label: "iPad 1:1", value: "Cada estudante do Fundamental II" },
      { label: "Corpo Docente", value: "100% Apple Teachers, Portfólio completo" },
      { label: "Assessoria", value: "SEJUNTA — formação mensal" },
    ],
  },
  vision: {
    eyebrow: "Visão & Liderança",
    title: "Visão & Liderança",
    intro: [
      "O Pro Campus Júnior sustenta uma visão moderna e inovadora da tecnologia como ferramenta pedagógica central. A escola consolidou seu projeto 1:1 em todas as séries do Fundamental II, garantindo que cada estudante use o iPad como instrumento de aprendizagem personalizada. Em 2025, avançou na integração da inteligência artificial à prática de sala de aula e ampliou o número de Apple Teachers certificados.",
      "A liderança — direção e coordenação — usa os **seis elementos do framework Apple** como bússola. Cada decisão pedagógica é avaliada à luz desses elementos.",
    ],
    elements: [
      { title: "Visão", description: "Uma crença clara e compartilhada de que a tecnologia é o meio da aprendizagem, não um acréscimo." },
      { title: "Cultura", description: "Uma cultura digital consistente, construída de forma contínua desde 2014 em todas as salas." },
      { title: "Capacidade", description: "100% dos professores certificados como Apple Teachers com Portfólios concluídos." },
      { title: "Equipe", description: "Liderança, coordenação e docentes alinhados por meio de formação mensal." },
      { title: "Comunidade", description: "Famílias, parceiros e a SEJUNTA engajados em um projeto educacional comum." },
      { title: "Medição", description: "Decisões validadas com dados reais de pesquisa e evidências pedagógicas." },
    ],
    milestones: [
      { year: "2024", title: "Jornada de Liderança", detail: "Formação da direção e da coordenação em conjunto com a SEJUNTA." },
      { year: "2025", title: "Modelagem Curricular", detail: "Reestruturação do currículo para integrar intencionalmente competências digitais às disciplinas tradicionais." },
    ],
    closing:
      "No dia a dia, a coordenação acompanha ativamente a inserção de metodologias ativas, monitora o uso dos aplicativos e garante que o planejamento dos professores se traduza em dinâmicas de aula eficientes. Cada estudante tem uma **agenda diária de atividades integradas ao iPad em todas as disciplinas.**",
  },
  teachers: {
    eyebrow: "Formação Docente",
    title: "Construindo um Time de Apple Teachers",
    lead: "Desde 2020, cada professor participa de uma formação específica e contínua com a SEJUNTA. Hoje, **100% do corpo docente são Apple Teachers com Portfólio concluído.**",
    bullets: [
      "Formação mensal — presencial na Sala 3.0 e online",
      "Foco em aplicativos pedagógicos, metodologias ativas e estratégias inovadoras",
      "Modelagem curricular bimestral conectando conteúdo a ferramentas digitais",
    ],
    cbl: {
      title: "ABD — Aprendizagem Baseada em Desafios",
      detail:
        "Em 2024 e 2025, a escola adotou a metodologia CBL da Apple como estrutura. Ela mudou a postura do professor: não se trata mais apenas de usar aplicativos existentes — agora os estudantes **criam suas próprias soluções**, incluindo seus próprios apps, tornando-se protagonistas da aprendizagem.",
    },
    ai: {
      title: "IA na Sala de Aula — 2026",
      detail:
        "Os professores foram capacitados para usar a IA de forma produtiva. Em literatura do 8º e 9º anos, os estudantes leram Machado de Assis e deram vida a personagens de ficção — cada um com personalidade, perfil de Instagram, seguidores, curtidas e imagens. Personagens do século XIX vivendo no século XXI.",
    },
    appsTitle: "Apps dominados pelos professores",
    apps: [
      "Canva", "Padlet", "Kahoot", "SimpleMind", "Freeform", "Keynote", "Pages", "GeoGebra",
      "Numbers", "Clips", "iMovie", "GarageBand", "Swift Playgrounds", "Teachy", "Blooket", "Timeline 3D",
    ],
  },
  infrastructure: {
    eyebrow: "Infraestrutura",
    title: "A Sala de Aula Conectada",
    features: [
      { title: "Programa iPad 1:1", detail: "Um iPad individual para cada estudante do Fundamental II e um iPad dedicado para cada professor." },
      { title: "App Sala de Aula", detail: "Usado diariamente para espelhar conteúdo, compartilhar atividades e acompanhar o progresso de cada estudante em tempo real." },
      { title: "Apple School Manager", detail: "Ferramenta central para gerenciar o ciclo de vida dos dispositivos e distribuir apps para turmas específicas em escala." },
      { title: "Sala de Tecnologia 3.0", detail: "Um espaço dedicado a formações mensais, certificações Apple e projetos especiais." },
      { title: "Integração Diária", detail: "Uma agenda diária mantém atividades integradas ao iPad presentes em todas as disciplinas." },
      { title: "100% Fundamental II", detail: "Do 6º ao 9º ano, a sala conectada é o padrão — não a exceção." },
    ],
    timelineTitle: "O caminho até os 100% — nossa jornada 1:1",
    timeline: [
      { year: "2014", title: "Começa a cultura digital", detail: "A adoção do sistema UNO estabelece a base." },
      { year: "2020", title: "Formação Apple Teacher", detail: "Inicia a certificação contínua com a SEJUNTA." },
      { year: "2021", title: "Lançamento do 1:1", detail: "iPad individual para o 6º e 7º anos." },
      { year: "2023", title: "Expansão", detail: "O 8º ano entra no programa 1:1." },
      { year: "2024", title: "CBL & Liderança", detail: "Aprendizagem Baseada em Desafios adotada; Jornada de Liderança." },
      { year: "2025", title: "Meta alcançada", detail: "9º ano incluído — 100% do Fundamental II; Modelagem Curricular." },
      { year: "2026", title: "IA & renovação ADS", detail: "IA integrada às salas de aula; ano de renovação ADS." },
    ],
  },
  inspire: {
    eyebrow: "Inspirar",
    title: "Inspirar — A Aprendizagem Reimaginada",
    intro:
      "Esta seção expande o que os vídeos mostram, detalhando a intencionalidade pedagógica por trás de cada prática — disciplina por disciplina.",
    disciplines: [
      { subject: "Programação", teacher: "Prof. Gabriel", app: "Swift Playgrounds", description: "Os estudantes percorrem o Everyone Can Code: Puzzles and Adventures, construindo apps reais — rifas em grupo, lojas virtuais e ferramentas de gestão — com apoio de IA." },
      { subject: "Inglês", teacher: "Profa. Gabriela", app: "iPad · Apple Books", description: "Avaliação totalmente personalizada no iPad, com livros digitais ajustados ao nível de proficiência de cada estudante e acompanhamento de progresso em tempo real." },
      { subject: "Arte — Stop Motion", teacher: "Profa. Iulianna · 9º", app: "FlipaClip · iMovie · GarageBand", description: "Os estudantes criaram histórias animadas quadro a quadro, unindo arte, narrativa e tecnologia — animação, edição e trilha sonora original em um só projeto." },
      { subject: "Matemática", teacher: "8º ano", app: "Numbers · Keynote", description: "Entrevistas com a comunidade viraram gráficos estatísticos reais no Numbers, apresentados no Keynote. O apoio visual ajudou estudantes com dificuldade; os avançados exploraram análises mais profundas." },
      { subject: "Ciências", teacher: "7º ano", app: "Pages", description: "Após visitar o Parque Zoobotânico, os estudantes produziram um relatório científico completo no Pages — introdução, taxonomia e documentação fotográfica com o iPad." },
      { subject: "Química", teacher: "Profa. Layse", app: "Safari · Pages", description: "Os estudantes modelaram átomos com massinha, pesquisaram reações no Safari e registraram resultados em relatórios no Pages. A sala virou laboratório." },
      { subject: "Literatura + IA", teacher: "8º & 9º", app: "IA · Instagram", description: "Lendo Machado de Assis, os estudantes deram perfis de Instagram a personagens de ficção — figuras do século XIX vivendo no XXI, com posts, seguidores e imagens geradas por IA." },
      { subject: "Escrita — AJULE", teacher: "Academia Juvenil de Letras", app: "Apple Books", description: "Os estudantes escrevem e publicam livros digitais no Apple Books, adotados como leitura complementar por toda a escola. O estudante como autor publicado." },
    ],
  },
  imagine: {
    eyebrow: "Imaginar",
    title: "Imaginar — Estudantes Construindo Coisas Reais",
    intro:
      "Por meio da Aprendizagem Baseada em Desafios, os estudantes identificam problemas reais e desenvolvem soluções com o iPad. Não são exercícios — são produtos usados por famílias, empresas e pela comunidade escolar.",
    projects: [
      { name: "Gestor da Cantina", student: "Garcês · 7º", app: "Swift Playgrounds", result: "Um app de gestão construído para a cantina da escola." },
      { name: "Lembrete de Hidratação", student: "Garcês · 7º", app: "Swift Playgrounds", result: "Um app que lembra os estudantes de beber água durante os intervalos." },
      { name: "Sistema para Loja de Ferragens", student: "Heitor de Jesus", app: "Swift Playgrounds", result: "Estoque, vendas, avaliações, notas por estrelas, carrinho e formas de pagamento para a loja do pai." },
      { name: "IA Pessoal de Estudos", student: "Heitor Soares", app: "Swift Playgrounds", result: "Sua própria IA, que lê imagens e gera flashcards e mapas mentais para ajudá-lo a estudar." },
      { name: "Guia de Viagem da China", student: "Samuel · 9º", app: "Swift Playgrounds", result: "Um guia para imigrantes e turistas — traduções, frases do dia a dia e pontos turísticos." },
      { name: "Gestor de Estoque", student: "Arthur", app: "Swift Playgrounds", result: "Um app de gestão que a mãe dele agora usa no próprio trabalho para controle de estoque." },
      { name: "16 Empresas Reais", student: "9º — Feira de Empreendedorismo", app: "Swift Playgrounds", result: "Negócios de alimentação, papelaria e vestuário com apps de gestão, identidade visual, marketing e Instagram." },
      { name: 'Vídeo Cinematográfico "Senhora"', student: "Antony · 9º", app: "Clips", result: "Um vídeo sobre o romance de José de Alencar com efeitos, legendas e cortes cinematográficos." },
      { name: "Estudo de Campo El Quixote", student: "Interdisciplinar", app: "Pages · iPad", result: "Ubajara documentada em Geografia, História e Português." },
    ],
    callouts: [
      { title: "El Quixote — Estudo de Campo 2026", detail: "Em Ubajara, uma única viagem virou Geografia (relevo e vegetação da Caatinga), História (cultura regional) e trabalho de Português. Em 2026, os estudantes visitarão São Luís (MA) e Pedro II (PI), criando apps informativos sobre cultura, economia e turismo locais." },
      { title: "AJULE — Livros no Apple Books", detail: "Os estudantes da Academia Juvenil de Letras publicam livros digitais no Apple Books, adotados como leitura complementar por toda a escola. O mais alto nível de protagonismo criativo: o estudante como autor publicado." },
    ],
  },
  impact: {
    eyebrow: "Gerar Impacto",
    title: "Gerar Impacto — Os Números Por Trás da História",
    stats: [
      { value: 85.5, suffix: "%", headline: "das famílias acreditam que o iPad melhorou a aprendizagem", note: "Pesquisa realizada em março de 2026 com 83 famílias" },
      { value: 77, suffix: "%", headline: "das famílias percebem uma cultura digital crescendo na escola", note: "Mesma pesquisa — mar/2026" },
      { value: 100, suffix: "%", headline: "dos professores são Apple Teachers com Portfólio concluído", note: "Certificação contínua com a SEJUNTA desde 2020" },
      { value: 100, suffix: "%", headline: "dos professores no programa desde 2023 relatam mudança significativa na prática", note: "Aulas mais dinâmicas, maior engajamento e autonomia dos estudantes" },
      { value: 16, suffix: "", headline: "empresas reais criadas por estudantes do 9º ano na Feira de Empreendedorismo", note: "Apps funcionais, identidade visual e estratégia de marketing" },
      { value: 100, suffix: "%", headline: "do Fundamental II coberto pelo programa 1:1", note: "Meta alcançada em 2025" },
    ],
    chartTitle: "Pesquisa com as Famílias — Março de 2026",
    chartSubtitle: "Com base nas respostas de 83 famílias.",
    chartData: [
      { label: "Melhorou a aprendizagem", value: 85.5 },
      { label: "Cultura digital", value: 77 },
    ],
    evidenceTitle: "Evidência, não suposição",
    evidenceText:
      "A Medição é um dos seis elementos Apple que nos guiam. Validamos nosso projeto com dados reais das famílias que o vivenciam — e os resultados confirmam consistentemente que o iPad está mudando a forma como nossos estudantes aprendem.",
    timelineTitle: "A linha do tempo do projeto 1:1",
  },
  accessibility: {
    eyebrow: "Acessibilidade & Inclusão",
    title: "A Tecnologia como Ferramenta para Cada Estudante",
    intro:
      "No Pro Campus Júnior, o iPad é uma ferramenta de inclusão. A seguir, exemplos concretos de como os recursos de acessibilidade da Apple fazem parte da aprendizagem cotidiana.",
    features: [
      { title: "Zoom do iPad", description: "Os professores ativam o Zoom para estudantes com baixa acuidade visual durante a leitura, sem interromper a aula." },
      { title: "Contraste Ajustável", description: "As telas são configuradas para facilitar a visualização de estudantes com necessidades visuais específicas." },
      { title: "Teachy", description: "A Profa. Layla gera adaptações curriculares personalizadas para estudantes neurodivergentes — versões adaptadas semanalmente para cada perfil." },
      { title: "Controle por Voz", description: "Estudantes com dificuldades motoras navegam e respondem atividades sem depender do toque." },
      { title: "Ditado & Legendas ao Vivo", description: "Conteúdo Falado, Ditado e Legendas ao Vivo são os próximos passos planejados para diferentes necessidades de aprendizagem." },
    ],
    quote: "A acessibilidade não é a exceção — é a rotina.",
  },
  next: {
    eyebrow: "Roteiro",
    title: "Olhando Para o Futuro",
    cards: [
      { title: "Expansão para o Ensino Médio", detail: "Estender o programa 1:1 ao Ensino Médio — dispositivos individuais, formação docente e uma cultura digital sustentada durante a transição." },
      { title: "IA em Todos os Segmentos", detail: "Ampliar a integração da IA e capacitar professores para gamificar aulas e criar materiais personalizados com IA." },
      { title: "Livros Multissensoriais", detail: "Os livros digitais feitos pelos estudantes da AJULE se tornarão multissensoriais, com audiodescrição — estendendo a acessibilidade para além dos muros da escola." },
      { title: "Colaboração Entre Escolas", detail: "Conectar-se com outra escola para trocar boas práticas e desenvolver projetos colaborativos via Shared iPad ou Freeform." },
    ],
    fieldStudiesTitle: "Estudo de Campo 2026",
    fieldStudiesText:
      "Os estudantes visitarão São Luís (MA) e Pedro II (PI), criando apps informativos sobre cultura, economia e turismo locais — levando a sala de aula para o interior e o interior para dentro do iPad.",
  },
  closing: {
    eyebrow: "Encerramento",
    title: "Mais Que uma Escola. Uma Comunidade de Construtores.",
    quote:
      "No Pro Campus Júnior, a tecnologia não é uma ferramenta que acrescentamos à educação. É o meio pelo qual nossos estudantes pensam, criam, resolvem e se expressam. Desde 2014, estamos construindo — não apenas competências digitais, mas uma geração de estudantes que enxergam problemas como oportunidades e o código como uma linguagem. Este workbook é a nossa história. O título ADS é o nosso compromisso de continuar contando-a.",
    signature: "Colégio Pro Campus Júnior · Teresina, PI — Brasil · 2026",
  },
}

export const content: Record<Lang, Content> = { en, pt }
