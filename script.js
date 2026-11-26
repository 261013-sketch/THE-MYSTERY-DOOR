function makeSchematicSVG(symbolTag, label, accentColor) {
  return `
    <svg viewBox="0 0 320 200" width="100%" height="100%">
      <rect width="320" height="200" fill="#f1f5f9"/>
      <rect x="24" y="22" width="272" height="130" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="3"/>
      <line x1="40" y1="87" x2="105" y2="87" stroke="#0f172a" stroke-width="4"/>
      <line x1="215" y1="87" x2="280" y2="87" stroke="#0f172a" stroke-width="4"/>
      <rect x="105" y="55" width="110" height="64" rx="8" fill="${accentColor}" stroke="#0f172a" stroke-width="3"/>
      <text x="160" y="93" text-anchor="middle" font-family="Orbitron" font-weight="bold" font-size="16" fill="#ffffff">${symbolTag}</text>
      <circle cx="40" cy="87" r="5" fill="#0f172a"/>
      <circle cx="280" cy="87" r="5" fill="#0f172a"/>
      <text x="160" y="180" text-anchor="middle" font-family="Rajdhani" font-weight="bold" font-size="14" fill="#1e293b">${label}</text>
    </svg>
  `;
}

// =========================================================================
// BANCO DE 30 COMPONENTES (10 EASY, 10 NORMAL, 10 HARD) CON VOCABULARIO CLAVE
// =========================================================================
const componentsBank = {
  easy: [
    {
      tier: "EASY",
      acceptedAnswers: ["resistor", "a resistor", "resistencia"],
      answerEn: "IT'S A RESISTOR!",
      answerEs: "¡ES UNA RESISTENCIA!",
      componentName: "Resistor",
      definition: "A passive two-terminal electrical component that implements electrical resistance to limit current flow and divide voltages.",
      clues: [
        { door: "01", en: "It is the most common passive two-terminal component in almost every electronic circuit.", es: "Es el componente pasivo de dos terminales más común en casi cualquier circuito electrónico.", keywords: [{ en: "Passive", es: "Pasivo" }, { en: "Two-terminal", es: "De dos terminales" }, { en: "Circuit", es: "Circuito" }] },
        { door: "02", en: "Its value is measured in Ohms (Ω) and is identified by painted colored bands on its body.", es: "Su valor se mide en Ohmios (Ω) y se identifica mediante bandas de colores pintadas en su cuerpo.", keywords: [{ en: "Measured", es: "Medido" }, { en: "Ohms", es: "Ohmios" }, { en: "Colored bands", es: "Bandas de colores" }] },
        { door: "03", en: "It obeys Ohm's Law (V = I × R) and converts excess electrical energy into heat.", es: "Obedece la Ley de Ohm (V = I × R) y convierte el exceso de energía eléctrica en calor.", keywords: [{ en: "Ohm's Law", es: "Ley de Ohm" }, { en: "Electrical energy", es: "Energía eléctrica" }, { en: "Heat", es: "Calor" }] },
        { door: "04", en: "Its primary job is to limit electric current so delicate components like LEDs do not burn out.", es: "Su trabajo principal es limitar la corriente eléctrica para que componentes como los LEDs no se quemen.", keywords: [{ en: "Limit", es: "Limitar" }, { en: "Electric current", es: "Corriente eléctrica" }, { en: "Burn out", es: "Quemarse" }] }
      ],
      svgDiagram: makeSchematicSVG("RES 1kΩ", "CURRENT LIMITER (OHM'S LAW)", "#b45309")
    },
    {
      tier: "EASY",
      acceptedAnswers: ["led", "an led", "light emitting diode", "diodo led"],
      answerEn: "IT'S AN LED!",
      answerEs: "¡ES UN LED!",
      componentName: "Light Emitting Diode (LED)",
      definition: "A semiconductor light source that emits visible or infrared light when electric current flows through it in the forward direction.",
      clues: [
        { door: "01", en: "It is a polarized semiconductor light source whose longer leg is the positive Anode.", es: "Es una fuente de luz semiconductora polarizada cuya pata más larga es el Ánodo positivo.", keywords: [{ en: "Polarized", es: "Polarizado" }, { en: "Semiconductor", es: "Semiconductor" }, { en: "Anode", es: "Ánodo" }] },
        { door: "02", en: "It emits photons through electroluminescence when electrons recombine inside its chip.", es: "Emite fotones mediante electroluminiscencia cuando los electrones se recombinan en su chip.", keywords: [{ en: "Photons", es: "Fotones" }, { en: "Electroluminescence", es: "Electroluminiscencia" }, { en: "Electrons", es: "Electrones" }] },
        { door: "03", en: "It always requires a series current-limiting resistor so it does not burn out.", es: "Siempre requiere una resistencia limitadora de corriente en serie para no quemarse.", keywords: [{ en: "Requires", es: "Requiere" }, { en: "Series", es: "En serie" }, { en: "Current-limiting", es: "Limitadora de corriente" }] },
        { door: "04", en: "Available in red, green, blue, and white, it is the classic blinking indicator in electronics.", es: "Disponible en rojo, verde, azul y blanco, es el indicador parpadeante clásico en electrónica.", keywords: [{ en: "Available", es: "Disponible" }, { en: "Blinking", es: "Parpadeante" }, { en: "Indicator", es: "Indicador" }] }
      ],
      svgDiagram: makeSchematicSVG("LED ☼", "LIGHT EMITTING DIODE", "#16a34a")
    },
    {
      tier: "EASY",
      acceptedAnswers: ["push button", "button", "a push button", "boton", "botón", "switch", "tactile switch"],
      answerEn: "IT'S A PUSH BUTTON!",
      answerEs: "¡ES UN BOTÓN PULSADOR!",
      componentName: "Momentary Push Button",
      definition: "A simple mechanical switch mechanism that closes an electrical circuit only while being pressed by a finger.",
      clues: [
        { door: "01", en: "It is a simple tactile mechanical input component with four bent legs and a plastic cap.", es: "Es un componente mecánico de entrada táctil con cuatro patas dobladas y una tapa plástica.", keywords: [{ en: "Tactile", es: "Táctil" }, { en: "Mechanical", es: "Mecánico" }, { en: "Input", es: "Entrada" }] },
        { door: "02", en: "Inside, a small metal dome snaps down to bridge two contacts when pressed.", es: "En su interior, un pequeño domo metálico baja para unir dos contactos cuando se presiona.", keywords: [{ en: "Metal dome", es: "Domo metálico" }, { en: "Bridge", es: "Unir / Puentear" }, { en: "Contacts", es: "Contactos" }] },
        { door: "03", en: "Because it is momentary, an internal spring returns it to the open state as soon as you let go.", es: "Como es momentáneo, un resorte interno lo devuelve al estado abierto en cuanto lo sueltas.", keywords: [{ en: "Momentary", es: "Momentáneo" }, { en: "Internal spring", es: "Resorte interno" }, { en: "Open state", es: "Estado abierto" }] },
        { door: "04", en: "It is used as the Reset button on microcontroller boards and on game controllers.", es: "Se usa como el botón de Reset en placas de microcontroladores y en controles de videojuegos.", keywords: [{ en: "Reset", es: "Reinicio" }, { en: "Boards", es: "Placas" }, { en: "Controllers", es: "Controles" }] }
      ],
      svgDiagram: makeSchematicSVG("BTN [I/O]", "MOMENTARY TACTILE SWITCH", "#059669")
    },
    {
      tier: "EASY",
      acceptedAnswers: ["fuse", "a fuse", "fusible"],
      answerEn: "IT'S A FUSE!",
      answerEs: "¡ES UN FUSIBLE!",
      componentName: "Electrical Fuse",
      definition: "An electrical safety device containing a thin metal wire that melts and breaks the circuit when excessive current flows through it.",
      clues: [
        { door: "01", en: "It is a sacrificial safety component housed inside a small glass tube or colored plastic blade.", es: "Es un componente de seguridad sacrificable alojado dentro de un tubo de vidrio o cápsula plástica.", keywords: [{ en: "Safety", es: "Seguridad" }, { en: "Glass tube", es: "Tubo de vidrio" }, { en: "Housed", es: "Alojado" }] },
        { door: "02", en: "Inside, a calibrated thin metal filament carries the circuit current.", es: "En su interior, un filamento metálico delgado y calibrado transporta la corriente del circuito.", keywords: [{ en: "Calibrated", es: "Calibrado" }, { en: "Thin filament", es: "Filamento delgado" }, { en: "Carries", es: "Transporta" }] },
        { door: "03", en: "If a short circuit or overload occurs, the filament overheats, melts, and opens the circuit.", es: "Si ocurre un cortocircuito o sobrecarga, el filamento se sobrecalienta, se funde y abre el circuito.", keywords: [{ en: "Short circuit", es: "Cortocircuito" }, { en: "Overload", es: "Sobrecarga" }, { en: "Melts", es: "Se funde" }] },
        { door: "04", en: "Once blown, it cannot be reset and must be replaced to protect expensive electronics from fire.", es: "Una vez quemado, no se reinicia y debe reemplazarse para proteger la electrónica contra incendios.", keywords: [{ en: "Blown", es: "Quemado / Fundido" }, { en: "Replaced", es: "Reemplazado" }, { en: "Protect", es: "Proteger" }] }
      ],
      svgDiagram: makeSchematicSVG("FUSE 5A", "OVERCURRENT SAFETY PROTECTOR", "#dc2626")
    },
    {
      tier: "EASY",
      acceptedAnswers: ["buzzer", "a buzzer", "zumbador", "piezo buzzer"],
      answerEn: "IT'S A BUZZER!",
      answerEs: "¡ES UN ZUMBADOR (BUZZER)!",
      componentName: "Piezo Buzzer",
      definition: "An audio signaling device that converts electrical signals into audible beeps, alarms, or simple musical tones.",
      clues: [
        { door: "01", en: "It is a small round black cylinder with a tiny hole on top and two pins underneath.", es: "Es un pequeño cilindro negro redondo con un diminuto orificio arriba y dos pines debajo.", keywords: [{ en: "Cylinder", es: "Cilindro" }, { en: "Tiny hole", es: "Orificio diminuto" }, { en: "Underneath", es: "Debajo" }] },
        { door: "02", en: "Inside, a thin piezoelectric disc vibrates rapidly when voltage is applied.", es: "En su interior, un delgado disco piezoeléctrico vibra rápidamente al aplicarle voltaje.", keywords: [{ en: "Piezoelectric", es: "Piezoeléctrico" }, { en: "Vibrates", es: "Vibra" }, { en: "Voltage", es: "Voltaje" }] },
        { door: "03", en: "Active versions beep automatically with DC power, while passive versions play tones via PWM.", es: "Las versiones activas pitan automáticamente con corriente DC y las pasivas tocan tonos con PWM.", keywords: [{ en: "DC power", es: "Corriente directa" }, { en: "Tones", es: "Tonos" }, { en: "PWM", es: "Modulación por ancho de pulso" }] },
        { door: "04", en: "It produces the audible beep sound in microwave ovens, alarm clocks, and sensor alerts.", es: "Produce el sonido de pitido audible en hornos de microondas, alarmas y alertas de sensores.", keywords: [{ en: "Audible", es: "Audible" }, { en: "Alarm", es: "Alarma" }, { en: "Alerts", es: "Alertas" }] }
      ],
      svgDiagram: makeSchematicSVG("BUZZER ♪", "PIEZOELECTRIC AUDIO SOUNDER", "#9333ea")
    },
    {
      tier: "EASY",
      acceptedAnswers: ["dc motor", "motor", "a dc motor", "motor dc", "electric motor"],
      answerEn: "IT'S A DC MOTOR!",
      answerEs: "¡ES UN MOTOR DE CORRIENTE DIRECTA!",
      componentName: "DC Electric Motor",
      definition: "A rotary electrical machine that converts direct-current electrical energy into continuous mechanical rotational motion.",
      clues: [
        { door: "01", en: "It is an electromechanical actuator with two terminals and a spinning metal output shaft.", es: "Es un actuador electromecánico con dos terminales y un eje metálico giratorio de salida.", keywords: [{ en: "Actuator", es: "Actuador" }, { en: "Spinning", es: "Giratorio" }, { en: "Output shaft", es: "Eje de salida" }] },
        { door: "02", en: "It uses permanent magnets and internal copper windings with brushes and a commutator.", es: "Usa imanes permanentes y bobinas internas de cobre con escobillas y un conmutador.", keywords: [{ en: "Permanent magnets", es: "Imanes permanentes" }, { en: "Copper windings", es: "Bobinas de cobre" }, { en: "Brushes", es: "Escobillas" }] },
        { door: "03", en: "Reversing the positive and negative battery wires makes its shaft spin in the opposite direction.", es: "Invertir los cables positivo y negativo de la batería hace que su eje gire en sentido contrario.", keywords: [{ en: "Reversing", es: "Invertir" }, { en: "Wires", es: "Cables" }, { en: "Opposite direction", es: "Sentido contrario" }] },
        { door: "04", en: "It is the most common actuator used to spin wheels on toy cars and small mobile robots.", es: "Es el actuador más común usado para girar ruedas en autos de juguete y pequeños robots móviles.", keywords: [{ en: "Wheels", es: "Ruedas" }, { en: "Mobile robots", es: "Robots móviles" }, { en: "Motion", es: "Movimiento" }] }
      ],
      svgDiagram: makeSchematicSVG("MOTOR DC", "CONTINUOUS ROTARY ACTUATOR", "#ea580c")
    },
    {
      tier: "EASY",
      acceptedAnswers: ["diode", "a diode", "diodo", "rectifier diode"],
      answerEn: "IT'S A DIODE!",
      answerEs: "¡ES UN DIODO!",
      componentName: "Rectifier Diode",
      definition: "A two-terminal semiconductor component that conducts electric current primarily in one direction while blocking it in the opposite direction.",
      clues: [
        { door: "01", en: "It is a two-terminal semiconductor component with an Anode and a Cathode.", es: "Es un componente semiconductor de dos terminales con un Ánodo y un Cátodo.", keywords: [{ en: "Semiconductor", es: "Semiconductor" }, { en: "Anode", es: "Ánodo" }, { en: "Cathode", es: "Cátodo" }] },
        { door: "02", en: "A painted silver or white band on its body marks the negative Cathode terminal.", es: "Una banda plateada o blanca pintada en su cuerpo marca la terminal negativa (Cátodo).", keywords: [{ en: "Silver band", es: "Banda plateada" }, { en: "Negative", es: "Negativo" }, { en: "Terminal", es: "Terminal" }] },
        { door: "03", en: "It acts like a one-way check valve for electricity, allowing current to flow in only one direction.", es: "Actúa como una válvula antirretorno para la electricidad, permitiendo corriente en un solo sentido.", keywords: [{ en: "One-way", es: "Un solo sentido" }, { en: "Check valve", es: "Válvula antirretorno" }, { en: "Flow", es: "Fluir" }] },
        { door: "04", en: "Four of them arranged in a bridge are used to convert AC electricity into DC.", es: "Cuatro de ellos dispuestos en puente se usan para convertir electricidad AC en corriente directa.", keywords: [{ en: "Bridge", es: "Puente" }, { en: "Convert", es: "Convertir" }, { en: "Rectifier", es: "Rectificador" }] }
      ],
      svgDiagram: makeSchematicSVG("DIODE ->|", "ONE-WAY CURRENT VALVE", "#4f46e5")
    },
    {
      tier: "EASY",
      acceptedAnswers: ["capacitor", "a capacitor", "condensador"],
      answerEn: "IT'S A CAPACITOR!",
      answerEs: "¡ES UN CAPACITOR!",
      componentName: "Capacitor",
      definition: "A passive two-terminal component that stores electrical energy in an electrostatic field between two conductive plates separated by a dielectric.",
      clues: [
        { door: "01", en: "It consists of two conductive plates separated by an insulating material called a dielectric.", es: "Consiste en dos placas conductoras separadas por un material aislante llamado dieléctrico.", keywords: [{ en: "Conductive plates", es: "Placas conductoras" }, { en: "Insulating", es: "Aislante" }, { en: "Dielectric", es: "Dieléctrico" }] },
        { door: "02", en: "Its electrical storage capacity is measured in Farads (usually microfarads or picofarads).", es: "Su capacidad de almacenamiento eléctrico se mide en Faradios (usualmente microfaradios o picofaradios).", keywords: [{ en: "Storage", es: "Almacenamiento" }, { en: "Farads", es: "Faradios" }, { en: "Microfarads", es: "Microfaradios" }] },
        { door: "03", en: "Electrolytic types look like tiny cylinders and have a stripe marking their negative polarity leg.", es: "Los tipos electrolíticos parecen pequeños cilindros y tienen una franja marcando su pata negativa.", keywords: [{ en: "Electrolytic", es: "Electrolítico" }, { en: "Stripe", es: "Franja" }, { en: "Polarity", es: "Polaridad" }] },
        { door: "04", en: "It charges and discharges rapidly to smooth out voltage ripples in power supplies.", es: "Se carga y descarga rápidamente para suavizar las variaciones de voltaje en fuentes de poder.", keywords: [{ en: "Charges", es: "Carga" }, { en: "Discharges", es: "Descarga" }, { en: "Power supplies", es: "Fuentes de poder" }] }
      ],
      svgDiagram: makeSchematicSVG("CAP μF", "ELECTROSTATIC CHARGE STORAGE", "#0891b2")
    },
    {
      tier: "EASY",
      acceptedAnswers: ["breadboard", "a breadboard", "protoboard", "solderless breadboard"],
      answerEn: "IT'S A BREADBOARD!",
      answerEs: "¡ES UNA PROTOBOARD!",
      componentName: "Solderless Breadboard",
      definition: "A reusable rectangular plastic board with interconnected metal spring clips used to build and test electronic prototypes without soldering.",
      clues: [
        { door: "01", en: "It is a white rectangular plastic board covered with a grid of tiny pinhole sockets.", es: "Es una placa rectangular de plástico blanco cubierta con una cuadrícula de pequeños orificios.", keywords: [{ en: "Rectangular", es: "Rectangular" }, { en: "Grid", es: "Cuadrícula" }, { en: "Sockets", es: "Orificios / Conectores" }] },
        { door: "02", en: "Hidden spring-loaded metal strips underneath connect rows of holes electrically.", es: "Tiras metálicas ocultas debajo conectan eléctricamente las filas de orificios.", keywords: [{ en: "Metal strips", es: "Tiras metálicas" }, { en: "Rows", es: "Filas" }, { en: "Connect", es: "Conectar" }] },
        { door: "03", en: "It has red and blue power rails running along the outer edges for VCC and Ground.", es: "Tiene rieles de alimentación rojo y azul en los bordes exteriores para VCC y Tierra.", keywords: [{ en: "Power rails", es: "Rieles de alimentación" }, { en: "Ground", es: "Tierra (GND)" }, { en: "Edges", es: "Bordes" }] },
        { door: "04", en: "Students use it with jumper wires to build and test circuits quickly without using a soldering iron.", es: "Los estudiantes la usan con cables jumper para armar y probar circuitos rápido sin soldar.", keywords: [{ en: "Jumper wires", es: "Cables puente" }, { en: "Prototypes", es: "Prototipos" }, { en: "Soldering iron", es: "Cautín" }] }
      ],
      svgDiagram: makeSchematicSVG("PROTO-BRD", "SOLDERLESS PROTOTYPING BOARD", "#0284c7")
    },
    {
      tier: "EASY",
      acceptedAnswers: ["microcontroller", "a microcontroller", "microcontrolador", "mcu", "arduino"],
      answerEn: "IT'S A MICROCONTROLLER!",
      answerEs: "¡ES UN MICROCONTROLADOR!",
      componentName: "Microcontroller (MCU)",
      definition: "A compact integrated circuit containing a processor core, memory, and programmable input/output peripherals on a single chip.",
      clues: [
        { door: "01", en: "It is a complete small computer integrated onto a single semiconductor chip.", es: "Es una pequeña computadora completa integrada en un solo chip semiconductor.", keywords: [{ en: "Integrated", es: "Integrado" }, { en: "Single chip", es: "Un solo chip" }, { en: "Computer", es: "Computadora" }] },
        { door: "02", en: "It contains a CPU core, RAM, Flash program memory, and digital/analog I/O pins.", es: "Contiene un núcleo CPU, memoria RAM, memoria Flash de programa y pines de entrada/salida.", keywords: [{ en: "Processor core", es: "Núcleo procesador" }, { en: "Memory", es: "Memoria" }, { en: "I/O pins", es: "Pines de entrada/salida" }] },
        { door: "03", en: "Engineers program it in C or C++ to read sensors and control motors automatically.", es: "Los ingenieros lo programan en C o C++ para leer sensores y controlar motores automáticamente.", keywords: [{ en: "Program", es: "Programar" }, { en: "Sensors", es: "Sensores" }, { en: "Automatically", es: "Automáticamente" }] },
        { door: "04", en: "Chips like the ATmega328P or ESP32 serve as the programmable brain of Arduino boards.", es: "Chips como el ATmega328P o ESP32 sirven como el cerebro programable de las placas Arduino.", keywords: [{ en: "Programmable", es: "Programable" }, { en: "Brain", es: "Cerebro" }, { en: "Embedded", es: "Embebido" }] }
      ],
      svgDiagram: makeSchematicSVG("MCU CPU", "PROGRAMMABLE EMBEDDED BRAIN", "#1d4ed8")
    }
  ],

  normal: [
    {
      tier: "NORMAL",
      acceptedAnswers: ["voltage regulator", "regulator", "a voltage regulator", "regulador de voltaje", "lm7805", "7805"],
      answerEn: "IT'S A VOLTAGE REGULATOR!",
      answerEs: "¡ES UN REGULADOR DE VOLTAJE!",
      componentName: "Voltage Regulator",
      definition: "An integrated circuit designed to automatically maintain a constant output voltage level regardless of changes in input voltage or load current.",
      clues: [
        { door: "01", en: "It is a three-pin integrated circuit with Input, Ground, and Output terminals, often with a metal heatsink tab.", es: "Es un circuito integrado de tres pines con Entrada, Tierra y Salida, a menudo con aleta disipadora.", keywords: [{ en: "Integrated circuit", es: "Circuito integrado" }, { en: "Output", es: "Salida" }, { en: "Heatsink", es: "Disipador de calor" }] },
        { door: "02", en: "Its job is to deliver a clean, constant DC voltage even if the battery voltage fluctuates.", es: "Su trabajo es entregar un voltaje DC limpio y constante aunque el voltaje de la batería fluctúe.", keywords: [{ en: "Constant", es: "Constante" }, { en: "Deliver", es: "Entregar" }, { en: "Fluctuates", es: "Fluctúa" }] },
        { door: "03", en: "Linear versions dissipate excess input voltage as heat, so they often require an aluminum heatsink.", es: "Las versiones lineales disipan el exceso de voltaje como calor, por lo que suelen requerir disipador.", keywords: [{ en: "Dissipate", es: "Disipar" }, { en: "Excess voltage", es: "Exceso de voltaje" }, { en: "Aluminum", es: "Aluminio" }] },
        { door: "04", en: "Famous chips like the LM7805 convert an unregulated 9V or 12V supply into a steady 5V output.", es: "Chips famosos como el LM7805 convierten una fuente de 9V o 12V en una salida estable de 5V.", keywords: [{ en: "Unregulated", es: "No regulado" }, { en: "Steady", es: "Estable" }, { en: "Supply", es: "Fuente" }] }
      ],
      svgDiagram: makeSchematicSVG("REG 5.0V", "CONSTANT DC OUTPUT STABILIZER", "#0f766e")
    },
    {
      tier: "NORMAL",
      acceptedAnswers: ["transformer", "a transformer", "transformador"],
      answerEn: "IT'S A TRANSFORMER!",
      answerEs: "¡ES UN TRANSFORMADOR!",
      componentName: "Electrical Transformer",
      definition: "A passive device that transfers alternating-current electrical energy between two or more windings through electromagnetic induction to step voltage up or down.",
      clues: [
        { door: "01", en: "It consists of primary and secondary copper windings wrapped around a laminated iron core.", es: "Consiste en devanados primario y secundario de cobre enrollados alrededor de un núcleo de hierro laminado.", keywords: [{ en: "Windings", es: "Devanados / Bobinas" }, { en: "Iron core", es: "Núcleo de hierro" }, { en: "Wrapped", es: "Enrollado" }] },
        { door: "02", en: "It works strictly with Alternating Current (AC) and will not transfer steady DC voltage.", es: "Funciona estrictamente con Corriente Alterna (AC) y no transfiere voltaje continuo estable.", keywords: [{ en: "Alternating Current", es: "Corriente Alterna" }, { en: "Strictly", es: "Estrictamente" }, { en: "Transfer", es: "Transferir" }] },
        { door: "03", en: "The ratio of turns between its two coils determines whether it steps voltage up or down.", es: "La relación de vueltas entre sus dos bobinas determina si eleva o reduce el voltaje.", keywords: [{ en: "Ratio of turns", es: "Relación de vueltas" }, { en: "Step up", es: "Elevar" }, { en: "Step down", es: "Reducir" }] },
        { door: "04", en: "It steps down 120V/220V wall mains electricity to safer low voltages like 12V or 24V AC.", es: "Reduce la electricidad de 120V/220V de la pared a voltajes bajos más seguros como 12V o 24V AC.", keywords: [{ en: "Mains electricity", es: "Red eléctrica" }, { en: "Induction", es: "Inducción" }, { en: "Low voltage", es: "Bajo voltaje" }] }
      ],
      svgDiagram: makeSchematicSVG("AC N1:N2", "ELECTROMAGNETIC VOLTAGE STEP", "#475569")
    },
    {
      tier: "NORMAL",
      acceptedAnswers: ["inductor", "coil", "an inductor", "bobina", "choke"],
      answerEn: "IT'S AN INDUCTOR!",
      answerEs: "¡ES UN INDUCTOR (BOBINA)!",
      componentName: "Inductor / Coil",
      definition: "A passive two-terminal component that stores energy in a magnetic field when electric current flows through it, resisting sudden changes in current.",
      clues: [
        { door: "01", en: "It is a passive two-terminal component formed by winding insulated copper wire into a coil.", es: "Es un componente pasivo de dos terminales formado al enrollar alambre de cobre aislado en espiral.", keywords: [{ en: "Coil", es: "Bobina" }, { en: "Insulated wire", es: "Alambre aislado" }, { en: "Copper", es: "Cobre" }] },
        { door: "02", en: "Its value is measured in Henries (H) and it often uses a ferrite or iron core.", es: "Su valor se mide en Henrios (H) y a menudo utiliza un núcleo de ferrita o hierro.", keywords: [{ en: "Henries", es: "Henrios" }, { en: "Ferrite core", es: "Núcleo de ferrita" }, { en: "Value", es: "Valor" }] },
        { door: "03", en: "It stores energy in a magnetic field and opposes sudden changes in electric current.", es: "Almacena energía en un campo magnético y se opone a los cambios bruscos en la corriente eléctrica.", keywords: [{ en: "Magnetic field", es: "Campo magnético" }, { en: "Opposes", es: "Se opone" }, { en: "Sudden changes", es: "Cambios bruscos" }] },
        { door: "04", en: "It is an essential component in buck/boost DC-DC voltage converters and radio frequency filters.", es: "Es un componente esencial en convertidores de voltaje DC-DC y filtros de radiofrecuencia.", keywords: [{ en: "Converters", es: "Convertidores" }, { en: "Filters", es: "Filtros" }, { en: "Frequency", es: "Frecuencia" }] }
      ],
      svgDiagram: makeSchematicSVG("COIL mH", "MAGNETIC ENERGY STORAGE", "#b45309")
    },
    {
      tier: "NORMAL",
      acceptedAnswers: ["photoresistor", "ldr", "a photoresistor", "fotorresistencia", "light dependent resistor"],
      answerEn: "IT'S A PHOTORESISTOR (LDR)!",
      answerEs: "¡ES UNA FOTORRESISTENCIA (LDR)!",
      componentName: "Photoresistor (LDR)",
      definition: "A passive electronic component whose resistance decreases as the intensity of incident light increases.",
      clues: [
        { door: "01", en: "It is a two-terminal passive component with a wavy red or orange cadmium-sulfide track on top.", es: "Es un componente pasivo de dos terminales con una pista ondulada rojiza o naranja en la parte superior.", keywords: [{ en: "Wavy track", es: "Pista ondulada" }, { en: "Surface", es: "Superficie" }, { en: "Passive", es: "Pasivo" }] },
        { door: "02", en: "It exhibits photoconductivity, changing its electrical resistance based on optical illumination.", es: "Presenta fotoconductividad, cambiando su resistencia eléctrica según la iluminación óptica.", keywords: [{ en: "Photoconductivity", es: "Fotoconductividad" }, { en: "Resistance", es: "Resistencia" }, { en: "Illumination", es: "Iluminación" }] },
        { door: "03", en: "In complete darkness its resistance can exceed 1 MΩ, while in bright sunlight it drops to a few hundred ohms.", es: "En oscuridad total su resistencia supera 1 MΩ, mientras que bajo luz brillante baja a cientos de ohmios.", keywords: [{ en: "Darkness", es: "Oscuridad" }, { en: "Sunlight", es: "Luz solar" }, { en: "Drops", es: "Disminuye / Baja" }] },
        { door: "04", en: "It is used in automatic street lamps that turn on at dusk and in line-following robots.", es: "Se usa en lámparas de calle automáticas que encienden al anochecer y en robots seguidores de línea.", keywords: [{ en: "Street lamps", es: "Lámparas de calle" }, { en: "Light sensor", es: "Sensor de luz" }, { en: "Line-following", es: "Seguidor de línea" }] }
      ],
      svgDiagram: makeSchematicSVG("LDR LUX", "LIGHT-DEPENDENT RESISTOR", "#eab308")
    },
    {
      tier: "NORMAL",
      acceptedAnswers: ["thermistor", "a thermistor", "termistor", "ntc thermistor", "ntc"],
      answerEn: "IT'S A THERMISTOR!",
      answerEs: "¡ES UN TERMISTOR!",
      componentName: "Thermistor (Temperature Sensor)",
      definition: "A thermally sensitive resistor whose electrical resistance changes predictably and significantly with temperature.",
      clues: [
        { door: "01", en: "Its name is a portmanteau combining the words 'thermal' and 'resistor'.", es: "Su nombre es una combinación de las palabras 'térmico' y 'resistor'.", keywords: [{ en: "Thermal", es: "Térmico" }, { en: "Resistor", es: "Resistor" }, { en: "Combining", es: "Combinando" }] },
        { door: "02", en: "It is a two-terminal passive semiconductor sensor whose resistance varies sharply with heat.", es: "Es un sensor semiconductor pasivo de dos terminales cuya resistencia varía drásticamente con el calor.", keywords: [{ en: "Sensor", es: "Sensor" }, { en: "Varies", es: "Varía" }, { en: "Heat", es: "Calor" }] },
        { door: "03", en: "In NTC types, electrical resistance decreases as the surrounding temperature increases.", es: "En los tipos NTC, la resistencia eléctrica disminuye conforme aumenta la temperatura ambiente.", keywords: [{ en: "Decreases", es: "Disminuye" }, { en: "Temperature", es: "Temperatura" }, { en: "Increases", es: "Aumenta" }] },
        { door: "04", en: "It is mounted inside 3D printer hotends and battery packs to monitor and prevent overheating.", es: "Se monta dentro de extrusores de impresoras 3D y baterías para monitorear y evitar sobrecalentamiento.", keywords: [{ en: "Monitor", es: "Monitorear" }, { en: "Overheating", es: "Sobrecalentamiento" }, { en: "Battery packs", es: "Paquetes de baterías" }] }
      ],
      svgDiagram: makeSchematicSVG("NTC TEMP", "THERMALLY SENSITIVE RESISTOR", "#e11d48")
    },
    {
      tier: "NORMAL",
      acceptedAnswers: ["ultrasonic sensor", "ultrasonic", "hc-sr04", "an ultrasonic sensor", "sensor ultrasonico", "sensor ultrasónico"],
      answerEn: "IT'S AN ULTRASONIC SENSOR!",
      answerEs: "¡ES UN SENSOR ULTRASÓNICO!",
      componentName: "Ultrasonic Distance Sensor",
      definition: "A contactless sensor that measures distance to an object by emitting high-frequency sound waves and timing the returning echo.",
      clues: [
        { door: "01", en: "It looks like a pair of metallic eyes labeled Trigger and Echo on a small blue PCB.", es: "Parece un par de ojos metálicos etiquetados Trigger y Echo sobre una pequeña placa azul.", keywords: [{ en: "Trigger", es: "Disparador" }, { en: "Echo", es: "Eco" }, { en: "PCB", es: "Placa de circuito impreso" }] },
        { door: "02", en: "It emits high-frequency acoustic pulses above the range of human hearing (around 40 kHz).", es: "Emite pulsos acústicos de alta frecuencia por encima del oído humano (alrededor de 40 kHz).", keywords: [{ en: "Acoustic pulses", es: "Pulsos acústicos" }, { en: "High-frequency", es: "Alta frecuencia" }, { en: "Emits", es: "Emite" }] },
        { door: "03", en: "It calculates distance using the speed of sound and the time-of-flight of the reflected wave.", es: "Calcula la distancia usando la velocidad del sonido y el tiempo de vuelo de la onda reflejada.", keywords: [{ en: "Distance", es: "Distancia" }, { en: "Speed of sound", es: "Velocidad del sonido" }, { en: "Reflected wave", es: "Onda reflejada" }] },
        { door: "04", en: "The HC-SR04 module is a classic sensor used on mobile robots to avoid crashing into walls.", es: "El módulo HC-SR04 es un sensor clásico usado en robots móviles para evitar chocar contra paredes.", keywords: [{ en: "Contactless", es: "Sin contacto" }, { en: "Obstacles", es: "Obstáculos" }, { en: "Range", es: "Rango / Alcance" }] }
      ],
      svgDiagram: makeSchematicSVG("SONAR 40kHz", "ACOUSTIC TIME-OF-FLIGHT SENSOR", "#0284c7")
    },
    {
      tier: "NORMAL",
      acceptedAnswers: ["servo motor", "servo", "a servo motor", "servomotor", "a servo"],
      answerEn: "IT'S A SERVO MOTOR!",
      answerEs: "¡ES UN SERVOMOTOR!",
      componentName: "Servo Motor",
      definition: "A closed-loop rotary actuator combining a DC motor, reduction gears, a potentiometer, and control circuitry to hold a precise angle.",
      clues: [
        { door: "01", en: "It is a compact rotary actuator that integrates a motor, a gearbox, and feedback electronics.", es: "Es un actuador rotatorio compacto que integra un motor, caja de engranes y electrónica de control.", keywords: [{ en: "Rotary actuator", es: "Actuador rotatorio" }, { en: "Gearbox", es: "Caja de engranes" }, { en: "Feedback", es: "Retroalimentación" }] },
        { door: "02", en: "It has a three-wire cable: Power, Ground, and a PWM control signal wire.", es: "Tiene un cable de tres hilos: Alimentación, Tierra y un cable de señal de control PWM.", keywords: [{ en: "Three-wire", es: "De tres cables" }, { en: "Control signal", es: "Señal de control" }, { en: "Power", es: "Alimentación" }] },
        { door: "03", en: "Standard hobby versions rotate accurately to any commanded angle between 0 and 180 degrees.", es: "Las versiones estándar giran con precisión a cualquier ángulo ordenado entre 0 y 180 grados.", keywords: [{ en: "Accurately", es: "Con precisión" }, { en: "Angle", es: "Ángulo" }, { en: "Degrees", es: "Grados" }] },
        { door: "04", en: "Models like the SG90 are widely used in robotic grippers, pan-tilt cameras, and RC airplanes.", es: "Modelos como el SG90 se usan mucho en pinzas robóticas, cámaras y aviones a radio control.", keywords: [{ en: "Robotic grippers", es: "Pinzas robóticas" }, { en: "Closed-loop", es: "Lazo cerrado" }, { en: "Position", es: "Posición" }] }
      ],
      svgDiagram: makeSchematicSVG("SERVO PWM", "CLOSED-LOOP ANGULAR ACTUATOR", "#7c3aed")
    },
    {
      tier: "NORMAL",
      acceptedAnswers: ["potentiometer", "a potentiometer", "potenciometro", "potenciómetro", "pot"],
      answerEn: "IT'S A POTENTIOMETER!",
      answerEs: "¡ES UN POTENCIÓMETRO!",
      componentName: "Potentiometer",
      definition: "A three-terminal passive resistor with a sliding or rotating contact that forms an adjustable voltage divider.",
      clues: [
        { door: "01", en: "It is a passive component with three terminals and a manually adjustable shaft or slider.", es: "Es un componente pasivo con tres terminales y un eje o deslizador ajustable manualmente.", keywords: [{ en: "Three terminals", es: "Tres terminales" }, { en: "Adjustable", es: "Ajustable" }, { en: "Shaft", es: "Eje" }] },
        { door: "02", en: "Its main function in analog circuits is to act as a variable voltage divider.", es: "Su función principal en circuitos analógicos es actuar como un divisor de voltaje variable.", keywords: [{ en: "Analog circuits", es: "Circuitos analógicos" }, { en: "Voltage divider", es: "Divisor de voltaje" }, { en: "Variable", es: "Variable" }] },
        { door: "03", en: "Rotating its wiper moves the contact along an internal resistive track.", es: "Girar su cursor mueve el contacto a lo largo de una pista resistiva interna.", keywords: [{ en: "Wiper", es: "Cursor / Escobilla" }, { en: "Resistive track", es: "Pista resistiva" }, { en: "Rotating", es: "Girando" }] },
        { door: "04", en: "You turn its knob to adjust audio volume or read joystick angles on an analog pin.", es: "Giras su perilla para ajustar el volumen de audio o leer ángulos de joystick en un pin analógico.", keywords: [{ en: "Knob", es: "Perilla" }, { en: "Analog pin", es: "Pin analógico" }, { en: "Joystick", es: "Palanca de mando" }] }
      ],
      svgDiagram: makeSchematicSVG("POT 10kΩ", "VARIABLE VOLTAGE DIVIDER", "#d97706")
    },
    {
      tier: "NORMAL",
      acceptedAnswers: ["relay", "a relay", "relevador", "rele", "relé"],
      answerEn: "IT'S A RELAY!",
      answerEs: "¡ES UN RELEVADOR (RELÉ)!",
      componentName: "Electromechanical Relay",
      definition: "An electrically operated switch that uses an internal electromagnet to mechanically open or close high-power AC/DC contacts.",
      clues: [
        { door: "01", en: "It is an electrically operated switch that makes a distinct clicking sound when activated.", es: "Es un interruptor operado eléctricamente que hace un sonido de clic característico al activarse.", keywords: [{ en: "Switch", es: "Interruptor" }, { en: "Electrically operated", es: "Operado eléctricamente" }, { en: "Activated", es: "Activado" }] },
        { door: "02", en: "Inside its plastic box, an internal electromagnet pulls a metal armature to close contacts.", es: "Dentro de su caja plástica, un electroimán interno atrae una armadura metálica para cerrar contactos.", keywords: [{ en: "Electromagnet", es: "Electroimán" }, { en: "Armature", es: "Armadura" }, { en: "Close contacts", es: "Cerrar contactos" }] },
        { door: "03", en: "Its contacts are typically labeled COM (Common), NO (Normally Open), and NC (Normally Closed).", es: "Sus contactos suelen etiquetarse como COM (Común), NO (Normalmente Abierto) y NC (Normalmente Cerrado).", keywords: [{ en: "Common", es: "Común" }, { en: "Normally Open", es: "Normalmente Abierto" }, { en: "Normally Closed", es: "Normalmente Cerrado" }] },
        { door: "04", en: "It allows a 5V Arduino pin to safely turn on a 120V AC household lamp or water pump.", es: "Permite que un pin de 5V de Arduino encienda de forma segura una lámpara de 120V AC o bomba.", keywords: [{ en: "High-power", es: "Alta potencia" }, { en: "Safely", es: "De forma segura" }, { en: "Water pump", es: "Bomba de agua" }] }
      ],
      svgDiagram: makeSchematicSVG("RELAY NO/NC", "ELECTROMECHANICAL POWER SWITCH", "#059669")
    },
    {
      tier: "NORMAL",
      acceptedAnswers: ["transistor", "bjt", "a transistor", "bjt transistor", "npn transistor"],
      answerEn: "IT'S A TRANSISTOR (BJT)!",
      answerEs: "¡ES UN TRANSISTOR (BJT)!",
      componentName: "Bipolar Junction Transistor (BJT)",
      definition: "A three-terminal semiconductor device (Base, Collector, Emitter) used to amplify weak electronic signals or act as a fast solid-state switch.",
      clues: [
        { door: "01", en: "It is a fundamental three-layer semiconductor device available in NPN and PNP polarities.", es: "Es un dispositivo semiconductor fundamental de tres capas disponible en polaridades NPN y PNP.", keywords: [{ en: "Three-layer", es: "De tres capas" }, { en: "Semiconductor", es: "Semiconductor" }, { en: "Polarities", es: "Polaridades" }] },
        { door: "02", en: "Its three terminals are named Base, Collector, and Emitter.", es: "Sus tres terminales se llaman Base, Colector y Emisor.", keywords: [{ en: "Base", es: "Base" }, { en: "Collector", es: "Colector" }, { en: "Emitter", es: "Emisor" }] },
        { door: "03", en: "A small current entering its middle terminal controls a much larger current between the other two.", es: "Una pequeña corriente en su terminal central controla una corriente mucho mayor entre las otras dos.", keywords: [{ en: "Small current", es: "Pequeña corriente" }, { en: "Controls", es: "Controla" }, { en: "Larger current", es: "Corriente mayor" }] },
        { door: "04", en: "Common models like the 2N2222 are used both as signal amplifiers and electronic switches.", es: "Modelos comunes como el 2N2222 se usan tanto como amplificadores de señal como interruptores.", keywords: [{ en: "Amplifiers", es: "Amplificadores" }, { en: "Solid-state", es: "Estado sólido" }, { en: "Signals", es: "Señales" }] }
      ],
      svgDiagram: makeSchematicSVG("BJT NPN", "CURRENT-CONTROLLED AMPLIFIER", "#2563eb")
    }
  ],

  hard: [
    {
      tier: "HARD",
      acceptedAnswers: ["solenoid", "a solenoid", "solenoide", "electromagnetic solenoid"],
      answerEn: "IT'S A SOLENOID!",
      answerEs: "¡ES UN SOLENOIDE!",
      componentName: "Solenoid Actuator",
      definition: "A cylindrical coil of wire acting as a magnet when carrying electric current, converting electrical energy directly into controlled linear mechanical motion.",
      clues: [
        { door: "01", en: "It consists of a tightly wound helical coil of wire around a hollow core.", es: "Consiste en una bobina helicoidal de alambre enrollada alrededor de un núcleo hueco.", keywords: [{ en: "Helical coil", es: "Bobina helicoidal" }, { en: "Hollow core", es: "Núcleo hueco" }, { en: "Wound", es: "Enrollada" }] },
        { door: "02", en: "It converts electrical energy directly into mechanical work via electromagnetism.", es: "Convierte la energía eléctrica directamente en trabajo mecánico mediante electromagnetismo.", keywords: [{ en: "Mechanical work", es: "Trabajo mecánico" }, { en: "Electromagnetism", es: "Electromagnetismo" }, { en: "Converts", es: "Convierte" }] },
        { door: "03", en: "Unlike a standard motor, its output motion is strictly linear, not rotational.", es: "A diferencia de un motor estándar, su movimiento de salida es estrictamente lineal, no rotacional.", keywords: [{ en: "Linear motion", es: "Movimiento lineal" }, { en: "Rotational", es: "Rotacional" }, { en: "Strictly", es: "Estrictamente" }] },
        { door: "04", en: "It pulls or pushes a ferromagnetic plunger to act as an electronic door lock or fluid valve.", es: "Jala o empuja un émbolo ferromagnético para actuar como cerradura eléctrica o válvula de fluidos.", keywords: [{ en: "Ferromagnetic", es: "Ferromagnético" }, { en: "Plunger", es: "Émbolo" }, { en: "Valve", es: "Válvula" }] }
      ],
      svgDiagram: makeSchematicSVG("SOLENOID", "LINEAR ELECTROMAGNETIC PLUNGER", "#ea580c")
    },
    {
      tier: "HARD",
      acceptedAnswers: ["strain gauge", "strain gage", "a strain gauge", "galga extensiometrica", "galga extensiométrica"],
      answerEn: "IT'S A STRAIN GAUGE!",
      answerEs: "¡ES UNA GALGA EXTENSIOMÉTRICA!",
      componentName: "Strain Gauge",
      definition: "A foil sensor whose electrical resistance varies proportionally with tiny mechanical deformation, typically wired in a Wheatstone bridge inside load cells.",
      clues: [
        { door: "01", en: "It consists of a thin insulating backing supporting a zig-zag metallic foil pattern.", es: "Consiste en un respaldo aislante delgado que soporta un patrón metálico en forma de zig-zag.", keywords: [{ en: "Backing", es: "Respaldo" }, { en: "Metallic foil", es: "Lámina metálica" }, { en: "Pattern", es: "Patrón" }] },
        { door: "02", en: "It must be bonded directly onto the surface of a mechanical structure using special adhesive.", es: "Debe pegarse directamente sobre la superficie de una estructura mecánica usando adhesivo especial.", keywords: [{ en: "Bonded", es: "Adherido / Pegado" }, { en: "Surface", es: "Superficie" }, { en: "Structure", es: "Estructura" }] },
        { door: "03", en: "When stretched or compressed, its conductor geometry changes, causing a tiny shift in resistance.", es: "Al estirarse o comprimirse, cambia la geometría de su conductor, causando una ligera variación de resistencia.", keywords: [{ en: "Stretched", es: "Estirado" }, { en: "Compressed", es: "Comprimido" }, { en: "Deformation", es: "Deformación" }] },
        { door: "04", en: "Four of them are wired in a Wheatstone bridge inside digital scales and robotic force load cells.", es: "Se conectan cuatro en puente de Wheatstone dentro de básculas digitales y celdas de carga robóticas.", keywords: [{ en: "Wheatstone bridge", es: "Puente de Wheatstone" }, { en: "Load cells", es: "Celdas de carga" }, { en: "Force", es: "Fuerza" }] }
      ],
      svgDiagram: makeSchematicSVG("STRAIN ΔR", "MECHANICAL DEFORMATION SENSOR", "#be123c")
    },
    {
      tier: "HARD",
      acceptedAnswers: ["crystal oscillator", "quartz crystal", "crystal", "oscilador de cristal", "a crystal oscillator"],
      answerEn: "IT'S A CRYSTAL OSCILLATOR!",
      answerEs: "¡ES UN OSCILADOR DE CRISTAL!",
      componentName: "Crystal Oscillator",
      definition: "An electronic resonator that uses the mechanical resonance of a vibrating piezoelectric quartz crystal to create an electrical signal with a very precise frequency.",
      clues: [
        { door: "01", en: "It is a passive frequency-determining component housed in a small metallic can with two pins.", es: "Es un componente pasivo determinante de frecuencia alojado en una cápsula metálica de dos pines.", keywords: [{ en: "Frequency", es: "Frecuencia" }, { en: "Metallic can", es: "Cápsula metálica" }, { en: "Resonator", es: "Resonador" }] },
        { door: "02", en: "It operates on the inverse piezoelectric effect, vibrating mechanically when an AC voltage is applied.", es: "Opera bajo el efecto piezoeléctrico inverso, vibrando mecánicamente al aplicarle voltaje alterno.", keywords: [{ en: "Piezoelectric effect", es: "Efecto piezoeléctrico" }, { en: "Vibrating", es: "Vibrando" }, { en: "Quartz", es: "Cuarzo" }] },
        { door: "03", en: "It provides vastly higher frequency stability than RC or LC timing circuits.", es: "Proporciona una estabilidad de frecuencia muchísimo mayor que los circuitos temporizadores RC o LC.", keywords: [{ en: "Stability", es: "Estabilidad" }, { en: "Timing circuits", es: "Circuitos temporizadores" }, { en: "Precision", es: "Precisión" }] },
        { door: "04", en: "Rated at values like 16 MHz or 32.768 kHz, it acts as the precision heartbeat clock of microcontrollers.", es: "Con valores como 16 MHz o 32.768 kHz, actúa como el reloj de precisión de los microcontroladores.", keywords: [{ en: "Megahertz", es: "Megahercios" }, { en: "Heartbeat", es: "Latido / Pulso" }, { en: "Clock", es: "Reloj" }] }
      ],
      svgDiagram: makeSchematicSVG("XTAL MHz", "PIEZOELECTRIC CLOCK RESONATOR", "#0891b2")
    },
    {
      tier: "HARD",
      acceptedAnswers: ["zener diode", "a zener diode", "diodo zener", "zener"],
      answerEn: "IT'S A ZENER DIODE!",
      answerEs: "¡ES UN DIODO ZENER!",
      componentName: "Zener Diode",
      definition: "A special semiconductor diode designed to reliably allow current to flow backward when a specific reverse breakdown voltage is reached.",
      clues: [
        { door: "01", en: "It is a heavily doped semiconductor junction device with a bent cathode bar in its symbol.", es: "Es un dispositivo semiconductor fuertemente dopado con una barra de cátodo doblada en su símbolo.", keywords: [{ en: "Heavily doped", es: "Fuertemente dopado" }, { en: "Junction", es: "Unión" }, { en: "Cathode", es: "Cátodo" }] },
        { door: "02", en: "Unlike standard rectifiers, it is intentionally operated in the reverse-bias breakdown region.", es: "A diferencia de los rectificadores comunes, se opera intencionalmente en polarización inversa.", keywords: [{ en: "Reverse-bias", es: "Polarización inversa" }, { en: "Breakdown", es: "Ruptura" }, { en: "Intentionally", es: "Intencionalmente" }] },
        { door: "03", en: "Once its specific breakdown threshold is reached, it maintains an almost constant voltage across itself.", es: "Al alcanzar su umbral de ruptura específico, mantiene un voltaje casi constante entre sus terminales.", keywords: [{ en: "Threshold", es: "Umbral" }, { en: "Maintains", es: "Mantiene" }, { en: "Constant voltage", es: "Voltaje constante" }] },
        { door: "04", en: "It is widely used as a simple shunt voltage reference and over-voltage clamping protector.", es: "Se usa ampliamente como referencia simple de voltaje y protección contra sobretensiones.", keywords: [{ en: "Voltage reference", es: "Referencia de voltaje" }, { en: "Clamping", es: "Sujeción / Limitación" }, { en: "Over-voltage", es: "Sobretensión" }] }
      ],
      svgDiagram: makeSchematicSVG("ZENER Vz", "REVERSE BREAKDOWN REGULATOR", "#9333ea")
    },
    {
      tier: "HARD",
      acceptedAnswers: ["stepper motor", "a stepper motor", "motor a pasos", "step motor", "stepper"],
      answerEn: "IT'S A STEPPER MOTOR!",
      answerEs: "¡ES UN MOTOR A PASOS!",
      componentName: "Stepper Motor",
      definition: "A brushless DC electric motor that divides a full rotation into equal discrete steps, allowing precise open-loop angular positioning.",
      clues: [
        { door: "01", en: "It is a brushless actuator that divides a 360-degree rotation into equal discrete increments.", es: "Es un actuador sin escobillas que divide una rotación de 360 grados en incrementos discretos iguales.", keywords: [{ en: "Brushless", es: "Sin escobillas" }, { en: "Discrete", es: "Discreto" }, { en: "Increments", es: "Incrementos" }] },
        { door: "02", en: "Its rotor features permanent magnets with gear-like teeth surrounded by multiple stator coils.", es: "Su rotor tiene imanes permanentes con dientes tipo engranaje rodeados por múltiples bobinas.", keywords: [{ en: "Rotor", es: "Rotor" }, { en: "Stator coils", es: "Bobinas del estator" }, { en: "Teeth", es: "Dientes" }] },
        { door: "03", en: "Each digital pulse moves the shaft by a fixed angle (such as 1.8 degrees) without needing an encoder.", es: "Cada pulso digital mueve el eje un ángulo fijo (como 1.8 grados) sin necesitar un encoder.", keywords: [{ en: "Digital pulse", es: "Pulso digital" }, { en: "Fixed angle", es: "Ángulo fijo" }, { en: "Open-loop", es: "Lazo abierto" }] },
        { door: "04", en: "NEMA 17 models are the standard actuators used in 3D printers and desktop CNC machines.", es: "Los modelos NEMA 17 son los actuadores estándar usados en impresoras 3D y máquinas CNC.", keywords: [{ en: "3D printers", es: "Impresoras 3D" }, { en: "CNC machines", es: "Máquinas CNC" }, { en: "Positioning", es: "Posicionamiento" }] }
      ],
      svgDiagram: makeSchematicSVG("STEP 1.8°", "DISCRETE OPEN-LOOP ACTUATOR", "#d97706")
    },
    {
      tier: "HARD",
      acceptedAnswers: ["h-bridge", "h bridge", "an h-bridge", "an h bridge", "puente h", "l298n"],
      answerEn: "IT'S AN H-BRIDGE!",
      answerEs: "¡ES UN PUENTE H!",
      componentName: "H-Bridge Driver",
      definition: "An electronic circuit topology using four switching elements to reverse voltage polarity across a load, enabling bidirectional DC motor rotation.",
      clues: [
        { door: "01", en: "It is an electronic circuit topology named after the visual letter shape of its schematic.", es: "Es una topología de circuito nombrada así por la forma de letra de su diagrama esquemático.", keywords: [{ en: "Topology", es: "Topología" }, { en: "Schematic", es: "Esquemático" }, { en: "Shape", es: "Forma" }] },
        { door: "02", en: "It uses four electronic switches arranged in two parallel branches with the load in the center.", es: "Usa cuatro interruptores electrónicos dispuestos en dos ramas paralelas con la carga en el centro.", keywords: [{ en: "Four switches", es: "Cuatro interruptores" }, { en: "Parallel branches", es: "Ramas paralelas" }, { en: "Load", es: "Carga" }] },
        { door: "03", en: "Closing switches diagonally reverses voltage polarity, while closing two on the same side causes a short circuit.", es: "Cerrar interruptores en diagonal invierte la polaridad; cerrar dos del mismo lado causa cortocircuito.", keywords: [{ en: "Diagonally", es: "En diagonal" }, { en: "Reverses polarity", es: "Invierte polaridad" }, { en: "Short circuit", es: "Cortocircuito" }] },
        { door: "04", en: "Found inside driver chips like the L298N, it lets a robot drive a DC motor forward and backward.", es: "Presente en chips como el L298N, permite que un robot gire un motor DC hacia adelante y atrás.", keywords: [{ en: "Driver chip", es: "Chip controlador" }, { en: "Bidirectional", es: "Bidireccional" }, { en: "Forward and backward", es: "Adelante y atrás" }] }
      ],
      svgDiagram: makeSchematicSVG("H-BRIDGE", "BIDIRECTIONAL MOTOR DRIVER", "#2563eb")
    },
    {
      tier: "HARD",
      acceptedAnswers: ["optocoupler", "optoisolator", "an optocoupler", "optoacoplador"],
      answerEn: "IT'S AN OPTOCOUPLER!",
      answerEs: "¡ES UN OPTOACOPLADOR!",
      componentName: "Optocoupler (Optoisolator)",
      definition: "An electronic component that transfers electrical signals between two isolated circuits using light, protecting low-voltage microcontrollers from high-voltage surges.",
      clues: [
        { door: "01", en: "It is a single IC package that provides galvanic electrical isolation between input and output.", es: "Es un encapsulado integrado que proporciona aislamiento eléctrico galvánico entre entrada y salida.", keywords: [{ en: "IC package", es: "Encapsulado integrado" }, { en: "Galvanic isolation", es: "Aislamiento galvánico" }, { en: "Between", es: "Entre" }] },
        { door: "02", en: "Inside its dark housing, there is no physical wire connecting the control side to the load side.", es: "Dentro de su encapsulado oscuro no hay ningún cable físico conectando el lado de control con la carga.", keywords: [{ en: "Housing", es: "Encapsulado" }, { en: "Physical wire", es: "Cable físico" }, { en: "Load side", es: "Lado de carga" }] },
        { door: "03", en: "It combines an internal infrared LED aimed directly at a light-sensitive phototransistor.", es: "Combina un LED infrarrojo interno apuntando directamente hacia un fototransistor sensible a la luz.", keywords: [{ en: "Infrared LED", es: "LED infrarrojo" }, { en: "Phototransistor", es: "Fototransistor" }, { en: "Light-sensitive", es: "Sensible a la luz" }] },
        { door: "04", en: "It protects sensitive 5V microcontrollers from high-voltage noise and spikes in industrial PLCs.", es: "Protege microcontroladores sensibles de 5V contra ruido y picos de alto voltaje en PLCs industriales.", keywords: [{ en: "Noise", es: "Ruido eléctrico" }, { en: "Voltage spikes", es: "Picos de voltaje" }, { en: "Industrial PLC", es: "PLC industrial" }] }
      ],
      svgDiagram: makeSchematicSVG("OPTO-IC", "OPTICAL GALVANIC ISOLATION", "#0d9488")
    },
    {
      tier: "HARD",
      acceptedAnswers: ["mosfet", "a mosfet", "transistor mosfet", "power mosfet"],
      answerEn: "IT'S A MOSFET!",
      answerEs: "¡ES UN TRANSISTOR MOSFET!",
      componentName: "MOSFET Transistor",
      definition: "A voltage-controlled field-effect transistor with an insulated gate, widely used for high-speed, high-efficiency power switching in motor drivers and converters.",
      clues: [
        { door: "01", en: "It is a three-terminal semiconductor device whose pins are called Gate, Drain, and Source.", es: "Es un dispositivo semiconductor de tres terminales llamadas Compuerta (Gate), Drenador y Fuente.", keywords: [{ en: "Gate", es: "Compuerta" }, { en: "Drain", es: "Drenador" }, { en: "Source", es: "Fuente" }] },
        { door: "02", en: "Unlike a BJT, it is voltage-controlled and draws virtually zero steady-state input current.", es: "A diferencia de un BJT, se controla por voltaje y consume casi cero corriente de entrada en estado estable.", keywords: [{ en: "Voltage-controlled", es: "Controlado por voltaje" }, { en: "Field-effect", es: "Efecto de campo" }, { en: "Zero current", es: "Cero corriente" }] },
        { door: "03", en: "A thin layer of silicon dioxide insulates its control terminal from the conductive channel.", es: "Una delgada capa de dióxido de silicio aísla su terminal de control del canal conductor.", keywords: [{ en: "Silicon dioxide", es: "Dióxido de silicio" }, { en: "Insulates", es: "Aísla" }, { en: "Conductive channel", es: "Canal conductor" }] },
        { door: "04", en: "It is the preferred switch for high-frequency PWM motor control and switching power supplies.", es: "Es el interruptor preferido para control PWM de motores de alta frecuencia y fuentes conmutadas.", keywords: [{ en: "High-efficiency", es: "Alta eficiencia" }, { en: "Power switching", es: "Conmutación de potencia" }, { en: "Motor control", es: "Control de motores" }] }
      ],
      svgDiagram: makeSchematicSVG("MOSFET", "VOLTAGE-CONTROLLED POWER SWITCH", "#dc2626")
    },
    {
      tier: "HARD",
      acceptedAnswers: ["rotary encoder", "encoder", "a rotary encoder", "an encoder", "quadrature encoder"],
      answerEn: "IT'S A ROTARY ENCODER!",
      answerEs: "¡ES UN ENCODER ROTATORIO!",
      componentName: "Rotary Encoder",
      definition: "An electromechanical sensor that converts the angular position or motion of a shaft into digital square-wave pulses (Channels A & B) for closed-loop control.",
      clues: [
        { door: "01", en: "It is an electromechanical transducer mounted on a rotating shaft.", es: "Es un transductor electromecánico montado sobre un eje giratorio.", keywords: [{ en: "Transducer", es: "Transductor" }, { en: "Mounted", es: "Montado" }, { en: "Rotating shaft", es: "Eje giratorio" }] },
        { door: "02", en: "Unlike a potentiometer, it has no mechanical stops and can rotate 360 degrees continuously.", es: "A diferencia de un potenciómetro, no tiene topes mecánicos y puede girar 360 grados continuamente.", keywords: [{ en: "Mechanical stops", es: "Topes mecánicos" }, { en: "Continuously", es: "Continuamente" }, { en: "Angular", es: "Angular" }] },
        { door: "03", en: "It uses slotted optical discs or magnetic poles to generate digital square-wave pulses.", es: "Utiliza discos ópticos ranurados o polos magnéticos para generar pulsos digitales de onda cuadrada.", keywords: [{ en: "Slotted disc", es: "Disco ranurado" }, { en: "Square-wave", es: "Onda cuadrada" }, { en: "Pulses", es: "Pulsos" }] },
        { door: "04", en: "By outputting two quadrature signals out of phase (Channels A and B), it reveals both speed and direction.", es: "Al emitir dos señales en cuadratura desfasadas (Canales A y B), revela tanto velocidad como dirección.", keywords: [{ en: "Quadrature", es: "Cuadratura" }, { en: "Out of phase", es: "Desfasadas" }, { en: "Speed and direction", es: "Velocidad y dirección" }] }
      ],
      svgDiagram: makeSchematicSVG("ENC A/B", "QUADRATURE ANGULAR FEEDBACK", "#0284c7")
    },
    {
      tier: "HARD",
      acceptedAnswers: ["hall effect sensor", "hall sensor", "a hall effect sensor", "sensor de efecto hall", "hall effect"],
      answerEn: "IT'S A HALL EFFECT SENSOR!",
      answerEs: "¡ES UN SENSOR DE EFECTO HALL!",
      componentName: "Hall Effect Sensor",
      definition: "A transducer that varies its output voltage in response to a magnetic field, used for contactless proximity switching, positioning, and speed detection.",
      clues: [
        { door: "01", en: "It is a solid-state transducer with no moving parts that operates without physical contact.", es: "Es un transductor de estado sólido sin partes móviles que opera sin contacto físico.", keywords: [{ en: "Solid-state", es: "Estado sólido" }, { en: "Moving parts", es: "Partes móviles" }, { en: "Physical contact", es: "Contacto físico" }] },
        { door: "02", en: "It relies on the Lorentz force deflecting charge carriers inside a thin semiconductor strip.", es: "Depende de la fuerza de Lorentz desviando portadores de carga dentro de una lámina semiconductora.", keywords: [{ en: "Lorentz force", es: "Fuerza de Lorentz" }, { en: "Charge carriers", es: "Portadores de carga" }, { en: "Deflecting", es: "Desviando" }] },
        { door: "03", en: "It produces a measurable transverse voltage proportional to the perpendicular magnetic flux density.", es: "Produce un voltaje transversal medible proporcional a la densidad de flujo magnético perpendicular.", keywords: [{ en: "Transverse voltage", es: "Voltaje transversal" }, { en: "Magnetic flux", es: "Flujo magnético" }, { en: "Proportional", es: "Proporcional" }] },
        { door: "04", en: "It is used inside brushless DC motors to detect rotor magnet position and in wheel speed sensors.", es: "Se usa dentro de motores brushless para detectar la posición del rotor y en sensores de velocidad.", keywords: [{ en: "Proximity", es: "Proximidad" }, { en: "Magnetic field", es: "Campo magnético" }, { en: "Speed detection", es: "Detección de velocidad" }] }
      ],
      svgDiagram: makeSchematicSVG("HALL [B]", "MAGNETIC FLUX TRANSDUCER", "#7c3aed")
    }
  ]
};

