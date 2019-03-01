import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const url =
  'https://limitless-estates.us19.list-manage.com/subscribe/post?u=60836c02d13ae1eaf9354eb5c&amp;id=0cf81e7768';

// simplest form (only email)
const Survey = () => <MailchimpSubscribe url={url} />;

export default Survey;
