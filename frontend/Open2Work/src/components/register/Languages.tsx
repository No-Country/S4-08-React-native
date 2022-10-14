import * as React from 'react';
import {List} from 'react-native-paper';
import {View} from 'react-native';
import {setLocale} from 'yup';
interface Props {
  onPress?: (field: string, value: any) => void;
  error: boolean;
  onSelect?: any;
}

const Languages = ({onPress, error, onSelect}: Props) => {
  const [expanded, setExpanded] = React.useState(false);
  const [selected, setSelected] = React.useState(['']);

  const handlePress = () => {
    setExpanded(!expanded);
  };

  const handleSelect = (lang: string) => {
    if (selected.includes(lang)) {
      setSelected(selected.filter(item => item !== lang));
      if (onPress) {
        onPress(
          'languages',
          selected.filter(item => item !== lang),
        );
      }
    } else {
      if (selected.length === 1 && selected[0] === '') {
        setSelected([lang]);
        if (onPress) {
          onPress('languages', [lang]);
        }
      } else {
        setSelected([...selected, lang]);
        if (onSelect) {
          onSelect([...selected, lang]);
        }
        if (onPress) {
          onPress('languages', [...selected, lang]);
        }
      }
    }
  };

  return (
    <List.Section>
      <View
        style={{
          borderColor: error ? 'rgb(180,0,0)' : 'white',
          borderRadius: 5,
          borderWidth: 1,
          marginVertical: 5,
        }}>
        <List.Accordion
          titleStyle={{color: error ? 'rgb(180,0,0)' : 'white'}}
          title="Languages"
          left={props => (
            <List.Icon {...props} color="white" icon="language-outline" />
          )}
          right={props => (
            <List.Icon
              {...props}
              icon={expanded ? 'caret-down-outline' : 'caret-forward-outline'}
            />
          )}
          expanded={expanded}
          onPress={handlePress}
          style={{padding: 0}}>
          <View
            style={{
              borderRadius: 5,
              borderWidth: 1,
              borderColor: 'grey',
              paddingLeft: 0,
            }}>
            <List.Item
              title="Spanish"
              left={props => (
                <List.Icon
                  {...props}
                  icon={
                    selected.includes('ES')
                      ? 'radio-button-on-outline'
                      : 'radio-button-off-outline'
                  }
                />
              )}
              onPress={() => handleSelect('ES')}
            />
            <List.Item
              title="English"
              left={props => (
                <List.Icon
                  {...props}
                  icon={
                    selected.includes('EN')
                      ? 'radio-button-on-outline'
                      : 'radio-button-off-outline'
                  }
                />
              )}
              onPress={() => handleSelect('EN')}
            />
            <List.Item
              title="Portuguese"
              left={props => (
                <List.Icon
                  {...props}
                  icon={
                    selected.includes('PT')
                      ? 'radio-button-on-outline'
                      : 'radio-button-off-outline'
                  }
                />
              )}
              onPress={() => handleSelect('PT')}
            />
          </View>
        </List.Accordion>
      </View>
    </List.Section>
  );
};

export default Languages;
