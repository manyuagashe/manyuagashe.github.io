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
    <NavigationMenu className="fixed top-0 right-0 left-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <NavigationMenuList className="container mx-auto px-4 py-4 flex justify-end gap-8">
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(
              "text-gray-600 hover:text-carolina-blue transition-colors cursor-pointer text-sm font-medium"
            )}
            onClick={() => scrollToSection('about')}
          >
            about
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(
              "text-gray-600 hover:text-carolina-blue transition-colors cursor-pointer text-sm font-medium"
            )}
            onClick={() => scrollToSection('education')}
          >
            education
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(
              "text-gray-600 hover:text-carolina-blue transition-colors cursor-pointer text-sm font-medium"
            )}
            onClick={() => scrollToSection('skills')}
          >
            skills
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(
              "text-gray-600 hover:text-carolina-blue transition-colors cursor-pointer text-sm font-medium"
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
