import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button";
import cls from "./ErrorPage.module.scss";

const ErrorPage = () => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={cls.errorPage}>
      <p>{t('Произошла ошибка')}</p>
      <Button onClick={reloadPage}>{t('Перезагрузить страницу')}</Button>
    </div>
  );
};

export { ErrorPage };
