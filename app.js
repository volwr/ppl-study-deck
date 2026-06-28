const modules = [
  {
    id: "orientation",
    week: 1,
    title: "Orientation",
    goal: "Understand what pilot training is and what the certificate lets you do.",
    read: ["FAA Become a Pilot page", "PHAK Chapter 1: Introduction to Flying", "ACS introduction and Private Pilot Airplane task list"],
    watch: ["private pilot ground school overview", "how to become a private pilot"],
    know: ["Student pilot certificate basics", "Pilot certificate levels", "What a checkride is", "CFI, DPE, ACS, PHAK, AIM, and POH"],
    links: [
      ["FAA Become a Pilot", "https://www.faa.gov/pilots/become"],
      ["Student Certificate", "https://www.faa.gov/pilots/become/student_cert"],
      ["YouTube Search", "https://www.youtube.com/results?search_query=private+pilot+ground+school+overview"]
    ]
  },
  {
    id: "aerodynamics",
    week: 2,
    title: "Airplanes and Aerodynamics",
    goal: "Understand why the airplane flies and what the controls do.",
    read: ["PHAK Chapter 3: Aircraft Construction", "PHAK Chapter 4: Principles of Flight", "PHAK Chapter 5: Aerodynamics of Flight", "PHAK Chapter 6: Flight Controls"],
    watch: ["four forces of flight private pilot", "angle of attack explained pilot", "airplane flight controls explained"],
    know: ["Lift, weight, thrust, drag", "Angle of attack", "Stall basics", "Ailerons, elevator, rudder, trim, flaps"],
    links: [
      ["PHAK", "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"],
      ["YouTube Search", "https://www.youtube.com/results?search_query=four+forces+of+flight+private+pilot"]
    ]
  },
  {
    id: "systems",
    week: 3,
    title: "Systems and Instruments",
    goal: "Understand what is in a typical trainer and what the gauges mean.",
    read: ["PHAK Chapter 7: Aircraft Systems", "PHAK Chapter 8: Flight Instruments", "PHAK Chapter 9: Flight Manuals and Other Documents", "Your aircraft POH/AFM"],
    watch: ["Cessna 172 systems private pilot", "six pack flight instruments explained", "pitot static system explained"],
    know: ["Engine, fuel, electrical, pitot-static, and vacuum/attitude systems", "Six-pack instruments", "POH structure", "Basic V-speeds"],
    links: [
      ["PHAK", "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"],
      ["YouTube Search", "https://www.youtube.com/results?search_query=six+pack+flight+instruments+explained"]
    ]
  },
  {
    id: "maneuvers",
    week: 4,
    title: "Ground, Takeoff, Landing, Maneuvers",
    goal: "Connect book knowledge to what happens in the airplane.",
    read: ["AFH Chapter 1: Introduction to Flight Training", "AFH Chapter 2: Ground Operations", "AFH Chapter 3: Basic Flight Maneuvers", "AFH Chapter 6: Takeoffs and Departure Climbs", "AFH Chapter 8: Airport Traffic Patterns", "AFH Chapter 9: Approaches and Landings"],
    watch: ["private pilot traffic pattern", "how to land a Cessna 172", "slow flight private pilot", "power off stall private pilot"],
    know: ["Taxi, runup, checklist flow", "Normal takeoff and landing", "Traffic pattern legs", "Slow flight, stalls, steep turns, ground reference maneuvers", "Go-around mindset"],
    links: [
      ["Airplane Flying Handbook", "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"],
      ["YouTube Search", "https://www.youtube.com/results?search_query=private+pilot+traffic+pattern"]
    ]
  },
  {
    id: "weather",
    week: 5,
    title: "Weather Basics",
    goal: "Stop seeing weather as random and start seeing flight risk.",
    read: ["PHAK Chapter 12: Weather Theory", "PHAK Chapter 13: Aviation Weather Services", "AIM Chapter 7: Safety of Flight"],
    watch: ["aviation weather private pilot", "METAR TAF explained", "clouds fronts pressure systems aviation"],
    know: ["Temperature, pressure, humidity, stability", "Clouds, fronts, thunderstorms, fog, wind shear", "METARs, TAFs, AIRMETs, SIGMETs", "Personal minimums"],
    links: [
      ["AIM", "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/"],
      ["YouTube Search", "https://www.youtube.com/results?search_query=METAR+TAF+explained+private+pilot"]
    ]
  },
  {
    id: "airspace",
    week: 6,
    title: "Airports, Airspace, Communications",
    goal: "Understand where you are allowed to fly and how to talk on the radio.",
    read: ["PHAK Chapter 14: Airport Operations", "PHAK Chapter 15: Airspace", "AIM Chapter 2: Airport lighting and visual aids", "AIM Chapter 3: Airspace", "AIM Chapter 4: Air Traffic Control"],
    watch: ["class b c d e g airspace explained", "airport signs markings lights private pilot", "pilot radio communications uncontrolled airport", "talking to ATC private pilot"],
    know: ["Runway markings and signs", "Towered vs. non-towered airports", "Class A, B, C, D, E, G", "Special use airspace", "VFR weather minimums", "Basic radio calls"],
    links: [
      ["AIM", "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/"],
      ["YouTube Search", "https://www.youtube.com/results?search_query=class+b+c+d+e+g+airspace+explained"]
    ]
  },
  {
    id: "navigation",
    week: 7,
    title: "Navigation and Charts",
    goal: "Plan and understand a simple VFR cross-country.",
    read: ["PHAK Chapter 16: Navigation", "AIM Chapter 1: Air Navigation", "AIM Chapter 9: Aeronautical Charts and Related Publications"],
    watch: ["VFR sectional chart explained", "pilotage dead reckoning private pilot", "VOR navigation private pilot", "cross country flight planning private pilot"],
    know: ["Sectional chart symbols", "True course vs. magnetic course", "Wind correction angle", "Groundspeed and ETA", "Fuel planning", "Diversion basics"],
    links: [
      ["FAA VFR Charts", "https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/vfr/"],
      ["SkyVector", "https://skyvector.com/"],
      ["YouTube Search", "https://www.youtube.com/results?search_query=VFR+sectional+chart+explained"]
    ]
  },
  {
    id: "performance",
    week: 8,
    title: "Performance, Weight and Balance, Risk",
    goal: "Learn how to answer whether the airplane can safely do this flight today.",
    read: ["PHAK Chapter 2: Aeronautical Decision-Making", "PHAK Chapter 10: Weight and Balance", "PHAK Chapter 11: Aircraft Performance", "AFH Chapter 4: Energy Management", "AFH Chapter 18: Emergency Procedures"],
    watch: ["weight and balance private pilot", "takeoff landing performance charts", "density altitude explained pilots", "aeronautical decision making private pilot"],
    know: ["Weight, arm, moment, CG", "Density altitude", "Takeoff and landing distance", "Climb performance", "IMSAFE, PAVE, 5P, DECIDE", "Aviate, navigate, communicate"],
    links: [
      ["PHAK", "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"],
      ["AFH", "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"],
      ["YouTube Search", "https://www.youtube.com/results?search_query=density+altitude+explained+pilots"]
    ]
  },
  {
    id: "regulations",
    week: 9,
    title: "Regulations and Test Prep",
    goal: "Understand the rules you actually use as a private pilot.",
    read: ["14 CFR Part 61", "14 CFR Part 91", "Private Pilot Airplane ACS", "AIM sections your CFI emphasizes"],
    watch: ["private pilot regulations part 61 part 91", "private pilot ACS oral exam", "private pilot checkride oral prep"],
    know: ["Required documents", "Currency vs. proficiency", "Passenger carrying rules", "Day/night VFR fuel reserves", "Right-of-way rules", "Required equipment", "Maintenance responsibilities"],
    links: [
      ["FAA Regulations", "https://www.faa.gov/regulations_policies/faa_regulations"],
      ["Private Pilot ACS", "https://www.faa.gov/training_testing/testing/acs"],
      ["YouTube Search", "https://www.youtube.com/results?search_query=private+pilot+ACS+oral+exam"]
    ]
  },
  {
    id: "checkride",
    week: 10,
    title: "Review and Checkride Mindset",
    goal: "Turn scattered knowledge into pilot-level judgment.",
    read: ["ACS tasks and weak areas", "Aircraft POH limitations, procedures, performance, W&B, systems", "All prior notes"],
    watch: ["private pilot mock oral", "private pilot checkride tips", "private pilot emergency procedures"],
    know: ["Explain a full imaginary flight", "Teach airspace", "Plan a 100-150 NM VFR cross-country", "Do a mock oral with your CFI"],
    links: [
      ["Private Pilot ACS", "https://www.faa.gov/training_testing/testing/acs"],
      ["YouTube Search", "https://www.youtube.com/results?search_query=private+pilot+mock+oral"]
    ]
  }
];

const moduleStudyVisuals = {
  orientation: {
    label: "Training route",
    prompt: "Picture the certificate path as a route: learn, solo, test, checkride.",
    hint: "A strong answer usually names the FAA source and what you would do next.",
    scene: "route"
  },
  aerodynamics: {
    label: "Forces snapshot",
    prompt: "Use the picture to separate lift, weight, thrust, and drag before choosing.",
    hint: "Most aerodynamics questions become easier when you ask what changed: airflow, angle of attack, or energy.",
    scene: "forces"
  },
  systems: {
    label: "Instrument scan",
    prompt: "Trace which aircraft system feeds the instrument or limitation in the question.",
    hint: "POH/AFM for aircraft-specific answers; system diagrams for failure clues.",
    scene: "panel"
  },
  maneuvers: {
    label: "Pattern picture",
    prompt: "Imagine the airplane position, energy, and escape plan before answering.",
    hint: "When the approach stops being stable, the safest plan is usually to reset with a go-around.",
    scene: "pattern"
  },
  weather: {
    label: "Weather scan",
    prompt: "Read the question like a preflight weather decision: trend, hazard, and margin.",
    hint: "Weather products tell different stories: METAR now, TAF forecast, advisories for hazards.",
    scene: "weather"
  },
  airspace: {
    label: "Airspace stack",
    prompt: "Sort the question by airport type, airspace class, radio need, and visibility minimums.",
    hint: "Controlled airspace questions often hinge on the class and whether a tower or clearance is involved.",
    scene: "airspace"
  },
  navigation: {
    label: "Chart work",
    prompt: "Sketch the route in your head: course, wind correction, groundspeed, and checkpoint.",
    hint: "Navigation answers usually start with where you are, where you are going, and what reference proves it.",
    scene: "navigation"
  },
  performance: {
    label: "Load and runway",
    prompt: "Connect weight, density altitude, runway length, and personal minimums.",
    hint: "Performance questions are go/no-go questions hiding in math clothing.",
    scene: "performance"
  },
  regulations: {
    label: "Rule check",
    prompt: "Identify whether this is a certificate, currency, equipment, or operating-rule question.",
    hint: "Part 61 is pilot certification/training; Part 91 is how the flight is operated.",
    scene: "regs"
  },
  checkride: {
    label: "Oral answer",
    prompt: "Answer like a pilot: source, decision, risk, and backup plan.",
    hint: "The examiner is listening for judgment, not just a memorized phrase.",
    scene: "checkride"
  }
};

const resources = [
  ["FAA Become a Pilot", "Official starting point for certificate options and FAA pathways.", "https://www.faa.gov/pilots/become"],
  ["Student Pilot Certificate", "Eligibility and application basics before solo.", "https://www.faa.gov/pilots/become/student_cert"],
  ["Pilot's Handbook", "Your free main ground school textbook.", "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"],
  ["Airplane Flying Handbook", "Free official maneuvers and flight training textbook.", "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"],
  ["Private Pilot ACS", "The checkride standard. Treat it like your final exam rubric.", "https://www.faa.gov/training_testing/testing/acs"],
  ["AIM", "Official basic flight information and ATC procedure reference.", "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/"],
  ["FAA VFR Charts", "Free sectional and terminal area chart downloads.", "https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/vfr/"],
  ["FAASTeam", "Free FAA safety courses and webinars.", "https://www.faasafety.gov/"],
  ["SkyVector", "Free online chart and route planning practice.", "https://skyvector.com/"],
  ["Quizlet Search", "Use for extra flashcards, but verify against FAA sources.", "https://quizlet.com/search?query=private%20pilot%20ground%20school&type=sets"],
  ["Cyndy Hollman Videos", "Beginner-friendly free ground school videos.", "https://www.youtube.com/results?search_query=Cyndy+Hollman+private+pilot+ground+school"],
  ["FlightInsight Videos", "Helpful visual explanations of PPL topics.", "https://www.youtube.com/results?search_query=FlightInsight+private+pilot"]
];

const sourceDocs = [
  {
    id: "afh",
    title: "Airplane Flying Handbook",
    shortTitle: "AFH",
    file: "docs/chapters/afh-basic-flight-and-energy-management.pdf",
    description: "FAA flight maneuvers, traffic patterns, takeoffs, landings, emergency procedures, and airplane handling."
  },
  {
    id: "phak",
    title: "Pilot's Handbook of Aeronautical Knowledge",
    shortTitle: "PHAK",
    file: "docs/chapters/phak-chapter-01-introduction-to-flying.pdf",
    description: "Main FAA ground school textbook: aerodynamics, systems, weather, airspace, navigation, performance, and regulations."
  },
  {
    id: "weather",
    title: "Aviation Weather Handbook",
    shortTitle: "Weather",
    file: "docs/chapters/weather-theory.pdf",
    description: "FAA aviation weather theory, weather services, hazards, and weather decision-making."
  },
  {
    id: "weight",
    title: "Aircraft Weight and Balance Handbook",
    shortTitle: "W&B",
    file: "docs/chapters/wsc-loading-and-cg-excerpt.pdf",
    description: "FAA source for weight, arm, moment, center of gravity, loading, and weight-and-balance calculations."
  },
  {
    id: "instrument",
    title: "Instrument Flying Handbook",
    shortTitle: "IFH",
    file: "docs/chapters/ifh-attitude-and-instrument-concepts.pdf",
    description: "Instrument, attitude flying, navigation systems, and cockpit instrument concepts useful even before instrument training."
  },
  {
    id: "phak-backup",
    title: "Pilot's Handbook of Aeronautical Knowledge Backup Copy",
    shortTitle: "PHAK Copy",
    file: "docs/chapters/phak-chapter-02-aeronautical-decision-making.pdf",
    description: "Backup copy of the same PHAK file you provided."
  }
];

const lessonSourcePlan = {
  orientation: [
    ["phak", "PHAK Chapter 1: Introduction to Flying", 16, "docs/chapters/phak-chapter-01-introduction-to-flying.pdf"],
    ["phak", "PHAK Chapter 2: Aeronautical Decision-Making", 40, "docs/chapters/phak-chapter-02-aeronautical-decision-making.pdf"]
  ],
  aerodynamics: [
    ["phak", "PHAK Chapter 4: Principles of Flight", 88, "docs/chapters/phak-chapter-04-principles-of-flight.pdf"],
    ["phak", "PHAK Chapter 5: Aerodynamics of Flight", 98, "docs/chapters/phak-chapter-05-aerodynamics-of-flight.pdf"],
    ["afh", "AFH basic flight and energy management sections", 62, "docs/chapters/afh-basic-flight-and-energy-management.pdf"]
  ],
  systems: [
    ["phak", "PHAK Chapter 7: Aircraft Systems", 161, "docs/chapters/phak-chapter-07-aircraft-systems.pdf"],
    ["phak", "PHAK Chapter 8: Flight Instruments", 203, "docs/chapters/phak-chapter-08-flight-instruments.pdf"],
    ["instrument", "IFH attitude and instrument concepts", 134, "docs/chapters/ifh-attitude-and-instrument-concepts.pdf"]
  ],
  maneuvers: [
    ["afh", "AFH Chapter 2: Ground Operations", 38, "docs/chapters/afh-chapter-02-ground-operations.pdf"],
    ["afh", "AFH Chapter 3: Basic Flight Maneuvers", 62, "docs/chapters/afh-chapter-03-basic-flight-maneuvers.pdf"],
    ["afh", "AFH traffic patterns, takeoffs, landings, and emergencies", 133, "docs/chapters/afh-traffic-takeoffs-landings-emergencies.pdf"]
  ],
  weather: [
    ["weather", "Aviation Weather Handbook: weather theory", 61, "docs/chapters/weather-theory.pdf"],
    ["weather", "Aviation Weather Handbook: weather services and hazards", 24, "docs/chapters/weather-services-and-hazards.pdf"],
    ["phak", "PHAK weather theory and aviation weather services", 285, "docs/chapters/phak-weather-theory-and-services.pdf"]
  ],
  airspace: [
    ["phak", "PHAK Chapter 14: Airport Operations", 335, "docs/chapters/phak-chapter-14-airport-operations.pdf"],
    ["phak", "PHAK Chapter 15: Airspace", 376, "docs/chapters/phak-chapter-15-airspace.pdf"],
    ["afh", "AFH airport traffic pattern sections", 165, "docs/chapters/afh-traffic-takeoffs-landings-emergencies.pdf"]
  ],
  navigation: [
    ["phak", "PHAK Chapter 16: Navigation", 388, "docs/chapters/phak-chapter-16-navigation.pdf"],
    ["instrument", "IFH navigation systems overview", 244, "docs/chapters/ifh-navigation-systems-overview.pdf"],
    ["afh", "AFH cross-country and pilotage practice sections", 210, "docs/chapters/afh-cross-country-and-pilotage.pdf"]
  ],
  performance: [
    ["phak", "PHAK Chapter 10: Weight and Balance", 245, "docs/chapters/phak-chapter-10-weight-and-balance.pdf"],
    ["phak", "PHAK Chapter 11: Aircraft Performance", 257, "docs/chapters/phak-chapter-11-aircraft-performance.pdf"],
    ["weight", "Provided weight handbook: loading and CG excerpt", 89, "docs/chapters/wsc-loading-and-cg-excerpt.pdf"]
  ],
  regulations: [
    ["phak", "PHAK regulations, documents, and operating rules review", 16, "docs/chapters/phak-regulations-and-documents-review.pdf"],
    ["weight", "Provided weight handbook: records and loading examples", 89, "docs/chapters/wsc-records-and-loading-excerpt.pdf"]
  ],
  checkride: [
    ["phak", "PHAK ADM and risk management review", 40, "docs/chapters/phak-chapter-02-aeronautical-decision-making.pdf"],
    ["afh", "AFH emergency procedures and review maneuvers", 250, "docs/chapters/afh-emergencies-and-review-maneuvers.pdf"],
    ["weather", "Aviation Weather Handbook hazard review", 190, "docs/chapters/weather-hazard-review.pdf"]
  ]
};

