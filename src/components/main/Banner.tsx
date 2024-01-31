import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { AiOutlineMail } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-background w-full h-[220px] md:h-[400px] lg:h-[600px] flex justify-center">
      <div className="clip-path-bg relative h-full flex-1 max-lg:hidden">
        <div className="absolute bg-background/40 w-full h-full" />
        <img src="./images/bg.webp" className="w-full h-full object-cover" />
      </div>
      <div className="relative flex items-center justify-center max-lg:w-full">
        <div className="absolute bg-background/40 w-full h-full lg:hidden" />
        <div className="flex flex-col justify-center items-center max-lg:absolute max-lg:bottom-2 max-lg:right-2 p-2 bg-background/90 rounded-md">
          <img
            src="./images/logo.webp"
            className="h-12 md:h-16 lg:h-24 2xl:h-32 object-cover"
          />
          <div className="pt-6 flex gap-3 max-lg:hidden">
            <Link to="https://twitter.com/mizumizurice" target="_blank">
              <Button variant="ghost">
                <FaXTwitter size="20" />
              </Button>
            </Link>
            <Link to="https://forms.gle/MFPSdxEjDCWXKdPV6" target="_blank">
              <Button variant="outline">
                <AiOutlineMail size="20" />
                <div className="pl-2 max-lg:hidden">
                  {t("mainPage.contact")}
                </div>
              </Button>
            </Link>
          </div>
        </div>
        <img
          src="./images/bg.webp"
          className="w-full h-full object-cover lg:hidden"
        />
      </div>
    </div>
  );
};

export default Banner;
