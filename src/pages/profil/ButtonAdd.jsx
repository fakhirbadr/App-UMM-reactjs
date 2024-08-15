import { Box, Button } from "@mui/material";
import React from "react";

const button = ({ onClick }) => {
  return (
    <div>
      <Box sx={{ mr: "1%" }}>
        <Button
          onClick={onClick}
          sx={{ p: "10px", m: "5px", left: "90%" }}
          variant="outlined"
        >
          Ajouter
        </Button>
      </Box>
    </div>
  );
};

export default button;
