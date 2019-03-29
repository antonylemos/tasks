import React, { Component } from 'react'

import {
  View,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native'
import moment from 'moment'

import styles from './styles'

import commonStyles from '../../commonStyles'

const initialState = {
  desc: '',
  date: new Date()
}

export default class AddTask extends Component {
  state = { ...initialState }

  save = () => {
    const data = { ...this.state }
    this.props.onSave(data)
    this.setState({ ...initialState })
  }

  render() {
    return (

    )
  }
}
