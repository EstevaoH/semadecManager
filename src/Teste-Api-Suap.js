'use strict';

const Suap = require('suap-wrapper');

Suap.autenticar('20171148060031', '220198eH@').then(data => {

    Suap.meusDados().then(res => {
        console.log(res)
    })

    console.log(`Seu token é: <${data.token}>.`);
});