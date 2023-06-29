import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CategoryManagement from "../pages/categorys/management";
import SuccessUpdate from "../pages/Introduction";
import EditProfile from "../pages/EditProfile";

const Stack = createNativeStackNavigator();

export default (props) => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={SuccessUpdate}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={CategoryManagement}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen
        name="User"
        component={EditProfile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={CategoryManagement}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export function LoginNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
