// ============================================================
// DESAFÍO DIGESTIVO — versión educativa ordenada y verificada
// HTML + CSS + JavaScript. Funciona sin backend ni API.
// ============================================================
//
// REGLA PEDAGÓGICA PRINCIPAL:
// El recorrido del alimento NUNCA se mezcla:
// BOCA → ESÓFAGO → ESTÓMAGO → INTESTINO DELGADO
// → INTESTINO GRUESO → RECTO/ANO.
//
// Las preguntas de cada etapa están agrupadas en ese orden.
// La aleatoriedad se usa solamente para el REPASO de preguntas
// que el jugador respondió mal, donde nunca se repite exactamente
// la misma pregunta.
// ============================================================

const routeOrder = ["boca", "esofago", "estomago", "delgado", "grueso", "ano"];

const levels = [
  {
    name: "Explorador",
    emoji: "🔎",
    title: "Explorador Digestivo",
    message: "¡Excelente! Ya conocés el recorrido básico del alimento y las partes principales del aparato digestivo.",
    questions: [
      {
        stage: "boca", category: "BOCA",
        question: "¿Dónde comienza el recorrido del alimento?",
        options: ["En el estómago", "En la boca", "En el intestino delgado", "En el intestino grueso"],
        answer: 1,
        explanation: "El proceso digestivo comienza en la boca, cuando incorporamos el alimento y empezamos a masticarlo.",
        learningTitle: "👄 La boca",
        learningDetail: "Los dientes trituran el alimento y la saliva lo humedece. La saliva también comienza a descomponer el almidón.",
        visual: "👄"
      },
      {
        stage: "boca", category: "BOCA",
        question: "¿Qué hacemos con los alimentos en la boca?",
        options: ["Los masticamos y mezclamos con saliva", "Los absorbemos directamente en la sangre", "Los convertimos en heces", "Los almacenamos durante horas"],
        answer: 0,
        explanation: "En la boca masticamos los alimentos y los mezclamos con saliva antes de tragarlos.",
        learningTitle: "🥣 Masticación",
        learningDetail: "Masticar hace que los alimentos sean más pequeños y facilita el proceso digestivo.",
        visual: "🦷"
      },
      {
        stage: "esofago", category: "ESÓFAGO",
        question: "Después de tragar, ¿por qué órgano pasa el alimento para llegar al estómago?",
        options: ["Intestino grueso", "Hígado", "Esófago", "Páncreas"],
        answer: 2,
        explanation: "El esófago es un tubo que transporta el alimento desde la garganta hasta el estómago.",
        learningTitle: "〰️ El esófago",
        learningDetail: "El alimento avanza por movimientos musculares llamados peristalsis o movimientos peristálticos.",
        visual: "〰️"
      },
      {
        stage: "esofago", category: "ESÓFAGO",
        question: "¿Cómo avanza el alimento por el esófago?",
        options: ["Flota por gravedad solamente", "Por movimientos musculares llamados peristalsis", "Lo empuja el hígado", "Lo absorbe la sangre"],
        answer: 1,
        explanation: "La peristalsis son movimientos musculares que empujan el alimento hacia adelante por el tubo digestivo.",
        learningTitle: "〰️ Peristalsis",
        learningDetail: "Son contracciones musculares que ayudan a mover el alimento a través del aparato digestivo.",
        visual: "〰️"
      },
      {
        stage: "estomago", category: "ESTÓMAGO",
        question: "¿Qué órgano recibe el alimento después del esófago?",
        options: ["El estómago", "El intestino grueso", "El recto", "La boca"],
        answer: 0,
        explanation: "Después de atravesar el esófago, el alimento llega al estómago.",
        learningTitle: "🥣 El estómago",
        learningDetail: "El estómago mezcla el alimento con jugos digestivos y lo va transformando para continuar la digestión.",
        visual: "🥣"
      },
      {
        stage: "estomago", category: "ESTÓMAGO",
        question: "¿Qué ocurre en el estómago?",
        options: ["Se forman las heces", "Se mezcla el alimento con jugos digestivos", "Los nutrientes pasan todos directamente a la sangre", "El alimento vuelve a la boca"],
        answer: 1,
        explanation: "Los músculos del estómago mezclan el alimento con jugos digestivos, entre ellos ácido y enzimas.",
        learningTitle: "🧪 Jugos digestivos",
        learningDetail: "El estómago mezcla el alimento con ácido y enzimas que ayudan a descomponerlo.",
        visual: "🧪"
      },
      {
        stage: "delgado", category: "INTESTINO DELGADO",
        question: "¿A qué órgano pasa el alimento después del estómago?",
        options: ["Al intestino delgado", "Al esófago", "Al intestino grueso directamente", "A la boca"],
        answer: 0,
        explanation: "El contenido del estómago se vacía lentamente en el intestino delgado.",
        learningTitle: "🧬 El intestino delgado",
        learningDetail: "En el intestino delgado continúa la digestión y se absorbe la mayoría de los nutrientes.",
        visual: "🧬"
      },
      {
        stage: "delgado", category: "INTESTINO DELGADO",
        question: "¿Dónde se absorbe la mayoría de los nutrientes de los alimentos?",
        options: ["En el esófago", "En el intestino delgado", "En la boca", "En el intestino grueso"],
        answer: 1,
        explanation: "El intestino delgado absorbe la mayoría de los nutrientes que obtenemos de los alimentos.",
        learningTitle: "🩸 Absorción",
        learningDetail: "Los nutrientes atraviesan la pared intestinal y pasan al organismo para ser utilizados.",
        visual: "🩸"
      },
      {
        stage: "grueso", category: "INTESTINO GRUESO",
        question: "¿Qué ocurre principalmente en el intestino grueso?",
        options: ["Se mastica el alimento", "Se absorbe agua y se forman las heces", "Se produce la saliva", "Se lleva el alimento al estómago"],
        answer: 1,
        explanation: "El intestino grueso absorbe agua y ayuda a transformar los desechos de la digestión en heces.",
        learningTitle: "🌀 El intestino grueso",
        learningDetail: "Los restos que no fueron aprovechados siguen hacia el intestino grueso, donde se absorbe más agua.",
        visual: "🌀"
      },
      {
        stage: "grueso", category: "INTESTINO GRUESO",
        question: "¿Qué parte del aparato digestivo almacena las heces antes de la eliminación?",
        options: ["El recto", "El esófago", "El estómago", "El páncreas"],
        answer: 0,
        explanation: "El recto, que es el extremo inferior del intestino grueso, almacena las heces hasta su eliminación.",
        learningTitle: "📦 El recto",
        learningDetail: "El recto almacena las heces antes de que salgan del cuerpo.",
        visual: "📦"
      },
      {
        stage: "ano", category: "ELIMINACIÓN",
        question: "¿Por dónde salen del cuerpo las heces?",
        options: ["Por el esófago", "Por el estómago", "Por el ano", "Por el intestino delgado"],
        answer: 2,
        explanation: "Las heces se eliminan del cuerpo a través del ano.",
        learningTitle: "🚪 Eliminación",
        learningDetail: "La eliminación es la etapa final del recorrido de los desechos por el aparato digestivo.",
        visual: "🚪"
      },
      {
        stage: "ano", category: "RECORRIDO",
        question: "¿Cuál es el orden correcto del recorrido principal del alimento?",
        options: [
          "Boca → esófago → estómago → intestino delgado → intestino grueso → ano",
          "Boca → estómago → esófago → intestino grueso → ano",
          "Estómago → boca → intestino delgado → esófago → ano",
          "Boca → intestino grueso → estómago → ano"
        ],
        answer: 0,
        explanation: "El alimento sigue este recorrido principal: boca, esófago, estómago, intestino delgado, intestino grueso y finalmente sale por el ano.",
        learningTitle: "🗺️ El recorrido",
        learningDetail: "¡Este es el mapa que hay que recordar! El alimento avanza en ese sentido, no hacia atrás.",
        visual: "🗺️"
      }
    ]
  },
  {
    name: "Investigador",
    emoji: "🧪",
    title: "Investigador Digestivo",
    message: "¡Muy bien! Ahora vas a descubrir cómo se transforma el alimento y qué órganos ayudan en la digestión.",
    questions: [
      {
        stage: "boca", category: "DIGESTIÓN",
        question: "¿Qué es la ingestión?",
        options: ["Eliminar desechos", "Incorporar alimentos al cuerpo", "Absorber nutrientes", "Formar las heces"],
        answer: 1,
        explanation: "La ingestión es la incorporación de alimentos y bebidas al cuerpo, comenzando por la boca.",
        learningTitle: "🍎 Ingestión",
        learningDetail: "Es el comienzo del proceso: incorporamos los alimentos al cuerpo.",
        visual: "🍎"
      },
      {
        stage: "boca", category: "DIGESTIÓN",
        question: "¿Qué sustancia de la boca ayuda a comenzar la digestión de los almidones?",
        options: ["Bilis", "Saliva", "Ácido del estómago", "Jugo pancreático"],
        answer: 1,
        explanation: "La saliva humedece los alimentos y contiene una enzima que comienza a descomponer los almidones.",
        learningTitle: "💧 La saliva",
        learningDetail: "La saliva no solo moja el alimento: también participa en el comienzo de la digestión de los almidones.",
        visual: "💧"
      },
      {
        stage: "estomago", category: "DIGESTIÓN",
        question: "¿Qué ayuda a descomponer químicamente los alimentos en el estómago?",
        options: ["Ácido estomacal y enzimas digestivas", "Solo agua", "La sangre", "El aire"],
        answer: 0,
        explanation: "El estómago produce ácido estomacal y enzimas digestivas que ayudan a descomponer químicamente los alimentos.",
        learningTitle: "🧪 Ácido y enzimas",
        learningDetail: "Junto con los movimientos del estómago, ayudan a continuar la digestión.",
        visual: "🧪"
      },
      {
        stage: "delgado", category: "ÓRGANOS QUE AYUDAN",
        question: "¿Qué órgano produce la bilis?",
        options: ["El hígado", "El estómago", "El esófago", "El recto"],
        answer: 0,
        explanation: "El hígado produce la bilis, un líquido digestivo que ayuda a digerir las grasas.",
        learningTitle: "🫀 El hígado",
        learningDetail: "La bilis producida por el hígado ayuda a la digestión de las grasas y llega al intestino delgado.",
        visual: "🫀"
      },
      {
        stage: "delgado", category: "ÓRGANOS QUE AYUDAN",
        question: "¿Qué órgano produce jugo pancreático con enzimas que ayudan a digerir carbohidratos, grasas y proteínas?",
        options: ["El páncreas", "El recto", "El esófago", "La boca"],
        answer: 0,
        explanation: "El páncreas produce jugo pancreático con enzimas digestivas y lo libera en el intestino delgado.",
        learningTitle: "🧪 El páncreas",
        learningDetail: "Ayuda a la digestión liberando jugo pancreático en el intestino delgado.",
        visual: "🧪"
      },
      {
        stage: "delgado", category: "NUTRIENTES",
        question: "¿Para qué utiliza el cuerpo los nutrientes?",
        options: ["Para energía, crecimiento y reparación de células", "Solo para producir saliva", "Solo para formar heces", "Para reemplazar el aire"],
        answer: 0,
        explanation: "El cuerpo utiliza nutrientes para obtener energía, crecer y reparar células.",
        learningTitle: "⚡ Los nutrientes",
        learningDetail: "Los alimentos aportan sustancias que el cuerpo necesita para funcionar, crecer y mantenerse.",
        visual: "⚡"
      },
      {
        stage: "grueso", category: "HÁBITOS",
        question: "¿Cuál de estos hábitos ayuda a cuidar el aparato digestivo?",
        options: ["Beber agua y comer variado", "No beber agua", "Comer siempre lo mismo", "Evitar toda actividad física"],
        answer: 0,
        explanation: "Una alimentación variada y beber suficiente agua forman parte de hábitos saludables.",
        learningTitle: "💧 Hábitos saludables",
        learningDetail: "También es importante mantener una alimentación variada y realizar actividad física.",
        visual: "💧"
      },
      {
        stage: "boca", category: "ALIMENTACIÓN",
        question: "¿Por qué es útil masticar bien?",
        options: ["Porque ayuda a triturar y preparar el alimento para la digestión", "Porque elimina todos los nutrientes", "Porque evita que el alimento llegue al estómago", "Porque transforma el alimento en sangre"],
        answer: 0,
        explanation: "Masticar tritura los alimentos y los mezcla con saliva, ayudando a prepararlos para las siguientes etapas de la digestión.",
        learningTitle: "🦷 Masticar bien",
        learningDetail: "La digestión empieza en la boca y la masticación es una parte importante de ese comienzo.",
        visual: "🦷"
      }
    ]
  },
  {
    name: "Experto",
    emoji: "🏆",
    title: "Experto Digestivo",
    message: "¡Increíble! Llegaste al desafío final. Ahora vas a poner a prueba todo lo aprendido.",
    questions: [
      {
        stage: "boca", category: "DESAFÍO FINAL",
        question: "¿Cuál afirmación es correcta sobre el comienzo de la digestión?",
        options: [
          "Comienza cuando el alimento entra en la boca",
          "Comienza recién en el intestino grueso",
          "Comienza después de eliminar las heces",
          "Comienza en el ano"
        ],
        answer: 0,
        explanation: "El proceso digestivo comienza cuando comemos y el alimento entra en la boca.",
        learningTitle: "👄 El comienzo",
        learningDetail: "La boca es el primer lugar del recorrido y allí comienzan la masticación y parte de la digestión química.",
        visual: "👄"
      },
      {
        stage: "esofago", category: "DESAFÍO FINAL",
        question: "¿Cuál de estas afirmaciones sobre el esófago es correcta?",
        options: [
          "Absorbe la mayoría de los nutrientes",
          "Transporta el alimento hacia el estómago",
          "Produce la bilis",
          "Almacena las heces"
        ],
        answer: 1,
        explanation: "El esófago transporta el alimento desde la garganta hacia el estómago mediante movimientos peristálticos.",
        learningTitle: "〰️ Transporte",
        learningDetail: "Su función principal en el recorrido es llevar el alimento hacia el estómago.",
        visual: "〰️"
      },
      {
        stage: "estomago", category: "DESAFÍO FINAL",
        question: "¿Qué sucede cuando el alimento llega al estómago?",
        options: [
          "Se mezcla con jugos digestivos y continúa su descomposición",
          "Se convierte directamente en nutrientes en la sangre",
          "Regresa a la boca",
          "Sale inmediatamente por el ano"
        ],
        answer: 0,
        explanation: "En el estómago, los músculos mezclan el alimento con jugos digestivos y continúa la digestión.",
        learningTitle: "🥣 Mezcla y digestión",
        learningDetail: "El estómago mezcla el alimento y luego libera su contenido lentamente hacia el intestino delgado.",
        visual: "🥣"
      },
      {
        stage: "delgado", category: "DESAFÍO FINAL",
        question: "¿Por qué es tan importante el intestino delgado?",
        options: [
          "Porque allí se absorbe la mayoría de los nutrientes",
          "Porque allí empieza la masticación",
          "Porque allí se almacenan las heces",
          "Porque allí se produce la saliva"
        ],
        answer: 0,
        explanation: "El intestino delgado es fundamental para la absorción de la mayoría de los nutrientes.",
        learningTitle: "🩸 Absorción de nutrientes",
        learningDetail: "Los nutrientes pasan a través de la pared intestinal para que el organismo pueda utilizarlos.",
        visual: "🩸"
      },
      {
        stage: "delgado", category: "DESAFÍO FINAL",
        question: "¿Qué relación hay entre el hígado y el intestino delgado?",
        options: [
          "El hígado produce bilis, que llega al intestino delgado y ayuda a digerir grasas",
          "El hígado mastica los alimentos",
          "El hígado almacena las heces en el intestino delgado",
          "El hígado transporta el alimento por el esófago"
        ],
        answer: 0,
        explanation: "El hígado produce bilis. La bilis llega al intestino delgado y ayuda a la digestión de las grasas.",
        learningTitle: "🫀 Hígado + intestino delgado",
        learningDetail: "Son órganos diferentes, pero trabajan juntos durante la digestión de las grasas.",
        visual: "🫀"
      },
      {
        stage: "grueso", category: "DESAFÍO FINAL",
        question: "¿Qué ocurre con el agua en el intestino grueso?",
        options: [
          "Se absorbe parte del agua",
          "Toda el agua se convierte en bilis",
          "El agua vuelve a la boca",
          "El agua se transforma en proteínas"
        ],
        answer: 0,
        explanation: "El intestino grueso absorbe agua y ayuda a transformar los desechos en heces.",
        learningTitle: "💧 Absorción de agua",
        learningDetail: "La absorción de agua es una de las funciones importantes del intestino grueso.",
        visual: "💧"
      },
      {
        stage: "ano", category: "DESAFÍO FINAL",
        question: "¿Qué etapa completa el proceso al final del recorrido?",
        options: ["Ingestión", "Digestión", "Absorción", "Eliminación"],
        answer: 3,
        explanation: "Después de aprovechar los nutrientes, el organismo elimina los desechos que no puede utilizar.",
        learningTitle: "🚪 Eliminación",
        learningDetail: "La eliminación es la etapa final del proceso digestivo.",
        visual: "🚪"
      },
      {
        stage: "ano", category: "DESAFÍO FINAL",
        question: "¿Cuál opción muestra correctamente el recorrido del alimento?",
        options: [
          "Boca → esófago → estómago → intestino delgado → intestino grueso → recto → ano",
          "Boca → intestino grueso → estómago → recto → esófago",
          "Estómago → boca → esófago → intestino delgado → ano",
          "Boca → hígado → esófago → intestino grueso → estómago"
        ],
        answer: 0,
        explanation: "Ese es el recorrido correcto por el tubo digestivo. El recto está al final del intestino grueso y almacena las heces antes de su eliminación por el ano.",
        learningTitle: "🗺️ ¡Recorrido completo!",
        learningDetail: "Recordá la secuencia: boca → esófago → estómago → intestino delgado → intestino grueso → recto → ano.",
        visual: "🗺️"
      }
    ]
  }
];

