import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { estilos } from './Estilos';
import {db} from '../../Data/Firebase'



export default function EditarContacto({route}) {

    const {contactoEditar} = route.params;  
    const Navegador = useNavigation();

    const ContactosForm = () => {
      const [img, setImg] = useState(contactoEditar.Img);
      const [mail, setMail] = useState(contactoEditar.Mail);
      const [nombre, setNombre] = useState(contactoEditar.Nombre);
      const [tel, setTel] = useState(contactoEditar.Tel);
      const [idContacto] = useState(contactoEditar.id);

      const [Guardado, setGuardado] = useState(false);
    
      const guardarEnFirebase = () => {
        const datosEditar = {
          Img: img,
          Mail: mail,
          Nombre: nombre,
          Tel: tel,
          id: idContacto,
        };

        const Ref = db.collection('Contactos');
        const DocEditar = Ref.doc(contactoEditar.documentID)

        DocEditar.update(datosEditar)
        .then(() => {
          setGuardado(true)
        })
        .catch((e) => {
          console.log(e)
        })

      };
    
      const ocultarmensaje = () => {
        setGuardado(false);
        Navegador.navigate('Contactos')
      }
    
      return (
        <View style={estilos.ContenedorForm}>
    
    
    
          <TextInput
            placeholder="URL de la imagen"
            value={img}
            onChangeText={setImg}
            style={estilos.FormInput}
          />
          <View style={{ height: 20 }}></View>
          <TextInput
            placeholder="Correo electrónico"
            value={mail}
            onChangeText={setMail}
            style={estilos.FormInput}
          />
          <View style={{ height: 20 }}></View>
          <TextInput
            placeholder="Nombre"
            value={nombre}
            onChangeText={setNombre}
            style={estilos.FormInput}
          />
          <View style={{ height: 20 }}></View>
          <TextInput
            placeholder="Teléfono"
            value={tel.toString()}
            onChangeText={setTel}
            style={estilos.FormInput}
          />
          <View style={{ height: 20 }}></View>
    
          <TouchableOpacity
            style={estilos.botonGuardar}
            onPress={guardarEnFirebase}
          >
            <Text style={{ fontSize: 18 }}>
              Guardar
            </Text>
          </TouchableOpacity>
          <View style={{ height: 20 }}></View>
          {
            Guardado
              ?
              <View style={estilos.MensajeOperacion}>
                <Text style={{fontSize: 18}}>Se Guardo el contacto</Text>
                <TouchableOpacity
                 style={estilos.botonGuardado}
                 onPress={ocultarmensaje}
                >
                  <Text>
                    OK
                  </Text>
                </TouchableOpacity>
              </View>
              :
              <Text></Text>
          }
        </View>
      );
    }

  return (
    <View>
      <ContactosForm></ContactosForm>
    </View>
  )
}