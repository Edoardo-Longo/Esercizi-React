export const defaultState = [];

const ADD = "TODO@ADD";
const REMOVE = "TODO@REMOVE";
const EDIT = "TODO@EDIT";

export function addTodo(data) {
  return {
    type: ADD,
    payload: data,
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE,
    payload: id,
  };
}

export function editTodo(id, data) {
  return {
    type: EDIT,
    payload: { id, data },
  };
}

export function todoReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD: {
      return [...state, action.payload];
    }
    case REMOVE: {
      return state.filter((item) => item.id !== action.payload);
    }
    case EDIT: {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, ...action.payload };
        }
        return todo;
      });
    }
    default: {
      return state;
    }
  }
}
