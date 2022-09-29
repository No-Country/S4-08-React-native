import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {TextInputProps} from 'react-native-paper/lib/typescript/components/TextInput/TextInput';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends Omit<TextInputProps, 'theme'> {
  iconName?: string;
  theme?: ReactNativePaper.Theme;
  onClick?: (value: boolean) => void;
}

export const MyInput = ({
  iconName,
  onClick,
  secureTextEntry,
  ...props
}: Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginVertical: 10,
      }}>
      {iconName && (
        <TouchableOpacity
          style={{position: 'absolute', top: 29.25, left: 10, zIndex: 999}}
          onPress={() => onClick && onClick(!secureTextEntry)}>
          <Icon name={iconName} size={30} color="#fff" />
        </TouchableOpacity>
      )}

      <TextInput
        {...props}
        mode="outlined"
        secureTextEntry={secureTextEntry}
        style={{
          flex: 1,
          paddingLeft: 40,
          paddingVertical: 10,
        }}
      />
    </View>
  );
};
