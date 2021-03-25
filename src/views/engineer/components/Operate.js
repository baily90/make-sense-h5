import { Button } from 'antd';
import PropTypes from 'prop-types';
import { useConfirm } from '../../../common/hooks';

const Operate = ({ record, actions }) => {
  const handler = (item) => {
    switch (item.code) {
      case 'edit':
        edit();
        break;
      case 'detail':
        detail();
        break;
      case 'reset':
        reset();
        break;
      case 'destroy':
        destroy();
        break;
      case 'log':
        log();
        break;
      default:
        break;
    }
  };
  const edit = () => {
    console.log(record);
  };
  const detail = () => {};
  const reset = () => {
    useConfirm('确定重置密码?', () => {
      console.log('重置密码');
    });
  };
  const destroy = () => {
    useConfirm('确定销户?', () => {
      console.log('销户');
    });
  };
  const log = () => {};
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
