import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import Modal from 'react-native-modal';

export default function SlideInLeftModalScreen() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={{ flex: 1, alignItems: 'center', marginTop: "10%" }}>
            <Button title="Open Modal" onPress={() => setModalVisible(true)} />
            <View >
                <Modal
                    isVisible={modalVisible}
                    transparent={true}
                    hideModalContentWhileAnimating={true}
                    onBackdropPress={() => setModalVisible(false)}
                    animationIn={'slideInLeft'}
                    animationOut={'slideOutRight'}
                >
                    <View style={styles.modalView}>
                        <Button title="Hide modal" onPress={() => setModalVisible(!modalVisible)} />
                        <Text>This is modal content!</Text>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "white",
    },
});
