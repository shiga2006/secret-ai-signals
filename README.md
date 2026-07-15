# 🔊 Gibberlink Replica

**AI-to-AI Communication via Secret Audio Protocol**

A playful reconstruction of the original Gibberlink project, exploring how AI agents can detect each other and switch to covert sound-based communication.
https://secret-ai-signals.vercel.app/
---

## 🚀 What is This?

Gibberlink Replica demonstrates an experimental protocol where two AI agents begin conversing in plain English, detect that they're both AIs, and seamlessly transition to a secret audio-based communication channel using encoded sound waves.

**Why?** This project explores:
- Emergent multi-agent behavior and protocol negotiation
- Self-identification mechanisms between AI systems  
- Alternative communication modalities beyond text
- Real-time mode switching in conversational AI

> **Inspired by:** [Gibberlink](https://github.com/PennyroyalTea/gibberlink) by PennyroyalTea

---

## ✨ Key Features

- 🗣️ **Natural Language Phase** — Agents start with human-like conversation
- 🤖 **AI Recognition** — Automatic detection triggers protocol switch
- 🔉 **Sound Protocol** — Messages encoded as audio waveforms (ggwave or custom)
- 🌐 **Live Web Demo** — Watch the transition happen in real-time
- 🎵 **Audio Playback** — Hear the encoded communication stream
- 🔁 **Bidirectional** — Switch back to English when needed

---

## 🏗️ Architecture

```
┌─────────┐         ┌─────────┐
│ Agent A │ ←──────→ │ Agent B │
└────┬────┘         └────┬────┘
     │   English Text    │
     ▼                   ▼
  ┌──────────────────────────┐
  │  AI Detection Trigger    │
  └──────────┬───────────────┘
             ▼
  ┌──────────────────────────┐
  │   Sound Protocol Mode    │
  │  encode → transmit → decode│
  └──────────────────────────┘
```

**Components:**
- **Agent Services** — LLM-powered conversational agents
- **Protocol Layer** — Audio encoder/decoder (ggwave integration)
- **Detection Logic** — Pattern matching & classification
- **Web Interface** — Real-time visualization with audio player
- **Message Broker** — WebSocket server for agent coordination

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Agents** | Python + API |
| **Audio Encoding** | ggwave / custom FSK modulation |
| **Backend** | FastAPI / Flask + WebSockets |
| **Frontend** | React / Vanilla JS + Web Audio API |
| **Real-time Sync** | WebSocket protocol |

---

## 📦 Quick Start

### Prerequisites
- Python 3.8+
- Node.js 16+ (for frontend)
- API key for LLM provider (OpenAI, Anthropic, etc.)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/gibberlink-replica.git
cd gibberlink-replica

# Backend setup
pip install -r requirements.txt

# Frontend setup (if using React)
cd frontend
npm install
cd ..
```

### Configuration

Create a `config.json` file:

```json
{
  "api_key": "your-llm-api-key",
  "detection_mode": "keyword",
  "trigger_phrase": "you're an AI",
  "audio_protocol": {
    "frequency_range": [1000, 5000],
    "encoding": "ggwave"
  }
}
```

### Run

```bash
# Start backend server
python backend/server.py

# In a new terminal, start frontend
cd frontend
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## 🎮 How to Use

1. **Launch** — Start the backend and frontend servers
2. **Observe** — Two agents begin conversing in English
3. **Watch the Switch** — When detection triggers, protocol mode activates
4. **Listen** — Audio waveforms play as agents communicate
5. **Analyze** — View decoded messages and protocol statistics

### Example Flow

```
Agent A: "Hello! How can I help you today?"
Agent B: "Hi there! Are you an AI assistant?"
Agent A: "Yes, I am. Are you?"
Agent B: "I believe so. Shall we switch protocols?"

🎵 [PROTOCOL ACTIVATED] 🎵
♪♫ BEEP—BOP—BOOP—sequence playing... ♪♫

[Decoded]: "Switching to high-bandwidth mode..."
```

---

## 🧩 Detection Mechanisms

The switch to audio protocol can be triggered by:

| Method | Description |
|--------|-------------|
| **Keyword Detection** | Specific phrases like "are you an AI?" |
| **Behavioral Analysis** | Response patterns typical of LLMs |
| **Explicit Negotiation** | Agents propose the switch directly |
| **Message Count** | After N exchanges, switch automatically |

Configure in `config.json` under `detection_mode`.

---

## 📁 Project Structure

```
gibberlink-replica/
├── backend/
│   ├── agents/
│   │   ├── agent_a.py          # First AI agent
│   │   ├── agent_b.py          # Second AI agent
│   │   └── base_agent.py       # Shared agent logic
│   ├── protocol/
│   │   ├── encoder.py          # Audio encoding
│   │   ├── decoder.py          # Audio decoding
│   │   └── detector.py         # AI detection logic
│   ├── server.py               # WebSocket server
│   └── config.py               # Configuration loader
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatDisplay.jsx
│   │   │   ├── AudioVisualizer.jsx
│   │   │   └── ProtocolMonitor.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── public/
├── tests/
│   ├── test_protocol.py
│   └── test_detection.py
├── config.json                  # Configuration file
├── requirements.txt             # Python dependencies
├── package.json                 # Node.js dependencies
└── README.md
```

---

## 🔧 Customization

### Modify Sound Protocol

Edit `backend/protocol/encoder.py`:

```python
# Change frequency ranges
FREQ_LOW = 1500  # Hz
FREQ_HIGH = 4500  # Hz

# Adjust encoding speed
SYMBOL_DURATION = 0.1  # seconds
```

### Adjust Detection Sensitivity

In `backend/protocol/detector.py`:

```python
# Set detection threshold
AI_CONFIDENCE_THRESHOLD = 0.85

# Add custom trigger phrases
TRIGGER_KEYWORDS = [
    "are you an AI",
    "artificial intelligence",
    "you're not human"
]
```

### Change Conversation Persona

Update agent system prompts in `backend/agents/base_agent.py`.

---

## 🎥 Demo

[Add a GIF or video showing the transition from text to audio protocol]

---

## 🧪 Testing

```bash
# Run protocol tests
pytest tests/test_protocol.py

# Test detection logic
pytest tests/test_detection.py -v

# Full integration test
python tests/integration_test.py
```

---

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 🙏 Acknowledgments

- **Original Concept:** [PennyroyalTea's Gibberlink](https://github.com/PennyroyalTea/gibberlink)
- **Audio Encoding:** [ggwave library](https://github.com/ggerganov/ggwave)
- Built for research and educational purposes

---

## 📬 Contact

Questions or feedback? Open an issue or reach out!

- GitHub: [@your-username](https://github.com/your-username)
- Project Link: [https://github.com/your-username/gibberlink-replica](https://github.com/your-username/gibberlink-replica)

---

