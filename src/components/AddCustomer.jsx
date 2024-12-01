import { useState } from "react";
import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material"
import CustomerDialogContent from "./CustomerDialogContent";

export default function AddCustomer ({ addCustomer }) {

    const [customer, setCustomer] = useState({
        firstname: '',
        lastname: '',
        streetaddress: '',
        postcode: '',
        city: '',
        email: '',
        phone: ''
    })

    const [open, setOpen] = useState(false);

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
        addCustomer(customer);
        setOpen(false);
    }

    return (
        <>
            <Button onClick={handleClickOpen}>Add customer</Button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>New customer</DialogTitle>
                <CustomerDialogContent customer={customer} handleChange={handleChange} />
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>

        </>
    )
};