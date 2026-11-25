// Función auxiliar para generar un esquema técnico SVG limpio por componente
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
// BANCO DE 30 COMPONENTES ELECTRÓNICOS ORDENADOS POR DIFICULTAD
// =========================================================================
const componentsBank = {
  hard: [
    {
      acceptedAnswers: ["hall effect sensor", "hall sensor", "a hall effect sensor", "sensor de efecto hall", "hall effect"],
      answerEn: "IT'S A HALL EFFECT SENSOR!",
      answerEs: "¡ES UN SENSOR DE EFECTO HALL!",
      componentName: "Hall Effect Sensor",
      definition: "A transducer that varies its output voltage in response to a magnetic field, used for contactless proximity switching, positioning, and speed detection.",
      clues: [
        { door: "01", en: "It is a solid-state transducer with no moving parts that operates without physical contact.", es: "Es un transductor de estado sólido sin partes móviles que opera sin contacto físico." },
        { door: "02", en: "It relies on the Lorentz force deflecting charge carriers inside a thin semiconductor strip.", es: "Depende de la fuerza de Lorentz desviando portadores de carga dentro de una lámina semiconductora." },
        { door: "03", en: "It produces a measurable transverse voltage proportional to the perpendicular magnetic flux density.", es: "Produce un voltaje transversal medible proporcional a la densidad de flujo magnético perpendicular." },
        { door: "04", en: "It is used inside brushless DC motors to detect rotor magnet position and in wheel speed sensors.", es: "Se usa dentro de motores brushless para detectar la posición del rotor y en sensores de velocidad." }
      ],
      svgDiagram: makeSchematicSVG("HALL [B]", "MAGNETIC FLUX TRANSDUCER", "#7c3aed")
    },
    {
      acceptedAnswers: ["rotary encoder", "encoder", "a rotary encoder", "an encoder", "quadrature encoder"],
      answerEn: "IT'S A ROTARY ENCODER!",
      answerEs: "¡ES UN ENCODER ROTATORIO!",
      componentName: "Rotary Encoder",
      definition: "An electromechanical sensor that converts the angular position or motion of a shaft into digital square-wave pulses (Channels A & B) for closed-loop control.",
      clues: [
        { door: "01", en: "It is an electromechanical transducer mounted on a rotating shaft.", es: "Es un transductor electromecánico montado sobre un eje giratorio." },
        { door: "02", en: "Unlike a potentiometer, it has no mechanical stops and can rotate 360 degrees continuously.", es: "A diferencia de un potenciómetro, no tiene topes mecánicos y puede girar 360 grados continuamente." },
        { door: "03", en: "It uses slotted optical discs or magnetic poles to generate digital square-wave pulses.", es: "Utiliza discos ópticos ranurados o polos magnéticos para generar pulsos digitales de onda cuadrada." },
        { door: "04", en: "By outputting two quadrature signals out of phase (Channels A and B), it reveals both speed and direction.", es: "Al emitir dos señales en cuadratura desfasadas (Canales A y B), revela tanto velocidad como dirección." }
      ],
      svgDiagram: makeSchematicSVG("ENC A/B", "QUADRATURE ANGULAR FEEDBACK", "#0284c7")
    },
    {
      acceptedAnswers: ["mosfet", "a mosfet", "transistor mosfet", "power mosfet"],
      answerEn: "IT'S A MOSFET!",
      answerEs: "¡ES UN TRANSISTOR MOSFET!",
      componentName: "MOSFET Transistor",
      definition: "A voltage-controlled field-effect transistor with an insulated gate, widely used for high-speed, high-efficiency power switching in motor drivers and converters.",
      clues: [
        { door: "01", en: "It is a three-terminal semiconductor device whose pins are called Gate, Drain, and Source.", es: "Es un dispositivo semiconductor de tres terminales llamadas Compuerta (Gate), Drenador y Fuente." },
        { door: "02", en: "Unlike a BJT, it is voltage-controlled and draws virtually zero steady-state input current.", es: "A diferencia de un BJT, se controla por voltaje y consume casi cero corriente de entrada en estado estable." },
        { door: "03", en: "A thin layer of silicon dioxide insulates its control terminal from the conductive channel.", es: "Una delgada capa de dióxido de silicio aísla su terminal de control del canal conductor." },
        { door: "04", en: "It is the preferred switch for high-frequency PWM motor control and switching power supplies.", es: "Es el interruptor preferido para control PWM de motores de alta frecuencia y fuentes conmutadas." }
      ],
      svgDiagram: makeSchematicSVG("MOSFET", "VOLTAGE-CONTROLLED POWER SWITCH", "#dc2626")
    },
    {
      acceptedAnswers: ["optocoupler", "optoisolator", "an optocoupler", "optoacoplador"],
      answerEn: "IT'S AN OPTOCOUPLER!",
      answerEs: "¡ES UN OPTOACOPLADOR!",
      componentName: "Optocoupler (Optoisolator)",
      definition: "An electronic component that transfers electrical signals between two isolated circuits using light, protecting low-voltage microcontrollers from high-voltage surges.",
      clues: [
        { door: "01", en: "It is a single IC package that provides galvanic electrical isolation between input and output.", es: "Es un encapsulado integrado que proporciona aislamiento eléctrico galvánico entre entrada y salida." },
        { door: "02", en: "Inside its dark housing, there is no physical wire connecting the control side to the load side.", es: "Dentro de su encapsulado oscuro no hay ningún cable físico conectando el lado de control con la carga." },
        { door: "03", en: "It combines an internal infrared LED aimed directly at a light-sensitive phototransistor.", es: "Combina un LED infrarrojo interno apuntando directamente hacia un fototransistor sensible a la luz." },
        { door: "04", en: "It protects sensitive 5V microcontrollers from high-voltage noise and spikes in industrial PLCs.", es: "Protege microcontroladores sensibles de 5V contra ruido y picos de alto voltaje en PLCs industriales." }
      ],
      svgDiagram: makeSchematicSVG("OPTO-IC", "OPTICAL GALVANIC ISOLATION", "#0d9488")
    },
    {
      acceptedAnswers: ["h-bridge", "h bridge", "an h-bridge", "an h bridge", "puente h", "l298n"],
      answerEn: "IT'S AN H-BRIDGE!",
      answerEs: "¡ES UN PUENTE H!",
      componentName: "H-Bridge Driver",
      definition: "An electronic circuit topology using four switching elements to reverse voltage polarity across a load, enabling bidirectional DC motor rotation.",
      clues: [
        { door: "01", en: "It is an electronic circuit topology named after the visual letter shape of its schematic.", es: "Es una topología de circuito nombrada así por la forma de letra de su diagrama esquemático." },
        { door: "02", en: "It uses four electronic switches arranged in two parallel branches with the load in the center.", es: "Usa cuatro interruptores electrónicos dispuestos en dos ramas paralelas con la carga en el centro." },
        { door: "03", en: "Closing switches diagonally reverses voltage polarity, while closing two on the same side causes a short circuit.", es: "Cerrar interruptores en diagonal invierte la polaridad; cerrar dos del mismo lado causa cortocircuito." },
        { door: "04", en: "Found inside driver chips like the L298N, it lets a robot drive a DC motor forward and backward.", es: "Presente en chips como el L298N, permite que un robot gire un motor DC hacia adelante y atrás." }
      ],
      svgDiagram: makeSchematicSVG("H-BRIDGE", "BIDIRECTIONAL MOTOR DRIVER", "#2563eb")
    },
    {
      acceptedAnswers: ["stepper motor", "a stepper motor", "motor a pasos", "step motor", "stepper"],
      answerEn: "IT'S A STEPPER MOTOR!",
      answerEs: "¡ES UN MOTOR A PASOS!",
      componentName: "Stepper Motor",
      definition: "A brushless DC electric motor that divides a full rotation into equal discrete steps, allowing precise open-loop angular positioning.",
      clues: [
        { door: "01", en: "It is a brushless actuator that divides a 360-degree rotation into equal discrete increments.", es: "Es un actuador sin escobillas que divide una rotación de 360 grados en incrementos discretos iguales." },
        { door: "02", en: "Its rotor features permanent magnets with gear-like teeth surrounded by multiple stator coils.", es: "Su rotor tiene imanes permanentes con dientes tipo engranaje rodeados por múltiples bobinas." },
        { door: "03", en: "Each digital pulse moves the shaft by a fixed angle (such as 1.8 degrees) without needing an encoder.", es: "Cada pulso digital mueve el eje un ángulo fijo (como 1.8 grados) sin necesitar un encoder." },
        { door: "04", en: "NEMA 17 models are the standard actuators used in 3D printers and desktop CNC machines.", es: "Los modelos NEMA 17 son los actuadores estándar usados en impresoras 3D y máquinas CNC." }
      ],
      svgDiagram: makeSchematicSVG("STEP 1.8°", "DISCRETE OPEN-LOOP ACTUATOR", "#d97706")
    },
    {
      acceptedAnswers: ["zener diode", "a zener diode", "diodo zener", "zener"],
      answerEn: "IT'S A ZENER DIODE!",
      answerEs: "¡ES UN DIODO ZENER!",
      componentName: "Zener Diode",
      definition: "A special semiconductor diode designed to reliably allow current to flow backward when a specific reverse breakdown voltage is reached.",
      clues: [
        { door: "01", en: "It is a heavily doped semiconductor junction device with a bent cathode bar in its symbol.", es: "Es un dispositivo semiconductor fuertemente dopado con una barra de cátodo doblada en su símbolo." },
        { door: "02", en: "Unlike standard rectifiers, it is intentionally operated in the reverse-bias breakdown region.", es: "A diferencia de los rectificadores comunes, se opera intencionalmente en polarización inversa." },
        { door: "03", en: "Once its specific breakdown threshold is reached, it maintains an almost constant voltage across itself.", es: "Al alcanzar su umbral de ruptura específico, mantiene un voltaje casi constante entre sus terminales." },
        { door: "04", en: "It is widely used as a simple shunt voltage reference and over-voltage clamping protector.", es: "Se usa ampliamente como referencia simple de voltaje y protección contra sobretensiones." }
      ],
      svgDiagram: makeSchematicSVG("ZENER Vz", "REVERSE BREAKDOWN REGULATOR", "#9333ea")
    },
    {
      acceptedAnswers: ["crystal oscillator", "quartz crystal", "crystal", "oscilador de cristal", "a crystal oscillator"],
      answerEn: "IT'S A CRYSTAL OSCILLATOR!",
      answerEs: "¡ES UN OSCILADOR DE CRISTAL!",
      componentName: "Crystal Oscillator",
      definition: "An electronic resonator that uses the mechanical resonance of a vibrating piezoelectric quartz crystal to create an electrical signal with a very precise frequency.",
      clues: [
        { door: "01", en: "It is a passive frequency-determining component housed in a small metallic can with two pins.", es: "Es un componente pasivo determinante de frecuencia alojado en una cápsula metálica de dos pines." },
        { door: "02", en: "It operates on the inverse piezoelectric effect, vibrating mechanically when an AC voltage is applied.", es: "Opera bajo el efecto piezoeléctrico inverso, vibrando mecánicamente al aplicarle voltaje alterno." },
        { door: "03", en: "It provides vastly higher frequency stability than RC or LC timing circuits.", es: "Proporciona una estabilidad de frecuencia muchísimo mayor que los circuitos temporizadores RC o LC." },
        { door: "04", en: "Rated at values like 16 MHz or 32.768 kHz, it acts as the precision heartbeat clock of microcontrollers.", es: "Con valores como 16 MHz o 32.768 kHz, actúa como el reloj de precisión de los microcontroladores." }
      ],
      svgDiagram: makeSchematicSVG("XTAL MHz", "PIEZOELECTRIC CLOCK RESONATOR", "#0891b2")
    },
    {
      acceptedAnswers: ["strain gauge", "strain gage", "a strain gauge", "galga extensiometrica", "galga extensiométrica"],
      answerEn: "IT'S A STRAIN GAUGE!",
      answerEs: "¡ES UNA GALGA EXTENSIOMÉTRICA!",
      componentName: "Strain Gauge",
      definition: "A foil sensor whose electrical resistance varies proportionally with tiny mechanical deformation, typically wired in a Wheatstone bridge inside load cells.",
      clues: [
        { door: "01", en: "It consists of a thin insulating backing supporting a zig-zag metallic foil pattern.", es: "Consiste en un respaldo aislante delgado que soporta un patrón metálico en forma de zig-zag." },
        { door: "02", en: "It must be bonded directly onto the surface of a mechanical structure using special adhesive.", es: "Debe pegarse directamente sobre la superficie de una estructura mecánica usando adhesivo especial." },
        { door: "03", en: "When stretched or compressed, its conductor geometry changes, causing a tiny shift in resistance.", es: "Al estirarse o comprimirse, cambia la geometría de su conductor, causando una ligera variación de resistencia." },
        { door: "04", en: "Four of them are wired in a Wheatstone bridge inside digital scales and robotic force load cells.", es: "Se conectan cuatro en puente de Wheatstone dentro de básculas digitales y celdas de carga robóticas." }
      ],
      svgDiagram: makeSchematicSVG("STRAIN ΔR", "MECHANICAL DEFORMATION SENSOR", "#be123c")
    },
    {
      acceptedAnswers: ["solenoid", "a solenoid", "solenoide", "electromagnetic solenoid"],
      answerEn: "IT'S A SOLENOID!",
      answerEs: "¡ES UN SOLENOIDE!",
      componentName: "Solenoid Actuator",
      definition: "A cylindrical coil of wire acting as a magnet when carrying electric current, converting electrical energy directly into controlled linear mechanical motion.",
      clues: [
        { door: "01", en: "It consists of a tightly wound helical coil of wire around a hollow core.", es: "Consiste en una bobina helicoidal de alambre enrollada alrededor de un núcleo hueco." },
        { door: "02", en: "It converts electrical energy directly into mechanical work via electromagnetism.", es: "Convierte la energía eléctrica directamente en trabajo mecánico mediante electromagnetismo." },
        { door: "03", en: "Unlike a standard motor, its output motion is strictly linear, not rotational.", es: "A diferencia de un motor estándar, su movimiento de salida es estrictamente lineal, no rotacional." },
        { door: "04", en: "It pulls or pushes a ferromagnetic plunger to act as an electronic door lock or fluid valve.", es: "Jala o empuja un émbolo ferromagnético para actuar como cerradura eléctrica o válvula de fluidos." }
      ],
      svgDiagram: makeSchematicSVG("SOLENOID", "LINEAR ELECTROMAGNETIC PLUNGER", "#ea580c")
    }
  ],

  normal: [
    {
      acceptedAnswers: ["transistor", "bjt", "a transistor", "bjt transistor", "npn transistor"],
      answerEn: "IT'S A TRANSISTOR (BJT)!",
      answerEs: "¡ES UN TRANSISTOR (BJT)!",
      componentName: "Bipolar Junction Transistor (BJT)",
      definition: "A three-terminal semiconductor device (Base, Collector, Emitter) used to amplify weak electronic signals or act as a fast solid-state switch.",
      clues: [
        { door: "01", en: "It is a fundamental three-layer semiconductor device available in NPN and PNP polarities.", es: "Es un dispositivo semiconductor fundamental de tres capas disponible en polaridades NPN y PNP." },
        { door: "02", en: "Its three terminals are named Base, Collector, and Emitter.", es: "Sus tres terminales se llaman Base, Colector y Emisor." },
        { door: "03", en: "A small current entering its middle terminal controls a much larger current between the other two.", es: "Una pequeña corriente en su terminal central controla una corriente mucho mayor entre las otras dos." },
        { door: "04", en: "Common models like the 2N2222 are used both as signal amplifiers and electronic switches.", es: "Modelos comunes como el 2N2222 se usan tanto como amplificadores de señal como interruptores." }
      ],
      svgDiagram: makeSchematicSVG("BJT NPN", "CURRENT-CONTROLLED AMPLIFIER", "#2563eb")
    },
    {
      acceptedAnswers: ["relay", "a relay", "relevador", "rele", "relé"],
      answerEn: "IT'S A RELAY!",
      answerEs: "¡ES UN RELEVADOR (RELÉ)!",
      componentName: "Electromechanical Relay",
      definition: "An electrically operated switch that uses an internal electromagnet to mechanically open or close high-power AC/DC contacts.",
      clues: [
        { door: "01", en: "It is an electrically operated switch that makes a distinct clicking sound when activated.", es: "Es un interruptor operado eléctricamente que hace un sonido de clic característico al activarse." },
        { door: "02", en: "Inside its plastic box, an internal electromagnet pulls a metal armature to close contacts.", es: "Dentro de su caja plástica, un electroimán interno atrae una armadura metálica para cerrar contactos." },
        { door: "03", en: "Its contacts are typically labeled COM (Common), NO (Normally Open), and NC (Normally Closed).", es: "Sus contactos suelen etiquetarse como COM (Común), NO (Normalmente Abierto) y NC (Normalmente Cerrado)." },
        { door: "04", en: "It allows a 5V Arduino pin to safely turn on a 120V AC household lamp or water pump.", es: "Permite que un pin de 5V de Arduino encienda de forma segura una lámpara de 120V AC o bomba." }
      ],
      svgDiagram: makeSchematicSVG("RELAY NO/NC", "ELECTROMECHANICAL POWER SWITCH", "#059669")
    },
    {
      acceptedAnswers: ["potentiometer", "a potentiometer", "potenciometro", "potenciómetro", "pot"],
      answerEn: "IT'S A POTENTIOMETER!",
      answerEs: "¡ES UN POTENCIÓMETRO!",
      componentName: "Potentiometer",
      definition: "A three-terminal passive resistor with a sliding or rotating contact that forms an adjustable voltage divider.",
      clues: [
        { door: "01", en: "It is a passive component with three terminals and a manually adjustable shaft or slider.", es: "Es un componente pasivo con tres terminales y un eje o deslizador ajustable manualmente." },
        { door: "02", en: "Its main function in analog circuits is to act as a variable voltage divider.", es: "Su función principal en circuitos analógicos es actuar como un divisor de voltaje variable." },
        { door: "03", en: "Rotating its wiper moves the contact along an internal resistive track.", es: "Girar su cursor mueve el contacto a lo largo de una pista resistiva interna." },
        { door: "04", en: "You turn its knob to adjust audio volume or read joystick angles on an analog pin.", es: "Giras su perilla para ajustar el volumen de audio o leer ángulos de joystick en un pin analógico." }
      ],
      svgDiagram: makeSchematicSVG("POT 10kΩ", "VARIABLE VOLTAGE DIVIDER", "#d97706")
    },
    {
      acceptedAnswers: ["servo motor", "servo", "a servo motor", "servomotor", "a servo"],
      answerEn: "IT'S A SERVO MOTOR!",
      answerEs: "¡ES UN SERVOMOTOR!",
      componentName: "Servo Motor",
      definition: "A closed-loop rotary actuator combining a DC motor, reduction gears, a potentiometer, and control circuitry to hold a precise angle.",
      clues: [
        { door: "01", en: "It is a compact rotary actuator that integrates a motor, a gearbox, and feedback electronics.", es: "Es un actuador rotatorio compacto que integra un motor, caja de engranes y electrónica de control." },
        { door: "02", en: "It has a three-wire cable: Power, Ground, and a PWM control signal wire.", es: "Tiene un cable de tres hilos: Alimentación, Tierra y un cable de señal de control PWM." },
        { door: "03", en: "Standard hobby versions rotate accurately to any commanded angle between 0 and 180 degrees.", es: "Las versiones estándar giran con precisión a cualquier ángulo ordenado entre 0 y 180 grados." },
        { door: "04", en: "Models like the SG90 are widely used in robotic grippers, pan-tilt cameras, and RC airplanes.", es: "Modelos como el SG90 se usan mucho en pinzas robóticas, cámaras y aviones a radio control." }
      ],
      svgDiagram: makeSchematicSVG("SERVO PWM", "CLOSED-LOOP ANGULAR ACTUATOR", "#7c3aed")
    },
    {
      acceptedAnswers: ["ultrasonic sensor", "ultrasonic", "hc-sr04", "an ultrasonic sensor", "sensor ultrasonico", "sensor ultrasónico"],
      answerEn: "IT'S AN ULTRASONIC SENSOR!",
      answerEs: "¡ES UN SENSOR ULTRASÓNICO!",
      componentName: "Ultrasonic Distance Sensor",
      definition: "A contactless sensor that measures distance to an object by emitting high-frequency sound waves and timing the returning echo.",
      clues: [
        { door: "01", en: "It looks like a pair of metallic eyes labeled Trigger and Echo on a small blue PCB.", es: "Parece un par de ojos metálicos etiquetados Trigger y Echo sobre una pequeña placa azul." },
        { door: "02", en: "It emits high-frequency acoustic pulses above the range of human hearing (around 40 kHz).", es: "Emite pulsos acústicos de alta frecuencia por encima del oído humano (alrededor de 40 kHz)." },
        { door: "03", en: "It calculates distance using the speed of sound and the time-of-flight of the reflected wave.", es: "Calcula la distancia usando la velocidad del sonido y el tiempo de vuelo de la onda reflejada." },
        { door: "04", en: "The HC-SR04 module is a classic sensor used on mobile robots to avoid crashing into walls.", es: "El módulo HC-SR04 es un sensor clásico usado en robots móviles para evitar chocar contra paredes." }
      ],
      svgDiagram: makeSchematicSVG("SONAR 40kHz", "ACOUSTIC TIME-OF-FLIGHT SENSOR", "#0284c7")
    },
    {
      acceptedAnswers: ["thermistor", "a thermistor", "termistor", "ntc thermistor", "ntc"],
      answerEn: "IT'S A THERMISTOR!",
      answerEs: "¡ES UN TERMISTOR!",
      componentName: "Thermistor (Temperature Sensor)",
      definition: "A thermally sensitive resistor whose electrical resistance changes predictably and significantly with temperature.",
      clues: [
        { door: "01", en: "Its name is a portmanteau combining the words 'thermal' and 'resistor'.", es: "Su nombre es una combinación de las palabras 'térmico' y 'resistor'." },
        { door: "02", en: "It is a two-terminal passive semiconductor sensor whose resistance varies sharply with heat.", es: "Es un sensor semiconductor pasivo de dos terminales cuya resistencia varía drásticamente con el calor." },
        { door: "03", en: "In NTC types, electrical resistance decreases as the surrounding temperature increases.", es: "En los tipos NTC, la resistencia eléctrica disminuye conforme aumenta la temperatura ambiente." },
        { door: "04", en: "It is mounted inside 3D printer hotends and battery packs to monitor and prevent overheating.", es: "Se monta dentro de extrusores de impresoras 3D y baterías para monitorear y evitar sobrecalentamiento." }
      ],
      svgDiagram: makeSchematicSVG("NTC TEMP", "THERMALLY SENSITIVE RESISTOR", "#e11d48")
    },
    {
      acceptedAnswers: ["photoresistor", "ldr", "a photoresistor", "fotorresistencia", "light dependent resistor"],
      answerEn: "IT'S A PHOTORESISTOR (LDR)!",
      answerEs: "¡ES UNA FOTORRESISTENCIA (LDR)!",
      componentName: "Photoresistor (LDR)",
      definition: "A passive electronic component whose resistance decreases as the intensity of incident light increases.",
      clues: [
        { door: "01", en: "It is a two-terminal passive component with a wavy red or orange cadmium-sulfide track on top.", es: "Es un componente pasivo de dos terminales con una pista ondulada rojiza o naranja en la parte superior." },
        { door: "02", en: "It exhibits photoconductivity, changing its electrical resistance based on optical illumination.", es: "Presenta fotoconductividad, cambiando su resistencia eléctrica según la iluminación óptica." },
        { door: "03", en: "In complete darkness its resistance can exceed 1 MΩ, while in bright sunlight it drops to a few hundred ohms.", es: "En oscuridad total su resistencia supera 1 MΩ, mientras que bajo luz brillante baja a cientos de ohmios." },
        { door: "04", en: "It is used in automatic street lamps that turn on at dusk and in line-following robots.", es: "Se usa en lámparas de calle automáticas que encienden al anochecer y en robots seguidores de línea." }
      ],
      svgDiagram: makeSchematicSVG("LDR LUX", "LIGHT-DEPENDENT RESISTOR", "#eab308")
    },
    {
      acceptedAnswers: ["inductor", "coil", "an inductor", "bobina", "choke"],
      answerEn: "IT'S AN INDUCTOR!",
      answerEs: "¡ES UN INDUCTOR (BOBINA)!",
      componentName: "Inductor / Coil",
      definition: "A passive two-terminal component that stores energy in a magnetic field when electric current flows through it, resisting sudden changes in current.",
      clues: [
        { door: "01", en: "It is a passive two-terminal component formed by winding insulated copper wire into a coil.", es: "Es un componente pasivo de dos terminales formado al enrollar alambre de cobre aislado en espiral." },
        { door: "02", en: "Its value is measured in Henries (H) and it often uses a ferrite or iron core.", es: "Su valor se mide en Henrios (H) y a menudo utiliza un núcleo de ferrita o hierro." },
        { door: "03", en: "It stores energy in a magnetic field and opposes sudden changes in electric current.", es: "Almacena energía en un campo magnético y se opone a los cambios bruscos en la corriente eléctrica." },
        { door: "04", en: "It is an essential component in buck/boost DC-DC voltage converters and radio frequency filters.", es: "Es un componente esencial en convertidores de voltaje DC-DC y filtros de radiofrecuencia." }
      ],
      svgDiagram: makeSchematicSVG("COIL mH", "MAGNETIC ENERGY STORAGE", "#b45309")
    },
    {
      acceptedAnswers: ["transformer", "a transformer", "transformador"],
      answerEn: "IT'S A TRANSFORMER!",
      answerEs: "¡ES UN TRANSFORMADOR!",
      componentName: "Electrical Transformer",
      definition: "A passive device that transfers alternating-current electrical energy between two or more windings through electromagnetic induction to step voltage up or down.",
      clues: [
        { door: "01", en: "It consists of primary and secondary copper windings wrapped around a laminated iron core.", es: "Consiste en devanados primario y secundario de cobre enrollados alrededor de un núcleo de hierro laminado." },
        { door: "02", en: "It works strictly with Alternating Current (AC) and will not transfer steady DC voltage.", es: "Funciona estrictamente con Corriente Alterna (AC) y no transfiere voltaje continuo estable." },
        { door: "03", en: "The ratio of turns between its two coils determines whether it steps voltage up or down.", es: "La relación de vueltas entre sus dos bobinas determina si eleva o reduce el voltaje." },
        { door: "04", en: "It steps down 120V/220V wall mains electricity to safer low voltages like 12V or 24V AC.", es: "Reduce la electricidad de 120V/220V de la pared a voltajes bajos más seguros como 12V o 24V AC." }
      ],
      svgDiagram: makeSchematicSVG("AC N1:N2", "ELECTROMAGNETIC VOLTAGE STEP", "#475569")
    },
    {
      acceptedAnswers: ["voltage regulator", "regulator", "a voltage regulator", "regulador de voltaje", "lm7805", "7805"],
      answerEn: "IT'S A VOLTAGE REGULATOR!",
      answerEs: "¡ES UN REGULADOR DE VOLTAJE!",
      componentName: "Voltage Regulator",
      definition: "An integrated circuit designed to automatically maintain a constant output voltage level regardless of changes in input voltage or load current.",
      clues: [
        { door: "01", en: "It is a three-pin integrated circuit with Input, Ground, and Output terminals, often with a metal heatsink tab.", es: "Es un circuito integrado de tres pines con Entrada, Tierra y Salida, a menudo con aleta disipadora." },
        { door: "02", en: "Its job is to deliver a clean, constant DC voltage even if the battery voltage fluctuates.", es: "Su trabajo es entregar un voltaje DC limpio y constante aunque el voltaje de la batería fluctúe." },
        { door: "03", en: "Linear versions dissipate excess input voltage as heat, so they often require an aluminum heatsink.", es: "Las versiones lineales disipan el exceso de voltaje como calor, por lo que suelen requerir disipador." },
        { door: "04", en: "Famous chips like the LM7805 convert an unregulated 9V or 12V supply into a steady 5V output.", es: "Chips famosos como el LM7805 convierten una fuente de 9V o 12V en una salida estable de 5V." }
      ],
      svgDiagram: makeSchematicSVG("REG 5.0V", "CONSTANT DC OUTPUT STABILIZER", "#0f766e")
    }
  ],

  easy: [
    {
      acceptedAnswers: ["microcontroller", "a microcontroller", "microcontrolador", "mcu", "arduino"],
      answerEn: "IT'S A MICROCONTROLLER!",
      answerEs: "¡ES UN MICROCONTROLADOR!",
      componentName: "Microcontroller (MCU)",
      definition: "A compact integrated circuit containing a processor core, memory, and programmable input/output peripherals on a single chip.",
      clues: [
        { door: "01", en: "It is a complete small computer integrated onto a single semiconductor chip.", es: "Es una pequeña computadora completa integrada en un solo chip semiconductor." },
        { door: "02", en: "It contains a CPU core, RAM, Flash program memory, and digital/analog I/O pins.", es: "Contiene un núcleo CPU, memoria RAM, memoria Flash de programa y pines de entrada/salida." },
        { door: "03", en: "Engineers program it in C or C++ to read sensors and control motors automatically.", es: "Los ingenieros lo programan en C o C++ para leer sensores y controlar motores automáticamente." },
        { door: "04", en: "Chips like the ATmega328P or ESP32 serve as the programmable brain of Arduino boards.", es: "Chips como el ATmega328P o ESP32 sirven como el cerebro programable de las placas Arduino." }
      ],
      svgDiagram: makeSchematicSVG("MCU CPU", "PROGRAMMABLE EMBEDDED BRAIN", "#1d4ed8")
    },
    {
      acceptedAnswers: ["breadboard", "a breadboard", "protoboard", "solderless breadboard"],
      answerEn: "IT'S A BREADBOARD!",
      answerEs: "¡ES UNA PROTOBOARD!",
      componentName: "Solderless Breadboard",
      definition: "A reusable rectangular plastic board with interconnected metal spring clips used to build and test electronic prototypes without soldering.",
      clues: [
        { door: "01", en: "It is a white rectangular plastic board covered with a grid of tiny pinhole sockets.", es: "Es una placa rectangular de plástico blanco cubierta con una cuadrícula de pequeños orificios." },
        { door: "02", en: "Hidden spring-loaded metal strips underneath connect rows of holes electrically.", es: "Tiras metálicas ocultas debajo conectan eléctricamente las filas de orificios." },
        { door: "03", en: "It has red and blue power rails running along the outer edges for VCC and Ground.", es: "Tiene rieles de alimentación rojo y azul en los bordes exteriores para VCC y Tierra." },
        { door: "04", en: "Students use it with jumper wires to build and test circuits quickly without using a soldering iron.", es: "Los estudiantes la usan con cables jumper para armar y probar circuitos rápido sin soldar." }
      ],
      svgDiagram: makeSchematicSVG("PROTO-BRD", "SOLDERLESS PROTOTYPING BOARD", "#0284c7")
    },
    {
      acceptedAnswers: ["capacitor", "a capacitor", "capacitor", "condensador"],
      answerEn: "IT'S A CAPACITOR!",
      answerEs: "¡ES UN CAPACITOR!",
      componentName: "Capacitor",
      definition: "A passive two-terminal component that stores electrical energy in an electrostatic field between two conductive plates separated by a dielectric.",
      clues: [
        { door: "01", en: "It consists of two conductive plates separated by an insulating material called a dielectric.", es: "Consiste en dos placas conductoras separadas por un material aislante llamado dieléctrico." },
        { door: "02", en: "Its electrical storage capacity is measured in Farads (usually microfarads or picofarads).", es: "Su capacidad de almacenamiento eléctrico se mide en Faradios (usualmente microfaradios o picofaradios)." },
        { door: "03", en: "Electrolytic types look like tiny cylinders and have a stripe marking their negative polarity leg.", es: "Los tipos electrolíticos parecen pequeños cilindros y tienen una franja marcando su pata negativa." },
        { door: "04", en: "It charges and discharges rapidly to smooth out voltage ripples in power supplies.", es: "Se carga y descarga rápidamente para suavizar las variaciones de voltaje en fuentes de poder." }
      ],
      svgDiagram: makeSchematicSVG("CAP μF", "ELECTROSTATIC CHARGE STORAGE", "#0891b2")
    },
    {
      acceptedAnswers: ["diode", "a diode", "diodo", "rectifier diode"],
      answerEn: "IT'S A DIODE!",
      answerEs: "¡ES UN DIODO!",
      componentName: "Rectifier Diode",
      definition: "A two-terminal semiconductor component that conducts electric current primarily in one direction while blocking it in the opposite direction.",
      clues: [
        { door: "01", en: "It is a two-terminal semiconductor component with an Anode and a Cathode.", es: "Es un componente semiconductor de dos terminales con un Ánodo y un Cátodo." },
        { door: "02", en: "A painted silver or white band on its body marks the negative Cathode terminal.", es: "Una banda plateada o blanca pintada en su cuerpo marca la terminal negativa (Cátodo)." },
        { door: "03", en: "It acts like a one-way check valve for electricity, allowing current to flow in only one direction.", es: "Actúa como una válvula antirretorno para la electricidad, permitiendo corriente en un solo sentido." },
        { door: "04", en: "Four of them arranged in a bridge are used to convert AC electricity into DC.", es: "Cuatro de ellos dispuestos en puente se usan para convertir electricidad AC en corriente directa." }
      ],
      svgDiagram: makeSchematicSVG("DIODE ->|", "ONE-WAY CURRENT VALVE", "#4f46e5")
    },
    {
      acceptedAnswers: ["dc motor", "motor", "a dc motor", "motor dc", "electric motor"],
      answerEn: "IT'S A DC MOTOR!",
      answerEs: "¡ES UN MOTOR DE CORRIENTE DIRECTA!",
      componentName: "DC Electric Motor",
      definition: "A rotary electrical machine that converts direct-current electrical energy into continuous mechanical rotational motion.",
      clues: [
        { door: "01", en: "It is an electromechanical actuator with two terminals and a spinning metal output shaft.", es: "Es un actuador electromecánico con dos terminales y un eje metálico giratorio de salida." },
        { door: "02", en: "It uses permanent magnets and internal copper windings with brushes and a commutator.", es: "Usa imanes permanentes y bobinas internas de cobre con escobillas y un conmutador." },
        { door: "03", en: "Reversing the positive and negative battery wires makes its shaft spin in the opposite direction.", es: "Invertir los cables positivo y negativo de la batería hace que su eje gire en sentido contrario." },
        { door: "04", en: "It is the most common actuator used to spin wheels on toy cars and small mobile robots.", es: "Es el actuador más común usado para girar ruedas en autos de juguete y pequeños robots móviles." }
      ],
      svgDiagram: makeSchematicSVG("MOTOR DC", "CONTINUOUS ROTARY ACTUATOR", "#ea580c")
    },
    {
      acceptedAnswers: ["buzzer", "a buzzer", "zumbador", "piezo buzzer"],
      answerEn: "IT'S A BUZZER!",
      answerEs: "¡ES UN ZUMBADOR (BUZZER)!",
      componentName: "Piezo Buzzer",
      definition: "An audio signaling device that converts electrical signals into audible beeps, alarms, or simple musical tones.",
      clues: [
        { door: "01", en: "It is a small round black cylinder with a tiny hole on top and two pins underneath.", es: "Es un pequeño cilindro negro redondo con un diminuto orificio arriba y dos pines debajo." },
        { door: "02", en: "Inside, a thin piezoelectric disc vibrates rapidly when voltage is applied.", es: "En su interior, un delgado disco piezoeléctrico vibra rápidamente al aplicarle voltaje." },
        { door: "03", en: "Active versions beep automatically with DC power, while passive versions play tones via PWM.", es: "Las versiones activas pitan automáticamente con corriente DC y las pasivas tocan tonos con PWM." },
        { door: "04", en: "It produces the audible beep sound in microwave ovens, alarm clocks, and sensor alerts.", es: "Produce el sonido de pitido audible en hornos de microondas, alarmas y alertas de sensores." }
      ],
      svgDiagram: makeSchematicSVG("BUZZER ♪", "PIEZOELECTRIC AUDIO SOUNDER", "#9333ea")
    },
    {
      acceptedAnswers: ["fuse", "a fuse", "fusible"],
      answerEn: "IT'S A FUSE!",
      answerEs: "¡ES UN FUSIBLE!",
      componentName: "Electrical Fuse",
      definition: "An electrical safety device containing a thin metal wire that melts and breaks the circuit when excessive current flows through it.",
      clues: [
        { door: "01", en: "It is a sacrificial safety component housed inside a small glass tube or colored plastic blade.", es: "Es un componente de seguridad sacrificable alojado dentro de un tubo de vidrio o cápsula plástica." },
        { door: "02", en: "Inside, a calibrated thin metal filament carries the circuit current.", es: "En su interior, un filamento metálico delgado y calibrado transporta la corriente del circuito." },
        { door: "03", en: "If a short circuit or overload occurs, the filament overheats, melts, and opens the circuit.", es: "Si ocurre un cortocircuito o sobrecarga, el filamento se sobrecalienta, se funde y abre el circuito." },
        { door: "04", en: "Once blown, it cannot be reset and must be replaced to protect expensive electronics from fire.", es: "Una vez quemado, no se reinicia y debe reemplazarse para proteger la electrónica contra incendios." }
      ],
      svgDiagram: makeSchematicSVG("FUSE 5A", "OVERCURRENT SAFETY PROTECTOR", "#dc2626")
    },
    {
      acceptedAnswers: ["push button", "button", "a push button", "boton", "botón", "switch", "tactile switch"],
      answerEn: "IT'S A PUSH BUTTON!",
      answerEs: "¡ES UN BOTÓN PULSADOR!",
      componentName: "Momentary Push Button",
      definition: "A simple mechanical switch mechanism that closes an electrical circuit only while being pressed by a finger.",
      clues: [
        { door: "01", en: "It is a simple tactile mechanical input component with four bent legs and a plastic cap.", es: "Es un componente mecánico de entrada táctil con cuatro patas dobladas y una tapa plástica." },
        { door: "02", en: "Inside, a small metal dome snaps down to bridge two contacts when pressed.", es: "En su interior, un pequeño domo metálico baja para unir dos contactos cuando se presiona." },
        { door: "03", en: "Because it is momentary, an internal spring returns it to the open state as soon as you let go.", es: "Como es momentáneo, un resorte interno lo devuelve al estado abierto en cuanto lo sueltas." },
        { door: "04", en: "It is used as the Reset button on microcontroller boards and on game controllers.", es: "Se usa como el botón de Reset en placas de microcontroladores y en controles de videojuegos." }
      ],
      svgDiagram: makeSchematicSVG("BTN [I/O]", "MOMENTARY TACTILE SWITCH", "#059669")
    },
    {
      acceptedAnswers: ["led", "an led", "light emitting diode", "diodo led"],
      answerEn: "IT'S AN LED!",
      answerEs: "¡ES UN LED!",
      componentName: "Light Emitting Diode (LED)",
      definition: "A semiconductor light source that emits visible or infrared light when electric current flows through it in the forward direction.",
      clues: [
        { door: "01", en: "It is a polarized semiconductor light source whose longer leg is the positive Anode.", es: "Es una fuente de luz semiconductora polarizada cuya pata más larga es el Ánodo positivo." },
        { door: "02", en: "It emits photons through electroluminescence when electrons recombine inside its chip.", es: "Emite fotones mediante electroluminiscencia cuando los electrones se recombinan en su chip." },
        { door: "03", en: "It always requires a series current-limiting resistor so it does not burn out.", es: "Siempre requiere una resistencia limitadora de corriente en serie para no quemarse." },
        { door: "04", en: "Available in red, green, blue, and white, it is the classic blinking indicator in electronics.", es: "Disponible en rojo, verde, azul y blanco, es el indicador parpadeante clásico en electrónica." }
      ],
      svgDiagram: makeSchematicSVG("LED ☼", "LIGHT EMITTING DIODE", "#16a34a")
    },
    {
      acceptedAnswers: ["resistor", "a resistor", "resistencia"],
      answerEn: "IT'S A RESISTOR!",
      answerEs: "¡ES UNA RESISTENCIA!",
      componentName: "Resistor",
      definition: "A passive two-terminal electrical component that implements electrical resistance to limit current flow and divide voltages.",
      clues: [
        { door: "01", en: "It is the most common passive two-terminal component in almost every electronic circuit.", es: "Es el componente pasivo de dos terminales más común en casi cualquier circuito electrónico." },
        { door: "02", en: "Its value is measured in Ohms (Ω) and is identified by painted colored bands on its body.", es: "Su valor se mide en Ohmios (Ω) y se identifica mediante bandas de colores pintadas en su cuerpo." },
        { door: "03", en: "It obeys Ohm's Law (V = I × R) and converts excess electrical energy into heat.", es: "Obedece la Ley de Ohm (V = I × R) y convierte el exceso de energía eléctrica en calor." },
        { door: "04", en: "Its primary job is to limit electric current so delicate components like LEDs do not burn out.", es: "Su trabajo principal es limitar la corriente eléctrica para que componentes como los LEDs no se quemen." }
      ],
      svgDiagram: makeSchematicSVG("RES 1kΩ", "CURRENT LIMITER (OHM'S LAW)", "#b45309")
    }
  ]
};

