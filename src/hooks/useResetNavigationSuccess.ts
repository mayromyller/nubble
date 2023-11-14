import { useNavigation } from '@react-navigation/native'

import { AuthStackParamList } from '../routes/authStack.routes'

export function useResetNavigationSuccess() {
  const navigation = useNavigation()

  function reset(params: AuthStackParamList['SuccessScreen']) {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'LoginScreen'
        },
        {
          name: 'SuccessScreen',
          params
        }
      ]
    })
  }

  return { reset }
}
