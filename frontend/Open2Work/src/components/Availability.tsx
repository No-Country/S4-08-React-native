import * as React from 'react';
import {List} from 'react-native-paper';
import {View} from 'react-native';

const Availability = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [selected, setSelected] = React.useState('');
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
          title="Availability"
          left={props => (
            <List.Icon {...props} color="white" icon="briefcase-outline" />
          )}
          right={props => (
            <List.Icon
              {...props}
              icon={expanded ? 'caret-down-outline' : 'caret-forward-outline'}
            />
          )}
          expanded={expanded}
          onPress={handlePress}
          style={{borderRadius: 0, padding: 0, margin: 0}}>
          <View
            style={{
              borderRadius: 5,
              borderWidth: 1,
              borderColor: 'grey',
            }}>
            <List.Item
              title="Full-Time ( 8 - 12 hs )"
              left={props => (
                <List.Icon
                  {...props}
                  icon={
                    selected === 'front'
                      ? 'radio-button-on-outline'
                      : 'radio-button-off-outline'
                  }
                />
              )}
              onPress={() => setSelected('front')}
            />
            <List.Item
              title="Part-Time ( 4 - 6 hs )"
              left={props => (
                <List.Icon
                  {...props}
                  icon={
                    selected === 'back'
                      ? 'radio-button-on-outline'
                      : 'radio-button-off-outline'
                  }
                />
              )}
              onPress={() => setSelected('back')}
            />
          </View>
        </List.Accordion>
      </View>
    </List.Section>
  );
};

export default Availability;