const lessonReadings = {
  orientation: {
    brief: "This week is about learning the map before walking the trail. You are not trying to master flying yet; you are learning the certificate path, the documents, and the words pilots use.",
    sections: [
      ["What you are building", "A private pilot certificate lets you act as pilot in command for personal flying, subject to ratings, currency, aircraft limits, weather, and regulations. It is not a commercial certificate."],
      ["The basic path", "You train with a CFI, learn ground knowledge, pass the FAA knowledge test, meet flight experience requirements, and pass a practical test with an examiner."],
      ["Documents to know", "The PHAK explains knowledge, the Airplane Flying Handbook explains maneuvers, the AIM explains operating procedures, the ACS tells you exactly how the checkride is evaluated, and the POH/AFM is specific to the aircraft."]
    ],
    drill: "Explain the difference between a student pilot certificate and a private pilot certificate."
  },
  aerodynamics: {
    brief: "This week turns the airplane from a mysterious machine into a set of understandable forces and controls.",
    sections: [
      ["Four forces", "Lift acts upward, weight acts downward, thrust pulls or pushes forward, and drag resists motion through the air. Pilots manage these forces with pitch, power, configuration, and airspeed."],
      ["Angle of attack", "Angle of attack is the angle between the wing chord line and the relative wind. Stalls happen when the critical angle of attack is exceeded, not at one fixed airspeed."],
      ["Control axes", "Ailerons control roll, the elevator controls pitch, and the rudder controls yaw. Coordinated flight means using these controls together so the airplane is not skidding or slipping unintentionally."]
    ],
    drill: "Teach the four forces and then explain why an airplane can stall at different speeds."
  },
  systems: {
    brief: "This week is about knowing what the airplane is telling you and where to find aircraft-specific truth.",
    sections: [
      ["Aircraft systems", "Typical trainers include engine, fuel, electrical, pitot-static, flight control, landing gear, and braking systems. You do not need to be a mechanic, but you do need to recognize normal and abnormal indications."],
      ["Flight instruments", "The pitot-static instruments are the airspeed indicator, altimeter, and vertical speed indicator. Gyroscopic or electronic attitude instruments help show attitude, heading, and turn information."],
      ["POH habits", "The POH/AFM gives limitations, normal procedures, emergency procedures, performance data, weight and balance information, and systems descriptions for the exact aircraft model."]
    ],
    drill: "Point at each primary instrument and say what system feeds it and what failure could affect it."
  },
  maneuvers: {
    brief: "This week connects study to the actual airplane: taxi, takeoff, climb, pattern, landing, and basic maneuvers.",
    sections: [
      ["Ground discipline", "Good flying starts before takeoff. Taxi slowly, use checklists, verify controls, brief emergencies, and treat runway entry as a serious decision point."],
      ["Pattern thinking", "The traffic pattern organizes airplanes around an airport. Know upwind, crosswind, downwind, base, final, and when to go around."],
      ["Maneuver purpose", "Slow flight, stalls, steep turns, and ground reference maneuvers are not just checkride boxes. They teach energy control, coordination, wind correction, and awareness."]
    ],
    drill: "Talk through a normal takeoff, traffic pattern, landing, and go-around from memory."
  },
  weather: {
    brief: "Weather is where private pilot judgment really starts. You are learning how atmosphere turns into go/no-go decisions.",
    sections: [
      ["Weather theory", "Pressure, temperature, moisture, and stability shape clouds, visibility, turbulence, thunderstorms, icing risk, and winds."],
      ["Weather products", "METARs report observed conditions. TAFs forecast terminal weather. AIRMETs and SIGMETs warn about broader hazards. Radar, prog charts, and surface analysis help you see the bigger picture."],
      ["Pilot decision", "The point is not to memorize every abbreviation in isolation. The point is to decide whether today's weather fits your skill, aircraft, route, terrain, daylight, and alternates."]
    ],
    drill: "Read a METAR and TAF, then say whether you would fly a local solo lesson and why."
  },
  airspace: {
    brief: "This week is about operating politely and legally with other airplanes, airports, and ATC.",
    sections: [
      ["Airport environment", "Runway numbers, signs, markings, lighting, wind indicators, traffic patterns, and hold short lines help keep aircraft separated on and near the airport."],
      ["Airspace structure", "Class B, C, D, E, and G each have different entry, communication, equipment, and weather minimum requirements. Special use airspace adds another layer of planning."],
      ["Radio basics", "Good radio work is clear, brief, and predictable. Say who you are calling, who you are, where you are, and what you want or intend to do."]
    ],
    drill: "Pick an airport on a sectional and explain its airspace, radio, pattern, and VFR weather minimums."
  },
  navigation: {
    brief: "This week teaches you how to get somewhere on purpose without blindly following a magenta line.",
    sections: [
      ["Chart reading", "Sectionals show airports, airspace, obstacles, terrain, frequencies, navaids, and visual checkpoints. Learn to read the chart as a safety picture, not just a map."],
      ["Course and heading", "A course is the path over the ground. A heading is where the nose points. Wind correction is what connects them."],
      ["Cross-country planning", "A good plan includes route, checkpoints, altitude, weather, airspace, fuel, performance, alternates, and lost/diversion procedures."]
    ],
    drill: "Plan a short route and compute course, heading, groundspeed, ETA, and fuel burn."
  },
  performance: {
    brief: "This week answers the most pilot-like question: can this airplane safely do this flight today?",
    sections: [
      ["Weight and balance", "Weight affects performance; center of gravity affects stability and control. You calculate weight, arm, moment, and CG to stay inside limits."],
      ["Performance charts", "Takeoff distance, landing distance, climb rate, density altitude, runway surface, slope, wind, and temperature all change the margins."],
      ["Risk management", "Tools like IMSAFE, PAVE, 5P, and DECIDE help you catch pressure, fatigue, weather, aircraft limitations, and plan problems before they become emergencies."]
    ],
    drill: "Run a weight and balance and takeoff-distance problem for a hot day with two people and fuel."
  },
  regulations: {
    brief: "This week turns rules into practical flying habits.",
    sections: [
      ["Part 61 and Part 91", "Part 61 covers certification and training requirements. Part 91 covers general operating and flight rules."],
      ["Documents and inspections", "Know required pilot documents, aircraft documents, inspections, equipment, and maintenance responsibilities before a flight."],
      ["Privileges and limits", "Private pilots can carry passengers, but cannot be paid as pilots except for limited exceptions. Currency is legal permission; proficiency is actual readiness."]
    ],
    drill: "Brief a passenger flight and explain why you are legal, current, and personally proficient."
  },
  checkride: {
    brief: "This week is about organizing everything into calm, practical explanations.",
    sections: [
      ["ACS mindset", "The checkride is not just trivia. Each task combines knowledge, risk management, and skill. The examiner wants to see safe pilot judgment."],
      ["Aircraft-specific answers", "Use the POH/AFM for limitations, systems, procedures, performance, and weight and balance. Generic answers are not enough when the aircraft has a specific answer."],
      ["Scenario practice", "Practice explaining a full flight from weather briefing to shutdown, including airspace, performance, fuel, alternates, emergencies, and passenger briefing."]
    ],
    drill: "Give a mock oral answer for a cross-country flight and include a go/no-go decision."
  }
};

const lessonNotes = {
  orientation: {
    keyTerms: ["CFI: Certificated Flight Instructor", "DPE: Designated Pilot Examiner", "ACS: Airman Certification Standards", "PHAK: Pilot's Handbook of Aeronautical Knowledge", "POH/AFM: aircraft-specific operating handbook/manual"],
    readMore: [
      "Start by separating the training process from the certificate. Training is the learning path with your instructor. The certificate is the FAA authorization you earn after meeting requirements and passing the practical test.",
      "Before solo, you need the correct endorsements, a student pilot certificate, and usually a medical certificate. Before the checkride, you need the knowledge test result, required aeronautical experience, instructor endorsements, and practical-test readiness.",
      "The ACS is your checklist for readiness. If a topic is in the ACS, assume you may need to explain it, apply it to a scenario, and connect it to risk management."
    ]
  },
  aerodynamics: {
    keyTerms: ["Lift", "Weight", "Thrust", "Drag", "Angle of attack", "Critical angle of attack", "Coordinated flight", "Load factor"],
    readMore: [
      "Think of pitch as your main way to manage angle of attack and airspeed, while power manages energy available for climb, cruise, or descent. The exact relationship changes with phase of flight, but that mental model helps early.",
      "A stall is not caused by being too slow by itself. It happens when the wing exceeds its critical angle of attack. Low speed often leads there, but steep turns, abrupt pitch changes, and high load factor can also raise stall speed.",
      "Rudder matters because airplanes experience adverse yaw and require coordination. A centered ball is not decoration; it tells you whether the airplane is coordinated."
    ]
  },
  systems: {
    keyTerms: ["Pitot-static system", "Vacuum system", "Electrical system", "Fuel selector", "Circuit breaker", "V-speeds", "Limitations"],
    readMore: [
      "For each instrument, ask two questions: what does it display, and what system feeds it? That makes failures easier to understand instead of memorizing them as isolated facts.",
      "The POH/AFM is the source for your aircraft's limitations, normal procedures, emergency procedures, performance charts, weight and balance data, and systems descriptions.",
      "Learn your trainer's V-speeds early, but do not memorize generic numbers from the internet. Use the actual POH and your instructor's procedures."
    ]
  },
  maneuvers: {
    keyTerms: ["Runup", "Rotation", "Vy", "Vx", "Downwind", "Base", "Final", "Go-around", "Stabilized approach"],
    readMore: [
      "A checklist is not just a memory aid. It is a trap-catcher. Use flows to touch the cockpit items, then use the checklist to verify that nothing important was missed.",
      "Traffic pattern work teaches energy management. Downwind, base, and final are where you learn to manage pitch, power, configuration, wind correction, and runway alignment together.",
      "A go-around is a normal maneuver. If alignment, airspeed, descent rate, spacing, or runway condition feels wrong, the disciplined move is to go around early."
    ]
  },
  weather: {
    keyTerms: ["METAR", "TAF", "AIRMET", "SIGMET", "Ceiling", "Visibility", "Dew point spread", "Density altitude", "Wind shear"],
    readMore: [
      "Weather study should always end in a decision. Do not just decode a METAR; say what it means for takeoff, landing, visibility, turbulence, alternates, and personal minimums.",
      "Small temperature/dew point spreads can suggest fog or low cloud risk. High winds, gusts, convective activity, and lowering ceilings are all reasons to slow down and reassess.",
      "Density altitude is performance weather. Hot, high, and humid conditions can make a normally comfortable runway or climb look very different."
    ]
  },
  airspace: {
    keyTerms: ["Class B", "Class C", "Class D", "Class E", "Class G", "CTAF", "ATIS", "Special use airspace", "VFR weather minimums"],
    readMore: [
      "Airspace is a permission and communication system. For every airspace you enter, know whether you need clearance, two-way communication, equipment, or specific cloud clearance and visibility.",
      "At towered airports, use ATIS/AWOS first, then call with who you are, where you are, and what you want. At non-towered airports, use CTAF to announce position and intentions while still looking outside.",
      "Runway signs and markings are part of collision avoidance. Hold short markings are especially important because crossing them without clearance at a towered field is a serious runway incursion risk."
    ]
  },
  navigation: {
    keyTerms: ["Pilotage", "Dead reckoning", "True course", "Magnetic course", "Heading", "Groundspeed", "ETA", "Diversion"],
    readMore: [
      "Navigation starts with knowing where you are. Use sectional checkpoints that are visible from the air: lakes, highways, towers, towns, rivers, and airports.",
      "Wind correction is the difference between where the nose points and where the airplane tracks over the ground. That is why heading and course are not always the same.",
      "Every cross-country plan should include a lost plan and a diversion plan. A good pilot is not surprised by needing a Plan B."
    ]
  },
  performance: {
    keyTerms: ["Arm", "Moment", "CG", "Useful load", "Density altitude", "Takeoff roll", "Landing distance", "PAVE", "IMSAFE"],
    readMore: [
      "Weight and balance is not paperwork for paperwork's sake. Weight changes takeoff, climb, and landing performance; CG changes stability and control feel.",
      "Performance charts assume specific conditions and pilot technique. If the runway is short, soft, wet, hot, obstructed, or unfamiliar, add margin and ask your instructor how your school handles minimum runway planning.",
      "Risk management tools are meant to catch human pressure. External pressure is often the hidden reason pilots continue into weather, fatigue, fuel concerns, or performance margins they would otherwise reject."
    ]
  },
  regulations: {
    keyTerms: ["Part 61", "Part 91", "Currency", "Proficiency", "ARROW", "ATOMATOFLAMES", "Flight review", "Medical certificate"],
    readMore: [
      "Part 61 tells you how pilots are certified and trained. Part 91 tells you many of the operating rules you use on normal flights.",
      "Documents and inspections are a go/no-go item. You should know what you must carry as a pilot, what must be in the aircraft, and which inspections make the airplane legal to fly.",
      "Currency is the legal minimum. Proficiency is whether you are actually sharp enough for today's passengers, weather, airspace, and aircraft."
    ]
  },
  checkride: {
    keyTerms: ["Scenario-based testing", "Risk management", "Special emphasis areas", "Personal minimums", "Mock oral", "SRM"],
    readMore: [
      "Checkride prep should sound like real flying. Instead of only saying a definition, add what you would do with that information in a flight decision.",
      "For aircraft systems and performance, answer from the POH/AFM. Examiners can tell when a student only knows generic trainer facts.",
      "A strong mock oral includes weather, route, airspace, performance, weight and balance, fuel, alternates, passenger briefing, emergencies, and a clear go/no-go decision."
    ]
  }
};

function videoSourcesFor(module) {
  const providers = ["YouTube", "Cyndy Hollman", "Free Pilot Training", "FlightInsight"];
  return module.watch.map((query, index) => ({
    title: query,
    provider: providers[index % providers.length],
    href: `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`
  }));
}

function youtubeEmbedFromUrl(value) {
  const trimmed = value.trim();
  if (!trimmed) return "";

  const patterns = [
    /(?:youtube\.com\/watch\?v=)([A-Za-z0-9_-]{11})/,
    /(?:youtu\.be\/)([A-Za-z0-9_-]{11})/,
    /(?:youtube\.com\/embed\/)([A-Za-z0-9_-]{11})/,
    /(?:youtube\.com\/shorts\/)([A-Za-z0-9_-]{11})/
  ];

  for (const pattern of patterns) {
    const match = trimmed.match(pattern);
    if (match) return youtubeEmbedUrl(match[1]);
  }

  if (/^[A-Za-z0-9_-]{11}$/.test(trimmed)) {
    return youtubeEmbedUrl(trimmed);
  }

  return "";
}

const COURSE_PLAYLIST_ID = "PLKGcDgymP_oYkMrMNcc04gr6JMru4E2xH";

function youtubeEmbedUrl(videoId, playlistId = "") {
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1"
  });
  if (playlistId) params.set("list", playlistId);
  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}

function youtubeIframeAttrs() {
  return 'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen';
}

