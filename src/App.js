import React from "react";
import Netflix from "./Netflix";
import Amazon from "./Amazon";

const favSeries = "Amazon11111";

const FavS = () => {
  if (favSeries === "netflix") {
    return <Netflix />;
  } else {
    return <Amazon />;
  }
};

const App = () => (
  <>
    <h1 className="heading_style">List of Top 5 Series 2021</h1>
    <FavS />
  </>
);

export default App;

// var a = [
//   {
//     id: 1,
//     firstName: "Shweta",
//     lastName: "Kalungay",
//   },
//   {
//     id: 2,
//     firstName: "Manuuuuu",
//     lastName: "Bagul",
//   },
//   {
//     id: 3,
//     firstName: "Amit",
//     lastName: "Kalungay",
//   },
// ];
// a.map((item, index) => {
//   if (item.firstName == "Manuuuuu") {
//     console.log(
//       "🚀 ~ file: index.js ~ line 48 ~ a.map ~ item",
//       item.firstName + item.lastName
//     );
//   }

//   console.log(
//     "🚀 ~ file: index.js ~ line 48 ~ a.map ~ item",
//     item.firstName + item.lastName
//   );
//   // console.log(
//   //   "-----------------------------------------------------------------------"
//   // );
// });
// {
//   /* <p id="showdata"></p>; */
// }

// const studentData = [
//   {
//     id: 1,
//     name: "Shweta",
//     degree: "MCS",
//   },
//   {
//     id: 2,
//     name: "Kalungay",
//     degree: "aaaa",
//   },
//   {
//     id: 3,
//     name: "Shweta kalungay",
//     degree: "yyyy",
//   },
// ];

// const newdata = studentData.map((cvalue) => {
//   return `My name is ${cvalue.name}`;
// });

// console.log(newdata);

// document.getElementById("showdata").innerHTML = newdata;