// =========================================================================
// ESTADÍSTICAS PERSISTENTES DE PERFIL (LOCALSTORAGE)
// =========================================================================
const DEFAULT_STATS = {
  maxTourneyScore: 0,
  tourneyWins: 0,
  pvpWins: 0,
  soloCompleted: 0,
  livesLostSolo: 0,
  livesLostPvp: 0,
  livesLostTourney: 0
};

let userProfileName = localStorage.getItem('mgz_profile_name') || '';
let playerStats = { ...DEFAULT_STATS, ...JSON.parse(localStorage.getItem('mgz_player_stats') || '{}') };

function saveStats() {
  localStorage.setItem('mgz_player_stats', JSON.stringify(playerStats));
  refreshProfileStatsUI();
}

function refreshProfileStatsUI() {
  document.getElementById('stat-tourney-max').innerText = `${playerStats.maxTourneyScore} PTS`;
  document.getElementById('stat-tourney-wins').innerText = playerStats.tourneyWins;
  document.getElementById('stat-pvp-wins').innerText = playerStats.pvpWins;
  document.getElementById('stat-solo-completed').innerText = playerStats.soloCompleted;
  document.getElementById('stat-lives-solo').innerText = playerStats.livesLostSolo;
  document.getElementById('stat-lives-pvp').innerText = playerStats.livesLostPvp;
  document.getElementById('stat-lives-tourney').innerText = playerStats.livesLostTourney;
}

