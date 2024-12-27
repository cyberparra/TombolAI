

let tts;
let smorfia=["L'Italia", "La bambina", "La gatta", "Il maiale", "La mano", "Quello che guarda per terra", "Il vaso di creta", "La Madonna", "La figliolanza", "I fagioli", "I topi", "Il soldato", "Sant'Antonio", "L'ubriaco", "Il ragazzo", "Il sedere", "La disgrazia", "Il sangue", "La risata", "La festa", "La donna nuda", "Il pazzo", "Lo scemo", "Le guardie", "Il Natale", "Anna (nome)", "Il pitale", "Le tette", "Il padre dei bambini", "Le palle del tenente", "Il padrone di casa", "Il capitone", "Gli anni di Cristo", "La testa", "L'uccellino", "Le nacchere", "Il monaco", "Le botte", "La funa", "La noia", "Il coltello", "Il caffè", "La donna al balcone", "La prigione", "Il vino", "I soldi", "Il morto", "Il morto che parla", "La carne", "Il pane", "Il giardino", "La mamma", "Il vecchio", "Il cappello", "La musica", "La caduta", "Il gobbo", "Il regalo", "I peli", "Il lamento", "Il cacciatore", "Il morto ammazzato", "La sposa", "La marsina", "Il pianto", "Le due zitelle", "Il totano nella chitarra", "La zuppa cotta", "Il sottosopra", "Il palazzo", "L'ommo e' mmerda", "La meraviglia", "L'ospedale", "La grotta", "Pulcinella", "Le gambe delle donne", "I diavoli", "La bella figliuola", "Il ladro", "La bocca", "I fiori", "La tavola imbandita", "Il maltempo", "La chiesa", "L'anima del Purgatorio", "La bottega", "I pidocchi", "I caciocavalli", "La vecchia", "La paura"];

// precarica il modello AI text-to-speech 👇

function preload() {
  tts = loadTask("text-to-speech-alternative");
}


function setup() {
   
  
        
    tts.voice('Isabella');

}

function receive(lastExtracted){
  let outVoice=lastExtracted + "  "+smorfia[lastExtracted-1];
    tts.generate(outVoice);
}

function onAudio(outputAudio, details) {
    
    
     let audioElement = createAudio(details.url);
    
    
    //esegui automaticamente il play dell'audio
    audioElement.play();
  }

