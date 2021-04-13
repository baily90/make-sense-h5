import React, { memo, useMemo } from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useConfirm } from '../../../common/hooks';
import { setFormTypeAction, setFormVisiableAction } from '../../../redux/actions/engineer';
import {
  getDetail, resetPassword, destoryEngineer, getEngineerList,
} from '../../../redux/actionsAsync/engineer';

const Operate = memo(({ record, actions }) => {
  const dispatch = useDispatch();
  const searchParams = useSelector((state) => state.engineer.searchParams);
  const history = useHistory();

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
      case 'start':
        start();
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
    useConfirm('确定重置密码?', () => {
      dispatch(resetPassword({ userId: record.id }));
    });
  };
  const start = () => {
    useConfirm('确定启用?', () => {
      dispatch(destoryEngineer({ userId: record.id }, () => {
        dispatch(getEngineerList({ params: searchParams }));
      }));
    });
  };
  const destroy = () => {
    useConfirm('确定销户?', () => {
      dispatch(destoryEngineer({ userId: record.id }, () => {
        dispatch(getEngineerList({ params: searchParams }));
      }));
    });
  };
  const log = () => {
    history.push(`/log?type=1&code=${record.id}`);
  };

  const buttonList = useMemo(() => {
    const { status } = record;
    let flagArray = [];
    if (Number(status) === 2) {
      flagArray = ['edit', 'detail', 'start', 'log'];
    } else {
      flagArray = ['edit', 'detail', 'reset', 'destroy', 'log'];
    }
    return actions.filter((item) => flagArray.includes(item.code));
  }, [record, actions]);

  return (
    <>
      {
        buttonList.map((item) => (
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
});
Operate.defaultProps = {
  record: {},
};
Operate.propTypes = {
  record: PropTypes.object,
  actions: PropTypes.array.isRequired,
};

export default Operate;
