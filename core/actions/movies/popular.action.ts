import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastruture/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastruture/mappers/movie.mapper";

export const popularMoviesAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/popular");
    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener los datos de la API");
  }
};
