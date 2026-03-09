import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button";
import { FC } from "react";

interface Props {
  className?: string;
}

const LangSwitcher: FC<Props> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    const lang = i18n.language === "ru" ? "en" : "ru";
    i18n.changeLanguage(lang);
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggle}
      className={classNames('', {}, [className])}
    >
      {t("Язык")}
    </Button>
  );
};

export { LangSwitcher };
