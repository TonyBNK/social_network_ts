import React, {useState} from "react";
import c from "./Paginator.module.scss";


type PaginatorPropsType = {
    currentPage: number
    pageSize: number
    usersTotalCount: number
    requestUsers: (page: number, pageSize: number) => void
}
export const Paginator: React.FC<PaginatorPropsType> = React.memo((
    {
        currentPage,
        pageSize,
        usersTotalCount,
        requestUsers,
    }
) => {
    const pagesCount = Math.ceil(usersTotalCount / pageSize);
    const portionSize = 10;

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    const onPreviousClick = () => {
        setPortionNumber(portionNumber - 1);
    }
    const onNextClick = () => {
        setPortionNumber(portionNumber + 1);
    }

    const pagesList = pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map(p => {
        const onChangeCurrentPageHandler = () => {
            requestUsers(p, pageSize);
        }

        return (
            <span
                className={currentPage === p ? c.pageSelected : ''}
                onClick={onChangeCurrentPageHandler}
                style={{margin: '0 5px'}}
            >
                {p}
            </span>
        )
    });

    return (
        <div className={c.paginatorContainer}>
            <button
                onClick={onPreviousClick}
                disabled={portionNumber <= 1}>
                previous
            </button>
            {pagesList}
            <button
                onClick={onNextClick}
                disabled={portionCount <= portionNumber}>
                next
            </button>
        </div>
    )
});