const courseVideos = [
  ["-FmHg04rleg", "YouTube's ONLY Complete Private Pilot Ground Course (Lesson 1)"],
  ["hIv-BLf6PoE", "How an Airplane Creates Lift (Lesson 2)"],
  ["jAFgYWqvfuA", "What Causes an Airplane to Stall? (Lesson 3)"],
  ["aOxFKDOn5dY", "How to Avoid a Spin (Lesson 4)"],
  ["2t6tT77QFW4", "How to Control an Airplane (Lesson 5)"],
  ["dEJqNcEI8tI", "Aircraft Stability Explained (Lesson 6)"],
  ["7S8yxrlulSA", "Aircraft Controllability Explained (Lesson 7)"],
  ["xz8x9e6t1SA", "Why Airplanes Have Flaps (Lesson 8)"],
  ["F-umUhlp4n4", "How to Turn an Airplane (Lesson 9)"],
  ["UoqHq9YC6Rk", "Load Factor Basics (Lesson 10)"],
  ["TX5eFcLlE1o", "How to Calculate Load Factor (Lesson 11)"],
  ["dsnKmXeSPqk", "V-Speeds Explained (Lesson 12)"],
  ["-34-Igi5UMc", "Left Turning Tendencies Explained (Lesson 13)"],
  ["YVsyBO133sA", "Ground Effect and Wake Turbulence (Lesson 14)"],
  ["gS9RgkRIPZ4", "Types of Airspace (Lesson 15)"],
  ["M-2VWNQ2Ukk", "Class B Airspace (Lesson 16)"],
  ["wYH4gQ-pOmE", "Class C Airspace (Lesson 17)"],
  ["PEeUvw1i9hs", "Class D Airspace (Lesson 18)"],
  ["0Liq4ZB5m6U", "Class E Airspace (Lesson 19)"],
  ["doKwv3ylx8E", "Class G Airspace (Lesson 20)"],
  ["MOqtfy45qKQ", "Restricted Areas and Special Use Airspace (Lesson 21)"],
  ["a7KYDQOAeFk", "Other Airspace Private Pilots Must Know (Lesson 22)"],
  ["AaI_DjRwnhk", "Zulu Time (Lesson 23)"],
  ["TMkqcorBcdU", "Latitude and Longitude (Lesson 24)"],
  ["5KpJzNHLe-M", "VFR Sectional Airports (Lesson 25)"],
  ["Kohx5s6BCRQ", "Using a VFR Sectional to Pick Safe Altitudes (Lesson 26)"],
  ["JySkSwAnwos", "VFR Navigational Symbols (Lesson 27)"],
  ["ZBU55yIje-Y", "Heading Indicator (Lesson 28)"],
  ["_SvHsQZdMZ8", "Attitude Indicator (Lesson 29)"],
  ["QkfC43VTZaE", "Turn Coordinator vs Turn and Slip Indicator (Lesson 30)"],
  ["q27N5EFWmpM", "Pitot-Static System (Lesson 31)"],
  ["WC-iOlckdf4", "Altimeter (Lesson 32)"],
  ["oWxeAqcNSJU", "More Instrument Knowledge (Lesson 33)"],
  ["ndHyt1fbBcM", "Digital Instruments (Lesson 34)"],
  ["-_xBS6vTO9E", "Do Not Be Afraid of ATC (Lesson 35)"],
  ["0JRVTlLJ7hk", "Non-Towered Radio Calls"],
  ["6S95qXQNTzM", "ATIS and How to Use It (Lesson 36)"],
  ["yh73ip84M4I", "VORs Explained (Lesson 37)"],
  ["A4eIGJrntXg", "GPS Navigation (Lesson 38)"],
  ["DCJ7HbF1zWQ", "Weather Basics (Lesson 39)"],
  ["aMsLBdnxiWg", "Breaking the Weather Code (Lesson 40)"],
  ["BHIPomiLvYg", "Winds Aloft and Cross-Country Weather Charts (Lesson 41)"],
  ["D2gBdygxgW0", "Weather Sources to Check Before Flying (Lesson 42)"],
  ["pvBNaSMaFd8", "Prog Charts Explained (Lesson 43)"],
  ["FoGmomeNVb8", "Flight Service Stations (Lesson 44)"],
  ["Ydvev6B7IaY", "Six Weather Hazards and Tips to Avoid Them (Lesson 45)"],
  ["L8ORGN6zZog", "Cross-Country Navigation Log (Lesson 46)"],
  ["QXz9sMUdbZ0", "E6B Flight Computer Guide (Lesson 47)"],
  ["2tIYJyRldzM", "Flying Without an E6B Flight Computer (Lesson 48)"],
  ["ix_BShDvvts", "Flying a Cross Country with a Nav Log (Lesson 49)"],
  ["RMitIgzeSgo", "Weight and Balance (Lesson 50)"],
  ["AKFVSq94_Cg", "Aircraft Performance (Lesson 51)"],
  ["pzAqxNSqv8w", "Required Documents to Fly Legally (Lesson 52)"],
  ["n0KrBfRJD0A", "BasicMed Explained"],
  ["uowNUuqzVyY", "Private Pilot Privileges (Lesson 54)"],
  ["v1ARrbrbkaI", "Regulations That Prevent Mid-Air Collisions (Lesson 55)"],
  ["EfJspfZfjKM", "Seatbelts and Safety Regulations (Lesson 56)"],
  ["LC9-PgdDFmo", "Maintenance Basics (Lesson 57)"],
  ["1J5g3G7A4N8", "NOTAMs and Chart Supplement (Lesson 58)"],
  ["sxeBngtzvz0", "Physiology and Risk Management (Lesson 59)"],
  ["Yacx4jNQlgo", "How to Operate an Airplane Basics (Lesson 60)"],
  ["OvR3VQKEIr0", "Airport Signs, Markings, and Lighting (Lesson 61)"],
  ["tPiBZMRxU3o", "Airport Traffic Patterns (Lesson 62)"]
].map(([id, title], index) => ({ id, title, number: index + 1 }));

const lessonVideoPlan = {
  orientation: ["-FmHg04rleg", "pzAqxNSqv8w", "uowNUuqzVyY"],
  aerodynamics: ["hIv-BLf6PoE", "jAFgYWqvfuA", "aOxFKDOn5dY", "2t6tT77QFW4", "dEJqNcEI8tI", "7S8yxrlulSA", "xz8x9e6t1SA", "F-umUhlp4n4", "UoqHq9YC6Rk"],
  systems: ["dsnKmXeSPqk", "ZBU55yIje-Y", "_SvHsQZdMZ8", "QkfC43VTZaE", "q27N5EFWmpM", "WC-iOlckdf4", "oWxeAqcNSJU", "ndHyt1fbBcM", "-_xBS6vTO9E"],
  maneuvers: ["Yacx4jNQlgo", "OvR3VQKEIr0", "tPiBZMRxU3o", "YVsyBO133sA"],
  weather: ["DCJ7HbF1zWQ", "aMsLBdnxiWg", "BHIPomiLvYg", "D2gBdygxgW0", "pvBNaSMaFd8", "FoGmomeNVb8", "Ydvev6B7IaY"],
  airspace: ["gS9RgkRIPZ4", "M-2VWNQ2Ukk", "wYH4gQ-pOmE", "PEeUvw1i9hs", "0Liq4ZB5m6U", "doKwv3ylx8E", "MOqtfy45qKQ", "a7KYDQOAeFk", "-_xBS6vTO9E", "0JRVTlLJ7hk", "6S95qXQNTzM", "OvR3VQKEIr0"],
  navigation: ["AaI_DjRwnhk", "TMkqcorBcdU", "5KpJzNHLe-M", "Kohx5s6BCRQ", "JySkSwAnwos", "yh73ip84M4I", "A4eIGJrntXg", "L8ORGN6zZog", "QXz9sMUdbZ0", "2tIYJyRldzM", "ix_BShDvvts"],
  performance: ["RMitIgzeSgo", "AKFVSq94_Cg", "TX5eFcLlE1o", "sxeBngtzvz0"],
  regulations: ["pzAqxNSqv8w", "n0KrBfRJD0A", "uowNUuqzVyY", "v1ARrbrbkaI", "EfJspfZfjKM", "LC9-PgdDFmo", "1J5g3G7A4N8"],
  checkride: ["sxeBngtzvz0", "pzAqxNSqv8w", "D2gBdygxgW0", "Ydvev6B7IaY"]
};

const topicQuestionSets = [
  {
    match: /lift|stall|spin|stability|controllability|flaps|turn|load factor|left turning|ground effect|wake/i,
    questions: [
      ["What does angle of attack compare?", ["Wing chord line and relative wind", "Runway and taxiway", "Heading and compass card", "Fuel burn and time"], 0, "Angle of attack is measured between the chord line and relative wind."],
      ["A stall happens when the wing exceeds its critical:", ["RPM", "Angle of attack", "Fuel pressure", "Groundspeed only"], 1, "The critical angle of attack is the direct stall trigger."],
      ["Flaps usually increase:", ["Lift and drag", "Fuel capacity", "Magnetic variation", "Runway length"], 0, "Flaps change wing shape and usually add lift and drag."],
      ["Load factor increases most clearly during:", ["A level coordinated turn", "Straight taxi", "Engine shutdown", "Refueling"], 0, "Turns increase the load the wings must support."],
      ["Wake turbulence is created by:", ["Wingtip vortices from lift generation", "Radio transmissions", "Static ports", "Brake dust"], 0, "Lift creates wingtip vortices, especially behind heavy aircraft."],
      ["Ground effect generally reduces:", ["Induced drag near the surface", "Fuel octane", "Compass deviation", "Radio range"], 0, "Near the ground, induced drag is reduced and the airplane may float."],
      ["Left-turning tendencies are strongest with:", ["High power and low airspeed", "Low power and high airspeed only", "Engine off", "Parking brake set"], 0, "Torque, P-factor, slipstream, and gyroscopic effects matter most at high power/low speed."],
      ["Spin awareness begins with avoiding:", ["Uncoordinated stalls", "Leaning the mixture", "Opening a flight plan", "Reading ATIS"], 0, "Spins require a stalled wing and yaw/rotation."]
    ]
  },
  {
    match: /airspace|class b|class c|class d|class e|class g|restricted|sua|other airspace/i,
    questions: [
      ["Class B entry normally requires:", ["An explicit ATC clearance", "Only a CTAF call", "No radio", "A mechanic endorsement"], 0, "Class B requires a clearance to enter."],
      ["Class D entry normally requires:", ["Two-way radio communication", "A transoceanic clearance", "A commercial certificate", "No visibility minimum"], 0, "Class D generally requires two-way radio communication before entry."],
      ["Class G airspace is:", ["Uncontrolled airspace", "Always above 18,000 feet", "Only around major airline hubs", "A type of special use airspace"], 0, "Class G is uncontrolled airspace."],
      ["Special use airspace is checked because:", ["Activity may create restrictions or hazards", "It replaces weather briefings", "It guarantees smooth air", "It removes cloud clearance"], 0, "Special use airspace may be active, restricted, prohibited, or hazardous."],
      ["VFR weather minimums matter because they preserve:", ["Visibility and cloud clearance", "Fuel discounts", "Runway paint", "Seatbelt comfort"], 0, "Weather minimums help maintain see-and-avoid margins."],
      ["A sectional chart helps identify:", ["Airspace boundaries and required frequencies", "Only aircraft maintenance records", "Only restaurant locations", "Only aircraft paint colors"], 0, "Sectionals show airspace, airports, frequencies, and hazards."]
    ]
  },
  {
    match: /zulu|latitude|longitude|sectional|symbols|altitudes|heading indicator|attitude indicator|turn coordinator|pitot|altimeter|digital instruments|vor|gps|navigation|nav log|e6b|cross country/i,
    questions: [
      ["Zulu time is aviation's reference to:", ["UTC time", "Local noon", "Aircraft tach time", "Runway heading"], 0, "Zulu time is UTC and avoids local time-zone confusion."],
      ["Latitude measures position:", ["North or south of the equator", "East or west of Greenwich", "Above field elevation", "Along a runway centerline"], 0, "Latitude is north/south."],
      ["Longitude measures position:", ["East or west of the prime meridian", "North or south of the equator", "Above sea level only", "By airspeed"], 0, "Longitude is east/west."],
      ["A heading is:", ["Where the nose points", "The path over the ground", "Fuel remaining", "Cloud height"], 0, "Heading is aircraft direction; course is desired path."],
      ["The pitot-static system feeds the:", ["Airspeed indicator, altimeter, and VSI", "Tachometer only", "Compass only", "Fuel gauges only"], 0, "Pitot-static instruments use pitot and static pressure."],
      ["A VOR is used for:", ["Radio navigation", "Measuring oil pressure", "Predicting fog", "Setting seat belts"], 0, "VORs provide course/bearing navigation information."],
      ["An E6B is commonly used to compute:", ["Wind correction, groundspeed, fuel, and time", "Radio volume", "Seat position", "Runway paint"], 0, "The E6B is a flight-planning computer."],
      ["A nav log should help track:", ["Checkpoints, headings, times, fuel, and groundspeed", "Only passenger names", "Only aircraft color", "Only headset brand"], 0, "Nav logs organize cross-country planning and in-flight progress."]
    ]
  },
  {
    match: /weather|winds aloft|prog|flight service|hazards/i,
    questions: [
      ["A METAR is:", ["An aviation routine weather report", "A maintenance form", "A runway diagram", "A pilot certificate"], 0, "METARs report observed weather."],
      ["A TAF is:", ["An airport forecast", "A fuel receipt", "A compass correction card", "A weight and balance form"], 0, "TAFs forecast terminal weather."],
      ["Winds aloft forecasts help estimate:", ["Heading, groundspeed, time, and fuel", "Seat belt color", "Aircraft registration", "Runway numbers"], 0, "Winds affect drift, groundspeed, ETA, and fuel."],
      ["Prog charts show:", ["Forecast weather patterns", "Aircraft ownership", "Taxiway closures only", "Engine RPM"], 0, "Prog charts forecast broad weather features."],
      ["Thunderstorms can contain:", ["Turbulence, lightning, hail, heavy rain, and wind shear", "Only smooth air", "Only better visibility", "Only tailwinds"], 0, "Thunderstorms combine several severe hazards."],
      ["Flight Service can help with:", ["Weather briefings and flight plans", "Aircraft painting", "Seat repairs", "Runway mowing"], 0, "Flight Service supports briefings and flight plans."],
      ["Personal minimums should be:", ["At least as conservative as needed for your skill", "Lower than regulations", "Ignored when excited", "Set by passengers"], 0, "Personal minimums manage risk beyond legal minimums."]
    ]
  },
  {
    match: /weight and balance|performance|documents|basicmed|license|regulations|seatbelts|maintenance|notams|chart supplement|physiology|risk/i,
    questions: [
      ["Weight times arm equals:", ["Moment", "Density altitude", "True course", "Visibility"], 0, "Moment is weight multiplied by arm."],
      ["An aft CG can reduce:", ["Stability", "Fuel price", "Runway length", "Radio volume"], 0, "Aft CG can make the airplane less stable."],
      ["Density altitude affects:", ["Takeoff, climb, and landing performance", "Aircraft registration", "Seatbelt color", "Airport name"], 0, "High density altitude reduces performance."],
      ["ARROW is a memory aid for:", ["Aircraft documents", "Weather reports", "Radio calls", "Flight controls"], 0, "ARROW helps remember required aircraft documents."],
      ["NOTAMs are checked because they may contain:", ["Time-critical operational information", "Passenger birthdays", "Paint colors", "Fuel recipes"], 0, "NOTAMs can affect runway, navaid, airspace, or procedure availability."],
      ["IMSAFE helps evaluate:", ["Pilot fitness", "Runway length", "Compass variation", "GPS satellites only"], 0, "IMSAFE covers illness, medication, stress, alcohol, fatigue, and emotion/eating."],
      ["Maintenance records matter because they show:", ["Required inspections and airworthiness status", "Only aircraft color", "Only seat comfort", "Only radio volume"], 0, "Aircraft legality depends on required inspections and maintenance records."],
      ["Private pilot privileges are limited regarding:", ["Compensation or hire", "Reading weather", "Using checklists", "Talking to ATC"], 0, "Private pilots generally cannot act as pilot for compensation or hire."]
    ]
  },
  {
    match: /atis|atc|radio|non-towered|operate|airport signs|traffic patterns/i,
    questions: [
      ["ATIS provides:", ["Airport weather and operational information", "Passenger manifests", "Aircraft ownership", "Fuel tax forms"], 0, "ATIS gives current airport information before contacting ATC."],
      ["At non-towered airports, CTAF is used to:", ["Announce position and intentions", "Receive automatic clearances", "Avoid looking outside", "Replace pattern procedures"], 0, "CTAF supports traffic awareness but does not replace see-and-avoid."],
      ["A good radio call is:", ["Clear, brief, and predictable", "Long and clever", "Silent at all airports", "Only text-based"], 0, "Standard concise calls reduce confusion."],
      ["Hold short markings mean:", ["Stop before entering the runway area", "Park overnight", "Change fuel tanks", "Start a descent"], 0, "Hold short markings protect runway safety areas."],
      ["The standard traffic pattern usually uses:", ["Left turns unless otherwise published or assigned", "Right turns always", "No downwind leg", "Random entries"], 0, "Standard patterns are left traffic unless changed."],
      ["A stabilized pattern helps manage:", ["Airspeed, altitude, spacing, and configuration", "Only music volume", "Only fuel color", "Only paperwork"], 0, "Pattern discipline supports safe landings."]
    ]
  }
];

