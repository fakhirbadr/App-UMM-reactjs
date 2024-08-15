import ButtonAdd from "./ButtonAdd";
import Model from "./Model";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import * as React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const options = {
  filterType: "",
  selectableRows: false,
  //   elevation: 0,
  rowsPerPage: 5,
  rowsPerPageOptions: [30, 50, 70, 100],
  search: true,
};

const getMuiTheme = () =>
  createTheme({
    typography: {
      fontFamily: "sans-serif",
    },
    palette: {
      background: {
        paper: "#1e293b",
        default: "#0f172a",
      },
      mode: "dark",
    },
    components: {
      MuiTableCell: {
        styleOverrides: {
          head: {
            padding: "10px 4px",
          },
          body: {
            padding: "7px 15px",
            color: "#e2e8f0",
          },
        },
      },
    },
  });

const Profil = () => {
  const [users, setUsers] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [ageData, setAgeData] = useState([]);
  const [titleData, setTitleData] = useState([]);

  const handleClick = () => {};

  const columns = [
    {
      name: "id",
      label: "id",
    },
    {
      name: "image",
      label: "Profile",
      options: {
        customBodyRender: (value) => (
          <img src={value} alt="pic" className="w-10 h-10 rounded-full" />
        ),
        filter: false,
      },
    },
    {
      name: "name",
      label: "Prénom",
    },
    {
      name: "age",
      label: "age",
    },
    {
      name: "gender",
      label: "gender",
      options: {
        customBodyRender: (value) => (
          <p
            className={`capitalize rounded-full  inline-block text-center px-3 py-1
          ${value === "male" ? "bg-blue-700" : "bg-pink-400"}
          `}
          >
            {value}
          </p>
        ),
      },
    },

    {
      name: "role",
      label: "role",
    },
    {
      name: "title",
      label: "Title",
      options: {
        customBodyRender: (value) => <p>{value}</p>,
        filter: true,
      },
    },
    {
      name: "phone",
      label: "Telephone",
    },
    {
      name: "action",
      label: "Action",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          const handleDelete = () => {
            const id = tableMeta.rowData[0];
            setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
          };

          const handleEdit = () => {
            const id = tableMeta.rowData[0];
            const userToEdit = users.find((user) => user.id === id);
            if (userToEdit) {
              const updatedName = prompt("Enter new name:", userToEdit.name);
              if (updatedName !== null) {
                setUsers((prevUsers) =>
                  prevUsers.map((user) =>
                    user.id === id ? { ...user, name: updatedName } : user
                  )
                );
              }
            }
          };

          return (
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={handleEdit}
                style={{
                  backgroundColor: "#60a5fa",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                style={{
                  backgroundColor: "#f87171",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          );
        },
      },
    },
  ];
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        let local = data?.users?.map((user) => ({
          ...user,
          name: user?.firstName + " " + user?.lastName,
          title: user?.company?.title || "N/A",
        }));
        console.log(users);
        console.log(local);
        setUsers(local);

        // Prepare data for chart gender
        const genderCount = local.reduce((acc, user) => {
          acc[user.gender] = (acc[user.gender] || 0) + 1;
          return acc;
        }, {});

        const chartData = Object.keys(genderCount).map((gender) => ({
          name: gender,
          count: genderCount[gender],
        }));

        setChartData(chartData);

        // Prepare data for chart age
        const ageGroups = local.reduce((acc, user) => {
          const ageRange = Math.floor(user.age / 10) * 10; // Regrouper les âges en tranches de 10 ans
          acc[ageRange] = (acc[ageRange] || 0) + 1;
          return acc;
        }, {});

        const ageData = Object.keys(ageGroups).map((ageRange) => ({
          ageRange: `${ageRange}-${parseInt(ageRange) + 9}`, // Exemple: "20-29"
          count: ageGroups[ageRange],
        }));

        setAgeData(ageData);
        const titleCount = local.reduce((acc, user) => {
          acc[user.title] = (acc[user.title] || 0) + 1;
          return acc;
        }, {});

        const titleData = Object.keys(titleCount).map((title) => ({
          name: title,
          value: titleCount[title],
        }));

        setTitleData(titleData);
      });
  }, []);

  return (
    <div>
      <div className="p-6">Profil</div>
      <div className=" ">
        <ButtonAdd onClick={handleClick} />
        <hr className="" />
      </div>
      <div className=" flex top-[22%] right-[20%] absolute w-[60%] h-[60%] bg-[#111827] z-20 rounded-xl ">
        <Model />
      </div>

      <div className="w-[100%] py-3">
        <ThemeProvider theme={getMuiTheme()}>
          <MUIDataTable
            title={"Liste des collaborateurs"}
            data={users}
            columns={columns}
            // @ts-ignore
            options={options}
          />
        </ThemeProvider>
      </div>
      <div className=" w-[100%] flex justify-evenly py-7 mx-5 items-center">
        <div className=" mt-6">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </div>
        <div className=" mt-6">
          <BarChart
            width={500}
            height={300}
            data={ageData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="ageRange" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
      <div className="w-[100%] justify-center items-center flex">
        <PieChart width={1200} height={900}>
          <Pie
            data={titleData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={400}
            fill="#8884d8"
            label={({ name, value, percent }) =>
              `${name}: ${value} (${(percent * 100).toFixed(2)}%)`
            }
            labelLine={true}
          >
            {titleData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index % 2 === 0 ? "#8884d8" : "#82ca9d"}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Profil;
