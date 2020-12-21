import React from 'react';
import PropTypes from 'prop-types';
import {
    headerStyle,
    titleStyle,
    subtitleStyle,
    containerStyle,
    videoStyle,
} from './styles';

const defaultProps = {
    bgColor: '#282828',
    textColor: '#f1f1f1',
    font: 'sans-serif',
    bgImg: '',
    video: '',
};

const FullHeader = ({
    title,
    subtitle,
    bgColor,
    textColor,
    font,
    bgImg,
    bgVideo,
}) => {
    const headStyleCombined = {
        ...headerStyle,
        backgroundColor: bgColor,
        color: textColor,
        fontFamily: font,
        backgroundImage: `url(${bgImg})`,
    };

    const component = (
        <header style={headStyleCombined}>
            <div style={containerStyle}>
                {title && <h1 style={titleStyle}>{title}</h1>}
                {subtitle && <h2 style={subtitleStyle}>{subtitle}</h2>}
            </div>
            {bgVideo && (
                <video
                    autoPlay
                    muted
                    loop
                    src={bgVideo}
                    style={videoStyle}
                ></video>
            )}
        </header>
    );

    return component;
};

const propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    font: PropTypes.string,
    bgImg: PropTypes.string,
    video: PropTypes.string,
};

FullHeader.propTypes = propTypes;
FullHeader.defaultProps = defaultProps;

export default FullHeader;
