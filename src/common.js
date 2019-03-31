import { Alert } from 'react-native'

const server = 'http://10.0.3.2:3000'

function showError(err) {
  Alert.alert('Ops! Ocorreu um problema!', `Mensagem: ${err}`)
}

export { server, showError }
