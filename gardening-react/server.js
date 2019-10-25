const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

// ___________                                              _________       __                
// \_   _____/__  ________________   ____   ______ ______  /   _____/ _____/  |_ __ ________  
//  |    __)_\  \/  /\____ \_  __ \_/ __ \ /  ___//  ___/  \_____  \_/ __ \   __\  |  \____ \ 
//  |        \>    < |  |_> >  | \/\  ___/ \___ \ \___ \   /        \  ___/|  | |  |  /  |_> >
// /_______  /__/\_ \|   __/|__|    \___  >____  >____  > /_______  /\___  >__| |____/|   __/ 
//         \/      \/|__|               \/     \/     \/          \/     \/           |__|    
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.listen(port, () => console.log(`listening on port ${port}`));

// Basic Sanity-check GET Route
app.get('/api/express_backend', (req, res) => {
    res.send({express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'});
});

//    _____ __________.___  __________               __                 
//   /  _  \\______   \   | \______   \ ____  __ ___/  |_  ____   ______
//  /  /_\  \|     ___/   |  |       _//  _ \|  |  \   __\/ __ \ /  ___/
// /    |    \    |   |   |  |    |   (  <_> )  |  /|  | \  ___/ \___ \ 
// \____|__  /____|   |___|  |____|_  /\____/|____/ |__|  \___  >____  >
//         \/                       \/                        \/     \/ 
const basic_record = (req, res) => {
  const record = {
    type: 'basic_record',
    title: 'Dane is Neat',
    taco_bell: ['Chicken Chalupa', 'Baja Blast'],
    bands_we_saw: {
      'tool': "Maynard's Dick",
      'babyMetal': "Cute Japanese Chicks"
    }
  };
  return res.json(record);
};

app.get('/api/basic_record', basic_record);
