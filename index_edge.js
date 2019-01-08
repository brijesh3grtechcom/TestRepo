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
    fonts['alfa-slab-one, serif']='<script src=\"http://use.edgefonts.net/alfa-slab-one:n4:all.js\"></script>';
    fonts['alex-brush, cursive']='<script src=\"http://use.edgefonts.net/alex-brush:n4:all.js\"></script>';
    fonts['dancing-script, sans-serif']='<script src=\"http://use.edgefonts.net/dancing-script:n4,n7:all.js\"></script>';
    fonts['immi-five-of-five, sans-serif']='<script src=\"http://use.edgefonts.net/immi-five-of-five:n4:all.js\"></script>';
    fonts['abel, sans-serif']='<script src=\"http://use.edgefonts.net/abel:n4:all.js\"></script>';

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
                rect: ['86.1%', '10.4%','14.1%','4.3%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"music_f.png",'0px','0px'],
                transform: [[],[],[],['1','1.99206']]
            },
            {
                id: 'pause',
                type: 'image',
                rect: ['86.1%', '10.4%','14.1%','4.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"music_n.png",'0px','0px'],
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
                ["style", "top", '10.42%'],
                ["transform", "scaleY", '1.99206'],
                ["style", "height", '4.33%'],
                ["style", "left", '86.1%'],
                ["style", "width", '14.13%']
            ],
            "${_Blank_screen}": [
                ["style", "display", 'none']
            ],
            "${_G_1}": [
                ["style", "top", '7.08%'],
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
                ["style", "top", '10.38%'],
                ["transform", "scaleY", '1.99206'],
                ["style", "height", '4.46%'],
                ["style", "left", '86.1%'],
                ["style", "width", '14.13%']
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
            duration: 120000,
            autoPlay: true,
            timeline: [
                { id: "eid321809", tween: [ "style", "${_B}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid372896", tween: [ "style", "${_G_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid482116", tween: [ "style", "${_first_screen2}", "top", '-0.1%', { fromValue: '-0.1%'}], position: 0, duration: 0 },
                { id: "eid306423", tween: [ "style", "${_lOADING}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid306422", tween: [ "style", "${_Chapter_completed}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid212248", tween: [ "style", "${_Chapter_strt}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid121190", tween: [ "style", "${_DlgBackBoard}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid345596", tween: [ "style", "${_B}", "top", '-0.52%', { fromValue: '-0.52%'}], position: 0, duration: 0 },
                { id: "eid447800", tween: [ "style", "${_DlgBackBoard}", "left", '2.37%', { fromValue: '2.37%'}], position: 0, duration: 0 },
                { id: "eid305101", tween: [ "style", "${_GAME_PAUSE}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid447799", tween: [ "transform", "${_DlgBackBoard}", "scaleX", '1.0509', { fromValue: '1.0509'}], position: 0, duration: 0 },
                { id: "eid298063", tween: [ "style", "${_Blank_screen}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid497697", tween: [ "style", "${_G_1}", "top", '7.08%', { fromValue: '7.08%'}], position: 0, duration: 0 }            ]
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
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'R_S',
                    fill: ['rgba(0,0,0,0)', 'images/Shoes/1/R_S.png', '0px', '0px'],
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
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'L_S',
                    fill: ['rgba(0,0,0,0)', 'images/Shoes/1/L_S.png', '0px', '0px'],
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
                    type: 'image',
                    id: 'B_LL_d_Bttm',
                    tag: 'img',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Bottom/1/LL_d_Bttm.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'B_LL_up_Bttm',
                    tag: 'img',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Bottom/1/LL_up_Bttm.png', '0px', '0px']
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
                { id: "eid666672", tween: [ "style", "${_B_LL_d_Bttm}", "-moz-transform-origin", [64.06,63.85], { valueTemplate: '@@0@@% @@1@@%', fromValue: [64.06,63.85]}], position: 500, duration: 0 },
                { id: "eid666673", tween: [ "style", "${_B_LL_d_Bttm}", "-ms-transform-origin", [64.06,63.85], { valueTemplate: '@@0@@% @@1@@%', fromValue: [64.06,63.85]}], position: 500, duration: 0 },
                { id: "eid666674", tween: [ "style", "${_B_LL_d_Bttm}", "msTransformOrigin", [64.06,63.85], { valueTemplate: '@@0@@% @@1@@%', fromValue: [64.06,63.85]}], position: 500, duration: 0 },
                { id: "eid666675", tween: [ "style", "${_B_LL_d_Bttm}", "-o-transform-origin", [64.06,63.85], { valueTemplate: '@@0@@% @@1@@%', fromValue: [64.06,63.85]}], position: 500, duration: 0 }            ]
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
                    type: 'image',
                    id: 'B_pent_top2',
                    tag: 'img',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Bottom/1/pent_top.png', '0px', '0px']
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
                { id: "eid666676", tween: [ "style", "${_LL_d}", "-moz-transform-origin", [65.72,68.54], { valueTemplate: '@@0@@% @@1@@%', fromValue: [65.72,68.54]}], position: 500, duration: 0 },
                { id: "eid666677", tween: [ "style", "${_LL_d}", "-ms-transform-origin", [65.72,68.54], { valueTemplate: '@@0@@% @@1@@%', fromValue: [65.72,68.54]}], position: 500, duration: 0 },
                { id: "eid666678", tween: [ "style", "${_LL_d}", "msTransformOrigin", [65.72,68.54], { valueTemplate: '@@0@@% @@1@@%', fromValue: [65.72,68.54]}], position: 500, duration: 0 },
                { id: "eid666679", tween: [ "style", "${_LL_d}", "-o-transform-origin", [65.72,68.54], { valueTemplate: '@@0@@% @@1@@%', fromValue: [65.72,68.54]}], position: 500, duration: 0 }            ]
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
                    type: 'image',
                    id: 'B_RL_d_bttm',
                    tag: 'img',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Bottom/1/RL_d_bttm.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'B_RL_up_bttm',
                    tag: 'img',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Bottom/1/RL_up_bttm.png', '0px', '0px']
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
                { id: "eid666680", tween: [ "style", "${_B_RL_d_bttm}", "-moz-transform-origin", [39.06,63.6], { valueTemplate: '@@0@@% @@1@@%', fromValue: [39.06,63.6]}], position: 1000, duration: 0 },
                { id: "eid666681", tween: [ "style", "${_B_RL_d_bttm}", "-ms-transform-origin", [39.06,63.6], { valueTemplate: '@@0@@% @@1@@%', fromValue: [39.06,63.6]}], position: 1000, duration: 0 },
                { id: "eid666682", tween: [ "style", "${_B_RL_d_bttm}", "msTransformOrigin", [39.06,63.6], { valueTemplate: '@@0@@% @@1@@%', fromValue: [39.06,63.6]}], position: 1000, duration: 0 },
                { id: "eid666683", tween: [ "style", "${_B_RL_d_bttm}", "-o-transform-origin", [39.06,63.6], { valueTemplate: '@@0@@% @@1@@%', fromValue: [39.06,63.6]}], position: 1000, duration: 0 },
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
                { id: "eid666684", tween: [ "style", "${_B_RL_d_Bttm2}", "-moz-transform-origin", [42.39,63.36], { valueTemplate: '@@0@@% @@1@@%', fromValue: [42.39,63.36]}], position: 1000, duration: 0 },
                { id: "eid666685", tween: [ "style", "${_B_RL_d_Bttm2}", "-ms-transform-origin", [42.39,63.36], { valueTemplate: '@@0@@% @@1@@%', fromValue: [42.39,63.36]}], position: 1000, duration: 0 },
                { id: "eid666686", tween: [ "style", "${_B_RL_d_Bttm2}", "msTransformOrigin", [42.39,63.36], { valueTemplate: '@@0@@% @@1@@%', fromValue: [42.39,63.36]}], position: 1000, duration: 0 },
                { id: "eid666687", tween: [ "style", "${_B_RL_d_Bttm2}", "-o-transform-origin", [42.39,63.36], { valueTemplate: '@@0@@% @@1@@%', fromValue: [42.39,63.36]}], position: 1000, duration: 0 },
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
                    type: 'image',
                    id: 'B_L_S2',
                    tag: 'img',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Shoes/1/L_S.png', '0px', '0px']
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
                    type: 'image',
                    id: 'B_R_S',
                    tag: 'img',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Shoes/1/R_S.png', '0px', '0px']
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
                { id: "eid666688", tween: [ "style", "${_B_R_S}", "-moz-transform-origin", [39.06,62.86], { valueTemplate: '@@0@@% @@1@@%', fromValue: [39.06,62.86]}], position: 1000, duration: 0 },
                { id: "eid666689", tween: [ "style", "${_B_R_S}", "-ms-transform-origin", [39.06,62.86], { valueTemplate: '@@0@@% @@1@@%', fromValue: [39.06,62.86]}], position: 1000, duration: 0 },
                { id: "eid666690", tween: [ "style", "${_B_R_S}", "msTransformOrigin", [39.06,62.86], { valueTemplate: '@@0@@% @@1@@%', fromValue: [39.06,62.86]}], position: 1000, duration: 0 },
                { id: "eid666691", tween: [ "style", "${_B_R_S}", "-o-transform-origin", [39.06,62.86], { valueTemplate: '@@0@@% @@1@@%', fromValue: [39.06,62.86]}], position: 1000, duration: 0 }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/title.png', '0px', '0px']
                },
                {
                    rect: ['1.2%', '30%', '77.1%', '7%', 'auto', 'auto'],
                    font: ['Palatino Linotype, Book Antigua, Palatino, serif', [1, 'em'], 'rgba(9,9,9,1.00)', '400', 'underline', 'italic'],
                    id: 'ChrName',
                    text: 'TEST TEST TEST TESTTEST TESTTEST TESTTEST TESTTEST TESTTEST TESTTEST TEST',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['2.7%', '14.3%', '94%', '70.7%', 'auto', 'auto'],
                    font: ['abel, sans-serif', [163, '%'], 'rgba(201,166,166,1.00)', '600', 'none', 'italic'],
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
                ["style", "top", '12.17%'],
                ["transform", "scaleY", '1.24456'],
                ["style", "left", '88.25%'],
                ["transform", "scaleX", '1.30395']
            ],
            "${_ChrName}": [
                ["color", "color", 'rgba(9,9,9,1.00)'],
                ["style", "left", '1.15%'],
                ["style", "font-size", '1em'],
                ["style", "top", '30%'],
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
                ["color", "color", 'rgba(9,9,9,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '2.95%'],
                ["style", "width", '94.1%'],
                ["style", "top", '44.1%'],
                ["style", "font-style", 'italic'],
                ["transform", "scaleY", '1.14507'],
                ["style", "overflow", 'auto'],
                ["style", "display", 'block'],
                ["style", "font-family", 'abel, sans-serif'],
                ["style", "height", '52.16%'],
                ["style", "font-size", '125%']
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
                { id: "eid538130", tween: [ "style", "${_DlgText}", "height", '52.16%', { fromValue: '52.16%'}], position: 0, duration: 0 },
                { id: "eid537852", tween: [ "color", "${_DlgText}", "color", 'rgba(9,9,9,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(9,9,9,1.00)'}], position: 0, duration: 0 },
                { id: "eid616792", tween: [ "style", "${_Pause_sym}", "left", '88.25%', { fromValue: '88.25%'}], position: 0, duration: 0 },
                { id: "eid666487", tween: [ "style", "${_DlgText}", "font-size", '125%', { fromValue: '125%'}], position: 0, duration: 0 },
                { id: "eid426481", tween: [ "style", "${_board}", "top", '17.03%', { fromValue: '17.03%'}], position: 0, duration: 0 },
                { id: "eid616790", tween: [ "transform", "${_Pause_sym}", "scaleX", '1.30395', { fromValue: '1.30395'}], position: 0, duration: 0 },
                { id: "eid448009", tween: [ "style", "${_board}", "height", '99.73%', { fromValue: '99.73%'}], position: 0, duration: 0 },
                { id: "eid546899", tween: [ "transform", "${_DlgText}", "scaleY", '1.14507', { fromValue: '1.14507'}], position: 0, duration: 0 },
                { id: "eid222934", tween: [ "style", "${_DlgText}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid616791", tween: [ "transform", "${_Pause_sym}", "scaleY", '1.24456', { fromValue: '1.24456'}], position: 0, duration: 0 },
                { id: "eid616793", tween: [ "style", "${_Pause_sym}", "top", '12.17%', { fromValue: '12.17%'}], position: 0, duration: 0 },
                { id: "eid354022", tween: [ "style", "${_board}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid546900", tween: [ "style", "${_DlgText}", "left", '2.95%', { fromValue: '2.95%'}], position: 0, duration: 0 },
                { id: "eid538131", tween: [ "style", "${_DlgText}", "width", '94.1%', { fromValue: '94.1%'}], position: 0, duration: 0 },
                { id: "eid448221", tween: [ "style", "${_board}", "width", '100%', { fromValue: '100%'}], position: 0, duration: 0 },
                { id: "eid546901", tween: [ "style", "${_DlgText}", "top", '44.1%', { fromValue: '44.1%'}], position: 0, duration: 0 }            ]
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
                    rect: ['28.6%', '0.9%', '135.2%', '111.9%', 'auto', 'auto'],
                    id: 'reply',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/rerun.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '9.03%'],
                ["style", "width", '11.92%']
            ],
            "${_reply}": [
                ["style", "top", '-5.96%'],
                ["transform", "scaleY", '0.89334'],
                ["style", "height", '111.89%'],
                ["transform", "scaleX", '0.94175'],
                ["style", "display", 'block'],
                ["style", "left", '-3.08%'],
                ["style", "width", '106.06%']
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
                    fill: ['rgba(0,0,0,0)', 'images/sweethome.png', '0px', '0px']
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
                    type: 'image',
                    display: 'block',
                    rect: ['-0.1%', '0%', '135.6%', '112.7%', 'auto', 'auto'],
                    id: 'seting',
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
                    rect: ['-17.5%', '0%', '135.3%', '100%', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['-0.96485']],
                    id: 'back',
                    type: 'image',
                    display: 'none',
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
                    rect: ['0%', '15.6%', '100%', '68.9%', 'auto', 'auto'],
                    id: 'board',
                    transform: [[0, 0], [], [], ['1', '1.45142']],
                    type: 'image',
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
                    type: 'image',
                    display: 'block',
                    rect: ['14.3%', '0%', '135.6%', '112.7%', 'auto', 'auto'],
                    id: 'home',
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
                    transform: [[0, 0], [], [], ['-0.96485']],
                    type: 'image',
                    id: 'back',
                    display: 'block',
                    rect: ['-17.5%', '0%', '135.3%', '100%', 'auto', 'auto'],
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
                    transform: [[0, 0], [], [], ['0.17461', '0.16339']],
                    type: 'image',
                    id: 'play',
                    display: 'block',
                    rect: ['-225.2%', '-293.7%', '683.2%', '700.7%', 'auto', 'auto'],
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
                    transform: [[0, 0], [], [], ['1', '1.45142']],
                    id: 'board',
                    type: 'image',
                    rect: ['0%', '15.6%', '100%', '68.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/title.png', '0px', '0px']
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
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    id: 'Rectangle',
                    opacity: 0.81300813492721,
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
                    align: 'left',
                    id: 'Text3',
                    text: 'Chapter Starts:',
                    display: 'none',
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
                    rect: ['5.4%', '21.5%', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Back_sym'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['27.2%', '75.8%', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Setting_sym'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['42%', '75.8%', 'auto', 'auto', 'auto', 'auto'],
                    id: 'home_sym'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['57.4%', '75.8%', 'auto', 'auto', 'auto', 'auto'],
                    id: 'replay_sym'
                },
                {
                    font: ['alexa-std, sans-serif', [150, '%'], 'rgba(255,3,3,1)', '700', 'underline', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'ChpNo',
                    text: 'Chapter 1',
                    display: 'block',
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
                    rect: ['-225.2%', '-293.7%', '683.2%', '700.7%', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.17461', '0.16339']],
                    id: 'play',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/run.png', '0px', '0px']
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
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'first_screen',
                    fill: ['rgba(0,0,0,0)', 'images/bg/starting.png', '0px', '0px'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    id: 'play',
                    type: 'image',
                    rect: ['65.7%', '45.8%', '34.2%', '21.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/run.png', '0px', '0px']
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
                ["style", "top", '45.78%'],
                ["style", "height", '21.56%'],
                ["style", "left", '65.75%'],
                ["style", "width", '34.22%']
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
                    font: ['alice, serif', [187.5, '%'], 'rgba(249,242,237,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'Text3',
                    text: 'Scene 1,Take 1-',
                    display: 'block',
                    rect: ['4.8%', '47.7%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['alice, serif', [250, '%'], 'rgba(112,236,17,1.00)', '400', 'underline', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'Text4',
                    text: 'The College Campus.',
                    display: 'block',
                    rect: ['38.6%', '46.9%', 'auto', 'auto', 'auto', 'auto']
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
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'board',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/bblack.png', '0px', '0px']
                },
                {
                    rect: ['-4.2%', '65.9%', '31.3%', '20.8%', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.58974', '0.64102']],
                    type: 'image',
                    id: 'lockCopy',
                    opacity: 0.52136752136752,
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/lock.gif', '0px', '0px']
                },
                {
                    rect: ['15.3%', '23.7%', '78.1%', '29.3%', 'auto', 'auto'],
                    transform: [[0, 0], [], ['0', '3'], ['1.46132', '4.72212']],
                    id: 'gif',
                    opacity: 0.39316240156818,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/gif.gif', '0%', '0%']
                },
                {
                    rect: ['0%', '2.1%', '100%', '100%', 'auto', 'auto'],
                    id: 'silhoute',
                    opacity: 0.89743590915305,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/Untitled-2.png', '0px', '0px']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', [187.5, '%'], 'rgba(204,165,165,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'BSTxt',
                    text: 'Hi',
                    display: 'block',
                    rect: ['0%', '0%', '100%', '99.3%', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_silhoute}": [
                ["style", "top", '2.12%'],
                ["style", "opacity", '0.89743590915305'],
                ["style", "left", '0%']
            ],
            "${_lockCopy}": [
                ["style", "top", '66.63%'],
                ["transform", "scaleY", '0.64102'],
                ["transform", "scaleX", '0.58974'],
                ["style", "opacity", '0.52136752136752'],
                ["style", "left", '75.91%'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ],
            "${_BSTxt}": [
                ["color", "color", 'rgba(251,244,244,1.00)'],
                ["style", "left", '0.01%'],
                ["style", "font-size", '150%'],
                ["style", "top", '26.56%'],
                ["transform", "scaleY", '1.3524'],
                ["style", "overflow", 'auto'],
                ["style", "display", 'block'],
                ["style", "height", '44%'],
                ["style", "width", '100%'],
                ["transform", "scaleX", '0.85576']
            ],
            "${_board}": [
                ["style", "top", '0%'],
                ["style", "height", '100%'],
                ["style", "display", 'block'],
                ["style", "left", '0%'],
                ["style", "width", '100%']
            ],
            "${_gif}": [
                ["style", "top", '23.65%'],
                ["transform", "skewY", '2.81deg'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1.46132'],
                ["style", "opacity", '0.39316240156818'],
                ["style", "left", '15.34%'],
                ["transform", "scaleY", '4.72212']
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
                { id: "eid537851", tween: [ "color", "${_BSTxt}", "color", 'rgba(251,244,244,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(251,244,244,1.00)'}], position: 0, duration: 0 },
                { id: "eid506771", tween: [ "transform", "${_BSTxt}", "scaleY", '1.3524', { fromValue: '1.3524'}], position: 0, duration: 0 },
                { id: "eid507385", tween: [ "style", "${_lockCopy}", "left", '75.91%', { fromValue: '75.91%'}], position: 0, duration: 0 },
                { id: "eid430917", tween: [ "style", "${_BSTxt}", "height", '44%', { fromValue: '44%'}], position: 0, duration: 0 },
                { id: "eid506224", tween: [ "style", "${_lockCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid299352", tween: [ "style", "${_board}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid506769", tween: [ "transform", "${_BSTxt}", "scaleX", '0.85576', { fromValue: '0.85576'}], position: 0, duration: 0 },
                { id: "eid299353", tween: [ "style", "${_BSTxt}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid430918", tween: [ "style", "${_BSTxt}", "top", '26.56%', { fromValue: '26.56%'}], position: 0, duration: 0 },
                { id: "eid507386", tween: [ "style", "${_lockCopy}", "top", '66.63%', { fromValue: '66.63%'}], position: 0, duration: 0 }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/bblack.png', '0px', '0px']
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
                    font: ['alex-brush, cursive', [187.5, '%'], 'rgba(20,243,34,1.00)', '400', 'none', 'normal'],
                    display: 'block',
                    id: 'Text9',
                    text: 'Game Paused',
                    align: 'justify',
                    type: 'text'
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'GP_setting',
                    rect: ['-47.6%', '666.7%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'GP_Home',
                    type: 'rect',
                    rect: ['-1.3%', '666.7%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'GP_Replay',
                    rect: ['44.5%', '666.7%', 'auto', 'auto', 'auto', 'auto']
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
                ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '2.01435'],
                ["transform", "scaleX", '1.83748'],
                ["style", "left", '80.35%'],
                ["style", "top", '713.89%']
            ],
            "${symbolSelector}": [
                ["style", "height", '3.75%'],
                ["style", "width", '35.79%']
            ],
            "${_Text9}": [
                ["style", "width", '229px'],
                ["transform", "rotateZ", '0deg'],
                ["color", "color", 'rgba(188,115,21,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '-29.25%'],
                ["style", "font-size", '300%'],
                ["style", "top", '-16.16%'],
                ["style", "height", '36px'],
                ["style", "text-align", 'justify'],
                ["style", "display", 'block'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'alex-brush, cursive'],
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
                ["style", "top", '713.89%'],
                ["transform", "scaleY", '2.01435'],
                ["style", "left", '-9.61%'],
                ["transform", "scaleX", '1.83748']
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
                { id: "eid615251", tween: [ "style", "${_GP_Play}", "left", '80.35%', { fromValue: '80.35%'}], position: 0, duration: 0 },
                { id: "eid455734", tween: [ "style", "${_Text9}", "font-size", '300%', { fromValue: '300%'}], position: 0, duration: 0 },
                { id: "eid615558", tween: [ "style", "${_GP_Home}", "top", '713.89%', { fromValue: '713.89%'}], position: 0, duration: 0 },
                { id: "eid615240", tween: [ "transform", "${_GP_Home}", "scaleX", '1.83748', { fromValue: '1.83748'}], position: 0, duration: 0 },
                { id: "eid445037", tween: [ "style", "${_GP_setting}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid615245", tween: [ "transform", "${_GP_Play}", "scaleY", '2.01435', { fromValue: '2.01435'}], position: 0, duration: 0 },
                { id: "eid615241", tween: [ "transform", "${_GP_Home}", "scaleY", '2.01435', { fromValue: '2.01435'}], position: 0, duration: 0 },
                { id: "eid615557", tween: [ "style", "${_GP_Play}", "top", '713.89%', { fromValue: '713.89%'}], position: 0, duration: 0 },
                { id: "eid300285", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid467655", tween: [ "style", "${_GP_Play}", "-webkit-transform-origin", [100,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,50]}], position: 0, duration: 0 },
                { id: "eid666692", tween: [ "style", "${_GP_Play}", "-moz-transform-origin", [100,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,50]}], position: 0, duration: 0 },
                { id: "eid666693", tween: [ "style", "${_GP_Play}", "-ms-transform-origin", [100,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,50]}], position: 0, duration: 0 },
                { id: "eid666694", tween: [ "style", "${_GP_Play}", "msTransformOrigin", [100,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,50]}], position: 0, duration: 0 },
                { id: "eid666695", tween: [ "style", "${_GP_Play}", "-o-transform-origin", [100,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,50]}], position: 0, duration: 0 },
                { id: "eid445036", tween: [ "style", "${_GP_setting}", "top", '669.44%', { fromValue: '669.44%'}], position: 0, duration: 0 },
                { id: "eid465217", tween: [ "style", "${_Text9}", "top", '-16.16%', { fromValue: '-16.16%'}], position: 0, duration: 0 },
                { id: "eid445038", tween: [ "style", "${_GP_Replay}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid304916", tween: [ "transform", "${_Text9}", "scaleX", '0.863', { fromValue: '0.863'}], position: 0, duration: 0 },
                { id: "eid615244", tween: [ "transform", "${_GP_Play}", "scaleX", '1.83748', { fromValue: '1.83748'}], position: 0, duration: 0 },
                { id: "eid615250", tween: [ "style", "${_GP_Home}", "left", '-9.61%', { fromValue: '-9.61%'}], position: 0, duration: 0 },
                { id: "eid445035", tween: [ "style", "${_GP_setting}", "left", '-49.19%', { fromValue: '-49.19%'}], position: 0, duration: 0 },
                { id: "eid658544", tween: [ "style", "${_Text9}", "left", '-29.25%', { fromValue: '-29.25%'}], position: 0, duration: 0 },
                { id: "eid658543", tween: [ "color", "${_Text9}", "color", 'rgba(188,115,21,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(188,115,21,1.00)'}], position: 0, duration: 0 }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/sweethome.png', '0px', '0px']
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
                    fill: ['rgba(0,0,0,0)', 'images/rerun.png', '0px', '0px']
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
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'play',
                    opacity: 0.7264957458545,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/run.png', '0px', '0px']
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
                    fill: ['rgba(0,0,0,0)', 'images/bblack.png', '0px', '0px']
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
            "${_Replay_complete}": [
                ["style", "opacity", '0.71544715447154']
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
                    fill: ['rgba(0,0,0,0)', 'images/rerun.png', '0px', '0px']
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
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'Mobile_hand',
                    fill: ['rgba(0,0,0,0)', 'images/2/Bdy/mobileHand.png', '0px', '0px'],
                    type: 'image',
                    tag: 'img'
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
                    id: 'leftHU',
                    rect: ['37.8%', '-1.7%', '69.4%', '56.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Bdy/leftHU.png', '0px', '0px']
                },
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'leftHd',
                    rect: ['-8.2%', '37.4%', '115.3%', '66.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Bdy/leftHd.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_leftHd}": [
                ["style", "top", '38.74%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "left", '-9.18%'],
                ["style", "-webkit-transform-origin", [76.23,8.7], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [76.23,8.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [76.23,8.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [76.23,8.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [76.23,8.7],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${symbolSelector}": [
                ["style", "height", '65.94%'],
                ["style", "width", '27.85%']
            ],
            "${_leftHU}": [
                ["style", "top", '-1.66%'],
                ["style", "display", 'block'],
                ["style", "left", '37.76%'],
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
                { id: "eid583365", tween: [ "style", "${_leftHd}", "-webkit-transform-origin", [76.23,8.7], { valueTemplate: '@@0@@% @@1@@%', fromValue: [76.23,8.7]}], position: 1000, duration: 0 },
                { id: "eid666696", tween: [ "style", "${_leftHd}", "-moz-transform-origin", [76.23,8.7], { valueTemplate: '@@0@@% @@1@@%', fromValue: [76.23,8.7]}], position: 1000, duration: 0 },
                { id: "eid666697", tween: [ "style", "${_leftHd}", "-ms-transform-origin", [76.23,8.7], { valueTemplate: '@@0@@% @@1@@%', fromValue: [76.23,8.7]}], position: 1000, duration: 0 },
                { id: "eid666698", tween: [ "style", "${_leftHd}", "msTransformOrigin", [76.23,8.7], { valueTemplate: '@@0@@% @@1@@%', fromValue: [76.23,8.7]}], position: 1000, duration: 0 },
                { id: "eid666699", tween: [ "style", "${_leftHd}", "-o-transform-origin", [76.23,8.7], { valueTemplate: '@@0@@% @@1@@%', fromValue: [76.23,8.7]}], position: 1000, duration: 0 },
                { id: "eid583361", tween: [ "transform", "${_leftHU}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid583363", tween: [ "transform", "${_leftHd}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid583364", tween: [ "transform", "${_leftHd}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 1000, duration: 1000 },
                { id: "eid583359", tween: [ "style", "${_leftHU}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid583358", tween: [ "style", "${_leftHd}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/2/hairstyle/0/hair1.png', '0px', '0px'],
                    id: 'hair1',
                    rect: ['-2.4%', '16.2%', '100%', '100%', 'auto', 'auto'],
                    display: 'block',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hair1}": [
                ["style", "top", '15.56%'],
                ["style", "left", '-8.48%'],
                ["style", "display", 'block']
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
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid553694", tween: [ "style", "${_hair1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
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
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'rightS3',
                    rect: ['-3.9%', '-17.9%', '141.7%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/sneakers/0/rightS.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_rightS3}": [
                ["style", "-webkit-transform-origin", [76.47,40.83], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [76.47,40.83],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [76.47,40.83],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [76.47,40.83],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [76.47,40.83],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '2deg'],
                ["style", "display", 'block'],
                ["style", "left", '-15.28%'],
                ["style", "top", '-22.08%']
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
                { id: "eid593981", tween: [ "style", "${_rightS3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
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
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'leftbrow',
                    rect: ['48%', '71.8%', '42%', '33.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/faces/0/leftbrow.png', '0px', '0px']
                },
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'rightBrow',
                    rect: ['22.9%', '73.1%', '31.3%', '32.1%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/faces/0/rightBrow.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_rightBrow}": [
                ["style", "top", '73.08%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "left", '22.9%'],
                ["style", "-webkit-transform-origin", [72.92,69.24], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [72.92,69.24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [72.92,69.24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [72.92,69.24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [72.92,69.24],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_leftbrow}": [
                ["style", "top", '68.27%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "left", '48.03%'],
                ["style", "-webkit-transform-origin", [13.73,56.89], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [13.73,56.89],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [13.73,56.89],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [13.73,56.89],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [13.73,56.89],{valueTemplate:'@@0@@% @@1@@%'}]
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
                { id: "eid660633", tween: [ "transform", "${_leftbrow}", "rotateZ", '-9deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid660634", tween: [ "transform", "${_leftbrow}", "rotateZ", '0deg', { fromValue: '-9deg'}], position: 1000, duration: 1000 },
                { id: "eid543247", tween: [ "style", "${_rightBrow}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid660616", tween: [ "style", "${_rightBrow}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid660627", tween: [ "style", "${_leftbrow}", "-webkit-transform-origin", [13.73,56.89], { valueTemplate: '@@0@@% @@1@@%', fromValue: [13.73,56.89]}], position: 1000, duration: 0 },
                { id: "eid666700", tween: [ "style", "${_leftbrow}", "-moz-transform-origin", [13.73,56.89], { valueTemplate: '@@0@@% @@1@@%', fromValue: [13.73,56.89]}], position: 1000, duration: 0 },
                { id: "eid666701", tween: [ "style", "${_leftbrow}", "-ms-transform-origin", [13.73,56.89], { valueTemplate: '@@0@@% @@1@@%', fromValue: [13.73,56.89]}], position: 1000, duration: 0 },
                { id: "eid666702", tween: [ "style", "${_leftbrow}", "msTransformOrigin", [13.73,56.89], { valueTemplate: '@@0@@% @@1@@%', fromValue: [13.73,56.89]}], position: 1000, duration: 0 },
                { id: "eid666703", tween: [ "style", "${_leftbrow}", "-o-transform-origin", [13.73,56.89], { valueTemplate: '@@0@@% @@1@@%', fromValue: [13.73,56.89]}], position: 1000, duration: 0 },
                { id: "eid543246", tween: [ "style", "${_leftbrow}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid660617", tween: [ "style", "${_leftbrow}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid660623", tween: [ "transform", "${_rightBrow}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid660624", tween: [ "transform", "${_rightBrow}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2000, duration: 0 }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/2/faces/0/faces.png', '0px', '0px'],
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
                    rect: ['31.1%', '32.9%', '68.9%', '67.1%', 'auto', 'auto'],
                    id: 'LL_d_Bttm',
                    fill: ['rgba(0,0,0,0)', 'images/2/Bdy/leftLD.png', '0px', '0px'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['0%', '0%', '90%', '45%', 'auto', 'auto'],
                    id: 'LL_up_Bttm',
                    fill: ['rgba(0,0,0,0)', 'images/2/Bdy/leftLU.png', '0px', '0px'],
                    type: 'image',
                    tag: 'img'
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
                    fill: ['rgba(0,0,0,0)', 'images/2/Bdy/handBye.png', '0px', '0px']
                },
                {
                    type: 'image',
                    tag: 'img',
                    display: 'none',
                    id: 'B_Hand_on_lips_2',
                    rect: ['32.7%', '32.1%', '20.2%', '34.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Bdy/rHU.png', '0px', '0px']
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
                    id: 'B_RH_EX_DWn',
                    rect: ['8.8%', '51.1%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'B_Hand_On_Lips_TS_1',
                    rect: ['31%', '29.5%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'block',
                    type: 'rect',
                    id: 'B_RH_TS_DWN',
                    rect: ['27.3%', '54.2%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'B_HAND_WOW',
                    rect: ['38.6%', '21.2%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'Shirt',
                    tag: 'img',
                    rect: ['21.6%', '9.8%', '81.5%', '88.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Shirt/0/Shirt.png', '0px', '0px']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'B_WOW_HAND_TS_1',
                    rect: ['31.8%', '28.6%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['2.6%', '29%', '39.8%', '38%', 'auto', 'auto'],
                    id: 'handWow',
                    fill: ['rgba(0,0,0,0)', 'images/2/Bdy/handWow.png', '0px', '0px']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'B_WOW_HAND_DWn',
                    rect: ['19.3%', '38.7%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'B_LH_Explaining_exp',
                    rect: ['58%', '30.8%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'B_LH_Exp_TS_dwn',
                    rect: ['69%', '47.2%', 'auto', 'auto', 'auto', 'auto']
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
                    display: 'block',
                    type: 'rect',
                    id: 'B_LH_TS_DWn',
                    rect: ['75%', '55.9%', 'auto', 'auto', 'auto', 'auto']
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
                    id: 'B_Hand_on_lips_dwn_TS',
                    rect: ['31.8%', '32.8%', 'auto', 'auto', 'auto', 'auto']
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
                    fill: ['rgba(0,0,0,0)', 'images/2/mobile/mB/0/Ph.png', '0px', '0px']
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
                    id: 'B_hand_on_cheeks',
                    rect: ['60.5%', '13.1%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'B_hand_on_cheeks_TS',
                    rect: ['61.1%', '19.9%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'B_Mobile_hand_TS_1',
                    rect: ['58%', '28%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'B_hand_on_waist',
                    rect: ['72.2%', '33.8%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'B_HAnd_on_waist_TS',
                    rect: ['67.3%', '27.7%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'B_hand_on_V',
                    rect: ['55.1%', '14.9%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'B_hand_on_V_TS',
                    rect: ['62.8%', '22.1%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'B_hand_N_CHEST',
                    rect: ['49.7%', '27.7%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'B_Hand_on_chest_TS',
                    rect: ['58.5%', '22.9%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    rect: ['18px', '-67px', '400px', '939px', 'auto', 'auto'],
                    id: '_12',
                    opacity: 0.35042735042735,
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/12.png', '0px', '0px']
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
                id: 'B_hand_on_cheeks',
                symbolName: 'B_hand_on_cheeks',
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
                id: 'B_Folding_hand',
                symbolName: 'B_Folding_hand',
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
                id: 'B_Hand_on_chest_TS',
                symbolName: 'B_Hand_on_chest_TS',
                autoPlay: {

               }
            },
            {
                id: 'B_hand_N_CHEST',
                symbolName: 'B_hand_N_CHEST',
                autoPlay: {

               }
            },
            {
                id: 'B_hand_on_V_TS',
                symbolName: 'B_hand_on_V_TS',
                autoPlay: {

               }
            },
            {
                id: 'B_hand_on_V',
                symbolName: 'B_hand_on_V',
                autoPlay: {

               }
            },
            {
                id: 'B_LH_Exp_TS_dwn',
                symbolName: 'B_LH_Exp_dwn',
                autoPlay: {

               }
            },
            {
                id: 'B_RH_TS_DWN',
                symbolName: 'B_RH_TS_DWN',
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
                id: 'B_WOW_HAND_DWn',
                symbolName: 'B_WOW_HAND_DWn',
                autoPlay: {

               }
            },
            {
                id: 'B_RH',
                symbolName: 'B_RH',
                autoPlay: {

               }
            },
            {
                id: 'B_Hand_on_lips_dwn_TS',
                symbolName: 'B_Hand_on_lips_dwn_TS',
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
                id: 'B_Mobile_hand',
                symbolName: 'B_Mobile_hand',
                autoPlay: {

               }
            },
            {
                id: 'B_hand_on_cheeks_TS',
                symbolName: 'B_hand_on_cheeks_TS',
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
                id: 'B_HAND_WOW',
                symbolName: 'B_HAND_WOW',
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
                id: 'B_Bye_hand',
                symbolName: 'B_Bye_hand',
                autoPlay: {

               }
            },
            {
                id: 'B_hand_on_waist',
                symbolName: 'B_hand_on_waist',
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
                id: 'B_RH_EX_DWn',
                symbolName: 'B_RH_EX_DWn',
                autoPlay: {

               }
            },
            {
                id: 'B_LH_TS_DWn',
                symbolName: 'B_LH_TS_DWn',
                autoPlay: {

               }
            },
            {
                id: 'B_HAnd_on_waist_TS',
                symbolName: 'HAnd_on_waist_TS',
                autoPlay: {

               }
            },
            {
                id: 'B_Hand_On_Lips',
                symbolName: 'B_Hand_On_Lips',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_B_Bye_TS_1}": [
                ["style", "top", '28.17%'],
                ["style", "left", '31.82%'],
                ["style", "display", 'none']
            ],
            "${_Shirt}": [
                ["style", "left", '21.59%'],
                ["style", "top", '9.83%']
            ],
            "${_B_LH_Explaining_exp}": [
                ["style", "top", '32.31%'],
                ["style", "left", '57.1%'],
                ["style", "display", 'none']
            ],
            "${_B_hand_N_CHEST}": [
                ["style", "display", 'none'],
                ["style", "top", '29.26%']
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
                ["style", "top", '29.92%'],
                ["style", "left", '32.95%'],
                ["style", "display", 'none']
            ],
            "${_B1_Folding_hand_Ts_1}": [
                ["style", "top", '27.73%'],
                ["style", "left", '22.73%'],
                ["style", "display", 'none']
            ],
            "${__12}": [
                ["style", "top", '-67px'],
                ["style", "opacity", '0.35042735042735'],
                ["style", "left", '18px'],
                ["style", "display", 'none']
            ],
            "${_B_RH}": [
                ["style", "top", '32.1%'],
                ["style", "left", '34.09%'],
                ["style", "display", 'block']
            ],
            "${_B_hand_on_V}": [
                ["style", "display", 'none']
            ],
            "${_B_hand_on_cheeks_TS}": [
                ["style", "display", 'none'],
                ["style", "left", '62.5%']
            ],
            "${_B_Folding_hand}": [
                ["style", "top", '32.53%'],
                ["style", "left", '27.27%'],
                ["style", "display", 'none']
            ],
            "${_B_Hand_On_Lips_TS_1}": [
                ["style", "top", '28.6%'],
                ["style", "left", '30.11%'],
                ["style", "display", 'none']
            ],
            "${_handWow}": [
                ["style", "top", '29.04%'],
                ["style", "left", '2.56%'],
                ["style", "display", 'none']
            ],
            "${_B_hand_on_cheeks}": [
                ["style", "top", '12.36%'],
                ["transform", "scaleY", '1.02836'],
                ["style", "display", 'none'],
                ["style", "left", '59.04%'],
                ["transform", "scaleX", '1.08158']
            ],
            "${_B_RH_EXPLAINING_Exp}": [
                ["style", "top", '33.84%'],
                ["style", "left", '0.28%'],
                ["style", "display", 'none']
            ],
            "${_B_LH_Exp_TS_dwn}": [
                ["style", "display", 'none']
            ],
            "${_B_Mobile_hand_TS_1}": [
                ["style", "top", '27.95%'],
                ["style", "left", '57.1%'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '48.57%'],
                ["style", "width", '100%']
            ],
            "${_B_RH_TS_DWN}": [
                ["style", "-webkit-transform-origin", [50.35,34.05], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50.35,34.05],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50.35,34.05],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50.35,34.05],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50.35,34.05],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '51.31%'],
                ["style", "left", '26.42%'],
                ["style", "display", 'block']
            ],
            "${_B_Bye_hand}": [
                ["style", "top", '25.98%'],
                ["style", "opacity", '1'],
                ["style", "left", '11.65%'],
                ["style", "display", 'none']
            ],
            "${_B_Hand_On_Lips}": [
                ["style", "display", 'none'],
                ["style", "top", '17.87%'],
                ["style", "left", '27.34%'],
                ["transform", "rotateZ", '4deg']
            ],
            "${_B_HAND_WOW}": [
                ["style", "top", '32.97%'],
                ["style", "left", '4.55%'],
                ["style", "display", 'none']
            ],
            "${_Hand_on_bye}": [
                ["style", "top", '21.18%'],
                ["style", "left", '38.64%'],
                ["style", "display", 'none']
            ],
            "${_B_Mobile_hand}": [
                ["style", "top", '11.79%'],
                ["style", "left", '58.81%'],
                ["style", "display", 'none']
            ],
            "${_B_WOW_HAND_DWn}": [
                ["style", "top", '37.77%'],
                ["transform", "rotateZ", '3deg'],
                ["transform", "scaleX", '1.16008'],
                ["style", "display", 'none'],
                ["style", "left", '21.45%'],
                ["style", "-webkit-transform-origin", [72.23,86.19], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [72.23,86.19],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [72.23,86.19],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [72.23,86.19],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [72.23,86.19],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_B_LH_TS_1}": [
                ["style", "top", '22.05%'],
                ["style", "left", '73.86%'],
                ["style", "display", 'block']
            ],
            "${_B_RH_TS_1}": [
                ["transform", "scaleX", '1.03797'],
                ["style", "display", 'block'],
                ["style", "left", '30.11%'],
                ["style", "top", '27.29%']
            ],
            "${_B_Hand_on_chest_TS}": [
                ["style", "top", '24.45%'],
                ["style", "left", '57.67%'],
                ["style", "display", 'none']
            ],
            "${_B_hand_on_V_TS}": [
                ["style", "display", 'none'],
                ["style", "left", '61.92%'],
                ["style", "top", '21.4%']
            ],
            "${_B_LH_TS_DWn}": [
                ["style", "top", '56.77%'],
                ["style", "left", '74.72%'],
                ["style", "display", 'block']
            ],
            "${_B_hand_on_waist}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '75.28%'],
                ["style", "top", '30.57%']
            ],
            "${_B1_Mobile}": [
                ["style", "top", '2.84%'],
                ["style", "left", '49.72%'],
                ["style", "display", 'none']
            ],
            "${_B_HAnd_on_waist_TS}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '64.77%'],
                ["style", "top", '14.63%']
            ],
            "${_B_RH_EX_DWn}": [
                ["style", "display", 'none'],
                ["style", "left", '14.49%'],
                ["style", "top", '49.99%']
            ],
            "${_B_Hand_on_lips_dwn_TS}": [
                ["style", "display", 'none'],
                ["style", "top", '35.33%'],
                ["style", "left", '27.84%'],
                ["transform", "rotateZ", '3deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 120000,
            autoPlay: true,
            timeline: [
                { id: "eid433", tween: [ "style", "${_B_Mobile_hand}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid493", tween: [ "style", "${_B_Mobile_hand}", "display", 'none', { fromValue: 'none'}], position: 23000, duration: 0 },
                { id: "eid492572", tween: [ "style", "${_B_Mobile_hand}", "display", 'none', { fromValue: 'none'}], position: 27000, duration: 0 },
                { id: "eid517275", tween: [ "style", "${_B_Mobile_hand}", "display", 'block', { fromValue: 'none'}], position: 39000, duration: 0 },
                { id: "eid447", tween: [ "style", "${_B_Bye_hand}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid640421", tween: [ "style", "${_B_WOW_HAND_DWn}", "-webkit-transform-origin", [72.23,86.19], { valueTemplate: '@@0@@% @@1@@%', fromValue: [72.23,86.19]}], position: 9000, duration: 0 },
                { id: "eid666704", tween: [ "style", "${_B_WOW_HAND_DWn}", "-moz-transform-origin", [72.23,86.19], { valueTemplate: '@@0@@% @@1@@%', fromValue: [72.23,86.19]}], position: 9000, duration: 0 },
                { id: "eid666705", tween: [ "style", "${_B_WOW_HAND_DWn}", "-ms-transform-origin", [72.23,86.19], { valueTemplate: '@@0@@% @@1@@%', fromValue: [72.23,86.19]}], position: 9000, duration: 0 },
                { id: "eid666706", tween: [ "style", "${_B_WOW_HAND_DWn}", "msTransformOrigin", [72.23,86.19], { valueTemplate: '@@0@@% @@1@@%', fromValue: [72.23,86.19]}], position: 9000, duration: 0 },
                { id: "eid666707", tween: [ "style", "${_B_WOW_HAND_DWn}", "-o-transform-origin", [72.23,86.19], { valueTemplate: '@@0@@% @@1@@%', fromValue: [72.23,86.19]}], position: 9000, duration: 0 },
                { id: "eid441", tween: [ "style", "${_B_RH_TS_1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid459", tween: [ "style", "${_B_RH_TS_1}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0 },
                { id: "eid461", tween: [ "style", "${_B_RH_TS_1}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
                { id: "eid463", tween: [ "style", "${_B_RH_TS_1}", "display", 'none', { fromValue: 'block'}], position: 9000, duration: 0 },
                { id: "eid469", tween: [ "style", "${_B_RH_TS_1}", "display", 'block', { fromValue: 'none'}], position: 11000, duration: 0 },
                { id: "eid473", tween: [ "style", "${_B_RH_TS_1}", "display", 'block', { fromValue: 'block'}], position: 15000, duration: 0 },
                { id: "eid485", tween: [ "style", "${_B_RH_TS_1}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
                { id: "eid489", tween: [ "style", "${_B_RH_TS_1}", "display", 'block', { fromValue: 'none'}], position: 22000, duration: 0 },
                { id: "eid486967", tween: [ "style", "${_B_Bye_hand}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid449", tween: [ "style", "${_B_Hand_on_lips_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid454", tween: [ "style", "${_B_Hand_on_lips_2}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid457", tween: [ "style", "${_B_Hand_on_lips_2}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
                { id: "eid440", tween: [ "style", "${_B_LH}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid474", tween: [ "style", "${_B_LH}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
                { id: "eid476", tween: [ "style", "${_B_LH}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0 },
                { id: "eid483", tween: [ "style", "${_B_LH}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
                { id: "eid487", tween: [ "style", "${_B_LH}", "display", 'block', { fromValue: 'none'}], position: 22000, duration: 0 },
                { id: "eid839", tween: [ "style", "${_B_LH}", "display", 'block', { fromValue: 'block'}], position: 23000, duration: 0 },
                { id: "eid492574", tween: [ "style", "${_B_LH}", "display", 'none', { fromValue: 'block'}], position: 27000, duration: 0 },
                { id: "eid492578", tween: [ "style", "${_B_LH}", "display", 'block', { fromValue: 'none'}], position: 29000, duration: 0 },
                { id: "eid494138", tween: [ "style", "${_B_LH}", "display", 'none', { fromValue: 'block'}], position: 30000, duration: 0 },
                { id: "eid494861", tween: [ "style", "${_B_LH}", "display", 'block', { fromValue: 'none'}], position: 32000, duration: 0 },
                { id: "eid495056", tween: [ "style", "${_B_LH}", "display", 'none', { fromValue: 'block'}], position: 33000, duration: 0 },
                { id: "eid494148", tween: [ "style", "${_B_LH}", "display", 'block', { fromValue: 'none'}], position: 35000, duration: 0 },
                { id: "eid494151", tween: [ "style", "${_B_LH}", "display", 'none', { fromValue: 'block'}], position: 36000, duration: 0 },
                { id: "eid517269", tween: [ "style", "${_B_LH}", "display", 'block', { fromValue: 'none'}], position: 38000, duration: 0 },
                { id: "eid517272", tween: [ "style", "${_B_LH}", "display", 'none', { fromValue: 'block'}], position: 39000, duration: 0 },
                { id: "eid451", tween: [ "style", "${_Hand_on_bye}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid641084", tween: [ "style", "${_B_Folding_hand}", "top", '32.53%', { fromValue: '32.53%'}], position: 20000, duration: 0 },
                { id: "eid432", tween: [ "style", "${_B_Mobile_hand_TS_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid492", tween: [ "style", "${_B_Mobile_hand_TS_1}", "display", 'none', { fromValue: 'none'}], position: 23000, duration: 0 },
                { id: "eid492571", tween: [ "style", "${_B_Mobile_hand_TS_1}", "display", 'none', { fromValue: 'none'}], position: 27000, duration: 0 },
                { id: "eid517273", tween: [ "style", "${_B_Mobile_hand_TS_1}", "display", 'block', { fromValue: 'none'}], position: 39000, duration: 0 },
                { id: "eid436", tween: [ "style", "${_B1_Folding_hand_Ts_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid480", tween: [ "style", "${_B1_Folding_hand_Ts_1}", "display", 'block', { fromValue: 'none'}], position: 20000, duration: 0 },
                { id: "eid490", tween: [ "style", "${_B1_Folding_hand_Ts_1}", "display", 'none', { fromValue: 'block'}], position: 22000, duration: 0 },
                { id: "eid488285", tween: [ "style", "${_B_Hand_on_lips_2}", "top", '32.1%', { fromValue: '32.1%'}], position: 0, duration: 0 },
                { id: "eid584131", tween: [ "style", "${__12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid492591", tween: [ "style", "${_B_hand_N_CHEST}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid494141", tween: [ "style", "${_B_hand_N_CHEST}", "display", 'none', { fromValue: 'none'}], position: 33000, duration: 0 },
                { id: "eid494154", tween: [ "style", "${_B_hand_N_CHEST}", "display", 'block', { fromValue: 'none'}], position: 36000, duration: 0 },
                { id: "eid517265", tween: [ "style", "${_B_hand_N_CHEST}", "display", 'none', { fromValue: 'block'}], position: 38000, duration: 0 },
                { id: "eid492611", tween: [ "style", "${_B_LH_TS_DWn}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid492713", tween: [ "style", "${_B_LH_TS_DWn}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
                { id: "eid492718", tween: [ "style", "${_B_LH_TS_DWn}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0 },
                { id: "eid492913", tween: [ "style", "${_B_LH_TS_DWn}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
                { id: "eid492914", tween: [ "style", "${_B_LH_TS_DWn}", "display", 'block', { fromValue: 'none'}], position: 22000, duration: 0 },
                { id: "eid494132", tween: [ "style", "${_B_LH_TS_DWn}", "display", 'block', { fromValue: 'block'}], position: 23000, duration: 0 },
                { id: "eid576114", tween: [ "style", "${_B_LH_TS_DWn}", "display", 'none', { fromValue: 'block'}], position: 27000, duration: 0 },
                { id: "eid494133", tween: [ "style", "${_B_LH_TS_DWn}", "display", 'block', { fromValue: 'none'}], position: 29000, duration: 0 },
                { id: "eid494140", tween: [ "style", "${_B_LH_TS_DWn}", "display", 'none', { fromValue: 'block'}], position: 30000, duration: 0 },
                { id: "eid494862", tween: [ "style", "${_B_LH_TS_DWn}", "display", 'block', { fromValue: 'none'}], position: 32000, duration: 0 },
                { id: "eid495057", tween: [ "style", "${_B_LH_TS_DWn}", "display", 'none', { fromValue: 'block'}], position: 33000, duration: 0 },
                { id: "eid494149", tween: [ "style", "${_B_LH_TS_DWn}", "display", 'block', { fromValue: 'none'}], position: 35000, duration: 0 },
                { id: "eid494152", tween: [ "style", "${_B_LH_TS_DWn}", "display", 'none', { fromValue: 'block'}], position: 36000, duration: 0 },
                { id: "eid517267", tween: [ "style", "${_B_LH_TS_DWn}", "display", 'block', { fromValue: 'none'}], position: 38000, duration: 0 },
                { id: "eid517270", tween: [ "style", "${_B_LH_TS_DWn}", "display", 'none', { fromValue: 'block'}], position: 39000, duration: 0 },
                { id: "eid492593", tween: [ "style", "${_B_hand_on_V}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid494135", tween: [ "style", "${_B_hand_on_V}", "display", 'block', { fromValue: 'none'}], position: 30000, duration: 0 },
                { id: "eid494136", tween: [ "style", "${_B_hand_on_V}", "display", 'none', { fromValue: 'block'}], position: 32000, duration: 0 },
                { id: "eid442", tween: [ "style", "${_B_RH_EXPLAINING_Exp}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid471", tween: [ "style", "${_B_RH_EXPLAINING_Exp}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid478", tween: [ "style", "${_B_RH_EXPLAINING_Exp}", "display", 'none', { fromValue: 'block'}], position: 17000, duration: 0 },
                { id: "eid492603", tween: [ "style", "${_B_RH_EX_DWn}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid492712", tween: [ "style", "${_B_RH_EX_DWn}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid492716", tween: [ "style", "${_B_RH_EX_DWn}", "display", 'none', { fromValue: 'block'}], position: 17000, duration: 0 },
                { id: "eid499621", tween: [ "style", "${_B_RH_TS_DWN}", "-webkit-transform-origin", [50.35,34.05], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50.35,34.05]}], position: 0, duration: 0 },
                { id: "eid666708", tween: [ "style", "${_B_RH_TS_DWN}", "-moz-transform-origin", [50.35,34.05], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50.35,34.05]}], position: 0, duration: 0 },
                { id: "eid666709", tween: [ "style", "${_B_RH_TS_DWN}", "-ms-transform-origin", [50.35,34.05], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50.35,34.05]}], position: 0, duration: 0 },
                { id: "eid666710", tween: [ "style", "${_B_RH_TS_DWN}", "msTransformOrigin", [50.35,34.05], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50.35,34.05]}], position: 0, duration: 0 },
                { id: "eid666711", tween: [ "style", "${_B_RH_TS_DWN}", "-o-transform-origin", [50.35,34.05], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50.35,34.05]}], position: 0, duration: 0 },
                { id: "eid439", tween: [ "style", "${_B_Hand_On_Lips_TS_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid452", tween: [ "style", "${_B_Hand_On_Lips_TS_1}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid455", tween: [ "style", "${_B_Hand_On_Lips_TS_1}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
                { id: "eid435", tween: [ "style", "${_B_LH_TS_1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid470", tween: [ "style", "${_B_LH_TS_1}", "display", 'block', { fromValue: 'block'}], position: 15000, duration: 0 },
                { id: "eid482", tween: [ "style", "${_B_LH_TS_1}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
                { id: "eid486", tween: [ "style", "${_B_LH_TS_1}", "display", 'block', { fromValue: 'none'}], position: 22000, duration: 0 },
                { id: "eid840", tween: [ "style", "${_B_LH_TS_1}", "display", 'block', { fromValue: 'block'}], position: 23000, duration: 0 },
                { id: "eid492575", tween: [ "style", "${_B_LH_TS_1}", "display", 'none', { fromValue: 'block'}], position: 27000, duration: 0 },
                { id: "eid492579", tween: [ "style", "${_B_LH_TS_1}", "display", 'block', { fromValue: 'none'}], position: 29000, duration: 0 },
                { id: "eid494139", tween: [ "style", "${_B_LH_TS_1}", "display", 'none', { fromValue: 'block'}], position: 30000, duration: 0 },
                { id: "eid494860", tween: [ "style", "${_B_LH_TS_1}", "display", 'block', { fromValue: 'none'}], position: 32000, duration: 0 },
                { id: "eid495055", tween: [ "style", "${_B_LH_TS_1}", "display", 'none', { fromValue: 'block'}], position: 33000, duration: 0 },
                { id: "eid494147", tween: [ "style", "${_B_LH_TS_1}", "display", 'block', { fromValue: 'none'}], position: 35000, duration: 0 },
                { id: "eid494150", tween: [ "style", "${_B_LH_TS_1}", "display", 'none', { fromValue: 'block'}], position: 36000, duration: 0 },
                { id: "eid517268", tween: [ "style", "${_B_LH_TS_1}", "display", 'block', { fromValue: 'none'}], position: 38000, duration: 0 },
                { id: "eid517271", tween: [ "style", "${_B_LH_TS_1}", "display", 'none', { fromValue: 'block'}], position: 39000, duration: 0 },
                { id: "eid499016", tween: [ "style", "${_B_hand_on_cheeks_TS}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid494143", tween: [ "style", "${_B_hand_on_cheeks_TS}", "display", 'block', { fromValue: 'none'}], position: 33000, duration: 0 },
                { id: "eid494146", tween: [ "style", "${_B_hand_on_cheeks_TS}", "display", 'none', { fromValue: 'block'}], position: 35000, duration: 0 },
                { id: "eid628748", tween: [ "style", "${_B_RH_EX_DWn}", "left", '14.49%', { fromValue: '14.49%'}], position: 15000, duration: 0 },
                { id: "eid438", tween: [ "style", "${_B_Hand_On_Lips}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid453", tween: [ "style", "${_B_Hand_On_Lips}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid456", tween: [ "style", "${_B_Hand_On_Lips}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
                { id: "eid492592", tween: [ "style", "${_B_hand_on_V_TS}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid494134", tween: [ "style", "${_B_hand_on_V_TS}", "display", 'block', { fromValue: 'none'}], position: 30000, duration: 0 },
                { id: "eid494137", tween: [ "style", "${_B_hand_on_V_TS}", "display", 'none', { fromValue: 'block'}], position: 32000, duration: 0 },
                { id: "eid444", tween: [ "style", "${_B_WOW_HAND_TS_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid464", tween: [ "style", "${_B_WOW_HAND_TS_1}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
                { id: "eid466", tween: [ "style", "${_B_WOW_HAND_TS_1}", "display", 'none', { fromValue: 'block'}], position: 11000, duration: 0 },
                { id: "eid492612", tween: [ "style", "${_B_RH_TS_DWN}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid492684", tween: [ "style", "${_B_RH_TS_DWN}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0 },
                { id: "eid492686", tween: [ "style", "${_B_RH_TS_DWN}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
                { id: "eid492687", tween: [ "style", "${_B_RH_TS_DWN}", "display", 'none', { fromValue: 'block'}], position: 9000, duration: 0 },
                { id: "eid492708", tween: [ "style", "${_B_RH_TS_DWN}", "display", 'block', { fromValue: 'none'}], position: 11000, duration: 0 },
                { id: "eid492711", tween: [ "style", "${_B_RH_TS_DWN}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
                { id: "eid492717", tween: [ "style", "${_B_RH_TS_DWN}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0 },
                { id: "eid492912", tween: [ "style", "${_B_RH_TS_DWN}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
                { id: "eid492915", tween: [ "style", "${_B_RH_TS_DWN}", "display", 'block', { fromValue: 'none'}], position: 22000, duration: 0 },
                { id: "eid488284", tween: [ "style", "${_B_Hand_on_lips_2}", "left", '32.67%', { fromValue: '32.67%'}], position: 0, duration: 0 },
                { id: "eid499013", tween: [ "style", "${_B_Hand_on_lips_dwn_TS}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid492613", tween: [ "style", "${_B_Hand_on_lips_dwn_TS}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid492685", tween: [ "style", "${_B_Hand_on_lips_dwn_TS}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
                { id: "eid448", tween: [ "style", "${_B_HAND_WOW}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid465", tween: [ "style", "${_B_HAND_WOW}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
                { id: "eid467", tween: [ "style", "${_B_HAND_WOW}", "display", 'none', { fromValue: 'block'}], position: 11000, duration: 0 },
                { id: "eid492696", tween: [ "style", "${_B_WOW_HAND_DWn}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
                { id: "eid492707", tween: [ "style", "${_B_WOW_HAND_DWn}", "display", 'none', { fromValue: 'block'}], position: 11000, duration: 0 },
                { id: "eid492595", tween: [ "style", "${_B_hand_on_waist}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid492576", tween: [ "style", "${_B_hand_on_waist}", "display", 'block', { fromValue: 'none'}], position: 27000, duration: 0 },
                { id: "eid492580", tween: [ "style", "${_B_hand_on_waist}", "display", 'none', { fromValue: 'block'}], position: 29000, duration: 0 },
                { id: "eid443", tween: [ "style", "${_B_LH_Explaining_exp}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid472", tween: [ "style", "${_B_LH_Explaining_exp}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid479", tween: [ "style", "${_B_LH_Explaining_exp}", "display", 'none', { fromValue: 'block'}], position: 17000, duration: 0 },
                { id: "eid365040", tween: [ "style", "${_B1_Mobile}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid392677", tween: [ "style", "${_B1_Mobile}", "display", 'none', { fromValue: 'none'}], position: 23000, duration: 0 },
                { id: "eid492573", tween: [ "style", "${_B1_Mobile}", "display", 'none', { fromValue: 'none'}], position: 27000, duration: 0 },
                { id: "eid517274", tween: [ "style", "${_B1_Mobile}", "display", 'block', { fromValue: 'none'}], position: 39000, duration: 0 },
                { id: "eid445", tween: [ "style", "${_B_Bye_TS_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid492590", tween: [ "style", "${_B_Hand_on_chest_TS}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid494142", tween: [ "style", "${_B_Hand_on_chest_TS}", "display", 'none', { fromValue: 'none'}], position: 33000, duration: 0 },
                { id: "eid494153", tween: [ "style", "${_B_Hand_on_chest_TS}", "display", 'block', { fromValue: 'none'}], position: 36000, duration: 0 },
                { id: "eid517266", tween: [ "style", "${_B_Hand_on_chest_TS}", "display", 'none', { fromValue: 'block'}], position: 38000, duration: 0 },
                { id: "eid437", tween: [ "style", "${_B_Folding_hand}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid481", tween: [ "style", "${_B_Folding_hand}", "display", 'block', { fromValue: 'none'}], position: 20000, duration: 0 },
                { id: "eid491", tween: [ "style", "${_B_Folding_hand}", "display", 'none', { fromValue: 'block'}], position: 22000, duration: 0 },
                { id: "eid492594", tween: [ "style", "${_B_HAnd_on_waist_TS}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid492577", tween: [ "style", "${_B_HAnd_on_waist_TS}", "display", 'block', { fromValue: 'none'}], position: 27000, duration: 0 },
                { id: "eid492581", tween: [ "style", "${_B_HAnd_on_waist_TS}", "display", 'none', { fromValue: 'block'}], position: 29000, duration: 0 },
                { id: "eid492602", tween: [ "style", "${_B_LH_Exp_TS_dwn}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid492714", tween: [ "style", "${_B_LH_Exp_TS_dwn}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid492715", tween: [ "style", "${_B_LH_Exp_TS_dwn}", "display", 'none', { fromValue: 'block'}], position: 17000, duration: 0 },
                { id: "eid500354", tween: [ "style", "${_B_hand_on_cheeks}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid494144", tween: [ "style", "${_B_hand_on_cheeks}", "display", 'block', { fromValue: 'none'}], position: 33000, duration: 0 },
                { id: "eid494145", tween: [ "style", "${_B_hand_on_cheeks}", "display", 'none', { fromValue: 'block'}], position: 35000, duration: 0 },
                { id: "eid450", tween: [ "style", "${_B_RH}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid458", tween: [ "style", "${_B_RH}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0 },
                { id: "eid460", tween: [ "style", "${_B_RH}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
                { id: "eid462", tween: [ "style", "${_B_RH}", "display", 'none', { fromValue: 'block'}], position: 9000, duration: 0 },
                { id: "eid468", tween: [ "style", "${_B_RH}", "display", 'block', { fromValue: 'none'}], position: 11000, duration: 0 },
                { id: "eid475", tween: [ "style", "${_B_RH}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
                { id: "eid477", tween: [ "style", "${_B_RH}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0 },
                { id: "eid484", tween: [ "style", "${_B_RH}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
                { id: "eid488", tween: [ "style", "${_B_RH}", "display", 'block', { fromValue: 'none'}], position: 22000, duration: 0 },
                { id: "eid640920", tween: [ "style", "${_B_Folding_hand}", "left", '27.27%', { fromValue: '27.27%'}], position: 20000, duration: 0 },
                { id: "eid639490", tween: [ "style", "${_handWow}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
                { id: "eid639491", tween: [ "style", "${_handWow}", "display", 'none', { fromValue: 'block'}], position: 11000, duration: 0 }            ]
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
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'rHU3',
                    rect: ['63.3%', '-5.7%', '42.9%', '65.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Bdy/rHU.png', '0px', '0px']
                },
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'rightHexp2',
                    rect: ['0%', '38.2%', '91.5%', '61.5%', 'auto', 'auto'],
                    transform: [[0, 0], [], [], [], ['86.1258%', '11.7421%']],
                    fill: ['rgba(0,0,0,0)', 'images/2/Bdy/rightHexp.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_rHU3}": [
                ["style", "top", '-5.73%'],
                ["style", "display", 'block'],
                ["style", "left", '63.28%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_rightHexp2}": [
                ["style", "-webkit-transform-origin", [86.13,11.74], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [86.13,11.74],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [86.13,11.74],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [86.13,11.74],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [86.13,11.74],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-16deg'],
                ["style", "display", 'block'],
                ["style", "left", '-2.26%'],
                ["style", "top", '43.13%']
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
                { id: "eid583981", tween: [ "transform", "${_rightHexp2}", "rotateZ", '12deg', { fromValue: '-16deg'}], position: 0, duration: 500 },
                { id: "eid583982", tween: [ "transform", "${_rightHexp2}", "rotateZ", '10deg', { fromValue: '12deg'}], position: 500, duration: 500 },
                { id: "eid583979", tween: [ "transform", "${_rHU3}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid583978", tween: [ "style", "${_rHU3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid583977", tween: [ "style", "${_rightHexp2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
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
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'leftHU2',
                    rect: ['60.4%', '-2%', '49.6%', '57.8%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Bdy/leftHU.png', '0px', '0px']
                },
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'leftHexp',
                    rect: ['1.5%', '37.5%', '105.8%', '64.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Bdy/leftHexp.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_leftHexp}": [
                ["style", "top", '41.7%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "left", '-4.38%'],
                ["style", "-webkit-transform-origin", [84.95,12.04], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [84.95,12.04],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [84.95,12.04],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [84.95,12.04],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [84.95,12.04],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_leftHU2}": [
                ["style", "top", '-2.03%'],
                ["style", "left", '60.41%'],
                ["style", "display", 'block']
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
                { id: "eid583968", tween: [ "style", "${_leftHU2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid583970", tween: [ "transform", "${_leftHexp}", "rotateZ", '15deg', { fromValue: '0deg'}], position: 500, duration: 500 },
                { id: "eid583971", tween: [ "transform", "${_leftHexp}", "rotateZ", '0deg', { fromValue: '15deg'}], position: 1000, duration: 500 },
                { id: "eid583972", tween: [ "style", "${_leftHexp}", "-webkit-transform-origin", [84.95,12.04], { valueTemplate: '@@0@@% @@1@@%', fromValue: [84.95,12.04]}], position: 1000, duration: 0 },
                { id: "eid666712", tween: [ "style", "${_leftHexp}", "-moz-transform-origin", [84.95,12.04], { valueTemplate: '@@0@@% @@1@@%', fromValue: [84.95,12.04]}], position: 1000, duration: 0 },
                { id: "eid666713", tween: [ "style", "${_leftHexp}", "-ms-transform-origin", [84.95,12.04], { valueTemplate: '@@0@@% @@1@@%', fromValue: [84.95,12.04]}], position: 1000, duration: 0 },
                { id: "eid666714", tween: [ "style", "${_leftHexp}", "msTransformOrigin", [84.95,12.04], { valueTemplate: '@@0@@% @@1@@%', fromValue: [84.95,12.04]}], position: 1000, duration: 0 },
                { id: "eid666715", tween: [ "style", "${_leftHexp}", "-o-transform-origin", [84.95,12.04], { valueTemplate: '@@0@@% @@1@@%', fromValue: [84.95,12.04]}], position: 1000, duration: 0 },
                { id: "eid583967", tween: [ "style", "${_leftHexp}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
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
    resizeInstances: true,
    content: {
            dom: [
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'lip12',
                    rect: ['100%', '129.7%', '92.4%', '93.2%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/lip/0/lip1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    tag: 'img',
                    display: 'none',
                    id: 'lip22',
                    rect: ['23.9%', '20.3%', '92.4%', '93.2%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/lip/0/lip2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_lip12}": [
                ["style", "display", 'block'],
                ["style", "left", '22.83%'],
                ["style", "top", '20.27%']
            ],
            "${_lip22}": [
                ["style", "top", '20.27%'],
                ["style", "left", '23.91%'],
                ["style", "display", 'none']
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
            duration: 1500,
            autoPlay: true,
            timeline: [
                { id: "eid618695", tween: [ "style", "${_lip12}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid618701", tween: [ "style", "${_lip12}", "display", 'none', { fromValue: 'block'}], position: 349, duration: 0 },
                { id: "eid618703", tween: [ "style", "${_lip12}", "display", 'block', { fromValue: 'none'}], position: 634, duration: 0 },
                { id: "eid618705", tween: [ "style", "${_lip12}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid618707", tween: [ "style", "${_lip12}", "display", 'block', { fromValue: 'none'}], position: 1338, duration: 0 },
                { id: "eid618694", tween: [ "style", "${_lip22}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid618700", tween: [ "style", "${_lip22}", "display", 'block', { fromValue: 'none'}], position: 349, duration: 0 },
                { id: "eid618702", tween: [ "style", "${_lip22}", "display", 'none', { fromValue: 'block'}], position: 634, duration: 0 },
                { id: "eid618704", tween: [ "style", "${_lip22}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid618706", tween: [ "style", "${_lip22}", "display", 'none', { fromValue: 'block'}], position: 1338, duration: 0 }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/2/Bdy/rHU.png', '0px', '0px'],
                    id: 'RH_up4',
                    rect: ['52%', '12.1%', '48%', '79.3%', 'auto', 'auto'],
                    display: 'block',
                    tag: 'img'
                },
                {
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/2/Bdy/rHd.png', '0px', '0px'],
                    id: 'RH_d2',
                    rect: ['51.4%', '73.2%', '38.5%', '92.9%', 'auto', 'auto'],
                    display: 'block',
                    tag: 'img'
                },
                {
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/2/Bdy/handBye.png', '0px', '0px'],
                    id: 'Hand_on_bye2',
                    rect: ['-3.4%', '-6.1%', '74.3%', '100%', 'auto', 'auto'],
                    display: 'none',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Hand_on_bye2}": [
                ["style", "top", '-5.49%'],
                ["style", "left", '0%'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '43.23%'],
                ["style", "width", '42.05%']
            ],
            "${_RH_d2}": [
                ["style", "top", '72.08%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "height", '92.93%'],
                ["style", "left", '45.98%'],
                ["style", "-webkit-transform-origin", [24.82,9.2], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [24.82,9.2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [24.82,9.2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [24.82,9.2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [24.82,9.2],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_RH_up4}": [
                ["style", "top", '10.1%'],
                ["style", "left", '52.03%'],
                ["style", "display", 'block']
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
                { id: "eid395", tween: [ "style", "${_RH_d2}", "-webkit-transform-origin", [24.82,9.2], { valueTemplate: '@@0@@% @@1@@%', fromValue: [24.82,9.2]}], position: 500, duration: 0 },
                { id: "eid666716", tween: [ "style", "${_RH_d2}", "-moz-transform-origin", [24.82,9.2], { valueTemplate: '@@0@@% @@1@@%', fromValue: [24.82,9.2]}], position: 500, duration: 0 },
                { id: "eid666717", tween: [ "style", "${_RH_d2}", "-ms-transform-origin", [24.82,9.2], { valueTemplate: '@@0@@% @@1@@%', fromValue: [24.82,9.2]}], position: 500, duration: 0 },
                { id: "eid666718", tween: [ "style", "${_RH_d2}", "msTransformOrigin", [24.82,9.2], { valueTemplate: '@@0@@% @@1@@%', fromValue: [24.82,9.2]}], position: 500, duration: 0 },
                { id: "eid666719", tween: [ "style", "${_RH_d2}", "-o-transform-origin", [24.82,9.2], { valueTemplate: '@@0@@% @@1@@%', fromValue: [24.82,9.2]}], position: 500, duration: 0 },
                { id: "eid391", tween: [ "style", "${_RH_up4}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid389", tween: [ "style", "${_Hand_on_bye2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid398", tween: [ "style", "${_Hand_on_bye2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid396", tween: [ "transform", "${_RH_d2}", "rotateZ", '-14deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid390", tween: [ "style", "${_RH_d2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid397", tween: [ "style", "${_RH_d2}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 }            ]
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
                    rect: ['78.8%', '-3%', '53.8%', '95.7%', 'auto', 'auto'],
                    id: 'RH_up3',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/2/Bdy/rHU.png', '0px', '0px']
                },
                {
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'Hand_WOW',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/2/Bdy/handWow.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RH_up3}": [
                ["style", "top", '-9.98%'],
                ["style", "left", '72.73%'],
                ["style", "display", 'block']
            ],
            "${_Hand_WOW}": [
                ["style", "top", '-9.76%'],
                ["style", "left", '0%'],
                ["style", "display", 'none']
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
                { id: "eid387", tween: [ "style", "${_Hand_WOW}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/2/Shirt/0/rightHSS.png', '0px', '0px'],
                    id: 'rightHSS4',
                    rect: ['0%', '-2.7%', '115.2%', '117.9%', 'auto', 'auto'],
                    display: 'block',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '39.08%'],
                ["style", "width", '22.45%']
            ],
            "${_rightHSS4}": [
                ["style", "top", '-2.67%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
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
                { id: "eid499012", tween: [ "style", "${_rightHSS4}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
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
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/2/Shirt/0/mobileHSS.png', '0px', '0px'],
                    id: 'mobileHSS2',
                    rect: ['9%', '-11.5%', '112.4%', '116.5%', 'auto', 'auto'],
                    display: 'block',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_mobileHSS2}": [
                ["style", "top", '-11.51%'],
                ["style", "left", '9.03%'],
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
                { id: "eid501257", tween: [ "style", "${_mobileHSS2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
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
            duration: 120000,
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
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Bdy/foldinghand.png', '0px', '0px'],
                    type: 'image',
                    id: 'Folding_hand',
                    opacity: 1,
                    display: 'block',
                    tag: 'img'
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
                ["style", "top", '19.05%'],
                ["style", "left", '2.21%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '20.04%'],
                ["style", "width", '51.43%']
            ],
            "${_B1_face}": [
                ["style", "top", '16.03%'],
                ["style", "left", '5.52%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_LIPS_O}": [
                ["style", "display", 'block'],
                ["style", "top", '58.73%'],
                ["style", "left", '22.65%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_B_1_Close_eye}": [
                ["style", "top", '21.69%'],
                ["style", "left", '13.81%'],
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
                { id: "eid337858", tween: [ "style", "${_LIPS_O}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid487330", tween: [ "style", "${_B1_face}", "left", '5.52%', { fromValue: '5.52%'}], position: 0, duration: 0 },
                { id: "eid487329", tween: [ "style", "${_B1_face}", "top", '16.03%', { fromValue: '16.03%'}], position: 0, duration: 0 }            ]
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
                    display: 'block',
                    rect: ['-18.3%', '-2.9%', '107.1%', '55.2%', 'auto', 'auto'],
                    id: 'rHU',
                    fill: ['rgba(0,0,0,0)', 'images/2/Bdy/rHU.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['-26.8%', '33.6%', '88.7%', '67.4%', 'auto', 'auto'],
                    id: 'rHd',
                    fill: ['rgba(0,0,0,0)', 'images/2/Bdy/rHd.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_rHU}": [
                ["style", "top", '-2.9%'],
                ["style", "display", 'block'],
                ["style", "left", '-18.31%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_rHd}": [
                ["style", "top", '38.54%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "left", '-38.48%'],
                ["style", "-webkit-transform-origin", [36.28,6.97], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [36.28,6.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [36.28,6.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [36.28,6.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [36.28,6.97],{valueTemplate:'@@0@@% @@1@@%'}]
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
                { id: "eid583376", tween: [ "transform", "${_rHU}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 500, duration: 0 },
                { id: "eid583377", tween: [ "transform", "${_rHU}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1000, duration: 0 },
                { id: "eid583378", tween: [ "transform", "${_rHU}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1500, duration: 0 },
                { id: "eid583368", tween: [ "style", "${_rHU}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid583369", tween: [ "style", "${_rHd}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid583382", tween: [ "style", "${_rHd}", "-webkit-transform-origin", [36.28,6.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [36.28,6.97]}], position: 1000, duration: 0 },
                { id: "eid666720", tween: [ "style", "${_rHd}", "-moz-transform-origin", [36.28,6.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [36.28,6.97]}], position: 1000, duration: 0 },
                { id: "eid666721", tween: [ "style", "${_rHd}", "-ms-transform-origin", [36.28,6.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [36.28,6.97]}], position: 1000, duration: 0 },
                { id: "eid666722", tween: [ "style", "${_rHd}", "msTransformOrigin", [36.28,6.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [36.28,6.97]}], position: 1000, duration: 0 },
                { id: "eid666723", tween: [ "style", "${_rHd}", "-o-transform-origin", [36.28,6.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [36.28,6.97]}], position: 1000, duration: 0 },
                { id: "eid583385", tween: [ "transform", "${_rHd}", "rotateZ", '11deg', { fromValue: '0deg'}], position: 500, duration: 500 },
                { id: "eid583386", tween: [ "transform", "${_rHd}", "rotateZ", '0deg', { fromValue: '11deg'}], position: 1000, duration: 500 }            ]
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
                    rect: ['-9.9%', '-17%', '116.8%', '123.1%', 'auto', 'auto'],
                    tag: 'img',
                    id: 'foldingHandSS',
                    display: 'block',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/2/Shirt/0/foldingHandSS.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_foldingHandSS}": [
                ["style", "top", '-17.03%'],
                ["style", "display", 'block'],
                ["style", "height", '123.08%'],
                ["style", "left", '-8.39%'],
                ["style", "width", '115.15%']
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
                { id: "eid499015", tween: [ "style", "${_foldingHandSS}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
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
                    id: 'Bdy',
                    tag: 'img',
                    rect: ['-3.2%', '-1.6%', '110.8%', '107.1%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Bdy/Bdy.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Bdy}": [
                ["style", "left", '-3.23%'],
                ["style", "top", '-1.63%']
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
                    id: 'leftS',
                    tag: 'img',
                    rect: ['-15%', '-5.2%', '125%', '125%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/sneakers/0/leftS.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_leftS}": [
                ["style", "left", '-15%'],
                ["style", "top", '-5.21%']
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
                    rect: ['9.6%', '2.1%', '77.5%', '27.4%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/pant/0/pantbelt.png', '0px', '0px'],
                    display: 'none',
                    type: 'image',
                    id: 'pent_top',
                    tag: 'img'
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
                ["style", "left", '5.42%'],
                ["style", "top", '3.14%']
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
                ["style", "top", '5.57%'],
                ["style", "opacity", '1'],
                ["style", "left", '24.58%']
            ],
            "${_pent_top}": [
                ["style", "top", '2.12%'],
                ["style", "left", '9.58%'],
                ["style", "display", 'none']
            ],
            "${_B_RS_1}": [
                ["style", "left", '0%'],
                ["style", "top", '67.94%']
            ],
            "${_B_RL}": [
                ["style", "left", '12.08%'],
                ["style", "top", '17.25%']
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
                { id: "eid593138", tween: [ "style", "${_pent_top}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid604124", tween: [ "style", "${_B_LL_bttm_1}", "top", '5.57%', { fromValue: '5.57%'}], position: 0, duration: 0 },
                { id: "eid604123", tween: [ "style", "${_B_RL_Bttm_1}", "top", '3.14%', { fromValue: '3.14%'}], position: 0, duration: 0 },
                { id: "eid604125", tween: [ "style", "${_B_RL_Bttm_1}", "left", '5.42%', { fromValue: '5.42%'}], position: 0, duration: 0 },
                { id: "eid604126", tween: [ "style", "${_B_LL_bttm_1}", "left", '24.58%', { fromValue: '24.58%'}], position: 0, duration: 0 },
                { id: "eid588569", tween: [ "style", "${_B_LL_bttm_1}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 }            ]
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
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/2/Shirt/0/rightHSS.png', '0px', '0px'],
                    id: 'rightHSS2',
                    rect: ['-3.8%', '0%', '115.2%', '117.9%', 'auto', 'auto'],
                    display: 'block',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '39.08%'],
                ["style", "width", '22.45%']
            ],
            "${_rightHSS2}": [
                ["style", "top", '0%'],
                ["style", "left", '-3.8%'],
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
                { id: "eid499004", tween: [ "style", "${_rightHSS2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
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
                    rect: ['0%', '35.6%', '83.9%', '64.4%', 'auto', 'auto'],
                    id: 'RL_d_Bttm',
                    fill: ['rgba(0,0,0,0)', 'images/2/Bdy/rLD.png', '0px', '0px'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['18.8%', '0%', '81.3%', '46.3%', 'auto', 'auto'],
                    id: 'RL_up_Bttm',
                    fill: ['rgba(0,0,0,0)', 'images/2/Bdy/rLU.png', '0px', '0px'],
                    type: 'image',
                    tag: 'img'
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
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/2/faces/0/BlinkEye.png', '0px', '0px'],
                    id: 'BlinkEye',
                    rect: ['4.4%', '49%', '105.5%', '42.2%', 'auto', 'auto'],
                    display: 'none',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_BlinkEye}": [
                ["style", "top", '50%'],
                ["style", "left", '2.2%'],
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
                { id: "eid543237", tween: [ "style", "${_BlinkEye}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid543238", tween: [ "style", "${_BlinkEye}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid543239", tween: [ "style", "${_BlinkEye}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
                { id: "eid543240", tween: [ "style", "${_BlinkEye}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid543241", tween: [ "style", "${_BlinkEye}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
                { id: "eid543242", tween: [ "style", "${_BlinkEye}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid543243", tween: [ "style", "${_BlinkEye}", "display", 'none', { fromValue: 'block'}], position: 3250, duration: 0 },
                { id: "eid543244", tween: [ "style", "${_BlinkEye}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
                { id: "eid543245", tween: [ "style", "${_BlinkEye}", "display", 'none', { fromValue: 'block'}], position: 3886, duration: 0 }            ]
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
                    display: 'block',
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
            "${_B_Body}": [
                ["style", "display", 'block'],
                ["style", "left", '38.64%'],
                ["style", "top", '16.22%']
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
            "${_B_Talking_Lips}": [
                ["style", "top", '13.15%'],
                ["style", "left", '35.23%'],
                ["style", "display", 'block']
            ],
            "${_B1_TOP_1}": [
                ["style", "display", 'block'],
                ["style", "left", '0%'],
                ["style", "top", '10.29%']
            ],
            "${_B1_Face}": [
                ["style", "display", 'block'],
                ["style", "left", '34.66%'],
                ["style", "top", '2.23%']
            ],
            "${_B1_hair}": [
                ["style", "display", 'block'],
                ["style", "left", '39.2%'],
                ["style", "top", '-0.11%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 120000,
            autoPlay: true,
            timeline: [
                { id: "eid527", tween: [ "style", "${_B_Talking_Lips}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid543292", tween: [ "style", "${_B1_Face}", "top", '2.23%', { fromValue: '2.23%'}], position: 0, duration: 0 },
                { id: "eid543283", tween: [ "style", "${_B1_Face}", "left", '34.66%', { fromValue: '34.66%'}], position: 0, duration: 0 },
                { id: "eid336999", tween: [ "style", "${_B1_TOP_1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid337000", tween: [ "style", "${_B1_hair}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid337003", tween: [ "style", "${_B_Body}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid337001", tween: [ "style", "${_B1_Face}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
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
                    rect: ['-19.2%', '0%', '146.2%', '120.7%', 'auto', 'auto'],
                    tag: 'img',
                    id: 'leftHSS',
                    display: 'block',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/2/Shirt/0/leftHSS.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_leftHSS}": [
                ["style", "top", '-0.99%'],
                ["style", "left", '-21.79%'],
                ["style", "display", 'block']
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
                { id: "eid586655", tween: [ "style", "${_leftHSS}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
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
                    tag: 'img',
                    display: 'block',
                    id: 'RL_d_PB',
                    rect: ['6.9%', '32.7%', '76.3%', '61%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/pant/0/rightLDP.png', '0px', '0px']
                },
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'RL_up_PB',
                    rect: ['5.6%', '0%', '91.9%', '60.4%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/pant/0/rightLUP.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RL_d_PB}": [
                ["style", "top", '32.65%'],
                ["style", "left", '5.62%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '84.84%'],
                ["style", "width", '66.67%']
            ],
            "${_RL_up_PB}": [
                ["style", "top", '0%'],
                ["style", "left", '4.37%'],
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
                { id: "eid588723", tween: [ "style", "${_RL_d_PB}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid588725", tween: [ "style", "${_RL_d_PB}", "left", '5.62%', { fromValue: '5.62%'}], position: 0, duration: 0 },
                { id: "eid588724", tween: [ "style", "${_RL_up_PB}", "left", '4.37%', { fromValue: '4.37%'}], position: 0, duration: 0 },
                { id: "eid588722", tween: [ "style", "${_RL_up_PB}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
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
                    id: 'rightHSS3',
                    rect: ['6.3%', '-2.9%', '115.2%', '117.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Shirt/0/rightHSS.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '39.08%'],
                ["style", "width", '22.45%']
            ],
            "${_rightHSS3}": [
                ["style", "top", '-3.4%'],
                ["style", "left", '-7.6%'],
                ["style", "display", 'block']
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
                { id: "eid499005", tween: [ "style", "${_rightHSS3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
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
                    id: 'leftLDP',
                    tag: 'img',
                    rect: ['24.3%', '24.1%', '76.9%', '70.8%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/pant/0/leftLDP.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'leftLUP',
                    tag: 'img',
                    rect: ['-8.1%', '-2%', '106.4%', '58.4%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/pant/0/leftLUP.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_leftLDP}": [
                ["style", "left", '24.28%'],
                ["style", "top", '24.2%']
            ],
            "${_leftLUP}": [
                ["style", "left", '-8.09%'],
                ["style", "top", '-2%']
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
                    fill: ['rgba(0,0,0,0)', 'images/2/Shirt/0/rightHSS.png', '0px', '0px'],
                    id: 'rightHSS',
                    rect: ['-17.7%', '-5.6%', '115.2%', '117.9%', 'auto', 'auto'],
                    display: 'block',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_rightHSS}": [
                ["style", "top", '-5.59%'],
                ["style", "left", '-17.72%'],
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
                { id: "eid499002", tween: [ "style", "${_rightHSS}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid499003", tween: [ "style", "${_rightHSS}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 }            ]
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
                    rect: ['4.7%', '43.9%', '93.8%', '60.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/faces/0/lips.png', '0px', '0px'],
                    display: 'block',
                    type: 'image',
                    id: 'lips',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '34.92%'],
                ["style", "width", '35.36%']
            ],
            "${_lips}": [
                ["style", "top", '43.94%'],
                ["style", "left", '4.69%'],
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
                { id: "eid543236", tween: [ "style", "${_lips}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/2/Bdy/rHd.png', '0px', '0px']
                },
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'Hand_on_lipe',
                    rect: ['6.7%', '0%', '93.3%', '57.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Bdy/HandLip.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Hand_on_lipe}": [
                ["style", "top", '-3.41%'],
                ["style", "left", '16.85%'],
                ["style", "display", 'block']
            ],
            "${_RH_d}": [
                ["style", "top", '44.57%'],
                ["style", "left", '5.06%'],
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
                { id: "eid313", tween: [ "style", "${_Hand_on_lipe}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid314", tween: [ "style", "${_Hand_on_lipe}", "display", 'block', { fromValue: 'block'}], position: 250, duration: 0 },
                { id: "eid316", tween: [ "style", "${_Hand_on_lipe}", "display", 'block', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid318", tween: [ "style", "${_Hand_on_lipe}", "display", 'block', { fromValue: 'block'}], position: 1250, duration: 0 },
                { id: "eid312", tween: [ "style", "${_RH_d}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid315", tween: [ "style", "${_RH_d}", "display", 'none', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid317", tween: [ "style", "${_RH_d}", "display", 'none', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid319", tween: [ "style", "${_RH_d}", "display", 'none', { fromValue: 'none'}], position: 1250, duration: 0 }            ]
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
                    id: 'RL_up_Bttm',
                    tag: 'img',
                    rect: ['0%', '0%', '100%', '57.4%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Bdy/rLU.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'RL_d_Bttm',
                    tag: 'img',
                    rect: ['12%', '39.8%', '81%', '53.1%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Bdy/rLD.png', '0px', '0px']
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
                ["style", "left", '12%'],
                ["style", "top", '39.78%']
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
                    fill: ['rgba(0,0,0,0)', 'images/1/Shirt/0/leftHSS.png', '0px', '0px'],
                    id: 'LH_TS2',
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
            "${_LH_TS2}": [
                ["style", "top", '-7.35%'],
                ["style", "left", '-8.53%'],
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
                    fill: ['rgba(0,0,0,0)', 'images/1/Bdy/handCheek.png', '0px', '0px'],
                    display: 'block',
                    type: 'image',
                    id: 'Hand_on_cheek',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '25.63%'],
                ["style", "width", '33.55%']
            ],
            "${_Hand_on_cheek}": [
                ["style", "top", '-13.08%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
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
                    id: 'LH_up',
                    tag: 'img',
                    rect: ['0%', '0%', '84.9%', '52.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Bdy/leftHU.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'LH_d',
                    tag: 'img',
                    rect: ['21.2%', '41.8%', '78.8%', '58.2%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Bdy/leftHd.png', '0px', '0px']
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
                ["style", "top", '31.19%'],
                ["style", "left", '14.14%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '37.25%'],
                ["style", "width", '31.63%']
            ],
            "${_LH_up}": [
                ["style", "top", '-3.54%'],
                ["style", "left", '-6.06%'],
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
                { id: "eid666724", tween: [ "style", "${_LH_d}", "-moz-transform-origin", [53.85,12.93], { valueTemplate: '@@0@@% @@1@@%', fromValue: [53.85,12.93]}], position: 1500, duration: 0 },
                { id: "eid666725", tween: [ "style", "${_LH_d}", "-ms-transform-origin", [53.85,12.93], { valueTemplate: '@@0@@% @@1@@%', fromValue: [53.85,12.93]}], position: 1500, duration: 0 },
                { id: "eid666726", tween: [ "style", "${_LH_d}", "msTransformOrigin", [53.85,12.93], { valueTemplate: '@@0@@% @@1@@%', fromValue: [53.85,12.93]}], position: 1500, duration: 0 },
                { id: "eid666727", tween: [ "style", "${_LH_d}", "-o-transform-origin", [53.85,12.93], { valueTemplate: '@@0@@% @@1@@%', fromValue: [53.85,12.93]}], position: 1500, duration: 0 },
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
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'Hand_on_face',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/1/Bdy/handFace.png', '0px', '0px']
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
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Shirt/0/mobileHSS.png', '0px', '0px'],
                    display: 'block',
                    type: 'image',
                    id: 'Mobile_hand_TS',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Mobile_hand_TS}": [
                ["style", "top", '-6.91%'],
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
                { id: "eid43", tween: [ "style", "${_Mobile_hand_TS}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid483769", tween: [ "style", "${_Mobile_hand_TS}", "top", '-6.91%', { fromValue: '-6.91%'}], position: 0, duration: 0 }            ]
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
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Bdy/mobileHand.png', '0px', '0px'],
                    display: 'block',
                    type: 'image',
                    id: 'Mobile_hand',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Mobile_hand}": [
                ["style", "top", '-6.94%'],
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
                { id: "eid483767", tween: [ "style", "${_Mobile_hand}", "top", '-6.94%', { fromValue: '-6.94%'}], position: 0, duration: 0 },
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
                    rect: ['-59.5%', '14.8%', '94.4%', '80.8%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Bdy/leftHU.png', '0px', '0px'],
                    display: 'block',
                    type: 'image',
                    id: 'LH_up3',
                    tag: 'img'
                },
                {
                    rect: ['6.7%', '-4.4%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Bdy/handWow.png', '0px', '0px'],
                    display: 'block',
                    type: 'image',
                    id: 'Hand_on_wow',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Hand_on_wow}": [
                ["style", "top", '-9.85%'],
                ["style", "left", '-8.99%'],
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
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'Folding_hand',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/1/Bdy/foldinghand.png', '0px', '0px']
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
                    rect: ['-12.9%', '-6.5%', '112.9%', '120.4%', 'auto', 'auto'],
                    tag: 'img',
                    id: 'Hr_1',
                    display: 'block',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/1/hairstyle/0/hair1.png', '0px', '0px']
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
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'rightS2',
                    rect: ['0.9%', '-96.7%', '98.3%', '147.2%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/sneakers/0/rightS.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_rightS2}": [
                ["style", "top", '-92.44%'],
                ["style", "left", '7.91%'],
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
                { id: "eid573079", tween: [ "style", "${_rightS2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/1/Bdy/rHU.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'RH_d',
                    tag: 'img',
                    rect: ['4.3%', '37%', '95.8%', '63%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Bdy/rHd.png', '0px', '0px']
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
                ["style", "top", '35.06%'],
                ["style", "left", '-11.7%'],
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
                { id: "eid666728", tween: [ "style", "${_RH_d}", "-moz-transform-origin", [21,11.45], { valueTemplate: '@@0@@% @@1@@%', fromValue: [21,11.45]}], position: 2000, duration: 0 },
                { id: "eid666729", tween: [ "style", "${_RH_d}", "-ms-transform-origin", [21,11.45], { valueTemplate: '@@0@@% @@1@@%', fromValue: [21,11.45]}], position: 2000, duration: 0 },
                { id: "eid666730", tween: [ "style", "${_RH_d}", "msTransformOrigin", [21,11.45], { valueTemplate: '@@0@@% @@1@@%', fromValue: [21,11.45]}], position: 2000, duration: 0 },
                { id: "eid666731", tween: [ "style", "${_RH_d}", "-o-transform-origin", [21,11.45], { valueTemplate: '@@0@@% @@1@@%', fromValue: [21,11.45]}], position: 2000, duration: 0 }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/1/lip/1/lip1.png', '0px', '0px'],
                    id: 'lip1',
                    rect: ['94.5%', '98.9%', '98.9%', '95.5%', 'auto', 'auto'],
                    display: 'none',
                    tag: 'img'
                },
                {
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/1/lip/1/lip3.png', '0px', '0px'],
                    id: 'lip3',
                    rect: ['94.6%', '98.9%', '98.9%', '95.5%', 'auto', 'auto'],
                    display: 'none',
                    tag: 'img'
                },
                {
                    rect: ['-17.4%', '-3.4%', '98.9%', '95.5%', 'auto', 'auto'],
                    id: 'lip2',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/1/lip/0/lip2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_lip2}": [
                ["style", "top", '-3.41%'],
                ["style", "left", '-17.39%'],
                ["style", "display", 'block']
            ],
            "${_lip1}": [
                ["style", "top", '-3.41%'],
                ["style", "left", '-18.48%'],
                ["style", "display", 'none']
            ],
            "${_lip3}": [
                ["style", "top", '-3.41%'],
                ["style", "left", '-17.39%'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '9.91%'],
                ["style", "width", '29.4%']
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
                { id: "eid485333", tween: [ "style", "${_lip1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid485335", tween: [ "style", "${_lip1}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid485688", tween: [ "style", "${_lip1}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
                { id: "eid485339", tween: [ "style", "${_lip1}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid485331", tween: [ "style", "${_lip3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid625016", tween: [ "style", "${_lip3}", "display", 'none', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid485337", tween: [ "style", "${_lip3}", "display", 'none', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid485338", tween: [ "style", "${_lip3}", "display", 'none', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid642454", tween: [ "style", "${_lip2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid642455", tween: [ "style", "${_lip2}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
                { id: "eid642456", tween: [ "style", "${_lip2}", "display", 'none', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid642457", tween: [ "style", "${_lip2}", "display", 'none', { fromValue: 'none'}], position: 750, duration: 0 }            ]
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
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'Love_hand',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/1/Bdy/loveHand.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '21.2%'],
                ["style", "width", '78.28%']
            ],
            "${_Love_hand}": [
                ["style", "top", '-6.21%'],
                ["style", "left", '0.41%'],
                ["style", "display", 'block']
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
                    display: 'block',
                    type: 'rect',
                    id: 'G2_Hair',
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
                    display: 'block',
                    type: 'rect',
                    id: 'G2_FACE',
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
                    id: 'G_close_eye',
                    rect: ['33.6%', '8.1%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'G_Eye_brow_1',
                    type: 'rect',
                    rect: ['32.6%', '8.1%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'block',
                    type: 'rect',
                    id: 'G_Talking_LIPS',
                    rect: ['34.5%', '9.8%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'block',
                    type: 'rect',
                    id: 'G2_Hairup',
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
                ["style", "display", 'block'],
                ["style", "top", '9.91%'],
                ["style", "left", '32.91%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_G2_TOP_1}": [
                ["style", "top", '2.36%'],
                ["style", "left", '0%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_G2_Hair}": [
                ["style", "top", '0.68%'],
                ["style", "display", 'block'],
                ["style", "left", '14.7%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_G2_FACE}": [
                ["style", "top", '3.15%'],
                ["style", "display", 'block'],
                ["style", "left", '20.45%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_G2_PANT_TOP_1}": [
                ["style", "left", '18.21%'],
                ["style", "top", '41.1%']
            ],
            "${symbolSelector}": [
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ],
            "${_G2_Hairup}": [
                ["style", "top", '-0.9%'],
                ["style", "display", 'block'],
                ["style", "left", '9.27%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_G_Body}": [
                ["style", "top", '13.18%'],
                ["style", "left", '5.43%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_G_Eye_brow_1}": [
                ["style", "top", '8.11%'],
                ["style", "left", '32.59%'],
                ["transform", "rotateZ", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 42000,
            autoPlay: true,
            timeline: [
                { id: "eid489204", tween: [ "style", "${_G2_Hairup}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid467077", tween: [ "transform", "${_G_Body}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid488571", tween: [ "style", "${_G2_PANT_TOP_1}", "top", '41.1%', { fromValue: '41.1%'}], position: 0, duration: 0 },
                { id: "eid489206", tween: [ "style", "${_G2_FACE}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid488572", tween: [ "style", "${_G2_PANT_TOP_1}", "left", '18.21%', { fromValue: '18.21%'}], position: 0, duration: 0 },
                { id: "eid354919", tween: [ "style", "${_G_Talking_LIPS}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid338399", tween: [ "style", "${_G_close_eye}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid489205", tween: [ "style", "${_G2_Hair}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/1/faces/0/rightBrow.png', '0px', '0px']
                },
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'L_eyebrow',
                    rect: ['56.8%', '-6.7%', '37.8%', '126.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/faces/0/leftbrow.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_L_eyebrow}": [
                ["style", "top", '-6.67%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "left", '56.76%'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_R_eyebrow}": [
                ["style", "top", '13.33%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "left", '-4.05%'],
                ["style", "-webkit-transform-origin", [82.51,45.84], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [82.51,45.84],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [82.51,45.84],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [82.51,45.84],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [82.51,45.84],{valueTemplate:'@@0@@% @@1@@%'}]
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
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid660252", tween: [ "style", "${_R_eyebrow}", "-webkit-transform-origin", [82.51,45.84], { valueTemplate: '@@0@@% @@1@@%', fromValue: [82.51,45.84]}], position: 500, duration: 0 },
                { id: "eid666732", tween: [ "style", "${_R_eyebrow}", "-moz-transform-origin", [82.51,45.84], { valueTemplate: '@@0@@% @@1@@%', fromValue: [82.51,45.84]}], position: 500, duration: 0 },
                { id: "eid666733", tween: [ "style", "${_R_eyebrow}", "-ms-transform-origin", [82.51,45.84], { valueTemplate: '@@0@@% @@1@@%', fromValue: [82.51,45.84]}], position: 500, duration: 0 },
                { id: "eid666734", tween: [ "style", "${_R_eyebrow}", "msTransformOrigin", [82.51,45.84], { valueTemplate: '@@0@@% @@1@@%', fromValue: [82.51,45.84]}], position: 500, duration: 0 },
                { id: "eid666735", tween: [ "style", "${_R_eyebrow}", "-o-transform-origin", [82.51,45.84], { valueTemplate: '@@0@@% @@1@@%', fromValue: [82.51,45.84]}], position: 500, duration: 0 },
                { id: "eid660438", tween: [ "transform", "${_L_eyebrow}", "rotateZ", '-17deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid660439", tween: [ "transform", "${_L_eyebrow}", "rotateZ", '0deg', { fromValue: '-17deg'}], position: 500, duration: 500 },
                { id: "eid660256", tween: [ "transform", "${_R_eyebrow}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid660257", tween: [ "transform", "${_R_eyebrow}", "rotateZ", '0deg', { fromValue: '8deg'}], position: 500, duration: 500 },
                { id: "eid660249", tween: [ "style", "${_L_eyebrow}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid660250", tween: [ "style", "${_L_eyebrow}", "display", 'block', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid334323", tween: [ "style", "${_R_eyebrow}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid660251", tween: [ "style", "${_R_eyebrow}", "display", 'block', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid660259", tween: [ "style", "${_L_eyebrow}", "-webkit-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 0, duration: 0 },
                { id: "eid666736", tween: [ "style", "${_L_eyebrow}", "-moz-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 0, duration: 0 },
                { id: "eid666737", tween: [ "style", "${_L_eyebrow}", "-ms-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 0, duration: 0 },
                { id: "eid666738", tween: [ "style", "${_L_eyebrow}", "msTransformOrigin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 0, duration: 0 },
                { id: "eid666739", tween: [ "style", "${_L_eyebrow}", "-o-transform-origin", [0,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,50]}], position: 0, duration: 0 }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/1/pant/0/rightLUP.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'RL_d_PB',
                    tag: 'img',
                    rect: ['-3%', '50.9%', '100%', '73.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/pant/0/rightLDP.png', '0px', '0px']
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
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Shirt/0/leftHSS.png', '0px', '0px'],
                    display: 'block',
                    type: 'image',
                    id: 'LH_TS2',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_LH_TS2}": [
                ["style", "top", '0%'],
                ["style", "left", '6.67%'],
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
                { id: "eid61", tween: [ "style", "${_LH_TS2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid483696", tween: [ "style", "${_LH_TS2}", "left", '6.67%', { fromValue: '6.67%'}], position: 0, duration: 0 }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/1/Shirt/0/leftHSS.png', '0px', '0px'],
                    id: 'LH_TS3',
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
            "${symbolSelector}": [
                ["style", "height", '23.11%'],
                ["style", "width", '33.55%']
            ],
            "${_LH_TS3}": [
                ["style", "top", '0%'],
                ["style", "left", '-6.15%'],
                ["style", "display", 'block']
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
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/1/Shirt/0/lovehandSS.png', '0px', '0px'],
                    id: 'Love_hand_TS',
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
            "${symbolSelector}": [
                ["style", "height", '23.71%'],
                ["style", "width", '77.64%']
            ],
            "${_Love_hand_TS}": [
                ["style", "top", '-6.88%'],
                ["style", "left", '1.65%'],
                ["style", "display", 'block']
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
            duration: 42000,
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
                    tag: 'img',
                    display: 'block',
                    id: 'lips',
                    rect: ['-11.8%', '-19.2%', '120.6%', '146.2%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/faces/0/lips.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '18.98%'],
                ["style", "width", '25%']
            ],
            "${_lips}": [
                ["style", "top", '-19.23%'],
                ["style", "left", '-14.71%'],
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
                { id: "eid544626", tween: [ "style", "${_lips}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/1/Bdy/Bdy.png', '0px', '0px']
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
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/1/Shirt/0/handCheekRSS.png', '0px', '0px'],
                    id: 'Hand_on_cheek_RTS',
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
            "${symbolSelector}": [
                ["style", "height", '24.07%'],
                ["style", "width", '28.76%']
            ],
            "${_Hand_on_cheek_RTS}": [
                ["style", "top", '-3.98%'],
                ["style", "left", '8.89%'],
                ["style", "display", 'block']
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
                    fill: ['rgba(0,0,0,0)', 'images/1/pant/0/leftLUP.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'LL_d_PB',
                    tag: 'img',
                    rect: ['-7.1%', '52.2%', '100%', '68.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/pant/0/leftLDP.png', '0px', '0px']
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
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'leftS',
                    rect: ['-7.7%', '-129.1%', '127.5%', '192.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/sneakers/0/leftS.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_leftS}": [
                ["style", "top", '-108.19%'],
                ["style", "display", 'block'],
                ["style", "height", '177.24%'],
                ["style", "left", '8.79%'],
                ["style", "width", '118.32%']
            ],
            "${symbolSelector}": [
                ["style", "height", '18.73%'],
                ["style", "width", '44.83%']
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
                { id: "eid559537", tween: [ "style", "${_leftS}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
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
                    rect: ['5.2%', '-5.1%', '100%', '100%', 'auto', 'auto'],
                    id: 'mb1',
                    fill: ['rgba(0,0,0,0)', 'images/1/mobile/mB/0/Ph.png', '0px', '0px'],
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
                ["style", "top", '-5.13%'],
                ["style", "left", '5.23%']
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
                    fill: ['rgba(0,0,0,0)', 'images/1/Shirt/0/foldingHandSS.png', '0px', '0px'],
                    id: 'Folding_hand_TS',
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
            "${_Folding_hand_TS}": [
                ["style", "top", '-5.83%'],
                ["style", "display", 'block'],
                ["style", "left", '0%'],
                ["style", "width", '96.25%']
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
                    fill: ['rgba(0,0,0,0)', 'images/1/faces/0/faces.png', '0px', '0px']
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
                ["style", "top", '62.04%'],
                ["style", "display", 'block'],
                ["style", "left", '45.59%'],
                ["transform", "rotateZ", '1deg']
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
                    fill: ['rgba(0,0,0,0)', 'images/1/Bdy/leftLU.png', '0px', '0px']
                },
                {
                    id: 'LL_d_Bttm',
                    type: 'image',
                    rect: ['15.2%', '40.4%', '79.8%', '51.8%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Bdy/leftLD.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_LL_d_Bttm}": [
                ["style", "left", '15.19%'],
                ["style", "top", '40.39%']
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
                    rect: ['-2.6%', '20.6%', '100%', '100%', 'auto', 'auto'],
                    tag: 'img',
                    id: 'close_eye',
                    display: 'none',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/1/faces/0/BlinkEye.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_close_eye}": [
                ["style", "display", 'none'],
                ["style", "top", '2.94%'],
                ["style", "left", '0%'],
                ["style", "width", '87.18%']
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
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Shirt/0/handFaceSS.png', '0px', '0px'],
                    display: 'block',
                    type: 'image',
                    id: 'Hand_on_face_TS',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Hand_on_face_TS}": [
                ["style", "top", '-4.93%'],
                ["style", "left", '0.8%'],
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
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Bdy/leftHU.png', '0px', '0px'],
                    display: 'block',
                    type: 'image',
                    id: 'LH_up',
                    tag: 'img'
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
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Bdy/HandLip.png', '0px', '0px'],
                    display: 'block',
                    type: 'image',
                    id: 'Hand_on_lipe',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '24.91%'],
                ["style", "width", '37.39%']
            ],
            "${_Hand_on_lipe}": [
                ["style", "top", '4.94%'],
                ["style", "display", 'block'],
                ["style", "left", '21.96%'],
                ["transform", "rotateZ", '-4deg']
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
            "${_G_LL}": [
                ["style", "left", '34.98%']
            ],
            "${_G2_LL_S_1}": [
                ["style", "top", '78.49%'],
                ["style", "left", '4.93%'],
                ["transform", "rotateZ", '-1deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '56.53%'],
                ["style", "width", '64.86%']
            ],
            "${_G2_LL_BTTM_1}": [
                ["style", "left", '38.92%']
            ],
            "${_G2_RL_shoe_1}": [
                ["style", "top", '77.48%'],
                ["transform", "scaleY", '0.96391'],
                ["transform", "rotateZ", '-4deg'],
                ["transform", "scaleX", '0.93715'],
                ["style", "left", '34.48%']
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
                { id: "eid564366", tween: [ "transform", "${_G2_LL_S_1}", "rotateZ", '-1deg', { fromValue: '-1deg'}], position: 0, duration: 0 },
                { id: "eid564365", tween: [ "style", "${_G2_LL_S_1}", "left", '4.93%', { fromValue: '4.93%'}], position: 0, duration: 0 },
                { id: "eid488574", tween: [ "style", "${_G2_LL_BTTM_1}", "left", '38.92%', { fromValue: '38.92%'}], position: 0, duration: 0 },
                { id: "eid488573", tween: [ "style", "${_G_LL}", "left", '34.98%', { fromValue: '34.98%'}], position: 0, duration: 0 },
                { id: "eid564228", tween: [ "style", "${_G2_LL_S_1}", "top", '78.49%', { fromValue: '78.49%'}], position: 0, duration: 0 }            ]
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
                    id: 'G_LH',
                    rect: ['53.4%', '1.6%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'LH_TS',
                    rect: ['51.1%', '-0.1%', '33.6%', '23.1%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Shirt/0/leftHSS.png', '0px', '0px']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'G_Hand_on_lips',
                    rect: ['57.8%', '2.3%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'G2_hand_on_lips_Ts_1',
                    rect: ['55.6%', '0.8%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'G_WOW_EXP',
                    rect: ['73.5%', '-2.2%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'G2_Wow_exp_TS_1',
                    rect: ['54.3%', '0%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'Thinking_hand__Up',
                    rect: ['54.3%', '16.5%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'Thinking_hand_TS',
                    rect: ['53%', '15.7%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'G_BYE_HAND',
                    rect: ['54.3%', '-4.8%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'showoff_LH',
                    rect: ['54.3%', '16.2%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'Showoff_LH_TS',
                    rect: ['52.1%', '15%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'TOP',
                    rect: ['2.2%', '12.8%', '87.9%', '87%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Shirt/0/Shirt.png', '0px', '0px']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'G-Thinking_hand',
                    rect: ['37%', '10%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'G_Showoff_RH',
                    rect: ['-11.6%', '16.1%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'G_Showoff_RH_TS',
                    rect: ['5.4%', '15.7%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'block',
                    type: 'rect',
                    id: 'G_RH',
                    rect: ['10.9%', '1.4%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    tag: 'img',
                    display: 'block',
                    id: 'RH_TS',
                    rect: ['6.4%', '0.6%', '26.5%', '24.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Shirt/0/rightHSS.png', '0px', '0px']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'G_HAND_ON_LIPS_2',
                    rect: ['40.9%', '-2.5%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'G_Hand_ON_CHEEKS',
                    rect: ['11.8%', '-3.7%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'G2_BYE_TS_1',
                    rect: ['52.1%', '0.4%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'G2_hand_on_cheeks_TS_1',
                    rect: ['6.4%', '-1.4%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'G_Hand_on_face2',
                    rect: ['12.8%', '-3.9%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'G2_Hand_ON_FACE_TS_1',
                    rect: ['3.5%', '-1.7%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'G_folding_hand2',
                    rect: ['12.8%', '1.9%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'G2_Folding_hand_TS_1',
                    rect: ['6.4%', '-0.4%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'G_LOVE_HAND',
                    rect: ['11.2%', '1.6%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'G2_LOVE_HAND_TS_1',
                    rect: ['1.9%', '0.6%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'G2_Mobile',
                    rect: ['1.6%', '-15.6%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'G2_Mobile_hand',
                    rect: ['12.8%', '-3.9%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'G2_mobile_han_Ts_1Copy',
                    rect: ['6.4%', '-2.5%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'G_Hand_0n_Chest',
                    rect: ['12.8%', '16.5%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'G_hand_on_chest_TS',
                    rect: ['8.3%', '14.7%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'G_1_hand_on_chest',
                    rect: ['7.4%', '18%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'G_1_hand_on_chest_TS',
                    rect: ['4.8%', '16.7%', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'G_1_hand_on_chest',
                symbolName: 'G_1_hand_on_chest',
                autoPlay: {

               }
            },
            {
                id: 'G2_BYE_TS_1',
                symbolName: 'G2_BYE_TS_1',
                autoPlay: {

               }
            },
            {
                id: 'Showoff_LH_TS',
                symbolName: 'Showoff_LH_TS',
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
                id: 'G_1_hand_on_chest_TS',
                symbolName: 'G_1_hand_on_chest_TS',
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
                id: 'G_hand_on_chest_TS',
                symbolName: 'G_hand_on_chest_TS',
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
                id: 'G_Hand_0n_Chest',
                symbolName: 'Hand_0n_Chest',
                autoPlay: {

               }
            },
            {
                id: 'showoff_LH',
                symbolName: 'showoff_LH',
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
                id: 'G2_mobile_han_Ts_1Copy',
                symbolName: 'G2_mobile_han_Ts_1',
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
                id: 'G-Thinking_hand',
                symbolName: 'Thinking_hand',
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
                id: 'G2_Mobile_hand',
                symbolName: 'G2_Mobile_hand',
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
                id: 'G2_hand_on_cheeks_TS_1',
                symbolName: 'G2_hand_on_cheeks_TS_1',
                autoPlay: {

               }
            },
            {
                id: 'G_Showoff_RH_TS',
                symbolName: 'Showoff_RH_TS',
                autoPlay: {

               }
            },
            {
                id: 'Thinking_hand__Up',
                symbolName: 'Thinking_hand__Up',
                autoPlay: {

               }
            },
            {
                id: 'Thinking_hand_TS',
                symbolName: 'Thinking_hand_TS',
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
                id: 'G_Showoff_RH',
                symbolName: 'Showoff_RH',
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
                id: 'G_BYE_HAND',
                symbolName: 'G_BYE_HAND',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_G_Showoff_RH_TS}": [
                ["style", "top", '15.32%'],
                ["style", "left", '4.79%'],
                ["style", "display", 'none']
            ],
            "${_G_HAND_ON_LIPS_2}": [
                ["style", "top", '10.3%'],
                ["transform", "rotateZ", '3deg'],
                ["style", "display", 'none'],
                ["style", "left", '35.14%'],
                ["style", "-webkit-transform-origin", [28.87,57.77], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [28.87,57.77],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [28.87,57.77],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [28.87,57.77],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [28.87,57.77],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_G_Hand_on_lips}": [
                ["style", "display", 'none'],
                ["style", "left", '53.67%'],
                ["style", "top", '16.77%']
            ],
            "${_G2_Wow_exp_TS_1}": [
                ["style", "top", '15.21%'],
                ["style", "left", '52.4%'],
                ["style", "display", 'none']
            ],
            "${_RH_TS}": [
                ["style", "top", '15.33%'],
                ["style", "left", '7.99%'],
                ["style", "display", 'block']
            ],
            "${_G_folding_hand2}": [
                ["style", "top", '18.56%'],
                ["style", "left", '12.78%'],
                ["style", "display", 'none']
            ],
            "${_Showoff_LH_TS}": [
                ["style", "display", 'none'],
                ["style", "top", '14.73%']
            ],
            "${_G_Hand_0n_Chest}": [
                ["style", "display", 'none']
            ],
            "${_Thinking_hand_TS}": [
                ["style", "display", 'none'],
                ["style", "left", '51.8%'],
                ["style", "top", '14.72%']
            ],
            "${_G2_hand_on_cheeks_TS_1}": [
                ["style", "display", 'none'],
                ["style", "left", '3.19%'],
                ["style", "top", '14.97%']
            ],
            "${_G_BYE_HAND}": [
                ["style", "display", 'none'],
                ["style", "left", '50.8%'],
                ["style", "top", '11.02%']
            ],
            "${_G_RH}": [
                ["style", "top", '16.65%'],
                ["style", "left", '11.82%'],
                ["style", "display", 'block']
            ],
            "${_G2_Hand_ON_FACE_TS_1}": [
                ["style", "display", 'none'],
                ["style", "left", '4.47%'],
                ["style", "top", '16.53%']
            ],
            "${_TOP}": [
                ["style", "display", 'block'],
                ["style", "left", '1.6%'],
                ["style", "top", '12.22%']
            ],
            "${_G2_mobile_han_Ts_1Copy}": [
                ["style", "top", '16.29%'],
                ["style", "left", '8.31%'],
                ["style", "display", 'none']
            ],
            "${_G_hand_on_chest_TS}": [
                ["style", "display", 'none']
            ],
            "${_G_Showoff_RH}": [
                ["style", "display", 'none']
            ],
            "${_G_LOVE_HAND}": [
                ["style", "display", 'none'],
                ["style", "left", '7.35%'],
                ["style", "top", '16.89%']
            ],
            "${_G2_LOVE_HAND_TS_1}": [
                ["style", "top", '16.05%'],
                ["style", "left", '0%'],
                ["style", "display", 'none']
            ],
            "${_showoff_LH}": [
                ["style", "top", '16.77%'],
                ["style", "left", '53.04%'],
                ["style", "display", 'none']
            ],
            "${_G_Hand_on_face2}": [
                ["style", "display", 'none'],
                ["style", "left", '11.5%'],
                ["style", "top", '13.17%']
            ],
            "${_G_1_hand_on_chest}": [
                ["style", "display", 'none'],
                ["style", "left", '13.36%'],
                ["style", "top", '16.5%']
            ],
            "${_G2_BYE_TS_1}": [
                ["style", "display", 'none'],
                ["style", "left", '45.69%'],
                ["style", "top", '14.97%']
            ],
            "${_G2_Folding_hand_TS_1}": [
                ["style", "top", '16.89%'],
                ["transform", "scaleY", '1.07709'],
                ["style", "display", 'none'],
                ["style", "left", '6.39%'],
                ["transform", "scaleX", '1.0223']
            ],
            "${_LH_TS}": [
                ["style", "top", '15.33%'],
                ["style", "left", '49.52%'],
                ["style", "display", 'block']
            ],
            "${_G2_hand_on_lips_Ts_1}": [
                ["style", "display", 'none'],
                ["style", "left", '52.08%'],
                ["style", "top", '16.29%']
            ],
            "${_G_LH}": [
                ["style", "display", 'block'],
                ["style", "left", '53.35%'],
                ["style", "top", '18.44%']
            ],
            "${_G_WOW_EXP}": [
                ["style", "top", '13.65%'],
                ["style", "left", '69.33%'],
                ["style", "display", 'none']
            ],
            "${_G2_Mobile_hand}": [
                ["style", "top", '11.62%'],
                ["style", "left", '12.46%'],
                ["style", "display", 'none']
            ],
            "${_Thinking_hand__Up}": [
                ["style", "top", '16.89%'],
                ["style", "left", '52.72%'],
                ["style", "display", 'none']
            ],
            "${_G2_Mobile}": [
                ["style", "top", '0%'],
                ["style", "left", '1.28%'],
                ["style", "display", 'none']
            ],
            "${_G-Thinking_hand}": [
                ["style", "top", '8.1%'],
                ["transform", "scaleY", '1.06395'],
                ["transform", "rotateZ", '4deg'],
                ["transform", "scaleX", '1.13846'],
                ["style", "-webkit-transform-origin", [86.06,90.54], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [86.06,90.54],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [86.06,90.54],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [86.06,90.54],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [86.06,90.54],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '32.59%'],
                ["style", "display", 'none']
            ],
            "${_G_Hand_ON_CHEEKS}": [
                ["style", "display", 'none'],
                ["style", "left", '11.5%'],
                ["style", "top", '14.13%']
            ],
            "${symbolSelector}": [
                ["style", "height", '94.03%'],
                ["style", "width", '100%']
            ],
            "${_G_1_hand_on_chest_TS}": [
                ["transform", "scaleX", '1.06201'],
                ["style", "top", '13.73%'],
                ["style", "left", '9.25%'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 42000,
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
                { id: "eid794", tween: [ "style", "${_RH_TS}", "display", 'block', { fromValue: 'block'}], position: 25000, duration: 0 },
                { id: "eid489905", tween: [ "style", "${_RH_TS}", "display", 'block', { fromValue: 'block'}], position: 27000, duration: 0 },
                { id: "eid489902", tween: [ "style", "${_RH_TS}", "display", 'block', { fromValue: 'block'}], position: 29000, duration: 0 },
                { id: "eid489914", tween: [ "style", "${_RH_TS}", "display", 'none', { fromValue: 'block'}], position: 30000, duration: 0 },
                { id: "eid489987", tween: [ "style", "${_RH_TS}", "display", 'block', { fromValue: 'none'}], position: 32000, duration: 0 },
                { id: "eid490002", tween: [ "style", "${_RH_TS}", "display", 'block', { fromValue: 'block'}], position: 35000, duration: 0 },
                { id: "eid490008", tween: [ "style", "${_RH_TS}", "display", 'none', { fromValue: 'block'}], position: 36000, duration: 0 },
                { id: "eid490013", tween: [ "style", "${_RH_TS}", "display", 'block', { fromValue: 'none'}], position: 38000, duration: 0 },
                { id: "eid490076", tween: [ "style", "${_RH_TS}", "display", 'none', { fromValue: 'block'}], position: 39000, duration: 0 },
                { id: "eid490081", tween: [ "style", "${_RH_TS}", "display", 'block', { fromValue: 'none'}], position: 41000, duration: 0 },
                { id: "eid517259", tween: [ "style", "${_RH_TS}", "display", 'none', { fromValue: 'block'}], position: 42000, duration: 0 },
                { id: "eid734", tween: [ "style", "${_G_LOVE_HAND}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid735", tween: [ "style", "${_G_LOVE_HAND}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid736", tween: [ "style", "${_G_LOVE_HAND}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid336690", tween: [ "style", "${_TOP}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid746", tween: [ "style", "${_G_Hand_on_face2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid747", tween: [ "style", "${_G_Hand_on_face2}", "display", 'block', { fromValue: 'none'}], position: 11000, duration: 0 },
                { id: "eid748", tween: [ "style", "${_G_Hand_on_face2}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
                { id: "eid795", tween: [ "style", "${_G_RH}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid796", tween: [ "style", "${_G_RH}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid797", tween: [ "style", "${_G_RH}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid798", tween: [ "style", "${_G_RH}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
                { id: "eid799", tween: [ "style", "${_G_RH}", "display", 'block', { fromValue: 'none'}], position: 9500, duration: 0 },
                { id: "eid800", tween: [ "style", "${_G_RH}", "display", 'none', { fromValue: 'block'}], position: 11000, duration: 0 },
                { id: "eid801", tween: [ "style", "${_G_RH}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
                { id: "eid802", tween: [ "style", "${_G_RH}", "display", 'none', { fromValue: 'block'}], position: 14000, duration: 0 },
                { id: "eid803", tween: [ "style", "${_G_RH}", "display", 'block', { fromValue: 'none'}], position: 17500, duration: 0 },
                { id: "eid804", tween: [ "style", "${_G_RH}", "display", 'block', { fromValue: 'block'}], position: 25000, duration: 0 },
                { id: "eid489906", tween: [ "style", "${_G_RH}", "display", 'block', { fromValue: 'block'}], position: 27000, duration: 0 },
                { id: "eid489901", tween: [ "style", "${_G_RH}", "display", 'block', { fromValue: 'block'}], position: 29000, duration: 0 },
                { id: "eid489913", tween: [ "style", "${_G_RH}", "display", 'none', { fromValue: 'block'}], position: 30000, duration: 0 },
                { id: "eid489988", tween: [ "style", "${_G_RH}", "display", 'block', { fromValue: 'none'}], position: 32000, duration: 0 },
                { id: "eid490003", tween: [ "style", "${_G_RH}", "display", 'block', { fromValue: 'block'}], position: 35000, duration: 0 },
                { id: "eid490009", tween: [ "style", "${_G_RH}", "display", 'none', { fromValue: 'block'}], position: 36000, duration: 0 },
                { id: "eid490012", tween: [ "style", "${_G_RH}", "display", 'block', { fromValue: 'none'}], position: 38000, duration: 0 },
                { id: "eid490077", tween: [ "style", "${_G_RH}", "display", 'none', { fromValue: 'block'}], position: 39000, duration: 0 },
                { id: "eid490080", tween: [ "style", "${_G_RH}", "display", 'block', { fromValue: 'none'}], position: 41000, duration: 0 },
                { id: "eid517260", tween: [ "style", "${_G_RH}", "display", 'none', { fromValue: 'block'}], position: 42000, duration: 0 },
                { id: "eid489896", tween: [ "style", "${_Thinking_hand_TS}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid489889", tween: [ "style", "${_Thinking_hand_TS}", "display", 'block', { fromValue: 'none'}], position: 27000, duration: 0 },
                { id: "eid489899", tween: [ "style", "${_Thinking_hand_TS}", "display", 'none', { fromValue: 'block'}], position: 29000, duration: 0 },
                { id: "eid489992", tween: [ "style", "${_Thinking_hand_TS}", "display", 'block', { fromValue: 'none'}], position: 33000, duration: 0 },
                { id: "eid490000", tween: [ "style", "${_Thinking_hand_TS}", "display", 'none', { fromValue: 'block'}], position: 35000, duration: 0 },
                { id: "eid743", tween: [ "style", "${_G2_Hand_ON_FACE_TS_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid744", tween: [ "style", "${_G2_Hand_ON_FACE_TS_1}", "display", 'block', { fromValue: 'none'}], position: 11000, duration: 0 },
                { id: "eid745", tween: [ "style", "${_G2_Hand_ON_FACE_TS_1}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
                { id: "eid659602", tween: [ "style", "${_G_Hand_on_lips}", "top", '16.77%', { fromValue: '16.77%'}], position: 19000, duration: 0 },
                { id: "eid737", tween: [ "style", "${_G2_Folding_hand_TS_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid738", tween: [ "style", "${_G2_Folding_hand_TS_1}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
                { id: "eid739", tween: [ "style", "${_G2_Folding_hand_TS_1}", "display", 'none', { fromValue: 'block'}], position: 17500, duration: 0 },
                { id: "eid489910", tween: [ "style", "${_G_Showoff_RH}", "display", 'block', { fromValue: 'none'}], position: 30000, duration: 0 },
                { id: "eid489984", tween: [ "style", "${_G_Showoff_RH}", "display", 'none', { fromValue: 'block'}], position: 32000, duration: 0 },
                { id: "eid489909", tween: [ "style", "${_G_Showoff_RH_TS}", "display", 'block', { fromValue: 'none'}], position: 30000, duration: 0 },
                { id: "eid489983", tween: [ "style", "${_G_Showoff_RH_TS}", "display", 'none', { fromValue: 'block'}], position: 32000, duration: 0 },
                { id: "eid489897", tween: [ "style", "${_Thinking_hand__Up}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid489890", tween: [ "style", "${_Thinking_hand__Up}", "display", 'block', { fromValue: 'none'}], position: 27000, duration: 0 },
                { id: "eid489900", tween: [ "style", "${_Thinking_hand__Up}", "display", 'none', { fromValue: 'block'}], position: 29000, duration: 0 },
                { id: "eid489993", tween: [ "style", "${_Thinking_hand__Up}", "display", 'block', { fromValue: 'none'}], position: 33000, duration: 0 },
                { id: "eid489999", tween: [ "style", "${_Thinking_hand__Up}", "display", 'none', { fromValue: 'block'}], position: 35000, duration: 0 },
                { id: "eid489911", tween: [ "style", "${_Showoff_LH_TS}", "display", 'block', { fromValue: 'none'}], position: 30000, duration: 0 },
                { id: "eid489985", tween: [ "style", "${_Showoff_LH_TS}", "display", 'none', { fromValue: 'block'}], position: 32000, duration: 0 },
                { id: "eid489888", tween: [ "style", "${_G_Hand_0n_Chest}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid490011", tween: [ "style", "${_G_Hand_0n_Chest}", "display", 'block', { fromValue: 'none'}], position: 36000, duration: 0 },
                { id: "eid490017", tween: [ "style", "${_G_Hand_0n_Chest}", "display", 'none', { fromValue: 'block'}], position: 38000, duration: 0 },
                { id: "eid490074", tween: [ "style", "${_G_1_hand_on_chest_TS}", "display", 'block', { fromValue: 'none'}], position: 39000, duration: 0 },
                { id: "eid490078", tween: [ "style", "${_G_1_hand_on_chest_TS}", "display", 'none', { fromValue: 'block'}], position: 41000, duration: 0 },
                { id: "eid549039", tween: [ "style", "${_G_WOW_EXP}", "left", '69.33%', { fromValue: '69.33%'}], position: 21000, duration: 0 },
                { id: "eid752", tween: [ "style", "${_G2_BYE_TS_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid753", tween: [ "style", "${_G2_BYE_TS_1}", "display", 'block', { fromValue: 'none'}], position: 23000, duration: 0 },
                { id: "eid754", tween: [ "style", "${_G2_BYE_TS_1}", "display", 'none', { fromValue: 'block'}], position: 24000, duration: 0 },
                { id: "eid772", tween: [ "style", "${_G_WOW_EXP}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid773", tween: [ "style", "${_G_WOW_EXP}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
                { id: "eid774", tween: [ "style", "${_G_WOW_EXP}", "display", 'none', { fromValue: 'block'}], position: 22000, duration: 0 },
                { id: "eid758", tween: [ "style", "${_G_HAND_ON_LIPS_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid759", tween: [ "style", "${_G_HAND_ON_LIPS_2}", "display", 'block', { fromValue: 'none'}], position: 19000, duration: 0 },
                { id: "eid760", tween: [ "style", "${_G_HAND_ON_LIPS_2}", "display", 'none', { fromValue: 'block'}], position: 20500, duration: 0 },
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
                { id: "eid489903", tween: [ "style", "${_LH_TS}", "display", 'none', { fromValue: 'block'}], position: 27000, duration: 0 },
                { id: "eid489907", tween: [ "style", "${_LH_TS}", "display", 'block', { fromValue: 'none'}], position: 29000, duration: 0 },
                { id: "eid489915", tween: [ "style", "${_LH_TS}", "display", 'none', { fromValue: 'block'}], position: 30000, duration: 0 },
                { id: "eid489989", tween: [ "style", "${_LH_TS}", "display", 'block', { fromValue: 'none'}], position: 32000, duration: 0 },
                { id: "eid491040", tween: [ "style", "${_LH_TS}", "display", 'none', { fromValue: 'block'}], position: 33000, duration: 0 },
                { id: "eid490004", tween: [ "style", "${_LH_TS}", "display", 'block', { fromValue: 'none'}], position: 35000, duration: 0 },
                { id: "eid490006", tween: [ "style", "${_LH_TS}", "display", 'none', { fromValue: 'block'}], position: 36000, duration: 0 },
                { id: "eid490014", tween: [ "style", "${_LH_TS}", "display", 'block', { fromValue: 'none'}], position: 38000, duration: 0 },
                { id: "eid755", tween: [ "style", "${_G_Hand_ON_CHEEKS}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid756", tween: [ "style", "${_G_Hand_ON_CHEEKS}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
                { id: "eid757", tween: [ "style", "${_G_Hand_ON_CHEEKS}", "display", 'none', { fromValue: 'block'}], position: 9500, duration: 0 },
                { id: "eid727", tween: [ "style", "${_G2_LOVE_HAND_TS_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid728", tween: [ "style", "${_G2_LOVE_HAND_TS_1}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid729", tween: [ "style", "${_G2_LOVE_HAND_TS_1}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid780", tween: [ "style", "${_G_Hand_on_lips}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid781", tween: [ "style", "${_G_Hand_on_lips}", "display", 'block', { fromValue: 'none'}], position: 19000, duration: 0 },
                { id: "eid782", tween: [ "style", "${_G_Hand_on_lips}", "display", 'none', { fromValue: 'block'}], position: 20500, duration: 0 },
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
                { id: "eid489904", tween: [ "style", "${_G_LH}", "display", 'none', { fromValue: 'block'}], position: 27000, duration: 0 },
                { id: "eid489908", tween: [ "style", "${_G_LH}", "display", 'block', { fromValue: 'none'}], position: 29000, duration: 0 },
                { id: "eid489916", tween: [ "style", "${_G_LH}", "display", 'none', { fromValue: 'block'}], position: 30000, duration: 0 },
                { id: "eid489990", tween: [ "style", "${_G_LH}", "display", 'block', { fromValue: 'none'}], position: 32000, duration: 0 },
                { id: "eid491041", tween: [ "style", "${_G_LH}", "display", 'none', { fromValue: 'block'}], position: 33000, duration: 0 },
                { id: "eid490005", tween: [ "style", "${_G_LH}", "display", 'block', { fromValue: 'none'}], position: 35000, duration: 0 },
                { id: "eid490007", tween: [ "style", "${_G_LH}", "display", 'none', { fromValue: 'block'}], position: 36000, duration: 0 },
                { id: "eid490015", tween: [ "style", "${_G_LH}", "display", 'block', { fromValue: 'none'}], position: 38000, duration: 0 },
                { id: "eid725", tween: [ "style", "${_G2_Mobile}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid726", tween: [ "style", "${_G2_Mobile}", "display", 'none', { fromValue: 'none'}], position: 25000, duration: 0 },
                { id: "eid489894", tween: [ "style", "${_G2_Mobile}", "display", 'none', { fromValue: 'none'}], position: 27000, duration: 0 },
                { id: "eid517261", tween: [ "style", "${_G2_Mobile}", "display", 'block', { fromValue: 'none'}], position: 42000, duration: 0 },
                { id: "eid491726", tween: [ "style", "${_G_1_hand_on_chest}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid491723", tween: [ "style", "${_G_1_hand_on_chest}", "display", 'none', { fromValue: 'none'}], position: 27000, duration: 0 },
                { id: "eid490075", tween: [ "style", "${_G_1_hand_on_chest}", "display", 'block', { fromValue: 'none'}], position: 39000, duration: 0 },
                { id: "eid490079", tween: [ "style", "${_G_1_hand_on_chest}", "display", 'none', { fromValue: 'block'}], position: 41000, duration: 0 },
                { id: "eid761", tween: [ "style", "${_G_HAND_ON_LIPS_2}", "-webkit-transform-origin", [28.87,57.77], { valueTemplate: '@@0@@% @@1@@%', fromValue: [28.87,57.77]}], position: 19000, duration: 0 },
                { id: "eid666740", tween: [ "style", "${_G_HAND_ON_LIPS_2}", "-moz-transform-origin", [28.87,57.77], { valueTemplate: '@@0@@% @@1@@%', fromValue: [28.87,57.77]}], position: 19000, duration: 0 },
                { id: "eid666741", tween: [ "style", "${_G_HAND_ON_LIPS_2}", "-ms-transform-origin", [28.87,57.77], { valueTemplate: '@@0@@% @@1@@%', fromValue: [28.87,57.77]}], position: 19000, duration: 0 },
                { id: "eid666742", tween: [ "style", "${_G_HAND_ON_LIPS_2}", "msTransformOrigin", [28.87,57.77], { valueTemplate: '@@0@@% @@1@@%', fromValue: [28.87,57.77]}], position: 19000, duration: 0 },
                { id: "eid666743", tween: [ "style", "${_G_HAND_ON_LIPS_2}", "-o-transform-origin", [28.87,57.77], { valueTemplate: '@@0@@% @@1@@%', fromValue: [28.87,57.77]}], position: 19000, duration: 0 },
                { id: "eid723", tween: [ "style", "${_G2_Mobile_hand}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid724", tween: [ "style", "${_G2_Mobile_hand}", "display", 'none', { fromValue: 'none'}], position: 25000, duration: 0 },
                { id: "eid489893", tween: [ "style", "${_G2_Mobile_hand}", "display", 'none', { fromValue: 'none'}], position: 27000, duration: 0 },
                { id: "eid517262", tween: [ "style", "${_G2_Mobile_hand}", "display", 'block', { fromValue: 'none'}], position: 42000, duration: 0 },
                { id: "eid721", tween: [ "style", "${_G2_mobile_han_Ts_1Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid722", tween: [ "style", "${_G2_mobile_han_Ts_1Copy}", "display", 'none', { fromValue: 'none'}], position: 25000, duration: 0 },
                { id: "eid489892", tween: [ "style", "${_G2_mobile_han_Ts_1Copy}", "display", 'none', { fromValue: 'none'}], position: 27000, duration: 0 },
                { id: "eid517263", tween: [ "style", "${_G2_mobile_han_Ts_1Copy}", "display", 'block', { fromValue: 'none'}], position: 42000, duration: 0 },
                { id: "eid547741", tween: [ "style", "${_G2_hand_on_lips_Ts_1}", "top", '16.29%', { fromValue: '16.29%'}], position: 19000, duration: 0 },
                { id: "eid489895", tween: [ "style", "${_G-Thinking_hand}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid489891", tween: [ "style", "${_G-Thinking_hand}", "display", 'block', { fromValue: 'none'}], position: 27000, duration: 0 },
                { id: "eid489898", tween: [ "style", "${_G-Thinking_hand}", "display", 'none', { fromValue: 'block'}], position: 29000, duration: 0 },
                { id: "eid489991", tween: [ "style", "${_G-Thinking_hand}", "display", 'block', { fromValue: 'none'}], position: 33000, duration: 0 },
                { id: "eid490001", tween: [ "style", "${_G-Thinking_hand}", "display", 'none', { fromValue: 'block'}], position: 35000, duration: 0 },
                { id: "eid766", tween: [ "style", "${_G_BYE_HAND}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid767", tween: [ "style", "${_G_BYE_HAND}", "display", 'block', { fromValue: 'none'}], position: 23000, duration: 0 },
                { id: "eid768", tween: [ "style", "${_G_BYE_HAND}", "display", 'none', { fromValue: 'block'}], position: 24000, duration: 0 },
                { id: "eid777", tween: [ "style", "${_G2_hand_on_lips_Ts_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid778", tween: [ "style", "${_G2_hand_on_lips_Ts_1}", "display", 'block', { fromValue: 'none'}], position: 19000, duration: 0 },
                { id: "eid779", tween: [ "style", "${_G2_hand_on_lips_Ts_1}", "display", 'none', { fromValue: 'block'}], position: 20500, duration: 0 },
                { id: "eid489912", tween: [ "style", "${_showoff_LH}", "display", 'block', { fromValue: 'none'}], position: 30000, duration: 0 },
                { id: "eid489986", tween: [ "style", "${_showoff_LH}", "display", 'none', { fromValue: 'block'}], position: 32000, duration: 0 },
                { id: "eid489887", tween: [ "style", "${_G_hand_on_chest_TS}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid490010", tween: [ "style", "${_G_hand_on_chest_TS}", "display", 'block', { fromValue: 'none'}], position: 36000, duration: 0 },
                { id: "eid490016", tween: [ "style", "${_G_hand_on_chest_TS}", "display", 'none', { fromValue: 'block'}], position: 38000, duration: 0 },
                { id: "eid769", tween: [ "style", "${_G2_Wow_exp_TS_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid770", tween: [ "style", "${_G2_Wow_exp_TS_1}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
                { id: "eid771", tween: [ "style", "${_G2_Wow_exp_TS_1}", "display", 'none', { fromValue: 'block'}], position: 22000, duration: 0 },
                { id: "eid659603", tween: [ "style", "${_G_Hand_on_lips}", "left", '53.67%', { fromValue: '53.67%'}], position: 19000, duration: 0 }            ]
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
                    rect: ['0%', '24.1%', '64.6%', '75.9%', 'auto', 'auto'],
                    id: 'LH_up2',
                    fill: ['rgba(0,0,0,0)', 'images/1/Bdy/leftHU.png', '0px', '0px'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['32.3%', '0%', '67.7%', '99.1%', 'auto', 'auto'],
                    id: 'Hand_on_bye',
                    fill: ['rgba(0,0,0,0)', 'images/1/Bdy/handBye.png', '0px', '0px'],
                    type: 'image',
                    tag: 'img'
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
                { id: "eid666744", tween: [ "style", "${_Hand_on_bye}", "-moz-transform-origin", [17.33,96.1], { valueTemplate: '@@0@@% @@1@@%', fromValue: [17.33,96.1]}], position: 500, duration: 0 },
                { id: "eid666745", tween: [ "style", "${_Hand_on_bye}", "-ms-transform-origin", [17.33,96.1], { valueTemplate: '@@0@@% @@1@@%', fromValue: [17.33,96.1]}], position: 500, duration: 0 },
                { id: "eid666746", tween: [ "style", "${_Hand_on_bye}", "msTransformOrigin", [17.33,96.1], { valueTemplate: '@@0@@% @@1@@%', fromValue: [17.33,96.1]}], position: 500, duration: 0 },
                { id: "eid666747", tween: [ "style", "${_Hand_on_bye}", "-o-transform-origin", [17.33,96.1], { valueTemplate: '@@0@@% @@1@@%', fromValue: [17.33,96.1]}], position: 500, duration: 0 },
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
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/1/hairstyle/0/hairU.png', '0px', '0px'],
                    id: 'Hr_1_up2',
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
                    rect: ['0%', '0%', '100%', '99.9%', 'auto', 'auto'],
                    id: 'paues',
                    fill: ['rgba(0,0,0,0)', 'images/halt.png', '0px', '0px'],
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
},
"G_hand_on_chest_TS": {
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
                    fill: ['rgba(0,0,0,0)', 'images/1/Shirt/0/BothhandchestSS.png', '0px', '0px'],
                    display: 'block',
                    type: 'image',
                    id: 'hand_on_chestTS',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hand_on_chestTS}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '22.04%'],
                ["style", "width", '72.21%']
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
                { id: "eid527436", tween: [ "style", "${_hand_on_chestTS}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid527437", tween: [ "style", "${_hand_on_chestTS}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 }            ]
        }
    }
},
"Hand_0n_Chest": {
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
                    id: 'hand_on_chest',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/1/Bdy/bothhandchest.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hand_on_chest}": [
                ["style", "top", '0.02%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '20.6%'],
                ["style", "width", '68.06%']
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
                { id: "eid527434", tween: [ "style", "${_hand_on_chest}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid527435", tween: [ "style", "${_hand_on_chest}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 }            ]
        }
    }
},
"Thinking_hand_TS": {
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
                    fill: ['rgba(0,0,0,0)', 'images/1/Shirt/0/leftHSS.png', '0px', '0px'],
                    display: 'block',
                    type: 'image',
                    id: 'LH_TS2',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_LH_TS2}": [
                ["style", "top", '0.01%'],
                ["style", "left", '0.02%'],
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
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid490682", tween: [ "style", "${_LH_TS2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid490683", tween: [ "style", "${_LH_TS2}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 }            ]
        }
    }
},
"Thinking_hand__Up": {
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
                    id: 'LH_up',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/1/Bdy/leftHU.png', '0px', '0px']
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
                ["style", "top", '0.02%'],
                ["style", "left", '-0.01%'],
                ["style", "display", 'block']
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
                { id: "eid490680", tween: [ "style", "${_LH_up}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid490684", tween: [ "style", "${_LH_up}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 }            ]
        }
    }
},
"Thinking_hand": {
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
                    transform: [[0, 0], ['-18'], [], ['1.08154', '1.10294']],
                    display: 'block',
                    rect: ['52.5%', '5.6%', '45.3%', '87.3%', 'auto', 'auto'],
                    id: 'Thinking_hand',
                    fill: ['rgba(0,0,0,0)', 'images/1/Bdy/Thinking_hand.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Thinking_hand}": [
                ["style", "-webkit-transform-origin", [83.09,96.35], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [83.09,96.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [83.09,96.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [83.09,96.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [83.09,96.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '1.10294'],
                ["transform", "rotateZ", '-5deg'],
                ["transform", "scaleX", '1.08154'],
                ["style", "top", '6.01%'],
                ["style", "left", '61.42%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '27.99%'],
                ["style", "width", '41.61%']
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
                { id: "eid490678", tween: [ "style", "${_Thinking_hand}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid490681", tween: [ "style", "${_Thinking_hand}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 }            ]
        }
    }
},
"Showoff_RH_TS": {
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
                    rect: ['-0.1%', '0%', '99.9%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Shirt/0/rightHSS.png', '0px', '0px'],
                    display: 'block',
                    type: 'image',
                    id: 'RH_TS2',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RH_TS2}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '24.91%'],
                ["style", "width", '26.52%']
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
                { id: "eid496290", tween: [ "style", "${_RH_TS2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid496291", tween: [ "style", "${_RH_TS2}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 }            ]
        }
    }
},
"Showoff_RH": {
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
                    rect: ['50.3%', '0%', '45.5%', '60.7%', 'auto', 'auto'],
                    id: 'RH_up',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/1/Bdy/rHU.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], ['-10'], [], ['0.64573', '0.88761']],
                    display: 'block',
                    rect: ['-13.3%', '45.4%', '126.6%', '54.9%', 'auto', 'auto'],
                    id: 'showoff_ryt',
                    fill: ['rgba(0,0,0,0)', 'images/1/Bdy/showoffLefthand.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_showoff_ryt}": [
                ["style", "top", '37.39%'],
                ["style", "height", '54.94%'],
                ["transform", "scaleY", '0.88761'],
                ["transform", "rotateZ", '-10deg'],
                ["style", "display", 'block'],
                ["transform", "scaleX", '0.64573'],
                ["style", "left", '-16.15%'],
                ["style", "width", '126.59%']
            ],
            "${_RH_up}": [
                ["style", "top", '0.01%'],
                ["style", "left", '50.34%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '35.75%'],
                ["style", "width", '41.4%']
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
                { id: "eid496197", tween: [ "style", "${_showoff_ryt}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid496199", tween: [ "style", "${_showoff_ryt}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid496196", tween: [ "style", "${_RH_up}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid496198", tween: [ "style", "${_RH_up}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 }            ]
        }
    }
},
"Showoff_LH_TS": {
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
                    rect: ['0.1%', '0.1%', '100.2%', '99.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1/Shirt/0/leftHSS.png', '0px', '0px'],
                    display: 'block',
                    type: 'image',
                    id: 'LH_TS3',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '23.11%'],
                ["style", "width", '33.55%']
            ],
            "${_LH_TS3}": [
                ["style", "top", '0%'],
                ["style", "left", '0.01%'],
                ["style", "display", 'block']
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
                { id: "eid496288", tween: [ "style", "${_LH_TS3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid496289", tween: [ "style", "${_LH_TS3}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 }            ]
        }
    }
},
"showoff_LH": {
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
                    rect: ['0%', '0%', '53.2%', '97.6%', 'auto', 'auto'],
                    type: 'image',
                    id: 'LH_up2',
                    opacity: 0.99,
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/1/Bdy/leftHU.png', '0px', '0px']
                },
                {
                    rect: ['31.7%', '0.6%', '68.4%', '99.4%', 'auto', 'auto'],
                    id: 'showoff_lft',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/1/Bdy/showoffryt.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '20.12%'],
                ["style", "width", '50.48%']
            ],
            "${_showoff_lft}": [
                ["style", "top", '-14.44%'],
                ["style", "left", '27.85%'],
                ["style", "display", 'block']
            ],
            "${_LH_up2}": [
                ["style", "top", '0.01%'],
                ["style", "opacity", '0.99'],
                ["style", "left", '-0.01%'],
                ["style", "display", 'block']
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
                { id: "eid495928", tween: [ "style", "${_showoff_lft}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid495930", tween: [ "style", "${_showoff_lft}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid495929", tween: [ "style", "${_LH_up2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid495931", tween: [ "style", "${_LH_up2}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 }            ]
        }
    }
},
"G_1_hand_on_chest_TS": {
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
                    fill: ['rgba(0,0,0,0)', 'images/1/Shirt/0/1handchestSS.png', '0px', '0px'],
                    display: 'block',
                    type: 'image',
                    id: '_1_hand_on_chestTS',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '21.68%'],
                ["style", "width", '40.9%']
            ],
            "${__1_hand_on_chestTS}": [
                ["style", "top", '0.02%'],
                ["style", "left", '-0.01%'],
                ["style", "display", 'block']
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
                { id: "eid531754", tween: [ "style", "${__1_hand_on_chestTS}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid531755", tween: [ "style", "${__1_hand_on_chestTS}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 }            ]
        }
    }
},
"G_1_hand_on_chest": {
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
                    id: '_1_hand_on_chest',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/1/Bdy/1handchest.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${__1_hand_on_chest}": [
                ["style", "top", '-0.02%'],
                ["style", "left", '0.01%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '19.64%'],
                ["style", "width", '50.48%']
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
                { id: "eid531752", tween: [ "style", "${__1_hand_on_chest}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid531753", tween: [ "style", "${__1_hand_on_chest}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 }            ]
        }
    }
},
"B_Hand_on_chest_TS": {
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
                    fill: ['rgba(0,0,0,0)', 'images/2/Shirt/0/HandchestSS.png', '0px', '0px'],
                    id: 'HandchestSS2',
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
            "${symbolSelector}": [
                ["style", "height", '42.79%'],
                ["style", "width", '42.62%']
            ],
            "${_HandchestSS2}": [
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
            duration: 120000,
            autoPlay: true,
            timeline: [
                { id: "eid499992", tween: [ "style", "${_HandchestSS2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid517276", tween: [ "style", "${_HandchestSS2}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 }            ]
        }
    }
},
"B_hand_N_CHEST": {
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
                    id: 'hand_on_chest',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/2/Bdy/HandChest.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hand_on_chest}": [
                ["style", "top", '0.1%'],
                ["style", "left", '0.23%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '36.24%'],
                ["style", "width", '48.02%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 120000,
            autoPlay: true,
            timeline: [
                { id: "eid538609", tween: [ "style", "${_hand_on_chest}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid517264", tween: [ "style", "${_hand_on_chest}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid538610", tween: [ "style", "${_hand_on_chest}", "display", 'block', { fromValue: 'block'}], position: 120000, duration: 0 }            ]
        }
    }
},
"B_hand_on_V_TS": {
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
                    fill: ['rgba(0,0,0,0)', 'images/2/Shirt/0/HandVSS.png', '0px', '0px'],
                    id: 'HandVSS',
                    rect: ['-11.9%', '0%', '123.9%', '111.2%', 'auto', 'auto'],
                    display: 'block',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_HandVSS}": [
                ["style", "top", '0%'],
                ["style", "left", '-11.94%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '43.01%'],
                ["style", "width", '38.07%']
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
                { id: "eid499990", tween: [ "style", "${_HandVSS}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid499991", tween: [ "style", "${_HandVSS}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 }            ]
        }
    }
},
"B_hand_on_V": {
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
                    id: 'hand_on_V',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/2/Bdy/HandV.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hand_on_V}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '48.25%'],
                ["style", "width", '44.61%']
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
                { id: "eid534966", tween: [ "style", "${_hand_on_V}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid534967", tween: [ "style", "${_hand_on_V}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 }            ]
        }
    }
},
"HAnd_on_waist_TS": {
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
                    id: 'handwaistSS',
                    rect: ['11.5%', '11.3%', '116.9%', '116%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Shirt/0/handwaistSS.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_handwaistSS}": [
                ["style", "top", '11.26%'],
                ["style", "left", '11.54%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '50.44%'],
                ["style", "width", '36.94%']
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
                { id: "eid499985", tween: [ "style", "${_handwaistSS}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"B_hand_on_waist": {
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
                    rect: ['-1.7%', '0%', '105.1%', '101.7%', 'auto', 'auto'],
                    id: 'hand_on_waist2',
                    fill: ['rgba(0,0,0,0)', 'images/2/Bdy/handwaist.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '50.44%'],
                ["style", "width", '33.24%']
            ],
            "${_hand_on_waist2}": [
                ["style", "top", '0%'],
                ["style", "left", '-1.71%'],
                ["style", "display", 'block']
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
                { id: "eid492584", tween: [ "style", "${_hand_on_waist2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"B_LH_TS_DWn": {
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
                    rect: ['0%', '-22.3%', '114.5%', '116.6%', 'auto', 'auto'],
                    tag: 'img',
                    id: 'Ldss2',
                    display: 'block',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/2/Shirt/0/Ldss.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Ldss2}": [
                ["style", "top", '-22.29%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "left", '-1.2%'],
                ["style", "-webkit-transform-origin", [57.15,8.16], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [57.15,8.16],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [57.15,8.16],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [57.15,8.16],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [57.15,8.16],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${symbolSelector}": [
                ["style", "height", '34.28%'],
                ["style", "width", '23.58%']
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
                { id: "eid581055", tween: [ "style", "${_Ldss2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid581334", tween: [ "transform", "${_Ldss2}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid581335", tween: [ "transform", "${_Ldss2}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 1000, duration: 1000 },
                { id: "eid581332", tween: [ "style", "${_Ldss2}", "-webkit-transform-origin", [57.15,8.16], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57.15,8.16]}], position: 0, duration: 0 },
                { id: "eid666748", tween: [ "style", "${_Ldss2}", "-moz-transform-origin", [57.15,8.16], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57.15,8.16]}], position: 0, duration: 0 },
                { id: "eid666749", tween: [ "style", "${_Ldss2}", "-ms-transform-origin", [57.15,8.16], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57.15,8.16]}], position: 0, duration: 0 },
                { id: "eid666750", tween: [ "style", "${_Ldss2}", "msTransformOrigin", [57.15,8.16], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57.15,8.16]}], position: 0, duration: 0 },
                { id: "eid666751", tween: [ "style", "${_Ldss2}", "-o-transform-origin", [57.15,8.16], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57.15,8.16]}], position: 0, duration: 0 }            ]
        }
    }
},
"B_RH_TS_DWN": {
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
                    id: 'RH_d_TS',
                    rect: ['0%', '0%', '100.1%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Shirt/0/Rdss.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '35.59%'],
                ["style", "width", '21.03%']
            ],
            "${_RH_d_TS}": [
                ["style", "top", '-4.72%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "left", '-9.46%'],
                ["style", "-webkit-transform-origin", [59.81,23.41], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [59.81,23.41],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [59.81,23.41],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [59.81,23.41],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [59.81,23.41],{valueTemplate:'@@0@@% @@1@@%'}]
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
                { id: "eid582067", tween: [ "transform", "${_RH_d_TS}", "rotateZ", '11deg', { fromValue: '0deg'}], position: 500, duration: 500 },
                { id: "eid582068", tween: [ "transform", "${_RH_d_TS}", "rotateZ", '0deg', { fromValue: '11deg'}], position: 1000, duration: 500 },
                { id: "eid499622", tween: [ "style", "${_RH_d_TS}", "-webkit-transform-origin", [59.81,23.41], { valueTemplate: '@@0@@% @@1@@%', fromValue: [59.81,23.41]}], position: 0, duration: 0 },
                { id: "eid666752", tween: [ "style", "${_RH_d_TS}", "-moz-transform-origin", [59.81,23.41], { valueTemplate: '@@0@@% @@1@@%', fromValue: [59.81,23.41]}], position: 0, duration: 0 },
                { id: "eid666753", tween: [ "style", "${_RH_d_TS}", "-ms-transform-origin", [59.81,23.41], { valueTemplate: '@@0@@% @@1@@%', fromValue: [59.81,23.41]}], position: 0, duration: 0 },
                { id: "eid666754", tween: [ "style", "${_RH_d_TS}", "msTransformOrigin", [59.81,23.41], { valueTemplate: '@@0@@% @@1@@%', fromValue: [59.81,23.41]}], position: 0, duration: 0 },
                { id: "eid666755", tween: [ "style", "${_RH_d_TS}", "-o-transform-origin", [59.81,23.41], { valueTemplate: '@@0@@% @@1@@%', fromValue: [59.81,23.41]}], position: 0, duration: 0 },
                { id: "eid582060", tween: [ "style", "${_RH_d_TS}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid582061", tween: [ "style", "${_RH_d_TS}", "display", 'block', { fromValue: 'block'}], position: 500, duration: 0 },
                { id: "eid582063", tween: [ "style", "${_RH_d_TS}", "display", 'block', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid582062", tween: [ "style", "${_RH_d_TS}", "display", 'block', { fromValue: 'block'}], position: 1500, duration: 0 }            ]
        }
    }
},
"B_LH_Exp_dwn": {
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
                    id: 'LHANDEX',
                    rect: ['-7.2%', '-2.8%', '107.2%', '112.5%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Shirt/0/LHANDEX.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '38.43%'],
                ["style", "width", '31.54%']
            ],
            "${_LHANDEX}": [
                ["style", "top", '-2.84%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "left", '-4.5%'],
                ["style", "-webkit-transform-origin", [70.62,24.56], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [70.62,24.56],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [70.62,24.56],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [70.62,24.56],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [70.62,24.56],{valueTemplate:'@@0@@% @@1@@%'}]
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
                { id: "eid499009", tween: [ "transform", "${_LHANDEX}", "rotateZ", '15deg', { fromValue: '0deg'}], position: 500, duration: 500 },
                { id: "eid499010", tween: [ "transform", "${_LHANDEX}", "rotateZ", '0deg', { fromValue: '15deg'}], position: 1000, duration: 500 },
                { id: "eid499011", tween: [ "style", "${_LHANDEX}", "-webkit-transform-origin", [70.62,24.56], { valueTemplate: '@@0@@% @@1@@%', fromValue: [70.62,24.56]}], position: 0, duration: 0 },
                { id: "eid666756", tween: [ "style", "${_LHANDEX}", "-moz-transform-origin", [70.62,24.56], { valueTemplate: '@@0@@% @@1@@%', fromValue: [70.62,24.56]}], position: 0, duration: 0 },
                { id: "eid666757", tween: [ "style", "${_LHANDEX}", "-ms-transform-origin", [70.62,24.56], { valueTemplate: '@@0@@% @@1@@%', fromValue: [70.62,24.56]}], position: 0, duration: 0 },
                { id: "eid666758", tween: [ "style", "${_LHANDEX}", "msTransformOrigin", [70.62,24.56], { valueTemplate: '@@0@@% @@1@@%', fromValue: [70.62,24.56]}], position: 0, duration: 0 },
                { id: "eid666759", tween: [ "style", "${_LHANDEX}", "-o-transform-origin", [70.62,24.56], { valueTemplate: '@@0@@% @@1@@%', fromValue: [70.62,24.56]}], position: 0, duration: 0 },
                { id: "eid499006", tween: [ "style", "${_LHANDEX}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid499007", tween: [ "style", "${_LHANDEX}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 }            ]
        }
    }
},
"B_RH_EX_DWn": {
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
                    id: 'RHANDEX',
                    rect: ['-1.5%', '-20.3%', '89.9%', '109.3%', 'auto', 'auto'],
                    transform: [[0, 0], ['-15']],
                    fill: ['rgba(0,0,0,0)', 'images/2/Shirt/0/RHANDEX.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RHANDEX}": [
                ["style", "-webkit-transform-origin", [62.64,36.47], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [62.64,36.47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [62.64,36.47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [62.64,36.47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [62.64,36.47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-16deg'],
                ["style", "display", 'block'],
                ["style", "left", '-4.59%'],
                ["style", "top", '-9.49%']
            ],
            "${symbolSelector}": [
                ["style", "height", '32.99%'],
                ["style", "width", '39.53%']
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
                { id: "eid500506", tween: [ "transform", "${_RHANDEX}", "rotateZ", '12deg', { fromValue: '-16deg'}], position: 0, duration: 500 },
                { id: "eid500507", tween: [ "transform", "${_RHANDEX}", "rotateZ", '10deg', { fromValue: '12deg'}], position: 500, duration: 500 },
                { id: "eid500504", tween: [ "style", "${_RHANDEX}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"B_Hand_on_lips_dwn_TS": {
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
                    id: 'HandlipdwnSS',
                    rect: ['-12.1%', '3.9%', '112.2%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Shirt/0/HandlipdwnSS.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '34.06%'],
                ["style", "width", '30.4%']
            ],
            "${_HandlipdwnSS}": [
                ["style", "-webkit-transform-origin", [17.39,90.47], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [17.39,90.47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [17.39,90.47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [17.39,90.47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [17.39,90.47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "left", '-12.15%'],
                ["style", "top", '0%']
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
                { id: "eid585193", tween: [ "transform", "${_HandlipdwnSS}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid585192", tween: [ "style", "${_HandlipdwnSS}", "-webkit-transform-origin", [17.39,90.47], { valueTemplate: '@@0@@% @@1@@%', fromValue: [17.39,90.47]}], position: 0, duration: 0 },
                { id: "eid666760", tween: [ "style", "${_HandlipdwnSS}", "-moz-transform-origin", [17.39,90.47], { valueTemplate: '@@0@@% @@1@@%', fromValue: [17.39,90.47]}], position: 0, duration: 0 },
                { id: "eid666761", tween: [ "style", "${_HandlipdwnSS}", "-ms-transform-origin", [17.39,90.47], { valueTemplate: '@@0@@% @@1@@%', fromValue: [17.39,90.47]}], position: 0, duration: 0 },
                { id: "eid666762", tween: [ "style", "${_HandlipdwnSS}", "msTransformOrigin", [17.39,90.47], { valueTemplate: '@@0@@% @@1@@%', fromValue: [17.39,90.47]}], position: 0, duration: 0 },
                { id: "eid666763", tween: [ "style", "${_HandlipdwnSS}", "-o-transform-origin", [17.39,90.47], { valueTemplate: '@@0@@% @@1@@%', fromValue: [17.39,90.47]}], position: 0, duration: 0 },
                { id: "eid499014", tween: [ "style", "${_HandlipdwnSS}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"B_WOW_HAND_DWn": {
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
                    fill: ['rgba(0,0,0,0)', 'images/2/Shirt/0/WOWhandDwnSS.png', '0px', '0px'],
                    id: 'Hand_WOW_dwn_TS',
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
            "${_Hand_WOW_dwn_TS}": [
                ["style", "top", '0.01%'],
                ["style", "left", '0.01%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '33.19%'],
                ["style", "width", '28.13%']
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
                { id: "eid584994", tween: [ "style", "${_Hand_WOW_dwn_TS}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid584995", tween: [ "style", "${_Hand_WOW_dwn_TS}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 }            ]
        }
    }
},
"B_hand_on_cheeks_TS": {
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
                    id: 'handCheekSS',
                    rect: ['-22%', '5.7%', '119.7%', '113.1%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/2/Shirt/0/handCheekSS.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_handCheekSS}": [
                ["style", "top", '3.83%'],
                ["style", "left", '-19.7%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '38.43%'],
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
                { id: "eid499017", tween: [ "style", "${_handCheekSS}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"B_hand_on_cheeks": {
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
                    fill: ['rgba(0,0,0,0)', 'images/2/Bdy/HandCheek.png', '0px', '0px'],
                    id: 'hand_on_cheek',
                    rect: ['0%', '0%', '100.1%', '100.1%', 'auto', 'auto'],
                    display: 'block',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hand_on_cheek}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '46.07%'],
                ["style", "width", '34.66%']
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
                { id: "eid537590", tween: [ "style", "${_hand_on_cheek}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid537602", tween: [ "style", "${_hand_on_cheek}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 }            ]
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
