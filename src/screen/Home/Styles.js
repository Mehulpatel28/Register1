import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    img: {
        height: 80,
        width: 80,
        marginTop: 9,
        marginLeft: 15,
        borderRadius: 30,
        resizeMode: 'contain',
    },
    listItem: {
        height: 100,
        flex: 1,
        marginVertical: 10,
        backgroundColor: '#50d093',
        flexDirection: 'row',
    },
    item: {
        color: 'white',
        fontSize: 20,
    },
    email: {
        color: 'white',

        fontSize: 20,
    },
    text: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        marginLeft: 20,
        marginTop: 30
    },
});

export default styles;