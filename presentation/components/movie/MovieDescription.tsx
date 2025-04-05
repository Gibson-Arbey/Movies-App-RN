import { Formatter } from '@/helpers/formatter';
import { CompleteMovie } from '@/infrastruture/interfaces/movie.interface';
import { View, Text } from 'react-native';

interface Props {
  movie: CompleteMovie;
}

const MovieDescription = ({ movie }: Props) => {
  return (
    <View className="mx-5">
      <View className="flex flex-row">
        <Text className='color-slate-100'>{movie.rating}</Text>
        <Text className='color-slate-100'> - {movie.genres.join(', ')}</Text>
      </View>

      <Text className="font-bold mt-5 color-slate-100">Historia</Text>
      <Text className="font-normal mt-2 color-slate-100">{movie.description}</Text>

      <Text className="font-bold mt-2 text-2xl color-slate-100">
        {Formatter.currency(movie.budget)}
      </Text>
    </View>
  );
};
export default MovieDescription;