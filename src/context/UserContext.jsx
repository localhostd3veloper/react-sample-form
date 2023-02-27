import axios from "axios";
import React, { createContext, useState, useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";

export const UserContext = createContext();

export function usePerson() {
  return useContext(UserContext);
}

export const UserProvider = () => {
  const [countries, setCountries] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    async function fetchData() {
      // call an api from glitch to wake up the server
      try {
        const res = await axios.get("https://cdn.jsdelivr.net/gh/stefanbinder/countries-states/countries.json");
        setCountries(res.data);
      } catch (error) {
        console.warn(error.message);
      }
    }

    fetchData();
  }, []);
  const inputTypes = [
    {
      type: "text",
      name: "name",
      label: "Name",
      placeholder: "Enter your name",
      required: true,
      onchange: (e) => setName(e.target.value),
    },
    {
      type: "email",
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
      required: true,
      onchange: (e) => setEmail(e.target.value),
    },
    {
      type: "tel",
      name: "phone",
      label: "Phone",
      placeholder: "Enter your phone",
      required: true,
      onchange: (e) => setPhone(e.target.value),
    },
    {
      type: "select",
      name: "country",
      label: "Country",
      placeholder: "Select your country",

      required: true,
      onchange: (e) => setCountry(e.target.value),
      options: countries,
    },
  ];

  const value = {
    countries,
    inputTypes,
    name,
    email,
    phone,
    country,
  };

  return (
    <UserContext.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};
