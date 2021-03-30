import { Button } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useConfirm } from '../../../common/hooks';
import { setFormTypeAction, setFormVisiableAction } from '../../../redux/actions/engineer';
import { getDetail } from '../../../redux/actionsAsync/engineer';

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
    dispatch(getDetail({ params: { id: record.id } }));
    dispatch(setFormTypeAction({ formType: 'edit' }));
    dispatch(setFormVisiableAction({ isFormVisible: true }));
  };
  const detail = () => {
    dispatch(getDetail({ params: { id: record.id } }));
    dispatch(setFormTypeAction({ formType: 'detail' }));
    dispatch(setFormVisiableAction({ isFormVisible: true }));
  };
  const reset = () => {
    console.log(record);
    useConfirm('确定重置密码?', () => {
      console.log('重置密码');
    });
  };
  const destroy = () => {
    console.log(record);
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
