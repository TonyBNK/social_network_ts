import React from "react";
import c from './ProfileStatus.module.css';

class ProfileStatus extends React.Component{
    state = {
        isEdit: false
    }

    setEditMode = () => {
        this.setState({
            isEdit: !this.state.isEdit
        })
    }

    render() {
        return (
            <div className={c.profileStatus}>
                {
                    this.state.isEdit
                        ? <div>
                            <input value={'Hello there'}
                                   onBlur={this.setEditMode}
                                   autoFocus/>
                        </div>
                        : <div>
                        <span onDoubleClick={this.setEditMode}>
                            {'Hello there'}
                        </span>
                        </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;