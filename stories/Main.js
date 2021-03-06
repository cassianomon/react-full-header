import React from 'react';
import FullHeader from '../src/Main'; // This is our component
import { storiesOf } from '@storybook/react';

storiesOf('<FullHeader />', module)
    .add('with title', () => <FullHeader title="TDD" />)
    .add('with title and subtitle', () => (
        <FullHeader title="TDD" subtitle="Curso de JS com TDD na prática." />
    ))
    .add('with title, subtitle and bgColor', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática."
            bgColor="#3299BB"
        />
    ))
    .add('with title, subtitle, bgColor and textColor', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática."
            bgColor="#3299BB"
            textColor="#FF9900"
        />
    ))
    .add('with title, subtitle, bgColor, textColor and font', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática."
            bgColor="#96060C"
            textColor="#FF9900"
            font="open-sans"
        />
    ))
    .add('with title, subtitle, bgImg', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática."
            bgImg="https://raw.githubusercontent.com/willianjusten/photo-examples/master/iceland-glacier.jpg"
        />
    ))
    .add('with title, subtitle and video', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática."
            bgColor="#EBE9EB"
            textColor="#3299BB"
            bgVideo="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
        />
    ));
