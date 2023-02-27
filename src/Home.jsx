import { usePerson } from "./context/UserContext";

function Home() {
  const { inputTypes } = usePerson();
  return (
    <div className="bg-main text-xl h-screen bg-cover  w-screen bg-center px-3 py-2 flex justify-center items-center">
      <div className="p-4 backdrop-blur-sm rounded-lg h-[80vh] backdrop-brightness-75 overflow-hidden">
        Please Fill the form
        <form className="flex flex-col gap-2">
          {inputTypes.map((inputType) => (
            <div className="flex gap-5 items-center justify-between">
              <label htmlFor={inputType.name}>{inputType.label}</label>
              {inputType.type === "select" ? (
                <select
                  name={inputType.name}
                  id={inputType.name}
                  className="border-2 border-gray-300 rounded-md p-2"

                  onChange={inputType.onchange}
                  required={inputType.required}
                >
                  <option disabled selected defaultValue={inputType.placeholder}>{inputType.placeholder}</option>
                  {inputType.options.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={inputType.type}
                  name={inputType.name}
                  id={inputType.name}
                  placeholder={inputType.placeholder}
                  onChange={inputType.onchange}
                  required={inputType.required}
                  className="border-2 border-gray-300 rounded-md p-2"
                />
              )}
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
