import {useState, useEffect} from 'react';

import {StreamingContainer,SteamingButton} from './StreamingServicesStyled';
import Card from './ServiceCards';
import {CardInfoData }from './CardInfoData';

import Modal from '../Modal/ModalForm';
import SignupForm from '../Form/SignupForm/SignupForm';






export  const StreamingServices = () => {
    const [show, setShow] = useState(false)
    const [signup, setSignup] = useState(false)
    const openSignupForm = () =>{
        setShow(true);
        setSignup(true);  
    } 
    const [loggedIn, setLoggedIn] = useState(false) 
    useEffect(() => {
        if (sessionStorage.getItem("__user__")) setLoggedIn(true);
      }, []);
    return (
        <StreamingContainer>
        {!loggedIn ?
            <section className="container">
                <h3>All Streaming services in one place</h3>
                <h2> Find something great to watch even faster</h2>
                <div className="cardwrapper" onClick={openSignupForm}>
                {CardInfoData.map((data) => (
                <Card 
                    key={data.id}
                    imgUrl={data.imgUrl}
                    title={data.title}
                    text={data.text}
                />
                ))}
                </div>
            <Modal setShow={setShow} show={show}>
                <SignupForm setSignup={setSignup} signup={signup}/>    
            </Modal>
           
                <SteamingButton onClick={openSignupForm}>Create a free account</SteamingButton> 
                </section>
                :null}
                </StreamingContainer>
                )
}
