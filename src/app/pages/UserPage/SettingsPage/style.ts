import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 400px !important;

  .header {
    font-weight: bold;
    font-size: 16px;
    padding: 24px 24px 12px 24px;
  }
  .link {
    float: right;
    color: #0094ff;
    &:hover {
      cursor: pointer;
      color: #1565c0;
    }
  }

  .max-w-100 {
    max-width: 100% !important;
  }

  .content {
    overflow-y: auto;
    padding: 24px;

    .title {
      font-weight: bold;
    }

    .title,
    .MuiFormControlLabel-root {
      margin-bottom: 16px !important;
    }

    button {
      margin-bottom: 24px;
    }

    .wallet_text {
      font-weight: bold;
      color: #0094ff;
    }

    @media (max-width: 768px) {
      padding: 24px 12px;
    }
  }

  .footer {
    display: flex;
    padding: 16px 24px;

    button {
      margin: 0 auto;
    }
  }

  .d-flex-column,
  .box-content {
    display: flex;
    flex-direction: column;
  }

  .box-content {
    height: calc(100% - 48px);
  }
`;

export const ContentPopup = styled.div`
  .custom-field {
    margin-bottom: 16px;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }
`;
