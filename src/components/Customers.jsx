import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import Button from "@mui/material/Button";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AgGridReact } from "ag-grid-react";
import { useState } from "react";
import AddCustomer from "./AddCustomer";
import UpdateCustomer from "./UpdateCustomer";
import AddTraining from "./AddTraining";
import { fetchCustomers, addCustomer, deleteCustomer } from "../utils/api";

export default function Customers() {

  const queryClient = useQueryClient();

  const { isPending, isError, data: customers, error } = useQuery({
    queryKey: ['customers'],
    queryFn: fetchCustomers
  })

  const addMutation = useMutation({
    mutationFn: addCustomer,
    onSuccess: () => queryClient.invalidateQueries(['customers'])
  })

  const deleteMutation = useMutation({
    mutationFn: deleteCustomer,
    onSuccess: () => queryClient.invalidateQueries(['customers'])
  })


  const [columnDefs, setColumnDefs] = useState([
    { field: 'firstname', headerName: 'First name' },
    { field: 'lastname', headerName: 'Last name' },
    { field: 'streetaddress', headerName: 'Street address' },
    { field: 'postcode', headerName: 'Postal code' },
    { field: 'city', headerName: 'City' },
    { field: 'email', headerName: 'Email address' },
    { field: 'phone', headerName: 'Phone number' },
    {
      field: '_links.self.href',
      headerName: '',
      sortable: false,
      filter: false,
      cellRenderer: params =>
        <Button onClick={() => deleteMutation.mutate(params.data._links.self.href)}>
          Delete
        </Button>
    },
    {
      field: '_links.self.href',
      headerName: '',
      sortable: false,
      filter: false,
      cellRenderer: params => <UpdateCustomer currentCustomer={params.data} />
    },
    {
      headerName: '',
      sortable: false,
      filter: false,
      cellRenderer: params => <AddTraining currentCustomer={params.data} />
    }
  ]);

  const defaultColDef = {
    sortable: true, filter: true
  };

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }



  return (
    <div className="Customers">
      <AddCustomer addCustomer={customer => addMutation.mutate(customer)} />
      <div className="ag-theme-material" style={{ width: "95%", height: 500 }}>
        <AgGridReact
          rowData={customers}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
        />
      </div>
    </div>
  );

}