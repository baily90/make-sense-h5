import { Button } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useConfirm } from '../../../common/hooks';
import { getBatchDetail } from '../../../redux/actionsAsync/mainBatch';

const Operate = ({ record, actions }) => {
  const dispatch = useDispatch();
  const handler = (item) => {
    switch (item.code) {
      case 'edit':
        edit();
        break;
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
  const edit = () => {};
  const detail = () => {
    console.log(record);
    dispatch(getBatchDetail({ params: { batchId: record.id } }));
  };
  const stop = () => {
    useConfirm('确定停止标注?', () => {
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
