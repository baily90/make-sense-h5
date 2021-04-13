import React, { memo, useMemo } from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useConfirm } from '../../../common/hooks';
import { setFormTypeAction, setFormVisiableAction } from '../../../redux/actions/template';
import { getTemplateList, getDetail, changeStatus } from '../../../redux/actionsAsync/template';

const Operate = memo(({ record, actions }) => {
  const dispatch = useDispatch();
  const searchParams = useSelector((state) => state.template.searchParams);

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
      dispatch(changeStatus({ id: record.id, status: 1 }, () => {
        dispatch(getTemplateList({ params: searchParams }));
      }));
    });
  };
  const down = () => {
    useConfirm('确定下架?', () => {
      dispatch(changeStatus({ id: record.id, status: 2 }, () => {
        dispatch(getTemplateList({ params: searchParams }));
      }));
    });
  };
  const log = () => {};

  const buttonList = useMemo(() => {
    const { status } = record;
    let flagArray = ['edit', 'log'];
    if (Number(status) === 1) {
      flagArray = ['edit', 'up', 'log'];
    } else if (Number(status) === 2) {
      flagArray = ['edit', 'down', 'log'];
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
