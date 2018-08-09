import { createStackNavigator } from 'react-navigation';

import SignIn from './pages/singIn';
import SignUp from './pages/signUp';
import Main from './pages/main';

const Routes = createStackNavigator({
  SignIn,
  SignUp,
  Main,
});

export default Routes;