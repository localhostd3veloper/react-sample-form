import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center font-medium text-3xl">
        Hello! <p className="text-lg"> Please select a task to continue.</p>
      <div className="flex justify-between gap-10 text-lg">
        <Link to='/forms' className="text-blue-500 underline">Task 1: Forms</Link>
        <Link to='/charts' className="text-blue-500 underline">Task 2: ECG Data Chart</Link>
      </div>
    </div>
  );
}

export default Home;
