import React, { Component } from 'react'

import {
  View,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
  DatePickerAndroid
} from 'react-native'
import moment from 'moment'

import styles from './styles'

export default class AddTask extends Component {
  constructor(props) {
    super(props)
    this.state = this.getInitialState()
  }

  getInitialState = () => {
    return {
      desc: '',
      date: new Date()
    }
  }

  save = () => {
    if (!this.state.desc.trim()) {
      Alert.alert('Dados inválidos', 'Informe uma descrição para a tarefa')
      return
    }
    const data = { ...this.state }
    this.props.onSave(data)
  }

  handleDateAndroidChanged = () => {
    DatePickerAndroid.open({
      date: this.state.date
    }).then(e => {
      if (e.action !== DatePickerAndroid.dismissedAction) {
        const momentDate = moment(this.state.date)
        momentDate.date(e.day)
        momentDate.month(e.month)
        momentDate.year(e.year)
        this.setState({ date: momentDate.toDate() })
      }
    })
  }

  render() {
    return (
      <Modal
        onRequestClose={this.props.onCancel}
        visible={this.props.isVisible}
        animationType='slide'
        transparent={true}
        onShow={() => this.setState({ ...this.getInitialState() })}
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
          <TouchableOpacity onPress={this.handleDateAndroidChanged}>
            <Text style={styles.date}>{moment(this.state.date).format('ddd, D [de] MMMM [de] YYYY')}</Text>
          </TouchableOpacity>
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
