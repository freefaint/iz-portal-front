import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

import apiYaml from '../../api.yml';

export const Swagger = () => {
  return <SwaggerUI spec={apiYaml} />;
};
