import { Button } from 'antd';
import PropTypes from 'prop-types';
import { useConfirm } from '../../../common/hooks';

const Operate = ({ record, actions }) => {
  const handler = (item) => {
    switch (item.code) {
      case 'detail':
        detail();
        break;
      case 'stop':
        stop();
        break;
      case 'log':
        log();
        break;
      default:
        break;
    }
  };
  const detail = () => {
    console.log(record);
  };
  const stop = () => {
    useConfirm('停止标注后该批次剩余数量将回到主批次，确定停止标注?', () => {
      console.log('停止标注');
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