// Preguntas alternativas para el REPASO.
// No reemplazan el recorrido principal: aparecen únicamente después
// de una respuesta incorrecta, para evitar repetir exactamente la misma.
const reviewPool = [
  {
    category:"REPASO · BOCA",
    question:"¿Qué líquido se mezcla con el alimento en la boca?",
    options:["Saliva","Bilis","Jugo pancreático","Ácido estomacal"],
    answer:0,
    explanation:"La saliva se mezcla con el alimento en la boca y ayuda a iniciar la digestión de los almidones.",
    learningTitle:"💧 Saliva",
    learningDetail:"La saliva humedece el alimento y contiene una enzima que comienza a descomponer el almidón.",
    visual:"💧"
  },
  {
    category:"REPASO · ESÓFAGO",
    question:"¿Qué función cumple principalmente el esófago?",
    options:["Transportar el alimento al estómago","Absorber la mayoría de los nutrientes","Producir bilis","Almacenar las heces"],
    answer:0,
    explanation:"El esófago transporta el alimento desde la garganta hasta el estómago.",
    learningTitle:"〰️ Esófago",
    learningDetail:"Los movimientos peristálticos ayudan a llevar el alimento hacia el estómago.",
    visual:"〰️"
  },
  {
    category:"REPASO · ESTÓMAGO",
    question:"¿Qué mezcla el estómago con el alimento?",
    options:["Jugos digestivos","Aire de los pulmones","Bilis producida por la boca","Sangre"],
    answer:0,
    explanation:"El estómago mezcla el alimento con jugos digestivos, incluyendo ácido y enzimas.",
    learningTitle:"🥣 Estómago",
    learningDetail:"El estómago mezcla y continúa la descomposición del alimento.",
    visual:"🥣"
  },
  {
    category:"REPASO · INTESTINO DELGADO",
    question:"¿Qué función destaca en el intestino delgado?",
    options:["Absorber la mayoría de los nutrientes","Masticar los alimentos","Almacenar las heces","Producir saliva"],
    answer:0,
    explanation:"El intestino delgado absorbe la mayoría de los nutrientes de los alimentos.",
    learningTitle:"🧬 Intestino delgado",
    learningDetail:"Los nutrientes absorbidos pueden pasar al organismo para ser utilizados.",
    visual:"🧬"
  },
  {
    category:"REPASO · INTESTINO GRUESO",
    question:"¿Qué ayuda a hacer el intestino grueso?",
    options:["Absorber agua y formar las heces","Masticar los alimentos","Transportar el alimento desde la boca","Producir saliva"],
    answer:0,
    explanation:"El intestino grueso absorbe agua y ayuda a convertir los desechos en heces.",
    learningTitle:"🌀 Intestino grueso",
    learningDetail:"Parte del agua se absorbe allí y los desechos se transforman en heces.",
    visual:"🌀"
  },
  {
    category:"REPASO · ELIMINACIÓN",
    question:"¿Qué ocurre al final del recorrido de los desechos?",
    options:["Se eliminan del cuerpo","Vuelven al estómago","Se convierten en saliva","Regresan al esófago"],
    answer:0,
    explanation:"Los desechos que no pueden ser aprovechados se eliminan del cuerpo.",
    learningTitle:"🚪 Eliminación",
    learningDetail:"La eliminación completa el proceso digestivo.",
    visual:"🚪"
  },
  {
    category:"REPASO · HÍGADO",
    question:"¿Qué produce el hígado que participa en la digestión?",
    options:["Bilis","Saliva","Ácido estomacal","Jugo gástrico"],
    answer:0,
    explanation:"El hígado produce bilis, que ayuda a digerir las grasas.",
    learningTitle:"🫀 Hígado",
    learningDetail:"La bilis producida por el hígado llega al intestino delgado.",
    visual:"🫀"
  },
  {
    category:"REPASO · PÁNCREAS",
    question:"¿Qué órgano produce jugo pancreático?",
    options:["Páncreas","Esófago","Recto","Boca"],
    answer:0,
    explanation:"El páncreas produce jugo pancreático con enzimas que ayudan a digerir carbohidratos, grasas y proteínas.",
    learningTitle:"🧪 Páncreas",
    learningDetail:"El jugo pancreático se libera en el intestino delgado.",
    visual:"🧪"
  },
  {
    category:"REPASO · NUTRIENTES",
    question:"¿Qué puede hacer el cuerpo con los nutrientes?",
    options:["Utilizarlos para energía, crecimiento y reparación celular","Convertirlos todos en aire","Usarlos únicamente para formar heces","No utilizarlos"],
    answer:0,
    explanation:"El organismo utiliza los nutrientes para obtener energía, crecer y reparar células.",
    learningTitle:"⚡ Nutrientes",
    learningDetail:"Los nutrientes son necesarios para que el cuerpo funcione y se mantenga.",
    visual:"⚡"
  },
  {
    category:"REPASO · RECORRIDO",
    question:"¿Qué órgano aparece después del estómago en el recorrido principal?",
    options:["Intestino delgado","Boca","Esófago","Intestino grueso"],
    answer:0,
    explanation:"Después del estómago, el contenido pasa al intestino delgado.",
    learningTitle:"➡️ Siguiente etapa",
    learningDetail:"El recorrido continúa desde el estómago hacia el intestino delgado.",
    visual:"➡️"
  }
];

