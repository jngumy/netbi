import { createStackNavigator } from 'react-navigation-stack'
import Operaciones from '../screens/Operaciones'
import Salas from '../screens/Salas'
import PantallaTres from '../screens/PantallaTres'
import partediario from '../screens/partediario'
import slots from '../screens/slots'
import mesas from '../screens/mesas'
import ResultadosTotales from '../screens/ResultadosTotales'

const AppNavigation = createStackNavigator(
    {
      Operaciones: { screen: Operaciones },
      Salas: {screen: Salas},
      PantallaTres: {screen: PantallaTres},
      partediario: {screen: partediario},
      slots: {screen: slots},
      mesas: {screen: mesas},
      ResultadosTotales : {screen: ResultadosTotales}
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