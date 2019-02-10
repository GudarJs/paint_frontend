import React from 'react';
import { Select } from 'antd';
import styled from 'styled-components';
import { FaCircle } from 'react-icons/fa';


const BrushSize = styled(FaCircle)`
    font-size: ${props => props.fontSize}px;
    color: ${props => props.color};
    margin-right: 0.5rem;
`;

const optionStyle = {
    display: 'flex',
    alignItems: 'center',
};

const Option = Select.Option;

const BrushSizePicker = ({ color, defaultValue, onChange }) => {
    return (
        <Select defaultValue={defaultValue} style={{ width: '90px' }} onChange={onChange}>
            <Option style={optionStyle} value={5}>
                <BrushSize
                    fontSize={5}
                    color={color}
                />5
            </Option>
            <Option style={optionStyle} value={10}>
                <BrushSize
                    fontSize={10}
                    color={color}
                />10
            </Option>
            <Option style={optionStyle} value={15}>
                <BrushSize
                    fontSize={15}
                    color={color}
                />15
            </Option>
            <Option style={optionStyle} value={20}>
                <BrushSize
                    fontSize={20}
                    color={color}
                />20
            </Option>
        </Select>
    )
}

export default BrushSizePicker;
