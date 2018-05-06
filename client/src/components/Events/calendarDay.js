import React, { Component } from 'react';
import { CalendarIcon } from 'react-calendar-icon';
import { ThemeProvider } from 'styled-components';

// const theme = {
//   calendarIcon: {
//     textColor: 'white', // text color of the header and footer
//     primaryColor: '#0da472', // background of the header and footer
//     backgroundColor: '#fafafa'
//   },
// };

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
