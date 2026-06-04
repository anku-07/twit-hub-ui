'use client';
import assest from '@/json/assest';
import { messageDataList } from '@/json/mock/messagemock';
import { MainMessageBoxWrap } from '@/styles/StyledComponents/MainMessageBoxWrap';
import InputFieldCommon from '@/ui/CommonInput/CommonInput';
import AttachIcon from '@/ui/Icons/AttachIcon';
import MessageSendIcon from '@/ui/Icons/MessageSendIcon';
import SearchIconSmall from '@/ui/Icons/SearchIconSmall';
import { Box, Button, IconButton, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { ArrowLeftIcon, ArrowRightIcon } from '@mui/x-date-pickers';
import Image from 'next/image';
import { useState } from 'react';

export default function MainMessageBox() {
  const [activeChat, setActiveChat] = useState(0);
  const [mobileView, setMobileView] = useState(false);
  const isLandscape = useMediaQuery('(orientation: landscape)');
  const isSmallScreen = useMediaQuery('(max-width:899px)');
  const theme = useTheme();
  const handleChatClick = (index: number) => {
    setActiveChat(index);
  };
  const handleBackBtn = () => {
    setMobileView(!mobileView);
  };
  const activeMessage = messageDataList[activeChat];

  return (
    <MainMessageBoxWrap>
      {isLandscape && isSmallScreen ? (
        <Stack direction='row' alignItems='center' justifyContent='center'>
          <Box
            position='fixed'
            top={0}
            left={0}
            right={0}
            zIndex={'999'}
            width='100%'
            height='100%'
            bgcolor={theme.palette.common?.black}
          >
            <Image
              src={assest.rotatePhone}
              alt='rotate-phone-gif'
              width={500}
              height={900}
              priority
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </Box>
        </Stack>
      ) : (
        <Box className={`wrapper_inboxMain ${mobileView ? ' active' : ''}`}>
          <Box className={`wrapper_leftPart ${mobileView ? ' active' : ''}`}>
            <IconButton disableRipple className='closeIconChat' onClick={handleBackBtn}>
              <ArrowRightIcon />
            </IconButton>
            <Typography variant='h1'>Chat</Typography>
            <Box className='chatBox'>
              <InputFieldCommon placeholder='Search...' startAdornment={<SearchIconSmall />} />
            </Box>
            <Box className='allChatList'>
              {messageDataList.map((items, index) => (
                <Box
                  className={'singleChatList' + (activeChat === index ? ' active' : '')}
                  key={index}
                  onClick={() => {
                    handleChatClick(index);
                    handleBackBtn();
                  }}
                >
                  <Box className='userImg'>
                    <Image
                      src={items.userImg}
                      alt={`${items.userName} image`}
                      width={500}
                      height={500}
                    />
                  </Box>
                  <Box className='userName'>
                    <Stack direction='row' justifyContent='space-between'>
                      <Typography variant='h6'>{items.userName}</Typography>
                      <Typography variant='body1' className='timeTxt'>
                        {items.msgTime}
                      </Typography>
                    </Stack>
                    <Typography variant='body1' className='msgTxt'>
                      {items.msgTxt}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
          <Box className='wrapper_rightChatBox'>
            {messageDataList.length > 0 && activeMessage ? (
              <Box className='innerMainChatBox'>
                <Box className='chatTopBox'>
                  <IconButton disableRipple className='backBtnChat' onClick={handleBackBtn}>
                    <ArrowLeftIcon />
                  </IconButton>
                  <Box className='userImg'>
                    <Image
                      src={activeMessage.userImg}
                      alt={`${activeMessage.userName} image`}
                      width={500}
                      height={500}
                    />
                  </Box>
                  <Box className='userName'>
                    <Typography variant='h6'>{activeMessage.userName}</Typography>
                    <Typography variant='body1' className='roleTxt'>
                      {activeMessage.role}
                    </Typography>
                  </Box>
                </Box>
                <Box className='chatWrapperTxtMsg'>
                  {activeMessage.msgData?.map((items, index) => (
                    <Box key={index}>
                      {items.userMsg && (
                        <Box className='singleChatList userMsg'>
                          <Box className='userImg'>
                            <Image
                              src={activeMessage.userImg}
                              alt={`${activeMessage.userName} image`}
                              width={500}
                              height={500}
                            />
                          </Box>
                          <Box className='txtPart'>
                            <Typography variant='body1' className='msgTxt'>
                              {items.userMsg}
                            </Typography>
                            <Typography variant='body1' className='timeTxt'>
                              {items.userMsgTime}
                            </Typography>
                          </Box>
                        </Box>
                      )}
                      {items.adminMsg && (
                        <Box className='singleChatList adminMsg'>
                          <Box className='userImg'>
                            <Image
                              src={assest.messageAvatar1}
                              alt='Admin image'
                              width={500}
                              height={500}
                            />
                          </Box>
                          <Box className='txtPart'>
                            <Typography variant='body1' className='msgTxt'>
                              {items.adminMsg}
                            </Typography>
                            <Typography variant='body1' className='timeTxt'>
                              {items.adminMsgTime}
                            </Typography>
                          </Box>
                        </Box>
                      )}
                    </Box>
                  ))}
                </Box>
                <Box className='chatBottomBox'>
                  <InputFieldCommon placeholder='Message...' />
                  <Stack className='btnStackChat' direction={'row'}>
                    <Button type='button' disableRipple className='uploadBtn'>
                      <AttachIcon />
                      <input type='file' />
                    </Button>
                    <Button
                      type='button'
                      variant='contained'
                      color='primary'
                      disableRipple
                      className='sendMsgBtn'
                    >
                      <MessageSendIcon IconColor='currentColor' />
                    </Button>
                  </Stack>
                </Box>
              </Box>
            ) : (
              <Box className='innerMainChatBox'>
                <Typography variant='h6' textAlign='center' mt={4}>
                  No messages found.
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      )}
    </MainMessageBoxWrap>
  );
}