let currentLevel=0;
let currentQuestion=0;
let score=0;
let lives=3;
let streak=0;
let bestStreak=0;
let correctAnswers=0;
let wrongAnswers=0;
let answered=false;
let reviewQueue=[];
let askedReviewTexts=new Set();
let isReview=false;
let levelCorrectStart=0;
let levelScoreStart=0;

const $ = id => document.getElementById(id);

const screens = {
  start:$("start-screen"),
  game:$("game-screen"),
  food:$("food-screen"),
  fact:$("fact-screen"),
  level:$("level-screen"),
  result:$("result-screen")
};

function showScreen(screen){
  Object.values(screens).forEach(s=>s.classList.remove("active"));
  screen.classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}

function shuffle(array){
  const copy=[...array];
  for(let i=copy.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [copy[i],copy[j]]=[copy[j],copy[i]];
  }
  return copy;
}

function startGame(){
  currentLevel=0;
  currentQuestion=0;
  score=0;
  lives=3;
  streak=0;
  bestStreak=0;
  correctAnswers=0;
  wrongAnswers=0;
  answered=false;
  reviewQueue=[];
  askedReviewTexts=new Set();
  isReview=false;
  levelCorrectStart=0;
  levelScoreStart=0;

  showScreen(screens.game);
  resetJourney();
  loadQuestion();
}

