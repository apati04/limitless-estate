import React, { Component } from 'react';
import { CalendarIcon } from 'react-calendar-icon';
import { ThemeProvider } from 'styled-components';

const theme = {
  calendarIcon: {}
};

{
  /* <ThemeProvider theme={theme}>
</ThemeProvider> */
}
class CalendarDay extends Component {
  render() {
    const { dateTime } = this.props;
    return <CalendarIcon date={new Date(dateTime)} />;
  }
}

export default CalendarDay;
