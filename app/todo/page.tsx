"use client";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { Task } from "../../store/task";
import { changeTaskState } from "@/store/task-selector";
import { changeWeatherState } from "@/store/weather-selector";

export default function Home() {
  const selectorTodoList = useRecoilValue(changeTaskState);
  const setSelectorTodoList = useSetRecoilState(changeTaskState);
  const resetSelectorTodoList = useResetRecoilState(changeTaskState);

  const selectorWeather = useRecoilValue(changeWeatherState);
  const setSelectorWeather = useSetRecoilState(changeWeatherState);

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      <h1>TO DO LIST!</h1>
      <div>weather: {selectorWeather.type}</div>
      <div>
        {selectorTodoList.map((todo: Task) => (
          <div key={todo.id} className="flex flex-row gap-5">
            <div
              className="text"
              style={{
                marginBottom: "10px",
                color: todo.isComplete ? "gray" : "black",
              }}
            >
              <input type="text" value={todo.text} disabled={todo.isComplete} />
            </div>

            <div className="checked">
              <input
                type="checkbox"
                checked={todo.isComplete}
                onChange={(e) => {
                  const newTodoList = selectorTodoList.map((item) =>
                    item.id === todo.id
                      ? { ...item, isComplete: e.target.checked }
                      : item
                  );

                  setSelectorTodoList(newTodoList);
                }}
              />
            </div>

            <div className="remove">
              <button
                style={{ color: "red" }}
                onClick={() => {
                  const newTodoList = selectorTodoList.filter(
                    (item) => item.id !== todo.id
                  );

                  setSelectorTodoList(newTodoList);
                }}
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="btn-block flex flex-row gap-20">
        <button
          className="add-todo"
          style={{
            color: "red",
            border: "1px solid gray",
            borderRadius: "5px",
            padding: "10px",
          }}
          onClick={() => {
            let randId = Math.floor(10000000 + Math.random() * 90000000);

            const newTodo = {
              id: `${randId}`,
              text: "new todo",
              isComplete: false,
            };

            setSelectorTodoList([...selectorTodoList, newTodo]);
          }}
        >
          add todo list!!
        </button>

        <button
          className="reset-todo"
          style={{
            color: "red",
            border: "1px solid gray",
            borderRadius: "5px",
            padding: "10px",
          }}
          onClick={() => {
            resetSelectorTodoList();
          }}
        >
          reset todo list!!
        </button>

        <button
          className="reset-todo"
          style={{
            color: "red",
            border: "1px solid gray",
            borderRadius: "5px",
            padding: "10px",
          }}
          onClick={() => {
            if (selectorWeather.type === "sunny") {
              setSelectorWeather({ ...selectorWeather, type: "rainy" });
            } else {
              setSelectorWeather({ ...selectorWeather, type: "sunny" });
            }
          }}
        >
          change weather!
        </button>
      </div>
    </main>
  );
}
