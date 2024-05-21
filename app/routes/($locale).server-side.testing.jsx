import {json} from '@remix-run/react';

export function loader() {
  return json({
    message: 'Message from the Server.',
  });
}

export function action({request}) {
  return json({
    method: request.method,
  });
}
