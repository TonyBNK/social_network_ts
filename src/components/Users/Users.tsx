import React from "react";
import c from './Users.module.css';
import {
    UsersDispatchPropsType,
    UsersStatePropsType
} from "../../redux/usersReducer";
import catUser from '../../images/catUser.png';
import axios from "axios";

type UsersPropsType = UsersStatePropsType & UsersDispatchPropsType;

export class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setUsersTotalCount(response.data.totalCount);
                });
        }
    }

    render = () => {
        const usersList = this.props.users.map(u => {
                const onClickHandler = () => {
                    this.props.followUnfollow(u.id);
                }

                return <div>
                    <div className={c.user} key={u.id}>
                        <img src={u.photos.small ? u.photos.small : catUser}
                             alt="ava"/>
                        <button onClick={onClickHandler}>
                            {u.followed ? 'Unfollow' : 'Follow'}
                        </button>
                        <div className={c.body}>
                            <div className={c.name}>{u.name}</div>
                            <div className={c.text}>{u.status}</div>
                            <div
                                className={c.address}>{'u.address.country'}, {'u.address.city'}</div>
                        </div>
                    </div>
                </div>
            }
        );

        const pagesCount = Math.ceil(this.props.usersTotalCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        const pagesList = pages.map(page => {
            const onChangeCurrentPageHandler = () => {
                this.props.changeCurrentPage(page);
                axios
                    .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
                    .then(response => this.props.setUsers(response.data.items));
            }

            return (
                <span
                    className={
                        this.props.currentPage === page
                            ? c.selectedPage
                            : ''
                    }
                    onClick={onChangeCurrentPageHandler}
                >
                {page}
            </span>
            )
        });

        return (
            <div className={c.users}>
                <div>
                    <h3>Users</h3>
                    {pagesList}
                </div>
                <span>
                    {usersList}
                </span>
                <button className={c.show}>Show more</button>
            </div>
        )
    }
}