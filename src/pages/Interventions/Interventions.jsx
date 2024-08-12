import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { Box, Typography } from "@mui/material";
import { rows } from "./Data";

import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import HealingOutlinedIcon from "@mui/icons-material/HealingOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";

import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";

const Interventions = () => {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      align: "center",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "date",
      headerName: "DATE",
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
      field: "unite",
      headerName: "Unité",
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
      field: "type",
      headerName: "TYPE",
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
                height: "150px",
                width: "100px",
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
      field: "remontePar",
      headerName: "REMONTER PAR",
      align: "center",
      flex: 1,
      headerAlign: "center",

      renderCell: ({ row: { remontePar } }) => {
        return (
          <Box
            sx={{
              borderRadius: "6px",
              textAlign: "center",
              justifyContent: "space-evenly",
              justifyItems: "center",
              height: "150px",
              width: "100px",
              marginTop: "5px",
              display: "flex",
              backgroundColor: "",
              p: "10px",
            }}
          >
            {remontePar === "MEDECIN" ? (
              <LocalHospitalOutlinedIcon
                sx={{ fontSize: "20px", color: "blue" }}
              />
            ) : remontePar === "INFIRMIER" ? (
              <HealingOutlinedIcon sx={{ fontSize: "20px", color: "pink" }} />
            ) : remontePar === "TECHNICIEN" ? (
              <ConstructionOutlinedIcon
                sx={{ fontSize: "20px", color: "green" }}
              />
            ) : null}

            <Typography sx={{ fontSize: "13px" }}>{remontePar}</Typography>
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
      field: "supportTech",
      headerName: "SUPPORT TECHNIQUE",
      align: "center",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "besoin",
      headerName: "BESOIN",
      align: "center",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "remarques",
      headerName: "Remarques",
      align: "center",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "Action",
      headerName: "Action",
      align: "center",
      flex: 1,
      headerAlign: "center",
    },
  ];

  return (
    <Box sx={{ height: "900 px ", width: "99%", mx: "auto" }}>
      <DataGrid
        slots={{
          toolbar: GridToolbar,
        }}
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
};

export default Interventions;
