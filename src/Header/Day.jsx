import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const Day = () => {
    const day = new Date()
    const dayDate = new Date(day).getDate();
    const dayName = moment(new Date(day)).format('ddd');

    // const classNa = new Date(day).toDateString() !== new Date().toDateString() ?
    //     "day-date" : "day-date day-date_current";

    return (
        <div className="date">
            <span className="week-day">{dayName}</span>
            <div className="date-number">{dayDate}</div>
        </div>
    );
};

export default Day;

Day.propTypes = {
    day: PropTypes.object
};