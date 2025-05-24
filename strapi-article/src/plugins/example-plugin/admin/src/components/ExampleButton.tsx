import { Button } from '@strapi/design-system';
import { unstable_useContentManagerContext as useContentManagerContext } from '@strapi/strapi/admin';
import axios from 'axios';

type Context = {
  values: { slug: string; section: string };
  disabled: boolean;
};

const ExampleButton = () => {
  const { model, form } = useContentManagerContext();
  const { slug, section } = (form as Context).values;

  const strapiUrl = window.location.origin;
  const token = localStorage.getItem('jwtToken');
  console.log('token', token);
  const testFetch = async () => {
    const urlTestFetch = await axios.get(`/api/example-controller`);
    console.log('urlTestFetch: ', urlTestFetch);
  };

  return (
    <div style={{ width: '100%' }}>
      <Button variant="secondary" fullWidth onClick={testFetch}>
        ExampleButton
      </Button>
    </div>
  );
};

export default ExampleButton;
