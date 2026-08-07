// actividades_nic.js - Base de Datos de Actividades por Intervención NIC (Octava Edición)
if (typeof dbActividadesNIC === 'undefined') {
    var dbActividadesNIC = {};
}

// =========================================================================
// BLOQUE 1: PATRÓN I - PERCEPCIÓN Y MANEJO DE LA SALUD
// =========================================================================

dbActividadesNIC["5440 - Mejora de los sistemas de apoyo"] = [
    "Determinar la conveniencia de las redes de apoyo existentes (familia, amigos, comunidad).",
    "Determinar el grado de apoyo económico y recursos con los que cuenta la familia.",
    "Animar al paciente a participar en actividades sociales y comunitarias.",
    "Fomentar las relaciones con personas que tengan los mismos intereses y metas.",
    "Involucrar a la familia/allegados en el cuidado y la planificación del tratamiento.",
    "Explicar a los demás implicados cómo pueden ayudar (p. ej., tiempo, dinero y transporte)."
];

dbActividadesNIC["5270 - Apoyo emocional"] = [
    "Comentar la experiencia emocional con el paciente.",
    "Animar al paciente a que exprese los sentimientos de ansiedad, ira o tristeza.",
    "Escuchar las expresiones de sentimientos y creencias con una actitud de aceptación y empatía.",
    "Permanecer con el paciente para promover la seguridad y reducir el miedo.",
    "Ayudar al paciente a reconocer sentimientos como la culpa o el sufrimiento.",
    "Favorecer la conversación o el llanto como medio de disminuir la respuesta emocional."
];

dbActividadesNIC["5430 - Grupo de apoyo"] = [
    "Utilizar grupos de apoyo para dar soporte emocional e información técnica de salud.",
    "Crear una atmósfera relajada, de aceptación y abierta a la participación.",
    "Animar a los miembros del grupo a compartir sus experiencias y estrategias de afrontamiento.",
    "Fomentar la ayuda mutua y la cohesión dentro del grupo.",
    "Vigilar la respuesta del grupo a las discusiones de temas que generen ansiedad."
];

dbActividadesNIC["7140 - Apoyo a la familia"] = [
    "Valorar la respuesta de la familia a la enfermedad y el grado de sobrecarga del cuidador.",
    "Ofrecer información clara y objetiva respecto del estado de salud y el pronóstico del paciente.",
    "Ofrecer recursos comunitarios que ayuden a la familia en los cuidados domiciliarios.",
    "Escuchar las inquietudes y preocupaciones de los miembros de la familia sin juzgar.",
    "Facilitar la comunicación de inquietudes entre los miembros de la familia."
];

dbActividadesNIC["7270 - Apoyo a los padres"] = [
    "Evaluar los conocimientos y habilidades de crianza de los padres.",
    "Reforzar los comportamientos parentales positivos.",
    "Proporcionar recursos educativos para el manejo del comportamiento y cuidado del hijo.",
    "Sensibilizar a los padres sobre los cambios de desarrollo normales en el niño."
];

dbActividadesNIC["5328 - Visitas domiciliarias de apoyo"] = [
    "Establecer una relación de confianza durante la visita en el hogar.",
    "Valorar la seguridad del entorno doméstico y el nivel de apoyo social continuo.",
    "Ofrecer apoyo emocional e instrucciones educativas personalizadas en el propio entorno del usuario.",
    "Evaluar la necesidad de recursos comunitarios de seguimiento tras el alta."
];

dbActividadesNIC["5240 - Asesoramiento"] = [
    "Establecer una relación terapéutica basada en la confianza y el respeto mutuo.",
    "Demostrar empatía, calidez y sinceridad durante las sesiones.",
    "Ayudar al paciente a identificar el problema o la situación causante del conflicto.",
    "Guiar al paciente hacia la toma de decisiones autónoma y la resolución de problemas.",
    "Facilitar la identificación de los propios puntos fuertes y capacidades."
];

dbActividadesNIC["5250 - Apoyo en la toma de decisiones"] = [
    "Ayudar al paciente a aclarar los valores y expectativas que pueden ayudar a tomar decisiones sobre su salud.",
    "Proporcionar la información solicitada por el paciente referente a las alternativas asistenciales.",
    "Servir de enlace entre el paciente, la familia y otros profesionales sanitarios durante la toma de decisiones.",
    "Respetar el derecho del paciente a recibir o rechazar información.",
    "Facilitar la toma de decisiones en colaboración con el equipo interdisciplinar."
];

dbActividadesNIC["5470 - Declarar la verdad al paciente"] = [
    "Determinar la cantidad de información que el paciente desea conocer sobre su estado de salud.",
    "Proporcionar información honesta, clara y con un lenguaje comprensible sobre el diagnóstico y tratamiento.",
    "Coordinar la entrega de información médica en un entorno tranquilo y privado.",
    "Validar la comprensión del paciente tras la revelación de la información médica.",
    "Ofrecer apoyo emocional continuo tras la comunicación de noticias difíciles."
];

dbActividadesNIC["5420 - Apoyo espiritual"] = [
    "Animar al paciente a revisar su vida pasada y centrarse en sus logros personales.",
    "Fomentar el uso de recursos espirituales (oración, lectura de textos sagrados, música espiritual).",
    "Respetar las creencias religiosas, rituales y valores morales del individuo.",
    "Facilitar el contacto con los líderes espirituales de preferencia del paciente.",
    "Estar dispuesto a escuchar los sentimientos del paciente sobre las dudas religiosas o éticas."
];

dbActividadesNIC["5340 - Presencia"] = [
    "Mostrar una actitud de aceptación y empatía sin prejuicios.",
    "Permanecer en silencio junto al paciente en momentos de dolor o aflicción moral.",
    "Ofrecer contacto físico estructurado (tomar la mano) si el paciente lo acepta.",
    "Estar disponible para escuchar al paciente de forma incondicional.",
    "Transmitir un sentido de empatía y calidez humana a través del lenguaje no verbal."
];

dbActividadesNIC["1800 - Ayuda con el autocuidado"] = [
    "Comprobar la capacidad del paciente para realizar autocuidados independientes.",
    "Monitorizar las necesidades de ayuda del paciente en las actividades de la vida diaria (AVD).",
    "Establecer una rutina de actividades de autocuidado adaptada a las reservas de energía del paciente.",
    "Proporcionar un ambiente terapéutico que garantice la intimidad y la seguridad durante las AVD.",
    "Fomentar la participación activa en el autocuidado según las capacidades funcionales del paciente.",
    "Ayudar al paciente a aceptar las necesidades de dependencia de forma progresiva."
];

dbActividadesNIC["6490 - Prevención de caídas"] = [
    "Identificar conductas y factores de riesgo que afectan a la probabilidad de sufrir caídas en el adulto mayor.",
    "Identificar las características del entorno que puedan aumentar la posibilidad de caídas (pisos resbaladizos, alfombras sueltas, iluminación deficiente).",
    "Mantener los barandales de la cama elevados y la cama en la posición más baja posible.",
    "Bloquear las ruedas de la cama, silla de ruedas u otros dispositivos durante las transferencias.",
    "Proporcionar dispositivos de ayuda para la deambulación (andador, bastón) bien ajustados.",
    "Instruir al paciente para que pida ayuda al levantarse de la cama o silla."
];

dbActividadesNIC["1100 - Manejo de la nutrición"] = [
    "Determinar el estado nutricional del paciente y su capacidad para satisfacer sus necesidades nutricionales.",
    "Asegurar que la dieta incluya alimentos ricos en fibra para evitar el estreñimiento.",
    "Monitorizar las calorías y la ingesta alimentaria diaria.",
    "Pesar al paciente a intervalos regulares y registrar los cambios de peso involuntarios.",
    "Ofrecer tentempiés nutritivos ricos en proteínas e hidratos de carbono complejos entre comidas.",
    "Ajustar la consistencia y preparación de los alimentos según la tolerancia del paciente."
];

dbActividadesNIC["0200 - Favorecimiento del ejercicio"] = [
    "Evaluar las creencias sobre la salud del paciente respecto al ejercicio físico en la vejez.",
    "Determinar la motivación del paciente para empezar o continuar con un programa de ejercicio.",
    "Avanzar en el programa de ejercicios de forma gradual (resistencia, fuerza y equilibrio).",
    "Instruir sobre los tipos de ejercicios adecuados para la condición de fragilidad (ejercicios isométricos, estiramientos).",
    "Monitorizar la respuesta de tolerancia al ejercicio (frecuencia cardíaca, tensión arterial, fatiga)."
];

dbActividadesNIC["1801 - Ayuda con el autocuidado: baño/higiene"] = [
    "Colocar toallas, jabón y demás accesorios necesarios a la cabecera de la cama o en el baño.",
    "Proporcionar ayuda hasta que el paciente sea totalmente capaz de asumir los autocuidados.",
    "Facilitar que el paciente se lave los dientes o la prótesis dental tras las comidas.",
    "Comprobar la integridad cutánea del paciente durante el proceso del baño.",
    "Verificar la temperatura del agua para evitar quemaduras o enfriamiento en el adulto mayor."
];

dbActividadesNIC["1804 - Ayuda con el autocuidado: micción/defecación"] = [
    "Ayudar al paciente al sanitario, cuña o chato a intervalos de tiempo determinados.",
    "Proporcionar intimidad durante la eliminación.",
    "Facilitar la higiene perineal después de la eliminación.",
    "Instaurar un programa de entrenamiento o reeducación vesical/intestinal si procede.",
    "Comprobar la consistencia, color y frecuencia de las deposiciones y la orina."
];

dbActividadesNIC["7040 - Apoyo al cuidador"] = [
    "Determinar el nivel de conocimientos y habilidades del cuidador principal.",
    "Evaluar el impacto de la prestación de cuidados en la salud física y emocional del cuidador.",
    "Enseñar al cuidador técnicas de manejo del estrés y de conservación de energía.",
    "Ofrecer opciones de cuidados de relevo para descanso del cuidador principal.",
    "Informar al cuidador sobre los recursos sanitarios y comunitarios de apoyo."
];

dbActividadesNIC["6486 - Manejo ambiental: seguridad"] = [
    "Eliminar los factores de peligro ambiental (alfombras sueltas, cables en el suelo, muebles inestables).",
    "Disponer de iluminación adecuada por la noche cerca de la cama y los pasillos.",
    "Colocar señales de alerta y avisos de seguridad en áreas de riesgo.",
    "Asegurar que los timbres de llamada estén al alcance directo del paciente."
];

dbActividadesNIC["6610 - Identificación de riesgos"] = [
    "Instruir sobre los factores de riesgo modificables y no modificables.",
    "Determinar la presencia de déficit sensoriales, cognitivos o motores que comprometan la seguridad.",
    "Revisar el historial de caídas o eventos adversos previos del paciente.",
    "Planificar actividades de reducción de riesgos en colaboración con el paciente y la familia."
];

dbActividadesNIC["5510 - Educación para la salud"] = [
    "Identificar los factores internos y externos que puedan mejorar o disminuir la motivación para conductas saludables.",
    "Determinar el conocimiento de la salud actual y las conductas de estilo de vida del individuo.",
    "Enseñar estrategias que puedan utilizarse para resistir las conductas no saludables.",
    "Utilizar presentaciones, debates y demostraciones para reforzar el aprendizaje."
];

dbActividadesNIC["6680 - Monitorización de los signos vitales"] = [
    "Monitorizar la presión arterial, pulso, frecuencia respiratoria y temperatura corporal.",
    "Comprobar la presión arterial ortostática en pacientes con riesgo de caídas o mareo.",
    "Observar la presencia y calidad de los pulsos periféricos.",
    "Identificar causas de posibles cambios en los signos vitales."
];

dbActividadesNIC["4364 - Elogio"] = [
    "Identificar el comportamiento deseable o la consecución de objetivos que se van a reforzar.",
    "Expresar admiración o aprobación de forma genuina y sincera en el momento adecuado.",
    "Relacionar la alabanza con el comportamiento específico logrado por el paciente.",
    "Proporcionar elogios en presencia de familiares u otras personas significativas si resulta apropiado y motivador.",
    "Evitar elogios exagerados que puedan percibirse como insinceros o condescendientes.",
    "Alentar al paciente a reconocer y autoelogiar sus propios logros y progresos."
];

dbActividadesNIC["4420 - Acuerdo sobre la conducta"] = [
    "Ayudar al paciente a identificar la conducta que se desea cambiar y el motivo de cambio.",
    "Fomentar un entorno abierto y de aceptación para la negociación del acuerdo.",
    "Ayudar a determinar objetivos realistas, alcanzables y medibles a corto y largo plazo.",
    "Aclarar los roles y responsabilidades correspondientes del paciente y del profesional de enfermería.",
    "Facilitar la elaboración de un contrato o acuerdo escrito firmado por ambas partes.",
    "Establecer recompensas o refuerzos significativos para el paciente tras el cumplimiento del acuerdo.",
    "Revisar periódicamente el acuerdo y renegociar las metas según la evolución."
];

dbActividadesNIC["4470 - Ayuda en la modificación de sí mismo"] = [
    "Ayudar al paciente a identificar las conductas específicas que desea modificar.",
    "Guiar al paciente en la identificación de los desencadenantes y barreras asociadas al hábito.",
    "Ayudar al paciente a valorar sus propios puntos fuertes y recursos personales para el cambio.",
    "Enseñar al paciente a autoregistrar sus conductas diarias (uso de diarios o listas de chequeo).",
    "Ayudar a desarrollar un plan de acción por pasos comprensibles y progresivos.",
    "Fomentar la autoeficacia y la resolución autónoma de problemas ante posibles recaídas."
];

dbActividadesNIC["4490 - Ayuda para dejar de fumar"] = [
    "Determinar la motivación del paciente y su grado de preparación para dejar de fumar.",
    "Evaluar el nivel de adicción a la nicotina mediante herramientas o escalas estandarizadas.",
    "Ayudar al paciente a fijar una fecha definitiva para dejar de fumar (Día D).",
    "Informar sobre las opciones farmacológicas disponibles (terapia de reemplazo de nicotina, vareniclina, bupropión).",
    "Ayudar al paciente a identificar desencadenantes ambientales o emocionales y desarrollar estrategias de afrontamiento.",
    "Enseñar técnicas de control del estrés para manejar la ansiedad por abstinencia.",
    "Ofrecer apoyo telefónico o de seguimiento continuo durante las primeras semanas de cesación."
];

dbActividadesNIC["4330 - Arteterapia"] = [
    "Explicar las razones y el propósito de la arteterapia al paciente.",
    "Proporcionar los materiales necesarios (pinturas, arcilla, papel, lápices).",
    "Fomentar la libre expresión de sentimientos y emociones a través del arte.",
    "Observar las creaciones artísticas para identificar temas recurrentes o conflictos no resueltos.",
    "Discutir con el paciente el significado de su obra de arte en un ambiente de apoyo."
];

dbActividadesNIC["4430 - Ludoterapia"] = [
    "Utilizar el juego como medio terapéutico para expresar emociones en pacientes pediátricos o con necesidades especiales.",
    "Observar las interacciones y dinámicas durante el juego estructurado o libre.",
    "Proporcionar juguetes y materiales adaptados a la edad y capacidad del paciente."
];

dbActividadesNIC["4350 - Manejo de la conducta"] = [
    "Observar e identificar los factores desencadenantes de conductas desadaptativas.",
    "Establecer intervenciones consistentes para modificar conductas disruptivas.",
    "Proporcionar un ambiente predecible y seguro."
];

dbActividadesNIC["4354 - Manejo de la conducta: autolesión"] = [
    "Retirar objetos punzantes o potencialmente peligrosos del entorno inmediato.",
    "Establecer un contrato de seguridad con el paciente.",
    "Vigilar estrechamente al paciente y mantener una comunicación abierta y de apoyo."
];

dbActividadesNIC["4400 - Musicoterapia"] = [
    "Seleccionar intervenciones musicales adaptadas a las preferencias y necesidades del paciente.",
    "Administrar la música mediante auriculares o altavoces ambientales.",
    "Evaluar la respuesta fisiológica y emocional del paciente a la música."
];

dbActividadesNIC["4500 - Prevención del consumo de sustancias nocivas"] = [
    "Identificar poblaciones y factores de riesgo para el consumo de sustancias.",
    "Proporcionar educación sobre los efectos perjudiciales del alcohol, tabaco y drogas.",
    "Fomentar habilidades de resistencia frente a la presión de grupo."
];

dbActividadesNIC["4720 - Estimulación cognitiva"] = [
    "Proporcionar actividades estructuradas para estimular la memoria, la atención y el razonamiento.",
    "Adaptar la complejidad de los ejercicios al nivel cognitivo del paciente.",
    "Fomentar la participación en juegos de mesa, lectura o resolución de problemas."
];

dbActividadesNIC["4760 - Entrenamiento de la memoria"] = [
    "Ayudar al paciente a utilizar ayudas mnemotécnicas (agendas, calendarios, alarmas).",
    "Repetir la información importante de manera clara y pausada.",
    "Fomentar la asociación de nuevos datos con recuerdos previos bien establecidos."
];

dbActividadesNIC["4820 - Orientación en la realidad"] = [
    "Informar al paciente de su ubicación, fecha y hora actual de forma regular.",
    "Utilizar calendarios, relojes y letreros visibles en el entorno del paciente.",
    "Dirigirse al paciente por su nombre y validar sus emociones al reorientarlo."
];

dbActividadesNIC["5400 - Mejora de la autoestima"] = [
    "Animar al paciente a identificar sus puntos fuertes y virtudes personales.",
    "Ayudar a aceptar las críticas constructivas y minimizar la autocrítica negativa.",
    "Proporcionar experiencias que aumenten el éxito y la confianza personal."
];

dbActividadesNIC["5220 - Mejora de la imagen corporal"] = [
    "Ayudar al paciente a separar su valor personal de los cambios en su apariencia física.",
    "Fomentar el contacto visual y táctil con las zonas corporales modificadas o intervenidas.",
    "Proporcionar apoyo psicológico durante la adaptación a los cambios físicos."
];

dbActividadesNIC["5320-Humor"] = [
    "Establecer una relación terapéutica basada en la confianza y el uso constructivo del sentido del humor.",
    "Apoyar al paciente en la expresión de emociones a través de la risa para reducir el estrés y la tensión muscular.",
    "Seleccionar intervenciones humorísticas (chistes, historias, material cómico) adaptadas a las preferencias culturales y estado de ánimo del paciente.",
    "Vigilar la respuesta del paciente para asegurar que el humor sea percibido de forma positiva y no como una invalidación de sus sentimientos."
];

dbActividadesNIC["4340 - Entrenamiento de la asertividad"] = [
    "Ayudar al paciente a identificar su estilo de comunicación actual.",
    "Enseñar a expresar sentimientos, necesidades y opiniones de forma firme y respetuosa.",
    "Utilizar juegos de rol (role-playing) para practicar respuestas asertivas en situaciones simuladas.",
    "Proporcionar retroalimentación constructiva tras la práctica."
];

dbActividadesNIC["4310 - Terapia de actividad"] = [
    "Colaborar con los terapeutas ocupacionales, físicos y recreativos en la planificación y programación de actividades del paciente.",
    "Ayudar al paciente a identificar preferencias de actividades coherentes con sus capacidades físicas, psicológicas y sociales.",
    "Fomentar la participación en actividades de ocio y esparcimiento para mantener el tono físico y el bienestar emocional.",
    "Ayudar al paciente a monitorizar su propio progreso en el cumplimiento de las metas de actividad."
];

dbActividadesNIC["4480 - Facilitación de la autorresponsabilidad"] = [
    "Fomentar que el paciente asuma la responsabilidad principal de sus propias decisiones de salud y estilo de vida.",
    "Ayudar al paciente a evaluar las consecuencias derivadas de sus propias acciones y elecciones.",
    "Apoyar al paciente en la adopción de un papel activo en la planificación y ejecución de su plan de cuidados."
];

dbActividadesNIC["5515 - Mejora de la alfabetización en salud"] = [
    "Evaluar la capacidad del paciente para leer, comprender y utilizar la información médica y de salud.",
    "Utilizar un lenguaje sencillo, libre de tecnicismos excesivos, al explicar tratamientos o instrucciones de autocuidado.",
    "Verificar la comprensión del paciente mediante la técnica de 'explicación devuelta' (teach-back).",
    "Proporcionar material educativo con apoyos visuales, pictogramas o formatos audiovisuales accesibles."
];

dbActividadesNIC["5520 - Facilitación del aprendizaje"] = [
    "Fomentar la participación activa del alumno o paciente en el diseño de los objetivos educativos.",
    "Adaptar el ritmo de enseñanza a la capacidad de asimilación y estado de fatiga del individuo.",
    "Proporcionar refuerzo positivo y retroalimentación constructiva durante el proceso de adquisición de conocimientos."
];

dbActividadesNIC["5606 - Enseñanza: individual"] = [
    "Evaluar el nivel actual de conocimientos del paciente en relación con el tema de enseñanza específico.",
    "Adaptar el contenido educativo a las necesidades individuales, estilo de vida y barreras del paciente.",
    "Proporcionar tiempo para resolver dudas y preguntas específicas de forma personalizada."
];

dbActividadesNIC["5612 - Enseñanza: ejercicio prescrito"] = [
    "Explicar la finalidad y los beneficios específicos del programa de ejercicio prescrito para la condición de salud.",
    "Demostrar y supervisar la ejecución correcta de cada uno de los ejercicios pautados.",
    "Instruir al paciente sobre los signos y síntomas de alarma que exigen la suspensión inmediata de la actividad física."
];

dbActividadesNIC["5614 - Enseñanza: dieta prescrita"] = [
    "Explicar el propósito del seguimiento de la dieta prescrita en relación con la patología o tratamiento.",
    "Instruir al paciente sobre los alimentos permitidos, desaconsejados y las porciones recomendadas.",
    "Ayudar al paciente a integrar las pautas dietéticas en sus hábitos cotidianos y preferencias culturales."
];

dbActividadesNIC["5620 - Enseñanza: habilidad psicomotora"] = [
    "Demostrar paso a paso la destreza o habilidad psicomotora que el paciente debe aprender (ej. uso de inhaladores, inyecciones, curas).",
    "Proporcionar materiales adecuados para que el paciente practique bajo supervisión directa.",
    "Ofrecer retroalimentación inmediata y corregir errores técnicos durante la práctica supervisada."
];

dbActividadesNIC["6460 - Manejo de la demencia"] = [
    "Proporcionar un entorno seguro, estructurado y predecible que minimice la confusión y el estrés.",
    "Establecer una rutina diaria constante para las comidas, el sueño y las actividades de higiene.",
    "Utilizar técnicas de comunicación claras, frases cortas y un tono de voz calmado y afectuoso.",
    "Validar los sentimientos del paciente y evitar discutir o confrontar ideas delirantes."
];

dbActividadesNIC["6650 - Vigilancia"] = [
    "Mantener una observación estrecha, sistemática y continua del estado físico y clínico del paciente.",
    "Vigilar la aparición de cambios sutiles o complicaciones incipientes en los parámetros de salud.",
    "Registrar y reportar de manera oportuna cualquier hallazgo clínico relevante al equipo tratante."
];

dbActividadesNIC["6670 - Terapia de validación"] = [
    "Aceptar y validar los sentimientos y la realidad subjetiva de los pacientes con desorientación o demencia en lugar de confrontarlos.",
    "Fomentar la expresión emocional y la empatía para reducir la ansiedad y el aislamiento."
];

dbActividadesNIC["7310 - Cuidados de enfermería al ingreso"] = [
    "Recibir al paciente y a su familia orientándoles sobre las instalaciones, normas de la unidad y equipo clínico.",
    "Realizar la valoración clínica inicial de enfermería, inventario de pertenencias y registro de constantes vitales.",
    "Verificar la presencia de órdenes médicas iniciales y asegurar el confort y seguridad en la cama asignada."
];

dbActividadesNIC["7320 - Gestión de casos"] = [
    "Coordinar la atención integral del paciente a lo largo del continuum asistencial entre los diferentes servicios y profesionales.",
    "Evaluar las necesidades de recursos, continuidad de cuidados y apoyo sociofamiliar del paciente.",
    "Actuar como enlace y defensor de los intereses del paciente y su familia durante el proceso de salud."
];

