import React, { Component } from 'react'

import {
  View,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert
} from 'react-native'
import moment from 'moment'

import styles from './styles'

const initialState = {
  desc: '',
  date: new Date()
}

export default class AddTask extends Component {
  state = { ...initialState }

  save = () => {
    if (!this.state.desc.trim()) {
      Alert.alert('Dados inválidos', 'Informe uma descrição para a tarefa')
      return
    }
    const data = { ...this.state }
    this.props.onSave(data)
    this.setState({ ...initialState })
  }

  render() {
    return (
      <Modal
        onRequestClose={this.props.onCancel}
        visible={this.props.isVisible}
        animationType='slide'
        transparent={true}
      >
        <TouchableWithoutFeedback onPress={this.state.onCancel}>
          <View style={styles.offset}></View>
        </TouchableWithoutFeedback>
        <View style={styles.container}>
          <Text style={styles.header}>Nova Tarefa!</Text>
          <TextInput
            placeholder="Descrição..."
            style={styles.input}
            onChangeText={desc => this.setState({ desc })}
            value={this.state.desc}
          />
          <View style={styles.buttonGroup}>
            <TouchableOpacity onPress={this.props.onCancel}>
              <Text style={styles.button}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.save}>
              <Text style={styles.button}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={this.state.onCancel}>
          <View style={styles.offset}></View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  }
}
