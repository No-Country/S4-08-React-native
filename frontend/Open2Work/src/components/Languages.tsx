import * as React from 'react';
import {List} from 'react-native-paper';
import {View} from 'react-native';

const Languages = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [selected, setSelected] = React.useState(['']);
  const handlePress = () => {
    setExpanded(!expanded);
  };
  return (
    <List.Section>
      <View
        style={{
          borderColor: 'white',
          borderRadius: 5,
          borderWidth: 1,
          marginVertical: 5,
        }}>
        <List.Accordion
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
              onPress={() => setSelected([...selected, 'ES'])}
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
              onPress={() => setSelected([...selected, 'EN'])}
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
              onPress={() => setSelected([...selected, 'PT'])}
            />
          </View>
        </List.Accordion>
      </View>
    </List.Section>
  );
};

export default Languages;
