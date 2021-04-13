import React, { memo, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useConfirm } from '../../../common/hooks';
import {
  getMainBatchList, getBatchDetail, getEditDetail, stopTagging,
} from '../../../redux/actionsAsync/mainBatch';

const Operate = memo(({ record, actions }) => {
  const dispatch = useDispatch();
  const searchParams = useSelector((state) => state.mainBatch.searchParams);
  const history = useHistory();

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
  const edit = () => {
    dispatch(getEditDetail({ params: { batchId: record.id } }));
  };
  const detail = () => {
    dispatch(getBatchDetail({ params: { batchId: record.id } }));
  };
  const stop = () => {
    useConfirm('确定停止标注?', () => {
      dispatch(stopTagging({ batchId: record.id }, () => {
        dispatch(getMainBatchList({ params: searchParams }));
      }));
    });
  };
  const log = () => {
    history.push(`/log?type=2&code=${record.id}`);
  };

  const buttonList = useMemo(() => {
    const { status } = record;
    let flagArray = [];
    if (Number(status) === 1) {
      flagArray = ['edit', 'detail', 'stop', 'log'];
    } else if (Number(status) === 3) {
      flagArray = ['detail', 'stop', 'log'];
    } else {
      flagArray = ['detail', 'log'];
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
