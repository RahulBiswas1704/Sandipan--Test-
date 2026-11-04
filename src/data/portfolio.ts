/**
 * Central Portfolio Data — SANDIPAN SAMANTA
 * All personal information, projects, education, experience, and skills
 * are strictly editable from this single file.
 */

export type ProfileId = 'recruiter' | 'engineer' | 'explorer';
export type SectionId = 'about' | 'journey' | 'experience' | 'projects' | 'skills' | 'education' | 'resume';

export interface ViewerProfile {
  id: ProfileId;
  name: string;
  role: string;
  subtitle: string;
  tagline: string;
  avatarIcon: string;
  badge: string;
  order: SectionId[];
  accentColor: string;
}

export interface MetricItem {
  value: string;
  label: string;
  detail?: string;
}

export interface ProjectComponent {
  name: string;
  role: string;
  spec?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  ratingBadge: string;
  streamingQuality: string;
  logline: string;
  description: string;
  objective: string;
  technicalHighlights: string[];
  components: ProjectComponent[];
  implementation: string[];
  skillsDemonstrated: string[];
  systemArchitecture: {
    inputs: string[];
    processing: string[];
    outputs: string[];
  };
  palette: {
    primary: string;
    secondary: string;
    glow: string;
  };
  circuitPreviewSvg: string;
}

export interface SeasonEpisode {
  episodeNumber: string;
  title: string;
  institutionOrCompany: string;
  roleOrDegree?: string;
  durationOrDate: string;
  scoreOrMetric?: string;
  location?: string;
  typeBadge: string;
  summary: string;
  details: string[];
  technicalTopics: string[];
  toolsUsed: string[];
}

