import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native'

const Inicio = ({navigation}) => {

    const informacion = { 
        clienteId: 4500,
        totalpagar: 352
    }

    const visitarNosotros = () => {
        navigation.navigate('Nosotros', informacion)
    }

    return ( 
        <View style={styles.contenedor}>
            <Text>Inicio</Text>
            <Button
                title="Ir a Nosotros"
                onPress={ () => visitarNosotros() }
            />
        </View>
       
     );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black', 
        backgroundColor: 'gray'
    }
})
 
export default Inicio;