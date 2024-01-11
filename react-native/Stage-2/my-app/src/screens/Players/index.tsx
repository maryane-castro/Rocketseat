import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { PlayerCard } from "@components/PlayerCard";
import { ButtonIcon } from "@components/ButtonIcon";
import { Highlight } from "@components/Highlight";
import { ListEmpty } from "@components/ListEmpty";
import { Header } from "@components/Header";
import { Filter } from "@components/Filter";
import { Input } from "@components/Input";

import { FlatList } from "react-native";
import { useState } from "react";
import { Button } from "@components/Button";
import { useRoute } from "@react-navigation/native";


type RouteParams = {
    group: string;
}


export function Players(){

    const [team, setTeam] = useState('Time A');
    const [players, setPlayers] = useState(['fsdfs', 'f', ])

    const route = useRoute()
    const { group } = route.params as RouteParams


    return(
        <Container>

            <Header showBackButton/>
            <Highlight 
                title={group}
                subtitle="Adicione a Galera"
            />

            <Form>
                <Input
                    placeholder="Digite seu nome"
                    autoCorrect={false}
                />
                <ButtonIcon 
                    icon="add"
                    />
            </Form>
            <HeaderList>
                <FlatList
                    data={['Time A', 'Time B']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter
                            title={item}
                            isActive={item === team}
                            onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal={true}
                />
                <NumberOfPlayers>
                    {players.length}
                </NumberOfPlayers>
            </HeaderList>

            <FlatList
                data={players}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <PlayerCard 
                    name={item}
                    onRemove={() => {}}
                    />
                )}
                ListEmptyComponent={() => (
                    <ListEmpty 
                        message='Cadastre a Primeira Turma'
                />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    {paddingBottom: 100},
                    players.length === 0 && { flex: 1}
                ]}
            />

            <Button
                title="Remover Turma"
                type="SECONDARY"
            />

            
        </Container>
    )
}