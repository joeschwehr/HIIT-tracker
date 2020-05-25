import React from 'react';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import NotificationsOffOutlinedIcon from '@material-ui/icons/NotificationsOffOutlined';
import './Sidebar-list-element.scss';

class SidebarListElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            editedExercise: this.props.item.name,
        };
    }

    handleRemove = () => {
        this.props.commonProps.removeExercise(this.props.item);
    };

    handleEdit = () => {
        this.setState({ isEditing: true });
    };

    handleChange = (e) => {
        this.setState({ editedExercise: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.commonProps.editExercise({
            alert: this.props.item.alert,
            id: this.props.item.id,
            name: this.state.editedExercise,
        });
        this.setState({ isEditing: false });
    };

    handleVoxPopup = () => {
        this.props.commonProps.openVoxPopup(this.props.item);
    };

    render() {
        const { item, itemSelected, dragHandleProps } = this.props;
        const { isEditing, editedExercise } = this.state;
        const { handleChange, handleSubmit, handleEdit, handleRemove, handleVoxPopup } = this;
        const scale = itemSelected * 0.05 + 1;
        const shadow = itemSelected * 15 + 1;
        const dragged = itemSelected !== 0;

        return isEditing ? (
            <form onSubmit={handleSubmit} className='list-element-form'>
                <input
                    type='text'
                    className='list-element-input'
                    value={editedExercise}
                    onChange={handleChange}
                    autoFocus
                ></input>
                <button className='list-element-update-btn'>
                    {' '}
                    <CheckCircleIcon />{' '}
                </button>
            </form>
        ) : (
            <div
                className={dragged ? 'itemDragged' : 'item'}
                style={{
                    transform: `scale(${scale})`,
                    boxShadow: `rgba(0, 0, 0, 0.2) 0px ${shadow}px ${2 * shadow}px 0px`,
                }}
            >
                <div className='dragHandle' {...dragHandleProps}>
                    <DragIndicatorIcon fontSize='small' />
                </div>

                <div className='list-element-title'>{item.name}</div>
                <div className='list-element-icon-container'>
                    <div className='list-element-icon' onClick={handleEdit}>
                        <EditIcon fontSize='small' />
                    </div>
                    <div className='list-element-icon' onClick={handleRemove}>
                        <DeleteIcon fontSize='small' />
                    </div>
                    <div className='list-element-icon alert-icon' onClick={handleVoxPopup}>
                        {item.alert ? (
                            <NotificationsActiveIcon fontSize='small' />
                        ) : (
                            <NotificationsOffOutlinedIcon fontSize='small' />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default SidebarListElement;
