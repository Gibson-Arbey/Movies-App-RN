import { movieApi } from '@/core/api/movie-api';
import { MovieDBCreditsResponse } from '@/infrastruture/interfaces/moviedb-credits.interface';
import { CastMapper } from '@/infrastruture/mappers/cast.mapper';

export const getMovieCastAction = async (movieId: number) => {
  try {
    const { data } = await movieApi.get<MovieDBCreditsResponse>(
      `/${movieId}/credits`
    );

    return data.cast.map(CastMapper.fromMovieDBCastToEntity);
  } catch (error) {
    console.log(error);
    throw new Error(`Error al obtener el reparto de la película con ID ${movieId}`);
  }
};