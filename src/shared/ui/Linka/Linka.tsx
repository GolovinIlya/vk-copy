import cn from "classnames";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import cls from "./Linka.module.scss";

export enum LinkaTheme {
    UNDERLINE = "underline",
}

interface LinkaProps {
    theme?: LinkaTheme;
    target?: string;
    children: ReactNode;
    to?: string;
    icon?: any;
}

export const Linka = (props: LinkaProps) => {
    const { theme, target, children, to, icon } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
    };

    return (
        <Link className={cn(cls.Linka, mods)} to={to} target={target}>
            {children}
            {icon}
        </Link>
    );
};
