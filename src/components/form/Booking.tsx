import Modal from 'antd/lib/modal';
import React from 'react';
import UserInfo from './UserInfo';
import {DatePicker} from 'antd';
import './styles.css';
import 'antd/lib/modal/style/css';
import 'antd/lib/button/style/index.css';


const {RangePicker} = DatePicker;

const formItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 8},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
    },
};
const config = {
    rules: [{type: 'object' as const, required: true, message: 'Please select time!'}],
};
const rangeConfig = {
    rules: [{type: 'array' as const, required: true, message: 'Please select time!'}],
};

type props = {
    isBooking: boolean;
    closeBooking: () => void;
}

const Booking = ({isBooking, closeBooking}: props) => {

    return (
        <>
            {isBooking &&
            <>
                <Modal
                    title="Book an Appointment"
                    centered
                    visible={isBooking}
                    onOk={() => closeBooking()}
                    onCancel={() => closeBooking()}
                >
                    <UserInfo isBooking={isBooking}/>
                </Modal>
            </>
            }
        </>
    );
};

export default Booking;
