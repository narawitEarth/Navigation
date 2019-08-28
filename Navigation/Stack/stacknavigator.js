import { createStackNavigator, createAppContainer} from 'react-navigation';
import Page1 from './page1'
import Page2 from './page2'
import Page3 from './page3'

const stack = createStackNavigator ({ 
  Page1Screen:{screen:Page1,navigationOptions: {
  title:'Page1'}},
  Page2Screen:{screen:Page2,navigationOptions: {
  title:'Page2'}},
  Page3Screen:{screen:Page3,navigationOptions: {
  title:'Page3'}},
});


export default createAppContainer(stack);