function updateStats(){
  $("score").textContent=score;
  $("streak").textContent=streak;
  $("lives").textContent="❤️".repeat(lives)+"🖤".repeat(3-lives);
}

function getCurrentQuestion(){
  if(isReview) return reviewQueue[currentQuestion];
  return levels[currentLevel].questions[currentQuestion];
}

function loadQuestion(){
  const q=getCurrentQuestion();
  answered=false;

  $("level-label").textContent=isReview
    ? `Repaso · Nivel ${currentLevel+1}`
    : `Nivel ${currentLevel+1} · ${levels[currentLevel].name}`;

  const total=isReview ? reviewQueue.length : levels[currentLevel].questions.length;
  $("question-counter").textContent=isReview
    ? `Repaso · ${currentQuestion+1} de ${total}`
    : `Pregunta ${currentQuestion+1} de ${total}`;

  $("question-number").textContent=String(currentQuestion+1).padStart(2,"0");
  $("category").textContent=q.category;
  $("question-text").textContent=q.question;

  const pct=(currentQuestion/total)*100;
  $("progress-fill").style.width=`${pct}%`;
  $("progress-percent").textContent=`${Math.round(pct)}%`;

  const container=$("answers");
  container.innerHTML="";

  ["A","B","C","D"].forEach((letter,index)=>{
    const button=document.createElement("button");
    button.className="answer-btn";
    button.type="button";
    button.innerHTML=`<span class="answer-letter">${letter}</span><span>${q.options[index]}</span>`;
    button.addEventListener("click",()=>selectAnswer(index));
    container.appendChild(button);
  });

  $("feedback").className="feedback hidden";

  // Durante el repaso no hacemos retroceder el mapa.
  if(!isReview) setJourneyCurrent(q.stage);

  updateStats();
}

