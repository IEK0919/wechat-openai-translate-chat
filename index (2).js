// Whisper API proxy example (e.g., OpenAI Whisper or local server)
const axios = require('axios');

exports.main = async (event) => {
  const audioUrl = event.audioUrl;
  try {
    const response = await axios.post('https://your-whisper-api.com/transcribe', {
      audio_url: audioUrl
    });
    return { text: response.data.text };
  } catch (err) {
    return { error: err.message };
  }
};
