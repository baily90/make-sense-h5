import React, { memo, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useConfirm } from '../../../common/hooks';
import { getSubBatchList, getSubBatchDetail } from '../../../redux/actionsAsync/subBatch';
import { stopTagging } from '../../../redux/actionsAsync/mainBatch';

const Operate = memo(({ record, actions }) => {
  const dispatch = useDispatch();
  const searchParams = useSelector((state) => state.subBatch.searchParams);
  const history = useHistory();

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
    dispatch(getSubBatchDetail({ params: { subBatchId: record.id } }));
  };
  const stop = () => {
    useConfirm('停止标注后该批次剩余数量将回到主批次，确定停止标注?', () => {
      dispatch(stopTagging({ batchId: record.id }, () => {
        dispatch(getSubBatchList({ params: searchParams }));
      }));
    });
  };
  const log = () => {
    history.push(`/log?type=3&code=${record.id}`);
  };

  const buttonList = useMemo(() => {
    const { status } = record;
    let flagArray = [];
    if ([1, 2, 3].includes(Number(status))) {
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
