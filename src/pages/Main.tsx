import Banner from "@/components/main/Banner";
import LatestContents from "@/components/main/LatestContents";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Main = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("mainPage.title")} / ${t("homePageTitle")}`;
  });

  return (
    <main className="pt-16 grow">
      <Banner />
      <div className="p-3 flex flex-col gap-3 max-w-[1280px] mx-auto">
        <Alert>
          <AiOutlineInfoCircle />
          <AlertTitle>{t("mainPage.infomation")}</AlertTitle>
          <AlertDescription>
            <Trans i18nKey="mainPage.infomationDesc" />
          </AlertDescription>
        </Alert>
        <LatestContents />
      </div>
    </main>
  );
};

export default Main;
