module.exports = {
  'certs': {

  },
  'certs2': {
    'key': fs.readFileSync('/etc/letsencrypt/live/chito.tk/privkey.pem'),
    'cert': fs.readFileSync('/etc/letsencrypt/live/chito.tk/fullchain.pem')
  }
}
