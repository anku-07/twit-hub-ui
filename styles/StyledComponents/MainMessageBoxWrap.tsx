import { Box, styled } from '@mui/material';

export const MainMessageBoxWrap = styled(Box)`
  position: relative;
  .wrapper_inboxMain {
    display: flex;
    position: relative;
    height: calc(100dvh - 170px);
    @media (max-width: 1199px) {
      height: calc(100dvh - 160px);
      overflow: hidden;
    }
    @media (max-width: 599px) {
      height: calc(100dvh - 140px);
    }
    &.active {
      @media (max-width: 899px) {
        .wrapper_rightChatBox {
          filter: blur(10px);
          touch-action: none;
          height: 100%;
          overflow: hidden;
          .chatWrapperTxtMsg {
            height: inherit !important;
            overflow: hidden !important;
          }
        }
      }
    }
    .wrapper_leftPart {
      width: 435px;
      background: ${({ theme }) => theme.palette.common.white};
      border: 1px solid ${({ theme }) => theme.palette.customColors?.placeText};
      border-radius: 20px;
      padding: 30px 0;
      box-shadow: 0px 0px 200px 0px #0000000f;
      @media (max-width: 1499px) {
        width: 320px;
      }
      @media (max-width: 1199px) {
        width: 300px;
        padding: 16px 0px;
        border-radius: 16px;
      }
      @media (max-width: 899px) {
        position: absolute;
        left: -100%;
        height: 100%;
        top: 0;
        z-index: 9;
        transform: translateX(-100%);
        transition: all 0.3s ease-in-out;
        &.active {
          left: 0;
          transform: translateX(0);
        }
      }
      @media (max-width: 599px) {
        padding: 12px 0;
        border-radius: 12px;
        width: 280px;
      }
      .closeIconChat {
        display: none;
        @media (max-width: 899px) {
          position: absolute;
          right: -30px;
          top: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: ${({ theme }) => theme.palette.common.white};
          color: ${({ theme }) => theme.palette.common.black};
          border: 1px solid ${({ theme }) => theme.palette.common.black};
          margin-right: 8px;
          &:hover {
            background: ${({ theme }) => theme.palette.common.black};
            color: ${({ theme }) => theme.palette.common.white};
          }
        }
      }
      h1 {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 16px;
        color: ${({ theme }) => theme.palette.common.black};
        font-weight: 700;
        padding: 0 30px;
        text-transform: capitalize;
        @media (max-width: 1199px) {
          font-size: 18px;
          margin-bottom: 12px;
          padding: 0 16px;
        }
      }
      .chatBox {
        position: relative;
        margin-bottom: 20px;
        padding: 0 30px;
        @media (max-width: 1199px) {
          margin-bottom: 16px;
          padding: 0 16px;
        }
      }
      .allChatList {
        position: relative;
        height: calc(100% - 115px);
        overflow-y: auto;
        scrollbar-width: thin;
        scrollbar-color: ${({ theme }) => theme.palette.primary.main} transparent;
        padding: 0 30px;
        @media (max-width: 1199px) {
          height: calc(100% - 100px);
          padding: 0 16px;
        }
        .singleChatList {
          display: flex;
          align-items: center;
          transition: all 0.3s ease-in-out;
          cursor: pointer;
          &:not(:last-child) {
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid ${({ theme }) => theme.palette.customColors?.placeText};
          }
          .userImg {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            overflow: hidden;
            flex-shrink: 0;
            @media (max-width: 1199px) {
              width: 40px;
              height: 40px;
            }
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .userName {
            width: calc(100% - 50px);
            padding-left: 7px;
            @media (max-width: 1199px) {
              width: calc(100% - 40px);
              padding-left: 5px;
            }
            h6 {
              font-size: 16px;
              font-weight: 700;
              color: ${({ theme }) => theme.palette.common.black};
              text-transform: capitalize;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              @media (max-width: 1199px) {
                font-size: 14px;
              }
            }
            .timeTxt {
              font-size: 16px;
              font-weight: 400;
              color: ${({ theme }) => theme.palette.customColors?.light};
              flex-shrink: 0;
              padding-left: 5px;
              @media (max-width: 1199px) {
                font-size: 12px;
              }
            }
            .msgTxt {
              font-size: 16px;
              font-weight: 500;
              color: ${({ theme }) => theme.palette.customColors?.light};
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              @media (max-width: 1199px) {
                font-size: 12px;
              }
            }
          }
        }
      }
    }
    .wrapper_rightChatBox {
      width: calc(100% - 435px);
      padding-left: 18px;
      height: 100%;
      @media (max-width: 1499px) {
        width: calc(100% - 320px);
      }
      @media (max-width: 1199px) {
        width: calc(100% - 300px);
        padding-left: 16px;
      }
      @media (max-width: 899px) {
        width: 100%;
        padding-left: 0;
      }
      .innerMainChatBox {
        background: ${({ theme }) => theme.palette.common.white};
        border-radius: 20px;
        height: 100%;
        border: 1px solid ${({ theme }) => theme.palette.customColors?.placeText};
        box-shadow: 0px 0px 200px 0px #0000000f;
        @media (max-width: 1199px) {
          border-radius: 16px;
        }
        @media (max-width: 599px) {
          border-radius: 12px;
        }
        .chatTopBox {
          display: flex;
          align-items: center;
          padding: 30px 26px;
          margin-bottom: 10px;
          border-bottom: 1px solid ${({ theme }) => theme.palette.customColors?.placeText};
          @media (max-width: 1199px) {
            padding: 20px 16px;
            margin-bottom: 5px;
          }
          @media (max-width: 599px) {
            padding: 15px 12px;
            margin-bottom: 5px;
          }
          .backBtnChat {
            display: none;
            @media (max-width: 899px) {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 40px;
              height: 40px;
              border-radius: 50%;
              background: ${({ theme }) => theme.palette.common.black};
              color: ${({ theme }) => theme.palette.common.white};
              margin-right: 8px;
              &:hover {
                background: ${({ theme }) => theme.palette.primary?.main};
                color: ${({ theme }) => theme.palette.common.white};
              }
            }
            @media (max-width: 599px) {
              width: 30px;
              height: 30px;
            }
          }
          .userImg {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            overflow: hidden;
            flex-shrink: 0;
            @media (max-width: 899px) {
              width: 40px;
              height: 40px;
            }
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .userName {
            width: calc(100% - 50px);
            padding-left: 7px;
            @media (max-width: 899px) {
              width: calc(100% - 88px);
            }
            h6 {
              font-size: 16px;
              font-weight: 700;
              color: ${({ theme }) => theme.palette.common.black};
              text-transform: capitalize;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              @media (max-width: 599px) {
                font-size: 14px;
              }
            }
            .roleTxt {
              font-size: 16px;
              font-weight: 500;
              color: ${({ theme }) => theme.palette.customColors?.light};
              @media (max-width: 599px) {
                font-size: 14px;
              }
            }
          }
        }
        .chatWrapperTxtMsg {
          height: calc(100% - 244px);
          overflow-y: auto;
          padding: 50px 30px 0;
          @media (max-width: 1199px) {
            padding: 20px 16px 0;
            height: calc(100% - 200px);
          }
          @media (max-width: 599px) {
            padding: 15px 12px 0;
            height: calc(100% - 155px);
          }
          .singleChatList {
            display: flex;
            margin-bottom: 30px;
            gap: 10px;
            .userImg {
              width: 20px;
              height: 20px;
              border-radius: 50%;
              overflow: hidden;
              flex-shrink: 0;
              margin-top: auto;
              margin-bottom: 25px;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
            .txtPart {
              max-width: calc(100% - 20px);
              .msgTxt {
                padding: 16px 14px;
                font-size: 17px;
                font-weight: 500;
                line-height: 1.5;
                @media (max-width: 899px) {
                  font-size: 14px;
                  padding: 10px 12px;
                }
              }
              .timeTxt {
                font-size: 16px;
                font-weight: 400;
                color: ${({ theme }) => theme.palette.customColors?.light};
                flex-shrink: 0;
                padding-left: 5px;
                @media (max-width: 899px) {
                  font-size: 14px;
                }
                margin-top: 6px;
              }
            }
            &.userMsg {
              flex-direction: row;
              .txtPart {
                padding-right: 12px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                max-width: 476px;
                .msgTxt {
                  background: ${({ theme }) => theme.palette.grey[100]};
                  color: ${({ theme }) => theme.palette.customColors?.light};
                  border-radius: 14px 14px 14px 0;
                }
              }
            }
            &.adminMsg {
              flex-direction: row-reverse;
              .txtPart {
                padding-left: 12px;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                max-width: 483px;
                .msgTxt {
                  background: ${({ theme }) => theme.palette.grey[100]};
                  color: ${({ theme }) => theme.palette.customColors?.light};
                  border-radius: 14px 14px 0 14px;
                }
              }
            }
          }
        }
      }
      .chatBottomBox {
        position: relative;
        background: ${({ theme }) => theme.palette.grey[100]};
        padding: 7px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 30px;
        @media (max-width: 1199px) {
          margin: 20px 16px 0;
        }
        @media (max-width: 599px) {
          margin: 15px 12px 0;
          padding: 5px;
          border-radius: 5px;
        }
        .MuiInputBase-root {
          padding: 0 13px;
          background: transparent;
          border-radius: 0;
          height: auto;
          min-height: inherit;
        }
        .btnStackChat {
          gap: 10px;
          .uploadBtn {
            position: relative;
            padding: 0;
            min-width: inherit;
            min-height: inherit;
            background: transparent;
            cursor: pointer;
            &:hover {
              opacity: 0.7;
            }
            input {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              opacity: 0;
              appearance: none;
              cursor: pointer;
              font-size: 0;
            }
          }
          .sendMsgBtn {
            padding: 0;
            min-width: inherit;
            min-height: inherit;
            width: 46px;
            height: 46px;
            border-radius: 50%;
            color: ${({ theme }) => theme.palette.common.white};
            &:hover {
              color: ${({ theme }) => theme.palette.common.black};
            }
            @media (max-width: 599px) {
              width: 30px;
              height: 30px;
            }
          }
        }
      }
    }
  }
`;
