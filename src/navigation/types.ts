import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Info: {uri: string};
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;
export type InfoScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Info'
>;
