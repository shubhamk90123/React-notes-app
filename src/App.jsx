import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({ title, details });

    setTask(copyTask);

    setTitle("");
    setDetails("");
  };

  const btnClick = (idx) => {
    const copyTask = [...task];

    copyTask.splice(0, 1);

    setTask(copyTask);
  };

  return (
    <div className="h-screen lg:flex">
      <form
        onSubmit={(e) => {
          submitForm(e);
        }}
        className="flex flex-col lg:w-1/2 p-10  gap-4 "
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>

        <input
          type="text"
          className=" px-5 font-medium w-full py-2 border-2 rounded-2xl h-15 "
          placeholder="  Enter your name"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <textarea
          type="text"
          className=" px-5 w-full  font-medium  py-2 border-2 rounded-2xl h-32"
          placeholder="Enter Details"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        <button className="bg-white w-full active:scale-95 font-medium text-black px-5 py-2 border-2 rounded-2xl ">
          Add Notes
        </button>
      </form>
      <div className="p-10  lg:w-1/2 lg:border-l-2  ">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex items-start justify-start flex-wrap gap-5 h-full mt-5 overflow-auto   ">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col justify-between items-start relative h-52 w-40 rounded-2xl text-black py-9 px-4  bg-cover  bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
              >
                <div>
                  <h3 className=" leading-tight text-xl font-bold">
                    {elem.title}
                  </h3>
                  <p className=" mt-3 leading-tight text-xs text-gray-700 font-semibold">
                    {elem.details}
                  </p>
                </div>
                <button
                  onClick={(idx) => {
                    btnClick(idx);
                  }}
                  className="w-full rounded bg-rose-500 mt-5 py-1 font-bold text-xs text-white cursor-pointer active:scale-95  "
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
