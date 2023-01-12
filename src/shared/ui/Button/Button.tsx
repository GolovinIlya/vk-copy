import cn from "classnames";
import { ButtonHTMLAttributes, ReactNode } from "react";
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

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ButtonTheme;
    size?: ButtonSize;
    children?: ReactNode;
}

export const Button = (props: ButtonProps) => {
    const { theme, children, size, ...otherProps } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls[size]]: true,
    };

    return (
        <button className={cn(cls.Button, mods)} {...otherProps}>
            {children}
        </button>
    );
};