export interface Season {
  seasonNumber: string;
  seasonId: string;
  title: string;
  theme: string;
  yearRange: string;
  badge: string;
  episodes: SeasonEpisode[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    practicalApplication: string;
    levelTag: 'Expertise' | 'Proficient' | 'Working Knowledge';
  }[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  completion: string;
  score: string;
  status: 'Graduating' | 'Completed';
  highlights: string[];
}

export const personalProfile = {
  name: 'SANDIPAN SAMANTA',
  displayName: 'Sandipan Samanta',
  professionalIdentity: 'Electrical Engineer | Site Engineer | Electrical Design & Project Execution',
  tagline: 'DESIGNED BY KNOWLEDGE. BUILT THROUGH EXPERIENCE.',
  seriesTag: 'THE ENGINEERING SERIES',
  studioTitle: 'ENGINEERING THE FUTURE',
  location: 'Liluah, West Bengal, India – 711227',
  phone: '+91 7595089896',
  email: 'samantasandipan92@gmail.com',
  availability: 'OPEN TO ENGINEERING OPPORTUNITIES',
  
  introduction: 
    'B.Tech Electrical Engineering graduate (2026) with a Diploma in Electrical Engineering (2023) and practical site-level experience in electrical inspection, drawing verification, and project execution at Electro Control. Comfortable with AutoCAD 2D drafting, load and cable sizing, electrical layouts, technical documentation, and engineering coordination. Passionate about electrical systems, industrial engineering, power distribution, and practical problem-solving. Seeking opportunities in production, maintenance, electrical design, and project engineering.',
    
  bioParagraphs: [
    'With a strong dual foundation spanning a 3-year Diploma and a 4-year B.Tech in Electrical Engineering, I bridge theoretical engineering calculations with practical, on-site reality.',
    'During my tenure as Site Engineer at Electro Control in Bally, I worked directly on the ground conducting site surveys, verifying Single Line Diagrams (SLDs), inspecting cable sizing and panel capacities, resolving cross-trade coordination with civil and mechanical teams, and ensuring strict compliance with DSR, DAR, and PWD standards.',
    'I believe that true engineering excellence requires not just drawing schematics, but understanding the physics, safety regulations, and operational nuances when high-power systems are energized.'
  ],

  stats: [
    { value: '3+ Yrs', label: 'Engineering Studies' },
    { value: '9 Mos', label: 'Site Engineering Experience' },
    { value: '100%', label: 'Commitment to Quality & Safety' },
    { value: '415V / 230V', label: 'Power Systems Familiarity' }
  ],

  links: {
    phone: 'tel:+917595089896',
    email: 'mailto:samantasandipan92@gmail.com',
    linkedin: 'https://linkedin.com/in/sandipan-samanta-electrical',
    github: 'https://github.com/sandipan-samanta',
    resumePdf: '/assets/Sandipan_Samanta_Resume.pdf'
  },

  engineeringPillars: [
    { title: 'AutoCAD 2D Drafting', desc: 'Electrical layout drafting, cable routing, panel schedules, and SLDs.' },
    { title: 'Site Inspection & Execution', desc: 'On-site technical evaluation, cross-trade coordination, and safety audits.' },
    { title: 'Load & Cable Sizing', desc: 'Accurate ampere calculation, voltage drop mitigation, and breaker capacity selection.' },
    { title: 'Testing & Instruments', desc: 'Insulation testing with Megger, circuit continuity, and multimeter diagnostics.' }
  ]
};

export const viewerProfiles: ViewerProfile[] = [
  {
    id: 'recruiter',
    name: 'Recruiter',
    role: 'Hiring Manager & Talent Acquisition',
    subtitle: 'Professional Experience & Education',
    tagline: 'Focused on site engineering, credentials, compliance, and career readiness.',
    avatarIcon: 'Briefcase',
    badge: 'CAREER FOCUS',
    order: ['experience', 'education', 'resume', 'skills', 'projects', 'about'],
    accentColor: '#3B82F6'
  },
  {
    id: 'engineer',
    name: 'Engineer',
    role: 'Technical Lead & Peer Reviewer',
    subtitle: 'Technical Skills & Projects',
    tagline: 'Focus on circuit design, embedded systems, load sizing, and AutoCAD drafting.',
    avatarIcon: 'Cpu',
    badge: 'TECHNICAL FOCUS',
    order: ['projects', 'skills', 'experience', 'about', 'education', 'resume'],
    accentColor: '#22D3EE'
  },
  {
    id: 'explorer',
    name: 'Explorer',
    role: 'Curious Observer & General Visitor',
    subtitle: 'My Journey & Interests',
    tagline: 'Follow the episodic timeline from early academic curiosity to future engineering.',
    avatarIcon: 'Compass',
    badge: 'NARRATIVE FOCUS',
    order: ['about', 'journey', 'projects', 'skills', 'experience', 'education'],
    accentColor: '#10B981'
  }
];

export const continueExploringCards = [
  {
    id: 'journey',
    title: 'My Engineering Journey',
    category: 'CHRONICLES',
    tag: 'Season 1 – 3',
    progress: 85,
    episodesCount: '6 Episodes',
    description: 'From Diploma foundations to industrial site execution and B.Tech completion.',
    accent: '#3B82F6',
    previewIcon: 'Film'
  },
  {
    id: 'experience',
    title: 'Professional Experience',
    category: 'SITE OPERATIONS',
    tag: 'Electro Control',
    progress: 95,
    episodesCount: 'Site Engineer',
    description: 'On-site electrical inspection, SLD verification, cable sizing, and PWD compliance.',
    accent: '#22D3EE',
    previewIcon: 'HardHat'
  },
  {
    id: 'projects',
    title: 'Technical Projects',
    category: 'ORIGINALS',
    tag: 'Hardware & IoT',
    progress: 100,
    episodesCount: '2 Originals',
    description: 'Biometric fingerprint security and dual-axis solar tracking systems.',
    accent: '#F59E0B',
    previewIcon: 'Zap'
  },
  {
    id: 'skills',
    title: 'Engineering Skills',
    category: 'TOOLKIT',
    tag: 'Drafting & Power',
    progress: 90,
    episodesCount: '6 Domains',
    description: 'AutoCAD 2D, Megger testing, load sizing, BOQ preparation, and SLDs.',
    accent: '#10B981',
    previewIcon: 'Wrench'
  },
  {
    id: 'education',
    title: 'Education & Qualifications',
    category: 'ACADEMIA',
    tag: 'B.Tech & Diploma',
    progress: 90,
    episodesCount: '2 Milestones',
    description: 'MAKAUT Electrical Engineering degree and WBSCTE Diploma.',
    accent: '#8B5CF6',
    previewIcon: 'GraduationCap'
  },
  {
    id: 'resume',
    title: 'Official Resume',
    category: 'DOCUMENTATION',
    tag: 'Verified PDF',
    progress: 100,
    episodesCount: 'Document',
    description: 'View, print, or download Sandipan Samanta’s complete engineering CV.',
    accent: '#EC4899',
    previewIcon: 'FileText'
  }
];

export const seasons: Season[] = [
  {
    seasonNumber: '01',
    seasonId: 'season-1',
    title: 'THE FOUNDATION',
    theme: 'Core Electrical Principles & Technical Drafting',
    yearRange: '2020 – 2023',
    badge: 'ACADEMIC ORIGINS',
    episodes: [
      {
        episodeNumber: 'E01',
        title: 'Diploma in Electrical Engineering',
        institutionOrCompany: 'West Bengal State Council of Technical Education (WBSCTE)',
        roleOrDegree: 'Diploma in Electrical Engineering',
        durationOrDate: 'Completion: July 2023',
        scoreOrMetric: 'CGPA: 7.6 / 10',
        location: 'West Bengal, India',
        typeBadge: 'DIPLOMA',
        summary: 'Rigorous 3-year foundational program establishing strong mastery over electrical circuits, machines, power generation, and engineering drafting.',
        details: [
          'Mastered core electrical engineering laws: Kirchhoff’s laws, Norton’s/Thevenin’s theorems, AC/DC analysis, and 3-phase power theory.',
          'Conducted intensive laboratory experiments with DC shunt motors, 3-phase squirrel cage induction motors, and step-down power transformers.',
          'Developed hand-drafted engineering schematics and transitioned into initial computer-aided design (CAD) environments.',
          'Achieved an academic CGPA of 7.6, establishing the technical backbone for on-site implementation.'
        ],
        technicalTopics: ['Electrical Machines', 'Power Systems', 'Circuit Theory', 'Technical Drawing', 'Lab Safety'],
        toolsUsed: ['Analog/Digital Multimeters', 'Tachometers', 'Rheostats', 'Auto-Transformers', 'Drawing Boards']
      },
      {
        episodeNumber: 'E02',
        title: 'Building Engineering Fundamentals',
        institutionOrCompany: 'Laboratory & Hands-on Workshops',
        roleOrDegree: 'Technical Apprenticeship & Practical Labs',
        durationOrDate: '2021 – 2023',
        scoreOrMetric: 'Laboratory Honors',
        location: 'West Bengal',
        typeBadge: 'PRACTICAL CORE',
        summary: 'Translating mathematical principles into tangible wiring systems, panel layouts, and power equipment diagnostics.',
        details: [
          'Practiced industrial electrical wiring, earthing methods (pipe & plate earthing), and conduit layout design.',
          'Studied transformer testing methodologies: open-circuit (OC) and short-circuit (SC) tests for efficiency and regulation calculation.',
          'Analyzed transmission and distribution network schematics, switchgear functionality, and protective relay operations.',
          'Trained in safety protocols, electrical shock prevention, and high-voltage danger management.'
        ],
        technicalTopics: ['Industrial Wiring', 'Earthing Protocols', 'Transformer Testing', 'Power Distribution', 'Safety Standards'],
        toolsUsed: ['Megger 500V', 'Phase Sequence Meter', 'Tong Tester', 'Soldering Station']
      }
    ]
  },
  {
    seasonNumber: '02',
    seasonId: 'season-2',
    title: 'THE INDUSTRY EXPERIENCE',
    theme: 'Site Operations, Electrical Inspection & Engineering Coordination',
    yearRange: 'July 2025 – March 2026',
    badge: 'INDUSTRY DEPLOYMENT',
    episodes: [
      {
        episodeNumber: 'E01',
        title: 'Entering the Industry',
        institutionOrCompany: 'Electro Control',
        roleOrDegree: 'Site Engineer',
        durationOrDate: 'July 2025 – March 2026',
        scoreOrMetric: '9 Months Intensive Site Experience',
        location: 'Bally, West Bengal, India',
        typeBadge: 'SITE ENGINEERING',
        summary: 'Transitioning from classroom engineering to live project sites, taking responsibility for drawing verification, vendor coordination, and electrical inspections.',
        details: [
          'Stationed as Site Engineer at Electro Control in Bally, responsible for day-to-day electrical site operations and inspection routines.',
          'Bridged technical specifications between design consultants, project managers, and on-ground electrical contractors.',
          'Conducted detailed site surveys, identifying spatial clashes and preliminary electrical service entrance requirements.',
          'Navigated real-world civil constraints and expedited electrical conduit and tray installation.'
        ],
        technicalTopics: ['Site Management', 'Contractor Coordination', 'Site Surveys', 'Electrical Quality Assurance'],
        toolsUsed: ['AutoCAD 2D', 'Digital Multimeter', 'Laser Distance Measurer', 'Field Inspection Logs']
      },
      {
        episodeNumber: 'E02',
        title: 'On-Site Engineering & Quality Control',
        institutionOrCompany: 'Electro Control — Field Operations',
        roleOrDegree: 'Technical Inspector & Drawing Verifier',
        durationOrDate: 'July 2025 – March 2026',
        scoreOrMetric: 'Full Quality & Compliance Oversight',
        location: 'Bally, West Bengal',
        typeBadge: 'TECHNICAL EXECUTION',
        summary: 'Rigorous engineering execution: review of Single Line Diagrams (SLDs), cable sizing, panel capacities, BOQs, and compliance with DSR, DAR, and PWD specifications.',
        details: [
          'Conducted comprehensive site surveys and technical evaluations, assessing electrical requirements and proactively mitigating safety risks.',
          'Reviewed electrical layouts, Single Line Diagrams (SLDs), load schedules, and Bills of Quantities (BOQ).',
          'Verified load calculations, cable cross-sectional sizing against thermal and voltage-drop criteria, and distribution panel capacities.',
          'Coordinated cross-trade activities seamlessly with civil and mechanical teams to avoid rework and piping clashes.',
          'Resolved critical on-site technical discrepancies between approved architectural drawings and existing site conditions.',
          'Prepared daily and weekly progress reports (DPR/WPR) for senior engineering management.',
          'Utilized AutoCAD 2D and MS Excel for drawing updates and estimation checks.',
          'Performed insulation resistance testing using Megger instruments and verified voltage and current levels with digital multimeters.',
          'Ensured rigorous adherence to government standards including DSR (Delhi Schedule of Rates), DAR (Delhi Analysis of Rates), and PWD specifications.'
        ],
        technicalTopics: ['Single Line Diagrams (SLDs)', 'Load Calculation', 'Cable Sizing', 'DSR / DAR / PWD Specs', 'BOQ Verification', 'Megger Insulation Testing'],
        toolsUsed: ['Megger (Insulation Tester)', 'Digital Multimeter', 'AutoCAD 2D', 'Microsoft Excel', 'PWD / DSR Schedule Manuals']
      }
    ]
  },
  {
    seasonNumber: '03',
    seasonId: 'season-3',
    title: 'THE NEXT CHAPTER',
    theme: 'Higher Engineering Credentials & Future Horizons',
    yearRange: '2023 – 2026',
    badge: 'DEGREE & FUTURE',
    episodes: [
      {
        episodeNumber: 'E01',
        title: 'B.Tech in Electrical Engineering',
        institutionOrCompany: 'Maulana Abul Kalam Azad University of Technology (MAKAUT)',
        roleOrDegree: 'Bachelor of Technology — Electrical Engineering',
        durationOrDate: 'Completion: July 2026',
        scoreOrMetric: 'CGPA: 6.56 / 10',
        location: 'West Bengal, India',
        typeBadge: 'B.TECH DEGREE',
        summary: 'Advanced engineering degree expanding into power systems analysis, industrial automation, control theory, and renewable energy.',
        details: [
          'Completed rigorous degree curriculum covering Power Systems I & II, Control Systems, Power Electronics, Switchgear & Protection, and Microcontrollers.',
          'Analyzed symmetrical and unsymmetrical fault conditions in large-scale interconnected power grids.',
          'Designed embedded control systems utilizing Arduino microcontrollers and sensor networks for automation.',
          'Synthesized industrial site experience with academic mathematical modeling to optimize electrical installation designs.'
        ],
        technicalTopics: ['Power Systems Analysis', 'Control Engineering', 'Power Electronics', 'Microcontroller Interfacing', 'Renewable Energy'],
        toolsUsed: ['MATLAB / Simulink Basics', 'Arduino IDE', 'AutoCAD Electrical Basics', 'Scientific Computing Tools']
      },
      {
        episodeNumber: 'E02',
        title: 'The Future: Industrial Excellence',
        institutionOrCompany: 'Professional Engineering Horizon',
        roleOrDegree: 'Aspiring Project & Design Engineer',
        durationOrDate: '2026 and Beyond',
        scoreOrMetric: 'Ready for Immediate Deployment',
        location: 'India & Global Projects',
        typeBadge: 'EXPEDITION',
        summary: 'Continuously learning, improving engineering knowledge, and looking forward to contributing to meaningful engineering projects in production, maintenance, electrical design, and project execution.',
        details: [
          'Seeking challenging engineering positions in industrial production facilities, electrical maintenance operations, or consultancy design firms.',
          'Dedicated to upholding Indian Electricity Rules (IER) and international safety protocols on every assignment.',
          'Committed to continuous professional development in BIM electrical modeling, renewable energy microgrids, and automated substation architectures.'
        ],
        technicalTopics: ['Substation Engineering', 'Industrial Maintenance', 'Renewable Microgrids', 'Automation'],
        toolsUsed: ['Advanced CAD', 'Electrical Sizing Calculators', 'Project Management Tools']
      }
    ]
  }
];

export const featuredProjects: Project[] = [
  {
    id: 'fingerprint-door-lock',
    title: 'FINGERPRINT-BASED DOOR UNLOCKING SYSTEM',
    category: 'Embedded Systems / Access Control',
    year: '2024',
    ratingBadge: 'SECURITY VERIFIED',
    streamingQuality: '4K SCHEMATIC',
    logline: 'A robust biometric access control apparatus engineered with optical capacitive sensing and fail-safe electromagnetic latching.',
    description: 
      'Developed a biometric door access control system using an Arduino UNO R3, fingerprint sensor, LCD interface, and solenoid electric lock. The system automates secure door entry by verifying biometric templates against an onboard flash database.',
    objective: 
      'To build a cost-effective, tamper-resistant access control unit that eliminates physical key vulnerabilities and provides instant visual authorization feedback.',
    technicalHighlights: [
      'Arduino UNO R3 Microcontroller',
      'Optical Fingerprint Recognition Sensor (R307 / AS608)',
      '16x2 Liquid Crystal Display with I2C Communication Interface',
      '12V DC Solenoid Electric Door Lock Mechanism',
      '5V Optocoupler-Isolated Relay Driver Circuit',
      'Dual-Rail DC Power Regulation Circuit (5V / 12V)',
      'Embedded C/C++ Firmware with Template Matching Algorithm',
      'Hardware Troubleshooting, Debouncing & Noise Filtering'
    ],
    components: [
      { name: 'Arduino UNO R3', role: 'Main Central Processing & GPIO Logic Controller', spec: 'ATmega328P @ 16MHz, 5V Logic' },
      { name: 'Optical Fingerprint Sensor', role: 'Biometric Capture & DSP Image Feature Matching', spec: 'R307 Module, UART 9600-57600 baud' },
      { name: '16x2 LCD Display + I2C', role: 'User Status & Interactive Authentication Interface', spec: 'HD44780 + PCF8574 backpack' },
      { name: '12V DC Solenoid Lock', role: 'Mechanical Latch Actuation via Electromagnetic Plunger', spec: '12V DC @ 650mA holding force' },
      { name: 'Single-Channel Relay Module', role: 'Galvanic Isolation & High-Current Load Switching', spec: '10A 250VAC / 30VDC rated' },
      { name: 'Flyback Diode (1N4007)', role: 'Back-EMF Transient Suppression across Solenoid Coil', spec: '1000V Reverse, 1A Forward' },
      { name: 'Regulated DC Power Supply', role: 'Dual Voltage Rail for Logic (5V) & Actuator (12V)', spec: '12V 2A SMPS' }
    ],
    implementation: [
      'Configured hardware UART communication between Arduino UNO and optical fingerprint sensor with optimized baud rate for fast template scanning.',
      'Designed an optocoupler-isolated relay switching circuit with a reverse-biased flyback diode across the inductive solenoid coil to prevent back-EMF voltage spikes from resetting the microcontroller.',
      'Developed modular C++ firmware with non-blocking delays to ensure fluid LCD updates while scanning for finger placement.',
      'Implemented secure security protocols: after 3 consecutive failed biometric attempts, the system triggers an lockout period and warning indication.',
      'Tested electrical wiring integrity, voltage drop under peak solenoid activation current, and sensor noise suppression in noisy electrical environments.'
    ],
    skillsDemonstrated: [
      'Embedded C/C++ Programming',
      'Microcontroller Interfacing & Serial Communication',
      'Inductive Load Driver Design (Relays & Solenoids)',
      'Circuit Prototyping & Schematic Drafting',
      'Hardware Fault Diagnosis & Electrical Noise Isolation'
    ],
    systemArchitecture: {
      inputs: ['Optical Fingerprint Scanner (Biometric Template)', 'Master Reset Button', '12V DC Raw Power'],
      processing: ['ATmega328P Logic', 'Template Extraction & Matching', 'State Machine (IDLE / VERIFY / GRANTED / DENIED)'],
      outputs: ['16x2 I2C LCD Status Display', 'Relay Coil Trigger Pin', '12V Solenoid Latch Actuation', 'Buzzer Indicator']
    },
    palette: {
      primary: '#3B82F6',
      secondary: '#22D3EE',
      glow: 'rgba(59, 130, 246, 0.4)'
    },
    circuitPreviewSvg: 'biometric-circuit'
  },
  {
    id: 'dual-axis-solar-tracker',
    title: 'DUAL-AXIS SOLAR TRACKING SYSTEM',
    category: 'Renewable Energy / Motor & Sensor Control',
    year: '2025',
    ratingBadge: 'MAX EFFICIENCY',
    streamingQuality: 'ULTRA HD 60FPS',
    logline: 'An intelligent closed-loop solar orientation system maximizing photovoltaic power harvesting via differential photodiode sensing.',
    description: 
      'Designed and developed a dual-axis solar tracking system using Arduino UNO R3, four LDR sensors, and two servo motors to align solar panels with the sun. The system continually optimizes the angle of incidence, generating significantly higher energy output than static solar panels.',
    objective: 
      'To design an autonomous dual-axis electromechanical tracking rig that dynamically tracks solar azimuth and elevation across all daylight hours with minimal parasitic energy consumption.',
    technicalHighlights: [
      'Arduino UNO R3 Microcontroller',
      'Four Light-Dependent Resistors (LDRs) in Quadrant Array',
      'Two Precision Servo Motors (Horizontal Azimuth & Vertical Elevation)',
      'High-Efficiency Monocrystalline Photovoltaic Solar Panel',
      'Rechargeable Lithium-Ion Battery Storage Bank',
      'TP4056 Lithium Battery Charge Management Module with Protection',
      'Power Distribution & DC Voltage Regulation Circuit',
      'Differential Comparator Algorithm for Motor & Sensor Control'
    ],
    components: [
      { name: 'Arduino UNO R3', role: 'Comparator Execution, ADC Sampling & Dual PWM Driver', spec: '10-bit ADC, 6 PWM Output Channels' },
      { name: '4x LDR Light Sensors', role: 'Quadrant Solar Irradiance Angle Detectors', spec: 'GL5528 Photoresistors in cross-divider' },
      { name: 'Azimuth Servo Motor', role: 'Horizontal 180-Degree East-to-West Tracking Gimbal', spec: 'High-Torque Metal Gear Servo' },
      { name: 'Elevation Servo Motor', role: 'Vertical Angle Altitude Tilt Tracking (0-90°)', spec: 'Micro Servo with Mechanical Counterbalance' },
      { name: 'Solar PV Panel', role: 'Solar-to-Electric Energy Harvesting Element', spec: '6V 2W Monocrystalline PV Panel' },
      { name: 'Li-ion Battery Pack', role: 'Energy Storage for Autonomous Field Operation', spec: '3.7V 18650 2600mAh Cell' },
      { name: 'TP4056 Charger Module', role: 'Constant Current / Constant Voltage (CC/CV) Charging', spec: 'Overcharge & Overdischarge Cut-off' },
      { name: 'Voltage Step-Down / Regulator', role: 'Stable 5V Logic Bus Power Supply', spec: 'Buck Converter Module' }
    ],
    implementation: [
      'Constructed a 4-quadrant sensor cross-baffle that casts shadows onto adjacent LDRs when the sun is not directly normal to the panel face.',
      'Engineered an analog voltage divider circuit converting light intensity variations into proportional 0–5V analog inputs for the Arduino ADC.',
      'Formulated an intelligent differential tracking algorithm: calculates Top-vs-Bottom (vertical) and Left-vs-Right (horizontal) luminance deltas.',
      'Incorporated an adaptive dead-band tolerance (threshold window) in code to eliminate motor hunting, oscillation, and premature servo gear wear.',
      'Integrated an automatic night-time reset routine: returns the tracker to face East at sunrise when ambient sensor readings fall below twilight threshold.',
      'Conducted real-world energy generation comparative trials, verifying an observed boost in power capture compared to stationary 15-degree fixed orientation.'
    ],
    skillsDemonstrated: [
      'Analog Sensor Signal Conditioning & ADC Processing',
      'Dual-Axis Servo Motor Control via Pulse Width Modulation (PWM)',
      'Renewable Energy & Photovoltaic Power Systems',
      'Battery Storage & Power Management (BMS/TP4056)',
      'Algorithmic Closed-Loop Control & Differential Logic'
    ],
    systemArchitecture: {
      inputs: ['4x LDR Analog Signals (Top, Bottom, Left, Right)', 'Solar PV Generated Voltage', 'Battery Voltage'],
      processing: ['ADC Averaging Filter', 'Differential Quadrant Error Calculation', 'Dead-Band Thresholding', 'Servo Angle Target Generation'],
      outputs: ['Azimuth PWM Signal (Pin 9)', 'Elevation PWM Signal (Pin 10)', 'TP4056 Regulated Battery Charging Rail']
    },
    palette: {
      primary: '#22D3EE',
      secondary: '#F59E0B',
      glow: 'rgba(34, 211, 238, 0.4)'
    },
    circuitPreviewSvg: 'solar-tracker-circuit'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'drafting',
    title: 'DESIGN & DRAFTING',
    description: 'Technical CAD representation, drafting electrical floor plans, Single Line Diagrams, and conduit schedules.',
    iconName: 'PenTool',
    skills: [
      {
        name: 'AutoCAD 2D',
        practicalApplication: 'Drafting electrical layouts, Single Line Diagrams (SLDs), conduit routing, cable tray layouts, and switchboard elevation details.',
        levelTag: 'Proficient'
      }
    ]
  },
  {
    id: 'fundamentals',
    title: 'ENGINEERING FUNDAMENTALS',
    description: 'Core electrical engineering calculations, power distribution design, circuit theory, and motor control.',
    iconName: 'Zap',
    skills: [
      {
        name: 'Circuit Design',
        practicalApplication: 'Analyzing AC/DC schematic topologies, calculating component ratings, and designing protection circuits.',
        levelTag: 'Expertise'
      },
      {
        name: 'Electrical Wiring',
        practicalApplication: 'Industrial and domestic installation, phase distribution, neutral/ground routing, and conduit wiring techniques.',
        levelTag: 'Expertise'
      },
      {
        name: 'Load Calculation',
        practicalApplication: 'Aggregating connected electrical loads, diversity factor calculation, and determining maximum demand for main distribution boards.',
        levelTag: 'Proficient'
      },
      {
        name: 'Cable Sizing',
        practicalApplication: 'Selecting copper/aluminum conductor cross-section based on continuous current, voltage drop (per IS standard), and short-circuit withstand rating.',
        levelTag: 'Proficient'
      },
      {
        name: 'Single Line Diagrams (SLDs)',
        practicalApplication: 'Reading, verifying, and drafting complete power flow schematics from main transformers down to sub-distribution boards and MCCs.',
        levelTag: 'Proficient'
      },
      {
        name: 'Sensor & Motor Control',
        practicalApplication: 'Interfacing LDRs, biometric sensors, servo drives, contactors, relays, and DOL/Star-Delta starter concepts.',
        levelTag: 'Proficient'
      }
    ]
  },
  {
    id: 'testing',
    title: 'TESTING & ESTIMATION',
    description: 'Electrical diagnostic testing, insulation verification, government specifications, and commercial estimation.',
    iconName: 'Gauge',
    skills: [
      {
        name: 'Multimeter',
        practicalApplication: 'Measuring AC/DC voltage, line currents, circuit continuity, diode drops, and troubleshooting component failure on-site.',
        levelTag: 'Expertise'
      },
      {
        name: 'Megger (Insulation Tester)',
        practicalApplication: 'Performing high-voltage insulation resistance testing on power cable conductors and motor windings up to 1000V.',
        levelTag: 'Proficient'
      },
      {
        name: 'DSR / DAR / PWD Specifications',
        practicalApplication: 'Executing projects in strict compliance with Delhi Schedule of Rates (DSR), Delhi Analysis of Rates (DAR), and State PWD engineering manuals.',
        levelTag: 'Proficient'
      },
      {
        name: 'BOQ Preparation',
        practicalApplication: 'Extracting material take-offs from engineering drawings to prepare comprehensive Bills of Quantities for electrical installations.',
        levelTag: 'Proficient'
      },
      {
        name: 'Tender Documentation',
        practicalApplication: 'Reviewing technical specifications, commercial compliance sheets, and scope of work documents for government and commercial tenders.',
        levelTag: 'Working Knowledge'
      }
    ]
  },
  {
    id: 'office',
    title: 'OFFICE & DOCUMENTATION',
    description: 'Technical record-keeping, engineering spreadsheets, and reporting software.',
    iconName: 'FileSpreadsheet',
    skills: [
      {
        name: 'Microsoft Excel',
        practicalApplication: 'Building automated load schedule calculators, BOQ itemization, cable schedule tracking, and daily progress reporting (DPR).',
        levelTag: 'Proficient'
      },
      {
        name: 'Microsoft Word',
        practicalApplication: 'Authoring site inspection summaries, snag lists, technical deviation notes, and engineering correspondence.',
        levelTag: 'Proficient'
      },
      {
        name: 'Microsoft PowerPoint',
        practicalApplication: 'Preparing project milestone slides, technical presentations, and site progress summaries for stakeholders.',
        levelTag: 'Working Knowledge'
      }
    ]
  },
  {
    id: 'languages',
    title: 'LANGUAGES',
    description: 'Multilingual fluency for on-site crew coordination, contractor communication, and client meetings.',
    iconName: 'Languages',
    skills: [
      {
        name: 'English',
        practicalApplication: 'Professional technical reading, engineering documentation, technical email correspondence, and contract review.',
        levelTag: 'Proficient'
      },
      {
        name: 'Hindi',
        practicalApplication: 'Fluent site communication with contractors, technicians, suppliers, and multi-state field crews.',
        levelTag: 'Proficient'
      },
      {
        name: 'Bengali',
        practicalApplication: 'Native proficiency for local project execution, administrative coordination, and regional stakeholder dialogue.',
        levelTag: 'Expertise'
      }
    ]
  },
  {
    id: 'professional',
    title: 'KEY PROFESSIONAL SKILLS',
    description: 'Core cognitive, interpersonal, and analytical competencies that drive successful site execution.',
    iconName: 'ShieldCheck',
    skills: [
      {
        name: 'Problem Solving',
        practicalApplication: 'Rapid diagnostic troubleshooting of electrical faults, drawing discrepancies, and on-site physical obstructions.',
        levelTag: 'Expertise'
      },
      {
        name: 'Analytical Thinking',
        practicalApplication: 'Evaluating power demands, analyzing safety factors, and identifying root causes in electrical system anomalies.',
        levelTag: 'Expertise'
      },
      {
        name: 'Communication',
        practicalApplication: 'Clearly relaying technical requirements between consultants, site supervisors, and execution teams without ambiguity.',
        levelTag: 'Proficient'
      },
      {
        name: 'Team Collaboration',
        practicalApplication: 'Harmonizing electrical works with civil and mechanical subcontractors to maintain tight construction schedules.',
        levelTag: 'Expertise'
      },
      {
        name: 'Attention to Detail',
        practicalApplication: 'Rigorous cross-checking of cable gauge markings, terminal tightness, phase sequence markings, and drawing revision clouds.',
        levelTag: 'Expertise'
      }
    ]
  }
];

export const educationList: EducationItem[] = [
  {
    degree: 'B.Tech — Electrical Engineering',
    field: 'Electrical Engineering',
    institution: 'Maulana Abul Kalam Azad University of Technology (MAKAUT)',
    completion: 'July 2026',
    score: 'CGPA: 6.56 / 10',
    status: 'Graduating',
    highlights: [
      'Comprehensive study of Power Systems, Control Theory, Electrical Machines, and Industrial Protection.',
      'Active participant in technical hardware project design and laboratory testing.',
      'Synthesized field engineering realities with advanced computational circuit analysis.'
    ]
  },
  {
    degree: 'Diploma — Electrical Engineering',
    field: 'Electrical Engineering',
    institution: 'West Bengal State Council of Technical Education (WBSCTE)',
    completion: 'July 2023',
    score: 'CGPA: 7.6 / 10',
    status: 'Completed',
    highlights: [
      'Achieved academic honors with a 7.6 CGPA over 3 years of rigorous study.',
      'Intensive practical workshop training in motor rewinding, industrial wiring, and earthing.',
      'Strong grounding in engineering mathematics, electrical circuit laws, and technical drawing.'
    ]
  }
];

