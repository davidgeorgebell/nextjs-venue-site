import Layout from '../components/Layout';
import { AnimationX } from '../components/AnimationX';
import { AnimationY } from '../components/AnimationY';

export default function About() {
  return (
    <Layout>
      <div className='content-wrapper'>
        <AnimationX>
          <h1 className='title center'>About</h1>
        </AnimationX>
        <div className='page-text-wrapper'>
          <AnimationY>
            <p>
              The Music Club is a fictional music venue, created by David Bell.
              It was a great way to build a website with Airtable as a content
              management system.
            </p>

            <p>
              It's built with nextjs(React). And the pages are statically
              generated which makes them super fast.
            </p>
          </AnimationY>
          <p>
            You can find out more about me by visiting portfolio{' '}
            <a
              href='https://davidbell.co'
              target='_blank'
              rel='noopener noreferrer'>
              davidbell.co
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
