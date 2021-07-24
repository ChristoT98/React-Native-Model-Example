import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/core'

export default function HomeScreen() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, alignItems: "center", marginTop: "10%", }}>
            <View style={{ margin: 20 }}>
                <Button title="Default modal" onPress={() => navigation.navigate("Default modal")} />
            </View>
            <View style={{ margin: 20 }}>
                <Button title="Slide in left modal" onPress={() => navigation.navigate("Slide in left modal")} />
            </View>
            <View style={{ margin: 20 }}>
                <Button title="Slower modal" onPress={() => navigation.navigate("Slower modal")} />
            </View>
            <View style={{ margin: 20 }}>
                <Button title="Animated modal" onPress={() => navigation.navigate("Animated modal")} />
            </View>
            <View style={{ margin: 20 }}>
                <Button title="Bottom half modal" onPress={() => navigation.navigate("Bottom half modal")} />
            </View>



        </View>
    )
}
