import React, { useEffect, useState } from "react";
import { usePerson } from "../context/UserContext";

function Result() {
  const { name, email, phone, country } = usePerson();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    if (!name || !email || !phone || !country) window.location.href = "/";
  }, []);

  if (loading)
    return (
      <div className="h-screen flex flex-col gap-4 justify-center items-center bg-slate-800 text-white text-2xl">
        Loading...
      </div>
    );

  return (
    <div className="h-screen flex flex-col gap-4 justify-center items-center bg-slate-800 text-white text-2xl">
      <div className="flex flex-col gap-3">
        <span className="text-3xl font-medium">Result</span>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Country: {country}</p>
      </div>
    </div>
  );
}

export default Result;
