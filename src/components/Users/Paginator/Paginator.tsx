import React from "react";
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

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const pagesList = pages.map(p => {
        const onChangeCurrentPageHandler = () => {
            requestUsers(p, pageSize);
        }

        return (
            <span
                className={currentPage === p ? c.pageSelected : ''}
                onClick={onChangeCurrentPageHandler}
            >
                {p}
            </span>
        )
    });

    return (
        <div>
            {pagesList}
        </div>
    )
});