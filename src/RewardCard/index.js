import { useEthers } from '@usedapp/core'
import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled, { keyframes } from 'styled-components/macro'
import Card from '../Card'
import { Typography } from '../Typography'
import googleIcon from './google.png'
import facebookIcon from './facebook.png'
import appleIcon from './apple.png'
import { useFirebaseSignIn, useFirebaseSignOut, useFirebaseUser } from '../firebase'
import boxImage from './box.png'
import { useFoodayUser } from '../fooday'
import { useApi } from '../ApiProvider'
import copy from 'copy-to-clipboard'

const StyledCard = styled(Card)`
  background: #fff;
`

const StyledTitle = styled(Typography).attrs({ variant: 'header1' })`
  display: flex;
  height: 54px;
  align-items: center;
  justify-content: center;
  background: #ffb82e;
  width: 100%;
`

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const StyledLevelStatus = styled.div`
  display: flex;
  gap: 20px;
`

const StyledLevelStatusContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const StyledConnectContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const StyledSubmitButton = styled.button`
  background: #000000;
  border-radius: 5px;
  color: white;
  padding: 15px;

  :disabled {
    background: #a1a7ba;
  }
`

const StyledLoginBox = styled.div`
  display: flex;
  flex-direction: column;
  item-align: center;
  background: #fff4de;
  border: 1px solid #ffb82e;
  border-radius: 10px;
  padding: 30px;
  gap: 30px;
`

const StyledLoginButtons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`

const StyledLoginButton = styled.button`
  border: 1px solid #ccd4e3;
  background: #fff;
  border-radius: 10px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 32px;
  padding-right: 32px;
`

const shortenAddress = (address) => `${address.slice(0, 6)}...${address.slice(-3)}`

const StyledUserCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
  background: #fff;
  border: 1px solid #CCD4E3;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
`

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const StyledSpinner = styled.div`
  width: 20px;
  height: 20px;
  animation: ${spin} 2s linear infinite;
  background: url(${require('./loading.png')}) no-repeat center center;
  background-size: cover;
`

