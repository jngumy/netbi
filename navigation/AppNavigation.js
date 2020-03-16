import { createStackNavigator } from 'react-navigation-stack'
import Operaciones from '../screens/Operaciones'
import Salas from '../screens/Salas'
import PantallaTres from '../screens/PantallaTres'
import ParteDiario from '../screens/ParteDiario'

const AppNavigation = createStackNavigator(
    {
      Operaciones: { screen: Operaciones },
      Salas: {screen: Salas},
      PantallaTres: {screen: PantallaTres},
      ParteDiario: {screen: ParteDiario}
    },
    {
      initialRouteName: 'Operaciones',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#098bfa',
          height: 79
          
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '300',
          fontSize: 19
        }
    
      },
    },
  )
  
  export default AppNavigation