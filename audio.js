let audioContext, processor, micStream;
let audioBuffer = [];

async function startMic() {
  try {
    console.log("[NoiseAware] Requesting mic...");

    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    micStream = await navigator.mediaDevices.getUserMedia({ audio: true });

    const source = audioContext.createMediaStreamSource(micStream);
    processor = audioContext.createScriptProcessor(4096, 1, 1);

    processor.onaudioprocess = (e) => {
      const input = e.inputBuffer.getChannelData(0);
      audioBuffer.push(...input);

      if (audioBuffer.length >= 16000) {
        console.log("[NoiseAware] Buffered 1s of audio");
        // Optionally send data to background
        // chrome.runtime.sendMessage({ type: "audio", payload: audioBuffer });
        audioBuffer = [];
      }
    };

    source.connect(processor);
    processor.connect(audioContext.destination);
  } catch (err) {
    console.error("[NoiseAware] Mic access failed:", err);
  }
}

window.addEventListener('DOMContentLoaded', startMic);