dbActividadesNIC["7370 - Planificación para el alta"] = [
    "Evaluar la preparación y capacidad del paciente y cuidador para afrontar los cuidados domiciliarios tras el alta.",
    "Identificar necesidades de equipos médicos, medicamentos, citas de seguimiento y recursos comunitarios.",
    "Proporcionar instrucciones escritas y verbales claras de autocuidado al paciente y su familia antes de su salida."
];

dbActividadesNIC["5602 - Enseñanza: proceso de enfermedad"] = [
    "Evaluar el nivel actual de conocimientos del paciente relacionado con su proceso de enfermedad específico.",
    "Explicar la fisiopatología de la enfermedad y su relación con la anatomía y la fisiología, según cada caso.",
    "Instruir al paciente sobre las medidas para prevenir o minimizar los efectos secundarios de la enfermedad.",
    "Describir los signos y síntomas comunes de la enfermedad para su reconocimiento temprano."
];

dbActividadesNIC["6480 - Manejo ambiental"] = [
    "Crear un ambiente seguro para el paciente ajustando la temperatura, la iluminación y reduciendo los ruidos molestos.",
    "Controlar o regular la temperatura ambiental para favorecer el confort físico.",
    "Eliminar del entorno los elementos u objetos que puedan suponer un peligro físico o causar lesiones.",
    "Disponer una distribución adecuada del mobiliario y los dispositivos de asistencia para facilitar la movilidad segura."
];
// =========================================================================
// BLOQUE 2: PATRÓN II - NUTRICIONAL - METABÓLICO
// =========================================================================

dbActividadesNIC["1200 - Administración de nutrición parenteral total (NPT)"] = [
    "Comprobar la orden médica y la fórmula de NPT antes de la administración.",
    "Mantener una técnica aséptica estricta al manipular la línea central y la mezcla de NPT.",
    "Utilizar una bomba de infusión continua para administrar la solución de NPT.",
    "Controlar la glucemia capilar periódicamente según el protocolo de la unidad.",
    "Monitorizar los signos de infección o flebitis en el sitio de inserción del catéter venoso central."
];

dbActividadesNIC["1200 - Administración de nutrición parenteral total (NPT) G"] = [
    "Comprobar la orden médica y la fórmula de NPT antes de la administración.",
    "Mantener una técnica aséptica estricta al manipular la línea central y la mezcla de NPT.",
    "Utilizar una bomba de infusión continua para administrar la solución de NPT.",
    "Controlar la glucemia capilar periódicamente según el protocolo de la unidad.",
    "Monitorizar los signos de infección o flebitis en el sitio de inserción del catéter venoso central."
];

dbActividadesNIC["1050 - Alimentación F"] = [
    "Crear un ambiente agradable durante la comida (retirar chatos, limpiar superficies).",
    "Identificar la dieta prescrita para el paciente.",
    "Colocar al paciente en posición cómoda (fowler o erguido) que facilite la deglución.",
    "Proteger la ropa del paciente con un babero o toalla según corresponda.",
    "Preguntar al paciente sus preferencias en el orden de consumo de los alimentos.",
    "Ofrecer líquidos entre los alimentos sólidos cuando sea adecuado."
];

dbActividadesNIC["1056 - Alimentación enteral por sonda"] = [
    "Explicar el procedimiento al paciente o a la familia antes de iniciar la nutrición.",
    "Comprobar la colocación correcta de la sonda mediante aspiración de contenido gástrico o pH.",
    "Elevar la cabecera de la cama entre 30 y 45 grados durante y hasta 60 minutos después de la toma.",
    "Verificar el volumen del residuo gástrico antes de cada toma o cada 4-6 horas en infusión continua.",
    "Lavar la sonda con 30 ml de agua antes y después de cada administración de alimento o fármaco."
];

dbActividadesNIC["5246 - Asesoramiento nutricional"] = [
    "Establecer una relación terapéutica basada en la confianza y el respeto.",
    "Evaluar los hábitos alimentarios actuales y las preferencias culturales o personales.",
    "Ayudar al paciente a identificar conductas alimentarias modificables.",
    "Guiar en el establecimiento de metas nutricionales realistas a corto y largo plazo.",
    "Proporcionar información sobre el cálculo de requerimientos calóricos e ingesta balanceada."
];

dbActividadesNIC["1240 - Ayuda para ganar peso"] = [
    "Pesar al paciente periódicamente y registrar los progresos.",
    "Fomentar el aumento de calorías mediante alimentos ricos en nutrientes de poco volumen.",
    "Servir los alimentos de forma atractiva y apetitosa.",
    "Proporcionar suplementos hipercalóricos o hiperproteicos entre las comidas principales."
];

dbActividadesNIC["1280 - Ayuda para perder peso"] = [
    "Determinar la motivación del paciente para cambiar los hábitos de peso.",
    "Ayudar al paciente a establecer metas de pérdida de peso semanales realistas (0.5 a 1 kg/semana).",
    "Desarrollar un plan de alimentación hipocalórico equilibrado ajustado al estilo de vida.",
    "Fomentar la realización de ejercicio físico aeróbico regular adaptado a la condición del paciente."
];

dbActividadesNIC["1874 - Cuidados del drenaje: gastrointestinal"] = [
    "Monitorizar el volumen, color, consistencia y presencia de sedimentos en el efluente.",
    "Mantener la aspiración continua o intermitente según la orden médica prescrita.",
    "Irrogar el tubo de drenaje con solución salina estéril si está permeabilizado y prescrito.",
    "Proteger la piel periostomal o peritubo contra la maceración por jugos gástricos."
];

dbActividadesNIC["5614 - Enseñanza: dieta prescrita S"] = [
    "Explicar el propósito del seguimiento de la dieta prescrita en relación con la patología o tratamiento.",
    "Instruir al paciente sobre los alimentos permitidos, desaconsejados y las porciones recomendadas.",
    "Ayudar al paciente a integrar las pautas dietéticas en sus hábitos cotidianos y preferencias culturales."
];

dbActividadesNIC["1020 - Etapas en la dieta"] = [
    "Progresar la dieta de líquidos claros a dieta completa o blanda según la tolerancia gastrointestinal.",
    "Monitorizar la presencia de náuseas, vómitos, distensión o ruidos hidroaéreos anormales.",
    "Instruir al paciente sobre los tipos de alimentos permitidos en cada etapa."
];

dbActividadesNIC["1024 - Etapas en la dieta: cirugía para la pérdida de peso"] = [
    "Supervisar el paso gradual de líquidos a purés y alimentos blandos post-cirugía bariátrica.",
    "Enseñar a masticar lentamente y evitar la ingesta simultánea de líquidos durante las comidas.",
    "Instruir sobre la suplementación vitamínica y proteica requerida a largo plazo."
];

dbActividadesNIC["1100 - Manejo de la nutrición"] = [
    "Determinar el estado nutricional del paciente y su capacidad para satisfacer necesidades alimentarias.",
    "Asegurar que la dieta incluya alimentos ricos en fibra para evitar el estreñimiento.",
    "Monitorizar las calorías y la ingesta alimentaria diaria.",
    "Pesar al paciente a intervalos regulares y registrar los cambios de peso involuntarios."
];

dbActividadesNIC["1030 - Manejo de los trastornos de la alimentación"] = [
    "Establecer una relación de apoyo sin juicios morales con el paciente.",
    "Establecer metas de ganancia de peso razonables en colaboración con el equipo.",
    "Supervisar las comidas y el tiempo posterior (mínimo 1 hora) para evitar conductas purgativas.",
    "Monitorear signos vitales, electrólitos y estado electrocardiográfico."
];

dbActividadesNIC["1260 - Manejo del peso"] = [
    "Discutir los riesgos asociados a tener sobrepeso o peso inferior al normal.",
    "Determinar el índice de masa corporal (IMC) e identificar el peso ideal deseado.",
    "Desarrollar un método para registrar la ingesta diaria de alimentos y el nivel de ejercicio."
];

dbActividadesNIC["1160 - Monitorización nutricional"] = [
    "Pesar al paciente a la misma hora y con la misma báscula regularmente.",
    "Monitorizar las tendencias de pérdida o ganancia de peso corporal.",
    "Evaluar los niveles de albúmina, prealbúmina, hemoglobina y hematocrito séricos.",
    "Observar la presencia de palidez, sequedad cutánea, fragilidad capilar o atrofia muscular."
];

dbActividadesNIC["1080 - Sondaje nasogástrico"] = [
    "Explicar al paciente la razón del sondaje nasogástrico y la técnica a realizar.",
    "Medir la distancia de la sonda a introducir (nariz - lóbulo de la oreja - apéndice xifoides).",
    "Lubricar la punta de la sonda con lubricante hidrosoluble.",
    "Instruir al paciente para que flexione el cuello y trague agua durante la inserción.",
    "Comprobar la ubicación correcta de la sonda antes de su uso."
];

dbActividadesNIC["1860 - Terapia de deglución F"] = [
    "Ayudar al paciente a sentarse en posición erguida (90°) para la alimentación.",
    "Asegurar la inclinación del mentón hacia abajo durante la deglución.",
    "Instruir al paciente a no hablar mientras traga los alimentos.",
    "Verificar la presencia de residuo de comida en la cavidad oral después de tragar.",
    "Asegurar que la textura de los alimentos y la consistencia de los líquidos sean las adecuadas."
];

dbActividadesNIC["1120 - Terapia nutricional"] = [
    "Comprobar la prescripción dietética adecuada para la condición fisiológica del paciente.",
    "Proporcionar una dieta balanceada rica en nutrientes según la enfermedad específica.",
    "Administrar suplementos nutricionales orales o enterales si la ingesta es insuficiente."
];

dbActividadesNIC["1320 - Acupresión"] = [
    "Determinar los resultados deseados e identificar los puntos de acupuntura a estimular.",
    "Aplicar presión firme y constante en los puntos seleccionados durante 15-20 segundos.",
    "Observar las señales verbales o no verbales para evaluar el alivio del malestar."
];

dbActividadesNIC["1380 - Aplicación de calor o frío"] = [
    "Comprobar la integridad de la piel antes de la aplicación.",
    "Explicar las sensaciones esperadas y proteger la piel con una barrera limpia.",
    "Limitar el tiempo de aplicación a 15-20 minutos por sesión para evitar lesiones tisulares."
];

dbActividadesNIC["1330 - Aromaterapia"] = [
    "Verificar la ausencia de alergias o hiperreactividad respiratoria a los aceites esenciales.",
    "Aplicar los aceites mediante difusión ambiental o mediante masaje diluido."
];

dbActividadesNIC["1340 - Estimulación cutánea"] = [
    "Realizar fricciones o masajes suaves sobre la zona afectada para modular la transmisión del dolor.",
    "Enseñar al paciente técnicas de autoestimulación o aplicación de presión."
];

dbActividadesNIC["1540 - Estimulación nerviosa eléctrica transcutánea (TENS)"] = [
    "Colocar los electrodos sobre los dermatomas o puntos de dolor indicados.",
    "Ajustar la frecuencia e intensidad del impulso eléctrico según la tolerancia y alivio del paciente.",
    "Inspeccionar la piel debajo de los electrodos tras su retirada."
];

dbActividadesNIC["1360 - Extubación endotraqueal: paliativa"] = [
    "Asegurar la administración preventiva de sedantes y analgésicos prescritos.",
    "Retirar el tubo endotraqueal con suavidad asegurando un entorno cómodo e íntimo.",
    "Asegurar el confort del paciente mediante higiene de cavidad oral y manejo de secreciones."
];

dbActividadesNIC["1450 - Manejo de las náuseas"] = [
    "Evaluar la frecuencia, duración e intensidad de las náuseas.",
    "Administrar antieméticos prescritos con antelación a las comidas o tratamientos.",
    "Fomentar la ingesta de alimentos fríos, secos o a temperatura ambiente."
];

dbActividadesNIC["6482 - Manejo del confort"] = [
    "Atender a las necesidades de posición, higiene y temperatura ambiental del paciente.",
    "Facilitar un entorno tranquilo con iluminación y niveles de ruido reducidos."
];

dbActividadesNIC["1410 - Manejo del dolor: agudo"] = [
    "Realizar una valoración exhaustiva del dolor (localización, inicio, duración, intensidad).",
    "Administrar los analgésicos prescritos a las horas fijadas para evitar picos de dolor.",
    "Evaluar la respuesta analgésica e informar al médico ante falta de alivio."
];

dbActividadesNIC["1415 - Manejo del dolor: crónico"] = [
    "Evaluar el impacto del dolor en la calidad de vida, sueño, estado de ánimo y funcionalidad.",
    "Combinar el tratamiento farmacológico con estrategias no farmacológicas de afrontamiento."
];

dbActividadesNIC["6855 - Manejo del dolor de parto W"] = [
    "Ofrecer medidas de confort físico (masajes sacros, hidroterapia, cambios de posición).",
    "Fomentar patrones de respiración y relajación durante las contracciones uterinas.",
    "Administrar analgesia farmacológica o epidural según el deseo de la gestante y pauta médica."
];

dbActividadesNIC["3550 - Manejo del prurito L"] = [
    "Aplicar lociones emolientes e hidratantes no perfumadas.",
    "Aconsejar el uso de ropa holgada de algodón y mantener las uñas cortas para evitar excoriaciones."
];

dbActividadesNIC["1440 - Manejo del síndrome premenstrual (SPM)"] = [
    "Recomendar ajustes en la dieta (reducir ingesta de sodio, azúcar refinado y cafeína).",
    "Fomentar el ejercicio aeróbico regular y técnicas de manejo del estrés."
];

dbActividadesNIC["1570 - Manejo del vómito"] = [
    "Colocar al paciente de lado para prevenir la aspiración del contenido gástrico.",
    "Medir y registrar el volumen y las características del vómito.",
    "Proporcionar enjuagues bucales tras los episodios de emesis."
];

dbActividadesNIC["1480 - Masaje"] = [
    "Realizar pases suaves de fricción o amasamiento en las zonas con tensión muscular.",
    "Utilizar aceites o cremas para reducir la fricción sobre la piel."
];

dbActividadesNIC["1310 - Masaje abdominal"] = [
    "Realizar pases circulares suaves sobre el abdomen en el sentido de las agujas del reloj.",
    "Evaluar la tolerancia del paciente y la presencia de dolor durante el masaje."
];

dbActividadesNIC["1350 - Prevención de la sequedad ocular"] = [
    "Aplicar lágrimas artificiales o geles lubricantes oftálmicos según indicación.",
    "Ocluir suavemente los párpados en pacientes inconscientes o con lagoftalmos."
];

dbActividadesNIC["1520 - Reiki"] = [
    "Posicionar las manos suavemente sobre o cerca de los centros energéticos del cuerpo.",
    "Crear un ambiente de quietud y relajación durante la sesión."
];

dbActividadesNIC["1460 - Relajación muscular progresiva"] = [
    "Guiar al paciente en la tensión y relajación secuencial de los principales grupos musculares.",
    "Acompañar la técnica con instrucciones de respiración diafragmática."
];

dbActividadesNIC["1390 - Tacto curativo"] = [
    "Utilizar las manos para armonizar y reequilibrar el campo energético del paciente."
];

dbActividadesNIC["5465 - Tacto terapéutico"] = [
    "Evaluar la simetría del campo de energía e intervenir con movimientos manuales suaves."
];

dbActividadesNIC["1050 - Alimentación D"] = [
    "Crear un ambiente agradable durante la comida (retirar chatos, limpiar superficies).",
    "Identificar la dieta prescrita para el paciente.",
    "Colocar al paciente en posición cómoda (fowler o erguido) que facilite la deglución.",
    "Proteger la ropa del paciente con un babero o toalla según corresponda."
];

dbActividadesNIC["1800 - Ayuda con el autocuidado"] = [
    "Comprobar la capacidad del paciente para realizar autocuidados independientes.",
    "Monitorizar las necesidades de ayuda del paciente en las actividades de la vida diaria.",
    "Establecer una rutina de actividades adaptada a las reservas de energía del paciente."
];

dbActividadesNIC["1804 - Ayuda con el autocuidado: micción/defecación B"] = [
    "Acompañar al paciente al sanitario o colocar cuña/chato a intervalos fijos.",
    "Proporcionar intimidad durante la eliminación y ayudar en la higiene perineal posterior."
];

dbActividadesNIC["1806 - Ayuda con el autocuidado: transferencia C"] = [
    "Evaluar la capacidad del paciente para colaborar en la transferencia.",
    "Utilizar técnicas y mecánica corporal adecuadas para mover al paciente de forma segura."
];

dbActividadesNIC["1610 - Baño"] = [
    "Ayudar con el baño en cama, tina o ducha según la capacidad funcional del paciente.",
    "Comprobar la temperatura del agua antes del baño.",
    "Inspeccionar el estado e integridad de la piel durante el lavado."
];

dbActividadesNIC["1620 - Cuidados de las lentes de contacto"] = [
    "Retirar o colocar las lentes de contacto utilizando técnicas higiénicas y soluciones adecuadas.",
    "Guardar las lentes en sus estuches correspondientes identificando lado derecho e izquierdo."
];

dbActividadesNIC["1680 - Cuidados de las uñas"] = [
    "Limpiar y cortar las uñas en línea recta, evitando lesiones en los lechos ungueales.",
    "Hidratar la piel periférica de las uñas."
];

dbActividadesNIC["1640 - Cuidados de los oídos"] = [
    "Limpiar el pabellón auricular externo con agua y jabón suave.",
    "Evitar la introducción de bastoncillos u objetos punzantes en el conducto auditivo."
];

dbActividadesNIC["1650 - Cuidados de los ojos"] = [
    "Limpiar los párpados desde el ángulo interno hacia el externo con torundas húmedas.",
    "Aplicar profilaxis o gotas oftálmicas según indicación médica."
];

dbActividadesNIC["1660 - Cuidados de los pies"] = [
    "Inspeccionar diariamente la planta, talones y espacios interdigitales.",
    "Secar minuciosamente los pies tras el lavado y aplicar crema hidratante evitando el área interdigital."
];

dbActividadesNIC["1670 - Cuidados del cabello y del cuero cabelludo"] = [
    "Lavar y peinar el cabello regularmente según el estado del paciente.",
    "Inspeccionar el cuero cabelludo en busca de lesiones, descamación o parásitos."
];

dbActividadesNIC["1870 - Cuidados del drenaje"] = [
    "Comprobar la fijación del catéter o tubo de drenaje.",
    "Medir y registrar el volumen y características del líquido drenado."
];

dbActividadesNIC["1750 - Cuidados perineales"] = [
    "Limpiar el área perineal de delante hacia atrás en mujeres y con movimientos circulares en hombres.",
    "Secar minuciosamente la zona para evitar la maceración cutánea."
];

dbActividadesNIC["1770 - Cuidados post mortem"] = [
    "Lavar y amortajar el cuerpo respetando las normas institucionales y creencias de la familia.",
    "Colocar las prótesis y cerrar suavemente los párpados."
];

dbActividadesNIC["1720 - Favorecimiento de la salud oral"] = [
    "Instruir sobre la técnica correcta de cepillado e hilo dental.",
    "Fomentar la limpieza bucal tras cada comida principal."
];

dbActividadesNIC["1645 - Irrigación de los oídos"] = [
    "Verificar la integridad de la membrana timpánica antes de la irrigación.",
    "Inyectar suavemente la solución templada hacia la pared superior del conducto auditivo."
];

dbActividadesNIC["1655 - Irrigación de los ojos"] = [
    "Irrogar el saco conjuntival con solución salina estéril desde el ángulo interno hacia el externo."
];

dbActividadesNIC["6462 - Manejo de la demencia: baño V"] = [
    "Preparar un ambiente tranquilo y una temperatura de agua agradable para el baño en pacientes con demencia.",
    "Simplificar las instrucciones y ofrecer apoyo constante durante el aseo para reducir la agitación."
];

dbActividadesNIC["1710 - Mantenimiento de la salud oral"] = [
    "Ayudar con el cepillado dental en pacientes dependientes.",
    "Aplicar lubricante labial para prevenir grietas."
];

dbActividadesNIC["1665 - Mejora de la capacidad funcional"] = [
    "Evaluar las limitaciones funcionales y promover la realización de ejercicios adaptados."
];

dbActividadesNIC["1850 - Mejora del sueño"] = [
    "Ajustar el entorno (luz, ruido, temperatura) para favorecer el descanso nocturno.",
    "Establecer una rutina constante antes de acostarse."
];

dbActividadesNIC["1730 - Restablecimiento de la salud oral"] = [
    "Aplicar antisépticos o protectores bucales en mucosas erosionadas.",
    "Monitorizar la curación de aftas o estomatitis."
];

dbActividadesNIC["1860 - Terapia de deglución D"] = [
    "Ayudar al paciente a sentarse en posición erguida (90°) para la alimentación.",
    "Asegurar la inclinación del mentón hacia abajo durante la deglución."
];

dbActividadesNIC["1630 - Vestir"] = [
    "Facilitar la ropa adecuada según la preferencia del paciente y la estación del año.",
    "Proporcionar ropa de fácil abrochado en pacientes con limitación motora."
];

dbActividadesNIC["3200 - Precauciones en la aspiración"] = [
    "Determinar la necesidad de la aspiración de la vía aérea (presencia de secreciones audibles o visibles).",
    "Auscultar los sonidos respiratorios antes y después del procedimiento de aspiración.",
    "Utilizar equipo estéril y guantes desechables adecuados al realizar la aspiración de vías aéreas inferiores.",
    "Hiperoxigenar al paciente con oxígeno al 100% antes y después de la aspiración endotraqueal, según corresponda."
];

dbActividadesNIC["6900 - Succión no nutritiva"] = [
    "Proporcionar un chupete limpio o permitir la succión con el dedo enguantado al lactante para calmar la ansiedad y promover el confort.",
    "Utilizar la succión no nutritiva durante o inmediatamente antes de la alimentación por sonda para favorecer la maduración del reflejo de succión y la digestión.",
    "Vigilar la respuesta respiratoria y la saturación de oxígeno del lactante durante la succión para evitar episodios de fatiga o desaturación."
];

dbActividadesNIC["8240 - Alimentación con taza: recién nacido"] = [
    "Colocar al recién nacido en una posición semisentada o erguida adecuada para la toma con taza.",
    "Apoyar suavemente el borde de la taza contra el labio inferior del lactante permitiendo que sorba el líquido por sí mismo.",
    "Evitar verter el líquido de forma directa dentro de la boca del recién nacido para prevenir el riesgo de aspiración o atragantamiento.",
    "Vigilar el volumen total ingerido y las señales de saciedad durante el proceso de alimentación."
];

dbActividadesNIC["3350 - Monitorización respiratoria"] = [
    "Evaluar la frecuencia, el ritmo, la profundidad y el esfuerzo respiratorio del paciente de forma periódica.",
    "Auscultar los ruidos respiratorios, observando áreas de disminución o ausencia de ventilación y presencia de sonidos adventicios.",
    "Vigilar los patrones de respiración anormales (como respiración de Kussmaul, Cheyne-Stokes o apnea).",
    "Monitorizar los valores de oximetría de pulso y la respuesta clínica a la oxigenoterapia."
];

dbActividadesNIC["1874 - Cuidados del drenaje: gastrointestinal"] = [
    "Monitorizar de forma regular el volumen, el color, la consistencia y la presencia de sedimentos en el efluente gastrointestinal.",
    "Mantener la aspiración continua o intermitente de la sonda o drenaje según la orden médica prescrita.",
    "Irrigar el tubo de drenaje con solución salina estéril si está permeabilizado y prescrito.",
    "Proteger la piel periostomal o peritubo contra la maceración provocada por las secreciones o jugos gástricos."
];

dbActividadesNIC["1052 - Alimentación con biberón"] = [
    "Sostener al lactante en una posición semierguida durante la toma para favorecer la comodidad y prevenir la aspiración o la otitis media.",
    "Comprobar la temperatura y el flujo de la leche a través de la tetina antes de iniciar la alimentación.",
    "Vigilar el ritmo de succión, la deglución y la respiración del lactante para asegurar una coordinación adecuada.",
    "Favorecer la expulsión de gases (eructo) mediante palmadas suaves en la espalda a mitad y al finalizar la toma."
];

dbActividadesNIC["1720 - Favorecimiento de la salud oral"] = [
    "Instruir al paciente sobre la técnica correcta de cepillado dental y uso de hilo dental.",
    "Fomentar la limpieza bucal de forma regular tras cada comida principal.",
    "Inspeccionar el estado de la mucosa oral, encías, lengua y piezas dentales.",
    "Aplicar soluciones antisépticas o protectores bucales según prescripción para prevenir infecciones."
];

