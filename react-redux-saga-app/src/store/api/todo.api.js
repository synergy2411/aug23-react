import defaultAxios from "axios";

const axios = defaultAxios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchTodos = async () => {
  try {
    const response = await axios.get("todos?_limit=6");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const createTodo = async (action) => {
  try {
    const { title, completed } = action.payload;
    const response = await axios.post(
      "todos",
      JSON.stringify({ title, completed })
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