const genericVideoQuestions = [
  ["After watching this video, what is the best study move?", ["Explain the idea in your own words and apply it to a flight", "Memorize the title only", "Skip the FAA source", "Only watch at double speed"], 0, "Aviation knowledge matters when you can apply it to a real decision."],
  ["If the video gives aircraft-specific numbers, where should you verify them?", ["Your aircraft POH/AFM and CFI", "A random comment", "A different aircraft manual", "Memory only"], 0, "Aircraft-specific numbers belong to the POH/AFM and local procedures."],
  ["What makes a good checkride answer?", ["Knowledge plus risk management and practical application", "A one-word answer", "Only a joke", "Only a regulation number"], 0, "The ACS expects knowledge, risk management, and skill/application."],
  ["If a video explanation conflicts with an FAA source, you should:", ["Use the FAA source and ask your CFI", "Trust the video automatically", "Ignore both", "Choose the shorter answer"], 0, "FAA sources and your instructor anchor training."],
  ["A useful note after this video should include:", ["Definition, why it matters, and how you would use it", "Only the upload date", "Only the thumbnail", "Only the channel name"], 0, "Good notes connect facts to action."],
  ["The safest mindset while studying is:", ["Curious, skeptical, and safety-focused", "Rushed and overconfident", "Trying to hide confusion", "Ignoring weak topics"], 0, "Good pilots ask why and close knowledge gaps."],
  ["What should you do if you miss a question from this video?", ["Review the explanation and rewatch the relevant part", "Delete the topic from your notes", "Assume the question is useless", "Move on without review"], 0, "Missed questions point to the next useful review rep."],
  ["Which habit turns a video into usable pilot knowledge?", ["Pause and predict the answer before the instructor says it", "Let it play in the background only", "Skip the examples", "Avoid writing anything down"], 0, "Active recall beats passive watching."],
  ["What is the best way to connect this video to flight training?", ["Ask how it affects preflight, flight, or go/no-go decisions", "Treat it as unrelated trivia", "Only remember the video length", "Use it to replace dual instruction"], 0, "Every ground topic should connect to cockpit decisions."],
  ["What should you do with acronyms or memory aids from the video?", ["Understand what each part means and when to use it", "Repeat letters without meaning", "Ignore the underlying rule", "Use it for every situation automatically"], 0, "Memory aids help only when you understand their limits."],
  ["If the video covers a regulation, what should you check?", ["The current FAA regulation or FAA source", "Only old flashcards", "Only social media", "Only a different country's rule"], 0, "Regulations should be verified against current official sources."],
  ["If the video covers weather, performance, or airspace, what matters most?", ["How it changes the safety decision", "Whether the term sounds complicated", "The thumbnail style", "The upload time"], 0, "The point is how the information changes your decision."],
  ["What is a good post-video self-test prompt?", ["Can I teach this to someone else without notes?", "Can I remember the background music?", "Can I skip the FAA chapter?", "Can I avoid my weak areas?"], 0, "Teaching from memory reveals whether you really understand it."],
  ["When should you mark the video as understood?", ["When you can explain it and answer scenario questions", "Immediately after clicking play", "Only after seeing the title", "Before watching it"], 0, "Understanding means explanation plus application."],
  ["What should you do if the video uses an example airport or aircraft?", ["Translate the lesson to your airport and aircraft with your CFI", "Assume the example applies exactly everywhere", "Ignore local procedures", "Use the same numbers for all airplanes"], 0, "Examples need to be adapted to your real training context."],
  ["What is the best reason to retake this video's test?", ["To check whether the idea stuck after time passed", "To memorize the answer order", "To avoid watching the video", "To inflate a score without learning"], 0, "Retesting over time builds retention."],
  ["If two answer choices sound similar, what should you do?", ["Choose the one that matches the aviation principle and risk", "Pick the longest one automatically", "Pick randomly", "Skip the explanation"], 0, "Private pilot questions often test the concept, not just wording."],
  ["What should your notes avoid?", ["Copying long text without understanding", "Short definitions", "Aircraft-specific POH references", "Questions for your CFI"], 0, "Notes should be processed, not just copied."],
  ["What should you bring from this video to your next lesson?", ["One question and one practical application", "Only the title", "Only a complaint", "Nothing"], 0, "A good ground session should improve your next flight or briefing."]
];

function questionsForCourseVideo(video) {
  const titleQuestions = [
    [`This video is mainly about: ${video.title}. What should you be able to do after watching?`, ["Explain the concept and use it in a pilot decision", "Recite only the video number", "Ignore the topic until checkride day", "Replace your CFI"], 0, "Each playlist video should turn into an explain-and-apply skill."],
    [`When reviewing "${video.title}", what is the best next step?`, ["Make notes, then test yourself without looking", "Assume watching once is mastery", "Skip related FAA reading", "Only remember the thumbnail"], 0, "Retrieval practice is what makes the lesson stick."],
    [`For "${video.title}", what should your CFI be able to hear from you?`, ["A plain-language explanation and a practical example", "Only the YouTube URL", "Only that you watched it", "A memorized answer with no context"], 0, "Instructor-ready knowledge is clear, practical, and honest."],
    [`What is the best way to use "${video.title}" before a flight lesson?`, ["Preview the topic, then compare it with your aircraft and local procedures", "Treat it as a substitute for instruction", "Skip the checklist", "Ignore your school's syllabus"], 0, "Videos are strongest when paired with your real training environment."]
  ];
  const matched = topicQuestionSets
    .filter((set) => set.match.test(video.title))
    .flatMap((set) => set.questions);
  const fallback = matched.length ? matched : genericVideoQuestions;
  return [...titleQuestions, ...fallback, ...genericVideoQuestions].map(([question, answers, correct, explanation], index) => ({
    module: "videoCourse",
    videoId: video.id,
    question,
    answers,
    correct,
    explanation,
    questionId: `${video.id}:${index}:${question}`
  }));
}

const quizQuestions = [
  {
    module: "orientation",
    question: "When do you need a student pilot certificate?",
    answers: ["Before taking any flight lesson", "Before flying solo", "Only after passing the written test", "Only for cross-country flights"],
    correct: 1,
    explanation: "The FAA says you do not need it for lessons, but you do need it before solo."
  },
  {
    module: "orientation",
    question: "What document is the checkride built around for a private pilot airplane applicant?",
    answers: ["NOTAM archive", "Private Pilot Airman Certification Standards", "Aircraft registration", "Airport Chart Supplement only"],
    correct: 1,
    explanation: "The ACS is the FAA's knowledge, risk management, and skill standard for the practical test."
  },
  {
    module: "aerodynamics",
    question: "Which four forces act on an airplane in flight?",
    answers: ["Lift, drag, torque, roll", "Lift, weight, thrust, drag", "Pitch, roll, yaw, thrust", "Gravity, trim, rudder, lift"],
    correct: 1,
    explanation: "The four basic forces are lift, weight, thrust, and drag."
  },
  {
    module: "aerodynamics",
    question: "A stall is most directly related to exceeding the critical:",
    answers: ["RPM", "Groundspeed", "Angle of attack", "Fuel flow"],
    correct: 2,
    explanation: "An airplane can stall at many speeds if the wing exceeds its critical angle of attack."
  },
  {
    module: "systems",
    question: "Which instruments are usually powered by the pitot-static system?",
    answers: ["Airspeed indicator, altimeter, vertical speed indicator", "Attitude indicator, heading indicator, turn coordinator", "Tachometer, oil pressure, ammeter", "Compass, tachometer, attitude indicator"],
    correct: 0,
    explanation: "Pitot-static instruments include airspeed, altitude, and vertical speed indications."
  },
  {
    module: "systems",
    question: "Where should you look for aircraft-specific limitations and emergency procedures?",
    answers: ["AIM glossary", "Aircraft POH/AFM", "Any airport diagram", "YouTube comments"],
    correct: 1,
    explanation: "The POH/AFM is the aircraft-specific source for limitations, procedures, performance, and systems."
  },
  {
    module: "maneuvers",
    question: "What is the safest first response when an approach becomes unstable?",
    answers: ["Force the landing", "Go around", "Turn base early", "Reduce all power immediately"],
    correct: 1,
    explanation: "A go-around is normal, safe, and expected when the approach is not working out."
  },
  {
    module: "maneuvers",
    question: "The standard traffic pattern is usually flown with:",
    answers: ["Right turns unless published otherwise", "Left turns unless published otherwise", "Turns only after ATC clearance at every airport", "No downwind leg"],
    correct: 1,
    explanation: "Standard patterns use left turns unless right traffic is published or assigned."
  },
  {
    module: "weather",
    question: "A METAR is best described as:",
    answers: ["A forecast for the next 24 hours", "An aviation routine weather report", "A runway inspection record", "A fuel planning chart"],
    correct: 1,
    explanation: "A METAR reports observed weather conditions at or near an airport."
  },
  {
    module: "weather",
    question: "Why does density altitude matter?",
    answers: ["It changes magnetic variation", "It affects aircraft performance", "It replaces indicated altitude", "It only affects jets"],
    correct: 1,
    explanation: "High density altitude reduces engine, propeller, and wing performance."
  },
  {
    module: "airspace",
    question: "Which airspace class normally surrounds towered airports with an operating control tower but no radar service requirement like Class C?",
    answers: ["Class D", "Class G", "Class A", "Special use airspace"],
    correct: 0,
    explanation: "Class D generally surrounds towered airports that do not meet Class B or C criteria."
  },
  {
    module: "airspace",
    question: "At a non-towered airport, pilots should primarily use:",
    answers: ["CTAF/UNICOM calls and see-and-avoid", "Only text messages", "ATC clearances before every turn", "No radio calls"],
    correct: 0,
    explanation: "At non-towered fields, radio calls support awareness, but pilots still rely on see-and-avoid."
  },
  {
    module: "navigation",
    question: "True course corrected for wind gives you:",
    answers: ["Pressure altitude", "Heading", "Density altitude", "Fuel capacity"],
    correct: 1,
    explanation: "A heading accounts for wind correction so the airplane tracks the intended course."
  },
  {
    module: "navigation",
    question: "Pilotage means navigating primarily by:",
    answers: ["GPS only", "Visual references on the ground", "Listening to ATIS", "A transponder code"],
    correct: 1,
    explanation: "Pilotage uses visible landmarks and chart references."
  },
  {
    module: "performance",
    question: "In weight and balance, moment is commonly calculated as:",
    answers: ["Weight divided by fuel", "Arm plus CG", "Weight times arm", "Airspeed times altitude"],
    correct: 2,
    explanation: "Moment equals weight multiplied by arm."
  },
  {
    module: "performance",
    question: "IMSAFE is used to evaluate:",
    answers: ["Pilot fitness", "Runway markings", "Chart symbols", "Radio frequencies"],
    correct: 0,
    explanation: "IMSAFE covers illness, medication, stress, alcohol, fatigue, and emotion/eating."
  },
  {
    module: "regulations",
    question: "Which regulation part contains general operating and flight rules?",
    answers: ["14 CFR Part 91", "14 CFR Part 43 only", "14 CFR Part 25", "14 CFR Part 107 only"],
    correct: 0,
    explanation: "Part 91 covers general operating and flight rules."
  },
  {
    module: "regulations",
    question: "Currency and proficiency are:",
    answers: ["The same thing", "Different; legal currency does not guarantee skill", "Only needed for instrument pilots", "Only checked by mechanics"],
    correct: 1,
    explanation: "You can be legally current and still not personally proficient for a given flight."
  },
  {
    module: "checkride",
    question: "A strong checkride answer usually connects knowledge to:",
    answers: ["A memorized slogan only", "A real decision or risk", "An unrelated aircraft type", "A paid course"],
    correct: 1,
    explanation: "The ACS expects knowledge, risk management, and skill, not just memorized facts."
  },
  {
    module: "checkride",
    question: "The best way to prepare aircraft-specific oral answers is to study:",
    answers: ["The aircraft POH/AFM", "Only generic internet flashcards", "Airline manuals", "Old forum arguments"],
    correct: 0,
    explanation: "Aircraft limitations, procedures, systems, and performance come from the POH/AFM."
  }
];

function q(module, question, answers, correct, explanation) {
  return { module, question, answers, correct, explanation };
}

