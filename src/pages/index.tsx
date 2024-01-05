import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { PiRocketLaunch } from 'react-icons/pi'

import { SignInButton } from '@/components/LoginButton'
import BookwiseCover from '@/images/bookwise-cover.jpg'
import BookwiseIcon from '@/images/bookwise-icon.svg'

import { ButtonsSection, Container, ImageSection, LoginSection } from './styles'

export default function Home() {
  return (
    <Container>
      <ImageSection>
        <Image src={BookwiseCover} alt="" />
        <Image src={BookwiseIcon} alt="" />
      </ImageSection>
      <LoginSection>
        <div>
          <h1>Boas vindas!</h1>
          <p>Faça seu login ou acesse como visitante.</p>
        </div>
        <ButtonsSection>
          <SignInButton href="" icon={<FcGoogle />}>
            Entrar com Google
          </SignInButton>
          <SignInButton href="" icon={<FaGithub />}>
            Entrar com GitHub
          </SignInButton>
          <SignInButton href="/home" icon={<PiRocketLaunch />}>
            Acessar como visitante
          </SignInButton>
        </ButtonsSection>
      </LoginSection>
    </Container>
  )
}
