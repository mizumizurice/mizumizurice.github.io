import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { pagesLink, socialLink } from "@/lib/constants";
import { ReactElement, ReactNode } from "react";
import { Trans, useTranslation } from "react-i18next";
import { AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import LangToggle from "./LangToggle";
import { ModeToggle } from "./ModeToggle";

const SheetMenu = () => {
  const { t } = useTranslation();

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost">
          <AiOutlineMenu size="20" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full max-w-[400px] overflow-y-scroll flex flex-col">
        <div className="flex gap-3">
          <Link to="https://forms.gle/MFPSdxEjDCWXKdPV6" target="_blank">
            <Button>
              <AiOutlineMail size="20" />
              <div className="pl-2">{t("header.contact")}</div>
            </Button>
          </Link>
          <ModeToggle />
          <LangToggle />
        </div>
        <div className="flex flex-col gap-3 grow">
          <ul className="grid gap-3">
            <li className="row-span-3">
              <SheetClose asChild>
                <Link
                  className="flex h-full w-full select-none flex-col rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 focus:shadow-md"
                  to="/profile"
                >
                  <Avatar className="w-16 h-16 aspect-square">
                    <AvatarImage src="./images/icon.webp" />
                    <AvatarFallback>MR</AvatarFallback>
                  </Avatar>
                  <div className="mb-2 mt-4 text-lg font-medium">
                    みずまんま
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <Trans i18nKey="header.profileDesc" />
                  </p>
                  <div className="h-full flex items-end justify-end text-primary">
                    {t("header.showMore")}
                  </div>
                </Link>
              </SheetClose>
            </li>
            {pagesLink.map((link) => (
              <SheetListItem
                key={link.title}
                icon={link.icon}
                title={t(link.title)}
                href={link.href}
              >
                {link.description && t(link.description)}
              </SheetListItem>
            ))}
          </ul>
          <Separator />
          <h1 className="text-xl font-semibold">ソーシャル</h1>
          <ul className="grid gap-3">
            {socialLink.map((link) => (
              <SheetListItem
                key={link.title}
                icon={link.icon}
                title={t(link.title)}
                href={link.href}
                blank={true}
              >
                {link.description && t(link.description)}
              </SheetListItem>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center p-2">
          <SheetClose asChild>
            <Link to="/">
              <img
                src="./images/logo.webp"
                className="h-10 object-cover mb-2"
              />
            </Link>
          </SheetClose>
          <Link to="https://forms.gle/MFPSdxEjDCWXKdPV6" target="_blank">
            <div className="text-sm underline">お問い合わせ</div>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const SheetListItem = ({
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
      <SheetClose asChild>
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
      </SheetClose>
    </li>
  );
};

export default SheetMenu;
