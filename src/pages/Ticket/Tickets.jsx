import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { rows } from "./Data";

import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";

const Tickets = () => {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      align: "center",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "nom",
      headerName: "Nom",
      align: "center",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "TitreDuTicket",
      headerName: "Titre du Ticket",
      align: "center",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "region",
      headerName: "RÉGION",
      align: "center",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "province",
      headerName: "Province",
      align: "center",
      flex: 1,
      headerAlign: "center",
    },

    {
      field: "probleme",
      headerName: "Probléme",
      align: "center",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "cause",
      headerName: "cause",
      align: "center",
      flex: 1,
      headerAlign: "center",
    },

    {
      field: "categorie",
      headerName: "Catégorie",
      align: "center",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "priorite",
      headerName: "Priorité",
      align: "center",
      flex: 1,
      headerAlign: "center",
      renderCell: ({ row: { priorite } }) => {
        return (
          <Box>
            <Typography
              sx={{
                fontWeight: priorite === "High" ? "bold" : "normal",
                fontSize: "13px",
                color:
                  priorite === "High"
                    ? "red"
                    : priorite === "Medium"
                    ? "#ffd700	"
                    : priorite === "Low"
                    ? "#ff8c00	"
                    : "inherit",
                borderRadius: "6px",
                textAlign: "center",
                justifyContent: "space-evenly",
                justifyItems: "center",

                marginTop: "5px",
                display: "flex",
                backgroundColor: "",
                p: "10px",
              }}
            >
              {priorite === "High" ? (
                <ReportProblemOutlinedIcon
                  sx={{ fontSize: "17px", color: "red" }}
                />
              ) : null}
              {priorite}
            </Typography>
          </Box>
        );
      },
    },

    {
      field: "ouvertLe",
      headerName: "Ouvert le",
      align: "center",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "fermeLe",
      headerName: "Fermé le",
      align: "center",
      flex: 1,
      headerAlign: "center",
    },

    {
      field: "action",
      headerName: "Action",
      align: "center",
      flex: 2,
      headerAlign: "center",

      renderCell: ({ row: { action } }) => {
        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              px: "5px",
              my: "4px",
            }}
          >
            <Button
              variant="contained"
              color="success"
              sx={{ height: "40px", width: "100px" }}
            >
              Success
            </Button>
            <Button variant="outlined" color="warning">
              En cours
            </Button>
          </Box>
        );
      },
    },
  ];
  return (
    <>
      <Box sx={{ mr: "3%" }}>
        <Button sx={{ p: "10px", m: "5px", left: "90%" }} variant="outlined">
          Ajouter
        </Button>
        <Button sx={{ p: "10px", m: "5px", left: "90%" }} variant="outlined">
          coloturer
        </Button>
      </Box>

      <Box sx={{ height: "900 px ", width: "99%", mx: "auto" }}>
        <DataGrid
          checkboxSelection 
          slots={{
            toolbar: GridToolbar,
          }}
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </>
  );
};

export default Tickets;
