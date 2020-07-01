import React from 'react';
import Layout from '../components/Layout';
import { AnimationX } from '../components/AnimationX';

export default function contact() {
  return (
    <Layout>
      <div className='content-wrapper'>
        <AnimationX>
          {' '}
          <h1 className='title center'>Contact Page</h1>
        </AnimationX>
        <p>A contact page</p>
      </div>
    </Layout>
  );
}
