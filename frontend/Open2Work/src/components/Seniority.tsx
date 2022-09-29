import * as React from 'react';
import {List} from 'react-native-paper';
import {View} from 'react-native';

const Seniority = () => {
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
          title="Seniority"
          left={props => (
            <List.Icon {...props} color="white" icon="analytics-outline" />
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
              title="Trainee ( ~1 Year )"
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
              title="Junior ( 1+ Year )"
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
            <List.Item
              title="Junior Advanced ( 2+ Year )"
              left={props => (
                <List.Icon
                  {...props}
                  icon={
                    selected === 'uix'
                      ? 'radio-button-on-outline'
                      : 'radio-button-off-outline'
                  }
                />
              )}
              onPress={() => setSelected('uix')}
            />
            <List.Item
              title="Semi-Senior ( 3+ Year )"
              left={props => (
                <List.Icon
                  {...props}
                  icon={
                    selected === 'qa'
                      ? 'radio-button-on-outline'
                      : 'radio-button-off-outline'
                  }
                />
              )}
              onPress={() => setSelected('qa')}
            />
            <List.Item
              title="Semi-Senior Advanced ( 4+ Year )"
              left={props => (
                <List.Icon
                  {...props}
                  icon={
                    selected === 'qa'
                      ? 'radio-button-on-outline'
                      : 'radio-button-off-outline'
                  }
                />
              )}
              onPress={() => setSelected('qa')}
            />
            <List.Item
              title="Senior ( 5+ Year )"
              left={props => (
                <List.Icon
                  {...props}
                  icon={
                    selected === 'qa'
                      ? 'radio-button-on-outline'
                      : 'radio-button-off-outline'
                  }
                />
              )}
              onPress={() => setSelected('qa')}
            />
          </View>
        </List.Accordion>
      </View>
    </List.Section>
  );
};

export default Seniority;
