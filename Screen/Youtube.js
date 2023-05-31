import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

const Youtube = () => {
  const handleOpenVideo = async () => {
    const videoId = 'your_youtube_video_id_here';
    const url = `https://www.youtube.com/watch?v=IvqXK0byvZA`;

    await WebBrowser.openBrowserAsync(url);
  };

  return (
    <View style={styles.container}>
      <iframe width="330" height="220" src="https://www.youtube.com/embed/jCMT4v6JI9Q?start=187&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
      <Text style={styles.explainText}>본 영상은 제작자와 제작자 주변의 취향이 반영되었음을 알립니다</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  explainText : {
    marginTop: 40,
    fontSize: 16,
    marginHorizontal: 20,
    marginBottom: 10,
    textAlign: 'center',
  }
});

export default Youtube;
