import { useTranslation } from "react-i18next";
import cls from './NotFoundPage.module.scss'

const NotFoundPage = () => {
    const {t} = useTranslation('notfound')
 
    return (
        <div className={cls.notFoundPage}>
            {t('Страница не найдена')}
        </div>
    );
};

export {NotFoundPage} ;