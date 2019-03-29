import React from 'react'
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import 'moment/locale/pt-br'
import Swipeable from 'react-native-swipeable'

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

  const leftContent = (
    <View style={styles.exclude}>
      <Icon
        name='trash'
        size={20}
        color='white'
      />
      <Text style={styles.excludeText}>Excluir</Text>
    </View>
  )

  const rightContent = [
    <TouchableOpacity
      style={[styles.exclude, { justifyContent: 'flex-start', padding: 20 }]}
      onPress={() => props.onDelete(props.id)}
    >
      <Icon
        name='trash'
        size={30}
        color='white'
      />
    </TouchableOpacity>
  ]

  return (
    <Swipeable
      leftActionActivationDistance={200}
      onLeftActionActivate={() => props.onDelete(props.id)}
      leftContent={leftContent}
      rightButtons={rightContent}
    >
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => props.onToggleTask(props.id)}>
          <View style={styles.checkContainer}>
            {check}
          </View>
        </TouchableWithoutFeedback>
        <View>
          <Text style={[styles.description, descStyle]}>{props.desc}</Text>
          <Text style={styles.date}>{moment(props.estimateAt).locale('pt-br').format('ddd, D [de] MMMM [de] YYYY')}</Text>
        </View>
      </View>
    </Swipeable>
  )
}
