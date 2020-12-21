import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';

import FullHeader from '../../src/Main';

chai.use(chaiEnzyme());

describe('FullHeader', () => {
    it('should have header tag when mount', () => {
        const wrapper = shallow(<FullHeader />);
        expect(wrapper.find('header')).to.have.length(1);
    });

    context('title', () => {
        it('should have h1 tag when title passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper.find('h1')).to.have.length(1);
        });

        it('should not have h1 tag when title is not passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('h1')).to.have.length(0);
        });

        it('should have h1 tag with title passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper.find('h1').props().children).to.be.equal('TDD');
        });
    });

    context('subtitle', () => {
        it('should have h2 tag when subtitle passed', () => {
            const wrapper = shallow(<FullHeader subtitle="Course" />);
            expect(wrapper.find('h2')).to.have.length(1);
        });

        it('should not have h1 tag when title is not passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('h2')).to.have.length(0);
        });

        it('should have h1 tag with title passed', () => {
            const wrapper = shallow(<FullHeader subtitle="Course" />);
            expect(wrapper.find('h2').props().children).to.be.equal('Course');
        });
    });

    context('bgColor', () => {
        it('should have bgColor equal #282828 when no bgColor is passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper).to.have.style('background-color').equal('#282828');
        });
        it('should have bgColor equal #f1f1f1 when no bgColor is passed', () => {
            const wrapper = shallow(<FullHeader bgColor="#f1f1f1" />);
            expect(wrapper).to.have.style('background-color').equal('#f1f1f1');
        });
    });

    context('textColor', () => {
        it('should have textColor equal #f1f1f1 when no textColor is passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper).to.have.style('color').equal('#f1f1f1');
        });
        it('should have textColor equal #282828 when no textColor is passed', () => {
            const wrapper = shallow(<FullHeader textColor="#282828" />);
            expect(wrapper).to.have.style('color').equal('#282828');
        });
    });

    context('font', () => {
        it('should have font equal sans-serif when no font is passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper).to.have.style('font-family').equal('sans-serif');
        });
        it('should have font equal open-sans when font is passed', () => {
            const wrapper = shallow(<FullHeader font="open-sans" />);
            expect(wrapper).to.have.style('font-family').equal('open-sans');
        });
    });

    context('bgImg', () => {
        it('should have background-image equal empty when no bgImg is passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper).to.have.style('background-image').equal('url()');
        });
        it('should have background-image equal empty when no bgImg is passed', () => {
            const wrapper = shallow(<FullHeader bgImg="bg.jpg" />);
            expect(wrapper)
                .to.have.style('background-image')
                .equal('url(bg.jpg)');
        });
    });

    context('video', () => {
        it('should have video tag when video passed', () => {
            const wrapper = shallow(<FullHeader bgVideo="video.mp4" />);
            expect(wrapper.find('video')).to.have.length(1);
        });

        it('should not have video tag when video is not passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('video')).to.have.length(0);
        });

        it('should have video tag with video passed', () => {
            const wrapper = shallow(<FullHeader bgVideo="video.mp4" />);
            expect(wrapper.find('video').props().src).to.be.equal('video.mp4');
        });
    });
});
