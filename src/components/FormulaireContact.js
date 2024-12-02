// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import { TextField, Button, Box } from '@mui/material';

// function FormulaireContact() {
//   const form = useRef();

//   const envoyerEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(
//         'service_sririnv',      // Ton SERVICE_ID
//         'template_ubyjgxh',     // Ton TEMPLATE_ID
//         form.current,
//         'htn7B0VMvIGfY458U'     // Ta PUBLIC_KEY (pas le USER_ID)
//       )
      
//     .then(
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
//     <Box component="form" ref={form} onSubmit={envoyerEmail} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//       <TextField label="Nom" name="user_name" required />
//       <TextField label="Email" name="user_email" type="email" required />
//       <TextField label="Message" name="message" multiline rows={4} required />
//       <Button type="submit" variant="contained">Envoyer</Button>
//     </Box>
//   );
// }

















import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { TextField, Button, Box } from '@mui/material';

function FormulaireContact() {
  const form = useRef();

  const envoyerEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_sririnv',      // Ton SERVICE_ID
        'template_ubyjgxh',     // Ton TEMPLATE_ID
        form.current,
        'htn7B0VMvIGfY458U'     // Ta PUBLIC_KEY (pas le USER_ID)
      )
      
    .then(
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
    <Box component="form" ref={form} onSubmit={envoyerEmail} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      
      {/* Prénom obligatoire */}
      <TextField
        label="Prénom"
        name="user_firstname"
        required
        fullWidth
      />
      
      {/* Nom obligatoire */}
      <TextField
        label="Nom"
        name="user_lastname"
        required
        fullWidth
      />
      
      {/* Nom de société facultatif */}
      <TextField
        label="Nom de société"
        name="company_name"
        optional
        fullWidth
      />
      
      {/* Téléphone facultatif avec validation */}
      <TextField
        label="Téléphone"
        name="user_phone"
        type="tel"
        pattern="^[0-9]{10}$" // Validation d'un numéro de téléphone à 10 chiffres
        fullWidth
      />
      
      {/* Email obligatoire avec validation */}
      <TextField
        label="Email"
        name="user_email"
        type="email"
        required
        fullWidth
        inputProps={{
          pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" // Validation d'un email correct
        }}
      />

      {/* Message */}
      <TextField
        label="Message"
        name="message"
        multiline
        rows={4}
        required
        fullWidth
      />

      <Button type="submit" variant="contained">Envoyer</Button>
    </Box>
  );
}

export default FormulaireContact;
// export default FormulaireContact;