function selectAnswer(selected){
  if(answered) return;
  answered=true;

  const q=getCurrentQuestion();
  const buttons=[...document.querySelectorAll(".answer-btn")];
  buttons.forEach(b=>b.disabled=true);

  const correct=selected===q.answer;

  if(correct){
    correctAnswers++;
    streak++;
    bestStreak=Math.max(bestStreak,streak);

    const points=100+Math.max(0,(streak-1)*25);
    score+=points;

    buttons[selected].classList.add("correct");
    showFeedback(
      true,
      `¡CORRECTO! +${points} puntos ⭐`,
      q.explanation,
      q.learningTitle,
      q.learningDetail,
      q.visual
    );

    if(streak===3) showAchievement("🔥 ¡Racha de 3! Bonus de puntos.");
    if(streak===5) showAchievement("🔥🔥 ¡Racha increíble!");

    burstConfetti(14);
  }else{
    wrongAnswers++;
    lives=Math.max(0,lives-1);
    streak=0;

    buttons[selected].classList.add("wrong");
    buttons[q.answer].classList.add("correct");

    showFeedback(
      false,
      "¡Casi! 💡",
      `${q.explanation} La respuesta correcta era: "${q.options[q.answer]}".`,
      q.learningTitle,
      q.learningDetail,
      q.visual
    );

    // Si es una pregunta normal, guardamos un REPASO diferente.
    // Nunca se repite exactamente el mismo texto.
    if(!isReview){
      addReviewQuestion(q);
    }

    if(lives===0){
      $("next-btn").textContent="Ver resultado 🏁";
    }
  }

  updateStats();
}

