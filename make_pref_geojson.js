// https://github.com/dataofjapan/land の都道府県データから、各県ごとの geojson ファイルを生成するスクリプト
// usage: node make_pref_geojson.js 

'use strict'

const fs = require('fs');
const https = require('https');

function main() {
    https.get('https://raw.githubusercontent.com/dataofjapan/land/master/japan.geojson',  (res) => {
        let body = '';
        res.setEncoding('utf8');

        res.on('data', (chunk) => {
            body += chunk;
        });

        res.on('end', (_) => {
            const json = JSON.parse(body);
            for(const f of json.features) { 
                const id = ('00' + (f.properties.id)).slice(-2);
                console.log(id);
                fs.writeFileSync(`prefs/${id}.geojson`, JSON.stringify(f, null, '  '));
            }
            console.log('done');
        });
    });
}

main();