// =========================================================================
// VARIABLES GLOBALES DE PARTIDA
// =========================================================================
let activeMode = 'solo'; // 'solo' | 'pvp' | 'tourney'
let selectedDifficulty = 'normal';
let answerStyle = 'options'; // 'options' | 'typing'
let pendingDiffTarget = 'solo';

let activeRounds = [];
let currentRoundIndex = 0;
let currentClueIndex = 0;
let openedDoors = [false, false, false, false];
let currentRoundOptions = [];
let eliminatedOptionsThisRound = [];
let soundEnabled = true;

// Racha y velocidad
let winStreak = 0;
let roundStartTime = Date.now();

// Estado Solo y 1v1
let myScore = 0;
let rivalScore = 0;
let attemptsLeft = 3;
let rivalAttemptsLeft = 3;
let roundLockedForMe = false;
let roundResults = [];

// PeerJS (1 vs 1 y Torneo Multijugador)
let isHost = false;
let peer = null;
let conn = null;
let tourneyConnections = [];

// Estado Torneo Online (hasta 30 dispositivos por código)
let tourneyPlayers = [];
let myTourneyId = 'host';
let tourneyTotalRounds = 5;
let eliminationEnabled = true;
let roundAnsweredByMe = false;

// Sintetizador Web Audio
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playTone(freq, type = 'square', duration = 0.12) {
  if (!soundEnabled) return;
  if (audioCtx.state === 'suspended') audioCtx.resume();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
  gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + duration);
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  document.getElementById('btn-sound').innerText = soundEnabled ? '🔊 SFX: ON' : '🔇 SFX: OFF';
}

