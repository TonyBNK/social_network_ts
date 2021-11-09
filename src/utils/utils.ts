import {
    FollowUnfollowFlowAPIMethodType,
    FollowUnfollowFlowDispatchType,
    UsersACType,
    UserType
} from "../types/types";
import {setFollowingProcess} from "../redux/actions/actions";


export const followUnfollowFlow = async (
    dispatch: FollowUnfollowFlowDispatchType,
    userId: number,
    apiMethod: FollowUnfollowFlowAPIMethodType,
    actionCreator: UsersACType
) => {
    try {
        dispatch(setFollowingProcess(true, userId));
        const data = await apiMethod(userId);
        if (data && data.resultCode === 0) {
            dispatch(actionCreator(userId));
        }
        dispatch(setFollowingProcess(false, userId));
    } catch (e) {
        console.log(e);
    }
}

export const updateObjectInArray = (items: Array<UserType>, itemId: number, objPropName: 'id', newObjProps: {followed: boolean}) => {
    return items.map(u =>
        u[objPropName] === itemId ? {...u, ...newObjProps} : u
    )
}