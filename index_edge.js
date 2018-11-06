/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['alexa-std, sans-serif']='<script src=\"http://use.edgefonts.net/alexa-std:n4:all.js\"></script>';
    fonts['alice, serif']='<script src=\"http://use.edgefonts.net/alice:n4:all.js\"></script>';
    fonts['kotta-one, serif']='<script src=\"http://use.edgefonts.net/kotta-one:n4:all.js\"></script>';
    fonts['aguafina-script, cursive']='<script src=\"http://use.edgefonts.net/aguafina-script:n4:all.js\"></script>';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'DlgBackBoard',
                display: 'none',
                type: 'rect',
                rect: ['2.4%', '59.3%','auto','auto','auto', 'auto']
            },
            {
                id: 'Chapter_strt',
                display: 'none',
                type: 'rect',
                rect: ['0%', '0%','auto','auto','auto', 'auto']
            },
            {
                id: 'lOADING',
                display: 'none',
                type: 'rect',
                rect: ['0%', '0%','auto','auto','auto', 'auto']
            },
            {
                id: 'Blank_screen',
                display: 'none',
                type: 'rect',
                rect: ['0%', '0%','auto','auto','auto', 'auto']
            },
            {
                id: 'Chapter_completed',
                display: 'none',
                type: 'rect',
                rect: ['0%', '0%','auto','auto','auto', 'auto']
            },
            {
                id: 'bg',
                type: 'image',
                tag: 'img',
                rect: ['0%', '0%','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg/firstbscreen.png",'0px','0px']
            },
            {
                id: 'G_1',
                display: 'none',
                type: 'rect',
                rect: ['18.8%', '1.6%','auto','auto','auto', 'auto']
            },
            {
                id: 'B',
                display: 'none',
                type: 'rect',
                rect: ['34.7%', '4.3%','auto','auto','auto', 'auto']
            },
            {
                id: 'first_screen2',
                type: 'rect',
                rect: ['0%', '0%','auto','auto','auto', 'auto']
            },
            {
                id: 'GAME_PAUSE',
                display: 'none',
                type: 'rect',
                rect: ['0%', '0%','auto','auto','auto', 'auto']
            },
            {
                id: 'play',
                type: 'image',
                rect: ['90.2%', '10%','10%','3.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"icons/sound_on.png",'0px','0px'],
                transform: [[],[],[],['1','1.99206']]
            },
            {
                id: 'pause',
                type: 'image',
                rect: ['90.2%', '10%','10%','3.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"icons/sound_off.png",'0px','0px'],
                transform: [[],[],[],['1','1.99206']]
            }],
            symbolInstances: [
            {
                id: 'Chapter_completed',
                symbolName: 'Chapter_completed',
                autoPlay: {

                }
            },
            {
                id: 'lOADING',
                symbolName: 'lOADING',
                autoPlay: {

                }
            },
            {
                id: 'DlgBackBoard',
                symbolName: 'DlgBackBoard',
                autoPlay: {

                }
            },
            {
                id: 'G_1',
                symbolName: 'G_1',
                autoPlay: {

                }
            },
            {
                id: 'GAME_PAUSE',
                symbolName: 'gAME_PAUSE',
                autoPlay: {

                }
            },
            {
                id: 'first_screen2',
                symbolName: 'first_screen',
                autoPlay: {

                }
            },
            {
                id: 'Chapter_strt',
                symbolName: 'Chapter_strt',
                autoPlay: {

                }
            },
            {
                id: 'Blank_screen',
                symbolName: 'Blank_screen',
                autoPlay: {

                }
            },
            {
                id: 'B',
                symbolName: 'B',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Chapter_completed}": [
                ["style", "display", 'none']
            ],
            "${_play}": [
                ["style", "top", '10%'],
                ["transform", "scaleY", '1.99206'],
                ["style", "height", '3.46%'],
                ["style", "left", '90.16%'],
                ["style", "width", '10%']
            ],
            "${_Blank_screen}": [
                ["style", "display", 'none']
            ],
            "${_G_1}": [
                ["style", "top", '2.39%'],
                ["transform", "scaleY", '1.00994'],
                ["style", "display", 'none'],
                ["style", "left", '18.91%'],
                ["transform", "scaleX", '0.87314']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '100%'],
                ["style", "height", '100%'],
                ["style", "overflow", 'hidden']
            ],
            "${_bg}": [
                ["style", "top", '0%'],
                ["style", "height", '100%'],
                ["style", "left", '0%'],
                ["style", "width", '100%']
            ],
            "${_Chapter_strt}": [
                ["style", "display", 'none']
            ],
            "${_B}": [
                ["style", "top", '-0.52%'],
                ["style", "display", 'none'],
                ["style", "opacity", '0.94'],
                ["style", "left", '44.62%'],
                ["transform", "scaleX", '-0.92883']
            ],
            "${_lOADING}": [
                ["style", "display", 'none']
            ],
            "${_GAME_PAUSE}": [
                ["style", "display", 'none']
            ],
            "${_first_screen2}": [
                ["style", "top", '-0.1%']
            ],
            "${_pause}": [
                ["style", "top", '10%'],
                ["transform", "scaleY", '1.99206'],
                ["style", "height", '3.59%'],
                ["style", "left", '90.16%'],
                ["style", "width", '10%']
            ],
            "${_DlgBackBoard}": [
                ["transform", "scaleX", '1.0509'],
                ["style", "left", '2.37%'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 25000,
            autoPlay: true,
            timeline: [
                { id: "eid121190", tween: [ "style", "${_DlgBackBoard}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid372896", tween: [ "style", "${_G_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid482116", tween: [ "style", "${_first_screen2}", "top", '-0.1%', { fromValue: '-0.1%'}], position: 0, duration: 0 },
                { id: "eid306422", tween: [ "style", "${_Chapter_completed}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid212248", tween: [ "style", "${_Chapter_strt}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid321809", tween: [ "style", "${_B}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid345596", tween: [ "style", "${_B}", "top", '-0.52%', { fromValue: '-0.52%'}], position: 0, duration: 0 },
                { id: "eid447800", tween: [ "style", "${_DlgBackBoard}", "left", '2.37%', { fromValue: '2.37%'}], position: 0, duration: 0 },
                { id: "eid305101", tween: [ "style", "${_GAME_PAUSE}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid447799", tween: [ "transform", "${_DlgBackBoard}", "scaleX", '1.0509', { fromValue: '1.0509'}], position: 0, duration: 0 },
                { id: "eid298063", tween: [ "style", "${_Blank_screen}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid306423", tween: [ "style", "${_lOADING}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"WP_RS": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'R_S',
                    tag: 'img',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Shoes/1/R_S.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ],
            "${_R_S}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["transform", "rotateZ", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: true,
            timeline: [
                { id: "eid82564", tween: [ "transform", "${_R_S}", "rotateZ", '-4deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid82565", tween: [ "transform", "${_R_S}", "rotateZ", '0deg', { fromValue: '-4deg'}], position: 1000, duration: 1000 }            ]
        }
    }
},
"WP_LS": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'L_S',
                    tag: 'img',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Shoes/1/L_S.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ],
            "${_L_S}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["transform", "rotateZ", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: true,
            timeline: [
                { id: "eid82568", tween: [ "transform", "${_L_S}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
                { id: "eid82569", tween: [ "transform", "${_L_S}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 1500, duration: 500 }            ]
        }
    }
},
"WP_LL_bttm": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'B_LL_d_Bttm',
                    fill: ['rgba(0,0,0,0)', 'images/2/Bottom/1/LL_d_Bttm.png', '0px', '0px'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'B_LL_up_Bttm',
                    fill: ['rgba(0,0,0,0)', 'images/2/Bottom/1/LL_up_Bttm.png', '0px', '0px'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ],
            "${_B_LL_up_Bttm}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_B_LL_d_Bttm}": [
                ["style", "-webkit-transform-origin", [64.06,63.85], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [64.06,63.85],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [64.06,63.85],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [64.06,63.85],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [64.06,63.85],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["transform", "rotateZ", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1500,
            autoPlay: true,
            timeline: [
                { id: "eid23438", tween: [ "transform", "${_B_LL_d_Bttm}", "rotateZ", '-8deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid23439", tween: [ "transform", "${_B_LL_d_Bttm}", "rotateZ", '0deg', { fromValue: '-8deg'}], position: 500, duration: 500 },
                { id: "eid23419", tween: [ "transform", "${_B_LL_up_Bttm}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid23431", tween: [ "transform", "${_B_LL_up_Bttm}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1000, duration: 0 },
                { id: "eid23437", tween: [ "style", "${_B_LL_d_Bttm}", "-webkit-transform-origin", [64.06,63.85], { valueTemplate: '@@0@@% @@1@@%', fromValue: [64.06,63.85]}], position: 500, duration: 0 },
                { id: "eid483741", tween: [ "style", "${_B_LL_d_Bttm}", "-moz-transform-origin", [64.06,63.85], { valueTemplate: '@@0@@% @@1@@%', fromValue: [64.06,63.85]}], position: 500, duration: 0 },
                { id: "eid483742", tween: [ "style", "${_B_LL_d_Bttm}", "-ms-transform-origin", [64.06,63.85], { valueTemplate: '@@0@@% @@1@@%', fromValue: [64.06,63.85]}], position: 500, duration: 0 },
                { id: "eid483743", tween: [ "style", "${_B_LL_d_Bttm}", "msTransformOrigin", [64.06,63.85], { valueTemplate: '@@0@@% @@1@@%', fromValue: [64.06,63.85]}], position: 500, duration: 0 },
                { id: "eid483744", tween: [ "style", "${_B_LL_d_Bttm}", "-o-transform-origin", [64.06,63.85], { valueTemplate: '@@0@@% @@1@@%', fromValue: [64.06,63.85]}], position: 500, duration: 0 }            ]
        }
    }
},
"WP_PENT_Top": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'B_pent_top2',
                    fill: ['rgba(0,0,0,0)', 'images/2/Bottom/1/pent_top.png', '0px', '0px'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_B_pent_top2}": [
                ["style", "left", '0%'],
                ["style", "top", '0%']
            ],
            "${symbolSelector}": [
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"WP_LL": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'LL_d',
                    type: 'image',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Body/LL_d_Bttm.png', '0px', '0px']
                },
                {
                    id: 'LL_up',
                    type: 'image',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Body/LL_up_Bttm.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_LL_up}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_LL_d}": [
                ["style", "top", '0%'],
                ["style", "-webkit-transform-origin", [65.72,68.54], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [65.72,68.54],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [65.72,68.54],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [65.72,68.54],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [65.72,68.54],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '0%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1500,
            autoPlay: true,
            timeline: [
                { id: "eid23435", tween: [ "transform", "${_LL_d}", "rotateZ", '-11deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid23436", tween: [ "transform", "${_LL_d}", "rotateZ", '0deg', { fromValue: '-11deg'}], position: 500, duration: 500 },
                { id: "eid23427", tween: [ "transform", "${_LL_up}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid23432", tween: [ "transform", "${_LL_up}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1000, duration: 0 },
                { id: "eid23434", tween: [ "style", "${_LL_d}", "-webkit-transform-origin", [65.72,68.54], { valueTemplate: '@@0@@% @@1@@%', fromValue: [65.72,68.54]}], position: 500, duration: 0 },
                { id: "eid483745", tween: [ "style", "${_LL_d}", "-moz-transform-origin", [65.72,68.54], { valueTemplate: '@@0@@% @@1@@%', fromValue: [65.72,68.54]}], position: 500, duration: 0 },
                { id: "eid483746", tween: [ "style", "${_LL_d}", "-ms-transform-origin", [65.72,68.54], { valueTemplate: '@@0@@% @@1@@%', fromValue: [65.72,68.54]}], position: 500, duration: 0 },
                { id: "eid483747", tween: [ "style", "${_LL_d}", "msTransformOrigin", [65.72,68.54], { valueTemplate: '@@0@@% @@1@@%', fromValue: [65.72,68.54]}], position: 500, duration: 0 },
                { id: "eid483748", tween: [ "style", "${_LL_d}", "-o-transform-origin", [65.72,68.54], { valueTemplate: '@@0@@% @@1@@%', fromValue: [65.72,68.54]}], position: 500, duration: 0 }            ]
        }
    }
},
"WP_RL_bttm": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'B_RL_d_bttm',
                    fill: ['rgba(0,0,0,0)', 'images/2/Bottom/1/RL_d_bttm.png', '0px', '0px'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'B_RL_up_bttm',
                    fill: ['rgba(0,0,0,0)', 'images/2/Bottom/1/RL_up_bttm.png', '0px', '0px'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_B_RL_up_bttm}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ],
            "${_B_RL_d_bttm}": [
                ["style", "-webkit-transform-origin", [39.06,63.6], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [39.06,63.6],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [39.06,63.6],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [39.06,63.6],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [39.06,63.6],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["transform", "rotateZ", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid23454", tween: [ "transform", "${_B_RL_d_bttm}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid23469", tween: [ "transform", "${_B_RL_d_bttm}", "rotateZ", '-11deg', { fromValue: '0deg'}], position: 500, duration: 500 },
                { id: "eid23470", tween: [ "transform", "${_B_RL_d_bttm}", "rotateZ", '0deg', { fromValue: '-11deg'}], position: 1000, duration: 500 },
                { id: "eid23468", tween: [ "style", "${_B_RL_d_bttm}", "-webkit-transform-origin", [39.06,63.6], { valueTemplate: '@@0@@% @@1@@%', fromValue: [39.06,63.6]}], position: 1000, duration: 0 },
                { id: "eid483749", tween: [ "style", "${_B_RL_d_bttm}", "-moz-transform-origin", [39.06,63.6], { valueTemplate: '@@0@@% @@1@@%', fromValue: [39.06,63.6]}], position: 1000, duration: 0 },
                { id: "eid483750", tween: [ "style", "${_B_RL_d_bttm}", "-ms-transform-origin", [39.06,63.6], { valueTemplate: '@@0@@% @@1@@%', fromValue: [39.06,63.6]}], position: 1000, duration: 0 },
                { id: "eid483751", tween: [ "style", "${_B_RL_d_bttm}", "msTransformOrigin", [39.06,63.6], { valueTemplate: '@@0@@% @@1@@%', fromValue: [39.06,63.6]}], position: 1000, duration: 0 },
                { id: "eid483752", tween: [ "style", "${_B_RL_d_bttm}", "-o-transform-origin", [39.06,63.6], { valueTemplate: '@@0@@% @@1@@%', fromValue: [39.06,63.6]}], position: 1000, duration: 0 },
                { id: "eid23453", tween: [ "transform", "${_B_RL_up_bttm}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid23458", tween: [ "transform", "${_B_RL_up_bttm}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 500, duration: 0 },
                { id: "eid23463", tween: [ "transform", "${_B_RL_up_bttm}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1500, duration: 0 }            ]
        }
    }
},
"WP_RL": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'B_RL_d_Bttm2',
                    type: 'image',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Bottom/1/RL_d_bttm.png', '0px', '0px']
                },
                {
                    id: 'B_RL_up_Bttm2',
                    type: 'image',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Bottom/1/RL_up_bttm.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_B_RL_up_Bttm2}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ],
            "${_B_RL_d_Bttm2}": [
                ["style", "top", '0%'],
                ["style", "-webkit-transform-origin", [42.39,63.36], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [42.39,63.36],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [42.39,63.36],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [42.39,63.36],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [42.39,63.36],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '0%'],
                ["transform", "rotateZ", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid23450", tween: [ "transform", "${_B_RL_d_Bttm2}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid23466", tween: [ "transform", "${_B_RL_d_Bttm2}", "rotateZ", '-11deg', { fromValue: '0deg'}], position: 500, duration: 500 },
                { id: "eid23467", tween: [ "transform", "${_B_RL_d_Bttm2}", "rotateZ", '0deg', { fromValue: '-11deg'}], position: 1000, duration: 500 },
                { id: "eid23465", tween: [ "style", "${_B_RL_d_Bttm2}", "-webkit-transform-origin", [42.39,63.36], { valueTemplate: '@@0@@% @@1@@%', fromValue: [42.39,63.36]}], position: 1000, duration: 0 },
                { id: "eid483753", tween: [ "style", "${_B_RL_d_Bttm2}", "-moz-transform-origin", [42.39,63.36], { valueTemplate: '@@0@@% @@1@@%', fromValue: [42.39,63.36]}], position: 1000, duration: 0 },
                { id: "eid483754", tween: [ "style", "${_B_RL_d_Bttm2}", "-ms-transform-origin", [42.39,63.36], { valueTemplate: '@@0@@% @@1@@%', fromValue: [42.39,63.36]}], position: 1000, duration: 0 },
                { id: "eid483755", tween: [ "style", "${_B_RL_d_Bttm2}", "msTransformOrigin", [42.39,63.36], { valueTemplate: '@@0@@% @@1@@%', fromValue: [42.39,63.36]}], position: 1000, duration: 0 },
                { id: "eid483756", tween: [ "style", "${_B_RL_d_Bttm2}", "-o-transform-origin", [42.39,63.36], { valueTemplate: '@@0@@% @@1@@%', fromValue: [42.39,63.36]}], position: 1000, duration: 0 },
                { id: "eid23451", tween: [ "transform", "${_B_RL_up_Bttm2}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid23456", tween: [ "transform", "${_B_RL_up_Bttm2}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 500, duration: 0 },
                { id: "eid23461", tween: [ "transform", "${_B_RL_up_Bttm2}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1500, duration: 0 }            ]
        }
    }
},
"WP_LS_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'B_L_S2',
                    fill: ['rgba(0,0,0,0)', 'images/2/Shoes/1/L_S.png', '0px', '0px'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_B_L_S2}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1500,
            autoPlay: true,
            timeline: [
                { id: "eid23440", tween: [ "transform", "${_B_L_S2}", "rotateZ", '-7deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid23441", tween: [ "transform", "${_B_L_S2}", "rotateZ", '0deg', { fromValue: '-7deg'}], position: 500, duration: 500 }            ]
        }
    }
},
"WP_RS_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'B_R_S',
                    fill: ['rgba(0,0,0,0)', 'images/2/Shoes/1/R_S.png', '0px', '0px'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_B_R_S}": [
                ["style", "top", '0%'],
                ["style", "-webkit-transform-origin", [39.06,62.86], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [39.06,62.86],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [39.06,62.86],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [39.06,62.86],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [39.06,62.86],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '0%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid23452", tween: [ "transform", "${_B_R_S}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid23473", tween: [ "transform", "${_B_R_S}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 500, duration: 500 },
                { id: "eid23474", tween: [ "transform", "${_B_R_S}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 1000, duration: 500 },
                { id: "eid23472", tween: [ "style", "${_B_R_S}", "-webkit-transform-origin", [39.06,62.86], { valueTemplate: '@@0@@% @@1@@%', fromValue: [39.06,62.86]}], position: 1000, duration: 0 },
                { id: "eid483757", tween: [ "style", "${_B_R_S}", "-moz-transform-origin", [39.06,62.86], { valueTemplate: '@@0@@% @@1@@%', fromValue: [39.06,62.86]}], position: 1000, duration: 0 },
                { id: "eid483758", tween: [ "style", "${_B_R_S}", "-ms-transform-origin", [39.06,62.86], { valueTemplate: '@@0@@% @@1@@%', fromValue: [39.06,62.86]}], position: 1000, duration: 0 },
                { id: "eid483759", tween: [ "style", "${_B_R_S}", "msTransformOrigin", [39.06,62.86], { valueTemplate: '@@0@@% @@1@@%', fromValue: [39.06,62.86]}], position: 1000, duration: 0 },
                { id: "eid483760", tween: [ "style", "${_B_R_S}", "-o-transform-origin", [39.06,62.86], { valueTemplate: '@@0@@% @@1@@%', fromValue: [39.06,62.86]}], position: 1000, duration: 0 }            ]
        }
    }
},
"DlgBackBoard": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0%', '0%', '100%', '99.8%', 'auto', 'auto'],
                    id: 'board',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/icons/board.png', '0px', '0px']
                },
                {
                    rect: ['2%', '26.2%', '77.1%', '7%', 'auto', 'auto'],
                    font: ['Palatino Linotype, Book Antigua, Palatino, serif', [1, 'em'], 'rgba(186,207,171,1.00)', '400', 'underline', 'italic'],
                    id: 'ChrName',
                    text: 'TEST TEST TEST TESTTEST TESTTEST TESTTEST TESTTEST TESTTEST TESTTEST TEST',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['2.7%', '14.3%', '94%', '70.7%', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', [1.63, 'em'], 'rgba(201,166,166,1.00)', '400', 'none', 'italic'],
                    align: 'left',
                    id: 'DlgText',
                    text: 'Hello<br>',
                    display: 'block',
                    type: 'text'
                },
                {
                    id: 'Pause_sym',
                    type: 'rect',
                    rect: ['91.5%', '0%', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'Pause_sym',
                symbolName: 'Pause_sym',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Pause_sym}": [
                ["style", "left", '91.97%'],
                ["style", "top", '15.14%']
            ],
            "${_ChrName}": [
                ["color", "color", 'rgba(186,207,171,1.00)'],
                ["style", "left", '1.97%'],
                ["style", "font-size", '1em'],
                ["style", "top", '26.22%'],
                ["style", "width", '77.11%'],
                ["style", "height", '7.03%'],
                ["style", "font-family", 'Palatino Linotype, Book Antigua, Palatino, serif'],
                ["style", "text-decoration", 'underline'],
                ["style", "font-style", 'italic']
            ],
            "${symbolSelector}": [
                ["style", "height", '38.5%'],
                ["style", "width", '95.28%']
            ],
            "${_board}": [
                ["style", "top", '17.03%'],
                ["style", "height", '99.73%'],
                ["style", "display", 'block'],
                ["style", "left", '0%'],
                ["style", "width", '100%']
            ],
            "${_DlgText}": [
                ["color", "color", 'rgba(201,166,166,1.00)'],
                ["style", "left", '1.64%'],
                ["style", "width", '94.06%'],
                ["style", "top", '34.59%'],
                ["style", "overflow", 'auto'],
                ["style", "display", 'block'],
                ["style", "font-style", 'italic'],
                ["style", "height", '73.78%'],
                ["style", "font-size", '1.5em']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid448011", tween: [ "style", "${_DlgText}", "height", '73.78%', { fromValue: '73.78%'}], position: 0, duration: 0 },
                { id: "eid426484", tween: [ "style", "${_DlgText}", "font-size", '1.5em', { fromValue: '1.5em'}], position: 0, duration: 0 },
                { id: "eid426481", tween: [ "style", "${_board}", "top", '17.03%', { fromValue: '17.03%'}], position: 0, duration: 0 },
                { id: "eid448955", tween: [ "style", "${_Pause_sym}", "left", '91.97%', { fromValue: '91.97%'}], position: 0, duration: 0 },
                { id: "eid448009", tween: [ "style", "${_board}", "height", '99.73%', { fromValue: '99.73%'}], position: 0, duration: 0 },
                { id: "eid222934", tween: [ "style", "${_DlgText}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid448954", tween: [ "style", "${_Pause_sym}", "top", '15.14%', { fromValue: '15.14%'}], position: 0, duration: 0 },
                { id: "eid354022", tween: [ "style", "${_board}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid464951", tween: [ "style", "${_DlgText}", "left", '1.64%', { fromValue: '1.64%'}], position: 0, duration: 0 },
                { id: "eid464954", tween: [ "style", "${_DlgText}", "width", '94.06%', { fromValue: '94.06%'}], position: 0, duration: 0 },
                { id: "eid448221", tween: [ "style", "${_board}", "width", '100%', { fromValue: '100%'}], position: 0, duration: 0 },
                { id: "eid427221", tween: [ "style", "${_DlgText}", "top", '34.59%', { fromValue: '34.59%'}], position: 0, duration: 0 }            ]
        }
    }
},
"replay_sym": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'block',
                    rect: ['28.6%', '0.9%', '135.2%', '111.9%', 'auto', 'auto'],
                    id: 'reply',
                    fill: ['rgba(0,0,0,0)', 'images/reply.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_reply}": [
                ["style", "top", '-5.96%'],
                ["transform", "scaleY", '0.89334'],
                ["style", "height", '111.89%'],
                ["transform", "scaleX", '0.94175'],
                ["style", "display", 'block'],
                ["style", "left", '-3.08%'],
                ["style", "width", '106.06%']
            ],
            "${symbolSelector}": [
                ["style", "height", '9.03%'],
                ["style", "width", '11.92%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid121", tween: [ "style", "${_reply}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"home_sym": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['14.3%', '0%', '135.6%', '112.7%', 'auto', 'auto'],
                    id: 'home',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/home.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_home}": [
                ["style", "top", '-0.03%'],
                ["style", "display", 'block'],
                ["style", "height", '100.47%'],
                ["style", "left", '-0.01%'],
                ["style", "width", '100.29%']
            ],
            "${symbolSelector}": [
                ["style", "height", '8.96%'],
                ["style", "width", '11.88%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid100", tween: [ "style", "${_home}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"Setting_sym": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-0.1%', '0%', '135.6%', '112.7%', 'auto', 'auto'],
                    id: 'seting',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/seting.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_seting}": [
                ["style", "top", '-0.03%'],
                ["style", "display", 'block'],
                ["style", "height", '100.47%'],
                ["style", "left", '-0.14%'],
                ["style", "width", '100.29%']
            ],
            "${symbolSelector}": [
                ["style", "height", '8.96%'],
                ["style", "width", '11.88%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid102", tween: [ "style", "${_seting}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"Back_sym": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], ['-0.96485']],
                    rect: ['-17.5%', '0%', '135.3%', '100%', 'auto', 'auto'],
                    display: 'none',
                    id: 'back',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/back.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_back}": [
                ["style", "top", '0%'],
                ["transform", "scaleX", '-0.73962'],
                ["style", "height", '99.96%'],
                ["style", "display", 'none'],
                ["style", "left", '-17.51%'],
                ["style", "width", '135.34%']
            ],
            "${symbolSelector}": [
                ["style", "height", '10.1%'],
                ["style", "width", '11.91%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid103", tween: [ "transform", "${_back}", "scaleX", '-0.73962', { fromValue: '-0.73962'}], position: 0, duration: 0 },
                { id: "eid101", tween: [ "style", "${_back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"box": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'board',
                    rect: ['0%', '15.6%', '100%', '68.9%', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['1', '1.45142']],
                    fill: ['rgba(0,0,0,0)', 'images/board.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_board}": [
                ["style", "top", '15.55%'],
                ["transform", "scaleY", '0.47'],
                ["style", "height", '68.85%'],
                ["transform", "scaleX", '0.17'],
                ["style", "left", '0%'],
                ["style", "width", '100%']
            ],
            "${symbolSelector}": [
                ["style", "height", '42.48%'],
                ["style", "width", '100%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid18", tween: [ "transform", "${_board}", "scaleY", '1.45142', { fromValue: '0.47'}], position: 0, duration: 1000 },
                { id: "eid1", tween: [ "style", "${_board}", "left", '0%', { fromValue: '0%'}], position: 0, duration: 0 },
                { id: "eid13", tween: [ "style", "${_board}", "left", '0%', { fromValue: '0%'}], position: 1000, duration: 0 },
                { id: "eid4", tween: [ "style", "${_board}", "top", '15.55%', { fromValue: '15.55%'}], position: 0, duration: 0 },
                { id: "eid14", tween: [ "style", "${_board}", "top", '15.55%', { fromValue: '15.55%'}], position: 1000, duration: 0 },
                { id: "eid98", tween: [ "transform", "${_board}", "scaleX", '1', { fromValue: '0.17'}], position: 0, duration: 1000 }            ]
        }
    }
},
"home_BS": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['14.3%', '0%', '135.6%', '112.7%', 'auto', 'auto'],
                    id: 'home',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/home2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_home}": [
                ["style", "top", '-0.03%'],
                ["style", "height", '100.47%'],
                ["style", "display", 'block'],
                ["style", "left", '-0.01%'],
                ["style", "width", '100.29%']
            ],
            "${symbolSelector}": [
                ["style", "height", '8.96%'],
                ["style", "width", '11.88%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid100", tween: [ "style", "${_home}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"Back_BS": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-17.5%', '0%', '135.3%', '100%', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['-0.96485']],
                    id: 'back',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/back2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_back}": [
                ["style", "top", '0%'],
                ["style", "display", 'block'],
                ["style", "height", '99.96%'],
                ["transform", "scaleX", '-0.73962'],
                ["style", "left", '-17.51%'],
                ["style", "width", '135.34%']
            ],
            "${symbolSelector}": [
                ["style", "height", '10.1%'],
                ["style", "width", '11.91%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid103", tween: [ "transform", "${_back}", "scaleX", '-0.73962', { fromValue: '-0.73962'}], position: 0, duration: 0 },
                { id: "eid101", tween: [ "style", "${_back}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"bs_play_butn": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-225.2%', '-293.7%', '683.2%', '700.7%', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.17461', '0.16339']],
                    id: 'play',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/play2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_play}": [
                ["style", "-webkit-transform-origin", [41.08,49.12], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [41.08,49.12],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [41.08,49.12],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [41.08,49.12],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [41.08,49.12],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '0.11238'],
                ["style", "opacity", '0.6674799919128418'],
                ["style", "left", '-324.48%'],
                ["style", "width", '889.91%'],
                ["style", "top", '-436.6%'],
                ["transform", "scaleY", '0.10113'],
                ["style", "height", '989.2%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '12.47%'],
                ["style", "width", '15.32%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid3", tween: [ "style", "${_play}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"box_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'board',
                    rect: ['0%', '15.6%', '100%', '68.9%', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['1', '1.45142']],
                    fill: ['rgba(0,0,0,0)', 'images/board.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_board}": [
                ["style", "top", '15.55%'],
                ["transform", "scaleY", '0.47'],
                ["style", "height", '65.58%'],
                ["transform", "scaleX", '0.17'],
                ["style", "left", '0%'],
                ["style", "width", '100%']
            ],
            "${symbolSelector}": [
                ["style", "height", '42.48%'],
                ["style", "width", '100%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid18", tween: [ "transform", "${_board}", "scaleY", '1.45142', { fromValue: '0.47'}], position: 0, duration: 1000 },
                { id: "eid98", tween: [ "transform", "${_board}", "scaleX", '1', { fromValue: '0.17'}], position: 0, duration: 1000 },
                { id: "eid320426", tween: [ "style", "${_board}", "top", '19.41%', { fromValue: '15.55%'}], position: 0, duration: 1000 },
                { id: "eid320425", tween: [ "style", "${_board}", "height", '65.58%', { fromValue: '65.58%'}], position: 1000, duration: 0 },
                { id: "eid1", tween: [ "style", "${_board}", "left", '0%', { fromValue: '0%'}], position: 0, duration: 0 },
                { id: "eid13", tween: [ "style", "${_board}", "left", '0%', { fromValue: '0%'}], position: 1000, duration: 0 }            ]
        }
    }
},
"Chapter_strt": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: '_3',
                    type: 'image',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/33.png', '0px', '0px']
                },
                {
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    opacity: 0.81300813492721,
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    id: 'box',
                    type: 'rect',
                    rect: ['0%', '33.4%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['alexa-std, sans-serif', [150, '%'], 'rgba(255,3,3,1)', '400', 'none', 'normal'],
                    type: 'text',
                    display: 'none',
                    id: 'Text3',
                    text: 'Chapter Starts:',
                    align: 'left',
                    rect: ['20.4%', '65.6%', '15.3%', '2%', 'auto', 'auto']
                },
                {
                    font: ['alice, serif', 24, 'rgba(255,3,3,1.00)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'ChpName',
                    text: '\"The College Campus\"',
                    display: 'block',
                    rect: ['25.9%', '43.8%', '46.8%', '5.6%', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'Back_sym',
                    rect: ['5.4%', '21.5%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'Setting_sym',
                    rect: ['27.2%', '75.8%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'home_sym',
                    rect: ['42%', '75.8%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'replay_sym',
                    rect: ['57.4%', '75.8%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['alexa-std, sans-serif', [150, '%'], 'rgba(255,3,3,1)', '700', 'underline', 'normal'],
                    type: 'text',
                    display: 'block',
                    id: 'ChpNo',
                    text: 'Chapter 1',
                    align: 'left',
                    rect: ['28.9%', '12.8%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'Chp_play_butn',
                    type: 'rect',
                    rect: ['40.9%', '47.3%', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'Setting_sym',
                symbolName: 'Setting_sym',
                autoPlay: {

               }
            },
            {
                id: 'Back_sym',
                symbolName: 'Back_sym',
                autoPlay: {

               }
            },
            {
                id: 'Chp_play_butn',
                symbolName: 'Chp_play_butn',
                autoPlay: {

               }
            },
            {
                id: 'replay_sym',
                symbolName: 'replay_sym',
                autoPlay: {

               }
            },
            {
                id: 'home_sym',
                symbolName: 'home_sym',
                autoPlay: {

               }
            },
            {
                id: 'box',
                symbolName: 'box_1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Text3}": [
                ["style", "top", '63.13%'],
                ["style", "font-size", '112.5%'],
                ["style", "display", 'none'],
                ["style", "height", '1.98%'],
                ["color", "color", 'rgba(124,113,8,1)'],
                ["style", "font-family", 'alexa-std, sans-serif'],
                ["style", "left", '5.47%'],
                ["style", "width", '15.32%']
            ],
            "${_ChpNo}": [
                ["style", "letter-spacing", '0em'],
                ["color", "color", 'rgba(249,235,235,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '40.91%'],
                ["style", "font-size", '167.1%'],
                ["style", "top", '21.5%'],
                ["style", "display", 'block'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'alexa-std, sans-serif'],
                ["style", "word-spacing", '0em'],
                ["style", "text-decoration", 'underline']
            ],
            "${__3}": [
                ["style", "left", '0%'],
                ["style", "top", '0%']
            ],
            "${_Back_sym}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0.6674799919128418'],
                ["style", "left", '5.4%'],
                ["style", "top", '21.5%']
            ],
            "${_ChpName}": [
                ["color", "color", 'rgba(236,113,17,1)'],
                ["style", "left", '32.25%'],
                ["style", "width", '57.66%'],
                ["style", "top", '28.5%'],
                ["style", "font-style", 'normal'],
                ["style", "height", '10.1%'],
                ["style", "font-family", 'alice, serif'],
                ["style", "text-decoration", 'none'],
                ["style", "display", 'block']
            ],
            "${_home_sym}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0.6674799919128418'],
                ["style", "left", '42%'],
                ["style", "top", '75.8%']
            ],
            "${_Setting_sym}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0.6674799919128418'],
                ["style", "left", '27.2%'],
                ["style", "top", '75.8%']
            ],
            "${symbolSelector}": [
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ],
            "${_replay_sym}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0.6674799919128418'],
                ["style", "left", '57.4%'],
                ["style", "top", '75.8%']
            ],
            "${_Rectangle}": [
                ["style", "top", '0%'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "height", '100%'],
                ["style", "opacity", '0.8130081295967102'],
                ["style", "left", '0%'],
                ["style", "width", '100.01%']
            ],
            "${_Chp_play_butn}": [
                ["style", "top", '38.23%']
            ],
            "${_box}": [
                ["style", "left", '0%'],
                ["style", "top", '33.4%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid238184", tween: [ "style", "${_ChpNo}", "left", '40.91%', { fromValue: '40.91%'}], position: 0, duration: 0 },
                { id: "eid226903", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid238185", tween: [ "style", "${_ChpNo}", "top", '21.5%', { fromValue: '21.5%'}], position: 0, duration: 0 },
                { id: "eid321072", tween: [ "style", "${_ChpName}", "top", '40.52%', { fromValue: '28.5%'}], position: 0, duration: 1000 },
                { id: "eid464845", tween: [ "style", "${_Chp_play_butn}", "top", '38.23%', { fromValue: '38.23%'}], position: 0, duration: 0 },
                { id: "eid320424", tween: [ "style", "${_ChpName}", "width", '91.96%', { fromValue: '57.66%'}], position: 0, duration: 1000 },
                { id: "eid320423", tween: [ "style", "${_ChpName}", "height", '6.98%', { fromValue: '10.1%'}], position: 0, duration: 1000 },
                { id: "eid226897", tween: [ "style", "${_ChpNo}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid226898", tween: [ "style", "${_ChpName}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid321071", tween: [ "style", "${_ChpName}", "left", '5%', { fromValue: '32.25%'}], position: 0, duration: 1000 }            ]
        }
    }
},
"Chp_play_butn": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], ['0.17461', '0.16339']],
                    type: 'image',
                    id: 'play',
                    display: 'block',
                    rect: ['-225.2%', '-293.7%', '683.2%', '700.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/play.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_play}": [
                ["style", "-webkit-transform-origin", [41.08,49.12], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [41.08,49.12],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [41.08,49.12],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [41.08,49.12],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [41.08,49.12],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '0.11238'],
                ["style", "opacity", '0.6674799919128418'],
                ["style", "left", '-324.48%'],
                ["style", "width", '889.91%'],
                ["style", "top", '-331.67%'],
                ["transform", "scaleY", '0.10113'],
                ["style", "height", '989.2%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '12.47%'],
                ["style", "width", '15%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid464685", tween: [ "style", "${_play}", "top", '-331.67%', { fromValue: '-331.67%'}], position: 1000, duration: 0 },
                { id: "eid3", tween: [ "style", "${_play}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"first_screen": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'first_screen',
                    tag: 'img',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bg/first_screen.png', '0px', '0px']
                },
                {
                    id: 'play',
                    type: 'image',
                    rect: ['38.8%', '73.2%', '16.7%', '14.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/play.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_first_screen}": [
                ["style", "left", '0%'],
                ["style", "top", '0%']
            ],
            "${_play}": [
                ["style", "top", '73.22%'],
                ["style", "height", '14.9%'],
                ["style", "left", '38.76%'],
                ["style", "width", '16.68%']
            ],
            "${symbolSelector}": [
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Loading": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    font: ['alice, serif', [250, '%'], 'rgba(240,229,221,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'Text2',
                    text: 'LOADING CHAPTER.',
                    display: 'block',
                    rect: ['0%', '0%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['alice, serif', [250, '%'], 'rgba(240,229,221,1)', '400', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'Text7',
                    text: 'LOADING CHAPTER....',
                    display: 'none',
                    rect: ['1.5%', '0%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['alice, serif', [250, '%'], 'rgba(240,229,221,1)', '400', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'Text8',
                    text: 'LOADING CHAPTER.....',
                    display: 'none',
                    rect: ['0%', '0%', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text8}": [
                ["style", "display", 'none'],
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "font-size", '250%']
            ],
            "${_Text2}": [
                ["style", "top", '0%'],
                ["style", "font-size", '250%'],
                ["style", "display", 'block'],
                ["style", "height", '44px'],
                ["color", "color", 'rgba(240,229,221,1.00)'],
                ["style", "left", '0%'],
                ["style", "width", '379px']
            ],
            "${_Text7}": [
                ["style", "display", 'none'],
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "font-size", '250%']
            ],
            "${symbolSelector}": [
                ["style", "height", '4.58%'],
                ["style", "width", '62.04%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6000,
            autoPlay: true,
            timeline: [
                { id: "eid294353", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid293975", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid293974", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid293979", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid293983", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid293970", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid293971", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid293973", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid293978", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid293981", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid293984", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
                { id: "eid293968", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid293969", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid293980", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid293982", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 }            ]
        }
    }
},
"lOADING": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/board2.png', '0px', '0px'],
                    id: 'board2',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    display: 'block',
                    tag: 'img'
                },
                {
                    type: 'text',
                    rect: ['4.8%', '47.7%', 'auto', 'auto', 'auto', 'auto'],
                    align: 'left',
                    id: 'Text3',
                    text: 'Scene 1,Take 1-',
                    display: 'block',
                    font: ['alice, serif', [187.5, '%'], 'rgba(249,242,237,1.00)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['38.6%', '46.9%', 'auto', 'auto', 'auto', 'auto'],
                    align: 'left',
                    id: 'Text4',
                    text: 'The College Campus.',
                    display: 'block',
                    font: ['alice, serif', [250, '%'], 'rgba(112,236,17,1.00)', '400', 'underline', 'normal']
                },
                {
                    id: 'Loading',
                    type: 'rect',
                    rect: ['11.9%', '22.8%', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'Loading',
                symbolName: 'Loading',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Loading}": [
                ["style", "left", '25.16%'],
                ["style", "top", '22.82%']
            ],
            "${symbolSelector}": [
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ],
            "${_Text3}": [
                ["style", "top", '47.08%'],
                ["style", "display", 'block'],
                ["color", "color", 'rgba(249,242,237,1.00)'],
                ["style", "left", '7.19%'],
                ["style", "font-size", '187.5%']
            ],
            "${_board2}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${_Text4}": [
                ["style", "top", '45.83%'],
                ["style", "display", 'block'],
                ["color", "color", 'rgba(112,236,17,1.00)'],
                ["style", "left", '40%'],
                ["style", "text-decoration", 'underline'],
                ["style", "font-size", '250%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6000,
            autoPlay: true,
            timeline: [
                { id: "eid296751", tween: [ "style", "${_Loading}", "left", '25.16%', { fromValue: '25.16%'}], position: 0, duration: 0 },
                { id: "eid294906", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid297503", tween: [ "style", "${_Text4}", "top", '45.83%', { fromValue: '45.83%'}], position: 0, duration: 0 },
                { id: "eid294907", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid294908", tween: [ "style", "${_board2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid297124", tween: [ "style", "${_Text3}", "top", '47.08%', { fromValue: '47.08%'}], position: 0, duration: 0 },
                { id: "eid297509", tween: [ "style", "${_Text3}", "left", '7.19%', { fromValue: '7.19%'}], position: 0, duration: 0 },
                { id: "eid297510", tween: [ "style", "${_Text4}", "left", '40%', { fromValue: '40%'}], position: 0, duration: 0 }            ]
        }
    }
},
"Blank_screen": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'board',
                    fill: ['rgba(0,0,0,0)', 'images/board2.png', '0px', '0px']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', [187.5, '%'], 'rgba(204,165,165,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    display: 'block',
                    id: 'BSTxt',
                    text: 'Hi',
                    align: 'left',
                    rect: ['0%', '0%', '100%', '99.3%', 'auto', 'auto']
                },
                {
                    display: 'block',
                    type: 'rect',
                    id: 'ImgBSSymb',
                    rect: ['0%', '0%', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'ImgBSSymb',
                symbolName: 'ImgBS',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_ImgBSSymb}": [
                ["style", "display", 'block']
            ],
            "${_BSTxt}": [
                ["style", "top", '26.56%'],
                ["style", "font-size", '150%'],
                ["style", "display", 'block'],
                ["style", "overflow", 'auto'],
                ["style", "height", '44%'],
                ["color", "color", 'rgba(204,165,165,1)'],
                ["style", "left", '0.01%'],
                ["style", "width", '100%']
            ],
            "${_board}": [
                ["style", "top", '0%'],
                ["style", "height", '100%'],
                ["style", "display", 'block'],
                ["style", "left", '0%'],
                ["style", "width", '100%']
            ],
            "${symbolSelector}": [
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid430918", tween: [ "style", "${_BSTxt}", "top", '26.56%', { fromValue: '26.56%'}], position: 0, duration: 0 },
                { id: "eid299353", tween: [ "style", "${_BSTxt}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid430917", tween: [ "style", "${_BSTxt}", "height", '44%', { fromValue: '44%'}], position: 0, duration: 0 },
                { id: "eid299352", tween: [ "style", "${_board}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid452544", tween: [ "style", "${_ImgBSSymb}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"gAME_PAUSE": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'board23',
                    type: 'image',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/board2.png', '0px', '0px']
                },
                {
                    id: 'GamePause_anim',
                    type: 'rect',
                    rect: ['33%', '22.6%', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'GamePause_anim',
                symbolName: 'GamePause_anim',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_board23}": [
                ["style", "left", '0%'],
                ["style", "top", '0%']
            ],
            "${_GamePause_anim}": [
                ["style", "left", '28.75%']
            ],
            "${symbolSelector}": [
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid482002", tween: [ "style", "${_GamePause_anim}", "left", '28.75%', { fromValue: '28.75%'}], position: 0, duration: 0 }            ]
        }
    }
},
"GamePause_anim": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0.1%', '1.2%', 'auto', 'auto', 'auto', 'auto'],
                    font: ['alexa-std, sans-serif', [187.5, '%'], 'rgba(20,243,34,1.00)', '400', 'none', 'normal'],
                    align: 'justify',
                    id: 'Text9',
                    text: 'Game Paused',
                    display: 'block',
                    type: 'text'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['-47.6%', '666.7%', 'auto', 'auto', 'auto', 'auto'],
                    id: 'GP_setting'
                },
                {
                    id: 'GP_Home',
                    type: 'rect',
                    rect: ['-1.3%', '666.7%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['44.5%', '666.7%', 'auto', 'auto', 'auto', 'auto'],
                    id: 'GP_Replay'
                },
                {
                    id: 'GP_Play',
                    type: 'rect',
                    rect: ['93.5%', '666.7%', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'GP_Play',
                symbolName: 'GP_Play',
                autoPlay: {

               }
            },
            {
                id: 'GP_Home',
                symbolName: 'GP_Home',
                autoPlay: {

               }
            },
            {
                id: 'GP_Replay',
                symbolName: 'GP_Replay',
                autoPlay: {

               }
            },
            {
                id: 'GP_setting',
                symbolName: 'GP_setting',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_GP_Play}": [
                ["style", "top", '666.67%'],
                ["style", "left", '79.48%'],
                ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${symbolSelector}": [
                ["style", "height", '3.75%'],
                ["style", "width", '35.79%']
            ],
            "${_Text9}": [
                ["style", "width", '229px'],
                ["transform", "rotateZ", '0deg'],
                ["color", "color", 'rgba(237,173,65,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '-29.26%'],
                ["style", "font-size", '300%'],
                ["style", "top", '-16.16%'],
                ["style", "height", '36px'],
                ["style", "text-align", 'justify'],
                ["style", "display", 'block'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'alexa-std, sans-serif'],
                ["style", "text-decoration", 'none'],
                ["transform", "scaleX", '0.863']
            ],
            "${_GP_setting}": [
                ["style", "top", '669.44%'],
                ["style", "left", '-49.19%'],
                ["style", "display", 'none']
            ],
            "${_GP_Replay}": [
                ["style", "display", 'none']
            ],
            "${_GP_Home}": [
                ["style", "left", '6.55%'],
                ["style", "top", '666.67%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid445036", tween: [ "style", "${_GP_setting}", "top", '669.44%', { fromValue: '669.44%'}], position: 0, duration: 0 },
                { id: "eid465217", tween: [ "style", "${_Text9}", "top", '-16.16%', { fromValue: '-16.16%'}], position: 0, duration: 0 },
                { id: "eid453690", tween: [ "style", "${_GP_Home}", "top", '666.67%', { fromValue: '666.67%'}], position: 0, duration: 0 },
                { id: "eid482003", tween: [ "style", "${_GP_Home}", "left", '6.55%', { fromValue: '6.55%'}], position: 0, duration: 0 },
                { id: "eid445037", tween: [ "style", "${_GP_setting}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid445035", tween: [ "style", "${_GP_setting}", "left", '-49.19%', { fromValue: '-49.19%'}], position: 0, duration: 0 },
                { id: "eid455734", tween: [ "style", "${_Text9}", "font-size", '300%', { fromValue: '300%'}], position: 0, duration: 0 },
                { id: "eid304916", tween: [ "transform", "${_Text9}", "scaleX", '0.863', { fromValue: '0.863'}], position: 0, duration: 0 },
                { id: "eid467717", tween: [ "style", "${_GP_Play}", "left", '79.48%', { fromValue: '79.48%'}], position: 0, duration: 0 },
                { id: "eid453692", tween: [ "style", "${_GP_Play}", "top", '666.67%', { fromValue: '666.67%'}], position: 0, duration: 0 },
                { id: "eid466484", tween: [ "style", "${_Text9}", "left", '-29.26%', { fromValue: '-29.26%'}], position: 0, duration: 0 },
                { id: "eid467655", tween: [ "style", "${_GP_Play}", "-webkit-transform-origin", [100,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,50]}], position: 0, duration: 0 },
                { id: "eid483761", tween: [ "style", "${_GP_Play}", "-moz-transform-origin", [100,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,50]}], position: 0, duration: 0 },
                { id: "eid483762", tween: [ "style", "${_GP_Play}", "-ms-transform-origin", [100,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,50]}], position: 0, duration: 0 },
                { id: "eid483763", tween: [ "style", "${_GP_Play}", "msTransformOrigin", [100,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,50]}], position: 0, duration: 0 },
                { id: "eid483764", tween: [ "style", "${_GP_Play}", "-o-transform-origin", [100,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,50]}], position: 0, duration: 0 },
                { id: "eid300285", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid445038", tween: [ "style", "${_GP_Replay}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"GP_setting": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0%', '0%', '100.3%', '100.3%', 'auto', 'auto'],
                    id: 'seting',
                    opacity: 0.7264957458545,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/seting.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_seting}": [
                ["style", "top", '0%'],
                ["style", "height", '100.31%'],
                ["style", "opacity", '0.7264957458545'],
                ["style", "left", '0%'],
                ["style", "width", '100.25%']
            ],
            "${symbolSelector}": [
                ["style", "height", '236.11%'],
                ["style", "width", '40.62%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"GP_Home": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'home2',
                    opacity: 0.7264957458545,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/home2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_home2}": [
                ["style", "top", '0%'],
                ["style", "height", '100%'],
                ["style", "opacity", '0.7264957458545'],
                ["style", "left", '0%'],
                ["style", "width", '100.01%']
            ],
            "${symbolSelector}": [
                ["style", "height", '238.89%'],
                ["style", "width", '41.05%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"GP_Replay": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'reply',
                    opacity: 0.7264957458545,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/reply.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '238.89%'],
                ["style", "width", '41.05%']
            ],
            "${_reply}": [
                ["style", "top", '0%'],
                ["style", "height", '100%'],
                ["style", "opacity", '0.7264957458545'],
                ["style", "left", '0%'],
                ["style", "width", '100.01%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"GP_Play": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'play',
                    opacity: 0.7264957458545,
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/play.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_play}": [
                ["style", "top", '0%'],
                ["style", "height", '100%'],
                ["style", "opacity", '0.7264957458545'],
                ["style", "left", '0%'],
                ["style", "width", '100.01%']
            ],
            "${symbolSelector}": [
                ["style", "height", '238.89%'],
                ["style", "width", '41.05%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Chapter_completed": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'board',
                    type: 'image',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/board2.png', '0px', '0px']
                },
                {
                    id: 'Replay_complete',
                    type: 'rect',
                    rect: ['79.7%', '16.7%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'Chapter_completed_anim',
                    type: 'rect',
                    rect: ['20.2%', '47.9%', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'Chapter_completed_anim',
                symbolName: 'Chapter_completed_anim',
                autoPlay: {

               }
            },
            {
                id: 'Replay_complete',
                symbolName: 'Replay_complete',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ],
            "${_Chapter_completed_anim}": [
                ["style", "top", '49.49%'],
                ["transform", "scaleY", '1.46458'],
                ["style", "left", '17.19%'],
                ["transform", "scaleX", '1.13325']
            ],
            "${_board}": [
                ["style", "left", '0%'],
                ["style", "top", '0%']
            ],
            "${_Replay_complete}": [
                ["style", "opacity", '0.71544715447154']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: true,
            timeline: [
                { id: "eid305297", tween: [ "style", "${_Chapter_completed_anim}", "top", '49.49%', { fromValue: '49.49%'}], position: 0, duration: 0 },
                { id: "eid305296", tween: [ "transform", "${_Chapter_completed_anim}", "scaleY", '1.46458', { fromValue: '1.46458'}], position: 0, duration: 0 },
                { id: "eid305286", tween: [ "style", "${_Replay_complete}", "opacity", '0.71544715447154', { fromValue: '0.71544715447154'}], position: 0, duration: 0 },
                { id: "eid307713", tween: [ "style", "${_Chapter_completed_anim}", "left", '17.19%', { fromValue: '17.19%'}], position: 0, duration: 0 },
                { id: "eid305298", tween: [ "transform", "${_Chapter_completed_anim}", "scaleX", '1.13325', { fromValue: '1.13325'}], position: 0, duration: 0 }            ]
        }
    }
},
"Replay_complete": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'reply2',
                    type: 'image',
                    rect: ['0.1%', '0.4%', '99.5%', '99.5%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/reply.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_reply2}": [
                ["style", "top", '0.42%'],
                ["style", "height", '99.49%'],
                ["style", "left", '0.08%'],
                ["style", "width", '99.51%']
            ],
            "${symbolSelector}": [
                ["style", "height", '10.31%'],
                ["style", "width", '14.85%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Chapter_completed_anim": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    font: ['kotta-one, serif', [375, '%'], 'rgba(237,173,65,1)', '400', 'underline', 'normal'],
                    type: 'text',
                    id: 'Text10',
                    text: 'Chapter Complete !!',
                    align: 'justify',
                    rect: ['-0.1%', '0.3%', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text10}": [
                ["style", "top", '19.36%'],
                ["style", "width", 'auto'],
                ["color", "color", 'rgba(243,155,8,1.00)'],
                ["style", "height", '63px'],
                ["transform", "scaleX", '0.99762'],
                ["style", "font-family", 'kotta-one, serif'],
                ["style", "left", '13.67%'],
                ["style", "font-size", '250%']
            ],
            "${symbolSelector}": [
                ["style", "height", '6.56%'],
                ["style", "width", '65.79%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: true,
            timeline: [
                { id: "eid305868", tween: [ "style", "${_Text10}", "top", '19.36%', { fromValue: '19.36%'}], position: 0, duration: 0 },
                { id: "eid305682", tween: [ "style", "${_Text10}", "font-size", '250%', { fromValue: '250%'}], position: 0, duration: 0 },
                { id: "eid305302", tween: [ "style", "${_Text10}", "width", 'auto', { fromValue: 'auto'}], position: 0, duration: 0 },
                { id: "eid305309", tween: [ "transform", "${_Text10}", "scaleX", '0.9167', { fromValue: '0.99762'}], position: 0, duration: 1000 },
                { id: "eid305310", tween: [ "transform", "${_Text10}", "scaleX", '0.82422', { fromValue: '0.9167'}], position: 1000, duration: 1000 },
                { id: "eid305311", tween: [ "transform", "${_Text10}", "scaleX", '0.76642', { fromValue: '0.82422'}], position: 2000, duration: 1000 },
                { id: "eid305312", tween: [ "transform", "${_Text10}", "scaleX", '1', { fromValue: '0.76642'}], position: 3000, duration: 1000 },
                { id: "eid305303", tween: [ "style", "${_Text10}", "height", '63px', { fromValue: '63px'}], position: 0, duration: 0 },
                { id: "eid306237", tween: [ "color", "${_Text10}", "color", 'rgba(243,155,8,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(243,155,8,1.00)'}], position: 0, duration: 0 },
                { id: "eid305867", tween: [ "style", "${_Text10}", "left", '13.67%', { fromValue: '13.67%'}], position: 0, duration: 0 }            ]
        }
    }
},
"B_Mobile_hand": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'Mobile_hand',
                    tag: 'img',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Body/Mobile_hand.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Mobile_hand}": [
                ["style", "left", '0%'],
                ["style", "top", '0%']
            ],
            "${symbolSelector}": [
                ["style", "height", '51.97%'],
                ["style", "width", '34.38%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"B_LH": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'LH_up',
                    rect: ['42.9%', '0%', '57.2%', '53%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Body/LH_up.png', '0px', '0px']
                },
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'LH_d',
                    rect: ['0%', '42.1%', '96.9%', '58%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Body/LH_d.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_LH_d}": [
                ["style", "top", '42.05%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "left", '0%'],
                ["style", "-webkit-transform-origin", [71.76,16.53], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [71.76,16.53],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [71.76,16.53],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [71.76,16.53],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [71.76,16.53],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_LH_up}": [
                ["style", "display", 'block'],
                ["style", "top", '0%'],
                ["style", "left", '42.86%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '65.94%'],
                ["style", "width", '27.85%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid323360", tween: [ "transform", "${_LH_d}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid323361", tween: [ "transform", "${_LH_d}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 1000, duration: 1000 },
                { id: "eid323348", tween: [ "style", "${_LH_up}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid323350", tween: [ "style", "${_LH_up}", "display", 'block', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid323347", tween: [ "style", "${_LH_d}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid323349", tween: [ "style", "${_LH_d}", "display", 'block', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid323357", tween: [ "style", "${_LH_d}", "-webkit-transform-origin", [71.76,16.53], { valueTemplate: '@@0@@% @@1@@%', fromValue: [71.76,16.53]}], position: 1000, duration: 0 },
                { id: "eid483765", tween: [ "style", "${_LH_d}", "-moz-transform-origin", [71.76,16.53], { valueTemplate: '@@0@@% @@1@@%', fromValue: [71.76,16.53]}], position: 1000, duration: 0 },
                { id: "eid483766", tween: [ "style", "${_LH_d}", "-ms-transform-origin", [71.76,16.53], { valueTemplate: '@@0@@% @@1@@%', fromValue: [71.76,16.53]}], position: 1000, duration: 0 },
                { id: "eid483767", tween: [ "style", "${_LH_d}", "msTransformOrigin", [71.76,16.53], { valueTemplate: '@@0@@% @@1@@%', fromValue: [71.76,16.53]}], position: 1000, duration: 0 },
                { id: "eid483768", tween: [ "style", "${_LH_d}", "-o-transform-origin", [71.76,16.53], { valueTemplate: '@@0@@% @@1@@%', fromValue: [71.76,16.53]}], position: 1000, duration: 0 },
                { id: "eid323354", tween: [ "transform", "${_LH_up}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid323352", tween: [ "transform", "${_LH_up}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1000, duration: 0 },
                { id: "eid323356", tween: [ "transform", "${_LH_up}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2000, duration: 0 }            ]
        }
    }
},
"B1_hair": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'Hr_1',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Hair/0/Hr_1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Hr_1}": [
                ["style", "top", '0%'],
                ["style", "display", 'block'],
                ["style", "left", '-6.06%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '19.09%'],
                ["style", "width", '46.88%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid341835", tween: [ "style", "${_Hr_1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid466919", tween: [ "transform", "${_Hr_1}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid466920", tween: [ "transform", "${_Hr_1}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 1000, duration: 1000 }            ]
        }
    }
},
"B_RS_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    tag: 'img',
                    id: 'R_S',
                    display: 'block',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/2/Shoes/0/R_S.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_R_S}": [
                ["style", "top", '-6.88%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '27.87%'],
                ["style", "width", '50%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid363335", tween: [ "style", "${_R_S}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"B_1_eyebrow": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['29%', '50%', '18.3%', '21.8%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Face/0/R_eyebrow.png', '0px', '0px'],
                    display: 'block',
                    type: 'image',
                    id: 'R_eyebrow2',
                    tag: 'img'
                },
                {
                    rect: ['50.4%', '50%', '34.4%', '24.4%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Face/0/L_eyebrow.png', '0px', '0px'],
                    display: 'block',
                    type: 'image',
                    id: 'L_eyebrow2',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_R_eyebrow2}": [
                ["style", "top", '50%'],
                ["style", "left", '29.01%'],
                ["style", "display", 'block']
            ],
            "${_L_eyebrow2}": [
                ["style", "display", 'block'],
                ["style", "top", '50%'],
                ["style", "left", '50.38%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '41.27%'],
                ["style", "width", '72.38%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid341488", tween: [ "style", "${_L_eyebrow2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid341490", tween: [ "transform", "${_L_eyebrow2}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid341491", tween: [ "transform", "${_L_eyebrow2}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 500, duration: 750 },
                { id: "eid341492", tween: [ "transform", "${_L_eyebrow2}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 1250, duration: 750 },
                { id: "eid341487", tween: [ "style", "${_R_eyebrow2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"B1_face": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['14.7%', '12.7%', '65.7%', '77.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Face/0/Face.png', '0px', '0px'],
                    display: 'block',
                    type: 'image',
                    id: 'Face',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Face}": [
                ["style", "top", '12.7%'],
                ["style", "left", '14.68%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '100%'],
                ["style", "width", '93.38%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid341478", tween: [ "style", "${_Face}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"B_LL": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'LL_d_Bttm',
                    tag: 'img',
                    rect: ['31.1%', '32.9%', '68.9%', '67.1%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Body/LL_d_Bttm.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'LL_up_Bttm',
                    tag: 'img',
                    rect: ['0%', '0%', '90%', '45%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Body/LL_up_Bttm.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_LL_d_Bttm}": [
                ["style", "left", '31.11%'],
                ["style", "top", '32.89%']
            ],
            "${_LL_up_Bttm}": [
                ["style", "left", '0%'],
                ["style", "top", '0%']
            ],
            "${symbolSelector}": [
                ["style", "height", '78.92%'],
                ["style", "width", '37.5%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"B1_TOP_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'none',
                    rect: ['38.6%', '21.2%', '31.3%', '43.2%', 'auto', 'auto'],
                    id: 'Hand_on_bye',
                    fill: ['rgba(0,0,0,0)', 'images/2/Body/Hand_on_bye.png', '0px', '0px']
                },
                {
                    type: 'image',
                    tag: 'img',
                    display: 'none',
                    id: 'B_Hand_on_lips_2',
                    rect: ['32.7%', '32.1%', '20.2%', '34.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Body/RH_up.png', '0px', '0px']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'B_HAND_WOW',
                    rect: ['38.6%', '21.2%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'B_Bye_hand',
                    rect: ['11.7%', '26%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'block',
                    type: 'rect',
                    id: 'B_RH',
                    rect: ['32.7%', '32.1%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'B_RH_EXPLAINING_Exp',
                    rect: ['0.6%', '32.1%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'block',
                    type: 'rect',
                    id: 'B_RH_TS_1',
                    rect: ['31.3%', '28.6%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'B_WOW_HAND_TS_1',
                    rect: ['31.8%', '28.6%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'B_Hand_On_Lips_TS_1',
                    rect: ['31%', '29.5%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'Top',
                    rect: ['33.5%', '14%', '63.4%', '85.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Top/0/Top.png', '0px', '0px']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'B_LH_Explaining_exp',
                    rect: ['58%', '30.8%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'block',
                    type: 'rect',
                    id: 'B_LH',
                    rect: ['67.9%', '32.8%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'block',
                    type: 'rect',
                    id: 'B_LH_TS_1',
                    rect: ['77.8%', '26%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'B_Bye_TS_1',
                    rect: ['31.8%', '28.2%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'B_Hand_On_Lips',
                    rect: ['30.7%', '17.9%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'B_Folding_hand',
                    rect: ['28.1%', '31.2%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'B1_Folding_hand_Ts_1',
                    rect: ['23%', '28%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    tag: 'img',
                    display: 'none',
                    id: 'B1_Mobile',
                    rect: ['49.7%', '2.8%', '32.7%', '32.1%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/accessories1/mobail/0/mob.png', '0px', '0px']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'B_Mobile_hand',
                    rect: ['58.8%', '11.8%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'B_Mobile_hand_TS_1',
                    rect: ['58%', '28%', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'B_Bye_TS_1',
                symbolName: 'B_Bye_TS_1',
                autoPlay: {

               }
            },
            {
                id: 'B1_Folding_hand_Ts_1',
                symbolName: 'B1_Folding_hand_Ts_1',
                autoPlay: {

               }
            },
            {
                id: 'B_Mobile_hand_TS_1',
                symbolName: 'B_Mobile_hand_TS_1',
                autoPlay: {

               }
            },
            {
                id: 'B_LH',
                symbolName: 'B_LH',
                autoPlay: {

               }
            },
            {
                id: 'B_RH_EXPLAINING_Exp',
                symbolName: 'B_RH_EXPLAINING_Exp',
                autoPlay: {

               }
            },
            {
                id: 'B_RH_TS_1',
                symbolName: 'B_RH_TS_1',
                autoPlay: {

               }
            },
            {
                id: 'B_LH_Explaining_exp',
                symbolName: 'B_LH_Explaining_exp',
                autoPlay: {

               }
            },
            {
                id: 'B_Mobile_hand',
                symbolName: 'B_Mobile_hand',
                autoPlay: {

               }
            },
            {
                id: 'B_Folding_hand',
                symbolName: 'B_Folding_hand',
                autoPlay: {

               }
            },
            {
                id: 'B_Bye_hand',
                symbolName: 'B_Bye_hand',
                autoPlay: {

               }
            },
            {
                id: 'B_Hand_On_Lips',
                symbolName: 'B_Hand_On_Lips',
                autoPlay: {

               }
            },
            {
                id: 'B_HAND_WOW',
                symbolName: 'B_HAND_WOW',
                autoPlay: {

               }
            },
            {
                id: 'B_LH_TS_1',
                symbolName: 'B_LH_TS_1',
                autoPlay: {

               }
            },
            {
                id: 'B_WOW_HAND_TS_1',
                symbolName: 'B_WOW_HAND_TS_1',
                autoPlay: {

               }
            },
            {
                id: 'B_Hand_On_Lips_TS_1',
                symbolName: 'B_Hand_On_Lips_TS_1',
                autoPlay: {

               }
            },
            {
                id: 'B_RH',
                symbolName: 'B_RH',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_B_RH_TS_1}": [
                ["transform", "scaleX", '1.03797'],
                ["style", "display", 'block'],
                ["style", "left", '30.4%'],
                ["style", "top", '27.73%']
            ],
            "${_B_Bye_TS_1}": [
                ["style", "top", '28.17%'],
                ["style", "left", '31.82%'],
                ["style", "display", 'none']
            ],
            "${_B_Mobile_hand_TS_1}": [
                ["style", "top", '27.95%'],
                ["style", "left", '57.95%'],
                ["style", "display", 'none']
            ],
            "${_Top}": [
                ["style", "top", '13.1%'],
                ["style", "left", '33.24%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '48.57%'],
                ["style", "width", '100%']
            ],
            "${_B_LH_Explaining_exp}": [
                ["style", "top", '32.31%'],
                ["style", "left", '57.67%'],
                ["style", "display", 'none']
            ],
            "${_B_Bye_hand}": [
                ["style", "top", '25.98%'],
                ["style", "left", '11.65%'],
                ["style", "display", 'none']
            ],
            "${_B_Hand_on_lips_2}": [
                ["style", "top", '32.1%'],
                ["style", "left", '32.67%'],
                ["style", "display", 'none']
            ],
            "${_B_LH}": [
                ["style", "top", '32.75%'],
                ["style", "left", '67.9%'],
                ["style", "display", 'block']
            ],
            "${_B_WOW_HAND_TS_1}": [
                ["style", "top", '28.6%'],
                ["style", "left", '31.82%'],
                ["style", "display", 'none']
            ],
            "${_B1_Folding_hand_Ts_1}": [
                ["style", "top", '27.95%'],
                ["style", "left", '23.01%'],
                ["style", "display", 'none']
            ],
            "${_B_Mobile_hand}": [
                ["style", "top", '11.79%'],
                ["style", "left", '58.81%'],
                ["style", "display", 'none']
            ],
            "${_B_LH_TS_1}": [
                ["style", "top", '25.33%'],
                ["style", "left", '77.84%'],
                ["style", "display", 'block']
            ],
            "${_B_RH}": [
                ["style", "top", '32.1%'],
                ["style", "left", '32.67%'],
                ["style", "display", 'block']
            ],
            "${_B_HAND_WOW}": [
                ["style", "top", '32.1%'],
                ["style", "left", '4.26%'],
                ["style", "display", 'none']
            ],
            "${_B_Hand_On_Lips}": [
                ["style", "display", 'none'],
                ["style", "top", '19%'],
                ["style", "left", '30.97%'],
                ["transform", "rotateZ", '1deg']
            ],
            "${_B_Folding_hand}": [
                ["style", "top", '31.22%'],
                ["style", "left", '28.13%'],
                ["style", "display", 'none']
            ],
            "${_B_Hand_On_Lips_TS_1}": [
                ["style", "top", '28.6%'],
                ["style", "left", '30.11%'],
                ["style", "display", 'none']
            ],
            "${_Hand_on_bye}": [
                ["style", "top", '21.18%'],
                ["style", "left", '38.64%'],
                ["style", "display", 'none']
            ],
            "${_B_RH_EXPLAINING_Exp}": [
                ["style", "top", '33.84%'],
                ["style", "left", '-0.85%'],
                ["style", "display", 'none']
            ],
            "${_B1_Mobile}": [
                ["style", "top", '2.84%'],
                ["style", "left", '49.72%'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 23000,
            autoPlay: true,
            timeline: [
                { id: "eid433", tween: [ "style", "${_B_Mobile_hand}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid493", tween: [ "style", "${_B_Mobile_hand}", "display", 'block', { fromValue: 'none'}], position: 23000, duration: 0 },
                { id: "eid446", tween: [ "style", "${_Top}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid439", tween: [ "style", "${_B_Hand_On_Lips_TS_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid452", tween: [ "style", "${_B_Hand_On_Lips_TS_1}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid455", tween: [ "style", "${_B_Hand_On_Lips_TS_1}", "display", 'none', { fromValue: 'block'}], position: 8250, duration: 0 },
                { id: "eid435", tween: [ "style", "${_B_LH_TS_1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid470", tween: [ "style", "${_B_LH_TS_1}", "display", 'block', { fromValue: 'block'}], position: 15000, duration: 0 },
                { id: "eid482", tween: [ "style", "${_B_LH_TS_1}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
                { id: "eid486", tween: [ "style", "${_B_LH_TS_1}", "display", 'block', { fromValue: 'none'}], position: 22000, duration: 0 },
                { id: "eid840", tween: [ "style", "${_B_LH_TS_1}", "display", 'none', { fromValue: 'block'}], position: 23000, duration: 0 },
                { id: "eid297", tween: [ "style", "${_B_LH_Explaining_exp}", "left", '57.67%', { fromValue: '57.67%'}], position: 0, duration: 0 },
                { id: "eid441", tween: [ "style", "${_B_RH_TS_1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid459", tween: [ "style", "${_B_RH_TS_1}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0 },
                { id: "eid461", tween: [ "style", "${_B_RH_TS_1}", "display", 'block', { fromValue: 'none'}], position: 8250, duration: 0 },
                { id: "eid463", tween: [ "style", "${_B_RH_TS_1}", "display", 'none', { fromValue: 'block'}], position: 9000, duration: 0 },
                { id: "eid469", tween: [ "style", "${_B_RH_TS_1}", "display", 'block', { fromValue: 'none'}], position: 11000, duration: 0 },
                { id: "eid473", tween: [ "style", "${_B_RH_TS_1}", "display", 'block', { fromValue: 'block'}], position: 15000, duration: 0 },
                { id: "eid485", tween: [ "style", "${_B_RH_TS_1}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
                { id: "eid489", tween: [ "style", "${_B_RH_TS_1}", "display", 'block', { fromValue: 'none'}], position: 22000, duration: 0 },
                { id: "eid445", tween: [ "style", "${_B_Bye_TS_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid296", tween: [ "style", "${_B_LH_Explaining_exp}", "top", '32.31%', { fromValue: '32.31%'}], position: 0, duration: 0 },
                { id: "eid449", tween: [ "style", "${_B_Hand_on_lips_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid454", tween: [ "style", "${_B_Hand_on_lips_2}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid457", tween: [ "style", "${_B_Hand_on_lips_2}", "display", 'none', { fromValue: 'block'}], position: 8250, duration: 0 },
                { id: "eid444", tween: [ "style", "${_B_WOW_HAND_TS_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid464", tween: [ "style", "${_B_WOW_HAND_TS_1}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
                { id: "eid466", tween: [ "style", "${_B_WOW_HAND_TS_1}", "display", 'none', { fromValue: 'block'}], position: 11000, duration: 0 },
                { id: "eid384", tween: [ "style", "${_B_HAND_WOW}", "top", '32.1%', { fromValue: '32.1%'}], position: 0, duration: 0 },
                { id: "eid440", tween: [ "style", "${_B_LH}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid474", tween: [ "style", "${_B_LH}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
                { id: "eid476", tween: [ "style", "${_B_LH}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0 },
                { id: "eid483", tween: [ "style", "${_B_LH}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
                { id: "eid487", tween: [ "style", "${_B_LH}", "display", 'block', { fromValue: 'none'}], position: 22000, duration: 0 },
                { id: "eid839", tween: [ "style", "${_B_LH}", "display", 'none', { fromValue: 'block'}], position: 23000, duration: 0 },
                { id: "eid451", tween: [ "style", "${_Hand_on_bye}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid467549", tween: [ "style", "${_Top}", "top", '13.1%', { fromValue: '13.1%'}], position: 0, duration: 0 },
                { id: "eid432", tween: [ "style", "${_B_Mobile_hand_TS_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid492", tween: [ "style", "${_B_Mobile_hand_TS_1}", "display", 'block', { fromValue: 'none'}], position: 23000, duration: 0 },
                { id: "eid365040", tween: [ "style", "${_B1_Mobile}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid392677", tween: [ "style", "${_B1_Mobile}", "display", 'block', { fromValue: 'none'}], position: 23000, duration: 0 },
                { id: "eid436", tween: [ "style", "${_B1_Folding_hand_Ts_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid480", tween: [ "style", "${_B1_Folding_hand_Ts_1}", "display", 'block', { fromValue: 'none'}], position: 20000, duration: 0 },
                { id: "eid490", tween: [ "style", "${_B1_Folding_hand_Ts_1}", "display", 'none', { fromValue: 'block'}], position: 22000, duration: 0 },
                { id: "eid438", tween: [ "style", "${_B_Hand_On_Lips}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid453", tween: [ "style", "${_B_Hand_On_Lips}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid456", tween: [ "style", "${_B_Hand_On_Lips}", "display", 'none', { fromValue: 'block'}], position: 8250, duration: 0 },
                { id: "eid437", tween: [ "style", "${_B_Folding_hand}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid481", tween: [ "style", "${_B_Folding_hand}", "display", 'block', { fromValue: 'none'}], position: 20000, duration: 0 },
                { id: "eid491", tween: [ "style", "${_B_Folding_hand}", "display", 'none', { fromValue: 'block'}], position: 22000, duration: 0 },
                { id: "eid447", tween: [ "style", "${_B_Bye_hand}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid443", tween: [ "style", "${_B_LH_Explaining_exp}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid472", tween: [ "style", "${_B_LH_Explaining_exp}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid479", tween: [ "style", "${_B_LH_Explaining_exp}", "display", 'none', { fromValue: 'block'}], position: 17000, duration: 0 },
                { id: "eid383", tween: [ "style", "${_B_HAND_WOW}", "left", '4.26%', { fromValue: '4.26%'}], position: 0, duration: 0 },
                { id: "eid450", tween: [ "style", "${_B_RH}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid458", tween: [ "style", "${_B_RH}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0 },
                { id: "eid460", tween: [ "style", "${_B_RH}", "display", 'block', { fromValue: 'none'}], position: 8250, duration: 0 },
                { id: "eid462", tween: [ "style", "${_B_RH}", "display", 'none', { fromValue: 'block'}], position: 9000, duration: 0 },
                { id: "eid468", tween: [ "style", "${_B_RH}", "display", 'block', { fromValue: 'none'}], position: 11000, duration: 0 },
                { id: "eid475", tween: [ "style", "${_B_RH}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
                { id: "eid477", tween: [ "style", "${_B_RH}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0 },
                { id: "eid484", tween: [ "style", "${_B_RH}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
                { id: "eid488", tween: [ "style", "${_B_RH}", "display", 'block', { fromValue: 'none'}], position: 22000, duration: 0 },
                { id: "eid448", tween: [ "style", "${_B_HAND_WOW}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid465", tween: [ "style", "${_B_HAND_WOW}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
                { id: "eid467", tween: [ "style", "${_B_HAND_WOW}", "display", 'none', { fromValue: 'block'}], position: 11000, duration: 0 },
                { id: "eid442", tween: [ "style", "${_B_RH_EXPLAINING_Exp}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid471", tween: [ "style", "${_B_RH_EXPLAINING_Exp}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid478", tween: [ "style", "${_B_RH_EXPLAINING_Exp}", "display", 'none', { fromValue: 'block'}], position: 17000, duration: 0 }            ]
        }
    }
},
"B_RH_EXPLAINING_Exp": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['59.9%', '0%', '40.1%', '59.9%', 'auto', 'auto'],
                    id: 'RH_up',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/2/Body/RH_up.png', '0px', '0px']
                },
                {
                    rect: ['0%', '45.4%', '80.2%', '54.6%', 'auto', 'auto'],
                    id: 'RH-Explaing_exp',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/2/Body/RH-Explaing_exp.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RH-Explaing_exp}": [
                ["style", "top", '43.89%'],
                ["transform", "rotateZ", '-16deg'],
                ["style", "display", 'block'],
                ["style", "left", '4.52%'],
                ["style", "-webkit-transform-origin", [88.3,10.39], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [88.3,10.39],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [88.3,10.39],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [88.3,10.39],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [88.3,10.39],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_RH_up}": [
                ["style", "display", 'block'],
                ["style", "top", '1.91%'],
                ["style", "left", '63.28%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '57.21%'],
                ["style", "width", '50.29%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid279", tween: [ "style", "${_RH_up}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid284", tween: [ "transform", "${_RH-Explaing_exp}", "rotateZ", '12deg', { fromValue: '-16deg'}], position: 0, duration: 500 },
                { id: "eid286", tween: [ "transform", "${_RH-Explaing_exp}", "rotateZ", '10deg', { fromValue: '12deg'}], position: 500, duration: 500 },
                { id: "eid278", tween: [ "style", "${_RH-Explaing_exp}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid394142", tween: [ "style", "${_RH_up}", "left", '63.28%', { fromValue: '63.28%'}], position: 0, duration: 0 }            ]
        }
    }
},
"B_LH_Explaining_exp": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['59.1%', '0%', '40.9%', '54.1%', 'auto', 'auto'],
                    id: 'LH_up',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/2/Body/LH_up.png', '0px', '0px']
                },
                {
                    rect: ['0%', '40.2%', '100%', '59.8%', 'auto', 'auto'],
                    id: 'LH-Explaing_exp',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/2/Body/LH-Explaing_exp.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_LH-Explaing_exp}": [
                ["style", "top", '40.2%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "left", '1.46%'],
                ["style", "-webkit-transform-origin", [85.95,7.51], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [85.95,7.51],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [85.95,7.51],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [85.95,7.51],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [85.95,7.51],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_LH_up}": [
                ["style", "display", 'block'],
                ["style", "top", '0%'],
                ["style", "left", '60.58%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '64.63%'],
                ["style", "width", '38.93%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid275", tween: [ "style", "${_LH-Explaing_exp}", "-webkit-transform-origin", [85.95,7.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [85.95,7.51]}], position: 1000, duration: 0 },
                { id: "eid483769", tween: [ "style", "${_LH-Explaing_exp}", "-moz-transform-origin", [85.95,7.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [85.95,7.51]}], position: 1000, duration: 0 },
                { id: "eid483770", tween: [ "style", "${_LH-Explaing_exp}", "-ms-transform-origin", [85.95,7.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [85.95,7.51]}], position: 1000, duration: 0 },
                { id: "eid483771", tween: [ "style", "${_LH-Explaing_exp}", "msTransformOrigin", [85.95,7.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [85.95,7.51]}], position: 1000, duration: 0 },
                { id: "eid483772", tween: [ "style", "${_LH-Explaing_exp}", "-o-transform-origin", [85.95,7.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [85.95,7.51]}], position: 1000, duration: 0 },
                { id: "eid262", tween: [ "style", "${_LH-Explaing_exp}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid264", tween: [ "transform", "${_LH-Explaing_exp}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid276", tween: [ "transform", "${_LH-Explaing_exp}", "rotateZ", '15deg', { fromValue: '0deg'}], position: 500, duration: 500 },
                { id: "eid277", tween: [ "transform", "${_LH-Explaing_exp}", "rotateZ", '0deg', { fromValue: '15deg'}], position: 1000, duration: 500 },
                { id: "eid263", tween: [ "style", "${_LH_up}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid265", tween: [ "transform", "${_LH_up}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid266", tween: [ "transform", "${_LH_up}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 500, duration: 0 },
                { id: "eid267", tween: [ "transform", "${_LH_up}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1500, duration: 0 }            ]
        }
    }
},
"B_Talking_Lips": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    tag: 'img',
                    display: 'none',
                    id: 'L_1',
                    rect: ['0%', '0%', '92.4%', '93.2%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Lip/0/L_1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'L_2',
                    rect: ['7.6%', '6.8%', '92.4%', '93.2%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Lip/0/L_2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_L_1}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'none']
            ],
            "${_L_2}": [
                ["style", "top", '6.76%'],
                ["style", "left", '7.61%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '7.85%'],
                ["style", "width", '26.14%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: true,
            timeline: [
                { id: "eid337725", tween: [ "style", "${_L_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid337727", tween: [ "style", "${_L_1}", "display", 'block', { fromValue: 'none'}], position: 406, duration: 0 },
                { id: "eid337729", tween: [ "style", "${_L_1}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
                { id: "eid337731", tween: [ "style", "${_L_1}", "display", 'block', { fromValue: 'none'}], position: 1125, duration: 0 },
                { id: "eid337733", tween: [ "style", "${_L_1}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
                { id: "eid337735", tween: [ "style", "${_L_1}", "display", 'block', { fromValue: 'none'}], position: 1868, duration: 0 },
                { id: "eid337737", tween: [ "style", "${_L_1}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
                { id: "eid337724", tween: [ "style", "${_L_2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid337726", tween: [ "style", "${_L_2}", "display", 'none', { fromValue: 'block'}], position: 406, duration: 0 },
                { id: "eid337728", tween: [ "style", "${_L_2}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid337730", tween: [ "style", "${_L_2}", "display", 'none', { fromValue: 'block'}], position: 1125, duration: 0 },
                { id: "eid337732", tween: [ "style", "${_L_2}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid337734", tween: [ "style", "${_L_2}", "display", 'none', { fromValue: 'block'}], position: 1868, duration: 0 },
                { id: "eid337736", tween: [ "style", "${_L_2}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 }            ]
        }
    }
},
"B_Bye_hand": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'RH_up4',
                    rect: ['52%', '12.1%', '48%', '79.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Body/RH_up.png', '0px', '0px']
                },
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'RH_d2',
                    rect: ['51.4%', '73.2%', '38.5%', '92.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Body/RH_d.png', '0px', '0px']
                },
                {
                    type: 'image',
                    tag: 'img',
                    display: 'none',
                    id: 'Hand_on_bye2',
                    rect: ['-3.4%', '-6.1%', '74.3%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Body/Hand_on_bye.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RH_d2}": [
                ["style", "top", '73.23%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "height", '92.93%'],
                ["style", "left", '51.35%'],
                ["style", "-webkit-transform-origin", [24.82,9.2], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [24.82,9.2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [24.82,9.2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [24.82,9.2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [24.82,9.2],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_RH_up4}": [
                ["style", "top", '12.12%'],
                ["style", "left", '52.03%'],
                ["style", "display", 'block']
            ],
            "${_Hand_on_bye2}": [
                ["style", "top", '-6.06%'],
                ["style", "left", '-3.38%'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '43.23%'],
                ["style", "width", '42.05%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: true,
            timeline: [
                { id: "eid390", tween: [ "style", "${_RH_d2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid397", tween: [ "style", "${_RH_d2}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid391", tween: [ "style", "${_RH_up4}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid389", tween: [ "style", "${_Hand_on_bye2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid398", tween: [ "style", "${_Hand_on_bye2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid396", tween: [ "transform", "${_RH_d2}", "rotateZ", '-14deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid395", tween: [ "style", "${_RH_d2}", "-webkit-transform-origin", [24.82,9.2], { valueTemplate: '@@0@@% @@1@@%', fromValue: [24.82,9.2]}], position: 500, duration: 0 },
                { id: "eid483773", tween: [ "style", "${_RH_d2}", "-moz-transform-origin", [24.82,9.2], { valueTemplate: '@@0@@% @@1@@%', fromValue: [24.82,9.2]}], position: 500, duration: 0 },
                { id: "eid483774", tween: [ "style", "${_RH_d2}", "-ms-transform-origin", [24.82,9.2], { valueTemplate: '@@0@@% @@1@@%', fromValue: [24.82,9.2]}], position: 500, duration: 0 },
                { id: "eid483775", tween: [ "style", "${_RH_d2}", "msTransformOrigin", [24.82,9.2], { valueTemplate: '@@0@@% @@1@@%', fromValue: [24.82,9.2]}], position: 500, duration: 0 },
                { id: "eid483776", tween: [ "style", "${_RH_d2}", "-o-transform-origin", [24.82,9.2], { valueTemplate: '@@0@@% @@1@@%', fromValue: [24.82,9.2]}], position: 500, duration: 0 }            ]
        }
    }
},
"B_HAND_WOW": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'block',
                    rect: ['78.8%', '-3%', '53.8%', '95.7%', 'auto', 'auto'],
                    id: 'RH_up3',
                    fill: ['rgba(0,0,0,0)', 'images/2/Body/RH_up.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'Hand_WOW',
                    fill: ['rgba(0,0,0,0)', 'images/2/Body/Hand_WOW.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RH_up3}": [
                ["style", "top", '-3.05%'],
                ["style", "left", '78.79%'],
                ["style", "display", 'block']
            ],
            "${_Hand_WOW}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '35.81%'],
                ["style", "width", '37.5%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid388", tween: [ "style", "${_RH_up3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid387", tween: [ "style", "${_Hand_WOW}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"B_Bye_TS_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'RH_TS4',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Top/0/RH_TS.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RH_TS4}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '39.08%'],
                ["style", "width", '22.45%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: true,
            timeline: [
                { id: "eid399", tween: [ "style", "${_RH_TS4}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"B_Mobile_hand_TS_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    tag: 'img',
                    id: 'Mobile_hand_TS',
                    display: 'block',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/2/Top/0/Mobile_hand_TS.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Mobile_hand_TS}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '39.74%'],
                ["style", "width", '36.65%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid253", tween: [ "style", "${_Mobile_hand_TS}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"B": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Parent_B1',
                    type: 'rect',
                    rect: ['0%', '0%', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'Parent_B1',
                symbolName: 'Parent_B1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '98.23%'],
                ["style", "width", '55.01%']
            ],
            "${_Parent_B1}": [
                ["style", "top", '-1.91%'],
                ["transform", "scaleX", '-1.06557'],
                ["transform", "scaleY", '1.04077'],
                ["style", "left", '17.51%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 23000,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"B_Folding_hand": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'Folding_hand',
                    opacity: 1,
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Body/Folding_hand.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Folding_hand}": [
                ["style", "top", '0%'],
                ["style", "opacity", '1'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '32.97%'],
                ["style", "width", '65.06%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid258", tween: [ "style", "${_Folding_hand}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid259", tween: [ "style", "${_Folding_hand}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 }            ]
        }
    }
},
"B1_Face": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'B1_face',
                    type: 'rect',
                    rect: ['6.6%', '0%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'B_1_Close_eye',
                    type: 'rect',
                    rect: ['11.6%', '21.7%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'block',
                    type: 'rect',
                    id: 'LIPS_O',
                    rect: ['19.9%', '55.6%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'B_1_eyebrow',
                    type: 'rect',
                    rect: ['0%', '18.5%', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'LIPS_O',
                symbolName: 'LIPS_O',
                autoPlay: {

               }
            },
            {
                id: 'B_1_eyebrow',
                symbolName: 'B_1_eyebrow',
                autoPlay: {

               }
            },
            {
                id: 'B_1_Close_eye',
                symbolName: 'B_1_Close_eye',
                autoPlay: {

               }
            },
            {
                id: 'B1_face',
                symbolName: 'B1_face',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_B_1_eyebrow}": [
                ["style", "top", '18.52%'],
                ["style", "left", '0%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '20.04%'],
                ["style", "width", '51.43%']
            ],
            "${_B1_face}": [
                ["style", "top", '0%'],
                ["style", "left", '6.63%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_LIPS_O}": [
                ["style", "display", 'block'],
                ["style", "top", '55.56%'],
                ["style", "left", '19.89%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_B_1_Close_eye}": [
                ["style", "top", '21.69%'],
                ["style", "left", '11.6%'],
                ["transform", "rotateZ", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: true,
            timeline: [
                { id: "eid337858", tween: [ "style", "${_LIPS_O}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"B_RH": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'RH_d',
                    tag: 'img',
                    rect: ['0%', '41%', '80.3%', '59%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Body/RH_d.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'RH_up',
                    tag: 'img',
                    rect: ['0%', '0%', '100%', '50.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Body/RH_up.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RH_d}": [
                ["style", "-webkit-transform-origin", [38.28,7.53], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [38.28,7.53],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [38.28,7.53],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [38.28,7.53],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [38.28,7.53],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '40.97%'],
                ["style", "left", '0%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_RH_up}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '67.69%'],
                ["style", "width", '20.18%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1500,
            autoPlay: true,
            timeline: [
                { id: "eid323363", tween: [ "transform", "${_RH_d}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid323369", tween: [ "transform", "${_RH_d}", "rotateZ", '11deg', { fromValue: '0deg'}], position: 500, duration: 500 },
                { id: "eid323370", tween: [ "transform", "${_RH_d}", "rotateZ", '0deg', { fromValue: '11deg'}], position: 1000, duration: 500 },
                { id: "eid323362", tween: [ "transform", "${_RH_up}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid323364", tween: [ "transform", "${_RH_up}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 500, duration: 0 },
                { id: "eid323366", tween: [ "transform", "${_RH_up}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1500, duration: 0 },
                { id: "eid323368", tween: [ "style", "${_RH_d}", "-webkit-transform-origin", [38.28,7.53], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38.28,7.53]}], position: 1000, duration: 0 },
                { id: "eid483777", tween: [ "style", "${_RH_d}", "-moz-transform-origin", [38.28,7.53], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38.28,7.53]}], position: 1000, duration: 0 },
                { id: "eid483778", tween: [ "style", "${_RH_d}", "-ms-transform-origin", [38.28,7.53], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38.28,7.53]}], position: 1000, duration: 0 },
                { id: "eid483779", tween: [ "style", "${_RH_d}", "msTransformOrigin", [38.28,7.53], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38.28,7.53]}], position: 1000, duration: 0 },
                { id: "eid483780", tween: [ "style", "${_RH_d}", "-o-transform-origin", [38.28,7.53], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38.28,7.53]}], position: 1000, duration: 0 }            ]
        }
    }
},
"B1_Folding_hand_Ts_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'Folding_hand_TS',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Top/0/Folding_hand_TS.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Folding_hand_TS}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '39.74%'],
                ["style", "width", '74.44%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid260", tween: [ "style", "${_Folding_hand_TS}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid261", tween: [ "style", "${_Folding_hand_TS}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 }            ]
        }
    }
},
"B_Body": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'Body',
                    tag: 'img',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Body/Body.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Body}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '39.02%'],
                ["style", "width", '52.85%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"b_LS_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'L_S',
                    tag: 'img',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Shoes/0/L_S.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_L_S}": [
                ["style", "left", '0%'],
                ["style", "top", '0%']
            ],
            "${symbolSelector}": [
                ["style", "height", '27.87%'],
                ["style", "width", '50%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"B_bottm": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'B_LL',
                    type: 'rect',
                    rect: ['48.3%', '16.9%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'B_RL',
                    type: 'rect',
                    rect: ['8.3%', '17.3%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'b_LS_1',
                    type: 'rect',
                    rect: ['50%', '72.1%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'B_RS_1',
                    type: 'rect',
                    rect: ['0%', '67.9%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'B_RL_Bttm_1',
                    type: 'rect',
                    rect: ['3.8%', '3.7%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'B_LL_bttm_1',
                    type: 'rect',
                    rect: ['27.9%', '4%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'pent_top',
                    tag: 'img',
                    rect: ['11.3%', '5.1%', '77.5%', '27.4%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Bottom/0/pent_top.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'B_RL',
                symbolName: 'B_RL',
                autoPlay: {

               }
            },
            {
                id: 'B_LL',
                symbolName: 'B_LL',
                autoPlay: {

               }
            },
            {
                id: 'b_LS_1',
                symbolName: 'b_LS_1',
                autoPlay: {

               }
            },
            {
                id: 'B_LL_bttm_1',
                symbolName: 'B_LL_bttm_1',
                autoPlay: {

               }
            },
            {
                id: 'B_RS_1',
                symbolName: 'B_RS_1',
                autoPlay: {

               }
            },
            {
                id: 'B_RL_Bttm_1',
                symbolName: 'B_RL_Bttm_1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_B_RL_Bttm_1}": [
                ["style", "left", '3.75%'],
                ["style", "top", '3.66%']
            ],
            "${_B_LL}": [
                ["style", "left", '48.33%'],
                ["style", "top", '16.9%']
            ],
            "${_b_LS_1}": [
                ["style", "left", '50%'],
                ["style", "top", '72.13%']
            ],
            "${_B_LL_bttm_1}": [
                ["style", "left", '27.08%'],
                ["style", "top", '6.1%']
            ],
            "${_pent_top}": [
                ["style", "left", '11.25%'],
                ["style", "top", '5.05%']
            ],
            "${_B_RL}": [
                ["style", "left", '8.33%'],
                ["style", "top", '17.25%']
            ],
            "${_B_RS_1}": [
                ["style", "left", '0%'],
                ["style", "top", '67.94%']
            ],
            "${symbolSelector}": [
                ["style", "height", '60.87%'],
                ["style", "width", '68.19%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid368239", tween: [ "style", "${_B_LL_bttm_1}", "left", '27.08%', { fromValue: '27.08%'}], position: 0, duration: 0 },
                { id: "eid368237", tween: [ "style", "${_B_LL_bttm_1}", "top", '6.1%', { fromValue: '6.1%'}], position: 0, duration: 0 }            ]
        }
    }
},
"B_RH_TS_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['2.5%', '0%', '100%', '100%', 'auto', 'auto'],
                    tag: 'img',
                    id: 'RH_TS',
                    display: 'block',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/2/Top/0/RH_TS.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RH_TS}": [
                ["style", "top", '0%'],
                ["style", "left", '2.53%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '39.08%'],
                ["style", "width", '22.45%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid369567", tween: [ "style", "${_RH_TS}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"B_RL": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'RL_d_Bttm',
                    tag: 'img',
                    rect: ['0%', '35.6%', '83.9%', '64.4%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Body/RL_d_Bttm.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'RL_up_Bttm',
                    tag: 'img',
                    rect: ['18.8%', '0%', '81.3%', '46.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Body/RL_up_Bttm.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RL_up_Bttm}": [
                ["style", "left", '18.75%'],
                ["style", "top", '0%']
            ],
            "${_RL_d_Bttm}": [
                ["style", "left", '0%'],
                ["style", "top", '35.62%']
            ],
            "${symbolSelector}": [
                ["style", "height", '68.47%'],
                ["style", "width", '46.67%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"B_1_Close_eye": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['19.8%', '44.1%', '68.1%', '21.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Face/0/clos_eye.png', '0px', '0px'],
                    display: 'none',
                    type: 'image',
                    id: 'clos_eye',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_clos_eye}": [
                ["style", "top", '44.12%'],
                ["style", "left", '19.78%'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '53.97%'],
                ["style", "width", '50.28%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: true,
            timeline: [
                { id: "eid341479", tween: [ "style", "${_clos_eye}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid341480", tween: [ "style", "${_clos_eye}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid341481", tween: [ "style", "${_clos_eye}", "display", 'none', { fromValue: 'block'}], position: 1108, duration: 0 },
                { id: "eid341482", tween: [ "style", "${_clos_eye}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid341483", tween: [ "style", "${_clos_eye}", "display", 'none', { fromValue: 'block'}], position: 2117, duration: 0 },
                { id: "eid341484", tween: [ "style", "${_clos_eye}", "display", 'block', { fromValue: 'none'}], position: 3136, duration: 0 },
                { id: "eid341485", tween: [ "style", "${_clos_eye}", "display", 'none', { fromValue: 'block'}], position: 3250, duration: 0 }            ]
        }
    }
},
"Parent_B1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    display: 'block',
                    type: 'rect',
                    id: 'B_Body',
                    rect: ['38.6%', '16.2%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'block',
                    type: 'rect',
                    id: 'B_bottm',
                    rect: ['30.1%', '39.1%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'block',
                    type: 'rect',
                    id: 'B1_Face',
                    rect: ['35.2%', '3.1%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'block',
                    type: 'rect',
                    id: 'B1_hair',
                    rect: ['38.4%', '0%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'B_Talking_Lips',
                    rect: ['40.9%', '14.1%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'block',
                    type: 'rect',
                    id: 'B1_TOP_1',
                    rect: ['0%', '10.3%', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'B_Talking_Lips',
                symbolName: 'B_Talking_Lips',
                autoPlay: {

               }
            },
            {
                id: 'B_Body',
                symbolName: 'B_Body',
                autoPlay: {

               }
            },
            {
                id: 'B1_TOP_1',
                symbolName: 'B1_TOP_1',
                autoPlay: {

               }
            },
            {
                id: 'B1_hair',
                symbolName: 'B1_hair',
                autoPlay: {

               }
            },
            {
                id: 'B1_Face',
                symbolName: 'B1_Face',
                autoPlay: {

               }
            },
            {
                id: 'B_bottm',
                symbolName: 'B_bottm',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_B_Talking_Lips}": [
                ["style", "display", 'none'],
                ["style", "left", '39.49%'],
                ["style", "top", '13.68%']
            ],
            "${_B_bottm}": [
                ["style", "display", 'block'],
                ["style", "left", '30.11%'],
                ["style", "top", '39.13%']
            ],
            "${symbolSelector}": [
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ],
            "${_B_Body}": [
                ["style", "display", 'block'],
                ["style", "left", '38.64%'],
                ["style", "top", '16.22%']
            ],
            "${_B1_Face}": [
                ["style", "display", 'block'],
                ["style", "left", '35.23%'],
                ["style", "top", '3.08%']
            ],
            "${_B1_TOP_1}": [
                ["style", "display", 'block'],
                ["style", "left", '0%'],
                ["style", "top", '10.29%']
            ],
            "${_B1_hair}": [
                ["style", "display", 'block'],
                ["style", "left", '38.35%'],
                ["style", "top", '0%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 23000,
            autoPlay: true,
            timeline: [
                { id: "eid527", tween: [ "style", "${_B_Talking_Lips}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid337001", tween: [ "style", "${_B1_Face}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid336999", tween: [ "style", "${_B1_TOP_1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid337000", tween: [ "style", "${_B1_hair}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid337003", tween: [ "style", "${_B_Body}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid337002", tween: [ "style", "${_B_bottm}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"B_LH_TS_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'LH_TS',
                    tag: 'img',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Top/0/LH_TS.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_LH_TS}": [
                ["style", "left", '0%'],
                ["style", "top", '0%']
            ],
            "${symbolSelector}": [
                ["style", "height", '44.32%'],
                ["style", "width", '22.16%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"B_RL_Bttm_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'RL_up_PB',
                    tag: 'img',
                    rect: ['1.9%', '0.4%', '91.9%', '60.4%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Bottom/0/RL_up_PB.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'RL_d_PB',
                    tag: 'img',
                    rect: ['0%', '38.2%', '76.3%', '61%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Bottom/0/RL_d_PB.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RL_d_PB}": [
                ["style", "left", '0%'],
                ["style", "top", '38.19%']
            ],
            "${symbolSelector}": [
                ["style", "height", '84.84%'],
                ["style", "width", '66.67%']
            ],
            "${_RL_up_PB}": [
                ["style", "left", '1.88%'],
                ["style", "top", '0.41%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"B_Hand_On_Lips_TS_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'RH_TS2',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Top/0/RH_TS.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RH_TS2}": [
                ["style", "top", '0%'],
                ["style", "left", '6.33%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '39.08%'],
                ["style", "width", '22.45%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1250,
            autoPlay: true,
            timeline: [
                { id: "eid332", tween: [ "style", "${_RH_TS2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid347", tween: [ "style", "${_RH_TS2}", "left", '6.33%', { fromValue: '6.33%'}], position: 0, duration: 0 }            ]
        }
    }
},
"B_LL_bttm_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'LL_up_PB3',
                    tag: 'img',
                    rect: ['0.6%', '-0.9%', '89%', '49.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Bottom/0/LL_up_PB.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'LL_d_PB3',
                    tag: 'img',
                    rect: ['25.4%', '21.8%', '72.8%', '65.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Bottom/0/LL_d_PB.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_LL_d_PB3}": [
                ["style", "left", '25.43%'],
                ["style", "top", '21.78%']
            ],
            "${_LL_up_PB3}": [
                ["style", "left", '0.58%'],
                ["style", "top", '-0.94%']
            ],
            "${symbolSelector}": [
                ["style", "height", '95.99%'],
                ["style", "width", '72.09%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"B_WOW_HAND_TS_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'RH_TS3',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Top/0/RH_TS.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RH_TS3}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '39.08%'],
                ["style", "width", '22.45%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid385", tween: [ "style", "${_RH_TS3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid386", tween: [ "style", "${_RH_TS3}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 }            ]
        }
    }
},
"LIPS_O": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/2/Face/0/Lipe.png', '0px', '0px'],
                    id: 'Lipe2',
                    rect: ['76.6%', '192.4%', '56.3%', '21.2%', 'auto', 'auto'],
                    display: 'block',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Lipe2}": [
                ["style", "top", '34.85%'],
                ["style", "left", '20.31%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '34.92%'],
                ["style", "width", '35.36%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid341486", tween: [ "style", "${_Lipe2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"B_Hand_On_Lips": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    tag: 'img',
                    display: 'none',
                    id: 'RH_d',
                    rect: ['0%', '50.5%', '54.8%', '49.5%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Body/RH_d.png', '0px', '0px']
                },
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'Hand_on_lipe',
                    rect: ['6.7%', '0%', '93.3%', '57.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Body/Hand_on_lipe.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Hand_on_lipe}": [
                ["style", "top", '0%'],
                ["style", "left", '6.73%'],
                ["style", "display", 'block']
            ],
            "${_RH_d}": [
                ["style", "top", '50.54%'],
                ["style", "left", '0%'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '80.79%'],
                ["style", "width", '29.55%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1250,
            autoPlay: true,
            timeline: [
                { id: "eid312", tween: [ "style", "${_RH_d}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid315", tween: [ "style", "${_RH_d}", "display", 'none', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid317", tween: [ "style", "${_RH_d}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid319", tween: [ "style", "${_RH_d}", "display", 'block', { fromValue: 'block'}], position: 1250, duration: 0 },
                { id: "eid313", tween: [ "style", "${_Hand_on_lipe}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid314", tween: [ "style", "${_Hand_on_lipe}", "display", 'block', { fromValue: 'block'}], position: 250, duration: 0 },
                { id: "eid316", tween: [ "style", "${_Hand_on_lipe}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid318", tween: [ "style", "${_Hand_on_lipe}", "display", 'none', { fromValue: 'none'}], position: 1250, duration: 0 }            ]
        }
    }
},
"G_RL": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'RL_d_Bttm',
                    tag: 'img',
                    rect: ['9%', '46.9%', '81%', '53.1%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Body/RL_d_Bttm.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'RL_up_Bttm',
                    tag: 'img',
                    rect: ['0%', '0%', '100%', '57.4%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Body/RL_up_Bttm.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RL_up_Bttm}": [
                ["style", "left", '0%'],
                ["style", "top", '0%']
            ],
            "${symbolSelector}": [
                ["style", "height", '92.63%'],
                ["style", "width", '49.27%']
            ],
            "${_RL_d_Bttm}": [
                ["style", "left", '9%'],
                ["style", "top", '46.88%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"G2_hand_on_lips_Ts_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'LH_TS2',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Top/0/LH_TS.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_LH_TS2}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '23.11%'],
                ["style", "width", '33.55%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1500,
            autoPlay: true,
            timeline: [
                { id: "eid75", tween: [ "style", "${_LH_TS2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid76", tween: [ "style", "${_LH_TS2}", "display", 'block', { fromValue: 'block'}], position: 1500, duration: 0 }            ]
        }
    }
},
"G_Hand_ON_CHEEKS": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    tag: 'img',
                    id: 'Hand_on_cheek',
                    display: 'block',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/1/Body/Hand_on_cheek.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Hand_on_cheek}": [
                ["style", "top", '-13.08%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '25.63%'],
                ["style", "width", '33.55%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1500,
            autoPlay: true,
            timeline: [
                { id: "eid50", tween: [ "style", "${_Hand_on_cheek}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid49", tween: [ "style", "${_Hand_on_cheek}", "display", 'block', { fromValue: 'block'}], position: 1500, duration: 0 }            ]
        }
    }
},
"G_LH": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'LH_d',
                    tag: 'img',
                    rect: ['21.2%', '41.8%', '78.8%', '58.2%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Body/LH_d.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'LH_up',
                    tag: 'img',
                    rect: ['0%', '0%', '84.9%', '52.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Body/LH_up.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_LH_d}": [
                ["style", "-webkit-transform-origin", [53.85,12.93], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [53.85,12.93],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [53.85,12.93],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [53.85,12.93],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [53.85,12.93],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '41.8%'],
                ["style", "left", '21.21%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '37.25%'],
                ["style", "width", '31.63%']
            ],
            "${_LH_up}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["transform", "rotateZ", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: true,
            timeline: [
                { id: "eid323549", tween: [ "transform", "${_LH_d}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid323557", tween: [ "transform", "${_LH_d}", "rotateZ", '-4deg', { fromValue: '0deg'}], position: 500, duration: 1000 },
                { id: "eid323558", tween: [ "transform", "${_LH_d}", "rotateZ", '0deg', { fromValue: '-4deg'}], position: 1500, duration: 1000 },
                { id: "eid323556", tween: [ "style", "${_LH_d}", "-webkit-transform-origin", [53.85,12.93], { valueTemplate: '@@0@@% @@1@@%', fromValue: [53.85,12.93]}], position: 1500, duration: 0 },
                { id: "eid483781", tween: [ "style", "${_LH_d}", "-moz-transform-origin", [53.85,12.93], { valueTemplate: '@@0@@% @@1@@%', fromValue: [53.85,12.93]}], position: 1500, duration: 0 },
                { id: "eid483782", tween: [ "style", "${_LH_d}", "-ms-transform-origin", [53.85,12.93], { valueTemplate: '@@0@@% @@1@@%', fromValue: [53.85,12.93]}], position: 1500, duration: 0 },
                { id: "eid483783", tween: [ "style", "${_LH_d}", "msTransformOrigin", [53.85,12.93], { valueTemplate: '@@0@@% @@1@@%', fromValue: [53.85,12.93]}], position: 1500, duration: 0 },
                { id: "eid483784", tween: [ "style", "${_LH_d}", "-o-transform-origin", [53.85,12.93], { valueTemplate: '@@0@@% @@1@@%', fromValue: [53.85,12.93]}], position: 1500, duration: 0 },
                { id: "eid323548", tween: [ "transform", "${_LH_up}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid323550", tween: [ "transform", "${_LH_up}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 500, duration: 0 },
                { id: "eid323552", tween: [ "transform", "${_LH_up}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1500, duration: 0 },
                { id: "eid323554", tween: [ "transform", "${_LH_up}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2500, duration: 0 }            ]
        }
    }
},
"G_Hand_on_face2": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'Hand_on_face',
                    fill: ['rgba(0,0,0,0)', 'images/1/Body/Hand_on_face.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Hand_on_face}": [
                ["style", "top", '-6.36%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '26.35%'],
                ["style", "width", '67.74%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid47", tween: [ "style", "${_Hand_on_face}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"G2_mobile_han_Ts_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/1/Top/0/Mobile_hand_TS.png', '0px', '0px'],
                    id: 'Mobile_hand_TS',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    display: 'block',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Mobile_hand_TS}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '25.99%'],
                ["style", "width", '30.36%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid43", tween: [ "style", "${_Mobile_hand_TS}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"G2_Mobile_hand": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'Mobile_hand',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Body/Mobile_hand.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Mobile_hand}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '25.87%'],
                ["style", "width", '32.27%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid44", tween: [ "style", "${_Mobile_hand}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"G_WOW_EXP": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'LH_up3',
                    rect: ['-59.5%', '14.8%', '94.4%', '80.8%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Body/LH_up.png', '0px', '0px']
                },
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'Hand_on_wow',
                    rect: ['6.7%', '-4.4%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Body/Hand_on_wow.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Hand_on_wow}": [
                ["style", "top", '-4.43%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${_LH_up3}": [
                ["style", "top", '14.78%'],
                ["style", "left", '-59.55%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '24.31%'],
                ["style", "width", '28.44%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid66", tween: [ "style", "${_LH_up3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid67", tween: [ "style", "${_Hand_on_wow}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"G_folding_hand2": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'Folding_hand',
                    fill: ['rgba(0,0,0,0)', 'images/1/Body/Folding_hand.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '19.16%'],
                ["style", "width", '76.36%']
            ],
            "${_Folding_hand}": [
                ["style", "top", '-4.37%'],
                ["style", "left", '-1.26%'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3500,
            autoPlay: true,
            timeline: [
                { id: "eid1", tween: [ "style", "${_Folding_hand}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"G2_Hair": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'Hr_1',
                    rect: ['-12.9%', '-6.5%', '112.9%', '120.4%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Hair/0/Hr_1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Hr_1}": [
                ["style", "top", '-6.49%'],
                ["style", "left", '-12.92%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '26.01%'],
                ["style", "width", '56.87%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid340028", tween: [ "style", "${_Hr_1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"G2_RL_shoe_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['7.8%', '-47.1%', '98.3%', '147.2%', 'auto', 'auto'],
                    tag: 'img',
                    id: 'R_S2',
                    display: 'block',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/1/Shoes/0/R_S.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_R_S2}": [
                ["style", "top", '-47.15%'],
                ["style", "left", '1.69%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '24.5%'],
                ["style", "width", '58.13%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid362988", tween: [ "style", "${_R_S2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"G_RH": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'RH_up',
                    tag: 'img',
                    rect: ['0%', '0%', '62.8%', '55.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Body/RH_up.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'RH_d',
                    tag: 'img',
                    rect: ['4.3%', '37%', '95.8%', '63%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Body/RH_d.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RH_up}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_RH_d}": [
                ["style", "-webkit-transform-origin", [21,11.45], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [21,11.45],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [21,11.45],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [21,11.45],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [21,11.45],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '37.04%'],
                ["style", "left", '4.26%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '38.8%'],
                ["style", "width", '30.04%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: true,
            timeline: [
                { id: "eid323539", tween: [ "transform", "${_RH_d}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid323546", tween: [ "transform", "${_RH_d}", "rotateZ", '-4deg', { fromValue: '0deg'}], position: 1000, duration: 1000 },
                { id: "eid323547", tween: [ "transform", "${_RH_d}", "rotateZ", '0deg', { fromValue: '-4deg'}], position: 2000, duration: 1000 },
                { id: "eid323540", tween: [ "transform", "${_RH_up}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid323542", tween: [ "transform", "${_RH_up}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1000, duration: 0 },
                { id: "eid323544", tween: [ "transform", "${_RH_up}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3000, duration: 0 },
                { id: "eid323545", tween: [ "style", "${_RH_d}", "-webkit-transform-origin", [21,11.45], { valueTemplate: '@@0@@% @@1@@%', fromValue: [21,11.45]}], position: 2000, duration: 0 },
                { id: "eid483785", tween: [ "style", "${_RH_d}", "-moz-transform-origin", [21,11.45], { valueTemplate: '@@0@@% @@1@@%', fromValue: [21,11.45]}], position: 2000, duration: 0 },
                { id: "eid483786", tween: [ "style", "${_RH_d}", "-ms-transform-origin", [21,11.45], { valueTemplate: '@@0@@% @@1@@%', fromValue: [21,11.45]}], position: 2000, duration: 0 },
                { id: "eid483787", tween: [ "style", "${_RH_d}", "msTransformOrigin", [21,11.45], { valueTemplate: '@@0@@% @@1@@%', fromValue: [21,11.45]}], position: 2000, duration: 0 },
                { id: "eid483788", tween: [ "style", "${_RH_d}", "-o-transform-origin", [21,11.45], { valueTemplate: '@@0@@% @@1@@%', fromValue: [21,11.45]}], position: 2000, duration: 0 }            ]
        }
    }
},
"G_Talking_LIPS": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/1/Lip/1/L_1.png', '0px', '0px'],
                    id: 'L_1',
                    rect: ['1.1%', '1.1%', '98.9%', '95.5%', 'auto', 'auto'],
                    display: 'block',
                    tag: 'img'
                },
                {
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/1/Lip/2/L_2.png', '0px', '0px'],
                    id: 'L_2',
                    rect: ['1.1%', '4.6%', '98.9%', '95.5%', 'auto', 'auto'],
                    display: 'none',
                    tag: 'img'
                },
                {
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/1/Lip/3/L_3.png', '0px', '0px'],
                    id: 'L_3',
                    rect: ['1.1%', '0%', '98.9%', '95.5%', 'auto', 'auto'],
                    display: 'none',
                    tag: 'img'
                },
                {
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/1/Lip/4/L_4.png', '0px', '0px'],
                    id: 'L_4',
                    rect: ['0%', '2.3%', '98.9%', '95.5%', 'auto', 'auto'],
                    display: 'none',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '9.91%'],
                ["style", "width", '29.4%']
            ],
            "${_L_1}": [
                ["style", "top", '1.14%'],
                ["style", "left", '1.09%'],
                ["style", "display", 'block']
            ],
            "${_L_2}": [
                ["style", "top", '7.95%'],
                ["style", "left", '1.09%'],
                ["style", "display", 'none']
            ],
            "${_L_3}": [
                ["style", "top", '3.41%'],
                ["style", "left", '1.09%'],
                ["style", "display", 'none']
            ],
            "${_L_4}": [
                ["style", "top", '5.68%'],
                ["style", "display", 'none'],
                ["style", "left", '-2.17%'],
                ["transform", "rotateZ", '-3deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: true,
            timeline: [
                { id: "eid215", tween: [ "style", "${_L_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid220", tween: [ "style", "${_L_3}", "display", 'none', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid223", tween: [ "style", "${_L_3}", "display", 'none', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid227", tween: [ "style", "${_L_3}", "display", 'none', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid233", tween: [ "style", "${_L_3}", "display", 'none', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid443511", tween: [ "style", "${_L_3}", "display", 'none', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid443626", tween: [ "style", "${_L_3}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid216", tween: [ "style", "${_L_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid219", tween: [ "style", "${_L_2}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid222", tween: [ "style", "${_L_2}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid228", tween: [ "style", "${_L_2}", "display", 'none', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid232", tween: [ "style", "${_L_2}", "display", 'none', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid443512", tween: [ "style", "${_L_2}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid443513", tween: [ "style", "${_L_2}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid217", tween: [ "style", "${_L_1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid218", tween: [ "style", "${_L_1}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
                { id: "eid225", tween: [ "style", "${_L_1}", "display", 'none', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid229", tween: [ "style", "${_L_1}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid231", tween: [ "style", "${_L_1}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid214", tween: [ "style", "${_L_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid221", tween: [ "style", "${_L_4}", "display", 'none', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid224", tween: [ "style", "${_L_4}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid226", tween: [ "style", "${_L_4}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
                { id: "eid230", tween: [ "style", "${_L_4}", "display", 'none', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid443510", tween: [ "style", "${_L_4}", "display", 'none', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid443514", tween: [ "style", "${_L_4}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0 }            ]
        }
    }
},
"G_LOVE_HAND": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'Love_hand',
                    fill: ['rgba(0,0,0,0)', 'images/1/Body/Love_hand.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Love_hand}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '21.2%'],
                ["style", "width", '78.28%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid40", tween: [ "style", "${_Love_hand}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid41", tween: [ "style", "${_Love_hand}", "display", 'block', { fromValue: 'block'}], position: 1000, duration: 0 }            ]
        }
    }
},
"Parent_G2": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'G2_Hair',
                    type: 'rect',
                    rect: ['13.4%', '0%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'G2_PANT_TOP_1',
                    type: 'rect',
                    rect: ['17.9%', '43.5%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'G_Body',
                    type: 'rect',
                    rect: ['5.4%', '13.2%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'G2_FACE',
                    type: 'rect',
                    rect: ['20.5%', '3.2%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'G2_TOP_1',
                    type: 'rect',
                    rect: ['0%', '2.4%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'block',
                    type: 'rect',
                    rect: ['33.6%', '8.1%', 'auto', 'auto', 'auto', 'auto'],
                    id: 'G_close_eye'
                },
                {
                    id: 'G_Eye_brow_1',
                    type: 'rect',
                    rect: ['32.6%', '8.1%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['34.5%', '9.8%', 'auto', 'auto', 'auto', 'auto'],
                    id: 'G_Talking_LIPS'
                },
                {
                    id: 'G2_Hairup',
                    type: 'rect',
                    rect: ['8%', '-1.6%', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'G2_Hair',
                symbolName: 'G2_Hair',
                autoPlay: {

               }
            },
            {
                id: 'G2_TOP_1',
                symbolName: 'G2_TOP_1',
                autoPlay: {

               }
            },
            {
                id: 'G_close_eye',
                symbolName: 'G_close_eye',
                autoPlay: {

               }
            },
            {
                id: 'G_Body',
                symbolName: 'G_Body',
                autoPlay: {

               }
            },
            {
                id: 'G2_Hairup',
                symbolName: 'G2_Hairup',
                autoPlay: {

               }
            },
            {
                id: 'G_Talking_LIPS',
                symbolName: 'G_Talking_LIPS',
                autoPlay: {

               }
            },
            {
                id: 'G2_PANT_TOP_1',
                symbolName: 'G2_PANT_TOP_1',
                autoPlay: {

               }
            },
            {
                id: 'G_Eye_brow_1',
                symbolName: 'G_Eye_brow_1',
                autoPlay: {

               }
            },
            {
                id: 'G2_FACE',
                symbolName: 'G2_FACE',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_G_close_eye}": [
                ["style", "display", 'block'],
                ["style", "top", '8.11%'],
                ["style", "left", '33.55%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_G_Talking_LIPS}": [
                ["style", "display", 'none'],
                ["style", "top", '10.02%'],
                ["style", "left", '33.55%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_G2_TOP_1}": [
                ["style", "top", '2.36%'],
                ["style", "left", '0%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_G2_Hair}": [
                ["style", "top", '0%'],
                ["style", "left", '13.42%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_G2_FACE}": [
                ["style", "top", '3.15%'],
                ["style", "left", '20.45%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_G2_PANT_TOP_1}": [
                ["style", "left", '17.89%'],
                ["style", "top", '43.47%']
            ],
            "${symbolSelector}": [
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ],
            "${_G_Eye_brow_1}": [
                ["style", "top", '8.11%'],
                ["style", "left", '32.59%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_G_Body}": [
                ["style", "top", '13.18%'],
                ["style", "left", '5.43%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_G2_Hairup}": [
                ["transform", "rotateZ", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 25000,
            autoPlay: true,
            timeline: [
                { id: "eid354919", tween: [ "style", "${_G_Talking_LIPS}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid467077", tween: [ "transform", "${_G_Body}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid338399", tween: [ "style", "${_G_close_eye}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"G_Eye_brow_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'R_eyebrow',
                    rect: ['-2.7%', '-13.3%', '64.9%', '120%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Face/0/R_eyebrow.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'L_eyebrow',
                    tag: 'img',
                    rect: ['67.6%', '0%', '37.8%', '126.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Face/0/L_eyebrow.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_L_eyebrow}": [
                ["style", "left", '67.57%'],
                ["style", "top", '0%']
            ],
            "${_R_eyebrow}": [
                ["style", "top", '6.67%'],
                ["style", "display", 'block'],
                ["style", "left", '-2.7%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '1.69%'],
                ["style", "width", '23.65%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1500,
            autoPlay: true,
            timeline: [
                { id: "eid334325", tween: [ "transform", "${_R_eyebrow}", "rotateZ", '9deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid334326", tween: [ "transform", "${_R_eyebrow}", "rotateZ", '0deg', { fromValue: '9deg'}], position: 500, duration: 500 },
                { id: "eid334327", tween: [ "transform", "${_R_eyebrow}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
                { id: "eid334323", tween: [ "style", "${_R_eyebrow}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"G2_RL_BTTM_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'RL_up_PB',
                    tag: 'img',
                    rect: ['-25.2%', '-12.1%', '165.7%', '90.2%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Bottom/0/RL_up_PB.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'RL_d_PB',
                    tag: 'img',
                    rect: ['-3%', '50.9%', '100%', '73.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Bottom/0/RL_d_PB.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RL_up_PB}": [
                ["style", "top", '-12.08%'],
                ["style", "left", '-25.25%']
            ],
            "${_RL_d_PB}": [
                ["style", "left", '-3.03%'],
                ["style", "top", '50.9%']
            ],
            "${symbolSelector}": [
                ["style", "height", '77.49%'],
                ["style", "width", '48.77%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"G2_BYE_TS_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'LH_TS2',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Top/0/LH_TS.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_LH_TS2}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '23.11%'],
                ["style", "width", '33.55%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid61", tween: [ "style", "${_LH_TS2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"G2_Wow_exp_TS_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'LH_TS3',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Top/0/LH_TS.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_LH_TS3}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '23.11%'],
                ["style", "width", '33.55%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid68", tween: [ "style", "${_LH_TS3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"G2_LOVE_HAND_TS_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    tag: 'img',
                    id: 'Love_hand_TS',
                    display: 'block',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/1/Top/0/Love_hand_TS.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Love_hand_TS}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '23.71%'],
                ["style", "width", '77.64%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid348749", tween: [ "style", "${_Love_hand_TS}", "left", '0%', { fromValue: '0%'}], position: 2000, duration: 0 },
                { id: "eid42", tween: [ "style", "${_Love_hand_TS}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"G_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Parent_G2',
                    type: 'rect',
                    rect: ['0%', '0%', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'Parent_G2',
                symbolName: 'Parent_G2',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '92.5%'],
                ["style", "width", '48.91%']
            ],
            "${_Parent_G2}": [
                ["transform", "scaleX", '0.92626'],
                ["style", "top", '0%'],
                ["transform", "scaleY", '1.04331'],
                ["style", "left", '0%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 25000,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"G2_Lips": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/1/Face/0/Lipe.png', '0px', '0px'],
                    id: 'Lipe',
                    rect: ['200%', '376.9%', '123.5%', '88.5%', 'auto', 'auto'],
                    display: 'block',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Lipe}": [
                ["style", "top", '26.92%'],
                ["style", "left", '-5.88%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '18.98%'],
                ["style", "width", '25%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid334328", tween: [ "style", "${_Lipe}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"G_Body": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'Body',
                    tag: 'img',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Body/Body.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Body}": [
                ["style", "top", '0%'],
                ["style", "left", '0%']
            ],
            "${symbolSelector}": [
                ["style", "height", '33.22%'],
                ["style", "width", '63.9%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"G2_hand_on_cheeks_TS_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    tag: 'img',
                    id: 'Hand_on_cheek_RTS',
                    display: 'block',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/1/Top/0/Hand_on_cheek_RTS.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Hand_on_cheek_RTS}": [
                ["style", "top", '-3.98%'],
                ["style", "left", '7.41%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '24.07%'],
                ["style", "width", '28.76%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1500,
            autoPlay: true,
            timeline: [
                { id: "eid48", tween: [ "style", "${_Hand_on_cheek_RTS}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"G2_LL_BTTM_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'LL_up_PB',
                    tag: 'img',
                    rect: ['-28.3%', '-12.1%', '131.3%', '91.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Bottom/0/LL_up_PB.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'LL_d_PB',
                    tag: 'img',
                    rect: ['-7.1%', '52.2%', '100%', '68.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Bottom/0/LL_d_PB.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_LL_d_PB}": [
                ["style", "left", '-7.07%'],
                ["style", "top", '52.19%']
            ],
            "${_LL_up_PB}": [
                ["style", "left", '-28.28%'],
                ["style", "top", '-12.08%']
            ],
            "${symbolSelector}": [
                ["style", "height", '77.49%'],
                ["style", "width", '48.77%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"G2_LL_S_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-6.6%', '-55.3%', '113.2%', '171.3%', 'auto', 'auto'],
                    tag: 'img',
                    id: 'L_S',
                    display: 'block',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/1/Shoes/0/L_S.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '18.73%'],
                ["style", "width", '44.83%']
            ],
            "${_L_S}": [
                ["style", "top", '-64.4%'],
                ["style", "left", '-5.49%'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid362762", tween: [ "style", "${_L_S}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"G2_Mobile": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'mb1',
                    fill: ['rgba(0,0,0,0)', 'images/1/accessories1/mobail/0/mb1.png', '0px', '0px'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '26.95%'],
                ["style", "width", '62.62%']
            ],
            "${_mb1}": [
                ["style", "top", '0%'],
                ["style", "left", '0%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"G2_Folding_hand_TS_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'Folding_hand_TS',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Top/0/Folding_hand_TS.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Folding_hand_TS}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '21.8%'],
                ["style", "width", '85.95%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3500,
            autoPlay: true,
            timeline: [
                { id: "eid2", tween: [ "style", "${_Folding_hand_TS}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"G2_FACE": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'Face',
                    rect: ['-0.7%', '-3.6%', '87.5%', '111.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Face/0/Face.png', '0px', '0px']
                },
                {
                    display: 'block',
                    type: 'rect',
                    id: 'G2_Lips',
                    rect: ['52.2%', '64.2%', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'G2_Lips',
                symbolName: 'G2_Lips',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Face}": [
                ["style", "display", 'block'],
                ["style", "top", '-3.65%'],
                ["style", "left", '-0.74%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '15.43%'],
                ["style", "width", '43.46%']
            ],
            "${_G2_Lips}": [
                ["style", "display", 'block'],
                ["style", "left", '50.74%'],
                ["transform", "rotateZ", '-4deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid467035", tween: [ "style", "${_Face}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid324135", tween: [ "style", "${_G2_Lips}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"G_LL": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'LL_up_Bttm',
                    type: 'image',
                    rect: ['0%', '0%', '100%', '59.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Body/LL_up_Bttm.png', '0px', '0px']
                },
                {
                    id: 'LL_d_Bttm',
                    type: 'image',
                    rect: ['17%', '48.2%', '79.8%', '51.8%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Body/LL_d_Bttm.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_LL_d_Bttm}": [
                ["style", "left", '17.02%'],
                ["style", "top", '48.17%']
            ],
            "${_LL_up_Bttm}": [
                ["style", "left", '0%'],
                ["style", "top", '0%']
            ],
            "${symbolSelector}": [
                ["style", "height", '92.63%'],
                ["style", "width", '46.31%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"G_close_eye": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    tag: 'img',
                    display: 'none',
                    id: 'close_eye',
                    rect: ['-2.6%', '20.6%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Face/0/close_eye.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_close_eye}": [
                ["style", "display", 'none'],
                ["style", "left", '-2.56%'],
                ["style", "top", '20.59%']
            ],
            "${symbolSelector}": [
                ["style", "height", '3.83%'],
                ["style", "width", '24.93%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: true,
            timeline: [
                { id: "eid338400", tween: [ "style", "${_close_eye}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid338401", tween: [ "style", "${_close_eye}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid338402", tween: [ "style", "${_close_eye}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
                { id: "eid338403", tween: [ "style", "${_close_eye}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
                { id: "eid338404", tween: [ "style", "${_close_eye}", "display", 'none', { fromValue: 'block'}], position: 1856, duration: 0 },
                { id: "eid338405", tween: [ "style", "${_close_eye}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
                { id: "eid338406", tween: [ "style", "${_close_eye}", "display", 'none', { fromValue: 'block'}], position: 3852, duration: 0 }            ]
        }
    }
},
"G2_Hand_ON_FACE_TS_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'Hand_on_face_TS',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Top/0/Hand_on_face_TS.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Hand_on_face_TS}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '24.31%'],
                ["style", "width", '79.56%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid46", tween: [ "style", "${_Hand_on_face_TS}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid45", tween: [ "style", "${_Hand_on_face_TS}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 }            ]
        }
    }
},
"G_Hand_on_lips": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'LH_up',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Body/LH_up.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '19.64%'],
                ["style", "width", '26.84%']
            ],
            "${_LH_up}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1444,
            autoPlay: true,
            timeline: [
                { id: "eid77", tween: [ "style", "${_LH_up}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"G_HAND_ON_LIPS_2": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'Hand_on_lipe',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Body/Hand_on_lipe.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Hand_on_lipe}": [
                ["style", "top", '4.33%'],
                ["style", "display", 'block'],
                ["style", "left", '15.38%'],
                ["transform", "rotateZ", '-4deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '24.91%'],
                ["style", "width", '37.39%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1500,
            autoPlay: true,
            timeline: [
                { id: "eid73", tween: [ "style", "${_Hand_on_lipe}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid74", tween: [ "style", "${_Hand_on_lipe}", "display", 'block', { fromValue: 'block'}], position: 1500, duration: 0 }            ]
        }
    }
},
"G2_PANT_TOP_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'G_LL',
                    type: 'rect',
                    rect: ['43.4%', '1%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'G_RL',
                    type: 'rect',
                    rect: ['2%', '1%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'G2_LL_S_1',
                    type: 'rect',
                    rect: ['4.4%', '78.5%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'G2_RL_shoe_1',
                    type: 'rect',
                    rect: ['41.9%', '75.5%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'G2_LL_BTTM_1',
                    type: 'rect',
                    rect: ['47.3%', '1%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'G2_RL_BTTM_1',
                    type: 'rect',
                    rect: ['0%', '0%', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'G2_RL_shoe_1',
                symbolName: 'G2_RL_shoe_1',
                autoPlay: {

               }
            },
            {
                id: 'G_RL',
                symbolName: 'G_RL',
                autoPlay: {

               }
            },
            {
                id: 'G_LL',
                symbolName: 'G_LL',
                autoPlay: {

               }
            },
            {
                id: 'G2_LL_S_1',
                symbolName: 'G2_LL_S_1',
                autoPlay: {

               }
            },
            {
                id: 'G2_RL_BTTM_1',
                symbolName: 'G2_RL_BTTM_1',
                autoPlay: {

               }
            },
            {
                id: 'G2_LL_BTTM_1',
                symbolName: 'G2_LL_BTTM_1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '56.53%'],
                ["style", "width", '64.86%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"G2_TOP_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    display: 'block',
                    type: 'rect',
                    rect: ['53.4%', '1.6%', 'auto', 'auto', 'auto', 'auto'],
                    id: 'G_LH'
                },
                {
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/1/Top/0/LH_TS.png', '0px', '0px'],
                    id: 'LH_TS',
                    rect: ['51.1%', '-0.1%', '33.6%', '23.1%', 'auto', 'auto'],
                    display: 'block',
                    tag: 'img'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['57.8%', '2.3%', 'auto', 'auto', 'auto', 'auto'],
                    id: 'G_Hand_on_lips'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['174px', '7px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'G2_hand_on_lips_Ts_1'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['73.5%', '-2.2%', 'auto', 'auto', 'auto', 'auto'],
                    id: 'G_WOW_EXP'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['54.3%', '0%', 'auto', 'auto', 'auto', 'auto'],
                    id: 'G2_Wow_exp_TS_1'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['54.3%', '-4.8%', 'auto', 'auto', 'auto', 'auto'],
                    id: 'G_BYE_HAND'
                },
                {
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/1/Top/0/TOP.png', '0px', '0px'],
                    id: 'TOP',
                    rect: ['2.2%', '12.8%', '87.9%', '87%', 'auto', 'auto'],
                    display: 'block',
                    tag: 'img'
                },
                {
                    display: 'block',
                    type: 'rect',
                    rect: ['10.9%', '1.4%', 'auto', 'auto', 'auto', 'auto'],
                    id: 'G_RH'
                },
                {
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/1/Top/0/RH_TS.png', '0px', '0px'],
                    id: 'RH_TS',
                    rect: ['6.4%', '0.6%', '26.5%', '24.9%', 'auto', 'auto'],
                    display: 'block',
                    tag: 'img'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['40.9%', '-2.5%', 'auto', 'auto', 'auto', 'auto'],
                    id: 'G_HAND_ON_LIPS_2'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['11.8%', '-3.7%', 'auto', 'auto', 'auto', 'auto'],
                    id: 'G_Hand_ON_CHEEKS'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['52.1%', '0.4%', 'auto', 'auto', 'auto', 'auto'],
                    id: 'G2_BYE_TS_1'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['6.4%', '-1.4%', 'auto', 'auto', 'auto', 'auto'],
                    id: 'G2_hand_on_cheeks_TS_1'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['12.8%', '-3.9%', 'auto', 'auto', 'auto', 'auto'],
                    id: 'G_Hand_on_face2'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['3.5%', '-1.7%', 'auto', 'auto', 'auto', 'auto'],
                    id: 'G2_Hand_ON_FACE_TS_1'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['12.8%', '1.9%', 'auto', 'auto', 'auto', 'auto'],
                    id: 'G_folding_hand2'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['6.4%', '-0.4%', 'auto', 'auto', 'auto', 'auto'],
                    id: 'G2_Folding_hand_TS_1'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['11.2%', '1.6%', 'auto', 'auto', 'auto', 'auto'],
                    id: 'G_LOVE_HAND'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['1.9%', '0.6%', 'auto', 'auto', 'auto', 'auto'],
                    id: 'G2_LOVE_HAND_TS_1'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['1.6%', '-15.6%', 'auto', 'auto', 'auto', 'auto'],
                    id: 'G2_Mobile'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['12.8%', '-3.9%', 'auto', 'auto', 'auto', 'auto'],
                    id: 'G2_Mobile_hand'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['6.4%', '-2.5%', 'auto', 'auto', 'auto', 'auto'],
                    id: 'G2_mobile_han_Ts_1Copy'
                }
            ],
            symbolInstances: [
            {
                id: 'G2_BYE_TS_1',
                symbolName: 'G2_BYE_TS_1',
                autoPlay: {

               }
            },
            {
                id: 'G2_Wow_exp_TS_1',
                symbolName: 'G2_Wow_exp_TS_1',
                autoPlay: {

               }
            },
            {
                id: 'G2_hand_on_lips_Ts_1',
                symbolName: 'G2_hand_on_lips_Ts_1',
                autoPlay: {

               }
            },
            {
                id: 'G_Hand_ON_CHEEKS',
                symbolName: 'G_Hand_ON_CHEEKS',
                autoPlay: {

               }
            },
            {
                id: 'G_LH',
                symbolName: 'G_LH',
                autoPlay: {

               }
            },
            {
                id: 'G_Hand_on_face2',
                symbolName: 'G_Hand_on_face2',
                autoPlay: {

               }
            },
            {
                id: 'G2_LOVE_HAND_TS_1',
                symbolName: 'G2_LOVE_HAND_TS_1',
                autoPlay: {

               }
            },
            {
                id: 'G_WOW_EXP',
                symbolName: 'G_WOW_EXP',
                autoPlay: {

               }
            },
            {
                id: 'G_folding_hand2',
                symbolName: 'G_folding_hand2',
                autoPlay: {

               }
            },
            {
                id: 'G_HAND_ON_LIPS_2',
                symbolName: 'G_HAND_ON_LIPS_2',
                autoPlay: {

               }
            },
            {
                id: 'G2_hand_on_cheeks_TS_1',
                symbolName: 'G2_hand_on_cheeks_TS_1',
                autoPlay: {

               }
            },
            {
                id: 'G2_Hand_ON_FACE_TS_1',
                symbolName: 'G2_Hand_ON_FACE_TS_1',
                autoPlay: {

               }
            },
            {
                id: 'G2_Mobile',
                symbolName: 'G2_Mobile',
                autoPlay: {

               }
            },
            {
                id: 'G2_Folding_hand_TS_1',
                symbolName: 'G2_Folding_hand_TS_1',
                autoPlay: {

               }
            },
            {
                id: 'G_LOVE_HAND',
                symbolName: 'G_LOVE_HAND',
                autoPlay: {

               }
            },
            {
                id: 'G_Hand_on_lips',
                symbolName: 'G_Hand_on_lips',
                autoPlay: {

               }
            },
            {
                id: 'G2_mobile_han_Ts_1Copy',
                symbolName: 'G2_mobile_han_Ts_1',
                autoPlay: {

               }
            },
            {
                id: 'G2_Mobile_hand',
                symbolName: 'G2_Mobile_hand',
                autoPlay: {

               }
            },
            {
                id: 'G_RH',
                symbolName: 'G_RH',
                autoPlay: {

               }
            },
            {
                id: 'G_BYE_HAND',
                symbolName: 'G_BYE_HAND',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_G2_mobile_han_Ts_1Copy}": [
                ["style", "top", '13.05%'],
                ["style", "left", '6.07%'],
                ["style", "display", 'none']
            ],
            "${_G2_Mobile_hand}": [
                ["style", "top", '11.62%'],
                ["style", "left", '12.46%'],
                ["style", "display", 'none']
            ],
            "${_G_LOVE_HAND}": [
                ["style", "display", 'none'],
                ["style", "left", '7.35%'],
                ["style", "top", '16.89%']
            ],
            "${_G_Hand_on_lips}": [
                ["style", "display", 'none'],
                ["style", "left", '54.31%'],
                ["style", "top", '17.96%']
            ],
            "${_G2_Wow_exp_TS_1}": [
                ["style", "top", '15.81%'],
                ["style", "left", '52.4%'],
                ["style", "display", 'none']
            ],
            "${_G2_LOVE_HAND_TS_1}": [
                ["style", "top", '15.93%'],
                ["style", "left", '0%'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '94.03%'],
                ["style", "width", '100%']
            ],
            "${_RH_TS}": [
                ["style", "top", '16.17%'],
                ["style", "left", '4.47%'],
                ["style", "display", 'block']
            ],
            "${_G_Hand_on_face2}": [
                ["style", "display", 'none'],
                ["style", "left", '11.5%'],
                ["style", "top", '13.17%']
            ],
            "${_G2_BYE_TS_1}": [
                ["style", "display", 'none'],
                ["style", "left", '52.4%'],
                ["style", "top", '15.33%']
            ],
            "${_G_WOW_EXP}": [
                ["style", "top", '13.65%'],
                ["style", "left", '71.57%'],
                ["style", "display", 'none']
            ],
            "${_LH_TS}": [
                ["style", "top", '15.93%'],
                ["style", "left", '52.4%'],
                ["style", "display", 'block']
            ],
            "${_G2_hand_on_lips_Ts_1}": [
                ["style", "display", 'none'],
                ["style", "left", '163px'],
                ["style", "top", '138px']
            ],
            "${_G_HAND_ON_LIPS_2}": [
                ["style", "top", '11.74%'],
                ["transform", "rotateZ", '3deg'],
                ["style", "display", 'none'],
                ["style", "left", '35.78%'],
                ["style", "-webkit-transform-origin", [28.87,57.77], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [28.87,57.77],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [28.87,57.77],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [28.87,57.77],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [28.87,57.77],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_G_Hand_ON_CHEEKS}": [
                ["style", "display", 'none'],
                ["style", "left", '11.5%'],
                ["style", "top", '14.13%']
            ],
            "${_G_LH}": [
                ["style", "display", 'block'],
                ["style", "left", '54.63%'],
                ["style", "top", '17.6%']
            ],
            "${_G_folding_hand2}": [
                ["style", "top", '18.56%'],
                ["style", "left", '12.78%'],
                ["style", "display", 'none']
            ],
            "${_G2_hand_on_cheeks_TS_1}": [
                ["style", "display", 'none'],
                ["style", "left", '3.19%'],
                ["style", "top", '14.97%']
            ],
            "${_G_BYE_HAND}": [
                ["style", "display", 'none'],
                ["style", "left", '54.63%'],
                ["style", "top", '10.18%']
            ],
            "${_G2_Mobile}": [
                ["style", "top", '0%'],
                ["style", "left", '1.28%'],
                ["style", "display", 'none']
            ],
            "${_G_RH}": [
                ["style", "top", '16.89%'],
                ["style", "left", '9.27%'],
                ["style", "display", 'block']
            ],
            "${_G2_Hand_ON_FACE_TS_1}": [
                ["style", "display", 'none'],
                ["style", "left", '2.24%'],
                ["style", "top", '15.45%']
            ],
            "${_TOP}": [
                ["style", "display", 'block'],
                ["style", "left", '2.56%'],
                ["style", "top", '12.22%']
            ],
            "${_G2_Folding_hand_TS_1}": [
                ["style", "top", '15.93%'],
                ["style", "left", '6.39%'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 25000,
            autoPlay: true,
            timeline: [
                { id: "eid785", tween: [ "style", "${_RH_TS}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid786", tween: [ "style", "${_RH_TS}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid787", tween: [ "style", "${_RH_TS}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid788", tween: [ "style", "${_RH_TS}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
                { id: "eid789", tween: [ "style", "${_RH_TS}", "display", 'block', { fromValue: 'none'}], position: 9500, duration: 0 },
                { id: "eid790", tween: [ "style", "${_RH_TS}", "display", 'none', { fromValue: 'block'}], position: 11000, duration: 0 },
                { id: "eid791", tween: [ "style", "${_RH_TS}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
                { id: "eid792", tween: [ "style", "${_RH_TS}", "display", 'none', { fromValue: 'block'}], position: 14000, duration: 0 },
                { id: "eid793", tween: [ "style", "${_RH_TS}", "display", 'block', { fromValue: 'none'}], position: 17500, duration: 0 },
                { id: "eid794", tween: [ "style", "${_RH_TS}", "display", 'none', { fromValue: 'block'}], position: 25000, duration: 0 },
                { id: "eid805", tween: [ "style", "${_LH_TS}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid806", tween: [ "style", "${_LH_TS}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid807", tween: [ "style", "${_LH_TS}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid808", tween: [ "style", "${_LH_TS}", "display", 'none', { fromValue: 'block'}], position: 11000, duration: 0 },
                { id: "eid809", tween: [ "style", "${_LH_TS}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
                { id: "eid810", tween: [ "style", "${_LH_TS}", "display", 'none', { fromValue: 'block'}], position: 14000, duration: 0 },
                { id: "eid811", tween: [ "style", "${_LH_TS}", "display", 'block', { fromValue: 'none'}], position: 17500, duration: 0 },
                { id: "eid812", tween: [ "style", "${_LH_TS}", "display", 'none', { fromValue: 'block'}], position: 19000, duration: 0 },
                { id: "eid813", tween: [ "style", "${_LH_TS}", "display", 'block', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid814", tween: [ "style", "${_LH_TS}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0 },
                { id: "eid815", tween: [ "style", "${_LH_TS}", "display", 'block', { fromValue: 'none'}], position: 22000, duration: 0 },
                { id: "eid816", tween: [ "style", "${_LH_TS}", "display", 'none', { fromValue: 'block'}], position: 23000, duration: 0 },
                { id: "eid817", tween: [ "style", "${_LH_TS}", "display", 'block', { fromValue: 'none'}], position: 24000, duration: 0 },
                { id: "eid732", tween: [ "style", "${_G_LOVE_HAND}", "top", '16.89%', { fromValue: '16.89%'}], position: 2000, duration: 0 },
                { id: "eid336690", tween: [ "style", "${_TOP}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid746", tween: [ "style", "${_G_Hand_on_face2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid747", tween: [ "style", "${_G_Hand_on_face2}", "display", 'block', { fromValue: 'none'}], position: 11000, duration: 0 },
                { id: "eid748", tween: [ "style", "${_G_Hand_on_face2}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
                { id: "eid733", tween: [ "style", "${_G_LOVE_HAND}", "left", '7.35%', { fromValue: '7.35%'}], position: 2000, duration: 0 },
                { id: "eid755", tween: [ "style", "${_G_Hand_ON_CHEEKS}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid756", tween: [ "style", "${_G_Hand_ON_CHEEKS}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
                { id: "eid757", tween: [ "style", "${_G_Hand_ON_CHEEKS}", "display", 'none', { fromValue: 'block'}], position: 9500, duration: 0 },
                { id: "eid727", tween: [ "style", "${_G2_LOVE_HAND_TS_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid728", tween: [ "style", "${_G2_LOVE_HAND_TS_1}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid729", tween: [ "style", "${_G2_LOVE_HAND_TS_1}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid769", tween: [ "style", "${_G2_Wow_exp_TS_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid770", tween: [ "style", "${_G2_Wow_exp_TS_1}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
                { id: "eid771", tween: [ "style", "${_G2_Wow_exp_TS_1}", "display", 'none', { fromValue: 'block'}], position: 22000, duration: 0 },
                { id: "eid743", tween: [ "style", "${_G2_Hand_ON_FACE_TS_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid744", tween: [ "style", "${_G2_Hand_ON_FACE_TS_1}", "display", 'block', { fromValue: 'none'}], position: 11000, duration: 0 },
                { id: "eid745", tween: [ "style", "${_G2_Hand_ON_FACE_TS_1}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
                { id: "eid749", tween: [ "style", "${_G2_hand_on_cheeks_TS_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid750", tween: [ "style", "${_G2_hand_on_cheeks_TS_1}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
                { id: "eid751", tween: [ "style", "${_G2_hand_on_cheeks_TS_1}", "display", 'none', { fromValue: 'block'}], position: 9500, duration: 0 },
                { id: "eid740", tween: [ "style", "${_G_folding_hand2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid741", tween: [ "style", "${_G_folding_hand2}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
                { id: "eid742", tween: [ "style", "${_G_folding_hand2}", "display", 'none', { fromValue: 'block'}], position: 17500, duration: 0 },
                { id: "eid818", tween: [ "style", "${_G_LH}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid819", tween: [ "style", "${_G_LH}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid820", tween: [ "style", "${_G_LH}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid821", tween: [ "style", "${_G_LH}", "display", 'none', { fromValue: 'block'}], position: 11000, duration: 0 },
                { id: "eid822", tween: [ "style", "${_G_LH}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
                { id: "eid823", tween: [ "style", "${_G_LH}", "display", 'none', { fromValue: 'block'}], position: 14000, duration: 0 },
                { id: "eid824", tween: [ "style", "${_G_LH}", "display", 'block', { fromValue: 'none'}], position: 17500, duration: 0 },
                { id: "eid825", tween: [ "style", "${_G_LH}", "display", 'none', { fromValue: 'block'}], position: 19000, duration: 0 },
                { id: "eid826", tween: [ "style", "${_G_LH}", "display", 'block', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid827", tween: [ "style", "${_G_LH}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0 },
                { id: "eid828", tween: [ "style", "${_G_LH}", "display", 'block', { fromValue: 'none'}], position: 22000, duration: 0 },
                { id: "eid829", tween: [ "style", "${_G_LH}", "display", 'none', { fromValue: 'block'}], position: 23000, duration: 0 },
                { id: "eid830", tween: [ "style", "${_G_LH}", "display", 'block', { fromValue: 'none'}], position: 24000, duration: 0 },
                { id: "eid730", tween: [ "style", "${_G2_LOVE_HAND_TS_1}", "left", '0%', { fromValue: '0%'}], position: 2000, duration: 0 },
                { id: "eid725", tween: [ "style", "${_G2_Mobile}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid726", tween: [ "style", "${_G2_Mobile}", "display", 'block', { fromValue: 'none'}], position: 25000, duration: 0 },
                { id: "eid784", tween: [ "style", "${_G_Hand_on_lips}", "top", '17.96%', { fromValue: '17.96%'}], position: 19000, duration: 0 },
                { id: "eid737", tween: [ "style", "${_G2_Folding_hand_TS_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid738", tween: [ "style", "${_G2_Folding_hand_TS_1}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
                { id: "eid739", tween: [ "style", "${_G2_Folding_hand_TS_1}", "display", 'none', { fromValue: 'block'}], position: 17500, duration: 0 },
                { id: "eid734", tween: [ "style", "${_G_LOVE_HAND}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid735", tween: [ "style", "${_G_LOVE_HAND}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid736", tween: [ "style", "${_G_LOVE_HAND}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid795", tween: [ "style", "${_G_RH}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid796", tween: [ "style", "${_G_RH}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid797", tween: [ "style", "${_G_RH}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid798", tween: [ "style", "${_G_RH}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
                { id: "eid799", tween: [ "style", "${_G_RH}", "display", 'block', { fromValue: 'none'}], position: 9500, duration: 0 },
                { id: "eid800", tween: [ "style", "${_G_RH}", "display", 'none', { fromValue: 'block'}], position: 11000, duration: 0 },
                { id: "eid801", tween: [ "style", "${_G_RH}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
                { id: "eid802", tween: [ "style", "${_G_RH}", "display", 'none', { fromValue: 'block'}], position: 14000, duration: 0 },
                { id: "eid803", tween: [ "style", "${_G_RH}", "display", 'block', { fromValue: 'none'}], position: 17500, duration: 0 },
                { id: "eid804", tween: [ "style", "${_G_RH}", "display", 'none', { fromValue: 'block'}], position: 25000, duration: 0 },
                { id: "eid723", tween: [ "style", "${_G2_Mobile_hand}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid724", tween: [ "style", "${_G2_Mobile_hand}", "display", 'block', { fromValue: 'none'}], position: 25000, duration: 0 },
                { id: "eid721", tween: [ "style", "${_G2_mobile_han_Ts_1Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid722", tween: [ "style", "${_G2_mobile_han_Ts_1Copy}", "display", 'block', { fromValue: 'none'}], position: 25000, duration: 0 },
                { id: "eid772", tween: [ "style", "${_G_WOW_EXP}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid773", tween: [ "style", "${_G_WOW_EXP}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
                { id: "eid774", tween: [ "style", "${_G_WOW_EXP}", "display", 'none', { fromValue: 'block'}], position: 22000, duration: 0 },
                { id: "eid761", tween: [ "style", "${_G_HAND_ON_LIPS_2}", "-webkit-transform-origin", [28.87,57.77], { valueTemplate: '@@0@@% @@1@@%', fromValue: [28.87,57.77]}], position: 19000, duration: 0 },
                { id: "eid483789", tween: [ "style", "${_G_HAND_ON_LIPS_2}", "-moz-transform-origin", [28.87,57.77], { valueTemplate: '@@0@@% @@1@@%', fromValue: [28.87,57.77]}], position: 19000, duration: 0 },
                { id: "eid483790", tween: [ "style", "${_G_HAND_ON_LIPS_2}", "-ms-transform-origin", [28.87,57.77], { valueTemplate: '@@0@@% @@1@@%', fromValue: [28.87,57.77]}], position: 19000, duration: 0 },
                { id: "eid483791", tween: [ "style", "${_G_HAND_ON_LIPS_2}", "msTransformOrigin", [28.87,57.77], { valueTemplate: '@@0@@% @@1@@%', fromValue: [28.87,57.77]}], position: 19000, duration: 0 },
                { id: "eid483792", tween: [ "style", "${_G_HAND_ON_LIPS_2}", "-o-transform-origin", [28.87,57.77], { valueTemplate: '@@0@@% @@1@@%', fromValue: [28.87,57.77]}], position: 19000, duration: 0 },
                { id: "eid766", tween: [ "style", "${_G_BYE_HAND}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid767", tween: [ "style", "${_G_BYE_HAND}", "display", 'block', { fromValue: 'none'}], position: 23000, duration: 0 },
                { id: "eid768", tween: [ "style", "${_G_BYE_HAND}", "display", 'none', { fromValue: 'block'}], position: 24000, duration: 0 },
                { id: "eid731", tween: [ "style", "${_G2_LOVE_HAND_TS_1}", "top", '15.93%', { fromValue: '15.93%'}], position: 2000, duration: 0 },
                { id: "eid775", tween: [ "style", "${_G2_hand_on_lips_Ts_1}", "top", '138px', { fromValue: '138px'}], position: 19000, duration: 0 },
                { id: "eid780", tween: [ "style", "${_G_Hand_on_lips}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid781", tween: [ "style", "${_G_Hand_on_lips}", "display", 'block', { fromValue: 'none'}], position: 19000, duration: 0 },
                { id: "eid782", tween: [ "style", "${_G_Hand_on_lips}", "display", 'none', { fromValue: 'block'}], position: 20500, duration: 0 },
                { id: "eid752", tween: [ "style", "${_G2_BYE_TS_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid753", tween: [ "style", "${_G2_BYE_TS_1}", "display", 'block', { fromValue: 'none'}], position: 23000, duration: 0 },
                { id: "eid754", tween: [ "style", "${_G2_BYE_TS_1}", "display", 'none', { fromValue: 'block'}], position: 24000, duration: 0 },
                { id: "eid776", tween: [ "style", "${_G2_hand_on_lips_Ts_1}", "left", '163px', { fromValue: '163px'}], position: 19000, duration: 0 },
                { id: "eid777", tween: [ "style", "${_G2_hand_on_lips_Ts_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid778", tween: [ "style", "${_G2_hand_on_lips_Ts_1}", "display", 'block', { fromValue: 'none'}], position: 19000, duration: 0 },
                { id: "eid779", tween: [ "style", "${_G2_hand_on_lips_Ts_1}", "display", 'none', { fromValue: 'block'}], position: 20500, duration: 0 },
                { id: "eid758", tween: [ "style", "${_G_HAND_ON_LIPS_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid759", tween: [ "style", "${_G_HAND_ON_LIPS_2}", "display", 'block', { fromValue: 'none'}], position: 19000, duration: 0 },
                { id: "eid760", tween: [ "style", "${_G_HAND_ON_LIPS_2}", "display", 'none', { fromValue: 'block'}], position: 20500, duration: 0 },
                { id: "eid783", tween: [ "style", "${_G_Hand_on_lips}", "left", '54.31%', { fromValue: '54.31%'}], position: 19000, duration: 0 }            ]
        }
    }
},
"G_BYE_HAND": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'LH_up2',
                    tag: 'img',
                    rect: ['0%', '24.1%', '64.6%', '75.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Body/LH_up.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'Hand_on_bye',
                    tag: 'img',
                    rect: ['32.3%', '0%', '67.7%', '99.1%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Body/Hand_on_bye.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Hand_on_bye}": [
                ["style", "-webkit-transform-origin", [17.33,96.1], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [17.33,96.1],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [17.33,96.1],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [17.33,96.1],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [17.33,96.1],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '-0.46%'],
                ["style", "left", '33.85%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_LH_up2}": [
                ["style", "top", '24.07%'],
                ["style", "left", '0%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '25.87%'],
                ["style", "width", '41.54%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid55", tween: [ "transform", "${_Hand_on_bye}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid56", tween: [ "transform", "${_Hand_on_bye}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 500, duration: 500 },
                { id: "eid57", tween: [ "style", "${_Hand_on_bye}", "-webkit-transform-origin", [17.33,96.1], { valueTemplate: '@@0@@% @@1@@%', fromValue: [17.33,96.1]}], position: 500, duration: 0 },
                { id: "eid483793", tween: [ "style", "${_Hand_on_bye}", "-moz-transform-origin", [17.33,96.1], { valueTemplate: '@@0@@% @@1@@%', fromValue: [17.33,96.1]}], position: 500, duration: 0 },
                { id: "eid483794", tween: [ "style", "${_Hand_on_bye}", "-ms-transform-origin", [17.33,96.1], { valueTemplate: '@@0@@% @@1@@%', fromValue: [17.33,96.1]}], position: 500, duration: 0 },
                { id: "eid483795", tween: [ "style", "${_Hand_on_bye}", "msTransformOrigin", [17.33,96.1], { valueTemplate: '@@0@@% @@1@@%', fromValue: [17.33,96.1]}], position: 500, duration: 0 },
                { id: "eid483796", tween: [ "style", "${_Hand_on_bye}", "-o-transform-origin", [17.33,96.1], { valueTemplate: '@@0@@% @@1@@%', fromValue: [17.33,96.1]}], position: 500, duration: 0 },
                { id: "eid52", tween: [ "transform", "${_LH_up2}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid53", tween: [ "transform", "${_LH_up2}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1000, duration: 0 }            ]
        }
    }
},
"G2_Hairup": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    tag: 'img',
                    id: 'Hr_1_up2',
                    display: 'block',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/1/Hair/0/Hr_1_up.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Hr_1_up2}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '27.93%'],
                ["style", "width", '62.31%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid347231", tween: [ "style", "${_Hr_1_up2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"Pause_sym": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'paues',
                    tag: 'img',
                    rect: ['0%', '0%', '100%', '99.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icons/paues.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '23.51%'],
                ["style", "width", '14.92%']
            ],
            "${_paues}": [
                ["style", "top", '0%'],
                ["style", "height", '99.9%'],
                ["style", "left", '0.03%'],
                ["style", "width", '100.02%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"ImgBS": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'BS',
                    type: 'image',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/BS_img/BS.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'ImgBS',
                    tag: 'img',
                    rect: ['7.7%', '6.3%', '85.2%', '87%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/BS_img/8_680_1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_BS}": [
                ["style", "left", '0%'],
                ["style", "top", '0%']
            ],
            "${_ImgBS}": [
                ["style", "height", '86.95%'],
                ["style", "top", '6.25%'],
                ["style", "left", '7.66%'],
                ["style", "width", '85.09%']
            ],
            "${symbolSelector}": [
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-2322261730");
