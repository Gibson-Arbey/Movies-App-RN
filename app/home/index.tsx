import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React from "react";
import { useMovies } from "@/presentation/hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MainSlidesShow from "@/presentation/components/movies/MainSlidesShow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="purple" size={50} />
      </View>
    );
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        className="mt-2 bg-slate-500 h-full pb-10"
        style={{ paddingTop: safeArea.top }}
      >
        <Text className="text-3xl font-bold px-4 mb-2 color-white">
          MoviesApp
        </Text>

        {/* Contenido principal */}
        <MainSlidesShow movies={nowPlayingQuery.data ?? []} />

        {/* Populares */}
        <MovieHorizontalList
          title="Populares"
          className="mb-5"
          movies={popularQuery.data ?? []}
        />

        {/* Mejor rankeados */}
        <MovieHorizontalList
          title="Mejor calificadas"
          className="mb-5"
          movies={topRatedQuery.data ?? []}
        />

        {/* Proximos estrenos */}
        <MovieHorizontalList
          title="Proximos estrenos"
          className="mb-5"
          movies={upcomingQuery.data ?? []}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
