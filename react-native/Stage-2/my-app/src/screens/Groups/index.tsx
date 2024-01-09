import { useState } from 'react';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GrupCard } from '@components/GrupCard';
import { Container } from './styles';

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['rock'])


  return (
    <Container>
      <Header/>
      <Highlight 
      title='Turmas' 
      subtitle='Jogue com a sua turma'/>


      <GrupCard title="Galera do Ignite"/>
    </Container>
  );
}

