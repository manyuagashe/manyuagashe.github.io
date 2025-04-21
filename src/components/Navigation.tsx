
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
      <div className="container mx-auto flex justify-end">
        <NavigationMenuList className="ml-auto py-2 px-2">
          <NavigationMenuItem>
            <NavigationMenuLink
              className={cn(
                "text-gray-600 hover:text-carolina-blue transition-colors cursor-pointer text-xs font-medium px-2 py-1"
              )}
              onClick={() => scrollToSection('about')}
            >
              about
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={cn(
                "text-gray-600 hover:text-carolina-blue transition-colors cursor-pointer text-xs font-medium px-2 py-1"
              )}
              onClick={() => scrollToSection('education')}
            >
              Education
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={cn(
                "text-gray-600 hover:text-carolina-blue transition-colors cursor-pointer text-xs font-medium px-2 py-1"
              )}
              onClick={() => scrollToSection('Pastwork')}
            >
              Work Ex
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={cn(
                "text-gray-600 hover:text-carolina-blue transition-colors cursor-pointer text-xs font-medium px-2 py-1"
              )}
              onClick={() => scrollToSection('skills')}
            >
              skills
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={cn(
                "text-gray-600 hover:text-carolina-blue transition-colors cursor-pointer text-xs font-medium px-2 py-1"
              )}
              onClick={() => scrollToSection('contact')}
            >
              contact
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  );
};

export default Navigation;
