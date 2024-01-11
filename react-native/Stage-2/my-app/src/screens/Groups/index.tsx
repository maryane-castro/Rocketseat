import { useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native'  // função de navegação do handleNewGroup

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GrupCard } from '@components/GrupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { Container } from './styles';
import { groupsGetAll } from '../../storage/group/groupsGetAll';



export function Groups() {
  const [groups, setGroups] = useState<string[]>([])
  const navigation = useNavigation()

  function handleNewGroup(){
    navigation.navigate('new')
  }

  async function fetchGroups(){
    try{
      const data = await groupsGetAll();
      setGroups(data);
    }catch(error){
      console.log(error)
    }
  }


  useFocusEffect(useCallback(() => {
    fetchGroups();
  },[]));


  return (
    <Container>
      <Header/>
      <Highlight 
      title='Turmas' 
      subtitle='Jogue com a sua turma'/>

      <FlatList
        data={groups} //carregar os groups
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GrupCard 
            title={item}
          />
        )}
        contentContainerStyle={
          groups.length === 0 && { flex: 1 }
        }
        ListEmptyComponent={() => (<ListEmpty message='Cadastre a Primeira Turma'/>)}
      />
      <Button
        title='Criar Nova Turma'
        onPress={handleNewGroup}
      />

    </Container>
  );
}

