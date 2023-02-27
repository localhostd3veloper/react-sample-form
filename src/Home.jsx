import { usePerson } from "./context/UserContext";

function Home() {
  const { inputTypes } = usePerson();
  return (
    <div className="bg-main text-xl h-screen bg-cover  w-screen bg-center px-3 py-2 flex justify-center items-center">
      <div className="p-4 backdrop-blur-sm rounded-lg h-[80vh] backdrop-brightness-75 overflow-hidden">
       <span className="text-xl"> Please Fill the form</span>
        <form className="flex flex-col gap-2">
          {inputTypes.map((input , index) => (
            <div key={index} className="flex gap-5 items-center justify-between">
              <label htmlFor={input.name}>{input.label}</label>
              {input.type === "select" ? (
                <select
                  name={input.name}
                  id={input.name}
                  className="border-2 border-gray-300 rounded-md px-2 py-1"
                  onChange={input.onchange}
                  required={input.required}
                  placeholder={input.placeholder}
                >
                  <option  defaultValue={input.placeholder}>{input.placeholder}</option>
                  {input.options.map((option,index) => (
                    <option key={index} value={option.name}>{option.name}</option>
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
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
