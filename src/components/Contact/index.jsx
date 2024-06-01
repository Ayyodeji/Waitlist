import { ReactComponent as Mail } from 'assets/icons/mail.svg'
import { ReactComponent as Insta } from 'assets/icons/instagram.svg'
import styled from 'styled-components'

const ContactStyle = styled.div`
  margin-top: 19px;

  div {
    display: flex;
    align-items: center;
  }

  span {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.secondaryTextColor};
    margin-left: 23px;
  }
  a {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.secondaryTextColor};

  }
`

function Contact() {
  return (
    <>
      <ContactStyle>
        <div>
          <Mail />
          <span><a href='mailto:info@thesispen.com' target='blank'>info@thesispen.com</a></span>
        </div>
      </ContactStyle>
      <ContactStyle>
        <div>
          <Insta />
         <span> <a href='https://www.instagram.com/thesispen_ai/' target='_blank'>Thesispen AI</a></span>
        </div>
      </ContactStyle>
    </>
  )
}

export default Contact
