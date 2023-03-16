//expo start -> para iniciar aplicação com expo

import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, Button, TextInput } from 'react-native';

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


//FLEXBOX (just like web flexbox)

// export default function App() {
  

//   return (
//     <View style = {{
//       flex: 1, 
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center'
//     }}>

//       <View style = {{height: 50, width: 50, backgroundColor: '#121212'}}></View>

//       <View style = {{height: 50, width: 50, backgroundColor: 'red'}}></View>

//       <View style = {{height: 50, width: 50, backgroundColor: 'green'}}></View>

//     </View>
//   )
// }

export default function App() {

  const [name, setName] = useState('');
  const [input, setInput] = useState('');

  // const getName = (event) => {
  //   if(event.length > 0 ){
  //     setName('Bem Vindo ' + event);
  //   } else setName('');
  // }

  const entrar = () => {
    if(!input) {
      return alert('Digite seu nome')
    }

    setName(input);
  }
  
  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      flex: 1
    },
    input: {
      height: 45,
      borderWidth: 1,
      magin: 10 ,
      padding: 10,
      fontSize: 20,
    },
    texto: {
      textAlign: 'center',
      fontSize: 25,
      marginTop: 15
    }
  });


  return (
    <View style={styles.container}>

      <TextInput 
        style={styles.input}
        placeholder="Digite seu nome"
        onChangeText={(event) => setInput(event)}
      />

      <Button title='Entrar' onPress={entrar}/>

      <Text style={styles.texto}>
        {name}
      </Text>
    </View>
  )
}

