import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./Data";
import { Box } from "@mui/material";

export default function Gestion() {
  return (
    <Box sx={{ height: "100 px", width: "99%", mx: "auto" }}>
      <DataGrid
        rows={rows}
        // @ts-ignore

        columns={columns}
      />
    </Box>
  );
}
