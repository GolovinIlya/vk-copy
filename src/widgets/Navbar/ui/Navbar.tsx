import cls from "./Navbar.module.scss";
import cn from "classnames";
import Logo from "shared/assets/icons/logo-vk.svg";
import { Link } from "react-router-dom";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { Search } from "shared/ui/Search/Search";
import i18n from "shared/config/i18n/i18n";
import { useTranslation } from "react-i18next";

const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
};

export const Navbar = () => {
    const { t } = useTranslation();
    return (
        <div className={cn(cls.navbar)}>
            <div className={cn(cls.container)}>
                <div className={cls.logo__search}>
                    <Link to='/' className={cn(cls.logo)}>
                        <Logo />
                        <span className={cls.logo__text}>{t("Вконтакте")}</span>
                    </Link>
                    <Search />
                </div>

                <Button
                    theme={ButtonTheme.CLEAR}
                    size={ButtonSize.M}
                    onClick={toggle}
                >
                    {t("Switch to English")}
                </Button>
            </div>
        </div>
    );
};
