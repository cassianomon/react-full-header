import React from 'react';
import FullHeader from '../src/Main'; // This is our component
import { storiesOf } from '@storybook/react';

storiesOf('<FullHeader>', module)
    .add('with title', () => <FullHeader title="this is title" />)
    .add('with title and subtitle', () => (
        <FullHeader title="this is title" subtitle="this is subtitle" />
    ))
    .add('with title, subtitle and bgColor', () => (
        <FullHeader
            title="this is title"
            subtitle="this is subtitle"
            bgColor="#3299BB"
        />
    ))
    .add('with title, subtitle, bgColor and textColor', () => (
        <FullHeader
            title="this is title"
            subtitle="this is subtitle"
            bgColor="#3299BB"
            textColor="#FF9900"
        />
    ))
    .add('with title and subtitle and bgImg', () => (
        <FullHeader
            title="this is title"
            subtitle="this is subtitle"
            bgImg="https://images.unsplash.com/photo-1606496681837-721228dfef74"
        />
    ))
    .add('with title and subtitle and bgVideo', () => (
        <FullHeader
            title="this is title"
            subtitle="this is subtitle"
            bgVideo="https://images.unsplash.com/photo-1606496681837-721228dfef74"
        />
    ));