dbActividadesNIC["1710 - Mantenimiento de la salud oral"] = [
    "Ayudar con el cepillado dental diario en pacientes con dependencia o limitaciones físicas.",
    "Aplicar lubricante o protector labial para prevenir la sequedad y las grietas en los labios.",
    "Vigilar la presencia de placa bacteriana, halitosis o lesiones inflamatorias en la cavidad oral.",
    "Proporcionar enjuagues bucales sin alcohol para mantener la hidratación y frescura de la mucosa."
];

dbActividadesNIC["1730 - Restablecimiento de la salud oral"] = [
    "Aplicar antisépticos o protectores bucales en las mucosas erosionadas para facilitar la cicatrización.",
    "Monitorizar de manera estrecha la curación de aftas, estomatitis o lesiones inflamatorias en la boca.",
    "Instruir al paciente y al cuidador sobre los cuidados específicos para restaurar la integridad de la mucosa oral.",
    "Coordinar con el odontólogo o médico tratante tratamientos específicos ante infecciones o lesiones orales severas."
];

dbActividadesNIC["1050 - Alimentación"] = [
    "Crear un ambiente agradable durante la comida (retirar chatos, limpiar superficies).",
    "Identificar la dieta prescrita para el paciente.",
    "Colocar al paciente en posición cómoda (fowler o erguido) que facilite la deglución.",
    "Proteger la ropa del paciente con un babero o toalla según corresponda.",
    "Preguntar al paciente sus preferencias en el orden de consumo de los alimentos.",
    "Ofrecer líquidos entre los alimentos sólidos cuando sea adecuado."
];

dbActividadesNIC["1056 - Alimentación enteral por sonda"] = [
    "Explicar el procedimiento al paciente o a la familia antes de iniciar la nutrición.",
    "Comprobar la colocación correcta de la sonda mediante aspiración de contenido gástrico o pH.",
    "Elevar la cabecera de la cama entre 30 y 45 grados durante y hasta 60 minutos después de la toma.",
    "Verificar el volumen del residuo gástrico antes de cada toma o cada 4-6 horas en infusión continua.",
    "Lavar la sonda con 30 ml de agua antes y después de cada administración de alimento o fármaco."
];

dbActividadesNIC["5246 - Asesoramiento nutricional"] = [
    "Establecer una relación terapéutica basada en la confianza y el respeto.",
    "Evaluar los hábitos alimentarios actuales y las preferencias culturales o personales.",
    "Ayudar al paciente a identificar conductas alimentarias modificables.",
    "Guiar en el establecimiento de metas nutricionales realistas a corto y largo plazo.",
    "Proporcionar información sobre el cálculo de requerimientos calóricos e ingesta balanceada."
];

dbActividadesNIC["1240 - Ayuda para ganar peso"] = [
    "Pesar al paciente periódicamente y registrar los progresos.",
    "Fomentar el aumento de calorías mediante alimentos ricos en nutrientes de poco volumen.",
    "Servir los alimentos de forma atractiva y apetitosa.",
    "Proporcionar suplementos hipercalóricos o hiperproteicos entre las comidas principales."
];

dbActividadesNIC["1280 - Ayuda para perder peso"] = [
    "Determinar la motivación del paciente para cambiar los hábitos de peso.",
    "Ayudar al paciente a establecer metas de pérdida de peso semanales realistas (0.5 a 1 kg/semana).",
    "Desarrollar un plan de alimentación hipocalórico equilibrado ajustado al estilo de vida.",
    "Fomentar la realización de ejercicio físico aeróbico regular adaptado a la condición del paciente."
];

dbActividadesNIC["1020 - Etapas en la dieta"] = [
    "Progresar la dieta de líquidos claros a dieta completa o blanda según la tolerancia gastrointestinal.",
    "Monitorizar la presencia de náuseas, vómitos, distensión o ruidos hidroaéreos anormales.",
    "Instruir al paciente sobre los tipos de alimentos permitidos en cada etapa."
];

dbActividadesNIC["1030 - Manejo de los trastornos de la alimentación"] = [
    "Establecer una relación de apoyo sin juicios morales con el paciente.",
    "Establecer metas de ganancia de peso razonables en colaboración con el equipo.",
    "Supervisar las comidas y el tiempo posterior (mínimo 1 hora) para evitar conductas purgativas.",
    "Monitorear signos vitales, electrólitos y estado electrocardiográfico."
];

dbActividadesNIC["1260 - Manejo del peso"] = [
    "Discutir los riesgos asociados a tener sobrepeso o peso inferior al normal.",
    "Determinar el índice de masa corporal (IMC) e identificar el peso ideal deseado.",
    "Desarrollar un método para registrar la ingesta diaria de alimentos y el nivel de ejercicio."
];

dbActividadesNIC["1160 - Monitorización nutricional"] = [
    "Pesar al paciente a la misma hora y con la misma báscula regularmente.",
    "Monitorizar las tendencias de pérdida o ganancia de peso corporal.",
    "Evaluar los niveles de albúmina, prealbúmina, hemoglobina y hematocrito séricos.",
    "Observar la presencia de palidez, sequedad cutánea, fragilidad capilar o atrofia muscular."
];

dbActividadesNIC["1080 - Sondaje nasogástrico"] = [
    "Explicar al paciente la razón del sondaje nasogástrico y la técnica a realizar.",
    "Medir la distancia de la sonda a introducir (nariz - lóbulo de la oreja - apéndice xifoides).",
    "Lubricar la punta de la sonda con lubricante hidrosoluble.",
    "Instruir al paciente para que flexione el cuello y trague agua durante la inserción.",
    "Comprobar la ubicación correcta de la sonda antes de su uso."
];

dbActividadesNIC["1860 - Terapia de deglución"] = [
    "Ayudar al paciente a sentarse en posición erguida (90°) para la alimentación.",
    "Asegurar la inclinación del mentón hacia abajo durante la deglución.",
    "Instruir al paciente a no hablar mientras traga los alimentos.",
    "Verificar la presencia de residuo de comida en la cavidad oral después de tragar.",
    "Asegurar que la textura de los alimentos y la consistencia de los líquidos sean las adecuadas."
];

dbActividadesNIC["1200 - Administración de nutrición parenteral total (NPT) D"] = [
    "Comprobar la orden médica y la fórmula de NPT antes de la administración.",
    "Mantener una técnica aséptica estricta al manipular la línea central y la mezcla de NPT.",
    "Utilizar una bomba de infusión continua para administrar la solución de NPT.",
    "Controlar la glucemia capilar periódicamente según el protocolo de la unidad.",
    "Monitorizar los signos de infección o flebitis en el sitio de inserción del catéter venoso central."
];

dbActividadesNIC["2000 - Manejo de electrólitos"] = [
    "Monitorizar los niveles séricos de electrólitos (Na, K, Ca, Mg, Cl, P).",
    "Administrar suplementos electrolíticos según prescripción médica.",
    "Observar signos de desequilibrio neuromuscular o sintomatología cardíaca."
];

dbActividadesNIC["2001 - Manejo de electrólitos: hipercalcemia"] = [
    "Fomentar la hidratación i.v. u oral con solución salina para excreción renal de calcio.",
    "Administrar calcitonina o bisfosfonatos prescritos."
];

dbActividadesNIC["2005 - Manejo de electrólitos: hiperfosfatemia"] = [
    "Administrar quelantes de fosfato con las comidas.",
    "Restringir la ingesta de alimentos ricos en fósforo."
];

dbActividadesNIC["2003 - Manejo de electrólitos: hipermagnesemia"] = [
    "Monitorizar reflejos osteotendinosos y frecuencia respiratoria.",
    "Administrar gluconato cálcico i.v. ante signos de toxicidad neuromuscular."
];

dbActividadesNIC["2004 - Manejo de electrólitos: hipernatremia"] = [
    "Administrar soluciones hipotónicas i.v. de forma paulatina.",
    "Vigilar signos de edema cerebral durante la corrección rápida."
];

dbActividadesNIC["2002 - Manejo de electrólitos: hiperpotasemia"] = [
    "Monitorizar electrocardiograma continuo (detección de T picudas).",
    "Administrar resinas de intercambio, insulina con glucosa o gluconato cálcico según orden médica."
];

dbActividadesNIC["2006 - Manejo de electrólitos: hipocalcemia"] = [
    "Administrar gluconato o cloruro de calcio i.v. o vía oral.",
    "Evaluar signos de tetania (Chvostek y Trousseau)."
];

dbActividadesNIC["2010 - Manejo de electrólitos: hipofosfatemia"] = [
    "Administrar suplementos de fosfato según pauta médica.",
    "Monitorizar la función respiratoria y muscular."
];

dbActividadesNIC["2008 - Manejo de electrólitos: hipomagnesemia"] = [
    "Administrar sulfato de magnesio i.v. o vía oral.",
    "Monitorizar reflejos y ritmo cardíaco."
];

dbActividadesNIC["2009 - Manejo de electrólitos: hiponatremia"] = [
    "Restringir la ingesta de agua libre en hiponatremia dilucional.",
    "Administrar suero salino hipertónico con bomba de infusión en casos severos."
];

dbActividadesNIC["2007 - Manejo de electrólitos: hipopotasemia"] = [
    "Administrar cloruro de potasio diluido i.v. mediante bomba (nunca en bolo).",
    "Monitorizar electrocardiograma y función neuromuscular."
];

dbActividadesNIC["2120 - Manejo de la hiperglucemia"] = [
    "Monitorizar la glucemia capilar y cetoacidosis (cetonuria, aliento cetónico).",
    "Administrar insulina según la pauta móvil o prescripción."
];

dbActividadesNIC["2125 - Manejo de la hiperlipidemia"] = [
    "Instruir sobre una dieta baja en grasas saturadas y colesterol.",
    "Fomentar la realización de ejercicio físico aeróbico regular."
];

dbActividadesNIC["2130 - Manejo de la hipoglucemia"] = [
    "Identificar signos de hipoglucemia (sudoración, temblor, mareo, confusión).",
    "Administrar hidratos de carbono de acción rápida vía oral o glucagón/glucosado i.v. si no hay consciencia."
];

dbActividadesNIC["2080 - Manejo de líquidos/electrólitos N"] = [
    "Llevar balance hídrico estricto de ingesta y eliminación.",
    "Monitorizar los valores de electrólitos en sangre y la densidad urinaria."
];

dbActividadesNIC["1910 - Manejo del equilibrio ácido-base"] = [
    "Monitorizar los resultados de la gasometría arterial.",
    "Ajustar la sueroterapia o ventilación según el tipo de trastorno."
];

dbActividadesNIC["1911 - Manejo del equilibrio ácido-base: acidosis metabólica"] = [
    "Administrar bicarbonato de sodio i.v. según gasometría y pauta médica.",
    "Vigilar la presencia de respiración de Kussmaul."
];

dbActividadesNIC["1913 - Manejo del equilibrio ácido-base: acidosis respiratoria K*"] = [
    "Favorecer la ventilación adecuada y la permeabilidad respiratoria.",
    "Administrar oxigenoterapia o soporte ventilatorio mecánico."
];

dbActividadesNIC["1912 - Manejo del equilibrio ácido-base: alcalosis metabólica"] = [
    "Administrar suero salino isotónico para corregir la volemia y el cloro.",
    "Monitorizar niveles de potasio y calcio."
];

dbActividadesNIC["1914 - Manejo del equilibrio ácido-base: alcalosis respiratoria K"] = [
    "Fomentar un patrón respiratorio lento y calmado.",
    "Tratar la causa subyacente de la hiperventilación (ansiedad, dolor)."
];

dbActividadesNIC["2020 - Monitorización de electrólitos"] = [
    "Notificar de inmediato los valores analíticos alterados o críticos.",
    "Relacionar las alteraciones analíticas con la clínica del paciente."
];

dbActividadesNIC["1920 - Monitorización del equilibrio ácido-base"] = [
    "Evaluar los parámetros gasométricos y la función renal y respiratoria."
];

dbActividadesNIC["4232 - Punción arterial: muestra de sangre arterial N"] = [
    "Realizar la prueba de Allen antes de punzar la arteria radial.",
    "Comprimir el sitio de punción durante al menos 5 minutos."
];

dbActividadesNIC["2150 - Terapia de diálisis peritoneal"] = [
    "Conectar el sistema respetando las normas de asepsia estricta.",
    "Medir el volumen y la transparencia del efluente extraído."
];

dbActividadesNIC["2100 - Terapia de hemodiálisis"] = [
    "Monitorizar la presión arterial, pulso y peso pre y post-diálisis.",
    "Comprobar el funcionamiento del acceso vascular."
];

dbActividadesNIC["2110 - Terapia de hemofiltración"] = [
    "Monitorizar el balance de líquidos horaria y el circuito extracorpóreo."
];

dbActividadesNIC["5244 - Asesoramiento en la lactancia"] = [
    "Evaluar el agarre, la succión y la postura del lactante durante la lactancia materna.",
    "Instruir a la madre sobre la técnica correcta de estimulación y vaciamiento de los pechos.",
    "Proporcionar apoyo emocional y resolver dudas sobre la producción láctea y nutrición infantil."
];

dbActividadesNIC["6710 - Favorecimiento del apego"] = [
    "Fomentar el contacto precoz piel con piel entre padres e hijo inmediatamente tras el nacimiento.",
    "Apoyar la respuesta afectiva y la sensibilidad de los padres hacia las señales del lactante."
];

dbActividadesNIC["6820 - Cuidados del lactante"] = [
    "Vigilar los parámetros de crecimiento, desarrollo psicomotor y nutrición durante el primer año de vida.",
    "Instruir a los padres sobre signos de alarma pediátrica y cuidados cotidianos."
];

dbActividadesNIC["6824 - Cuidados del lactante: recién nacido"] = [
    "Evaluar el Test de Apgar, constantes vitales, antropometría y profilaxis ocular en el nacimiento."
];

dbActividadesNIC["5640 - Enseñanza: nutrición del lactante (0-3 meses)"] = [
    "Instruir a los padres sobre las necesidades nutricionales y frecuencia de tomas en el lactante de 0 a 3 meses.",
    "Fomentar la lactancia materna exclusiva o la fórmula adaptada según corresponda, evaluando signos de saciedad.",
    "Enseñar las técnicas adecuadas de preparación de biberones y esterilización si se requiere alimentación artificial."
];

dbActividadesNIC["5641 - Enseñanza: nutrición del lactante (4-6 meses)"] = [
    "Educar a los padres sobre los signos de preparación del lactante para iniciar la introducción de la alimentación complementaria (ablactación).",
    "Instruir sobre la incorporación progresiva de nuevos alimentos (cereales sin gluten, frutas y verduras) de uno en uno para detectar posibles alergias.",
    "Enseñar la consistencia adecuada de los purés y papillas adaptadas a esta etapa de desarrollo."
];

dbActividadesNIC["5568 - Educación parental: lactante"] = [
    "Instruir a los padres sobre los hitos del desarrollo esperados durante el primer año de vida del lactante.",
    "Enseñar técnicas adecuadas de manejo, baño, cambio de pañal y cuidados cotidianos del bebé.",
    "Educar sobre los signos de alarma y enfermedades comunes en la infancia que requieren consulta médica urgente.",
    "Fomentar un entorno seguro y afectivo que estimule el desarrollo cognitivo y emocional del lactante."
];

dbActividadesNIC["2080 - Manejo de líquidos/electrólitos"] = [
    "Llevar un registro estricto de ingresos y egresos (balance hídrico).",
    "Monitorizar los valores de electrólitos en sangre y la densidad urinaria.",
    "Observar si hay indicios de fluidos corporales con exceso de volumen o déficit."
];

dbActividadesNIC["4170 - Manejo de la hipervolemia"] = [
    "Administrar diuréticos prescritos y restringir sodio y líquidos.",
    "Monitorizar el peso corporal diario y la aparición de edemas periféricos o crepitantes pulmonares."
];

dbActividadesNIC["4040 - Cuidados cardíacos"] = [
    "Monitorizar el ritmo y la frecuencia cardíaca mediante electrocardiograma continuo.",
    "Evaluar el dolor torácico, disnea o fatiga en relación con el esfuerzo físico."
];

dbActividadesNIC["4120 - Manejo de líquidos"] = [
    "Controlar el balance hídrico y administrar sueroterapia prescrita según la condición clínica.",
    "Vigilar la velocidad de infusión de los líquidos intravenosos para evitar sobrecargas circulatorias."
];

dbActividadesNIC["4130 - Monitorización de líquidos"] = [
    "Evaluar la turgencia de la piel, la humedad de las mucosas y la presencia o ausencia de edema.",
    "Observar las características y el volumen de la diuresis emitida."
];

dbActividadesNIC["4150 - Regulación hemodinámica"] = [
    "Ajustar las infusiones de inotrópicos, vasopresores o vasodilatadores según la respuesta hemodinámica.",
    "Monitorizar los parámetros de presión arterial media y gasto cardíaco."
];

dbActividadesNIC["6680 - Monitorización de los signos vitales"] = [
    "Monitorizar la presión arterial, el pulso, la frecuencia respiratoria y la temperatura corporal.",
    "Comprobar la presión arterial ortostática en pacientes con riesgo de mareo o caídas."
];

dbActividadesNIC["4190 - Punción intravenosa (i.v.)"] = [
    "Insertar un catéter venoso periférico bajo técnica aséptica estricta.",
    "Inspeccionar el sitio de punción de forma regular para detectar signos tempranos de infiltración o flebitis."
];

dbActividadesNIC["4200 - Terapia intravenosa (i.v.)"] = [
    "Comprobar el sitio de punción para descartar extravasación o flebitis.",
    "Mantener la permeabilidad del sistema de infusión y cambiar los equipos según los protocolos de la institución."
];

dbActividadesNIC["4090 - Manejo de la arritmia"] = [
    "Notificar alteraciones en el trazado del ECG e iniciar la administración de antiarrítmicos prescritos.",
    "Evaluar la repercusión hemodinámica de la arritmia sobre el estado de consciencia y la perfusión."
];

dbActividadesNIC["4162 - Manejo de la hipertensión"] = [
    "Monitorizar las cifras de presión arterial de forma seriada y administrar antihipertensivos pautados.",
    "Instruir al paciente sobre la importancia de la restricción de sodio y el cumplimiento del tratamiento."
];

dbActividadesNIC["4175 - Manejo de la hipotensión"] = [
    "Colocar al paciente en posición de Trendelenburg e infundir sueroterapia.",
    "Vigilar la causa subyacente de la caída de la presión arterial y notificar al equipo médico."
];

dbActividadesNIC["4140 - Reposición de líquidos"] = [
    "Infundir las soluciones cristaloides o coloides prescritas a la velocidad programada según el déficit hídrico.",
    "Monitorizar la respuesta hemodinámica del paciente a la infusión de líquidos de reposición.",
    "Evaluar periódicamente los signos vitales y la perfusión tisular durante la reposición."
];

dbActividadesNIC["6924 - Fototerapia: neonato"] = [
    "Colocar parches protectores opacos en los ojos del recién nacido.",
    "Cambiar de posición al neonato cada 2-3 horas para exponer la piel.",
    "Monitorizar la temperatura corporal y los niveles de bilirrubina."
];

dbActividadesNIC["3900 - Regulación de la temperatura"] = [
    "Monitorizar la temperatura corporal a intervalos regulares.",
    "Ajustar la vestimenta o la temperatura ambiental según necesidad."
];

dbActividadesNIC["3800 - Manejo de la hipotermia"] = [
    "Retirar la ropa húmeda y aplicar mantas calientes o aire caliente.",
    "Monitorizar la temperatura central."
];

dbActividadesNIC["3910 - Regulación de la temperatura: recién nacido"] = [
    "Secar al recién nacido inmediatamente tras el parto y colocar gorro.",
    "Fomentar el contacto piel con piel."
];

dbActividadesNIC["4030 - Administración de hemoderivados"] = [
    "Verificar la identidad del paciente, grupo y número de unidad.",
    "Monitorizar signos vitales antes, durante y al finalizar la transfusión.",
    "Detener la infusión ante sospecha de reacción transfusional."
];

dbActividadesNIC["4238 - Flebotomía: muestra de sangre venosa"] = [
    "Extraer la muestra venosa e identificar los tubos correspondientes."
];

dbActividadesNIC["6826 - Cuidados del lactante: prematuro"] = [
    "Proporcionar un entorno térmico neutro en incubadora y minimizar estímulos lumínicos y sonoros excesivos."
];

dbActividadesNIC["5618 - Enseñanza: procedimientos o tratamientos"] = [
    "Explicar al paciente el propósito y la descripción de los procedimientos o tratamientos planificados.",
    "Instruir al paciente sobre cómo puede cooperar durante la realización del procedimiento."
];

dbActividadesNIC["8278 - Mejora del desarrollo: lactantes"] = [
    "Proporcionar estímulos sensoriales, visuales y auditivos adecuados para la edad del lactante.",
    "Fomentar las interacciones afectivas y el juego interactivo para estimular el desarrollo psicomotor."
];

dbActividadesNIC["7480 - Vigilancia: lactante"] = [
    "Monitorizar de forma continua las constantes vitales, el estado de hidratación y la respuesta neurológica del lactante.",
    "Vigilar la aparición de signos de dificultad respiratoria, intolerancia alimentaria o alteración en los patrones de eliminación."
];

dbActividadesNIC["7460 - Protección de los derechos del paciente"] = [
    "Informar al paciente sobre su derecho a recibir una atención digna y participar en las decisiones de su tratamiento.",
    "Velar por la confidencialidad de la información clínica y el respeto a la autonomía del usuario."
];

dbActividadesNIC["7400 - Orientación en el sistema sanitario"] = [
    "Facilitar información sobre el funcionamiento del centro de salud u hospital y los servicios disponibles.",
    "Ayudar al paciente a navegar por los diferentes niveles asistenciales y recursos de la red sanitaria."
];

dbActividadesNIC["4920 - Escucha activa"] = [
    "Mostrar interés genuino y atención plena al mensaje verbal y no verbal del paciente.",
    "Evitar interrupciones prematuras y parafrasear las ideas principales para confirmar la comprensión mutua."
];

dbActividadesNIC["6630 - Aislamiento"] = [
    "Aplicar las medidas de aislamiento hospitalario correspondientes (estándar, por contacto, de gotas o por vía aérea).",
    "Señalizar adecuadamente la puerta de la habitación y asegurar la disponibilidad de equipos de protección personal."
];

dbActividadesNIC["5649 - Enseñanza: control de infecciones"] = [
    "Instruir sobre la correcta técnica de lavado de manos y desinfección.",
    "Explicar las precauciones estándar y basadas en la transmisión para evitar la propagación de agentes infecciosos."
];

dbActividadesNIC["6550 - Protección contra las infecciones"] = [
    "Vigilar la cuenta de leucocitos y neutrófilos en pacientes inmunocomprometidos.",
    "Restringir visitas o alimentos frescos según el grado de aislamiento protector y la pauta clínica."
];

dbActividadesNIC["3920 - Manejo de la termorregulación"] = [
    "Evaluar los factores ambientales y clínicos que afectan la temperatura corporal del paciente.",
    "Ajustar la temperatura ambiental, la ropa de cama o la vestimenta para favorecer la termorregulación.",
    "Vigilar la presencia de escalofríos, diaforesis o cambios térmicos cutáneos."
];

dbActividadesNIC["2860 - Autotransfusión J"] = [
    "Recuperar y filtrar la sangre del paciente en el intra o postoperatorio para su reinfusión."
];

dbActividadesNIC["4044 - Cuidados cardíacos: agudos"] = [
    "Evaluar el dolor torácico y administrar oxigenoterapia y vasodilatadores prescritos."
];

dbActividadesNIC["4046 - Cuidados cardíacos: rehabilitación"] = [
    "Supervisar el programa de ejercicio progresivo vigilando la tensión y pulso."
];

dbActividadesNIC["4064 - Cuidados circulatorios: dispositivo de ayuda mecánico"] = [
    "Comprobar los parámetros de flujo del dispositivo de asistencia ventricular."
];

dbActividadesNIC["4062 - Cuidados circulatorios: insuficiencia arterial"] = [
    "Inspeccionar pulsos periféricos y temperatura de las extremidades.",
    "Evitar la aplicación de calor directo sobre zonas isquémicas."
];

dbActividadesNIC["4066 - Cuidados circulatorios: insuficiencia venosa"] = [
    "Elevar las extremidades inferiores en reposo y usar medias de compresión."
];