function addReviewQuestion(original){
  const candidates=reviewPool.filter(
    q=>q.question!==original.question && !askedReviewTexts.has(q.question)
  );

  if(candidates.length){
    const chosen=candidates[Math.floor(Math.random()*candidates.length)];
    reviewQueue.push(chosen);
    askedReviewTexts.add(chosen.question);
  }
}

function showFeedback(correct,title,text,learningTitle,learningDetail,visual){
  const box=$("feedback");
  box.className=`feedback ${correct?"correct":"wrong"}`;

  $("feedback-icon").textContent=correct?"🎉":"💡";
  $("feedback-title").textContent=title;
  $("points-pop").textContent=correct
    ?"¡Tu racha suma puntos!"
    :"No pasa nada: leé la explicación y seguí aprendiendo.";

  $("feedback-text").textContent=text;
  $("learning-title").textContent=learningTitle;
  $("learning-detail").textContent=learningDetail;
  $("learning-illustration").textContent=visual;
}

function nextQuestion(){
  if(!answered) return;

  if(lives<=0){
    finishGame();
    return;
  }

  if(isReview){
    currentQuestion++;

    if(currentQuestion<reviewQueue.length){
      loadQuestion();
    }else{
      finishReview();
    }
    return;
  }

  currentQuestion++;

  if(currentQuestion<levels[currentLevel].questions.length){
    loadQuestion();
  }else{
    finishMainLevel();
  }
}

