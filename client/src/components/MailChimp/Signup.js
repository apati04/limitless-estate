import React, { Component } from 'react';
import axios from 'axios';
class Signup extends Component {
  state = {
    value: ''
  };
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  handleSubmit;
  //      action="https://limitless-estates.us19.list-manage.com/subscribe/post?u=60836c02d13ae1eaf9354eb5c&amp;id=3c16a06b45"
  render() {
    return (
      <div id="mc_embed_signup">
        <form onSubmit="" id="mc-embedded-subscribe-form" className="validate">
          <div id="mc_embed_signup_scroll">
            <label htmlFor="mce-EMAIL">
              Sign up for our Monthly Newsletter!
            </label>
            <input
              type="email"
              value=""
              name="EMAIL"
              class="email"
              id="mce-EMAIL"
              placeholder="email address"
              required
            />
            <div style="position: absolute; left: -5000px;" aria-hidden="true">
              <input
                type="text"
                name="b_60836c02d13ae1eaf9354eb5c_3c16a06b45"
                tabindex="-1"
                value=""
              />
            </div>
            <div class="clear">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="button"
              />
              >
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
