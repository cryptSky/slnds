import { useEffect, useState } from "react";
import styled from "styled-components";
import Countdown from "react-countdown";

import * as anchor from "@project-serum/anchor";

import { LAMPORTS_PER_SOL } from "@solana/web3.js";

import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

import { Element } from 'react-scroll';

import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
} from "../candy-machine";

import SolenoidSliderMain from './components/SolenoidSliderMain';
import SolenoidImages from './components/SolenoidImages';
import { createGlobalStyle } from 'styled-components';

import SolenoidFAQ from "./components/SolenoidFAQ";

import Button from '@mui/material/Button';
import SolenoidRoadmap from "./components/SolenoidRoadmap";
import SolenoidStory from "./components/SolenoidStory";



const ConnectButton = styled(WalletDialogButton)``;

const CounterText = styled.span``; // add your styles here

const MintContainer = styled.div``; // add your styles here

const MintButton = styled(Button)``; // add your styles here

export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}

const Home = (props: HomeProps) => {
  const [balance, setBalance] = useState<number>();
  const [isActive, setIsActive] = useState(false); // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT

  const [itemsAvailable, setItemsAvailable] = useState(0);
  const [itemsRedeemed, setItemsRedeemed] = useState(0);
  const [itemsRemaining, setItemsRemaining] = useState(0);

  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  const [startDate, setStartDate] = useState(new Date(props.startDate));

  const wallet = useAnchorWallet();
  const [candyMachine, setCandyMachine] = useState<CandyMachine>();

  const refreshCandyMachineState = () => {
    (async () => {
      if (!wallet) return;

      const {
        candyMachine,
        goLiveDate,
        itemsAvailable,
        itemsRemaining,
        itemsRedeemed,
      } = await getCandyMachineState(
        wallet as anchor.Wallet,
        props.candyMachineId,
        props.connection
      );

      setItemsAvailable(itemsAvailable);
      setItemsRemaining(itemsRemaining);
      setItemsRedeemed(itemsRedeemed);

      setIsSoldOut(itemsRemaining === 0);
      setStartDate(goLiveDate);
      setCandyMachine(candyMachine);
    })();
  };

  const onMint = async () => {
    try {
      setIsMinting(true);
      if (wallet && candyMachine?.program) {
        const mintTxId = await mintOneToken(
          candyMachine,
          props.config,
          wallet.publicKey,
          props.treasury
        );

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          props.txTimeout,
          props.connection,
          "singleGossip",
          false
        );

        if (!status?.err) {
          setAlertState({
            open: true,
            message: "Congratulations! Mint succeeded!",
            severity: "success",
          });
        } else {
          setAlertState({
            open: true,
            message: "Mint failed! Please try again!",
            severity: "error",
          });
        }
      }
    } catch (error: any) {
      // TODO: blech:
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          setIsSoldOut(true);
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: "error",
      });
    } finally {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      setIsMinting(false);
      refreshCandyMachineState();
    }
  };

  useEffect(() => {
    (async () => {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, props.connection]);

  useEffect(refreshCandyMachineState, [
    wallet,
    props.candyMachineId,
    props.connection,
  ]);

const GlobalStyles = createGlobalStyle`
  header#myHeader .logo .d-block{
    display: none !important;
  }
  h1{
    color: #843BE6;
    margin-bottom: 20px;
  }
  header#myHeader .logo .d-none{
    display: block !important;
  }
  .navbar .mainside a{
    background: #7251F5;
    &:hover{
      box-shadow: 2px 2px 20px 0px #7251F5;
    }
  }
  .item-dropdown{
    .dropdown{
      a{
        &:hover{
          background: #7251F5;
        }
      }
    }
  }
  .btn-main{

    &:hover{
      //box-shadow: 2px 2px 20px 0px #D4AF37;
    }
  }
  p.lead{
    color: #a2a2a2;
  }
  .navbar .navbar-item .lines{
    border-bottom: 2px solid #7251F5;
  }
  .jumbotron.no-bg{
    height: 100vh;
    overflow: hidden;
    background-repeat: repeat;
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
  }
  #tsparticles{
    top: 0;
  }
  .text-uppercase.color{
    color: #7251F5;
  }
  .de_count h3 {
    font-size: 36px;
    margin-bottom: 0px;
  }
  .de_count h5{
    font-size: 14px;
    font-weight: 500;
  }
  h2 {
    font-size: 30px;
  }
  .box-url{
    text-align: center;
    h4{
      font-size: 16px;
    }
  }
  .de_countdown{
    border: solid 2px #7251F5;
  }
  .author_list_pp, .author_list_pp i, 
  .nft_coll_pp i, .feature-box.style-3 i, 
  footer.footer-light #form_subscribe #btn-subscribe i, 
  #scroll-to-top div{
    background: #7251F5;
  }
  footer.footer-light .subfooter .social-icons span i{
    background: #843BE6;
  }
  .author_list_pp:hover img{
    box-shadow: 0px 0px 0px 2px #7251F5;
  }
  .nft__item_action span{
    color: #7251F5;
  }
  .feature-box.style-3 i.wm{
    color: rgba(131,100,226, .1);
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #fff;
    }
    .item-dropdown .dropdown a{
      color: #fff !important;
    }
  }

  .navbar.white .btn {
    color: #f2f2f2;
  }

  #myHeader .btn-main {
    border-radius:30px; 
    position:relative;
    background: none;
    color: rgba(73, 76, 85, 0.58);
    line-height: 18px;
    font-size: 14px;
    padding: 8px 40px;
    
    &:before {
      content:"";
      position:absolute;
      top:0;
      left:0;
      right:0;
      bottom:0;

      border-radius:30px; 
      padding:2px; 
      background:linear-gradient(180deg, rgba(238, 122, 221, 0.69) 0%, rgba(136, 29, 235, 0.69) 100%); 
      -webkit-mask: 
         linear-gradient(#fff 0 0) content-box, 
         linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out; 
      mask-composite: exclude; 
    }

    &:hover{
      box-shadow: 1px 1px 10px 0px #9B51E0;
      transition: all 0.3s ease;
    }
  
  }

  .row .column {
    display: flex;
    flex: 1;
    margin-left: 0;
    max-width: 100%;
    width: 100%;
  }

  .imgContainer{
    float:left;
  }

  .imgContainer img {
    width: 220px;
    height: 220px;
  }

  .vertical-align {
    display: table;
    width: 100%;
  }
  .jumbo-bottom {
    position: absolute;
    padding: 0;
    bottom: 0px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 1320px;
  }

  .countdown-timer {
    background: linear-gradient(150deg, #FD8BFF 10%, #881DEB 77%);
    height: 100vh;
  }

  .svglines {
    background: url("./img/topology.svg");
    background-position: center;
    height: 100vh;
    padding: 90px 0;
  }

  .faq {
    background: linear-gradient(150deg, #FD8BFF 10%, #881DEB 77%);
    height: 100vh;
  }

  .svglines-faq {
    background: url("./img/topology-faq.svg");
    background-position: center;
    height: 100vh;
    padding: 90px 0;
  }

  

`;

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed } : {days: any, hours: any, minutes: any, seconds: any, completed: any}) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
        
        <div className="container-fluid mt-2">
          <div className="centerthis">
          <div></div>
          <div id="clockdiv">           

            <div>
              <div className="number">{days}</div>
              <div className="smalltext">Days</div>
            </div>

            <div>
              <div className="number">{hours}</div>              
              <div className="smalltext">Hours</div>
            </div> 
            
            <div>
              <div className="number">{minutes}</div>
              <div className="smalltext">Minutes</div>
            </div> 

       
            <div>
              <div className="number">{seconds}</div>
              <div className="smalltext">Seconds</div>
            </div>

          </div>
          <div></div>
          </div>
        </div>
     
    );

  }
}

  return (  


    <main>

<div>
  <GlobalStyles />
      <section className="container" style={{paddingBottom: "0px", paddingTop: "0px"}} >
        <div className="jumbotron no-bg">
          <Element name="top"></Element>
          <div className='row align-items-center'>
          
          <div className="spacer-double"></div>

        </div> 
         <SolenoidSliderMain/>

        </div>
      </section>
    
      <section className="container-fluid countdown-timer" style={{paddingBottom: "0px", paddingTop: "0px"}}>
        <div className="svglines">
        <div className='row'>
          <h1 className='text-center countdown-title solenoid-title'>COUNTDOWN TO LAUNCH</h1>
          <div className='col-lg-12 mb-2 justify-content-center'>
          <Countdown
            date={new Date(Date.UTC(2021, 11, 22, 17, 0, 0))}
            renderer={renderer}
          />
          </div>
        </div> 

        <div className='row'>
        <div className='col-lg-2 mb-2 justify-content-center'></div>
          <div className='col-lg-8 mb-2 justify-content-center'>
          <SolenoidImages/>
          </div>
          <div className='col-lg-2 mb-2 justify-content-center'></div>
        </div> 
        
        </div>     

      </section>

   <Element name="story"></Element>
   <section className="container" >
      
      <SolenoidStory/>
   </section>

   <Element name="roadmap"></Element>
  <section className='container'>
  <h1 className="launch-shadow solenoid-title">Roadmap</h1>
    <div className='row'>
    <div className="spacer-single"></div>
      <div className='col-md-12'>
        <SolenoidRoadmap />
      </div>
    </div>
  </section>

  <Element name="faq"></Element>
  <section className='container-fluid faq'>
  <div className="svglines-faq">
  <div className="container">
  <h1 className="solenoid-title-white" >FAQ</h1>
  <div className="spacer-double"></div>
    <div className='row mt-8'>

      <div className='col-md-12'>
        <SolenoidFAQ />
      </div>
    </div>
    </div>
  </div>
  </section>


  </div>

      {/* {wallet && (
        <p>Wallet {shortenAddress(wallet.publicKey.toBase58() || "")}</p>
      )}

      {wallet && <p>Balance: {(balance || 0).toLocaleString()} SOL</p>}

      {wallet && <p>Total Available: {itemsAvailable}</p>}

      {wallet && <p>Redeemed: {itemsRedeemed}</p>}

      {wallet && <p>Remaining: {itemsRemaining}</p>}

      <MintContainer>
        {!wallet ? (
          <ConnectButton>Connect Wallet</ConnectButton>
        ) : (
          <MintButton
            disabled={isSoldOut || isMinting || !isActive}
            onClick={onMint}
            variant="contained"
          >
            {isSoldOut ? (
              "SOLD OUT"
            ) : isActive ? (
              isMinting ? (
                <CircularProgress />
              ) : (
                "MINT"
              )
            ) : (
              <Countdown
                date={startDate}
                onMount={({ completed }) => completed && setIsActive(true)}
                onComplete={() => setIsActive(true)}
                renderer={renderCounter}
              />
            )}
          </MintButton>
        )}
      </MintContainer>

      <Snackbar
        open={alertState.open}
        autoHideDuration={6000}
        onClose={() => setAlertState({ ...alertState, open: false })}
      >
        <Alert
          onClose={() => setAlertState({ ...alertState, open: false })}
          severity={alertState.severity}
        >
          {alertState.message}
        </Alert>
      </Snackbar> */}
    </main>
  );
};

interface AlertState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    <CounterText>
      {hours + (days || 0) * 24} hours, {minutes} minutes, {seconds} seconds
    </CounterText>
  );
};  

export default Home;
