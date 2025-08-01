


let audioContext, processor, micStream;
const EI_REQUIRED_SAMPLES = 16000; // adjust if your model expects a different length
let audioBuffer = [];

async function startRealtimeAudio() {
  try {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const source = audioContext.createMediaStreamSource(micStream);
    processor = audioContext.createScriptProcessor(4096, 1, 1);

    processor.onaudioprocess = (e) => {
      const input = e.inputBuffer.getChannelData(0);
      // Buffer audio until we have enough samples
      audioBuffer.push(...input);
      // Optionally, you can process or send the buffer elsewhere when it reaches a certain size
      // For now, just keep buffering
    };

    source.connect(processor);
    processor.connect(audioContext.destination);
    document.getElementById('result').textContent = 'Listening and buffering audio...';
  } catch (err) {
    document.getElementById('result').textContent = `Error: ${err.message}`;
    console.error("Mic access failed:", err.name, err.message);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  startRealtimeAudio();
});

function requestMicrophonePermission() {
  chrome.permissions.request({ permissions: ['microphone'] }, (granted) => {
    if (granted) {
      console.log("Permission granted. Now requesting audio...");
      startRealtimeAudio(); // call your audio logic here
    } else {
      console.warn("User denied microphone permission.");
      document.getElementById('result').textContent = "Microphone permission denied.";
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  // Optional: Delay to give Chrome time to show popup
  setTimeout(() => {
    requestMicrophonePermission();
  }, 300);
});