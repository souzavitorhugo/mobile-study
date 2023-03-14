//expo start -> para iniciar aplicação com expo

import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

//Class Components
// class App extends Component{
//   render() {
//     return (
//       <View>
//         <Text> Olá mundo! hihihihi</Text>
//       </View>
//     )
//   }
// }

// export default App;


//Trabalhando com Image e algumas props

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 50,
//   },
//   tinyLogo: {
//     width: 50,
//     height: 50,
//   },
//   logo: {
//     width: 66,
//     height: 58,
//   },
// });

// const Logo = (props) => {
//   let img = 'https://reactnative.dev/img/tiny_logo.png';

//   return (
//     <View>
//       <Image
//         source={{uri: img}}
//         style = {{width:props.largura, height:props.altura}}
//       />
//       <Text> {props.texto}</Text>
//     </View>
    
//   )
// }

// //Modo FunctionComponents
// export default function App() {
//   return (
//     <View>
//       <Text style = {{ marginTop: 20}}>
//         Hello, world!
//       </Text>

//       <Text style = {{ color: '#FF0000', fontSize: 50}}>
//         Meu Primeiro App
//       </Text>

//       <Logo largura={70} altura={70} texto={'nome fulado cabeça da minha pica'}/>
  
//     </View>
//   )
// }


export default function App() {
  

  return (
    <View style = {{
      flex: 1, 
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>

      <View style = {{height: 50, width: 50, backgroundColor: '#121212'}}></View>

      <View style = {{height: 50, width: 50, backgroundColor: 'red'}}></View>

      <View style = {{height: 50, width: 50, backgroundColor: 'green'}}></View>

    </View>
  )
}