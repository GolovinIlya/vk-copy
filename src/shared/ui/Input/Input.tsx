import cn from "classnames";
import cls from "./Input.module.scss";

export enum InputSize {
    L = "size-l",
}

export enum InputTheme {
    NORMAL = "normal",
}

interface InputProps {
    size?: string;
    theme?: string;
    placeholder: string;
}

export const Input = (props: InputProps) => {
    const { size, theme, placeholder } = props;

    const mods: Record<string, boolean> = {
        [cls[size]]: true,
        [cls[theme]]: true,
    };

    return (
        <input
            className={cn(cls.Input, mods)}
            placeholder={placeholder}
        ></input>
    );
};