dbActividadesNIC["4104 - Cuidados del embolismo: periférico"] = [
    "Evaluar los signos de isquemia aguda (dolor, palidez, pulso ausente)."
];

dbActividadesNIC["4106 - Cuidados del embolismo: pulmonar K"] = [
    "Administrar anticoagulantes prescritos y monitorizar la oxigenación."
];

dbActividadesNIC["4020 - Disminución de la hemorragia"] = [
    "Aplicar presión directa sobre el punto sangrante."
];

dbActividadesNIC["4022 - Disminución de la hemorragia: digestiva"] = [
    "Monitorizar hematemesis, melena o rectorragia e instalar sonda nasogástrica si está indicado."
];

dbActividadesNIC["4024 - Disminución de la hemorragia: epistaxis"] = [
    "Comprimir el tabique nasal e inclinar la cabeza hacia delante."
];

dbActividadesNIC["4028 - Disminución de la hemorragia: heridas"] = [
    "Colocar apósito compresivo e inspeccionar sangrados."
];

dbActividadesNIC["4021 - Disminución de la hemorragia: útero anteparto W"] = [
    "Monitorizar la frecuencia cardíaca fetal y evitar tactos vaginales no ecografiados."
];

dbActividadesNIC["4026 - Disminución de la hemorragia: útero posparto W"] = [
    "Realizar masaje uterino y administrar uterotónicos prescritos."
];

dbActividadesNIC["4234 - Flebotomía: donación de sangre"] = [
    "Puncionar la vena y llenar la bolsa de sangre respetando las normas de asepsia."
];

dbActividadesNIC["4266 - Infusión de células madre"] = [
    "Monitorizar signos vitales durante la infusión del trasplante."
];

dbActividadesNIC["4180 - Manejo de la hipovolemia"] = [
    "Administrar soluciones cristaloides/coloides a ritmo rápido."
];

dbActividadesNIC["4270 - Manejo de la terapia trombolítica H"] = [
    "Monitorizar posibles sangrados durante y tras la fibrinólisis."
];

dbActividadesNIC["2080 - Manejo de líquidos/electrólitos G"] = [
    "Llevar balance hídrico estricto de ingesta y eliminación.",
    "Monitorizar los valores de electrólitos en sangre y la densidad urinaria."
];

dbActividadesNIC["4054 - Manejo del acceso venoso central: inserción central H"] = [
    "Realizar la cura estéril del punto de inserción con clorhexidina."
];

dbActividadesNIC["4220 - Manejo del acceso venoso central: inserción periférica H"] = [
    "Lavar las luces del catéter PICC tras cada uso con suero fisiológico."
];

dbActividadesNIC["4095 - Manejo del desfibrilador: externo U"] = [
    "Colocar los parches de desfibrilación y aplicar la descarga en seguridad."
];

dbActividadesNIC["4096 - Manejo del desfibrilador: interno"] = [
    "Comprobar las descargas del DAI implantable."
];

dbActividadesNIC["4091 - Manejo del marcapasos: permanente"] = [
    "Verificar la presencia de espigas en la monitorización."
];

dbActividadesNIC["4092 - Manejo del marcapasos: temporal"] = [
    "Comprobar la estabilidad de las conexiones y el umbral de estimulación."
];

dbActividadesNIC["4050 - Manejo del riesgo cardiaco"] = [
    "Enseñar la modificación de factores de riesgo cardiovascular."
];

dbActividadesNIC["4250 - Manejo del shock"] = [
    "Administrar oxígeno de alto flujo y fluidoterapia rápida."
];

dbActividadesNIC["4254 - Manejo del shock: cardiaco"] = [
    "Administrar inotrópicos y vasopresores prescritos."
];

dbActividadesNIC["4255 - Manejo del shock: sepsis"] = [
    "Administrar antibióticos precoces e infundir cristaloides."
];

dbActividadesNIC["4256 - Manejo del shock: vasogénico"] = [
    "Administrar fármacos vasopresores para restaurar el tono vascular."
];

dbActividadesNIC["4258 - Manejo del shock: volumen"] = [
    "Transfundir hemoderivados o cristaloides masivos según necesidad."
];

dbActividadesNIC["4240 - Mantenimiento del acceso para diálisis"] = [
    "Comprobar la presencia de trill en la fístula y evitar punciones en ese brazo."
];

dbActividadesNIC["4210 - Monitorización hemodinámica invasiva"] = [
    "Calibrar y medir la PVC, presión de arteria pulmonar y tensión arterial invasiva."
];

dbActividadesNIC["4035 - Muestra de sangre capilar"] = [
    "Puncionar la zona lateral de la yema del dedo tras desinfección."
];

dbActividadesNIC["4070 - Precauciones circulatorias"] = [
    "Evitar prendas de vestir compresivas o cruzar las piernas."
];

dbActividadesNIC["4110 - Precauciones en el embolismo"] = [
    "Colocar medias de compresión secuencial y promover la deambulación."
];

dbActividadesNIC["4010 - Prevención de hemorragias"] = [
    "Inspeccionar si hay signos de sangrado en orina, heces o mucosas."
];

dbActividadesNIC["4260 - Prevención del shock"] = [
    "Monitorizar los signos precoces de descompensación hemodinámica."
];

dbActividadesNIC["4232 - Punción arterial: muestra de sangre arterial G"] = [
    "Realizar la prueba de Allen antes de punzar la arteria radial.",
    "Comprimir el sitio de punción durante al menos 5 minutos."
];

dbActividadesNIC["4115 - Terapia mediante oxigenación con membrana extracorpórea"] = [
    "Monitorizar el circuito ECMO y el nivel de anticoagulación."
];

dbActividadesNIC["6520 - Cribado de salud"] = [
    "Determinar la elegibilidad del individuo o de la población para someterse a pruebas de cribado preventivo.",
    "Obtener el historial médico y antecedentes familiares relevantes para identificar factores de riesgo.",
    "Realizar las pruebas diagnósticas o cuestionarios de detección temprana según los protocolos establecidos.",
    "Proporcionar educación sobre los resultados del cribado y coordinar las derivaciones oportunas en caso de alteraciones."
];

dbActividadesNIC["6530 - Manejo de la vacunación"] = [
    "Revisar el historial de inmunización y el calendario de vacunación vigente del paciente.",
    "Verificar la ausencia de contraindicaciones o alergias antes de la administración de la vacuna.",
    "Administrar la vacuna por la vía y dosis correcta utilizando técnica aséptica.",
    "Informar al paciente sobre las posibles reacciones adversas locales o sistémicas esperadas y los cuidados posteriores."
];

dbActividadesNIC["6580 - Precauciones en la neutropenia"] = [
    "Aplicar medidas estrictas de aislamiento protector e higiene de manos para pacientes con recuento bajo de neutrófilos.",
    "Restringir la entrada de visitantes con signos de infección activa y prohibir el consumo de plantas o alimentos frescos no cocinados.",
    "Monitorizar la temperatura corporal de forma estrecha para detectar signos precoces de procesos febriles e infecciosos."
];

dbActividadesNIC["6486 - Manejo ambiental: seguridad"] = [
    "Identificar y eliminar factores de riesgo físico en el entorno (alfombras sueltas, cables expuestos, iluminación deficiente).",
    "Asegurar la accesibilidad de los elementos de llamada y dispositivos de asistencia.",
    "Disponer barandales y medidas de protección adecuadas según la vulnerabilidad del paciente."
];

dbActividadesNIC["6594 - Facilitación del distanciamiento físico"] = [
    "Educar al paciente y a la comunidad sobre la importancia de mantener la separación interpersonal recomendada.",
    "Adaptar los espacios asistenciales y de espera para garantizar el cumplimiento de las normativas de distanciamiento."
];

dbActividadesNIC["6596 - Facilitación de la cuarentena"] = [
    "Instruir al paciente sobre las pautas, duración y medidas de aislamiento domiciliario o institucional requeridas.",
    "Proporcionar apoyo logístico y supervisión de síntomas durante el periodo de aislamiento preventivo."
];
// =========================================================================
// BLOQUE 3: PATRÓN III - ELIMINACIÓN - INTERCAMBIO
// =========================================================================

dbActividadesNIC["0460 - Manejo de la diarrea"] = [
    "Obtener muestras de heces para análisis de cultivo y toxina de C. difficile si está indicado.",
    "Evaluar la ingesta de alimentos y medicamentos que puedan desencadenar la diarrea.",
    "Vigilar el balance hídrico y los signos de deshidratación o desequilibrio electrolítico.",
    "Administrar antidiarreicos prescritos y aplicar cremas protectoras perianales para prevenir dermatitis."
];
dbActividadesNIC["2550 - Favorecimiento de la perfusión cerebral"] = [
    "Mantener la cabeza alineada y elevada a 30 grados para favorecer el retorno venoso cerebral.",
    "Monitorizar la presión arterial media y vigilar signos de alteración en la perfusión tisular.",
    "Evitar picos hipertensivos, maniobras de Valsalva o estímulos que incrementen la presión intracraneal."
];

dbActividadesNIC["0460 - Manejo de la diarrea"] = [
    "Evaluar las características, frecuencia y consistencia de las deposiciones.",
    "Fomentar la ingesta de líquidos claros y soluciones de rehidratación oral para prevenir la deshidratación.",
    "Administrar medicación antidiarreica prescrita y vigilar la integridad cutánea perianal."
];

dbActividadesNIC["0450 - Manejo del estreñimiento"] = [
    "Monitorizar la frecuencia, consistencia y presencia de esfuerzo durante la defecación.",
    "Fomentar una dieta rica en fibra, la ingesta adecuada de líquidos y la deambulación temprana.",
    "Administrar laxantes, ablandadores fecales o enemas según prescripción médica."
];

dbActividadesNIC["0430 - Manejo intestinal"] = [
    "Establecer una rutina regular para la evacuación intestinal favoreciendo la intimidad del paciente.",
    "Auscultar los ruidos hidroaéreos y valorar la distensión o sensibilidad abdominal.",
    "Registrar la última deposición y las características de las heces eliminadas."
];

dbActividadesNIC["0470 - Disminución de la flatulencia"] = [
    "Identificar alimentos o hábitos que favorezcan la producción de gases (bebidas con gas, masticar chicle).",
    "Fomentar la deambulación y los cambios de posición para facilitar la movilización y expulsión de gases.",
    "Aplicar calor local suave en el abdomen si está indicado para aliviar el cólico o la distensión."
];

dbActividadesNIC["0480 - Cuidados de la ostomía"] = [
    "Inspeccionar el estoma periostomal en busca de cambios de coloración, edema o necrosis.",
    "Cambiar la bolsa de ostomía utilizando una técnica higiénica y asegurar un sellado correcto que proteja la piel.",
    "Instruir al paciente y familiares en el autocuidado y vaciado del dispositivo de ostomía."
];

dbActividadesNIC["0610 - Cuidados de la incontinencia urinaria"] = [
    "Identificar las causas subyacentes de la incontinencia y establecer un programa de entrenamiento vesical.",
    "Mantener la piel perineal limpia y seca, utilizando productos barrera para prevenir dermatitis asociada.",
    "Facilitar el acceso al baño o cuña a intervalos regulares según el patrón de eliminación del paciente."
];

dbActividadesNIC["0410 - Cuidados de la incontinencia intestinal"] = [
    "Determinar la causa de la incontinencia fecal y establecer un horario regular de defecación asistida.",
    "Limpiar minuciosamente la zona perianal tras cada episodio y aplicar cremas protectoras cutáneas.",
    "Utilizar dispositivos de recogida fecal o sondas rectales con balón si está indicado para proteger la piel."
];

dbActividadesNIC["0412 - Cuidados de la incontinencia intestinal: encopresis"] = [
    "Evaluar los factores conductuales y orgánicos asociados a la emisión involuntaria de heces.",
    "Colaborar en el establecimiento de un programa de reeducación intestinal y apoyo psicológico para el paciente y la familia."
];

dbActividadesNIC["0610 - Cuidados de la incontinencia urinaria"] = [
    "Identificar las causas de la incontinencia y establecer un plan de micciones programadas.",
    "Mantener la higiene y la sequedad de la piel perineal para evitar lesiones por humedad."
];

dbActividadesNIC["5900 - Distracción"] = [
    "Animar al paciente a utilizar técnicas de distracción (conversación, música, lectura) para desviar la atención del dolor o la ansiedad.",
    "Evaluar la eficacia de la estrategia de distracción empleada en la reducción del malestar."
];

dbActividadesNIC["5510 - Educación para la salud"] = [
    "Identificar las necesidades de aprendizaje y los factores socioculturales del individuo o la comunidad.",
    "Diseñar y proporcionar materiales educativos claros sobre hábitos de vida saludables y prevención de enfermedades."
];
dbActividadesNIC["0466 - Administración de enema"] = [
    "Comprobar la prescripción médica y la temperatura adecuada de la solución del enema.",
    "Colocar al paciente en posición de Sims izquierda con la rodilla derecha flexionada.",
    "Lubricar la punta de la sonda e introducirla suavemente en el recto apuntando hacia el ombligo.",
    "Administrar el líquido a un ritmo lento y constante, indicando al paciente que intente retenerlo el tiempo recomendado."
];
dbActividadesNIC["1804 - Ayuda con el autocuidado: micción/defecación"] = [
    "Acompañar al paciente al baño o proporcionar el orinal/cuña a intervalos regulares.",
    "Proporcionar intimidad durante la eliminación y ayudar en la higiene perineal posterior."
];

dbActividadesNIC["0612 - Cuidados de la incontinencia urinaria: enuresis"] = [
    "Evaluar los patrones de micción nocturna y los factores emocionales o físicos asociados.",
    "Instruir sobre la restricción de líquidos antes de dormir y establecer un sistema de registro o refuerzo positivo."
];

dbActividadesNIC["0620 - Cuidados de la retención urinaria"] = [
    "Monitorizar el balance hídrico estricto y la distensión vesical mediante palpación o percusión supra púbica.",
    "Estimular la micción mediante técnicas como el sonido del agua corriente o aplicación de calor local.",
    "Realizar cateterismo vesical intermitente o permanente según prescripción si no hay micción espontánea."
];

dbActividadesNIC["1876 - Cuidados del drenaje: urinario"] = [
    "Mantener el sistema de drenaje urinario cerrado, estéril y por debajo del nivel de la vejiga.",
    "Vigilar la permeabilidad de la sonda y registrar el volumen y las características de la diuresis."
];

dbActividadesNIC["0565 - Ecografía: vejiga urinaria"] = [
    "Explicar el procedimiento de escaneo vesical no invasivo para la medición del volumen de residuo posmiccional.",
    "Colocar al paciente en decúbito supino y aplicar gel conductor sobre la región suprapúbica para obtener la lectura."
];

dbActividadesNIC["0560 - Ejercicios del suelo pélvico"] = [
    "Instruir al paciente en la identificación y contracción aislada de los músculos del suelo pélvico (ejercicios de Kegel).",
    "Establecer una rutina diaria de series de contracciones mantenidas y relajaciones musculares."
];

dbActividadesNIC["0570 - Entrenamiento de la vejiga urinaria"] = [
    "Programar un horario fijo para la micción aumentando progresivamente el intervalo de tiempo entre las mismas.",
    "Instruir al paciente para que suprima la urgencia mediante técnicas de relajación y respiración."
];

dbActividadesNIC["0600 - Entrenamiento del hábito urinario"] = [
    "Establecer un horario de eliminación basado en el patrón de micción previo del paciente.",
    "Ofrecer asistencia sistemática para ir al baño a las horas programadas para reeducar la vejiga."
];

dbActividadesNIC["0550 - Irrigación de la vejiga urinaria"] = [
    "Mantener técnica estéril al conectar el sistema de irrigación continua o intermitente según protocolo.",
    "Vigilar la claridad del líquido de retorno y la ausencia de coágulos u obstrucciones en el catéter."
];

dbActividadesNIC["0590 - Manejo de la eliminación urinaria"] = [
    "Monitorizar la eliminación urinaria incluyendo frecuencia, consistencia, olor, volumen y color.",
    "Observar si hay signos y síntomas de retención o incontinencia urinaria."
];

dbActividadesNIC["0630 - Manejo del pesario"] = [
    "Colocar, retirar y limpiar el dispositivo de soporte vaginal según las indicaciones y la anatomía de la paciente.",
    "Inspeccionar la mucosa vaginal en busca de signos de irritación, abrasión o infección."
];

dbActividadesNIC["0490 - Manejo del prolapso rectal"] = [
    "Instruir al paciente sobre la reducción manual suave del tejido prolapsado si procede y evitar esfuerzos excesivos.",
    "Fomentar una dieta rica en fibra y prevenir el estreñimiento crónico."
];

dbActividadesNIC["0640 - Micción estimulada"] = [
    "Iniciar un programa de recordatorios y asistencia sistemática al baño en intervalos regulares para pacientes con deterioro cognitivo.",
    "Estimular físicamente la región suprapúbica o perineal para favorecer el reflejo miccional."
];

dbActividadesNIC["0580 - Sondaje vesical"] = [
    "Insertar el catéter vesical bajo técnica estricta asegurando una correcta lubricación y fijación.",
    "Asegurar la permeabilidad del sistema y comprobar la salida de orina al globo o colector."
];

dbActividadesNIC["0581 - Sondaje vesical: externo"] = [
    "Colocar un dispositivo colector de tipo condón en pacientes varones sin invadir la vía urinaria.",
    "Asegurar la sujeción adecuada sin comprometer la circulación sanguínea del pene y conectar a bolsa de drenaje."
];

dbActividadesNIC["0582 - Sondaje vesical: intermitente"] = [
    "Instruir al paciente o cuidador en la técnica limpia o estéril de cateterismo vesical periódico.",
    "Vaciar la vejiga a intervalos regulares para prevenir la sobredistensión y las infecciones asociadas."
];

dbActividadesNIC["0450 - Manejo del estreñimiento"] = [
    "Vigilar la aparición de signos y síntomas de estreñimiento o impactación fecal.",
    "Fomentar la ingesta de líquidos adecuados y alimentos ricos en fibra.",
    "Administrar laxantes, enemas o ablandadores de heces prescritos según protocolo.",
    "Instruir al paciente sobre la importancia de responder oportunamente a la urgencia de defecar."
];

dbActividadesNIC["0430 - Manejo intestinal"] = [
    "Instruir al paciente sobre alimentos de alto contenido en fibra.",
    "Evaluar los patrones de eliminación intestinal y el uso previo de laxantes.",
    "Ayudar al paciente a establecer rutinas de evacuación regulares."
];

dbActividadesNIC["0610 - Cuidados de la incontinencia urinaria"] = [
    "Identificar las causas múltiples de la incontinencia urinaria (infección, movilidad, fármacos).",
    "Explicar al paciente las opciones de tratamiento y entrenamiento vesical disponibles.",
    "Establecer un programa de micción programada o estimulada según la necesidad."
];

dbActividadesNIC["0580 - Sondaje vesical"] = [
    "Explicar el procedimiento y asegurar la intimidad del paciente.",
    "Utilizar técnica estéril rigurosa durante la inserción del catéter vesical.",
    "Fijar el catéter a la pierna del paciente para evitar tracción uretral.",
    "Mantener un sistema de drenaje cerrado y permeable en todo momento."
];

dbActividadesNIC["3140 - Manejo de la vía aérea"] = [
    "Colocar al paciente en posición que maximice el potencial respiratorio (semisentado o fowler).",
    "Auscultar los ruidos respiratorios y notar áreas de disminución o ausencia de ventilación.",
    "Administrar broncodilatadores u oxigenoterapia prescrita.",
    "Fomentar una tos lenta y profunda o técnicas de respiración diafragmática."
];

dbActividadesNIC["3160 - Aspiración de la vía aérea"] = [
    "Auscultar los sonidos respiratorios antes y después de la aspiración.",
    "Hiperoxigenar al paciente con oxígeno al 100% antes de realizar la aspiración endotraqueal.",
    "Utilizar una técnica estéril y limitar el tiempo de succión a menos de 10-15 segundos.",
    "Observar las características, color y consistencia de las secreciones obtenidas."
];

dbActividadesNIC["3320 - Oxigenoterapia"] = [
    "Administrar oxígeno suplementario según las órdenes prescritas y dispositivo adecuado.",
    "Vigilar la eficacia de la oxigenoterapia mediante pulsioximetría o gasometría arterial.",
    "Comprobar periódicamente el equipo de oxígeno para asegurar un flujo constante y adecuado.",
    "Vigilar la irritación cutánea de la piel por la fricción de las cánulas o mascarillas."
];

// =========================================================================
// BLOQUE 4: PATRÓN IV - ACTIVIDAD - EJERCICIO
// =========================================================================

dbActividadesNIC["0840 - Cambio de posición"] = [
    "Colocar al paciente en la posición terapéutica indicada (decúbito lateral, fowler, etc.).",
    "Realizar cambios posturales programados al menos cada 2 horas para prevenir úlceras por presión.",
    "Utilizar almohadas o soportes adecuados para alinear correctamente el cuerpo y proteger prominencias óseas.",
    "Evitar colocar al paciente directamente sobre dispositivos médicos o sondas."
];
dbActividadesNIC["5612 - Enseñanza: ejercicio prescrito S*"] = [
    "Instruir al paciente sobre la frecuencia, duración e intensidad adecuada del ejercicio prescrito según su condición clínica.",
    "Enseñar las señales de advertencia o síntomas de alarma para interrumpir la actividad física de inmediato."
];

dbActividadesNIC["0140 - Favorecimiento de la mecánica corporal"] = [
    "Instruir al paciente y cuidadores sobre el uso de posturas corporales correctas para evitar lesiones musculoesqueléticas.",
    "Utilizar técnicas ergonómicas y dispositivos de ayuda al levantar o movilizar cargas."
];

dbActividadesNIC["0200 - Favorecimiento del ejercicio"] = [
    "Evaluar las motivaciones y barreras personales del paciente para la práctica regular de ejercicio físico.",
    "Ayudar en el diseño de un programa de actividad física adaptado a la edad y capacidad funcional."
];

dbActividadesNIC["0201 - Favorecimiento del ejercicio: entrenamiento de fuerza"] = [
    "Supervisar sesiones de ejercicios con resistencia progresiva para mejorar la masa muscular y la potencia.",
    "Vigilar la técnica correcta de ejecución para prevenir sobrecargas articulares o lesiones."
];

dbActividadesNIC["0202 - Favorecimiento del ejercicio: estiramientos"] = [
    "Guiar al paciente en rutinas de estiramiento muscular antes y después de la actividad para mejorar la flexibilidad.",
    "Mantener las posiciones de estiramiento de forma sostenida sin llegar a provocar dolor agudo."
];

dbActividadesNIC["0180 - Manejo de la energía"] = [
    "Evaluar la respuesta fisiológica del paciente a la fatiga y programar periodos de descanso frecuentes.",
    "Ayudar al paciente a priorizar sus actividades cotidianas para conservar la energía disponible."
];

dbActividadesNIC["0221 - Terapia de ejercicios: ambulación"] = [
    "Preparar al paciente para la deambulación utilizando dispositivos de apoyo adecuados (andador, muletas, bastón).",
    "Acompañar y monitorizar la tolerancia cardiovascular y la estabilidad durante los primeros pasos de marcha."
];

dbActividadesNIC["0226 - Terapia de ejercicios: control muscular"] = [
    "Guiar al paciente en ejercicios específicos destinados a mejorar el control motor, la coordinación y el tono.",
    "Facilitar la repetición de movimientos controlados en un entorno seguro."
];

dbActividadesNIC["0222 - Terapia de ejercicios: equilibrio"] = [
    "Implementar ejercicios orientados a desafiar y mejorar el equilibrio estático y dinámico del paciente.",
    "Asegurar un entorno libre de obstáculos para prevenir caídas durante la práctica."
];

dbActividadesNIC["0224 - Terapia de ejercicios: movilidad articular"] = [
    "Realizar ejercicios de rango de movimiento pasivo o activo en las articulaciones afectadas.",
    "Evitar movimientos que excedan los límites fisiológicos del dolor o la resistencia articular."
];

dbActividadesNIC["0840 - Cambio de posición"] = [
    "Modificar la postura del paciente encamado a intervalos regulares para prevenir la formación de úlceras por presión.",
    "Mantener la alineación corporal adecuada y proteger las prominencias óseas con almohadillas."
];

