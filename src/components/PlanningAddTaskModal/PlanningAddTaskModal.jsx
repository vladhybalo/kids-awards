import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import PropTypes from 'prop-types';

import { postNewTask } from "../../ducks/task";

import addTaskIcon from "../../assets/addTaskInputIcon.svg";

import {
    AddCustomTaskModal,
    AddImageWrapper,
    AddImageContainer,
    AddImageLabel,
    AddInfoContainer,
    AddTaskForm,
    AddTaskInputWrapper,
    AddTaskInputIcon,
    AddTaskInput,
    SubmitBtn
} from "./PlanningAddTaskModal.style";

const PlanningAddTaskModal = ({setModalVisibility}) => {
    const dispatch = useDispatch();

    const uploadedImgRef = useRef();
    const customTaskNameRef = useRef();
    const customTaskPointsRef = useRef();

    const [uploadedImage, setUploadedImage] = useState("");
    const [taskName, setTaskName] = useState("");
    const [taskPoints, setTaskPoints] = useState(0);

    const uploadTaskImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        
        reader.readAsDataURL(file);
        reader.onload = () => setUploadedImage(reader.result);
    }

    const handleTaskName = () => setTaskName(customTaskNameRef.current.value);

    const handleTaskPoints = () => setTaskPoints(customTaskPointsRef.current.value);

    const addNewTask = () => {
        if (taskName && taskPoints) {
            dispatch(postNewTask({
                title: taskName,
                reward: taskPoints,
                file: uploadedImage
            }));

            setModalVisibility(false);
        }
    }

    return <AddCustomTaskModal>
        <AddImageWrapper>
            <AddImageContainer uploadedImage={uploadedImage} />
            <AddImageLabel htmlFor="uploadImg" />
            <input
                id='uploadImg'
                type='file'
                accept="image/*"
                hidden
                ref={uploadedImgRef}
                onChange={uploadTaskImage}
            />
        </AddImageWrapper>
        <AddInfoContainer>
            <AddTaskForm>
                <AddTaskInputWrapper>
                    <AddTaskInputIcon src={addTaskIcon} />
                    <AddTaskInput
                        type="text"
                        placeholder="Add task..."
                        ref={customTaskNameRef}
                        onChange={handleTaskName}
                    />
                </AddTaskInputWrapper>
                <AddTaskInputWrapper>
                    <AddTaskInputIcon src={addTaskIcon} />
                    <AddTaskInput
                        type="text"
                        placeholder="Add points..."
                        ref={customTaskPointsRef}
                        onChange={handleTaskPoints}
                    />
                </AddTaskInputWrapper>
            </AddTaskForm>
            <SubmitBtn onClick={addNewTask}>
                Ok
            </SubmitBtn>
        </AddInfoContainer>
    </AddCustomTaskModal>
}

PlanningAddTaskModal.propTypes = {
    setModalVisibility: PropTypes.func
}

export default PlanningAddTaskModal;