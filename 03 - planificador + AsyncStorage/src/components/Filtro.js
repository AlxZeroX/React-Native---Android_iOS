import React, { useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import globalStyles from '../styles'

const Filtro = ({filtro, setFiltro, gastos, setGastosFiltrados}) => {

    useEffect(() => {
        if(filtro === '') {
            setGastosFiltrados([])
        } else {
            const gastosFiltrados = gastos.filter( gasto => gasto.categoria === filtro)

            setGastosFiltrados(gastosFiltrados)
        }
    }, [filtro])

    return (
        <View style={styles.contenedor}>
            <Text style={styles.label}>Filtrar Gastos</Text>

                <Picker
                    selectedValue={filtro}
                    onValueChange={(valor) => {
                        setFiltro(valor)
                    }}
                >
                    <Picker.Item color="#ff4000" label="-- Seleccione --" value="" />
                    <Picker.Item color="#ff4000" label="Ahorro" value="ahorro" />
                    <Picker.Item color="#ff4000" label="Comida" value="comida" />
                    <Picker.Item color="#ff4000" label="Casa" value="casa" />
                    <Picker.Item color="#ff4000" label="Gastos Varios" value="gastos" />
                    <Picker.Item color="#ff4000" label="Ocio" value="ocio" />
                    <Picker.Item color="#ff4000" label="Salud" value="salud" />
                    <Picker.Item color="#ff4000" label="Suscripciones" value="suscripciones" />
                </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        ...globalStyles.contenedor,
        transform: [{ translateY: 0 }],
        marginTop: 80,
    },
    label: {
        fontSize: 22,
        fontWeight: '900',
        color: '#8f0021'
    },
    Picker: {
        height: 50,
        width: '100%',
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginTop: 20,
        color: '#8f0021',
        paddingHorizontal: 10
    }
})

export default Filtro
