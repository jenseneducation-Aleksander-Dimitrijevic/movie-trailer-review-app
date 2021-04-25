import styled from "styled-components";
import { ColorsGlobal as color } from "../../styles/Colors";

export const FormContainer = styled.form`
  width: 100%;
  border-radius: 5px;
  background: ${color.deepBlue};
  position: relative;

  .account {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px 5px 0 0;
    background: ${color.darkGray};
    color: ${color.white};

    &.signup {
      align-items: flex-start;
      margin: 0 0 20px;
      .account-title {
        font-size: 20px;
        padding: 20px 0 20px 24px;
      }
    }

    &.footer {
      border-radius: 0 0 5px 5px;

      .account-title {
        text-transform: initial;

        &-large {
          font-size: 38px;
        }
      }

      .icons {
        padding: 0;
      }

      .agreement {
        text-align: center;
        font-size: 12px;
        color: ${color.lightBlue};
        font-weight: 600;
        line-height: 1.6;
        margin: 20px auto;
        width: 90%;
      }
    }

    &-title {
      text-align: center;
      color: ${color.white};
      font-size: 14px;
      padding: 2rem 0;
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }
    .icons {
      display: flex;
      padding: 0 0 2rem;
      gap: 20px;
      &-content {
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
      }
      &-logo {
        font-size: 50px;
      }

      &-primary {
        background: ${color.darkBlue};
      }

      &-light-theme {
        background: ${color.purpleGray};
      }
    }
  }
  .form-content {
    padding: 1.25rem 1.5rem;
  }
  .form-header {
    margin: 0 0 2rem;
  }
  .form-title {
    color: ${color.white};
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .form-row {
    position: relative;
    &:not(:nth-of-type(1)) {
      margin: 2rem 0 0;
    }

    &.focus {
      .form-label {
        transform: translateY(-20px);
        color: ${color.lightBlue};
      }
    }

    .form-label {
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.03em;
      position: absolute;
      bottom: 10px;
      color: ${color.white};
      transition: all 0.2s ease;
    }

    .form-field {
      width: 100%;
      border: none;
      background: transparent;
      outline: none;
      border-bottom: 1px solid ${color.purpleGray};
      padding: 0 0 5px;
      color: ${color.white};
      transition: all 0.3s ease;
      letter-spacing: 0.03em;
      font-weight: 800;
      &:focus {
        border-color: ${color.orange};
      }
      &::placeholder {
        color: ${color.white};
        font-weight: 800;
      }
    }
  }

  .form-submit {
    display: block;
    width: 100%;
    height: 45px;
    text-transform: uppercase;
    color: ${color.white};
    font-size: 1rem;
    font-weight: 600;
    border: none;
    letter-spacing: 0.03em;
    cursor: pointer;
    border-radius: 5px;
    background: ${color.orange};
    transition: all 0.3s ease;
    margin: 2rem 0 0;

    @media screen and (min-width: 1024px) {
      &:hover {
        background: ${color.lightBlue};
      }
    }
  }

  .form-redirect {
    background: transparent;
    color: ${color.skyBlue};
    font-size: 12px;
    border: none;
    margin: 0 auto;
    text-align: center;
    display: block;
    font-weight: 600;
    cursor: pointer;
  }

  .error-msg {
    padding: 30px 0 0;
    color: ${color.orange};
    font-size: 12px;
    letter-spacing: 0.03em;
    font-weight: 600;
  }
`;