function stopVoice() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  document.querySelectorAll('.btn-voice-read').forEach(b => b.classList.remove('speaking'));
}

function showScreen(screenId) {
  stopVoice();
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

function closeAllConnections() {
  if (conn) { try { conn.close(); } catch(e) {} conn = null; }
  tourneyConnections.forEach(c => { try { c.close(); } catch(e) {} });
  tourneyConnections = [];
  if (peer) { try { peer.destroy(); } catch(e) {} peer = null; }
}

function goHome() {
  closeAllConnections();
  document.getElementById('tourney-elim-overlay').classList.add('hidden');
  document.getElementById('hud-streak-badge').classList.add('hidden');
  playTone(300, 'sine', 0.1);
  showScreen('screen-home');
}

function openModeSelect() {
  closeAllConnections();
  document.getElementById('tourney-elim-overlay').classList.add('hidden');
  document.getElementById('hud-streak-badge').classList.add('hidden');
  playTone(520, 'square', 0.14);
  showScreen('screen-modes');
}

// =========================================================================
// PERFIL DE JUGADOR & ENCICLOPEDIA DEX
// =========================================================================
window.addEventListener('DOMContentLoaded', () => {
  refreshProfileStatsUI();
  if (userProfileName) {
    document.getElementById('profile-name-input').value = userProfileName;
    document.getElementById('hud-profile-tag').innerText = `👤 ${userProfileName.toUpperCase()}`;
    document.getElementById('profile-overlay').classList.add('hidden');
    document.getElementById('btn-close-profile-x').classList.remove('hidden');
  }
});

function openProfileModal() {
  refreshProfileStatsUI();
  document.getElementById('profile-name-input').value = userProfileName;
  if (userProfileName) document.getElementById('btn-close-profile-x').classList.remove('hidden');
  document.getElementById('profile-overlay').classList.remove('hidden');
}

function closeProfileModal() {
  if (!userProfileName) {
    saveProfileName();
    return;
  }
  document.getElementById('profile-overlay').classList.add('hidden');
}

function saveProfileName() {
  const val = document.getElementById('profile-name-input').value.trim();
  userProfileName = val || 'Player 1';
  localStorage.setItem('mgz_profile_name', userProfileName);
  document.getElementById('hud-profile-tag').innerText = `👤 ${userProfileName.toUpperCase()}`;
  document.getElementById('btn-close-profile-x').classList.remove('hidden');
  document.getElementById('profile-overlay').classList.add('hidden');
  playTone(540, 'square', 0.12);
}

function openGlossaryModal() {
  const allComps = [...componentsBank.easy, ...componentsBank.normal, ...componentsBank.hard];
  const grid = document.getElementById('glossary-grid-list');
  grid.innerHTML = allComps.map(c => `
    <div class="dex-card">
      <div>
        <span class="dex-tier-tag">${c.tier}</span>
        <strong style="margin-left:6px; font-family:'Orbitron',sans-serif; font-size:0.9rem;">${c.componentName}</strong>
        <div style="font-size:0.88rem; color:#cbd5e1; margin-top:4px;">${c.definition}</div>
      </div>
      <button class="vocab-pill-btn" onclick="speakWord('${c.componentName.replace(/'/g, "\\'")}')">🔊</button>
    </div>
  `).join('');
  document.getElementById('glossary-overlay').classList.remove('hidden');
}

function closeGlossaryModal() {
  stopVoice();
  document.getElementById('glossary-overlay').classList.add('hidden');
}

// =========================================================================
// CONFIGURACIÓN DE MODOS Y 5 OPCIONES vs ESCRIBIR
// =========================================================================
function openSoloSetup() {
  pendingDiffTarget = 'solo';
  document.getElementById('diff-window-title').innerText = 'SOLO_DIFFICULTY.EXE';
  document.getElementById('diff-screen-heading').innerText = 'SELECT SOLO DIFFICULTY';
  document.getElementById('btn-launch-diff-mode').innerText = 'START SOLO MATCH >>';
  showScreen('screen-diff-setup');
}

function openPvpSetup() {
  pendingDiffTarget = 'pvp';
  document.getElementById('diff-window-title').innerText = '1V1_DIFFICULTY.EXE';
  document.getElementById('diff-screen-heading').innerText = 'SELECT 1 VS 1 DIFFICULTY';
  document.getElementById('btn-launch-diff-mode').innerText = 'OPEN 1V1 LOBBY >>';
  showScreen('screen-diff-setup');
}

function selectDifficulty(diff) {
  selectedDifficulty = diff;
  document.querySelectorAll('#screen-diff-setup .difficulty-grid .diff-card').forEach(c => c.classList.remove('selected'));
  document.getElementById(`diff-btn-${diff}`).classList.add('selected');
  playTone(480, 'sine', 0.08);
}

function selectAnswerStyle(style) {
  answerStyle = style;
  document.getElementById('style-btn-options').classList.toggle('selected', style === 'options');
  document.getElementById('style-btn-typing').classList.toggle('selected', style === 'typing');
  playTone(480, 'sine', 0.08);
}

function applyAnswerStyleUI() {
  const isOptions = (answerStyle === 'options');
  document.getElementById('doors-options-wrapper').classList.toggle('hidden', !isOptions);
  document.getElementById('clue-options-wrapper').classList.toggle('hidden', !isOptions);
  document.getElementById('doors-typing-wrapper').classList.toggle('hidden', isOptions);
  document.getElementById('clue-typing-wrapper').classList.toggle('hidden', isOptions);
}

function launchSelectedDiffMode() {
  if (pendingDiffTarget === 'solo') startSoloGame();
  else openPvpLobby();
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildOptionsForComponent(compObj) {
  const tierKey = compObj.tier.toLowerCase();
  const pool = componentsBank[tierKey] || componentsBank.normal;
  // 1 correcta + 4 incorrectas = 5 opciones (A - E)
  const distractors = shuffleArray(
    pool.filter(item => item.componentName !== compObj.componentName)
  ).slice(0, 4).map(item => item.componentName);

  currentRoundOptions = shuffleArray([compObj.componentName, ...distractors]);
  eliminatedOptionsThisRound = [];
}

function renderOptionsButtons(disabledAll = false) {
  const letters = ['A', 'B', 'C', 'D', 'E'];
  ['options-container-doors', 'options-container-clue'].forEach(containerId => {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';

    currentRoundOptions.forEach((optName, idx) => {
      const isEliminated = eliminatedOptionsThisRound.includes(optName);
      const btn = document.createElement('button');
      btn.className = `option-choice-btn ${isEliminated ? 'wrong-eliminated' : ''}`;
      btn.disabled = disabledAll || isEliminated;
      btn.onclick = () => selectOptionAnswer(optName);
      btn.innerHTML = `<span class="option-letter">${letters[idx]}</span> <span>${optName}</span>`;
      container.appendChild(btn);
    });
  });
}

function setTypingInputsDisabled(disabled) {
  ['guess-input-doors', 'btn-submit-doors', 'guess-input-clue', 'btn-submit-clue'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.disabled = disabled;
  });
}

function updateStreakUI() {
  const badge = document.getElementById('hud-streak-badge');
  if (winStreak >= 2) {
    badge.innerText = `🔥 x${winStreak}`;
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }
}

function computeRoundPoints() {
  const elapsedSec = (Date.now() - roundStartTime) / 1000;
  const speedBonus = elapsedSec <= 12 ? 20 : elapsedSec <= 22 ? 10 : 0;
  const streakBonus = winStreak >= 2 ? (winStreak - 1) * 5 : 0;
  return 100 + speedBonus + streakBonus;
}

// =========================================================================
// MODO 1: SOLO
// =========================================================================
function startSoloGame() {
  activeMode = 'solo';
  isHost = true;
  activeRounds = shuffleArray(componentsBank[selectedDifficulty]).slice(0, 5);
  myScore = 0;
  winStreak = 0;
  roundResults = [];
  updateStreakUI();

  document.getElementById('hud-solo-score').classList.remove('hidden');
  document.getElementById('hud-pvp-score').classList.add('hidden');
  document.getElementById('hud-tourney-banner').classList.add('hidden');
  document.getElementById('btn-standings').classList.add('hidden');
  document.getElementById('turn-callout').classList.add('hidden');
  document.getElementById('pvp-rival-status').classList.add('hidden');

  document.getElementById('player-score').innerText = '0';
  document.getElementById('hud-mode-badge').innerText = `● SOLO • ${selectedDifficulty.toUpperCase()}`;

  startSoloOrPvpRound(0);
}

// =========================================================================
// MODO 2: 1 VS 1 SPEED DUEL (PEERJS)
// =========================================================================
function openPvpLobby() {
  document.getElementById('lobby-diff-text').innerText = `${selectedDifficulty.toUpperCase()} (${answerStyle === 'options' ? '5 OPTIONS' : 'TYPE'})`;
  document.getElementById('host-code-display').classList.add('hidden');
  document.getElementById('join-status-msg').innerText = '';
  document.getElementById('join-code-input').value = '';
  showScreen('screen-pvp-lobby');
}

function createPvpRoom() {
  closeAllConnections();
  isHost = true;
  activeMode = 'pvp';

  const shortCode = Math.floor(1000 + Math.random() * 9000).toString();
  document.getElementById('host-code-display').classList.remove('hidden');
  document.getElementById('generated-room-code').innerText = shortCode;
  document.getElementById('host-wait-status').innerText = 'Connecting to network...';

  peer = new Peer(`mech-door-${shortCode}`);

  peer.on('open', () => {
    document.getElementById('host-wait-status').innerText = 'Waiting for rival to join...';
  });

  peer.on('connection', (connection) => {
    conn = connection;
    setupPvpListeners();

    conn.on('open', () => {
      activeRounds = shuffleArray(componentsBank[selectedDifficulty]).slice(0, 5);
      myScore = 0;
      rivalScore = 0;
      winStreak = 0;
      roundResults = [];
      updateStreakUI();

      conn.send({
        type: 'START_MATCH',
        difficulty: selectedDifficulty,
        answerStyle: answerStyle,
        rounds: activeRounds,
        rivalName: userProfileName || 'Rival'
      });

      setupPvpHud('RIVAL');
      startSoloOrPvpRound(0);
    });
  });

  peer.on('error', () => {
    document.getElementById('host-wait-status').innerText = '⚠️ Network error. Try creating again.';
  });
}

function joinPvpRoom() {
  const code = document.getElementById('join-code-input').value.trim();
  const statusEl = document.getElementById('join-status-msg');

  if (code.length !== 4) {
    statusEl.className = 'feedback-msg feedback-error';
    statusEl.innerText = '⚠️ Enter a 4-digit Room Code!';
    return;
  }

  closeAllConnections();
  isHost = false;
  activeMode = 'pvp';
  statusEl.className = 'feedback-msg';
  statusEl.innerText = 'Connecting to rival...';

  peer = new Peer();

  peer.on('open', () => {
    conn = peer.connect(`mech-door-${code}`);
    setupPvpListeners();
    conn.on('open', () => {
      conn.send({ type: 'HELLO_NAME', rivalName: userProfileName || 'Rival' });
      statusEl.innerText = 'Connected! Starting match...';
    });
  });

  peer.on('error', () => {
    statusEl.className = 'feedback-msg feedback-error';
    statusEl.innerText = '❌ Room not found. Check the 4-digit code.';
  });
}

function setupPvpHud(rivalDisplayName = 'RIVAL') {
  const myName = (userProfileName || 'YOU').toUpperCase();
  document.getElementById('hud-solo-score').classList.add('hidden');
  document.getElementById('hud-pvp-score').classList.remove('hidden');
  document.getElementById('hud-tourney-banner').classList.add('hidden');
  document.getElementById('btn-standings').classList.add('hidden');
  document.getElementById('turn-callout').classList.add('hidden');
  document.getElementById('pvp-rival-status').classList.remove('hidden');

  document.querySelector('.p1-tag').innerHTML = `${myName}: <strong id="p1-score">0</strong>`;
  document.querySelector('.p2-tag').innerHTML = `${rivalDisplayName.toUpperCase()}: <strong id="p2-score">0</strong>`;
  document.getElementById('hud-mode-badge').innerText = `⚔️ 1V1 • ${selectedDifficulty.toUpperCase()}`;
}

function setupPvpListeners() {
  conn.on('data', (data) => {
    if (data.type === 'HELLO_NAME') {
      document.querySelector('.p2-tag').innerHTML = `${data.rivalName.toUpperCase()}: <strong id="p2-score">${rivalScore}</strong>`;
    } else if (data.type === 'START_MATCH') {
      selectedDifficulty = data.difficulty;
      answerStyle = data.answerStyle || 'options';
      activeRounds = data.rounds;
      myScore = 0;
      rivalScore = 0;
      winStreak = 0;
      roundResults = [];
      updateStreakUI();
      setupPvpHud(data.rivalName || 'RIVAL');
      startSoloOrPvpRound(0);
    } else if (data.type === 'RIVAL_WON_ROUND') {
      rivalScore += (data.points || 100);
      winStreak = 0;
      updateStreakUI();
      document.getElementById('p2-score').innerText = rivalScore;
      roundResults[currentRoundIndex] = 'rival';
      finishSoloOrPvpReveal('rival', data.points || 100);
    } else if (data.type === 'RIVAL_MISTAKE') {
      rivalAttemptsLeft = data.attemptsLeft;
      updateRivalStatusPill();
      if (rivalAttemptsLeft === 0 && roundLockedForMe) {
        roundResults[currentRoundIndex] = 'none';
        finishSoloOrPvpReveal('none', 0);
      }
    } else if (data.type === 'NEXT_ROUND') {
      startSoloOrPvpRound(data.roundIndex);
    } else if (data.type === 'GAME_OVER') {
      showSoloOrPvpGameOver();
    }
  });

  conn.on('close', () => {
    if (activeMode === 'pvp') {
      alert('Your rival disconnected from the match.');
      goHome();
    }
  });
}

function updateRivalStatusPill() {
  const pill = document.getElementById('pvp-rival-status');
  pill.innerText = rivalAttemptsLeft > 0
    ? `Rival: ${'❤️'.repeat(rivalAttemptsLeft)}`
    : `Rival: ❌ Out!`;
}

function startSoloOrPvpRound(index) {
  currentRoundIndex = index;
  openedDoors = [false, false, false, false];
  attemptsLeft = 3;
  rivalAttemptsLeft = 3;
  roundLockedForMe = false;
  roundStartTime = Date.now();

  const comp = activeRounds[currentRoundIndex];
  buildOptionsForComponent(comp);
  applyAnswerStyleUI();

  const label = activeMode === 'pvp' ? '1V1 DUEL' : selectedDifficulty.toUpperCase();
  document.getElementById('hud-round-indicator').innerText = `ROUND ${currentRoundIndex + 1} / 5`;
  document.getElementById('doors-round-title').innerText = `[${label}] ROUND ${currentRoundIndex + 1} / 5`;
  document.getElementById('lives-label-text').innerText = 'ATTEMPTS LEFT:';

  clearFeedbackAndInputs();
  renderOptionsButtons(false);
  setTypingInputsDisabled(false);
  updateLivesDisplay(attemptsLeft);
  if (activeMode === 'pvp') updateRivalStatusPill();
  renderDoors(comp);
  playTone(600, 'square', 0.18);
  showScreen('screen-doors');
}

// =========================================================================
// MODO 3: TORNEO MULTIJUGADOR ONLINE POR CÓDIGO DE SALA (HASTA 30 DISPOSITIVOS)
// =========================================================================
function openTourneySetup() {
  document.getElementById('tourney-host-panel').classList.add('hidden');
  document.getElementById('tourney-client-roster').classList.add('hidden');
  document.getElementById('tourney-join-status').innerText = '';
  document.getElementById('tourney-join-code').value = '';
  showScreen('screen-tourney-setup');
}

function createTourneyRoom() {
  closeAllConnections();
  isHost = true;
  activeMode = 'tourney';
  myTourneyId = 'host';

  const shortCode = Math.floor(1000 + Math.random() * 9000).toString();
  document.getElementById('tourney-host-panel').classList.remove('hidden');
  document.getElementById('tourney-room-code').innerText = shortCode;
  document.getElementById('tourney-host-status').innerText = 'Connecting room...';

  tourneyPlayers = [{
    id: 'host',
    listNumber: 1,
    name: userProfileName || 'Host Player',
    score: 0,
    lives: 3,
    eliminated: false
  }];
  renderTourneyRosterPills('tourney-roster-list');

  peer = new Peer(`mech-tourney-${shortCode}`);

  peer.on('open', () => {
    document.getElementById('tourney-host-status').innerText = 'Room open! Share code with players:';
  });

  peer.on('connection', (clientConn) => {
    if (tourneyPlayers.length >= 30) {
      clientConn.close();
      return;
    }
    tourneyConnections.push(clientConn);

    clientConn.on('data', (data) => {
      if (data.type === 'JOIN_TOURNEY') {
        const newListNum = tourneyPlayers.length + 1;
        const playerObj = {
          id: clientConn.peer,
          listNumber: newListNum,
          name: (data.name || `Player ${newListNum}`).substring(0, 18),
          score: 0,
          lives: 3,
          eliminated: false
        };
        tourneyPlayers.push(playerObj);
        renderTourneyRosterPills('tourney-roster-list');
        broadcastTourney({ type: 'ROSTER_UPDATE', players: tourneyPlayers });
      } else if (data.type === 'CLIENT_SCORE_UPDATE') {
        const p = tourneyPlayers.find(pl => pl.id === data.playerId);
        if (p) {
          p.score = data.score;
          p.lives = data.lives;
          p.eliminated = data.eliminated;
          broadcastTourney({ type: 'ROSTER_UPDATE', players: tourneyPlayers });
        }
      }
    });

    clientConn.on('close', () => {
      tourneyConnections = tourneyConnections.filter(c => c !== clientConn);
    });
  });

  peer.on('error', () => {
    document.getElementById('tourney-host-status').innerText = '⚠️ Network error. Try creating room again.';
  });
}

function joinTourneyRoom() {
  const code = document.getElementById('tourney-join-code').value.trim();
  const statusEl = document.getElementById('tourney-join-status');

  if (code.length !== 4) {
    statusEl.className = 'feedback-msg feedback-error';
    statusEl.innerText = '⚠️ Enter a 4-digit Tournament Code!';
    return;
  }

  closeAllConnections();
  isHost = false;
  activeMode = 'tourney';
  statusEl.className = 'feedback-msg';
  statusEl.innerText = 'Joining tournament room...';

  peer = new Peer();

  peer.on('open', (myPeerId) => {
    myTourneyId = myPeerId;
    conn = peer.connect(`mech-tourney-${code}`);

    conn.on('open', () => {
      conn.send({ type: 'JOIN_TOURNEY', name: userProfileName || 'Player' });
      statusEl.innerText = '✅ Connected! Waiting for host to start...';
      document.getElementById('tourney-client-roster').classList.remove('hidden');
    });

    conn.on('data', (data) => {
      if (data.type === 'ROSTER_UPDATE') {
        tourneyPlayers = data.players;
        renderTourneyRosterPills('tourney-client-roster');
        updateTourneyHud();
      } else if (data.type === 'START_TOURNEY_MATCH') {
        activeRounds = data.rounds;
        tourneyTotalRounds = data.totalRounds;
        eliminationEnabled = data.eliminationEnabled;
        answerStyle = data.answerStyle || 'options';
        tourneyPlayers = data.players;
        winStreak = 0;
        updateStreakUI();
        setupTourneyHud();
        startTourneyRound(0);
      } else if (data.type === 'NEXT_TOURNEY_ROUND') {
        tourneyPlayers = data.players;
        startTourneyRound(data.roundIndex);
      } else if (data.type === 'TOURNEY_GAME_OVER') {
        tourneyPlayers = data.players;
        showTourneyGameOver();
      }
    });

    conn.on('close', () => {
      alert('Disconnected from tournament host.');
      goHome();
    });
  });

  peer.on('error', () => {
    statusEl.className = 'feedback-msg feedback-error';
    statusEl.innerText = '❌ Tournament room not found. Check the code.';
  });
}

function broadcastTourney(payload) {
  tourneyConnections.forEach(c => {
    if (c.open) c.send(payload);
  });
}

function renderTourneyRosterPills(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = tourneyPlayers.map(p =>
    `<span class="roster-pill">#${p.listNumber} ${p.name}</span>`
  ).join('');
}

function startOnlineTournament() {
  let rounds = parseInt(document.getElementById('num-rounds-input').value, 10) || 5;
  if (rounds < 1) rounds = 1;
  if (rounds > 30) rounds = 30;
  tourneyTotalRounds = rounds;
  eliminationEnabled = document.getElementById('elimination-mode-checkbox').checked;
  answerStyle = document.getElementById('tourney-answer-style').value;
  winStreak = 0;
  updateStreakUI();

  const fullDeck = [
    ...shuffleArray(componentsBank.easy),
    ...shuffleArray(componentsBank.normal),
    ...shuffleArray(componentsBank.hard)
  ];

  activeRounds = [];
  for (let r = 0; r < tourneyTotalRounds; r++) {
    const ratio = tourneyTotalRounds === 1 ? 0 : r / (tourneyTotalRounds - 1);
    const baseIdx = Math.floor(ratio * 27);
    const jitter = Math.floor(Math.random() * 3);
    activeRounds.push(fullDeck[Math.min(29, baseIdx + jitter)]);
  }

  broadcastTourney({
    type: 'START_TOURNEY_MATCH',
    rounds: activeRounds,
    totalRounds: tourneyTotalRounds,
    eliminationEnabled: eliminationEnabled,
    answerStyle: answerStyle,
    players: tourneyPlayers
  });

  setupTourneyHud();
  startTourneyRound(0);
}

function setupTourneyHud() {
  document.getElementById('hud-solo-score').classList.add('hidden');
  document.getElementById('hud-pvp-score').classList.add('hidden');
  document.getElementById('hud-tourney-banner').classList.remove('hidden');
  document.getElementById('btn-standings').classList.remove('hidden');
  document.getElementById('turn-callout').classList.remove('hidden');
  document.getElementById('pvp-rival-status').classList.add('hidden');
}

function getMyTourneyPlayer() {
  return tourneyPlayers.find(p => p.id === myTourneyId) || tourneyPlayers[0];
}

function updateTourneyHud() {
  const me = getMyTourneyPlayer();
  if (!me) return;
  document.getElementById('hud-player-name').innerText = `#${me.listNumber} ${me.name.toUpperCase()}`;
  document.getElementById('hud-player-lives').innerText = '❤️ '.repeat(me.lives) + '🖤 '.repeat(3 - me.lives);
  document.getElementById('hud-player-score').innerText = `${me.score} PTS`;
}

function startTourneyRound(roundIdx) {
  currentRoundIndex = roundIdx;
  openedDoors = [false, false, false, false];
  roundAnsweredByMe = false;
  roundStartTime = Date.now();

  const comp = activeRounds[roundIdx];
  buildOptionsForComponent(comp);
  applyAnswerStyleUI();

  const me = getMyTourneyPlayer();
  updateTourneyHud();

  document.getElementById('hud-mode-badge').innerText = `🏆 TIER: ${comp.tier}`;
  document.getElementById('hud-round-indicator').innerText = `ROUND ${roundIdx + 1} / ${tourneyTotalRounds}`;
  document.getElementById('turn-callout').innerText = `🎮 #${me.listNumber} ${me.name.toUpperCase()}`;
  document.getElementById('doors-round-title').innerText = `ROUND ${roundIdx + 1} / ${tourneyTotalRounds} • LEVEL: ${comp.tier}`;
  document.getElementById('lives-label-text').innerText = 'GLOBAL LIVES LEFT:';

  clearFeedbackAndInputs();
  updateLivesDisplay(me.lives);
  renderDoors(comp);

  if (me.eliminated && eliminationEnabled) {
    renderOptionsButtons(true);
    setTypingInputsDisabled(true);
    document.getElementById('feedback-doors').className = 'feedback-msg feedback-error';
    document.getElementById('feedback-doors').innerText = `💀 ELIMINATION: PLAYER ${me.listNumber} (${me.name.toUpperCase()}) — SPECTATING`;
  } else {
    renderOptionsButtons(false);
    setTypingInputsDisabled(false);
  }

  playTone(580, 'square', 0.16);
  showScreen('screen-doors');
}

function toggleScoreboardModal() {
  const overlay = document.getElementById('scoreboard-overlay');
  overlay.classList.toggle('hidden');
  if (!overlay.classList.contains('hidden')) {
    const sorted = [...tourneyPlayers].sort((a, b) => b.score - a.score);
    document.getElementById('live-standings-list').innerHTML = sorted.map((p, i) => {
      const status = p.eliminated
        ? `💀 ELIMINATION PLAYER ${p.listNumber}`
        : `${'❤️'.repeat(p.lives)} (${p.score} PTS)`;
      return `<div><strong>#${i + 1} [List #${p.listNumber}] ${p.name}:</strong> ${status}</div>`;
    }).join('');
  }
}

// =========================================================================
// INTERACCIÓN PUERTAS, VOCABULARIO CLAVE Y RESPUESTAS (5 OPCIONES O ESCRIBIR)
// =========================================================================
function clearFeedbackAndInputs() {
  document.getElementById('feedback-doors').innerText = '';
  document.getElementById('feedback-clue').innerText = '';
  const inDoors = document.getElementById('guess-input-doors');
  const inClue = document.getElementById('guess-input-clue');
  if (inDoors) inDoors.value = '';
  if (inClue) inClue.value = '';
}

function updateLivesDisplay(livesCount) {
  const safeLives = Math.max(0, livesCount);
  const heartsStr = '❤️ '.repeat(safeLives) + '🖤 '.repeat(3 - safeLives);
  document.getElementById('lives-display').innerText = heartsStr.trim();
  document.getElementById('lives-display-clue').innerText = heartsStr.trim();
}

function renderDoors(roundObj) {
  const container = document.getElementById('doors-container');
  container.innerHTML = '';

  roundObj.clues.forEach((clue, idx) => {
    const isOpened = openedDoors[idx];
    const doorEl = document.createElement('div');
    doorEl.className = `door-item ${isOpened ? 'opened' : ''}`;
    doorEl.onclick = () => openDoor(idx);

    doorEl.innerHTML = `
      <div class="door-panel">DOOR ${clue.door}</div>
      <div class="door-knob"></div>
      <div class="door-panel">${isOpened ? '👁️' : '🔒'}</div>
      <div class="door-status">${isOpened ? 'CLUE UNLOCKED' : 'CLICK TO OPEN'}</div>
    `;
    container.appendChild(doorEl);
  });
}

function renderKeywordsList(keywordsArr, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';

  (keywordsArr || []).forEach(kw => {
    const btn = document.createElement('button');
    btn.className = 'vocab-pill-btn';
    btn.onclick = () => speakWord(kw.en);
    btn.innerHTML = `🔊 <strong>${kw.en}</strong> <span class="es-hint">(${kw.es})</span>`;
    container.appendChild(btn);
  });
}

function openDoor(doorIdx) {
  currentClueIndex = doorIdx;
  openedDoors[doorIdx] = true;
  const clue = activeRounds[currentRoundIndex].clues[doorIdx];

  document.getElementById('clue-number-badge').innerText = `DOOR ${clue.door}`;
  document.getElementById('clue-en-text').innerText = clue.en;
  document.getElementById('clue-es-text').innerText = clue.es;
  document.getElementById('clue-es-text').classList.add('hidden');
  document.getElementById('btn-toggle-es').innerText = '🌐 SHOW SPANISH TRANSLATION';
  renderKeywordsList(clue.keywords, 'clue-keywords-list');

  if (!roundLockedForMe && !roundAnsweredByMe) document.getElementById('feedback-clue').innerText = '';

  playTone(440, 'triangle', 0.15);
  showScreen('screen-clue');
}

function toggleSpanish() {
  const esEl = document.getElementById('clue-es-text');
  const btn = document.getElementById('btn-toggle-es');
  esEl.classList.toggle('hidden');
  btn.innerText = esEl.classList.contains('hidden')
    ? '🌐 SHOW SPANISH TRANSLATION'
    : '🙈 HIDE SPANISH TRANSLATION';
  playTone(500, 'sine', 0.08);
}

function backToDoors() {
  renderDoors(activeRounds[currentRoundIndex]);
  if (!roundLockedForMe && !roundAnsweredByMe) document.getElementById('feedback-doors').innerText = '';
  playTone(380, 'sine', 0.1);
  showScreen('screen-doors');
}

function checkTypedAnswer(inputId) {
  if (roundLockedForMe || roundAnsweredByMe) return;
  const inputEl = document.getElementById(inputId);
  const raw = inputEl.value.trim().toLowerCase();

  if (!raw) {
    setDualFeedback('⚠️ Please type a component name first!');
    return;
  }

  const round = activeRounds[currentRoundIndex];
  const isCorrect = round.acceptedAnswers.some(ans => raw === ans || raw.includes(ans));
  const displayLabel = inputEl.value.trim();
  inputEl.value = '';

  if (activeMode === 'tourney') {
    handleTourneySubmission(isCorrect, displayLabel);
  } else {
    handleSoloOrPvpSubmission(isCorrect, displayLabel);
  }
}

function selectOptionAnswer(chosenName) {
  if (roundLockedForMe || roundAnsweredByMe) return;

  const round = activeRounds[currentRoundIndex];
  const isCorrect = (chosenName === round.componentName);

  if (activeMode === 'tourney') {
    handleTourneySubmission(isCorrect, chosenName);
  } else {
    handleSoloOrPvpSubmission(isCorrect, chosenName);
  }
}

function setDualFeedback(msg, isError = true) {
  ['feedback-doors', 'feedback-clue'].forEach(id => {
    const el = document.getElementById(id);
    el.className = isError ? 'feedback-msg feedback-error' : 'feedback-msg';
    el.innerText = msg;
  });
}

function handleSoloOrPvpSubmission(isCorrect, chosenName) {
  if (isCorrect) {
    winStreak++;
    updateStreakUI();
    const earnedPts = computeRoundPoints();
    myScore += earnedPts;

    document.getElementById('player-score').innerText = myScore;
    document.getElementById('p1-score').innerText = myScore;
    roundResults[currentRoundIndex] = 'me';

    if (activeMode === 'pvp' && conn) conn.send({ type: 'RIVAL_WON_ROUND', points: earnedPts });
    finishSoloOrPvpReveal('me', earnedPts);
  } else {
    winStreak = 0;
    updateStreakUI();

    if (activeMode === 'solo') playerStats.livesLostSolo++;
    else if (activeMode === 'pvp') playerStats.livesLostPvp++;
    saveStats();

    if (answerStyle === 'options') eliminatedOptionsThisRound.push(chosenName);
    attemptsLeft--;
    updateLivesDisplay(attemptsLeft);
    playTone(160, 'sawtooth', 0.25);

    if (activeMode === 'pvp' && conn) {
      conn.send({ type: 'RIVAL_MISTAKE', attemptsLeft: attemptsLeft });
    }

    if (attemptsLeft > 0) {
      renderOptionsButtons(false);
      setDualFeedback(`❌ "${chosenName}" is incorrect! ${attemptsLeft} attempt(s) left.`);
    } else {
      roundLockedForMe = true;
      renderOptionsButtons(true);
      setTypingInputsDisabled(true);

      if (activeMode === 'solo' || rivalAttemptsLeft === 0) {
        roundResults[currentRoundIndex] = 'none';
        finishSoloOrPvpReveal('none', 0);
      } else {
        setDualFeedback('❌ Out of attempts! Waiting for rival to finish...');
      }
    }
  }
}

function handleTourneySubmission(isCorrect, chosenName) {
  const me = getMyTourneyPlayer();
  const comp = activeRounds[currentRoundIndex];
  const tagEl = document.getElementById('reveal-status-tag');

  if (isCorrect) {
    winStreak++;
    updateStreakUI();
    const earnedPts = computeRoundPoints();
    roundAnsweredByMe = true;
    me.score += earnedPts;

    if (me.score > playerStats.maxTourneyScore) {
      playerStats.maxTourneyScore = me.score;
      saveStats();
    }

    updateTourneyHud();
    syncMyTourneyStats(me);

    tagEl.innerText = `✅ #${me.listNumber} ${me.name.toUpperCase()} +${earnedPts} PTS!`;
    tagEl.className = 'solved-tag';
    playTone(523, 'square', 0.12);
    setTimeout(() => playTone(659, 'square', 0.12), 120);
    setTimeout(() => playTone(784, 'square', 0.25), 240);
    launchConfetti();

    const nextLabel = (currentRoundIndex < tourneyTotalRounds - 1) ? 'NEXT ROUND >>' : 'SEE FINAL STANDINGS >>';
    showRevealCard(comp, nextLabel);
  } else {
    winStreak = 0;
    updateStreakUI();
    playerStats.livesLostTourney++;
    saveStats();

    if (answerStyle === 'options') eliminatedOptionsThisRound.push(chosenName);
    me.lives = Math.max(0, me.lives - 1);
    updateLivesDisplay(me.lives);
    updateTourneyHud();
    playTone(160, 'sawtooth', 0.28);

    if (me.lives > 0) {
      syncMyTourneyStats(me);
      renderOptionsButtons(false);
      setDualFeedback(`❌ "${chosenName}" is wrong! ${me.lives} global life(s) left.`);
    } else {
      me.eliminated = true;
      roundAnsweredByMe = true;
      renderOptionsButtons(true);
      setTypingInputsDisabled(true);
      syncMyTourneyStats(me);

      playTone(130, 'sawtooth', 0.45);
      openEliminationGameOverModal(me);
    }
  }
}

function openEliminationGameOverModal(me) {
  const sorted = [...tourneyPlayers].sort((a, b) => b.score - a.score);
  const rankPos = sorted.findIndex(p => p.id === me.id) + 1;

  document.getElementById('elim-player-subtitle').innerText = `ELIMINATION: PLAYER ${me.listNumber} (${me.name.toUpperCase()})`;
  document.getElementById('elim-score-value').innerText = me.score;
  document.getElementById('elim-rank-estimate').innerText = `Current Tournament Position: #${rankPos} of ${tourneyPlayers.length}`;
  document.getElementById('tourney-elim-overlay').classList.remove('hidden');
}

function returnHomeFromElimination() {
  document.getElementById('tourney-elim-overlay').classList.add('hidden');
  goHome();
}

function continueSpectatingTourney() {
  document.getElementById('tourney-elim-overlay').classList.add('hidden');
  const me = getMyTourneyPlayer();
  const comp = activeRounds[currentRoundIndex];
  const tagEl = document.getElementById('reveal-status-tag');
  tagEl.innerText = `💀 ELIMINATION: PLAYER ${me.listNumber} (${me.name.toUpperCase()})`;
  tagEl.className = 'solved-tag failed-tag';
  const nextLabel = (currentRoundIndex < tourneyTotalRounds - 1) ? 'NEXT ROUND >>' : 'SEE FINAL STANDINGS >>';
  showRevealCard(comp, nextLabel);
}

function syncMyTourneyStats(me) {
  if (isHost) {
    broadcastTourney({ type: 'ROSTER_UPDATE', players: tourneyPlayers });
  } else if (conn && conn.open) {
    conn.send({
      type: 'CLIENT_SCORE_UPDATE',
      playerId: me.id,
      score: me.score,
      lives: me.lives,
      eliminated: me.eliminated
    });
  }
}

function finishSoloOrPvpReveal(winner, earnedPts = 100) {
  const round = activeRounds[currentRoundIndex];
  const tagEl = document.getElementById('reveal-status-tag');

  if (winner === 'me') {
    tagEl.innerText = activeMode === 'pvp'
      ? `⚡ ${(userProfileName || 'YOU').toUpperCase()} FASTEST! +${earnedPts} PTS!`
      : `+${earnedPts} PTS • CORRECT ANSWER!`;
    tagEl.className = 'solved-tag';
    playTone(523, 'square', 0.12);
    setTimeout(() => playTone(659, 'square', 0.12), 120);
    setTimeout(() => playTone(784, 'square', 0.25), 240);
    launchConfetti();
  } else if (winner === 'rival') {
    tagEl.innerText = `🐢 TOO SLOW! RIVAL ANSWERED FIRST (+${earnedPts} RIVAL)`;
    tagEl.className = 'solved-tag failed-tag';
    playTone(150, 'sawtooth', 0.35);
  } else {
    tagEl.innerText = '0 PTS • OUT OF ATTEMPTS (3/3 MISTAKES)';
    tagEl.className = 'solved-tag failed-tag';
    playTone(140, 'sawtooth', 0.4);
  }

  const nextLabel = (currentRoundIndex < activeRounds.length - 1) ? 'NEXT ROUND >>' : 'SEE FINAL SCORE >>';
  showRevealCard(round, nextLabel);
}

function showRevealCard(compObj, nextButtonText) {
  document.getElementById('svg-diagram-container').innerHTML = compObj.svgDiagram;
  document.getElementById('reveal-title-en').innerText = compObj.answerEn;
  document.getElementById('reveal-title-es').innerText = compObj.answerEs;
  document.getElementById('reveal-definition').innerText = compObj.definition;

  const allTerms = [];
  const seen = new Set();
  compObj.clues.forEach(c => {
    (c.keywords || []).forEach(kw => {
      if (!seen.has(kw.en)) {
        seen.add(kw.en);
        allTerms.push(kw);
      }
    });
  });
  renderKeywordsList(allTerms.slice(0, 8), 'reveal-keywords-list');

  const btnNext = document.getElementById('btn-next-round');
  const waitText = document.getElementById('pvp-next-wait');

  if ((activeMode === 'pvp' || activeMode === 'tourney') && !isHost) {
    btnNext.classList.add('hidden');
    waitText.classList.remove('hidden');
  } else {
    btnNext.classList.remove('hidden');
    waitText.classList.add('hidden');
    btnNext.innerText = nextButtonText;
  }

  showScreen('screen-reveal');
}

// =========================================================================
// AVANZAR RONDA
// =========================================================================
function handleNextStep() {
  if (activeMode === 'tourney') {
    const alivePlayers = tourneyPlayers.filter(p => !p.eliminated);
    const shouldEndEarly = eliminationEnabled && tourneyPlayers.length > 1 && alivePlayers.length <= 1;

    if (currentRoundIndex < tourneyTotalRounds - 1 && !shouldEndEarly) {
      const nextIdx = currentRoundIndex + 1;
      broadcastTourney({ type: 'NEXT_TOURNEY_ROUND', roundIndex: nextIdx, players: tourneyPlayers });
      startTourneyRound(nextIdx);
    } else {
      broadcastTourney({ type: 'TOURNEY_GAME_OVER', players: tourneyPlayers });
      showTourneyGameOver();
    }
  } else {
    if (currentRoundIndex < activeRounds.length - 1) {
      const nextIdx = currentRoundIndex + 1;
      if (activeMode === 'pvp' && conn) conn.send({ type: 'NEXT_ROUND', roundIndex: nextIdx });
      startSoloOrPvpRound(nextIdx);
    } else {
      if (activeMode === 'pvp' && conn) conn.send({ type: 'GAME_OVER' });
      showSoloOrPvpGameOver();
    }
  }
}

// =========================================================================
// PANTALLAS FINALES (SOLO, 1V1 Y TORNEO) + GUARDADO DE ESTADÍSTICAS
// =========================================================================
function showSoloOrPvpGameOver() {
  const diffLabel = selectedDifficulty.toUpperCase();
  const myName = (userProfileName || 'PLAYER').toUpperCase();
  const scoreCard = document.getElementById('final-score-card');

  document.getElementById('final-scores-wrapper').classList.remove('hidden');
  document.getElementById('summary-components').classList.remove('hidden');
  document.getElementById('tourney-final-table-wrap').classList.add('hidden');

  if (activeMode === 'solo') {
    playerStats.soloCompleted++;
    saveStats();

    scoreCard.innerHTML = `${myName}'S FINAL SCORE: <span>${myScore}</span> PTS`;
    let rankText = `[${diffLabel}] APPRENTICE TECHNICIAN`;
    if (myScore >= 500) rankText = `🏆 [${diffLabel}] GRAND MECHATRONICS MASTER!`;
    else if (myScore >= 300) rankText = `⚡ [${diffLabel}] SENIOR AUTOMATION ENGINEER`;
    document.getElementById('final-rank-title').innerText = rankText;

    document.getElementById('summary-components').innerHTML = activeRounds.map((r, i) => {
      const icon = roundResults[i] === 'me' ? '✅ Solved' : '❌ Missed';
      return `<div>${icon} — <strong>Round ${i + 1}:</strong> ${r.componentName}</div>`;
    }).join('');
    document.getElementById('btn-play-again').classList.remove('hidden');
  } else {
    if (myScore > rivalScore) {
      playerStats.pvpWins++;
      saveStats();
    }

    scoreCard.innerHTML = `${myName}: <span>${myScore} PTS</span> &nbsp;|&nbsp; RIVAL: <span style="color:var(--neon-pink)">${rivalScore} PTS</span>`;
    let duelResult = "🤝 IT'S A DRAW!";
    if (myScore > rivalScore) duelResult = `🏆 ${myName} WINS THE 1V1 DUEL!`;
    else if (rivalScore > myScore) duelResult = "💀 RIVAL WINS THE 1V1 DUEL!";
    document.getElementById('final-rank-title').innerText = duelResult;

    document.getElementById('summary-components').innerHTML = activeRounds.map((r, i) => {
      let badge = '⚪ Nobody scored';
      if (roundResults[i] === 'me') badge = `🟢 ${myName} won`;
      else if (roundResults[i] === 'rival') badge = '🔴 Rival won';
      return `<div>${badge} — <strong>Round ${i + 1}:</strong> ${r.componentName}</div>`;
    }).join('');
    document.getElementById('btn-play-again').classList.add('hidden');
  }

  if (myScore >= 300 || (activeMode === 'pvp' && myScore > rivalScore)) launchConfetti();
  showScreen('screen-gameover');
}

function showTourneyGameOver() {
  document.getElementById('tourney-elim-overlay').classList.add('hidden');
  document.getElementById('final-scores-wrapper').classList.add('hidden');
  document.getElementById('summary-components').classList.add('hidden');
  document.getElementById('tourney-final-table-wrap').classList.remove('hidden');
  document.getElementById('btn-play-again').classList.add('hidden');

  const sorted = [...tourneyPlayers].sort((a, b) => {
    if (eliminationEnabled && a.eliminated !== b.eliminated) {
      return a.eliminated ? 1 : -1;
    }
    return b.score - a.score;
  });

  const champion = sorted[0];
  const me = getMyTourneyPlayer();
  if (me && me.score > playerStats.maxTourneyScore) playerStats.maxTourneyScore = me.score;
  if (champion && me && champion.id === me.id && tourneyPlayers.length > 1) playerStats.tourneyWins++;
  saveStats();

  document.getElementById('final-rank-title').innerText = `🏆 CHAMPION: #${champion.listNumber} ${champion.name.toUpperCase()} (${champion.score} PTS)`;

  document.getElementById('tourney-final-tbody').innerHTML = sorted.map((p, idx) => {
    const medal = idx === 0 ? '🥇 #1' : idx === 1 ? '🥈 #2' : idx === 2 ? '🥉 #3' : `#${idx + 1}`;
    const status = p.eliminated
      ? `💀 ELIMINATION PLAYER ${p.listNumber}`
      : `❤️ ${p.lives} LIVES`;
    return `
      <tr class="${p.eliminated ? 'eliminated-row' : ''}">
        <td>${medal}</td>
        <td>#${p.listNumber}</td>
        <td><strong>${p.name}</strong></td>
        <td style="color:var(--neon-green); font-weight:bold;">${p.score} PTS</td>
        <td>${status}</td>
      </tr>
    `;
  }).join('');

  launchConfetti();
  showScreen('screen-gameover');
}

function replayCurrentMode() {
  if (activeMode === 'solo') startSoloGame();
  else openModeSelect();
}

// =========================================================================
// MOTOR DE VOZ FEMENINA EN INGLÉS (ORACIÓN COMPLETA Y PALABRAS CLAVE)
// =========================================================================
function speakEnglish(text, buttonId = null, rate = 0.86) {
  if (!('speechSynthesis' in window)) {
    alert("Tu navegador no soporta lectura de voz.");
    return;
  }

  stopVoice();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = rate;
  utterance.pitch = 1.08;

  const voices = window.speechSynthesis.getVoices();
  const preferredFemaleNames = ['Aria', 'Jenny', 'Google US English', 'Samantha', 'Victoria', 'Zira', 'Female'];

  let selectedVoice = null;
  for (const name of preferredFemaleNames) {
    selectedVoice = voices.find(v => v.lang.startsWith('en') && v.name.includes(name));
    if (selectedVoice) break;
  }
  if (!selectedVoice) selectedVoice = voices.find(v => v.lang.startsWith('en'));
  if (selectedVoice) utterance.voice = selectedVoice;

  if (buttonId) {
    const btn = document.getElementById(buttonId);
    if (btn) btn.classList.add('speaking');
    utterance.onend = () => { if (btn) btn.classList.remove('speaking'); };
    utterance.onerror = () => { if (btn) btn.classList.remove('speaking'); };
  }

  window.speechSynthesis.speak(utterance);
}

function speakWord(wordText) {
  speakEnglish(wordText, null, 0.82);
}

function speakCurrentClue() {
  speakEnglish(activeRounds[currentRoundIndex].clues[currentClueIndex].en, 'btn-speak-clue', 0.86);
}

function speakReveal() {
  const round = activeRounds[currentRoundIndex];
  speakEnglish(`${round.answerEn} ${round.definition}`, 'btn-speak-reveal', 0.86);
}

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}

// =========================================================================
// CONFETI
// =========================================================================
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = Array.from({ length: 90 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * -canvas.height,
    size: Math.random() * 8 + 4,
    color: ['#00d2ff', '#ff0055', '#00ff88', '#ffd166'][Math.floor(Math.random() * 4)],
    speed: Math.random() * 4 + 2
  }));

  let frames = 0;
  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.y += p.speed;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.size, p.size);
    });
    frames++;
    if (frames < 140) requestAnimationFrame(update);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  update();
}
