import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {estilos} from './Estilos'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



export default function DetallesContacto({route}) {

  const Navegador = useNavigation();

  const {Contacto} = route.params;

  const ImagenUser= () =>{
    return (
      <View style={estilos.ImagenDetalles}>
        <Image
          source={{ uri: Contacto.Img }}
          style={estilos.PerfilImage2}
        />
        <Text style={{ fontSize: 50, fontWeight: 'bold' }}>
          {Contacto.Nombre}
        </Text>
      </View>
    )
  }

  const Acciones = () => {
    return (
      <View style={estilos.DetallesOpciones}>
        <View style={estilos.contenedorIconoOpciones}>
          <TouchableOpacity onPress={() => {
            console.log('Editar a ' + Contacto.Nombre)
            Navegador.navigate('Editar', {contactoEditar:Contacto} )
          }} >
            <MaterialIcons name="edit" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={estilos.contenedorIconoOpciones}>
          <TouchableOpacity onPress={() => {
            console.log('Eliminar a ' + Contacto.Nombre)
          }} >
          <MaterialIcons name="delete" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const Informacion = () => {
    return(
      <View style={estilos.ContenedorDetalles}>

        <Text style={estilos.NombreContacto}>
        Informacion de Contacto
        </Text>

        <View style={{ height: 20 }}></View>

        <Text style={{fontSize: 25}}>
        {/* <MaterialIcons name="call" size={30} color="black" /> */}
          <Text style={{fontWeight: 'bold'}}>Numero: </Text>
        {Contacto.Tel}
        </Text>

        <Text style={{fontSize: 25}}>
        <Text style={{fontWeight: 'bold'}}>Correo: </Text>
        {Contacto.Mail}
        </Text>
      </View>
    )
  }

  return (
    <View >

      <View style={{ height: 20 }}></View>
      <ImagenUser></ImagenUser>
      <Acciones></Acciones>
      <View style={estilos.RayaHorizontal}></View>
      <Informacion></Informacion>
    </View>
      
  )
}