dbActividadesNIC["0846 - Cambio de posición: silla de ruedas"] = [
    "Colocar al paciente correctamente en la silla de ruedas asegurando el soporte postural y la sujeción de seguridad.",
    "Realizar pequeños cambios de peso o postura cada hora para aliviar la presión isquiática."
];

dbActividadesNIC["0740 - Cuidados del paciente encamado"] = [
    "Mantener las sábanas estiradas, limpias y libres de arrugas para evitar el roce cutáneo.",
    "Proporcionar higiene corporal diaria y cuidado de la piel en pacientes con movilidad totalmente reducida."
];

dbActividadesNIC["0910 - Inmovilización"] = [
    "Aplicar dispositivos de inmovilización (férulas, collarines, vendajes) según la lesión o indicación médica.",
    "Vigilar la perfusión distal, la sensibilidad y la integridad de la piel bajo el dispositivo inmovilizador."
];

dbActividadesNIC["0970 - Transferencia"] = [
    "Planificar la maniobra de traslado del paciente entre la cama, la silla o la camilla de forma segura.",
    "Utilizar ayudas técnicas de transferencia (grúas, tablas de transferencia) colaborando con suficiente personal."
];
dbActividadesNIC["1806 - Ayuda con el autocuidado: transferencia"] = [
    "Evaluar la capacidad física y la colaboración del paciente para realizar la transferencia de forma segura.",
    "Utilizar técnicas ergonómicas y dispositivos de ayuda adecuados para mover al paciente entre superficies."
];

dbActividadesNIC["0762 - Cuidados de los yesos: mantenimiento"] = [
    "Inspeccionar el yeso en busca de grietas, ablandamientos, olores fétidos o zonas de presión cutánea.",
    "Mantener el yeso seco y limpio, instruyendo al paciente para que no introduzca objetos en su interior."
];

dbActividadesNIC["0764 - Cuidados de los yesos: yeso húmedo"] = [
    "Manipular el yeso recién colocado utilizando las palmas de las manos y no las yemas de los dedos para evitar depresiones.",
    "Dejar el yeso descubierto en un ambiente seco y ventilado para facilitar su fraguado y secado uniforme."
];

dbActividadesNIC["0940 - Cuidados de tracción/inmovilización"] = [
    "Comprobar que los pesos de la tracción cuelguen libremente y las cuerdas estén alineadas en las poleas.",
    "Inspeccionar la piel y los puntos de fijación esquelética o cutánea en busca de signos de infección o presión."
];

dbActividadesNIC["6580 - Restricción física"] = [
    "Aplicar dispositivos de sujeción clínica solo bajo prescripción médica y como última medida de seguridad.",
    "Vigilar y liberar la sujeción periódicamente para realizar cambios posturales, higiene y comprobar la circulación."
];
dbActividadesNIC["3660 - Cuidados de las heridas"] = [
    "Limpiar la herida con solución salina estéril o antiséptico según protocolo, de la zona más limpia a la más contaminada.",
    "Inspeccionar el lecho de la herida y los bordes en busca de signos de infección, dehiscencia o exudado purulento.",
    "Aplicar el apósito adecuado según las características de la herida (cura en húmedo o seca) y fijarlo de manera segura."
];

dbActividadesNIC["3590 - Vigilancia de la piel"] = [
    "Inspeccionar el estado general de la piel y las mucosas en busca de enrojecimientos, erupciones, sequedad o signos de presión.",
    "Vigilar las zonas de riesgo sometidas a fricción, humedad o apoyo prolongado."
];

dbActividadesNIC["3540 - Prevención de las lesiones por presión"] = [
    "Utilizar escalas de valoración de riesgo (como Braden) para identificar pacientes vulnerables.",
    "Cambiar de posición al paciente encamado cada 2 horas y mantener la piel limpia, seca e hidratada.",
    "Emplear superficies especiales de manejo de presión (colchones y cojines antiescaras) y proteger prominencias óseas."
];

dbActividadesNIC["3440 - Cuidados del sitio de incisión"] = [
    "Vigilar el proceso de cicatrización de la herida quirúrgica y comprobar la aproximación de los bordes.",
    "Inspeccionar la presencia de eritema, calor, edema, dolor o drenaje anómalo en la línea de incisión.",
    "Realizar la cura quirúrgica bajo técnica aséptica estricta y cambiar los apósitos según necesidad."
];

dbActividadesNIC["3584 - Cuidados de la piel: tratamiento tópico"] = [
    "Aplicar los productos farmacológicos o cremas tópicas prescritas sobre las lesiones cutáneas limpias y secas.",
    "Vigilar la tolerancia local del paciente y la respuesta terapéutica del tratamiento cutáneo."
];

dbActividadesNIC["3570 - Cuidados de la piel: productos absorbentes"] = [
    "Colocar apósitos o protectores absorbentes adecuados para gestionar la humedad cutánea o exudados leves.",
    "Cambiar los dispositivos absorbentes con la frecuencia necesaria para evitar la maceración de la piel."
];

dbActividadesNIC["3583 - Cuidados de la piel: zona del injerto"] = [
    "Inspeccionar el injerto cutáneo para comprobar su prendimiento, coloración y ausencia de hematomas o colecciones.",
    "Evitar la presión, tracción o fricción sobre la zona receptora del injerto."
];

dbActividadesNIC["3582 - Cuidados de la piel: zona donante"] = [
    "Mantener el apósito de la zona donante limpio y seco hasta la reepitelización espontánea.",
    "Vigilar la aparición de signos de infección y el nivel de dolor asociado en el área donante."
];

dbActividadesNIC["3664 - Cuidados de las heridas: ausencia de cicatrización"] = [
    "Evaluar los factores sistémicos y locales que retrasan la cicatrización (infección, malnutrición, vascularización deficiente).",
    "Colaborar en la realización de desbridamiento de tejido necrótico y optimizar el lecho de la herida."
];

dbActividadesNIC["3662 - Cuidados de las heridas: drenaje cerrado"] = [
    "Comprobar el vacío y la correcta permeabilidad de los sistemas de drenaje cerrado tipo Redón o Jackson-Pratt.",
    "Medir y registrar la cantidad y aspecto del líquido drenado de la herida de forma periódica."
];

dbActividadesNIC["3670 - Cuidados de las heridas: protección"] = [
    "Proteger la herida frente a traumatismos mecánicos, contaminación ambiental o humedad excesiva.",
    "Asegurar la fijación de los apósitos protectores sin comprometer la circulación periférica."
];

dbActividadesNIC["3661 - Cuidados de las heridas: quemaduras"] = [
    "Evaluar la extensión, profundidad y grado de la superficie corporal quemada.",
    "Aplicar curas estériles con agentes antimicrobianos tópicos prescritos y prevenir la hipotermia durante el procedimiento."
];

dbActividadesNIC["3520 - Cuidados de las lesiones por presión"] = [
    "Limpiar la úlcera por presión con suero salino y retirar el tejido desvitalizado o necrótico según indicación.",
    "Aplicar apósitos especializados que favorezcan el ambiente húmedo y estimulen la granulación y epitelización."
];

dbActividadesNIC["3680 - Irrigación de heridas"] = [
    "Utilizar una jeringa con aguja o catéter de calibre adecuado para aplicar presión de lavado segura sobre el lecho de la herida.",
    "Arrastrar detritus y bacterias mediante el flujo controlado de solución salina estéril."
];

dbActividadesNIC["3620 - Sutura"] = [
    "Ayudar en la aproximación de los bordes de la herida mediante la colocación de puntos de sutura o grapas quirúrgicas bajo técnica estéril.",
    "Instruir al paciente sobre los plazos y la retirada posterior de los puntos de sutura."
];

dbActividadesNIC["3460 - Terapia con sanguijuelas"] = [
    "Colocar las sanguijuelas medicinales en la zona de congestión venosa indicada y vigilar su fijación espontánea.",
    "Monitorizar el sangrado controlado posterior y la evolución de la perfusión tisular local."
];

dbActividadesNIC["3420 - Cuidados de las amputaciones"] = [
    "Vigilar la aparición de hemorragias en el muñón y mantener el miembro elevado según el protocolo.",
    "Inspeccionar la integridad del vendaje compresivo y evaluar la presencia de dolor fantasma."
];

dbActividadesNIC["6490 - Prevención de caídas"] = [
    "Identificar factores de riesgo de caídas en el paciente (alteraciones de la marcha, déficit cognitivo, polifarmacia).",
    "Mantener la cama en posición baja con las barandillas elevadas y asegurar que los objetos de uso personal estén al alcance.",
    "Instruir al paciente y familiares sobre las medidas de precaución y el uso de calzado antideslizante."
];
dbActividadesNIC["0221 - Terapia de ejercicios: ambulación"] = [
    "Evaluar la capacidad del paciente para caminar y su tolerancia al esfuerzo físico.",
    "Ayudar al paciente a ponerse de pie y deambular utilizando dispositivos de apoyo adecuados (andador, bastón).",
    "Monitorizar la frecuencia cardíaca, la presión arterial y los signos de fatiga durante la marcha."
];

dbActividadesNIC["0224 - Terapia de ejercicios: movilidad articular"] = [
    "Determinar las limitaciones del movimiento articular y el nivel de dolor asociado.",
    "Realizar ejercicios de rango de movimiento activo o pasivo en las articulaciones afectadas según corresponda.",
    "Evitar forzar la articulación más allá de los límites fisiológicos o del dolor tolerable."
];

dbActividadesNIC["0226 - Terapia de ejercicios: control muscular"] = [
    "Instruir al paciente en ejercicios específicos para mejorar la coordinación, el equilibrio y la fuerza muscular.",
    "Facilitar la ejecución de movimientos lentos y controlados bajo supervisión directa.",
    "Valorar la respuesta motora y la progresión en el control de los grupos musculares implicados."
];

dbActividadesNIC["0840 - Cambio de posición"] = [
    "Modificar la postura del paciente encamado a intervalos regulares para prevenir la formación de úlceras por presión.",
    "Mantener la alineación corporal adecuada y proteger las prominencias óseas con almohadillas.",
    "Explicar al paciente el cambio postural que se va a realizar para fomentar su colaboración."
];

dbActividadesNIC["1800 - Ayuda con el autocuidado"] = [
    "Evaluar la capacidad del paciente para satisfacer sus necesidades de aseo, alimentación y vestido de forma independiente.",
    "Proporcionar los medios y la asistencia necesaria en las actividades de la vida diaria fomentando la máxima autonomía posible.",
    "Animar al paciente a realizar por sí mismo las tareas que sea capaz de completar."
];

dbActividadesNIC["0910 - Manejo de la movilidad"] = [
    "Vigilar el grado de movilidad y la capacidad de desplazamiento del paciente en su entorno.",
    "Fomentar la deambulación y la actividad física temprana según la prescripción y condición clínica.",
    "Utilizar dispositivos de ayuda y asegurar un entorno libre de obstáculos para prevenir caídas."
];
dbActividadesNIC["6574 - Identificación del paciente"] = [
    "Comprobar los datos del paciente en la pulsera identificativa antes de administrar cualquier tratamiento, medicación o procedimiento.",
    "Verificar al menos dos identificadores únicos (nombre completo y fecha de nacimiento o número de historia clínica) según los protocolos de seguridad.",
    "Aclarar cualquier discrepancia en la identificación con el paciente, familiares o el equipo médico antes de continuar con los cuidados."
];
dbActividadesNIC["5562 - Educación parental: adolescentes Z"] = [
    "Proporcionar a los padres herramientas de comunicación empática y resolución de conflictos adaptadas a la etapa adolescente.",
    "Instruir sobre los cambios biopsicosociales y las conductas de riesgo típicas de la adolescencia."
];

dbActividadesNIC["5566 - Educación parental: crianza familiar de los niños Z"] = [
    "Fomentar pautas de crianza positivas, basadas en el afecto, la consistencia y el establecimiento de límites claros.",
    "Apoyar a los padres en el desarrollo de habilidades para gestionar el comportamiento infantil de forma constructiva."
];

dbActividadesNIC["5655 - Enseñanza: desarrollo del lactante (0-3 meses) Z"] = [
    "Orientar a los padres sobre los hitos del desarrollo psicomotor, visual y auditivo esperados en el primer trimestre de vida.",
    "Fomentar la respuesta rápida al llanto y el establecimiento de vínculos de apego seguro."
];

dbActividadesNIC["5658 - Enseñanza: desarrollo del lactante (4-6 meses) Z"] = [
    "Informar sobre la adquisición del control cefálico, la sedestación incipiente y la exploración manual de objetos.",
    "Instruir sobre la importancia del juego interactivo y la estimulación sensorial adecuada."
];

dbActividadesNIC["5656 - Enseñanza: desarrollo del lactante (7-9 meses) Z"] = [
    "Educar sobre el desarrollo del gateo, la permanencia del objeto y la aparición de la ansiedad ante extraños.",
    "Estimular la comunicación verbal mediante balbuceos e imitación de sonidos."
];

dbActividadesNIC["5657 - Enseñanza: desarrollo del lactante (10-12 meses) Z"] = [
    "Preparar a los padres para la bipedestación, los primeros pasos y las primeras palabras con significado.",
    "Fomentar la autonomía progresiva en el juego y la interacción social básica."
];

dbActividadesNIC["5680 - Enseñanza: desarrollo en la primera infancia (1-5 años)"] = [
    "Orientar sobre el desarrollo del lenguaje complejo, la socialización con iguales y la gestión de rabietas.",
    "Fomentar la curiosidad, el juego simbólico y el desarrollo de la independencia personal."
];

dbActividadesNIC["5650 - Enseñanza: desarrollo en la infancia media (6-12 años) Z"] = [
    "Informar sobre los cambios cognitivos, el rendimiento escolar y la consolidación de la autoestima e identidad social.",
    "Apoyar la adquisición de responsabilidades adaptadas a la edad escolar."
];

dbActividadesNIC["5670 - Enseñanza: desarrollo del adolescent (12-21 años) Z"] = [
    "Educar sobre los cambios de la pubertad, la maduración del pensamiento abstracto y la búsqueda de autonomía.",
    "Fomentar un espacio de diálogo abierto sobre la salud mental, la sexualidad y la toma de decisiones."
];

dbActividadesNIC["5634 - Enseñanza: entrenamiento del control de esfínteres Z"] = [
    "Evaluar la madurez fisiológica y psicológica del niño para iniciar el control de esfínteres.",
    "Instruir a los padres en técnicas de refuerzo positivo, evitando castigos y estableciendo rutinas de uso de la bacinica o baño."
];

dbActividadesNIC["5604 - Enseñanza: grupo"] = [
    "Planificar y estructurar contenidos educativos adaptados a las características y necesidades de un grupo de personas.",
    "Fomentar la participación activa, el intercambio de experiencias y la resolución de dudas colectivas."
];

dbActividadesNIC["5642 - Enseñanza: nutrición del lactante (7-9 meses) Z"] = [
    "Instruir sobre la introducción progresiva de la alimentación complementaria (purés, papillas o método BLW) manteniendo la lactancia.",
    "Enseñar a identificar posibles reacciones alérgicas ante nuevos alimentos."
];

dbActividadesNIC["5643 - Enseñanza: nutrición del lactante (10-12 meses) Z"] = [
    "Educar sobre la incorporación paulatina de alimentos sólidos texturizados y la variedad en el menú diario.",
    "Fomentar la transición hacia la dieta familiar evitando el uso de azúcares y sal añadidas."
];

dbActividadesNIC["5660 - Enseñanza: nutrición del niño (13-18 meses) Z"] = [
    "Orientar sobre cómo manejar las conductas selectivas o neofobias alimentarias transitorias en el toddler.",
    "Supervisar el aporte calórico y de micronutrientes adecuados para el crecimiento activo."
];

dbActividadesNIC["5661 - Enseñanza: nutrición del niño (19-24 meses) Z"] = [
    "Fomentar hábitos de alimentación autónoma usando utensilios y establecer horarios regulares de comidas.",
    "Educar sobre la importancia de una hidratación adecuada basada principalmente en agua."
];

dbActividadesNIC["5662 - Enseñanza: nutrición del niño (25-36 meses) Z"] = [
    "Promover la participación del niño en la elección saludable de alimentos y el consumo equilibrado de todos los grupos nutricionales.",
    "Vigilar el mantenimiento de patrones de crecimiento ponderal adecuados."
];

dbActividadesNIC["5682 - Enseñanza: nutrición en la primera infancia (1-5 años)"] = [
    "Educar a los cuidadores sobre las porciones adecuadas por edad y la prevención de la obesidad infantil.",
    "Fomentar un ambiente familiar relajado durante las horas de las comidas."
];

dbActividadesNIC["5652 - Enseñanza: nutrición en la infancia media (6-12 años) Z"] = [
    "Instruir al niño y a la familia sobre la importancia de un desayuno completo y loncheras escolares saludables.",
    "Desalentar el consumo frecuente de ultraprocesados y bebidas azucaradas."
];

dbActividadesNIC["5672 - Enseñanza: nutrición del adolescente (12-21 años) Z"] = [
    "Educar sobre los requerimientos nutricionales aumentados durante el estirón puberal y la actividad deportiva.",
    "Prevenir trastornos de la conducta alimentaria promoviendo una imagen corporal positiva."
];

dbActividadesNIC["5610 - Enseñanza: preoperatoria J"] = [
    "Explicar al paciente en qué consistirá la intervención quirúrgica, el procedimiento anestésico y las sensaciones esperadas.",
    "Instruir sobre los ejercicios respiratorios postoperatorios, el control del dolor y la movilización precoz."
];

dbActividadesNIC["5622 - Enseñanza: relaciones sexuales seguras"] = [
    "Proporcionar información clara sobre la prevención de infecciones de transmisión sexual (ITS) y métodos anticonceptivos.",
    "Fomentar el consentimiento, la comunicación asertiva con la pareja y la responsabilidad afectiva."
];

dbActividadesNIC["5645 - Enseñanza: seguridad del lactante (0-3 meses) Z"] = [
    "Instruir sobre la prevención del síndrome de muerte súbita del lactante (dormir boca arriba en superficie firme y sin objetos en la cuna).",
    "Educar sobre el baño seguro, la temperatura del agua y el uso correcto de sistemas de retención infantil en vehículos."
];

dbActividadesNIC["5646 - Enseñanza: seguridad del lactante (4-6 meses) Z"] = [
    "Advertir sobre los riesgos de caídas desde superficies elevadas al comenzar el volteo y la movilidad autónoma.",
    "Retirar objetos pequeños o tóxicos del alcance del lactante ante la tendencia a llevarse todo a la boca."
];

dbActividadesNIC["5647 - Enseñanza: seguridad del lactante (7-9 meses) Z"] = [
    "Instruir sobre la instalación de barreras de seguridad en escaleras y protección en enchufes ante el inicio del gateo.",
    "Evitar el acceso a líquidos calientes, productos de limpieza y objetos punzantes."
];

dbActividadesNIC["5648 - Enseñanza: seguridad del lactante (10-12 meses) Z"] = [
    "Prevenir riesgos de asfixia por aspiración de cuerpos extraños (frutos secos, juguetes pequeños, monedas).",
    "Supervisar de forma constante al niño durante sus intentos de exploración y marcha."
];

dbActividadesNIC["5665 - Enseñanza: seguridad del niño (13-18 meses) Z"] = [
    "Educar sobre la seguridad vial peatonal y la prevención de quemaduras en la cocina.",
    "Vigilar el acceso a piscinas o fuentes de agua sin protección perimetral."
];

dbActividadesNIC["5666 - Enseñanza: seguridad del niño (19-24 meses) Z"] = [
    "Instruir sobre el uso obligatorio de cascos y elementos de protección si utiliza juguetes de arrastre o patines adaptados.",
    "Mantener medicamentos y productos químicos bajo llave y fuera de su vista."
];

dbActividadesNIC["5667 - Enseñanza: seguridad del niño (25-36 meses) Z"] = [
    "Enseñar normas básicas de seguridad en parques infantiles y zonas de juego exterior.",
    "Fomentar el reconocimiento de situaciones de peligro cotidiano."
];

dbActividadesNIC["5684 - Enseñanza: seguridad en la primera infancia (1-5 años)"] = [
    "Instruir a los padres en la prevención de accidentes domésticos más frecuentes en esta etapa (intoxicaciones, caídas, ahogamientos).",
    "Establecer normas claras de seguridad vial y en el hogar."
];

dbActividadesNIC["5654 - Enseñanza: seguridad en la infancia media (6-12 años) Z"] = [
    "Educar sobre la seguridad en el uso de la bicicleta, patinetas y el respeto a las señales de tránsito.",
    "Proporcionar pautas sobre seguridad en el uso de internet y dispositivos digitales."
];

dbActividadesNIC["5580 - Información preparatoria: sensorial"] = [
    "Describir de forma objetiva qué verá, oirá, olerá y sentirá el paciente antes de someterse a un procedimiento médico.",
    "Reducir la ansiedad anticipatoria aclarando las sensaciones físicas normales asociadas al proceso."
];

dbActividadesNIC["6784 - Planificación familiar: anticoncepción W"] = [
    "Explicar los diferentes métodos anticonceptivos disponibles (hormonales, de barrera, intrauterinos, quirúrgicos) detallando su eficacia y uso correcto.",
    "Ayudar a la persona o pareja a elegir el método que mejor se adapte a sus preferencias, estilo de vida y salud."
];

dbActividadesNIC["5860 - Biorretroalimentación"] = [
    "Utilizar dispositivos de monitorización para enseñar al paciente a controlar funciones fisiológicas involuntarias (tensión muscular, frecuencia cardíaca).",
    "Fomentar la relajación y la autorregulación mediante la visualización de datos biológicos en tiempo real."
];

dbActividadesNIC["5840 - Entrenamiento autógeno"] = [
    "Guiar al paciente en la práctica de fórmulas mentales de relajación basadas en la sugestión de pesadez y calor corporal.",
    "Facilitar la desconexión del estrés físico y mental mediante la concentración pasiva."
];

dbActividadesNIC["5922 - Facilitación de la autohipnosis"] = [
    "Enseñar técnicas de inducción hipnótica personal para el control del dolor, la ansiedad o la modificación de hábitos.",
    "Proporcionar un espacio tranquilo y pautas de autocontrol mental."
];

dbActividadesNIC["5960 - Facilitación de la meditación"] = [
    "Guiar al paciente en ejercicios de atención plena (mindfulness) o concentración enfocada en la respiración.",
    "Ayudar a calmar la actividad mental y reducir los niveles de estrés y tensión emocional."
];

dbActividadesNIC["5920 - Hipnosis"] = [
    "Inducir un estado de atención focalizada y profunda receptividad bajo la supervisión adecuada para fines terapéuticos.",
    "Favorecer la relajación extrema y la gestión de procesos psicógenos o dolorosos."
];

dbActividadesNIC["5880 - Técnica de relajación"] = [
    "Instruir al paciente en ejercicios de respiración profunda, relajación muscular progresiva o visualización.",
    "Proporcionar un ambiente silencioso y cómodo para facilitar la disminución de la ansiedad y el tono muscular."
];

dbActividadesNIC["6040 - Terapia de relajación"] = [
    "Aplicar métodos estructurados de relajación física y mental para aliviar el malestar crónico o agudo.",
    "Evaluar el estado de relajación y la respuesta del paciente tras la sesión."
];

dbActividadesNIC["6000 - Visualización guiada"] = [
    "Inducir al paciente a evocar imágenes mentales relajantes y positivas para disminuir el dolor, el estrés o el miedo.",
    "Acompañar con un tono de voz calmado la creación de escenarios mentales de bienestar."
];

dbActividadesNIC["6050 - Yoga"] = [
    "Guiar posturas físicas (asanas), ejercicios de respiración (pranayama) y meditación adaptados a las capacidades del paciente.",
    "Fomentar la flexibilidad, el equilibrio corporal y la conexión mente-cuerpo."
];

dbActividadesNIC["5930 - Yoga de la risa"] = [
    "Facilitar ejercicios de risa simulada combinados con respiración y estiramientos para liberar endorfinas y reducir el estrés.",
    "Promover un estado de ánimo positivo y la interacción social distendida."
];

dbActividadesNIC["7500 - Apoyo para la consecución del sustento"] = [
    "Ayudar al paciente o familia en riesgo social a acceder a programas comunitarios de asistencia alimentaria y recursos básicos.",
    "Coordinar con servicios de trabajo social para la cobertura de necesidades de subsistencia."
];