const AppSction = () => {
  const { t } = useTranslation()
  return (
    <div style={{ background: '#FFB82E', borderRadius: '10px', overflow: 'hidden' }}>
      <div style={{ padding: '20px', display: 'flex', gap: '20px', alignItems: 'center' }}>
        <img src={require('./icon.png')} style={{ width: '35px', height: '35px' }} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <Typography variant="title3">{t('rewardCard.appName')}</Typography>
          <Typography variant="header3">{t('rewardCard.appDesc')}</Typography>
        </div>
      </div>
      <div style={{ background: '#F19F00', padding: '20px', display: 'flex', gap: '20px', alignItems: 'center' }}>
        <img src={require('./qrcode.png')} style={{ width: '160px', height: '160px' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Typography variant="header3" style={{ fontWeight: 500 }}>{t('rewardCard.qrcode')}</Typography>
          <a href="https://apps.apple.com/app/id6456410353">
            <img src={require('./appstore.png')} style={{ width: '138px', height: '40px' }} />
          </a>
        </div>
      </div>
    </div>
  )
}

const useClaimInfo = (wallet, firebaseUser) => {
  const [info, setInfo] = useState()
  const api = useApi()

  const reload = useCallback(() => {
    if (wallet) {
      const promise = api.presale.getPresaleFooca({ wallet })
      promise.then(info => {
        console.log(info)
        setInfo(info)
      }).catch(err => {
        if (err.body?.code !== 10013 && err.body?.code !== 10003 && err.body?.code !== 10001) {
            console.warn(err)
            alert('Failed to sign in')
        }
      })
      return promise
    }
  }, [wallet])

  useEffect(() => {
    const promise = reload()
    return () => promise?.cancel()
  }, [wallet])

  return { info, reload }
}

const useSignMessage = (message) => {
  const [processing, setProcessing] = useState(false)
  const [success, setSuccess] = useState(false)
  const { library } = useEthers()
  const [ signedMessage, setSignedMessage ] = useState()

  const sign = useCallback(() => {
    if (library && message) {
      setProcessing(true)
      console.log(`sign message: ${message}`)
      const signer = library.getSigner()
      signer.signMessage(message).then(signedMessage => {
        setProcessing(false)
        setSignedMessage(signedMessage)
        setSuccess(true)
      }).catch(err => {
        setProcessing(false)
        console.error(err)
        alert(err.message)
        setSuccess(false)
      })
    }
  }, [message, library])

  return { sign, processing, success, signedMessage }
}

const useClaim = (message, signature, firebaseUser) => {
  const { account } = useEthers()
  const [processing, setProcessing] = useState(false)
  const [success, setSuccess] = useState(false)
  const [result, setResult] = useState()
  const api = useApi()

  useEffect(() => {
    if (!success && message && signature && account && firebaseUser) {
      setProcessing(true)
      const promise = api.presale.claimPresaleFooca({ requestBody: { wallet: account, message, signature } })
      promise.then((result) => {
        setProcessing(false)
        setSuccess(true)
        setResult(result)
      }).catch((err) => {
        setProcessing(false)
        console.error(err)
        alert(err.message)
      })
      return () => promise.cancel()
    }
  }, [message, signature, account, firebaseUser])

  return { processing, success, result }
}

export default function RewardCard() {
  const { t } = useTranslation()
  const { account, activateBrowserWallet, deactivate } = useEthers()
  const user = useFirebaseUser()
  const { user: foodayUser, loading: foodayUserLoading } = useFoodayUser()
  const signIn = useFirebaseSignIn()
  const signOut = useFirebaseSignOut()
  const { info: claimInfo, reload: reloadClaimInfo } = useClaimInfo(account, user)
  const sign = useSignMessage(claimInfo?.claimMessage)
  const claim = useClaim(claimInfo?.claimMessage, sign.signedMessage, user)
  const count = claimInfo?.amount ?? 0

  useEffect(() => {
    if (claim.success) {
      reloadClaimInfo()
    }
  }, [claim.success])

  return (
    <StyledCard head={<StyledTitle>{t('rewardCard.title')}</StyledTitle>}>
      {account && (
        <StyledContent>
          <StyledLevelStatus>
            <StyledLevelStatusContent>
              <div>
                <Typography variant="caption">{t('rewardCard.yourAddress')}</Typography>
                <button onClick={() => deactivate()}>
                  <Typography variant="caption" style={{ color: '#545864' }}>{t('rewardCard.disconnectButton')}</Typography>
                </button>
              </div>
              <Typography variant="title3">{shortenAddress(account)}</Typography>
            </StyledLevelStatusContent>
          </StyledLevelStatus>

          <div style={{ display: 'flex' }}>
            <StyledLevelStatus style={{ flex: 1 }}>
              <StyledLevelStatusContent>
                <Typography variant="caption">{t('rewardCard.status')}</Typography>
                <Typography variant="title3">Level {count}</Typography>
              </StyledLevelStatusContent>
            </StyledLevelStatus>
            <StyledLevelStatus style={{ flex: 1 }}>
              <StyledLevelStatusContent>
                <Typography variant="caption">{t('rewardCard.rewardsLabel')}</Typography>
                <Typography variant="title3" style={{ whiteSpace: 'nowrap' }}>{t('rewardCard.camera', { count })}</Typography>
              </StyledLevelStatusContent>
              <img style={{ width: '44px', height: '44px' }} src={require('./box.png')} />
            </StyledLevelStatus>
          </div>

          {!user && (
            <StyledLoginBox>
              <Typography variant="header2" style={{ textAlign: 'center' }}>{t('rewardCard.loginBoxTitle')}</Typography>
              <StyledLoginButtons>
                <StyledLoginButton onClick={() => signIn('google')}>
                  <img style={{ width: 40, height: 40 }} src={googleIcon} alt="Google" />
                </StyledLoginButton>
                <StyledLoginButton onClick={() => signIn('facebook')}>
                  <img style={{ width: 40, height: 40 }} src={facebookIcon} alt="Facebook" />
                </StyledLoginButton>
                <StyledLoginButton onClick={() => signIn('apple')}>
                  <img style={{ width: 40, height: 40 }} src={appleIcon} alt="Apple" />
                </StyledLoginButton>
              </StyledLoginButtons>
            </StyledLoginBox>
          )}

          {foodayUserLoading && (
            <StyledLoginBox style={{ justifyContent: 'center', alignItems: 'center' }}>
              <StyledSpinner />
            </StyledLoginBox>
          )}

          {count > 0 && foodayUser && !claimInfo?.claimed && (
            <StyledLoginBox style={{ gap: 0 }}>
              <Typography variant="title3" style={{ textAlign: 'center', marginBottom: '30px' }}>{t('rewardCard.loggedInTitle')}</Typography>
              <Typography variant="header2" style={{ marginBottom: '10px' }}>{t('rewardCard.foodayAccount')}</Typography>
              <StyledUserCard style={{ marginBottom: '30px' }}>
                <img src={foodayUser.photoURL} style={{ width: '64px', height: '64px', flexShrink: 0, borderRadius: '32px' }} />
                <div style={{ flex: 1, display: 'flex', gap: '10px', flexDirection: 'column' }}>
                  <Typography variant="title3">{foodayUser.displayName}</Typography>
                  <Typography variant="body">@{foodayUser.username}</Typography>
                </div>
                <button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => signOut()}>
                  <Typography variant="header2" style={{ color: '#545864' }}>{t('rewardCard.logout')}</Typography>
                </button>
              </StyledUserCard>
              <Typography variant="header2" style={{ marginBottom: '10px' }}>{t('rewardCard.unclaimedRewards')}</Typography>
              <StyledUserCard style={{ marginBottom: '30px' }}>
                <img src={boxImage} style={{ width: '45px', height: '45px' }} />
                <div style={{ flex: 1, display: 'flex', gap: '10px', flexDirection: 'column' }}>
                  <Typography variant="title3">{t('rewardCard.camera', { count })}</Typography>
                </div>
              </StyledUserCard>

              <div style={{ marginBottom: '30px', textAlign: 'center' }}>
                <Typography variant="body" style={{ color: '#545864' }}>{t('rewardCard.claimMsg')}</Typography>
              </div>

              <button disabled={claim.processing || sign.processing} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000', padding: '16px 24px', color: '#fff', borderRadius: '5px' }} onClick={sign.sign}>
                {claim.processing && <StyledSpinner />}
                {!claim.processing && (
                  <Typography variant="header2">{t('rewardCard.claimBtn')}</Typography>
                )}
              </button>
            </StyledLoginBox>
          )}

          {(claim.success || claimInfo?.claimed) && foodayUser && (
            <StyledLoginBox style={{ alignItems: 'center' }}>
              <Typography variant="title3" style={{ textAlign: 'center' }}>{t('rewardCard.airdroppedTitle')}</Typography>
              <img src={require('./fooca-reward-img.png')} style={{ width: '346px', height: '200px' }} />
              <Typography variant="header3">{t('rewardCard.airdroppedMsg')}</Typography>
              <AppSction />
            </StyledLoginBox>
          )}

          {count > 0 && user && !foodayUser && !foodayUserLoading && (
            <StyledLoginBox style={{ alignItems: 'center' }}>
              <Typography variant="title3" style={{ textAlign: 'center' }}>{t('rewardCard.noAccountTitle')}</Typography>
              <img src={require('./level-up-tips.png')} style={{ width: '80px', height: '80px' }} />
              <Typography variant="header3" style={{ textAlign: 'center' }}>{t('rewardCard.airdroppedMsg')}</Typography>

              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Typography variant="header2" style={{ color: '#F19F00' }}>{t('rewardCard.step1Title')}</Typography>
                <Typography variant="header3">{t('rewardCard.step1Desc')}</Typography>
                {sign.processing && (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <StyledSpinner />
                  </div>
                )}
                {!sign.processing && (
                  <button onClick={sign.sign} disabled={sign.success} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: sign.success ? '#A1A7BA' : '#000', padding: '16px 24px', color: '#fff', borderRadius: '5px' }}>
                    <Typography variant="header2">{t('rewardCard.signToContinue', { context: sign.success ? 'success' : undefined })}</Typography>
                  </button>
                )}
              </div>

              {sign.success && (
                <>
                  <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <Typography variant="header2" style={{ color: '#F19F00' }}>{t('rewardCard.step2Title')}</Typography>
                    <Typography variant="header3">{t('rewardCard.step2Desc')}</Typography>
                    <button onClick={() => {
                      copy(claim.result?.invitationCode)
                      alert('Copied')
                    }} style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center', background: '#fff', padding: '20px', borderRadius: '5px', border: '1px #CCD4E3 solid' }}>
                      <img src={require('./ticket.png')} style={{ width: '32px', height: '32px' }} />
                      <Typography style={{ flex: 1, textAlign: 'left' }} variant="title3">{claim.result?.invitationCode}</Typography>
                      <Typography style={{ color: '#545864' }} variant="title3">{t('rewardCard.copyCode')}</Typography>
                    </button>
                  </div>

                  <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <Typography variant="header2" style={{ color: '#F19F00' }}>{t('rewardCard.step3Title')}</Typography>
                    <Typography variant="header3">{t('rewardCard.step3Desc')}</Typography>
                  </div>

                  <AppSction />
                </>
              )}
            </StyledLoginBox>
          )}
        </StyledContent>
      )}
      {!account && (
        <StyledContent>
          <StyledConnectContainer>
            <Typography variant="header3" color="#545864">
              {t('connect_desc')}
            </Typography>
            <StyledSubmitButton onClick={() => activateBrowserWallet()}>{t('connect_btn')}</StyledSubmitButton>
          </StyledConnectContainer>
        </StyledContent>
      )}
    </StyledCard>
  )
}
