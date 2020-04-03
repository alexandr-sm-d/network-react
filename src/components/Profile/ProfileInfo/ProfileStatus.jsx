import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({ editMode: true })
    }

    deactivateEditMode() {
        this.setState({ editMode: false });
        this.props.updateUserStatus(this.state.status);
    }

    changeStatus(event) {
        this.setState({
            status: event.currentTarget.value,
        })
    }

    componentDidUpdate(prieviousProps, previousState) {
        if (prieviousProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
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
                            value={this.state.status}
                            onChange={this.changeStatus.bind(this)} />}
                </div>
            </div>
        )
    }
}

export default ProfileStatus;