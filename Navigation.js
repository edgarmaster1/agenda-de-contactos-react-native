import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

//Screens
import HomeScreen from './Screens/MainScreens/HomeScreen'
// import AboutScreen from './Screens/MainScreens/AboutScreen'

//LitadoScreens
import ListadoContactos from './Screens/Contactos/ListadoContactos'
import DetallesContacto from './Screens/Contactos/DetallesContacto'
import AddContacto from './Screens/Contactos/CrearContacto'
import EditarContacto from './Screens/Contactos/EditarContacto'

const Tab = createBottomTabNavigator()

const ListadoStack = createNativeStackNavigator();

function ContactosStack() {


  return (
    <ListadoStack.Navigator
      initialRouteName='Contactos'
    >
      <ListadoStack.Screen
        name='Contactos'
        component={ListadoContactos}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />

      <ListadoStack.Screen
        name='Detalles'
        component={DetallesContacto}
      />

      <ListadoStack.Screen
        name='Editar'
        component={EditarContacto}
      />

    </ListadoStack.Navigator>
  )
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={
        {
          tabBarActiveTintColor: 'orange',
        }
      }>

      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={50} color={color} />
          ),
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarShowLabel: false,
        }} />

      <Tab.Screen
        name="Añadir Contacto"
        component={AddContacto}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="group-add" size={50} color={color} />
          ),
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarShowLabel: false,
        }}
      />

      <Tab.Screen
        name="Listado"
        component={ContactosStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <Entypo name="list" size={50} color={color} />
          ),
          headerShown: false,
        }}
      />

    </Tab.Navigator>
  );
}


export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs></MyTabs>
    </NavigationContainer>
  )
}