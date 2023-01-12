import cn from "classnames";
import { useTranslation } from "react-i18next";
import { Linka, LinkaTheme } from "shared/ui/Linka/Linka";
import cls from "./Footer.module.scss";

interface FooterProps {}

export const Footer = (props: FooterProps) => {
    const {} = props;

    const { t } = useTranslation();

    return (
        <div className={cn(cls.Footer)}>
            <div className={cls.container}>
                <div className={cls.vk}>
                    <Linka theme={LinkaTheme.UNDERLINE}>{t("Вконтакте")}</Linka>
                    <span className={cn(cls.text)}>© 2006-2022</span>
                </div>
                <div className={cls.about}>
                    <Linka theme={LinkaTheme.UNDERLINE}>
                        {t("О ВКонтакте")}
                    </Linka>
                    <Linka theme={LinkaTheme.UNDERLINE}>{t("Правила")}</Linka>
                    <Linka theme={LinkaTheme.UNDERLINE}>
                        {t("Для бизнеса")}
                    </Linka>
                    <Linka theme={LinkaTheme.UNDERLINE}>
                        {t("Разработчикам")}
                    </Linka>
                </div>
                <div className={cls.languages}>
                    <Linka theme={LinkaTheme.UNDERLINE}>Русский</Linka>
                    <Linka theme={LinkaTheme.UNDERLINE}>Українська</Linka>
                    <Linka theme={LinkaTheme.UNDERLINE}>English</Linka>
                    <Linka theme={LinkaTheme.UNDERLINE}>{t("все языки")}</Linka>
                </div>
            </div>
        </div>
    );
};