quizQuestions.push(
  q("orientation", "What is the main role of a CFI during your private pilot training?", ["Inspect the aircraft annually", "Provide flight and ground instruction", "Issue weather forecasts", "Act as the FAA examiner"], 1, "A CFI trains and endorses you; the examiner conducts the practical test."),
  q("orientation", "Which certificate or document is required before a student can solo an airplane?", ["Student pilot certificate", "Commercial pilot certificate", "Instrument rating", "Mechanic certificate"], 0, "A student pilot certificate is required before solo flight."),
  q("orientation", "What is the FAA knowledge test?", ["A maintenance inspection", "A written/computerized test of aeronautical knowledge", "A runway driving test", "A medical exam"], 1, "The knowledge test checks ground knowledge before the practical test."),
  q("orientation", "Which source is best for understanding what the checkride can cover?", ["Private Pilot ACS", "Aircraft paint scheme", "Fuel receipt", "Passenger briefing card"], 0, "The ACS is the practical test blueprint."),
  q("orientation", "Which item is aircraft-specific?", ["PHAK", "AIM", "POH/AFM", "ACS companion guide"], 2, "The POH/AFM is specific to an aircraft model and sometimes serial number."),
  q("orientation", "A private pilot certificate generally allows you to fly:", ["For personal flying within privileges and limitations", "As an airline captain", "For unrestricted compensation", "Only with an instructor aboard"], 0, "Private pilot privileges are broad for personal flying but limited for compensation."),
  q("orientation", "What should you do when an internet source conflicts with your CFI or FAA source?", ["Trust the internet source", "Use the FAA source and ask your CFI", "Ignore both", "Use the oldest source"], 1, "FAA publications and your instructor should anchor your training."),
  q("orientation", "What is a DPE?", ["Designated Pilot Examiner", "Daily Performance Estimate", "Departure Procedure Engineer", "Digital Pilot Entry"], 0, "A DPE conducts FAA practical tests when authorized."),

  q("aerodynamics", "Which control primarily changes pitch?", ["Ailerons", "Elevator", "Rudder", "Mixture"], 1, "The elevator controls pitch around the lateral axis."),
  q("aerodynamics", "Which control primarily changes roll?", ["Ailerons", "Rudder", "Throttle", "Carb heat"], 0, "Ailerons control roll around the longitudinal axis."),
  q("aerodynamics", "Which control primarily changes yaw?", ["Flaps", "Rudder", "Elevator", "Primer"], 1, "The rudder controls yaw around the vertical axis."),
  q("aerodynamics", "Increasing flap extension usually does what?", ["Reduces lift at all speeds", "Increases lift and drag", "Eliminates stall risk", "Turns the airplane automatically"], 1, "Flaps typically increase lift and drag, affecting approach and landing performance."),
  q("aerodynamics", "In a coordinated level turn, lift must:", ["Decrease to zero", "Support weight and provide horizontal turning force", "Point straight backward", "Equal only drag"], 1, "The lift vector tilts in a turn and must support both weight and turning force."),
  q("aerodynamics", "What does trim primarily relieve?", ["Pilot control pressure", "Fuel pressure", "Brake pressure", "Static pressure"], 0, "Trim reduces the force needed to hold a desired attitude."),
  q("aerodynamics", "A slip is useful because it can:", ["Increase descent rate without a large airspeed increase", "Increase fuel capacity", "Prevent all crosswind drift", "Replace flaps on every aircraft"], 0, "A forward slip can help lose altitude while managing airspeed, when appropriate."),
  q("aerodynamics", "Relative wind is opposite the aircraft's:", ["Flight path through the air", "Paint direction", "Compass card", "Fuel flow"], 0, "Angle of attack is measured between the chord line and relative wind."),

  q("systems", "If the pitot tube is blocked but the static port is open, which instrument is most directly affected?", ["Airspeed indicator", "Magnetic compass", "Tachometer", "Oil temperature"], 0, "The airspeed indicator relies on pitot pressure and static pressure."),
  q("systems", "The magnetic compass is most useful because it:", ["Needs electrical power to work", "Is independent of many aircraft systems", "Displays vertical speed", "Shows engine RPM"], 1, "The compass remains an important backup because it is simple and independent."),
  q("systems", "What does the tachometer show in many piston trainers?", ["Engine RPM", "Fuel quantity", "Cabin altitude", "Static pressure"], 0, "The tachometer displays engine revolutions per minute."),
  q("systems", "What should you use to find emergency procedures for your airplane?", ["POH/AFM", "A generic blog", "A sectional chart", "Your headset manual"], 0, "Emergency procedures are aircraft-specific and published in the POH/AFM."),
  q("systems", "An alternator failure primarily affects the:", ["Electrical system", "Pitot tube shape", "Wing chord", "Magnetic north pole"], 0, "The alternator supplies electrical power and charges the battery."),
  q("systems", "What system normally uses fuel selector positions?", ["Fuel system", "Vacuum system", "Static system", "Brake system only"], 0, "The fuel selector controls which tank or feed position supplies the engine."),
  q("systems", "What does the altimeter setting window adjust for?", ["Local barometric pressure", "Runway length", "Engine RPM", "Fuel grade"], 0, "Setting local pressure makes the altimeter indicate altitude more accurately."),
  q("systems", "Which POH section usually contains takeoff and landing distance charts?", ["Performance", "Glossary", "Index only", "Paint and interior"], 0, "Performance data belongs in the performance section."),

  q("maneuvers", "What is the purpose of a pre-takeoff briefing?", ["To memorize the weather only", "To plan normal and abnormal actions before takeoff", "To replace the checklist", "To satisfy passengers only"], 1, "Briefing before takeoff helps you act decisively if something changes."),
  q("maneuvers", "During taxi, flight controls should be positioned with attention to:", ["Wind direction", "Passenger preference", "Paint color", "Fuel receipt"], 0, "Wind can affect control surfaces during taxi."),
  q("maneuvers", "A go-around should be viewed as:", ["A failed landing", "A normal safety maneuver", "A checkride failure", "Only an airline maneuver"], 1, "Going around is a normal and safe decision."),
  q("maneuvers", "What is one purpose of slow flight training?", ["Develop control near minimum controllable airspeed", "Practice maximum cruise speed", "Avoid using rudder", "Replace stall training"], 0, "Slow flight builds coordination and control near the low-speed regime."),
  q("maneuvers", "Ground reference maneuvers teach correction for:", ["Wind drift", "Fuel grade", "Radio static", "Compass color"], 0, "They teach wind correction while maintaining a ground track."),
  q("maneuvers", "On final approach, excessive sink and unstable alignment should prompt:", ["A go-around", "A forced touchdown", "Turning off the radio", "Raising the seat"], 0, "An unstable approach should be corrected early or abandoned with a go-around."),
  q("maneuvers", "What is the base leg?", ["The leg before final", "The leg after landing", "The upwind climb only", "The runup area"], 0, "Base connects downwind to final."),
  q("maneuvers", "What does a stabilized approach include?", ["Appropriate airspeed, descent rate, configuration, and alignment", "Any speed above stall", "No checklist use", "Maximum bank angle"], 0, "Stable approaches manage energy and alignment before landing."),

  q("weather", "A TAF is primarily used for:", ["Forecast weather at/near an airport", "Aircraft weight and balance", "Runway length measurement", "Engine oil analysis"], 0, "TAFs forecast terminal aerodrome weather."),
  q("weather", "Thunderstorms are especially hazardous because they can contain:", ["Severe turbulence, lightning, hail, wind shear, and heavy rain", "Only smooth updrafts", "Better visibility", "Guaranteed tailwinds"], 0, "Thunderstorms combine many major hazards."),
  q("weather", "Fog is mainly a concern because it reduces:", ["Visibility", "Aircraft weight", "Runway number size", "Compass error"], 0, "Fog can reduce visibility below VFR or personal minimums."),
  q("weather", "AIRMETs are advisories for:", ["Weather hazards of operational interest", "Aircraft ownership", "Pilot certificate printing", "Fuel prices"], 0, "AIRMETs advise of weather that may affect aircraft operations."),
  q("weather", "Wind shear is dangerous because it can cause sudden changes in:", ["Airspeed and flight path", "Aircraft registration", "Fuel color", "Chart scale only"], 0, "Wind shear can rapidly change performance and control margins."),
  q("weather", "Stable air is often associated with:", ["Smooth air and layered clouds", "Only severe thunderstorms", "No clouds ever", "Impossible fog"], 0, "Stable air tends toward smooth conditions and stratus-type clouds."),
  q("weather", "Unstable air is more likely to produce:", ["Cumuliform clouds and turbulence", "Perfectly smooth haze layers", "No vertical motion", "Lower density altitude always"], 0, "Unstable air supports vertical development and turbulence."),
  q("weather", "Personal minimums are:", ["Self-set limits more conservative than legal minimums when appropriate", "A replacement for regulations", "Only for instrument pilots", "Assigned by passengers"], 0, "Personal minimums help match the flight to your current skill and risk tolerance."),

  q("airspace", "Before entering Class D airspace, a VFR pilot normally needs:", ["Two-way radio communication established", "An instrument rating", "A transoceanic clearance", "No communication at all"], 0, "Class D generally requires two-way radio communication before entry."),
  q("airspace", "Class A airspace generally begins at:", ["18,000 feet MSL", "1,200 feet AGL everywhere", "The surface at all airports", "3,000 feet MSL"], 0, "Class A generally starts at 18,000 feet MSL and requires IFR operations."),
  q("airspace", "Airport hold short markings tell you:", ["Where to stop before entering a runway", "Where to park overnight", "Where fuel is cheapest", "Where clouds begin"], 0, "Hold short markings protect runway areas."),
  q("airspace", "A rotating beacon at a lighted land airport helps identify:", ["Airport location at night or low visibility", "Fuel grade", "Pattern altitude", "Tower phone number"], 0, "Airport beacons help pilots identify airports."),
  q("airspace", "The CTAF is used at many non-towered airports to:", ["Announce position and intentions", "Receive automatic landing clearance", "File a flight plan only", "Turn on runway lights only"], 0, "CTAF supports traffic awareness at non-towered fields."),
  q("airspace", "Special use airspace should be checked because:", ["Activity may restrict or create hazards for flight", "It always has free fuel", "It replaces sectional charts", "It removes weather minimums"], 0, "Some special use areas may be restricted, prohibited, active, or hazardous."),
  q("airspace", "A runway number is based on:", ["Magnetic direction rounded to nearest 10 degrees", "Runway length in hundreds of feet", "Airport elevation", "Tower frequency"], 0, "Runway numbers are based on magnetic heading."),
  q("airspace", "Good radio phraseology should be:", ["Clear, brief, and predictable", "Long and clever", "Silent at all airports", "Only read from text messages"], 0, "Radio calls work best when concise and standard."),

  q("navigation", "A sectional chart helps a VFR pilot identify:", ["Airspace, airports, terrain, obstacles, and navaids", "Only fuel prices", "Only aircraft maintenance status", "Only passenger names"], 0, "Sectionals combine many VFR planning details."),
  q("navigation", "Magnetic variation is the difference between:", ["True north and magnetic north", "Airspeed and groundspeed", "Fuel used and fuel remaining", "Cloud base and ceiling"], 0, "Variation converts true direction to magnetic direction."),
  q("navigation", "Groundspeed is affected by:", ["Wind", "Paint color", "Seat position", "Radio volume"], 0, "Headwinds and tailwinds change groundspeed."),
  q("navigation", "A checkpoint should be:", ["Identifiable from the air", "Only invisible on charts", "A random cloud", "A fuel receipt"], 0, "Good checkpoints are visible and charted or obvious."),
  q("navigation", "A diversion is:", ["Changing to another route or airport when needed", "Ignoring weather", "Turning off navigation", "Only an instrument procedure"], 0, "Diversions are normal planning and risk-management tools."),
  q("navigation", "Fuel planning should include:", ["Expected burn, reserves, winds, route, and alternates", "Only tank color", "Only passenger weight", "Only runway lights"], 0, "Fuel planning must account for flight conditions and reserves."),
  q("navigation", "A VOR is used for:", ["Radio navigation", "Measuring oil pressure", "Forecasting thunderstorms", "Reading runway slope only"], 0, "VORs provide bearing/course navigation information."),
  q("navigation", "ETA means:", ["Estimated time of arrival", "Emergency taxi area", "Engine temperature alert", "External trim angle"], 0, "ETA is the expected arrival time."),

  q("performance", "Center of gravity too far aft can cause:", ["Reduced stability and difficult recovery characteristics", "More runway paint", "Better braking always", "No control effect"], 0, "Aft CG can reduce stability and affect stall/spin recovery."),
  q("performance", "Higher temperature usually does what to density altitude?", ["Increases it", "Decreases it to sea level", "Has no effect", "Eliminates wind"], 0, "Warmer air is less dense, increasing density altitude."),
  q("performance", "A tailwind on takeoff usually:", ["Increases takeoff distance", "Decreases takeoff distance always", "Has no effect", "Improves climb angle always"], 0, "Tailwinds increase groundspeed required for liftoff and lengthen takeoff distance."),
  q("performance", "Soft-field technique is used to:", ["Reduce drag and avoid getting stuck on soft surfaces", "Increase braking on ice", "Avoid checklists", "Fly only at night"], 0, "Soft-field technique protects the nosewheel and helps the airplane accelerate on soft surfaces."),
  q("performance", "PAVE stands for Pilot, Aircraft, enVironment, and:", ["External pressures", "Engine valves", "Emergency vectors", "Elevator position"], 0, "External pressures are a major risk factor."),
  q("performance", "DECIDE is a model for:", ["Aeronautical decision-making", "Fuel sampling only", "Compass turns", "Radio tuning"], 0, "DECIDE helps structure decisions under changing conditions."),
  q("performance", "Landing distance charts are found in:", ["The aircraft performance data", "The passenger briefing only", "The paint manual", "The airport restaurant guide"], 0, "Use POH/AFM performance charts for landing distance."),
  q("performance", "The first priority in an engine failure is:", ["Maintain aircraft control", "Call a friend", "Look up the airport cafe", "Reset the clock"], 0, "Aviate first: pitch for control and suitable airspeed."),

  q("regulations", "To carry passengers, a private pilot must meet applicable:", ["Currency and medical requirements", "Airline uniform rules", "Mechanic experience rules", "Drone-only rules"], 0, "Passenger carriage requires legal currency and medical qualification as applicable."),
  q("regulations", "A flight review is generally required every:", ["24 calendar months", "24 days", "5 years only", "Only before solo"], 0, "A flight review is generally required every 24 calendar months unless an approved substitute applies."),
  q("regulations", "Aircraft documents are often remembered as:", ["ARROW", "IMSAFE", "PAVE", "DECIDE"], 0, "ARROW refers to airworthiness, registration, radio license if required, operating limitations, and weight and balance."),
  q("regulations", "VFR fuel reserve requirements depend on:", ["Day or night and regulations", "Paint color", "Passenger age", "Airport restaurant hours"], 0, "Day and night VFR have regulatory reserve requirements."),
  q("regulations", "Right-of-way rules help pilots:", ["Avoid collisions", "Choose fuel grade", "Set altimeter only", "Compute CG"], 0, "Right-of-way rules create predictable collision avoidance behavior."),
  q("regulations", "Required equipment for day VFR is often remembered with:", ["ATOMATOFLAMES", "ARROW only", "IMSAFE only", "METAR"], 0, "ATOMATOFLAMES is a common memory aid for 91.205 day VFR equipment."),
  q("regulations", "Preventive maintenance by pilots is:", ["Allowed only within regulatory limits", "Never allowed in any case", "Required before every flight", "A substitute for annual inspection"], 0, "Pilot-performed preventive maintenance is limited by regulation and logging requirements."),
  q("regulations", "A private pilot may share operating expenses with passengers only when:", ["The pilot pays at least the pro rata share and rules are met", "Passengers pay everything", "The pilot is paid a salary", "No common purpose exists"], 0, "Expense sharing has limits, including pro rata share and common purpose considerations."),

  q("checkride", "During the oral exam, scenario questions are designed to test:", ["Decision-making and application", "Only spelling", "Only memorized acronyms", "Only handwriting"], 0, "Scenario questions test how you apply knowledge to realistic flights."),
  q("checkride", "If you do not know an aircraft-specific answer during preparation, you should:", ["Find it in the POH/AFM and ask your CFI", "Make up a number", "Use a different aircraft's number", "Ignore it"], 0, "Aircraft-specific answers need aircraft-specific sources."),
  q("checkride", "A mock cross-country should include:", ["Weather, route, performance, W&B, fuel, airspace, and alternates", "Only the destination name", "Only passenger snacks", "Only runway color"], 0, "A checkride-ready plan covers the whole flight risk picture."),
  q("checkride", "If weather is legal but beyond your skill, the safer decision is usually:", ["Delay, cancel, change route, or take an instructor", "Go because it is legal", "Ignore personal minimums", "Stop checking weather"], 0, "Legal minimums are not always personal minimums."),
  q("checkride", "The examiner expects missed knowledge-test areas to be:", ["Discussed during the practical test", "Ignored forever", "Deleted from records", "Answered only by passengers"], 0, "Deficient areas from the knowledge test can be reviewed during the practical test."),
  q("checkride", "A good passenger briefing includes:", ["Seat belts, doors, sterile cockpit, emergency basics, and expectations", "Only jokes", "Only destination weather", "Only aircraft price"], 0, "Passenger briefings support safety and cockpit management."),
  q("checkride", "Single-pilot resource management means:", ["Using all available resources while managing workload", "Never asking for help", "Only using GPS", "Letting passengers command the flight"], 0, "SRM is about managing all resources as a single pilot."),
  q("checkride", "The best checkride mindset is:", ["Calm, prepared, honest, and safety-focused", "Rushed and defensive", "Trying to hide uncertainty", "Memorize without understanding"], 0, "Examiners are looking for safe pilot judgment.")
);

const flashcards = [
  ["orientation", "What does CFI mean?", "Certificated Flight Instructor."],
  ["orientation", "What does DPE mean?", "Designated Pilot Examiner."],
  ["orientation", "What is the ACS?", "Airman Certification Standards, the FAA practical test standard."],
  ["aerodynamics", "Name the four forces of flight.", "Lift, weight, thrust, and drag."],
  ["aerodynamics", "What causes a stall?", "Exceeding the wing's critical angle of attack."],
  ["aerodynamics", "What does the rudder control?", "Yaw around the vertical axis."],
  ["systems", "Name the pitot-static instruments.", "Airspeed indicator, altimeter, and vertical speed indicator."],
  ["systems", "What is the POH?", "Pilot's Operating Handbook, the aircraft-specific operating reference."],
  ["systems", "What does the altimeter display?", "Indicated altitude based on barometric pressure setting."],
  ["maneuvers", "Name the standard traffic pattern legs.", "Upwind, crosswind, downwind, base, and final."],
  ["maneuvers", "What is the safe answer to an unstable approach?", "Go around."],
  ["maneuvers", "What should you do first in an emergency?", "Aviate: maintain aircraft control."],
  ["weather", "What is a METAR?", "An aviation routine weather report."],
  ["weather", "What is a TAF?", "A terminal aerodrome forecast."],
  ["weather", "Why is high density altitude risky?", "It reduces takeoff, climb, engine, propeller, and wing performance."],
  ["airspace", "What are the controlled airspace classes for VFR training?", "Class B, C, D, and E; Class A is IFR-only for typical operations."],
  ["airspace", "What is CTAF?", "Common Traffic Advisory Frequency."],
  ["airspace", "What is special use airspace?", "Airspace where certain activities or restrictions may affect flight."],
  ["navigation", "What is pilotage?", "Navigation by visual reference to landmarks."],
  ["navigation", "What is dead reckoning?", "Navigation by course, heading, groundspeed, time, and fuel calculations."],
  ["navigation", "Why correct for wind?", "To maintain the intended ground track."],
  ["performance", "Weight x arm = ?", "Moment."],
  ["performance", "What does CG mean?", "Center of gravity."],
  ["performance", "What does PAVE stand for?", "Pilot, Aircraft, enVironment, External pressures."],
  ["regulations", "What part covers pilot certification?", "14 CFR Part 61."],
  ["regulations", "What part covers general operating rules?", "14 CFR Part 91."],
  ["regulations", "What is proficiency?", "Actual readiness and skill, beyond legal currency."],
  ["checkride", "What should you bring into every checkride topic?", "Knowledge, risk management, and aircraft-specific application."],
  ["checkride", "Best source for aircraft limitations?", "The POH/AFM."],
  ["checkride", "What is a mock oral for?", "Practicing how to explain decisions, not just recite facts."]
];

const defaultState = {
  completedLessons: [],
  quizScores: {},
  cardConfidence: {},
  seenQuestions: {},
  lastStudyDate: "",
  streak: 0,
  selectedModule: "orientation",
  selectedDeck: "all",
  selectedCourseVideo: courseVideos[0].id,
  selectedLessonVideos: {},
  selectedLessonTab: "overview",
  selectedSource: "phak",
  seenVideoQuestions: {},
  videoScores: {},
  flaggedQuestions: {}
};

let state = loadState();
let currentQuiz = [];
let quizIndex = 0;
let quizAnswers = [];
let currentVideoQuiz = [];
let videoQuizIndex = 0;
let videoQuizAnswers = [];
let activeVideoQuizTarget = "courseVideoQuiz";
let activeVideoQuizContext = "course";
let selectedCardIds = [];
let currentCardIndex = 0;
let cardFlipped = false;
let cardAnimating = false;
let resourceSearchTerm = "";
let activeResourceFilter = "all";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem("ppl-study-state")) || {};
    delete parsed.lessonVideos;
    localStorage.setItem("ppl-study-state", JSON.stringify(parsed));
    return { ...defaultState, ...parsed };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem("ppl-study-state", JSON.stringify(state));
}

function lessonVideosFor(module) {
  const ids = lessonVideoPlan[module.id] || [];
  const videos = ids
    .map((id) => courseVideos.find((video) => video.id === id))
    .filter(Boolean);
  return videos.length ? videos : courseVideos.slice(0, 3);
}

function selectedLessonVideoFor(module) {
  const videos = lessonVideosFor(module);
  const selectedId = state.selectedLessonVideos?.[module.id];
  return videos.find((video) => video.id === selectedId) || videos[0];
}

function setLessonVideo(moduleId, videoId) {
  state.selectedLessonVideos = { ...(state.selectedLessonVideos || {}), [moduleId]: videoId };
  saveState();
}

function lessonSourceUrl(docId, page = 1, file = "") {
  const doc = sourceDocs.find((item) => item.id === docId) || sourceDocs[0];
  return sourceUrl(doc, page, file);
}

function lessonSourceEntryUrl(entry) {
  return lessonSourceUrl(entry?.[0], entry?.[2] || 1, entry?.[3] || "");
}

