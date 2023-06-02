import axios from "axios";
import { toast } from "react-toastify";
import { setPostDetails, setPosts, setCast, setSearch } from "../reducers/post";

export const getPosts = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_POSTS_API}/discover/movie`,
      {
        params: {
          api_key: import.meta.env.VITE_TMBD_KEY,
        },
      }
    );
    dispatch(setPosts(response.data.results));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};

export const getPostDetails = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_POSTS_API}/movie/${id}`,
      {
        params: {
          api_key: import.meta.env.VITE_TMBD_KEY,
        },
      }
    );
    dispatch(setPostDetails(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};

export const getPostCast = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_POSTS_API}/movie/${id}/credits`,
      {
        params: {
          api_key: import.meta.env.VITE_TMBD_KEY,
        },
      }
    );
    if (Object.keys(response.data).length > 0) {
      dispatch(setCast(response.data.cast));
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};

export const getSearch = (keyword) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_POSTS_API}/search/movie`,
      {
        params: {
          api_key: import.meta.env.VITE_TMBD_KEY,
          query: keyword,
        },
      }
    );
    dispatch(setSearch(response.data.results));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};
