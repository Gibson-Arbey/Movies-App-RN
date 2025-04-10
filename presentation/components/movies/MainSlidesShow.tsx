import { View, useWindowDimensions } from "react-native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { Movie } from "@/infrastruture/interfaces/movie.interface";
import { useRef } from "react";
import MoviePoster from "./MoviePoster";

interface Props {
  movies: Movie[];
}

const MainSlidesShow = ({ movies }: Props) => {
  const ref = useRef<ICarouselInstance>(null);
  const width = useWindowDimensions().width;

  return (
    <View className="h-[250px] w-full">
      <Carousel
        ref={ref}
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} />
        )}
        width={200}
        height={350}
        style={{
          width: width,
          height: 350,
          justifyContent: "center",
          alignItems: "center",
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        defaultIndex={1}
      />
    </View>
  );
};

export default MainSlidesShow;
