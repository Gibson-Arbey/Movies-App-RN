import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { useMovies } from '@/presentation/hooks/useMovies';

const HomeScreen = () => {

    const { nowPlayingQuery } = useMovies();

    if(nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="purple" size={50} />
      </View>
    );
  }
  return (
    <View>
      <Text>{JSON.stringify(nowPlayingQuery.data)}</Text>
    </View>
  )
}

export default HomeScreen