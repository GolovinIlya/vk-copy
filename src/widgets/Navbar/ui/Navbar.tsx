import cls from "./Navbar.module.scss";
import cn from "classnames";
import Logo from "shared/assets/icons/logo-vk.svg";
import { Link } from "react-router-dom";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { Search } from "shared/ui/Search/Search";

export const Navbar = () => {
    return (
        <div className={cn(cls.navbar)}>
            <div className={cn(cls.container)}>
                <div className={cls.logo__search}>
                    <Link to='/' className={cn(cls.logo)}>
                        <Logo />
                        <span className={cls.logo__text}>вконтакте</span>
                    </Link>
                    <Search />
                </div>

                <Button theme={ButtonTheme.CLEAR} size={ButtonSize.M}>
                    Switch to English
                </Button>
            </div>
        </div>
    );
};
