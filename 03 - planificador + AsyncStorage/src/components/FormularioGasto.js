import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView, View, TextInput, StyleSheet, Pressable} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import globalStyles from '../styles'

const FormularioGasto = ({
    setModal, 
    handleGasto, 
    gasto, 
    setGasto, 
    eliminarGasto
}) => {
    const [ nombre, setNombre] = useState('')
    const [ cantidad, setCantidad] = useState('')
    const [ categoria, setCategoria] = useState('')
    const [ id, setId ] = useState('')
    const [ fecha, setFecha ] = useState('')

    useEffect(() => {
        if(gasto?.nombre) {
            setNombre(gasto.nombre)
            setCantidad(gasto.cantidad)
            setCategoria(gasto.categoria)
            setId(gasto.id)
            setFecha(gasto.fecha)
        }
    }, [gasto])

    return (
        <SafeAreaView style={styles.contenedor}>
            <View style={styles.contenedorBotones}>
                <Pressable 
                    onLongPress={() => {
                        setModal(false)
                        setGasto({})
                    }}
                    style={[styles.btn, styles.btnCancelar]}
                >
                    <Text style={styles.btnTexto}>Cancelar</Text>
                </Pressable> 

                { !!id && (
                    <Pressable 
                        style={[styles.btn, styles.btnEliminar]}
                        onLongPress={() => eliminarGasto(id)}
                    >
                        <Text style={styles.btnTexto}>Eliminar</Text>
                    </Pressable> 
                ) }

            </View>    

            <View style={styles.formulario}>
                <Text style={styles.titulo}> 
                    {gasto?.nombre ? 'Editar Gasto' : 'Nuevo Gasto'} 
                </Text>

                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre Gasto</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Nombre del gasto. ej. Carro'
                        placeholderTextColor={'red'}
                        onChangeText={setNombre}
                        value={nombre}
                    />
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Cantidad Gasto</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Cantidad del gasto. ej. 300'
                        placeholderTextColor={'red'}
                        keyboardType='numeric'
                        onChangeText={setCantidad}
                        value={cantidad}
                    />
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Categoría Gasto</Text>
                    <Picker
                        selectedValue={categoria}
                        onValueChange={(valor) => {
                            setCategoria(valor)
                        }}
                    >
                        <Picker.Item color="red" label="-- Seleccione --" value="" />
                        <Picker.Item color="red" label="Ahorro" value="ahorro" />
                        <Picker.Item color="red" label="Comida" value="comida" />
                        <Picker.Item color="red" label="Casa" value="casa" />
                        <Picker.Item color="red" label="Gastos Varios" value="gastos" />
                        <Picker.Item color="red" label="Ocio" value="ocio" />
                        <Picker.Item color="red" label="Salud" value="salud" />
                        <Picker.Item color="red" label="Suscripciones" value="suscripciones" />
                    </Picker>
                </View>

                <Pressable 
                    style={styles.submitBtn}
                    onPress={() => handleGasto({ nombre, cantidad, categoria, id, fecha })}
                >
                    <Text style={styles.submitBtnTexto}>
                        {gasto?.nombre ? 'Guardar Cambios Gasto' : 'Agregar Gasto'} 
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#1E40AF', 
        flex: 1
    },
    contenedorBotones: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn: {
        padding: 10,
        marginTop: 30,
        marginHorizontal: 10,
        flex: 1
    },
    btnCancelar: {
        backgroundColor: '#DB2777', 
    },
    btnEliminar: {
        backgroundColor: 'red'
    },
    btnTexto: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#FFF'
    },
    formulario: {
        ...globalStyles.contenedor
    },
    titulo: {
        textAlign: 'center',
        fontSize: 28,
        marginBottom: 30,
        color: '#d463d0'
    },
    campo: {
        marginVertical: 10,
    },
    label: {
        color: '#2e152d',
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#F5F5F5',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        color: '#542352',
    },
    submitBtn: {
        backgroundColor: '#3B82F6',
        padding: 10,
        marginTop: 20
    },
    submitBtnTexto: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})

export default FormularioGasto