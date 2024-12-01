import { TextField, DialogContent } from "@mui/material";


export default function CustomerDialogContent({ customer, handleChange }) {
    return (

        <DialogContent>
            <TextField
                required
                id="firstname"
                name="firstname"
                label="First name"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleChange}
                value={customer.firstname}
            />
            <TextField
                required
                id="lastname"
                name="lastname"
                label="Last name"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleChange}
                value={customer.lastname}
            />
            <TextField
                required
                id="streetaddress"
                name="streetaddress"
                label="Street address"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleChange}
                value={customer.streetaddress}
            />
            <TextField
                required
                id="postcode"
                name="postcode"
                label="Postal code"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleChange}
                value={customer.postcode}
            />
            <TextField
                required
                id="city"
                name="city"
                label="City"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleChange}
                value={customer.city}
            />
            <TextField
                required
                id="email"
                name="email"
                label="Email"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleChange}
                value={customer.email}
            />
            <TextField
                required
                id="phone"
                name="phone"
                label="Phone"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleChange}
                value={customer.phone}
            />
        </DialogContent>
    )
}