import { Button } from '@strapi/design-system';
import { unstable_useContentManagerContext as useContentManagerContext } from '@strapi/strapi/admin';
import axios from 'axios';

const ExampleButton = () => {
  const { id, model, form } = useContentManagerContext();

  const testFetch = async () => {
    console.log('id = ', id);
    console.log('model = ', model);
    console.log('form = ', form);

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