dbActividadesNIC["7410 - Autorización de seguros"] = [
    "Gestionar la documentación clínica y administrativa requerida para la aprobación de coberturas por parte de aseguradoras o servicios de salud.",
    "Verificar el estatus de las autorizaciones previas para evitar retrasos en los tratamientos."
];

dbActividadesNIC["7380 - Ayuda con recursos económicos"] = [
    "Informar sobre subsidios, ayudas gubernamentales o fondos de beneficencia disponibles para sufragar gastos médicos o sociales.",
    "Facilitar el contacto con los departamentos de gestión financiera o asistencial."
];

dbActividadesNIC["2880 - Coordinación preoperatoria J"] = [
    "Organizar y verificar la realización de pruebas preoperatorias, valoraciones anestésicas y trámites previos a la cirugía.",
    "Asegurar que toda la documentación clínica esté completa y disponible en el expediente quirúrgico."
];

dbActividadesNIC["7560 - Facilitación de las visitas"] = [
    "Establecer horarios y condiciones de visita flexibles que favorezcan el apoyo afectivo de la familia sin interferir en los cuidados clínicos.",
    "Orientar a los visitantes sobre las normas de seguridad e higiene de la unidad."
];

dbActividadesNIC["7300 - Planificación anticipada de los cuidados"] = [
    "Facilitar la conversación entre el paciente, la familia y el equipo médico sobre las preferencias de tratamiento ante el final de la vida.",
    "Documentar las voluntades anticipadas y directrices médicas del paciente."
];

dbActividadesNIC["6485 - Planificación para el alta: preparación del hogar"] = [
    "Evaluar las condiciones del domicilio del paciente para identificar barreras arquitectónicas o necesidades de adaptación.",
    "Coordinar la adquisición de equipos médicos o suministros necesarios antes del regreso a casa."
];

dbActividadesNIC["7470 - Prevención del reingreso"] = [
    "Identificar factores de riesgo de hospitalización repetida y diseñar un plan de seguimiento ambulatorio estrecho.",
    "Asegurar la comprensión del tratamiento domiciliario, la dieta y las señales de alarma antes del alta."
];
dbActividadesNIC["0221 - Terapia de ejercicios: ambulación"] = [
    "Evaluar la capacidad del paciente para deambular de forma segura e independiente.",
    "Aplicar un dispositivo de ayuda para la marcha (andador, bastón, muletas) debidamente ajustado.",
    "Acompañar al paciente durante los primeros intentos de deambulación para prevenir caídas.",
    "Vigilar signos de intolerancia ortostática (mareo, palidez, taquicardia)."
];

dbActividadesNIC["3660 - Cuidados de las heridas"] = [
    "Inspeccionar la herida en cada cambio de apósito evaluando el lecho, bordes y signos de infección.",
    "Limpiar la herida con solución salina estéril o antiséptico adecuado según protocolo.",
    "Aplicar el apósito estéril adecuado que mantenga el ambiente húmedo óptimo para la cicatrización.",
    "Registrar las dimensiones, aspecto y cantidad de exudado de la herida."
];

dbActividadesNIC["3590 - Vigilancia de la piel"] = [
    "Inspeccionar la superficie cutánea en busca de enrojecimientos, calor, edema o descamación.",
    "Vigilar fuentes de presión y fricción constante sobre la piel.",
    "Instruir al paciente y familia sobre la importancia del cuidado diario de la piel."
];

// =========================================================================
// BLOQUE 5: PATRÓN V - SUEÑO - REPOSO
// =========================================================================

dbActividadesNIC["1850 - Mejora del sueño"] = [
    "Determinar el patrón habitual de sueño y vigilia del paciente.",
    "Ajustar el entorno ambiental (reducir luces, ruido y mantener temperatura agradable) para el descanso.",
    "Programar los cuidados y medicamentos de enfermería evitando interrupciones innecesarias durante la noche.",
    "Fomentar la realización de rutinas relajantes antes de acostarse (lectura, baño tibio, música suave)."
];

// =========================================================================
// BLOQUE 6: PATRÓN VI - COGNITIVO - PERCEPTIVO
// =========================================================================

dbActividadesNIC["2210 - Administración de analgésicos"] = [
    "Evaluar las características del dolor (localización, intensidad, frecuencia, duración).",
    "Comprobar el historial de alergias y la respuesta previa a los analgésicos.",
    "Administrar el analgésico adecuado pautado a las horas programadas para prevenir picos de dolor.",
    "Vigilar la aparición de efectos secundarios adversos (depresión respiratoria, náuseas, estreñimiento)."
];

dbActividadesNIC["1410 - Manejo del dolor: agudo"] = [
    "Realizar una valoración completa del dolor que incluya la escala visual analógica o numérica.",
    "Asegurar que el paciente reciba atención farmacológica inmediata ante episodios agudos.",
    "Aplicar medidas no farmacológicas de apoyo para el alivio del dolor."
];
dbActividadesNIC["5230 - Mejora del afrontamiento"] = [
    "Valorar la comprensión del paciente sobre el proceso de la enfermedad y los factores estresantes.",
    "Alentar una actitud de esperanza realista ante la situación actual.",
    "Ayudar al paciente a identificar estrategias personales de afrontamiento y recursos previos exitosos.",
    "Favorecer la expresión verbal de sentimientos, percepciones y miedos."
];

dbActividadesNIC["5450 - Terapia de grupo"] = [
    "Ayudar a los miembros del grupo a establecer objetivos terapéuticos y normas de funcionamiento comunes.",
    "Facilitar la interacción y el apoyo mutuo entre los integrantes del grupo para compartir experiencias.",
    "Vigilar la dinámica grupal y prevenir conflictos destructivos o aislamiento de algún participante.",
    "Proporcionar un espacio seguro que fomente la expresión emocional y el aprendizaje social."
];

dbActividadesNIC["6830 - Cuidados intraparto"] = [
    "Monitorizar la frecuencia cardíaca fetal y las características de las contracciones uterinas de forma estrecha.",
    "Evaluar la progresión de la dilatación cervical y el descenso de la presentación fetal.",
    "Apoyar a la gestante y a su acompañante durante el trabajo de parto, fomentando técnicas de respiración y confort.",
    "Preparar el material y el entorno para la recepción del recién nacido y la asistencia al alumbramiento."
];

dbActividadesNIC["6760 - Preparación al parto"] = [
    "Instruir a la gestante y su pareja sobre las fases del trabajo de parto y los signos de inicio.",
    "Enseñar técnicas de respiración, relajación y control del dolor para aplicar durante las contracciones.",
    "Proporcionar información sobre los procedimientos obstétricos habituales y las opciones de manejo del dolor.",
    "Resolver dudas y miedos relacionados con el proceso del nacimiento y el cuidado inicial del recién nacido."
];
// =========================================================================
// BLOQUE 7: PATRÓN VII - AUTOPERCEPCIÓN - AUTOCONCEPTO
// =========================================================================

dbActividadesNIC["5400 - Mejora de la autoestima"] = [
    "Animar al paciente a identificar sus propios puntos fuertes y habilidades.",
    "Ayudar a aceptar las críticas constructivas y minimizar la autocrítica destructiva.",
    "Proporcionar experiencias que favorezcan el éxito personal y la validación emocional."
];

dbActividadesNIC["5220 - Mejora de la imagen corporal"] = [
    "Ayudar al paciente a verbalizar sus percepciones sobre los cambios corporales.",
    "Favorecer el contacto visual y la aceptación paulatina de la zona corporal afectada.",
    "Proporcionar un espacio empático de escucha activa ante los sentimientos de pérdida o alteración física."
];
dbActividadesNIC["6440 - Manejo del delirium"] = [
    "Evaluar el estado cognitivo y la presencia de fluctuaciones en la atención y orientación de forma periódica.",
    "Proporcionar un entorno predecible, tranquilo y bien iluminado, evitando la sobreestimulación o la oscuridad total.",
    "Reorientar al paciente frecuentemente respecto al tiempo, lugar y persona, utilizando objetos familiares y relojes visibles.",
    "Garantizar la seguridad del paciente minimizando el uso de sujeciones físicas y previniendo caídas o retirada de vías."
];

dbActividadesNIC["4700 - Reestructuración cognitiva"] = [
    "Ayudar al paciente a identificar pensamientos automáticos negativos y distorsiones cognitivas.",
    "Fomentar la evaluación de la evidencia a favor y en contra de sus creencias desadaptativas.",
    "Guiar al paciente en la sustitución de pensamientos negativos por interpretaciones más realistas y constructivas."
];

dbActividadesNIC["4860 - Terapia de reminiscencia"] = [
    "Fomentar la evocación de recuerdos positivos del pasado utilizando fotografías, música o objetos significativos.",
    "Escuchar activamente las historias y experiencias compartidas por el paciente mostrando interés y validación.",
    "Ayudar al paciente a integrar su historia de vida para favorecer la identidad personal y la autoestima."
];

dbActividadesNIC["4640 - Ayuda para el control de la ira"] = [
    "Ayudar al paciente a identificar los desencadenantes y las señales físicas iniciales de la ira.",
    "Enseñar estrategias de autocontrol y técnicas de relajación para modular la respuesta impulsiva.",
    "Establecer límites claros y firmes frente a conductas agresivas, manteniendo un entorno seguro."
];

dbActividadesNIC["4680 - Biblioterapia"] = [
    "Seleccionar lecturas, libros o material escrito adaptado a las necesidades terapéuticas y cognitivas del paciente.",
    "Discutir con el paciente las reacciones, reflexiones y aprendizajes derivados de la lectura realizada.",
    "Fomentar la introspección y el afrontamiento constructivo a través de la identificación con los textos."
];

dbActividadesNIC["4740 - Llevar un diario"] = [
    "Instruir al paciente en el registro escrito diario de sus pensamientos, emociones y experiencias significativas.",
    "Revisar conjuntamente las anotaciones del diario para identificar patrones de conducta o progreso emocional.",
    "Utilizar el diario como herramienta de expresión y autoconocimiento en un espacio privado y seguro."
];

dbActividadesNIC["4730 - Reflexión guiada"] = [
    "Guiar al paciente mediante preguntas estructuradas para analizar situaciones complejas o conflictos internos.",
    "Facilitar un espacio de calma que permita la toma de conciencia profunda y la resolución autónoma de problemas."
];

dbActividadesNIC["5624 - Enseñanza: sexualidad"] = [
    "Proporcionar información clara y adaptada sobre la anatomía, fisiología y salud sexual.",
    "Resolver dudas sobre el impacto de la enfermedad, la edad o los tratamientos en la función sexual.",
    "Fomentar una comunicación abierta y sin juicios sobre el bienestar afectivo y sexual."
];

dbActividadesNIC["7440 - Facilitación de los permisos"] = [
    "Gestionar la documentación clínica y administrativa necesaria para la concesión de permisos temporales de salida hospitalaria.",
    "Instruir al paciente y a la familia sobre las pautas de autocuidado y recomendaciones a seguir durante el periodo de permiso."
];

dbActividadesNIC["7330 - Negociación de cuidados culturales"] = [
    "Identificar las creencias, prácticas y valores culturales del paciente y su familia respecto a la salud y enfermedad.",
    "Adaptar el plan de cuidados enfermeros para integrar las preferencias culturales sin comprometer la seguridad clínica."
];

dbActividadesNIC["8274 - Cuidados del niño"] = [
    "Vigilar el crecimiento, el desarrollo físico y emocional del niño según su grupo de edad.",
    "Proporcionar un entorno seguro y lúdico que minimice la ansiedad durante la estancia asistencial."
];

dbActividadesNIC["6810 - Cuidados del lactante: ayuda para la exploración ocular"] = [
    "Inmovilizar suavemente y de forma segura la cabeza del lactante durante la exploración oftalmológica.",
    "Proporcionar confort y apoyo emocional al lactante y los padres tras el procedimiento."
];

dbActividadesNIC["6965 - Apoyo al procedimiento: lactante"] = [
    "Emplear técnicas de contención, succión no nutritiva o soluciones azucaradas para el alivio del dolor y la ansiedad del lactante durante procedimientos.",
    "Acompañar y explicar a los padres el desarrollo del procedimiento para disminuir su propia angustia."
];

dbActividadesNIC["8272 - Cuidados del adolescente"] = [
    "Establecer una relación de confianza que garantice la confidencialidad y el respeto a la autonomía del adolescente.",
    "Abordar temas de salud integral, prevención de riesgos, sexualidad y bienestar emocional."
];

dbActividadesNIC["7104 - Favorecimiento de la integridad familiar: familia con recién nacido"] = [
    "Apoyar la adaptación de los miembros de la familia a la llegada del nuevo miembro.",
    "Fomentar la participación conjunta en los cuidados básicos del recién nacido para fortalecer el vínculo familiar."
];

dbActividadesNIC["5210 - Orientación anticipatoria"] = [
    "Preparar al paciente y a la familia para los cambios previsibles en las siguientes fases de la enfermedad o del desarrollo vital.",
    "Proporcionar herramientas de afrontamiento y pautas de actuación antes de que se presenten nuevas situaciones críticas."
];

dbActividadesNIC["7200 - Favorecimiento de la normalización"] = [
    "Ayudar al paciente y a la familia a mantener rutinas y estilos de vida lo más habituales posible a pesar de la enfermedad crónica.",
    "Fomentar la participación en actividades sociales, escolares o laborales adaptadas a sus capacidades."
];

dbActividadesNIC["8340 - Favorecimiento de la resiliencia"] = [
    "Apoyar al individuo en el reconocimiento de sus fortalezas internas y recursos de superación ante la adversidad.",
    "Fomentar una perspectiva optimista y el significado positivo frente a situaciones de pérdida o estrés crónico."
];

dbActividadesNIC["5395 - Mejora de la autoeficacia"] = [
    "Reforzar la confianza del paciente en su propia capacidad para alcanzar metas de salud y ejecutar conductas de autocuidado.",
    "Descomponer tareas complejas en pequeños logros alcanzables para fomentar el sentido de competencia personal."
];
dbActividadesNIC["4976 - Mejora de la comunicación: déficit del habla"] = [
    "Utilizar métodos alternativos de comunicación (tableros de comunicación, gestos, lenguaje escrito) adaptados a las capacidades del paciente.",
    "Formular preguntas sencillas que requieran respuestas de tipo sí/no o mediante movimientos simples.",
    "Mantener una actitud paciente y dar tiempo suficiente para que el paciente intente expresarse verbalmente."
];

dbActividadesNIC["4974 - Mejora de la comunicación: déficit auditivo"] = [
    "Situarse frente al paciente, con buena iluminación y a una distancia adecuada para facilitar la lectura labial y la expresión facial.",
    "Hablar con un tono de voz moderado y pausado, evitando gritar o exagerar la articulación de las palabras.",
    "Reducir los ruidos ambientales de fondo que puedan interferir en la recepción del mensaje auditivo."
];
dbActividadesNIC["5674 - Enseñanza: seguridad del adolescente (12-21 años) S"] = [
    "Instruir al adolescente sobre la prevención de conductas de riesgo relacionadas con el consumo de alcohol, tabaco y sustancias nocivas.",
    "Educar sobre la seguridad vial, uso obligatorio de casco en motocicletas y bicicletas, y normas de conducción responsable.",
    "Fomentar la conciencia sobre la seguridad en el uso de internet, redes sociales y la prevención del acoso digital (ciberacoso)."
];
dbActividadesNIC["5330 - Manejo del estado de ánimo"] = [
    "Evaluar el estado de ánimo inicial y monitorizar los cambios emocionales del paciente de forma continuada.",
    "Fomentar la expresión de sentimientos de tristeza, desesperanza o ira en un entorno seguro y de aceptación.",
    "Proporcionar actividades que promuevan el bienestar y la autoestima, adaptadas a los intereses del paciente."
];

dbActividadesNIC["6340 - Prevención del suicidio V"] = [
    "Vigilar estrechamente al paciente y mantener un entorno seguro retirando objetos punzantes o potencialmente peligrosos.",
    "Evaluar la presencia, intensidad e ideación de planes suicidas de manera directa y abierta.",
    "Establecer un contrato de seguridad verbal o escrito y coordinar la intervención urgente con el equipo de salud mental."
];
dbActividadesNIC["6675 - Cribado visual V"] = [
    "Evaluar la agudeza visual del paciente utilizando tablas estandarizadas (como la escala de Snellen) a la distancia adecuada.",
    "Observar la presencia de signos de fatiga visual, estrabismo, enrojecimiento o molestias oculares durante la prueba.",
    "Registrar los resultados obtenidos y derivar al especialista en oftalmología u optometría en caso de detectar alteraciones significativas."
];

dbActividadesNIC["5000 - Desarrollo de interacciones empáticas"] = [
    "Fomentar la expresión de sentimientos y perspectivas entre los participantes facilitando la comprensión mutua.",
    "Modelar conductas de escucha atenta y validación emocional durante la interacción interpersonal.",
    "Ayudar a reconocer el impacto emocional que las propias acciones y palabras generan en los demás."
];

dbActividadesNIC["4920 - Escucha activa"] = [
    "Mostrar interés genuino y atención plena al mensaje verbal y no verbal del paciente.",
    "Evitar interrupciones prematuras y parafrasear las ideas principales para confirmar la comprensión mutua.",
    "Validar los sentimientos expresados por el paciente manteniendo una actitud receptiva y libre de juicios."
];

dbActividadesNIC["5020 - Mediación de conflictos"] = [
    "Favorecer un espacio neutral y seguro para que ambas partes expongan sus puntos de vista sin interrupciones hostiles.",
    "Ayudar a clarificar los puntos de desacuerdo y los intereses comunes subyacentes en la disputa.",
    "Guiar a los implicados hacia la búsqueda colaborativa de soluciones y acuerdos mutuamente aceptables."
];

dbActividadesNIC["4978 - Mejora de la comunicación: déficit visual"] = [
    "Identificarse claramente al entrar en la habitación y explicar verbalmente las acciones que se van a realizar.",
    "Describir la distribución espacial del entorno y la ubicación de los objetos personales para favorecer la autonomía.",
    "Mantener el entorno libre de obstáculos físicos que puedan comprometer la seguridad del paciente con discapacidad visual."
];

dbActividadesNIC["5100 - Mejora de la socialización"] = [
    "Animar al paciente a participar en actividades grupales, comunitarias o de ocio adaptadas a sus capacidades.",
    "Fomentar el establecimiento de relaciones interpersonales significativas con personas de intereses afines.",
    "Apoyar al paciente en la superación de barreras de timidez, aislamiento o ansiedad social."
];
dbActividadesNIC["5248 - Asesoramiento sexual"] = [
    "Establecer una relación de confianza y confidencialidad que permita al paciente abordar dudas sobre su sexualidad.",
    "Proporcionar información objetiva y corregir mitos o conceptos erróneos relacionados con la salud sexual.",
    "Explorar el impacto de la enfermedad, los tratamientos o la edad en la función y expresión sexual del individuo."
];

dbActividadesNIC["5480 - Clarificación de valores"] = [
    "Ayudar al paciente a identificar sus propios valores, creencias y prioridades vitales.",
    "Fomentar la reflexión sobre cómo las decisiones actuales de salud se alinean con sus principios personales.",
    "Apoyar al paciente en la resolución de dilemas éticos o personales mediante la clarificación de lo que es importante para él."
];

dbActividadesNIC["5242 - Consejo genético W"] = [
    "Recoger y analizar la historia clínica y los antecedentes familiares de enfermedades hereditarias.",
    "Explicar de forma clara los riesgos genéticos, las opciones diagnósticas y las implicaciones de los resultados.",
    "Proporcionar apoyo emocional y respetar la autonomía en la toma de decisiones reproductivas o de salud."
];

dbActividadesNIC["5460 - Contacto"] = [
    "Utilizar el contacto físico terapéutico (tomar de la mano, tocar el hombro) de manera respetuosa y consensuada para transmitir apoyo.",
    "Evaluar la respuesta y receptividad del paciente ante el contacto físico según sus preferencias culturales y personales."
];

dbActividadesNIC["5215 - Cuidados en el duelo"] = [
    "Facilitar un espacio seguro y de aceptación para que el paciente o la familia expresen el dolor por la pérdida.",
    "Acompañar en el proceso de duelo respetando los tiempos y manifestaciones emocionales individuales.",
    "Proporcionar información sobre grupos de apoyo o recursos especializados en la superación del duelo."
];

dbActividadesNIC["5260 - Cuidados en la agonía"] = [
    "Garantizar el máximo confort físico y el alivio del dolor o síntomas molestos en la etapa final de la vida.",
    "Mantener un entorno tranquilo, íntimo y respetuoso que favorezca la presencia y compañía de los seres queridos.",
    "Brindar apoyo emocional continuo al paciente y a su familia durante el proceso de muerte."
];

dbActividadesNIC["5310 - Dar esperanza"] = [
    "Ayudar al paciente a identificar áreas de sentido y propósitos vitales ante situaciones de enfermedad avanzada o crisis.",
    "Fomentar una actitud realista pero enfocada en los pequeños logros cotidianos y en los recursos personales.",
    "Apoyar la conexión con redes de afecto, espiritualidad o proyectos futuros significativos."
];

dbActividadesNIC["5350 - Disminución del estrés por traslado"] = [
    "Explicar al paciente los motivos del traslado y qué esperar en el nuevo entorno asistencial.",
    "Coordinar el traspaso de información clínica detallada entre unidades para asegurar la continuidad de los cuidados.",
    "Acompañar al paciente durante el cambio y facilitar elementos familiares en la nueva ubicación para reducir la ansiedad."
];

dbActividadesNIC["5305 - Entrenamiento en salud"] = [
    "Guiar al paciente en la adquisición de hábitos de vida saludables y autocuidados preventivos.",
    "Establecer metas de aprendizaje prácticas y evaluar de forma continua los progresos alcanzados."
];

dbActividadesNIC["5290 - Facilitación de la superación de la aflicción"] = [
    "Ayudar al paciente a reconocer y aceptar la realidad de la pérdida o el cambio significativo.",
    "Facilitar la expresión desinhibida de emociones intensas como la tristeza, la rabia o la culpa."
];

dbActividadesNIC["5294 - Facilitación de la superación de la aflicción: muerte perinatal W"] = [
    "Proporcionar un espacio íntimo y respetuoso para que los padres puedan ver, sostener y despedirse del recién nacido.",
    "Ofrecer recuerdos tangibles de la pérdida (huellas, fotografías, brazalete) si los padres lo desean.",
    "Brindar apoyo psicológico especializado y derivación a redes de apoyo en duelo perinatal."
];

dbActividadesNIC["5300 - Facilitación de la superación de la culpa"] = [
    "Ayudar al paciente a examinar de manera objetiva su grado real de responsabilidad en una situación culpabilizadora.",
    "Fomentar la autocompasión, el perdón y la aceptación de los propios errores humanos."
];

dbActividadesNIC["5426 - Facilitación del crecimiento espiritual"] = [
    "Apoyar al paciente en la exploración y profundización de su sentido de trascendencia y conexión interior.",
    "Facilitar la lectura, meditación o práctica de rituales significativos para su desarrollo espiritual."
];

dbActividadesNIC["5280 - Facilitación del perdón"] = [
    "Ayudar al paciente a reconocer los sentimientos de rencor u hostilidad hacia uno mismo o hacia otros.",
    "Explorar los beneficios emocionales y psicológicos de liberar el resentimiento a través del perdón."
];

dbActividadesNIC["5424 - Manejo de la práctica religiosa"] = [
    "Respetar y facilitar los horarios, espacios y elementos necesarios para las prácticas religiosas del paciente.",
    "Coordinar la visita de capellanes o líderes religiosos según las preferencias expresadas."
];

dbActividadesNIC["5390 - Mejora de la autoconciencia"] = [
    "Ayudar al paciente a explorar sus propias motivaciones, emociones, reacciones y patrones de conducta.",
    "Fomentar la reflexión personal sobre el impacto de su comportamiento en las relaciones interpersonales."
];

dbActividadesNIC["3326 - Mejora de las aptitudes para la vida diaria"] = [
    "Entrenar al paciente en habilidades prácticas de autonomía personal (gestión del hogar, autocuidado, manejo económico).",
    "Utilizar técnicas de modelado y práctica guiada para favorecer la independencia funcional."
];

dbActividadesNIC["5370 - Mejora de roles X"] = [
    "Ayudar al paciente a identificar las alteraciones en sus roles familiares, laborales o sociales derivadas de la enfermedad.",
    "Fomentar la adaptación a las nuevas responsabilidades y la renegociación de expectativas de rol."
];

