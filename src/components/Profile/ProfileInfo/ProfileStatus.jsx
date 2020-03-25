import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: 'local state status',
    }

    componentWillMount() {
        alert(this.props.status)
    }

    activateEditMode = () => {
        console.log(this)
        this.setState({ editMode: true })
    }

    deactivateEditMode() {
        this.setState({ editMode: false });
        this.props.updateUserStatus(this.state.status);
    }

    render() {
        return (
            <div>
                <div>
                    {!this.state.editMode &&
                        <span onDoubleClick={this.activateEditMode}>
                            {this.props.status}</span>}
                </div>
                <div>
                    {this.state.editMode &&
                        <input type="text"
                            onBlur={this.deactivateEditMode.bind(this)}
                            autoFocus={true}
                            value={this.props.status} />}
                </div>
            </div>
        )
    }
}

export default ProfileStatus;