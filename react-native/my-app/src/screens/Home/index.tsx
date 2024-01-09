import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from "react-native"
import { styles } from "./styles"
import React, { useState } from "react"

import { Participant } from "../components/Participant"

// iniciar no terminal com "npx expo start"
export function Home() {
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('');


    function handleParticipantAdd(){
        if (participantName == ""){
            Alert.alert("Participante Vazio", "Esse campo está vazio, tente um nome válido!")
            return
        }
        if(participants.includes(participantName)) {
            Alert.alert("Participante Existe", "Já existe participante com esse nome")
            return
        }

        setParticipants(prevState => [...prevState, participantName]);
        setParticipantName('');
    }

    function handleParticipantRemove(name: string){
        

        Alert.alert("Remover", `Remover o participante ${name}?`, [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
            }
        ])
    }

    return(
        <View style={styles.container}> 
            <Text style={styles.eventName}>
                Nome do Evento
            </Text>
            <Text style={styles.eventDate}>
                Sexta, 4 de Novembro de 2022
            </Text>

            <View style={styles.form}>
                <TextInput 
                style={styles.input}
                placeholder="Nome do Participante"
                placeholderTextColor={"#6b6b6b"}
                onChangeText={setParticipantName}
                value={participantName}
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant 
                    key={item}
                    name={item} 
                    onRemove={() => handleParticipantRemove(item)}/>
                    )
                }
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguem chegou no evento ainda.
                    </Text>
                )}
            />

        </View>
    )
}
