import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const StyledButton = (props) => {
    const { type, label, onPress } = props;
    const backgroundColor = type === 'primary' ? 'black' : 'white';
    const textColor = type === 'primary' ? 'white' : 'black';

return (
    <View style={styles.container}>
     <Pressable
     style={[
        styles.button,
        { backgroundColor:backgroundColor }
    ]}
     onPress={onPress}>
    <Text style={[
        styles.text,
        {color: textColor}
    ]}>{label}</Text>
    </Pressable>   
    </View>
);
}

export default StyledButton;
