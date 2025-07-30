let classifier;

async function loadModel() {
  classifier = await window.init(); 
}

async function runInference(audioData) {
  const result = await classifier.classify(audioData);
  document.getElementById('result').textContent =
    `Prediction: ${JSON.stringify(result.results[0])}`;
}

document.getElementById('record').addEventListener('click', async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    const chunks = [];

    recorder.ondataavailable = (e) => chunks.push(e.data);

    recorder.onstop = async () => {
      const blob = new Blob(chunks, { type: 'audio/webm' });
      const arrayBuffer = await blob.arrayBuffer();

      const audioContext = new AudioContext();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
      const rawData = audioBuffer.getChannelData(0); 
      runInference(rawData);
    };

    recorder.start();
    setTimeout(() => recorder.stop(), 2000);
  } catch (err) {
    document.getElementById('result').textContent = `Error: ${err.message}`;
    console.error(err);
  }
});

loadModel();
