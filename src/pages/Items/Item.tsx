import { RouteComponentProps } from 'react-router-dom';

const Item = ({ match }:
  {} & RouteComponentProps<{
    itemName: string;
  }>
) => (
  <div>
    Hello {match.params.itemName}
  </div>
);

export default Item;
