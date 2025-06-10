import { DataGrid } from '@mui/x-data-grid';

export default function MuiTable({columns, rows}){

    return(
        <div>
            <DataGrid showToolbar={true} columns={columns} rows={rows} pageSizeOptions={[5]} disableRowSelectionOnClick disableColumnFilter disableColumnSelector
                initialState={{
                    pagination: { paginationModel: {pageSize: 15}},
                    toolbar:{QuickFilterProps: {debounceMs: 500}} //DELAY SEARCH A FEW M.SECONDS FOR EFFICIENCY
                }}
            
                sx={{
                    border:'none',
                    '& .MuiDataGrid-columnHeader': { backgroundColor: '#f9fbfc'},
                    '& .MuiDataGrid-columnHeader:focus': { outline: 'none'},
                    '& .MuiDataGrid-columnHeader:focus-within': { outline: 'none'},
                    '& .MuiDataGrid-columnSeparator': { visibility: 'hidden'},
                    '& .MuiDataGrid-cell':{ color: '#555555'},
                    '& .MuiDataGrid-cell:focus':{ outline: 'none'}
                }}
            />
        </div>
    )
}