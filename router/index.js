const express = require('express');
const xml = require('xml');
var XMLHttpRequest = require('xhr2');
const { default: axios } = require('axios');
const router = express.Router();

// Entorno Desarrollo
//const wbUepapay = "http://test-uepapay-webservices.uepapay.com/";

// Entorno de Produccion
const wbUepapay = "http://wsmultisecure.uepatickets.com/"
// Entorno Produccion

// MAIN ROUTERS
router.get('/' , (req , res) => {
  res.send('Desy: El silencio es una virtud, y tu no viste nada...')
});

// ENCRIPTAR
router.post('/payments/encriptar' , (req , res) => {

    const query = req.query;
    const {MerchantId, PublicToken, Data} = req.body;
    const urlParameters = `${wbUepapay}Services/UepaPayConfigurationService.asmx/EncryptRequest?accountId=${MerchantId}&publicToken=${PublicToken}&data=${Data}`;

    axios({
        method: 'get',
        url: urlParameters,
        headers: {
            'Content-Type': 'text/json'
            // 'Authorization': 'application/x-www-form-urlencoded'
        }
    }).then((response) => {
        var split1 = response.data.split(`<string xmlns="http://tempuri.org/">`)[1];
        res.json(split1.split(`</string>`)[0])
    });

});

// DESENCRIPTAR
router.post('/payments/desencriptar' , (req , res) => {
    const {MerchantId, PublicToken, Data} = req.body;
    const urlParameters = `${wbUepapay}Services/UepaPayConfigurationService.asmx/DecryptRequest?accountId=${MerchantId}&publicToken=${PublicToken}&data=${Data}`;
    
    axios({
        method: 'get',
        url: urlParameters,
        headers: {
            'Content-Type': 'text/json'
            // 'Authorization': 'application/x-www-form-urlencoded'
        }
    }).then((response) => {
        var split1 = response.data.split(`<string xmlns="http://tempuri.org/">`)[1];
        res.json(split1.split(`</string>`)[0])
    });
    
});

// PORTAL DE PAGO
router.post('/payments/checkout' , (req , res) => {
    const {MerchantId, Data} = req.body;
    const urlParameters = `https://uepapay.com/pl_external.aspx?MerchantId=${MerchantId}&d=${Data}`;
    res.json(urlParameters);
});


module.exports  = router