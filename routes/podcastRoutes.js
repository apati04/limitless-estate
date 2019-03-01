const axios = require('axios');
const keys = require('../config/keys');
module.exports = app => {
  app.get('/api/podcast', async (req, res) => {
    try {
      const { data } = await axios.get(
        'https://www.buzzsprout.com/api/' +
          keys.podcastIdKey +
          '/episodes.json?token=' +
          keys.podcastApiKey,
        {
          headers: {
            Authorization: `Token token=${keys.podcastApiKey}`
          }
        }
      );
      const currEp = data.filter(item => {
        const currentTime = new Date().getTime();
        const episodeTime = new Date(item.published_at).getTime();

        return currentTime >= episodeTime;
      });
      res.status(200).send({ data: currEp });
    } catch (err) {
      if (err) {
        console.log(err);
        res
          .status(err.response.status)
          .send({ statusText: err.response.statusText });
      }
    }
  });
};
//949981
/*
headers: {
  Accept: 'application/json',
    Authorization: `Basic ${Buffer.from(
      `apikey:${keys.mailChimpApiKey}`
    ).toString('base64')}`,
      json: true
}
*/
