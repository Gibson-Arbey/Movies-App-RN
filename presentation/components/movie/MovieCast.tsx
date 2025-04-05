import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ActorCard } from './ActorCard';
import { Cast } from '@/infrastruture/interfaces/cast.interface';

interface Props {
  cast: Cast[];
}

const MovieCast = ({ cast }: Props) => {
  return (
    <View className="mt-5 mb-20">
      <Text className="font-bold text-2xl px-5 color-slate-100">Actores</Text>

      <FlatList
        data={cast}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <ActorCard actor={item} />}
      />
    </View>
  );
};
export default MovieCast;