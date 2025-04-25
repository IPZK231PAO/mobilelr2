import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';
import StoreScreen from '../screens/StoreScreen';
import CommunityScreen from '../screens/CommunityScreen';
import SafetyScreen from '../screens/SafetyScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ChatScreen from '../screens/ChatScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          const icons = {
            Store: 'game-controller-outline',
            Community: 'people-outline',
            Safety: 'shield-checkmark-outline',
             Chats:'chatbubbles-outline',
            Profile: 'person-outline',
           
          };
          return <Ionicons name={icons[route.name]} size={24} color={color} />;
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.accent,
        tabBarInactiveTintColor: theme.textSecondary,
        tabBarStyle: {
          backgroundColor: theme.primary,
          borderTopWidth: 0,
          height: 60
        },
        headerStyle: {
          backgroundColor: theme.background,
          borderBottomColor: theme.secondary,
          borderBottomWidth: 1
        },
        headerTitleStyle: {
          color: theme.text,
          fontSize: 18,
          fontWeight: 'bold'
        }
      })}
    >
      <Tab.Screen name="Store" component={StoreScreen} />
      <Tab.Screen name="Community" component={CommunityScreen} />
      <Tab.Screen name="Safety" component={SafetyScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Chats" component={ChatScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;