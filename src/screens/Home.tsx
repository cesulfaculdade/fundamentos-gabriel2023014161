import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

export function Home() {

    function handleProductAdd() {
        console.log('Alisson Koerich')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Compras</Text>
            <Text style={styles.todaysDate}>Segunda-Feira, 05 de Agosto de 2024</Text>

            <View style={styles.form}>
                <TextInput 
                 style={styles.input}
                 placeholder="Nome do Produto"
                 placeholderTextColor='#BDBABA'
                 keyboardType="default"
                />

                <TouchableOpacity style={styles.button} 
                onPress={handleProductAdd}
                >

                 <Text style={styles.textButton}>
                    +
                 </Text>

                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EAEAEA',
      padding: 24
    },
    input: {
      flex: 1,
      backgroundColor: '#fff',
      fontSize: 16,
      height: 56,
      padding: 16,
      borderRadius: 5,
      marginRight: 16
    },
    button: {
      width: 56,
      height: 56,
      backgroundColor: '#31C667',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center'
    },
    textButton: {
      color: '#fff',
      fontSize: 24
    },
    form: {
     flexDirection: 'row',
     width: '100%',
     marginTop: 18
    },
    title: {
     color: '#000',
     fontSize: 24,
     fontWeight: 'bold',
     marginTop: 48
    },
    todaysDate: {
     color: '#000',
     fontSize: 16,
     fontWeight: 'normal'
    }
  });
  
