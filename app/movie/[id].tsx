import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useMovie } from "@/presentation/hooks/useMovie";
import MovieDescription from "@/presentation/components/movie/MovieDescription";
import MovieCast from "@/presentation/components/movie/MovieCast";
import MovieHeader from "@/presentation/components/movie/MovieHeader";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();
  const { movieQuery, castQuery } = useMovie(+id);

  if (movieQuery.isLoading || !movieQuery.data) {
    return (
      <View className="flex flex-1 justify-center items-center bg-slate-700">
        <Text className="mb-4 text-3xl color-slate-100">Cargando...</Text>
        <ActivityIndicator color="white" size={30} />
      </View>
    );
  }
  return (
    <ScrollView className="bg-slate-700" showsVerticalScrollIndicator={false}>
        <MovieHeader
        originalTitle={movieQuery.data.originalTitle}
        poster={movieQuery.data.poster}
        title={movieQuery.data.title}
      />

      <MovieDescription movie={movieQuery.data} />

      {/* Movie Cast */}
      <MovieCast cast={castQuery.data ?? []} />
    </ScrollView>
  );
};

export default MovieScreen;