dbActividadesNIC["5235 - Prevención de las recidivas"] = [
    "Identificar situaciones de alto riesgo o desencadenantes que puedan propiciar una recaída en conductas o patologías.",
    "Diseñar un plan de acción preventivo y estrategias de afrontamiento eficaces ante la tentación o el estrés."
];

dbActividadesNIC["5360 - Terapia de entretenimiento"] = [
    "Proporcionar actividades recreativas y de ocio adaptadas a las capacidades y gustos del paciente.",
    "Fomentar el esparcimiento, la distracción y el disfrute para disminuir el aburrimiento y la tensión emocional."
];

dbActividadesNIC["5422 - Terapia de la adicción a la religión"] = [
    "Evaluar el impacto disfuncional o dogmático de prácticas religiosas extremas en la salud mental del paciente.",
    "Colaborar con profesionales de salud mental para reorientar la espiritualidad hacia un enfoque saludable y equilibrado."
];

dbActividadesNIC["5410 - Terapia del trauma: niño"] = [
    "Emplear técnicas terapéuticas basadas en el juego y la expresión artística adaptadas a la infancia para procesar experiencias traumáticas.",
    "Proporcionar un entorno altamente seguro, predecible y de contención afectiva para el niño."
];
// =========================================================================
// BLOQUE 8: PATRÓN VIII - ROL - RELACIONES
// =========================================================================

dbActividadesNIC["7140 - Apoyo a la familia"] = [
    "Valorar el impacto de la enfermedad sobre el funcionamiento y estabilidad familiar.",
    "Facilitar la comunicación abierta entre los miembros de la familia y el equipo clínico.",
    "Proporcionar orientación clara sobre el pronóstico y los cuidados domiciliarios necesarios."
];

dbActividadesNIC["5244 - Asesoramiento en la lactancia"] = [
    "Evaluar el agarre, la succión y la postura del lactante durante la lactancia materna.",
    "Instruir a la madre sobre la técnica correcta de estimulación y vaciamiento de los pechos.",
    "Proporcionar apoyo emocional y resolver dudas sobre la producción láctea y nutrición infantil."
];
dbActividadesNIC["6402 - Apoyo en la protección contra abusos: niños V"] = [
    "Vigilar la presencia de signos físicos o conductuales de maltrato, negligencia o abuso infantil.",
    "Colaborar con los servicios sociales y equipos legales en la protección inmediata y salvaguarda del menor.",
    "Proporcionar un entorno seguro, confidencial y de apoyo para que el niño pueda expresar sus miedos o vivencias."
];

dbActividadesNIC["7280 - Apoyo de hermanos"] = [
    "Evaluar el impacto emocional y los sentimientos de los hermanos ante la enfermedad o situación de crisis de un miembro de la familia.",
    "Facilitar espacios de expresión y resolución de dudas adaptados a la edad de los hermanos.",
    "Fomentar la inclusión de los hermanos en la dinámica de cuidados y apoyo familiar de manera equilibrada."
];

dbActividadesNIC["6648 - Enseñanza: prevención de las lesiones deportivas V"] = [
    "Instruir al deportista sobre la importancia de realizar calentamientos y estiramientos previos a la actividad física.",
    "Enseñar el uso correcto del equipo de protección individual adecuado para cada disciplina deportiva.",
    "Educar sobre la identificación de signos precoces de sobrecarga o fatiga muscular para evitar lesiones graves."
];

dbActividadesNIC["8300 - Favorecimiento del rol parental"] = [
    "Apoyar a los padres en el desarrollo de competencias y habilidades para el ejercicio de una crianza positiva.",
    "Fomentar la participación activa de los padres en el cuidado diario y toma de decisiones sobre la salud de sus hijos.",
    "Proporcionar refuerzo positivo ante las conductas parentales empáticas y protectoras."
];

dbActividadesNIC["7180 - Asistencia en el mantenimiento del hogar"] = [
    "Evaluar las necesidades de apoyo en las tareas domésticas cotidianas en pacientes con limitaciones funcionales.",
    "Coordinar con servicios comunitarios o de ayuda a domicilio recursos para la limpieza, compra y preparación de alimentos.",
    "Orientar sobre adaptaciones sencillas en el hogar para facilitar las tareas domésticas de forma segura."
];

dbActividadesNIC["7260 - Cuidados de relevo"] = [
    "Proporcionar asistencia temporal en los cuidados del paciente para permitir el descanso y la recuperación del cuidador principal.",
    "Asegurar la continuidad del plan de cuidados y la seguridad del paciente durante el periodo de relevo.",
    "Informar al cuidador principal sobre los recursos institucionales o domiciliarios disponibles para estancias de respiro."
];

dbActividadesNIC["7170 - Facilitación de la presencia de la familia U"] = [
    "Flexibilizar las normas y horarios de acceso a las unidades asistenciales para permitir el acompañamiento familiar continuo.",
    "Proporcionar comodidad física y apoyo a los familiares presentes durante situaciones críticas o de final de la vida."
];

dbActividadesNIC["7110 - Favorecimiento de la implicación familiar"] = [
    "Animar a la familia a participar activamente en la planificación y ejecución de los cuidados cotidianos del paciente.",
    "Facilitar canales de comunicación fluidos entre el equipo sanitario y los familiares implicados.",
    "Valorar la disposición y el grado de sobrecarga de los familiares para ajustar su nivel de implicación."
];

dbActividadesNIC["7100 - Favorecimiento de la integridad familiar"] = [
    "Apoyar a la unidad familiar en la adaptación y superación de situaciones de estrés agudo o enfermedad crónica.",
    "Fomentar la cohesión, el apoyo mutuo y la comunicación constructiva entre los miembros de la familia."
];

dbActividadesNIC["6614 - Identificación de riesgos: genéticos"] = [
    "Recoger antecedentes familiares detallados para identificar patrones de enfermedades hereditarias o genéticas.",
    "Informar sobre la disponibilidad de asesoramiento genético y pruebas de cribado específicas para familiares en riesgo.",
    "Proporcionar apoyo emocional y resolver dudas ante la detección de predisposiciones genéticas."
];

dbActividadesNIC["7130 - Mantenimiento de procesos familiares"] = [
    "Ayudar a la familia a mantener sus roles, rutinas y capacidad de resolución de problemas ante la alteración de la salud.",
    "Facilitar la movilización de recursos internos y externos de la red familiar para afrontar la crisis."
];
dbActividadesNIC["7120 - Movilización familiar"] = [
    "Utilizar los recursos y la red de apoyo de la familia para afrontar los problemas de salud de sus miembros.",
    "Fomentar la colaboración activa de la familia en la toma de decisiones y el plan asistencial.",
    "Ayudar a la familia a coordinar las tareas cotidianas y el apoyo emocional mutuo."
];

dbActividadesNIC["7150 - Terapia familiar"] = [
    "Facilitar la comunicación abierta y constructiva entre los diferentes miembros de la unidad familiar.",
    "Ayudar a identificar patrones disfuncionales de interacción y roles familiares rígidos.",
    "Guiar a la familia en la resolución negociada de conflictos y en la mejora de la cohesión afectiva."
];

dbActividadesNIC["8510 - Defensa de la salud de la comunidad"] = [
    "Colaborar con líderes comunitarios y organismos locales para identificar necesidades y prioridades de salud pública.",
    "Promover políticas y programas orientados a la equidad sanitaria y la prevención de enfermedades en la población.",
    "Actuar como portavoz de las demandas de salud de la comunidad ante las instituciones competentes."
];

dbActividadesNIC["8500 - Desarrollo de la salud de la comunidad"] = [
    "Fomentar la participación activa de los ciudadanos en la planificación y ejecución de iniciativas locales de salud.",
    "Facilitar recursos educativos y organizativos para fortalecer la autogestión sanitaria de la comunidad.",
    "Evaluar el impacto de las intervenciones comunitarias en los indicadores de bienestar poblacional."
];

dbActividadesNIC["8700 - Desarrollo de un programa"] = [
    "Diseñar programas de salud estructurados basados en la evaluación previa de necesidades de la población objetivo.",
    "Establecer objetivos, cronogramas, recursos necesarios y metodologías de evaluación para el programa.",
    "Coordinar con el equipo multidisciplinar la implementación y seguimiento de las actividades programadas."
];

dbActividadesNIC["8740 - Facilitación de la justicia social"] = [
    "Identificar situaciones de desigualdad, discriminación o barreras de acceso a los servicios sanitarios.",
    "Promover la equidad en la distribución y el uso de los recursos de salud entre poblaciones vulnerables.",
    "Apoyar los derechos de los usuarios y abogar por prácticas asistenciales inclusivas y justas."
];

dbActividadesNIC["8720 - Favorecimiento de la resiliencia: comunidad"] = [
    "Fortalecer las capacidades colectivas de respuesta y adaptación ante desastres, emergencias o crisis sociales.",
    "Fomentar la cohesión social y el apoyo comunitario para minimizar la vulnerabilidad poblacional.",
    "Facilitar redes de comunicación y recursos de emergencia accesibles para todos los sectores de la comunidad."
];

dbActividadesNIC["8550 - Gestión de los recursos económicos a"] = [
    "Planificar y optimizar el uso de los recursos financieros disponibles en la unidad o programa asistencial.",
    "Evaluar el coste-efectividad de los suministros y procedimientos implementados en el plan de cuidados.",
    "Asegurar la transparencia y el cumplimiento normativo en la asignación presupuestaria."
];

dbActividadesNIC["8750 - Marketing social"] = [
    "Utilizar estrategias de comunicación persuasiva para promover conductas y hábitos de vida saludables en la población.",
    "Diseñar campañas informativas atractivas y accesibles adaptadas a los canales de difusión comunitarios.",
    "Evaluar la receptividad y el cambio de actitud poblacional generado por las campañas de marketing social."
];

dbActividadesNIC["7970 - Seguimiento de la política sanitaria b"] = [
    "Revisar la normativa y los cambios en las políticas de salud pública vigentes a nivel local y nacional.",
    "Analizar el impacto de las directrices sanitarias en la práctica clínica y en la atención a los pacientes.",
    "Adaptar los protocolos internos de la unidad a los estándares y recomendaciones de la política sanitaria actual."
];

dbActividadesNIC["6700 - Amnioinfusión"] = [
    "Preparar el material estéril y colaborar en la infusión intrauterina de solución salina durante el trabajo de parto.",
    "Monitorizar continuamente la frecuencia cardíaca fetal y la dinámica uterina durante y después del procedimiento.",
    "Vigilar la aparición de signos de hiperestimulación uterina o intolerancia fetal a la infusión."
];

dbActividadesNIC["5247 - Asesoramiento antes de la concepción"] = [
    "Evaluar el historial médico, ginecológico, nutricional y los antecedentes genéticos de la pareja.",
    "Proporcionar recomendaciones sobre hábitos de vida saludables, suplementación con ácido fólico y prevención de riesgos previos al embarazo.",
    "Informar sobre la ventana fértil y optimizar las condiciones de salud para una gestación segura."
];

dbActividadesNIC["6840 - Cuidados de canguro (del niño prematuro)"] = [
    "Colocar al recién nacido prematuro en contacto directo piel con piel sobre el pecho de la madre o el padre.",
    "Monitorizar la estabilidad térmica, la frecuencia cardíaca y la saturación de oxígeno del lactante durante la sesión.",
    "Fomentar el vínculo afectivo precoz y la participación activa de los padres en los cuidados del neonato prematuro."
];

dbActividadesNIC["3000 - Cuidados de la circuncisión J"] = [
    "Vigilar la aparición de hemorragias, edema o signos de infección en el sitio quirúrgico del recién nacido.",
    "Aplicar apósitos o pomadas protectoras prescritas para evitar la adhesión del pañal a la zona intervenida.",
    "Instruir a los padres sobre la higiene local y los signos de alarma postoperatorios."
];

dbActividadesNIC["1875 - Cuidados del drenaje: umbilical"] = [
    "Inspeccionar el catéter o drenaje umbilical en busca de signos de sangrado, enrojecimiento o infección local.",
    "Mantener la fijación segura del catéter y comprobar la integridad de las conexiones bajo técnica estéril.",
    "Vigilar la perfusión de las extremidades inferiores en relación con el uso de accesos umbilicales."
];

dbActividadesNIC["6800 - Cuidados del embarazo de alto riesgo"] = [
    "Realizar controles obstétricos minuciosos (presencia de dinámica uterina, constantes vitales, proteinuria) de forma seriada.",
    "Monitorizar el bienestar fetal mediante registros cardiotocográficos y ecografías periódicas según indicación.",
    "Proporcionar apoyo emocional y educación a la gestante sobre la importancia del reposo y los signos de alarma."
];

dbActividadesNIC["6750 - Cuidados del parto por cesárea"] = [
    "Preparar física y psicológicamente a la paciente antes de la intervención quirúrgica obstétrica.",
    "Monitorizar las constantes vitales, el sangrado vaginal y la involución uterina en el postoperatorio inmediato.",
    "Favorecer el contacto precoz con el recién nacido y la instauración de la lactancia materna si la condición lo permite."
];

dbActividadesNIC["6834 - Cuidados intraparto: parto de alto riesgo"] = [
    "Mantener una vigilancia intensiva y continua de la unidad feto-placentaria durante el trabajo de parto complejo.",
    "Disponer de los equipos de reanimación neonatal y de soporte materno avanzado listos para su uso inmediato.",
    "Coordinar la actuación rápida del equipo multidisciplinar (obstetra, anestesiólogo, pediatra) ante complicaciones."
];

dbActividadesNIC["6950 - Cuidados por interrupción del embarazo"] = [
    "Proporcionar un entorno de respeto, intimidad y apoyo emocional empático durante el proceso.",
    "Monitorizar el sangrado vaginal, la involución uterina y la estabilidad hemodinámica tras la interrupción.",
    "Ofrecer información sobre anticoncepción posterior y derivación a apoyo psicológico si se requiere."
];

dbActividadesNIC["6930 - Cuidados posparto"] = [
    "Valorar la altura uterina, la consistencia y el loquio tras el alumbramiento para prevenir hemorragias.",
    "Comprobar el estado de la episiotomía o herida perineal y aplicar medidas de confort local.",
    "Evaluar el inicio de la lactancia materna y el estado emocional de la madre (prevención de la depresión posparto)."
];

dbActividadesNIC["6960 - Cuidados prenatales"] = [
    "Evaluar el desarrollo de la gestación mediante la medición de la altura uterina, peso y presión arterial.",
    "Revisar los resultados de analíticas y ecografías de control prenatal.",
    "Educar a la gestante sobre signos de alarma, nutrición, preparación al parto y cuidados del embarazo."
];

dbActividadesNIC["6982 - Ecografía: obstétrica y ginecológica"] = [
    "Preparar a la paciente para la exploración ecográfica explicando el procedimiento según la vía (abdominal o transvaginal).",
    "Colaborar con el facultativo facilitando la posición adecuada y el manejo del gel conductor.",
    "Proporcionar apoyo emocional y clarificar dudas básicas sobre las imágenes visualizadas."
];

dbActividadesNIC["6850 - Inducción del parto"] = [
    "Administrar fármacos oxitócicos o métodos mecánicos de maduración cervical según pauta obstétrica.",
    "Monitorizar estrechamente la respuesta uterina y la frecuencia cardíaca fetal para prevenir la taquisistolia.",
    "Evaluar la dilatación cervical y la progresión del trabajo de parto de forma regular."
];

dbActividadesNIC["7886 - Manejo de la tecnología reproductiva"] = [
    "Proporcionar información y apoyo emocional a los pacientes sometidos a técnicas de reproducción asistida.",
    "Instruir sobre la administración de tratamientos hormonales de estimulación ovárica y pautas de seguimiento.",
    "Coordinar las citas para la transferencia embrionaria o procedimientos asociados."
];

dbActividadesNIC["6771 - Monitorización fetal electrónica: antes del parto"] = [
    "Colocar los transductores ecotocográficos en el abdomen materno para registrar la frecuencia cardíaca fetal y la dinámica uterina.",
    "Evaluar la variabilidad, la línea de base y la presencia de aceleraciones o desaceleraciones fetales anteparto.",
    "Interpretar los hallazgos del monitoreo y notificar alteraciones al obstetra."
];

dbActividadesNIC["6772 - Monitorización fetal electrónica: durante el parto"] = [
    "Vigilar de forma continua el patrón de la frecuencia cardíaca fetal en relación con las contracciones uterinas durante el parto.",
    "Identificar patrones de riesgo de pérdida del bienestar fetal y aplicar maniobras de reanimación intrauterina (cambios posturales, oxígeno).",
    "Registrar los datos del monitor fetal en la historia clínica según los protocolos de la unidad."
];

dbActividadesNIC["6720 - Parto"] = [
    "Asistir en el proceso del expulsivo manteniendo la asepsia y el confort de la parturienta.",
    "Vigilar la salida del neonato, valorar su adaptación inmediata y realizar el pinzamiento oportuno del cordón umbilical.",
    "Asistir en la expulsión de la placenta y comprobar su integridad."
];

dbActividadesNIC["6788 - Planificación familiar: embarazo no deseado"] = [
    "Ofrecer escucha empática y un espacio libre de juicios ante la situación de un embarazo no planificado.",
    "Informar de forma objetiva sobre las diferentes opciones disponibles (continuar la gestación, adopción o interrupción legal).",
    "Proporcionar derivación oportuna a los servicios de apoyo social, psicológico o médico correspondientes."
];

dbActividadesNIC["6786 - Planificación familiar: infertilidad"] = [
    "Proporcionar apoyo emocional a la pareja ante los procesos de diagnóstico y tratamiento de la esterilidad.",
    "Informar sobre las pruebas diagnósticas básicas de fertilidad y opciones clínicas disponibles.",
    "Derivar a unidades especializadas de reproducción humana asistida cuando esté indicado."
];

dbActividadesNIC["7160 - Preservación de la fertilidad"] = [
    "Informar a los pacientes sobre el riesgo de pérdida de fertilidad ante tratamientos gonadotóxicos (quimioterapia o radioterapia).",
    "Coordinar la derivación urgente a servicios de preservación de gametos (criopreservación de óvulos, esperma o tejido ovárico).",
    "Proporcionar apoyo psicológico durante el proceso de toma de decisiones sobre la fertilidad futura."
];

dbActividadesNIC["6972 - Reanimación: feto"] = [
    "Aplicar medidas inmediatas de reanimación intrauterina ante pérdida del bienestar fetal (decúbito lateral izquierdo, fluidoterapia, suspensión de oxitocina).",
    "Administrar oxígeno suplementario a la gestante y preparar el quirófano para una posible intervención urgente."
];

dbActividadesNIC["6974 - Reanimación: neonato"] = [
    "Evaluar la respiración, la frecuencia cardíaca y el tono muscular del recién nacido en los primeros segundos de vida.",
    "Iniciar las maniobras de soporte vital neonatal según el algoritmo de reanimación (aspiración, calor, ventilación con presión positiva o compresiones torácicas).",
    "Monitorizar la saturación de oxígeno preductal y trasladar a unidad de cuidados intensivos neonatales si precisa."
];

dbActividadesNIC["6870 - Supresión de la lactancia"] = [
    "Instruir a la madre sobre métodos físicos de supresión de la lactancia (uso de sujetadores compresivos, aplicación local de frío).",
    "Evitar la estimulación o el vaciamiento de los pechos para disminuir la producción láctea de forma progresiva.",
    "Vigilar la aparición de signos de congestión mamaria severa o mastitis y administrar tratamiento analgésico pautado."
];

dbActividadesNIC["6860 - Supresión de las contracciones de parto"] = [
    "Administrar terapia tocolítica prescrita para frenar la dinámica uterina en el parto prematuro.",
    "Reposar a la gestante en decúbito lateral y monitorizar la frecuencia cardíaca fetal y las contracciones.",
    "Vigilar los efectos secundarios de la medicación tocolítica (taquicardia materna, hipotensión)."
];

dbActividadesNIC["6656 - Vigilancia: al final del embarazo"] = [
    "Vigilar la aparición de signos de complicaciones en el tercer trimestre (hipertensión inducida por el embarazo, disminución de movimientos fetales).",
    "Programar controles periódicos de bienestar fetal y maduración cervical previos al término."
];
dbActividadesNIC["6612 - Identificación de riesgos: familia con recién nacido"] = [
    "Evaluar los factores de riesgo biopsicosocial, económico y ambiental en el entorno familiar ante la llegada del recién nacido.",
    "Identificar signos precoces de vulnerabilidad en la vinculación afectiva, depresión posparto o carencia de redes de apoyo.",
    "Planificar visitas domiciliarias de seguimiento y coordinar recursos comunitarios de apoyo a la familia y crianza."
];
dbActividadesNIC["6140 - Manejo de la parada cardiorrespiratoria"] = [
    "Reconocer de inmediato la situación de parada cardiorrespiratoria y activar el código de emergencia o equipo de reanimación.",
    "Iniciar compresiones torácicas de alta calidad y asegurar la permeabilidad de la vía aérea con ventilación de rescate según las guías de soporte vital.",
    "Conectar y utilizar el desfibrilador externo automático (DEA) o manual lo antes posible para analizar el ritmo cardíaco y aplicar descargas si está indicado.",
    "Administrar la farmacoterapia de urgencia y fluidoterapia por vía intravenosa u intraósea según las pautas del soporte vital avanzado."
];
dbActividadesNIC["6200 - Cuidados en la emergencia"] = [
    "Evaluar y priorizar de forma rápida las lesiones o condiciones que supongan una amenaza vital inmediata mediante el triaje o valoración primaria.",
    "Mantener la permeabilidad de la vía aérea, asegurar una ventilación eficaz y controlar la estabilidad hemodinámica del paciente crítico.",
    "Canalizar accesos vasculares de gran calibre y administrar la fluidoterapia o medicación de urgencia prescrita.",
    "Monitorizar continuamente los signos vitales, el nivel de consciencia y el estado de perfusión tisular durante la estabilización."
];
dbActividadesNIC["6300 - Cuidados del trauma por una agresión sexual"] = [
    "Proporcionar un entorno seguro, privado y de apoyo incondicional para la víctima de agresión sexual.",
    "Colaborar en la obtención y preservación de pruebas forenses siguiendo estrictamente los protocolos de cadena de custodia.",
    "Evaluar y tratar las lesiones físicas agudas, así como proporcionar profilaxis frente a infecciones de transmisión sexual y anticoncepción de urgencia si procede.",
    "Ofrecer apoyo psicológico inmediato y coordinar la derivación a equipos especializados en salud mental y apoyo social."
];
// =========================================================================
// BLOQUE 9: PATRÓN X - ADAPTACIÓN - TOLERANCIA AL ESTRÉS
// =========================================================================

dbActividadesNIC["5820 - Disminución de la ansiedad"] = [
    "Utilizar un enfoque sereno y tranquilizador durante la interacción con el paciente.",
    "Explicar todos los procedimientos y qué sensaciones se experimentarán durante los mismos.",
    "Permitir la presencia de la familia para reducir el sentimiento de aislamiento o miedo.",
    "Enseñar técnicas de respiración profunda y relajación para disminuir la activación fisiológica."
];

dbActividadesNIC["6160 - Intervención en caso de crisis"] = [
    "Establecer una relación de confianza y apoyo inmediato con el individuo en situación de crisis.",
    "Centrar la intervención en el problema actual y en la resolución de la urgencia inmediata.",
    "Ayudar al paciente a identificar los recursos de afrontamiento disponibles y redes de apoyo."
];
dbActividadesNIC["6170 - Manejo del apaciguamiento"] = [
    "Mantener una actitud calmada, paciente y no defensiva al interactuar con el individuo alterado.",
    "Reducir los estímulos ambientales y proporcionar un espacio físico tranquilo que favorezca la disminución de la tensión.",
    "Validar los sentimientos de frustración o miedo sin entrar en confrontaciones directas."
];

dbActividadesNIC["4095 - Manejo del desfibrilador: externo N"] = [
    "Comprobar el funcionamiento del desfibrilador externo y asegurar la disponibilidad de los parches adhesivos.",
    "Colocar los parches en el tórax del paciente según las indicaciones visuales y apartar a cualquier persona durante el análisis del ritmo.",
    "Aplicar la descarga eléctrica de forma segura cuando el dispositivo lo indique y reanudar inmediatamente las compresiones torácicas."
];

