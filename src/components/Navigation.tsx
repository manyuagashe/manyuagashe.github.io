
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <NavigationMenu
      className={cn(
        "fixed top-0 right-0 z-50 bg-glass-bg backdrop-blur-glass border border-glass-border shadow-glass w-fit flex justify-end"
      )}
      style={{ left: "auto", marginLeft: "auto", maxWidth: "none" }}
    >
      <NavigationMenuList className="py-2 px-2 flex justify-end space-x-1">
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(
              "text-gray-600 hover:text-carolina-blue hover:scale-105 transition-all duration-300 cursor-pointer text-xs font-medium px-2 py-1 hover:bg-carolina-blue/10 rounded-md"
            )}
            onClick={() => scrollToSection('about')}
          >
            about
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(
              "text-gray-600 hover:text-carolina-blue hover:scale-105 transition-all duration-300 cursor-pointer text-xs font-medium px-2 py-1 hover:bg-carolina-blue/10 rounded-md"
            )}
            onClick={() => scrollToSection('education')}
          >
            Education
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(
              "text-gray-600 hover:text-carolina-blue hover:scale-105 transition-all duration-300 cursor-pointer text-xs font-medium px-2 py-1 hover:bg-carolina-blue/10 rounded-md"
            )}
            onClick={() => scrollToSection('Pastwork')}
          >
            Work Ex
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(
              "text-gray-600 hover:text-carolina-blue hover:scale-105 transition-all duration-300 cursor-pointer text-xs font-medium px-2 py-1 hover:bg-carolina-blue/10 rounded-md"
            )}
            onClick={() => scrollToSection('skills')}
          >
            skills
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(
              "text-gray-600 hover:text-carolina-blue hover:scale-105 transition-all duration-300 cursor-pointer text-xs font-medium px-2 py-1 hover:bg-carolina-blue/10 rounded-md"
            )}
            onClick={() => scrollToSection('contact')}
          >
            contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
