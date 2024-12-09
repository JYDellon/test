// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import { TextField, Button, Box } from '@mui/material';
// import './FormulaireContact.css';

// function FormulaireContact() {
//   const form = useRef();

//   const envoyerEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(
//       'service_sririnv', // Ton SERVICE_ID
//       'template_ubyjgxh', // Ton TEMPLATE_ID
//       form.current,
//       'htn7B0VMvIGfY458U' // Ta PUBLIC_KEY
//     ).then(
//       (result) => {
//         alert('Message envoyé avec succès !');
//       },
//       (error) => {
//         console.error('Erreur :', error.text);
//         alert('Erreur lors de l\'envoi du message.');
//       }
//     );
//   };

//   return (
//     <Box component="form" ref={form} onSubmit={envoyerEmail} className="formulaire-contact">
//       <div className="formulaire-inner">
//         {/* Partie gauche avec les champs */}
//         <div className="formulaire-champs-gauche">
//           <TextField label="Prénom" name="user_firstname" required fullWidth />
//           <TextField label="Nom" name="user_lastname" required fullWidth />
//           <TextField label="Nom de société" name="company_name" fullWidth />
//           <TextField label="Téléphone" name="user_phone" type="tel" fullWidth />
//           <TextField label="Email" name="user_email" type="email" required fullWidth />
//         </div>

//         {/* Partie droite avec le champ message et bouton envoyer */}
//         <div className="formulaire-champs-droit">
//           <TextField
//             label="Message"
//             name="message"
//             multiline
//             rows={8}
//             required
//             fullWidth
//             className="formulaire-message"
//           />
//           {/* Bouton d'envoi avec un margin-top de 100px */}
//           <Button type="submit" variant="contained" className="formulaire-envoyer-btn" style={{ marginTop: '80px' }}>
//             Envoyer
//           </Button>
//         </div>
//       </div>
//     </Box>
//   );
// }

// export default FormulaireContact;











import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { TextField, Button, Box } from '@mui/material';
import './FormulaireContact.css';

function FormulaireContact() {
  const form = useRef();

  const envoyerEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    formData.append("to_email", "jy.dellon@gmail.com"); 

    emailjs.sendForm(
      'service_sririnv',  //  SERVICE_ID
      'template_ubyjgxh',  //  TEMPLATE_ID
      form.current,
      'htn7B0VMvIGfY458U' //  PUBLIC_KEY
    ).then(
      (result) => {
        alert('Message envoyé avec succès !');
      },
      (error) => {
        console.error('Erreur :', error.text);
        alert('Erreur lors de l\'envoi du message.');
      }
    );
  };

  return (
    <div className='containerFormulaire'>
    <Box component="form" ref={form} onSubmit={envoyerEmail} className="formulaire-contact">
      <div className="formulaire-inner">
        {/* Partie gauche avec les champs */}
        <div className="formulaire-champs-gauche">
          <TextField label="Prénom" name="user_firstname" required fullWidth />
          <TextField label="Nom" name="user_lastname" required fullWidth />
          <TextField label="Nom de société" name="company_name" fullWidth />
          <TextField label="Téléphone" name="user_phone" type="tel" fullWidth />
          <TextField label="Email" name="user_email" type="email" required fullWidth />
        </div>

        {/* Partie droite avec le champ message et bouton envoyer */}
        <div className="formulaire-champs-droit">
          <TextField
            label="Message"
            name="message"
            multiline
            rows={8}
            required
            fullWidth
            className="formulaire-message"
          />
          {/* Bouton d'envoi avec un margin-top de 80px */}
          <Button type="submit" variant="contained" className="formulaire-envoyer-btn" style={{ marginTop: '80px' }}>
            Envoyer
          </Button>
        </div>
      </div>
    </Box>
    </div>
  );
}

export default FormulaireContact;
