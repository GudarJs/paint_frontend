import { Button } from 'antd';
import styled from 'styled-components';


export const CanvasContainer = styled.div`
    position: relative;
    margin: 0 auto 42px auto;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
`;

export const Backdrop = styled.div`
    background-color: #EEEEEE;
    box-shadow: #bbb 0px 0px 3px;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
`;

export const Toolbar = styled.div`
    width: 100%;
    height: 32px;
    display: flex;
    background-color: #E3E3E3;
    z-index: 3;
    box-shadow: #bbb 0px 0px 2px;
`;

export const ToolbarButton = styled(Button)`
    height: 33px;
    border-radius: 0;
`;

export default {
    CanvasContainer,
    Backdrop,
    Toolbar,
    ToolbarButton,
}
