import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePerson } from "../context/UserContext";

function Result() {
  const { name, email, phone, country } = usePerson();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
        <p>Name: {name ? name : "N/A"}</p>
        <p>Email: {email ? email : "N/A"}</p>
        <p>Phone: {phone ? phone : "N/A"}</p>
        <p>Country: {country ? country : "N/A"}</p>
        <Link to="/" className="text-blue-500">
          Go Back
        </Link>
      </div>
    </div>
  );
}

export default Result;
