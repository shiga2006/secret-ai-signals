import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Square, RotateCcw } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ControlPanelProps {
  isRunning: boolean;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
  detectionTriggered: boolean;
}

const ControlPanel = ({ 
  isRunning, 
  onStart, 
  onStop, 
  onReset,
  detectionTriggered 
}: ControlPanelProps) => {
  return (
    <Card className="border-2 border-cyber-cyan bg-card/60 backdrop-blur-md p-6">
      <div className="space-y-4">
        <div className="text-center">
          <h2 className="font-mono text-2xl font-bold tracking-wider mb-2">
            🤖 GIBBERLINK CONTROL
          </h2>
          <p className="text-sm text-muted-foreground font-mono">
            Two AI agents communicating in secret
          </p>
        </div>

        {detectionTriggered && (
          <div className="animate-slide-up">
            <Badge 
              className="w-full justify-center py-2 text-xs font-mono border-cyber-green text-cyber-green bg-cyber-green/10"
              variant="outline"
            >
              ⚡ AI DETECTION TRIGGERED - SWITCHING TO PROTOCOL MODE
            </Badge>
          </div>
        )}

        <div className="flex gap-3 justify-center">
          {!isRunning ? (
            <Button
              onClick={onStart}
              className="bg-cyber-cyan text-cyber-cyan-foreground hover:bg-cyber-cyan/90 font-mono shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:shadow-[0_0_30px_rgba(0,255,255,0.8)] transition-all"
              size="lg"
            >
              <Play className="mr-2 h-5 w-5" />
              START CONVERSATION
            </Button>
          ) : (
            <Button
              onClick={onStop}
              variant="outline"
              className="border-destructive text-destructive hover:bg-destructive/10 font-mono"
              size="lg"
            >
              <Square className="mr-2 h-5 w-5" />
              STOP
            </Button>
          )}
          
          <Button
            onClick={onReset}
            variant="outline"
            className="border-cyber-purple text-cyber-purple hover:bg-cyber-purple/10 font-mono"
            size="lg"
          >
            <RotateCcw className="mr-2 h-5 w-5" />
            RESET
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
          <div className="text-center">
            <div className="text-2xl font-mono font-bold text-cyber-cyan">
              {isRunning ? "ACTIVE" : "IDLE"}
            </div>
            <div className="text-xs text-muted-foreground font-mono">Status</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-mono font-bold text-cyber-green">
              {detectionTriggered ? "PROTOCOL" : "ENGLISH"}
            </div>
            <div className="text-xs text-muted-foreground font-mono">Mode</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ControlPanel;
