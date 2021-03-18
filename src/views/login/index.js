/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 00:53:12
 * @LastEditTime: 2021-03-19 00:56:13
 * @LastEditors: zhangyanlong
 * @Description:
 */
import React from 'react';
import { connect } from 'react-redux';

const Login = () => (
  <>Login</>
);

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  setUserInfo: (data) => {
    dispatch(data);
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
