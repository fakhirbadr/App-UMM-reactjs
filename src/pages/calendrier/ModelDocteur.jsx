import React from "react";
import { useTheme } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import { useState } from "react";
const ModelDocteur = () => {
  const theme = useTheme();
  const state = useState();

  const borderColor = theme.palette.mode === "dark" ? blue[50] : grey[900];

  return (
    <div className=" justify-center items-center flex ">
      <div
        style={{ border: `2px solid ${borderColor}` }}
        className="  w-[100%] p-10  "
      >
        <div className="flex flex-col gap-7    ">
          <div className="flex  gap-7 ">
            <div className="basis-1/2   flex flex-col ">
              <label htmlFor="">Nom</label>
              <input
                type="text"
                placeholder="Saisie le nom"
                className="border border-black pointer"
              />
            </div>
            <div className="basis-1/2   flex flex-col ">
              <label htmlFor="">Prénom</label>
              <input
                type="text"
                placeholder="Saisie le Prénom"
                className="border border-black pointer"
              />
            </div>
          </div>

          <div className="flex gap-7">
            <div className="basis-1/2   flex flex-col ">
              <label htmlFor="">Age</label>
              <input
                type="text"
                placeholder="Enter l'age"
                className="border border-black pointer"
              />
            </div>
            <div className="basis-1/2   flex flex-col ">
              <label htmlFor="">Genre</label>
              <select name="" className="border border-black" id="">
                <option value="">Homme</option>
                <option value="">Femme</option>
              </select>
            </div>
          </div>
          <div className="flex gap-7">
            <div className="basis-1/2   flex flex-col ">
              <label htmlFor="">Age</label>
              <input
                type="text"
                placeholder="Enter l'age"
                className="border border-black pointer"
              />
            </div>
            <div className="basis-1/2   flex flex-col ">
              <label htmlFor="">Age</label>
              <input
                type="text"
                placeholder="Enter l'age"
                className="border border-black pointer"
              />
            </div>
          </div>
          <div className="basis-1/3   flex flex-col ">
            <label htmlFor="">Age</label>
            <input
              type="text"
              placeholder="Enter l'age"
              className="border border-black pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDocteur;
