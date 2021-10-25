const { OAuth2Client } = require('google-auth-library'); 

const CLIENT_ID = '950783994418-k02f42j8u5lbvb41saqh36k5dfetm679.apps.googleusercontent.com';

const client = new OAuth2Client( CLIENT_ID );


const validarGoogleToken = async ( token ) => {
    try {
      const ticket = await client.verifyIdToken({
          idToken : token,
          audience : [
              CLIENT_ID,
              '950783994418-hvgmo46k7eeu4bmg0ghqkpe3oa907krc.apps.googleusercontent.com'
          ]
      });

      const payload = ticket.getPayload();
      return {
          name: payload['name'],
          imgPath: payload['picture'],
          email: payload['email']
      }
    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports = {
    validarGoogleToken
}