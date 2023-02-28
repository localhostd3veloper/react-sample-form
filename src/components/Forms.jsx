import { Link } from "react-router-dom";
import { usePerson } from "../context/UserContext";

function Forms() {
  const { inputTypes } = usePerson();
  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-main text-xl h-screen bg-cover w-screen bg-center px-3 py-2 flex justify-center items-center">
      <div className="p-4 backdrop-blur-sm rounded-lg h-[80vh] backdrop-brightness-75 overflow-hidden">
        <span className="text-2xl font-medium text-white">
          {" "}
          Please Fill the form
        </span>
        <form className="flex flex-col gap-6 mt-10" onSubmit={submit}>
          {inputTypes.map((input, index) => (
            <div key={index} className="flex flex-col">
              <label htmlFor={input.name} className="text-gray-200 font-medium">
                {input.label}
              </label>
              {input.type === "select" ? (
                <select
                  name={input.name}
                  id={input.name}
                  className="border-2 border-gray-300 rounded-md px-2 py-1"
                  onChange={input.onchange}
                  placeholder={input.placeholder}
                  required={input.required}
                >
                  <option defaultValue={input.placeholder}>
                    {input.placeholder}
                  </option>
                  {input.options.map((option, index) => (
                    <option key={index} value={option.name}>
                      {option.name}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={input.type}
                  name={input.name}
                  id={input.name}
                  placeholder={input.placeholder}
                  onChange={input.onchange}
                  required={input.required}
                  className="border-2 border-gray-300 rounded-md px-2 py-1"
                />
              )}
            </div>
          ))}

          <Link
            to="/result"
            type="submit"
            className="w-full bg-green-600 text-center rounded-md backdrop-opacity-75 py-2 hover:bg-green-700 hover:rounded-3xl duration-500 text-white uppercase"
          >
            Submit
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Forms;
