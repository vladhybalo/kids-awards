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

    const uploadTaskImage = () => {
        const image = uploadedImgRef.current.value;
        setUploadedImage(image);
    }

    const handleTaskName = () => {
        const name = customTaskNameRef.current.value;
        setTaskName(name);
    }

    const handleTaskPoints = () => {
        const points = customTaskPointsRef.current.value;
        setTaskPoints(points);
    }

    const addNewTask = () => {
        if (taskName && taskPoints) {
            dispatch(postNewTask({
                title: taskName,
                reward: taskPoints,
                file: uploadedImage
            }))
            setModalVisibility(false);
        }
    }

    return <AddCustomTaskModal>
        <AddImageWrapper>
            <AddImageContainer uploadedImage={uploadedImage}>
                {/* uploaded image does not display because of
                'Not allowed to load local resource.'
                So instead displayed the image path */}
                {uploadedImage}
            </AddImageContainer>
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