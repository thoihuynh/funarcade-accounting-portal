import styled from 'styled-components';
import { TRANSITION_TIME } from 'utils/constants';

export const Wrapper = styled.div`
  color: #ffffff;
  .banner {
    height: 340px;
    background-position: 50% center;
    background-size: cover;
    @media (max-width: 992px) {
      height: 320px;
    }
  }

  h4 {
    font-weight: var(--font-weight-bold);
    font-size: 24px;
    margin: 20px 0;
  }

  h3 {
    font-weight: var(--font-weight-bold);
    font-size: 32px;
    margin-top: 0;
    padding-top: 48px;
  }

  p {
    font-weight: 600;
    font-size: var(--font-size-xl);
    padding: 0 16px;
    text-align: justify;
  }

  .tag {
    width: 116px;
    height: 24px;
    top: 20px;
    right: 0;
    position: absolute;
  }
`;

export const WelcomeWrapper = styled.div`
  background-size: cover;
  .content {
    text-align: center;
    max-width: 992px;
    margin: 0 auto;
    padding: 60px 0 32px 0;
    .title {
      font-weight: var(--font-weight-bold);
      font-size: 40px;
      text-align: center;
    }
  }

  @media (min-width: 1440px) {
    background-position: center;
  }
`;

export const ProductWrapper = styled.div`
  padding: 16px 0 76px 0;
  background: linear-gradient(180deg, #0b0148 0%, #01338e 100%);
  text-align: center;
`;

export const ThumbnailWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  max-width: 1040px;
  margin: 0 auto;

  .thumbnail-item {
    position: relative;
    transition: ${TRANSITION_TIME}s;
    .thumbnail-img {
      height: 200px;
      width: 312px;
      border-radius: var(--border-radius-xl);
    }
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      transition: ${TRANSITION_TIME}s;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    overflow: auto;
    padding: 0 var(--padding-md);
  }

  @media (min-width: 768px) and (max-width: 992px) {
    padding: 0 var(--padding-md);
    flex-wrap: wrap;
  }
`;

export const StakingWrapper = styled.div`
  background-position: center;
  background-size: cover;
  text-align: center;
  .staking-content {
    max-width: 992px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    gap: 36px;
    align-items: center;
    padding: 0 8px 48px 8px;
    .staking-right {
      border-radius: var(--border-radius-md);
      max-width: 440px;
      height: 212px;
      position: relative;
      transition: ${TRANSITION_TIME}s;

      .staking-img {
        width: 100%;
        height: 100%;
        border-radius: var(--border-radius-md);
      }
      &:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: ${TRANSITION_TIME}s;
      }
    }

    .text {
      width: 50%;
      ul {
        margin-left: 28px;
        list-style: disc;
        li {
          color: #ffe270;
          font-size: 24px;
        }
      }
      p {
        padding: 0;
        margin: 0;
        font-weight: 600;
        font-size: 20px;
        text-align: left;
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      .text {
        width: 100%;
      }
    }
  }
`;

export const FooterWrapper = styled.div`
  background: #041b35;
  .footer-content {
    padding: var(--padding-md) var(--padding-sm);
    max-width: 992px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .social {
      display: flex;
      gap: var(--grid-gap-xxl);
      img {
        width: 40px;
        height: 40px;
      }
    }

    @media (max-width: 768px) {
      .social {
        gap: var(--grid-gap-sm);
      }
    }
  }
`;

export const FaucetPopupContentWrap = styled.div`
  font-weight: 600;
  font-size: 14px;

  a {
    color: #0094ff;
  }

  input {
    padding-top: 8px;
  }

  button {
    margin-top: 20px;
  }

  .custom-field {
    margin-top: 8px;
  }
`;
