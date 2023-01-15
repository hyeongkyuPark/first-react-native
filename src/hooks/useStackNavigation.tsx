import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'App';

const useStackNavigaion = (screenName: keyof RootStackParamList) => {
  const route = useRoute<RouteProp<RootStackParamList, typeof screenName>>();
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, typeof screenName>
    >();

  return {route, navigation};
};

export default useStackNavigaion;
