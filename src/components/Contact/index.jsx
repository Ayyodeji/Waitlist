import { ReactComponent as Mail } from 'assets/icons/mail.svg'
import { ReactComponent as Insta } from 'assets/icons/instagram.svg'
import styled from 'styled-components'

const ContactStyle = styled.div`
  margin-top: 19px;

  a {
    display: flex;
    align-items: center;
  }

  span {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.secondaryTextColor};
    margin-left: 23px;
  }
  // a {
  //   font-size: 20px;
  //   color: ${({ theme }) => theme.colors.secondaryTextColor};

  // }
`

function Contact() {
  return (
    <>
      <ContactStyle>
        <a a href='mailto:info@thesispen.com' target='blank'>
          <Mail />
          <span><>info@thesispen.com</></span>
        </a>
      </ContactStyle>
      <ContactStyle>
        <a href='https://www.instagram.com/thesispen_ai/' target='_blank'>
          <Insta />
         <span><>Thesispen AI</></span>
        </a>
      </ContactStyle>
    </>
  )
}

export default Contact
