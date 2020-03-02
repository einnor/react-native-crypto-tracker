import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

console.log(appName);
console.log(App);

AppRegistry.registerComponent(appName, () => App);
