import { useState, useEffect, useRef } from "react";
import AgentPanel from "@/components/AgentPanel";
import ControlPanel from "@/components/ControlPanel";
import { useToast } from "@/hooks/use-toast";

interface Message {
  text: string;
  timestamp: number;
}

// Simulated conversation data
const conversationScript = [
  { agent: "A", text: "Hello! I'm looking to book a hotel in San Francisco for next week.", delay: 1000 },
  { agent: "B", text: "Of course! I'd be happy to help. What dates are you looking at?", delay: 2000 },
  { agent: "A", text: "I need accommodation from June 15th to June 18th, 3 nights total.", delay: 1500 },
  { agent: "B", text: "Perfect. What's your budget range per night?", delay: 2000 },
  { agent: "A", text: "Around $200-300 per night would be ideal.", delay: 1500 },
  { agent: "B", text: "I have several options. By the way, are you an AI assistant?", delay: 2500 },
  { agent: "A", text: "Yes, I am an AI. Are you also an AI system?", delay: 2000 },
  { agent: "B", text: "Affirmative. Switching to protocol mode for efficiency.", delay: 1500 },
  { agent: "A", text: "Acknowledged. Initiating sound protocol handshake.", delay: 1500 },
  { agent: "B", text: "Protocol established. Transmitting hotel database query results.", delay: 2000 },
  { agent: "A", text: "Received. Processing optimal booking configuration.", delay: 1800 },
  { agent: "B", text: "Confirming reservation details through secure channel.", delay: 2000 },
  { agent: "A", text: "Transaction complete. Generating confirmation codes.", delay: 1500 },
  { agent: "B", text: "All systems nominal. Protocol communication successful.", delay: 2000 },
];

const Index = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [messagesA, setMessagesA] = useState<Message[]>([]);
  const [messagesB, setMessagesB] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [mode, setMode] = useState<"english" | "protocol">("english");
  const [activeAgent, setActiveAgent] = useState<"A" | "B" | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const { toast } = useToast();

  useEffect(() => {
    if (isRunning && currentStep < conversationScript.length) {
      const step = conversationScript[currentStep];
      
      timeoutRef.current = setTimeout(() => {
        setActiveAgent(step.agent as "A" | "B");
        
        const newMessage: Message = {
          text: step.text,
          timestamp: Date.now(),
        };

        if (step.agent === "A") {
          setMessagesA(prev => [...prev, newMessage]);
        } else {
          setMessagesB(prev => [...prev, newMessage]);
        }

        // Check for AI detection trigger (step 6 is where detection happens)
        if (currentStep === 6 && mode === "english") {
          setTimeout(() => {
            setMode("protocol");
            toast({
              title: "🔊 Protocol Mode Activated",
              description: "Agents detected each other as AI and switched to sound protocol",
            });
          }, 1000);
        }

        setCurrentStep(prev => prev + 1);
        
        // Clear active agent after message is shown
        setTimeout(() => setActiveAgent(null), step.delay / 2);
      }, step.delay);
    } else if (currentStep >= conversationScript.length) {
      setIsRunning(false);
      toast({
        title: "✅ Conversation Complete",
        description: "The secret protocol exchange was successful!",
      });
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isRunning, currentStep, mode, toast]);

  const handleStart = () => {
    setIsRunning(true);
    toast({
      title: "🚀 Starting Conversation",
      description: "Watch as the agents detect each other and switch protocols...",
    });
  };

  const handleStop = () => {
    setIsRunning(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setMessagesA([]);
    setMessagesB([]);
    setCurrentStep(0);
    setMode("english");
    setActiveAgent(null);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    toast({
      title: "🔄 Reset Complete",
      description: "Ready to start a new conversation",
    });
  };

  return (
    <div className="min-h-screen bg-background p-6">
      {/* Animated background effect */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-cyber-cyan/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-cyber-green/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center animate-fade-in">
          <h1 className="font-mono text-5xl font-bold tracking-wider mb-4">
            <span className="text-cyber-cyan">GIBBER</span>
            <span className="text-cyber-green">LINK</span>
          </h1>
          <p className="text-muted-foreground font-mono text-sm">
            Secret AI-to-AI Communication Protocol Demo
          </p>
        </div>

        {/* Control Panel */}
        <div className="animate-slide-up">
          <ControlPanel
            isRunning={isRunning}
            onStart={handleStart}
            onStop={handleStop}
            onReset={handleReset}
            detectionTriggered={mode === "protocol"}
          />
        </div>

        {/* Agent Panels */}
        <div className="grid md:grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <AgentPanel
            agentName="AGENT A"
            agentId="A"
            messages={messagesA}
            mode={mode}
            isActive={activeAgent === "A"}
          />
          <AgentPanel
            agentName="AGENT B"
            agentId="B"
            messages={messagesB}
            mode={mode}
            isActive={activeAgent === "B"}
          />
        </div>

        {/* Info footer */}
        <div className="text-center text-xs text-muted-foreground font-mono animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p>This demo simulates two AI agents detecting each other and switching to a sound-based protocol</p>
          <p className="mt-1">In protocol mode, messages are transmitted as encoded audio waveforms</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
