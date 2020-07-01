import Layout from '../components/Layout';
import { AnimationX } from '../components/AnimationX';

export default function About() {
  return (
    <Layout>
      <div className='content-wrapper'>
        <AnimationX>
          <h1 className='title center'>About</h1>
        </AnimationX>
        <p>This is an about page</p>
      </div>
    </Layout>
  );
}
