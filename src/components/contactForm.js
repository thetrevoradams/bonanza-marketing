import React from 'react' // eslint-disable-line no-unused-vars
import TextField from '@material-ui/core/TextField'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const formWrapper = css`
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    & > div {
      margin: 0 auto;
      * {
        font-size: 16px;
      }
    }
  }
`
const inputContainer = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;

  & > div {
    flex: 1;
  }
  & > div:last-of-type {
    margin-left: 10px;
  }

  @media (max-width: 751px) {
    flex-direction: column;
    & > div {
      width: 100%;
      margin-top: 8px;
    }
    & > div:last-of-type {
      margin-left: 0;
    }
  }
`
const submitBtn = css`
  font-family: 'Montserrat', sans-serif;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #081b33cc;
  font-size: 14px;
  padding: 6px 16px;
  margin-top: 8px;
  min-width: 64px;
  border: 2px solid #081b33cc;
  font-weight: 600;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #081b33cc;
    color: #fff;
  }
`

const ContactForm = ({ classes }) => (
  <div css={formWrapper}>
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/success"
    >
      <div css={inputContainer}>
        <input type="hidden" name="form-name" value="contact" />
        <TextField
          id="outlined-name-input"
          label="Name"
          type="text"
          name="name"
          autoComplete="name"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-email-input"
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          required
          variant="outlined"
        />
      </div>
      <TextField
        id="outlined-multiline-static"
        label="Message"
        name="message"
        placeholder="How may we help you?"
        multiline
        fullWidth
        rows="8"
        margin="dense"
        variant="outlined"
      />

      <button css={submitBtn} type="submit">
        SUBMIT
      </button>
    </form>
  </div>
)

export default ContactForm
