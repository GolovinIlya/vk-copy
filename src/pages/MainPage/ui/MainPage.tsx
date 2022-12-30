import cls from "./MainPage.module.scss";
import cn from "classnames";
import Android from "shared/assets/images/android.png";
import Apple from "shared/assets/images/apple.png";
import AndroidIcon from "shared/assets/icons/android.svg";
import AppleIcon from "shared/assets/icons/apple.svg";
import ArrowIcon from "shared/assets/icons/arrow-right.svg";
import Logo from "shared/assets/icons/logo-vk.svg";
import { Input, InputSize, InputTheme } from "shared/ui/Input/Input";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { Linka, LinkaTheme } from "shared/ui/Linka/Linka";

const MainPage = () => {
    return (
        <div className={cls.MainPage}>
            <div className={cls.container}>
                <div className={cls.mobileStore}>
                    <span className={cls.title}>
                        ВКонтакте для мобильных устройств
                    </span>
                    <span className={cls.sub_title}>
                        Установите официальное мобильное приложение ВКонтакте и
                        оставайтесь в курсе новостей ваших друзей, где бы вы ни
                        находились.
                    </span>
                    <div className={cls.imageLink}>
                        <a
                            href='https://play.google.com/store/apps/details?id=com.vkontakte.android'
                            target='_blank'
                        >
                            <img src={Android} alt='' className={cls.imgOne} />
                        </a>
                        <a
                            href='https://apps.apple.com/ru/app/id564177498'
                            target='_blank'
                        >
                            <img src={Apple} alt='' className={cls.imgTwo} />
                        </a>
                    </div>
                    <div className={cls.links}>
                        <a
                            href='https://play.google.com/store/apps/details?id=com.vkontakte.android'
                            target='_blank'
                            className={cls.link}
                        >
                            <AndroidIcon />
                            Google Play
                        </a>
                        <a
                            href='https://apps.rustore.ru/app/com.vkontakte.android'
                            target='_blank'
                            className={cls.link}
                        >
                            <AndroidIcon />
                            RuStore
                        </a>
                        <a
                            href='https://apps.apple.com/ru/app/id564177498'
                            target='_blank'
                            className={cls.link}
                        >
                            <AppleIcon />
                            App Store
                        </a>
                    </div>
                    <Linka
                        target='_blank'
                        theme={LinkaTheme.UNDERLINE}
                        icon={<ArrowIcon />}
                    >
                        Все продукты
                    </Linka>
                </div>
                <div className={cls.auth__reg}>
                    <div className={cls.auth}>
                        <Logo />
                        <span className={cls.title_auth}>Вход ВКонтакте</span>
                        <Input
                            size={InputSize.L}
                            theme={InputTheme.NORMAL}
                            placeholder='Телефон или почта'
                        />
                        <span className={cn(cls.auth_text, cls.text_one)}>
                            <Input type='checkbox' id='save' />
                            <label htmlFor='save'>Сохранить вход</label>
                        </span>
                        <Button theme={ButtonTheme.BLUE} size={ButtonSize.L}>
                            Войти
                        </Button>
                        <span className={cls.auth_text}>или</span>
                        <Button theme={ButtonTheme.WHITE} size={ButtonSize.L}>
                            QR-код
                        </Button>
                    </div>
                    <div className={cls.reg}>
                        <Button theme={ButtonTheme.GREEN} size={ButtonSize.L}>
                            Зарегистрироваться
                        </Button>
                        <span className={cls.auth_text}>
                            После регистрации вы получите доступ ко всем
                            возможностям VK ID
                        </span>
                        <Linka target='_blank' theme={LinkaTheme.UNDERLINE}>
                            Узнать больше
                        </Linka>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
