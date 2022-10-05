const createTodo = async (todo) => {
  try {
    const res = await fetch('api/todo/create', {
      method: 'POST',
      body: todo,
    });
    return res.json();
  } catch (err) {
    console.log(err);
    return null;
  }
};

const updateTodo = async (id, form) => {
  try {
    const res = await fetch(`api/todo/${id}`, {
      method: 'PUT',
      body: form,
    });
    return res.json();
  } catch (err) {
    console.log(err);
    return null;
  }
};

const getTodos = async () => {
  try {
    const res = await fetch('api/todos');
    return res.json();
  } catch (err) {
    console.log(err);
    return null;
  }
};

const removeTodo = async (id) => {
  try {
    const res = await fetch(`api/todo/remove/${id}`, {
      method: 'DELETE',
    });
    return res.json();
  } catch (err) {
    console.log(err);
    return null;
  }
};

module.exports = { createTodo, updateTodo, getTodos, removeTodo };
