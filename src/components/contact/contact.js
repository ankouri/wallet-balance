import React from "react";
import { Alert, Divider } from "@mui/material";
import { Twitter, Telegram, Instagram } from "@mui/icons-material";
import {
  TwitterContact,
  TelegramContact,
  InstagramContact,
} from "../../constants";
import { style } from "./contact-style";
import { init, send } from "emailjs-com";
import { emailID, serviceID, templateID } from '../../constants';

export default function Contact() {
  const emailRef = React.useRef();
  const usernameRef = React.useRef();
  const messageRef = React.useRef();
  const [loading, setLoading] = React.useState(false);
  const [msg, setMsg] = React.useState({type:'',msg:''});
  
  const handleSubmitContact = (e) => {
    e.preventDefault();
    setLoading(!loading);
    init(emailID);
    
    let params = {
      from_name:usernameRef.current.value,
      to_name:'abdellah',
      message:messageRef.current.value,
      reply_to:emailRef.current.value
    };

    send(serviceID,templateID, params)
    .then(function(response){
      setMsg({type:'success', msg:'Your message has been delivered successfully.'});
    }, function(error) {
      setMsg({type:'error', msg:`Error while sending email : ${error}`});
    });
    emailRef.current.value='';
    usernameRef.current.value='';
    messageRef.current.value='';
    setLoading(!loading);


  };
  return (
    <style.Wrapper>
      <style.Vector src="/contact.svg" alt="" />
      <style.Info>
        <style.InfoTitle>Contact Us</style.InfoTitle>
        <Divider />
        {
          msg.type && msg.msg && <Alert severity={msg.type}>{ msg.msg}</Alert>
        }
        <style.LinkWrapper>
          <style.Link
            startIcon={<Twitter />}
            onClick={() => {
              window.open(`https://twitter.com/${TwitterContact}`, "_blank");
            }}
          >
            {TwitterContact}
          </style.Link>
          <style.Link
            startIcon={<Telegram />}
            onClick={() => {
              window.open(`https://t.me/${TelegramContact}`, "_blank");
            }}
          >
            {TelegramContact}
          </style.Link>
          <style.Link
            startIcon={<Instagram />}
            onClick={() => {
              window.open(
                `https://www.instagram.com/${InstagramContact}`,
                "_blank"
              );
            }}
          >
            {InstagramContact}
          </style.Link>
        </style.LinkWrapper>
      </style.Info>
      <style.Form onSubmit={handleSubmitContact}>
        <style.FormControl>
          <style.Input
            type="text"
            id="fullname"
            variant="outlined"
            sx={{ width: "49%" }}
            required
            inputRef={usernameRef}
            placeholder="Full Name"
            inputProps={{
              maxLength: 50,
            }}
          />
          <style.Input
            type="email"
            id="email"
            sx={{ width: "49%" }}
            variant="outlined"
            inputRef={emailRef}
            required
            placeholder="Email Address"
            inputProps={{
              maxLength: 50,
            }}
          />
        </style.FormControl>
        <style.Input
          type="text"
          id="walletID"
          variant="outlined"
          fullWidth
          inputRef={messageRef}
          multiline
          rows={4}
          required
          placeholder="Message"
          inputProps={{
            maxLength: 50,
          }}
        />
        <style.Button
          type="submit"
          sx={{ width: "30%", mt: "10px" }}
          variant="outlined"
        >
          {" "}
          Send Message
        </style.Button>
      </style.Form>
    </style.Wrapper>
  );
}
