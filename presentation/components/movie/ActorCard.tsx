import { Image, Text, View } from 'react-native';
import { Cast } from '@/infrastruture/interfaces/cast.interface';

interface Props {
  actor: Cast;
}

export const ActorCard = ({ actor }: Props) => {
  return (
    <View className="mx-10 w-[60px]">
      <Image
        source={{ uri: actor.avatar }}
        className="w-[100px] h-[150] rounded-2xl shadow"
        resizeMode="cover"
      />

      <View>
        <Text
          numberOfLines={2}
          adjustsFontSizeToFit
          className="font-bold text-lg color-slate-100"
        >
          {actor.name}
        </Text>
        <Text className="color-slate-100 text-xs">{actor.character}</Text>
      </View>
    </View>
  );
};