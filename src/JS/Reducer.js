import { ADD_MOVIE, DELETE_MOVIE } from "./ActionType";
import MovieData from "../Data";

const initialSate = { MoviesList: MovieData };

const MoviesReducer= (state=initialSate , {type, payload})=>{
    switch(type){
        case ADD_MOVIE:return{
            ...state,MoviesList:[...state.MoviesList,payload]
        }
        case DELETE_MOVIE:return{
            ...state, MoviesList:state.MoviesList.filter((e)=>e.id !== payload),
        }
        default: 
        return state;
    }
};
export default MoviesReducer;
