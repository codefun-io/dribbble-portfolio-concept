import React from 'react'
import styled from 'styled-components'

const Warpper = styled.div`
  background-color: #606060;
  padding: 0 5.5rem;
  height: 14rem;
  @media only screen and (max-width: 320px) {
    padding: 0 3rem;
  }
`

const LogoArea = styled.a`
  padding-top: 2.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100px;
`

const Logo = styled.img`
  width: 2.5rem;
  height: 2.2rem;
  margin-right: 0.4rem;
`

const Social = styled.div`
  padding: 1.5rem 0 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Icon = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  margin: 0 0.4rem;
`

const CopyRight = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1.2rem;
`

const Left = styled.div`
  display: flex;
`

const Right = styled.div`
  display: flex;
`

const Text = styled.div`
  color: ${props => props.theme && props.theme.color};
  font-size: ${props => props.theme && props.theme.fontSize};
  padding: ${props => props.theme && props.theme.padding};
  font-weight: lighter;
`

const Link = styled.a`
  color: ${props => props.theme && props.theme.color};
  font-size: ${props => props.theme && props.theme.fontSize};
  padding: ${props => props.theme && props.theme.padding};
  font-weight: lighter;
`

const HideInSmall = styled.div`
  @media only screen and (max-width: 618px) {
    display: none;
  }
`

const Footer = () => (
  <Warpper className="footer">
    <LogoArea className="logo-area">
      <Logo src="static/img/footer-logo.png" />
      <Text theme={{ color: '#CACACA', fontSize: '1.3rem' }}>Hexon</Text>
    </LogoArea>
    <Social>
      <Link>
        <Icon src="static/img/facebook.png" />
      </Link>
      <Link>
        <Icon src="static/img/dribbble.png" />
      </Link>
      <Link>
        <Icon src="static/img/twitter.png" />
      </Link>
    </Social>
    <CopyRight>
      <Left>
        <Text
          theme={{
            color: '#ABABAB',
            fontSize: '0.9rem',
            padding: '0 1rem 0 0'
          }}
        >
          Hexon, 2016.
        </Text>
        <HideInSmall>
          <Text theme={{ color: '#868686', fontSize: '0.9rem' }}>
            Work rights belong to their respective owners
          </Text>
        </HideInSmall>
      </Left>
      <Right>
        <Link
          theme={{
            color: '#AEAEAE',
            fontSize: '0.9rem',
            padding: '0 2rem 0 0'
          }}
        >
          Legal
        </Link>
        <Link theme={{ color: '#AEAEAE', fontSize: '0.9rem' }}>Support</Link>
      </Right>
    </CopyRight>
  </Warpper>
)

export default Footer
