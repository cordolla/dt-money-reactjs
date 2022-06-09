import logoImg from '../../assets/logo.svg'

import { Container, Content } from './style'

interface HeaderProps {
  onOpenNewTrasanctionModal: () => void;
}

export function Header({ onOpenNewTrasanctionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
      <img src={logoImg} alt="dt money" />
      <button type="button" onClick={onOpenNewTrasanctionModal}>
        Nova transação
      </button>

      
      </Content>
    </Container>
  )
}