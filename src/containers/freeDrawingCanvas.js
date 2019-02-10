import React, { Component } from 'react';
import { fabric } from 'fabric';
import { FaEyeDropper } from 'react-icons/fa';
import { PhotoshopPicker } from 'react-color';

import {
    CanvasContainer,
    Backdrop,
    Toolbar,
    ToolbarButton,
} from 'components/canvas.js';
import BrushSizePicker from 'components/brushSizePicker';


const popover = {
    position: 'absolute',
    zIndex: '2',
    bottom: '0.5rem',
}
const cover = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
}

class FreeDrawingCanvas extends Component {
    state = {
        isDrawing: false,
        displayColorPicker: false,
        color: '#E5BB22',
        size: 10,
    }

    componentDidMount() {
        const { color, size } = this.state;
        const { width, height, zIndex } = this.props;
        this.canvas = new fabric.Canvas('free-drawing-canvas', {
            width: width,
            height: height,
            selection: false,
            preserveObjectStacking:true,
        });
        this.canvas.isDrawingMode = 1;
        this.canvas.freeDrawingBrush.color = color;
        this.canvas.freeDrawingBrush.width = size;

        this.canvas.on('mouse:down', this.handleMouseDown);
        this.canvas.on('mouse:move', this.handleMouseMove);
        this.canvas.on('mouse:up', this.handleMouseUp);

        const zindex = (zIndex) ? zIndex : 2;
        document.getElementsByClassName('canvas-container')[0].style.zIndex = zindex;
        const backdropEl = document.getElementById('free-drawing-backtrop');
        const childs = (backdropEl.children) ? Array.from(backdropEl.children) : [];
        childs.forEach((child) => {
            child.style.maxWidth = `${width}px`;
            child.style.maxHeight = `${height}px`;
        });
    }

    componentWillUnmount() {
        this.canvas.off('mouse:down', this.handleMouseDown);
        this.canvas.off('mouse:move', this.handleMouseMove);
        this.canvas.off('mouse:up', this.handleMouseUp);
    }

    handleMouseDown = (o) => {
        const pointer = this.canvas.getPointer(o.e);
        console.log('DOWN')
        console.log('x:', pointer.x, 'y:', pointer.y)
        this.setState({ isDrawing: true });
    }

    handleMouseMove = (o) => {
        const { isDrawing } = this.state;
        const pointer = this.canvas.getPointer(o.e);
        if (!isDrawing) { return; }
        console.log('MOVE')
        console.log('x:', pointer.x, 'y:', pointer.y)
    }

    handleMouseUp = (o) => {
        const { isDrawing } = this.state;
        const pointer = this.canvas.getPointer(o.e);
        if (!isDrawing) { return; }
        console.log('UP')
        console.log('x:', pointer.x, 'y:', pointer.y)
        this.setState({ isDrawing: false });
    }

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    handleChangeComplete = (color) => {
        this.canvas.freeDrawingBrush.color = color.hex;
        this.setState({ color: color.hex });
    };

    handleBrushSizeSelected = (size) => {
        this.canvas.freeDrawingBrush.width = size;
        this.setState({ size: size });
    }

    render() {
        const { color, size, displayColorPicker } = this.state;
        const { width, height, children } = this.props;

        return (
            <CanvasContainer 
                className="free-drawing-container"
                width={width}
                height={height}
            >
                <canvas id="free-drawing-canvas"></canvas>
                <Backdrop
                    id="free-drawing-backtrop"
                    width={width}
                    height={height}
                >
                    { children }
                </Backdrop>
                <Toolbar>
                    <ToolbarButton
                        onClick={ this.handleClick }
                    >
                        <FaEyeDropper />
                    </ToolbarButton>
                    { displayColorPicker ? <div style={ popover }>
                        <div style={ cover } onClick={ this.handleClose }/>
                        <PhotoshopPicker
                            color={ color }
                            onChangeComplete={ this.handleChangeComplete }
                        />
                    </div> : null }
                    <BrushSizePicker
                        color={ color }
                        onChange={ this.handleBrushSizeSelected }
                        defaultValue={ size }
                    />
                </Toolbar>
            </CanvasContainer>
        );
    }
}

export default FreeDrawingCanvas;
