import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { taskEdit } from "../../redux/reduxapp/actions";
import "./Edittask.css";

const EditTask = ({ taskedit }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [etext, setEtext] = useState(taskedit.action);
  const dispatch = useDispatch();
  const handleEdit = (e) => {
    e.preventDefault();
    const editedTask = {
      id: taskedit.id,
      action: etext,
      isDone: taskedit.isDone,
    };
    dispatch(taskEdit(editedTask));
    handleClose();
  };

  return (
    <div className="EditTask-container">
      <button onClick={handleShow} className="EditTask-button">Edit</button>

      {show && (
        <div className="EditTask-modal">
          <div>
            <h3 className="EditTask-title">Edit Task Information</h3>
          </div>
          <div>
            <form onSubmit={handleEdit} className="EditTask-form">
              <input
                type="text"
                value={etext}
                onChange={(e) => setEtext(e.target.value)}
                className="EditTask-input"
              />
              <button onClick={handleClose} className="EditTask-closeButton">Close</button>
              <button type="submit" className="EditTask-saveButton">Save Changes</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditTask;
