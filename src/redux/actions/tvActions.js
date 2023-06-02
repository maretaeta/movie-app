import axios from "axios";
import { toast } from "react-toastify";
import { setTvs, setTvsDetails, setTvCast } from "../reducers/tvReducers";

export const getTvs = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_POSTS_API}/tv/top_rated`,
      {
        params: {
          api_key: import.meta.env.VITE_TMBD_KEY,
        },
      }
    );
    dispatch(setTvs(response.data.results));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};

export const getTvsDetails = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_POSTS_API}/tv/${id}`,
      {
        params: {
          api_key: import.meta.env.VITE_TMBD_KEY,
        },
      }
    );
    dispatch(setTvsDetails(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};

export const getTvCast = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_POSTS_API}/tv/${id}/credits`,
      {
        params: {
          api_key: import.meta.env.VITE_TMBD_KEY,
        },
      }
    );
    if (Object.keys(response.data).length > 0) {
      dispatch(setTvCast(response.data.cast));
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};
