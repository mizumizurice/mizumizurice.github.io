import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NotFound = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("notFoundPage.title")} / ${t("homePageTitle")}`;
  });
  return (
    <main className="pt-16 flex grow flex-col items-center justify-center">
      <div className="max-w-96">
        <h1 className="text-2xl font-semibold mb-1">{t("notFoundPage.msg")}</h1>
        <div className="mb-4">{t("notFoundPage.desc")}</div>
        <Link to="/">
          <Button> {t("notFoundPage.button")}</Button>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
