import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    titles:{
        marginTop: '30%',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
    },
        subtitle: {
        fontSize: 16,
        color: '#5c5e62'
    },
    image:{
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },
    buttonContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 50,
    }
});

export default styles;