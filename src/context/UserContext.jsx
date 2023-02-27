import React, { createContext, useState, useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../components/Home/HomePage";

export const PersonContext = createContext();

export function usePerson() {
  return useContext(PersonContext);
}

export const TicketProvider = () => {
  const inputTypes = [
    {
      id: 1,
      label: "How many persons are you booking for?",
      placeholder: "Number of persons",
      onChange: (e) => setAdults(e),

      limit: 50,
      subLabel: "anyone above 18 years and below 60 years",
    },
    {
      id: 2,
      label: "How many children are with you?",
      placeholder: "Number of children",
      onChange: (e) => setChildrens(e),

      limit: 50,
      subLabel: "anyone below 18, no tickets for children upto 8 years!",
    },
    {
      id: 3,
      label: "How many students are with you?",
      placeholder: "Number of students",
      onChange: (e) => setStudents(e),

      limit: 50,
      subLabel: "valid ID card will be required and checked at the gate",
    },
    {
      id: 4,
      label: "How many senior citizen are with you?",
      placeholder: "Number of seniors",
      onChange: (e) => setSeniors(e),
      limit: 50,
      subLabel: "We offer low ticket prices for senior citizen",
    },
  ];

  const [staticData, setStaticData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // call an api from glitch to wake up the server
      await fetch("https://lead-youthful-bagpipe.glitch.me/");
      const res = await getMongoData();
      setStaticData(res.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "data",
      JSON.stringify({
        adults,
        childrens,
        students,
        seniors,
        nationality,
      })
    );
  }, [adults, childrens, students, seniors, nationality]);

  const value = {
    uid,
    adults,
    childrens,
    students,
    seniors,
    nationality,
    totalPrice,
    inputTypes,
    setAdults,
    setChildrens,
    setStudents,
    setSeniors,
    setNationality,
    setTotalPrice,
    setUid,
  };

  return (
    <PersonContext.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage data={staticData} />} />
        </Routes>
      </BrowserRouter>
    </PersonContext.Provider>
  );
};
