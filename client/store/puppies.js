import axios from "axios";

/////////////     Action Creators     //////////////
const GET_PUPPIES = "GET_PUPPIES";
const UPDATE_PUPPY = "UPDATE_PUPPY";
const DELETE_PUPPY = "DELETE_PUPPY";

const setPuppies = (puppies) => ({
  type: GET_PUPPIES,
  puppies,
});

const updatePuppy = (puppy) => ({
  type: UPDATE_PUPPY,
  puppy,
});

const deletePuppy = (id) => ({
  type: DELETE_PUPPY,
  id,
});

/////////////      Thunks      /////////////
export const fetchPuppiesThunk = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/puppies");
    dispatch(setPuppies(res.data));
  } catch (error) {
    console.log("No puppies!", error);
  }
};

export const updatePuppyThunk = (puppy) => async (dispatch) => {
  try {
    const res = await axios.patch(`/api/puppies/${puppy.id}`, puppy);
    dispatch(updatePuppy(res.data));
  } catch (error) {
    console.log("Sorry, can not update puppy!", error);
  }
};

export const deletePuppyThunk = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/puppies/${puppy.id}`);
    dispatch(deletePuppy(id));
  } catch (error) {
    console.log(`Can not delete puppy with id ${id}`, error);
  }
};

/////////////      Reducers      /////////////

const puppiesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PUPPIES:
      return [...action.puppies];
    case UPDATE_PUPPY:
      return state.map((puppy) =>
        puppy.id === action.puppy.id ? { ...puppy, ...action.puppy } : puppy
      );
    case DELETE_PUPPY:
      return state.filter((puppy) => puppy.id !== action.id);
    default:
      return state;
  }
};

export default puppiesReducer;