function finishMainLevel(){
  // El repaso va después del nivel principal, pero no altera el recorrido.
  if(reviewQueue.length){
    isReview=true;
    currentQuestion=0;
    showAchievement(`📚 Tenés ${reviewQueue.length} pregunta${reviewQueue.length===1?"":"s"} de repaso.`);
    showScreen(screens.game);
    loadQuestion();
  }else{
    completeLevel();
  }
}

function finishReview(){
  isReview=false;
  currentQuestion=0;
  reviewQueue=[];

  if(lives>0){
    completeLevel();
  }else{
    finishGame();
  }
}

function completeLevel(){
  const levelCorrect=correctAnswers-levelCorrectStart;
  const earned=score-levelScoreStart;
  const mainTotal=levels[currentLevel].questions.length;
  const accuracy=Math.round((levelCorrect/mainTotal)*100);

  $("level-emoji").textContent=levels[currentLevel].emoji;
  $("level-title").textContent=levels[currentLevel].title;
  $("level-message").textContent=levels[currentLevel].message;
  $("level-correct").textContent=levelCorrect;
  $("level-earned").textContent=earned;
  $("level-accuracy").textContent=`${Math.min(100,accuracy)}%`;
  $("level-stars").textContent=accuracy>=85?"⭐ ⭐ ⭐":accuracy>=60?"⭐ ⭐":"⭐";

  showScreen(screens.level);
  burstConfetti(22);
}

function continueLevel(){
  currentLevel++;

  if(currentLevel>=levels.length){
    finishGame();
    return;
  }

  currentQuestion=0;
  isReview=false;
  reviewQueue=[];
  askedReviewTexts=new Set();
  levelCorrectStart=correctAnswers;
  levelScoreStart=score;

  showScreen(screens.game);
  loadQuestion();
}

function finishGame(){
  $("final-score").textContent=score;
  $("correct-count").textContent=correctAnswers;
  $("wrong-count").textContent=wrongAnswers;
  $("best-streak").textContent=bestStreak;

  const total=correctAnswers+wrongAnswers;
  const accuracy=total?correctAnswers/total:0;

  let trophy="🌟";
  let title="¡Buen trabajo!";
  let message="Aprendiste muchísimo sobre el aparato digestivo.";
  let medal="🥉";
  let tip="Seguí aprendiendo y recordá cuidar tu alimentación, tomar agua y mantener hábitos saludables.";

  if(accuracy>=.9){
    trophy="🏆";
    title="¡Experto Digestivo!";
    medal="🥇";
    message="¡Impresionante! Demostraste que conocés muchísimo sobre el aparato digestivo.";
    tip="¡Excelente! Ya podés explicar el recorrido del alimento a otra persona.";
  }else if(accuracy>=.7){
    trophy="🎉";
    title="¡Gran explorador!";
    medal="🥈";
    message="¡Muy bien! Comprendiste gran parte del recorrido y las funciones del aparato digestivo.";
    tip="Repasá las preguntas que te costaron y volvé a intentarlo.";
  }

  if(lives===0){
    message="Te quedaste sin vidas, pero los errores también sirven para aprender.";
    tip="Volvé a jugar: ahora ya conocés las explicaciones y podés superar tu puntaje.";
  }

  $("result-trophy").textContent=trophy;
  $("result-title").textContent=title;
  $("result-message").textContent=message;
  $("medal").textContent=medal;
  $("final-tip").textContent=tip;

  showScreen(screens.result);
  burstConfetti(35);
}

// ==========================
// MAPA DEL RECORRIDO
// ==========================

function resetJourney(){
  document.querySelectorAll(".journey-stop").forEach(s=>s.classList.remove("visited","current"));
  document.querySelectorAll(".journey-track i").forEach(s=>s.classList.remove("visited"));
  setJourneyCurrent("boca");
}

