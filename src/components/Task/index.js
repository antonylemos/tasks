import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import 'moment/locale/pt-br'

import styles from './styles'

import commonStyles from '../../commonStyles'

export default props => {
  let check = null
  if (props.doneAt !== null) {
    check = (
      <View style={styles.done}>
        <Icon
          name='check'
          size={20}
          color={commonStyles.colors.secondary}
        />
      </View>
    )
  } else {
    check = <View style={styles.pending} />
  }

  const descStyle = props.doneAt !== null ? { textDecorationLine: 'line-through' } : {}

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => props.toggleTask(props.id)}>
        <View style={styles.checkContainer}>
          {check}
        </View>
      </TouchableWithoutFeedback>
      <View>
        <Text style={[styles.description, descStyle]}>{props.desc}</Text>
        <Text style={styles.date}>{moment(props.estimateAt).locale('pt-br').format('ddd, D [de] MMMM [de] YYYY')}</Text>
      </View>
    </View>
  )
}