// =========================================================================
// ESTADO DEL JUEGO Y CONEXIÓN 1 VS 1 (PEERJS)
// =========================================================================
let selectedDifficulty = 'normal';
let gameMode = 'solo'; // 'solo' | 'pvp'
let isHost = false;
let peer = null;
let conn = null;

let activeRounds = [];
let currentRoundIndex = 0;
let currentClueIndex = 0;
let openedDoors = [false, false, false, false];

let myScore = 0;
let rivalScore = 0;
let attemptsLeft = 3;
let rivalAttemptsLeft = 3;
let roundLockedForMe = false;
let roundResults = []; // 'me' | 'rival' | 'none'
let soundEnabled = true;

// Sintetizador de Sonido Web Audio
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
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  document.querySelectorAll('.btn-voice-read').forEach(b => b.classList.remove('speaking'));
}

function showScreen(screenId) {
  stopVoice();
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

function closePvpConnection() {
  if (conn) { try { conn.close(); } catch(e) {} conn = null; }
  if (peer) { try { peer.destroy(); } catch(e) {} peer = null; }
}

function goHome() {
  closePvpConnection();
  playTone(300, 'sine', 0.1);
  showScreen('screen-home');
}

function startInstructions() {
  closePvpConnection();
  playTone(520, 'square', 0.15);
  showScreen('screen-instructions');
}

function selectDifficulty(diff) {
  selectedDifficulty = diff;
  document.querySelectorAll('.diff-card').forEach(c => c.classList.remove('selected'));
  document.getElementById(`diff-btn-${diff}`).classList.add('selected');
  playTone(480, 'sine', 0.08);
}

function pickRandom5(difficultyKey) {
  const pool = [...componentsBank[difficultyKey]];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, 5);
}

