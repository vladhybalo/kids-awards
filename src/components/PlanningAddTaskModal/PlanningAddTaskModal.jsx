import React, { useRef, useState } from "react";

import PropTypes from 'prop-types';

import { postNewTask } from "../../utils/customTaskRequests";

import defaultTaskImage from "../../assets/img/auth-robot-image.png";
import addImageIcon from "../../assets/addImageIcon.svg";
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
            postNewTask({
                title: taskName,
                reward: taskPoints,
                file: uploadedImage
            });

            setModalVisibility(false);
        }
    }

    return <AddCustomTaskModal>
        <AddImageWrapper>
            <AddImageContainer uploadedImage={uploadedImage || defaultTaskImage} />
            <AddImageLabel htmlFor="uploadImg" addImgIcon={addImageIcon}/>
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