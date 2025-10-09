import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ide/AppSidebar";
import { Editor } from "@/components/ide/Editor";
import { Console } from "@/components/ide/Console";
import { Menu } from "lucide-react";

const Index = () => {
  const [activeFile, setActiveFile] = useState('about');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="h-screen w-full flex flex-col bg-background">
        {/* Top Menu Bar */}
        <div className="h-9 bg-card border-b border-border flex items-center px-3 gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 hover:bg-muted rounded text-muted-foreground"
          >
            <Menu className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="text-foreground">File</span>
            <span className="text-muted-foreground">Edit</span>
            <span className="text-muted-foreground">View</span>
            <span className="text-muted-foreground">Help</span>
          </div>
          <div className="ml-auto text-xs font-mono text-muted-foreground">
            portfolio-v1.0.0
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-1 overflow-hidden">
          {sidebarOpen && (
            <AppSidebar activeFile={activeFile} onFileSelect={setActiveFile} />
          )}
          
          <div className="flex-1 flex flex-col">
            {/* Editor */}
            <div className="flex-1 overflow-hidden">
              <Editor activeFile={activeFile} />
            </div>

            {/* Console */}
            <div className="h-32 border-t border-border">
              <Console />
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="h-6 bg-primary border-t border-border flex items-center justify-between px-3 text-xs font-mono text-primary-foreground">
          <div className="flex items-center gap-4">
            <span>Ln 1, Col 1</span>
            <span>UTF-8</span>
          </div>
          <div className="flex items-center gap-4">
            <span>abhimanyu agashe</span>
            <span>manyu@unc.edu</span>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
