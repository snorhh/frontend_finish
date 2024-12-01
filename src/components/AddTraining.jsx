import { useState } from "react";
import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import TrainingDialogContent from "./TrainingDialogContent";
import { addTraining } from "../utils/api";


// https://medium.com/@ozhanli/passing-data-from-child-to-parent-components-in-react-e347ea60b1bb

export default function AddTraining({ currentCustomer }) {

    const [training, setTraining] = useState({
        date: '',
        duration: '',
        activity: '',
        customer: currentCustomer._links.self.href
    });

    const [open, setOpen] = useState(false);

    const queryClient = useQueryClient();

    const addTrainingMutation = useMutation({
        mutationFn: addTraining,
        onSuccess: () => queryClient.invalidateQueries(['customers'])

    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        addTrainingMutation.mutate(training);
        setOpen(false);
    }

    const handleChange = event => {
        setTraining(prevTraining => ({ ...prevTraining, [event.target.name]: event.target.value }));
    }

    const handleDateFromChild = (newDate) => {
        if (newDate != null) {
            setTraining(prevTraining => ({
                ...prevTraining, date: newDate.toISOString()
            }));
        }
    }

    return (
        <>
            <Button onClick={handleClickOpen}>Add training</Button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>New training</DialogTitle>
                <TrainingDialogContent training={training} handleChange={handleChange} onDateChange={handleDateFromChild} />
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>

        </>
    )
};