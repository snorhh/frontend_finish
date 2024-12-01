import { TextField, DialogContent } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { fi } from 'date-fns/locale/fi';



export default function TrainingDialogContent({ training, handleChange, onDateChange }) {

    const handleDateChange = (newDate) => {
        if (newDate) {
            onDateChange(newDate);
        }
    };

    return (


        <DialogContent>
            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fi}>
                <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
                    <DateTimePicker
                        id="date"
                        name="date"
                        label="Date and Time"
                        type="date"
                        value={training.date ? new Date(training.date) : null}
                        onChange={handleDateChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </DemoContainer>
            </LocalizationProvider>

            <TextField
                required
                id="duration"
                name="duration"
                label="Duration"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleChange}
                value={training.duration || ''}
            />
            <TextField
                required
                id="activity"
                name="activity"
                label="Activity"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleChange}
                value={training.activity || ''}
            />


        </DialogContent>
    )
}