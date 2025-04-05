import { movieApi } from "@/core/api/movie-api";
import { CompleteMovie } from "@/infrastruture/interfaces/movie.interface";
import { MovieDBMovieResponse } from "@/infrastruture/interfaces/moviedb-movie.response";
import { MovieMapper } from "@/infrastruture/mappers/movie.mapper";

export const getMovieByIdAction = async (id: number): Promise<CompleteMovie> => {
  try {
    const { data } = await movieApi.get<MovieDBMovieResponse>(`/${id}`);
    return MovieMapper.fromTheMovieDBToCompleteMovie(data);
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener los datos de la API");
  }
};
