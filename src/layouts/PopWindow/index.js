import React, { Component, createElement } from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withStyles from 'react-jss';
import ReactResizeDetector from 'react-resize-detector';

import { withPopWindowConsumer } from './Context';

import { CloseIcon } from 'components/utils/Icons/index.js';
import Title from 'components/blocks/Title';
import style from './style';

class PopWindow extends Component {
    handlePopWindowClose = (event) => {
      const { popWindowData } = this.props;
      const { closeByButtonOnly, components } = popWindowData;
      const componentObject = components[components.length - 1];

      if (event.target.classList.contains('closeTrigger') && !closeByButtonOnly) {
        componentObject.closePopWindowFunc();
      }
    }

    render() {
      const { classes, popWindowData } = this.props;
      const {
        components,
        openPopWindowFunc,
        isFullModeForMobile,
        isFullWidthForMobile,
      } = popWindowData;

      if (components.length === 0) return null;

      const componentObject = components[components.length - 1];

      return (
        <ReactResizeDetector handleHeight>
        {
            ({ height }) => {
                return (
                    <div
                        className={`${classes.box} closeTrigger`}
                        style={{
                            lineHeight: `${height}px`
                        }}
                        onClick={this.handlePopWindowClose}
                    >
                        {
                            typeof height === "undefined" ? null : (
                                <div className={classnames(
                                    classes.window,
                                    isFullModeForMobile ? "full-mode" : null,
                                    isFullWidthForMobile ? "full-width" : null,
                                    componentObject.componentProps.appearanceStyle
                                    )}
                                >
                                    <div
                                        className={classnames(classes.windowContent, componentObject.componentProps.customWindowContentClass)}
                                        style={{
                                            maxHeight: `${height - 42}px`,
                                        }}
                                    >
                                        <Title h="h4" title={componentObject.componentProps.title} customClass={classnames(classes.title, componentObject.componentProps.customTitleClass, componentObject.componentProps.appearanceStyle)}/>
                                        <button className={classnames(classes.closeBtn, componentObject.componentProps.appearanceStyle)} onClick={componentObject.closePopWindowFunc}><CloseIcon /></button>
                                        {createElement(componentObject.component, {
                                        openPopWindowFunc,
                                        closePopWindowFunc: componentObject.closePopWindowFunc,
                                        style: {
                                            maxHeight: `${height - 92}px`
                                        },
                                        ...componentObject.componentProps,
                                        })}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                )
            }
        }
        </ReactResizeDetector>
      );
    }
  }

  PopWindow.propTypes = {
    classes: PropTypes.object.isRequired,
    popWindowData: PropTypes.object.isRequired,
  };

  export default withPopWindowConsumer(
      withStyles(style)(PopWindow)
  );

