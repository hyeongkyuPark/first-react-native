import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {MainTabParamList} from 'src/routes/tabNavigations/MainTabs';

const useTabNavigaion = (screenName: keyof MainTabParamList) => {
  const route = useRoute<RouteProp<MainTabParamList, typeof screenName>>();
  const navigation =
    useNavigation<
      BottomTabNavigationProp<MainTabParamList, typeof screenName>
    >();

  return {route, navigation};
};

export default useTabNavigaion;
