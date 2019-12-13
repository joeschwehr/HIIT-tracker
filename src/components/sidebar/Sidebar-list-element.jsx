import React from 'react';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { withStyles } from '@material-ui/core/styles';

import styles from "./Sidebar-list-element.styles.js"
    
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
      const { classes } = this.props;
      
      return (
        isEditing ? 
          <form onSubmit={handleSubmit} className={classes.form}>
            <input 
              type="text"
              className={classes.input} 
              value={editedExercise} 
              onChange={handleChange}
              autoFocus
            >
            </input>
            <button className={classes.updateBtn}> <CheckCircleIcon /> </button>
          </form>
        : 
          <div
            className={dragged ? classes.itemDragged : classes.item}
            style={{
              transform: `scale(${scale})`,
              boxShadow: `rgba(0, 0, 0, 0.2) 0px ${shadow}px ${2 * shadow}px 0px`
            }}
          >


            <div className={classes.dragHandle} {...dragHandleProps}> 
              <DragIndicatorIcon /> 
            </div>
            <div className={classes.title}>{ item.name }</div>
            <ListItemIcon className={classes.iconContainer}>
              <EditIcon 
                className={classes.editIcon} 
                fontSize="small"
                onClick={handleEdit}
              />
              <DeleteIcon
                className={classes.editIcon} 
                fontSize="small"
                onClick={handleRemove}
              />
            </ListItemIcon>
          </div>
    );
  }
}

export default withStyles(styles)(SidebarListElement);