import React, {useState} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import RNMapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = () => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  const getCoordinates = e => {
    setLatitude(e.latitude);
    setLongitude(e.longitude);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <RNMapView
          onLongPress={_ => {
            console.log(_.nativeEvent.coordinate);
          }}
          // onPress={() => console.log('map pressed')}
          // showsUserLocation={true}
          // followsUserLocation={true}
          // showsMyLocationButton={true}
          showsCompass={true}
          zoomEnabled={true}
          provider={PROVIDER_GOOGLE}
          scrollEnabled={true}
          style={styles.mapView}
          initialRegion={{
            latitude: 28.652031,
            longitude: 77.214785,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onRegionChangeComplete={e => getCoordinates(e)}
        />
        <Icon name="map-marker" size={40} style={styles.mapIcon} />
        <View style={styles.bottomView}>
          <Text style={styles.text}>{latitude}</Text>
          <Text style={styles.text}>{longitude}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapView: {
    flex: 1,
  },
  mapIcon: {
    position: 'absolute',
    top: '50%',
    alignSelf: 'center',
    color: 'black',
  },
  bottomView: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'baseline',
    alignSelf: 'center',
  },
  text: {
    alignSelf: 'center',
    color: 'black',
    paddingVertical: 2,
  },
});
