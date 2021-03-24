import { Button } from 'antd';
import PropTypes from 'prop-types';

const Operate = ({ record, actions }) => {
  const handler = (item) => {
    switch (item.code) {
      case 'edit':
        edit();
        break;
      default:
        break;
    }
  };
  const edit = () => {
    console.log(record);
  };
  return (
    <>
      {
        actions.map((item) => (
          <Button
            style={{ marginRight: 10 }}
            key={item.code}
            onClick={() => handler(item)}
            type={item.type}
          >
            {item.name}
          </Button>
        ))
      }
    </>
  );
};
Operate.defaultProps = {
  record: {},
};
Operate.propTypes = {
  record: PropTypes.object,
  actions: PropTypes.array.isRequired,
};

export default Operate;