function setJourneyCurrent(stage){
  const index=routeOrder.indexOf(stage);
  if(index<0) return;

  const stops=[...document.querySelectorAll(".journey-stop")];
  const connectors=[...document.querySelectorAll(".journey-track i")];

  stops.forEach((stop,i)=>{
    stop.classList.toggle("visited",i<index);
    stop.classList.toggle("current",i===index);
  });

  connectors.forEach((line,i)=>line.classList.toggle("visited",i<index));

  const labels={
    boca:"Estamos en la boca",
    esofago:"El alimento viaja por el esófago",
    estomago:"Estamos en el estómago",
    delgado:"Aquí se absorbe la mayoría de los nutrientes",
    grueso:"Aquí se absorbe agua y se forman las heces",
    ano:"Llegamos a la eliminación"
  };

  $("journey-status").textContent=labels[stage] || "";
}

// ==========================
// DESAFÍO EXTRA DE ALIMENTOS
// ==========================

const foodChallenges=[
  {emoji:"🍎",name:"Manzana",type:"reguladores",label:"regulador"},
  {emoji:"🥕",name:"Zanahoria",type:"reguladores",label:"regulador"},
  {emoji:"🥚",name:"Huevo",type:"constructores",label:"constructor"},
  {emoji:"🐟",name:"Pescado",type:"constructores",label:"constructor"},
  {emoji:"🍞",name:"Pan",type:"energeticos",label:"energético"},
  {emoji:"🥔",name:"Papa",type:"energeticos",label:"energético"}
];

let foodIndex=0;

function showFoodChallenge(){
  const item=foodChallenges[foodIndex%foodChallenges.length];

  $("food-emoji").textContent=item.emoji;
  $("food-name").textContent=item.name;
  $("food-feedback").className="food-feedback hidden";
  $("food-feedback").textContent="";
  $("food-next-btn").classList.add("hidden");

  document.querySelectorAll(".food-option").forEach(btn=>{
    btn.disabled=false;
    btn.classList.remove("correct","wrong");
  });

  showScreen(screens.food);
}

function selectFood(type,button){
  const item=foodChallenges[foodIndex%foodChallenges.length];

  document.querySelectorAll(".food-option").forEach(b=>b.disabled=true);

  if(type===item.type){
    score+=100;
    button.classList.add("correct");
    $("food-feedback").className="food-feedback good";
    $("food-feedback").textContent=`🎉 ¡Correcto! ${item.name} es un alimento ${item.label}. +100 puntos.`;
    burstConfetti(18);
  }else{
    button.classList.add("wrong");
    const correctButton=document.querySelector(`.food-option[data-type="${item.type}"]`);
    if(correctButton) correctButton.classList.add("correct");

    $("food-feedback").className="food-feedback bad";
    $("food-feedback").textContent=`💡 Casi. Para este juego, ${item.name} está clasificado como alimento ${item.label}.`;
  }

  $("food-next-btn").classList.remove("hidden");
  updateStats();
}

function nextFood(){
  foodIndex++;
  // El desafío de alimentos es un bonus, no altera el recorrido.
  completeLevel();
}

// ==========================
// EFECTOS
// ==========================

function showAchievement(text){
  const toast=$("achievement-toast");
  toast.textContent=text;
  toast.classList.remove("hidden");

  void toast.offsetWidth;
  toast.style.animation="none";
  void toast.offsetWidth;
  toast.style.animation="";

  setTimeout(()=>toast.classList.add("hidden"),2600);
}

function burstConfetti(amount=20){
  const container=$("confetti");
  container.innerHTML="";

  for(let i=0;i<amount;i++){
    const piece=document.createElement("span");
    piece.className="confetti";
    piece.style.left=`${Math.random()*100}%`;
    piece.style.setProperty("--x",`${(Math.random()-.5)*260}px`);
    piece.style.animationDelay=`${Math.random()*.25}s`;
    piece.style.transform=`rotate(${Math.random()*360}deg)`;
    piece.style.opacity=".95";
    container.appendChild(piece);
  }

  setTimeout(()=>container.innerHTML="",2200);
}

// ==========================
// EVENTOS
// ==========================

$("start-btn").addEventListener("click",startGame);
$("next-btn").addEventListener("click",nextQuestion);
$("fact-next-btn").addEventListener("click",()=>{});
$("continue-btn").addEventListener("click",continueLevel);
$("restart-btn").addEventListener("click",startGame);
$("food-next-btn").addEventListener("click",nextFood);

document.querySelectorAll(".food-option").forEach(button=>{
  button.addEventListener("click",()=>selectFood(button.dataset.type,button));
});

// El HTML conserva la pantalla de curiosidad por compatibilidad visual.
// En esta versión las curiosidades se integran como explicaciones
// verificadas después de las preguntas, evitando introducir datos
// que no sean necesarios para el nivel.
