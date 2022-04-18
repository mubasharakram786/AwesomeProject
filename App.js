import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import Cat from './Cat';
import HandlingTextInput from './HandlingTextInput';
import Scrolling  from './Scrolling';
export default function App() {
  return (
    <View style={styles.container}>
        {/* <Cat name="kitty1"/>
        <Cat name="kitty2"/> */}
        {/* <HandlingTextInput/> */}
        <Scrolling/>
        <Scrolling/>
        <Scrolling/>
        <Scrolling/>
        <Scrolling/>
        <Scrolling/>
        <Scrolling/>
        <Scrolling/>
        <Scrolling/>
        <Scrolling/>
        <Scrolling/>
        <Scrolling/>
        <Scrolling/>
        <Scrolling/>
        <Scrolling/>
        <Scrolling/>
        <Scrolling/>
        <Scrolling/>
        <Scrolling/>
        <Scrolling/>
        <Scrolling/>
        <Scrolling/>
        <Scrolling/>
        <Scrolling/>
        <Scrolling/>
        <Scrolling/>
        <Scrolling/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