dbActividadesNIC["6260 - Obtención de órganos"] = [
    "Coordinar con el equipo de coordinación de trasplantes los trámites clínicos y legales necesarios para la donación.",
    "Mantener la estabilidad hemodinámica y el soporte orgánico adecuado en el paciente donante en muerte encefálica.",
    "Proporcionar apoyo emocional y acompañamiento empático a la familia durante el proceso de donación."
];

dbActividadesNIC["3840 - Precauciones en la hipertermia maligna M"] = [
    "Suspender de inmediato los agentes desencadenantes conocidos (anestésicos inhalatorios halogenados y relajantes despolarizantes).",
    "Administrar dantroleno sódico intravenoso a la dosis indicada de forma urgente y asegurar soporte vital avanzado.",
    "Iniciar medidas de enfriamiento físico agresivo (suero salino frío, mantas hipotérmicas) y monitorizar la temperatura central y los gases en sangre."
];

dbActividadesNIC["6240 - Primeros auxilios"] = [
    "Evaluar la escena de la emergencia para garantizar la seguridad del reanimador y de la víctima.",
    "Proporcionar soporte vital básico inicial, control de hemorragias y atención a lesiones agudas mientras llega el equipo especializado.",
    "Mantener a la víctima abrigada, tranquila y monitorizar sus constantes vitales de forma continua."
];

dbActividadesNIC["6320 - Reanimación"] = [
    "Iniciar las maniobras de reanimación cardiopulmonar avanzada de manera coordinada y siguiendo los protocolos vigentes.",
    "Asegurar la vía aérea avanzada, la ventilación mecánica y la administración de fármacos vasoactivos o antiarrítmicos.",
    "Monitorizar el ritmo cardíaco y evaluar la recuperación de la circulación espontánea."
];

dbActividadesNIC["6362 - Triaje: catástrofe en la comunidad"] = [
    "Clasificar de forma rápida a las víctimas en una situación de múltiples afectados utilizando sistemas de triaje estandarizados (como el sistema START).",
    "Priorizar la atención y evacuación según la gravedad de las lesiones y las posibilidades de supervivencia.",
    "Coordinar la distribución de los recursos de emergencia disponibles sobre el terreno."
];

dbActividadesNIC["6364 - Triaje: centro de urgencias"] = [
    "Evaluar de forma estructurada a los pacientes que acuden al servicio de urgencias para asignar el nivel de prioridad clínica correspondiente.",
    "Reevaluar de forma periódica a los pacientes en espera para detectar posibles cambios en su estado de salud.",
    "Gestionar el flujo de pacientes hacia las áreas asistenciales adecuadas según la gravedad."
];

dbActividadesNIC["6366 - Triaje: telecomunicación"] = [
    "Recoger información precisa y estructurada a través de llamadas telefónicas de emergencia para valorar la urgencia de la situación.",
    "Proporcionar instrucciones pre-arribo claras al interlocutor mientras se movilizan los recursos sanitarios oportunos.",
    "Registrar los datos de la llamada y mantener la comunicación de apoyo hasta la llegada de la ayuda."
];
dbActividadesNIC["6545 - Control de infecciones: intraoperatorio"] = [
    "Mantener la esterilidad del campo quirúrgico y de los equipos durante todo el procedimiento.",
    "Verificar la correcta aplicación de las medidas de asepsia y el uso de la indumentaria quirúrgica adecuada por parte del personal.",
    "Vigilar el cumplimiento de los protocolos de profilaxis antibiótica quirúrgica según la pauta establecida."
];

dbActividadesNIC["2870 - Cuidados postanestesia"] = [
    "Monitorizar de forma continua las constantes vitales, el nivel de consciencia y la saturación de oxígeno del paciente en la unidad de recuperación.",
    "Evaluar la permeabilidad de la vía aérea, la función respiratoria y la estabilidad hemodinámica tras la anestesia.",
    "Controlar la intensidad del dolor posoperatorio, la presencia de náuseas, vómitos y el retorno de los reflejos protectores."
];

dbActividadesNIC["2910 - Manejo de la instrumentación quirúrgica"] = [
    "Preparar y disponer el instrumental, suturas y equipos estériles necesarios de forma organizada en la mesa de operaciones.",
    "Colaborar con el cirujano anticipándose a las necesidades de material durante el procedimiento quirúrgico.",
    "Realizar el recuento exacto de gasas, compresas, instrumentos y cortantes junto con el personal circulante antes y después de la intervención."
];

dbActividadesNIC["2865 - Manejo del torniquete neumático"] = [
    "Comprobar el correcto funcionamiento del equipo de presión y el estado de los manguitos antes de su colocación.",
    "Registrar la hora exacta de inflado y desinflado del torniquete para evitar complicaciones isquémicas tisulares.",
    "Inspeccionar el área cutánea bajo el manguetón tras su retirada para descartar lesiones por presión o quemaduras."
];

dbActividadesNIC["6560 - Precauciones con el láser V"] = [
    "Colocar señales de advertencia visibles en los accesos al quirófano indicando el uso activo de radiación láser.",
    "Asegurar el uso de gafas de protección ocular específicas frente al tipo de longitud de onda del láser para todo el personal y el paciente.",
    "Mantener elementos de protección ignífugos, soluciones salinas estériles y extintores accesibles en la sala."
];

dbActividadesNIC["2920 - Precauciones quirúrgicas V"] = [
    "Verificar la lista de verificación quirúrgica (checklist de seguridad) de la OMS antes de la incisión y al finalizar.",
    "Comprobar la correcta posición anatómica del paciente sobre la mesa quirúrgica para prevenir lesiones nerviosas y cutáneas.",
    "Asegurar la correcta conexión y aislamiento de los dispositivos eléctricos y de bisturí eléctrico."
];

dbActividadesNIC["2930 - Preparación quirúrgica"] = [
    "Realizar la tricotomía o rasurado de la zona operatoria solo si es estrictamente necesario y de forma atraumática.",
    "Limpiar y desinfectar la piel de la zona quirúrgica con antiséptico adecuado siguiendo una técnica concéntrica.",
    "Delimitar el campo operatorio con paños estériles estancos para asegurar la barrera antimicrobiana."
];

dbActividadesNIC["3902 - Regulación de la temperatura: perioperatoria M"] = [
    "Monitorizar la temperatura corporal central del paciente antes, durante y después de la cirugía.",
    "Utilizar sistemas de calentamiento activo (mantas térmicas de aire soplado, sueros templados) para prevenir la hipotermia perioperatoria.",
    "Ajustar la temperatura ambiental del quirófano para favorecer el confort térmico y la estabilidad metabólica."
];
dbActividadesNIC["6466 - Manejo de la demencia: deambulación errática"] = [
    "Identificar los patrones, horarios y factores desencadenantes de la deambulación errática o deambulación sin rumbo en el paciente con demencia.",
    "Proporcionar un entorno seguro y cerrado con sistemas de alarma en puertas y salidas para prevenir extravíos o fugas.",
    "Orientar al paciente con suavidad, redirigir su atención hacia actividades significativas y permitir espacios seguros para el movimiento controlado."
];

dbActividadesNIC["6420 - Restricción de zonas de movimiento"] = [
    "Limitar el acceso a áreas peligrosas o de riesgo mediante el uso de barreras físicas, puertas de seguridad o sistemas de control de acceso.",
    "Evaluar periódicamente la necesidad de mantener las restricciones de movilidad equilibrándola con el respeto a la autonomía del paciente.",
    "Informar a la familia y al equipo asistencial sobre las medidas de delimitación espacial implementadas por seguridad."
];
dbActividadesNIC["2840 - Administración de anestesia H"] = [
    "Colaborar con el anestesiólogo en la inducción, mantenimiento y emersión de la anestesia.",
    "Monitorizar de forma continua las constantes vitales, el plano anestésico y la respuesta hemodinámica del paciente.",
    "Comprobar el correcto funcionamiento de los equipos de anestesia, gases medicinales y sistemas de monitorización."
];

dbActividadesNIC["2900 - Asistencia quirúrgica"] = [
    "Colaborar con el cirujano durante el procedimiento quirúrgico exponiendo los tejidos y manteniendo la visibilidad del campo operatorio.",
    "Realizar la hemostasia de pequeños vasos mediante compresión o electrocauterio según indicación médica.",
    "Asegurar la correcta manipulación de los tejidos y colaborar en el cierre de las capas quirúrgicas."
];

dbActividadesNIC["2860 - Autotransfusión N"] = [
    "Recuperar, filtrar y procesar la sangre perdida por el paciente durante el procedimiento quirúrgico para su posterior reinfusión.",
    "Comprobar la correcta identificación del sistema de autotransfusión y mantener una técnica aséptica estricta en todo el circuito.",
    "Monitorizar la respuesta clínica y hemodinámica del paciente durante la reinfusión de su propia sangre."
];

dbActividadesNIC["0842 - Cambio de posición: intraoperatorio"] = [
    "Colocar al paciente en la posición quirúrgica requerida asegurando la protección de los puntos de presión, prominencias óseas y nervios periféricos.",
    "Verificar que la posición no comprometa la función respiratoria, circulatoria o la alineación corporal durante la intervención.",
    "Asegurar los dispositivos de sujeción o soportes posturales para evitar desplazamientos accidentales durante la cirugía."
];

// =========================================================================
// BLOQUE 10: PATRÓN XII - SEGURIDAD - PROTECCIÓN
// =========================================================================

dbActividadesNIC["6540 - Control de infecciones"] = [
    "Aplicar estrictamente las precauciones estándar y el lavado de manos higiénico o quirúrgico.",
    "Utilizar el equipo de protección personal (guantes, mascarillas, bata) según el riesgo de exposición.",
    "Manejar de forma segura y estéril el material punzocortante y las líneas invasivas."
];

dbActividadesNIC["6610 - Identificación de riesgos"] = [
    "Identificar factores biológicos, ambientales o conductuales que pongan en peligro la seguridad del paciente.",
    "Revisar el historial de eventos adversos y caídas previas.",
    "Planificar medidas preventivas adaptadas a los riesgos detectados."
];
dbActividadesNIC["6540 - Control de infecciones"] = [
    "Aplicar estrictamente las precauciones estándar y el lavado de manos higiénico o quirúrgico.",
    "Utilizar el equipo de protección personal (guantes, mascarillas, bata) según el riesgo de exposición.",
    "Manejar de forma segura y estéril el material punzocortante y las líneas invasivas."
];

dbActividadesNIC["6530 - Manejo de la vacunación"] = [
    "Revisar el historial de inmunización y el calendario de vacunación vigente del paciente.",
    "Verificar la ausencia de contraindicaciones o alergias antes de la administración de la vacuna.",
    "Administrar la vacuna por la vía y dosis correcta utilizando técnica aséptica.",
    "Informar al paciente sobre las posibles reacciones adversas locales o sistémicas esperadas y los cuidados posteriores."
];

dbActividadesNIC["2880 - Coordinación preoperatoria"] = [
    "Organizar y verificar la realización de pruebas preoperatorias, valoraciones anestésicas y trámites previos a la cirugía.",
    "Asegurar que toda la documentación clínica esté completa y disponible en el expediente quirúrgico."
];

dbActividadesNIC["2920 - Precauciones quirúrgicas"] = [
    "Verificar la lista de verificación quirúrgica (checklist de seguridad) antes de la intervención.",
    "Comprobar la correcta posición anatómica del paciente sobre la mesa quirúrgica para prevenir lesiones nerviosas y cutáneas.",
    "Asegurar la correcta conexión y aislamiento de los dispositivos eléctricos y de bisturí eléctrico."
];

dbActividadesNIC["2930 - Preparación quirúrgica"] = [
    "Realizar la tricotomía o rasurado de la zona operatoria solo si es estrictamente necesario y de forma atraumática.",
    "Limpiar y desinfectar la piel de la zona quirúrgica con antiséptico adecuado siguiendo una técnica concéntrica.",
    "Delimitar el campo operatorio con paños estériles estancos para asegurar la barrera antimicrobiana."
];

dbActividadesNIC["3440 - Cuidados del sitio de incisión"] = [
    "Vigilar el proceso de cicatrización de la herida quirúrgica y comprobar la aproximación de los bordes.",
    "Inspeccionar la presencia de eritema, calor, edema, dolor o drenaje anómalo en la línea de incisión.",
    "Realizar la cura quirúrgica bajo técnica aséptica estricta y cambiar los apósitos según necesidad."
];

dbActividadesNIC["3510 - Fototerapia: piel"] = [
    "Exponer la piel afectada a la fuente de luz terapéutica controlando la intensidad y el tiempo de radiación prescrito.",
    "Proteger los ojos y las zonas corporales no tratadas mediante pantallas u opacos protectores.",
    "Vigilar la aparición de eritema, sequedad o reacciones cutáneas adversas durante la sesión."
];

dbActividadesNIC["3680 - Irrigación de heridas"] = [
    "Utilizar una jeringa con aguja o catéter de calibre adecuado para aplicar presión de lavado segura sobre el lecho de la herida.",
    "Arrastrar detritus y bacterias mediante el flujo controlado de solución salina estéril."
];

dbActividadesNIC["3550 - Manejo del prurito E"] = [
    "Aplicar lociones emolientes e hidratantes no perfumadas para aliviar la sequedad cutánea.",
    "Aconsejar el uso de ropa holgada de algodón y mantener las uñas cortas para evitar excoriaciones por rascado."
];

dbActividadesNIC["3480 - Monitorización de las extremidades inferiores"] = [
    "Evaluar regularmente el color, la temperatura, los pulsos periféricos y el llenado capilar en ambas extremidades inferiores.",
    "Vigilar la presencia de edemas, dolor o alteraciones sensitivomotoras que indiquen compromiso vascular o nervioso."
];

dbActividadesNIC["3540 - Prevención de las lesiones por presión V"] = [
    "Utilizar escalas de valoración de riesgo (como Braden) para identificar pacientes vulnerables.",
    "Cambiar de posición al paciente encamado cada 2 horas y mantener la piel limpia, seca e hidratada.",
    "Emplear superficies especiales de manejo de presión y proteger prominencias óseas."
];

dbActividadesNIC["3620 - Sutura"] = [
    "Ayudar en la aproximación de los bordes de la herida mediante la colocación de puntos de sutura o grapas quirúrgicas bajo técnica estéril.",
    "Instruir al paciente sobre los plazos y la retirada posterior de los puntos de sutura."
];

dbActividadesNIC["3460 - Terapia con sanguijuelas"] = [
    "Colocar las sanguijuelas medicinales en la zona de congestión venosa indicada y vigilar su fijación espontánea.",
    "Monitorizar el sangrado controlado posterior y la evolución de la perfusión tisular local."
];

dbActividadesNIC["3590 - Vigilancia de la piel"] = [
    "Inspeccionar el estado general de la piel y las mucosas en busca de enrojecimientos, erupciones, sequedad o signos de presión.",
    "Vigilar las zonas de riesgo sometidas a fricción, humedad o apoyo prolongado."
];

dbActividadesNIC["6576 - Acompañamiento físico"] = [
    "Proporcionar apoyo y presencia física al paciente durante la realización de procedimientos diagnósticos o terapéuticos ansiógenos.",
    "Transmitir seguridad y calma mediante la compañía constante y la sujeción de la mano si el paciente lo requiere."
];

dbActividadesNIC["6630 - Aislamiento"] = [
    "Aplicar las medidas de aislamiento hospitalario correspondientes (estándar, por contacto, de gotas o por vía aérea).",
    "Señalizar adecuadamente la puerta de la habitación y asegurar la disponibilidad de equipos de protección personal."
];

dbActividadesNIC["6400 - Apoyo en la protección contra abusos"] = [
    "Identificar indicios físicos o emocionales de maltrato o abuso en poblaciones vulnerables.",
    "Proporcionar un entorno seguro y confidencial que facilite la revelación y la escucha activa.",
    "Activar los protocolos de protección y derivación a los servicios sociales y legales competentes."
];

dbActividadesNIC["6520 - Cribado de salud d"] = [
    "Determinar la elegibilidad del individuo para someterse a pruebas de cribado preventivo según su perfil de riesgo.",
    "Realizar las pruebas diagnósticas o cuestionarios de detección temprana establecidos por los protocolos."
];

dbActividadesNIC["6525 - Detección de la trata de seres humanos"] = [
    "Observar indicadores clínicos y conductuales de sospecha de trata o explotación de personas durante la entrevista.",
    "Garantizar la privacidad del paciente y ofrecer canales seguros de comunicación y derivación a recursos de protección."
];

dbActividadesNIC["5649 - Enseñanza: control de infecciones S"] = [
    "Instruir al paciente y familiares sobre la correcta técnica de lavado de manos y desinfección.",
    "Explicar las precauciones estándar para evitar la propagación de agentes infecciosos en el entorno domiciliario."
];

dbActividadesNIC["6596 - Facilitación de la cuarentena"] = [
    "Instruir al paciente sobre las pautas, duración y medidas de aislamiento domiciliario requeridas.",
    "Proporcionar apoyo logístico y supervisión de síntomas durante el periodo de cuarentena preventiva."
];

dbActividadesNIC["6594 - Facilitación del distanciamiento físico"] = [
    "Educar al paciente y a la comunidad sobre la importancia de mantener la separación interpersonal recomendada.",
    "Adaptar los espacios asistenciales y de espera para garantizar el cumplimiento de las normativas de distanciamiento."
];

dbActividadesNIC["6610 - Identificación de riesgos d"] = [
    "Valorar la presencia de factores de riesgo biológicos, ambientales o conductuales en la situación del paciente.",
    "Planificar estrategias preventivas individualizadas orientadas a reducir la probabilidad de complicaciones."
];

dbActividadesNIC["6620 - Identificación de riesgos: enfermedades infecciosas"] = [
    "Evaluar el historial de exposición a agentes infecciosos, viajes recientes o contactos de riesgo.",
    "Monitorizar la aparición de síntomas febriles o infecciosos incipientes para un aislamiento precoz."
];

dbActividadesNIC["6574 - Identificación del paciente"] = [
    "Comprobar los datos del paciente en la pulsera identificativa antes de administrar cualquier tratamiento o procedimiento.",
    "Verificar al menos dos identificadores únicos según los protocolos de seguridad clínica."
];
dbActividadesNIC["6410 - Manejo de la alergia"] = [
    "Identificar los alérgenos conocidos o sospechosos en el historial clínico del paciente y verificar las alergias activas.",
    "Observar la aparición de signos y síntomas de reacción alérgica (prurito, erupción cutánea, edema, dificultad respiratoria).",
    "Asegurar la disponibilidad y el correcto funcionamiento de los equipos de emergencia y medicación antihistamínica o corticoidea."
];

dbActividadesNIC["6412 - Manejo de la anafilaxia"] = [
    "Reconocer de inmediato los signos de reacción anafiláctica sistémica grave (compromiso respiratorio, hipotensión, urticaria generalizada).",
    "Administrar epinefrina (adrenalina) por vía intramuscular de forma urgente según el protocolo establecido.",
    "Garantizar la permeabilidad de la vía aérea, administrar oxígeno suplementario y canalizar una vía venosa para la infusión rápida de fluidos.",
    "Monitorizar continuamente las constantes vitales, el ritmo cardíaco y la respuesta clínica del paciente durante la urgencia."
];

dbActividadesNIC["5510 - Educación para la salud"] = [
    "Evaluar las necesidades de aprendizaje, los conocimientos previos y la disposición del paciente para adquirir hábitos saludables.",
    "Diseñar y transmitir información clara, comprensible y adaptada sobre estilos de vida, prevención de enfermedades y autocuidados.",
    "Verificar la comprensión de los contenidos impartidos mediante la técnica de 'enseñar de vuelta' (teach-back) y fomentar la resolución de dudas."
];

dbActividadesNIC["6570 - Precauciones en la alergia al látex"] = [
    "Identificar y registrar claramente la alergia al látex en la historia clínica y en la cabecera del paciente.",
    "Utilizar exclusivamente guantes, sondas, jeringas y dispositivos libres de látex (latex-free) en la atención al paciente.",
    "Asegurar un entorno asistencial libre de productos de látex y disponer de un carro de urgencias preparado para reacciones de hipersensibilidad."
];
dbActividadesNIC["1350 - Prevención de la sequedad ocular"] = [
    "Evaluar el grado de humedad de la superficie ocular y la presencia de signos de irritación o exposición corneal.",
    "Instilar lágrimas artificiales o geles oftalmo-lubricantes prescritos de forma regular para mantener la lubricación.",
    "Mantener los párpados ocluidos o utilizar cámaras húmedas protectoras en pacientes con alteración del reflejo de parpadeo o inconscientes."
];

dbActividadesNIC["1650 - Cuidados de los ojos"] = [
    "Inspeccionar los ojos en busca de secreciones, enrojecimiento, edema o anomalías en la córnea y conjuntiva.",
    "Limpiar los párpados y pestañas suavemente con suero salino estéril desde el ángulo interno hacia el externo.",
    "Aplicar los colirios o pomadas oftalmo-terapéuticas pautadas siguiendo una técnica estéril."
];

dbActividadesNIC["1655 - Irrigación de los ojos"] = [
    "Colocar al paciente con la cabeza inclinada hacia el lado afectado y proteger el conducto auditivo y la ropa.",
    "Aplicar un flujo suave y continuo de solución salina estéril desde el ángulo interno hacia el externo del ojo para eliminar cuerpos extraños o sustancias químicas.",
    "Secar los párpados y evaluar la integridad corneal y la agudeza visual tras el procedimiento de lavado."
];

dbActividadesNIC["6560 - Precauciones con el láser J"] = [
    "Colocar señales de advertencia visibles en los accesos al área clínica indicando el uso activo de radiación láser.",
    "Asegurar el uso de gafas de protección ocular específicas frente a la longitud de onda del láser para el paciente y el personal presente.",
    "Mantener elementos de protección ignífugos y soluciones líquidas estériles accesibles en la sala para prevención de incendios."
];

dbActividadesNIC["6470 - Precauciones contra fugas"] = [
    "Identificar y asegurar el correcto sellado y conexiones de sistemas presurizados, canalizaciones o equipos que contengan fluidos o gases.",
    "Monitorizar de forma continua la aparición de indicios o alarmas de fuga en los dispositivos.",
    "Disponer de planes de contención y equipos de cierre rápido ante fallos en los sistemas."
];

dbActividadesNIC["6500 - Precauciones en incendios provocados"] = [
    "Revisar y mantener despejadas las vías de evacuación y salidas de emergencia de la unidad.",
    "Verificar la ubicación y disponibilidad de extintores, mantas ignífugas y sistemas de alarma contraincendios.",
    "Instruir al personal y pacientes sobre los protocolos de actuación y códigos de alerta ante conatos de incendio."
];

dbActividadesNIC["6580 - Precauciones en la neutropenia"] = [
    "Aplicar un estricto lavado de manos y el uso de mascarilla y guantes al atender a pacientes inmunodeprimidos.",
    "Restringir las visitas de personas con síntomas infecciosos y prohibir la entrada de flores naturales o plantas frescas en la habitación.",
    "Evitar el consumo de alimentos crudos (frutas sin pelar, verduras no cocinadas) para minimizar la exposición a patógenos oportunistas."
];

dbActividadesNIC["6592 - Precauciones en pandemias"] = [
    "Cumplir rigurosamente las directrices de salud pública y los protocolos de control epidemiológico establecidos.",
    "Asegurar la provisión y el uso correcto del equipo de protección personal adecuado para cada nivel de exposición.",
    "Limitar el tránsito de personas, fomentar la higiene respiratoria y reorganizar los espacios para garantizar el aislamiento efectivo."
];

dbActividadesNIC["6650 - Vigilancia"] = [
    "Observar de manera continua y sistemática el estado físico, conductual y hemodinámico del paciente.",
    "Registrar los hallazgos significativos y detectar precozmente cualquier signo de complicación o deterioro clínico.",
    "Mantener un entorno seguro que permita una respuesta rápida ante cambios imprevistos en la situación del paciente."
];

dbActividadesNIC["6660 - Vigilancia: monitorización con vídeo"] = [
    "Instalar y revisar el correcto funcionamiento del sistema de cámaras de vídeo orientadas a la seguridad del paciente.",
    "Observar de forma remota y continua las imágenes para detectar conductas de riesgo, caídas, retirada de dispositivos o alteraciones críticas.",
    "Intervenir o alertar al personal de planta de forma inmediata ante situaciones de peligro detectadas a través del monitor."
];