function recordStudyActivity() {
  const today = new Date().toISOString().slice(0, 10);
  if (state.lastStudyDate === today) return;

  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  state.streak = state.lastStudyDate === yesterday ? state.streak + 1 : 1;
  state.lastStudyDate = today;
  saveState();
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

function setView(view) {
  $$(".nav-button").forEach((button) => button.classList.toggle("is-active", button.dataset.view === view));
  $$(".mobile-nav-button").forEach((button) => button.classList.toggle("is-active", button.dataset.view === view));
  $$(".view").forEach((section) => section.classList.remove("is-active"));
  $(`#${view}View`).classList.add("is-active");
  $("#viewTitle").textContent = {
    dashboard: "Good morning, Alex!",
    lessons: "Lessons",
    videoCourse: "Video Course",
    quiz: "Practice",
    flashcards: "Flashcards",
    resources: "Reader"
  }[view];
}

function progressFor(module) {
  return state.completedLessons.includes(module.id);
}

function renderDashboard() {
  const done = state.completedLessons.length;
  const total = modules.length;
  const percent = total ? Math.round((done / total) * 100) : 0;
  const best = Math.max(0, ...Object.values(state.quizScores).map((score) => score.percent || 0));
  const next = modules.find((module) => !progressFor(module)) || modules[modules.length - 1];
  const nextVideo = selectedLessonVideoFor(next);
  const nextProgress = progressFor(next) ? 100 : Math.min(85, 20 + Math.round(((state.videoScores[nextVideo.id]?.percent || 0) / 100) * 40));
  const knownCards = Object.values(state.cardConfidence || {}).filter((value) => value === "known").length;
  const flashcardMastery = flashcards.length ? Math.round((knownCards / flashcards.length) * 100) : 0;
  const goalCompleted = Math.min(3, (done > 0 ? 1 : 0) + (knownCards > 0 ? 1 : 0) + (best > 0 ? 1 : 0));
  const goalPercent = Math.round((goalCompleted / 3) * 100);
  const weakest = best >= 80 ? "Regulations" : "Weather";
  const nextTask = progressFor(next)
    ? "Review weak areas and retake practice questions."
    : state.videoScores[nextVideo.id]
      ? "Read the assigned handbook section, then take practice questions."
      : "Watch the next lesson video, then read the assigned handbook section.";

  const todayDate = document.querySelector("#todayDate");
  if (todayDate) {
    todayDate.textContent = new Intl.DateTimeFormat(undefined, {
      weekday: "long",
      month: "short",
      day: "numeric"
    }).format(new Date());
  }
  $("#overallPercent").textContent = `${percent}%`;
  $("#overallMeter").style.width = `${percent}%`;
  $("#lessonCount").textContent = `${done ? "Review" : "1"} Lesson`;
  $("#bestScore").textContent = `${best}%`;
  $("#quizReadiness").textContent = best >= 80 ? "Looking checkride-minded." : "Aim for 80%+ module scores.";
  $("#studyStreak").textContent = `${state.streak}`;
  $("#testReadinessMeter").style.width = `${best}%`;
  $("#flashcardMastery").textContent = `${flashcardMastery}%`;
  $("#flashcardMasteryMeter").style.width = `${flashcardMastery}%`;
  $("#dailyGoalMeter").style.width = `${goalPercent}%`;
  $("#dailyGoalText").textContent = `${goalCompleted} / 3 completed`;
  $("#weakestArea").textContent = weakest;

  $("#nextMilestone").textContent = `Next up: ${next.title}`;
  $("#nextMilestoneHint").textContent = next.goal;
  const nextUpButton = document.querySelector("#nextUpButton");
  if (nextUpButton) {
    nextUpButton.dataset.openModule = next.id;
    delete nextUpButton.dataset.jump;
  }

  $("#dashboardTimeline").innerHTML = modules.map((module) => {
    const isDone = progressFor(module);
    return `
      <div class="timeline-item ${isDone ? "is-done" : ""}">
        <div class="timeline-number">${isDone ? "Done" : module.week}</div>
        <div>
          <strong>${module.title}</strong>
          <span>${module.goal}</span>
        </div>
        <button class="status-pill ${isDone ? "is-done" : ""}" data-open-module="${module.id}" type="button">${isDone ? "Review" : "Open"}</button>
      </div>
    `;
  }).join("");

  const continueCard = document.querySelector("#continueLearningCard");
  if (continueCard) {
    continueCard.innerHTML = `
      <div class="continue-content">
        <span class="eyebrow">Continue Studying</span>
        <h3>Week ${next.week}: ${next.title}</h3>
        <p>Lesson ${Math.min(next.week + 2, 5)} of 5 <span aria-hidden="true">-</span> ${next.title}</p>
        <div class="continue-progress">
          <div class="meter"><span style="width: ${nextProgress}%"></span></div>
          <strong>${nextProgress}%</strong>
        </div>
        <div class="continue-actions">
          <button class="primary-button" data-open-module="${next.id}" type="button"><span aria-hidden="true">Play</span> Resume Lesson</button>
          <button class="ghost-button" data-jump="flashcards" type="button">Cards Review Cards</button>
        </div>
      </div>
      <div class="hero-plane" aria-hidden="true"></div>
    `;
  }
}

function renderLessons() {
  $("#moduleList").innerHTML = modules.map((module) => {
    const isDone = progressFor(module);
    const isActive = state.selectedModule === module.id;
    const rows = module.know.slice(0, 5).map((item, index) => {
      const rowState = isDone ? "is-complete" : isActive && index === 2 ? "is-current" : index > 2 ? "is-locked" : "";
      const marker = isDone ? "OK" : index > 2 ? "--" : "O";
      return `<span class="module-lesson-row ${rowState}"><b>${marker}</b>${item}</span>`;
    }).join("");
    return `
      <button class="module-button ${isActive ? "is-active" : ""}" data-module="${module.id}" type="button">
        <strong>Week ${module.week}: ${module.title}</strong>
        <span>${isDone ? "Complete" : isActive ? "Current module" : "Course path"} - ${module.know.length} targets</span>
        <em class="module-meta">${12 + module.week * 3} min lesson - ${module.week + 8} cards - ${module.week + 4} questions</em>
        <span class="module-lesson-list">${rows}</span>
      </button>
    `;
  }).join("");

  const module = modules.find((item) => item.id === state.selectedModule) || modules[0];
  const isDone = progressFor(module);
  const reading = lessonReadings[module.id];
  const notes = lessonNotes[module.id];
  const videoSources = videoSourcesFor(module);
  const lessonVideos = lessonVideosFor(module);
  const selectedVideo = selectedLessonVideoFor(module);
  const sourcePlan = lessonSourcePlan[module.id] || [];
  const selectedSourcePlan = sourcePlan[0];
  const selectedDoc = selectedSourcePlan ? sourceDocs.find((item) => item.id === selectedSourcePlan[0]) : sourceDocs[0];
  const selectedPage = selectedSourcePlan?.[2] || 1;
  const activeTab = state.selectedLessonTab || "overview";
  const selectedVideoIndex = Math.max(0, lessonVideos.findIndex((video) => video.id === selectedVideo.id));
  const previousVideo = lessonVideos[(selectedVideoIndex - 1 + lessonVideos.length) % lessonVideos.length];
  const nextVideo = lessonVideos[(selectedVideoIndex + 1) % lessonVideos.length];
  const lessonProgress = isDone ? 100 : Math.min(85, 20 + Math.round(((state.videoScores[selectedVideo.id]?.percent || 0) / 100) * 40));
  const tabs = ["overview", "watch", "read", "practice", "notes"];
  const tabLabels = {
    overview: "Overview",
    watch: "Watch",
    read: "Read",
    practice: "Practice",
    notes: "Notes"
  };
  const tabContent = {
    overview: `
      <section class="lesson-tab-panel">
        <div class="overview-grid">
          <article class="study-block">
            <h4>Lesson Goal</h4>
            <p>${module.goal}</p>
            <div class="lesson-progress-row"><span>Current progress</span><strong>${lessonProgress}%</strong></div>
            <div class="meter"><span style="width: ${lessonProgress}%"></span></div>
          </article>
          ${renderChecklist("Read", module.read)}
          ${renderChecklist("Watch", module.watch)}
          ${renderChecklist("Know by the end", module.know)}
        </div>
      </section>
    `,
    watch: `
      <section class="lesson-tab-panel watch-panel">
        <div class="panel-header">
          <div>
            <span class="eyebrow">Selected Video</span>
            <h4>${selectedVideo.title}</h4>
          </div>
          <a class="resource-link" href="https://www.youtube.com/watch?v=${selectedVideo.id}&list=${COURSE_PLAYLIST_ID}" target="_blank" rel="noreferrer">Open on YouTube</a>
        </div>
        <div class="video-frame" id="videoFrame">
          <iframe id="lessonVideo" title="${selectedVideo.title}" src="${youtubeEmbedUrl(selectedVideo.id, COURSE_PLAYLIST_ID)}" ${youtubeIframeAttrs()}></iframe>
        </div>
        <div class="video-nav-row">
          <button class="ghost-button" data-lesson-video="${previousVideo.id}" type="button">Previous Video</button>
          <button class="ghost-button" data-lesson-video="${nextVideo.id}" type="button">Next Video</button>
          <button class="primary-button" id="startLessonVideoTest" type="button">Test After Watching</button>
        </div>
        <div class="lesson-video-strip" aria-label="Lesson videos">
          ${lessonVideos.map((video, index) => `
            <button class="lesson-video-button ${video.id === selectedVideo.id ? "is-active" : ""}" data-lesson-video="${video.id}" type="button">
              <span>${index + 1}</span>
              <strong>${video.title}</strong>
              <em>${state.videoScores[video.id] ? `${state.videoScores[video.id].percent}% best` : "Not tested"}</em>
            </button>
          `).join("")}
        </div>
        <div class="lesson-video-quiz" id="lessonVideoQuiz">
          <div class="score-display">
            <span class="eyebrow">Video Test</span>
            <h3>Watch, then test recall.</h3>
            <p>Questions are tied to the selected video and rotate after each attempt.</p>
          </div>
        </div>
        <details class="video-search-details">
          <summary>Additional video searches</summary>
          <div class="video-library" id="videoLibrary">
            ${videoSources.map((source) => `
              <article class="video-card">
                <span class="eyebrow">${source.provider}</span>
                <h5>${source.title}</h5>
                <a class="resource-link" href="${source.href}" target="_blank" rel="noreferrer">Open Search</a>
              </article>
            `).join("")}
          </div>
        </details>
      </section>
    `,
    read: `
      <section class="lesson-tab-panel">
        <div class="reader-panel">
          <div class="panel-header">
            <div>
              <span class="eyebrow">Lesson Briefing</span>
              <h4>Read and summarize</h4>
            </div>
            <span class="section-count">${sourcePlan.length} readings</span>
          </div>
          <p class="brief-text">${reading.brief}</p>
          <div class="reading-sections">
            ${reading.sections.map(([title, body]) => `
              <article class="reading-section">
                <h5>${title}</h5>
                <p>${body}</p>
              </article>
            `).join("")}
          </div>
        </div>
        <div class="lesson-reader-layout">
          <div class="lesson-source-list">
            ${sourcePlan.map(([docId, label, page], index) => {
              const entry = sourcePlan[index];
              const doc = sourceDocs.find((item) => item.id === docId);
              return `
                <button class="lesson-source-button ${index === 0 ? "is-active" : ""}" data-lesson-source-doc="${docId}" data-lesson-source-page="${page}" data-lesson-source-file="${entry[3] || ""}" data-lesson-source-label="${label}" type="button">
                  <span class="source-badge">${doc.shortTitle}</span>
                  <strong>${label}</strong>
                  <em>${doc.title}</em>
                  <small>${entry[3] ? "Chapter PDF" : `Page ${page || 1}`}</small>
                </button>
              `;
            }).join("")}
          </div>
          <article class="lesson-reader-frame-card">
            <div class="source-reader-header">
              <div>
                <span class="eyebrow">${selectedDoc.shortTitle}</span>
                <h3 id="lessonReaderTitle">${selectedSourcePlan ? selectedSourcePlan[1] : selectedDoc.title}</h3>
              </div>
              <a class="resource-link" id="lessonReaderOpen" href="${selectedSourcePlan ? lessonSourceEntryUrl(selectedSourcePlan) : lessonSourceUrl(selectedDoc.id, selectedPage)}" target="_blank" rel="noreferrer">Open PDF</a>
            </div>
            <iframe id="lessonReaderFrame" title="Lesson handbook chapter reader" src="${selectedSourcePlan ? lessonSourceEntryUrl(selectedSourcePlan) : lessonSourceUrl(selectedDoc.id, selectedPage)}"></iframe>
          </article>
        </div>
      </section>
    `,
    practice: `
      <section class="lesson-tab-panel">
        <div class="practice-brief">
          <div>
            <span class="eyebrow">Practice</span>
            <h4>Test Week ${module.week}</h4>
            <p>Use this as a short written-test checkpoint for the selected module.</p>
          </div>
          <button class="primary-button" id="lessonQuiz" type="button">Start Module Test</button>
        </div>
        ${renderQuizVisual(module.id, true)}
        <div class="drill-box">
          <strong>Check yourself</strong>
          <p>${reading.drill}</p>
        </div>
      </section>
    `,
    notes: `
      <section class="lesson-tab-panel">
        <div class="keyterm-list">
          <h5>Key terms</h5>
          <div>${notes.keyTerms.map((term) => `<span>${term}</span>`).join("")}</div>
        </div>
        <div class="checklist">
          <h4>Related links</h4>
          <div class="resource-links">
            ${module.links.map(([label, href]) => `<a class="resource-link" href="${href}" target="_blank" rel="noreferrer">${label}</a>`).join("")}
            <a class="resource-link" href="https://quizlet.com/search?query=private%20pilot%20${encodeURIComponent(module.title)}&type=sets" target="_blank" rel="noreferrer">Quizlet Search</a>
          </div>
        </div>
      </section>
    `
  };

  $("#lessonDetail").innerHTML = `
    <div class="lesson-hero">
      <div>
        <span class="eyebrow">Lesson ${module.week}</span>
        <h3>${module.title}</h3>
        <p>${module.goal}</p>
      </div>
      <button class="${isDone ? "ghost-button" : "primary-button"}" id="toggleLesson" type="button">
        ${isDone ? "Mark Incomplete" : "Mark as Complete"}
      </button>
    </div>
    <div class="lesson-tabs" role="tablist" aria-label="Lesson sections">
      ${tabs.map((tab) => `<button class="lesson-tab ${activeTab === tab ? "is-active" : ""}" data-lesson-tab="${tab}" type="button">${tabLabels[tab]}</button>`).join("")}
    </div>
    ${tabContent[activeTab] || tabContent.overview}
  `;
}

function renderChecklist(title, items) {
  return `
    <div class="checklist">
      <h4>${title}</h4>
      <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
  `;
}

function studyVisualFor(moduleId) {
  return moduleStudyVisuals[moduleId] || moduleStudyVisuals.orientation;
}

function renderStudySvg(scene) {
  const svgAttrs = `viewBox="0 0 320 180" role="img" aria-hidden="true" focusable="false"`;
  const scenes = {
    route: `<svg ${svgAttrs}><path class="sky-fill" d="M0 0h320v180H0z"/><path class="cloud-fill" d="M44 55c8-20 38-19 45 1 14-5 29 4 32 18H24c2-12 10-19 20-19z"/><path class="land-fill" d="M0 132h320v48H0z"/><path class="line-stroke" d="M45 132c45-50 95-52 140-18 30 23 56 24 88-12" fill="none"/><circle class="accent-fill" cx="45" cy="132" r="8"/><circle class="accent-fill" cx="273" cy="102" r="8"/><path class="plane-fill" d="M185 70l67 20-67 19 12-22-12-17z"/></svg>`,
    forces: `<svg ${svgAttrs}><path class="sky-fill" d="M0 0h320v180H0z"/><path class="plane-fill" d="M76 86l128-31 56 35-56 35L76 94z"/><path class="accent-stroke" d="M161 31v38M161 151v-38M54 89h55M266 89h-55" fill="none"/><path class="accent-fill" d="M161 21l-9 15h18zM161 159l9-15h-18zM42 89l15-9v18zM278 89l-15 9V80z"/></svg>`,
    panel: `<svg ${svgAttrs}><rect class="panel-fill" x="28" y="28" width="264" height="124" rx="16"/><circle class="dial-fill" cx="96" cy="76" r="28"/><circle class="dial-fill" cx="160" cy="76" r="28"/><circle class="dial-fill" cx="224" cy="76" r="28"/><path class="accent-stroke" d="M96 76l15-12M160 76v-18M224 76l-16 10" fill="none"/><rect class="screen-fill" x="75" y="118" width="170" height="17" rx="8"/></svg>`,
    pattern: `<svg ${svgAttrs}><path class="land-fill" d="M0 0h320v180H0z"/><rect class="runway-fill" x="138" y="38" width="44" height="112" rx="4"/><path class="runway-mark" d="M160 50v16M160 78v16M160 106v16M160 134v10"/><path class="accent-stroke" d="M160 142c-74 0-99-73-50-107 42-28 116-14 130 39 11 44-28 66-80 68z" fill="none"/><path class="plane-fill" d="M92 60l45-10-20 38-9-16-16-12z"/></svg>`,
    weather: `<svg ${svgAttrs}><path class="sky-fill" d="M0 0h320v180H0z"/><path class="cloud-fill" d="M76 68c12-31 60-29 71 1 23-10 49 6 54 30H44c3-20 16-31 32-31z"/><path class="cloud-fill" d="M203 49c8-20 37-19 45 1 14-6 31 3 34 19h-98c2-12 9-20 19-20z"/><path class="warning-fill" d="M144 102l-20 45 27-15-10 36 35-52-29 13z"/></svg>`,
    airspace: `<svg ${svgAttrs}><path class="sky-fill" d="M0 0h320v180H0z"/><path class="land-fill" d="M0 142h320v38H0z"/><path class="airspace-stroke" d="M50 142V94c0-29 25-52 58-52h104c33 0 58 23 58 52v48M90 142v-29c0-23 18-41 42-41h56c24 0 42 18 42 41v29M130 142v-17c0-16 13-29 30-29s30 13 30 29v17" fill="none"/><rect class="runway-fill" x="136" y="150" width="48" height="10" rx="3"/></svg>`,
    navigation: `<svg ${svgAttrs}><path class="map-fill" d="M0 0h320v180H0z"/><path class="map-line" d="M34 46c55 24 79-24 126 1 48 26 66 9 126-2M30 132c72-31 103 24 154 2 45-19 62-6 104 17" fill="none"/><path class="accent-stroke" d="M61 126L258 52" fill="none"/><circle class="accent-fill" cx="61" cy="126" r="8"/><circle class="accent-fill" cx="258" cy="52" r="8"/><path class="plane-fill" d="M168 78l48-3-37 31-4-18-7-10z"/></svg>`,
    performance: `<svg ${svgAttrs}><path class="land-fill" d="M0 0h320v180H0z"/><path class="runway-fill" d="M24 124h272v32H24z"/><path class="runway-mark" d="M52 140h40M116 140h40M180 140h40M244 140h28"/><path class="accent-stroke" d="M45 108c54-54 131-63 224-24" fill="none"/><rect class="load-fill" x="70" y="47" width="46" height="38" rx="5"/><rect class="load-fill" x="130" y="36" width="46" height="49" rx="5"/><rect class="load-fill" x="190" y="55" width="46" height="30" rx="5"/></svg>`,
    regs: `<svg ${svgAttrs}><path class="paper-fill" d="M72 24h176v132H72z"/><path class="line-stroke" d="M102 59h116M102 85h116M102 111h78" fill="none"/><path class="accent-fill" d="M80 24h56v38H80z"/><circle class="stamp-fill" cx="222" cy="120" r="25"/><path class="stamp-mark" d="M210 120l8 8 17-20" fill="none"/></svg>`,
    checkride: `<svg ${svgAttrs}><path class="sky-fill" d="M0 0h320v180H0z"/><rect class="paper-fill" x="49" y="38" width="100" height="108" rx="8"/><path class="line-stroke" d="M70 67h58M70 90h58M70 113h36" fill="none"/><path class="plane-fill" d="M171 92l82-25-32 70-15-30-35-15z"/><circle class="accent-fill" cx="244" cy="55" r="10"/></svg>`
  };
  return scenes[scene] || scenes.route;
}

function renderQuizVisual(moduleId, compact = false) {
  const visual = studyVisualFor(moduleId);
  return `
    <aside class="quiz-visual-panel ${compact ? "is-compact" : ""}">
      <div class="study-illustration scene-${visual.scene}">
        ${renderStudySvg(visual.scene)}
      </div>
      <div class="visual-copy">
        <span class="eyebrow">${visual.label}</span>
        <p>${visual.prompt}</p>
        <button class="text-button visual-hint-toggle" data-reveal-hint type="button">Reveal study hint</button>
        <p class="visual-hint">${visual.hint}</p>
      </div>
    </aside>
  `;
}

function renderQuizSetup() {
  const options = [`<option value="all">All modules</option>`]
    .concat(modules.map((module) => `<option value="${module.id}">Week ${module.week}: ${module.title}</option>`));
  $("#quizModule").innerHTML = options.join("");
  $("#quizModule").value = state.selectedModule || "all";
  renderQuizIntro();
}

function renderQuizIntro() {
  const selectedId = $("#quizModule").value === "all" ? state.selectedModule || "orientation" : $("#quizModule").value;
  $("#quizCard").innerHTML = `
    <div class="quiz-start-layout">
      <div class="practice-menu">
        <span class="eyebrow">Practice Test</span>
        <h3>Choose your test mode</h3>
        <div class="practice-option-grid">
          <button class="practice-option" id="startQuizInline" type="button"><span>10</span><strong>Quick 10 Questions</strong><em>Short focused practice</em></button>
          <button class="practice-option" data-start-quiz type="button"><span>WA</span><strong>Weak Areas Only</strong><em>Focus on what you need</em></button>
          <button class="practice-option" data-start-quiz type="button"><span>SIM</span><strong>Full Written Sim</strong><em>Simulate the real test</em></button>
          <button class="practice-option" data-start-quiz type="button"><span>MISS</span><strong>Missed Questions</strong><em>Review mistakes</em></button>
          <button class="practice-option" data-start-quiz type="button"><span>ACS</span><strong>ACS Oral Review</strong><em>Prepare for your checkride</em></button>
        </div>
        <p class="practice-note">Current bank: ${$("#quizModule").selectedOptions[0]?.textContent || "Selected module"}</p>
      </div>
      ${renderQuizVisual(selectedId, true)}
    </div>
  `;
}

function startQuiz() {
  const moduleId = $("#quizModule").value;
  state.selectedModule = moduleId === "all" ? state.selectedModule : moduleId;
  const bankId = moduleId;
  const testSize = moduleId === "all" ? 20 : 10;
  const bank = quizQuestions
    .filter((question) => moduleId === "all" || question.module === moduleId)
    .map((question) => ({ ...question, questionId: `${question.module}:${question.question}` }));
  const seen = state.seenQuestions[bankId] || [];
  let candidates = bank.filter((question) => !seen.includes(question.questionId));

  if (candidates.length < Math.min(testSize, bank.length)) {
    candidates = bank;
    state.seenQuestions[bankId] = [];
    showToast("Question bank reset after you worked through it.");
  }

  currentQuiz = candidates
    .sort(() => Math.random() - 0.5)
    .slice(0, Math.min(testSize, candidates.length));
  state.seenQuestions[bankId] = [
    ...(state.seenQuestions[bankId] || []),
    ...currentQuiz.map((question) => question.questionId)
  ];
  saveState();
  quizIndex = 0;
  quizAnswers = [];
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const question = currentQuiz[quizIndex];
  const answeredCount = quizAnswers.filter(Boolean).length;
  const flagged = Boolean(state.flaggedQuestions?.[question.questionId]);
  $("#quizCard").innerHTML = `
    <div class="quiz-progress">
      <span>Question ${quizIndex + 1} of ${currentQuiz.length}</span>
      <span>${answeredCount} correct</span>
    </div>
    <div class="quiz-meter"><span style="width: ${Math.round(((quizIndex + 1) / currentQuiz.length) * 100)}%"></span></div>
    <div class="quiz-question-layout">
      <div class="question-main">
        <div class="question-header">
          <span class="test-label">FAA Written Test Prep</span>
          <button class="ghost-button flag-button ${flagged ? "is-active" : ""}" data-flag-question="${question.questionId}" type="button">${flagged ? "Flagged" : "Flag Question"}</button>
        </div>
        <h3 class="question-title">${question.question}</h3>
        <div class="answers">
          ${question.answers.map((answer, index) => `<button class="answer-button" data-answer="${index}" type="button"><span>${String.fromCharCode(65 + index)}</span>${answer}</button>`).join("")}
        </div>
        <div class="quiz-nav-row">
          <button class="ghost-button" id="prevQuestion" type="button" ${quizIndex === 0 ? "disabled" : ""}>Previous</button>
          <button class="ghost-button" type="button" disabled>Choose an answer to continue</button>
        </div>
      </div>
      ${renderQuizVisual(question.module)}
    </div>
    <div id="answerFeedback"></div>
  `;
}

function answerQuestion(answerIndex) {
  const question = currentQuiz[quizIndex];
  const correct = answerIndex === question.correct;
  quizAnswers[quizIndex] = correct;
  question.selectedAnswer = answerIndex;
  $$(".answer-button").forEach((button) => {
    const index = Number(button.dataset.answer);
    button.disabled = true;
    button.classList.toggle("is-correct", index === question.correct);
    button.classList.toggle("is-wrong", index === answerIndex && !correct);
  });
  $("#answerFeedback").innerHTML = `
    <div class="explanation">
      <strong>${correct ? "Correct" : "Review this one"}</strong>
      <p>${question.explanation}</p>
      <div class="quiz-nav-row">
        <button class="ghost-button" id="prevQuestion" type="button" ${quizIndex === 0 ? "disabled" : ""}>Previous</button>
        <button class="primary-button" id="nextQuestion" type="button">${quizIndex + 1 === currentQuiz.length ? "Finish Test" : "Next Question"}</button>
      </div>
    </div>
  `;
  recordStudyActivity();
  renderDashboard();
}

function nextQuestion() {
  if (quizIndex + 1 < currentQuiz.length) {
    quizIndex += 1;
    renderQuizQuestion();
    return;
  }

  const correct = quizAnswers.filter(Boolean).length;
  const percent = Math.round((correct / currentQuiz.length) * 100);
  const moduleId = $("#quizModule").value;
  const previous = state.quizScores[moduleId]?.percent || 0;
  const topicStats = currentQuiz.reduce((stats, question, index) => {
    const topic = question.module;
    stats[topic] ||= { correct: 0, total: 0 };
    stats[topic].total += 1;
    if (quizAnswers[index]) stats[topic].correct += 1;
    return stats;
  }, {});
  const rankedTopics = Object.entries(topicStats)
    .map(([topic, stats]) => ({ topic, percent: Math.round((stats.correct / stats.total) * 100), ...stats }))
    .sort((a, b) => b.percent - a.percent);
  const strongTopics = rankedTopics.filter((topic) => topic.percent >= 80).slice(0, 3);
  const weakTopics = rankedTopics.filter((topic) => topic.percent < 80).sort((a, b) => a.percent - b.percent).slice(0, 3);
  const missed = currentQuiz.filter((question, index) => !quizAnswers[index]);
  state.quizScores[moduleId] = { percent: Math.max(previous, percent), last: percent, date: new Date().toISOString() };
  saveState();
  renderDashboard();

  $("#quizCard").innerHTML = `
    <div class="score-display score-result">
      <span class="eyebrow">Test Results</span>
      <div class="score-ring" style="--score: ${percent * 3.6}deg"><strong>${percent}%</strong><span>${correct} / ${currentQuiz.length} correct</span></div>
      <p>${percent >= 80 ? "Passing checkpoint. Keep reinforcing the explanations." : "Below the FAA written-test target. Review the weak topics and retake this bank."}</p>
      <div class="results-grid">
        <section>
          <h4>Strong topics</h4>
          <ul>${(strongTopics.length ? strongTopics : rankedTopics.slice(0, 1)).map((item) => `<li>${item.topic}: ${item.percent}%</li>`).join("")}</ul>
        </section>
        <section>
          <h4>Weak topics</h4>
          <ul>${(weakTopics.length ? weakTopics : [{ topic: "No weak topics in this attempt", percent: percent }]).map((item) => `<li>${item.topic}${item.total ? `: ${item.percent}%` : ""}</li>`).join("")}</ul>
        </section>
      </div>
      <div class="missed-review">
        <h4>Review missed questions</h4>
        ${missed.length ? missed.map((question) => `
          <article>
            <strong>${question.question}</strong>
            <p>${question.explanation}</p>
          </article>
        `).join("") : "<p>No missed questions on this attempt.</p>"}
      </div>
      <button class="primary-button" id="retakeQuiz" type="button">Retake Test</button>
    </div>
  `;
}

function previousQuestion() {
  if (quizIndex === 0) return;
  quizIndex -= 1;
  renderQuizQuestion();
}

function renderFlashcards() {
  $("#deckSelect").innerHTML = [`<option value="all">All cards</option>`]
    .concat(modules.map((module) => `<option value="${module.id}">Week ${module.week}: ${module.title}</option>`))
    .join("");
  $("#deckSelect").value = state.selectedDeck || "all";
  buildCardDeck();
  const selectedModule = modules.find((item) => item.id === state.selectedDeck);
  const deckLabel = state.selectedDeck === "all" ? "All decks" : selectedModule?.title || "Selected deck";
  const toolbar = document.querySelector(".flashcard-toolbar");
  if (toolbar) {
    toolbar.dataset.deck = deckLabel;
    toolbar.dataset.count = `${Math.min(currentCardIndex + 1, selectedCardIds.length)} / ${selectedCardIds.length || 0}`;
  }
  renderCurrentCard();
}

function buildCardDeck() {
  selectedCardIds = flashcards
    .map((card, index) => ({ card, index }))
    .filter(({ card }) => state.selectedDeck === "all" || card[0] === state.selectedDeck)
    .map(({ index }) => index);
  currentCardIndex = Math.min(currentCardIndex, Math.max(0, selectedCardIds.length - 1));
  cardFlipped = false;
}

function renderCurrentCard(animationClass = "") {
  const cardId = selectedCardIds[currentCardIndex];
  const card = flashcards[cardId];
  const module = modules.find((item) => item.id === card[0]);
  const confidence = state.cardConfidence[cardId] || "new";
  const cardElement = $("#studyCard");
  const toolbar = document.querySelector(".flashcard-toolbar");
  if (toolbar) toolbar.dataset.count = `${currentCardIndex + 1} / ${selectedCardIds.length}`;

  cardElement.className = `study-card ${cardFlipped ? "is-flipped" : ""} ${animationClass}`.trim();
  cardElement.innerHTML = `
    <div class="card-inner">
      <div class="card-side">${module.title} - ${confidence}</div>
      <div class="card-text">${cardFlipped ? card[2] : card[1]}</div>
      <div class="card-hint">${cardFlipped ? "Choose a confidence rating." : "Tap, click, or press Space to reveal."}</div>
      <div class="flashcard-progress">Card ${currentCardIndex + 1} of ${selectedCardIds.length}</div>
    </div>
  `;
}

function moveCard(direction) {
  if (cardAnimating || !selectedCardIds.length) return;
  cardAnimating = true;
  const cardElement = $("#studyCard");
  cardElement.classList.add(direction > 0 ? "is-sliding-left" : "is-sliding-right");

  window.setTimeout(() => {
    currentCardIndex = (currentCardIndex + direction + selectedCardIds.length) % selectedCardIds.length;
    cardFlipped = false;
    renderCurrentCard(direction > 0 ? "is-entering-right" : "is-entering-left");
    window.setTimeout(() => {
      $("#studyCard").classList.remove("is-entering-right", "is-entering-left");
      cardAnimating = false;
    }, 180);
  }, 160);
}

function flipCurrentCard() {
  if (cardAnimating) return;
  cardAnimating = true;
  const cardElement = $("#studyCard");
  cardElement.classList.add("is-flipping-out");

  window.setTimeout(() => {
    cardFlipped = !cardFlipped;
    renderCurrentCard("is-flipping-in");
    window.setTimeout(() => {
      $("#studyCard").classList.remove("is-flipping-in");
      cardAnimating = false;
    }, 180);
  }, 160);
}

function markCard(confidence) {
  const cardId = selectedCardIds[currentCardIndex];
  state.cardConfidence[cardId] = confidence;
  saveState();
  recordStudyActivity();
  showToast(`Card marked ${confidence}.`);
  moveCard(1);
  renderDashboard();
}

function renderVideoCourse() {
  const selected = courseVideos.find((video) => video.id === state.selectedCourseVideo) || courseVideos[0];
  const selectedPool = questionsForCourseVideo(selected);
  const score = state.videoScores[selected.id];
  const completedTests = Object.keys(state.videoScores || {}).length;

  $("#courseVideoList").innerHTML = `
    <div class="course-list-header">
      <span class="eyebrow">Playlist</span>
      <strong>Complete Private Pilot Ground Course</strong>
      <p>${completedTests} video tests completed</p>
    </div>
    ${courseVideos.map((video) => {
      const videoScore = state.videoScores[video.id];
      return `
        <button class="course-video-button ${video.id === selected.id ? "is-active" : ""}" data-course-video="${video.id}" type="button">
          <span>${video.number}</span>
          <strong>${video.title}</strong>
          <em>${videoScore ? `${videoScore.percent}% best` : "Not tested"}</em>
        </button>
      `;
    }).join("")}
  `;

  $("#courseVideoDetail").innerHTML = `
    <div class="course-player-header">
      <div>
        <span class="eyebrow">Video ${selected.number}</span>
        <h3>${selected.title}</h3>
        <p class="course-subtitle">Video ${selected.number} of ${courseVideos.length} - ${selectedPool.length} rotating test questions</p>
      </div>
      <div class="course-header-actions">
        <span class="watch-chip">Playlist video</span>
        <a class="resource-link" href="https://www.youtube.com/watch?v=${selected.id}&list=${COURSE_PLAYLIST_ID}" target="_blank" rel="noreferrer">Open on YouTube</a>
      </div>
    </div>
    <div class="course-player">
      <iframe title="${selected.title}" src="${youtubeEmbedUrl(selected.id, COURSE_PLAYLIST_ID)}" ${youtubeIframeAttrs()}></iframe>
    </div>
    <div class="course-study-grid">
      <section class="course-notes">
        <span class="eyebrow">Study target</span>
        <p>Watch the video, write two notes from memory, then take the video test. The test pulls from a rotating pool of ${selectedPool.length} questions for this video.</p>
        <div class="mini-note">${score ? `Best score for this video: ${score.percent}%` : "No score yet for this video."}</div>
      </section>
      <section class="course-actions">
        <button class="primary-button" id="startVideoTest" type="button">Test This Video</button>
        <button class="ghost-button" id="resetVideoQuestionHistory" type="button">Reset This Pool</button>
      </section>
    </div>
    <div class="quiz-card video-quiz-card" id="courseVideoQuiz">
      <div class="score-display">
        <span class="eyebrow">Video test</span>
        <h3>Take a test for this specific video.</h3>
        <p>Questions avoid repeats until this video's pool is exhausted.</p>
      </div>
    </div>
  `;
}

function startVideoTest(videoOverride, targetId = "courseVideoQuiz", context = "course") {
  const video = videoOverride || courseVideos.find((item) => item.id === state.selectedCourseVideo) || courseVideos[0];
  activeVideoQuizTarget = targetId;
  activeVideoQuizContext = context;
  const pool = questionsForCourseVideo(video);
  const bankId = video.id;
  const testSize = Math.min(10, pool.length);
  const seen = state.seenVideoQuestions[bankId] || [];
  let candidates = pool.filter((question) => !seen.includes(question.questionId));

  if (candidates.length < testSize) {
    candidates = pool;
    state.seenVideoQuestions[bankId] = [];
    showToast("This video's question pool reset after you worked through it.");
  }

  currentVideoQuiz = candidates.sort(() => Math.random() - 0.5).slice(0, testSize);
  state.seenVideoQuestions[bankId] = [
    ...(state.seenVideoQuestions[bankId] || []),
    ...currentVideoQuiz.map((question) => question.questionId)
  ];
  saveState();
  videoQuizIndex = 0;
  videoQuizAnswers = [];
  renderVideoQuizQuestion();
}

function renderVideoQuizQuestion() {
  const question = currentVideoQuiz[videoQuizIndex];
  const target = $(`#${activeVideoQuizTarget}`);
  if (!target) return;
  target.innerHTML = `
    <div class="quiz-progress">
      <span>Question ${videoQuizIndex + 1} of ${currentVideoQuiz.length}</span>
      <span>${videoQuizAnswers.filter(Boolean).length} correct</span>
    </div>
    <div class="quiz-meter"><span style="width: ${Math.round(((videoQuizIndex + 1) / currentVideoQuiz.length) * 100)}%"></span></div>
    <h3 class="question-title">${question.question}</h3>
    <div class="answers">
      ${question.answers.map((answer, index) => `<button class="answer-button" data-video-answer="${index}" type="button"><span>${String.fromCharCode(65 + index)}</span>${answer}</button>`).join("")}
    </div>
    <div id="videoAnswerFeedback"></div>
  `;
}

function answerVideoQuestion(answerIndex) {
  const question = currentVideoQuiz[videoQuizIndex];
  const correct = answerIndex === question.correct;
  videoQuizAnswers[videoQuizIndex] = correct;
  $$(`#${activeVideoQuizTarget} .answer-button`).forEach((button) => {
    const index = Number(button.dataset.videoAnswer);
    button.disabled = true;
    button.classList.toggle("is-correct", index === question.correct);
    button.classList.toggle("is-wrong", index === answerIndex && !correct);
  });
  const feedback = $(`#${activeVideoQuizTarget} #videoAnswerFeedback`);
  if (!feedback) return;
  feedback.innerHTML = `
    <div class="explanation">
      <strong>${correct ? "Correct" : "Review this one"}</strong>
      <p>${question.explanation}</p>
      <button class="primary-button" id="nextVideoQuestion" type="button">${videoQuizIndex + 1 === currentVideoQuiz.length ? "Finish Video Test" : "Next Question"}</button>
    </div>
  `;
  recordStudyActivity();
}

function nextVideoQuestion() {
  if (videoQuizIndex + 1 < currentVideoQuiz.length) {
    videoQuizIndex += 1;
    renderVideoQuizQuestion();
    return;
  }

  const correct = videoQuizAnswers.filter(Boolean).length;
  const percent = Math.round((correct / currentVideoQuiz.length) * 100);
  const videoId = state.selectedCourseVideo;
  const previous = state.videoScores[videoId]?.percent || 0;
  state.videoScores[videoId] = { percent: Math.max(previous, percent), last: percent, date: new Date().toISOString() };
  saveState();
  const targetId = activeVideoQuizTarget;
  if (activeVideoQuizContext === "course") {
    renderVideoCourse();
  } else {
    renderLessons();
  }
  const target = $(`#${targetId}`);
  if (!target) return;
  target.innerHTML = `
    <div class="score-display score-result">
      <span class="eyebrow">Video score</span>
      <div class="score-ring" style="--score: ${percent * 3.6}deg"><strong>${percent}%</strong><span>${correct} / ${currentVideoQuiz.length} correct</span></div>
      <p>You got ${correct} of ${currentVideoQuiz.length} correct for this video.</p>
      <button class="primary-button" id="${activeVideoQuizContext === "lesson" ? "startLessonVideoTest" : "startVideoTest"}" type="button">Retake This Video</button>
    </div>
  `;
}

function sourceUrl(doc, page = 1, file = "") {
  if (file) return file;
  return `${doc.file}#page=${page}`;
}

function openSourceDoc(docId, page = 1) {
  const doc = sourceDocs.find((item) => item.id === docId) || sourceDocs[0];
  const relatedModules = modules
    .filter((module) => (lessonSourcePlan[module.id] || []).some(([sourceId]) => sourceId === doc.id))
    .slice(0, 4);
  state.selectedSource = doc.id;
  saveState();
  $("#sourceReaderTitle").textContent = doc.title;
  $("#sourceReaderOpen").href = sourceUrl(doc, page);
  $("#sourceReaderFrame").src = sourceUrl(doc, page);
  $$(".source-card").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.sourceDoc === doc.id);
  });
  const context = $("#readerContext");
  if (context) {
    context.innerHTML = `
      <div class="reader-context-card">
        <span class="eyebrow">Related Study</span>
        <h3>${doc.shortTitle}</h3>
        <p>${doc.description}</p>
      </div>
      <div class="reader-context-card">
        <h4>Related lessons</h4>
        <div class="related-lesson-list">
          ${relatedModules.length ? relatedModules.map((module) => `
            <button class="text-row-button" data-open-module="${module.id}" type="button">
              <strong>Week ${module.week}</strong>
              <span>${module.title}</span>
            </button>
          `).join("") : "<p>No linked lessons yet.</p>"}
        </div>
      </div>
      <div class="reader-context-card">
        <h4>Reader notes</h4>
        <p>Bookmark important pages in your browser or keep notes beside your flight school's syllabus.</p>
      </div>
    `;
  }
}

