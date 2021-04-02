import { Button } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useConfirm } from '../../../common/hooks';
import { setFormTypeAction, setFormVisiableAction } from '../../../redux/actions/template';
import { getDetail } from '../../../redux/actionsAsync/template';

const Operate = ({ record, actions }) => {
  const dispatch = useDispatch();
  const handler = (item) => {
    switch (item.code) {
      case 'edit':
        edit();
        break;
      case 'up':
        up();
        break;
      case 'down':
        down();
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
    dispatch(getDetail({ params: { propertyId: record.id } }));
    dispatch(setFormTypeAction({ formType: 'edit' }));
    dispatch(setFormVisiableAction({ isFormVisible: true }));
  };
  const up = () => {
    useConfirm('确定上架?', () => {
      console.log('上架');
    });
  };
  const down = () => {
    useConfirm('确定下架?', () => {
      console.log('下架');
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
