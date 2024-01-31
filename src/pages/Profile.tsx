import { useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";

const Profile = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("profilePage.title")} / ${t("homePageTitle")}`;
  });
  return (
    <main className="pt-16 flex grow">
      <div className="p-3 flex flex-col gap-3 max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row max-md:items-center">
          <img
            src="./images/icon.webp"
            className="object-cover aspect-square w-80 h-80 rounded-full hover:scale-[1.02] transition-transform duration-500 ease-in-out"
          />
          <div className="p-3">
            <h1 className="text-3xl font-semibold mb-4">
              {t("profilePage.hello")}
            </h1>
            <div>
              <Trans i18nKey="profilePage.helloDesc" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
