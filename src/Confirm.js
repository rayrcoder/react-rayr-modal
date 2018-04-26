/**
 * Created by Rayr Lee on 2018/4/23.
 */

import React from 'react';
import {RayrBtn} from 'react-rayr-btn';
import classnames from 'classnames';

import Dialog from './Dialog';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function Confirm(props) {

    const {data, confirm, cancel} = props;

    return [
        <Header key="Header" {...props}>{data.title}</Header>,
        <Body key="Body">{data.msg}</Body>,
        <Footer key="Footer">
            <RayrBtn type={data.type} size={data.btnSzie} icon={data.confirmIcon} onClick={() => {
                confirm();
            }}>{data.confirmText}</RayrBtn>
            <RayrBtn type={data.type} size={data.btnSzie} inverse="true" icon={data.cancelIcon} onClick={() => {
                cancel();
            }}>{data.cancelText}</RayrBtn>
        </Footer>
    ]
}

export default (opt = {}) => {

    let _opt = {
        backDrop: opt.backDrop || false, //点击背景是否关闭
        size: opt.size || 'sm', //确认框大小
        className: classnames('rayr-modal-confirm', opt.className),
        data: {
            title: opt.title || '系统提示', //标题
            msg: opt.msg || '您确定要执行此操作吗？', //内容
            type: opt.type || 'primary', //确认框类型
            btnSzie: opt.btnSzie || 'md', //按钮大小
            confirmText: opt.confirmText || '确定', //确认按钮文案
            cancelText: opt.cancelText || '取消', //取消按钮文案
            confirmIcon: opt.confirmIcon || 'check', //确认按钮图标
            cancelIcon: opt.cancelIcon || 'close'  //取消按钮图标
        }
    };

    return Dialog(Confirm, _opt)
}
