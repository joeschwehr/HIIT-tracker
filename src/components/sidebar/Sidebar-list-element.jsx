import React from 'react';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import "./Sidebar-list-element.scss"
    
class SidebarListElement extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isEditing: false,
      editedExercise: this.props.item.name,
    }
  }

  handleRemove = () => {
    this.props.commonProps.removeExercise(this.props.item)
  }

  handleEdit = () => {
    this.setState({isEditing: true})
  }

  handleChange = (e) => {
    this.setState({editedExercise: e.target.value})
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.commonProps.editExercise({id: this.props.item.id, name: this.state.editedExercise})
    this.setState({isEditing: false})
  }

  render() {
      const {item, itemSelected, dragHandleProps} = this.props;
      const { isEditing, editedExercise } = this.state;
      const { handleChange, handleSubmit, handleEdit, handleRemove} = this;
      const scale = (itemSelected * 0.05) + 1;
      const shadow = itemSelected * 15 + 1;
      const dragged = itemSelected !== 0;
      
      return (
        isEditing ? 
          <form onSubmit={handleSubmit} className="list-element-form">
            <input 
              type="text"
              className="list-element-input" 
              value={editedExercise} 
              onChange={handleChange}
              autoFocus
            >
            </input>
            <button className="list-element-update-btn"> <CheckCircleIcon /> </button>
          </form>
        : 
          <div
            className={dragged ? "itemDragged" : "item"}
            style={{
              transform: `scale(${scale})`,
              boxShadow: `rgba(0, 0, 0, 0.2) 0px ${shadow}px ${2 * shadow}px 0px`
            }}
          >

            <div className="dragHandle" {...dragHandleProps}> 
              <DragIndicatorIcon fontSize="small"/> 
            </div>

            <div className="list-element-title">{ item.name }</div>
            <div className="list-element-icon-container">
              <div className="list-element-icon" onClick={handleEdit}> 
                <EditIcon fontSize="small"/>
              </div>
              <div className="list-element-icon" onClick={handleRemove}>
                <DeleteIcon fontSize="small"/>
              </div>
            </div>
          </div>
    );
  }
}

export default SidebarListElement;