function renderSourceLibrary() {
  const query = resourceSearchTerm.toLowerCase();
  const visibleDocs = sourceDocs.filter((doc) => {
    const filterMatch = activeResourceFilter === "all" || activeResourceFilter === "handbooks";
    const searchMatch = !query || `${doc.title} ${doc.description} ${doc.shortTitle}`.toLowerCase().includes(query);
    return filterMatch && searchMatch;
  });
  $("#sourceList").innerHTML = `
    <div class="course-list-header">
      <span class="eyebrow">FAA Resources</span>
      <strong>Handbook library</strong>
      <p>${visibleDocs.length} matching sources</p>
    </div>
    ${visibleDocs.length ? visibleDocs.map((doc) => `
      <button class="source-card ${state.selectedSource === doc.id ? "is-active" : ""}" data-source-doc="${doc.id}" data-source-page="1" type="button">
        <span class="resource-thumb">${doc.shortTitle}</span>
        <span class="source-badge">${doc.shortTitle}</span>
        <strong>${doc.title}</strong>
        <em>${doc.description}</em>
      </button>
    `).join("") : `<div class="empty-resource-card"><strong>No in-app PDFs match this filter.</strong><p>Try All or Handbooks, or use the additional FAA links below.</p></div>`}
  `;
  openSourceDoc(state.selectedSource || sourceDocs[0].id, 1);
}

