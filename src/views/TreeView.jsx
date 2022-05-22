import React, { useState } from "react";
import addTask from "../functions/addTask";
import useClickOutside from "../hooks/useClickOutside";
import Task from "../components/Task";

const TreeView = (props) => {
  const { tasks, project, org, tabId } = props;
  const [taskName, setTaskName] = useState("");
  const [showInput, setShowInput] = useState(false);
  let elemRef = useClickOutside(() => {
    setShowInput(false);
    addTask(taskName, project, org, tabId, setTaskName);
  });
  const handleAddtask = (e) => {
    e.preventDefault();
    addTask(taskName, project, org, tabId, setTaskName);
  };
  return (
    <div className="tasks-wrapper mt-10">
      <div className="border-t border-gray-200">
        {tasks.map((task, index) => (
          <div key={task.id} className="task-wrap">
            <Task
              type="tree"
              style={{
                borderTop: index === 0 && "1px rgb(74 164 51 / 0.05)",
              }}
              {...task}
            />
          </div>
        ))}
      </div>
      {/* {tasks.length < 1 && ( */}
      <div className="relative">
        <p
          onClick={() => {
            setShowInput(true);
            console.log("clicked");
          }}
          className="hover:text-secondary py-2 transition-all cursor-pointer border-b border-gray-200 pb-1 mb-0"
        >
          Click here to add task
        </p>
        {showInput && (
          <form
            ref={elemRef}
            className="absolute px-5 pr-20 bg-taskSelectedBack h-full w-full border-b top-0 left-0"
            onSubmit={handleAddtask}
          >
            <input
              className="h-full px-2 placeholder:font-light outline-none w-full border border-brand rounded"
              type="text"
              placeholder="Enter a task name"
              value={taskName}
              onChange={(e) => {
                setTaskName(e.target.value);
              }}
            />
          </form>
        )}
      </div>
      {/* )} */}
    </div>
  );
};

export default TreeView;
