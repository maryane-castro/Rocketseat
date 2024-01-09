import { Container, Title ,Icon } from "./styles";
import { TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {
    title: string;
}

export function GrupCard({ title }: Props){
    return(
        <Container>
            <Icon/>
            <Title>
                {title}
            </Title>
        </Container>
    );
}