function renderResources() {
  renderSourceLibrary();
  const categoryFor = (title, description) => {
    const text = `${title} ${description}`.toLowerCase();
    if (/chart|skyvector/.test(text)) return "charts";
    if (/acs|aim|certificate|student|become/.test(text)) return "regulations";
    if (/handbook|manual|textbook/.test(text)) return "handbooks";
    return "all";
  };
  const filteredResources = resources.filter(([title, description]) => {
    const category = categoryFor(title, description);
    const filterMatch = activeResourceFilter === "all" || category === activeResourceFilter;
    const searchMatch = !resourceSearchTerm || `${title} ${description}`.toLowerCase().includes(resourceSearchTerm.toLowerCase());
    return filterMatch && searchMatch;
  });
  $$(".filter-pill").forEach((button) => button.classList.toggle("is-active", button.dataset.resourceFilter === activeResourceFilter));
  const search = $("#resourceSearch");
  if (search && search.value !== resourceSearchTerm) search.value = resourceSearchTerm;
  $("#resourceGrid").innerHTML = filteredResources.map(([title, description, href]) => `
    <article class="resource-card">
      <span class="resource-thumb">${title.split(" ").map((word) => word[0]).join("").slice(0, 3)}</span>
      <span class="eyebrow">Free resource</span>
      <h3>${title}</h3>
      <p>${description}</p>
      <a class="resource-link" href="${href}" target="_blank" rel="noreferrer">Open</a>
    </article>
  `).join("") || `<article class="resource-card empty-resource-card"><h3>No resources found</h3><p>Try a broader search or switch back to All.</p></article>`;
}

function exportProgress() {
  const doneTitles = modules.filter(progressFor).map((module) => `Week ${module.week}: ${module.title}`);
  const bestScores = Object.entries(state.quizScores)
    .map(([id, score]) => `${id}: best ${score.percent}%`)
    .join("\n") || "No quiz scores yet.";
  const text = [
    "PPL Study Deck Progress",
    `Exported: ${new Date().toLocaleString()}`,
    "",
    `Lessons complete: ${state.completedLessons.length}/${modules.length}`,
    ...doneTitles.map((title) => `- ${title}`),
    "",
    "Quiz scores:",
    bestScores,
    "",
    `Study streak: ${state.streak} ${state.streak === 1 ? "day" : "days"}`
  ].join("\n");
  navigator.clipboard?.writeText(text).then(
    () => showToast("Progress copied to clipboard."),
    () => showToast("Clipboard unavailable. Try selecting progress manually later.")
  );
}

function resetProgress() {
  const ok = window.confirm("Reset lesson progress, quiz scores, and flashcard confidence?");
  if (!ok) return;
  state = { ...defaultState };
  saveState();
  renderAll();
  showToast("Progress reset.");
}

function renderAll() {
  renderDashboard();
  renderLessons();
  renderVideoCourse();
  renderQuizSetup();
  renderFlashcards();
  renderResources();
}

document.addEventListener("click", (event) => {
  const nav = event.target.closest("[data-view]");
  if (nav) setView(nav.dataset.view);

  const jump = event.target.closest("[data-jump]");
  if (jump) setView(jump.dataset.jump);

  const openModule = event.target.closest("[data-open-module]");
  if (openModule) {
    state.selectedModule = openModule.dataset.openModule;
    state.selectedLessonTab = "overview";
    saveState();
    renderLessons();
    setView("lessons");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const moduleButton = event.target.closest("[data-module]");
  if (moduleButton) {
    state.selectedModule = moduleButton.dataset.module;
    state.selectedLessonTab = "overview";
    saveState();
    renderLessons();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const lessonTab = event.target.closest("[data-lesson-tab]");
  if (lessonTab) {
    state.selectedLessonTab = lessonTab.dataset.lessonTab;
    saveState();
    renderLessons();
  }

  const lessonVideoButton = event.target.closest("[data-lesson-video]");
  if (lessonVideoButton) {
    setLessonVideo(state.selectedModule, lessonVideoButton.dataset.lessonVideo);
    state.selectedLessonTab = "watch";
    currentVideoQuiz = [];
    videoQuizIndex = 0;
    videoQuizAnswers = [];
    renderLessons();
  }

  const courseVideoButton = event.target.closest("[data-course-video]");
  if (courseVideoButton) {
    state.selectedCourseVideo = courseVideoButton.dataset.courseVideo;
    saveState();
    currentVideoQuiz = [];
    videoQuizIndex = 0;
    videoQuizAnswers = [];
    renderVideoCourse();
  }

  const sourceButton = event.target.closest("[data-source-doc]");
  if (sourceButton) {
    const docId = sourceButton.dataset.sourceDoc;
    const page = Number(sourceButton.dataset.sourcePage || 1);
    state.selectedSource = docId;
    saveState();
    renderResources();
    setView("resources");
    openSourceDoc(docId, page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const resourceFilter = event.target.closest("[data-resource-filter]");
  if (resourceFilter) {
    activeResourceFilter = resourceFilter.dataset.resourceFilter || "all";
    renderResources();
  }

  const lessonSourceButton = event.target.closest("[data-lesson-source-doc]");
  if (lessonSourceButton) {
    const docId = lessonSourceButton.dataset.lessonSourceDoc;
    const page = Number(lessonSourceButton.dataset.lessonSourcePage || 1);
    const file = lessonSourceButton.dataset.lessonSourceFile || "";
    const doc = sourceDocs.find((item) => item.id === docId) || sourceDocs[0];
    const url = sourceUrl(doc, page, file);
    $("#lessonReaderTitle").textContent = lessonSourceButton.dataset.lessonSourceLabel || doc.title;
    $("#lessonReaderOpen").href = url;
    $("#lessonReaderFrame").src = url;
    $$(".lesson-source-button").forEach((button) => {
      button.classList.toggle("is-active", button === lessonSourceButton);
    });
  }

  if (event.target.id === "startVideoTest") startVideoTest();

  if (event.target.id === "startLessonVideoTest") {
    const module = modules.find((item) => item.id === state.selectedModule) || modules[0];
    const video = selectedLessonVideoFor(module);
    state.selectedCourseVideo = video.id;
    saveState();
    startVideoTest(video, "lessonVideoQuiz", "lesson");
  }

  if (event.target.id === "resetVideoQuestionHistory") {
    delete state.seenVideoQuestions[state.selectedCourseVideo];
    saveState();
    showToast("This video's question history was reset.");
  }

  if (event.target.id === "loadVideo") {
    const input = $("#videoUrlInput");
    const embed = youtubeEmbedFromUrl(input.value);
    if (!embed) {
      showToast("Paste a valid YouTube video URL or 11-character video ID.");
      return;
    }

    const frame = $("#videoFrame");
    frame.classList.remove("is-empty");
    frame.innerHTML = `<iframe id="lessonVideo" title="YouTube lesson player" src="${embed}" ${youtubeIframeAttrs()}></iframe>`;
    showToast("Video loaded into this lesson.");
  }

  if (event.target.id === "toggleLesson") {
    const id = state.selectedModule;
    state.completedLessons = state.completedLessons.includes(id)
      ? state.completedLessons.filter((item) => item !== id)
      : [...state.completedLessons, id];
    recordStudyActivity();
    saveState();
    renderDashboard();
    renderLessons();
  }

  if (event.target.id === "lessonQuiz") {
    setView("quiz");
    $("#quizModule").value = state.selectedModule;
    startQuiz();
  }

  const revealHint = event.target.closest("[data-reveal-hint]");
  if (revealHint) {
    const panel = revealHint.closest(".quiz-visual-panel");
    panel?.classList.add("is-revealed");
    revealHint.textContent = "Hint shown";
  }

  if (event.target.id === "startQuiz" || event.target.id === "startQuizInline" || event.target.id === "retakeQuiz" || event.target.closest("[data-start-quiz]")) startQuiz();

  const flagButton = event.target.closest("[data-flag-question]");
  if (flagButton) {
    const id = flagButton.dataset.flagQuestion;
    state.flaggedQuestions = { ...(state.flaggedQuestions || {}) };
    if (state.flaggedQuestions[id]) {
      delete state.flaggedQuestions[id];
    } else {
      state.flaggedQuestions[id] = true;
    }
    saveState();
    renderQuizQuestion();
  }

  const answer = event.target.closest("[data-answer]");
  if (answer && currentQuiz.length) answerQuestion(Number(answer.dataset.answer));

  const videoAnswer = event.target.closest("[data-video-answer]");
  if (videoAnswer && currentVideoQuiz.length) answerVideoQuestion(Number(videoAnswer.dataset.videoAnswer));

  if (event.target.id === "prevQuestion") previousQuestion();
  if (event.target.id === "nextQuestion") nextQuestion();
  if (event.target.id === "nextVideoQuestion") nextVideoQuestion();
  if (event.target.id === "prevCard") moveCard(-1);
  if (event.target.id === "nextCard") moveCard(1);
  if (event.target.id === "studyCard" || event.target.closest("#studyCard")) {
    flipCurrentCard();
  }

  const confidence = event.target.closest("[data-confidence]");
  if (confidence) markCard(confidence.dataset.confidence);
});

$("#quizModule").addEventListener("change", (event) => {
  state.selectedModule = event.target.value === "all" ? state.selectedModule : event.target.value;
  saveState();
  if (!currentQuiz.length) renderQuizIntro();
});

$("#deckSelect").addEventListener("change", (event) => {
  state.selectedDeck = event.target.value;
  currentCardIndex = 0;
  saveState();
  buildCardDeck();
  renderCurrentCard();
});

$("#shuffleCards").addEventListener("click", () => {
  selectedCardIds.sort(() => Math.random() - 0.5);
  currentCardIndex = 0;
  cardFlipped = false;
  renderCurrentCard();
});

$("#studyCard").addEventListener("keydown", (event) => {
  if (event.code === "Space" || event.code === "Enter") {
    event.preventDefault();
    flipCurrentCard();
  }
});

$("#resourceSearch")?.addEventListener("input", (event) => {
  resourceSearchTerm = event.target.value.trim();
  renderResources();
});

$("#exportProgress").addEventListener("click", exportProgress);
$("#resetProgress").addEventListener("click", resetProgress);

renderAll();
