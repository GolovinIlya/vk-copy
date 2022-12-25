import cn from "classnames";
import cls from "./Search.module.scss";
import SearchIcon from "shared/assets/icons/search.svg";

interface SearchProps {}

export const Search = (props: SearchProps) => {
    const {} = props;
    return (
        <div className={cls.searchBlock}>
            <SearchIcon className={cn(cls.searchIcon)} />
            <input className={cn(cls.Search)} placeholder='Поиск'></input>
        </div>
    );
};
