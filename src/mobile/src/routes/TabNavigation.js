import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeNavigation } from "./StackNavigation";

import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function ShowBottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarShowLabel: false }}
      initialRouteName="HomeTab"
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="home"
              size={30}
              color={focused ? "#45B5C4" : "#000000"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
