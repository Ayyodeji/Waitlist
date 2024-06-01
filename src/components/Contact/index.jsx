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
`

function Contact() {
  return (
    <>
      <ContactStyle>
        <div>
          <Mail />
          <span>info@thesispen.com</span>
        </div>
      </ContactStyle>
      <ContactStyle>
        <div>
          <Insta />
          <span>Thesispen AI</span>
        </div>
      </ContactStyle>
    </>
  )
}

export default Contact
