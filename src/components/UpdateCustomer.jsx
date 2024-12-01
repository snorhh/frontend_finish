import { useState } from "react";
import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import CustomerDialogContent from "./CustomerDialogContent";
import { updateCustomer } from "../utils/api";



export default function UpdateCustomer({ currentCustomer }) {

    const [customer, setCustomer] = useState(currentCustomer);

    const [open, setOpen] = useState(false);

    const url = currentCustomer._links.self.href;

    const queryClient = useQueryClient();

    const updateMutation = useMutation({
        mutationFn: updateCustomer,
        onSuccess: () => queryClient.invalidateQueries(['customers'])
    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = event => {
        setCustomer({ ...customer, [event.target.name]: event.target.value });
    }

    const handleSave = () => {
        updateMutation.mutate({ url, customer });
        setOpen(false);
    }

    return (
        <>
            <Button onClick={handleClickOpen}>EDIT</Button>
            <Dialog
                open={open}
                onClose={handleClose}

            >
                <DialogTitle>Modify customer</DialogTitle>
                <CustomerDialogContent customer={customer} handleChange={handleChange} />
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>

        </>
    )

};