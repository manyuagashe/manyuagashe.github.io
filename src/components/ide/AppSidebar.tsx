import { useState } from "react";
import { ChevronRight, ChevronDown, FileCode, Folder } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface FileItem {
  name: string;
  type: 'file' | 'folder';
  id: string;
  children?: FileItem[];
}

const fileStructure: FileItem[] = [
  {
    name: 'portfolio',
    type: 'folder',
    id: 'root',
    children: [
      { name: 'README.md', type: 'file', id: 'about' },
      { name: 'education.ts', type: 'file', id: 'education' },
      { name: 'skills.json', type: 'file', id: 'skills' },
      { name: 'experience.ts', type: 'file', id: 'work' },
      { name: 'contact.ts', type: 'file', id: 'contact' },
    ]
  }
];

interface AppSidebarProps {
  activeFile: string;
  onFileSelect: (fileId: string) => void;
}

export function AppSidebar({ activeFile, onFileSelect }: AppSidebarProps) {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['root']));

  const toggleFolder = (folderId: string) => {
    setExpandedFolders(prev => {
      const newSet = new Set(prev);
      if (newSet.has(folderId)) {
        newSet.delete(folderId);
      } else {
        newSet.add(folderId);
      }
      return newSet;
    });
  };

  const renderFileTree = (items: FileItem[], depth: number = 0) => {
    return items.map((item) => {
      const isExpanded = expandedFolders.has(item.id);
      const isActive = item.id === activeFile;

      if (item.type === 'folder') {
        return (
          <div key={item.id}>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => toggleFolder(item.id)}
                className="w-full justify-start gap-2 hover:bg-muted font-mono text-xs"
                style={{ paddingLeft: `${depth * 12 + 8}px` }}
              >
                {isExpanded ? (
                  <ChevronDown className="h-3 w-3 text-muted-foreground" />
                ) : (
                  <ChevronRight className="h-3 w-3 text-muted-foreground" />
                )}
                <Folder className="h-3 w-3 text-primary" />
                <span className="text-foreground">{item.name}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            {isExpanded && item.children && (
              <div>{renderFileTree(item.children, depth + 1)}</div>
            )}
          </div>
        );
      }

      return (
        <SidebarMenuItem key={item.id}>
          <SidebarMenuButton
            onClick={() => onFileSelect(item.id)}
            className={`w-full justify-start gap-2 hover:bg-muted font-mono text-xs ${
              isActive ? 'bg-muted text-primary' : 'text-muted-foreground'
            }`}
            style={{ paddingLeft: `${depth * 12 + 24}px` }}
          >
            <FileCode className="h-3 w-3" />
            <span>{item.name}</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      );
    });
  };

  return (
    <Sidebar className="border-r border-border bg-sidebar-background !top-9 !h-[calc(100vh-2.25rem)]">
      <SidebarContent className="p-0">
        <SidebarGroup>
          <SidebarGroupLabel className="px-3 py-2 text-[10px] uppercase tracking-wider text-muted-foreground font-mono border-b border-border">
            Explorer
          </SidebarGroupLabel>
          <SidebarGroupContent className="px-0">
            <SidebarMenu className="gap-0">
              {renderFileTree(fileStructure)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
