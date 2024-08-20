import { Alert, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Product } from "./components/Product";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useState } from "react";

export function Home() {
    const [products, setProducts] = useState<string[]>([]);
    const [productName, setProductName] = useState('');

    function handleProductAdd() {
      if (products.includes(productName)){
        return Alert.alert("Produto já cadastrado", "Já existe um produto na lista com esse nome.")
      }

      setProducts((prevState) => [...prevState, productName]);
      setProductName('');
    }

    function handleProdutRemove(name: string) {
      console.log(`Produto Removido! ${name}`);
      return Alert.alert("Remover", `Deseja remover o produto ${name}?`, [
          {
           text: 'Sim',
           onPress: () => setProducts(prevState => prevState.filter(product => product != name))
          },
          {
            text: 'Não',
            style: 'cancel'
          }
        ]);
       }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Compras</Text>
            <Text style={styles.todaysDate}>Segunda-Feira, 19 de Agosto de 2024</Text>

            <View style={styles.form}>
                <TextInput 
                 style={styles.input}
                 placeholder="Nome do Produto"
                 placeholderTextColor='#BDBABA'
                 keyboardType="default"
                 onChangeText={setProductName}
                 value={productName}
                />

                <TouchableOpacity style={styles.button} 
                onPress={handleProductAdd}
                >

                 <Text style={styles.textButton}>
                    +
                 </Text>
                </TouchableOpacity>
            </View>
              <Text style={styles.listTitle}>Compras Pendentes</Text>
            
            <FlatList 
              data={products}
              keyExtractor={item => item}
              renderItem={({item}) => (
                <Product name={item} onRemove={() => handleProdutRemove(item)} />
              )}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={products.length <= 0 && styles.list}
              ListEmptyComponent={() => (
                <Text style={styles.listEmptyText}>
                  Comprou todos os produtos? Adicione produtos a sua lista de compras
                </Text>
              )}
            />
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
     marginTop: 18,
     marginBottom: 36
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
    },
    listTitle: {
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 16
    },
    listEmptyText: {
      fontSize: 16,
      fontWeight: 'normal',
      textAlign: 'center'
    },
    list: {
      flex: 1,
      justifyContent: 'center'
    }
  });
  
