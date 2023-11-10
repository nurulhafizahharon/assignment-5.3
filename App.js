import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./drawer_pages/Home";
import Settings from "./drawer_pages/Settings";
import AboutMe from "./drawer_pages/AboutMe";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="About Me" component={AboutMe} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
