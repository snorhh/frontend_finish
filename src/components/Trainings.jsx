import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css"; 
import { AgGridReact } from "ag-grid-react";
import { useState, useEffect } from "react";
import { format } from 'date-fns';
import Button from "@mui/material/Button";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchTrainings, deleteTraining } from "../utils/api";

export default function Trainings() {

    const { data: trainings } = useQuery({
        queryKey: ['trainings'],
        queryFn: fetchTrainings
      })

      const queryClient = useQueryClient();

      const deleteTrainingMutation = useMutation({
        mutationFn: deleteTraining,
        onSuccess: () => queryClient.invalidateQueries(['trainings'])
      })
    

    //https://blog.ag-grid.com/formatting-numbers-strings-currency-in-ag-grid/
    function formatDate(params) {
        return (format(new Date(params.value), 'dd.MM.yyyy HH:mm'));
     };

    const valueGetter = params => {
        if (params.data.customer != null) {
            return params.data.customer.firstname + " " + params.data.customer.lastname;
        }
        else {
            return "No customer value";
        }

    };


    const [columnDefs, setColumnDefs] = useState([
        {
            field: 'date',
            headerName: 'Date',
            valueFormatter: formatDate
        },
        { field: 'duration', headerName: 'Duration' },
        { field: 'activity', headerName: 'Activity' },
        { headerName: 'Customer', valueGetter: valueGetter },
        {
            field: '_links.self.href',
            headerName: '',
            sortable: false,
            filter: false,
            cellRenderer: params =>
                <Button onClick={() => deleteTrainingMutation.mutate(params.data.id)}>
                    Delete
                </Button>
        }

    ]);

    const defaultColDef = {
        sortable: true, filter: true
    };

    useEffect(() => {
        fetchTrainings();
    }, []);



    return (
        <div className="Trainings">

            <div className="ag-theme-material" style={{ width: "95%", height: 500 }}>
                <AgGridReact
                    rowData={trainings}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                />
            </div>
        </div>
    );

}