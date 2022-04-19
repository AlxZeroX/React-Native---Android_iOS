import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Animated } from 'react-native';

const Animacion2 = () => {

    const [ animacion ] = useState( new Animated.Value(0) );

    useEffect(() => {
        Animated.timing(
            animacion, {
                toValue: 450,  // al valor al que llega
                duration: 5000, // cantidad de tiempo en llegar
                useNativeDriver: true
            }
        ).start(); // iniciar la animación
    }, []);


    return ( 
        <Animated.View
            style={[
                styles.caja,
                { 
                    scaleY: animacion,
                    scaleX: animacion
                }
            ]}
        ></Animated.View>
     );
}

const styles = StyleSheet.create({
    caja: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
})
 
export default Animacion2;