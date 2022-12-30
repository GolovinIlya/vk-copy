import cn from "classnames";
import { Linka, LinkaTheme } from "shared/ui/Linka/Linka";
import cls from "./Footer.module.scss";

interface FooterProps {}

export const Footer = (props: FooterProps) => {
    const {} = props;
    return (
        <div className={cn(cls.Footer)}>
            <div className={cls.container}>
                <div className={cls.vk}>
                    <Linka theme={LinkaTheme.UNDERLINE}>Вконтакте</Linka>
                    <span className={cn(cls.text)}>© 2006-2022</span>
                </div>
                <div className={cls.about}>
                    <Linka theme={LinkaTheme.UNDERLINE}>О ВКонтакте</Linka>
                    <Linka theme={LinkaTheme.UNDERLINE}>Правила</Linka>
                    <Linka theme={LinkaTheme.UNDERLINE}>Для бизнеса</Linka>
                    <Linka theme={LinkaTheme.UNDERLINE}>Разработчикам</Linka>
                </div>
                <div className={cls.languages}>
                    <Linka theme={LinkaTheme.UNDERLINE}>Русский</Linka>
                    <Linka theme={LinkaTheme.UNDERLINE}>Українська</Linka>
                    <Linka theme={LinkaTheme.UNDERLINE}>English</Linka>
                    <Linka theme={LinkaTheme.UNDERLINE}>все языки</Linka>
                </div>
            </div>
        </div>
    );
};
