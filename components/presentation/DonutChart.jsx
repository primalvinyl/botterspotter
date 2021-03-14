import React from 'react';
import PropTypes from 'prop-types';

const DonutChart = ({
        start,
        end,
        maxValue,
        size,
        animationSpeed,
        unitText,
        pathColor,
        circleColor,
        textColor,
        className,
    }) => {

    React.useEffect(() => {
        /*
        TODO Massive refactoring
        
            Based on circleDonutChart by Valerio Neri

            clear / reset the chart:
                myChart.clear();
            
            Options:
            start					starting value
            end			 			ending value
            animationSpeed = 0		no Animation
            animationSpeed = 1		normal speed
            scaling					scaling value, 1 for normal
            size					in px, the size of the chart
            getValue()				gets actual value
            setValue()				sets a value without animation
            unitText				sets the unit for the shown number
            maxValue				optional parameter this overrides 100% with a maximal Value      
        */
        
        const donutChartCreate = function(){
            let centerx = 0;
            let centery = 0;
            let sizex = 0;
            let sizey = 0;
            let scaling = 0;
            let radius = 0;
            let startx = 0;
            let starty = 0;
            let endx = 0;
            let endy = 0;
            let firedAnimation = false;
            let lastValue = -1;
            let startValue = 0;
            let endValue = 0;
            let textShift = 20; // this is required for moving the chart
            let textScaling = 1;

            const svg = document.getElementById('svg');
            const outerCircleDOM = document.getElementById('path');
            const innerCircleDOM = document.getElementById('circle');
            const tNumberDOM = document.getElementById('number');
            const tUnitDOM = document.getElementById('unit');

            this.getValue = () => {
                if (lastValue > -1) return Math.round(lastValue / 360 * maxValue * 10) / 10;
                else return 0;
            }
            
            this.setValue = (value) => {
                this.draw({end:value, animationSpeed:0});
            }
            
            const setAnimate = (fromD, toD, duration) => {
                let dAct = fromD;
                // determine direction (up or down)
                if (dAct < toD) doIt(dAct, toD, duration, 'up');
                else doIt(dAct, toD, duration, 'down');
            }

            // this function is used for the animation - it uses an exponential acceleration
            const calculateAccValue = (xx, m) => {
                let mxValue = m;
                let x = Math.round(xx);
                if (m === 0) mxValue = 1;
                if (x === 0) x = 1;
                if (Math.abs(x) >= mxValue) return mxValue;
                else {
                    let num1 = -2;
                    let num2 = Math.round(((-1 * x) + (Math.log(mxValue) / Math.log(2))));
                    return Math.pow(num1 , num2 ) + mxValue;
                }
            }

            const textSetter = (DOM, text) => {
                // text scaling
                if (text >= 1000 && textScaling === 1){
                    textScaling = 1-((Math.floor( (Math.log(text) / Math.log(10))-2)) / 10)-0.1;
                    tNumberDOM.setAttribute('font-size', 50 * scaling * textScaling);
                    tUnitDOM.setAttribute('font-size', 30 * scaling  *textScaling);
                } else {
                    textScaling = 1;
                    tNumberDOM.setAttribute('font-size', 50*scaling*textScaling);
                    tUnitDOM.setAttribute('font-size', 30*scaling*textScaling);
                }
                DOM.textContent = text;
            }
            
            const doIt = (dAct, toD, duration, direction) => {
                let toString = '';
                toString = getD(dAct-0.0001);
                outerCircleDOM.setAttribute('d', toString);
                
                textSetter(tNumberDOM, Math.round(dAct / 360 * maxValue * 10) / 10);
                
                // determine direction (up or down)
                if (direction === 'up') dAct = dAct + 5.5;
                else dAct = dAct - 5.5;
                    
                duration = duration - calculateAccValue(duration, 500);
                if (direction === 'up'){
                    if (dAct < toD){
                        setTimeout(() => {
                            // animate it according to refresh rate
                            requestAnimationFrame(() => {
                                doIt(dAct, toD, duration, direction);
                            })
                        }, duration);
                    } else {
                        outerCircleDOM.setAttribute('d', getD((toD-0.0001)));
                        textSetter(tNumberDOM, Math.round(toD / 360  *maxValue * 10) / 10);
                    }
                } else {
                    if (dAct >= toD){
                        setTimeout(() => {
                            // animate it according to refresh rate
                            requestAnimationFrame(() => {
                                doIt(dAct, toD, duration, direction);
                            })
                        }, duration);
                    } else {
                        outerCircleDOM.setAttribute('d', getD(toD-0.0001));
                        textSetter(tNumberDOM, Math.round(toD / 360 * maxValue * 10) / 10);
                    }
                }
                
            };

            // this function gives us the circle coordinates
            const getCoordinates = (radius, offset, degrees) => {
                let radians = degreesToRadians(degrees);
                let x = offset.x + radius * Math.cos(radians)
                let y = offset.y + radius * Math.sin(radians)
                return {x:x,y:y};
            };
            
            // small converstion beween degrees and radians
            const degreesToRadians = degrees => {
                let radians = (degrees * Math.PI) / 180;
                return radians
            };

            // this function returns the "d" string for the path, according to the degrees
            const getD = degree => {
                radius = 100 * scaling;
                startx = centerx + radius;
                starty = centery;
                let coor = getCoordinates(radius, { x:startx, y:starty }, degree);
                endx = coor.x;
                endy = coor.y;
                let largearc = 0;
                if (degree > 180) largearc = 1;
                else largearc = 0;
                let d = `M ${startx} ${starty} a ${radius} ${radius} 0 ${largearc} 1 ${endx-startx-radius} ${endy-starty} L ${centerx} ${centery} Z`;
                return d;
            }

            const startAnimation = () => {
                if (firedAnimation) return;
                firedAnimation = true;
                setAnimate(startValue, endValue, (500 / animationSpeed));
            }
            
            this.clear = () => {
                // reinitialize some parameters
                firedAnimation = false;
                animationSpeed = 1;
                maxValue = 100;
                lastValue = -1;
                this.setValue(0);
            }
            
            this.draw = options => {
                // OPTION CHECK - contains the options
                // check if all options are set
                let oTester = [];
                oTester.options = typeof(options) != 'undefined';
                
                oTester.scaling = typeof(options.scaling) != "undefined";
                oTester.size = typeof(options.size) != "undefined";
                oTester.animationSpeed = typeof(options.animationSpeed) != "undefined";
                oTester.unitText = typeof(options.unitText) != "undefined";
                
                // reinitialize some parameters
                firedAnimation = false;
                animationSpeed = 1;
                textShift = 20;
                textScaling = 1;
                
                // if the values are not set, set the standard
                if (!oTester.size) options.size = 200;
                if (!oTester.scaling) options.scaling = 1;
                
                // if size is not set, then take the options.scaling and the standard size of 200x200
                if (!oTester.size){
                    svg.setAttribute('width', 200 * options.scaling);
                    svg.setAttribute('height', 200 * options.scaling);
                    options.size = 200 * options.scaling;
                }

                // if scaling not set, then take the size anc calculate the options.scaling
                if (!oTester.scaling){
                    svg.setAttribute('width', options.size);
                    svg.setAttribute('height', options.size);
                    if (svg.getAttribute('width')<svg.getAttribute('height')){
                        options.scaling = svg.getAttribute('width') / 200;
                    } else{
                        options.scaling = svg.getAttribute('height') / 200;
                    }
                }
                
                // set the unitText, if set
                if (oTester.unitText) unitText = options.unitText;
                
                // set the maxValue, if set
                if (oTester.maxValue) maxValue = options.maxValue;

                // set the starting position, if set
                if (oTester.start){
                    options.start = Math.round(parseFloat(options.start) * 10) / 10;
                    if (options.start > maxValue) options.start = maxValue;
                    if (options.start < 0) options.start = 0;
                    if (isNaN(options.start)){
                        // not a number and not parseable, ignore
                        options.start = 0;
                        oTester.start = false;
                    }
                    startValue = options.start / maxValue * 360;
                }
                
                options.end = Math.round(parseFloat(options.end) * 10) / 10;

                if (options.end > maxValue) end = maxValue;
                if (options.end < 0) options.end = 0;
                if (isNaN(options.end)) return;
                
                options.end = options.end / maxValue * 360;
                endValue = options.end;
                textShift = textShift * options.scaling;
                
                // set the size and the center
                sizex = options.size;
                sizey = options.size + 2 * textShift;
                centerx = sizex / 2;
                centery = (sizey / 2);
                scaling = options.scaling;
                
                // set animation speed (0 = no animation), standard is one
                if(oTester.animationSpeed) animationSpeed = options.animationSpeed;
                
                // initialise with start position
                outerCircleDOM.setAttribute('d', getD(startValue));
                
                svg.setAttribute('height', sizey);

                innerCircleDOM.setAttribute('cx', centerx);
                innerCircleDOM.setAttribute('cy', centery);
                innerCircleDOM.setAttribute('r', 80 * options.scaling);
                
                tNumberDOM.setAttribute('x', centerx);
                tNumberDOM.setAttribute('y', centery + Math.round(18.75 * options.scaling));
                tNumberDOM.setAttribute('font-size', 50 * options.scaling);
                
                tUnitDOM.setAttribute('font-size', 30 * options.scaling);
                tUnitDOM.textContent = unitText;
                
                // if the animation has been chosen
                if (animationSpeed > 0){
                    // ignore start value if lastvalue is already set
                    if (lastValue > -1) startValue = lastValue;
                    // window.addEventListener("resize", startAnimation, false);
                    // document.addEventListener("scroll", startAnimation, false);
                    tNumberDOM.textContent = Math.round(startValue/360*maxValue*10)/10;
                    startAnimation();
                } else {
                    // set the circle to the end position, without animation
                    // the 0.0001 is for avoiding the circle to disappear, due to some browser
                    outerCircleDOM.setAttribute('d', getD(options.end - 0.0001));
                    tNumberDOM.textContent = Math.round(options.end / 360 * maxValue * 10) / 10;
                }
                
                lastValue = endValue;
            }
        };

        const chart = new donutChartCreate();
        chart.draw({
            start: start,
            end: end,
            size: size,
            unitText: unitText,
        });
    });

    return ( 
        <div className={className}>
            <svg id="svg">
                <path id="path" stroke="none" strokeWidth="36" fill={pathColor}></path>
                <circle id="circle" stroke="none" strokeWidth="2" fill={circleColor}></circle>
                <text>
                    <tspan id="number" fontWeight="bold" textAnchor="middle" fill={textColor}></tspan>
                    <tspan id="unit" fontWeight="normal" textAnchor="middle" fill={textColor}></tspan>
                </text>
            </svg>
        </div>
    ) 
};

DonutChart.propTypes = {
    start: PropTypes.number,
    end: PropTypes.number,
    maxValue: PropTypes.number,
    size: PropTypes.number,
    animationSpeed: PropTypes.number,
    unitText: PropTypes.string,
    pathColor: PropTypes.string,
    circleColor: PropTypes.string,
    textColor: PropTypes.string,
    className: PropTypes.string,
};

DonutChart.defaultProps = {
    start: 0,
    end: 5,
    maxValue: 10,
    size: 200,
    animationSpeed: 1,
    unitText: '',
    pathColor: 'white',
    circleColor: 'black',
    textColor: 'white',
    className: '',
};

export default DonutChart;
