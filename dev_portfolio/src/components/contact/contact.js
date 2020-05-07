import React, {useState} from "react";
import UserProfile from '../user_profile/user_profile';
import swal from 'sweetalert';
import Requests from '../../utils/requests'


function Contact (props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
      const messageHTML = `<strong>Nome:</strong> ${name}<br/>
      <strong>Email:</strong> ${email} <br/>
      <strong>Mensagem:</strong> ${message}`
      event.preventDefault();

      if(name !== '' && email !== '' && message !== '' ){
        swal({
          title: 'Aguarde!',
          text: 'Enviando o e-mail',
          icon: 'info',
          closeOnEsc: false,
          closeOnClickOutside: false,
          button: false,
        })

        const data = {
          name: name,
          email: email,
          message: messageHTML
        }
        Requests.sendEmail(data)
            .then((response)=>{
            if (response.data.msg === 'success'){
              swal({
                title: "Sucesso!",
                text: "O e-mail foi enviado!",
                icon: "success",
                button: "Ok",
              }); 
              setName('');
              setEmail('');
              setMessage('');
            }else if(response.data.msg === 'fail'){
              swal({
                title: "Oops!",
                text: "Um erro aconteceu! Sinto muito. Por favor, tente novamente.",
                icon: "error",
                button: "Ok",
              }); 
            }
        })
      } else{
        swal({
                title: "Oops!",
                text: "Por favor preencha todos os campos.",
                icon: "error",
                button: "Ok",
              }); 
      }
    }

      return(
  <div className='row'>
    <div className='col s2 offset-s1'>
      <UserProfile />
    </div>
    <div className='col s8'>
        <h5>Contato</h5>
        <div className='card-panel'>
        <form onSubmit={handleSubmit}>
          <div className='row'>
              <input name='name' placeholder="Nome" type="text" label="Nome" className='s12' value={name} onChange={e => setName(e.target.value)} required/>
              <input name='email' placeholder="E-mail" type="email" label="Email" className='s12' value={email} onChange={e => setEmail(e.target.value)} required/>
              <input name='message' placeholder="Mensagem" label="Message" className='s12' value={message} onChange={e => setMessage(e.target.value)} required/>
            <div className='col s12 m12'>
            <button type='submit' className="right waves-effect waves-light grey lighten-1 btn">Enviar</button>
            </div>
          </div>
          </form>
        </div>
    </div>
  </div>
    )
    };

export default Contact;
