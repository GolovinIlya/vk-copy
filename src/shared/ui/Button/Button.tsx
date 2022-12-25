import cn from "classnames";
import { ReactNode } from "react";
import cls from "./Button.module.scss";

export enum ButtonTheme {
    CLEAR = "clear",
    BLUE = "blue",
    WHITE = "white",
    GREEN = "green",
}

export enum ButtonSize {
    M = "size-m",
    L = "size-l",
}

interface ButtonProps {
    theme?: ButtonTheme;
    size?: ButtonSize;
    children?: ReactNode;
}

export const Button = (props: ButtonProps) => {
    const { theme, children, size } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls[size]]: true,
    };

    return <button className={cn(cls.Button, mods)}>{children}</button>;
};