// =========================================================================
// MODO SOLO
// =========================================================================
function startSoloGame() {
  gameMode = 'solo';
  isHost = true;
  activeRounds = pickRandom5(selectedDifficulty);
  myScore = 0;
  roundResults = [];

  document.getElementById('hud-solo-score').classList.remove('hidden');
  document.getElementById('hud-pvp-score').classList.add('hidden');
  document.getElementById('pvp-rival-status').classList.add('hidden');
  document.getElementById('player-score').innerText = '0';
  document.getElementById('hud-diff-badge').innerText = `● SOLO • ${selectedDifficulty.toUpperCase()}`;

  startRound(0);
}

// =========================================================================
// MODO 1 VS 1 (PEERJS)
// =========================================================================
function openPvpLobby() {
  document.getElementById('lobby-diff-text').innerText = selectedDifficulty.toUpperCase();
  document.getElementById('host-code-display').classList.add('hidden');
  document.getElementById('join-status-msg').innerText = '';
  document.getElementById('join-code-input').value = '';
  showScreen('screen-pvp-lobby');
}

function createPvpRoom() {
  closePvpConnection();
  isHost = true;
  gameMode = 'pvp';

  const shortCode = Math.floor(1000 + Math.random() * 9000).toString();
  const fullPeerId = `mech-door-${shortCode}`;

  document.getElementById('host-code-display').classList.remove('hidden');
  document.getElementById('generated-room-code').innerText = shortCode;
  document.getElementById('host-wait-status').innerText = 'Connecting to network...';

  peer = new Peer(fullPeerId);

  peer.on('open', () => {
    document.getElementById('host-wait-status').innerText = 'Waiting for rival to join...';
  });

  peer.on('connection', (connection) => {
    conn = connection;
    setupPvpListeners();

    conn.on('open', () => {
      activeRounds = pickRandom5(selectedDifficulty);
      myScore = 0;
      rivalScore = 0;
      roundResults = [];

      // Enviar las 5 rondas seleccionadas y la dificultad al rival para jugar sincronizados
      conn.send({
        type: 'START_MATCH',
        difficulty: selectedDifficulty,
        rounds: activeRounds
      });

      setupPvpHud();
      startRound(0);
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

  closePvpConnection();
  isHost = false;
  gameMode = 'pvp';
  statusEl.className = 'feedback-msg';
  statusEl.innerText = 'Connecting to rival...';

  peer = new Peer();

  peer.on('open', () => {
    conn = peer.connect(`mech-door-${code}`);
    setupPvpListeners();

    conn.on('open', () => {
      statusEl.innerText = 'Connected! Starting match...';
    });
  });

  peer.on('error', () => {
    statusEl.className = 'feedback-msg feedback-error';
    statusEl.innerText = '❌ Room not found. Check the 4-digit code.';
  });
}

function setupPvpHud() {
  document.getElementById('hud-solo-score').classList.add('hidden');
  document.getElementById('hud-pvp-score').classList.remove('hidden');
  document.getElementById('pvp-rival-status').classList.remove('hidden');
  document.getElementById('p1-score').innerText = '0';
  document.getElementById('p2-score').innerText = '0';
  document.getElementById('hud-diff-badge').innerText = `⚔️ 1V1 • ${selectedDifficulty.toUpperCase()}`;
}

function setupPvpListeners() {
  conn.on('data', (data) => {
    if (data.type === 'START_MATCH') {
      selectedDifficulty = data.difficulty;
      activeRounds = data.rounds;
      myScore = 0;
      rivalScore = 0;
      roundResults = [];
      setupPvpHud();
      startRound(0);
    }
    else if (data.type === 'RIVAL_WON_ROUND') {
      // El rival respondió primero y ganó los 100 pts de esta ronda
      rivalScore += 100;
      document.getElementById('p2-score').innerText = rivalScore;
      roundResults[currentRoundIndex] = 'rival';
      finishRoundReveal('rival');
    }
    else if (data.type === 'RIVAL_MISTAKE') {
      rivalAttemptsLeft = data.attemptsLeft;
      updateRivalStatusPill();
      if (rivalAttemptsLeft === 0 && roundLockedForMe) {
        // Ambos gastaron sus 3 vidas sin acertar
        roundResults[currentRoundIndex] = 'none';
        finishRoundReveal('none');
      }
    }
    else if (data.type === 'NEXT_ROUND') {
      startRound(data.roundIndex);
    }
    else if (data.type === 'GAME_OVER') {
      showGameOver();
    }
  });

  conn.on('close', () => {
    if (gameMode === 'pvp') {
      alert('Your rival disconnected from the match.');
      goHome();
    }
  });
}

function updateRivalStatusPill() {
  const pill = document.getElementById('pvp-rival-status');
  if (rivalAttemptsLeft > 0) {
    pill.innerText = `Rival: ${'❤️'.repeat(rivalAttemptsLeft)} (${rivalAttemptsLeft} left)`;
  } else {
    pill.innerText = `Rival: ❌ Out of attempts!`;
  }
}

// =========================================================================
// FLUJO DE RONDAS Y VALIDACIÓN
// =========================================================================
function startRound(index) {
  currentRoundIndex = index;
  openedDoors = [false, false, false, false];
  attemptsLeft = 3;
  rivalAttemptsLeft = 3;
  roundLockedForMe = false;

  const diffLabel = selectedDifficulty.toUpperCase();
  const modePrefix = gameMode === 'pvp' ? '1V1 DUEL' : diffLabel;
  document.getElementById('hud-round-indicator').innerText = `ROUND ${currentRoundIndex + 1} / 5`;
  document.getElementById('doors-round-title').innerText = `[${modePrefix}] ROUND ${currentRoundIndex + 1} / 5`;

  setInputsDisabled(false);
  clearInputsAndFeedback();
  updateLivesUI();
  if (gameMode === 'pvp') updateRivalStatusPill();
  renderDoors();
  playTone(600, 'square', 0.18);
  showScreen('screen-doors');
}

function setInputsDisabled(disabled) {
  document.getElementById('guess-input-doors').disabled = disabled;
  document.getElementById('btn-submit-doors').disabled = disabled;
  document.getElementById('guess-input-clue').disabled = disabled;
  document.getElementById('btn-submit-clue').disabled = disabled;
}

function clearInputsAndFeedback() {
  document.getElementById('guess-input-doors').value = '';
  document.getElementById('guess-input-clue').value = '';
  document.getElementById('feedback-doors').innerText = '';
  document.getElementById('feedback-clue').innerText = '';
}

function updateLivesUI() {
  const heartsStr = '❤️ '.repeat(attemptsLeft) + '🖤 '.repeat(3 - attemptsLeft);
  document.getElementById('lives-display').innerText = heartsStr.trim();
  document.getElementById('lives-display-clue').innerText = heartsStr.trim();
}

function renderDoors() {
  const container = document.getElementById('doors-container');
  container.innerHTML = '';

  activeRounds[currentRoundIndex].clues.forEach((clue, idx) => {
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

function openDoor(doorIdx) {
  currentClueIndex = doorIdx;
  openedDoors[doorIdx] = true;
  const clue = activeRounds[currentRoundIndex].clues[doorIdx];

  document.getElementById('clue-number-badge').innerText = `DOOR ${clue.door}`;
  document.getElementById('clue-en-text').innerText = clue.en;
  document.getElementById('clue-es-text').innerText = clue.es;
  document.getElementById('clue-es-text').classList.add('hidden');
  document.getElementById('btn-toggle-es').innerText = '🌐 SHOW SPANISH TRANSLATION';
  if (!roundLockedForMe) document.getElementById('feedback-clue').innerText = '';

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
  renderDoors();
  if (!roundLockedForMe) document.getElementById('feedback-doors').innerText = '';
  playTone(380, 'sine', 0.1);
  showScreen('screen-doors');
}

function checkAnswer(inputId) {
  if (roundLockedForMe) return;

  const inputEl = document.getElementById(inputId);
  const rawValue = inputEl.value.trim().toLowerCase();
  const feedbackId = (inputId === 'guess-input-doors') ? 'feedback-doors' : 'feedback-clue';
  const feedbackEl = document.getElementById(feedbackId);

  if (!rawValue) {
    feedbackEl.className = 'feedback-msg feedback-error';
    feedbackEl.innerText = '⚠️ Please type a component name first!';
    return;
  }

  const round = activeRounds[currentRoundIndex];
  const isCorrect = round.acceptedAnswers.some(ans => rawValue === ans || rawValue.includes(ans));

  if (isCorrect) {
    myScore += 100;
    document.getElementById('player-score').innerText = myScore;
    document.getElementById('p1-score').innerText = myScore;
    roundResults[currentRoundIndex] = 'me';

    if (gameMode === 'pvp' && conn) {
      conn.send({ type: 'RIVAL_WON_ROUND' });
    }
    finishRoundReveal('me');
  } else {
    attemptsLeft--;
    updateLivesUI();
    playTone(160, 'sawtooth', 0.25);

    if (gameMode === 'pvp' && conn) {
      conn.send({ type: 'RIVAL_MISTAKE', attemptsLeft: attemptsLeft });
    }

    if (attemptsLeft > 0) {
      feedbackEl.className = 'feedback-msg feedback-error';
      feedbackEl.innerText = `❌ Incorrect! You have ${attemptsLeft} attempt(s) left.`;
      inputEl.value = '';
    } else {
      // 3 errores cometidos
      roundLockedForMe = true;
      setInputsDisabled(true);

      if (gameMode === 'solo') {
        roundResults[currentRoundIndex] = 'none';
        finishRoundReveal('none');
      } else {
        // En 1v1, si el rival aún tiene vidas, esperamos a ver si él acierta o falla
        if (rivalAttemptsLeft > 0) {
          const waitMsg = '❌ Out of attempts (3/3)! Waiting for rival to finish...';
          document.getElementById('feedback-doors').className = 'feedback-msg feedback-error';
          document.getElementById('feedback-doors').innerText = waitMsg;
          document.getElementById('feedback-clue').className = 'feedback-msg feedback-error';
          document.getElementById('feedback-clue').innerText = waitMsg;
        } else {
          roundResults[currentRoundIndex] = 'none';
          finishRoundReveal('none');
        }
      }
    }
  }
}

// Mostrar revelación (winner: 'me' | 'rival' | 'none')
function finishRoundReveal(winner) {
  const round = activeRounds[currentRoundIndex];
  const tagEl = document.getElementById('reveal-status-tag');

  if (winner === 'me') {
    tagEl.innerText = gameMode === 'pvp' 
      ? '⚡ FASTEST! +100 PTS TO YOU!' 
      : '+100 PTS • CORRECT ANSWER!';
    tagEl.className = 'solved-tag';
    playTone(523, 'square', 0.12);
    setTimeout(() => playTone(659, 'square', 0.12), 120);
    setTimeout(() => playTone(784, 'square', 0.25), 240);
    launchConfetti();
  } else if (winner === 'rival') {
    tagEl.innerText = '🐢 TOO SLOW! RIVAL ANSWERED FIRST (+100 RIVAL)';
    tagEl.className = 'solved-tag failed-tag';
    playTone(150, 'sawtooth', 0.35);
  } else {
    tagEl.innerText = '0 PTS • OUT OF ATTEMPTS (3/3 MISTAKES)';
    tagEl.className = 'solved-tag failed-tag';
    playTone(140, 'sawtooth', 0.4);
  }

  document.getElementById('svg-diagram-container').innerHTML = round.svgDiagram;
  document.getElementById('reveal-title-en').innerText = round.answerEn;
  document.getElementById('reveal-title-es').innerText = round.answerEs;
  document.getElementById('reveal-definition').innerText = round.definition;

  const btnNext = document.getElementById('btn-next-round');
  const waitText = document.getElementById('pvp-next-wait');

  if (gameMode === 'pvp' && !isHost) {
    btnNext.classList.add('hidden');
    waitText.classList.remove('hidden');
  } else {
    btnNext.classList.remove('hidden');
    waitText.classList.add('hidden');
    btnNext.innerText = (currentRoundIndex < activeRounds.length - 1) 
      ? 'NEXT ROUND >>' 
      : 'SEE FINAL SCORE >>';
  }

  showScreen('screen-reveal');
}

function handleNextRoundClick() {
  if (currentRoundIndex < activeRounds.length - 1) {
    const nextIdx = currentRoundIndex + 1;
    if (gameMode === 'pvp' && conn) {
      conn.send({ type: 'NEXT_ROUND', roundIndex: nextIdx });
    }
    startRound(nextIdx);
  } else {
    if (gameMode === 'pvp' && conn) {
      conn.send({ type: 'GAME_OVER' });
    }
    showGameOver();
  }
}

function showGameOver() {
  const diffLabel = selectedDifficulty.toUpperCase();
  const scoreCard = document.getElementById('final-score-card');

  if (gameMode === 'solo') {
    scoreCard.innerHTML = `FINAL SCORE: <span>${myScore}</span> / 500 PTS`;
    let rankText = `[${diffLabel}] APPRENTICE TECHNICIAN`;
    if (myScore === 500) rankText = `🏆 [${diffLabel}] GRAND MECHATRONICS MASTER!`;
    else if (myScore >= 300) rankText = `⚡ [${diffLabel}] SENIOR AUTOMATION ENGINEER`;
    document.getElementById('final-rank-title').innerText = rankText;

    const summaryHtml = activeRounds.map((r, i) => {
      const icon = roundResults[i] === 'me' ? '✅ (+100 pts)' : '❌ (0 pts)';
      return `<div>${icon} <strong>Round ${i + 1}:</strong> ${r.componentName}</div>`;
    }).join('');
    document.getElementById('summary-components').innerHTML = summaryHtml;
    document.getElementById('btn-play-again').classList.remove('hidden');
  } else {
    scoreCard.innerHTML = `YOU: <span>${myScore} PTS</span> &nbsp;|&nbsp; RIVAL: <span style="color:var(--neon-pink)">${rivalScore} PTS</span>`;
    let duelResult = "🤝 IT'S A DRAW!";
    if (myScore > rivalScore) duelResult = "🏆 YOU WIN THE 1V1 DUEL!";
    else if (rivalScore > myScore) duelResult = "💀 RIVAL WINS THE 1V1 DUEL!";
    document.getElementById('final-rank-title').innerText = duelResult;

    const summaryHtml = activeRounds.map((r, i) => {
      let badge = '⚪ Nobody scored';
      if (roundResults[i] === 'me') badge = '🟢 You won (+100)';
      else if (roundResults[i] === 'rival') badge = '🔴 Rival won (+100)';
      return `<div>${badge} — <strong>Round ${i + 1}:</strong> ${r.componentName}</div>`;
    }).join('');
    document.getElementById('summary-components').innerHTML = summaryHtml;
    document.getElementById('btn-play-again').classList.add('hidden');
  }

  if (myScore >= 300 || (gameMode === 'pvp' && myScore > rivalScore)) launchConfetti();
  showScreen('screen-gameover');
}

function replayCurrentMode() {
  if (gameMode === 'solo') {
    startSoloGame();
  } else {
    openPvpLobby();
  }
}

// === MOTOR DE LECTURA EN VOZ ALTA (VOZ FEMENINA TRANQUILA EN INGLÉS) ===
function speakEnglish(text, buttonId) {
  if (!('speechSynthesis' in window)) {
    alert("Tu navegador no soporta lectura de voz.");
    return;
  }

  stopVoice();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 0.86;
  utterance.pitch = 1.08;

  const voices = window.speechSynthesis.getVoices();
  const preferredFemaleNames = [
    'Aria',
    'Jenny',
    'Google US English',
    'Samantha',
    'Victoria',
    'Zira',
    'Female'
  ];

  let selectedVoice = null;
  for (const name of preferredFemaleNames) {
    selectedVoice = voices.find(v => v.lang.startsWith('en') && v.name.includes(name));
    if (selectedVoice) break;
  }

  if (!selectedVoice) {
    selectedVoice = voices.find(v => v.lang.startsWith('en'));
  }

  if (selectedVoice) utterance.voice = selectedVoice;

  const btn = document.getElementById(buttonId);
  if (btn) btn.classList.add('speaking');

  utterance.onend = () => { if (btn) btn.classList.remove('speaking'); };
  utterance.onerror = () => { if (btn) btn.classList.remove('speaking'); };

  window.speechSynthesis.speak(utterance);
}

function speakCurrentClue() {
  const clueText = activeRounds[currentRoundIndex].clues[currentClueIndex].en;
  speakEnglish(clueText, 'btn-speak-clue');
}

function speakReveal() {
  const round = activeRounds[currentRoundIndex];
  const fullText = `${round.answerEn} ${round.definition}`;
  speakEnglish(fullText, 'btn-speak-reveal');
}

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}

// Confeti
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