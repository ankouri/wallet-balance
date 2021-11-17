import React from 'react';
import ReactLoading from 'react-loading';
import { style } from './loading-style';

export default function Loading() {
    return (
        <style.Wrapper><ReactLoading type='bars' color="#3f3d56" /></style.Wrapper>
    );
}
