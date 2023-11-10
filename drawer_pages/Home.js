import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen1 from "../tab_pages/Screen1";
import Screen2 from "../tab_pages/Screen2";

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Screen1" component={Screen1} />
        <Tab.Screen name="Screen2" component={Screen2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Home;
