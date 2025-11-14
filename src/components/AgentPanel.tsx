import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Message {
  text: string;
  timestamp: number;
}

interface AgentPanelProps {
  agentName: string;
  agentId: "A" | "B";
  messages: Message[];
  mode: "english" | "protocol";
  isActive: boolean;
}

const AgentPanel = ({ agentName, agentId, messages, mode, isActive }: AgentPanelProps) => {
  return (
    <Card 
      className={cn(
        "relative overflow-hidden border-2 bg-card/60 backdrop-blur-md transition-all duration-500",
        mode === "protocol" 
          ? "border-cyber-green shadow-[0_0_30px_rgba(0,255,170,0.3)]" 
          : "border-cyber-cyan shadow-[0_0_20px_rgba(0,255,255,0.2)]",
        isActive && "animate-pulse-glow"
      )}
    >
      {/* Header */}
      <div className="border-b border-border/50 bg-card/80 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div 
              className={cn(
                "h-3 w-3 rounded-full",
                isActive ? "animate-pulse bg-cyber-green" : "bg-muted"
              )}
            />
            <h3 className="font-mono text-lg font-bold tracking-wider">
              {agentName}
            </h3>
          </div>
          <Badge 
            variant="outline" 
            className={cn(
              "font-mono text-xs",
              mode === "protocol" 
                ? "border-cyber-green text-cyber-green" 
                : "border-cyber-cyan text-cyber-cyan"
            )}
          >
            {mode === "protocol" ? "🔊 PROTOCOL MODE" : "💬 ENGLISH MODE"}
          </Badge>
        </div>
      </div>

      {/* Messages Area */}
      <div className="h-96 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, idx) => (
          <div 
            key={idx}
            className="animate-slide-up"
          >
            {mode === "english" ? (
              <div className="rounded-lg bg-muted/30 p-3 font-mono text-sm text-foreground">
                {msg.text}
              </div>
            ) : (
              <div className="space-y-2">
                <div className="font-mono text-xs text-cyber-green opacity-70">
                  [ENCRYPTED TRANSMISSION]
                </div>
                <div className="flex h-16 items-center gap-1 rounded-lg bg-black/40 p-2">
                  {/* Waveform visualization */}
                  {Array.from({ length: 40 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-full bg-cyber-green"
                      style={{
                        height: `${Math.random() * 100}%`,
                        opacity: 0.6 + Math.random() * 0.4,
                        animation: `pulse-glow ${1 + Math.random()}s ease-in-out infinite`,
                        animationDelay: `${i * 0.05}s`
                      }}
                    />
                  ))}
                </div>
                <div className="font-mono text-xs text-cyber-green/50">
                  {msg.text.split('').map((char, i) => 
                    String.fromCharCode(33 + (char.charCodeAt(0) % 94))
                  ).join('')}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Active indicator overlay */}
      {isActive && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-cyan/10 to-transparent animate-pulse" />
        </div>
      )}
    </Card>
  );
};

export default AgentPanel;
