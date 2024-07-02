import { ModeToggle } from "@/components/ModeToggle";
import SheetMenu from "@/components/SheetMenu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ReactElement, ReactNode } from "react";

import { pagesLink, socialLink } from "@/lib/constants";
import { Trans, useTranslation } from "react-i18next";
import { AiOutlineMail } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import LangToggle from "./LangToggle";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="h-16 w-full flex items-center justify-between fixed left-0 right-0 top-0 bg-background/90 z-10">
      <Link to="/" className="p-3 min-w-fit h-full">
        <img
          src="./images/logo.webp"
          className="object-cover min-w-fit h-full"
        />
      </Link>
      <div className="w-full max-lg:hidden">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>{t("header.pages")}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 focus:shadow-md"
                        to="/profile"
                      >
                        <Avatar>
                          <AvatarImage src="./images/icon.webp" />
                          <AvatarFallback>MR</AvatarFallback>
                        </Avatar>
                        <div className="mb-2 mt-4 text-lg font-medium">
                          みずまんま / Mizumanma
                        </div>
                        <p className="text-sm text-muted-foreground">
                          <Trans i18nKey="header.profileDesc" />
                        </p>
                        <div className="h-full flex items-end justify-end text-primary">
                          {t("header.showMore")}
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  {pagesLink.map((link) => (
                    <NavigationListItem
                      key={link.title}
                      icon={link.icon}
                      title={t(link.title)}
                      href={link.href}
                    >
                      {t(link.description)}
                    </NavigationListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                {t("header.socials")}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {socialLink.map((link) => (
                    <NavigationListItem
                      key={link.title}
                      icon={link.icon}
                      title={t(link.title)}
                      href={link.href}
                      blank={true}
                    >
                      {link.description && t(link.description)}
                    </NavigationListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex px-3 gap-3">
        <Link to="https://twitter.com/mizumizurice" target="_blank">
          <Button variant="ghost">
            <FaXTwitter size="20" />
          </Button>
        </Link>
        <div className="max-sm:hidden">
          <Link to="https://forms.gle/MFPSdxEjDCWXKdPV6" target="_blank">
            <Button>
              <AiOutlineMail size="20" />
              <div className="pl-2 max-lg:hidden">{t("header.contact")}</div>
            </Button>
          </Link>
        </div>
        <div className="max-lg:hidden">
          <ModeToggle />
        </div>
        <div className="max-lg:hidden">
          <LangToggle />
        </div>
        <div className="lg:hidden">
          <SheetMenu />
        </div>
      </div>
    </header>
  );
};

const NavigationListItem = ({
  title,
  icon,
  href,
  blank,
  children,
}: {
  icon: ReactElement;
  title: string;
  href: string;
  blank?: boolean;
  children?: ReactNode;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className="flex gap-3 rounded-md p-3 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          target={blank === true ? "_blank" : undefined}
        >
          {icon}
          <div>
            <div className="font-medium">{title}</div>
            {children && (
              <p className="line-clamp-2 text-sm text-muted-foreground">
                {children}
              </p>
            )}
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default Header;
