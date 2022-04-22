import React, { useState } from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Grid } from 'ag-grid-community';
import PublishIcon from '@material-ui/icons/Publish';
import AddIcon from '@material-ui/icons/Add';
import RefreshIcon from '@material-ui/icons/Refresh';
import { GetApp } from '@material-ui/icons';
import FormDialog from './components/dialog';

function App() {
    const [gridApi, setGridApi] = useState(null)
    const [tableData, setTableData] = useState([

    ])
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const columnDefs = [
        { headerName: "#" },
        { headerName: "Actions" },
        { headerName: "Images" },
        { headerName: "ID", field: "id" },
        { headerName: "Name", field: "name", },
        { headerName: "Email", field: "email", },
        { headerName: "phone", field: "phone" },
        { headerName: "Date of Birth", field: "dob" },

    ]
    const onGridReady = (params) => {
        setGridApi(params)
    }
    const defaultColDef = {
        sortable: true,
        flex: 1, filter: true,
        floatingFilter: true
    }
    return (
        <div className="App">
            <h1 >React-App</h1>
            {/* <div><AddIcon /></div> */}
            <div style={{ textAlign: 'right' }} >

                <button className='product_btns' onClick={
                    handleClickOpen
                }><GetApp /></button>
                <button className='product_btns' onClick={
                    handleClickOpen
                }><AddIcon /></button>
                <button className='product_btns' onClick={
                    handleClickOpen
                }><RefreshIcon /></button>
                <button className='product_btns' onClick={
                    handleClickOpen
                }><PublishIcon /></button>
            </div>
            <div className="ag-theme-alpine" style={{ height: '400px' }}>
                <AgGridReact
                    rowData={tableData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    onGridReady={onGridReady}
                />
            </div>

            <FormDialog open={open} />
        </div >
    );
}

export default App;