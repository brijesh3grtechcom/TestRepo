/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['germania-one, sans-serif']='<script src=\"http://use.edgefonts.net/germania-one:n4:all.js\"></script>';
    fonts['arizonia, cursive']='<script src=\"http://use.edgefonts.net/arizonia:n4:all.js\"></script>';
    fonts['black-ops-one, sans-serif']='<script src=\"http://use.edgefonts.net/black-ops-one:n4:all.js\"></script>';
    fonts['arbutus, sans-serif']='<script src=\"http://use.edgefonts.net/arbutus:n4:all.js\"></script>';

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
                id: 'stage_start',
                type: 'group',
                rect: ['0%', '0%','100%','100%','auto', 'auto'],
                c: [
                {
                    id: 'page_1',
                    type: 'image',
                    rect: ['0%', '0%','100%','100%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"page_1.png",'0px','0px']
                },
                {
                    id: 'play1',
                    type: 'rect',
                    rect: ['31.1%', '69.7%','auto','auto','auto', 'auto']
                }]
            },
            {
                id: 'Fist_screen',
                display: 'none',
                type: 'group',
                rect: ['0%', '0%','100%','100%','auto', 'auto'],
                c: [
                {
                    id: 'foodbg',
                    type: 'image',
                    rect: ['0%', '0%','100%','100%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"foodbg.png",'0px','0px']
                },
                {
                    id: 'Group15',
                    type: 'group',
                    rect: ['56.1%', '-1.3%','9%','16%','auto', 'auto'],
                    c: [
                    {
                        id: 'burger15',
                        type: 'image',
                        rect: ['11%', '35.6%','78%','51.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"burger%201.png",'0px','0px']
                    },
                    {
                        id: 'b_bur15',
                        type: 'image',
                        rect: ['11%', '35.6%','78%','51.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"burger.png",'0px','0px']
                    },
                    {
                        id: 'StageNoAnim_15',
                        type: 'rect',
                        rect: ['9.8%', '31.8%','auto','auto','auto', 'auto']
                    },
                    {
                        id: 'star_15',
                        type: 'group',
                        rect: ['-0.3%', '0.1%','100.5%','54.1%','auto', 'auto'],
                        c: [
                        {
                            id: 'blank_sta15',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"blank_star.png",'0px','0px']
                        },
                        {
                            id: 'star115',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star1.png",'0px','0px']
                        },
                        {
                            id: 'star215',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star2.png",'0px','0px']
                        },
                        {
                            id: 'star315',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.6%', '-1.3%','99%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star3.png",'0px','0px']
                        }]
                    },
                    {
                        id: 'stege15',
                        display: 'block',
                        type: 'rect',
                        rect: ['-0.3%', '6.6%','18.4%','21.8%','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    }]
                },
                {
                    id: 'Group14',
                    type: 'group',
                    rect: ['39%', '-1.3%','9%','16%','auto', 'auto'],
                    c: [
                    {
                        id: 'burger14',
                        type: 'image',
                        rect: ['11%', '35.6%','78%','51.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"burger%201.png",'0px','0px']
                    },
                    {
                        id: 'b_bur14',
                        type: 'image',
                        rect: ['11%', '35.6%','78%','51.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"burger.png",'0px','0px']
                    },
                    {
                        id: 'StageNoAnim_14',
                        type: 'rect',
                        rect: ['26.1%', '40.2%','auto','auto','auto', 'auto']
                    },
                    {
                        id: 'star_14',
                        type: 'group',
                        rect: ['-0.3%', '0.1%','100.5%','54.1%','auto', 'auto'],
                        c: [
                        {
                            id: 'blank_sta14',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"blank_star.png",'0px','0px']
                        },
                        {
                            id: 'star114',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star1.png",'0px','0px']
                        },
                        {
                            id: 'star214',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star2.png",'0px','0px']
                        },
                        {
                            id: 'star314',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.6%', '-1.3%','99%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star3.png",'0px','0px']
                        }]
                    },
                    {
                        id: 'stege14',
                        display: 'block',
                        type: 'rect',
                        rect: ['-0.3%', '6.6%','18.4%','21.8%','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    }]
                },
                {
                    id: 'Group13',
                    type: 'group',
                    rect: ['22.1%', '2%','9%','16%','auto', 'auto'],
                    c: [
                    {
                        id: 'burger13',
                        type: 'image',
                        rect: ['11%', '35.6%','78%','51.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"burger%201.png",'0px','0px']
                    },
                    {
                        id: 'b_bur13',
                        type: 'image',
                        rect: ['11%', '35.6%','78%','51.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"burger.png",'0px','0px']
                    },
                    {
                        id: 'StageNoAnim_13',
                        type: 'rect',
                        rect: ['29.9%', '37.3%','auto','auto','auto', 'auto']
                    },
                    {
                        id: 'star_13',
                        type: 'group',
                        rect: ['-0.3%', '0.1%','100.5%','54.1%','auto', 'auto'],
                        c: [
                        {
                            id: 'blank_sta13',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"blank_star.png",'0px','0px']
                        },
                        {
                            id: 'star113',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star1.png",'0px','0px']
                        },
                        {
                            id: 'star213',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star2.png",'0px','0px']
                        },
                        {
                            id: 'star313',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.6%', '-1.3%','99%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star3.png",'0px','0px']
                        }]
                    },
                    {
                        id: 'stege13',
                        display: 'block',
                        type: 'rect',
                        rect: ['-0.3%', '6.6%','18.4%','21.8%','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    }]
                },
                {
                    id: 'Group12',
                    type: 'group',
                    rect: ['8.8%', '8.3%','9%','16%','auto', 'auto'],
                    c: [
                    {
                        id: 'burger12',
                        type: 'image',
                        rect: ['11%', '35.6%','78%','51.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"burger%201.png",'0px','0px']
                    },
                    {
                        id: 'b_bur12',
                        type: 'image',
                        rect: ['11%', '35.6%','78%','51.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"burger.png",'0px','0px']
                    },
                    {
                        id: 'StageNoAnim_12',
                        type: 'rect',
                        rect: ['24.7%', '38%','auto','auto','auto', 'auto']
                    },
                    {
                        id: 'star_12',
                        type: 'group',
                        rect: ['-0.3%', '0.1%','100.5%','54.1%','auto', 'auto'],
                        c: [
                        {
                            id: 'blank_sta12',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"blank_star.png",'0px','0px']
                        },
                        {
                            id: 'star112',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star1.png",'0px','0px']
                        },
                        {
                            id: 'star212',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star2.png",'0px','0px']
                        },
                        {
                            id: 'star312',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.6%', '-1.3%','99%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star3.png",'0px','0px']
                        }]
                    },
                    {
                        id: 'stege12',
                        display: 'block',
                        type: 'rect',
                        rect: ['-0.3%', '6.6%','18.4%','21.8%','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    }]
                },
                {
                    id: 'Group11',
                    type: 'group',
                    rect: ['6.4%', '25.7%','9%','16%','auto', 'auto'],
                    c: [
                    {
                        id: 'burger11',
                        type: 'image',
                        rect: ['11%', '35.6%','78%','51.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"burger%201.png",'0px','0px']
                    },
                    {
                        id: 'b_bur11',
                        type: 'image',
                        rect: ['11%', '35.6%','78%','51.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"burger.png",'0px','0px']
                    },
                    {
                        id: 'StageNoAnim_11',
                        type: 'rect',
                        rect: ['3.3%', '24.9%','auto','auto','auto', 'auto']
                    },
                    {
                        id: 'star_11',
                        type: 'group',
                        rect: ['-0.3%', '0.1%','100.5%','54.1%','auto', 'auto'],
                        c: [
                        {
                            id: 'blank_sta11',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"blank_star.png",'0px','0px']
                        },
                        {
                            id: 'star111',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star1.png",'0px','0px']
                        },
                        {
                            id: 'star211',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star2.png",'0px','0px']
                        },
                        {
                            id: 'star311',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.6%', '-1.3%','99%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star3.png",'0px','0px']
                        }]
                    },
                    {
                        id: 'stege11',
                        display: 'block',
                        type: 'rect',
                        rect: ['-0.3%', '6.6%','18.4%','21.8%','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    }]
                },
                {
                    id: 'Group10',
                    type: 'group',
                    rect: ['16.5%', '38.7%','9%','16%','auto', 'auto'],
                    c: [
                    {
                        id: 'burger10',
                        type: 'image',
                        rect: ['11%', '35.6%','78%','51.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"burger%201.png",'0px','0px']
                    },
                    {
                        id: 'b_bur10',
                        type: 'image',
                        rect: ['11%', '35.6%','78%','51.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"burger.png",'0px','0px']
                    },
                    {
                        id: 'StageNoAnim_10',
                        type: 'rect',
                        rect: ['6.5%', '32.1%','auto','auto','auto', 'auto']
                    },
                    {
                        id: 'star_10',
                        type: 'group',
                        rect: ['-0.3%', '0.1%','100.5%','54.1%','auto', 'auto'],
                        c: [
                        {
                            id: 'blank_sta10',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"blank_star.png",'0px','0px']
                        },
                        {
                            id: 'star110',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star1.png",'0px','0px']
                        },
                        {
                            id: 'star210',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star2.png",'0px','0px']
                        },
                        {
                            id: 'star310',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.6%', '-1.3%','99%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star3.png",'0px','0px']
                        }]
                    },
                    {
                        id: 'stege10',
                        display: 'block',
                        type: 'rect',
                        rect: ['-0.3%', '6.6%','18.4%','21.8%','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    }]
                },
                {
                    id: 'Group9',
                    type: 'group',
                    rect: ['33.4%', '41.3%','9%','16%','auto', 'auto'],
                    c: [
                    {
                        id: 'burger9',
                        type: 'image',
                        rect: ['11%', '35.6%','78%','51.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"burger%201.png",'0px','0px']
                    },
                    {
                        id: 'b_bur9',
                        type: 'image',
                        rect: ['11%', '35.6%','78%','51.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"burger.png",'0px','0px']
                    },
                    {
                        id: 'StageNoAnim_9',
                        type: 'rect',
                        rect: ['11.7%', '28.9%','auto','auto','auto', 'auto']
                    },
                    {
                        id: 'star_9',
                        type: 'group',
                        rect: ['-0.3%', '0.1%','100.5%','54.1%','auto', 'auto'],
                        c: [
                        {
                            id: 'blank_sta9',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"blank_star.png",'0px','0px']
                        },
                        {
                            id: 'star19',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star1.png",'0px','0px']
                        },
                        {
                            id: 'star29',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star2.png",'0px','0px']
                        },
                        {
                            id: 'star39',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.6%', '-1.3%','99%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star3.png",'0px','0px']
                        }]
                    },
                    {
                        id: 'stege9',
                        display: 'block',
                        type: 'rect',
                        rect: ['-0.3%', '6.6%','18.4%','21.8%','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    }]
                },
                {
                    id: 'Group8',
                    type: 'group',
                    rect: ['48.5%', '35%','9%','16%','auto', 'auto'],
                    c: [
                    {
                        id: 'burger8',
                        type: 'image',
                        rect: ['11%', '35.6%','78%','51.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"burger%201.png",'0px','0px']
                    },
                    {
                        id: 'b_bur8',
                        type: 'image',
                        rect: ['11%', '35.6%','78%','51.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"burger.png",'0px','0px']
                    },
                    {
                        id: 'StageNoAnim_8',
                        type: 'rect',
                        rect: ['37.8%', '42.1%','auto','auto','auto', 'auto']
                    },
                    {
                        id: 'star_8',
                        type: 'group',
                        rect: ['-0.3%', '0.1%','100.5%','54.1%','auto', 'auto'],
                        c: [
                        {
                            id: 'blank_sta8',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"blank_star.png",'0px','0px']
                        },
                        {
                            id: 'star18',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star1.png",'0px','0px']
                        },
                        {
                            id: 'star28',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star2.png",'0px','0px']
                        },
                        {
                            id: 'star38',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.6%', '-1.3%','99%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star3.png",'0px','0px']
                        }]
                    },
                    {
                        id: 'stege8',
                        display: 'block',
                        type: 'rect',
                        rect: ['-0.3%', '6.6%','18.4%','21.8%','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    }]
                },
                {
                    id: 'Group7',
                    type: 'group',
                    rect: ['59.8%', '24.7%','9%','16%','auto', 'auto'],
                    c: [
                    {
                        id: 'burger7',
                        type: 'image',
                        rect: ['11%', '35.6%','78%','51.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"burger%201.png",'0px','0px']
                    },
                    {
                        id: 'b_bur7',
                        type: 'image',
                        rect: ['11%', '35.6%','78%','51.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"burger.png",'0px','0px']
                    },
                    {
                        id: 'StageNoAnim_7',
                        type: 'rect',
                        rect: ['29.2%', '41.2%','auto','auto','auto', 'auto']
                    },
                    {
                        id: 'star_7',
                        type: 'group',
                        rect: ['-0.3%', '0.1%','100.5%','54.1%','auto', 'auto'],
                        c: [
                        {
                            id: 'blank_sta7',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"blank_star.png",'0px','0px']
                        },
                        {
                            id: 'star17',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star1.png",'0px','0px']
                        },
                        {
                            id: 'star27',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star2.png",'0px','0px']
                        },
                        {
                            id: 'star37',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.6%', '-1.3%','99%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star3.png",'0px','0px']
                        }]
                    },
                    {
                        id: 'stege7',
                        display: 'block',
                        type: 'rect',
                        rect: ['-0.3%', '6.6%','18.4%','21.8%','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    }]
                },
                {
                    id: 'Group6',
                    type: 'group',
                    rect: ['70.5%', '16.5%','9%','16%','auto', 'auto'],
                    c: [
                    {
                        id: 'burger6',
                        type: 'image',
                        rect: ['11%', '35.6%','78%','51.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"burger%201.png",'0px','0px']
                    },
                    {
                        id: 'b_bur6',
                        type: 'image',
                        rect: ['11%', '35.6%','78%','51.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"burger.png",'0px','0px']
                    },
                    {
                        id: 'StageNoAnim_6',
                        type: 'rect',
                        rect: ['25.5%', '46.3%','auto','auto','auto', 'auto']
                    },
                    {
                        id: 'star_6',
                        type: 'group',
                        rect: ['-0.3%', '0.1%','100.5%','54.1%','auto', 'auto'],
                        c: [
                        {
                            id: 'blank_sta6',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"blank_star.png",'0px','0px']
                        },
                        {
                            id: 'star16',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star1.png",'0px','0px']
                        },
                        {
                            id: 'star26',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star2.png",'0px','0px']
                        },
                        {
                            id: 'star36',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.6%', '-1.3%','99%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star3.png",'0px','0px']
                        }]
                    },
                    {
                        id: 'stege6',
                        display: 'block',
                        type: 'rect',
                        rect: ['-0.3%', '6.6%','18.4%','21.8%','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    }]
                },
                {
                    id: 'Group5',
                    type: 'group',
                    rect: ['82.5%', '20%','9%','16%','auto', 'auto'],
                    c: [
                    {
                        id: 'burger5',
                        type: 'image',
                        rect: ['11%', '35.6%','78%','51.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"burger%201.png",'0px','0px']
                    },
                    {
                        id: 'b_bur5',
                        type: 'image',
                        rect: ['11%', '35.6%','78%','51.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"burger.png",'0px','0px']
                    },
                    {
                        id: 'StageNoAnim_5',
                        type: 'rect',
                        rect: ['24.2%', '35.3%','auto','auto','auto', 'auto']
                    },
                    {
                        id: 'star_5',
                        type: 'group',
                        rect: ['-0.3%', '0.1%','100.5%','54.1%','auto', 'auto'],
                        c: [
                        {
                            id: 'blank_sta5',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"blank_star.png",'0px','0px']
                        },
                        {
                            id: 'star15',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star1.png",'0px','0px']
                        },
                        {
                            id: 'star25',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star2.png",'0px','0px']
                        },
                        {
                            id: 'star35',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.6%', '-1.3%','99%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star3.png",'0px','0px']
                        }]
                    },
                    {
                        id: 'stege5',
                        display: 'block',
                        type: 'rect',
                        rect: ['-0.3%', '6.6%','18.4%','21.8%','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    }]
                },
                {
                    id: 'Group4',
                    type: 'group',
                    rect: ['80.4%', '38.8%','9%','16%','auto', 'auto'],
                    c: [
                    {
                        id: 'burger4',
                        type: 'image',
                        rect: ['13.5%', '35.9%','78%','54.1%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"burger%201.png",'0px','0px']
                    },
                    {
                        id: 'b_bur4',
                        type: 'image',
                        rect: ['13.5%', '36%','78%','54.1%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"burger.png",'0px','0px']
                    },
                    {
                        id: 'StageNoAnim_4',
                        type: 'rect',
                        rect: ['10.3%', '37.9%','auto','auto','auto', 'auto']
                    },
                    {
                        id: 'star_4',
                        type: 'group',
                        rect: ['-0.1%', '0.2%','100.5%','57.1%','auto', 'auto'],
                        c: [
                        {
                            id: 'blank_sta4',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"blank_star.png",'0px','0px']
                        },
                        {
                            id: 'star14',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star1.png",'0px','0px']
                        },
                        {
                            id: 'star24',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star2.png",'0px','0px']
                        },
                        {
                            id: 'star34',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.6%', '-1.3%','99%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star3.png",'0px','0px']
                        }]
                    },
                    {
                        id: 'stege4',
                        display: 'block',
                        type: 'rect',
                        rect: ['4.6%', '1.3%','18.4%','21.8%','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    }]
                },
                {
                    id: 'Group3',
                    type: 'group',
                    rect: ['71.3%', '55%','9%','16%','auto', 'auto'],
                    c: [
                    {
                        id: 'burger3',
                        type: 'image',
                        rect: ['13.1%', '34.8%','78%','52%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"burger%201.png",'0px','0px']
                    },
                    {
                        id: 'b_bur3',
                        type: 'image',
                        rect: ['13.1%', '34.8%','78%','52%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"burger.png",'0px','0px']
                    },
                    {
                        id: 'StageNoAnim_3',
                        type: 'rect',
                        rect: ['10.3%', '16.3%','auto','auto','auto', 'auto']
                    },
                    {
                        id: 'star_3',
                        type: 'group',
                        rect: ['0.2%', '0.2%','99.8%','54.1%','auto', 'auto'],
                        c: [
                        {
                            id: 'blank_sta3',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"blank_star.png",'0px','0px']
                        },
                        {
                            id: 'star13',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star1.png",'0px','0px']
                        },
                        {
                            id: 'star23',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star2.png",'0px','0px']
                        },
                        {
                            id: 'star33',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.6%', '-1.3%','99%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star3.png",'0px','0px']
                        }]
                    },
                    {
                        id: 'stege3',
                        display: 'block',
                        type: 'rect',
                        rect: ['4.3%', '6.7%','18.4%','21.8%','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    }]
                },
                {
                    id: 'Group2',
                    type: 'group',
                    rect: ['64%', '69.7%','9%','16%','auto', 'auto'],
                    c: [
                    {
                        id: 'burger2',
                        type: 'image',
                        rect: ['16.6%', '38.3%','74.3%','54.1%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"burger%201.png",'0px','0px']
                    },
                    {
                        id: 'b_bur2',
                        type: 'image',
                        rect: ['16.6%', '38.3%','74.3%','54.1%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"burger.png",'0px','0px']
                    },
                    {
                        id: 'StageNoAnim_2',
                        type: 'rect',
                        rect: ['35.1%', '43.3%','auto','auto','auto', 'auto']
                    },
                    {
                        id: 'star_2',
                        type: 'group',
                        rect: ['5%', '-0.2%','95.2%','57.1%','auto', 'auto'],
                        c: [
                        {
                            id: 'blank_sta2',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"blank_star.png",'0px','0px']
                        },
                        {
                            id: 'star12',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star1.png",'0px','0px']
                        },
                        {
                            id: 'star22',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star2.png",'0px','0px']
                        },
                        {
                            id: 'star32',
                            display: 'none',
                            type: 'image',
                            rect: ['0.7%', '1.2%','99%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star3.png",'0px','0px']
                        }]
                    },
                    {
                        id: 'stege2',
                        display: 'block',
                        type: 'rect',
                        rect: ['0.3%', '1.6%','18.4%','21.8%','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    }]
                },
                {
                    id: 'Group1',
                    type: 'group',
                    rect: ['71.4%', '84.2%','14%','16.1%','auto', 'auto'],
                    transform: [[],[],[],['0.64285']],
                    c: [
                    {
                        id: 'burger1',
                        type: 'image',
                        rect: ['12.3%', '37.1%','76.1%','53.5%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"burger%201.png",'0px','0px']
                    },
                    {
                        id: 'b_bur1',
                        type: 'image',
                        rect: ['12.3%', '37.1%','76.1%','53.5%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"burger.png",'0px','0px']
                    },
                    {
                        id: 'StageNoAnim_1',
                        type: 'rect',
                        rect: ['17.4%', '36.5%','auto','auto','auto', 'auto'],
                        transform: [[],[],[],['1','0.8']]
                    },
                    {
                        id: 'star_1',
                        type: 'group',
                        rect: ['-0.2%', '-0.1%','98.9%','56.4%','auto', 'auto'],
                        c: [
                        {
                            id: 'blank_star1',
                            type: 'image',
                            tag: 'img',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"blank_star.png",'0px','0px']
                        },
                        {
                            id: 'star11',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star1.png",'0px','0px']
                        },
                        {
                            id: 'star21',
                            display: 'none',
                            type: 'image',
                            rect: ['-0.1%', '-0.3%','99.6%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star2.png",'0px','0px']
                        },
                        {
                            id: 'star31',
                            display: 'none',
                            type: 'image',
                            rect: ['0.7%', '1.2%','99%','99.3%','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star3.png",'0px','0px']
                        }]
                    },
                    {
                        id: 'stege1',
                        type: 'rect',
                        rect: ['6.1%', '2.8%','94.2%','97.4%','auto', 'auto'],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    }]
                }]
            },
            {
                id: 'Scend_screen',
                display: 'none',
                type: 'group',
                rect: ['0%', '0%','100%','100%','auto', 'auto'],
                opacity: 0.40650406504065,
                c: [
                {
                    id: 'kichen',
                    type: 'image',
                    rect: ['0%', '0%','100%','100%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"kichen.png",'0px','0px']
                },
                {
                    id: 'cust_G',
                    display: 'block',
                    type: 'group',
                    rect: ['61.7%', '6.5%','37.2%','43%','auto', 'auto'],
                    c: [
                    {
                        id: 'cust_1',
                        display: 'none',
                        type: 'rect',
                        rect: ['-1.3%', '4.6%','auto','auto','auto', 'auto']
                    },
                    {
                        id: 'cust_2',
                        display: 'none',
                        type: 'rect',
                        rect: ['59.1%', '19.7%','auto','auto','auto', 'auto']
                    },
                    {
                        id: 'cust_3',
                        display: 'none',
                        type: 'rect',
                        rect: ['115.9%', '43.3%','auto','auto','auto', 'auto'],
                        transform: [[],[],[],['2.0625','1.76649']]
                    },
                    {
                        id: 'cust_4',
                        display: 'none',
                        type: 'rect',
                        rect: ['-1.3%', '-7.3%','auto','auto','auto', 'auto']
                    },
                    {
                        id: 'cust_5',
                        display: 'none',
                        type: 'rect',
                        rect: ['115.9%', '43.4%','auto','auto','auto', 'auto'],
                        transform: [[],[],[],['2.0625','1.76649']]
                    },
                    {
                        id: 'cust_6',
                        display: 'none',
                        type: 'rect',
                        rect: ['101.3%', '28.7%','auto','auto','auto', 'auto']
                    },
                    {
                        id: 'cust_7',
                        display: 'none',
                        type: 'rect',
                        rect: ['108.1%', '40.1%','auto','auto','auto', 'auto']
                    },
                    {
                        id: 'cust_8',
                        display: 'none',
                        type: 'rect',
                        rect: ['116.2%', '45.4%','auto','auto','auto', 'auto']
                    }]
                },
                {
                    id: 'kichen22',
                    display: 'none',
                    type: 'image',
                    rect: ['60.8%', '39.8%','47.7%','11.3%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"kichen2.png",'0px','0px'],
                    transform: [[],['21']]
                },
                {
                    id: 'stand',
                    type: 'image',
                    rect: ['53%', '48.3%','1.5%','7.9%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"stand.png",'0px','0px']
                },
                {
                    id: 'platform2',
                    display: 'block',
                    type: 'image',
                    rect: ['-12.1%', '68.2%','42.9%','46.7%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"platform2.png",'0px','0px'],
                    transform: [[],[],[],['0.60743','1.37545']]
                },
                {
                    id: 'pizzas',
                    type: 'image',
                    rect: ['-0.5%', '59.5%','13.8%','13.9%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"pizzas.png",'0px','0px']
                },
                {
                    id: 'cust_X',
                    display: 'none',
                    type: 'rect',
                    rect: ['64.4%', '2.9%','auto','auto','auto', 'auto']
                },
                {
                    id: 'cust_X2',
                    display: 'none',
                    type: 'rect',
                    rect: ['64.4%', '2.9%','auto','auto','auto', 'auto']
                },
                {
                    id: 'cust_X3',
                    display: 'none',
                    type: 'rect',
                    rect: ['64.4%', '2.9%','auto','auto','auto', 'auto']
                },
                {
                    id: 'dustbin_ani',
                    display: 'none',
                    type: 'rect',
                    rect: ['51.1%', '53.2%','auto','auto','auto', 'auto'],
                    transform: [[],[],[],['0.57658','0.80476']]
                },
                {
                    id: 'Group16',
                    type: 'group',
                    rect: ['67.3%', '32%','3.5%','8.8%','auto', 'auto'],
                    c: [
                    {
                        id: 'bg1',
                        type: 'image',
                        rect: ['7.1%', '5.7%','92.9%','90.6%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"false_icon/pro1.png",'0px','0px']
                    },
                    {
                        id: 'pro1',
                        type: 'image',
                        rect: ['10.7%', '5.7%','78.6%','90.6%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"false_icon/pro2.png",'0px','0px']
                    },
                    {
                        id: 'no12',
                        type: 'image',
                        rect: ['3.6%', '18.9%','96.4%','56.6%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"false_icon/no1.png",'0px','0px']
                    },
                    {
                        id: 'border1',
                        type: 'image',
                        rect: ['0%', '0%','100%','100%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"false_icon/border.png",'0px','0px']
                    }]
                },
                {
                    id: 'Group17',
                    type: 'group',
                    rect: ['77.6%', '37.5%','3.5%','8.8%','auto', 'auto'],
                    c: [
                    {
                        id: 'bg2',
                        type: 'image',
                        rect: ['7.1%', '5.7%','92.9%','90.6%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"false_icon/pro1.png",'0px','0px']
                    },
                    {
                        id: 'pro2',
                        type: 'image',
                        rect: ['10.7%', '5.7%','78.6%','90.6%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"false_icon/pro2.png",'0px','0px']
                    },
                    {
                        id: 'no2',
                        type: 'image',
                        rect: ['3%', '24.5%','96.4%','56.6%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"false_icon/no2.png",'0px','0px']
                    },
                    {
                        id: 'border2',
                        type: 'image',
                        rect: ['0%', '0%','100%','100%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"false_icon/border.png",'0px','0px']
                    }]
                },
                {
                    id: 'Group18',
                    type: 'group',
                    rect: ['88.5%', '42.5%','3.5%','8.8%','auto', 'auto'],
                    c: [
                    {
                        id: 'bg3',
                        type: 'image',
                        rect: ['7.1%', '5.7%','92.9%','90.6%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"false_icon/pro1.png",'0px','0px']
                    },
                    {
                        id: 'pro3',
                        type: 'image',
                        rect: ['10.7%', '5.7%','78.6%','90.6%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"false_icon/pro2.png",'0px','0px']
                    },
                    {
                        id: 'no3',
                        type: 'image',
                        rect: ['0%', '20.8%','96.4%','56.6%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"false_icon/no3.png",'0px','0px']
                    },
                    {
                        id: 'border3',
                        type: 'image',
                        rect: ['0%', '0%','100%','100%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"false_icon/border.png",'0px','0px']
                    }]
                },
                {
                    id: 'hand_3',
                    display: 'none',
                    type: 'rect',
                    rect: ['1.9%', '64.3%','auto','auto','auto', 'auto']
                },
                {
                    id: 'cheese_G',
                    type: 'group',
                    rect: ['17.9%', '29.2%','34.8%','6.5%','auto', 'auto'],
                    c: [
                    {
                        id: 'ham2',
                        type: 'image',
                        rect: ['13.6%', '20.5%','20.3%','82.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"hamberger/ham2.png",'0px','0px']
                    },
                    {
                        id: 'cheese',
                        type: 'image',
                        rect: ['15.8%', '205.1%','15.5%','90.5%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"ing/cheese.png",'0px','0px']
                    },
                    {
                        id: 'leave2',
                        type: 'image',
                        rect: ['37.3%', '20.5%','24.4%','97.4%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"decoration/leave2_plate.png",'0px','0px']
                    },
                    {
                        id: 'leaves1',
                        type: 'image',
                        rect: ['65.6%', '10.3%','22.6%','101.4%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"decoration/leaves1_plate.png",'0px','0px']
                    }]
                },
                {
                    id: 'mush_G',
                    type: 'group',
                    rect: ['31%', '40.2%','17.2%','8.9%','auto', 'auto'],
                    c: [
                    {
                        id: 'stick1',
                        type: 'image',
                        rect: ['48.1%', '19.1%','51.9%','68.4%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"stick/stick1.png",'0px','0px']
                    },
                    {
                        id: 'mush1',
                        type: 'image',
                        rect: ['3.8%', '14.7%','33.6%','70.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"mushroom/mush1.png",'0px','0px'],
                        transform: [[],['25']]
                    }]
                },
                {
                    id: 'juicer1',
                    type: 'image',
                    rect: ['52.9%', '24.2%','10.5%','21%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"ing/juicer1.png",'0px','0px']
                },
                {
                    id: 'tuna1',
                    type: 'image',
                    rect: ['11%', '38.8%','4.8%','5.3%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"tunna/tuna1%5D.png",'0px','0px']
                },
                {
                    id: 'rawshrimp',
                    type: 'image',
                    rect: ['15.5%', '37.7%','5.4%','6.8%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"ing/shrimp.png",'0px','0px']
                },
                {
                    id: 'GC',
                    type: 'image',
                    rect: ['4.8%', '26.3%','5.9%','7.1%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"ing/GC.png",'0px','0px']
                },
                {
                    id: 'red_cap',
                    type: 'image',
                    rect: ['-2.5%', '33.7%','10.1%','11.1%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"ing/RC.png",'0px','0px']
                },
                {
                    id: 'tomato',
                    type: 'image',
                    rect: ['-1%', '19.2%','6.1%','9.1%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"ing/TMT.png",'0px','0px']
                },
                {
                    id: 'olive',
                    type: 'image',
                    rect: ['4.1%', '16.2%','5.6%','6.1%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"olives/olive2.png",'0px','0px']
                },
                {
                    id: 'glass',
                    type: 'group',
                    rect: ['57%', '33.8%','10.6%','10.5%','auto', 'auto'],
                    c: [
                    {
                        id: 'glass1',
                        type: 'image',
                        rect: ['10.3%', '-0.3%','55.3%','101%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"ing/glass.png",'0px','0px']
                    },
                    {
                        id: 'glass2',
                        type: 'image',
                        rect: ['27.4%', '-0.3%','55.3%','101%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"ing/glass.png",'0px','0px']
                    },
                    {
                        id: 'glass3',
                        type: 'image',
                        rect: ['-0.2%', '-0.3%','55.3%','101%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"ing/glass.png",'0px','0px']
                    },
                    {
                        id: 'glass4',
                        type: 'image',
                        rect: ['44.5%', '-0.3%','55.3%','101%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"ing/glass.png",'0px','0px']
                    }]
                },
                {
                    id: 'hand_1',
                    type: 'rect',
                    rect: ['1.9%', '64.3%','auto','auto','auto', 'auto']
                },
                {
                    id: 'hand_2',
                    display: 'none',
                    type: 'rect',
                    rect: ['1.9%', '64.3%','auto','auto','auto', 'auto']
                },
                {
                    id: 'Screen_G',
                    display: 'block',
                    type: 'group',
                    rect: ['8.3%', '4.5%','83%','92.7%','auto', 'auto'],
                    c: [
                    {
                        id: 'screen',
                        type: 'image',
                        rect: ['0.1%', '-0.1%','100%','100.2%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"screen.png",'0px','0px']
                    },
                    {
                        id: 'ing_1',
                        type: 'image',
                        tag: 'img',
                        rect: ['11.3%', '17.5%','21%','22.9%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"ing/bankimg.png",'0px','0px']
                    },
                    {
                        id: 'ing_2',
                        type: 'image',
                        tag: 'img',
                        rect: ['32.8%', '14.3%','9.5%','29.4%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"ing/bankimg.png",'0px','0px']
                    },
                    {
                        id: 'ing_3',
                        type: 'image',
                        tag: 'img',
                        rect: ['48.7%', '14.3%','9.5%','29.4%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"ing/bankimg.png",'0px','0px']
                    },
                    {
                        id: 'ing_4',
                        type: 'image',
                        tag: 'img',
                        rect: ['63.2%', '14.3%','9.5%','29.4%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"ing/bankimg.png",'0px','0px']
                    },
                    {
                        id: 'ing_5',
                        type: 'image',
                        tag: 'img',
                        rect: ['76.8%', '15.9%','9.5%','29.4%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"ing/bankimg.png",'0px','0px']
                    },
                    {
                        id: 'ing_6',
                        type: 'image',
                        tag: 'img',
                        rect: ['11.3%', '48.4%','9.5%','29.4%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"ing/bankimg.png",'0px','0px']
                    },
                    {
                        id: 'ing_7',
                        type: 'image',
                        tag: 'img',
                        rect: ['27%', '45.2%','9.5%','29.4%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"ing/bankimg.png",'0px','0px']
                    },
                    {
                        id: 'ing_8',
                        type: 'image',
                        tag: 'img',
                        rect: ['46.1%', '48.4%','9.5%','24.7%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"ing/bankimg.png",'0px','0px']
                    },
                    {
                        id: 'ing_9',
                        type: 'image',
                        tag: 'img',
                        rect: ['62%', '50%','9.5%','29.4%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"ing/bankimage.png",'0px','0px']
                    },
                    {
                        id: 'ing_10',
                        type: 'image',
                        tag: 'img',
                        rect: ['77.7%', '50%','9.5%','29.4%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"ing/bankimage.png",'0px','0px']
                    },
                    {
                        id: 'i_1',
                        display: 'none',
                        type: 'image',
                        rect: ['16.4%', '16.7%','9.5%','28.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"false_icon/crrect.png",'0px','0px']
                    },
                    {
                        id: 'i_2',
                        display: 'none',
                        type: 'image',
                        rect: ['34.8%', '16.7%','9.5%','28.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"false_icon/crrect.png",'0px','0px']
                    },
                    {
                        id: 'i_3',
                        display: 'none',
                        type: 'image',
                        rect: ['49.6%', '16.7%','9.5%','28.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"false_icon/crrect.png",'0px','0px']
                    },
                    {
                        id: 'i_4',
                        display: 'none',
                        type: 'image',
                        rect: ['65.5%', '16.7%','9.5%','28.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"false_icon/crrect.png",'0px','0px']
                    },
                    {
                        id: 'i_5',
                        display: 'none',
                        type: 'image',
                        rect: ['78.8%', '16.7%','9.5%','28.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"false_icon/crrect.png",'0px','0px']
                    },
                    {
                        id: 'i_6',
                        display: 'none',
                        type: 'image',
                        rect: ['14.8%', '50%','9.5%','28.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"false_icon/crrect.png",'0px','0px']
                    },
                    {
                        id: 'i_7',
                        display: 'none',
                        type: 'image',
                        rect: ['31.9%', '50%','9.5%','28.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"false_icon/crrect.png",'0px','0px']
                    },
                    {
                        id: 'i_8',
                        display: 'none',
                        type: 'image',
                        rect: ['47.5%', '50%','9.5%','28.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"false_icon/crrect.png",'0px','0px']
                    },
                    {
                        id: 'i_9',
                        display: 'none',
                        type: 'image',
                        rect: ['63.5%', '50%','9.5%','28.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"false_icon/crrect.png",'0px','0px']
                    },
                    {
                        id: 'i_10',
                        display: 'none',
                        type: 'image',
                        rect: ['78%', '50%','9.5%','28.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"false_icon/crrect.png",'0px','0px']
                    },
                    {
                        id: 'IngSeatNo',
                        type: 'rect',
                        rect: ['46.4%', '72.2%','auto','auto','auto', 'auto']
                    }]
                },
                {
                    id: 'chopperboard',
                    type: 'image',
                    rect: ['77.1%', '55.7%','17.1%','13.3%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"ing/chopperboard.png",'0px','0px']
                },
                {
                    id: 'knife',
                    display: 'block',
                    type: 'image',
                    rect: ['73%', '58.2%','13.4%','7.8%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"ing/knife.png",'0px','0px']
                },
                {
                    id: 'Pause',
                    type: 'image',
                    rect: ['5.5%', '8.3%','6%','7.2%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"All_btn/Pause.png",'0px','0px']
                },
                {
                    id: 'pendui_ani',
                    type: 'rect',
                    rect: ['55%', '14.3%','auto','auto','auto', 'auto']
                },
                {
                    id: 'clock',
                    type: 'image',
                    rect: ['52.2%', '9%','9.5%','8.9%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"All_btn/clock_img/clock.png",'0px','0px']
                },
                {
                    id: 'StageTmTxt',
                    type: 'rect',
                    rect: ['54.3%', '11.3%','auto','auto','auto', 'auto']
                },
                {
                    id: 'body_ani',
                    type: 'rect',
                    rect: ['45.8%', '16.6%','auto','auto','auto', 'auto']
                },
                {
                    id: 'body_ani_plate',
                    display: 'block',
                    type: 'rect',
                    rect: ['37.9%', '40.7%','auto','auto','auto', 'auto']
                },
                {
                    id: 'dustbin_area',
                    display: 'block',
                    type: 'rect',
                    rect: ['56.3%', '52.5%','11.5%','18.8%','auto', 'auto'],
                    fill: ["rgba(192,192,192,0)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'olive_aera',
                    type: 'ellipse',
                    rect: ['4.9%', '16%','3.6%','5.7%','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(192,192,192,0)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'green_cap_area',
                    type: 'rect',
                    rect: ['5.5%', '25.3%','5.3%','8.8%','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(192,192,192,0)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'stick_area',
                    type: 'rect',
                    rect: ['39.8%', '42.3%','7.9%','5.3%','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(192,192,192,0)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'mush1_area',
                    type: 'rect',
                    rect: ['31.6%', '41.8%','5.6%','5.3%','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(192,192,192,0)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'rawshrimp_area',
                    type: 'rect',
                    rect: ['16.1%', '37.8%','4.9%','6%','auto', 'auto'],
                    fill: ["rgba(192,192,192,0)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'tuna_area',
                    type: 'rect',
                    rect: ['10.8%', '38.8%','4.8%','5.5%','auto', 'auto'],
                    fill: ["rgba(192,192,192,0)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'leaves1_area',
                    type: 'ellipse',
                    rect: ['40.9%', '31%','7.5%','4.5%','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(192,192,192,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'leaves2_area',
                    type: 'ellipse',
                    rect: ['30.6%', '30.7%','8.4%','5.5%','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(192,192,192,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'platform_1',
                    display: 'block',
                    type: 'image',
                    rect: ['-2.6%', '77.8%','108.9%','30%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"platform_1.png",'0px','0px'],
                    transform: [[],[],[],['1.27844','0.67039']]
                },
                {
                    id: 'grill1',
                    type: 'image',
                    rect: ['8.3%', '67%','24.8%','30.3%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"grill/grill1.png",'0px','0px']
                },
                {
                    id: 'time_bar',
                    display: 'block',
                    type: 'rect',
                    rect: ['7.9%', '93.3%','auto','auto','auto', 'auto']
                },
                {
                    id: 'PizzaOnGrillGrp',
                    display: 'block',
                    type: 'group',
                    rect: ['14.1%', '77.5%','18.7%','13.7%','auto', 'auto'],
                    c: [
                    {
                        id: 'GR_0',
                        display: 'none',
                        type: 'image',
                        rect: ['8.7%', '6.5%','15.2%','12.7%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"pizza/pizzabase.png",'0px','0px']
                    },
                    {
                        id: 'GR_1',
                        display: 'none',
                        type: 'image',
                        rect: ['11.1%', '9.8%','73.7%','75.7%','auto', 'auto'],
                        opacity: 0.57264960168773,
                        fill: ["rgba(0,0,0,0)",im+"pizza/sauceonpizza.png",'0px','0px']
                    },
                    {
                        id: 'GR_2',
                        display: 'none',
                        type: 'image',
                        rect: ['4.7%', '-0.6%','14.1%','12.6%','auto', 'auto'],
                        opacity: 1,
                        fill: ["rgba(0,0,0,0)",im+"pizza/cheese.png",'0px','0px'],
                        transform: [[],[],[],['1.15928']]
                    },
                    {
                        id: 'GR_3',
                        display: 'none',
                        type: 'image',
                        rect: ['44.7%', '23.6%','7.8%','6.9%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"cut_all/leave2_on_face.png",'0px','0px'],
                        transform: [[],[],[],['-0.96774']]
                    },
                    {
                        id: 'GR_4',
                        display: 'none',
                        type: 'image',
                        rect: ['61.4%', '12.7%','17.8%','15.9%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"cut_all/leaves1_On_pizza.png",'0px','0px'],
                        transform: [[],[],[],['-0.48937','0.47916']]
                    },
                    {
                        id: 'GR_5',
                        display: 'none',
                        type: 'image',
                        rect: ['55%', '16.4%','29.6%','16.1%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"cut_all/red_cuting_on_face.png",'0px','0px'],
                        transform: [[],[],[],['-0.33617','0.52577']]
                    },
                    {
                        id: 'GR_6',
                        display: 'none',
                        type: 'image',
                        rect: ['17.6%', '19.2%','11.4%','6.7%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"cut_all/green_cutcaps_on_pizza.png",'0px','0px']
                    },
                    {
                        id: 'GR_7',
                        display: 'none',
                        type: 'image',
                        rect: ['-5.5%', '36.4%','28.1%','17%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"cut_all/tomato_on_pizza.png",'0px','0px'],
                        transform: [[],['-55'],['0','42'],['0.32955','0.62797']]
                    },
                    {
                        id: 'GR_8',
                        display: 'none',
                        type: 'image',
                        rect: ['9.9%', '66.5%','29.1%','19.9%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"cut_all/olive_on_pizza.png",'0px','0px'],
                        transform: [[],[],[],['0.41991','-0.51261']]
                    },
                    {
                        id: 'GR_9',
                        display: 'none',
                        type: 'image',
                        rect: ['28.3%', '36.2%','7.9%','5.6%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"cut_all/ham_on_pizza.png",'0px','0px']
                    },
                    {
                        id: 'GR_10',
                        display: 'none',
                        type: 'image',
                        rect: ['17.3%', '27.1%','18.2%','12.2%','auto', 'auto'],
                        borderRadius: ["0.67578125000009px 0.67578125000009px", "0.67578125000009px 0.67578125000009px", "0.67578125000009px 0.67578125000009px", "0.67578125000009px 0.67578125000009px"],
                        fill: ["rgba(0,0,0,0)",im+"cut_all/mushroom_on_pizza.png",'0px','0px'],
                        transform: [[],[],[],['0.40987','0.54054']]
                    },
                    {
                        id: 'GR_11',
                        display: 'none',
                        type: 'image',
                        rect: ['7.7%', '11.4%','29.1%','15.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"cut_all/stick_on_pizza.png",'0px','0px'],
                        transform: [[],[],[],['0.32758','0.52173']]
                    },
                    {
                        id: 'GR_12',
                        display: 'none',
                        type: 'image',
                        rect: ['16.7%', '12.1%','61.8%','70.7%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"chiliflakes/chili_on_pizza.png",'0px','0px']
                    },
                    {
                        id: 'GR_13',
                        display: 'none',
                        type: 'image',
                        rect: ['21%', '19.2%','61%','72%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"chiliflakes/oregano_on_pizza.png",'0px','0px']
                    },
                    {
                        id: 'GR_14',
                        display: 'none',
                        type: 'image',
                        rect: ['53.9%', '23.4%','3.3%','4.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"cut_all/Cut_tuna.png",'0px','0px']
                    },
                    {
                        id: 'GR_15',
                        display: 'none',
                        type: 'image',
                        rect: ['19.2%', '8.9%','30.6%','12.2%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"cut_all/shrimp.png",'0px','0px'],
                        transform: [[],[],[],['0.28163','0.75342']]
                    }]
                },
                {
                    id: 'hotgrll',
                    display: 'block',
                    type: 'rect',
                    rect: ['10.6%', '75.5%','auto','auto','auto', 'auto']
                },
                {
                    id: 'red_ani',
                    display: 'block',
                    type: 'rect',
                    rect: ['12.5%', '80.5%','auto','auto','auto', 'auto']
                },
                {
                    id: 'hand_6',
                    display: 'none',
                    type: 'rect',
                    rect: ['1.9%', '64.3%','auto','auto','auto', 'auto']
                },
                {
                    id: 'grill_area',
                    display: 'block',
                    type: 'rect',
                    rect: ['9.6%', '78.3%','20.3%','17.8%','auto', 'auto'],
                    fill: ["rgba(192,192,192,0)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'pizzacuttingplate',
                    display: 'block',
                    type: 'image',
                    rect: ['74.1%', '75.3%','20.5%','21.2%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"pizza/pizzacuttingplate.png",'0px','0px'],
                    transform: [[],['8']]
                },
                {
                    id: 'hand_4',
                    display: 'none',
                    type: 'rect',
                    rect: ['1.9%', '64.3%','auto','auto','auto', 'auto']
                },
                {
                    id: 'plate',
                    type: 'image',
                    rect: ['40.5%', '82%','14.9%','12.6%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"plate.png",'0px','0px']
                },
                {
                    id: 'PizzaOnPlateGrp',
                    type: 'group',
                    rect: ['40.9%', '82%','14.5%','10.6%','auto', 'auto'],
                    c: [
                    {
                        id: 'PP_0',
                        display: 'none',
                        type: 'image',
                        rect: ['8.7%', '6.5%','15.2%','12.7%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"pizza/pizzabase.png",'0px','0px']
                    },
                    {
                        id: 'PP_1',
                        display: 'none',
                        type: 'image',
                        rect: ['12.1%', '12.7%','71.6%','73.1%','auto', 'auto'],
                        opacity: 0.6,
                        fill: ["rgba(0,0,0,0)",im+"pizza/sauceonpizza.png",'0px','0px']
                    },
                    {
                        id: 'PP_2',
                        display: 'none',
                        type: 'image',
                        rect: ['4.7%', '-0.6%','14.1%','12.6%','auto', 'auto'],
                        opacity: 1,
                        fill: ["rgba(0,0,0,0)",im+"pizza/cheese.png",'0px','0px'],
                        transform: [[],[],[],['1.15928']]
                    },
                    {
                        id: 'PP_3',
                        display: 'none',
                        type: 'image',
                        rect: ['61.4%', '12.7%','17.8%','15.9%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"cut_all/Cut_L1.png",'0px','0px'],
                        transform: [[],[],[],['-0.48937','0.47916']]
                    },
                    {
                        id: 'PP_4',
                        display: 'none',
                        type: 'image',
                        rect: ['44.7%', '23.6%','7.8%','6.9%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"cut_all/leave2_on_face.png",'0px','0px'],
                        transform: [[],[],[],['-0.96774']]
                    },
                    {
                        id: 'PP_5',
                        display: 'none',
                        type: 'image',
                        rect: ['55%', '16.4%','29.6%','16.1%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"cut_all/red_cutcapsicum_on_face.png",'0px','0px'],
                        transform: [[],[],[],['-0.33617','0.52577']]
                    },
                    {
                        id: 'PP_6',
                        display: 'none',
                        type: 'image',
                        rect: ['17.6%', '19.2%','11.4%','6.7%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"cut_all/green_cutcaps_on_pizza.png",'0px','0px']
                    },
                    {
                        id: 'PP_7',
                        display: 'none',
                        type: 'image',
                        rect: ['-5.5%', '36.4%','28.1%','17%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"cut_all/tomato_on_pizza.png",'0px','0px'],
                        transform: [[],['-55'],['0','42'],['0.32955','0.62797']]
                    },
                    {
                        id: 'PP_8',
                        display: 'none',
                        type: 'image',
                        rect: ['9.9%', '66.5%','29.1%','19.9%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"cut_all/olive_on_pizza.png",'0px','0px'],
                        transform: [[],[],[],['0.41991','-0.51261']]
                    },
                    {
                        id: 'PP_9',
                        display: 'none',
                        type: 'image',
                        rect: ['28.3%', '36.2%','7.9%','5.6%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"cut_all/ham_on_pizza.png",'0px','0px']
                    },
                    {
                        id: 'PP_10',
                        display: 'none',
                        type: 'image',
                        rect: ['17.3%', '27.1%','18.2%','12.2%','auto', 'auto'],
                        borderRadius: ["0.67578125000009px 0.67578125000009px", "0.67578125000009px 0.67578125000009px", "0.67578125000009px 0.67578125000009px", "0.67578125000009px 0.67578125000009px"],
                        fill: ["rgba(0,0,0,0)",im+"cut_all/mushroom_on_pizza.png",'0px','0px'],
                        transform: [[],[],[],['0.40987','0.54054']]
                    },
                    {
                        id: 'PP_11',
                        display: 'none',
                        type: 'image',
                        rect: ['7.7%', '11.4%','29.1%','15.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"cut_all/stick_on_pizza.png",'0px','0px'],
                        transform: [[],[],[],['0.32758','0.52173']]
                    },
                    {
                        id: 'PP_12',
                        display: 'none',
                        type: 'image',
                        rect: ['16.7%', '12.1%','61.8%','70.7%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"chiliflakes/chili_on_pizza.png",'0px','0px']
                    },
                    {
                        id: 'PP_13',
                        display: 'none',
                        type: 'image',
                        rect: ['21%', '19.2%','61%','72%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"chiliflakes/oregano_on_pizza.png",'0px','0px']
                    },
                    {
                        id: 'PP_14',
                        display: 'none',
                        type: 'image',
                        rect: ['19.8%', '21.1%','61.2%','52.4%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"cut_all/Cut_tuna.png",'0px','0px']
                    },
                    {
                        id: 'PP_15',
                        display: 'none',
                        type: 'image',
                        rect: ['19.2%', '8.9%','30.6%','12.2%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"cut_all/shrimp.png",'0px','0px'],
                        transform: [[],[],[],['0.28163','0.75342']]
                    }]
                },
                {
                    id: 'tomato_sauace',
                    type: 'rect',
                    rect: ['34.8%', '76.7%','auto','auto','auto', 'auto']
                },
                {
                    id: 'wrong_ing',
                    display: 'none',
                    type: 'rect',
                    rect: ['43.4%', '84%','auto','auto','auto', 'auto']
                },
                {
                    id: 'hand_5',
                    display: 'none',
                    type: 'rect',
                    rect: ['1.9%', '64.3%','auto','auto','auto', 'auto']
                },
                {
                    id: 'plate_area',
                    type: 'ellipse',
                    rect: ['41.1%', '82.8%','13.5%','10.4%','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(192,192,192,0)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'PizzaForCut',
                    display: 'block',
                    type: 'group',
                    rect: ['60.4%', '81.1%','18.7%','13.7%','auto', 'auto'],
                    c: [
                    {
                        id: 'PC_0',
                        display: 'none',
                        type: 'image',
                        rect: ['8.7%', '6.5%','15.2%','12.7%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"pizza/pizzabase2.png",'0px','0px']
                    },
                    {
                        id: 'PC_1',
                        display: 'none',
                        type: 'image',
                        rect: ['8.7%', '9.8%','79.2%','80.7%','auto', 'auto'],
                        opacity: 0.66666666666667,
                        fill: ["rgba(0,0,0,0)",im+"pizza/sauceonpizza.png",'0px','0px']
                    },
                    {
                        id: 'PC_2',
                        display: 'none',
                        type: 'image',
                        rect: ['4.7%', '-0.6%','14.1%','12.6%','auto', 'auto'],
                        opacity: 1,
                        fill: ["rgba(0,0,0,0)",im+"cut_all/cheese_top.png",'0px','0px'],
                        transform: [[],[],[],['1.15928']]
                    },
                    {
                        id: 'PC_3',
                        display: 'none',
                        type: 'image',
                        rect: ['44.7%', '23.6%','7.8%','6.9%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"cut_all/leave2_on_face.png",'0px','0px'],
                        transform: [[],[],[],['-0.96774']]
                    },
                    {
                        id: 'PC_4',
                        display: 'none',
                        type: 'image',
                        rect: ['61.4%', '12.7%','17.8%','15.9%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"cut_all/leaves1_On_pizza.png",'0px','0px'],
                        transform: [[],[],[],['-0.48937','0.47916']]
                    },
                    {
                        id: 'PC_5',
                        display: 'none',
                        type: 'image',
                        rect: ['55%', '16.4%','29.6%','16.1%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"cut_all/red_cuting_on_face.png",'0px','0px'],
                        transform: [[],[],[],['-0.33617','0.52577']]
                    },
                    {
                        id: 'PC_6',
                        display: 'none',
                        type: 'image',
                        rect: ['17.6%', '19.2%','11.4%','6.7%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"cut_all/green_cutcaps_on_pizza.png",'0px','0px']
                    },
                    {
                        id: 'PC_7',
                        display: 'none',
                        type: 'image',
                        rect: ['-5.5%', '36.4%','28.1%','17%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"cut_all/tomato_on_pizza.png",'0px','0px'],
                        transform: [[],['-55'],['0','42'],['0.32955','0.62797']]
                    },
                    {
                        id: 'PC_8',
                        display: 'none',
                        type: 'image',
                        rect: ['9.9%', '66.5%','29.1%','19.9%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"cut_all/olive_on_pizza.png",'0px','0px'],
                        transform: [[],[],[],['0.41991','-0.51261']]
                    },
                    {
                        id: 'PC_9',
                        display: 'none',
                        type: 'image',
                        rect: ['28.3%', '36.2%','7.9%','5.6%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"cut_all/ham_on_pizza.png",'0px','0px']
                    },
                    {
                        id: 'PC_10',
                        display: 'none',
                        type: 'image',
                        rect: ['17.3%', '27.1%','18.2%','12.2%','auto', 'auto'],
                        borderRadius: ["0.67578125000009px 0.67578125000009px", "0.67578125000009px 0.67578125000009px", "0.67578125000009px 0.67578125000009px", "0.67578125000009px 0.67578125000009px"],
                        fill: ["rgba(0,0,0,0)",im+"cut_all/mushroom_on_pizza.png",'0px','0px'],
                        transform: [[],[],[],['0.40987','0.54054']]
                    },
                    {
                        id: 'PC_11',
                        display: 'none',
                        type: 'image',
                        rect: ['7.7%', '11.4%','29.1%','15.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"cut_all/stick_on_pizza.png",'0px','0px'],
                        transform: [[],[],[],['0.32758','0.52173']]
                    },
                    {
                        id: 'PC_12',
                        display: 'none',
                        type: 'image',
                        rect: ['16.7%', '12.1%','61.8%','70.7%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"chiliflakes/chili_on_pizza.png",'0px','0px']
                    },
                    {
                        id: 'PC_13',
                        display: 'none',
                        type: 'image',
                        rect: ['21%', '19.2%','61%','72%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"chiliflakes/oregano_on_pizza.png",'0px','0px']
                    },
                    {
                        id: 'PC_14',
                        display: 'none',
                        type: 'image',
                        rect: ['53.9%', '23.4%','3.3%','4.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"cut_all/Cut_tuna.png",'0px','0px']
                    },
                    {
                        id: 'PC_15',
                        display: 'none',
                        type: 'image',
                        rect: ['19.2%', '8.9%','30.6%','12.2%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"cut_all/shrimp.png",'0px','0px'],
                        transform: [[],[],[],['0.28163','0.75342']]
                    }]
                },
                {
                    id: 'cut_pizzaOut',
                    display: 'none',
                    type: 'image',
                    rect: ['76.9%', '82.5%','15.3%','10.8%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"pizzacuttingtransparent.png",'0px','0px']
                },
                {
                    id: 'cut_pizza',
                    display: 'block',
                    type: 'rect',
                    rect: ['59.9%', '80%','19.3%','18.3%','auto', 'auto'],
                    fill: ["rgba(192,192,192,0)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'pizza_cut',
                    display: 'none',
                    type: 'rect',
                    rect: ['66%', '73.5%','auto','auto','auto', 'auto']
                },
                {
                    id: 'R_chilli',
                    type: 'rect',
                    rect: ['-0.4%', '72.2%','auto','auto','auto', 'auto']
                },
                {
                    id: 'G_chilli',
                    type: 'rect',
                    rect: ['86%', '77.8%','auto','auto','auto', 'auto']
                },
                {
                    id: 'pizzabox',
                    display: 'none',
                    type: 'image',
                    rect: ['56%', '58.7%','18.4%','12.3%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"pizza/pizzabox.png",'0px','0px']
                },
                {
                    id: 'cutter1',
                    type: 'image',
                    rect: ['91.8%', '65.5%','9.9%','10.7%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"cutter.png",'0px','0px'],
                    transform: [[],['65']]
                },
                {
                    id: 'cut_area',
                    display: 'block',
                    type: 'rect',
                    rect: ['74.9%', '56.8%','18.6%','14.8%','auto', 'auto'],
                    fill: ["rgba(192,192,192,0)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    transform: [[],[],['3','12']]
                },
                {
                    id: 'I6',
                    display: 'none',
                    type: 'rect',
                    rect: ['73%', '58.2%','auto','auto','auto', 'auto']
                },
                {
                    id: 'I5',
                    display: 'none',
                    type: 'rect',
                    rect: ['73%', '57.2%','auto','auto','auto', 'auto']
                },
                {
                    id: 'I7',
                    display: 'none',
                    type: 'rect',
                    rect: ['73.7%', '57.6%','auto','auto','auto', 'auto']
                },
                {
                    id: 'I8',
                    display: 'none',
                    type: 'rect',
                    rect: ['73.3%', '58.1%','auto','auto','auto', 'auto']
                },
                {
                    id: 'I10',
                    display: 'none',
                    type: 'rect',
                    rect: ['72.6%', '57.4%','auto','auto','auto', 'auto']
                },
                {
                    id: 'I11',
                    display: 'none',
                    type: 'rect',
                    rect: ['74.6%', '57.1%','auto','auto','auto', 'auto']
                },
                {
                    id: 'I9',
                    display: 'none',
                    type: 'rect',
                    rect: ['76.4%', '59.5%','auto','auto','auto', 'auto']
                },
                {
                    id: 'Earning_ani',
                    display: 'none',
                    type: 'rect',
                    rect: ['73.4%', '11.8%','auto','auto','auto', 'auto']
                },
                {
                    id: 'TotalEar_ani',
                    type: 'rect',
                    rect: ['0.3%', '90.2%','auto','auto','auto', 'auto']
                },
                {
                    id: 'hint_sym',
                    display: 'none',
                    type: 'rect',
                    rect: ['86.6%', '83.3%','auto','auto','auto', 'auto']
                },
                {
                    id: 'pause_gup',
                    display: 'none',
                    type: 'group',
                    rect: ['0%', '0%','100%','100%','auto', 'auto'],
                    c: [
                    {
                        id: 'paused_page',
                        type: 'image',
                        rect: ['0%', '0%','100%','100%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"paused_page.png",'0px','0px']
                    },
                    {
                        id: 'play2',
                        type: 'image',
                        rect: ['53.1%', '57%','12.3%','16.5%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"All_btn/game2.png",'0px','0px']
                    },
                    {
                        id: 'home',
                        type: 'image',
                        rect: ['35.1%', '56.5%','12.3%','16.5%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"All_btn/game_M.png",'0px','0px']
                    }]
                }]
            },
            {
                id: 'stage_end',
                display: 'none',
                type: 'group',
                rect: ['0%', '0%','100%','100%','auto', 'auto'],
                c: [
                {
                    id: 'stage_scr',
                    display: 'block',
                    type: 'rect',
                    rect: ['0%', '0%','auto','auto','auto', 'auto']
                },
                {
                    id: 'StagenoTxt',
                    display: 'block',
                    type: 'text',
                    rect: ['47.4%', '23.3%','auto','auto','auto', 'auto'],
                    text: "0",
                    align: "left",
                    font: ['black-ops-one, sans-serif', [250, "%"], "rgba(239,15,50,1)", "100", "none", "normal"],
                    transform: [[],[],[],['2.04999','2.04999']]
                },
                {
                    id: 'StageEarnings',
                    display: 'block',
                    type: 'text',
                    rect: ['47.4%', '23.3%','auto','auto','auto', 'auto'],
                    text: "0",
                    align: "left",
                    font: ['black-ops-one, sans-serif', [2.5, "em"], "rgba(239,15,50,1)", "100", "none", "normal"],
                    transform: [[],[],[],['2.04999','2.04999']]
                },
                {
                    id: 'No_strar',
                    type: 'rect',
                    rect: ['30.8%', '40.9%','auto','auto','auto', 'auto']
                },
                {
                    id: 'strar_1',
                    type: 'rect',
                    rect: ['32%', '42.3%','auto','auto','auto', 'auto']
                },
                {
                    id: 'strar_2',
                    type: 'rect',
                    rect: ['31.8%', '42.3%','auto','auto','auto', 'auto']
                },
                {
                    id: 'strar_3',
                    type: 'rect',
                    rect: ['31.8%', '42.3%','auto','auto','auto', 'auto']
                },
                {
                    id: 'game',
                    display: 'none',
                    type: 'image',
                    rect: ['48%', '72.2%','12.3%','16.5%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"All_btn/game2.png",'0px','0px']
                }]
            },
            {
                id: 'newpro',
                display: 'none',
                type: 'group',
                rect: ['2.5%', '23.2%','8%','46%','auto', 'auto'],
                c: [
                {
                    id: 'backgraund',
                    type: 'image',
                    rect: ['-0.1%', '0%','100%','98.9%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"backgraund.png",'0px','0px']
                },
                {
                    id: 'greenbar',
                    type: 'image',
                    rect: ['16.9%', '6.9%','67.9%','88%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"image-547.png",'0px','0px']
                },
                {
                    id: 'border',
                    type: 'image',
                    rect: ['1.6%', '2.5%','98.5%','97.5%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"border.png",'0px','0px']
                }]
            },
            {
                id: 'play',
                type: 'image',
                rect: ['93.3%', '91.2%','6.3%','8.3%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"All_btn/off.png",'0px','0px']
            },
            {
                id: 'pause',
                type: 'image',
                rect: ['93.3%', '91.3%','6.3%','8.3%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"All_btn/on.png",'0px','0px']
            }],
            symbolInstances: [
            {
                id: 'pendui_ani',
                symbolName: 'pendui_ani',
                autoPlay: {

                }
            },
            {
                id: 'cust_1',
                symbolName: 'cust_1',
                autoPlay: {

                }
            },
            {
                id: 'StageNoAnim_5',
                symbolName: 'StageNoAnim_5',
                autoPlay: {

                }
            },
            {
                id: 'hand_1',
                symbolName: 'hand_1',
                autoPlay: {

                }
            },
            {
                id: 'time_bar',
                symbolName: 'time_bar',
                autoPlay: {

                }
            },
            {
                id: 'cust_X3',
                symbolName: 'Wrong',
                autoPlay: {

                }
            },
            {
                id: 'G_chilli',
                symbolName: 'G_chilli',
                autoPlay: {

                }
            },
            {
                id: 'play1',
                symbolName: 'play',
                autoPlay: {

                }
            },
            {
                id: 'stage_scr',
                symbolName: 'stage_scr',
                autoPlay: {

                }
            },
            {
                id: 'cust_3',
                symbolName: 'cust_3',
                autoPlay: {

                }
            },
            {
                id: 'wrong_ing',
                symbolName: 'wrong_ing',
                autoPlay: {

                }
            },
            {
                id: 'I7',
                symbolName: 'I7',
                autoPlay: {

                }
            },
            {
                id: 'cust_2',
                symbolName: 'cust_2',
                autoPlay: {

                }
            },
            {
                id: 'No_strar',
                symbolName: 'No_strar',
                autoPlay: {

                }
            },
            {
                id: 'hint_sym',
                symbolName: 'hint_sym',
                autoPlay: {

                }
            },
            {
                id: 'StageNoAnim_7',
                symbolName: 'StageNoAnim_7',
                autoPlay: {

                }
            },
            {
                id: 'I6',
                symbolName: 'I6',
                autoPlay: {

                }
            },
            {
                id: 'TotalEar_ani',
                symbolName: 'TotalEar_ani',
                autoPlay: {

                }
            },
            {
                id: 'hotgrll',
                symbolName: 'hotgrll',
                autoPlay: {

                }
            },
            {
                id: 'Earning_ani',
                symbolName: 'Earning_ani',
                autoPlay: {

                }
            },
            {
                id: 'I9',
                symbolName: 'I9',
                autoPlay: {

                }
            },
            {
                id: 'body_ani',
                symbolName: 'body_ani',
                autoPlay: {

                }
            },
            {
                id: 'StageNoAnim_11',
                symbolName: 'StageNoAnim_11',
                autoPlay: {

                }
            },
            {
                id: 'cust_8',
                symbolName: 'cust_8',
                autoPlay: {

                }
            },
            {
                id: 'StageNoAnim_15',
                symbolName: 'StageNoAnim_15',
                autoPlay: {

                }
            },
            {
                id: 'hand_5',
                symbolName: 'hand_1',
                autoPlay: {

                }
            },
            {
                id: 'cust_7',
                symbolName: 'cust_7',
                autoPlay: {

                }
            },
            {
                id: 'I8',
                symbolName: 'I8',
                autoPlay: {

                }
            },
            {
                id: 'cust_X2',
                symbolName: 'Wrong',
                autoPlay: {

                }
            },
            {
                id: 'StageTmTxt',
                symbolName: 'StageTimeTxt',
                autoPlay: {

                }
            },
            {
                id: 'cust_6',
                symbolName: 'cust_6',
                autoPlay: {

                }
            },
            {
                id: 'strar_1',
                symbolName: 'strar_1',
                autoPlay: {

                }
            },
            {
                id: 'I5',
                symbolName: 'I5',
                autoPlay: {

                }
            },
            {
                id: 'red_ani',
                symbolName: 'red_ani',
                autoPlay: {

                }
            },
            {
                id: 'cust_4',
                symbolName: 'cust_4',
                autoPlay: {

                }
            },
            {
                id: 'body_ani_plate',
                symbolName: 'body_ani_plate_1',
                autoPlay: {

                }
            },
            {
                id: 'strar_3',
                symbolName: 'strar_3',
                autoPlay: {

                }
            },
            {
                id: 'StageNoAnim_10',
                symbolName: 'StageNoAnim_10',
                autoPlay: {

                }
            },
            {
                id: 'IngSeatNo',
                symbolName: 'IngSeatNo',
                autoPlay: {

                }
            },
            {
                id: 'R_chilli',
                symbolName: 'R_chilli',
                autoPlay: {

                }
            },
            {
                id: 'pizza_cut',
                symbolName: 'pizza_cut',
                autoPlay: {

                }
            },
            {
                id: 'StageNoAnim_4',
                symbolName: 'StageNoAnim_4',
                autoPlay: {

                }
            },
            {
                id: 'hand_4',
                symbolName: 'hand_1',
                autoPlay: {

                }
            },
            {
                id: 'I11',
                symbolName: 'I11',
                autoPlay: {

                }
            },
            {
                id: 'strar_2',
                symbolName: 'strar_2',
                autoPlay: {

                }
            },
            {
                id: 'tomato_sauace',
                symbolName: 'tomato_sauace',
                autoPlay: {

                }
            },
            {
                id: 'hand_6',
                symbolName: 'hand_1',
                autoPlay: {

                }
            },
            {
                id: 'StageNoAnim_2',
                symbolName: 'StageNoAnim_2',
                autoPlay: {

                }
            },
            {
                id: 'hand_3',
                symbolName: 'hand_1',
                autoPlay: {

                }
            },
            {
                id: 'StageNoAnim_9',
                symbolName: 'StageNoAnim_9',
                autoPlay: {

                }
            },
            {
                id: 'I10',
                symbolName: 'I10',
                autoPlay: {

                }
            },
            {
                id: 'StageNoAnim_6',
                symbolName: 'StageNoAnim_6',
                autoPlay: {

                }
            },
            {
                id: 'hand_2',
                symbolName: 'hand_1',
                autoPlay: {

                }
            },
            {
                id: 'StageNoAnim_13',
                symbolName: 'StageNoAnim_13',
                autoPlay: {

                }
            },
            {
                id: 'dustbin_ani',
                symbolName: 'dustbin_ani',
                autoPlay: {

                }
            },
            {
                id: 'StageNoAnim_12',
                symbolName: 'StageNoAnim_12',
                autoPlay: {

                }
            },
            {
                id: 'cust_X',
                symbolName: 'Wrong',
                autoPlay: {

                }
            },
            {
                id: 'StageNoAnim_1',
                symbolName: 'StageNoAnim_1',
                autoPlay: {

                }
            },
            {
                id: 'StageNoAnim_14',
                symbolName: 'StageNoAnim_14',
                autoPlay: {

                }
            },
            {
                id: 'StageNoAnim_3',
                symbolName: 'StageNoAnim_3',
                autoPlay: {

                }
            },
            {
                id: 'cust_5',
                symbolName: 'cust_5',
                autoPlay: {

                }
            },
            {
                id: 'StageNoAnim_8',
                symbolName: 'StageNoAnim_8',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Group7}": [
                ["style", "height", '16%'],
                ["style", "top", '24.67%'],
                ["style", "left", '59.75%'],
                ["style", "width", '9%']
            ],
            "${_star213}": [
                ["style", "top", '-0.28%'],
                ["style", "height", '99.34%'],
                ["style", "display", 'none'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_burger6}": [
                ["style", "height", '51.29%'],
                ["style", "top", '35.62%'],
                ["style", "left", '10.96%'],
                ["style", "width", '77.98%']
            ],
            "${_blank_sta11}": [
                ["style", "height", '99.34%'],
                ["style", "top", '-0.28%'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_star32}": [
                ["style", "top", '1.21%'],
                ["style", "display", 'none'],
                ["style", "height", '99.34%'],
                ["style", "left", '0.71%'],
                ["style", "width", '99%']
            ],
            "${_PC_13}": [
                ["style", "top", '19.2%'],
                ["style", "display", 'none'],
                ["style", "height", '72.03%'],
                ["style", "left", '21.04%'],
                ["style", "width", '61.04%']
            ],
            "${_PC_3}": [
                ["style", "top", '23.59%'],
                ["transform", "scaleX", '-0.96774'],
                ["style", "height", '60%'],
                ["style", "display", 'none'],
                ["style", "left", '18%'],
                ["style", "width", '51.67%']
            ],
            "${_StageNoAnim_12}": [
                ["style", "top", '38.54%'],
                ["transform", "scaleX", '0.6895'],
                ["transform", "scaleY", '0.71044'],
                ["style", "left", '16.67%']
            ],
            "${_blank_sta4}": [
                ["style", "height", '99.34%'],
                ["style", "top", '-0.28%'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_star214}": [
                ["style", "top", '-0.28%'],
                ["style", "height", '99.34%'],
                ["style", "display", 'none'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_G_chilli}": [
                ["style", "left", '66%']
            ],
            "${_R_chilli}": [
                ["style", "left", '59.88%'],
                ["style", "top", '77.5%']
            ],
            "${_stege13}": [
                ["style", "top", '6.64%'],
                ["style", "height", '77.1%'],
                ["style", "display", 'block'],
                ["style", "left", '-0.26%'],
                ["style", "width", '101.2%']
            ],
            "${_blank_sta12}": [
                ["style", "height", '99.34%'],
                ["style", "top", '-0.28%'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_i_5}": [
                ["style", "top", '16.67%'],
                ["style", "left", '77.1%'],
                ["style", "display", 'none']
            ],
            "${_ing_5}": [
                ["style", "top", '15.87%'],
                ["style", "height", '29.37%'],
                ["style", "left", '76.81%'],
                ["style", "width", '9.51%']
            ],
            "${_mush1}": [
                ["style", "top", '14.68%'],
                ["transform", "rotateZ", '25deg'],
                ["style", "height", '70.29%'],
                ["style", "left", '3.82%'],
                ["style", "width", '33.6%']
            ],
            "${_star29}": [
                ["style", "top", '-0.28%'],
                ["style", "display", 'none'],
                ["style", "height", '99.34%'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_grill1}": [
                ["style", "top", '67%'],
                ["style", "height", '30.33%'],
                ["style", "left", '8.25%'],
                ["style", "width", '24.75%']
            ],
            "${_stege9}": [
                ["style", "top", '6.64%'],
                ["style", "display", 'block'],
                ["style", "height", '80%'],
                ["style", "left", '-0.26%'],
                ["style", "width", '95%']
            ],
            "${_screen}": [
                ["style", "top", '-0.11%'],
                ["style", "height", '100.23%'],
                ["style", "left", '0.13%'],
                ["style", "width", '99.99%']
            ],
            "${_star12}": [
                ["style", "top", '-0.28%'],
                ["style", "display", 'none'],
                ["style", "height", '99.34%'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_PC_7}": [
                ["transform", "rotateZ", '-55deg'],
                ["transform", "scaleX", '0.32955'],
                ["style", "left", '-29.23%'],
                ["style", "width", '152.33%'],
                ["style", "top", '0.26%'],
                ["transform", "scaleY", '0.62797'],
                ["style", "height", '95.55%'],
                ["transform", "skewY", '42deg'],
                ["style", "display", 'none']
            ],
            "${_star14}": [
                ["style", "top", '-0.28%'],
                ["style", "display", 'none'],
                ["style", "height", '99.34%'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_red_ani}": [
                ["style", "top", '78.33%'],
                ["style", "display", 'block'],
                ["style", "left", '13.38%'],
                ["transform", "scaleX", '0.70796']
            ],
            "${_star_3}": [
                ["style", "top", '0.17%'],
                ["style", "height", '54.13%'],
                ["style", "left", '0.17%'],
                ["style", "width", '99.81%']
            ],
            "${_I6}": [
                ["style", "top", '58.5%'],
                ["transform", "scaleY", '1.91489'],
                ["transform", "scaleX", '1.49533'],
                ["style", "left", '81%'],
                ["style", "display", 'none']
            ],
            "${_star36}": [
                ["style", "top", '-1.32%'],
                ["style", "height", '99.34%'],
                ["style", "display", 'none'],
                ["style", "left", '-0.65%'],
                ["style", "width", '99%']
            ],
            "${_PP_3}": [
                ["style", "top", '-15.83%'],
                ["transform", "scaleY", '0.47916'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '-0.48937'],
                ["style", "height", '125.22%'],
                ["style", "left", '1.33%'],
                ["style", "width", '102.18%']
            ],
            "${_GR_3}": [
                ["style", "top", '23.59%'],
                ["transform", "scaleX", '-0.96774'],
                ["style", "height", '60%'],
                ["style", "display", 'none'],
                ["style", "left", '18%'],
                ["style", "width", '51.67%']
            ],
            "${_mush1_area}": [
                ["style", "height", '5.33%'],
                ["style", "top", '41.83%'],
                ["style", "left", '31.62%'],
                ["style", "width", '5.63%']
            ],
            "${_star33}": [
                ["style", "top", '-1.32%'],
                ["style", "display", 'none'],
                ["style", "height", '99.34%'],
                ["style", "left", '-0.65%'],
                ["style", "width", '99%']
            ],
            "${_b_bur7}": [
                ["style", "top", '35.62%'],
                ["style", "height", '51.29%'],
                ["style", "left", '10.95%'],
                ["style", "width", '77.98%']
            ],
            "${_b_bur8}": [
                ["style", "height", '51.29%'],
                ["style", "top", '35.62%'],
                ["style", "left", '10.95%'],
                ["style", "width", '77.98%']
            ],
            "${_i_1}": [
                ["style", "top", '16.67%'],
                ["style", "left", '17.1%'],
                ["style", "display", 'none']
            ],
            "${_StageNoAnim_13}": [
                ["style", "top", '38.54%'],
                ["transform", "scaleX", '0.85282'],
                ["transform", "scaleY", '0.68267'],
                ["style", "left", '15.28%']
            ],
            "${_star212}": [
                ["style", "top", '-0.28%'],
                ["style", "height", '99.34%'],
                ["style", "display", 'none'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_pro3}": [
                ["style", "top", '5.66%'],
                ["style", "left", '10.71%']
            ],
            "${_I9}": [
                ["style", "top", '58.5%'],
                ["transform", "scaleY", '1.91489'],
                ["transform", "scaleX", '1.49533'],
                ["style", "left", '81%'],
                ["style", "display", 'none']
            ],
            "${_burger14}": [
                ["style", "height", '51.29%'],
                ["style", "top", '35.62%'],
                ["style", "left", '10.96%'],
                ["style", "width", '77.98%']
            ],
            "${_plate_area}": [
                ["style", "height", '10.4%'],
                ["style", "top", '82.83%'],
                ["style", "left", '41.13%'],
                ["style", "width", '13.5%']
            ],
            "${_star_1}": [
                ["style", "height", '56.4%'],
                ["style", "top", '-0.1%'],
                ["style", "left", '-0.2%'],
                ["style", "width", '98.91%']
            ],
            "${_clock}": [
                ["style", "top", '9%'],
                ["style", "height", '8.9%'],
                ["style", "width", '9.5%']
            ],
            "${_Group6}": [
                ["style", "top", '16.5%'],
                ["style", "height", '16%'],
                ["style", "left", '70.5%'],
                ["style", "width", '9%']
            ],
            "${_page_1}": [
                ["style", "left", '0%'],
                ["style", "top", '0%']
            ],
            "${_cust_4}": [
                ["style", "top", '43.27%'],
                ["transform", "scaleY", '1.76649'],
                ["transform", "scaleX", '2.0625'],
                ["style", "left", '115.9%'],
                ["style", "display", 'none']
            ],
            "${_PC_11}": [
                ["style", "top", '-12.49%'],
                ["transform", "scaleY", '0.52173'],
                ["transform", "scaleX", '0.32758'],
                ["style", "display", 'none'],
                ["style", "height", '115%'],
                ["style", "left", '-27.33%'],
                ["style", "width", '152.64%']
            ],
            "${_star110}": [
                ["style", "top", '-0.28%'],
                ["style", "height", '99.34%'],
                ["style", "display", 'none'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_blank_sta9}": [
                ["style", "top", '-0.28%'],
                ["style", "height", '99.34%'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_GR_2}": [
                ["style", "top", '7.32%'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '1.15928'],
                ["style", "height", '80%'],
                ["style", "opacity", '1'],
                ["style", "left", '13.33%'],
                ["style", "width", '69.01%']
            ],
            "${_pro2}": [
                ["style", "top", '5.66%'],
                ["style", "left", '10.71%']
            ],
            "${_stege5}": [
                ["style", "top", '12.5%'],
                ["style", "display", 'block'],
                ["style", "height", '70.27%'],
                ["style", "left", '8.33%'],
                ["style", "width", '86.91%']
            ],
            "${_StageNoAnim_2}": [
                ["style", "top", '39.58%'],
                ["transform", "scaleX", '0.65344'],
                ["transform", "scaleY", '0.8'],
                ["style", "left", '4.17%']
            ],
            "${_stege4}": [
                ["style", "top", '1.28%'],
                ["style", "display", 'block'],
                ["style", "height", '93.16%'],
                ["style", "left", '4.63%'],
                ["style", "width", '86%']
            ],
            "${_star_4}": [
                ["style", "top", '0.2%'],
                ["style", "height", '57.06%'],
                ["style", "left", '-0.15%'],
                ["style", "width", '100.46%']
            ],
            "${_star26}": [
                ["style", "top", '-0.28%'],
                ["style", "height", '99.34%'],
                ["style", "display", 'none'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_pizzabox}": [
                ["style", "top", '58.67%'],
                ["style", "display", 'none'],
                ["style", "height", '12.3%'],
                ["style", "left", '56%'],
                ["style", "width", '18.4%']
            ],
            "${_PC_14}": [
                ["style", "top", '17.07%'],
                ["style", "height", '63%'],
                ["style", "display", 'none'],
                ["style", "left", '19.33%'],
                ["style", "width", '55.51%']
            ],
            "${_PP_13}": [
                ["style", "top", '19.2%'],
                ["style", "height", '72.03%'],
                ["style", "display", 'none'],
                ["style", "left", '21.04%'],
                ["style", "width", '61.04%']
            ],
            "${_GR_6}": [
                ["style", "top", '14.63%'],
                ["style", "display", 'none'],
                ["style", "height", '64.5%'],
                ["style", "left", '17.64%'],
                ["style", "width", '54.4%']
            ],
            "${_PP_1}": [
                ["style", "top", '12.7%'],
                ["style", "display", 'none'],
                ["style", "height", '73.1%'],
                ["style", "opacity", '0.6'],
                ["style", "left", '12.07%'],
                ["style", "width", '71.61%']
            ],
            "${_PizzaForCut}": [
                ["style", "display", 'block'],
                ["style", "left", '74.75%'],
                ["style", "top", '80.33%']
            ],
            "${_PizzaOnPlateGrp}": [
                ["style", "height", '10.57%'],
                ["style", "top", '82%'],
                ["style", "left", '40.88%'],
                ["style", "width", '14.51%']
            ],
            "${_PP_15}": [
                ["style", "top", '3.66%'],
                ["transform", "scaleY", '0.75342'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '0.28163'],
                ["style", "height", '87.34%'],
                ["style", "left", '-67.17%'],
                ["style", "width", '233.29%']
            ],
            "${_body_ani_plate}": [
                ["style", "top", '40.67%'],
                ["style", "left", '37.88%'],
                ["style", "display", 'block']
            ],
            "${_stege8}": [
                ["style", "top", '6.64%'],
                ["style", "height", '78.3%'],
                ["style", "display", 'block'],
                ["style", "left", '-0.26%'],
                ["style", "width", '97.31%']
            ],
            "${_b_bur13}": [
                ["style", "height", '51.29%'],
                ["style", "top", '35.62%'],
                ["style", "left", '10.95%'],
                ["style", "width", '77.98%']
            ],
            "${_star21}": [
                ["style", "top", '-0.28%'],
                ["style", "display", 'none'],
                ["style", "height", '99.34%'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_star111}": [
                ["style", "top", '-0.28%'],
                ["style", "height", '99.34%'],
                ["style", "display", 'none'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_b_bur15}": [
                ["style", "height", '51.29%'],
                ["style", "top", '35.62%'],
                ["style", "left", '10.95%'],
                ["style", "width", '77.98%']
            ],
            "${_StagenoTxt}": [
                ["style", "top", '24.5%'],
                ["transform", "scaleX", '1.45'],
                ["transform", "scaleY", '1.45'],
                ["color", "color", 'rgba(199,15,194,1.00)'],
                ["style", "display", 'block'],
                ["style", "font-weight", '100'],
                ["style", "left", '47.63%'],
                ["style", "font-size", '150%']
            ],
            "${_hand_6}": [
                ["style", "top", '64.33%'],
                ["style", "display", 'none'],
                ["style", "left", '18%'],
                ["transform", "rotateZ", '180deg']
            ],
            "${_stege7}": [
                ["style", "top", '6.64%'],
                ["style", "display", 'block'],
                ["style", "height", '78.6%'],
                ["style", "left", '-0.26%'],
                ["style", "width", '92.1%']
            ],
            "${_star_10}": [
                ["style", "height", '54.13%'],
                ["style", "top", '0.14%'],
                ["style", "left", '-0.26%'],
                ["style", "width", '100.46%']
            ],
            "${_PP_10}": [
                ["style", "border-top-left-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.40987'],
                ["style", "left", '-13.3%'],
                ["style", "width", '121.99%'],
                ["style", "top", '-7.32%'],
                ["style", "border-bottom-left-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '0.54054'],
                ["style", "height", '111%'],
                ["style", "display", 'none'],
                ["style", "border-top-right-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_star38}": [
                ["style", "top", '-1.32%'],
                ["style", "height", '99.34%'],
                ["style", "display", 'none'],
                ["style", "left", '-0.65%'],
                ["style", "width", '99%']
            ],
            "${_star15}": [
                ["style", "top", '-0.28%'],
                ["style", "display", 'none'],
                ["style", "height", '99.34%'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_PizzaOnGrillGrp}": [
                ["style", "top", '77.83%'],
                ["style", "display", 'block'],
                ["style", "height", '9.53%'],
                ["style", "left", '14.5%'],
                ["style", "width", '12.1%']
            ],
            "${_cust_5}": [
                ["style", "top", '43.42%'],
                ["transform", "scaleY", '1.76649'],
                ["transform", "scaleX", '2.0625'],
                ["style", "left", '115.94%'],
                ["style", "display", 'none']
            ],
            "${_pizza_cut}": [
                ["style", "display", 'none'],
                ["style", "left", '76.63%']
            ],
            "${_ing_3}": [
                ["style", "top", '14.29%'],
                ["style", "height", '29.37%'],
                ["style", "left", '48.7%'],
                ["style", "width", '9.51%']
            ],
            "${_StageNoAnim_15}": [
                ["style", "top", '37.5%'],
                ["transform", "scaleX", '0.72564'],
                ["transform", "scaleY", '0.71467'],
                ["style", "left", '15.28%']
            ],
            "${_play}": [
                ["style", "top", '91.17%'],
                ["style", "height", '8.33%'],
                ["style", "left", '93.3%'],
                ["style", "width", '6.25%']
            ],
            "${_Group9}": [
                ["style", "height", '16%'],
                ["style", "top", '41.33%'],
                ["style", "left", '33.38%'],
                ["style", "width", '9%']
            ],
            "${_Pause}": [
                ["style", "top", '8.33%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '7.18%'],
                ["style", "left", '5.5%'],
                ["style", "width", '6%']
            ],
            "${_burger15}": [
                ["style", "height", '51.29%'],
                ["style", "top", '35.62%'],
                ["style", "left", '10.96%'],
                ["style", "width", '77.98%']
            ],
            "${_hand_2}": [
                ["style", "display", 'none'],
                ["style", "top", '46.17%'],
                ["style", "left", '86.38%'],
                ["transform", "rotateZ", '180deg']
            ],
            "${_time_bar}": [
                ["style", "top", '90.67%'],
                ["transform", "scaleY", '0.45'],
                ["transform", "scaleX", '0.52231'],
                ["style", "left", '5.38%'],
                ["style", "display", 'block']
            ],
            "${_glass4}": [
                ["style", "height", '100.98%'],
                ["style", "top", '-0.25%'],
                ["style", "left", '44.55%'],
                ["style", "width", '55.29%']
            ],
            "${_b_bur5}": [
                ["style", "top", '35.62%'],
                ["style", "height", '51.29%'],
                ["style", "left", '10.95%'],
                ["style", "width", '77.98%']
            ],
            "${_Group8}": [
                ["style", "top", '35%'],
                ["style", "height", '16%'],
                ["style", "left", '48.5%'],
                ["style", "width", '9%']
            ],
            "${_stage_scr}": [
                ["style", "display", 'block']
            ],
            "${_b_bur4}": [
                ["style", "top", '36.02%'],
                ["style", "height", '54.11%'],
                ["style", "left", '13.51%'],
                ["style", "width", '77.98%']
            ],
            "${_tomato_sauace}": [
                ["style", "top", '77.83%'],
                ["style", "left", '32.25%']
            ],
            "${_StageNoAnim_14}": [
                ["transform", "scaleX", '0.72744'],
                ["style", "left", '16.67%'],
                ["transform", "scaleY", '0.73178'],
                ["style", "top", '37.5%']
            ],
            "${_star_11}": [
                ["style", "height", '54.13%'],
                ["style", "top", '0.14%'],
                ["style", "left", '-0.26%'],
                ["style", "width", '100.46%']
            ],
            "${_PC_5}": [
                ["style", "top", '-9.66%'],
                ["transform", "scaleY", '0.52577'],
                ["transform", "scaleX", '-0.33617'],
                ["style", "display", 'none'],
                ["style", "height", '124.95%'],
                ["style", "left", '-42.34%'],
                ["style", "width", '180.57%']
            ],
            "${_star31}": [
                ["style", "top", '1.21%'],
                ["style", "display", 'none'],
                ["style", "height", '99.34%'],
                ["style", "left", '0.71%'],
                ["style", "width", '99%']
            ],
            "${_Group17}": [
                ["style", "top", '37.5%'],
                ["style", "left", '77.63%'],
                ["style", "overflow", 'hidden']
            ],
            "${_blank_sta6}": [
                ["style", "height", '99.34%'],
                ["style", "top", '-0.28%'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_burger5}": [
                ["style", "top", '35.62%'],
                ["style", "height", '51.29%'],
                ["style", "left", '10.96%'],
                ["style", "width", '77.98%']
            ],
            "${_Group15}": [
                ["style", "top", '-1.33%'],
                ["style", "height", '16%'],
                ["style", "left", '56.13%'],
                ["style", "width", '9%']
            ],
            "${_star315}": [
                ["style", "top", '-1.32%'],
                ["style", "height", '99.34%'],
                ["style", "display", 'none'],
                ["style", "left", '-0.65%'],
                ["style", "width", '99%']
            ],
            "${_i_2}": [
                ["style", "top", '16.67%'],
                ["style", "left", '34.78%'],
                ["style", "display", 'none']
            ],
            "${_star210}": [
                ["style", "top", '-0.28%'],
                ["style", "height", '99.34%'],
                ["style", "display", 'none'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_tomato}": [
                ["style", "height", '9.08%'],
                ["style", "top", '19.17%'],
                ["style", "left", '-1%'],
                ["style", "width", '6.13%']
            ],
            "${_rawshrimp}": [
                ["style", "top", '37.67%'],
                ["style", "height", '6.83%'],
                ["style", "left", '15.5%'],
                ["style", "width", '5.38%']
            ],
            "${_blank_sta10}": [
                ["style", "height", '99.34%'],
                ["style", "top", '-0.28%'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_stege14}": [
                ["style", "top", '10.42%'],
                ["style", "height", '77.1%'],
                ["style", "display", 'block'],
                ["style", "left", '-0.26%'],
                ["style", "width", '100.6%']
            ],
            "${_GR_8}": [
                ["style", "top", '-9.76%'],
                ["transform", "scaleY", '-0.51261'],
                ["transform", "scaleX", '0.41991'],
                ["style", "display", 'none'],
                ["style", "height", '117.05%'],
                ["style", "left", '-20.22%'],
                ["style", "width", '133.84%']
            ],
            "${_cheese}": [
                ["style", "height", '90.45%'],
                ["style", "top", '205.13%'],
                ["style", "left", '15.77%'],
                ["style", "width", '15.45%']
            ],
            "${_backgraund}": [
                ["style", "top", '0%'],
                ["style", "height", '98.91%'],
                ["style", "left", '-0.12%'],
                ["style", "width", '100%']
            ],
            "${_cust_X}": [
                ["style", "top", '2.17%'],
                ["transform", "scaleY", '0.73412'],
                ["style", "display", 'none'],
                ["style", "left", '63.97%'],
                ["transform", "scaleX", '0.54026']
            ],
            "${_PP_9}": [
                ["style", "top", '12.2%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'none'],
                ["style", "height", '65.85%'],
                ["style", "left", '20.67%'],
                ["style", "width", '50%']
            ],
            "${_foodbg}": [
                ["style", "height", '100%'],
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "width", '100%']
            ],
            "${_burger12}": [
                ["style", "height", '51.29%'],
                ["style", "top", '35.62%'],
                ["style", "left", '10.96%'],
                ["style", "width", '77.98%']
            ],
            "${_ing_6}": [
                ["style", "top", '48.41%'],
                ["style", "height", '29.37%'],
                ["style", "left", '11.3%'],
                ["style", "width", '9.51%']
            ],
            "${_stege2}": [
                ["style", "top", '40.63%'],
                ["style", "display", 'block'],
                ["style", "height", '53.13%'],
                ["style", "left", '22.22%'],
                ["style", "width", '68.06%']
            ],
            "${_GR_12}": [
                ["style", "top", '12.1%'],
                ["style", "height", '70.65%'],
                ["style", "display", 'none'],
                ["style", "left", '16.68%'],
                ["style", "width", '61.84%']
            ],
            "${_PP_7}": [
                ["transform", "rotateZ", '-55deg'],
                ["transform", "scaleX", '0.32955'],
                ["style", "left", '-29.23%'],
                ["style", "width", '152.33%'],
                ["style", "top", '0.26%'],
                ["transform", "scaleY", '0.62797'],
                ["style", "height", '95.55%'],
                ["style", "display", 'none'],
                ["transform", "skewY", '42deg']
            ],
            "${_ing_10}": [
                ["style", "height", '29.37%'],
                ["style", "top", '50%'],
                ["style", "left", '77.68%'],
                ["style", "width", '9.51%']
            ],
            "${_border}": [
                ["style", "height", '97.54%'],
                ["style", "top", '2.54%'],
                ["style", "left", '1.57%'],
                ["style", "width", '98.5%']
            ],
            "${_star310}": [
                ["style", "top", '-1.32%'],
                ["style", "height", '99.34%'],
                ["style", "display", 'none'],
                ["style", "left", '-0.65%'],
                ["style", "width", '99%']
            ],
            "${_StageEarnings}": [
                ["transform", "scaleX", '1.45'],
                ["style", "font-weight", '100'],
                ["style", "left", '49.62%'],
                ["style", "width", '112px'],
                ["style", "top", '64.5%'],
                ["transform", "scaleY", '1.45'],
                ["style", "display", 'block'],
                ["color", "color", 'rgba(239,232,15,1.00)'],
                ["style", "font-size", '1.5em']
            ],
            "${_body_ani}": [
                ["style", "top", '45.51%'],
                ["style", "left", '37.38%']
            ],
            "${_StageNoAnim_5}": [
                ["style", "top", '33.33%'],
                ["transform", "scaleY", '0.81289'],
                ["style", "left", '16.67%']
            ],
            "${_Group18}": [
                ["style", "top", '42.5%'],
                ["style", "left", '88.5%'],
                ["style", "overflow", 'hidden']
            ],
            "${_blank_sta5}": [
                ["style", "top", '-0.28%'],
                ["style", "height", '99.34%'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_leaves1}": [
                ["style", "height", '101.37%'],
                ["style", "top", '10.26%'],
                ["style", "left", '65.59%'],
                ["style", "width", '22.62%']
            ],
            "${_star_5}": [
                ["style", "top", '0.14%'],
                ["style", "height", '54.13%'],
                ["style", "left", '-0.26%'],
                ["style", "width", '100.46%']
            ],
            "${_wrong_ing}": [
                ["style", "display", 'none']
            ],
            "${_StageNoAnim_1}": [
                ["style", "top", '36.46%'],
                ["transform", "scaleY", '0.8'],
                ["style", "left", '17.36%']
            ],
            "${_bg1}": [
                ["style", "left", '7.14%'],
                ["style", "top", '5.66%']
            ],
            "${_Group14}": [
                ["style", "top", '-1.33%'],
                ["style", "height", '16%'],
                ["style", "left", '39%'],
                ["style", "width", '9%']
            ],
            "${_burger2}": [
                ["style", "top", '38.34%'],
                ["style", "height", '54.11%'],
                ["style", "left", '16.6%'],
                ["style", "width", '74.25%']
            ],
            "${_green_cap_area}": [
                ["style", "left", '5.5%'],
                ["style", "top", '25.33%']
            ],
            "${_stege12}": [
                ["style", "top", '6.64%'],
                ["style", "height", '80.1%'],
                ["style", "display", 'block'],
                ["style", "left", '-0.26%'],
                ["style", "width", '97.1%']
            ],
            "${_grill_area}": [
                ["style", "top", '70.33%'],
                ["style", "left", '10.5%'],
                ["style", "display", 'block']
            ],
            "${_cut_pizza}": [
                ["style", "display", 'block'],
                ["style", "left", '74.5%'],
                ["style", "top", '78%']
            ],
            "${_strar_3}": [
                ["style", "left", '31.75%'],
                ["style", "top", '42.32%']
            ],
            "${_i_3}": [
                ["style", "top", '15.87%'],
                ["style", "left", '48.7%'],
                ["style", "display", 'none']
            ],
            "${_burger4}": [
                ["style", "top", '35.94%'],
                ["style", "height", '54.11%'],
                ["style", "left", '13.49%'],
                ["style", "width", '77.98%']
            ],
            "${_Fist_screen}": [
                ["style", "display", 'none']
            ],
            "${_cust_8}": [
                ["style", "top", '45.17%'],
                ["transform", "scaleY", '1.94139'],
                ["style", "display", 'none'],
                ["style", "left", '116.63%'],
                ["transform", "scaleX", '2.15217']
            ],
            "${_blank_sta3}": [
                ["style", "top", '-0.28%'],
                ["style", "height", '99.34%'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_star11}": [
                ["style", "top", '-0.28%'],
                ["style", "display", 'none'],
                ["style", "height", '99.34%'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_star215}": [
                ["style", "top", '-0.28%'],
                ["style", "height", '99.34%'],
                ["style", "display", 'none'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_b_bur2}": [
                ["style", "top", '38.34%'],
                ["style", "height", '54.11%'],
                ["style", "left", '16.6%'],
                ["style", "width", '74.25%']
            ],
            "${_PP_12}": [
                ["style", "top", '12.1%'],
                ["style", "height", '70.65%'],
                ["style", "display", 'none'],
                ["style", "left", '16.68%'],
                ["style", "width", '61.84%']
            ],
            "${_I7}": [
                ["style", "top", '58.5%'],
                ["transform", "scaleY", '1.91489'],
                ["transform", "scaleX", '1.49533'],
                ["style", "left", '81%'],
                ["style", "display", 'none']
            ],
            "${_StageNoAnim_4}": [
                ["style", "top", '36.46%'],
                ["transform", "scaleY", '0.79156'],
                ["style", "left", '16.67%']
            ],
            "${_star17}": [
                ["style", "top", '-0.28%'],
                ["style", "display", 'none'],
                ["style", "height", '99.34%'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_kichen}": [
                ["style", "left", '0%'],
                ["style", "top", '0%']
            ],
            "${_star_7}": [
                ["style", "top", '0.14%'],
                ["style", "height", '54.13%'],
                ["style", "left", '-0.26%'],
                ["style", "width", '100.46%']
            ],
            "${_tuna_area}": [
                ["style", "top", '38.83%'],
                ["style", "left", '10.75%'],
                ["style", "height", '5.5%']
            ],
            "${_star19}": [
                ["style", "top", '-0.28%'],
                ["style", "display", 'none'],
                ["style", "height", '99.34%'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_cust_6}": [
                ["style", "top", '45.18%'],
                ["transform", "scaleY", '1.94139'],
                ["transform", "scaleX", '2.15217'],
                ["style", "left", '117.51%'],
                ["style", "display", 'none']
            ],
            "${_burger3}": [
                ["style", "top", '34.76%'],
                ["style", "height", '52%'],
                ["style", "left", '13.06%'],
                ["style", "width", '77.98%']
            ],
            "${_olive_aera}": [
                ["style", "left", '4.88%'],
                ["style", "top", '16%']
            ],
            "${_star34}": [
                ["style", "top", '-1.32%'],
                ["style", "display", 'none'],
                ["style", "height", '99.34%'],
                ["style", "left", '-0.65%'],
                ["style", "width", '99%']
            ],
            "${_burger8}": [
                ["style", "height", '51.29%'],
                ["style", "top", '35.62%'],
                ["style", "left", '10.96%'],
                ["style", "width", '77.98%']
            ],
            "${_no2}": [
                ["style", "top", '24.53%']
            ],
            "${_bg2}": [
                ["style", "left", '7.14%'],
                ["style", "top", '5.66%']
            ],
            "${_cust_1}": [
                ["style", "top", '48.84%'],
                ["transform", "scaleY", '2.0537'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '2.15066'],
                ["style", "left", '118.19%'],
                ["style", "display", 'none']
            ],
            "${_burger1}": [
                ["style", "top", '37.13%'],
                ["style", "height", '53.48%'],
                ["style", "left", '12.34%'],
                ["style", "width", '76.14%']
            ],
            "${_star312}": [
                ["style", "top", '-1.32%'],
                ["style", "height", '99.34%'],
                ["style", "display", 'none'],
                ["style", "left", '-0.65%'],
                ["style", "width", '99%']
            ],
            "${_blank_sta15}": [
                ["style", "height", '99.34%'],
                ["style", "top", '-0.28%'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_stege15}": [
                ["style", "top", '6.64%'],
                ["style", "height", '80.8%'],
                ["style", "display", 'block'],
                ["style", "left", '-0.26%'],
                ["style", "width", '92.41%']
            ],
            "${_burger13}": [
                ["style", "height", '51.29%'],
                ["style", "top", '35.62%'],
                ["style", "left", '10.96%'],
                ["style", "width", '77.98%']
            ],
            "${_PC_15}": [
                ["style", "top", '3.66%'],
                ["transform", "scaleY", '0.75342'],
                ["transform", "scaleX", '0.28163'],
                ["style", "display", 'none'],
                ["style", "height", '87.34%'],
                ["style", "left", '-67.17%'],
                ["style", "width", '233.29%']
            ],
            "${_PC_8}": [
                ["style", "top", '-9.76%'],
                ["transform", "scaleY", '-0.51261'],
                ["transform", "scaleX", '0.41991'],
                ["style", "display", 'none'],
                ["style", "height", '117.05%'],
                ["style", "left", '-20.22%'],
                ["style", "width", '133.84%']
            ],
            "${_hand_1}": [
                ["style", "top", '50.5%'],
                ["style", "left", '3.88%'],
                ["transform", "rotateZ", '180deg']
            ],
            "${_blank_sta13}": [
                ["style", "height", '99.34%'],
                ["style", "top", '-0.28%'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '100%'],
                ["style", "height", '100%'],
                ["style", "overflow", 'hidden']
            ],
            "${_I5}": [
                ["style", "top", '58.67%'],
                ["transform", "scaleY", '1.91489'],
                ["transform", "scaleX", '1.49533'],
                ["style", "left", '80.88%'],
                ["style", "display", 'none']
            ],
            "${_star115}": [
                ["style", "top", '-0.28%'],
                ["style", "height", '99.34%'],
                ["style", "display", 'none'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_b_bur1}": [
                ["style", "top", '37.13%'],
                ["style", "height", '53.48%'],
                ["style", "left", '12.34%'],
                ["style", "width", '76.14%']
            ],
            "${_GR_5}": [
                ["style", "top", '3.51%'],
                ["transform", "scaleY", '0.52577'],
                ["transform", "scaleX", '-0.33617'],
                ["style", "display", 'none'],
                ["style", "height", '95.1%'],
                ["style", "left", '-34.71%'],
                ["style", "width", '166.59%']
            ],
            "${_hand_4}": [
                ["style", "top", '74.17%'],
                ["style", "display", 'none'],
                ["style", "left", '85.5%'],
                ["transform", "rotateZ", '180deg']
            ],
            "${_b_bur12}": [
                ["style", "height", '51.29%'],
                ["style", "top", '35.62%'],
                ["style", "left", '10.95%'],
                ["style", "width", '77.98%']
            ],
            "${_blank_sta7}": [
                ["style", "top", '-0.28%'],
                ["style", "height", '99.34%'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_PC_6}": [
                ["style", "top", '14.63%'],
                ["style", "display", 'none'],
                ["style", "height", '64.5%'],
                ["style", "left", '17.64%'],
                ["style", "width", '54.4%']
            ],
            "${_StageNoAnim_7}": [
                ["style", "top", '36.71%'],
                ["transform", "scaleY", '0.78511'],
                ["style", "left", '18.06%']
            ],
            "${_hotgrll}": [
                ["style", "top", '70.82%'],
                ["transform", "scaleY", '1.36158'],
                ["style", "display", 'block'],
                ["style", "left", '8.88%'],
                ["transform", "scaleX", '1.05583']
            ],
            "${_leave2}": [
                ["style", "top", '20.51%'],
                ["style", "height", '97.44%'],
                ["style", "left", '37.28%'],
                ["style", "width", '24.38%']
            ],
            "${_PC_1}": [
                ["style", "top", '9.76%'],
                ["style", "display", 'none'],
                ["style", "height", '80.7%'],
                ["style", "opacity", '0.66666666666667'],
                ["style", "left", '8.67%'],
                ["style", "width", '79.2%']
            ],
            "${_stage_end}": [
                ["style", "display", 'none'],
                ["style", "left", '0.13%'],
                ["style", "top", '-0.33%']
            ],
            "${_burger9}": [
                ["style", "top", '35.62%'],
                ["style", "height", '51.29%'],
                ["style", "left", '10.96%'],
                ["style", "width", '77.98%']
            ],
            "${_leaves2_area}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "height", '5.5%'],
                ["style", "top", '30.67%'],
                ["style", "left", '30.63%'],
                ["style", "width", '8.38%']
            ],
            "${_border1}": [
                ["style", "left", '0%'],
                ["style", "top", '0%']
            ],
            "${_ing_4}": [
                ["style", "top", '14.29%'],
                ["style", "height", '29.37%'],
                ["style", "left", '63.19%'],
                ["style", "width", '9.51%']
            ],
            "${_GR_1}": [
                ["style", "top", '9.8%'],
                ["style", "display", 'none'],
                ["style", "height", '75.7%'],
                ["style", "opacity", '0.57264960168773'],
                ["style", "left", '11.11%'],
                ["style", "width", '73.71%']
            ],
            "${_b_bur14}": [
                ["style", "height", '51.29%'],
                ["style", "top", '35.62%'],
                ["style", "left", '10.95%'],
                ["style", "width", '77.98%']
            ],
            "${_GR_4}": [
                ["style", "top", '-15.83%'],
                ["transform", "scaleY", '0.47916'],
                ["transform", "scaleX", '-0.48937'],
                ["style", "display", 'none'],
                ["style", "height", '125.22%'],
                ["style", "left", '1.33%'],
                ["style", "width", '102.18%']
            ],
            "${_glass3}": [
                ["style", "height", '100.98%'],
                ["style", "top", '-0.25%'],
                ["style", "left", '-0.2%'],
                ["style", "width", '55.29%']
            ],
            "${_PP_6}": [
                ["style", "top", '14.63%'],
                ["style", "height", '64.5%'],
                ["style", "display", 'none'],
                ["style", "left", '17.64%'],
                ["style", "width", '54.4%']
            ],
            "${_no12}": [
                ["style", "top", '18.87%'],
                ["style", "left", '3.57%']
            ],
            "${_pause}": [
                ["style", "height", '8.33%'],
                ["style", "top", '91.33%'],
                ["style", "left", '93.3%'],
                ["style", "width", '6.25%']
            ],
            "${_leaves1_area}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "height", '4.5%'],
                ["style", "top", '31%'],
                ["style", "left", '40.88%'],
                ["style", "width", '7.5%']
            ],
            "${_StageNoAnim_10}": [
                ["transform", "scaleX", '0.7435'],
                ["style", "top", '36.46%'],
                ["transform", "scaleY", '0.72111'],
                ["style", "left", '16.67%']
            ],
            "${_star27}": [
                ["style", "top", '-0.28%'],
                ["style", "display", 'none'],
                ["style", "height", '99.34%'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_i_8}": [
                ["style", "top", '47.62%'],
                ["style", "left", '46.09%'],
                ["style", "display", 'none']
            ],
            "${_I8}": [
                ["style", "top", '58.5%'],
                ["transform", "scaleY", '1.91489'],
                ["transform", "scaleX", '1.49533'],
                ["style", "left", '81%'],
                ["style", "display", 'none']
            ],
            "${_GR_10}": [
                ["style", "border-top-left-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.40987'],
                ["style", "left", '-13.3%'],
                ["style", "width", '121.99%'],
                ["style", "top", '-6.86%'],
                ["style", "border-bottom-left-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '0.54054'],
                ["style", "height", '111%'],
                ["style", "border-top-right-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "display", 'none']
            ],
            "${_ing_8}": [
                ["style", "top", '48.41%'],
                ["style", "height", '24.7%'],
                ["style", "left", '46.09%'],
                ["style", "width", '9.51%']
            ],
            "${_i_6}": [
                ["style", "top", '50%'],
                ["style", "left", '14.78%'],
                ["style", "display", 'none']
            ],
            "${_star_13}": [
                ["style", "height", '54.13%'],
                ["style", "top", '0.14%'],
                ["style", "left", '-0.26%'],
                ["style", "width", '100.46%']
            ],
            "${_stege3}": [
                ["style", "top", '6.67%'],
                ["style", "display", 'block'],
                ["style", "height", '85.42%'],
                ["style", "left", '4.28%'],
                ["style", "width", '95.84%']
            ],
            "${_red_cap}": [
                ["style", "top", '33.67%'],
                ["style", "height", '11.1%'],
                ["style", "left", '-2.5%'],
                ["style", "width", '10.1%']
            ],
            "${_cut_area}": [
                ["style", "top", '57.17%'],
                ["transform", "skewY", '0deg'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '9.2%'],
                ["style", "display", 'block'],
                ["style", "left", '79%'],
                ["style", "width", '13%']
            ],
            "${_b_bur9}": [
                ["style", "top", '35.62%'],
                ["style", "height", '51.29%'],
                ["style", "left", '10.95%'],
                ["style", "width", '77.98%']
            ],
            "${_star23}": [
                ["style", "top", '-0.28%'],
                ["style", "display", 'none'],
                ["style", "height", '99.34%'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_dustbin_area}": [
                ["style", "top", '54.67%'],
                ["style", "display", 'block'],
                ["style", "height", '14.9%'],
                ["style", "left", '55.63%'],
                ["style", "width", '9%']
            ],
            "${_game}": [
                ["style", "top", '72.17%'],
                ["style", "left", '43.38%'],
                ["style", "display", 'none']
            ],
            "${_cust_G}": [
                ["style", "display", 'block'],
                ["style", "top", '6.5%']
            ],
            "${_blank_star1}": [
                ["style", "height", '99.34%'],
                ["style", "top", '-0.28%'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_platform_1}": [
                ["style", "-webkit-transform-origin", [33.42,54.38], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [33.42,54.38],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [33.42,54.38],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [33.42,54.38],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [33.42,54.38],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "display", 'block'],
                ["transform", "scaleY", '0.67039'],
                ["transform", "scaleX", '1.27844'],
                ["style", "height", '31.7%'],
                ["style", "top", '74.18%'],
                ["style", "left", '-1.68%'],
                ["style", "width", '118.74%']
            ],
            "${_i_9}": [
                ["style", "top", '50.79%'],
                ["style", "left", '64.64%'],
                ["style", "display", 'none']
            ],
            "${_I11}": [
                ["style", "top", '58.5%'],
                ["transform", "scaleY", '1.91489'],
                ["transform", "scaleX", '1.49533'],
                ["style", "left", '81%'],
                ["style", "display", 'none']
            ],
            "${_ing_7}": [
                ["style", "top", '50.79%'],
                ["style", "height", '29.37%'],
                ["style", "left", '26.96%'],
                ["style", "width", '9.51%']
            ],
            "${_tuna1}": [
                ["style", "height", '5.33%'],
                ["style", "top", '38.83%'],
                ["style", "left", '11%'],
                ["style", "width", '4.75%']
            ],
            "${_PP_2}": [
                ["style", "top", '7.32%'],
                ["transform", "scaleX", '1.15928'],
                ["style", "height", '80%'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '13.33%'],
                ["style", "width", '69.01%']
            ],
            "${_Screen_G}": [
                ["style", "top", '9.5%'],
                ["style", "height", '21%'],
                ["style", "display", 'block'],
                ["style", "left", '10.5%'],
                ["style", "width", '43.1%']
            ],
            "${_dustbin_ani}": [
                ["style", "top", '53.21%'],
                ["transform", "scaleY", '0.80476'],
                ["transform", "scaleX", '0.57658'],
                ["style", "left", '51.13%'],
                ["style", "display", 'none']
            ],
            "${_blank_sta8}": [
                ["style", "height", '99.34%'],
                ["style", "top", '-0.28%'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_Group3}": [
                ["style", "height", '16%'],
                ["style", "top", '55%'],
                ["style", "left", '71.25%'],
                ["style", "width", '9%']
            ],
            "${_star28}": [
                ["style", "top", '-0.28%'],
                ["style", "height", '99.34%'],
                ["style", "display", 'none'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_glass}": [
                ["style", "left", '57%'],
                ["style", "top", '33.83%']
            ],
            "${_ing_2}": [
                ["style", "height", '29.37%'],
                ["style", "top", '14.29%'],
                ["style", "left", '34.78%'],
                ["style", "width", '9.51%']
            ],
            "${_PC_10}": [
                ["style", "border-top-left-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.40987'],
                ["style", "left", '-13.3%'],
                ["style", "width", '121.99%'],
                ["style", "top", '-7.32%'],
                ["style", "border-bottom-left-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '0.54054'],
                ["style", "height", '111%'],
                ["style", "border-top-right-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "display", 'none']
            ],
            "${_cust_3}": [
                ["style", "top", '43.27%'],
                ["transform", "scaleY", '1.76649'],
                ["transform", "scaleX", '2.0625'],
                ["style", "left", '115.88%'],
                ["style", "display", 'none']
            ],
            "${_blank_sta2}": [
                ["style", "top", '-0.28%'],
                ["style", "height", '99.34%'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_stege10}": [
                ["style", "top", '6.64%'],
                ["style", "height", '84.8%'],
                ["style", "display", 'block'],
                ["style", "left", '-0.26%'],
                ["style", "width", '96.7%']
            ],
            "${_star_8}": [
                ["style", "height", '54.13%'],
                ["style", "top", '0.14%'],
                ["style", "left", '-0.26%'],
                ["style", "width", '100.46%']
            ],
            "${_GR_0}": [
                ["style", "top", '12.2%'],
                ["style", "display", 'none'],
                ["style", "height", '81.71%'],
                ["style", "left", '8.68%'],
                ["style", "width", '80%']
            ],
            "${_star37}": [
                ["style", "top", '-1.32%'],
                ["style", "display", 'none'],
                ["style", "height", '99.34%'],
                ["style", "left", '-0.65%'],
                ["style", "width", '99%']
            ],
            "${_strar_1}": [
                ["style", "top", '42.33%'],
                ["style", "left", '31.75%']
            ],
            "${_star_9}": [
                ["style", "top", '0.14%'],
                ["style", "height", '54.13%'],
                ["style", "left", '-0.26%'],
                ["style", "width", '100.46%']
            ],
            "${_b_bur3}": [
                ["style", "top", '34.76%'],
                ["style", "height", '52%'],
                ["style", "left", '13.06%'],
                ["style", "width", '77.98%']
            ],
            "${_rawshrimp_area}": [
                ["style", "left", '16.13%'],
                ["style", "top", '37.83%']
            ],
            "${_StageNoAnim_11}": [
                ["transform", "scaleX", '0.84425'],
                ["style", "top", '38.54%'],
                ["transform", "scaleY", '0.78089'],
                ["style", "left", '19.44%']
            ],
            "${_ham2}": [
                ["style", "top", '20.51%'],
                ["style", "height", '82.25%'],
                ["style", "left", '13.62%'],
                ["style", "width", '20.27%']
            ],
            "${_PC_4}": [
                ["style", "top", '-15.83%'],
                ["transform", "scaleY", '0.47916'],
                ["transform", "scaleX", '-0.48937'],
                ["style", "display", 'none'],
                ["style", "height", '125.22%'],
                ["style", "left", '1.33%'],
                ["style", "width", '102.18%']
            ],
            "${_stege11}": [
                ["style", "top", '6.64%'],
                ["style", "height", '77.5%'],
                ["style", "display", 'block'],
                ["style", "left", '-0.26%'],
                ["style", "width", '103.81%']
            ],
            "${_star_6}": [
                ["style", "height", '54.13%'],
                ["style", "top", '0.14%'],
                ["style", "left", '-0.26%'],
                ["style", "width", '100.46%']
            ],
            "${_Group5}": [
                ["style", "height", '16%'],
                ["style", "top", '20%'],
                ["style", "left", '82.5%'],
                ["style", "width", '9%']
            ],
            "${_cust_2}": [
                ["style", "top", '43.79%'],
                ["transform", "scaleY", '1.7989'],
                ["transform", "scaleX", '2.43443'],
                ["style", "left", '117.91%'],
                ["style", "display", 'none']
            ],
            "${_star39}": [
                ["style", "top", '-1.32%'],
                ["style", "display", 'none'],
                ["style", "height", '99.34%'],
                ["style", "left", '-0.65%'],
                ["style", "width", '99%']
            ],
            "${_Group11}": [
                ["style", "top", '25.67%'],
                ["style", "height", '16%'],
                ["style", "left", '6.38%'],
                ["style", "width", '9%']
            ],
            "${_Group10}": [
                ["style", "top", '38.67%'],
                ["style", "height", '16%'],
                ["style", "left", '16.5%'],
                ["style", "width", '9%']
            ],
            "${_pizzas}": [
                ["style", "height", '13.89%'],
                ["style", "top", '59.5%'],
                ["style", "left", '-0.5%'],
                ["style", "width", '13.77%']
            ],
            "${_Group4}": [
                ["style", "height", '16%'],
                ["style", "top", '38.83%'],
                ["style", "left", '80.38%'],
                ["style", "width", '9%']
            ],
            "${_star_15}": [
                ["style", "height", '54.13%'],
                ["style", "top", '0.14%'],
                ["style", "left", '-0.26%'],
                ["style", "width", '100.46%']
            ],
            "${_stick1}": [
                ["style", "height", '68.43%'],
                ["style", "top", '19.12%'],
                ["style", "left", '48.06%'],
                ["style", "width", '51.94%']
            ],
            "${_burger7}": [
                ["style", "top", '35.62%'],
                ["style", "height", '51.29%'],
                ["style", "left", '10.96%'],
                ["style", "width", '77.98%']
            ],
            "${_blank_sta14}": [
                ["style", "height", '99.34%'],
                ["style", "top", '-0.28%'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_StageNoAnim_9}": [
                ["style", "top", '35.42%'],
                ["transform", "scaleY", '0.81911'],
                ["style", "left", '16.67%']
            ],
            "${_hand_3}": [
                ["style", "top", '55.5%'],
                ["style", "display", 'none'],
                ["style", "left", '59.88%'],
                ["transform", "rotateZ", '302deg']
            ],
            "${_PC_9}": [
                ["style", "top", '12.2%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'none'],
                ["style", "height", '65.85%'],
                ["style", "left", '20.67%'],
                ["style", "width", '50%']
            ],
            "${_star18}": [
                ["style", "top", '-0.28%'],
                ["style", "height", '99.34%'],
                ["style", "display", 'none'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_home}": [
                ["style", "top", '56.5%'],
                ["style", "left", '35.13%']
            ],
            "${_ing_9}": [
                ["style", "top", '50%'],
                ["style", "height", '29.37%'],
                ["style", "left", '62.03%'],
                ["style", "width", '9.51%']
            ],
            "${_GR_13}": [
                ["style", "top", '19.2%'],
                ["style", "height", '72.03%'],
                ["style", "display", 'none'],
                ["style", "left", '21.04%'],
                ["style", "width", '61.04%']
            ],
            "${_star25}": [
                ["style", "top", '-0.28%'],
                ["style", "display", 'none'],
                ["style", "height", '99.34%'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_Group13}": [
                ["style", "top", '2%'],
                ["style", "height", '16%'],
                ["style", "left", '22.13%'],
                ["style", "width", '9%']
            ],
            "${_i_4}": [
                ["style", "top", '15.08%'],
                ["style", "left", '62.61%'],
                ["style", "display", 'none']
            ],
            "${_No_strar}": [
                ["style", "left", '31.75%'],
                ["style", "top", '42.32%']
            ],
            "${_chopperboard}": [
                ["style", "height", '13.3%'],
                ["style", "top", '55.67%'],
                ["style", "left", '77.13%'],
                ["style", "width", '17.11%']
            ],
            "${_strar_2}": [
                ["style", "top", '42.33%'],
                ["style", "left", '31.75%']
            ],
            "${_GR_14}": [
                ["style", "top", '19.3%'],
                ["style", "height", '60.11%'],
                ["style", "display", 'none'],
                ["style", "left", '22.68%'],
                ["style", "width", '51.41%']
            ],
            "${_cheese_G}": [
                ["style", "top", '29.17%']
            ],
            "${_GR_7}": [
                ["transform", "rotateZ", '-55deg'],
                ["transform", "scaleX", '0.32955'],
                ["style", "left", '-24.31%'],
                ["style", "width", '152.33%'],
                ["style", "top", '0.26%'],
                ["transform", "scaleY", '0.62797'],
                ["style", "height", '95.55%'],
                ["transform", "skewY", '42deg'],
                ["style", "display", 'none']
            ],
            "${_star_14}": [
                ["style", "height", '54.13%'],
                ["style", "top", '0.14%'],
                ["style", "left", '-0.26%'],
                ["style", "width", '100.46%']
            ],
            "${_star211}": [
                ["style", "top", '-0.28%'],
                ["style", "height", '99.34%'],
                ["style", "display", 'none'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_glass2}": [
                ["style", "height", '100.98%'],
                ["style", "top", '-0.25%'],
                ["style", "left", '27.38%'],
                ["style", "width", '55.29%']
            ],
            "${_cust_X2}": [
                ["style", "top", '5.17%'],
                ["transform", "scaleY", '0.73412'],
                ["style", "display", 'none'],
                ["style", "left", '75.13%'],
                ["transform", "scaleX", '0.4987']
            ],
            "${_star311}": [
                ["style", "top", '-1.32%'],
                ["style", "height", '99.34%'],
                ["style", "display", 'none'],
                ["style", "left", '-0.65%'],
                ["style", "width", '99%']
            ],
            "${_border3}": [
                ["style", "left", '0%'],
                ["style", "top", '0%']
            ],
            "${_b_bur10}": [
                ["style", "height", '51.29%'],
                ["style", "top", '35.62%'],
                ["style", "left", '10.95%'],
                ["style", "width", '77.98%']
            ],
            "${_TotalEar_ani}": [
                ["style", "top", '89.5%'],
                ["style", "left", '-2.75%'],
                ["transform", "scaleX", '0.60741']
            ],
            "${_b_bur11}": [
                ["style", "height", '51.29%'],
                ["style", "top", '35.62%'],
                ["style", "left", '10.95%'],
                ["style", "width", '77.98%']
            ],
            "${_no3}": [
                ["style", "left", '0%'],
                ["style", "top", '20.75%']
            ],
            "${_StageNoAnim_8}": [
                ["style", "top", '37.52%'],
                ["transform", "scaleY", '0.80222'],
                ["style", "left", '16.67%']
            ],
            "${_stick_area}": [
                ["style", "top", '42.3%'],
                ["style", "left", '39.75%'],
                ["style", "height", '5.33%']
            ],
            "${_mush_G}": [
                ["style", "top", '40.17%']
            ],
            "${_star_2}": [
                ["style", "top", '-0.23%'],
                ["style", "height", '57.06%'],
                ["style", "left", '4.96%'],
                ["style", "width", '95.22%']
            ],
            "${_Earning_ani}": [
                ["style", "top", '10.65%'],
                ["transform", "scaleY", '0.6819'],
                ["style", "display", 'none'],
                ["style", "left", '71.44%'],
                ["transform", "scaleX", '0.68211']
            ],
            "${_i_10}": [
                ["style", "top", '50%'],
                ["style", "left", '77.97%'],
                ["style", "display", 'none']
            ],
            "${_hint_sym}": [
                ["style", "top", '78.22%'],
                ["transform", "scaleY", '0.53033'],
                ["transform", "scaleX", '0.53053'],
                ["style", "left", '-2.78%'],
                ["style", "display", 'none']
            ],
            "${_PC_12}": [
                ["style", "top", '12.1%'],
                ["style", "display", 'none'],
                ["style", "height", '70.65%'],
                ["style", "left", '16.68%'],
                ["style", "width", '61.84%']
            ],
            "${_stege6}": [
                ["style", "top", '12.5%'],
                ["style", "height", '78%'],
                ["style", "display", 'block'],
                ["style", "left", '6.94%'],
                ["style", "width", '93.7%']
            ],
            "${_cust_X3}": [
                ["style", "top", '10%'],
                ["transform", "scaleY", '0.73412'],
                ["style", "display", 'none'],
                ["style", "left", '88.25%'],
                ["transform", "scaleX", '0.4987']
            ],
            "${_Group1}": [
                ["style", "top", '84.17%'],
                ["style", "height", '16.05%'],
                ["transform", "scaleX", '0.64285'],
                ["style", "left", '71.38%'],
                ["style", "width", '14.01%']
            ],
            "${_pizzacuttingplate}": [
                ["style", "top", '75.33%'],
                ["transform", "rotateZ", '8deg'],
                ["style", "height", '21.23%'],
                ["style", "display", 'block'],
                ["style", "left", '74.13%'],
                ["style", "width", '20.5%']
            ],
            "${_greenbar}": [
                ["style", "height", '87.96%'],
                ["style", "top", '6.88%'],
                ["style", "left", '16.88%'],
                ["style", "width", '67.88%']
            ],
            "${_star113}": [
                ["style", "top", '-0.28%'],
                ["style", "height", '99.34%'],
                ["style", "display", 'none'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_knife}": [
                ["style", "top", '55%'],
                ["style", "display", 'block'],
                ["style", "height", '7.2%'],
                ["style", "left", '75.38%'],
                ["style", "width", '11.3%']
            ],
            "${_star35}": [
                ["style", "top", '-1.32%'],
                ["style", "display", 'none'],
                ["style", "height", '99.34%'],
                ["style", "left", '-0.65%'],
                ["style", "width", '99%']
            ],
            "${_StageNoAnim_6}": [
                ["style", "top", '35.26%'],
                ["style", "left", '16.67%'],
                ["transform", "scaleY", '0.85333']
            ],
            "${_PP_14}": [
                ["style", "height", '52.38%'],
                ["style", "display", 'none'],
                ["style", "left", '19.83%'],
                ["style", "width", '61.21%']
            ],
            "${_cust_7}": [
                ["style", "top", '45.04%'],
                ["transform", "scaleY", '1.94139'],
                ["transform", "scaleX", '2.15217'],
                ["style", "left", '116.46%'],
                ["style", "display", 'none']
            ],
            "${_stand}": [
                ["style", "top", '48.33%'],
                ["style", "left", '53%'],
                ["style", "height", '7.9%']
            ],
            "${_pro1}": [
                ["style", "top", '5.66%'],
                ["style", "left", '10.71%']
            ],
            "${_GR_15}": [
                ["style", "top", '3.66%'],
                ["transform", "scaleY", '0.75342'],
                ["transform", "scaleX", '0.28163'],
                ["style", "display", 'none'],
                ["style", "height", '87.34%'],
                ["style", "left", '-67.17%'],
                ["style", "width", '233.29%']
            ],
            "${_pause_gup}": [
                ["style", "display", 'none']
            ],
            "${_IngSeatNo}": [
                ["transform", "scaleY", '0.74767'],
                ["style", "top", '67.46%']
            ],
            "${_plate}": [
                ["style", "height", '12.64%'],
                ["style", "top", '82%'],
                ["style", "left", '40.5%'],
                ["style", "width", '14.91%']
            ],
            "${_Group2}": [
                ["style", "top", '69.67%'],
                ["style", "height", '16%'],
                ["style", "-webkit-transform-origin", [58.23,58.06], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [58.23,58.06],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [58.23,58.06],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [58.23,58.06],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [58.23,58.06],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '64%'],
                ["style", "width", '9%']
            ],
            "${_PP_0}": [
                ["style", "top", '12.2%'],
                ["style", "height", '81.71%'],
                ["style", "display", 'none'],
                ["style", "left", '8.68%'],
                ["style", "width", '80%']
            ],
            "${_platform2}": [
                ["style", "top", '68.18%'],
                ["transform", "scaleY", '1.37545'],
                ["transform", "scaleX", '0.60743'],
                ["style", "left", '-10.37%'],
                ["style", "display", 'block']
            ],
            "${_play2}": [
                ["style", "left", '53.13%'],
                ["style", "top", '57%']
            ],
            "${_bg3}": [
                ["style", "left", '7.14%'],
                ["style", "top", '5.66%']
            ],
            "${_glass1}": [
                ["style", "height", '100.98%'],
                ["style", "top", '-0.25%'],
                ["style", "left", '10.34%'],
                ["style", "width", '55.29%']
            ],
            "${_hand_5}": [
                ["style", "display", 'none'],
                ["style", "top", '73.17%'],
                ["style", "left", '45%'],
                ["transform", "rotateZ", '180deg']
            ],
            "${_i_7}": [
                ["style", "top", '49.21%'],
                ["style", "left", '29.57%'],
                ["style", "display", 'none']
            ],
            "${_GR_9}": [
                ["style", "top", '12.2%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'none'],
                ["style", "height", '65.85%'],
                ["style", "left", '20.67%'],
                ["style", "width", '50%']
            ],
            "${_star314}": [
                ["style", "top", '-1.32%'],
                ["style", "height", '99.34%'],
                ["style", "display", 'none'],
                ["style", "left", '-0.65%'],
                ["style", "width", '99%']
            ],
            "${_burger10}": [
                ["style", "height", '51.29%'],
                ["style", "top", '35.62%'],
                ["style", "left", '10.96%'],
                ["style", "width", '77.98%']
            ],
            "${_PC_2}": [
                ["style", "top", '7.32%'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '1.15928'],
                ["style", "height", '80%'],
                ["style", "opacity", '1'],
                ["style", "left", '13.33%'],
                ["style", "width", '69.01%']
            ],
            "${_PP_5}": [
                ["style", "top", '1.22%'],
                ["transform", "scaleY", '0.52577'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '-0.33617'],
                ["style", "height", '94.73%'],
                ["style", "left", '-42.34%'],
                ["style", "width", '180.57%']
            ],
            "${_star24}": [
                ["style", "top", '-0.28%'],
                ["style", "display", 'none'],
                ["style", "height", '99.34%'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_PP_4}": [
                ["style", "top", '23.59%'],
                ["style", "display", 'none'],
                ["style", "height", '60%'],
                ["transform", "scaleX", '-0.96774'],
                ["style", "left", '18%'],
                ["style", "width", '51.67%']
            ],
            "${_star22}": [
                ["style", "top", '-0.28%'],
                ["style", "display", 'none'],
                ["style", "height", '99.34%'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_Group12}": [
                ["style", "top", '8.33%'],
                ["style", "height", '16%'],
                ["style", "left", '8.75%'],
                ["style", "width", '9%']
            ],
            "${_paused_page}": [
                ["style", "left", '0%'],
                ["style", "top", '0%']
            ],
            "${_cutter1}": [
                ["style", "top", '65.5%'],
                ["transform", "rotateZ", '65deg'],
                ["style", "height", '10.69%'],
                ["style", "left", '91.75%'],
                ["style", "width", '9.9%']
            ],
            "${_PP_8}": [
                ["style", "top", '-9.76%'],
                ["transform", "scaleY", '-0.51261'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '0.41991'],
                ["style", "height", '117.05%'],
                ["style", "left", '-20.22%'],
                ["style", "width", '133.84%']
            ],
            "${_burger11}": [
                ["style", "height", '51.29%'],
                ["style", "top", '35.62%'],
                ["style", "left", '10.96%'],
                ["style", "width", '77.98%']
            ],
            "${_PC_0}": [
                ["style", "top", '12.2%'],
                ["style", "display", 'none'],
                ["style", "height", '81.71%'],
                ["style", "left", '8.68%'],
                ["style", "width", '80%']
            ],
            "${_StageTmTxt}": [
                ["transform", "scaleX", '1.21739'],
                ["style", "left", '53.3%'],
                ["style", "top", '11%']
            ],
            "${_olive}": [
                ["style", "height", '6.08%'],
                ["style", "top", '16.17%'],
                ["style", "left", '4.13%'],
                ["style", "width", '5.63%']
            ],
            "${_star13}": [
                ["style", "top", '-0.28%'],
                ["style", "display", 'none'],
                ["style", "height", '99.34%'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_newpro}": [
                ["style", "top", '23.17%'],
                ["style", "display", 'none'],
                ["style", "left", '2.5%'],
                ["style", "overflow", 'hidden']
            ],
            "${_b_bur6}": [
                ["style", "height", '51.29%'],
                ["style", "top", '35.62%'],
                ["style", "left", '10.95%'],
                ["style", "width", '77.98%']
            ],
            "${_Scend_screen}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1']
            ],
            "${_I10}": [
                ["style", "top", '58.5%'],
                ["transform", "scaleY", '1.91489'],
                ["transform", "scaleX", '1.49533'],
                ["style", "left", '81.13%'],
                ["style", "display", 'none']
            ],
            "${_cut_pizzaOut}": [
                ["style", "top", '82.5%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '10.83%'],
                ["style", "display", 'none'],
                ["style", "left", '76.88%'],
                ["style", "width", '15.3%']
            ],
            "${_stege1}": [
                ["style", "height", '97.39%'],
                ["style", "top", '2.8%'],
                ["style", "left", '6.12%'],
                ["style", "width", '94.17%']
            ],
            "${_GR_11}": [
                ["style", "top", '-12.49%'],
                ["transform", "scaleY", '0.52173'],
                ["transform", "scaleX", '0.32758'],
                ["style", "display", 'none'],
                ["style", "height", '115%'],
                ["style", "left", '-27.33%'],
                ["style", "width", '152.64%']
            ],
            "${_star313}": [
                ["style", "top", '-1.32%'],
                ["style", "height", '99.34%'],
                ["style", "display", 'none'],
                ["style", "left", '-0.65%'],
                ["style", "width", '99%']
            ],
            "${_ing_1}": [
                ["style", "top", '17.46%'],
                ["style", "height", '22.9%'],
                ["style", "left", '11.3%'],
                ["style", "width", '21.01%']
            ],
            "${_juicer1}": [
                ["style", "height", '21%'],
                ["style", "top", '24.17%'],
                ["style", "left", '52.87%'],
                ["style", "width", '10.48%']
            ],
            "${_PP_11}": [
                ["style", "top", '-2.67%'],
                ["style", "display", 'none'],
                ["transform", "scaleY", '0.52173'],
                ["transform", "rotateZ", '-29deg'],
                ["transform", "scaleX", '0.32758'],
                ["style", "height", '98.9%'],
                ["style", "left", '-15.85%'],
                ["style", "width", '117.84%']
            ],
            "${_StageNoAnim_3}": [
                ["style", "top", '35.2%'],
                ["style", "left", '19.44%'],
                ["transform", "scaleY", '0.83622']
            ],
            "${_star114}": [
                ["style", "top", '-0.28%'],
                ["style", "height", '99.34%'],
                ["style", "display", 'none'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_border2}": [
                ["style", "left", '0%'],
                ["style", "top", '0%']
            ],
            "${_star_12}": [
                ["style", "height", '54.13%'],
                ["style", "top", '0.14%'],
                ["style", "left", '-0.26%'],
                ["style", "width", '100.46%']
            ],
            "${_GC}": [
                ["style", "height", '7.1%'],
                ["style", "top", '26.33%'],
                ["style", "left", '4.75%'],
                ["style", "width", '5.9%']
            ],
            "${_star16}": [
                ["style", "top", '-0.28%'],
                ["style", "height", '99.34%'],
                ["style", "display", 'none'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_Group16}": [
                ["style", "top", '32%'],
                ["style", "left", '67.25%'],
                ["style", "overflow", 'hidden']
            ],
            "${_star112}": [
                ["style", "top", '-0.28%'],
                ["style", "height", '99.34%'],
                ["style", "display", 'none'],
                ["style", "left", '-0.06%'],
                ["style", "width", '99.64%']
            ],
            "${_kichen22}": [
                ["style", "top", '39.83%'],
                ["transform", "rotateZ", '21deg'],
                ["style", "height", '11.3%'],
                ["style", "display", 'none'],
                ["style", "left", '60.75%'],
                ["style", "width", '47.7%']
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
                { id: "eid5569", tween: [ "style", "${_star11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid210", tween: [ "style", "${_PP_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid207", tween: [ "style", "${_PP_8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid209", tween: [ "style", "${_PP_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1895", tween: [ "style", "${_stege15}", "height", '80.8%', { fromValue: '80.8%'}], position: 0, duration: 0 },
                { id: "eid1641", tween: [ "style", "${_StageNoAnim_5}", "top", '33.33%', { fromValue: '33.33%'}], position: 0, duration: 0 },
                { id: "eid6302", tween: [ "style", "${_dustbin_area}", "left", '55.63%', { fromValue: '55.63%'}], position: 0, duration: 0 },
                { id: "eid1437", tween: [ "style", "${_PC_13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid199", tween: [ "style", "${_PP_13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1359", tween: [ "style", "${_GR_7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1425", tween: [ "style", "${_stege2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid5891", tween: [ "style", "${_cut_pizza}", "top", '78%', { fromValue: '78%'}], position: 0, duration: 0 },
                { id: "eid1874", tween: [ "style", "${_stege6}", "left", '6.94%', { fromValue: '6.94%'}], position: 0, duration: 0 },
                { id: "eid601", tween: [ "style", "${_cust_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid6092", tween: [ "style", "${_knife}", "left", '75.38%', { fromValue: '75.38%'}], position: 0, duration: 0 },
                { id: "eid5538", tween: [ "style", "${_cust_6}", "top", '45.18%', { fromValue: '45.18%'}], position: 0, duration: 0 },
                { id: "eid1133", tween: [ "style", "${_game}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid898", tween: [ "style", "${_cust_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2323", tween: [ "style", "${_hint_sym}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1681", tween: [ "style", "${_StageNoAnim_11}", "top", '38.54%', { fromValue: '38.54%'}], position: 0, duration: 0 },
                { id: "eid1845", tween: [ "style", "${_stege15}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6086", tween: [ "style", "${_I6}", "left", '81%', { fromValue: '81%'}], position: 0, duration: 0 },
                { id: "eid6085", tween: [ "style", "${_I6}", "top", '58.5%', { fromValue: '58.5%'}], position: 0, duration: 0 },
                { id: "eid2402", tween: [ "style", "${_i_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid6034", tween: [ "style", "${_hand_5}", "left", '45%', { fromValue: '45%'}], position: 0, duration: 0 },
                { id: "eid211", tween: [ "style", "${_PP_9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid6035", tween: [ "style", "${_hand_5}", "top", '73.17%', { fromValue: '73.17%'}], position: 0, duration: 0 },
                { id: "eid204", tween: [ "style", "${_PP_15}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1446", tween: [ "style", "${_PC_10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5000", tween: [ "style", "${_cust_6}", "left", '117.51%', { fromValue: '117.51%'}], position: 0, duration: 0 },
                { id: "eid1892", tween: [ "style", "${_stege14}", "height", '77.1%', { fromValue: '77.1%'}], position: 0, duration: 0 },
                { id: "eid1890", tween: [ "style", "${_stege13}", "height", '77.1%', { fromValue: '77.1%'}], position: 0, duration: 0 },
                { id: "eid1843", tween: [ "style", "${_stege8}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid946", tween: [ "style", "${_Earning_ani}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid6228", tween: [ "style", "${_platform_1}", "width", '118.74%', { fromValue: '118.74%'}], position: 0, duration: 0 },
                { id: "eid6089", tween: [ "style", "${_I10}", "top", '58.5%', { fromValue: '58.5%'}], position: 0, duration: 0 },
                { id: "eid1363", tween: [ "style", "${_GR_8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2518", tween: [ "style", "${_PP_11}", "left", '-15.85%', { fromValue: '-15.85%'}], position: 0, duration: 0 },
                { id: "eid1448", tween: [ "style", "${_PC_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1878", tween: [ "style", "${_stege8}", "width", '97.31%', { fromValue: '97.31%'}], position: 0, duration: 0 },
                { id: "eid6096", tween: [ "style", "${_I9}", "left", '81%', { fromValue: '81%'}], position: 0, duration: 0 },
                { id: "eid646", tween: [ "style", "${_hand_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1453", tween: [ "style", "${_PC_0}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid212", tween: [ "style", "${_PP_6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2034", tween: [ "transform", "${_hand_3}", "rotateZ", '302deg', { fromValue: '302deg'}], position: 0, duration: 0 },
                { id: "eid1703", tween: [ "transform", "${_StageNoAnim_14}", "scaleY", '0.73178', { fromValue: '0.73178'}], position: 0, duration: 0 },
                { id: "eid6287", tween: [ "style", "${_hand_2}", "left", '86.38%', { fromValue: '86.38%'}], position: 0, duration: 0 },
                { id: "eid1449", tween: [ "style", "${_PC_9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1847", tween: [ "style", "${_stege13}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1628", tween: [ "style", "${_StageNoAnim_2}", "top", '39.58%', { fromValue: '39.58%'}], position: 0, duration: 0 },
                { id: "eid6087", tween: [ "style", "${_I5}", "top", '58.67%', { fromValue: '58.67%'}], position: 0, duration: 0 },
                { id: "eid1654", tween: [ "style", "${_StageNoAnim_8}", "left", '16.67%', { fromValue: '16.67%'}], position: 0, duration: 0 },
                { id: "eid1369", tween: [ "style", "${_GR_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1440", tween: [ "style", "${_PC_14}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1883", tween: [ "style", "${_stege10}", "height", '84.8%', { fromValue: '84.8%'}], position: 0, duration: 0 },
                { id: "eid2517", tween: [ "style", "${_PP_11}", "height", '98.9%', { fromValue: '98.9%'}], position: 0, duration: 0 },
                { id: "eid2399", tween: [ "style", "${_i_6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1640", tween: [ "style", "${_StageNoAnim_5}", "left", '16.67%', { fromValue: '16.67%'}], position: 0, duration: 0 },
                { id: "eid258", tween: [ "style", "${_PP_0}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid6306", tween: [ "style", "${_dustbin_ani}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1697", tween: [ "style", "${_StageNoAnim_13}", "left", '15.28%', { fromValue: '15.28%'}], position: 0, duration: 0 },
                { id: "eid5570", tween: [ "style", "${_star31}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1563", tween: [ "style", "${_stege4}", "width", '86%', { fromValue: '86%'}], position: 0, duration: 0 },
                { id: "eid2016", tween: [ "style", "${_red_ani}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2017", tween: [ "style", "${_cut_pizza}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid438", tween: [ "style", "${_cut_area}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1554", tween: [ "style", "${_stege3}", "width", '95.84%', { fromValue: '95.84%'}], position: 0, duration: 0 },
                { id: "eid5522", tween: [ "style", "${_cust_1}", "top", '48.84%', { fromValue: '48.84%'}], position: 0, duration: 0 },
                { id: "eid6024", tween: [ "style", "${_hand_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid6078", tween: [ "style", "${_IngSeatNo}", "top", '67.46%', { fromValue: '67.46%'}], position: 0, duration: 0 },
                { id: "eid1653", tween: [ "style", "${_StageNoAnim_8}", "top", '37.52%', { fromValue: '37.52%'}], position: 0, duration: 0 },
                { id: "eid6058", tween: [ "style", "${_time_bar}", "left", '5.38%', { fromValue: '5.38%'}], position: 0, duration: 0 },
                { id: "eid205", tween: [ "style", "${_PP_5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1875", tween: [ "style", "${_stege6}", "top", '12.5%', { fromValue: '12.5%'}], position: 0, duration: 0 },
                { id: "eid5889", tween: [ "style", "${_R_chilli}", "left", '59.88%', { fromValue: '59.88%'}], position: 0, duration: 0 },
                { id: "eid1365", tween: [ "style", "${_GR_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1667", tween: [ "style", "${_StageNoAnim_10}", "top", '36.46%', { fromValue: '36.46%'}], position: 0, duration: 0 },
                { id: "eid1671", tween: [ "style", "${_StageNoAnim_10}", "left", '16.67%', { fromValue: '16.67%'}], position: 0, duration: 0 },
                { id: "eid5979", tween: [ "style", "${_cut_pizzaOut}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1450", tween: [ "style", "${_PC_6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1877", tween: [ "style", "${_stege7}", "height", '78.6%', { fromValue: '78.6%'}], position: 0, duration: 0 },
                { id: "eid1881", tween: [ "style", "${_stege9}", "height", '80%', { fromValue: '80%'}], position: 0, duration: 0 },
                { id: "eid2132", tween: [ "style", "${_i_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid6055", tween: [ "style", "${_hand_6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid6094", tween: [ "style", "${_I8}", "left", '81%', { fromValue: '81%'}], position: 0, duration: 0 },
                { id: "eid1882", tween: [ "style", "${_stege10}", "width", '96.7%', { fromValue: '96.7%'}], position: 0, duration: 0 },
                { id: "eid2328", tween: [ "style", "${_GR_5}", "top", '3.51%', { fromValue: '3.51%'}], position: 0, duration: 0 },
                { id: "eid1134", tween: [ "style", "${_StagenoTxt}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1553", tween: [ "style", "${_stege3}", "height", '85.42%', { fromValue: '85.42%'}], position: 0, duration: 0 },
                { id: "eid1698", tween: [ "style", "${_StageNoAnim_13}", "top", '38.54%', { fromValue: '38.54%'}], position: 0, duration: 0 },
                { id: "eid1647", tween: [ "style", "${_StageNoAnim_6}", "left", '16.67%', { fromValue: '16.67%'}], position: 0, duration: 0 },
                { id: "eid1889", tween: [ "style", "${_stege13}", "width", '101.2%', { fromValue: '101.2%'}], position: 0, duration: 0 },
                { id: "eid1645", tween: [ "style", "${_StageNoAnim_6}", "top", '35.26%', { fromValue: '35.26%'}], position: 0, duration: 0 },
                { id: "eid1662", tween: [ "style", "${_StageNoAnim_9}", "left", '16.67%', { fromValue: '16.67%'}], position: 0, duration: 0 },
                { id: "eid1552", tween: [ "style", "${_stege4}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1770", tween: [ "style", "${_GR_10}", "top", '-6.86%', { fromValue: '-6.86%'}], position: 0, duration: 0 },
                { id: "eid1848", tween: [ "style", "${_stege12}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid5885", tween: [ "style", "${_wrong_ing}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1879", tween: [ "style", "${_stege8}", "height", '78.3%', { fromValue: '78.3%'}], position: 0, duration: 0 },
                { id: "eid1276", tween: [ "style", "${_Fist_screen}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1871", tween: [ "style", "${_stege5}", "top", '12.5%', { fromValue: '12.5%'}], position: 0, duration: 0 },
                { id: "eid6303", tween: [ "style", "${_dustbin_area}", "top", '54.67%', { fromValue: '54.67%'}], position: 0, duration: 0 },
                { id: "eid6229", tween: [ "style", "${_kichen22}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1669", tween: [ "transform", "${_StageNoAnim_10}", "scaleX", '0.7435', { fromValue: '0.7435'}], position: 0, duration: 0 },
                { id: "eid5978", tween: [ "style", "${_pizzacuttingplate}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1371", tween: [ "style", "${_GR_0}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1424", tween: [ "color", "${_StagenoTxt}", "color", 'rgba(199,15,194,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(199,15,194,1.00)'}], position: 0, duration: 0 },
                { id: "eid2513", tween: [ "transform", "${_PP_11}", "rotateZ", '-29deg', { fromValue: '-29deg'}], position: 0, duration: 0 },
                { id: "eid6076", tween: [ "transform", "${_IngSeatNo}", "scaleY", '0.74767', { fromValue: '0.74767'}], position: 0, duration: 0 },
                { id: "eid206", tween: [ "style", "${_PP_7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid6305", tween: [ "style", "${_hand_3}", "left", '59.88%', { fromValue: '59.88%'}], position: 0, duration: 0 },
                { id: "eid1888", tween: [ "style", "${_stege12}", "height", '80.1%', { fromValue: '80.1%'}], position: 0, duration: 0 },
                { id: "eid5470", tween: [ "style", "${_I7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1841", tween: [ "style", "${_stege6}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1837", tween: [ "style", "${_GR_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5820", tween: [ "color", "${_StageEarnings}", "color", 'rgba(239,232,15,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(239,232,15,1.00)'}], position: 0, duration: 0 },
                { id: "eid1839", tween: [ "style", "${_PC_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1691", tween: [ "style", "${_StageNoAnim_12}", "left", '16.67%', { fromValue: '16.67%'}], position: 0, duration: 0 },
                { id: "eid2492", tween: [ "style", "${_GR_13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1659", tween: [ "transform", "${_StageNoAnim_9}", "scaleY", '0.81911', { fromValue: '0.81911'}], position: 0, duration: 0 },
                { id: "eid2227", tween: [ "style", "${_newpro}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid6057", tween: [ "style", "${_hand_6}", "top", '64.33%', { fromValue: '64.33%'}], position: 0, duration: 0 },
                { id: "eid1873", tween: [ "style", "${_stege6}", "height", '78%', { fromValue: '78%'}], position: 0, duration: 0 },
                { id: "eid2519", tween: [ "style", "${_PP_11}", "top", '-2.67%', { fromValue: '-2.67%'}], position: 0, duration: 0 },
                { id: "eid5888", tween: [ "style", "${_G_chilli}", "left", '66%', { fromValue: '66%'}], position: 0, duration: 0 },
                { id: "eid6059", tween: [ "style", "${_StageTmTxt}", "top", '11%', { fromValue: '11%'}], position: 0, duration: 0 },
                { id: "eid1562", tween: [ "style", "${_stege4}", "height", '93.16%', { fromValue: '93.16%'}], position: 0, duration: 0 },
                { id: "eid1636", tween: [ "style", "${_StageNoAnim_4}", "left", '16.67%', { fromValue: '16.67%'}], position: 0, duration: 0 },
                { id: "eid2522", tween: [ "style", "${_PP_5}", "top", '1.22%', { fromValue: '1.22%'}], position: 0, duration: 0 },
                { id: "eid1850", tween: [ "style", "${_stege10}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2520", tween: [ "style", "${_PP_5}", "height", '94.73%', { fromValue: '94.73%'}], position: 0, duration: 0 },
                { id: "eid1849", tween: [ "style", "${_stege11}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1364", tween: [ "style", "${_GR_10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1361", tween: [ "style", "${_GR_15}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1690", tween: [ "style", "${_StageNoAnim_12}", "top", '38.54%', { fromValue: '38.54%'}], position: 0, duration: 0 },
                { id: "eid6030", tween: [ "style", "${_PP_14}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1627", tween: [ "style", "${_StageNoAnim_2}", "left", '4.17%', { fromValue: '4.17%'}], position: 0, duration: 0 },
                { id: "eid1885", tween: [ "style", "${_stege11}", "height", '77.5%', { fromValue: '77.5%'}], position: 0, duration: 0 },
                { id: "eid1362", tween: [ "style", "${_GR_5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid6304", tween: [ "style", "${_hand_3}", "top", '55.5%', { fromValue: '55.5%'}], position: 0, duration: 0 },
                { id: "eid1637", tween: [ "style", "${_StageNoAnim_4}", "top", '36.46%', { fromValue: '36.46%'}], position: 0, duration: 0 },
                { id: "eid2004", tween: [ "style", "${_grill_area}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid257", tween: [ "style", "${_I6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5487", tween: [ "style", "${_I9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1233", tween: [ "style", "${_StageEarnings}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1447", tween: [ "style", "${_PC_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5472", tween: [ "style", "${_I10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2491", tween: [ "style", "${_GR_12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1551", tween: [ "style", "${_stege3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1867", tween: [ "style", "${_stege5}", "height", '70.27%', { fromValue: '70.27%'}], position: 0, duration: 0 },
                { id: "eid1358", tween: [ "style", "${_GR_14}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid213", tween: [ "style", "${_PP_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1893", tween: [ "style", "${_stege14}", "top", '10.42%', { fromValue: '10.42%'}], position: 0, duration: 0 },
                { id: "eid1886", tween: [ "style", "${_stege12}", "width", '97.1%', { fromValue: '97.1%'}], position: 0, duration: 0 },
                { id: "eid1872", tween: [ "style", "${_stege6}", "width", '93.7%', { fromValue: '93.7%'}], position: 0, duration: 0 },
                { id: "eid1357", tween: [ "style", "${_PizzaOnGrillGrp}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2400", tween: [ "style", "${_i_5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1648", tween: [ "style", "${_StageNoAnim_7}", "left", '18.06%', { fromValue: '18.06%'}], position: 0, duration: 0 },
                { id: "eid1834", tween: [ "style", "${_PizzaForCut}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1367", tween: [ "style", "${_GR_9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid696", tween: [ "style", "${_cust_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1443", tween: [ "style", "${_PC_15}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2397", tween: [ "style", "${_i_8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid602", tween: [ "style", "${_cust_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2325", tween: [ "style", "${_GR_5}", "width", '166.59%', { fromValue: '166.59%'}], position: 0, duration: 0 },
                { id: "eid6006", tween: [ "style", "${_StageEarnings}", "font-size", '1.5em', { fromValue: '1.5em'}], position: 0, duration: 0 },
                { id: "eid2326", tween: [ "style", "${_GR_5}", "height", '95.1%', { fromValue: '95.1%'}], position: 0, duration: 0 },
                { id: "eid1444", tween: [ "style", "${_PC_5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5479", tween: [ "style", "${_I11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1869", tween: [ "style", "${_stege5}", "left", '8.33%', { fromValue: '8.33%'}], position: 0, duration: 0 },
                { id: "eid640", tween: [ "style", "${_cust_X}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid6090", tween: [ "style", "${_I10}", "left", '81.13%', { fromValue: '81.13%'}], position: 0, duration: 0 },
                { id: "eid1005", tween: [ "style", "${_stage_end}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid4147", tween: [ "style", "${_PizzaOnGrillGrp}", "left", '14.5%', { fromValue: '14.5%'}], position: 0, duration: 0 },
                { id: "eid5068", tween: [ "style", "${_cust_8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5445", tween: [ "style", "${_I5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1870", tween: [ "style", "${_stege5}", "width", '86.91%', { fromValue: '86.91%'}], position: 0, duration: 0 },
                { id: "eid6095", tween: [ "style", "${_I9}", "top", '58.5%', { fromValue: '58.5%'}], position: 0, duration: 0 },
                { id: "eid1894", tween: [ "style", "${_stege15}", "width", '92.41%', { fromValue: '92.41%'}], position: 0, duration: 0 },
                { id: "eid1677", tween: [ "transform", "${_StageNoAnim_11}", "scaleX", '0.84425', { fromValue: '0.84425'}], position: 0, duration: 0 },
                { id: "eid1623", tween: [ "transform", "${_StageNoAnim_2}", "scaleX", '0.65344', { fromValue: '0.65344'}], position: 0, duration: 0 },
                { id: "eid1774", tween: [ "style", "${_GR_7}", "left", '-24.31%', { fromValue: '-24.31%'}], position: 0, duration: 0 },
                { id: "eid6084", tween: [ "style", "${_I11}", "left", '81%', { fromValue: '81%'}], position: 0, duration: 0 },
                { id: "eid2395", tween: [ "style", "${_i_10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1650", tween: [ "style", "${_StageNoAnim_7}", "top", '36.71%', { fromValue: '36.71%'}], position: 0, duration: 0 },
                { id: "eid1707", tween: [ "transform", "${_StageNoAnim_14}", "scaleX", '0.72744', { fromValue: '0.72744'}], position: 0, duration: 0 },
                { id: "eid5471", tween: [ "style", "${_I8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1530", tween: [ "style", "${_pizza_cut}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2324", tween: [ "style", "${_GR_5}", "left", '-34.71%', { fromValue: '-34.71%'}], position: 0, duration: 0 },
                { id: "eid1709", tween: [ "style", "${_StageNoAnim_14}", "left", '16.67%', { fromValue: '16.67%'}], position: 0, duration: 0 },
                { id: "eid1546", tween: [ "style", "${_pizzabox}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid6056", tween: [ "style", "${_hand_6}", "left", '18%', { fromValue: '18%'}], position: 0, duration: 0 },
                { id: "eid4996", tween: [ "transform", "${_cust_6}", "scaleX", '2.15217', { fromValue: '2.15217'}], position: 0, duration: 0 },
                { id: "eid1366", tween: [ "style", "${_GR_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1884", tween: [ "style", "${_stege11}", "width", '103.81%', { fromValue: '103.81%'}], position: 0, duration: 0 },
                { id: "eid790", tween: [ "style", "${_cust_5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid6227", tween: [ "style", "${_platform_1}", "left", '-1.68%', { fromValue: '-1.68%'}], position: 0, duration: 0 },
                { id: "eid1630", tween: [ "style", "${_StageNoAnim_3}", "left", '19.44%', { fromValue: '19.44%'}], position: 0, duration: 0 },
                { id: "eid6099", tween: [ "style", "${_I7}", "top", '58.5%', { fromValue: '58.5%'}], position: 0, duration: 0 },
                { id: "eid1632", tween: [ "style", "${_StageNoAnim_3}", "top", '35.2%', { fromValue: '35.2%'}], position: 0, duration: 0 },
                { id: "eid200", tween: [ "style", "${_PP_12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2401", tween: [ "style", "${_i_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1688", tween: [ "transform", "${_StageNoAnim_12}", "scaleX", '0.6895', { fromValue: '0.6895'}], position: 0, duration: 0 },
                { id: "eid1652", tween: [ "transform", "${_StageNoAnim_8}", "scaleY", '0.80222', { fromValue: '0.80222'}], position: 0, duration: 0 },
                { id: "eid1442", tween: [ "style", "${_PC_11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid6007", tween: [ "style", "${_StagenoTxt}", "font-size", '150%', { fromValue: '150%'}], position: 0, duration: 0 },
                { id: "eid6075", tween: [ "style", "${_StageTmTxt}", "left", '53.3%', { fromValue: '53.3%'}], position: 0, duration: 0 },
                { id: "eid1692", tween: [ "transform", "${_StageNoAnim_13}", "scaleX", '0.85282', { fromValue: '0.85282'}], position: 0, duration: 0 },
                { id: "eid6028", tween: [ "style", "${_hand_4}", "left", '85.5%', { fromValue: '85.5%'}], position: 0, duration: 0 },
                { id: "eid2403", tween: [ "style", "${_i_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3", tween: [ "style", "${_platform2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid595", tween: [ "style", "${_hotgrll}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1247", tween: [ "style", "${_Scend_screen}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1644", tween: [ "transform", "${_StageNoAnim_6}", "scaleY", '0.85333', { fromValue: '0.85333'}], position: 0, duration: 0 },
                { id: "eid1638", tween: [ "transform", "${_StageNoAnim_5}", "scaleY", '0.81289', { fromValue: '0.81289'}], position: 0, duration: 0 },
                { id: "eid5814", tween: [ "style", "${_PP_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid6074", tween: [ "transform", "${_StageTmTxt}", "scaleX", '1.21739', { fromValue: '1.21739'}], position: 0, duration: 0 },
                { id: "eid2322", tween: [ "style", "${_pause_gup}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1876", tween: [ "style", "${_stege7}", "width", '92.1%', { fromValue: '92.1%'}], position: 0, duration: 0 },
                { id: "eid5892", tween: [ "style", "${_pizza_cut}", "left", '76.63%', { fromValue: '76.63%'}], position: 0, duration: 0 },
                { id: "eid1705", tween: [ "style", "${_StageNoAnim_14}", "top", '37.5%', { fromValue: '37.5%'}], position: 0, duration: 0 },
                { id: "eid1661", tween: [ "style", "${_StageNoAnim_9}", "top", '35.42%', { fromValue: '35.42%'}], position: 0, duration: 0 },
                { id: "eid1445", tween: [ "style", "${_PC_8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5518", tween: [ "style", "${_cust_6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid208", tween: [ "style", "${_PP_10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1002", tween: [ "style", "${_hand_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1679", tween: [ "style", "${_StageNoAnim_11}", "left", '19.44%', { fromValue: '19.44%'}], position: 0, duration: 0 },
                { id: "eid6100", tween: [ "style", "${_I7}", "left", '81%', { fromValue: '81%'}], position: 0, duration: 0 },
                { id: "eid618", tween: [ "style", "${_Screen_G}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1438", tween: [ "style", "${_PC_12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1544", tween: [ "style", "${_cust_X2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1846", tween: [ "style", "${_stege14}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1674", tween: [ "transform", "${_StageNoAnim_11}", "scaleY", '0.78089', { fromValue: '0.78089'}], position: 0, duration: 0 },
                { id: "eid6029", tween: [ "style", "${_hand_4}", "top", '74.17%', { fromValue: '74.17%'}], position: 0, duration: 0 },
                { id: "eid1634", tween: [ "transform", "${_StageNoAnim_4}", "scaleY", '0.79156', { fromValue: '0.79156'}], position: 0, duration: 0 },
                { id: "eid1451", tween: [ "style", "${_PC_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2541", tween: [ "style", "${_ing_2}", "left", '34.78%', { fromValue: '34.78%'}], position: 0, duration: 0 },
                { id: "eid1840", tween: [ "style", "${_stege5}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6093", tween: [ "style", "${_I8}", "top", '58.5%', { fromValue: '58.5%'}], position: 0, duration: 0 },
                { id: "eid1248", tween: [ "style", "${_stage_scr}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1441", tween: [ "style", "${_PC_7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid597", tween: [ "style", "${_knife}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1360", tween: [ "style", "${_GR_11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2037", tween: [ "style", "${_dustbin_area}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1844", tween: [ "style", "${_stege9}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1631", tween: [ "transform", "${_StageNoAnim_3}", "scaleY", '0.83622', { fromValue: '0.83622'}], position: 0, duration: 0 },
                { id: "eid6091", tween: [ "style", "${_knife}", "top", '55%', { fromValue: '55%'}], position: 0, duration: 0 },
                { id: "eid5517", tween: [ "style", "${_cust_7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2396", tween: [ "style", "${_i_9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1", tween: [ "style", "${_platform_1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1665", tween: [ "transform", "${_StageNoAnim_10}", "scaleY", '0.72111', { fromValue: '0.72111'}], position: 0, duration: 0 },
                { id: "eid1694", tween: [ "transform", "${_StageNoAnim_13}", "scaleY", '0.68267', { fromValue: '0.68267'}], position: 0, duration: 0 },
                { id: "eid1625", tween: [ "transform", "${_StageNoAnim_2}", "scaleY", '0.8', { fromValue: '0.8'}], position: 0, duration: 0 },
                { id: "eid1649", tween: [ "transform", "${_StageNoAnim_7}", "scaleY", '0.78511', { fromValue: '0.78511'}], position: 0, duration: 0 },
                { id: "eid5512", tween: [ "transform", "${_cust_6}", "scaleY", '1.94139', { fromValue: '1.94139'}], position: 0, duration: 0 },
                { id: "eid1368", tween: [ "style", "${_GR_6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1891", tween: [ "style", "${_stege14}", "width", '100.6%', { fromValue: '100.6%'}], position: 0, duration: 0 },
                { id: "eid1684", tween: [ "transform", "${_StageNoAnim_12}", "scaleY", '0.71044', { fromValue: '0.71044'}], position: 0, duration: 0 },
                { id: "eid6031", tween: [ "style", "${_hand_5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid6088", tween: [ "style", "${_I5}", "left", '80.88%', { fromValue: '80.88%'}], position: 0, duration: 0 },
                { id: "eid203", tween: [ "style", "${_PP_11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1842", tween: [ "style", "${_stege7}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6083", tween: [ "style", "${_I11}", "top", '58.5%', { fromValue: '58.5%'}], position: 0, duration: 0 },
                { id: "eid2398", tween: [ "style", "${_i_7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2076", tween: [ "style", "${_time_bar}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2516", tween: [ "style", "${_PP_11}", "width", '117.84%', { fromValue: '117.84%'}], position: 0, duration: 0 },
                { id: "eid1880", tween: [ "style", "${_stege9}", "width", '95%', { fromValue: '95%'}], position: 0, duration: 0 },
                { id: "eid1543", tween: [ "style", "${_cust_X3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid6288", tween: [ "style", "${_hand_2}", "top", '46.17%', { fromValue: '46.17%'}], position: 0, duration: 0 }            ]
        }
    }
},
"I6": {
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
                    rect: ['48.5%', '6.4%', '39.4%', '80.8%', 'auto', 'auto'],
                    transform: [[0, 0], ['-90']],
                    id: 'green_cap2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing/GC.png', '0px', '0px']
                },
                {
                    rect: ['54.2%', '10.6%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cuting',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/GC_forCut.png', '0px', '0px']
                },
                {
                    rect: ['0%', '0.4%', '100.2%', '99.6%', 'auto', 'auto'],
                    id: 'knife2',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/ing/knife.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/GC_forCut.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/GC_forCut.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy3',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/GC_forCut.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy4',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/GC_forCut.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy5',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/GC_forCut.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy6',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/GC_forCut.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_green_cutingCopy5}": [
                ["style", "top", '10.64%'],
                ["style", "height", '34%'],
                ["style", "display", 'none'],
                ["style", "left", '28.97%'],
                ["style", "width", '15%']
            ],
            "${_green_cap2}": [
                ["style", "top", '4.85%'],
                ["transform", "rotateZ", '-90deg'],
                ["style", "height", '40%'],
                ["style", "display", 'none'],
                ["style", "left", '22.05%'],
                ["style", "width", '13%']
            ],
            "${_green_cutingCopy2}": [
                ["style", "top", '8.51%'],
                ["style", "height", '34%'],
                ["style", "display", 'none'],
                ["style", "left", '28.97%'],
                ["style", "width", '15%']
            ],
            "${_green_cutingCopy3}": [
                ["style", "top", '8.51%'],
                ["style", "height", '34%'],
                ["style", "display", 'none'],
                ["style", "left", '25.23%'],
                ["style", "width", '15%']
            ],
            "${_knife2}": [
                ["style", "-webkit-transform-origin", [40.95,28.26], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "display", 'block'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '48.97%'],
                ["style", "top", '0%'],
                ["style", "left", '-11.21%'],
                ["style", "width", '56.08%']
            ],
            "${symbolSelector}": [
                ["style", "height", '7.83%'],
                ["style", "width", '13.38%']
            ],
            "${_green_cutingCopy6}": [
                ["style", "top", '8.51%'],
                ["style", "height", '34%'],
                ["style", "display", 'none'],
                ["style", "left", '25.23%'],
                ["style", "width", '15%']
            ],
            "${_green_cutingCopy}": [
                ["style", "top", '4.26%'],
                ["style", "display", 'none'],
                ["style", "height", '34%'],
                ["style", "left", '21.5%'],
                ["style", "width", '15%']
            ],
            "${_green_cutingCopy4}": [
                ["style", "top", '6.38%'],
                ["style", "height", '34%'],
                ["style", "display", 'none'],
                ["style", "left", '28.97%'],
                ["style", "width", '15%']
            ],
            "${_green_cuting}": [
                ["style", "top", '6.38%'],
                ["style", "display", 'none'],
                ["style", "height", '35%'],
                ["style", "left", '21.5%'],
                ["style", "width", '15%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3858,
            autoPlay: true,
            timeline: [
                { id: "eid5389", tween: [ "style", "${_green_cutingCopy6}", "top", '31.92%', { fromValue: '8.51%'}], position: 3195, duration: 454 },
                { id: "eid30", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 250, duration: 250 },
                { id: "eid31", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 500, duration: 250 },
                { id: "eid32", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 855, duration: 250 },
                { id: "eid33", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 1105, duration: 250 },
                { id: "eid34", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 1500, duration: 250 },
                { id: "eid35", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 1750, duration: 250 },
                { id: "eid36", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 2105, duration: 250 },
                { id: "eid37", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 2355, duration: 250 },
                { id: "eid38", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 2750, duration: 250 },
                { id: "eid39", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 3000, duration: 250 },
                { id: "eid40", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 3358, duration: 250 },
                { id: "eid41", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 3608, duration: 250 },
                { id: "eid2409", tween: [ "style", "${_green_cutingCopy6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid87", tween: [ "style", "${_green_cutingCopy6}", "display", 'block', { fromValue: 'none'}], position: 3195, duration: 0 },
                { id: "eid5387", tween: [ "style", "${_green_cutingCopy5}", "top", '27.66%', { fromValue: '10.64%'}], position: 2550, duration: 450 },
                { id: "eid52", tween: [ "style", "${_green_cutingCopy}", "left", '32.71%', { fromValue: '21.5%'}], position: 500, duration: 355 },
                { id: "eid5346", tween: [ "style", "${_knife2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6011", tween: [ "style", "${_knife2}", "display", 'none', { fromValue: 'block'}], position: 3858, duration: 0 },
                { id: "eid46", tween: [ "style", "${_green_cutingCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid47", tween: [ "style", "${_green_cutingCopy}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid5415", tween: [ "style", "${_green_cutingCopy}", "top", '10.64%', { fromValue: '4.26%'}], position: 500, duration: 355 },
                { id: "eid83", tween: [ "style", "${_green_cutingCopy5}", "left", '44.86%', { fromValue: '28.97%'}], position: 2550, duration: 450 },
                { id: "eid90", tween: [ "style", "${_green_cutingCopy6}", "left", '29.91%', { fromValue: '25.23%'}], position: 3195, duration: 454 },
                { id: "eid2406", tween: [ "style", "${_green_cutingCopy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid59", tween: [ "style", "${_green_cutingCopy3}", "display", 'block', { fromValue: 'none'}], position: 1355, duration: 0 },
                { id: "eid78", tween: [ "style", "${_green_cutingCopy4}", "left", '36.45%', { fromValue: '28.97%'}], position: 2000, duration: 315 },
                { id: "eid57", tween: [ "style", "${_green_cutingCopy2}", "left", '37.38%', { fromValue: '28.97%'}], position: 1000, duration: 355 },
                { id: "eid5383", tween: [ "style", "${_green_cutingCopy3}", "top", '23.4%', { fromValue: '8.51%'}], position: 1500, duration: 286 },
                { id: "eid58", tween: [ "style", "${_green_cutingCopy2}", "top", '14.89%', { fromValue: '8.51%'}], position: 1000, duration: 355 },
                { id: "eid2408", tween: [ "style", "${_green_cutingCopy5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid80", tween: [ "style", "${_green_cutingCopy5}", "display", 'block', { fromValue: 'none'}], position: 2550, duration: 0 },
                { id: "eid2407", tween: [ "style", "${_green_cutingCopy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid75", tween: [ "style", "${_green_cutingCopy4}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid5385", tween: [ "style", "${_green_cutingCopy4}", "top", '25.53%', { fromValue: '6.38%'}], position: 2000, duration: 315 },
                { id: "eid2405", tween: [ "style", "${_green_cutingCopy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid54", tween: [ "style", "${_green_cutingCopy2}", "display", 'block', { fromValue: 'none'}], position: 855, duration: 0 },
                { id: "eid65", tween: [ "style", "${_green_cuting}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid66", tween: [ "style", "${_green_cuting}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid64", tween: [ "style", "${_green_cap2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid67", tween: [ "style", "${_green_cap2}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid6013", tween: [ "style", "${_green_cap2}", "display", 'none', { fromValue: 'block'}], position: 3858, duration: 0 },
                { id: "eid70", tween: [ "style", "${_green_cutingCopy3}", "left", '40.19%', { fromValue: '25.23%'}], position: 1500, duration: 286 }            ]
        }
    }
},
"red_cut": {
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
                    transform: [[0, 0], ['-90']],
                    rect: ['48.5%', '6.4%', '39.4%', '80.8%', 'auto', 'auto'],
                    display: 'none',
                    id: 'green_cap2',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/ing/RC.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['54.2%', '10.6%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cuting',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/RC_forCut.png', '0px', '0px']
                },
                {
                    id: 'knife2',
                    type: 'image',
                    rect: ['0%', '0.4%', '100.2%', '99.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ing/knife.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/RC_forCut.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy2',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/RC_forCut.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy3',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/RC_forCut.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy4',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/RC_forCut.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy5',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/RC_forCut.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy6',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/RC_forCut.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy7',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/RC_forCut.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy8',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/RC_forCut.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_green_cutingCopy5}": [
                ["style", "top", '12.81%'],
                ["style", "display", 'none'],
                ["style", "height", '66%'],
                ["style", "left", '61.68%'],
                ["style", "width", '31.78%']
            ],
            "${_green_cap2}": [
                ["style", "top", '6.43%'],
                ["style", "height", '80.81%'],
                ["transform", "scaleY", '1.42516'],
                ["transform", "rotateZ", '-90deg'],
                ["transform", "scaleX", '1.1503'],
                ["style", "display", 'none'],
                ["style", "left", '48.52%'],
                ["style", "width", '39.41%']
            ],
            "${_green_cutingCopy2}": [
                ["style", "top", '12.81%'],
                ["style", "display", 'none'],
                ["style", "height", '66%'],
                ["style", "left", '61.68%'],
                ["style", "width", '31.78%']
            ],
            "${_green_cutingCopy3}": [
                ["style", "top", '14.89%'],
                ["style", "display", 'none'],
                ["style", "height", '66%'],
                ["style", "left", '54.21%'],
                ["style", "width", '31.78%']
            ],
            "${_knife2}": [
                ["style", "top", '0.04%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '98.94%'],
                ["style", "-webkit-transform-origin", [40.95,28.26], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '0%'],
                ["style", "width", '100.04%']
            ],
            "${_green_cutingCopy6}": [
                ["style", "top", '12.81%'],
                ["style", "display", 'none'],
                ["style", "height", '66%'],
                ["style", "left", '61.68%'],
                ["style", "width", '31.78%']
            ],
            "${_green_cutingCopy7}": [
                ["style", "top", '12.81%'],
                ["style", "display", 'none'],
                ["style", "height", '66%'],
                ["style", "left", '61.68%'],
                ["style", "width", '31.78%']
            ],
            "${symbolSelector}": [
                ["style", "height", '7.83%'],
                ["style", "width", '13.38%']
            ],
            "${_green_cutingCopy}": [
                ["style", "top", '12.81%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'none'],
                ["style", "height", '66%'],
                ["style", "left", '61.68%'],
                ["style", "width", '31.78%']
            ],
            "${_green_cutingCopy4}": [
                ["style", "top", '12.81%'],
                ["style", "display", 'none'],
                ["style", "height", '66%'],
                ["style", "left", '61.68%'],
                ["style", "width", '31.78%']
            ],
            "${_green_cuting}": [
                ["style", "top", '10.64%'],
                ["style", "height", '66%'],
                ["style", "display", 'none'],
                ["style", "left", '54.21%'],
                ["style", "width", '31.78%']
            ],
            "${_green_cutingCopy8}": [
                ["style", "top", '12.81%'],
                ["style", "display", 'none'],
                ["style", "height", '66%'],
                ["style", "left", '61.68%'],
                ["style", "width", '31.78%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5500,
            autoPlay: true,
            timeline: [
                { id: "eid91", tween: [ "style", "${_green_cutingCopy6}", "top", '31.91%', { fromValue: '12.81%'}], position: 3195, duration: 454 },
                { id: "eid30", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 250, duration: 250 },
                { id: "eid31", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 500, duration: 250 },
                { id: "eid32", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 855, duration: 250 },
                { id: "eid33", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 1105, duration: 250 },
                { id: "eid34", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 1500, duration: 250 },
                { id: "eid35", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 1750, duration: 250 },
                { id: "eid36", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 2105, duration: 250 },
                { id: "eid37", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 2355, duration: 250 },
                { id: "eid38", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 2750, duration: 250 },
                { id: "eid39", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 3000, duration: 250 },
                { id: "eid40", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 3358, duration: 250 },
                { id: "eid41", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 3608, duration: 250 },
                { id: "eid42", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 3963, duration: 250 },
                { id: "eid43", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 4213, duration: 250 },
                { id: "eid44", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 4553, duration: 250 },
                { id: "eid45", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 4803, duration: 250 },
                { id: "eid2416", tween: [ "style", "${_green_cutingCopy6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid87", tween: [ "style", "${_green_cutingCopy6}", "display", 'block', { fromValue: 'none'}], position: 3195, duration: 0 },
                { id: "eid95", tween: [ "style", "${_green_cutingCopy7}", "left", '81.31%', { fromValue: '61.68%'}], position: 3858, duration: 463 },
                { id: "eid84", tween: [ "style", "${_green_cutingCopy5}", "top", '19.15%', { fromValue: '12.81%'}], position: 2550, duration: 450 },
                { id: "eid52", tween: [ "style", "${_green_cutingCopy}", "left", '71.96%', { fromValue: '61.68%'}], position: 500, duration: 355 },
                { id: "eid64", tween: [ "style", "${_green_cap2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid67", tween: [ "style", "${_green_cap2}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid46", tween: [ "style", "${_green_cutingCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid47", tween: [ "style", "${_green_cutingCopy}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid53", tween: [ "style", "${_green_cutingCopy}", "top", '14.89%', { fromValue: '12.81%'}], position: 500, duration: 355 },
                { id: "eid83", tween: [ "style", "${_green_cutingCopy5}", "left", '84.11%', { fromValue: '61.68%'}], position: 2550, duration: 450 },
                { id: "eid90", tween: [ "style", "${_green_cutingCopy6}", "left", '90.65%', { fromValue: '61.68%'}], position: 3195, duration: 454 },
                { id: "eid100", tween: [ "style", "${_green_cutingCopy8}", "left", '90.65%', { fromValue: '61.68%'}], position: 4553, duration: 390 },
                { id: "eid2417", tween: [ "style", "${_green_cutingCopy7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid92", tween: [ "style", "${_green_cutingCopy7}", "display", 'block', { fromValue: 'none'}], position: 3858, duration: 0 },
                { id: "eid57", tween: [ "style", "${_green_cutingCopy2}", "left", '81.31%', { fromValue: '61.68%'}], position: 1000, duration: 355 },
                { id: "eid2413", tween: [ "style", "${_green_cutingCopy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid59", tween: [ "style", "${_green_cutingCopy3}", "display", 'block', { fromValue: 'none'}], position: 1355, duration: 0 },
                { id: "eid74", tween: [ "style", "${_green_cutingCopy3}", "top", '17.02%', { fromValue: '14.89%'}], position: 1500, duration: 286 },
                { id: "eid106", tween: [ "transform", "${_green_cap2}", "scaleX", '1.1503', { fromValue: '1.1503'}], position: 250, duration: 0 },
                { id: "eid2412", tween: [ "style", "${_green_cutingCopy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid54", tween: [ "style", "${_green_cutingCopy2}", "display", 'block', { fromValue: 'none'}], position: 855, duration: 0 },
                { id: "eid78", tween: [ "style", "${_green_cutingCopy4}", "left", '97.2%', { fromValue: '61.68%'}], position: 2000, duration: 315 },
                { id: "eid70", tween: [ "style", "${_green_cutingCopy3}", "left", '90.65%', { fromValue: '54.21%'}], position: 1500, duration: 286 },
                { id: "eid2418", tween: [ "style", "${_green_cutingCopy8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid97", tween: [ "style", "${_green_cutingCopy8}", "display", 'block', { fromValue: 'none'}], position: 4553, duration: 0 },
                { id: "eid101", tween: [ "style", "${_green_cutingCopy8}", "top", '42.55%', { fromValue: '12.81%'}], position: 4553, duration: 390 },
                { id: "eid2415", tween: [ "style", "${_green_cutingCopy5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid80", tween: [ "style", "${_green_cutingCopy5}", "display", 'block', { fromValue: 'none'}], position: 2550, duration: 0 },
                { id: "eid58", tween: [ "style", "${_green_cutingCopy2}", "top", '14.89%', { fromValue: '12.81%'}], position: 1000, duration: 355 },
                { id: "eid96", tween: [ "style", "${_green_cutingCopy7}", "top", '44.68%', { fromValue: '12.81%'}], position: 3858, duration: 463 },
                { id: "eid79", tween: [ "style", "${_green_cutingCopy4}", "top", '19.15%', { fromValue: '12.81%'}], position: 2000, duration: 315 },
                { id: "eid65", tween: [ "style", "${_green_cuting}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid66", tween: [ "style", "${_green_cuting}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid2414", tween: [ "style", "${_green_cutingCopy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid75", tween: [ "style", "${_green_cutingCopy4}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid107", tween: [ "transform", "${_green_cap2}", "scaleY", '1.42516', { fromValue: '1.42516'}], position: 250, duration: 0 }            ]
        }
    }
},
"dustbin": {
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
                    id: 'dustbin',
                    type: 'image',
                    rect: ['0.2%', '-0.1%', '100%', '99.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/dustbin.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_dustbin}": [
                ["style", "top", '-0.01%'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '0.24%']
            ],
            "${symbolSelector}": [
                ["style", "height", '23.83%'],
                ["style", "width", '14.51%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: true,
            timeline: [
                { id: "eid549", tween: [ "transform", "${_dustbin}", "scaleX", '1.2', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid550", tween: [ "transform", "${_dustbin}", "scaleX", '1', { fromValue: '1.2'}], position: 250, duration: 250 },
                { id: "eid551", tween: [ "transform", "${_dustbin}", "scaleY", '1.2', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid552", tween: [ "transform", "${_dustbin}", "scaleY", '1', { fromValue: '1.2'}], position: 250, duration: 250 }            ]
        }
    }
},
"stick_cut": {
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
                    transform: [[0, 0], ['-90']],
                    rect: ['48.5%', '6.4%', '39.4%', '80.8%', 'auto', 'auto'],
                    display: 'none',
                    id: 'green_cap2',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/stick/stick2.png', '0px', '0px']
                },
                {
                    id: 'knife2',
                    type: 'image',
                    rect: ['0%', '0.4%', '100.2%', '99.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ing/knife.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/STIK_forCut.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy2',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/STIK_forCut.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy3',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/STIK_forCut.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy4',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/STIK_forCut.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy6',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/STIK_forCut.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_knife2}": [
                ["style", "top", '0.04%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '98.94%'],
                ["style", "-webkit-transform-origin", [40.95,28.26], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '0%'],
                ["style", "width", '100.04%']
            ],
            "${_green_cutingCopy}": [
                ["style", "top", '12.81%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'none'],
                ["style", "height", '66%'],
                ["style", "left", '61.68%'],
                ["style", "width", '31.78%']
            ],
            "${_green_cutingCopy4}": [
                ["style", "top", '12.81%'],
                ["style", "display", 'none'],
                ["style", "height", '66%'],
                ["style", "left", '61.68%'],
                ["style", "width", '31.78%']
            ],
            "${symbolSelector}": [
                ["style", "height", '7.83%'],
                ["style", "width", '13.38%']
            ],
            "${_green_cap2}": [
                ["style", "top", '6.43%'],
                ["style", "height", '80.81%'],
                ["transform", "scaleY", '1.00412'],
                ["transform", "rotateZ", '-90deg'],
                ["transform", "scaleX", '0.77057'],
                ["style", "display", 'none'],
                ["style", "left", '48.52%'],
                ["style", "width", '39.41%']
            ],
            "${_green_cutingCopy6}": [
                ["style", "top", '12.81%'],
                ["style", "display", 'none'],
                ["style", "height", '66%'],
                ["style", "left", '61.68%'],
                ["style", "width", '31.78%']
            ],
            "${_green_cutingCopy2}": [
                ["style", "top", '12.81%'],
                ["style", "display", 'none'],
                ["style", "height", '66%'],
                ["style", "left", '61.68%'],
                ["style", "width", '31.78%']
            ],
            "${_green_cutingCopy3}": [
                ["style", "top", '14.89%'],
                ["style", "display", 'none'],
                ["style", "height", '66%'],
                ["style", "left", '54.21%'],
                ["style", "width", '31.78%']
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
                { id: "eid91", tween: [ "style", "${_green_cutingCopy6}", "top", '21.28%', { fromValue: '12.81%'}], position: 2640, duration: 305 },
                { id: "eid152", tween: [ "transform", "${_green_cap2}", "scaleX", '0.77057', { fromValue: '0.77057'}], position: 250, duration: 0 },
                { id: "eid2440", tween: [ "style", "${_green_cutingCopy6}", "display", 'block', { fromValue: 'none'}], position: 4, duration: 0 },
                { id: "eid87", tween: [ "style", "${_green_cutingCopy6}", "display", 'block', { fromValue: 'block'}], position: 2640, duration: 0 },
                { id: "eid52", tween: [ "style", "${_green_cutingCopy}", "left", '71.96%', { fromValue: '61.68%'}], position: 500, duration: 355 },
                { id: "eid79", tween: [ "style", "${_green_cutingCopy4}", "top", '19.15%', { fromValue: '12.81%'}], position: 2000, duration: 315 },
                { id: "eid46", tween: [ "style", "${_green_cutingCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid47", tween: [ "style", "${_green_cutingCopy}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid53", tween: [ "style", "${_green_cutingCopy}", "top", '14.89%', { fromValue: '12.81%'}], position: 500, duration: 355 },
                { id: "eid90", tween: [ "style", "${_green_cutingCopy6}", "left", '81.31%', { fromValue: '61.68%'}], position: 2640, duration: 305 },
                { id: "eid2438", tween: [ "style", "${_green_cutingCopy3}", "display", 'block', { fromValue: 'none'}], position: 4, duration: 0 },
                { id: "eid59", tween: [ "style", "${_green_cutingCopy3}", "display", 'block', { fromValue: 'block'}], position: 1355, duration: 0 },
                { id: "eid78", tween: [ "style", "${_green_cutingCopy4}", "left", '97.2%', { fromValue: '61.68%'}], position: 2000, duration: 315 },
                { id: "eid57", tween: [ "style", "${_green_cutingCopy2}", "left", '81.31%', { fromValue: '61.68%'}], position: 1000, duration: 355 },
                { id: "eid2437", tween: [ "style", "${_green_cutingCopy2}", "display", 'block', { fromValue: 'none'}], position: 4, duration: 0 },
                { id: "eid54", tween: [ "style", "${_green_cutingCopy2}", "display", 'block', { fromValue: 'block'}], position: 855, duration: 0 },
                { id: "eid74", tween: [ "style", "${_green_cutingCopy3}", "top", '17.02%', { fromValue: '14.89%'}], position: 1500, duration: 286 },
                { id: "eid2439", tween: [ "style", "${_green_cutingCopy4}", "display", 'block', { fromValue: 'none'}], position: 4, duration: 0 },
                { id: "eid75", tween: [ "style", "${_green_cutingCopy4}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid70", tween: [ "style", "${_green_cutingCopy3}", "left", '90.65%', { fromValue: '54.21%'}], position: 1500, duration: 286 },
                { id: "eid58", tween: [ "style", "${_green_cutingCopy2}", "top", '14.89%', { fromValue: '12.81%'}], position: 1000, duration: 355 },
                { id: "eid30", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 250, duration: 250 },
                { id: "eid31", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 500, duration: 250 },
                { id: "eid32", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 855, duration: 250 },
                { id: "eid33", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 1105, duration: 250 },
                { id: "eid34", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 1500, duration: 250 },
                { id: "eid35", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 1750, duration: 250 },
                { id: "eid36", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 2105, duration: 250 },
                { id: "eid37", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 2355, duration: 250 },
                { id: "eid38", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 2750, duration: 250 },
                { id: "eid39", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 3000, duration: 250 },
                { id: "eid64", tween: [ "style", "${_green_cap2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid67", tween: [ "style", "${_green_cap2}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid153", tween: [ "transform", "${_green_cap2}", "scaleY", '1.00412', { fromValue: '1.00412'}], position: 250, duration: 0 }            ]
        }
    }
},
"ham_cut": {
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
                    rect: ['48.5%', '6.4%', '39.4%', '80.8%', 'auto', 'auto'],
                    transform: [[0, 0], ['-90']],
                    id: 'green_cap2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/hamberger/ham2.png', '0px', '0px']
                },
                {
                    id: 'knife2',
                    type: 'image',
                    rect: ['0%', '0.4%', '100.2%', '99.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ing/knife.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/ham_forCut.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/ham_forCut.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy3',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/ham_forCut.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy4',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/ham_forCut.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy5',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/ham_forCut.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_knife2}": [
                ["style", "-webkit-transform-origin", [40.95,28.26], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '0.04%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '98.94%'],
                ["style", "opacity", '1'],
                ["style", "left", '0%'],
                ["style", "width", '100.04%']
            ],
            "${_green_cutingCopy4}": [
                ["style", "top", '12.81%'],
                ["style", "display", 'none'],
                ["style", "height", '66%'],
                ["style", "left", '61.68%'],
                ["style", "width", '31.78%']
            ],
            "${_green_cutingCopy5}": [
                ["style", "top", '12.81%'],
                ["style", "display", 'none'],
                ["style", "height", '66%'],
                ["style", "left", '61.68%'],
                ["style", "width", '31.78%']
            ],
            "${symbolSelector}": [
                ["style", "height", '7.83%'],
                ["style", "width", '13.38%']
            ],
            "${_green_cap2}": [
                ["style", "top", '6.38%'],
                ["style", "height", '80.81%'],
                ["transform", "scaleY", '1.00411'],
                ["transform", "rotateZ", '-90deg'],
                ["transform", "scaleX", '0.77058'],
                ["style", "display", 'none'],
                ["style", "left", '53.27%'],
                ["style", "width", '39.41%']
            ],
            "${_green_cutingCopy2}": [
                ["style", "top", '12.81%'],
                ["style", "display", 'none'],
                ["style", "height", '66%'],
                ["style", "left", '61.68%'],
                ["style", "width", '31.78%']
            ],
            "${_green_cutingCopy}": [
                ["style", "top", '12.81%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'none'],
                ["style", "height", '66%'],
                ["style", "left", '61.68%'],
                ["style", "width", '31.78%']
            ],
            "${_green_cutingCopy3}": [
                ["style", "top", '14.89%'],
                ["style", "display", 'none'],
                ["style", "height", '66%'],
                ["style", "left", '54.21%'],
                ["style", "width", '31.78%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3250,
            autoPlay: true,
            timeline: [
                { id: "eid30", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 250, duration: 250 },
                { id: "eid31", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 500, duration: 250 },
                { id: "eid32", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 855, duration: 250 },
                { id: "eid33", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 1105, duration: 250 },
                { id: "eid34", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 1500, duration: 250 },
                { id: "eid35", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 1750, duration: 250 },
                { id: "eid36", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 2105, duration: 198 },
                { id: "eid37", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 2303, duration: 198 },
                { id: "eid38", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 2635, duration: 155 },
                { id: "eid39", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 2790, duration: 155 },
                { id: "eid58", tween: [ "style", "${_green_cutingCopy2}", "top", '14.89%', { fromValue: '12.81%'}], position: 1000, duration: 355 },
                { id: "eid84", tween: [ "style", "${_green_cutingCopy5}", "top", '19.15%', { fromValue: '12.81%'}], position: 2550, duration: 305 },
                { id: "eid52", tween: [ "style", "${_green_cutingCopy}", "left", '71.96%', { fromValue: '61.68%'}], position: 500, duration: 355 },
                { id: "eid64", tween: [ "style", "${_green_cap2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid67", tween: [ "style", "${_green_cap2}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid46", tween: [ "style", "${_green_cutingCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid47", tween: [ "style", "${_green_cutingCopy}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid53", tween: [ "style", "${_green_cutingCopy}", "top", '14.89%', { fromValue: '12.81%'}], position: 500, duration: 355 },
                { id: "eid83", tween: [ "style", "${_green_cutingCopy5}", "left", '84.11%', { fromValue: '61.68%'}], position: 2550, duration: 305 },
                { id: "eid2441", tween: [ "style", "${_green_cutingCopy2}", "display", 'block', { fromValue: 'none'}], position: 4, duration: 0 },
                { id: "eid54", tween: [ "style", "${_green_cutingCopy2}", "display", 'block', { fromValue: 'block'}], position: 855, duration: 0 },
                { id: "eid2442", tween: [ "style", "${_green_cutingCopy3}", "display", 'block', { fromValue: 'none'}], position: 4, duration: 0 },
                { id: "eid59", tween: [ "style", "${_green_cutingCopy3}", "display", 'block', { fromValue: 'block'}], position: 1355, duration: 0 },
                { id: "eid78", tween: [ "style", "${_green_cutingCopy4}", "left", '97.2%', { fromValue: '61.68%'}], position: 2000, duration: 315 },
                { id: "eid2444", tween: [ "style", "${_green_cutingCopy5}", "display", 'block', { fromValue: 'none'}], position: 4, duration: 0 },
                { id: "eid80", tween: [ "style", "${_green_cutingCopy5}", "display", 'block', { fromValue: 'block'}], position: 2550, duration: 0 },
                { id: "eid57", tween: [ "style", "${_green_cutingCopy2}", "left", '81.31%', { fromValue: '61.68%'}], position: 1000, duration: 355 },
                { id: "eid74", tween: [ "style", "${_green_cutingCopy3}", "top", '17.02%', { fromValue: '14.89%'}], position: 1500, duration: 286 },
                { id: "eid2443", tween: [ "style", "${_green_cutingCopy4}", "display", 'block', { fromValue: 'none'}], position: 4, duration: 0 },
                { id: "eid75", tween: [ "style", "${_green_cutingCopy4}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid79", tween: [ "style", "${_green_cutingCopy4}", "top", '19.15%', { fromValue: '12.81%'}], position: 2000, duration: 315 },
                { id: "eid70", tween: [ "style", "${_green_cutingCopy3}", "left", '90.65%', { fromValue: '54.21%'}], position: 1500, duration: 286 }            ]
        }
    }
},
"tomato_sauace": {
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
                    rect: ['144.8%', '29.6%', '139.4%', '38.5%', 'auto', 'auto'],
                    id: 'sauceonpizza2',
                    fill: ['rgba(0,0,0,0)', 'images/pizza/sauceonpizza.png', '0px', '0px']
                },
                {
                    id: 'tomatosauce',
                    type: 'image',
                    rect: ['0.7%', '0.2%', '100.7%', '100.2%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ing/Tsauce.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_sauceonpizza2}": [
                ["style", "top", '29.57%'],
                ["style", "display", 'block'],
                ["style", "height", '38.49%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '144.83%'],
                ["style", "width", '139.37%']
            ],
            "${_tomatosauce}": [
                ["style", "top", '-0.03%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '100.02%'],
                ["style", "left", '0.69%'],
                ["style", "width", '100.14%']
            ],
            "${symbolSelector}": [
                ["style", "height", '19.17%'],
                ["style", "width", '7.25%']
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
                { id: "eid175", tween: [ "transform", "${_tomatosauce}", "rotateZ", '117deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid176", tween: [ "transform", "${_tomatosauce}", "rotateZ", '0deg', { fromValue: '117deg'}], position: 1500, duration: 500 },
                { id: "eid171", tween: [ "style", "${_tomatosauce}", "left", '73.81%', { fromValue: '0.69%'}], position: 0, duration: 500 },
                { id: "eid172", tween: [ "style", "${_tomatosauce}", "left", '0.69%', { fromValue: '73.81%'}], position: 1500, duration: 500 },
                { id: "eid5862", tween: [ "style", "${_sauceonpizza2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid5864", tween: [ "style", "${_sauceonpizza2}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
                { id: "eid173", tween: [ "style", "${_tomatosauce}", "top", '-27.49%', { fromValue: '-0.03%'}], position: 0, duration: 500 },
                { id: "eid174", tween: [ "style", "${_tomatosauce}", "top", '-0.03%', { fromValue: '-27.49%'}], position: 1500, duration: 500 },
                { id: "eid5813", tween: [ "style", "${_sauceonpizza2}", "opacity", '0.5', { fromValue: '0.000000'}], position: 500, duration: 1000 }            ]
        }
    }
},
"sauce_pizza": {
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
                    id: 'sauceonpizza',
                    type: 'image',
                    rect: ['0.3%', '-0.3%', '99.7%', '99.5%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pizza/sauceonpizza.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_sauceonpizza}": [
                ["style", "top", '-250%'],
                ["style", "height", '647.5%'],
                ["transform", "scaleY", '0'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0.5'],
                ["style", "left", '-191.64%'],
                ["style", "width", '473.92%']
            ],
            "${symbolSelector}": [
                ["style", "height", '12.67%'],
                ["style", "width", '15.75%']
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
                { id: "eid195", tween: [ "transform", "${_sauceonpizza}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 1250 },
                { id: "eid194", tween: [ "transform", "${_sauceonpizza}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 1250 },
                { id: "eid179", tween: [ "style", "${_sauceonpizza}", "opacity", '0.43589743589744', { fromValue: '0.5'}], position: 0, duration: 1250 }            ]
        }
    }
},
"b17and16": {
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
                    rect: ['3%', '-1.8%', '89.1%', '96.7%', 'auto', 'auto'],
                    id: 'b17',
                    fill: ['rgba(0,0,0,0)', 'images/girl/17.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['24.8%', '-4%', '89.1%', '96.7%', 'auto', 'auto'],
                    id: 'b16',
                    fill: ['rgba(0,0,0,0)', 'images/girl/16.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['42.9%', '18.6%', '20.9%', '5.4%', 'auto', 'auto'],
                    id: '_1',
                    fill: ['rgba(0,0,0,0)', 'images/girl/eye%20patch/1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '113.91%'],
                ["style", "width", '164.14%']
            ],
            "${__1}": [
                ["style", "top", '18.58%'],
                ["style", "height", '5.42%'],
                ["style", "display", 'none'],
                ["style", "left", '43.28%'],
                ["style", "width", '20.85%']
            ],
            "${_b16}": [
                ["style", "display", 'block'],
                ["style", "left", '10.92%'],
                ["style", "top", '0%']
            ],
            "${_b17}": [
                ["style", "display", 'none'],
                ["style", "left", '10.92%'],
                ["style", "top", '0%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 631,
            autoPlay: true,
            timeline: [
                { id: "eid493", tween: [ "style", "${__1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid494", tween: [ "style", "${__1}", "display", 'block', { fromValue: 'none'}], position: 408, duration: 0 },
                { id: "eid498", tween: [ "style", "${__1}", "display", 'none', { fromValue: 'block'}], position: 631, duration: 0 },
                { id: "eid2881", tween: [ "style", "${_b16}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2883", tween: [ "style", "${_b16}", "display", 'none', { fromValue: 'block'}], position: 187, duration: 0 },
                { id: "eid2895", tween: [ "style", "${_b16}", "display", 'block', { fromValue: 'none'}], position: 408, duration: 0 },
                { id: "eid2897", tween: [ "style", "${_b16}", "display", 'none', { fromValue: 'block'}], position: 631, duration: 0 },
                { id: "eid2880", tween: [ "style", "${_b17}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2882", tween: [ "style", "${_b17}", "display", 'block', { fromValue: 'none'}], position: 187, duration: 0 },
                { id: "eid2894", tween: [ "style", "${_b17}", "display", 'none', { fromValue: 'block'}], position: 408, duration: 0 },
                { id: "eid2896", tween: [ "style", "${_b17}", "display", 'block', { fromValue: 'none'}], position: 631, duration: 0 }            ]
        }
    }
},
"b18andb19": {
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
                    id: 'b18',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/girl/18.png', '0px', '0px']
                },
                {
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'b19',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/girl/19.png', '0px', '0px']
                },
                {
                    rect: ['79.3%', '32.1%', '31.1%', '9.5%', 'auto', 'auto'],
                    id: 'plate5',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/plate.png', '0px', '0px']
                },
                {
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/ing/bankimg.png', '0px', '0px'],
                    id: 'blankimageonplate',
                    rect: ['83.5%', '31.3%', '21.2%', '9%', 'auto', 'auto'],
                    display: 'block',
                    tag: 'img'
                },
                {
                    rect: ['35.9%', '18.4%', '25.5%', '6.3%', 'auto', 'auto'],
                    id: '_13',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/girl/eye%20patch/1.png', '0px', '0px']
                },
                {
                    rect: ['74.7%', '33.9%', '15.2%', '12.7%', 'auto', 'auto'],
                    id: 'PHL_0',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/pizza/pizzabase.png', '0px', '0px']
                },
                {
                    rect: ['75.8%', '33.4%', '79.2%', '80.7%', 'auto', 'auto'],
                    type: 'image',
                    id: 'PHL_1',
                    opacity: 0.66666666666667,
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/pizza/sauceonpizza.png', '0px', '0px']
                },
                {
                    rect: ['101.1%', '33.4%', '14.1%', '12.6%', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['1.15928']],
                    type: 'image',
                    id: 'PHL_2',
                    opacity: 1,
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/pizza/cheese.png', '0px', '0px']
                },
                {
                    rect: ['-177.8%', '-16.8%', '17.8%', '15.9%', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['-0.48937', '0.47916']],
                    id: 'PHL_3',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/leaves1_On_pizza.png', '0px', '0px']
                },
                {
                    rect: ['-116.3%', '33.9%', '7.8%', '6.9%', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['-0.96774']],
                    id: 'PHL_4',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/leave2_on_face.png', '0px', '0px']
                },
                {
                    rect: ['-346.7%', '-5.2%', '29.6%', '16.1%', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['-0.33617', '0.52577']],
                    id: 'PHL_5',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/red_cutcapsicum_on_face.png', '0px', '0px']
                },
                {
                    rect: ['81.3%', '34.5%', '11.4%', '6.7%', 'auto', 'auto'],
                    id: 'PHL_6',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/green_cutcaps_on_pizza.png', '0px', '0px']
                },
                {
                    rect: ['-2.9%', '-84.6%', '28.1%', '17%', 'auto', 'auto'],
                    transform: [[0, 0], ['-55'], ['0', '42'], ['0.32955', '0.62797']],
                    id: 'PHL_7',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/tomato_on_pizza.png', '0px', '0px']
                },
                {
                    rect: ['-91.7%', '-132%', '29.1%', '19.9%', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.41991', '-0.51261']],
                    id: 'PHL_8',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/olive_on_pizza.png', '0px', '0px']
                },
                {
                    rect: ['83.3%', '34.1%', '7.9%', '5.6%', 'auto', 'auto'],
                    id: 'PHL_9',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/ham_on_pizza.png', '0px', '0px']
                },
                {
                    rect: ['-46.9%', '-4.6%', '18.2%', '12.2%', 'auto', 'auto'],
                    borderRadius: ['0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px'],
                    transform: [[0, 0], [], [], ['0.40987', '0.54054']],
                    id: 'PHL_10',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/mushroom_on_pizza.png', '0px', '0px']
                },
                {
                    rect: ['-153.3%', '-31.7%', '29.1%', '15.3%', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.32758', '0.52173']],
                    id: 'PHL_11',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/stick_on_pizza.png', '0px', '0px']
                },
                {
                    rect: ['79.7%', '33.6%', '61.8%', '70.7%', 'auto', 'auto'],
                    id: 'PHL_12',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/chiliflakes/chili_on_pizza.png', '0px', '0px']
                },
                {
                    rect: ['80.5%', '34.2%', '61%', '72%', 'auto', 'auto'],
                    id: 'PHL_13',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/chiliflakes/oregano_on_pizza.png', '0px', '0px']
                },
                {
                    rect: ['84.1%', '35.1%', '3.3%', '4.3%', 'auto', 'auto'],
                    id: 'PHL_14',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/tunna/tuna1%5D.png', '0px', '0px']
                },
                {
                    rect: ['-143.3%', '19.5%', '30.6%', '12.2%', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.28163', '0.75342']],
                    id: 'PHL_15',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/shrimp.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_PHL_6}": [
                ["style", "top", '34.74%'],
                ["style", "display", 'none'],
                ["style", "height", '3.68%'],
                ["style", "left", '80.66%'],
                ["style", "width", '10.38%']
            ],
            "${_blankimageonplate}": [
                ["style", "top", '26.58%'],
                ["style", "height", '13.68%'],
                ["style", "display", 'block'],
                ["style", "left", '56.6%'],
                ["style", "width", '58.32%']
            ],
            "${_PHL_11}": [
                ["style", "top", '33.37%'],
                ["transform", "scaleX", '0.32758'],
                ["transform", "scaleY", '0.52173'],
                ["transform", "rotateZ", '-29deg'],
                ["style", "display", 'none'],
                ["style", "height", '7.28%'],
                ["style", "left", '66.17%'],
                ["style", "width", '38.02%']
            ],
            "${_PHL_7}": [
                ["transform", "rotateZ", '-55deg'],
                ["transform", "scaleX", '0.32955'],
                ["style", "left", '74.84%'],
                ["style", "width", '26.42%'],
                ["style", "top", '32.32%'],
                ["transform", "scaleY", '0.62797'],
                ["style", "height", '9.22%'],
                ["transform", "skewY", '0deg'],
                ["style", "display", 'none']
            ],
            "${_PHL_13}": [
                ["style", "top", '34.22%'],
                ["style", "display", 'none'],
                ["style", "height", '5%'],
                ["style", "left", '80.5%'],
                ["style", "width", '16.04%']
            ],
            "${_plate5}": [
                ["style", "top", '33.16%'],
                ["style", "height", '8.68%'],
                ["style", "display", 'none'],
                ["style", "left", '70.75%'],
                ["style", "width", '33.5%']
            ],
            "${symbolSelector}": [
                ["style", "height", '110.14%'],
                ["style", "width", '146.21%']
            ],
            "${_PHL_0}": [
                ["style", "top", '34.21%'],
                ["style", "display", 'none'],
                ["style", "height", '5.79%'],
                ["style", "left", '75%'],
                ["style", "width", '25.48%']
            ],
            "${_PHL_4}": [
                ["style", "top", '35%'],
                ["transform", "scaleX", '-0.96774'],
                ["style", "height", '3.77%'],
                ["style", "display", 'none'],
                ["style", "left", '78.77%'],
                ["style", "width", '14.53%']
            ],
            "${_PHL_1}": [
                ["style", "top", '34.41%'],
                ["style", "display", 'none'],
                ["style", "height", '5%'],
                ["style", "opacity", '0.6666666865348816'],
                ["style", "left", '75.78%'],
                ["style", "width", '23.12%']
            ],
            "${_PHL_3}": [
                ["style", "top", '33.42%'],
                ["transform", "scaleY", '0.47916'],
                ["transform", "scaleX", '-0.48937'],
                ["style", "display", 'none'],
                ["style", "height", '5.65%'],
                ["style", "left", '73.58%'],
                ["style", "width", '26.14%']
            ],
            "${__13}": [
                ["style", "top", '18.42%'],
                ["style", "display", 'none'],
                ["style", "left", '35.85%'],
                ["style", "width", '25.53%']
            ],
            "${_PHL_9}": [
                ["style", "top", '34.47%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'none'],
                ["style", "height", '4.08%'],
                ["style", "left", '78.77%'],
                ["style", "width", '11.53%']
            ],
            "${_b18}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'none']
            ],
            "${_PHL_2}": [
                ["style", "top", '34.47%'],
                ["transform", "scaleX", '1.15928'],
                ["style", "height", '4.74%'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '77.36%'],
                ["style", "width", '19.74%']
            ],
            "${_PHL_8}": [
                ["style", "top", '32.96%'],
                ["transform", "scaleY", '-0.51261'],
                ["transform", "scaleX", '0.41991'],
                ["style", "display", 'none'],
                ["style", "height", '7.42%'],
                ["style", "left", '76.42%'],
                ["style", "width", '26.69%']
            ],
            "${_b19}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'none']
            ],
            "${_PHL_10}": [
                ["style", "border-top-left-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.40987'],
                ["style", "left", '70.28%'],
                ["style", "width", '31.11%'],
                ["style", "top", '32.84%'],
                ["style", "border-bottom-left-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '0.54054'],
                ["style", "height", '8.02%'],
                ["style", "border-top-right-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "display", 'none']
            ],
            "${_PHL_5}": [
                ["style", "top", '33.31%'],
                ["transform", "scaleY", '0.52577'],
                ["transform", "scaleX", '-0.33617'],
                ["style", "display", 'none'],
                ["style", "height", '6.49%'],
                ["style", "left", '71.96%'],
                ["style", "width", '33.45%']
            ],
            "${_PHL_14}": [
                ["style", "top", '35.53%'],
                ["style", "height", '2.63%'],
                ["style", "display", 'none'],
                ["style", "left", '87.26%'],
                ["style", "width", '6.14%']
            ],
            "${_PHL_15}": [
                ["style", "top", '33.42%'],
                ["transform", "scaleY", '0.75342'],
                ["transform", "scaleX", '0.28163'],
                ["style", "display", 'none'],
                ["style", "height", '6.52%'],
                ["style", "left", '57.55%'],
                ["style", "width", '60.23%']
            ],
            "${_PHL_12}": [
                ["style", "top", '34.74%'],
                ["style", "display", 'none'],
                ["style", "height", '5%'],
                ["style", "left", '79.72%'],
                ["style", "width", '15.57%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 450,
            autoPlay: true,
            timeline: [
                { id: "eid3597", tween: [ "style", "${_PHL_12}", "width", '15.57%', { fromValue: '15.57%'}], position: 0, duration: 0 },
                { id: "eid3503", tween: [ "style", "${_PHL_2}", "height", '4.74%', { fromValue: '4.74%'}], position: 0, duration: 0 },
                { id: "eid3156", tween: [ "style", "${_PHL_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3533", tween: [ "style", "${_PHL_5}", "width", '33.45%', { fromValue: '33.45%'}], position: 0, duration: 0 },
                { id: "eid3541", tween: [ "style", "${_PHL_6}", "left", '80.66%', { fromValue: '80.66%'}], position: 0, duration: 0 },
                { id: "eid3595", tween: [ "style", "${_PHL_11}", "width", '38.02%', { fromValue: '38.02%'}], position: 0, duration: 0 },
                { id: "eid3484", tween: [ "style", "${_PHL_0}", "width", '25.48%', { fromValue: '25.48%'}], position: 0, duration: 0 },
                { id: "eid3584", tween: [ "style", "${_PHL_10}", "width", '31.11%', { fromValue: '31.11%'}], position: 0, duration: 0 },
                { id: "eid3558", tween: [ "style", "${_PHL_7}", "left", '74.84%', { fromValue: '74.84%'}], position: 0, duration: 0 },
                { id: "eid3146", tween: [ "style", "${_PHL_14}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3611", tween: [ "style", "${_plate5}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3530", tween: [ "style", "${_PHL_5}", "height", '6.49%', { fromValue: '6.49%'}], position: 0, duration: 0 },
                { id: "eid3151", tween: [ "style", "${_PHL_9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3154", tween: [ "style", "${_PHL_6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3609", tween: [ "style", "${_PHL_15}", "left", '57.55%', { fromValue: '57.55%'}], position: 0, duration: 0 },
                { id: "eid3585", tween: [ "style", "${_PHL_10}", "left", '70.28%', { fromValue: '70.28%'}], position: 0, duration: 0 },
                { id: "eid3527", tween: [ "style", "${_PHL_4}", "left", '78.77%', { fromValue: '78.77%'}], position: 0, duration: 0 },
                { id: "eid3486", tween: [ "style", "${_PHL_0}", "top", '34.21%', { fromValue: '34.21%'}], position: 0, duration: 0 },
                { id: "eid3487", tween: [ "style", "${_PHL_0}", "left", '75%', { fromValue: '75%'}], position: 0, duration: 0 },
                { id: "eid3608", tween: [ "style", "${_PHL_15}", "width", '60.23%', { fromValue: '60.23%'}], position: 0, duration: 0 },
                { id: "eid3512", tween: [ "style", "${_PHL_3}", "left", '73.58%', { fromValue: '73.58%'}], position: 0, duration: 0 },
                { id: "eid3577", tween: [ "style", "${_PHL_9}", "height", '4.08%', { fromValue: '4.08%'}], position: 0, duration: 0 },
                { id: "eid3498", tween: [ "style", "${_PHL_2}", "top", '34.47%', { fromValue: '34.47%'}], position: 0, duration: 0 },
                { id: "eid3572", tween: [ "style", "${_PHL_8}", "height", '7.42%', { fromValue: '7.42%'}], position: 0, duration: 0 },
                { id: "eid3149", tween: [ "style", "${_PHL_11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3485", tween: [ "style", "${_PHL_0}", "height", '5.79%', { fromValue: '5.79%'}], position: 0, duration: 0 },
                { id: "eid3148", tween: [ "style", "${_PHL_12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3534", tween: [ "style", "${_PHL_5}", "left", '71.96%', { fromValue: '71.96%'}], position: 0, duration: 0 },
                { id: "eid3598", tween: [ "style", "${_PHL_12}", "top", '34.74%', { fromValue: '34.74%'}], position: 0, duration: 0 },
                { id: "eid3159", tween: [ "style", "${_PHL_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3540", tween: [ "style", "${_PHL_6}", "top", '34.74%', { fromValue: '34.74%'}], position: 0, duration: 0 },
                { id: "eid3605", tween: [ "style", "${_PHL_15}", "height", '6.52%', { fromValue: '6.52%'}], position: 0, duration: 0 },
                { id: "eid3508", tween: [ "style", "${_PHL_3}", "height", '5.65%', { fromValue: '5.65%'}], position: 0, duration: 0 },
                { id: "eid3610", tween: [ "style", "${_PHL_15}", "top", '33.42%', { fromValue: '33.42%'}], position: 0, duration: 0 },
                { id: "eid3592", tween: [ "style", "${_PHL_11}", "height", '7.28%', { fromValue: '7.28%'}], position: 0, duration: 0 },
                { id: "eid3153", tween: [ "style", "${_PHL_7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3599", tween: [ "style", "${_PHL_13}", "height", '5%', { fromValue: '5%'}], position: 0, duration: 0 },
                { id: "eid3157", tween: [ "style", "${_PHL_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3553", tween: [ "style", "${_PHL_7}", "height", '9.22%', { fromValue: '9.22%'}], position: 0, duration: 0 },
                { id: "eid3491", tween: [ "style", "${_PHL_1}", "top", '34.41%', { fromValue: '34.41%'}], position: 0, duration: 0 },
                { id: "eid3596", tween: [ "style", "${_PHL_12}", "height", '5%', { fromValue: '5%'}], position: 0, duration: 0 },
                { id: "eid3582", tween: [ "style", "${_PHL_10}", "top", '32.84%', { fromValue: '32.84%'}], position: 0, duration: 0 },
                { id: "eid3593", tween: [ "style", "${_PHL_11}", "top", '33.37%', { fromValue: '33.37%'}], position: 0, duration: 0 },
                { id: "eid3489", tween: [ "style", "${_PHL_1}", "width", '23.12%', { fromValue: '23.12%'}], position: 0, duration: 0 },
                { id: "eid3604", tween: [ "style", "${_PHL_14}", "top", '35.53%', { fromValue: '35.53%'}], position: 0, duration: 0 },
                { id: "eid3600", tween: [ "style", "${_PHL_13}", "width", '16.04%', { fromValue: '16.04%'}], position: 0, duration: 0 },
                { id: "eid3576", tween: [ "style", "${_PHL_8}", "left", '76.42%', { fromValue: '76.42%'}], position: 0, duration: 0 },
                { id: "eid3528", tween: [ "style", "${_PHL_4}", "top", '35%', { fromValue: '35%'}], position: 0, duration: 0 },
                { id: "eid3538", tween: [ "style", "${_PHL_6}", "height", '3.68%', { fromValue: '3.68%'}], position: 0, duration: 0 },
                { id: "eid3580", tween: [ "style", "${_PHL_9}", "top", '34.47%', { fromValue: '34.47%'}], position: 0, duration: 0 },
                { id: "eid3160", tween: [ "style", "${_PHL_0}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3570", tween: [ "style", "${_PHL_7}", "width", '26.42%', { fromValue: '26.42%'}], position: 0, duration: 0 },
                { id: "eid3581", tween: [ "style", "${_PHL_10}", "height", '8.02%', { fromValue: '8.02%'}], position: 0, duration: 0 },
                { id: "eid3594", tween: [ "style", "${_PHL_11}", "left", '66.17%', { fromValue: '66.17%'}], position: 0, duration: 0 },
                { id: "eid3109", tween: [ "style", "${_b18}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3646", tween: [ "style", "${_b18}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
                { id: "eid390", tween: [ "style", "${_b18}", "display", 'block', { fromValue: 'none'}], position: 450, duration: 0 },
                { id: "eid3579", tween: [ "style", "${_PHL_9}", "left", '78.77%', { fromValue: '78.77%'}], position: 0, duration: 0 },
                { id: "eid3155", tween: [ "style", "${_PHL_5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3505", tween: [ "style", "${_PHL_2}", "width", '19.74%', { fromValue: '19.74%'}], position: 0, duration: 0 },
                { id: "eid510", tween: [ "style", "${__13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid511", tween: [ "style", "${__13}", "display", 'block', { fromValue: 'none'}], position: 303, duration: 0 },
                { id: "eid512", tween: [ "style", "${__13}", "display", 'none', { fromValue: 'block'}], position: 450, duration: 0 },
                { id: "eid3490", tween: [ "style", "${_PHL_1}", "height", '5%', { fromValue: '5%'}], position: 0, duration: 0 },
                { id: "eid3603", tween: [ "style", "${_PHL_14}", "left", '87.26%', { fromValue: '87.26%'}], position: 0, duration: 0 },
                { id: "eid3152", tween: [ "style", "${_PHL_8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3513", tween: [ "style", "${_PHL_3}", "top", '33.42%', { fromValue: '33.42%'}], position: 0, duration: 0 },
                { id: "eid3108", tween: [ "style", "${_b19}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3645", tween: [ "style", "${_b19}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid389", tween: [ "style", "${_b19}", "display", 'none', { fromValue: 'block'}], position: 450, duration: 0 },
                { id: "eid3158", tween: [ "style", "${_PHL_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3150", tween: [ "style", "${_PHL_10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3429", tween: [ "style", "${_blankimageonplate}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3526", tween: [ "style", "${_PHL_4}", "width", '14.53%', { fromValue: '14.53%'}], position: 0, duration: 0 },
                { id: "eid3539", tween: [ "style", "${_PHL_6}", "width", '10.38%', { fromValue: '10.38%'}], position: 0, duration: 0 },
                { id: "eid3147", tween: [ "style", "${_PHL_13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3602", tween: [ "style", "${_PHL_14}", "width", '6.14%', { fromValue: '6.14%'}], position: 0, duration: 0 },
                { id: "eid3506", tween: [ "style", "${_PHL_2}", "left", '77.36%', { fromValue: '77.36%'}], position: 0, duration: 0 },
                { id: "eid3601", tween: [ "style", "${_PHL_14}", "height", '2.63%', { fromValue: '2.63%'}], position: 0, duration: 0 },
                { id: "eid3511", tween: [ "style", "${_PHL_3}", "width", '26.14%', { fromValue: '26.14%'}], position: 0, duration: 0 },
                { id: "eid3575", tween: [ "style", "${_PHL_8}", "width", '26.69%', { fromValue: '26.69%'}], position: 0, duration: 0 },
                { id: "eid3535", tween: [ "style", "${_PHL_5}", "top", '33.31%', { fromValue: '33.31%'}], position: 0, duration: 0 },
                { id: "eid3145", tween: [ "style", "${_PHL_15}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3554", tween: [ "style", "${_PHL_7}", "top", '32.32%', { fromValue: '32.32%'}], position: 0, duration: 0 },
                { id: "eid3578", tween: [ "style", "${_PHL_9}", "width", '11.53%', { fromValue: '11.53%'}], position: 0, duration: 0 },
                { id: "eid3517", tween: [ "style", "${_PHL_4}", "height", '3.77%', { fromValue: '3.77%'}], position: 0, duration: 0 },
                { id: "eid3573", tween: [ "style", "${_PHL_8}", "top", '32.96%', { fromValue: '32.96%'}], position: 0, duration: 0 }            ]
        }
    }
},
"b18andb19_F": {
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
                    id: 'b18',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/girl/18.png', '0px', '0px']
                },
                {
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'b19',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/girl/19.png', '0px', '0px']
                },
                {
                    id: 'plate5',
                    type: 'image',
                    rect: ['-4.2%', '33.1%', '31.1%', '9.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/plate.png', '0px', '0px']
                },
                {
                    rect: ['-16%', '29.4%', '54.9%', '11.1%', 'auto', 'auto'],
                    id: 'blankimageonplate',
                    fill: ['rgba(0,0,0,0)', 'images/TMT.png', '0px', '0px'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['40.1%', '18.7%', '24.2%', '6.3%', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['-0.99421']],
                    id: '_14',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/girl/eye%20patch/1.png', '0px', '0px']
                },
                {
                    rect: ['-1.6%', '34.5%', '15.2%', '12.7%', 'auto', 'auto'],
                    id: 'PHR_0',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/pizza/pizzabase.png', '0px', '0px']
                },
                {
                    rect: ['0.4%', '34.3%', '79.2%', '80.7%', 'auto', 'auto'],
                    type: 'image',
                    id: 'PHR_1',
                    opacity: 0.66666666666667,
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/pizza/sauceonpizza.png', '0px', '0px']
                },
                {
                    rect: ['4.7%', '34.3%', '14.1%', '12.6%', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['1.15928']],
                    type: 'image',
                    id: 'PHR_2',
                    opacity: 1,
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/pizza/cheese.png', '0px', '0px']
                },
                {
                    rect: ['-31.4%', '8.9%', '17.8%', '15.9%', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['-0.48937', '0.47916']],
                    id: 'PHR_3',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/leaves1_On_pizza.png', '0px', '0px']
                },
                {
                    rect: ['-23.6%', '34.7%', '7.8%', '6.9%', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['-0.96774']],
                    id: 'PHR_4',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/leave2_on_face.png', '0px', '0px']
                },
                {
                    rect: ['-52.2%', '15.1%', '29.6%', '16.1%', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['-0.33617', '0.52577']],
                    id: 'PHR_5',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/red_cutcapsicum_on_face.png', '0px', '0px']
                },
                {
                    rect: ['4.4%', '34.9%', '11.4%', '6.7%', 'auto', 'auto'],
                    id: 'PHR_6',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/green_cutcaps_on_pizza.png', '0px', '0px']
                },
                {
                    rect: ['3.1%', '4.8%', '28.1%', '17%', 'auto', 'auto'],
                    transform: [[0, 0], ['-55'], ['0', '42'], ['0.32955', '0.62797']],
                    id: 'PHR_7',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/tomato_on_pizza.png', '0px', '0px']
                },
                {
                    rect: ['-17.2%', '-24.4%', '29.1%', '19.9%', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.41991', '-0.51261']],
                    id: 'PHR_8',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/olive_on_pizza.png', '0px', '0px']
                },
                {
                    rect: ['3.1%', '34.9%', '7.9%', '5.6%', 'auto', 'auto'],
                    id: 'PHR_9',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/ham_on_pizza.png', '0px', '0px']
                },
                {
                    rect: ['-27.6%', '16.8%', '18.2%', '12.2%', 'auto', 'auto'],
                    borderRadius: ['0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px'],
                    transform: [[0, 0], [], [], ['0.40987', '0.54054']],
                    id: 'PHR_10',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/mushroom_on_pizza.png', '0px', '0px']
                },
                {
                    rect: ['-14.2%', '9.4%', '29.1%', '15.3%', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.32758', '0.52173']],
                    id: 'PHR_11',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/stick_on_pizza.png', '0px', '0px']
                },
                {
                    rect: ['5.9%', '34.7%', '61.8%', '70.7%', 'auto', 'auto'],
                    id: 'PHR_12',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/chiliflakes/chili_on_pizza.png', '0px', '0px']
                },
                {
                    rect: ['3.8%', '34.5%', '61%', '72%', 'auto', 'auto'],
                    id: 'PHR_13',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/chiliflakes/oregano_on_pizza.png', '0px', '0px']
                },
                {
                    rect: ['9.2%', '35.4%', '3.3%', '4.3%', 'auto', 'auto'],
                    id: 'PHR_14',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/tunna/tuna1%5D.png', '0px', '0px']
                },
                {
                    rect: ['-67.3%', '27.8%', '30.6%', '12.2%', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.28163', '0.75342']],
                    id: 'PHR_15',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/shrimp.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_PHR_14}": [
                ["style", "top", '35.79%'],
                ["style", "display", 'none'],
                ["style", "height", '2.63%'],
                ["style", "left", '8.49%'],
                ["style", "width", '5.19%']
            ],
            "${_blankimageonplate}": [
                ["style", "height", '11.05%'],
                ["style", "top", '29.38%'],
                ["style", "left", '-16.04%'],
                ["style", "width", '54.94%']
            ],
            "${_PHR_10}": [
                ["style", "border-top-left-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.40987'],
                ["style", "left", '-7.37%'],
                ["style", "width", '37.68%'],
                ["style", "top", '32.93%'],
                ["style", "border-bottom-left-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '0.54054'],
                ["style", "height", '8.14%'],
                ["style", "display", 'none'],
                ["style", "border-top-right-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_PHR_6}": [
                ["style", "top", '34.92%'],
                ["style", "height", '4.47%'],
                ["style", "display", 'none'],
                ["style", "left", '4.39%'],
                ["style", "width", '9.91%']
            ],
            "${_PHR_8}": [
                ["style", "top", '32.11%'],
                ["transform", "scaleY", '-0.51261'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '0.41991'],
                ["style", "height", '10.54%'],
                ["style", "left", '-2.69%'],
                ["style", "width", '30.48%']
            ],
            "${_plate5}": [
                ["style", "top", '33.13%'],
                ["style", "height", '9.74%'],
                ["style", "left", '-4.25%'],
                ["style", "width", '31.14%']
            ],
            "${symbolSelector}": [
                ["style", "height", '110.14%'],
                ["style", "width", '146.21%']
            ],
            "${_PHR_12}": [
                ["style", "top", '34.72%'],
                ["style", "height", '4.74%'],
                ["style", "display", 'none'],
                ["style", "left", '3.77%'],
                ["style", "width", '15.57%']
            ],
            "${_PHR_0}": [
                ["style", "top", '35%'],
                ["style", "height", '6.05%'],
                ["style", "display", 'none'],
                ["style", "left", '-1.42%'],
                ["style", "width", '25.48%']
            ],
            "${_PHR_4}": [
                ["style", "top", '35.32%'],
                ["style", "display", 'none'],
                ["style", "height", '4.26%'],
                ["transform", "scaleX", '-0.96774'],
                ["style", "left", '5.75%'],
                ["style", "width", '8.5%']
            ],
            "${_PHR_2}": [
                ["style", "top", '34.47%'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '1.15928'],
                ["style", "height", '5.94%'],
                ["style", "opacity", '1'],
                ["style", "left", '1.89%'],
                ["style", "width", '18.38%']
            ],
            "${_PHR_15}": [
                ["style", "top", '33.87%'],
                ["transform", "scaleY", '0.75342'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '0.28163'],
                ["style", "height", '7.04%'],
                ["style", "left", '-22%'],
                ["style", "width", '67.9%']
            ],
            "${_PHR_3}": [
                ["style", "top", '31.84%'],
                ["transform", "scaleY", '0.47916'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '-0.48937'],
                ["style", "height", '11.02%'],
                ["style", "left", '-0.47%'],
                ["style", "width", '23.01%']
            ],
            "${_PHR_5}": [
                ["style", "top", '32.58%'],
                ["transform", "scaleY", '0.52577'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '-0.33617'],
                ["style", "height", '10.28%'],
                ["style", "left", '-6.76%'],
                ["style", "width", '38.71%']
            ],
            "${_PHR_9}": [
                ["style", "top", '35.53%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'none'],
                ["style", "height", '4.59%'],
                ["style", "left", '3.05%'],
                ["style", "width", '15.83%']
            ],
            "${_PHR_11}": [
                ["style", "top", '33.42%'],
                ["style", "display", 'none'],
                ["transform", "scaleY", '0.52173'],
                ["transform", "rotateZ", '-29deg'],
                ["transform", "scaleX", '0.32758'],
                ["style", "height", '8.07%'],
                ["style", "left", '-10.21%'],
                ["style", "width", '43.87%']
            ],
            "${_b19}": [
                ["style", "display", 'none'],
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["transform", "scaleX", '-1']
            ],
            "${__14}": [
                ["style", "top", '18.68%'],
                ["transform", "scaleX", '-0.99421'],
                ["style", "display", 'none'],
                ["style", "left", '40.09%'],
                ["style", "width", '24.19%']
            ],
            "${_PHR_7}": [
                ["transform", "rotateZ", '-55deg'],
                ["transform", "scaleX", '0.32955'],
                ["style", "left", '-3.17%'],
                ["style", "width", '30.06%'],
                ["style", "top", '33.68%'],
                ["transform", "scaleY", '0.62797'],
                ["style", "height", '8.68%'],
                ["style", "display", 'none'],
                ["transform", "skewY", '0deg']
            ],
            "${_PHR_1}": [
                ["style", "top", '35%'],
                ["style", "display", 'none'],
                ["style", "height", '5.53%'],
                ["style", "opacity", '0.6666666865348816'],
                ["style", "left", '0%'],
                ["style", "width", '22.65%']
            ],
            "${_b18}": [
                ["style", "display", 'block'],
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["transform", "scaleX", '-1']
            ],
            "${_PHR_13}": [
                ["style", "top", '34.53%'],
                ["style", "height", '4.74%'],
                ["style", "display", 'none'],
                ["style", "left", '3.77%'],
                ["style", "width", '18.87%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 647,
            autoPlay: true,
            timeline: [
                { id: "eid2867", tween: [ "style", "${_PHR_12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3715", tween: [ "style", "${_PHR_2}", "left", '1.89%', { fromValue: '1.89%'}], position: 0, duration: 0 },
                { id: "eid3792", tween: [ "style", "${_PHR_15}", "height", '7.04%', { fromValue: '7.04%'}], position: 0, duration: 0 },
                { id: "eid3762", tween: [ "style", "${_PHR_9}", "height", '4.59%', { fromValue: '4.59%'}], position: 0, duration: 0 },
                { id: "eid2870", tween: [ "style", "${_PHR_15}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3782", tween: [ "style", "${_PHR_11}", "top", '33.42%', { fromValue: '33.42%'}], position: 0, duration: 0 },
                { id: "eid3744", tween: [ "style", "${_PHR_5}", "top", '32.58%', { fromValue: '32.58%'}], position: 0, duration: 0 },
                { id: "eid3795", tween: [ "style", "${_PHR_15}", "width", '67.9%', { fromValue: '67.9%'}], position: 0, duration: 0 },
                { id: "eid3725", tween: [ "style", "${_PHR_3}", "width", '23.01%', { fromValue: '23.01%'}], position: 0, duration: 0 },
                { id: "eid3793", tween: [ "style", "${_PHR_15}", "top", '33.87%', { fromValue: '33.87%'}], position: 0, duration: 0 },
                { id: "eid3735", tween: [ "style", "${_PHR_4}", "left", '5.75%', { fromValue: '5.75%'}], position: 0, duration: 0 },
                { id: "eid2858", tween: [ "style", "${_PHR_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3768", tween: [ "style", "${_PHR_10}", "width", '37.68%', { fromValue: '37.68%'}], position: 0, duration: 0 },
                { id: "eid3751", tween: [ "style", "${_PHR_7}", "height", '8.68%', { fromValue: '8.68%'}], position: 0, duration: 0 },
                { id: "eid3714", tween: [ "style", "${_PHR_2}", "top", '34.47%', { fromValue: '34.47%'}], position: 0, duration: 0 },
                { id: "eid3791", tween: [ "style", "${_PHR_14}", "left", '8.49%', { fromValue: '8.49%'}], position: 0, duration: 0 },
                { id: "eid3746", tween: [ "style", "${_PHR_6}", "width", '9.91%', { fromValue: '9.91%'}], position: 0, duration: 0 },
                { id: "eid2865", tween: [ "style", "${_PHR_10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2860", tween: [ "style", "${_PHR_5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3767", tween: [ "style", "${_PHR_10}", "left", '-7.37%', { fromValue: '-7.37%'}], position: 0, duration: 0 },
                { id: "eid3757", tween: [ "style", "${_PHR_8}", "height", '10.54%', { fromValue: '10.54%'}], position: 0, duration: 0 },
                { id: "eid2868", tween: [ "style", "${_PHR_13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3755", tween: [ "style", "${_PHR_7}", "top", '33.68%', { fromValue: '33.68%'}], position: 0, duration: 0 },
                { id: "eid2855", tween: [ "style", "${_PHR_0}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3108", tween: [ "style", "${_b19}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3112", tween: [ "style", "${_b19}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid3114", tween: [ "style", "${_b19}", "display", 'none', { fromValue: 'block'}], position: 454, duration: 0 },
                { id: "eid3116", tween: [ "style", "${_b19}", "display", 'block', { fromValue: 'none'}], position: 647, duration: 0 },
                { id: "eid3781", tween: [ "style", "${_PHR_11}", "width", '43.87%', { fromValue: '43.87%'}], position: 0, duration: 0 },
                { id: "eid2864", tween: [ "style", "${_PHR_9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3739", tween: [ "style", "${_PHR_5}", "height", '10.28%', { fromValue: '10.28%'}], position: 0, duration: 0 },
                { id: "eid3736", tween: [ "style", "${_PHR_4}", "width", '8.5%', { fromValue: '8.5%'}], position: 0, duration: 0 },
                { id: "eid3765", tween: [ "style", "${_PHR_10}", "height", '8.14%', { fromValue: '8.14%'}], position: 0, duration: 0 },
                { id: "eid3784", tween: [ "style", "${_PHR_12}", "width", '15.57%', { fromValue: '15.57%'}], position: 0, duration: 0 },
                { id: "eid3788", tween: [ "style", "${_PHR_14}", "height", '2.63%', { fromValue: '2.63%'}], position: 0, duration: 0 },
                { id: "eid3759", tween: [ "style", "${_PHR_8}", "left", '-2.69%', { fromValue: '-2.69%'}], position: 0, duration: 0 },
                { id: "eid3710", tween: [ "style", "${_PHR_2}", "height", '5.94%', { fromValue: '5.94%'}], position: 0, duration: 0 },
                { id: "eid3707", tween: [ "style", "${_PHR_1}", "width", '22.65%', { fromValue: '22.65%'}], position: 0, duration: 0 },
                { id: "eid3722", tween: [ "style", "${_PHR_3}", "height", '11.02%', { fromValue: '11.02%'}], position: 0, duration: 0 },
                { id: "eid3743", tween: [ "style", "${_PHR_5}", "left", '-6.76%', { fromValue: '-6.76%'}], position: 0, duration: 0 },
                { id: "eid3712", tween: [ "style", "${_PHR_2}", "width", '18.38%', { fromValue: '18.38%'}], position: 0, duration: 0 },
                { id: "eid3786", tween: [ "style", "${_PHR_13}", "height", '4.74%', { fromValue: '4.74%'}], position: 0, duration: 0 },
                { id: "eid3794", tween: [ "style", "${_PHR_15}", "left", '-22%', { fromValue: '-22%'}], position: 0, duration: 0 },
                { id: "eid3700", tween: [ "style", "${_PHR_0}", "height", '6.05%', { fromValue: '6.05%'}], position: 0, duration: 0 },
                { id: "eid3790", tween: [ "style", "${_PHR_14}", "top", '35.79%', { fromValue: '35.79%'}], position: 0, duration: 0 },
                { id: "eid3766", tween: [ "style", "${_PHR_10}", "top", '32.93%', { fromValue: '32.93%'}], position: 0, duration: 0 },
                { id: "eid515", tween: [ "style", "${__14}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid516", tween: [ "style", "${__14}", "display", 'block', { fromValue: 'none'}], position: 454, duration: 0 },
                { id: "eid517", tween: [ "style", "${__14}", "display", 'none', { fromValue: 'block'}], position: 647, duration: 0 },
                { id: "eid3745", tween: [ "style", "${_PHR_6}", "height", '4.47%', { fromValue: '4.47%'}], position: 0, duration: 0 },
                { id: "eid3742", tween: [ "style", "${_PHR_5}", "width", '38.71%', { fromValue: '38.71%'}], position: 0, duration: 0 },
                { id: "eid3699", tween: [ "style", "${_PHR_0}", "width", '25.48%', { fromValue: '25.48%'}], position: 0, duration: 0 },
                { id: "eid3701", tween: [ "style", "${_PHR_0}", "top", '35%', { fromValue: '35%'}], position: 0, duration: 0 },
                { id: "eid3726", tween: [ "style", "${_PHR_3}", "top", '31.84%', { fromValue: '31.84%'}], position: 0, duration: 0 },
                { id: "eid3783", tween: [ "style", "${_PHR_12}", "height", '4.74%', { fromValue: '4.74%'}], position: 0, duration: 0 },
                { id: "eid3709", tween: [ "style", "${_PHR_1}", "top", '35%', { fromValue: '35%'}], position: 0, duration: 0 },
                { id: "eid2862", tween: [ "style", "${_PHR_7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2866", tween: [ "style", "${_PHR_11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3734", tween: [ "style", "${_PHR_4}", "top", '35.32%', { fromValue: '35.32%'}], position: 0, duration: 0 },
                { id: "eid3727", tween: [ "style", "${_PHR_3}", "left", '-0.47%', { fromValue: '-0.47%'}], position: 0, duration: 0 },
                { id: "eid3785", tween: [ "style", "${_PHR_12}", "left", '3.77%', { fromValue: '3.77%'}], position: 0, duration: 0 },
                { id: "eid3706", tween: [ "style", "${_PHR_1}", "left", '0%', { fromValue: '0%'}], position: 0, duration: 0 },
                { id: "eid3780", tween: [ "style", "${_PHR_11}", "left", '-10.21%', { fromValue: '-10.21%'}], position: 0, duration: 0 },
                { id: "eid3708", tween: [ "style", "${_PHR_1}", "height", '5.53%', { fromValue: '5.53%'}], position: 0, duration: 0 },
                { id: "eid2859", tween: [ "style", "${_PHR_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2861", tween: [ "style", "${_PHR_6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3733", tween: [ "style", "${_PHR_4}", "height", '4.26%', { fromValue: '4.26%'}], position: 0, duration: 0 },
                { id: "eid3789", tween: [ "style", "${_PHR_14}", "width", '5.19%', { fromValue: '5.19%'}], position: 0, duration: 0 },
                { id: "eid2857", tween: [ "style", "${_PHR_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3761", tween: [ "style", "${_PHR_8}", "top", '32.11%', { fromValue: '32.11%'}], position: 0, duration: 0 },
                { id: "eid3778", tween: [ "style", "${_PHR_11}", "height", '8.07%', { fromValue: '8.07%'}], position: 0, duration: 0 },
                { id: "eid3109", tween: [ "style", "${_b18}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3113", tween: [ "style", "${_b18}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
                { id: "eid3115", tween: [ "style", "${_b18}", "display", 'block', { fromValue: 'none'}], position: 454, duration: 0 },
                { id: "eid3117", tween: [ "style", "${_b18}", "display", 'none', { fromValue: 'block'}], position: 647, duration: 0 },
                { id: "eid3787", tween: [ "style", "${_PHR_13}", "width", '18.87%', { fromValue: '18.87%'}], position: 0, duration: 0 },
                { id: "eid3753", tween: [ "style", "${_PHR_7}", "left", '-3.17%', { fromValue: '-3.17%'}], position: 0, duration: 0 },
                { id: "eid3754", tween: [ "style", "${_PHR_7}", "width", '30.06%', { fromValue: '30.06%'}], position: 0, duration: 0 },
                { id: "eid3698", tween: [ "style", "${_PHR_0}", "left", '-1.42%', { fromValue: '-1.42%'}], position: 0, duration: 0 },
                { id: "eid2869", tween: [ "style", "${_PHR_14}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2856", tween: [ "style", "${_PHR_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3763", tween: [ "style", "${_PHR_9}", "width", '15.83%', { fromValue: '15.83%'}], position: 0, duration: 0 },
                { id: "eid3764", tween: [ "style", "${_PHR_9}", "top", '35.53%', { fromValue: '35.53%'}], position: 0, duration: 0 },
                { id: "eid2863", tween: [ "style", "${_PHR_8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3760", tween: [ "style", "${_PHR_8}", "width", '30.48%', { fromValue: '30.48%'}], position: 0, duration: 0 }            ]
        }
    }
},
"back_up_L": {
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
                    id: '_22',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/girl/2.png', '0px', '0px']
                },
                {
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: '_32',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/girl/3.png', '0px', '0px']
                },
                {
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: '_42',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/girl/4.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'plate7',
                    rect: ['-34.9%', '23.7%', '100.5%', '32.2%', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.29149', '0.33016']],
                    fill: ['rgba(0,0,0,0)', 'images/plate.png', '0px', '0px']
                },
                {
                    rect: ['-11.8%', '31.6%', '51.9%', '11.1%', 'auto', 'auto'],
                    id: 'blankimageonplate',
                    fill: ['rgba(0,0,0,0)', 'images/ing/bankimg.png', '0px', '0px'],
                    type: 'image',
                    tag: 'img'
                },
                {
                    rect: ['3.6%', '35.8%', '15.2%', '12.7%', 'auto', 'auto'],
                    id: 'PHLB_0',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/pizza/pizzabase.png', '0px', '0px']
                },
                {
                    rect: ['5.6%', '35.6%', '79.2%', '80.7%', 'auto', 'auto'],
                    type: 'image',
                    id: 'PHLB_1',
                    opacity: 0.66666666666667,
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/pizza/sauceonpizza.png', '0px', '0px']
                },
                {
                    rect: ['9.9%', '35.6%', '14.1%', '12.6%', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['1.15928']],
                    type: 'image',
                    id: 'PHLB_2',
                    opacity: 1,
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/pizza/cheese.png', '0px', '0px']
                },
                {
                    rect: ['-26.2%', '10.3%', '17.8%', '15.9%', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['-0.48937', '0.47916']],
                    id: 'PHLB_3',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/leaves1_On_pizza.png', '0px', '0px']
                },
                {
                    rect: ['-18.5%', '36%', '7.8%', '6.9%', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['-0.96774']],
                    id: 'PHLB_4',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/leave2_on_face.png', '0px', '0px']
                },
                {
                    rect: ['-47%', '16.6%', '29.6%', '16.1%', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['-0.33617', '0.52577']],
                    id: 'PHLB_5',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/red_cutcapsicum_on_face.png', '0px', '0px']
                },
                {
                    rect: ['9.6%', '36.2%', '11.4%', '6.7%', 'auto', 'auto'],
                    id: 'PHLB_6',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/green_cutcaps_on_pizza.png', '0px', '0px']
                },
                {
                    rect: ['8.1%', '6.2%', '28.1%', '17%', 'auto', 'auto'],
                    transform: [[0, 0], ['-55'], ['0', '42'], ['0.32955', '0.62797']],
                    id: 'PHLB_7',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/tomato_on_pizza.png', '0px', '0px']
                },
                {
                    rect: ['-12%', '-22.8%', '29.1%', '19.9%', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.41991', '-0.51261']],
                    id: 'PHLB_8',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/olive_on_pizza.png', '0px', '0px']
                },
                {
                    rect: ['8.2%', '36.5%', '7.9%', '5.6%', 'auto', 'auto'],
                    id: 'PHLB_9',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/ham_on_pizza.png', '0px', '0px']
                },
                {
                    rect: ['-22.4%', '18.2%', '18.2%', '12.2%', 'auto', 'auto'],
                    borderRadius: ['0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px'],
                    transform: [[0, 0], [], [], ['0.40987', '0.54054']],
                    id: 'PHLB_10',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/mushroom_on_pizza.png', '0px', '0px']
                },
                {
                    rect: ['-9.1%', '10.9%', '29.1%', '15.3%', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.32758', '0.52173']],
                    id: 'PHLB_11',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/stick_on_pizza.png', '0px', '0px']
                },
                {
                    rect: ['11.1%', '36%', '61.8%', '70.7%', 'auto', 'auto'],
                    id: 'PHLB_12',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/chiliflakes/chili_on_pizza.png', '0px', '0px']
                },
                {
                    rect: ['9%', '35.8%', '61%', '72%', 'auto', 'auto'],
                    id: 'PHLB_13',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/chiliflakes/oregano_on_pizza.png', '0px', '0px']
                },
                {
                    rect: ['14.4%', '37%', '3.3%', '4.3%', 'auto', 'auto'],
                    id: 'PHLB_14',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/tunna/tuna1%5D.png', '0px', '0px']
                },
                {
                    rect: ['-62.2%', '29.4%', '30.6%', '12.2%', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.28163', '0.75342']],
                    id: 'PHLB_15',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/shrimp.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${__32}": [
                ["transform", "scaleX", '-1'],
                ["style", "display", 'none'],
                ["style", "left", '0%'],
                ["style", "top", '0%']
            ],
            "${_PHLB_3}": [
                ["style", "top", '35%'],
                ["transform", "scaleY", '0.47916'],
                ["transform", "scaleX", '-0.48937'],
                ["style", "display", 'none'],
                ["style", "height", '9.16%'],
                ["style", "left", '5.21%'],
                ["style", "width", '18.51%']
            ],
            "${__22}": [
                ["style", "top", '0%'],
                ["transform", "scaleX", '-1'],
                ["style", "height", '100.3%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${_PHLB_12}": [
                ["style", "top", '36.84%'],
                ["style", "display", 'none'],
                ["style", "height", '5.22%'],
                ["style", "left", '5.19%'],
                ["style", "width", '14.6%']
            ],
            "${_PHLB_6}": [
                ["style", "top", '36.58%'],
                ["style", "display", 'none'],
                ["style", "height", '5.22%'],
                ["style", "left", '5.66%'],
                ["style", "width", '14.6%']
            ],
            "${_PHLB_0}": [
                ["style", "top", '35.79%'],
                ["style", "display", 'none'],
                ["style", "height", '7.89%'],
                ["style", "left", '4.25%'],
                ["style", "width", '22.17%']
            ],
            "${_PHLB_8}": [
                ["style", "top", '34.31%'],
                ["transform", "scaleY", '-0.51261'],
                ["transform", "scaleX", '0.41991'],
                ["style", "display", 'none'],
                ["style", "height", '10.18%'],
                ["style", "left", '-2.11%'],
                ["style", "width", '34.77%']
            ],
            "${_PHLB_10}": [
                ["style", "border-top-left-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.40987'],
                ["style", "left", '-1.99%'],
                ["style", "width", '35.62%'],
                ["style", "top", '34.24%'],
                ["style", "border-bottom-left-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '0.54054'],
                ["style", "height", '9.65%'],
                ["style", "border-top-right-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "display", 'none']
            ],
            "${_PHLB_9}": [
                ["style", "top", '37.11%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '5.22%'],
                ["style", "display", 'none'],
                ["style", "left", '8.24%'],
                ["style", "width", '14.6%']
            ],
            "${_plate7}": [
                ["style", "top", '23.68%'],
                ["transform", "scaleY", '0.33016'],
                ["transform", "scaleX", '0.29149'],
                ["style", "height", '32.24%'],
                ["style", "left", '-34.91%'],
                ["style", "width", '100.48%']
            ],
            "${_PHLB_11}": [
                ["style", "top", '34.47%'],
                ["transform", "scaleX", '0.32758'],
                ["transform", "scaleY", '0.52173'],
                ["transform", "rotateZ", '-29deg'],
                ["style", "display", 'none'],
                ["style", "height", '10%'],
                ["style", "left", '-8.49%'],
                ["style", "width", '44.57%']
            ],
            "${_PHLB_7}": [
                ["transform", "rotateZ", '-55deg'],
                ["transform", "scaleX", '0.32955'],
                ["style", "left", '1.42%'],
                ["style", "width", '27.32%'],
                ["style", "top", '35.53%'],
                ["transform", "scaleY", '0.62797'],
                ["style", "height", '8.16%'],
                ["transform", "skewY", '0deg'],
                ["style", "display", 'none']
            ],
            "${__42}": [
                ["transform", "scaleX", '-1'],
                ["style", "display", 'none'],
                ["style", "left", '0%'],
                ["style", "top", '0%']
            ],
            "${symbolSelector}": [
                ["style", "height", '110.14%'],
                ["style", "width", '146.21%']
            ],
            "${_PHLB_14}": [
                ["style", "top", '37.89%'],
                ["style", "display", 'none'],
                ["style", "height", '2.11%'],
                ["style", "left", '12.26%'],
                ["style", "width", '3.78%']
            ],
            "${_PHLB_1}": [
                ["style", "top", '36.05%'],
                ["style", "display", 'none'],
                ["style", "height", '7.11%'],
                ["style", "opacity", '0.6666666865348816'],
                ["style", "left", '5.19%'],
                ["style", "width", '20.29%']
            ],
            "${_PHLB_15}": [
                ["style", "top", '35.48%'],
                ["transform", "scaleY", '0.75342'],
                ["transform", "scaleX", '0.28163'],
                ["style", "display", 'none'],
                ["style", "height", '6.93%'],
                ["style", "left", '-11.31%'],
                ["style", "width", '51.84%']
            ],
            "${_PHLB_4}": [
                ["style", "top", '37.89%'],
                ["transform", "scaleX", '-0.96774'],
                ["style", "height", '3.95%'],
                ["style", "display", 'none'],
                ["style", "left", '9.03%'],
                ["style", "width", '13.39%']
            ],
            "${_blankimageonplate}": [
                ["style", "height", '11.05%'],
                ["style", "top", '31.58%'],
                ["style", "left", '-11.79%'],
                ["style", "width", '51.85%']
            ],
            "${_PHLB_5}": [
                ["style", "top", '34.16%'],
                ["transform", "scaleY", '0.52577'],
                ["transform", "scaleX", '-0.33617'],
                ["style", "display", 'none'],
                ["style", "height", '9.93%'],
                ["style", "left", '-5.4%'],
                ["style", "width", '43.43%']
            ],
            "${_PHLB_2}": [
                ["style", "top", '36.05%'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '1.15928'],
                ["style", "height", '7.1%'],
                ["style", "opacity", '1'],
                ["style", "left", '6.29%'],
                ["style", "width", '17.93%']
            ],
            "${_PHLB_13}": [
                ["style", "top", '36.58%'],
                ["style", "display", 'none'],
                ["style", "height", '5.22%'],
                ["style", "left", '10.38%'],
                ["style", "width", '14.6%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 402,
            autoPlay: true,
            timeline: [
                { id: "eid4050", tween: [ "style", "${_PHLB_0}", "width", '22.17%', { fromValue: '22.17%'}], position: 0, duration: 0 },
                { id: "eid4120", tween: [ "style", "${_PHLB_9}", "top", '37.11%', { fromValue: '37.11%'}], position: 0, duration: 0 },
                { id: "eid4023", tween: [ "style", "${_PHLB_10}", "top", '34.24%', { fromValue: '34.24%'}], position: 0, duration: 0 },
                { id: "eid4106", tween: [ "style", "${_PHLB_7}", "left", '1.42%', { fromValue: '1.42%'}], position: 0, duration: 0 },
                { id: "eid4002", tween: [ "style", "${_PHLB_15}", "height", '6.93%', { fromValue: '6.93%'}], position: 0, duration: 0 },
                { id: "eid4016", tween: [ "style", "${_PHLB_13}", "width", '14.6%', { fromValue: '14.6%'}], position: 0, duration: 0 },
                { id: "eid4123", tween: [ "style", "${_PHLB_12}", "left", '5.19%', { fromValue: '5.19%'}], position: 0, duration: 0 },
                { id: "eid3518", tween: [ "style", "${__42}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid355", tween: [ "style", "${__42}", "display", 'block', { fromValue: 'none'}], position: 402, duration: 0 },
                { id: "eid4088", tween: [ "style", "${_PHLB_0}", "height", '7.89%', { fromValue: '7.89%'}], position: 0, duration: 0 },
                { id: "eid4080", tween: [ "style", "${_PHLB_4}", "height", '3.95%', { fromValue: '3.95%'}], position: 0, duration: 0 },
                { id: "eid4001", tween: [ "style", "${_PHLB_15}", "top", '35.48%', { fromValue: '35.48%'}], position: 0, duration: 0 },
                { id: "eid3245", tween: [ "style", "${_PHLB_8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid4015", tween: [ "style", "${_PHLB_13}", "height", '5.22%', { fromValue: '5.22%'}], position: 0, duration: 0 },
                { id: "eid4026", tween: [ "style", "${_PHLB_10}", "width", '35.62%', { fromValue: '35.62%'}], position: 0, duration: 0 },
                { id: "eid3242", tween: [ "style", "${_PHLB_11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3249", tween: [ "style", "${_PHLB_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid4098", tween: [ "style", "${_PHLB_2}", "height", '7.1%', { fromValue: '7.1%'}], position: 0, duration: 0 },
                { id: "eid4074", tween: [ "style", "${_PHLB_3}", "top", '35%', { fromValue: '35%'}], position: 0, duration: 0 },
                { id: "eid4094", tween: [ "style", "${_PHLB_1}", "top", '36.05%', { fromValue: '36.05%'}], position: 0, duration: 0 },
                { id: "eid4004", tween: [ "style", "${_PHLB_15}", "width", '51.84%', { fromValue: '51.84%'}], position: 0, duration: 0 },
                { id: "eid4014", tween: [ "style", "${_PHLB_5}", "width", '43.43%', { fromValue: '43.43%'}], position: 0, duration: 0 },
                { id: "eid4072", tween: [ "style", "${_PHLB_3}", "left", '5.21%', { fromValue: '5.21%'}], position: 0, duration: 0 },
                { id: "eid4124", tween: [ "style", "${_PHLB_12}", "top", '36.84%', { fromValue: '36.84%'}], position: 0, duration: 0 },
                { id: "eid4082", tween: [ "style", "${_PHLB_4}", "width", '13.39%', { fromValue: '13.39%'}], position: 0, duration: 0 },
                { id: "eid4107", tween: [ "style", "${_PHLB_7}", "top", '35.53%', { fromValue: '35.53%'}], position: 0, duration: 0 },
                { id: "eid3239", tween: [ "style", "${_PHLB_14}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid4073", tween: [ "style", "${_PHLB_3}", "width", '18.51%', { fromValue: '18.51%'}], position: 0, duration: 0 },
                { id: "eid4101", tween: [ "style", "${_PHLB_6}", "top", '36.58%', { fromValue: '36.58%'}], position: 0, duration: 0 },
                { id: "eid3244", tween: [ "style", "${_PHLB_9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid4100", tween: [ "style", "${_PHLB_6}", "left", '5.66%', { fromValue: '5.66%'}], position: 0, duration: 0 },
                { id: "eid4052", tween: [ "style", "${_PHLB_0}", "left", '4.25%', { fromValue: '4.25%'}], position: 0, duration: 0 },
                { id: "eid4119", tween: [ "style", "${_PHLB_8}", "left", '-2.11%', { fromValue: '-2.11%'}], position: 0, duration: 0 },
                { id: "eid4066", tween: [ "style", "${_PHLB_2}", "left", '6.29%', { fromValue: '6.29%'}], position: 0, duration: 0 },
                { id: "eid4027", tween: [ "style", "${_PHLB_6}", "height", '5.22%', { fromValue: '5.22%'}], position: 0, duration: 0 },
                { id: "eid4122", tween: [ "style", "${_PHLB_11}", "top", '34.47%', { fromValue: '34.47%'}], position: 0, duration: 0 },
                { id: "eid4029", tween: [ "style", "${_PHLB_9}", "height", '5.22%', { fromValue: '5.22%'}], position: 0, duration: 0 },
                { id: "eid4030", tween: [ "style", "${_PHLB_9}", "width", '14.6%', { fromValue: '14.6%'}], position: 0, duration: 0 },
                { id: "eid4017", tween: [ "style", "${_PHLB_12}", "height", '5.22%', { fromValue: '5.22%'}], position: 0, duration: 0 },
                { id: "eid4039", tween: [ "style", "${_PHLB_8}", "height", '10.18%', { fromValue: '10.18%'}], position: 0, duration: 0 },
                { id: "eid3248", tween: [ "style", "${_PHLB_5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid4084", tween: [ "style", "${_PHLB_5}", "left", '-5.4%', { fromValue: '-5.4%'}], position: 0, duration: 0 },
                { id: "eid4121", tween: [ "style", "${_PHLB_11}", "left", '-8.49%', { fromValue: '-8.49%'}], position: 0, duration: 0 },
                { id: "eid4025", tween: [ "style", "${_PHLB_10}", "left", '-1.99%', { fromValue: '-1.99%'}], position: 0, duration: 0 },
                { id: "eid4041", tween: [ "style", "${_PHLB_8}", "width", '34.77%', { fromValue: '34.77%'}], position: 0, duration: 0 },
                { id: "eid4070", tween: [ "style", "${_PHLB_3}", "height", '9.16%', { fromValue: '9.16%'}], position: 0, duration: 0 },
                { id: "eid4102", tween: [ "style", "${_PHLB_7}", "height", '8.16%', { fromValue: '8.16%'}], position: 0, duration: 0 },
                { id: "eid4057", tween: [ "style", "${_PHLB_1}", "left", '5.19%', { fromValue: '5.19%'}], position: 0, duration: 0 },
                { id: "eid4099", tween: [ "style", "${_PHLB_2}", "top", '36.05%', { fromValue: '36.05%'}], position: 0, duration: 0 },
                { id: "eid4089", tween: [ "style", "${_PHLB_0}", "top", '35.79%', { fromValue: '35.79%'}], position: 0, duration: 0 },
                { id: "eid3240", tween: [ "style", "${_PHLB_13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3241", tween: [ "style", "${_PHLB_12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3253", tween: [ "style", "${_PHLB_0}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid4125", tween: [ "style", "${_PHLB_13}", "left", '10.38%', { fromValue: '10.38%'}], position: 0, duration: 0 },
                { id: "eid4130", tween: [ "style", "${_PHLB_14}", "top", '37.89%', { fromValue: '37.89%'}], position: 0, duration: 0 },
                { id: "eid4067", tween: [ "style", "${_PHLB_2}", "width", '17.93%', { fromValue: '17.93%'}], position: 0, duration: 0 },
                { id: "eid3243", tween: [ "style", "${_PHLB_10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid4093", tween: [ "style", "${_PHLB_1}", "height", '7.11%', { fromValue: '7.11%'}], position: 0, duration: 0 },
                { id: "eid3246", tween: [ "style", "${_PHLB_7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid4018", tween: [ "style", "${_PHLB_12}", "width", '14.6%', { fromValue: '14.6%'}], position: 0, duration: 0 },
                { id: "eid4020", tween: [ "style", "${_PHLB_11}", "height", '10%', { fromValue: '10%'}], position: 0, duration: 0 },
                { id: "eid4012", tween: [ "style", "${_PHLB_5}", "height", '9.93%', { fromValue: '9.93%'}], position: 0, duration: 0 },
                { id: "eid4024", tween: [ "style", "${_PHLB_10}", "height", '9.65%', { fromValue: '9.65%'}], position: 0, duration: 0 },
                { id: "eid4129", tween: [ "style", "${_PHLB_14}", "left", '12.26%', { fromValue: '12.26%'}], position: 0, duration: 0 },
                { id: "eid4128", tween: [ "style", "${_PHLB_14}", "width", '3.78%', { fromValue: '3.78%'}], position: 0, duration: 0 },
                { id: "eid4054", tween: [ "style", "${_PHLB_1}", "width", '20.29%', { fromValue: '20.29%'}], position: 0, duration: 0 },
                { id: "eid3520", tween: [ "style", "${__22}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3521", tween: [ "style", "${__22}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
                { id: "eid4003", tween: [ "style", "${_PHLB_15}", "left", '-11.31%', { fromValue: '-11.31%'}], position: 0, duration: 0 },
                { id: "eid4081", tween: [ "style", "${_PHLB_4}", "left", '9.03%', { fromValue: '9.03%'}], position: 0, duration: 0 },
                { id: "eid3238", tween: [ "style", "${_PHLB_15}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3252", tween: [ "style", "${_PHLB_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid4028", tween: [ "style", "${_PHLB_6}", "width", '14.6%', { fromValue: '14.6%'}], position: 0, duration: 0 },
                { id: "eid4127", tween: [ "style", "${_PHLB_14}", "height", '2.11%', { fromValue: '2.11%'}], position: 0, duration: 0 },
                { id: "eid4022", tween: [ "style", "${_PHLB_11}", "width", '44.57%', { fromValue: '44.57%'}], position: 0, duration: 0 },
                { id: "eid4118", tween: [ "style", "${_PHLB_8}", "top", '34.31%', { fromValue: '34.31%'}], position: 0, duration: 0 },
                { id: "eid3247", tween: [ "style", "${_PHLB_6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid4126", tween: [ "style", "${_PHLB_13}", "top", '36.58%', { fromValue: '36.58%'}], position: 0, duration: 0 },
                { id: "eid4083", tween: [ "style", "${_PHLB_4}", "top", '37.89%', { fromValue: '37.89%'}], position: 0, duration: 0 },
                { id: "eid3251", tween: [ "style", "${_PHLB_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3250", tween: [ "style", "${_PHLB_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid4011", tween: [ "style", "${_PHLB_5}", "top", '34.16%', { fromValue: '34.16%'}], position: 0, duration: 0 },
                { id: "eid3519", tween: [ "style", "${__32}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3522", tween: [ "style", "${__32}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid354", tween: [ "style", "${__32}", "display", 'none', { fromValue: 'block'}], position: 402, duration: 0 },
                { id: "eid4105", tween: [ "style", "${_PHLB_7}", "width", '27.32%', { fromValue: '27.32%'}], position: 0, duration: 0 }            ]
        }
    }
},
"back_up_W": {
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
                    rect: ['0.1%', '0.1%', '100%', '100%', 'auto', 'auto'],
                    id: 'b5',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/girl/5.png', '0px', '0px']
                },
                {
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'b6',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/girl/6.png', '0px', '0px']
                },
                {
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'b7',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/girl/7.png', '0px', '0px']
                },
                {
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'b8',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/girl/8.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_b8}": [
                ["style", "top", '-0.01%'],
                ["style", "left", '0%'],
                ["style", "display", 'none']
            ],
            "${_b6}": [
                ["style", "top", '-0.01%'],
                ["style", "left", '0%'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '110.14%'],
                ["style", "width", '146.21%']
            ],
            "${_b7}": [
                ["style", "top", '-0.01%'],
                ["style", "left", '0%'],
                ["style", "display", 'none']
            ],
            "${_b5}": [
                ["style", "top", '0.09%'],
                ["style", "left", '0.12%'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 403,
            autoPlay: true,
            timeline: [
                { id: "eid3025", tween: [ "style", "${_b6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3028", tween: [ "style", "${_b6}", "display", 'block', { fromValue: 'none'}], position: 121, duration: 0 },
                { id: "eid3031", tween: [ "style", "${_b6}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
                { id: "eid3026", tween: [ "style", "${_b7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3030", tween: [ "style", "${_b7}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid3033", tween: [ "style", "${_b7}", "display", 'none', { fromValue: 'block'}], position: 403, duration: 0 },
                { id: "eid3029", tween: [ "style", "${_b5}", "display", 'none', { fromValue: 'block'}], position: 121, duration: 0 },
                { id: "eid3027", tween: [ "style", "${_b8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3032", tween: [ "style", "${_b8}", "display", 'block', { fromValue: 'none'}], position: 403, duration: 0 }            ]
        }
    }
},
"back_up_R": {
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
                    id: '_22',
                    fill: ['rgba(0,0,0,0)', 'images/girl/2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: '_32',
                    fill: ['rgba(0,0,0,0)', 'images/girl/3.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: '_42',
                    fill: ['rgba(0,0,0,0)', 'images/girl/4.png', '0px', '0px']
                },
                {
                    rect: ['24.1%', '18.2%', '121.7%', '41.1%', 'auto', 'auto'],
                    id: 'plate8',
                    transform: [[0, 0], [], [], ['0.26356', '0.25965']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/plate.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'blankimageonplate',
                    tag: 'img',
                    rect: ['54.3%', '28.3%', '57.9%', '14%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ing/bankimg.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['72.4%', '34.8%', '15.2%', '12.7%', 'auto', 'auto'],
                    id: 'PHRB_0',
                    fill: ['rgba(0,0,0,0)', 'images/pizza/pizzabase.png', '0px', '0px']
                },
                {
                    type: 'image',
                    rect: ['74.4%', '34.6%', '79.2%', '80.7%', 'auto', 'auto'],
                    id: 'PHRB_1',
                    opacity: 0.66666666666667,
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/pizza/sauceonpizza.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['1.15928']],
                    type: 'image',
                    display: 'none',
                    id: 'PHRB_2',
                    opacity: 1,
                    rect: ['78.7%', '34.6%', '14.1%', '12.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pizza/cheese.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['-0.48937', '0.47916']],
                    type: 'image',
                    id: 'PHRB_3',
                    display: 'none',
                    rect: ['42.7%', '9.3%', '17.8%', '15.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/leaves1_On_pizza.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['-0.96774']],
                    type: 'image',
                    id: 'PHRB_4',
                    display: 'none',
                    rect: ['50.4%', '35%', '7.8%', '6.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/leave2_on_face.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['-0.33617', '0.52577']],
                    type: 'image',
                    id: 'PHRB_5',
                    display: 'none',
                    rect: ['21.8%', '15.5%', '29.6%', '16.1%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/red_cutcapsicum_on_face.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['78.4%', '35.2%', '11.4%', '6.7%', 'auto', 'auto'],
                    id: 'PHRB_6',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/green_cutcaps_on_pizza.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['-55'], ['0', '42'], ['0.32955', '0.62797']],
                    type: 'image',
                    id: 'PHRB_7',
                    display: 'none',
                    rect: ['77%', '5.2%', '28.1%', '17%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/tomato_on_pizza.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.41991', '-0.51261']],
                    type: 'image',
                    id: 'PHRB_8',
                    display: 'none',
                    rect: ['56.9%', '-23.8%', '29.1%', '19.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/olive_on_pizza.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['77.1%', '35.4%', '7.9%', '5.6%', 'auto', 'auto'],
                    id: 'PHRB_9',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/ham_on_pizza.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.40987', '0.54054']],
                    borderRadius: ['0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px'],
                    rect: ['46.5%', '17.2%', '18.2%', '12.2%', 'auto', 'auto'],
                    id: 'PHRB_10',
                    display: 'none',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/mushroom_on_pizza.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.32758', '0.52173']],
                    type: 'image',
                    id: 'PHRB_11',
                    display: 'none',
                    rect: ['59.8%', '9.8%', '29.1%', '15.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/stick_on_pizza.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['80%', '35%', '61.8%', '70.7%', 'auto', 'auto'],
                    id: 'PHRB_12',
                    fill: ['rgba(0,0,0,0)', 'images/chiliflakes/chili_on_pizza.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['77.8%', '34.8%', '61%', '72%', 'auto', 'auto'],
                    id: 'PHRB_13',
                    fill: ['rgba(0,0,0,0)', 'images/chiliflakes/oregano_on_pizza.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['83.2%', '35.9%', '3.3%', '4.3%', 'auto', 'auto'],
                    id: 'PHRB_14',
                    fill: ['rgba(0,0,0,0)', 'images/tunna/tuna1%5D.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.28163', '0.75342']],
                    type: 'image',
                    id: 'PHRB_15',
                    display: 'none',
                    rect: ['6.7%', '28.4%', '30.6%', '12.2%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/shrimp.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${__32}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'none']
            ],
            "${_blankimageonplate}": [
                ["style", "height", '13.95%'],
                ["style", "top", '28.32%'],
                ["style", "left", '54.25%'],
                ["style", "width", '57.87%']
            ],
            "${__22}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${_PHRB_1}": [
                ["style", "top", '34.74%'],
                ["style", "display", 'none'],
                ["style", "height", '7.11%'],
                ["style", "opacity", '0.6666666865348816'],
                ["style", "left", '72.64%'],
                ["style", "width", '23.59%']
            ],
            "${_PHRB_15}": [
                ["style", "top", '33.95%'],
                ["transform", "scaleY", '0.75342'],
                ["transform", "scaleX", '0.28163'],
                ["style", "display", 'none'],
                ["style", "height", '7.69%'],
                ["style", "left", '56.43%'],
                ["style", "width", '56.18%']
            ],
            "${_PHRB_4}": [
                ["style", "top", '36.1%'],
                ["style", "height", '4.52%'],
                ["transform", "scaleX", '-0.96774'],
                ["style", "display", 'none'],
                ["style", "left", '75.07%'],
                ["style", "width", '18%']
            ],
            "${_PHRB_8}": [
                ["style", "top", '32.11%'],
                ["transform", "scaleY", '-0.51261'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '0.41991'],
                ["style", "height", '10.85%'],
                ["style", "left", '72.17%'],
                ["style", "width", '24.34%']
            ],
            "${symbolSelector}": [
                ["style", "height", '110.14%'],
                ["style", "width", '146.21%']
            ],
            "${_plate8}": [
                ["style", "top", '18.16%'],
                ["transform", "scaleY", '0.25965'],
                ["transform", "scaleX", '0.26356'],
                ["style", "left", '24.06%'],
                ["style", "height", '41.11%']
            ],
            "${_PHRB_11}": [
                ["style", "top", '33.68%'],
                ["style", "display", 'none'],
                ["transform", "scaleY", '0.52173'],
                ["transform", "rotateZ", '-29deg'],
                ["transform", "scaleX", '0.32758'],
                ["style", "height", '8.44%'],
                ["style", "left", '61.79%'],
                ["style", "width", '44.08%']
            ],
            "${_PHRB_14}": [
                ["style", "top", '36.84%'],
                ["style", "display", 'none'],
                ["style", "height", '2.89%'],
                ["style", "left", '81.6%'],
                ["style", "width", '5.19%']
            ],
            "${_PHRB_7}": [
                ["transform", "rotateZ", '-55deg'],
                ["transform", "scaleX", '0.32955'],
                ["style", "left", '70.28%'],
                ["style", "width", '28.89%'],
                ["style", "top", '33.68%'],
                ["transform", "scaleY", '0.62797'],
                ["style", "height", '9%'],
                ["transform", "skewY", '0deg'],
                ["style", "display", 'none']
            ],
            "${_PHRB_5}": [
                ["style", "top", '33.16%'],
                ["transform", "scaleY", '0.52577'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '-0.33617'],
                ["style", "height", '9.75%'],
                ["style", "left", '65.1%'],
                ["style", "width", '39.31%']
            ],
            "${__42}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'none']
            ],
            "${_PHRB_13}": [
                ["style", "top", '35.26%'],
                ["style", "height", '5.26%'],
                ["style", "display", 'none'],
                ["style", "left", '76.89%'],
                ["style", "width", '17.93%']
            ],
            "${_PHRB_3}": [
                ["style", "top", '33.16%'],
                ["transform", "scaleY", '0.47916'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '-0.48937'],
                ["style", "height", '8.8%'],
                ["style", "left", '73.11%'],
                ["style", "width", '22.28%']
            ],
            "${_PHRB_2}": [
                ["style", "top", '34.74%'],
                ["transform", "scaleX", '1.15928'],
                ["style", "display", 'none'],
                ["style", "height", '6.73%'],
                ["style", "opacity", '1'],
                ["style", "left", '74.06%'],
                ["style", "width", '20.41%']
            ],
            "${_PHRB_12}": [
                ["style", "top", '35.53%'],
                ["style", "height", '5.53%'],
                ["style", "display", 'none'],
                ["style", "left", '79.98%'],
                ["style", "width", '9.44%']
            ],
            "${_PHRB_9}": [
                ["style", "top", '35.42%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'none'],
                ["style", "height", '4.06%'],
                ["style", "left", '77.11%'],
                ["style", "width", '12.52%']
            ],
            "${_PHRB_0}": [
                ["style", "top", '34.79%'],
                ["style", "height", '7.63%'],
                ["style", "display", 'none'],
                ["style", "left", '71.7%'],
                ["style", "width", '25.48%']
            ],
            "${_PHRB_6}": [
                ["style", "top", '35.19%'],
                ["style", "height", '4.74%'],
                ["style", "display", 'none'],
                ["style", "left", '78.45%'],
                ["style", "width", '9.44%']
            ],
            "${_PHRB_10}": [
                ["style", "border-top-left-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.40987'],
                ["style", "left", '70.58%'],
                ["style", "width", '25.02%'],
                ["style", "top", '33.41%'],
                ["style", "border-bottom-left-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '0.54054'],
                ["style", "height", '8.54%'],
                ["style", "border-top-right-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 423,
            autoPlay: true,
            timeline: [
                { id: "eid3342", tween: [ "style", "${_PHRB_4}", "width", '18%', { fromValue: '18%'}], position: 0, duration: 0 },
                { id: "eid3390", tween: [ "style", "${_PHRB_13}", "top", '35.26%', { fromValue: '35.26%'}], position: 0, duration: 0 },
                { id: "eid3167", tween: [ "style", "${_PHRB_9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3392", tween: [ "style", "${_PHRB_14}", "height", '2.89%', { fromValue: '2.89%'}], position: 0, duration: 0 },
                { id: "eid3162", tween: [ "style", "${_PHRB_14}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3302", tween: [ "style", "${_PHRB_0}", "height", '7.63%', { fromValue: '7.63%'}], position: 0, duration: 0 },
                { id: "eid3386", tween: [ "style", "${_PHRB_13}", "height", '5.26%', { fromValue: '5.26%'}], position: 0, duration: 0 },
                { id: "eid3357", tween: [ "style", "${_PHRB_7}", "width", '28.89%', { fromValue: '28.89%'}], position: 0, duration: 0 },
                { id: "eid3351", tween: [ "style", "${_PHRB_5}", "top", '33.16%', { fromValue: '33.16%'}], position: 0, duration: 0 },
                { id: "eid3391", tween: [ "style", "${_PHRB_13}", "left", '76.89%', { fromValue: '76.89%'}], position: 0, duration: 0 },
                { id: "eid3393", tween: [ "style", "${_PHRB_14}", "width", '5.19%', { fromValue: '5.19%'}], position: 0, duration: 0 },
                { id: "eid3305", tween: [ "style", "${_PHRB_0}", "left", '71.7%', { fromValue: '71.7%'}], position: 0, duration: 0 },
                { id: "eid3380", tween: [ "style", "${_PHRB_11}", "top", '33.68%', { fromValue: '33.68%'}], position: 0, duration: 0 },
                { id: "eid3374", tween: [ "style", "${_PHRB_10}", "width", '25.02%', { fromValue: '25.02%'}], position: 0, duration: 0 },
                { id: "eid3311", tween: [ "style", "${_PHRB_1}", "top", '34.74%', { fromValue: '34.74%'}], position: 0, duration: 0 },
                { id: "eid3381", tween: [ "style", "${_PHRB_12}", "height", '5.53%', { fromValue: '5.53%'}], position: 0, duration: 0 },
                { id: "eid3338", tween: [ "style", "${_PHRB_3}", "left", '73.11%', { fromValue: '73.11%'}], position: 0, duration: 0 },
                { id: "eid3170", tween: [ "style", "${_PHRB_6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3368", tween: [ "style", "${_PHRB_8}", "top", '32.11%', { fromValue: '32.11%'}], position: 0, duration: 0 },
                { id: "eid3335", tween: [ "style", "${_PHRB_3}", "height", '8.8%', { fromValue: '8.8%'}], position: 0, duration: 0 },
                { id: "eid3314", tween: [ "style", "${_PHRB_2}", "width", '20.41%', { fromValue: '20.41%'}], position: 0, duration: 0 },
                { id: "eid3383", tween: [ "style", "${_PHRB_12}", "width", '9.44%', { fromValue: '9.44%'}], position: 0, duration: 0 },
                { id: "eid3353", tween: [ "style", "${_PHRB_6}", "width", '9.44%', { fromValue: '9.44%'}], position: 0, duration: 0 },
                { id: "eid3316", tween: [ "style", "${_PHRB_2}", "top", '34.74%', { fromValue: '34.74%'}], position: 0, duration: 0 },
                { id: "eid3395", tween: [ "style", "${_PHRB_14}", "top", '36.84%', { fromValue: '36.84%'}], position: 0, duration: 0 },
                { id: "eid3165", tween: [ "style", "${_PHRB_11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3352", tween: [ "style", "${_PHRB_6}", "height", '4.74%', { fromValue: '4.74%'}], position: 0, duration: 0 },
                { id: "eid3173", tween: [ "style", "${_PHRB_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3366", tween: [ "style", "${_PHRB_8}", "width", '24.34%', { fromValue: '24.34%'}], position: 0, duration: 0 },
                { id: "eid3176", tween: [ "style", "${_PHRB_0}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3399", tween: [ "style", "${_PHRB_15}", "width", '56.18%', { fromValue: '56.18%'}], position: 0, duration: 0 },
                { id: "eid3312", tween: [ "style", "${_PHRB_2}", "height", '6.73%', { fromValue: '6.73%'}], position: 0, duration: 0 },
                { id: "eid3369", tween: [ "style", "${_PHRB_9}", "height", '4.06%', { fromValue: '4.06%'}], position: 0, duration: 0 },
                { id: "eid3396", tween: [ "style", "${_PHRB_15}", "height", '7.69%', { fromValue: '7.69%'}], position: 0, duration: 0 },
                { id: "eid3400", tween: [ "style", "${_PHRB_15}", "top", '33.95%', { fromValue: '33.95%'}], position: 0, duration: 0 },
                { id: "eid3304", tween: [ "style", "${_PHRB_0}", "width", '25.48%', { fromValue: '25.48%'}], position: 0, duration: 0 },
                { id: "eid3171", tween: [ "style", "${_PHRB_5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3384", tween: [ "style", "${_PHRB_12}", "top", '35.53%', { fromValue: '35.53%'}], position: 0, duration: 0 },
                { id: "eid3340", tween: [ "style", "${_PHRB_4}", "height", '4.52%', { fromValue: '4.52%'}], position: 0, duration: 0 },
                { id: "eid3168", tween: [ "style", "${_PHRB_8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3358", tween: [ "style", "${_PHRB_7}", "left", '70.28%', { fromValue: '70.28%'}], position: 0, duration: 0 },
                { id: "eid3375", tween: [ "style", "${_PHRB_11}", "height", '8.44%', { fromValue: '8.44%'}], position: 0, duration: 0 },
                { id: "eid3166", tween: [ "style", "${_PHRB_10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3378", tween: [ "style", "${_PHRB_11}", "width", '44.08%', { fromValue: '44.08%'}], position: 0, duration: 0 },
                { id: "eid3373", tween: [ "style", "${_PHRB_10}", "left", '70.58%', { fromValue: '70.58%'}], position: 0, duration: 0 },
                { id: "eid3344", tween: [ "style", "${_PHRB_4}", "top", '36.1%', { fromValue: '36.1%'}], position: 0, duration: 0 },
                { id: "eid3520", tween: [ "style", "${__22}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3521", tween: [ "style", "${__22}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
                { id: "eid3315", tween: [ "style", "${_PHRB_2}", "left", '74.06%', { fromValue: '74.06%'}], position: 0, duration: 0 },
                { id: "eid3347", tween: [ "style", "${_PHRB_5}", "height", '9.75%', { fromValue: '9.75%'}], position: 0, duration: 0 },
                { id: "eid3518", tween: [ "style", "${__42}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3524", tween: [ "style", "${__42}", "display", 'block', { fromValue: 'none'}], position: 423, duration: 0 },
                { id: "eid3371", tween: [ "style", "${_PHRB_10}", "height", '8.54%', { fromValue: '8.54%'}], position: 0, duration: 0 },
                { id: "eid3354", tween: [ "style", "${_PHRB_7}", "height", '9%', { fromValue: '9%'}], position: 0, duration: 0 },
                { id: "eid3339", tween: [ "style", "${_PHRB_3}", "top", '33.16%', { fromValue: '33.16%'}], position: 0, duration: 0 },
                { id: "eid3343", tween: [ "style", "${_PHRB_4}", "left", '75.07%', { fromValue: '75.07%'}], position: 0, duration: 0 },
                { id: "eid3389", tween: [ "style", "${_PHRB_13}", "width", '17.93%', { fromValue: '17.93%'}], position: 0, duration: 0 },
                { id: "eid3398", tween: [ "style", "${_PHRB_15}", "left", '56.43%', { fromValue: '56.43%'}], position: 0, duration: 0 },
                { id: "eid3337", tween: [ "style", "${_PHRB_3}", "width", '22.28%', { fromValue: '22.28%'}], position: 0, duration: 0 },
                { id: "eid3164", tween: [ "style", "${_PHRB_12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3169", tween: [ "style", "${_PHRB_7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3308", tween: [ "style", "${_PHRB_1}", "left", '72.64%', { fromValue: '72.64%'}], position: 0, duration: 0 },
                { id: "eid3370", tween: [ "style", "${_PHRB_9}", "width", '12.52%', { fromValue: '12.52%'}], position: 0, duration: 0 },
                { id: "eid3310", tween: [ "style", "${_PHRB_1}", "height", '7.11%', { fromValue: '7.11%'}], position: 0, duration: 0 },
                { id: "eid3350", tween: [ "style", "${_PHRB_5}", "width", '39.31%', { fromValue: '39.31%'}], position: 0, duration: 0 },
                { id: "eid3367", tween: [ "style", "${_PHRB_8}", "left", '72.17%', { fromValue: '72.17%'}], position: 0, duration: 0 },
                { id: "eid3172", tween: [ "style", "${_PHRB_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3175", tween: [ "style", "${_PHRB_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3163", tween: [ "style", "${_PHRB_13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3363", tween: [ "style", "${_PHRB_8}", "height", '10.85%', { fromValue: '10.85%'}], position: 0, duration: 0 },
                { id: "eid3161", tween: [ "style", "${_PHRB_15}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3359", tween: [ "style", "${_PHRB_7}", "top", '33.68%', { fromValue: '33.68%'}], position: 0, duration: 0 },
                { id: "eid3379", tween: [ "style", "${_PHRB_11}", "left", '61.79%', { fromValue: '61.79%'}], position: 0, duration: 0 },
                { id: "eid3372", tween: [ "style", "${_PHRB_10}", "top", '33.41%', { fromValue: '33.41%'}], position: 0, duration: 0 },
                { id: "eid3349", tween: [ "style", "${_PHRB_5}", "left", '65.1%', { fromValue: '65.1%'}], position: 0, duration: 0 },
                { id: "eid3307", tween: [ "style", "${_PHRB_1}", "width", '23.59%', { fromValue: '23.59%'}], position: 0, duration: 0 },
                { id: "eid3394", tween: [ "style", "${_PHRB_14}", "left", '81.6%', { fromValue: '81.6%'}], position: 0, duration: 0 },
                { id: "eid3519", tween: [ "style", "${__32}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3522", tween: [ "style", "${__32}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid3523", tween: [ "style", "${__32}", "display", 'none', { fromValue: 'block'}], position: 423, duration: 0 },
                { id: "eid3174", tween: [ "style", "${_PHRB_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"b17and16_F": {
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
                    rect: ['3%', '-1.8%', '89.1%', '96.7%', 'auto', 'auto'],
                    id: 'b17',
                    fill: ['rgba(0,0,0,0)', 'images/girl/17.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['24.8%', '-4%', '89.1%', '96.7%', 'auto', 'auto'],
                    id: 'b16',
                    fill: ['rgba(0,0,0,0)', 'images/girl/16.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['-0.86641']],
                    type: 'image',
                    id: '_12',
                    display: 'none',
                    rect: ['45.4%', '17.8%', '23.4%', '6.1%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/girl/eye%20patch/1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '113.91%'],
                ["style", "width", '164.14%']
            ],
            "${_b17}": [
                ["style", "display", 'block'],
                ["transform", "scaleX", '-1'],
                ["style", "left", '10.92%'],
                ["style", "top", '0%']
            ],
            "${_b16}": [
                ["style", "top", '0%'],
                ["transform", "scaleX", '-0.98174'],
                ["style", "display", 'block'],
                ["style", "height", '96.69%'],
                ["style", "left", '10.08%'],
                ["style", "width", '90.74%']
            ],
            "${__12}": [
                ["style", "top", '17.81%'],
                ["transform", "scaleX", '-0.86641'],
                ["style", "display", 'none'],
                ["style", "left", '45.38%'],
                ["style", "width", '23.37%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 394,
            autoPlay: true,
            timeline: [
                { id: "eid1982", tween: [ "style", "${_b16}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2019", tween: [ "style", "${_b16}", "display", 'block', { fromValue: 'block'}], position: 107, duration: 0 },
                { id: "eid3013", tween: [ "style", "${_b16}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
                { id: "eid3015", tween: [ "style", "${_b16}", "display", 'block', { fromValue: 'none'}], position: 394, duration: 0 },
                { id: "eid508", tween: [ "style", "${__12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid507", tween: [ "style", "${__12}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid509", tween: [ "style", "${__12}", "display", 'none', { fromValue: 'block'}], position: 394, duration: 0 },
                { id: "eid1981", tween: [ "style", "${_b17}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2018", tween: [ "style", "${_b17}", "display", 'none', { fromValue: 'block'}], position: 107, duration: 0 },
                { id: "eid3012", tween: [ "style", "${_b17}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid3014", tween: [ "style", "${_b17}", "display", 'none', { fromValue: 'block'}], position: 394, duration: 0 }            ]
        }
    }
},
"body_ani": {
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
                    rect: ['-17.9%', '-7.5%', '146.2%', '110.1%', 'auto', 'auto'],
                    id: 'b15',
                    fill: ['rgba(0,0,0,0)', 'images/girl/15.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['31%', '11.9%', '38.6%', '7%', 'auto', 'auto'],
                    id: 'eye1',
                    fill: ['rgba(0,0,0,0)', 'images/girl/eye%20patch/1.png', '0px', '0px']
                },
                {
                    id: 'eye12',
                    type: 'rect',
                    rect: ['31.7%', '12.8%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'Left_down',
                    rect: ['-63.4%', '1.7%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'Right_down',
                    rect: ['-28.3%', '26.4%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'Left_backUp',
                    rect: ['-12.4%', '10.4%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'Right_backUp',
                    rect: ['-12.4%', '10.4%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['-23.4%', '-8.4%', '146.2%', '110.1%', 'auto', 'auto'],
                    id: 'b14',
                    fill: ['rgba(0,0,0,0)', 'images/girl/14.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['-27.6%', '-3.2%', '146.2%', '110.1%', 'auto', 'auto'],
                    id: 'b25',
                    fill: ['rgba(0,0,0,0)', 'images/girl/25.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['-18.6%', '-5.8%', '146.2%', '110.1%', 'auto', 'auto'],
                    id: 'b21',
                    fill: ['rgba(0,0,0,0)', 'images/girl/21.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['-18.6%', '-5.8%', '146.2%', '110.1%', 'auto', 'auto'],
                    id: 'b11',
                    fill: ['rgba(0,0,0,0)', 'images/girl/11.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'Right_backUp',
                symbolName: 'back_up_W',
                autoPlay: {

               }
            },
            {
                id: 'eye12',
                symbolName: 'eye1',
                autoPlay: {

               }
            },
            {
                id: 'Right_down',
                symbolName: 'b17and16_F',
                autoPlay: {

               }
            },
            {
                id: 'Left_down',
                symbolName: 'b17and16',
                autoPlay: {

               }
            },
            {
                id: 'Left_backUp',
                symbolName: 'back_up_W',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Right_backUp}": [
                ["transform", "scaleX", '0.99995'],
                ["style", "display", 'none'],
                ["style", "left", '-23.45%'],
                ["style", "top", '-2.61%']
            ],
            "${_Left_down}": [
                ["style", "top", '-7.83%'],
                ["style", "left", '-45.52%'],
                ["style", "display", 'none']
            ],
            "${_b15}": [
                ["style", "display", 'block'],
                ["style", "left", '-23.45%'],
                ["style", "top", '-8.41%']
            ],
            "${_b14}": [
                ["style", "top", '-8.41%'],
                ["style", "left", '-23.45%'],
                ["style", "display", 'none']
            ],
            "${_Right_down}": [
                ["style", "top", '-6.09%'],
                ["style", "left", '-37.24%'],
                ["style", "display", 'none']
            ],
            "${_eye1}": [
                ["style", "top", '11.88%'],
                ["style", "left", '31.03%'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '57.5%'],
                ["style", "width", '18.13%']
            ],
            "${_b21}": [
                ["style", "top", '-5.8%'],
                ["style", "left", '-18.62%'],
                ["style", "display", 'none']
            ],
            "${_Left_backUp}": [
                ["style", "top", '-2.61%'],
                ["transform", "scaleX", '-0.99959'],
                ["style", "left", '-23.45%'],
                ["style", "display", 'none']
            ],
            "${_b11}": [
                ["style", "top", '-5.8%'],
                ["style", "left", '-18.62%'],
                ["style", "display", 'none']
            ],
            "${_b25}": [
                ["style", "display", 'none'],
                ["style", "left", '-31.03%'],
                ["style", "top", '-9.57%']
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
                { id: "eid3388", tween: [ "style", "${_Right_down}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3501", tween: [ "style", "${_Right_down}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid3560", tween: [ "style", "${_Right_down}", "display", 'none', { fromValue: 'block'}], position: 1668, duration: 0 },
                { id: "eid3516", tween: [ "style", "${_Right_down}", "display", 'none', { fromValue: 'none'}], position: 1750, duration: 0 },
                { id: "eid3077", tween: [ "style", "${_b25}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3052", tween: [ "style", "${_Right_backUp}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid3067", tween: [ "style", "${_Right_backUp}", "display", 'none', { fromValue: 'block'}], position: 3084, duration: 0 },
                { id: "eid3078", tween: [ "style", "${_b14}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid489", tween: [ "style", "${_eye1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3019", tween: [ "style", "${_b21}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5123", tween: [ "style", "${_b11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2940", tween: [ "style", "${_Left_down}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid3556", tween: [ "style", "${_Left_down}", "display", 'none', { fromValue: 'block'}], position: 777, duration: 0 },
                { id: "eid3500", tween: [ "style", "${_Left_down}", "display", 'none', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid2938", tween: [ "style", "${_b15}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2980", tween: [ "style", "${_b15}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
                { id: "eid3557", tween: [ "style", "${_b15}", "display", 'block', { fromValue: 'none'}], position: 777, duration: 0 },
                { id: "eid3559", tween: [ "style", "${_b15}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid3561", tween: [ "style", "${_b15}", "display", 'block', { fromValue: 'none'}], position: 1668, duration: 0 },
                { id: "eid3562", tween: [ "style", "${_b15}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
                { id: "eid3564", tween: [ "style", "${_b15}", "display", 'block', { fromValue: 'none'}], position: 2198, duration: 0 },
                { id: "eid3565", tween: [ "style", "${_b15}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
                { id: "eid3566", tween: [ "style", "${_b15}", "display", 'block', { fromValue: 'none'}], position: 3084, duration: 0 },
                { id: "eid3568", tween: [ "style", "${_b15}", "display", 'block', { fromValue: 'block'}], position: 3500, duration: 0 },
                { id: "eid261", tween: [ "style", "${_red_cap2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3034", tween: [ "style", "${_Left_backUp}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3035", tween: [ "style", "${_Left_backUp}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
                { id: "eid3563", tween: [ "style", "${_Left_backUp}", "display", 'none', { fromValue: 'block'}], position: 2198, duration: 0 }            ]
        }
    }
},
"cust_2": {
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
                    rect: ['0%', '0.4%', '100%', '99.6%', 'auto', 'auto'],
                    id: '_1',
                    fill: ['rgba(0,0,0,0)', 'images/customer2/1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: '_22',
                    fill: ['rgba(0,0,0,0)', 'images/customer2/2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: '_33',
                    fill: ['rgba(0,0,0,0)', 'images/customer2/3.png', '0px', '0px']
                },
                {
                    id: 'eye2',
                    type: 'rect',
                    rect: ['34.4%', '21.1%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['34.4%', '-12.8%', '22%', '20%', 'auto', 'auto'],
                    id: 'qus2',
                    fill: ['rgba(0,0,0,0)', 'images/false_icon/qus.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'eye2',
                symbolName: 'eye2',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${__33}": [
                ["style", "top", '10.09%'],
                ["transform", "rotateZ", '-1deg'],
                ["style", "height", '100%'],
                ["style", "display", 'none'],
                ["style", "left", '16.39%'],
                ["style", "width", '100%']
            ],
            "${_eye2}": [
                ["style", "top", '34.86%'],
                ["transform", "scaleY", '0.81111'],
                ["transform", "scaleX", '0.79294'],
                ["style", "opacity", '1'],
                ["style", "left", '40.98%']
            ],
            "${__22}": [
                ["style", "top", '10.09%'],
                ["transform", "rotateZ", '-1deg'],
                ["style", "height", '100%'],
                ["style", "display", 'none'],
                ["style", "left", '16.39%'],
                ["style", "width", '100%']
            ],
            "${symbolSelector}": [
                ["style", "height", '42.33%'],
                ["style", "width", '20.63%']
            ],
            "${_qus2}": [
                ["style", "top", '-6.42%'],
                ["transform", "scaleY", '1'],
                ["style", "height", '20%'],
                ["transform", "scaleX", '1'],
                ["style", "display", 'none'],
                ["style", "left", '50.82%'],
                ["style", "width", '22%']
            ],
            "${__1}": [
                ["style", "display", 'block'],
                ["style", "top", '10.09%'],
                ["style", "left", '16.39%'],
                ["transform", "rotateZ", '-1deg']
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
                { id: "eid5613", tween: [ "style", "${_qus2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5614", tween: [ "style", "${_qus2}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid1012", tween: [ "style", "${__22}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1226", tween: [ "style", "${__22}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid1227", tween: [ "style", "${__22}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid1209", tween: [ "style", "${__1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1225", tween: [ "style", "${__1}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid5619", tween: [ "transform", "${_qus2}", "scaleX", '0.8', { fromValue: '1'}], position: 2000, duration: 1000 },
                { id: "eid5620", tween: [ "transform", "${_qus2}", "scaleX", '1', { fromValue: '0.8'}], position: 3000, duration: 1000 },
                { id: "eid1011", tween: [ "style", "${__33}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1228", tween: [ "style", "${__33}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid6253", tween: [ "style", "${_eye2}", "left", '40.98%', { fromValue: '40.98%'}], position: 0, duration: 0 },
                { id: "eid5621", tween: [ "transform", "${_qus2}", "scaleY", '0.8', { fromValue: '1'}], position: 2000, duration: 1000 },
                { id: "eid5622", tween: [ "transform", "${_qus2}", "scaleY", '1', { fromValue: '0.8'}], position: 3000, duration: 1000 }            ]
        }
    }
},
"eye2": {
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
                    rect: ['0%', '0%', '97.1%', '100%', 'auto', 'auto'],
                    id: 'eye_patch',
                    fill: ['rgba(0,0,0,0)', 'images/customer2/eye%20patch.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_eye_patch}": [
                ["style", "top", '11.11%'],
                ["style", "height", '100%'],
                ["style", "display", 'none'],
                ["style", "left", '0%'],
                ["style", "width", '105.89%']
            ],
            "${symbolSelector}": [
                ["style", "height", '8.26%'],
                ["style", "width", '27.87%']
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
                { id: "eid3853", tween: [ "style", "${_eye_patch}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3854", tween: [ "style", "${_eye_patch}", "display", 'block', { fromValue: 'none'}], position: 1613, duration: 0 },
                { id: "eid3855", tween: [ "style", "${_eye_patch}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 }            ]
        }
    }
},
"cust_4": {
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
                    id: 'cu1',
                    fill: ['rgba(0,0,0,0)', 'images/customer4/cu1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'cu22',
                    fill: ['rgba(0,0,0,0)', 'images/customer4/cu2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'cu3',
                    fill: ['rgba(0,0,0,0)', 'images/customer4/cu3.png', '0px', '0px']
                },
                {
                    id: 'eye4',
                    type: 'rect',
                    rect: ['31.4%', '18.1%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['47.2%', '-16.2%', '22%', '20%', 'auto', 'auto'],
                    id: 'qus4',
                    fill: ['rgba(0,0,0,0)', 'images/false_icon/qus.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'eye4',
                symbolName: 'eye4',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_qus4}": [
                ["style", "top", '-16.22%'],
                ["transform", "scaleY", '1'],
                ["style", "height", '20%'],
                ["transform", "scaleX", '1'],
                ["style", "display", 'none'],
                ["style", "left", '47.22%'],
                ["style", "width", '22%']
            ],
            "${_cu1}": [
                ["style", "display", 'block'],
                ["style", "left", '0%'],
                ["style", "top", '2.7%']
            ],
            "${_cu3}": [
                ["style", "top", '2.7%'],
                ["style", "height", '100%'],
                ["style", "display", 'none'],
                ["style", "left", '0%'],
                ["style", "width", '100%']
            ],
            "${_cu22}": [
                ["style", "top", '2.7%'],
                ["style", "height", '100%'],
                ["style", "display", 'none'],
                ["style", "left", '0%'],
                ["style", "width", '100%']
            ],
            "${symbolSelector}": [
                ["style", "height", '43%'],
                ["style", "width", '24.13%']
            ],
            "${_eye4}": [
                ["transform", "scaleX", '0.97611'],
                ["style", "top", '19.82%'],
                ["style", "left", '35.62%'],
                ["transform", "rotateZ", '6deg']
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
                { id: "eid1028", tween: [ "style", "${_cu3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1032", tween: [ "style", "${_cu3}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid5656", tween: [ "transform", "${_qus4}", "scaleX", '0.8', { fromValue: '1'}], position: 2000, duration: 1000 },
                { id: "eid5657", tween: [ "transform", "${_qus4}", "scaleX", '1', { fromValue: '0.8'}], position: 3000, duration: 1000 },
                { id: "eid5650", tween: [ "style", "${_qus4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5651", tween: [ "style", "${_qus4}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid5645", tween: [ "style", "${_cu1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1029", tween: [ "style", "${_cu1}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid1027", tween: [ "style", "${_cu22}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1030", tween: [ "style", "${_cu22}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid1031", tween: [ "style", "${_cu22}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid5658", tween: [ "transform", "${_qus4}", "scaleY", '0.8', { fromValue: '1'}], position: 2000, duration: 1000 },
                { id: "eid5659", tween: [ "transform", "${_qus4}", "scaleY", '1', { fromValue: '0.8'}], position: 3000, duration: 1000 }            ]
        }
    }
},
"eye4": {
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
                    rect: ['-5.3%', '12.5%', '105.3%', '87.5%', 'auto', 'auto'],
                    id: 'eye_pach2',
                    fill: ['rgba(0,0,0,0)', 'images/customer5/eye%20pach.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_eye_pach2}": [
                ["style", "top", '12.5%'],
                ["style", "height", '87.5%'],
                ["style", "display", 'none'],
                ["style", "left", '-5.26%'],
                ["style", "width", '105.27%']
            ],
            "${symbolSelector}": [
                ["style", "height", '7.07%'],
                ["style", "width", '25.74%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2392,
            autoPlay: true,
            timeline: [
                { id: "eid847", tween: [ "style", "${_eye_pach2}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid848", tween: [ "style", "${_eye_pach2}", "display", 'none', { fromValue: 'block'}], position: 2392, duration: 0 }            ]
        }
    }
},
"cust_1": {
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
                    id: 'normalface',
                    fill: ['rgba(0,0,0,0)', 'images/customer1/normalface.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'worryface',
                    fill: ['rgba(0,0,0,0)', 'images/customer1/worryface.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'sadface',
                    fill: ['rgba(0,0,0,0)', 'images/customer1/sadface.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['1.02', '1.02']],
                    type: 'image',
                    id: 'qus',
                    display: 'none',
                    rect: ['39.4%', '0.6%', '21.6%', '19.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/false_icon/qus.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_worryface}": [
                ["style", "height", '100%'],
                ["style", "display", 'none'],
                ["style", "top", '0.99%'],
                ["style", "width", '100%']
            ],
            "${_normalface}": [
                ["style", "display", 'block'],
                ["style", "left", '0%'],
                ["style", "top", '0.99%']
            ],
            "${_sadface}": [
                ["style", "height", '100%'],
                ["style", "display", 'none'],
                ["style", "top", '0.99%'],
                ["style", "width", '100%']
            ],
            "${symbolSelector}": [
                ["style", "height", '39%'],
                ["style", "width", '23.38%']
            ],
            "${_qus}": [
                ["style", "top", '0.6%'],
                ["transform", "scaleY", '1.02'],
                ["transform", "scaleX", '1.02'],
                ["style", "display", 'none'],
                ["style", "height", '19.61%'],
                ["style", "left", '39.37%'],
                ["style", "width", '21.57%']
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
                { id: "eid5611", tween: [ "transform", "${_qus}", "scaleY", '0.8', { fromValue: '1.02'}], position: 2000, duration: 1000 },
                { id: "eid5612", tween: [ "transform", "${_qus}", "scaleY", '1.02', { fromValue: '0.8'}], position: 3000, duration: 1000 },
                { id: "eid5609", tween: [ "transform", "${_qus}", "scaleX", '0.8', { fromValue: '1.02'}], position: 2000, duration: 1000 },
                { id: "eid5610", tween: [ "transform", "${_qus}", "scaleX", '1.02', { fromValue: '0.8'}], position: 3000, duration: 1000 },
                { id: "eid5601", tween: [ "style", "${_qus}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5602", tween: [ "style", "${_qus}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid1206", tween: [ "style", "${_normalface}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1219", tween: [ "style", "${_normalface}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid996", tween: [ "style", "${_sadface}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1222", tween: [ "style", "${_sadface}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid997", tween: [ "style", "${_worryface}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1220", tween: [ "style", "${_worryface}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid1221", tween: [ "style", "${_worryface}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 }            ]
        }
    }
},
"body_ani_plate": {
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
                    rect: ['-17.9%', '-7.5%', '146.2%', '110.1%', 'auto', 'auto'],
                    id: 'b14',
                    fill: ['rgba(0,0,0,0)', 'images/girl/14.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['-17.9%', '-7.5%', '146.2%', '110.1%', 'auto', 'auto'],
                    id: 'b14C',
                    fill: ['rgba(0,0,0,0)', 'images/girl/14.png', '0px', '0px']
                },
                {
                    display: 'block',
                    type: 'rect',
                    id: 'eye1',
                    rect: ['35.9%', '17.1%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['29.7%', '42.3%', '50.2%', '8.3%', 'auto', 'auto'],
                    id: 'plate3',
                    fill: ['rgba(0,0,0,0)', 'images/plate.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['-37.2%', '42.3%', '50.2%', '8.3%', 'auto', 'auto'],
                    id: 'plate33',
                    fill: ['rgba(0,0,0,0)', 'images/plate.png', '0px', '0px']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'Left_down_p',
                    rect: ['-35.2%', '-7.8%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'Right_down_p',
                    rect: ['-23.4%', '17.7%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'Left_backUp_p',
                    rect: ['29.7%', '22.3%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'Right_backUp_p',
                    rect: ['-23.4%', '-2.6%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['-31%', '-9.6%', '146.2%', '110.1%', 'auto', 'auto'],
                    id: 'b25',
                    fill: ['rgba(0,0,0,0)', 'images/girl/25.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['-18.6%', '-5.8%', '146.2%', '110.1%', 'auto', 'auto'],
                    id: 'b21',
                    fill: ['rgba(0,0,0,0)', 'images/girl/21.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['-18.6%', '-5.8%', '146.2%', '110.1%', 'auto', 'auto'],
                    id: 'b11',
                    fill: ['rgba(0,0,0,0)', 'images/girl/11.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['29.7%', '42.3%', '50.2%', '8.3%', 'auto', 'auto'],
                    id: 'plate4',
                    fill: ['rgba(0,0,0,0)', 'images/plate.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['100%', '30.7%', '17.9%', '4.9%', 'auto', 'auto'],
                    id: 'cheese2',
                    fill: ['rgba(0,0,0,0)', 'images/cheese.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['35.9%', '38%', '36.6%', '8.4%', 'auto', 'auto'],
                    id: 'leave2',
                    fill: ['rgba(0,0,0,0)', 'images/decoration/leave2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['37.2%', '38.3%', '33.8%', '7.5%', 'auto', 'auto'],
                    id: 'leaves2',
                    fill: ['rgba(0,0,0,0)', 'images/decoration/leaves1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['41.4%', '35.9%', '26.9%', '9%', 'auto', 'auto'],
                    id: 'ham1',
                    fill: ['rgba(0,0,0,0)', 'images/hamberger/ham1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['44.1%', '38.3%', '24.1%', '6.1%', 'auto', 'auto'],
                    id: 'mush2',
                    fill: ['rgba(0,0,0,0)', 'images/mushroom/mush1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['36.6%', '38.6%', '35.2%', '7%', 'auto', 'auto'],
                    id: 'stick2',
                    fill: ['rgba(0,0,0,0)', 'images/stick/stick1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['43.5%', '36.8%', '22.8%', '7.5%', 'auto', 'auto'],
                    id: 'tuna2',
                    fill: ['rgba(0,0,0,0)', 'images/tunna/tuna1%5D.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['36.6%', '40%', '28.5%', '10.7%', 'auto', 'auto'],
                    id: 'onion2',
                    fill: ['rgba(0,0,0,0)', 'images/onion.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['34.5%', '37.7%', '36.6%', '12.8%', 'auto', 'auto'],
                    id: 'tomato2',
                    fill: ['rgba(0,0,0,0)', 'images/ing/TMT.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['41.4%', '28.4%', '32.4%', '18.3%', 'auto', 'auto'],
                    id: 'glass4',
                    fill: ['rgba(0,0,0,0)', 'images/ing/glass.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['38.6%', '33%', '31.7%', '12.5%', 'auto', 'auto'],
                    id: 'olive2',
                    fill: ['rgba(0,0,0,0)', 'images/olives/olive2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['25.5%', '33.9%', '58.6%', '11.1%', 'auto', 'auto'],
                    id: 'pizzabase2',
                    fill: ['rgba(0,0,0,0)', 'images/pizza/pizzabase.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['42.1%', '33%', '20.7%', '10.1%', 'auto', 'auto'],
                    id: 'green_cap2',
                    fill: ['rgba(0,0,0,0)', 'images/ing/GC.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['35.2%', '31%', '35.2%', '15.9%', 'auto', 'auto'],
                    id: 'red_cap2',
                    fill: ['rgba(0,0,0,0)', 'images/ing/RC.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['87.6%', '29%', '29.7%', '9.3%', 'auto', 'auto'],
                    id: 'rawshrimp2',
                    fill: ['rgba(0,0,0,0)', 'images/ing/shrimp.png', '0px', '0px']
                },
                {
                    rect: ['92.4%', '23.8%', '35.2%', '13.6%', 'auto', 'auto'],
                    tag: 'img',
                    id: 'blankimageonplate',
                    display: 'block',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/ing/bankimg.png', '0px', '0px']
                },
                {
                    rect: ['-31%', '24.4%', '35.2%', '13.6%', 'auto', 'auto'],
                    tag: 'img',
                    id: 'blankimageonplate2',
                    display: 'none',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/ing/bankimg.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.44196', '0.61224']],
                    type: 'image',
                    id: 'pizzabox2',
                    display: 'none',
                    rect: ['34.1%', '19.4%', '154.5%', '28.4%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pizza/pizzabox.png', '0px', '0px']
                },
                {
                    type: 'group',
                    display: 'block',
                    id: 'PizzaOnHendGrp1',
                    rect: ['89.5%', '27.6%', '8.3%', '6.1%', 'auto', 'auto'],
                    c: [
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['8.7%', '6.5%', '15.2%', '12.7%', 'auto', 'auto'],
                        id: 'PH_0',
                        fill: ['rgba(0,0,0,0)', 'images/pizza/pizzabase.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        rect: ['8.7%', '9.8%', '79.2%', '80.7%', 'auto', 'auto'],
                        id: 'PH_1',
                        opacity: 0.66666666666667,
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/pizza/sauceonpizza.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['1.15928']],
                        type: 'image',
                        display: 'none',
                        id: 'PH_2',
                        opacity: 1,
                        rect: ['4.7%', '-0.6%', '14.1%', '12.6%', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/pizza/cheese.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['-0.48937', '0.47916']],
                        type: 'image',
                        id: 'PH_3',
                        display: 'none',
                        rect: ['61.4%', '12.7%', '17.8%', '15.9%', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/leaves1_On_pizza.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['-0.96774']],
                        type: 'image',
                        id: 'PH_4',
                        display: 'none',
                        rect: ['44.7%', '23.6%', '7.8%', '6.9%', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/leave2_on_face.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['-0.33617', '0.52577']],
                        type: 'image',
                        id: 'PH_5',
                        display: 'none',
                        rect: ['55%', '16.4%', '29.6%', '16.1%', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/red_cutcapsicum_on_face.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['17.6%', '19.2%', '11.4%', '6.7%', 'auto', 'auto'],
                        id: 'PH_6',
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/green_cutcaps_on_pizza.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], ['-55'], ['0', '42'], ['0.32955', '0.62797']],
                        type: 'image',
                        id: 'PH_7',
                        display: 'none',
                        rect: ['-5.5%', '36.4%', '28.1%', '17%', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/tomato_on_pizza.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['0.41991', '-0.51261']],
                        type: 'image',
                        id: 'PH_8',
                        display: 'none',
                        rect: ['9.9%', '66.5%', '29.1%', '19.9%', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/olive_on_pizza.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['28.3%', '36.2%', '7.9%', '5.6%', 'auto', 'auto'],
                        id: 'PH_9',
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/ham_on_pizza.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['0.40987', '0.54054']],
                        borderRadius: ['0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px'],
                        rect: ['17.3%', '27.1%', '18.2%', '12.2%', 'auto', 'auto'],
                        id: 'PH_10',
                        display: 'none',
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/mushroom_on_pizza.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['0.32758', '0.52173']],
                        type: 'image',
                        id: 'PH_11',
                        display: 'none',
                        rect: ['7.7%', '11.4%', '29.1%', '15.3%', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/stick_on_pizza.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['16.7%', '12.1%', '61.8%', '70.7%', 'auto', 'auto'],
                        id: 'PH_12',
                        fill: ['rgba(0,0,0,0)', 'images/chiliflakes/chili_on_pizza.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['21%', '19.2%', '61%', '72%', 'auto', 'auto'],
                        id: 'PH_13',
                        fill: ['rgba(0,0,0,0)', 'images/chiliflakes/oregano_on_pizza.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['53.9%', '23.4%', '3.3%', '4.3%', 'auto', 'auto'],
                        id: 'PH_14',
                        fill: ['rgba(0,0,0,0)', 'images/tunna/tuna1%5D.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['0.28163', '0.75342']],
                        type: 'image',
                        id: 'PH_15',
                        display: 'none',
                        rect: ['19.2%', '8.9%', '30.6%', '12.2%', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/shrimp.png', '0px', '0px']
                    }]
                },
                {
                    type: 'group',
                    display: 'none',
                    id: 'PizzaOnHendGrp3',
                    rect: ['89.5%', '27.6%', '8.3%', '6.1%', 'auto', 'auto'],
                    c: [
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['8.7%', '6.5%', '15.2%', '12.7%', 'auto', 'auto'],
                        id: 'PH3_0',
                        fill: ['rgba(0,0,0,0)', 'images/pizza/pizzabase.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        rect: ['8.7%', '9.8%', '79.2%', '80.7%', 'auto', 'auto'],
                        id: 'PH3_1',
                        opacity: 0.66666666666667,
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/pizza/sauceonpizza.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['1.15928']],
                        type: 'image',
                        display: 'none',
                        id: 'PH3_2',
                        opacity: 1,
                        rect: ['4.7%', '-0.6%', '14.1%', '12.6%', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/pizza/cheese.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['-0.48937', '0.47916']],
                        type: 'image',
                        id: 'PH3_3',
                        display: 'none',
                        rect: ['61.4%', '12.7%', '17.8%', '15.9%', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/leaves1_On_pizza.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['-0.96774']],
                        type: 'image',
                        id: 'PH3_4',
                        display: 'none',
                        rect: ['44.7%', '23.6%', '7.8%', '6.9%', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/leave2_on_face.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['-0.33617', '0.52577']],
                        type: 'image',
                        id: 'PH3_5',
                        display: 'none',
                        rect: ['55%', '16.4%', '29.6%', '16.1%', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/red_cutcapsicum_on_face.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['17.6%', '19.2%', '11.4%', '6.7%', 'auto', 'auto'],
                        id: 'PH3_6',
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/green_cutcaps_on_pizza.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], ['-55'], ['0', '42'], ['0.32955', '0.62797']],
                        type: 'image',
                        id: 'PH3_7',
                        display: 'none',
                        rect: ['-5.5%', '36.4%', '28.1%', '17%', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/tomato_on_pizza.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['0.41991', '-0.51261']],
                        type: 'image',
                        id: 'PH3_8',
                        display: 'none',
                        rect: ['9.9%', '66.5%', '29.1%', '19.9%', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/olive_on_pizza.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['28.3%', '36.2%', '7.9%', '5.6%', 'auto', 'auto'],
                        id: 'PH3_9',
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/ham_on_pizza.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['0.40987', '0.54054']],
                        borderRadius: ['0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px'],
                        rect: ['17.3%', '27.1%', '18.2%', '12.2%', 'auto', 'auto'],
                        id: 'PH3_10',
                        display: 'none',
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/mushroom_on_pizza.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['0.32758', '0.52173']],
                        type: 'image',
                        id: 'PH3_11',
                        display: 'none',
                        rect: ['7.7%', '11.4%', '29.1%', '15.3%', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/stick_on_pizza.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['16.7%', '12.1%', '61.8%', '70.7%', 'auto', 'auto'],
                        id: 'PH3_12',
                        fill: ['rgba(0,0,0,0)', 'images/chiliflakes/chili_on_pizza.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['21%', '19.2%', '61%', '72%', 'auto', 'auto'],
                        id: 'PH3_13',
                        fill: ['rgba(0,0,0,0)', 'images/chiliflakes/oregano_on_pizza.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['53.9%', '23.4%', '3.3%', '4.3%', 'auto', 'auto'],
                        id: 'PH3_14',
                        fill: ['rgba(0,0,0,0)', 'images/tunna/tuna1%5D.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['0.28163', '0.75342']],
                        type: 'image',
                        id: 'PH3_15',
                        display: 'none',
                        rect: ['19.2%', '8.9%', '30.6%', '12.2%', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/shrimp.png', '0px', '0px']
                    }]
                },
                {
                    type: 'group',
                    display: 'none',
                    id: 'PizzaOnHendGrp4',
                    rect: ['89.5%', '27.6%', '8.3%', '6.1%', 'auto', 'auto'],
                    c: [
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['8.7%', '6.5%', '15.2%', '12.7%', 'auto', 'auto'],
                        id: 'PH4_0',
                        fill: ['rgba(0,0,0,0)', 'images/pizza/pizzabase.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        rect: ['8.7%', '9.8%', '79.2%', '80.7%', 'auto', 'auto'],
                        id: 'PH4_1',
                        opacity: 0.66666666666667,
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/pizza/sauceonpizza.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['1.15928']],
                        type: 'image',
                        display: 'none',
                        id: 'PH4_2',
                        opacity: 1,
                        rect: ['4.7%', '-0.6%', '14.1%', '12.6%', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/pizza/cheese.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['-0.48937', '0.47916']],
                        type: 'image',
                        id: 'PH4_3',
                        display: 'none',
                        rect: ['61.4%', '12.7%', '17.8%', '15.9%', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/leaves1_On_pizza.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['-0.96774']],
                        type: 'image',
                        id: 'PH4_4',
                        display: 'none',
                        rect: ['44.7%', '23.6%', '7.8%', '6.9%', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/leave2_on_face.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['-0.33617', '0.52577']],
                        type: 'image',
                        id: 'PH4_5',
                        display: 'none',
                        rect: ['55%', '16.4%', '29.6%', '16.1%', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/red_cutcapsicum_on_face.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['17.6%', '19.2%', '11.4%', '6.7%', 'auto', 'auto'],
                        id: 'PH4_6',
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/green_cutcaps_on_pizza.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], ['-55'], ['0', '42'], ['0.32955', '0.62797']],
                        type: 'image',
                        id: 'PH4_7',
                        display: 'none',
                        rect: ['-5.5%', '36.4%', '28.1%', '17%', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/tomato_on_pizza.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['0.41991', '-0.51261']],
                        type: 'image',
                        id: 'PH4_8',
                        display: 'none',
                        rect: ['9.9%', '66.5%', '29.1%', '19.9%', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/olive_on_pizza.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['28.3%', '36.2%', '7.9%', '5.6%', 'auto', 'auto'],
                        id: 'PH4_9',
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/ham_on_pizza.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['0.40987', '0.54054']],
                        borderRadius: ['0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px'],
                        rect: ['17.3%', '27.1%', '18.2%', '12.2%', 'auto', 'auto'],
                        id: 'PH4_10',
                        display: 'none',
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/mushroom_on_pizza.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['0.32758', '0.52173']],
                        type: 'image',
                        id: 'PH4_11',
                        display: 'none',
                        rect: ['7.7%', '11.4%', '29.1%', '15.3%', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/stick_on_pizza.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['16.7%', '12.1%', '61.8%', '70.7%', 'auto', 'auto'],
                        id: 'PH4_12',
                        fill: ['rgba(0,0,0,0)', 'images/chiliflakes/chili_on_pizza.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['21%', '19.2%', '61%', '72%', 'auto', 'auto'],
                        id: 'PH4_13',
                        fill: ['rgba(0,0,0,0)', 'images/chiliflakes/oregano_on_pizza.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['53.9%', '23.4%', '3.3%', '4.3%', 'auto', 'auto'],
                        id: 'PH4_14',
                        fill: ['rgba(0,0,0,0)', 'images/tunna/tuna1%5D.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['0.28163', '0.75342']],
                        type: 'image',
                        id: 'PH4_15',
                        display: 'none',
                        rect: ['19.2%', '8.9%', '30.6%', '12.2%', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/shrimp.png', '0px', '0px']
                    }]
                },
                {
                    type: 'group',
                    display: 'none',
                    id: 'PizzaOnHendGrp2',
                    rect: ['89.5%', '27.6%', '8.3%', '6.1%', 'auto', 'auto'],
                    c: [
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['8.7%', '6.5%', '15.2%', '12.7%', 'auto', 'auto'],
                        id: 'PH2_0',
                        fill: ['rgba(0,0,0,0)', 'images/pizza/pizzabase.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        rect: ['8.7%', '9.8%', '79.2%', '80.7%', 'auto', 'auto'],
                        id: 'PH2_1',
                        opacity: 0.66666666666667,
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/pizza/sauceonpizza.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['1.15928']],
                        type: 'image',
                        display: 'none',
                        id: 'PH2_2',
                        opacity: 1,
                        rect: ['4.7%', '-0.6%', '14.1%', '12.6%', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/pizza/cheese.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['-0.48937', '0.47916']],
                        type: 'image',
                        id: 'PH2_3',
                        display: 'none',
                        rect: ['61.4%', '12.7%', '17.8%', '15.9%', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/leaves1_On_pizza.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['-0.96774']],
                        type: 'image',
                        id: 'PH2_4',
                        display: 'none',
                        rect: ['44.7%', '23.6%', '7.8%', '6.9%', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/leave2_on_face.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['-0.33617', '0.52577']],
                        type: 'image',
                        id: 'PH2_5',
                        display: 'none',
                        rect: ['55%', '16.4%', '29.6%', '16.1%', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/red_cutcapsicum_on_face.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['17.6%', '19.2%', '11.4%', '6.7%', 'auto', 'auto'],
                        id: 'PH2_6',
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/green_cutcaps_on_pizza.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], ['-55'], ['0', '42'], ['0.32955', '0.62797']],
                        type: 'image',
                        id: 'PH2_7',
                        display: 'none',
                        rect: ['-5.5%', '36.4%', '28.1%', '17%', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/tomato_on_pizza.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['0.41991', '-0.51261']],
                        type: 'image',
                        id: 'PH2_8',
                        display: 'none',
                        rect: ['9.9%', '66.5%', '29.1%', '19.9%', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/olive_on_pizza.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['28.3%', '36.2%', '7.9%', '5.6%', 'auto', 'auto'],
                        id: 'PH2_9',
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/ham_on_pizza.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['0.40987', '0.54054']],
                        borderRadius: ['0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px'],
                        rect: ['17.3%', '27.1%', '18.2%', '12.2%', 'auto', 'auto'],
                        id: 'PH2_10',
                        display: 'none',
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/mushroom_on_pizza.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['0.32758', '0.52173']],
                        type: 'image',
                        id: 'PH2_11',
                        display: 'none',
                        rect: ['7.7%', '11.4%', '29.1%', '15.3%', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/stick_on_pizza.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['16.7%', '12.1%', '61.8%', '70.7%', 'auto', 'auto'],
                        id: 'PH2_12',
                        fill: ['rgba(0,0,0,0)', 'images/chiliflakes/chili_on_pizza.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['21%', '19.2%', '61%', '72%', 'auto', 'auto'],
                        id: 'PH2_13',
                        fill: ['rgba(0,0,0,0)', 'images/chiliflakes/oregano_on_pizza.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['53.9%', '23.4%', '3.3%', '4.3%', 'auto', 'auto'],
                        id: 'PH2_14',
                        fill: ['rgba(0,0,0,0)', 'images/tunna/tuna1%5D.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['0.28163', '0.75342']],
                        type: 'image',
                        id: 'PH2_15',
                        display: 'none',
                        rect: ['19.2%', '8.9%', '30.6%', '12.2%', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/cut_all/shrimp.png', '0px', '0px']
                    }]
                }
            ],
            symbolInstances: [
            {
                id: 'Right_down_p',
                symbolName: 'b18andb19_F',
                autoPlay: {

               }
            },
            {
                id: 'Left_backUp_p',
                symbolName: 'back_up_L',
                autoPlay: {

               }
            },
            {
                id: 'eye1',
                symbolName: 'eye1',
                autoPlay: {

               }
            },
            {
                id: 'Left_down_p',
                symbolName: 'b18andb19',
                autoPlay: {

               }
            },
            {
                id: 'Right_backUp_p',
                symbolName: 'back_up_R',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_PH2_3}": [
                ["style", "top", '4.76%'],
                ["transform", "scaleY", '0.47916'],
                ["transform", "scaleX", '-0.48937'],
                ["style", "display", 'none'],
                ["style", "height", '196.58%'],
                ["style", "left", '-41.67%'],
                ["style", "width", '362.59%']
            ],
            "${_PH2_11}": [
                ["style", "top", '42.86%'],
                ["style", "height", '136.46%'],
                ["transform", "scaleY", '0.52173'],
                ["transform", "rotateZ", '-29deg'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '0.32758'],
                ["style", "left", '-133.33%'],
                ["style", "width", '739.17%']
            ],
            "${_PH2_8}": [
                ["style", "top", '-9.52%'],
                ["transform", "scaleY", '-0.51261'],
                ["transform", "scaleX", '0.41991'],
                ["style", "display", 'none'],
                ["style", "height", '225.91%'],
                ["style", "left", '-116.67%'],
                ["style", "width", '591.67%']
            ],
            "${_mush2}": [
                ["style", "top", '35.65%'],
                ["style", "height", '8.7%'],
                ["style", "display", 'none'],
                ["style", "left", '44.14%'],
                ["style", "width", '26.9%']
            ],
            "${_b21}": [
                ["style", "top", '-5.8%'],
                ["style", "left", '-18.62%'],
                ["style", "display", 'none']
            ],
            "${_PH4_4}": [
                ["style", "top", '48.07%'],
                ["style", "height", '114.73%'],
                ["transform", "scaleX", '-0.96774'],
                ["style", "display", 'none'],
                ["style", "left", '143.96%'],
                ["style", "width", '214.04%']
            ],
            "${_olive2}": [
                ["style", "top", '36.81%'],
                ["style", "display", 'none'],
                ["style", "height", '8.32%'],
                ["style", "left", '42.07%'],
                ["style", "width", '26.21%']
            ],
            "${_pizzabox2}": [
                ["style", "top", '13.33%'],
                ["transform", "scaleY", '1.12276'],
                ["transform", "scaleX", '0.51339'],
                ["style", "left", '34.14%'],
                ["style", "display", 'none']
            ],
            "${_PH3_1}": [
                ["style", "top", '38.1%'],
                ["style", "display", 'none'],
                ["style", "height", '138.1%'],
                ["style", "opacity", '0.6666666865348816'],
                ["style", "left", '58.33%'],
                ["style", "width", '377.67%']
            ],
            "${_PH2_13}": [
                ["style", "top", '52.38%'],
                ["style", "display", 'none'],
                ["style", "height", '100%'],
                ["style", "left", '58.33%'],
                ["style", "width", '225%']
            ],
            "${_PH4_8}": [
                ["style", "top", '-9.52%'],
                ["transform", "scaleY", '-0.51261'],
                ["transform", "scaleX", '0.41991'],
                ["style", "display", 'none'],
                ["style", "height", '225.91%'],
                ["style", "left", '-47.75%'],
                ["style", "width", '591.67%']
            ],
            "${_PH2_15}": [
                ["style", "top", '34.42%'],
                ["transform", "scaleY", '0.75342'],
                ["transform", "scaleX", '0.28163'],
                ["style", "display", 'none'],
                ["style", "height", '117.28%'],
                ["style", "left", '-175%'],
                ["style", "width", '626.61%']
            ],
            "${_PH3_4}": [
                ["style", "top", '48.07%'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '-0.96774'],
                ["style", "height", '114.73%'],
                ["style", "left", '143.96%'],
                ["style", "width", '214.04%']
            ],
            "${_b11}": [
                ["style", "top", '-8.12%'],
                ["style", "left", '-18.62%'],
                ["style", "display", 'none']
            ],
            "${_PH_9}": [
                ["style", "top", '54.61%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '106.99%'],
                ["style", "display", 'none'],
                ["style", "left", '179.04%'],
                ["style", "width", '179.04%']
            ],
            "${_PH_5}": [
                ["style", "top", '20.17%'],
                ["transform", "scaleY", '0.52577'],
                ["transform", "scaleX", '-0.33617'],
                ["style", "display", 'none'],
                ["style", "height", '166.73%'],
                ["style", "left", '-56.39%'],
                ["style", "width", '663.44%']
            ],
            "${_blankimageonplate}": [
                ["style", "top", '26.36%'],
                ["transform", "scaleX", '39.00965'],
                ["transform", "scaleY", '1.56409'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '10.23%'],
                ["style", "display", 'block'],
                ["style", "left", '109.66%'],
                ["style", "width", '2.06%']
            ],
            "${_plate4}": [
                ["style", "top", '35.94%'],
                ["style", "height", '11.59%'],
                ["style", "display", 'none'],
                ["style", "left", '31.03%'],
                ["style", "width", '50.2%']
            ],
            "${_PH_2}": [
                ["style", "top", '38.1%'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '1.15928'],
                ["style", "height", '133.9%'],
                ["style", "opacity", '1'],
                ["style", "left", '91.67%'],
                ["style", "width", '309.1%']
            ],
            "${_PH4_0}": [
                ["style", "top", '47.62%'],
                ["style", "display", 'none'],
                ["style", "height", '145.29%'],
                ["style", "left", '41.67%'],
                ["style", "width", '413.17%']
            ],
            "${_ham1}": [
                ["style", "top", '35.94%'],
                ["style", "height", '8.99%'],
                ["style", "display", 'none'],
                ["style", "left", '41.38%'],
                ["style", "width", '26.9%']
            ],
            "${_PH2_4}": [
                ["style", "top", '47.62%'],
                ["transform", "scaleX", '-0.96774'],
                ["style", "height", '114.73%'],
                ["style", "display", 'none'],
                ["style", "left", '83.33%'],
                ["style", "width", '214.04%']
            ],
            "${_PH4_5}": [
                ["style", "top", '20.17%'],
                ["transform", "scaleY", '0.52577'],
                ["transform", "scaleX", '-0.33617'],
                ["style", "display", 'none'],
                ["style", "height", '166.73%'],
                ["style", "left", '-56.39%'],
                ["style", "width", '663.44%']
            ],
            "${_PizzaOnHendGrp4}": [
                ["style", "top", '27.6%'],
                ["style", "height", '6.05%'],
                ["style", "display", 'none'],
                ["style", "left", '-28.28%'],
                ["style", "width", '8.31%']
            ],
            "${_PH2_5}": [
                ["style", "top", '28.57%'],
                ["transform", "scaleY", '0.52577'],
                ["transform", "scaleX", '-0.33617'],
                ["style", "display", 'none'],
                ["style", "height", '166.73%'],
                ["style", "left", '-133.33%'],
                ["style", "width", '663.44%']
            ],
            "${_PH3_12}": [
                ["style", "top", '42.86%'],
                ["style", "height", '119.05%'],
                ["style", "display", 'none'],
                ["style", "left", '125%'],
                ["style", "width", '250%']
            ],
            "${_PH4_14}": [
                ["style", "top", '71.43%'],
                ["style", "display", 'none'],
                ["style", "height", '52.38%'],
                ["style", "left", '191.67%'],
                ["style", "width", '116.67%']
            ],
            "${_PH3_8}": [
                ["style", "top", '-9.52%'],
                ["transform", "scaleY", '-0.51261'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '0.41991'],
                ["style", "height", '225.91%'],
                ["style", "left", '-47.75%'],
                ["style", "width", '591.67%']
            ],
            "${_PH3_5}": [
                ["style", "top", '20.17%'],
                ["transform", "scaleY", '0.52577'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '-0.33617'],
                ["style", "height", '166.73%'],
                ["style", "left", '-56.39%'],
                ["style", "width", '663.44%']
            ],
            "${_PH3_13}": [
                ["style", "top", '52.38%'],
                ["style", "height", '100%'],
                ["style", "display", 'none'],
                ["style", "left", '133.33%'],
                ["style", "width", '225%']
            ],
            "${_PH3_11}": [
                ["style", "top", '60.76%'],
                ["style", "display", 'none'],
                ["transform", "scaleY", '0.52173'],
                ["transform", "rotateZ", '-29deg'],
                ["transform", "scaleX", '0.32758'],
                ["style", "height", '136.46%'],
                ["style", "left", '-120.88%'],
                ["style", "width", '739.17%']
            ],
            "${_PH3_3}": [
                ["style", "top", '4.76%'],
                ["transform", "scaleY", '0.47916'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '-0.48937'],
                ["style", "height", '196.58%'],
                ["style", "left", '50%'],
                ["style", "width", '362.59%']
            ],
            "${_PH3_9}": [
                ["style", "top", '54.61%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '106.99%'],
                ["style", "display", 'none'],
                ["style", "left", '179.04%'],
                ["style", "width", '179.04%']
            ],
            "${_PH4_13}": [
                ["style", "top", '52.38%'],
                ["style", "display", 'none'],
                ["style", "height", '100%'],
                ["style", "left", '133.33%'],
                ["style", "width", '225%']
            ],
            "${_PH4_10}": [
                ["style", "border-top-left-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.40987'],
                ["style", "left", '47.9%'],
                ["style", "width", '439.82%'],
                ["style", "top", '22.08%'],
                ["style", "border-bottom-left-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '0.54054'],
                ["style", "height", '170.84%'],
                ["style", "border-top-right-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "display", 'none']
            ],
            "${_PH_15}": [
                ["style", "top", '34.42%'],
                ["transform", "scaleY", '0.75342'],
                ["transform", "scaleX", '0.28163'],
                ["style", "display", 'none'],
                ["style", "height", '117.28%'],
                ["style", "left", '-71.76%'],
                ["style", "width", '626.61%']
            ],
            "${_blankimageonplate2}": [
                ["style", "top", '22.61%'],
                ["style", "height", '15.87%'],
                ["style", "display", 'none'],
                ["style", "left", '-50.34%'],
                ["style", "width", '80.72%']
            ],
            "${_PizzaOnHendGrp3}": [
                ["style", "top", '27.6%'],
                ["style", "display", 'none'],
                ["style", "height", '6.05%'],
                ["style", "left", '89.5%'],
                ["style", "width", '8.31%']
            ],
            "${_PH_4}": [
                ["style", "top", '48.07%'],
                ["style", "height", '114.73%'],
                ["transform", "scaleX", '-0.96774'],
                ["style", "display", 'none'],
                ["style", "left", '143.96%'],
                ["style", "width", '214.04%']
            ],
            "${_PH3_0}": [
                ["style", "top", '47.62%'],
                ["style", "height", '145.29%'],
                ["style", "display", 'none'],
                ["style", "left", '41.67%'],
                ["style", "width", '413.17%']
            ],
            "${_PH2_0}": [
                ["style", "top", '47.62%'],
                ["style", "display", 'none'],
                ["style", "height", '145.29%'],
                ["style", "left", '0%'],
                ["style", "width", '413.17%']
            ],
            "${_rawshrimp2}": [
                ["style", "top", '37.39%'],
                ["style", "display", 'none'],
                ["style", "height", '9.28%'],
                ["style", "left", '40%'],
                ["style", "width", '29.66%']
            ],
            "${_PH_11}": [
                ["style", "top", '60.76%'],
                ["transform", "scaleX", '0.32758'],
                ["transform", "scaleY", '0.52173'],
                ["transform", "rotateZ", '-29deg'],
                ["style", "display", 'none'],
                ["style", "height", '136.46%'],
                ["style", "left", '-120.88%'],
                ["style", "width", '739.17%']
            ],
            "${_glass4}": [
                ["style", "top", '28.41%'],
                ["style", "left", '41.38%'],
                ["style", "display", 'none']
            ],
            "${_Right_down_p}": [
                ["style", "top", '-8.12%'],
                ["style", "left", '-17.93%'],
                ["style", "display", 'none']
            ],
            "${_PH3_10}": [
                ["style", "border-top-left-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.40987'],
                ["style", "left", '47.9%'],
                ["style", "width", '439.82%'],
                ["style", "top", '22.08%'],
                ["style", "border-bottom-left-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '0.54054'],
                ["style", "height", '170.84%'],
                ["style", "display", 'none'],
                ["style", "border-top-right-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_PH4_6}": [
                ["style", "top", '57.14%'],
                ["style", "display", 'none'],
                ["style", "height", '85.71%'],
                ["style", "left", '141.67%'],
                ["style", "width", '175%']
            ],
            "${_PH_7}": [
                ["transform", "rotateZ", '-55deg'],
                ["transform", "scaleX", '0.32955'],
                ["style", "left", '3.36%'],
                ["style", "width", '500.33%'],
                ["style", "top", '-23.81%'],
                ["transform", "scaleY", '0.62797'],
                ["style", "height", '261.38%'],
                ["transform", "skewY", '0deg'],
                ["style", "display", 'none']
            ],
            "${_leave2}": [
                ["style", "top", '37.97%'],
                ["style", "height", '8.41%'],
                ["style", "display", 'none'],
                ["style", "left", '35.86%'],
                ["style", "width", '36.56%']
            ],
            "${_PH_3}": [
                ["style", "top", '4.76%'],
                ["transform", "scaleY", '0.47916'],
                ["transform", "scaleX", '-0.48937'],
                ["style", "display", 'none'],
                ["style", "height", '196.58%'],
                ["style", "left", '50%'],
                ["style", "width", '362.59%']
            ],
            "${_PH2_7}": [
                ["transform", "rotateZ", '-55deg'],
                ["transform", "scaleX", '0.32955'],
                ["style", "left", '-16.67%'],
                ["style", "width", '500.33%'],
                ["style", "top", '-23.81%'],
                ["transform", "scaleY", '0.62797'],
                ["style", "height", '261.38%'],
                ["transform", "skewY", '0deg'],
                ["style", "display", 'none']
            ],
            "${_Left_down_p}": [
                ["style", "display", 'none'],
                ["style", "left", '-25.52%'],
                ["style", "top", '-8.12%']
            ],
            "${_green_cap2}": [
                ["style", "top", '34.49%'],
                ["style", "display", 'none'],
                ["style", "height", '10.14%'],
                ["style", "left", '40.69%'],
                ["style", "width", '25.52%']
            ],
            "${_PH_1}": [
                ["style", "top", '38.1%'],
                ["style", "display", 'none'],
                ["style", "height", '138.1%'],
                ["style", "opacity", '0.6666666865348816'],
                ["style", "left", '58.33%'],
                ["style", "width", '377.67%']
            ],
            "${_PH3_7}": [
                ["transform", "rotateZ", '-55deg'],
                ["transform", "scaleX", '0.32955'],
                ["style", "left", '3.36%'],
                ["style", "width", '500.33%'],
                ["style", "top", '-23.81%'],
                ["transform", "scaleY", '0.62797'],
                ["style", "height", '261.38%'],
                ["style", "display", 'none'],
                ["transform", "skewY", '0deg']
            ],
            "${_cheese2}": [
                ["style", "top", '36.81%'],
                ["style", "display", 'none'],
                ["style", "height", '8.19%'],
                ["style", "left", '37.93%'],
                ["style", "width", '29.8%']
            ],
            "${_PH4_12}": [
                ["style", "top", '42.86%'],
                ["style", "display", 'none'],
                ["style", "height", '119.05%'],
                ["style", "left", '125%'],
                ["style", "width", '250%']
            ],
            "${_PH_14}": [
                ["style", "top", '71.43%'],
                ["style", "display", 'none'],
                ["style", "height", '52.38%'],
                ["style", "left", '191.67%'],
                ["style", "width", '116.67%']
            ],
            "${_Right_backUp_p}": [
                ["style", "display", 'none'],
                ["style", "top", '-4.93%']
            ],
            "${_b14}": [
                ["style", "display", 'block'],
                ["style", "left", '-23.45%'],
                ["style", "top", '-8.41%']
            ],
            "${_PH4_11}": [
                ["style", "top", '60.76%'],
                ["transform", "scaleX", '0.32758'],
                ["transform", "scaleY", '0.52173'],
                ["transform", "rotateZ", '-29deg'],
                ["style", "display", 'none'],
                ["style", "height", '136.46%'],
                ["style", "left", '-120.88%'],
                ["style", "width", '739.17%']
            ],
            "${_PH_10}": [
                ["style", "border-top-left-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.40987'],
                ["style", "left", '47.9%'],
                ["style", "width", '439.82%'],
                ["style", "top", '22.08%'],
                ["style", "border-bottom-left-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '0.54054'],
                ["style", "height", '170.84%'],
                ["style", "border-top-right-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "display", 'none']
            ],
            "${_stick2}": [
                ["style", "top", '38.55%'],
                ["style", "height", '6.96%'],
                ["style", "display", 'none'],
                ["style", "left", '36.55%'],
                ["style", "width", '35.18%']
            ],
            "${_PH2_10}": [
                ["style", "border-top-left-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.40987'],
                ["style", "left", '-66.67%'],
                ["style", "width", '439.82%'],
                ["style", "top", '22.08%'],
                ["style", "border-bottom-left-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '0.54054'],
                ["style", "height", '170.84%'],
                ["style", "border-top-right-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "display", 'none']
            ],
            "${_Left_backUp_p}": [
                ["style", "top", '-5.51%'],
                ["style", "left", '-23.45%'],
                ["style", "display", 'none']
            ],
            "${_PH_0}": [
                ["style", "top", '47.62%'],
                ["style", "display", 'none'],
                ["style", "height", '145.29%'],
                ["style", "left", '41.67%'],
                ["style", "width", '413.17%']
            ],
            "${_PH2_9}": [
                ["style", "top", '54.61%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '106.99%'],
                ["style", "display", 'none'],
                ["style", "left", '83.33%'],
                ["style", "width", '179.04%']
            ],
            "${_PH2_1}": [
                ["style", "top", '38.1%'],
                ["style", "display", 'none'],
                ["style", "height", '138.1%'],
                ["style", "opacity", '0.6666666865348816'],
                ["style", "left", '25%'],
                ["style", "width", '377.67%']
            ],
            "${_tuna2}": [
                ["style", "top", '36.81%'],
                ["style", "height", '7.54%'],
                ["style", "display", 'none'],
                ["style", "left", '43.45%'],
                ["style", "width", '22.76%']
            ],
            "${_b14C}": [
                ["transform", "scaleX", '-1.00029'],
                ["style", "top", '-8.41%'],
                ["style", "left", '-23.45%'],
                ["style", "display", 'none']
            ],
            "${_plate3}": [
                ["style", "top", '28.41%'],
                ["style", "height", '13.33%'],
                ["style", "display", 'block'],
                ["style", "left", '86.9%'],
                ["style", "width", '48.28%']
            ],
            "${_PH_12}": [
                ["style", "top", '42.86%'],
                ["style", "display", 'none'],
                ["style", "height", '119.05%'],
                ["style", "left", '125%'],
                ["style", "width", '250%']
            ],
            "${_PH4_1}": [
                ["style", "top", '38.1%'],
                ["style", "display", 'none'],
                ["style", "height", '138.1%'],
                ["style", "opacity", '0.6666666865348816'],
                ["style", "left", '58.33%'],
                ["style", "width", '377.67%']
            ],
            "${_PH3_6}": [
                ["style", "top", '57.14%'],
                ["style", "height", '85.71%'],
                ["style", "display", 'none'],
                ["style", "left", '141.67%'],
                ["style", "width", '175%']
            ],
            "${_PH_6}": [
                ["style", "top", '57.14%'],
                ["style", "display", 'none'],
                ["style", "height", '85.71%'],
                ["style", "left", '141.67%'],
                ["style", "width", '175%']
            ],
            "${_eye1}": [
                ["style", "top", '12.93%'],
                ["style", "left", '31.72%'],
                ["style", "display", 'block']
            ],
            "${_PH3_15}": [
                ["style", "top", '34.42%'],
                ["transform", "scaleY", '0.75342'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '0.28163'],
                ["style", "height", '117.28%'],
                ["style", "left", '-71.76%'],
                ["style", "width", '626.61%']
            ],
            "${_onion2}": [
                ["style", "top", '35.94%'],
                ["style", "display", 'none'],
                ["style", "height", '10.72%'],
                ["style", "left", '39.31%'],
                ["style", "width", '28.52%']
            ],
            "${_PH4_2}": [
                ["style", "top", '38.1%'],
                ["transform", "scaleX", '1.15928'],
                ["style", "height", '133.9%'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '91.67%'],
                ["style", "width", '309.1%']
            ],
            "${symbolSelector}": [
                ["style", "height", '57.5%'],
                ["style", "width", '18.13%']
            ],
            "${_plate33}": [
                ["style", "top", '27.83%'],
                ["style", "display", 'none'],
                ["style", "height", '13.33%'],
                ["style", "left", '-36.55%'],
                ["style", "width", '47.59%']
            ],
            "${_PH4_9}": [
                ["style", "top", '54.61%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '106.99%'],
                ["style", "display", 'none'],
                ["style", "left", '179.04%'],
                ["style", "width", '179.04%']
            ],
            "${_tomato2}": [
                ["style", "top", '34.2%'],
                ["style", "display", 'none'],
                ["style", "height", '12.75%'],
                ["style", "left", '35.86%'],
                ["style", "width", '36.56%']
            ],
            "${_pizzabase2}": [
                ["style", "top", '36.81%'],
                ["style", "display", 'none'],
                ["style", "height", '8.7%'],
                ["style", "left", '37.24%'],
                ["style", "width", '36.71%']
            ],
            "${_PH_13}": [
                ["style", "top", '52.38%'],
                ["style", "display", 'none'],
                ["style", "height", '100%'],
                ["style", "left", '133.33%'],
                ["style", "width", '225%']
            ],
            "${_PH3_2}": [
                ["style", "top", '38.1%'],
                ["style", "height", '133.9%'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '1.15928'],
                ["style", "opacity", '1'],
                ["style", "left", '91.67%'],
                ["style", "width", '309.1%']
            ],
            "${_PH2_14}": [
                ["style", "top", '71.43%'],
                ["style", "display", 'none'],
                ["style", "height", '52.38%'],
                ["style", "left", '58.33%'],
                ["style", "width", '116.67%']
            ],
            "${_PH4_7}": [
                ["transform", "rotateZ", '-55deg'],
                ["transform", "scaleX", '0.32955'],
                ["style", "left", '3.36%'],
                ["style", "width", '500.33%'],
                ["style", "top", '-23.81%'],
                ["transform", "scaleY", '0.62797'],
                ["style", "height", '261.38%'],
                ["transform", "skewY", '0deg'],
                ["style", "display", 'none']
            ],
            "${_PH3_14}": [
                ["style", "top", '71.43%'],
                ["style", "height", '52.38%'],
                ["style", "display", 'none'],
                ["style", "left", '191.67%'],
                ["style", "width", '116.67%']
            ],
            "${_red_cap2}": [
                ["style", "top", '32.17%'],
                ["style", "display", 'none'],
                ["style", "height", '15.94%'],
                ["style", "left", '37.24%'],
                ["style", "width", '35.18%']
            ],
            "${_PH4_15}": [
                ["style", "top", '34.42%'],
                ["transform", "scaleY", '0.75342'],
                ["transform", "scaleX", '0.28163'],
                ["style", "display", 'none'],
                ["style", "height", '117.28%'],
                ["style", "left", '-71.76%'],
                ["style", "width", '626.61%']
            ],
            "${_PH4_3}": [
                ["style", "top", '4.76%'],
                ["transform", "scaleY", '0.47916'],
                ["transform", "scaleX", '-0.48937'],
                ["style", "display", 'none'],
                ["style", "height", '196.58%'],
                ["style", "left", '50%'],
                ["style", "width", '362.59%']
            ],
            "${_PH_8}": [
                ["style", "top", '-9.52%'],
                ["transform", "scaleY", '-0.51261'],
                ["transform", "scaleX", '0.41991'],
                ["style", "display", 'none'],
                ["style", "height", '225.91%'],
                ["style", "left", '-47.75%'],
                ["style", "width", '591.67%']
            ],
            "${_PH2_2}": [
                ["style", "top", '38.1%'],
                ["style", "display", 'none'],
                ["style", "height", '133.9%'],
                ["transform", "scaleX", '1.15928'],
                ["style", "opacity", '1'],
                ["style", "left", '58.33%'],
                ["style", "width", '309.1%']
            ],
            "${_PH2_6}": [
                ["style", "top", '57.14%'],
                ["style", "display", 'none'],
                ["style", "height", '85.71%'],
                ["style", "left", '91.67%'],
                ["style", "width", '175%']
            ],
            "${_PizzaOnHendGrp2}": [
                ["style", "top", '27.6%'],
                ["style", "height", '6.05%'],
                ["style", "display", 'none'],
                ["style", "left", '-30.34%'],
                ["style", "width", '8.31%']
            ],
            "${_PH2_12}": [
                ["style", "top", '42.86%'],
                ["style", "display", 'none'],
                ["style", "height", '119.05%'],
                ["style", "left", '66.67%'],
                ["style", "width", '250%']
            ],
            "${_PizzaOnHendGrp1}": [
                ["style", "top", '27.6%'],
                ["style", "height", '6.05%'],
                ["style", "display", 'block'],
                ["style", "left", '89.5%'],
                ["style", "width", '8.31%']
            ],
            "${_leaves2}": [
                ["style", "top", '38.26%'],
                ["style", "height", '7.54%'],
                ["style", "display", 'none'],
                ["style", "left", '37.24%'],
                ["style", "width", '33.8%']
            ],
            "${_b25}": [
                ["style", "top", '-9.57%'],
                ["style", "left", '-31.03%'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7000,
            autoPlay: true,
            timeline: [
                { id: "eid3105", tween: [ "style", "${_cheese2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid585", tween: [ "style", "${_cheese2}", "display", 'none', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid3213", tween: [ "style", "${_PH_8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid260", tween: [ "style", "${_GC2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid588", tween: [ "style", "${_GC2}", "display", 'none', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid3197", tween: [ "style", "${_PizzaOnHendGrp1}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
                { id: "eid3198", tween: [ "style", "${_PizzaOnHendGrp1}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid3199", tween: [ "style", "${_PizzaOnHendGrp1}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
                { id: "eid3202", tween: [ "style", "${_PizzaOnHendGrp1}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
                { id: "eid3203", tween: [ "style", "${_PizzaOnHendGrp1}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
                { id: "eid3204", tween: [ "style", "${_PizzaOnHendGrp1}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
                { id: "eid3205", tween: [ "style", "${_PizzaOnHendGrp1}", "display", 'none', { fromValue: 'block'}], position: 5500, duration: 0 },
                { id: "eid3232", tween: [ "style", "${_PH2_5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid523", tween: [ "style", "${_b25}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid526", tween: [ "style", "${_b25}", "display", 'none', { fromValue: 'block'}], position: 6250, duration: 0 },
                { id: "eid3537", tween: [ "style", "${_Left_backUp_p}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid345", tween: [ "style", "${_Left_backUp_p}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid346", tween: [ "style", "${_Left_backUp_p}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
                { id: "eid302", tween: [ "style", "${_leave2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid262", tween: [ "style", "${_olive2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid306", tween: [ "style", "${_stick2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3233", tween: [ "style", "${_PH2_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid362", tween: [ "style", "${_plate33}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid363", tween: [ "style", "${_plate33}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
                { id: "eid364", tween: [ "style", "${_plate33}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid3211", tween: [ "style", "${_PH_10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid4132", tween: [ "style", "${_PizzaOnHendGrp3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid4133", tween: [ "style", "${_PizzaOnHendGrp3}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid3235", tween: [ "style", "${_PH2_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2938", tween: [ "style", "${_b14}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid332", tween: [ "style", "${_b14}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
                { id: "eid334", tween: [ "style", "${_b14}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid337", tween: [ "style", "${_b14}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
                { id: "eid348", tween: [ "style", "${_b14}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
                { id: "eid350", tween: [ "style", "${_b14}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
                { id: "eid370", tween: [ "style", "${_b14}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
                { id: "eid373", tween: [ "style", "${_b14}", "display", 'none', { fromValue: 'block'}], position: 5500, duration: 0 },
                { id: "eid2053", tween: [ "style", "${_b14}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid3097", tween: [ "style", "${_plate3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid335", tween: [ "style", "${_plate3}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
                { id: "eid4131", tween: [ "style", "${_plate3}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid338", tween: [ "style", "${_plate3}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
                { id: "eid347", tween: [ "style", "${_plate3}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
                { id: "eid349", tween: [ "style", "${_plate3}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
                { id: "eid371", tween: [ "style", "${_plate3}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
                { id: "eid374", tween: [ "style", "${_plate3}", "display", 'none', { fromValue: 'block'}], position: 5500, duration: 0 },
                { id: "eid3234", tween: [ "style", "${_PH2_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3088", tween: [ "style", "${_tomato2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3207", tween: [ "style", "${_PH_14}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3236", tween: [ "style", "${_PH2_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3209", tween: [ "style", "${_PH_12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3216", tween: [ "style", "${_PH_5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3212", tween: [ "style", "${_PH_9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid307", tween: [ "style", "${_tuna2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3118", tween: [ "style", "${_Left_down_p}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid331", tween: [ "style", "${_Left_down_p}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid333", tween: [ "style", "${_Left_down_p}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid3237", tween: [ "style", "${_PH2_0}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3219", tween: [ "style", "${_PH_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2137", tween: [ "style", "${_pizzabox2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid261", tween: [ "style", "${_red_cap2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid396", tween: [ "style", "${_blankimageonplate2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid391", tween: [ "style", "${_blankimageonplate2}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
                { id: "eid405", tween: [ "style", "${_blankimageonplate2}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid397", tween: [ "style", "${_blankimageonplate2}", "display", 'none', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid259", tween: [ "style", "${_pizzabase2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid305", tween: [ "style", "${_mush2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid303", tween: [ "style", "${_leaves2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3224", tween: [ "style", "${_PH2_13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3091", tween: [ "style", "${_onion2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3019", tween: [ "style", "${_b21}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3226", tween: [ "style", "${_PH2_11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3206", tween: [ "style", "${_PH_15}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3229", tween: [ "style", "${_PH2_8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3215", tween: [ "style", "${_PH_6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3404", tween: [ "style", "${_Right_down_p}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid339", tween: [ "style", "${_Right_down_p}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid340", tween: [ "style", "${_Right_down_p}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
                { id: "eid3208", tween: [ "style", "${_PH_13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid518", tween: [ "style", "${_eye1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid520", tween: [ "style", "${_eye1}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
                { id: "eid521", tween: [ "style", "${_eye1}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid522", tween: [ "style", "${_eye1}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
                { id: "eid519", tween: [ "style", "${_eye1}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
                { id: "eid3217", tween: [ "style", "${_PH_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3220", tween: [ "style", "${_PH_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3225", tween: [ "style", "${_PH2_12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid330", tween: [ "style", "${_b11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid377", tween: [ "style", "${_b11}", "display", 'block', { fromValue: 'none'}], position: 6250, duration: 0 },
                { id: "eid2050", tween: [ "style", "${_b11}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0 },
                { id: "eid3385", tween: [ "style", "${_rawshrimp2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3223", tween: [ "style", "${_PH2_14}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3222", tween: [ "style", "${_PH2_15}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3230", tween: [ "style", "${_PH2_7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3196", tween: [ "style", "${_PizzaOnHendGrp2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3200", tween: [ "style", "${_PizzaOnHendGrp2}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
                { id: "eid3201", tween: [ "style", "${_PizzaOnHendGrp2}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid3231", tween: [ "style", "${_PH2_6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2208", tween: [ "style", "${_plate33}", "top", '27.83%', { fromValue: '27.83%'}], position: 2250, duration: 0 },
                { id: "eid3218", tween: [ "style", "${_PH_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid399", tween: [ "style", "${_blankimageonplate}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid400", tween: [ "style", "${_blankimageonplate}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
                { id: "eid409", tween: [ "style", "${_blankimageonplate}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid410", tween: [ "style", "${_blankimageonplate}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
                { id: "eid406", tween: [ "style", "${_blankimageonplate}", "display", 'block', { fromValue: 'block'}], position: 3750, duration: 0 },
                { id: "eid407", tween: [ "style", "${_blankimageonplate}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
                { id: "eid408", tween: [ "style", "${_blankimageonplate}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
                { id: "eid411", tween: [ "style", "${_blankimageonplate}", "display", 'none', { fromValue: 'block'}], position: 5500, duration: 0 },
                { id: "eid304", tween: [ "style", "${_ham1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3228", tween: [ "style", "${_PH2_9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid380", tween: [ "style", "${_glass4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2226", tween: [ "style", "${_glass4}", "display", 'block', { fromValue: 'none'}], position: 6250, duration: 0 },
                { id: "eid2051", tween: [ "style", "${_glass4}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0 },
                { id: "eid3221", tween: [ "style", "${_PH_0}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3214", tween: [ "style", "${_PH_7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3536", tween: [ "style", "${_Right_backUp_p}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid351", tween: [ "style", "${_Right_backUp_p}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
                { id: "eid366", tween: [ "style", "${_Right_backUp_p}", "display", 'none', { fromValue: 'block'}], position: 5250, duration: 0 },
                { id: "eid4134", tween: [ "style", "${_PizzaOnHendGrp4}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
                { id: "eid3616", tween: [ "style", "${_plate4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid376", tween: [ "style", "${_plate4}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid2048", tween: [ "style", "${_plate4}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0 },
                { id: "eid3210", tween: [ "style", "${_PH_11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3227", tween: [ "style", "${_PH2_10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid357", tween: [ "style", "${_b14C}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid358", tween: [ "style", "${_b14C}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
                { id: "eid365", tween: [ "style", "${_b14C}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid2404", tween: [ "style", "${_green_cap2}", "display", 'none', { fromValue: 'none'}], position: 4, duration: 0 }            ]
        }
    }
},
"hand_1": {
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
                    transform: [[0, 0], ['90']],
                    id: 'hath1',
                    type: 'image',
                    rect: ['-4%', '3.7%', '108%', '92.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/hath1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '9%'],
                ["style", "width", '6.25%']
            ],
            "${_hath1}": [
                ["style", "top", '3.73%'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '92.56%'],
                ["transform", "scaleX", '1'],
                ["style", "left", '-4.04%'],
                ["style", "width", '108%']
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
                { id: "eid479", tween: [ "transform", "${_hath1}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid480", tween: [ "transform", "${_hath1}", "scaleX", '1', { fromValue: '0.8'}], position: 500, duration: 500 },
                { id: "eid481", tween: [ "transform", "${_hath1}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid482", tween: [ "transform", "${_hath1}", "scaleY", '1', { fromValue: '0.8'}], position: 500, duration: 500 }            ]
        }
    }
},
"eye1": {
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
                    rect: ['0%', '-0.1%', '100%', '100.1%', 'auto', 'auto'],
                    id: '_14__15',
                    fill: ['rgba(0,0,0,0)', 'images/girl/eye%20patch/14%20%26%2015.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '5.51%'],
                ["style", "width", '35.87%']
            ],
            "${__14__15}": [
                ["style", "top", '-0.05%'],
                ["style", "left", '-0.02%'],
                ["style", "display", 'none']
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
                { id: "eid490", tween: [ "style", "${__14__15}", "display", 'none', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid491", tween: [ "style", "${__14__15}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
                { id: "eid492", tween: [ "style", "${__14__15}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 }            ]
        }
    }
},
"hotgrll": {
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
                    rect: ['-0.1%', '0%', '100%', '99.9%', 'auto', 'auto'],
                    id: 'hotgrll2',
                    opacity: 0.88888888888889,
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/grill/hotgrll.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hotgrll2}": [
                ["style", "top", '0%'],
                ["style", "display", 'block'],
                ["style", "height", '99.99%'],
                ["style", "opacity", '0'],
                ["style", "left", '0.02%'],
                ["style", "width", '100%']
            ],
            "${symbolSelector}": [
                ["style", "height", '22.33%'],
                ["style", "width", '23.5%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 9000,
            autoPlay: true,
            timeline: [
                { id: "eid594", tween: [ "style", "${_hotgrll2}", "opacity", '0.8', { fromValue: '0'}], position: 0, duration: 1500 },
                { id: "eid2005", tween: [ "style", "${_hotgrll2}", "opacity", '0.5', { fromValue: '0.8'}], position: 1500, duration: 750 },
                { id: "eid2006", tween: [ "style", "${_hotgrll2}", "opacity", '0.82051282051282', { fromValue: '0.5'}], position: 2250, duration: 750 },
                { id: "eid6065", tween: [ "style", "${_hotgrll2}", "opacity", '0.5', { fromValue: '0.8'}], position: 3000, duration: 750 },
                { id: "eid6066", tween: [ "style", "${_hotgrll2}", "opacity", '0.82051282051282', { fromValue: '0.5'}], position: 3750, duration: 750 },
                { id: "eid6067", tween: [ "style", "${_hotgrll2}", "opacity", '0.5', { fromValue: '0.8'}], position: 4500, duration: 750 },
                { id: "eid6068", tween: [ "style", "${_hotgrll2}", "opacity", '0.82051282051282', { fromValue: '0.5'}], position: 5250, duration: 750 },
                { id: "eid6069", tween: [ "style", "${_hotgrll2}", "opacity", '0.5', { fromValue: '0.8'}], position: 6000, duration: 750 },
                { id: "eid6070", tween: [ "style", "${_hotgrll2}", "opacity", '0.82051282051282', { fromValue: '0.5'}], position: 6750, duration: 750 },
                { id: "eid6071", tween: [ "style", "${_hotgrll2}", "opacity", '0.5', { fromValue: '0.8'}], position: 7500, duration: 750 },
                { id: "eid6072", tween: [ "style", "${_hotgrll2}", "opacity", '0.82051282051282', { fromValue: '0.5'}], position: 8250, duration: 750 },
                { id: "eid591", tween: [ "style", "${_hotgrll2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"hint_sym": {
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
                    id: 'hint',
                    type: 'image',
                    rect: ['-0.3%', '0%', '100.1%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/hint.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '15.17%'],
                ["style", "width", '11.88%']
            ],
            "${_hint}": [
                ["style", "top", '-0.04%'],
                ["transform", "scaleY", '1'],
                ["style", "height", '100.02%'],
                ["transform", "scaleX", '1'],
                ["style", "left", '-0.29%'],
                ["style", "width", '100.05%']
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
                { id: "eid3821", tween: [ "transform", "${_hint}", "scaleY", '0.5', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid3822", tween: [ "transform", "${_hint}", "scaleY", '1', { fromValue: '0.5'}], position: 500, duration: 500 },
                { id: "eid3819", tween: [ "transform", "${_hint}", "scaleX", '0.5', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid3820", tween: [ "transform", "${_hint}", "scaleX", '1', { fromValue: '0.5'}], position: 500, duration: 500 }            ]
        }
    }
},
"Wrong": {
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
                    transform: [[0, 0], ['90']],
                    display: 'block',
                    rect: ['-6%', '4.7%', '110.1%', '89.9%', 'auto', 'auto'],
                    id: 'arrow',
                    fill: ['rgba(0,0,0,0)', 'images/false_icon/wrong.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_arrow}": [
                ["style", "top", '4.72%'],
                ["style", "display", 'block'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '89.86%'],
                ["transform", "scaleX", '1'],
                ["style", "left", '-6%'],
                ["style", "width", '110.13%']
            ],
            "${symbolSelector}": [
                ["style", "height", '14.17%'],
                ["style", "width", '9.63%']
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
                { id: "eid634", tween: [ "transform", "${_arrow}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid635", tween: [ "transform", "${_arrow}", "scaleY", '1', { fromValue: '0.8'}], position: 500, duration: 500 },
                { id: "eid2002", tween: [ "transform", "${_arrow}", "scaleY", '0.8', { fromValue: '1'}], position: 1000, duration: 500 },
                { id: "eid2003", tween: [ "transform", "${_arrow}", "scaleY", '1', { fromValue: '0.8'}], position: 1500, duration: 500 },
                { id: "eid2027", tween: [ "transform", "${_arrow}", "scaleY", '0.8', { fromValue: '1'}], position: 2000, duration: 500 },
                { id: "eid2028", tween: [ "transform", "${_arrow}", "scaleY", '1', { fromValue: '0.8'}], position: 2500, duration: 500 },
                { id: "eid2029", tween: [ "style", "${_arrow}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid632", tween: [ "transform", "${_arrow}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid633", tween: [ "transform", "${_arrow}", "scaleX", '1', { fromValue: '0.8'}], position: 500, duration: 500 },
                { id: "eid2000", tween: [ "transform", "${_arrow}", "scaleX", '0.8', { fromValue: '1'}], position: 1000, duration: 500 },
                { id: "eid2001", tween: [ "transform", "${_arrow}", "scaleX", '1', { fromValue: '0.8'}], position: 1500, duration: 500 },
                { id: "eid2025", tween: [ "transform", "${_arrow}", "scaleX", '0.8', { fromValue: '1'}], position: 2000, duration: 500 },
                { id: "eid2026", tween: [ "transform", "${_arrow}", "scaleX", '1', { fromValue: '0.8'}], position: 2500, duration: 500 }            ]
        }
    }
},
"cust_5": {
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
                    id: 'cu1',
                    fill: ['rgba(0,0,0,0)', 'images/customer5/cust1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'cust2',
                    fill: ['rgba(0,0,0,0)', 'images/customer5/cust2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'cust32',
                    fill: ['rgba(0,0,0,0)', 'images/customer5/cust3.png', '0px', '0px']
                },
                {
                    id: 'eye4',
                    type: 'rect',
                    rect: ['31.4%', '18.1%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['40.3%', '-9.9%', '22%', '20%', 'auto', 'auto'],
                    id: 'qus5',
                    fill: ['rgba(0,0,0,0)', 'images/false_icon/qus.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'eye4',
                symbolName: 'eye4',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_qus5}": [
                ["style", "top", '-9.91%'],
                ["transform", "scaleY", '1'],
                ["style", "height", '20%'],
                ["transform", "scaleX", '1'],
                ["style", "display", 'none'],
                ["style", "left", '40.28%'],
                ["style", "width", '22%']
            ],
            "${symbolSelector}": [
                ["style", "height", '43%'],
                ["style", "width", '24.13%']
            ],
            "${_cust2}": [
                ["style", "top", '2.7%'],
                ["style", "height", '100%'],
                ["style", "display", 'none'],
                ["style", "left", '0%'],
                ["style", "width", '100%']
            ],
            "${_cust32}": [
                ["style", "top", '2.7%'],
                ["style", "height", '100%'],
                ["style", "display", 'none'],
                ["style", "left", '0%'],
                ["style", "width", '100%']
            ],
            "${_cu1}": [
                ["style", "top", '2.7%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${_eye4}": [
                ["style", "top", '22.52%'],
                ["style", "left", '33.33%'],
                ["transform", "scaleX", '0.90947']
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
                { id: "eid5675", tween: [ "transform", "${_qus5}", "scaleX", '0.8', { fromValue: '1'}], position: 2000, duration: 1000 },
                { id: "eid5676", tween: [ "transform", "${_qus5}", "scaleX", '1', { fromValue: '0.8'}], position: 3000, duration: 1000 },
                { id: "eid5677", tween: [ "transform", "${_qus5}", "scaleY", '0.8', { fromValue: '1'}], position: 2000, duration: 1000 },
                { id: "eid5678", tween: [ "transform", "${_qus5}", "scaleY", '1', { fromValue: '0.8'}], position: 3000, duration: 1000 },
                { id: "eid5669", tween: [ "style", "${_qus5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5670", tween: [ "style", "${_qus5}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid1033", tween: [ "style", "${_cust2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1035", tween: [ "style", "${_cust2}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid1037", tween: [ "style", "${_cust2}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid1034", tween: [ "style", "${_cust32}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1038", tween: [ "style", "${_cust32}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid5660", tween: [ "style", "${_cu1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1036", tween: [ "style", "${_cu1}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 }            ]
        }
    }
},
"cust_3": {
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
                    id: 'cu1',
                    fill: ['rgba(0,0,0,0)', 'images/customer3/M1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['-11.8%', '11.7%', '288.9%', '255.9%', 'auto', 'auto'],
                    id: 'M2',
                    fill: ['rgba(0,0,0,0)', 'images/customer3/M2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'M32',
                    fill: ['rgba(0,0,0,0)', 'images/customer3/M3.png', '0px', '0px']
                },
                {
                    id: 'eye4',
                    type: 'rect',
                    rect: ['31.4%', '18.1%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['31.9%', '-16.2%', '22%', '20%', 'auto', 'auto'],
                    id: 'qus3',
                    fill: ['rgba(0,0,0,0)', 'images/false_icon/qus.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'eye4',
                symbolName: 'eye4',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_M2}": [
                ["style", "top", '1.8%'],
                ["style", "height", '100%'],
                ["style", "display", 'none'],
                ["style", "left", '0%'],
                ["style", "width", '100%']
            ],
            "${symbolSelector}": [
                ["style", "height", '43%'],
                ["style", "width", '24.13%']
            ],
            "${_eye4}": [
                ["transform", "scaleX", '0.68579'],
                ["style", "top", '13.51%'],
                ["style", "left", '21.89%'],
                ["transform", "scaleY", '1.0775']
            ],
            "${_M32}": [
                ["style", "top", '1.8%'],
                ["style", "height", '100%'],
                ["style", "display", 'none'],
                ["style", "left", '0%'],
                ["style", "width", '100%']
            ],
            "${_cu1}": [
                ["style", "display", 'block'],
                ["style", "left", '0.02%'],
                ["style", "top", '1.8%']
            ],
            "${_qus3}": [
                ["style", "top", '-16.22%'],
                ["transform", "scaleY", '1'],
                ["style", "height", '20%'],
                ["transform", "scaleX", '1'],
                ["style", "display", 'none'],
                ["style", "left", '31.94%'],
                ["style", "width", '22%']
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
                { id: "eid1022", tween: [ "style", "${_M2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1024", tween: [ "style", "${_M2}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid1025", tween: [ "style", "${_M2}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid5635", tween: [ "style", "${_qus3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5636", tween: [ "style", "${_qus3}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid5643", tween: [ "transform", "${_qus3}", "scaleY", '0.8', { fromValue: '1'}], position: 2000, duration: 1000 },
                { id: "eid5644", tween: [ "transform", "${_qus3}", "scaleY", '1', { fromValue: '0.8'}], position: 3000, duration: 1000 },
                { id: "eid1204", tween: [ "style", "${_cu1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1212", tween: [ "style", "${_cu1}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid5641", tween: [ "transform", "${_qus3}", "scaleX", '0.8', { fromValue: '1'}], position: 2000, duration: 1000 },
                { id: "eid5642", tween: [ "transform", "${_qus3}", "scaleX", '1', { fromValue: '0.8'}], position: 3000, duration: 1000 },
                { id: "eid1021", tween: [ "style", "${_M32}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1026", tween: [ "style", "${_M32}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 }            ]
        }
    }
},
"Earning_ani": {
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
                    type: 'text',
                    rect: ['0.2%', '-0.5%', '99.4%', '100%', 'auto', 'auto'],
                    id: 'EarningText',
                    text: '$0',
                    display: 'block',
                    font: ['black-ops-one, sans-serif', [2.5, 'em'], 'rgba(239,15,50,1.00)', 'normal', 'none', '']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_EarningText}": [
                ["color", "color", 'rgba(239,15,50,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '0.13%'],
                ["style", "font-size", '2.5em'],
                ["style", "top", '-0.91%'],
                ["style", "display", 'block'],
                ["style", "font-family", 'black-ops-one, sans-serif'],
                ["style", "width", '99.37%'],
                ["style", "height", '100%']
            ],
            "${symbolSelector}": [
                ["style", "height", '7%'],
                ["style", "width", '11.88%']
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
                { id: "eid951", tween: [ "style", "${_EarningText}", "opacity", '0', { fromValue: '1'}], position: 750, duration: 250 },
                { id: "eid949", tween: [ "style", "${_EarningText}", "top", '-92.86%', { fromValue: '-0.91%'}], position: 0, duration: 1000 },
                { id: "eid888", tween: [ "style", "${_EarningText}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"TotalEar_ani": {
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
                    rect: ['0%', '0%', '100%', '99.6%', 'auto', 'auto'],
                    id: 'TotalEarningText',
                    text: '$0',
                    font: ['black-ops-one, sans-serif', [2.5, 'em'], 'rgba(239,15,50,1.00)', 'normal', 'none', ''],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_TotalEarningText}": [
                ["style", "top", '0.04%'],
                ["style", "font-size", '2.5em'],
                ["style", "height", '99.55%'],
                ["color", "color", 'rgba(239,15,50,1)'],
                ["style", "font-family", 'black-ops-one, sans-serif'],
                ["style", "left", '0%'],
                ["style", "width", '100.01%']
            ],
            "${symbolSelector}": [
                ["style", "height", '8.17%'],
                ["style", "width", '13.5%']
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
                { id: "eid968", tween: [ "style", "${_TotalEarningText}", "height", '79.59%', { fromValue: '99.55%'}], position: 0, duration: 500 },
                { id: "eid969", tween: [ "style", "${_TotalEarningText}", "height", '99.55%', { fromValue: '79.59%'}], position: 500, duration: 500 },
                { id: "eid966", tween: [ "style", "${_TotalEarningText}", "width", '56.94%', { fromValue: '100.01%'}], position: 0, duration: 500 },
                { id: "eid967", tween: [ "style", "${_TotalEarningText}", "width", '100.01%', { fromValue: '56.94%'}], position: 500, duration: 500 }            ]
        }
    }
},
"Quction_ani": {
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
                    id: '_1',
                    type: 'image',
                    rect: ['0%', '0%', '100.1%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/false_icon/qus.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '8.83%'],
                ["style", "width", '3.63%']
            ],
            "${__1}": [
                ["transform", "scaleX", '1'],
                ["style", "top", '0.04%'],
                ["transform", "scaleY", '1'],
                ["style", "left", '0%']
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
                { id: "eid979", tween: [ "transform", "${__1}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid980", tween: [ "transform", "${__1}", "scaleY", '1', { fromValue: '0.8'}], position: 500, duration: 500 },
                { id: "eid977", tween: [ "transform", "${__1}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid978", tween: [ "transform", "${__1}", "scaleX", '1', { fromValue: '0.8'}], position: 500, duration: 500 }            ]
        }
    }
},
"strar_1": {
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
                    rect: ['0%', '0%', '100.1%', '100%', 'auto', 'auto'],
                    id: 's1',
                    fill: ['rgba(0,0,0,0)', 'images/All_btn/s1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_s1}": [
                ["style", "top", '-0.06%'],
                ["transform", "scaleX", '0'],
                ["transform", "scaleY", '0'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'none'],
                ["style", "height", '100%'],
                ["style", "left", '-0.25%'],
                ["style", "width", '100%']
            ],
            "${symbolSelector}": [
                ["style", "height", '18.5%'],
                ["style", "width", '14.26%']
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
                { id: "eid5911", tween: [ "transform", "${_s1}", "scaleY", '1', { fromValue: '0'}], position: 500, duration: 500 },
                { id: "eid5910", tween: [ "transform", "${_s1}", "scaleX", '1', { fromValue: '0'}], position: 500, duration: 500 },
                { id: "eid5906", tween: [ "style", "${_s1}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid5912", tween: [ "transform", "${_s1}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 500, duration: 500 }            ]
        }
    }
},
"stage_scr": {
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
                    id: 'stage_screen',
                    type: 'image',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/stage_screen.png', '0px', '0px']
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
            "${_stage_screen}": [
                ["style", "top", '50.1%'],
                ["style", "height", '0%'],
                ["style", "left", '51.2%'],
                ["style", "width", '0%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: true,
            timeline: [
                { id: "eid1861", tween: [ "style", "${_stage_screen}", "height", '100%', { fromValue: '0%'}], position: 0, duration: 500 },
                { id: "eid1862", tween: [ "style", "${_stage_screen}", "width", '100%', { fromValue: '0%'}], position: 0, duration: 500 },
                { id: "eid1863", tween: [ "style", "${_stage_screen}", "top", '0%', { fromValue: '50.1%'}], position: 0, duration: 500 },
                { id: "eid1864", tween: [ "style", "${_stage_screen}", "left", '0%', { fromValue: '51.2%'}], position: 0, duration: 500 }            ]
        }
    }
},
"pizza_cut": {
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
                    rect: ['-127.7%', '42.1%', '96.7%', '59.5%', 'auto', 'auto'],
                    id: 'pizza_cut',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/pizzacuttingtransparent.png', '0px', '0px']
                },
                {
                    rect: ['26.4%', '0%', '73.8%', '61.9%', 'auto', 'auto'],
                    id: 'cutter',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/cutter.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_cutter}": [
                ["style", "top", '13.73%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '62.08%'],
                ["style", "display", 'block'],
                ["style", "left", '35.3%'],
                ["style", "width", '73.63%']
            ],
            "${_pizza_cut}": [
                ["style", "top", '40.31%'],
                ["style", "height", '59.66%'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '0%'],
                ["style", "width", '96.88%']
            ],
            "${symbolSelector}": [
                ["style", "height", '20.67%'],
                ["style", "width", '16.14%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6500,
            autoPlay: true,
            timeline: [
                { id: "eid5894", tween: [ "transform", "${_cutter}", "rotateZ", '55deg', { fromValue: '0deg'}], position: 6156, duration: 94 },
                { id: "eid1522", tween: [ "style", "${_cutter}", "display", 'none', { fromValue: 'block'}], position: 6500, duration: 0 },
                { id: "eid164", tween: [ "style", "${_pizza_cut}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1462", tween: [ "style", "${_cutter}", "left", '-46.51%', { fromValue: '35.3%'}], position: 0, duration: 1000 },
                { id: "eid1497", tween: [ "style", "${_cutter}", "left", '11.66%', { fromValue: '-46.51%'}], position: 1153, duration: 347 },
                { id: "eid1500", tween: [ "style", "${_cutter}", "left", '-25.62%', { fromValue: '11.66%'}], position: 1680, duration: 820 },
                { id: "eid1506", tween: [ "style", "${_cutter}", "left", '23.3%', { fromValue: '-25.62%'}], position: 2750, duration: 404 },
                { id: "eid1510", tween: [ "style", "${_cutter}", "left", '-37.27%', { fromValue: '23.3%'}], position: 3327, duration: 799 },
                { id: "eid1514", tween: [ "style", "${_cutter}", "left", '-4.22%', { fromValue: '-37.27%'}], position: 4351, duration: 230 },
                { id: "eid1519", tween: [ "style", "${_cutter}", "left", '0.34%', { fromValue: '-4.22%'}], position: 4812, duration: 782 },
                { id: "eid1549", tween: [ "style", "${_cutter}", "left", '76.74%', { fromValue: '0.34%'}], position: 5750, duration: 500 },
                { id: "eid1475", tween: [ "style", "${_cutter}", "top", '12.9%', { fromValue: '13.73%'}], position: 0, duration: 1000 },
                { id: "eid1496", tween: [ "style", "${_cutter}", "top", '-12.08%', { fromValue: '12.9%'}], position: 1153, duration: 347 },
                { id: "eid1501", tween: [ "style", "${_cutter}", "top", '38.68%', { fromValue: '-12.08%'}], position: 1680, duration: 820 },
                { id: "eid1507", tween: [ "style", "${_cutter}", "top", '37.93%', { fromValue: '38.68%'}], position: 2750, duration: 404 },
                { id: "eid1511", tween: [ "style", "${_cutter}", "top", '-5.42%', { fromValue: '37.93%'}], position: 3327, duration: 799 },
                { id: "eid1515", tween: [ "style", "${_cutter}", "top", '-12.32%', { fromValue: '-5.42%'}], position: 4351, duration: 230 },
                { id: "eid1518", tween: [ "style", "${_cutter}", "top", '44.53%', { fromValue: '-12.32%'}], position: 4812, duration: 782 },
                { id: "eid1550", tween: [ "style", "${_cutter}", "top", '-14.52%', { fromValue: '44.53%'}], position: 5750, duration: 500 },
                { id: "eid1521", tween: [ "style", "${_pizza_cut}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 4500 }            ]
        }
    }
},
"StageNoAnim_1": {
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
                    id: 'n1',
                    type: 'image',
                    rect: ['-0.7%', '0%', '101.2%', '99%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/nob/n1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_n1}": [
                ["style", "top", '0%'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '99.04%'],
                ["transform", "scaleX", '1'],
                ["style", "left", '11.48%'],
                ["style", "width", '101.17%']
            ],
            "${symbolSelector}": [
                ["style", "height", '46.88%'],
                ["style", "width", '54.47%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1660,
            autoPlay: true,
            timeline: [
                { id: "eid1620", tween: [ "transform", "${_n1}", "scaleX", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1616", tween: [ "transform", "${_n1}", "scaleX", '1', { fromValue: '0'}], position: 250, duration: 368 },
                { id: "eid1600", tween: [ "transform", "${_n1}", "scaleX", '0.5', { fromValue: '1'}], position: 618, duration: 132 },
                { id: "eid1601", tween: [ "transform", "${_n1}", "scaleX", '1', { fromValue: '0.5'}], position: 750, duration: 250 },
                { id: "eid1610", tween: [ "transform", "${_n1}", "scaleX", '0.8', { fromValue: '1'}], position: 1000, duration: 250 },
                { id: "eid1611", tween: [ "transform", "${_n1}", "scaleX", '1', { fromValue: '0.8'}], position: 1250, duration: 250 },
                { id: "eid1605", tween: [ "transform", "${_n1}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 750 },
                { id: "eid1621", tween: [ "transform", "${_n1}", "scaleY", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1617", tween: [ "transform", "${_n1}", "scaleY", '1', { fromValue: '0'}], position: 250, duration: 368 },
                { id: "eid1602", tween: [ "transform", "${_n1}", "scaleY", '0.5', { fromValue: '1'}], position: 618, duration: 132 },
                { id: "eid1603", tween: [ "transform", "${_n1}", "scaleY", '1', { fromValue: '0.5'}], position: 750, duration: 250 },
                { id: "eid1612", tween: [ "transform", "${_n1}", "scaleY", '0.8', { fromValue: '1'}], position: 1000, duration: 250 },
                { id: "eid1613", tween: [ "transform", "${_n1}", "scaleY", '1', { fromValue: '0.8'}], position: 1250, duration: 250 }            ]
        }
    }
},
"StageNoAnim_2": {
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
                    id: 'n2',
                    type: 'image',
                    rect: ['-0.7%', '0%', '101.2%', '99%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/nob/n2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_n2}": [
                ["style", "top", '0%'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '99.04%'],
                ["transform", "scaleX", '1'],
                ["style", "left", '11.48%'],
                ["style", "width", '101.17%']
            ],
            "${symbolSelector}": [
                ["style", "height", '46.88%'],
                ["style", "width", '84.73%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1660,
            autoPlay: true,
            timeline: [
                { id: "eid1620", tween: [ "transform", "${_n2}", "scaleX", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1616", tween: [ "transform", "${_n2}", "scaleX", '1', { fromValue: '0'}], position: 250, duration: 368 },
                { id: "eid1600", tween: [ "transform", "${_n2}", "scaleX", '0.5', { fromValue: '1'}], position: 618, duration: 132 },
                { id: "eid1601", tween: [ "transform", "${_n2}", "scaleX", '1', { fromValue: '0.5'}], position: 750, duration: 250 },
                { id: "eid1610", tween: [ "transform", "${_n2}", "scaleX", '0.8', { fromValue: '1'}], position: 1000, duration: 250 },
                { id: "eid1611", tween: [ "transform", "${_n2}", "scaleX", '1', { fromValue: '0.8'}], position: 1250, duration: 250 },
                { id: "eid1621", tween: [ "transform", "${_n2}", "scaleY", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1617", tween: [ "transform", "${_n2}", "scaleY", '1', { fromValue: '0'}], position: 250, duration: 368 },
                { id: "eid1602", tween: [ "transform", "${_n2}", "scaleY", '0.5', { fromValue: '1'}], position: 618, duration: 132 },
                { id: "eid1603", tween: [ "transform", "${_n2}", "scaleY", '1', { fromValue: '0.5'}], position: 750, duration: 250 },
                { id: "eid1612", tween: [ "transform", "${_n2}", "scaleY", '0.8', { fromValue: '1'}], position: 1000, duration: 250 },
                { id: "eid1613", tween: [ "transform", "${_n2}", "scaleY", '1', { fromValue: '0.8'}], position: 1250, duration: 250 },
                { id: "eid1605", tween: [ "transform", "${_n2}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 750 }            ]
        }
    }
},
"StageNoAnim_3": {
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
                    id: 'n3',
                    type: 'image',
                    rect: ['-0.7%', '0%', '101.2%', '99%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/nob/n3.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_n3}": [
                ["style", "top", '0%'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '99.04%'],
                ["transform", "scaleX", '1'],
                ["style", "left", '11.48%'],
                ["style", "width", '101.17%']
            ],
            "${symbolSelector}": [
                ["style", "height", '46.88%'],
                ["style", "width", '54.47%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1660,
            autoPlay: true,
            timeline: [
                { id: "eid1621", tween: [ "transform", "${_n3}", "scaleY", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1617", tween: [ "transform", "${_n3}", "scaleY", '1', { fromValue: '0'}], position: 250, duration: 368 },
                { id: "eid1602", tween: [ "transform", "${_n3}", "scaleY", '0.5', { fromValue: '1'}], position: 618, duration: 132 },
                { id: "eid1603", tween: [ "transform", "${_n3}", "scaleY", '1', { fromValue: '0.5'}], position: 750, duration: 250 },
                { id: "eid1612", tween: [ "transform", "${_n3}", "scaleY", '0.8', { fromValue: '1'}], position: 1000, duration: 250 },
                { id: "eid1613", tween: [ "transform", "${_n3}", "scaleY", '1', { fromValue: '0.8'}], position: 1250, duration: 250 },
                { id: "eid1620", tween: [ "transform", "${_n3}", "scaleX", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1616", tween: [ "transform", "${_n3}", "scaleX", '1', { fromValue: '0'}], position: 250, duration: 368 },
                { id: "eid1600", tween: [ "transform", "${_n3}", "scaleX", '0.5', { fromValue: '1'}], position: 618, duration: 132 },
                { id: "eid1601", tween: [ "transform", "${_n3}", "scaleX", '1', { fromValue: '0.5'}], position: 750, duration: 250 },
                { id: "eid1610", tween: [ "transform", "${_n3}", "scaleX", '0.8', { fromValue: '1'}], position: 1000, duration: 250 },
                { id: "eid1611", tween: [ "transform", "${_n3}", "scaleX", '1', { fromValue: '0.8'}], position: 1250, duration: 250 },
                { id: "eid1605", tween: [ "transform", "${_n3}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 750 }            ]
        }
    }
},
"StageNoAnim_4": {
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
                    id: 'n4',
                    type: 'image',
                    rect: ['-0.7%', '0%', '101.2%', '99%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/nob/n4.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_n4}": [
                ["style", "top", '0%'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '99.04%'],
                ["transform", "scaleX", '1'],
                ["style", "left", '11.48%'],
                ["style", "width", '101.17%']
            ],
            "${symbolSelector}": [
                ["style", "height", '46.88%'],
                ["style", "width", '54.47%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1660,
            autoPlay: true,
            timeline: [
                { id: "eid1620", tween: [ "transform", "${_n4}", "scaleX", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1616", tween: [ "transform", "${_n4}", "scaleX", '1', { fromValue: '0'}], position: 250, duration: 368 },
                { id: "eid1600", tween: [ "transform", "${_n4}", "scaleX", '0.5', { fromValue: '1'}], position: 618, duration: 132 },
                { id: "eid1601", tween: [ "transform", "${_n4}", "scaleX", '1', { fromValue: '0.5'}], position: 750, duration: 250 },
                { id: "eid1610", tween: [ "transform", "${_n4}", "scaleX", '0.8', { fromValue: '1'}], position: 1000, duration: 250 },
                { id: "eid1611", tween: [ "transform", "${_n4}", "scaleX", '1', { fromValue: '0.8'}], position: 1250, duration: 250 },
                { id: "eid1621", tween: [ "transform", "${_n4}", "scaleY", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1617", tween: [ "transform", "${_n4}", "scaleY", '1', { fromValue: '0'}], position: 250, duration: 368 },
                { id: "eid1602", tween: [ "transform", "${_n4}", "scaleY", '0.5', { fromValue: '1'}], position: 618, duration: 132 },
                { id: "eid1603", tween: [ "transform", "${_n4}", "scaleY", '1', { fromValue: '0.5'}], position: 750, duration: 250 },
                { id: "eid1612", tween: [ "transform", "${_n4}", "scaleY", '0.8', { fromValue: '1'}], position: 1000, duration: 250 },
                { id: "eid1613", tween: [ "transform", "${_n4}", "scaleY", '1', { fromValue: '0.8'}], position: 1250, duration: 250 },
                { id: "eid1605", tween: [ "transform", "${_n4}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 750 }            ]
        }
    }
},
"StageNoAnim_5": {
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
                    id: 'n5',
                    type: 'image',
                    rect: ['-0.7%', '0%', '101.2%', '99%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/nob/n5.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_n5}": [
                ["style", "top", '0%'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '99.04%'],
                ["transform", "scaleX", '1'],
                ["style", "left", '11.48%'],
                ["style", "width", '101.17%']
            ],
            "${symbolSelector}": [
                ["style", "height", '46.88%'],
                ["style", "width", '54.47%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1660,
            autoPlay: true,
            timeline: [
                { id: "eid1621", tween: [ "transform", "${_n5}", "scaleY", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1617", tween: [ "transform", "${_n5}", "scaleY", '1', { fromValue: '0'}], position: 250, duration: 368 },
                { id: "eid1602", tween: [ "transform", "${_n5}", "scaleY", '0.5', { fromValue: '1'}], position: 618, duration: 132 },
                { id: "eid1603", tween: [ "transform", "${_n5}", "scaleY", '1', { fromValue: '0.5'}], position: 750, duration: 250 },
                { id: "eid1612", tween: [ "transform", "${_n5}", "scaleY", '0.8', { fromValue: '1'}], position: 1000, duration: 250 },
                { id: "eid1613", tween: [ "transform", "${_n5}", "scaleY", '1', { fromValue: '0.8'}], position: 1250, duration: 250 },
                { id: "eid1620", tween: [ "transform", "${_n5}", "scaleX", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1616", tween: [ "transform", "${_n5}", "scaleX", '1', { fromValue: '0'}], position: 250, duration: 368 },
                { id: "eid1600", tween: [ "transform", "${_n5}", "scaleX", '0.5', { fromValue: '1'}], position: 618, duration: 132 },
                { id: "eid1601", tween: [ "transform", "${_n5}", "scaleX", '1', { fromValue: '0.5'}], position: 750, duration: 250 },
                { id: "eid1610", tween: [ "transform", "${_n5}", "scaleX", '0.8', { fromValue: '1'}], position: 1000, duration: 250 },
                { id: "eid1611", tween: [ "transform", "${_n5}", "scaleX", '1', { fromValue: '0.8'}], position: 1250, duration: 250 },
                { id: "eid1605", tween: [ "transform", "${_n5}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 750 }            ]
        }
    }
},
"StageNoAnim_6": {
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
                    id: 'n6',
                    type: 'image',
                    rect: ['-0.7%', '0%', '101.2%', '99%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/nob/n6.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_n6}": [
                ["style", "top", '0%'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '99.04%'],
                ["transform", "scaleX", '1'],
                ["style", "left", '11.48%'],
                ["style", "width", '101.17%']
            ],
            "${symbolSelector}": [
                ["style", "height", '46.88%'],
                ["style", "width", '54.47%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1660,
            autoPlay: true,
            timeline: [
                { id: "eid1620", tween: [ "transform", "${_n6}", "scaleX", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1616", tween: [ "transform", "${_n6}", "scaleX", '1', { fromValue: '0'}], position: 250, duration: 368 },
                { id: "eid1600", tween: [ "transform", "${_n6}", "scaleX", '0.5', { fromValue: '1'}], position: 618, duration: 132 },
                { id: "eid1601", tween: [ "transform", "${_n6}", "scaleX", '1', { fromValue: '0.5'}], position: 750, duration: 250 },
                { id: "eid1610", tween: [ "transform", "${_n6}", "scaleX", '0.8', { fromValue: '1'}], position: 1000, duration: 250 },
                { id: "eid1611", tween: [ "transform", "${_n6}", "scaleX", '1', { fromValue: '0.8'}], position: 1250, duration: 250 },
                { id: "eid1605", tween: [ "transform", "${_n6}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 750 },
                { id: "eid1621", tween: [ "transform", "${_n6}", "scaleY", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1617", tween: [ "transform", "${_n6}", "scaleY", '1', { fromValue: '0'}], position: 250, duration: 368 },
                { id: "eid1602", tween: [ "transform", "${_n6}", "scaleY", '0.5', { fromValue: '1'}], position: 618, duration: 132 },
                { id: "eid1603", tween: [ "transform", "${_n6}", "scaleY", '1', { fromValue: '0.5'}], position: 750, duration: 250 },
                { id: "eid1612", tween: [ "transform", "${_n6}", "scaleY", '0.8', { fromValue: '1'}], position: 1000, duration: 250 },
                { id: "eid1613", tween: [ "transform", "${_n6}", "scaleY", '1', { fromValue: '0.8'}], position: 1250, duration: 250 }            ]
        }
    }
},
"StageNoAnim_7": {
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
                    id: 'n7',
                    type: 'image',
                    rect: ['-0.7%', '0%', '101.2%', '99%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/nob/n7.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_n7}": [
                ["style", "top", '0%'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '99.04%'],
                ["transform", "scaleX", '1'],
                ["style", "left", '11.48%'],
                ["style", "width", '101.17%']
            ],
            "${symbolSelector}": [
                ["style", "height", '46.88%'],
                ["style", "width", '54.47%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1660,
            autoPlay: true,
            timeline: [
                { id: "eid1605", tween: [ "transform", "${_n7}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 750 },
                { id: "eid1620", tween: [ "transform", "${_n7}", "scaleX", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1616", tween: [ "transform", "${_n7}", "scaleX", '1', { fromValue: '0'}], position: 250, duration: 368 },
                { id: "eid1600", tween: [ "transform", "${_n7}", "scaleX", '0.5', { fromValue: '1'}], position: 618, duration: 132 },
                { id: "eid1601", tween: [ "transform", "${_n7}", "scaleX", '1', { fromValue: '0.5'}], position: 750, duration: 250 },
                { id: "eid1610", tween: [ "transform", "${_n7}", "scaleX", '0.8', { fromValue: '1'}], position: 1000, duration: 250 },
                { id: "eid1611", tween: [ "transform", "${_n7}", "scaleX", '1', { fromValue: '0.8'}], position: 1250, duration: 250 },
                { id: "eid1621", tween: [ "transform", "${_n7}", "scaleY", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1617", tween: [ "transform", "${_n7}", "scaleY", '1', { fromValue: '0'}], position: 250, duration: 368 },
                { id: "eid1602", tween: [ "transform", "${_n7}", "scaleY", '0.5', { fromValue: '1'}], position: 618, duration: 132 },
                { id: "eid1603", tween: [ "transform", "${_n7}", "scaleY", '1', { fromValue: '0.5'}], position: 750, duration: 250 },
                { id: "eid1612", tween: [ "transform", "${_n7}", "scaleY", '0.8', { fromValue: '1'}], position: 1000, duration: 250 },
                { id: "eid1613", tween: [ "transform", "${_n7}", "scaleY", '1', { fromValue: '0.8'}], position: 1250, duration: 250 }            ]
        }
    }
},
"StageNoAnim_8": {
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
                    id: 'n8',
                    type: 'image',
                    rect: ['-0.7%', '0%', '101.2%', '99%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/nob/n8.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_n8}": [
                ["style", "top", '0%'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '99.04%'],
                ["transform", "scaleX", '1'],
                ["style", "left", '11.48%'],
                ["style", "width", '101.17%']
            ],
            "${symbolSelector}": [
                ["style", "height", '46.88%'],
                ["style", "width", '54.47%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1660,
            autoPlay: true,
            timeline: [
                { id: "eid1621", tween: [ "transform", "${_n8}", "scaleY", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1617", tween: [ "transform", "${_n8}", "scaleY", '1', { fromValue: '0'}], position: 250, duration: 368 },
                { id: "eid1602", tween: [ "transform", "${_n8}", "scaleY", '0.5', { fromValue: '1'}], position: 618, duration: 132 },
                { id: "eid1603", tween: [ "transform", "${_n8}", "scaleY", '1', { fromValue: '0.5'}], position: 750, duration: 250 },
                { id: "eid1612", tween: [ "transform", "${_n8}", "scaleY", '0.8', { fromValue: '1'}], position: 1000, duration: 250 },
                { id: "eid1613", tween: [ "transform", "${_n8}", "scaleY", '1', { fromValue: '0.8'}], position: 1250, duration: 250 },
                { id: "eid1605", tween: [ "transform", "${_n8}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 750 },
                { id: "eid1620", tween: [ "transform", "${_n8}", "scaleX", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1616", tween: [ "transform", "${_n8}", "scaleX", '1', { fromValue: '0'}], position: 250, duration: 368 },
                { id: "eid1600", tween: [ "transform", "${_n8}", "scaleX", '0.5', { fromValue: '1'}], position: 618, duration: 132 },
                { id: "eid1601", tween: [ "transform", "${_n8}", "scaleX", '1', { fromValue: '0.5'}], position: 750, duration: 250 },
                { id: "eid1610", tween: [ "transform", "${_n8}", "scaleX", '0.8', { fromValue: '1'}], position: 1000, duration: 250 },
                { id: "eid1611", tween: [ "transform", "${_n8}", "scaleX", '1', { fromValue: '0.8'}], position: 1250, duration: 250 }            ]
        }
    }
},
"StageNoAnim_9": {
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
                    id: 'n9',
                    type: 'image',
                    rect: ['-0.7%', '0%', '101.2%', '99%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/nob/n9.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_n9}": [
                ["style", "top", '0%'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '99.04%'],
                ["transform", "scaleX", '1'],
                ["style", "left", '11.48%'],
                ["style", "width", '101.17%']
            ],
            "${symbolSelector}": [
                ["style", "height", '46.88%'],
                ["style", "width", '54.47%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1660,
            autoPlay: true,
            timeline: [
                { id: "eid1605", tween: [ "transform", "${_n9}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 750 },
                { id: "eid1620", tween: [ "transform", "${_n9}", "scaleX", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1616", tween: [ "transform", "${_n9}", "scaleX", '1', { fromValue: '0'}], position: 250, duration: 368 },
                { id: "eid1600", tween: [ "transform", "${_n9}", "scaleX", '0.5', { fromValue: '1'}], position: 618, duration: 132 },
                { id: "eid1601", tween: [ "transform", "${_n9}", "scaleX", '1', { fromValue: '0.5'}], position: 750, duration: 250 },
                { id: "eid1610", tween: [ "transform", "${_n9}", "scaleX", '0.8', { fromValue: '1'}], position: 1000, duration: 250 },
                { id: "eid1611", tween: [ "transform", "${_n9}", "scaleX", '1', { fromValue: '0.8'}], position: 1250, duration: 250 },
                { id: "eid1621", tween: [ "transform", "${_n9}", "scaleY", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1617", tween: [ "transform", "${_n9}", "scaleY", '1', { fromValue: '0'}], position: 250, duration: 368 },
                { id: "eid1602", tween: [ "transform", "${_n9}", "scaleY", '0.5', { fromValue: '1'}], position: 618, duration: 132 },
                { id: "eid1603", tween: [ "transform", "${_n9}", "scaleY", '1', { fromValue: '0.5'}], position: 750, duration: 250 },
                { id: "eid1612", tween: [ "transform", "${_n9}", "scaleY", '0.8', { fromValue: '1'}], position: 1000, duration: 250 },
                { id: "eid1613", tween: [ "transform", "${_n9}", "scaleY", '1', { fromValue: '0.8'}], position: 1250, duration: 250 }            ]
        }
    }
},
"StageNoAnim_10": {
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
                    id: 'n10',
                    type: 'image',
                    rect: ['-0.7%', '0%', '101.2%', '99%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/nob/n10.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_n10}": [
                ["style", "top", '0%'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '99.04%'],
                ["transform", "scaleX", '1'],
                ["style", "left", '11.48%'],
                ["style", "width", '101.17%']
            ],
            "${symbolSelector}": [
                ["style", "height", '46.88%'],
                ["style", "width", '54.47%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1660,
            autoPlay: true,
            timeline: [
                { id: "eid1620", tween: [ "transform", "${_n10}", "scaleX", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1616", tween: [ "transform", "${_n10}", "scaleX", '1', { fromValue: '0'}], position: 250, duration: 368 },
                { id: "eid1600", tween: [ "transform", "${_n10}", "scaleX", '0.5', { fromValue: '1'}], position: 618, duration: 132 },
                { id: "eid1601", tween: [ "transform", "${_n10}", "scaleX", '1', { fromValue: '0.5'}], position: 750, duration: 250 },
                { id: "eid1610", tween: [ "transform", "${_n10}", "scaleX", '0.8', { fromValue: '1'}], position: 1000, duration: 250 },
                { id: "eid1611", tween: [ "transform", "${_n10}", "scaleX", '1', { fromValue: '0.8'}], position: 1250, duration: 250 },
                { id: "eid1605", tween: [ "transform", "${_n10}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 750 },
                { id: "eid1621", tween: [ "transform", "${_n10}", "scaleY", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1617", tween: [ "transform", "${_n10}", "scaleY", '1', { fromValue: '0'}], position: 250, duration: 368 },
                { id: "eid1602", tween: [ "transform", "${_n10}", "scaleY", '0.5', { fromValue: '1'}], position: 618, duration: 132 },
                { id: "eid1603", tween: [ "transform", "${_n10}", "scaleY", '1', { fromValue: '0.5'}], position: 750, duration: 250 },
                { id: "eid1612", tween: [ "transform", "${_n10}", "scaleY", '0.8', { fromValue: '1'}], position: 1000, duration: 250 },
                { id: "eid1613", tween: [ "transform", "${_n10}", "scaleY", '1', { fromValue: '0.8'}], position: 1250, duration: 250 }            ]
        }
    }
},
"StageNoAnim_11": {
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
                    id: 'n11',
                    type: 'image',
                    rect: ['-0.7%', '0%', '101.2%', '99%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/nob/n11.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_n11}": [
                ["style", "top", '0%'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '99.04%'],
                ["transform", "scaleX", '1'],
                ["style", "left", '11.48%'],
                ["style", "width", '101.17%']
            ],
            "${symbolSelector}": [
                ["style", "height", '46.88%'],
                ["style", "width", '54.47%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1660,
            autoPlay: true,
            timeline: [
                { id: "eid1620", tween: [ "transform", "${_n11}", "scaleX", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1616", tween: [ "transform", "${_n11}", "scaleX", '1', { fromValue: '0'}], position: 250, duration: 368 },
                { id: "eid1600", tween: [ "transform", "${_n11}", "scaleX", '0.5', { fromValue: '1'}], position: 618, duration: 132 },
                { id: "eid1601", tween: [ "transform", "${_n11}", "scaleX", '1', { fromValue: '0.5'}], position: 750, duration: 250 },
                { id: "eid1610", tween: [ "transform", "${_n11}", "scaleX", '0.8', { fromValue: '1'}], position: 1000, duration: 250 },
                { id: "eid1611", tween: [ "transform", "${_n11}", "scaleX", '1', { fromValue: '0.8'}], position: 1250, duration: 250 },
                { id: "eid1621", tween: [ "transform", "${_n11}", "scaleY", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1617", tween: [ "transform", "${_n11}", "scaleY", '1', { fromValue: '0'}], position: 250, duration: 368 },
                { id: "eid1602", tween: [ "transform", "${_n11}", "scaleY", '0.5', { fromValue: '1'}], position: 618, duration: 132 },
                { id: "eid1603", tween: [ "transform", "${_n11}", "scaleY", '1', { fromValue: '0.5'}], position: 750, duration: 250 },
                { id: "eid1612", tween: [ "transform", "${_n11}", "scaleY", '0.8', { fromValue: '1'}], position: 1000, duration: 250 },
                { id: "eid1613", tween: [ "transform", "${_n11}", "scaleY", '1', { fromValue: '0.8'}], position: 1250, duration: 250 },
                { id: "eid1605", tween: [ "transform", "${_n11}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 750 }            ]
        }
    }
},
"StageNoAnim_12": {
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
                    id: 'n12',
                    type: 'image',
                    rect: ['-0.7%', '0%', '101.2%', '99%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/nob/n12.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_n12}": [
                ["style", "top", '0%'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '99.04%'],
                ["transform", "scaleX", '1'],
                ["style", "left", '11.48%'],
                ["style", "width", '101.17%']
            ],
            "${symbolSelector}": [
                ["style", "height", '46.88%'],
                ["style", "width", '54.47%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1660,
            autoPlay: true,
            timeline: [
                { id: "eid1620", tween: [ "transform", "${_n12}", "scaleX", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1616", tween: [ "transform", "${_n12}", "scaleX", '1', { fromValue: '0'}], position: 250, duration: 368 },
                { id: "eid1600", tween: [ "transform", "${_n12}", "scaleX", '0.5', { fromValue: '1'}], position: 618, duration: 132 },
                { id: "eid1601", tween: [ "transform", "${_n12}", "scaleX", '1', { fromValue: '0.5'}], position: 750, duration: 250 },
                { id: "eid1610", tween: [ "transform", "${_n12}", "scaleX", '0.8', { fromValue: '1'}], position: 1000, duration: 250 },
                { id: "eid1611", tween: [ "transform", "${_n12}", "scaleX", '1', { fromValue: '0.8'}], position: 1250, duration: 250 },
                { id: "eid1605", tween: [ "transform", "${_n12}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 750 },
                { id: "eid1621", tween: [ "transform", "${_n12}", "scaleY", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1617", tween: [ "transform", "${_n12}", "scaleY", '1', { fromValue: '0'}], position: 250, duration: 368 },
                { id: "eid1602", tween: [ "transform", "${_n12}", "scaleY", '0.5', { fromValue: '1'}], position: 618, duration: 132 },
                { id: "eid1603", tween: [ "transform", "${_n12}", "scaleY", '1', { fromValue: '0.5'}], position: 750, duration: 250 },
                { id: "eid1612", tween: [ "transform", "${_n12}", "scaleY", '0.8', { fromValue: '1'}], position: 1000, duration: 250 },
                { id: "eid1613", tween: [ "transform", "${_n12}", "scaleY", '1', { fromValue: '0.8'}], position: 1250, duration: 250 }            ]
        }
    }
},
"StageNoAnim_13": {
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
                    id: 'n13',
                    type: 'image',
                    rect: ['-0.7%', '0%', '101.2%', '99%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/nob/n13.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_n13}": [
                ["style", "top", '0%'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '99.04%'],
                ["transform", "scaleX", '1'],
                ["style", "left", '11.48%'],
                ["style", "width", '101.17%']
            ],
            "${symbolSelector}": [
                ["style", "height", '46.88%'],
                ["style", "width", '54.47%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1660,
            autoPlay: true,
            timeline: [
                { id: "eid1620", tween: [ "transform", "${_n13}", "scaleX", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1616", tween: [ "transform", "${_n13}", "scaleX", '1', { fromValue: '0'}], position: 250, duration: 368 },
                { id: "eid1600", tween: [ "transform", "${_n13}", "scaleX", '0.5', { fromValue: '1'}], position: 618, duration: 132 },
                { id: "eid1601", tween: [ "transform", "${_n13}", "scaleX", '1', { fromValue: '0.5'}], position: 750, duration: 250 },
                { id: "eid1610", tween: [ "transform", "${_n13}", "scaleX", '0.8', { fromValue: '1'}], position: 1000, duration: 250 },
                { id: "eid1611", tween: [ "transform", "${_n13}", "scaleX", '1', { fromValue: '0.8'}], position: 1250, duration: 250 },
                { id: "eid1605", tween: [ "transform", "${_n13}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 750 },
                { id: "eid1621", tween: [ "transform", "${_n13}", "scaleY", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1617", tween: [ "transform", "${_n13}", "scaleY", '1', { fromValue: '0'}], position: 250, duration: 368 },
                { id: "eid1602", tween: [ "transform", "${_n13}", "scaleY", '0.5', { fromValue: '1'}], position: 618, duration: 132 },
                { id: "eid1603", tween: [ "transform", "${_n13}", "scaleY", '1', { fromValue: '0.5'}], position: 750, duration: 250 },
                { id: "eid1612", tween: [ "transform", "${_n13}", "scaleY", '0.8', { fromValue: '1'}], position: 1000, duration: 250 },
                { id: "eid1613", tween: [ "transform", "${_n13}", "scaleY", '1', { fromValue: '0.8'}], position: 1250, duration: 250 }            ]
        }
    }
},
"StageNoAnim_14": {
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
                    id: 'n14',
                    type: 'image',
                    rect: ['-0.7%', '0%', '101.2%', '99%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/nob/n14.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_n14}": [
                ["style", "top", '0%'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '99.04%'],
                ["transform", "scaleX", '1'],
                ["style", "left", '11.48%'],
                ["style", "width", '101.17%']
            ],
            "${symbolSelector}": [
                ["style", "height", '46.88%'],
                ["style", "width", '54.47%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1660,
            autoPlay: true,
            timeline: [
                { id: "eid1605", tween: [ "transform", "${_n14}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 750 },
                { id: "eid1621", tween: [ "transform", "${_n14}", "scaleY", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1617", tween: [ "transform", "${_n14}", "scaleY", '1', { fromValue: '0'}], position: 250, duration: 368 },
                { id: "eid1602", tween: [ "transform", "${_n14}", "scaleY", '0.5', { fromValue: '1'}], position: 618, duration: 132 },
                { id: "eid1603", tween: [ "transform", "${_n14}", "scaleY", '1', { fromValue: '0.5'}], position: 750, duration: 250 },
                { id: "eid1612", tween: [ "transform", "${_n14}", "scaleY", '0.8', { fromValue: '1'}], position: 1000, duration: 250 },
                { id: "eid1613", tween: [ "transform", "${_n14}", "scaleY", '1', { fromValue: '0.8'}], position: 1250, duration: 250 },
                { id: "eid1620", tween: [ "transform", "${_n14}", "scaleX", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1616", tween: [ "transform", "${_n14}", "scaleX", '1', { fromValue: '0'}], position: 250, duration: 368 },
                { id: "eid1600", tween: [ "transform", "${_n14}", "scaleX", '0.5', { fromValue: '1'}], position: 618, duration: 132 },
                { id: "eid1601", tween: [ "transform", "${_n14}", "scaleX", '1', { fromValue: '0.5'}], position: 750, duration: 250 },
                { id: "eid1610", tween: [ "transform", "${_n14}", "scaleX", '0.8', { fromValue: '1'}], position: 1000, duration: 250 },
                { id: "eid1611", tween: [ "transform", "${_n14}", "scaleX", '1', { fromValue: '0.8'}], position: 1250, duration: 250 }            ]
        }
    }
},
"StageNoAnim_15": {
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
                    id: 'n15',
                    type: 'image',
                    rect: ['-0.7%', '0%', '101.2%', '99%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/nob/n15.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_n15}": [
                ["style", "top", '0%'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '99.04%'],
                ["transform", "scaleX", '1'],
                ["style", "left", '11.48%'],
                ["style", "width", '101.17%']
            ],
            "${symbolSelector}": [
                ["style", "height", '46.88%'],
                ["style", "width", '54.47%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1660,
            autoPlay: true,
            timeline: [
                { id: "eid1620", tween: [ "transform", "${_n15}", "scaleX", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1616", tween: [ "transform", "${_n15}", "scaleX", '1', { fromValue: '0'}], position: 250, duration: 368 },
                { id: "eid1600", tween: [ "transform", "${_n15}", "scaleX", '0.5', { fromValue: '1'}], position: 618, duration: 132 },
                { id: "eid1601", tween: [ "transform", "${_n15}", "scaleX", '1', { fromValue: '0.5'}], position: 750, duration: 250 },
                { id: "eid1610", tween: [ "transform", "${_n15}", "scaleX", '0.8', { fromValue: '1'}], position: 1000, duration: 250 },
                { id: "eid1611", tween: [ "transform", "${_n15}", "scaleX", '1', { fromValue: '0.8'}], position: 1250, duration: 250 },
                { id: "eid1605", tween: [ "transform", "${_n15}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 750 },
                { id: "eid1621", tween: [ "transform", "${_n15}", "scaleY", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1617", tween: [ "transform", "${_n15}", "scaleY", '1', { fromValue: '0'}], position: 250, duration: 368 },
                { id: "eid1602", tween: [ "transform", "${_n15}", "scaleY", '0.5', { fromValue: '1'}], position: 618, duration: 132 },
                { id: "eid1603", tween: [ "transform", "${_n15}", "scaleY", '1', { fromValue: '0.5'}], position: 750, duration: 250 },
                { id: "eid1612", tween: [ "transform", "${_n15}", "scaleY", '0.8', { fromValue: '1'}], position: 1000, duration: 250 },
                { id: "eid1613", tween: [ "transform", "${_n15}", "scaleY", '1', { fromValue: '0.8'}], position: 1250, duration: 250 }            ]
        }
    }
},
"R_chilli": {
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
                    id: 'chilli1',
                    rect: ['-21.9%', '-9%', '144%', '118.3%', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.69231', '0.84536']],
                    fill: ['rgba(0,0,0,0)', 'images/chiliflakes/chilli1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_chilli1}": [
                ["style", "top", '-9.14%'],
                ["transform", "scaleY", '0.84536'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '0.69231'],
                ["style", "left", '-22.24%']
            ],
            "${symbolSelector}": [
                ["style", "height", '16.91%'],
                ["style", "width", '5.63%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1866,
            autoPlay: true,
            timeline: [
                { id: "eid1806", tween: [ "style", "${_chilli1}", "top", '-73.82%', { fromValue: '-9.14%'}], position: 0, duration: 500 },
                { id: "eid1815", tween: [ "style", "${_chilli1}", "top", '-53.51%', { fromValue: '-73.82%'}], position: 588, duration: 162 },
                { id: "eid1819", tween: [ "style", "${_chilli1}", "top", '-14.8%', { fromValue: '-53.51%'}], position: 826, duration: 256 },
                { id: "eid1823", tween: [ "style", "${_chilli1}", "top", '-29.77%', { fromValue: '-14.8%'}], position: 1165, duration: 208 },
                { id: "eid1830", tween: [ "style", "${_chilli1}", "top", '-9.5%', { fromValue: '-29.77%'}], position: 1500, duration: 366 },
                { id: "eid1807", tween: [ "style", "${_chilli1}", "left", '-106.11%', { fromValue: '-22.24%'}], position: 0, duration: 500 },
                { id: "eid1814", tween: [ "style", "${_chilli1}", "left", '-195.44%', { fromValue: '-106.11%'}], position: 588, duration: 162 },
                { id: "eid1818", tween: [ "style", "${_chilli1}", "left", '-159.71%', { fromValue: '-195.44%'}], position: 826, duration: 256 },
                { id: "eid1822", tween: [ "style", "${_chilli1}", "left", '-224.02%', { fromValue: '-159.71%'}], position: 1165, duration: 208 },
                { id: "eid1831", tween: [ "style", "${_chilli1}", "left", '-23.3%', { fromValue: '-224.02%'}], position: 1500, duration: 366 },
                { id: "eid1810", tween: [ "transform", "${_chilli1}", "rotateZ", '-120deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid1833", tween: [ "transform", "${_chilli1}", "rotateZ", '0deg', { fromValue: '-120deg'}], position: 1500, duration: 366 }            ]
        }
    }
},
"G_chilli": {
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
                    transform: [[0, 0], [], [], ['0.69231', '0.84536']],
                    id: 'chilli2',
                    type: 'image',
                    rect: ['-21.9%', '-9%', '144%', '118.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/chiliflakes/oregano1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '16.91%'],
                ["style", "width", '5.63%']
            ],
            "${_chilli2}": [
                ["style", "top", '-9.14%'],
                ["transform", "scaleY", '0.84536'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '0.69231'],
                ["style", "left", '-22.24%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1866,
            autoPlay: true,
            timeline: [
                { id: "eid1806", tween: [ "style", "${_chilli2}", "top", '-59.75%', { fromValue: '-9.14%'}], position: 0, duration: 500 },
                { id: "eid1815", tween: [ "style", "${_chilli2}", "top", '-14.81%', { fromValue: '-59.75%'}], position: 588, duration: 162 },
                { id: "eid1819", tween: [ "style", "${_chilli2}", "top", '-28.16%', { fromValue: '-14.81%'}], position: 826, duration: 256 },
                { id: "eid1823", tween: [ "style", "${_chilli2}", "top", '-67.14%', { fromValue: '-28.16%'}], position: 1165, duration: 208 },
                { id: "eid1830", tween: [ "style", "${_chilli2}", "top", '-9.5%', { fromValue: '-67.14%'}], position: 1500, duration: 366 },
                { id: "eid1807", tween: [ "style", "${_chilli2}", "left", '-250.46%', { fromValue: '-22.24%'}], position: 0, duration: 500 },
                { id: "eid1814", tween: [ "style", "${_chilli2}", "left", '-208.63%', { fromValue: '-250.46%'}], position: 588, duration: 162 },
                { id: "eid1818", tween: [ "style", "${_chilli2}", "left", '-350.48%', { fromValue: '-208.63%'}], position: 826, duration: 256 },
                { id: "eid1822", tween: [ "style", "${_chilli2}", "left", '-123.6%', { fromValue: '-350.48%'}], position: 1165, duration: 208 },
                { id: "eid1831", tween: [ "style", "${_chilli2}", "left", '-23.3%', { fromValue: '-123.6%'}], position: 1500, duration: 366 },
                { id: "eid1810", tween: [ "transform", "${_chilli2}", "rotateZ", '-120deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid1833", tween: [ "transform", "${_chilli2}", "rotateZ", '0deg', { fromValue: '-120deg'}], position: 1500, duration: 366 }            ]
        }
    }
},
"strar_2": {
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
                    rect: ['0%', '0%', '100.1%', '100%', 'auto', 'auto'],
                    id: 's1',
                    fill: ['rgba(0,0,0,0)', 'images/All_btn/s1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['69.3%', '-33.6%', '100%', '100%', 'auto', 'auto'],
                    id: 's12',
                    fill: ['rgba(0,0,0,0)', 'images/All_btn/s1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_s12}": [
                ["style", "-webkit-transform-origin", [51.1,55.57], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [51.1,55.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [51.1,55.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [51.1,55.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [51.1,55.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '0'],
                ["style", "left", '69.3%'],
                ["style", "width", '100%'],
                ["style", "top", '-34.23%'],
                ["transform", "scaleY", '0'],
                ["style", "height", '100%'],
                ["style", "display", 'none']
            ],
            "${_s1}": [
                ["style", "top", '-0.25%'],
                ["transform", "scaleX", '0'],
                ["transform", "scaleY", '0'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'none'],
                ["style", "height", '102.27%'],
                ["style", "left", '-0.29%'],
                ["style", "width", '100%']
            ],
            "${symbolSelector}": [
                ["style", "height", '18.5%'],
                ["style", "width", '14.26%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3750,
            autoPlay: true,
            timeline: [
                { id: "eid5962", tween: [ "transform", "${_s12}", "scaleX", '1', { fromValue: '0'}], position: 1500, duration: 1000 },
                { id: "eid5954", tween: [ "transform", "${_s1}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 500, duration: 750 },
                { id: "eid5941", tween: [ "style", "${_s1}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid5963", tween: [ "transform", "${_s12}", "scaleY", '1', { fromValue: '0'}], position: 1500, duration: 1000 },
                { id: "eid5964", tween: [ "transform", "${_s12}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 1500, duration: 1000 },
                { id: "eid5952", tween: [ "transform", "${_s1}", "scaleX", '1', { fromValue: '0'}], position: 500, duration: 750 },
                { id: "eid5953", tween: [ "transform", "${_s1}", "scaleY", '1', { fromValue: '0'}], position: 500, duration: 750 },
                { id: "eid5955", tween: [ "style", "${_s12}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 }            ]
        }
    }
},
"strar_3": {
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
                    id: 's1',
                    type: 'image',
                    rect: ['0%', '0%', '100.1%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/All_btn/s1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['69.3%', '-33.6%', '100%', '100%', 'auto', 'auto'],
                    id: 's12',
                    fill: ['rgba(0,0,0,0)', 'images/All_btn/s1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['133.5%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 's13',
                    fill: ['rgba(0,0,0,0)', 'images/All_btn/s1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_s12}": [
                ["style", "top", '19.8%'],
                ["style", "-webkit-transform-origin", [51.1,55.57], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [51.1,55.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [51.1,55.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [51.1,55.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [51.1,55.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'none'],
                ["style", "height", '0%'],
                ["style", "left", '119.1%'],
                ["style", "width", '0%']
            ],
            "${_s13}": [
                ["style", "top", '51%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'none'],
                ["style", "height", '0%'],
                ["style", "left", '183.2%'],
                ["style", "width", '0%']
            ],
            "${_s1}": [
                ["style", "top", '54%'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "height", '0%'],
                ["style", "left", '49.72%'],
                ["style", "width", '0%']
            ],
            "${symbolSelector}": [
                ["style", "height", '18.5%'],
                ["style", "width", '14.26%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5500,
            autoPlay: true,
            timeline: [
                { id: "eid1859", tween: [ "style", "${_s12}", "display", 'none', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid1920", tween: [ "style", "${_s12}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid1927", tween: [ "style", "${_s12}", "height", '100%', { fromValue: '0%'}], position: 1500, duration: 500 },
                { id: "eid1933", tween: [ "style", "${_s12}", "height", '49.57%', { fromValue: '100%'}], position: 2000, duration: 250 },
                { id: "eid1934", tween: [ "style", "${_s12}", "height", '100%', { fromValue: '49.57%'}], position: 2250, duration: 250 },
                { id: "eid1904", tween: [ "style", "${_s1}", "width", '100%', { fromValue: '0%'}], position: 500, duration: 500 },
                { id: "eid1910", tween: [ "style", "${_s1}", "width", '50%', { fromValue: '100%'}], position: 1000, duration: 250 },
                { id: "eid1916", tween: [ "style", "${_s1}", "width", '100.1%', { fromValue: '50%'}], position: 1250, duration: 250 },
                { id: "eid1931", tween: [ "style", "${_s12}", "left", '68.77%', { fromValue: '119.1%'}], position: 1500, duration: 500 },
                { id: "eid1937", tween: [ "style", "${_s12}", "left", '93.54%', { fromValue: '68.77%'}], position: 2000, duration: 250 },
                { id: "eid1939", tween: [ "style", "${_s12}", "left", '69.3%', { fromValue: '93.54%'}], position: 2250, duration: 250 },
                { id: "eid1951", tween: [ "style", "${_s13}", "width", '100%', { fromValue: '0%'}], position: 2500, duration: 500 },
                { id: "eid1960", tween: [ "style", "${_s13}", "width", '50%', { fromValue: '100%'}], position: 3000, duration: 250 },
                { id: "eid1961", tween: [ "style", "${_s13}", "width", '100%', { fromValue: '50%'}], position: 3250, duration: 250 },
                { id: "eid1928", tween: [ "style", "${_s12}", "width", '100%', { fromValue: '0%'}], position: 1500, duration: 500 },
                { id: "eid1935", tween: [ "style", "${_s12}", "width", '50%', { fromValue: '100%'}], position: 2000, duration: 250 },
                { id: "eid1936", tween: [ "style", "${_s12}", "width", '100%', { fromValue: '50%'}], position: 2250, duration: 250 },
                { id: "eid1993", tween: [ "transform", "${_s13}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 4500, duration: 1000 },
                { id: "eid1905", tween: [ "style", "${_s1}", "height", '100.27%', { fromValue: '0%'}], position: 500, duration: 500 },
                { id: "eid1911", tween: [ "style", "${_s1}", "height", '50%', { fromValue: '100.27%'}], position: 1000, duration: 250 },
                { id: "eid1915", tween: [ "style", "${_s1}", "height", '100%', { fromValue: '50%'}], position: 1250, duration: 250 },
                { id: "eid1950", tween: [ "style", "${_s13}", "height", '100%', { fromValue: '0%'}], position: 2500, duration: 500 },
                { id: "eid1958", tween: [ "style", "${_s13}", "height", '50%', { fromValue: '100%'}], position: 3000, duration: 250 },
                { id: "eid1959", tween: [ "style", "${_s13}", "height", '100%', { fromValue: '50%'}], position: 3250, duration: 250 },
                { id: "eid1932", tween: [ "style", "${_s12}", "top", '-33.33%', { fromValue: '19.8%'}], position: 1500, duration: 500 },
                { id: "eid1938", tween: [ "style", "${_s12}", "top", '-7.09%', { fromValue: '-33.33%'}], position: 2000, duration: 250 },
                { id: "eid1940", tween: [ "style", "${_s12}", "top", '-33.45%', { fromValue: '-7.09%'}], position: 2250, duration: 250 },
                { id: "eid1909", tween: [ "style", "${_s1}", "top", '-0.03%', { fromValue: '54%'}], position: 500, duration: 500 },
                { id: "eid1913", tween: [ "style", "${_s1}", "top", '25.21%', { fromValue: '-0.03%'}], position: 1000, duration: 250 },
                { id: "eid1919", tween: [ "style", "${_s1}", "top", '0.06%', { fromValue: '25.21%'}], position: 1250, duration: 250 },
                { id: "eid1956", tween: [ "style", "${_s13}", "left", '134.28%', { fromValue: '183.2%'}], position: 2500, duration: 500 },
                { id: "eid1962", tween: [ "style", "${_s13}", "left", '157.87%', { fromValue: '134.28%'}], position: 3000, duration: 250 },
                { id: "eid1964", tween: [ "style", "${_s13}", "left", '134.21%', { fromValue: '157.87%'}], position: 3250, duration: 250 },
                { id: "eid1974", tween: [ "transform", "${_s12}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 3500, duration: 1000 },
                { id: "eid1860", tween: [ "style", "${_s13}", "display", 'none', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid1941", tween: [ "style", "${_s13}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid1908", tween: [ "style", "${_s1}", "left", '1.75%', { fromValue: '49.72%'}], position: 500, duration: 500 },
                { id: "eid1917", tween: [ "style", "${_s1}", "left", '25.45%', { fromValue: '1.75%'}], position: 1000, duration: 250 },
                { id: "eid1918", tween: [ "style", "${_s1}", "left", '0.88%', { fromValue: '25.45%'}], position: 1250, duration: 250 },
                { id: "eid1957", tween: [ "style", "${_s13}", "top", '0%', { fromValue: '51%'}], position: 2500, duration: 500 },
                { id: "eid1963", tween: [ "style", "${_s13}", "top", '25.23%', { fromValue: '0%'}], position: 3000, duration: 250 },
                { id: "eid1965", tween: [ "style", "${_s13}", "top", '0%', { fromValue: '25.23%'}], position: 3250, duration: 250 }            ]
        }
    }
},
"red_ani": {
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
                    rect: ['0%', '0%', '99.8%', '100.8%', 'auto', 'auto'],
                    id: 'red',
                    opacity: 0.71794871794872,
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/pizza/red.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0.9%', '0%', '100%', '101.5%', 'auto', 'auto'],
                    id: 'black',
                    fill: ['rgba(0,0,0,0)', 'images/pizza/black.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_black}": [
                ["style", "top", '0%'],
                ["style", "display", 'none'],
                ["style", "height", '101.49%'],
                ["style", "opacity", '0'],
                ["style", "left", '0.89%'],
                ["style", "width", '100%']
            ],
            "${_red}": [
                ["style", "top", '0%'],
                ["style", "display", 'block'],
                ["style", "height", '100.82%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0%'],
                ["style", "width", '99.83%']
            ],
            "${symbolSelector}": [
                ["style", "height", '8.5%'],
                ["style", "width", '14.13%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 23250,
            autoPlay: true,
            timeline: [
                { id: "eid5898", tween: [ "style", "${_red}", "display", 'none', { fromValue: 'block'}], position: 23250, duration: 0 },
                { id: "eid2120", tween: [ "style", "${_black}", "opacity", '1', { fromValue: '0'}], position: 18000, duration: 4000 },
                { id: "eid5901", tween: [ "style", "${_black}", "opacity", '0', { fromValue: '1'}], position: 22000, duration: 1000 },
                { id: "eid2014", tween: [ "style", "${_red}", "opacity", '0.5', { fromValue: '0.000000'}], position: 0, duration: 5000 },
                { id: "eid2117", tween: [ "style", "${_black}", "display", 'block', { fromValue: 'none'}], position: 19750, duration: 0 },
                { id: "eid5897", tween: [ "style", "${_black}", "display", 'none', { fromValue: 'block'}], position: 23000, duration: 0 }            ]
        }
    }
},
"time_bar": {
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
                    display: 'none',
                    type: 'rect',
                    id: 'line_shado',
                    rect: ['-21.7%', '-85%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: 'line3',
                    type: 'image',
                    rect: ['37.6%', '-151.7%', '24.8%', '403.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/All_btn/line2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: 'line2',
                    type: 'image',
                    rect: ['39.2%', '-146.2%', '21.8%', '390%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/All_btn/line3.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: 'line1',
                    type: 'image',
                    rect: ['37.6%', '-151.7%', '24.8%', '403.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/All_btn/line1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'line_shado',
                symbolName: 'line_shado',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_line1}": [
                ["style", "top", '-151.66%'],
                ["style", "left", '37.59%'],
                ["transform", "rotateZ", '90deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '10%'],
                ["style", "width", '30.25%']
            ],
            "${_line3}": [
                ["style", "top", '-151.66%'],
                ["style", "left", '37.59%'],
                ["transform", "rotateZ", '90deg']
            ],
            "${_line_shado}": [
                ["style", "display", 'none']
            ],
            "${_line2}": [
                ["style", "top", '-144.66%'],
                ["transform", "skewX", '0.48deg'],
                ["transform", "skewY", '0deg'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '390%'],
                ["transform", "scaleY", '-0.00387'],
                ["style", "left", '7.44%'],
                ["style", "width", '21.82%']
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
                { id: "eid2061", tween: [ "transform", "${_line2}", "scaleY", '1', { fromValue: '-0.00387'}], position: 0, duration: 5000 },
                { id: "eid2477", tween: [ "transform", "${_line2}", "scaleY", '0', { fromValue: '1'}], position: 15000, duration: 10000 },
                { id: "eid6003", tween: [ "style", "${_line_shado}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid6004", tween: [ "style", "${_line_shado}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid6005", tween: [ "style", "${_line_shado}", "display", 'none', { fromValue: 'block'}], position: 25000, duration: 0 },
                { id: "eid2068", tween: [ "style", "${_line2}", "left", '38.84%', { fromValue: '7.44%'}], position: 0, duration: 5000 },
                { id: "eid2476", tween: [ "style", "${_line2}", "left", '0.41%', { fromValue: '38.84%'}], position: 15000, duration: 10000 },
                { id: "eid6289", tween: [ "style", "${_line2}", "top", '-144.66%', { fromValue: '-144.66%'}], position: 0, duration: 0 }            ]
        }
    }
},
"play": {
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
                    id: 'game2',
                    type: 'image',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/All_btn/game.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_game2}": [
                ["style", "top", '0.02%'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '0.04%']
            ],
            "${symbolSelector}": [
                ["style", "height", '16.5%'],
                ["style", "width", '12.26%']
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
                { id: "eid2221", tween: [ "transform", "${_game2}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid2222", tween: [ "transform", "${_game2}", "scaleX", '1', { fromValue: '0.8'}], position: 500, duration: 500 },
                { id: "eid2223", tween: [ "transform", "${_game2}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid2224", tween: [ "transform", "${_game2}", "scaleY", '1', { fromValue: '0.8'}], position: 500, duration: 500 }            ]
        }
    }
},
"No_strar": {
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
                    rect: ['0%', '0%', '100.1%', '100%', 'auto', 'auto'],
                    id: 's1',
                    fill: ['rgba(0,0,0,0)', 'images/All_btn/s1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['69.3%', '-33.6%', '100%', '100%', 'auto', 'auto'],
                    id: 's12',
                    fill: ['rgba(0,0,0,0)', 'images/All_btn/s1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['133.5%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 's13',
                    fill: ['rgba(0,0,0,0)', 'images/All_btn/s1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_s12}": [
                ["style", "top", '19.8%'],
                ["style", "-webkit-transform-origin", [51.1,55.57], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [51.1,55.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [51.1,55.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [51.1,55.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [51.1,55.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'none'],
                ["style", "height", '0%'],
                ["style", "left", '119.1%'],
                ["style", "width", '0%']
            ],
            "${_s13}": [
                ["style", "top", '51%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'none'],
                ["style", "height", '0%'],
                ["style", "left", '183.2%'],
                ["style", "width", '0%']
            ],
            "${_s1}": [
                ["style", "top", '54%'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'none'],
                ["style", "height", '0%'],
                ["style", "left", '49.72%'],
                ["style", "width", '0%']
            ],
            "${symbolSelector}": [
                ["style", "height", '18.5%'],
                ["style", "width", '14.26%']
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
                { id: "eid5975", tween: [ "style", "${_s13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5977", tween: [ "style", "${_s1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5976", tween: [ "style", "${_s12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"back_up_R_1": {
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
                    id: '_22',
                    fill: ['rgba(0,0,0,0)', 'images/girl/22.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: '_32',
                    fill: ['rgba(0,0,0,0)', 'images/girl/32.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: '_42',
                    fill: ['rgba(0,0,0,0)', 'images/girl/42.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.26356', '0.25965']],
                    id: 'plate8',
                    type: 'image',
                    rect: ['24.1%', '18.2%', '121.7%', '41.1%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/plate2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'blankimageonplate',
                    tag: 'img',
                    rect: ['54.3%', '28.3%', '57.9%', '14%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ing/bankimg2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['72.4%', '34.8%', '15.2%', '12.7%', 'auto', 'auto'],
                    id: 'PHRB_0',
                    fill: ['rgba(0,0,0,0)', 'images/pizza/pizzabase3.png', '0px', '0px']
                },
                {
                    type: 'image',
                    rect: ['74.4%', '34.6%', '79.2%', '80.7%', 'auto', 'auto'],
                    id: 'PHRB_1',
                    opacity: 0.66666666666667,
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/pizza/sauceonpizza2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['1.15928']],
                    type: 'image',
                    display: 'none',
                    id: 'PHRB_2',
                    opacity: 1,
                    rect: ['78.7%', '34.6%', '14.1%', '12.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pizza/cheese2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['-0.48937', '0.47916']],
                    type: 'image',
                    id: 'PHRB_3',
                    display: 'none',
                    rect: ['42.7%', '9.3%', '17.8%', '15.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/leaves1_On_pizza2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['-0.96774']],
                    type: 'image',
                    id: 'PHRB_4',
                    display: 'none',
                    rect: ['50.4%', '35%', '7.8%', '6.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/leave2_on_face2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['-0.33617', '0.52577']],
                    type: 'image',
                    id: 'PHRB_5',
                    display: 'none',
                    rect: ['21.8%', '15.5%', '29.6%', '16.1%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/red_cutcapsicum_on_face2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['78.5%', '35.2%', '11.4%', '6.7%', 'auto', 'auto'],
                    id: 'PHRB_6',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/green_cutcaps_on_pizza2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['-55'], ['0', '42'], ['0.32955', '0.62797']],
                    type: 'image',
                    id: 'PHRB_7',
                    display: 'none',
                    rect: ['77%', '5.2%', '28.1%', '17%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/tomato_on_pizza2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.41991', '-0.51261']],
                    type: 'image',
                    id: 'PHRB_8',
                    display: 'none',
                    rect: ['56.9%', '-23.8%', '29.1%', '19.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/olive_on_pizza2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['77.1%', '35.4%', '7.9%', '5.6%', 'auto', 'auto'],
                    id: 'PHRB_9',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/ham_on_pizza2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.40987', '0.54054']],
                    borderRadius: ['0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px'],
                    rect: ['46.5%', '17.2%', '18.2%', '12.2%', 'auto', 'auto'],
                    id: 'PHRB_10',
                    display: 'none',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/mushroom_on_pizza2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.32758', '0.52173']],
                    type: 'image',
                    id: 'PHRB_11',
                    display: 'none',
                    rect: ['59.8%', '9.8%', '29.1%', '15.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/stick_on_pizza2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['80%', '35%', '61.8%', '70.7%', 'auto', 'auto'],
                    id: 'PHRB_12',
                    fill: ['rgba(0,0,0,0)', 'images/chiliflakes/chili_on_pizza2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['77.8%', '34.8%', '61%', '72%', 'auto', 'auto'],
                    id: 'PHRB_13',
                    fill: ['rgba(0,0,0,0)', 'images/chiliflakes/oregano_on_pizza2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['83.2%', '35.9%', '3.3%', '4.3%', 'auto', 'auto'],
                    id: 'PHRB_14',
                    fill: ['rgba(0,0,0,0)', 'images/tunna/tuna1]2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.28163', '0.75342']],
                    type: 'image',
                    id: 'PHRB_15',
                    display: 'none',
                    rect: ['6.7%', '28.4%', '30.6%', '12.2%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/shrimp2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${__32}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'none']
            ],
            "${_blankimageonplate}": [
                ["style", "top", '28.32%'],
                ["style", "height", '13.95%'],
                ["style", "left", '54.25%'],
                ["style", "width", '57.87%']
            ],
            "${__22}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${_PHRB_1}": [
                ["style", "top", '34.59%'],
                ["style", "display", 'none'],
                ["style", "height", '11.94%'],
                ["style", "opacity", '0.6666666865348816'],
                ["style", "left", '74.44%'],
                ["style", "width", '15%']
            ],
            "${_PHRB_15}": [
                ["style", "top", '33.32%'],
                ["transform", "scaleY", '0.75342'],
                ["transform", "scaleX", '0.28163'],
                ["style", "display", 'none'],
                ["style", "height", '15.85%'],
                ["style", "left", '57.49%'],
                ["style", "width", '53.27%']
            ],
            "${_PHRB_4}": [
                ["style", "top", '34.96%'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '-0.96774'],
                ["style", "height", '11.94%'],
                ["style", "left", '72.64%'],
                ["style", "width", '15.51%']
            ],
            "${_PHRB_8}": [
                ["style", "top", '28.42%'],
                ["transform", "scaleY", '-0.51261'],
                ["transform", "scaleX", '0.41991'],
                ["style", "display", 'none'],
                ["style", "height", '23.29%'],
                ["style", "left", '66.04%'],
                ["style", "width", '35.73%']
            ],
            "${symbolSelector}": [
                ["style", "height", '110.14%'],
                ["style", "width", '146.21%']
            ],
            "${_plate8}": [
                ["style", "top", '18.16%'],
                ["transform", "scaleY", '0.25965'],
                ["transform", "scaleX", '0.26356'],
                ["style", "left", '24.06%'],
                ["style", "height", '41.11%']
            ],
            "${_PHRB_11}": [
                ["style", "top", '28.58%'],
                ["transform", "scaleX", '0.32758'],
                ["transform", "scaleY", '0.52173'],
                ["transform", "rotateZ", '-29deg'],
                ["style", "display", 'none'],
                ["style", "height", '22.88%'],
                ["style", "left", '67.58%'],
                ["style", "width", '45.8%']
            ],
            "${_PHRB_14}": [
                ["style", "top", '35.9%'],
                ["style", "display", 'none'],
                ["style", "height", '8.16%'],
                ["style", "left", '83.23%'],
                ["style", "width", '8.5%']
            ],
            "${_PHRB_7}": [
                ["transform", "rotateZ", '-55deg'],
                ["transform", "scaleX", '0.32955'],
                ["style", "left", '68.88%'],
                ["style", "width", '45.52%'],
                ["style", "top", '28.94%'],
                ["transform", "scaleY", '0.62797'],
                ["style", "height", '19.01%'],
                ["style", "display", 'none'],
                ["transform", "skewY", '0deg']
            ],
            "${_PHRB_5}": [
                ["style", "top", '30.07%'],
                ["transform", "scaleY", '0.52577'],
                ["transform", "scaleX", '-0.33617'],
                ["style", "display", 'none'],
                ["style", "height", '22.71%'],
                ["style", "left", '58.96%'],
                ["style", "width", '44.63%']
            ],
            "${__42}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'none']
            ],
            "${_PHRB_13}": [
                ["style", "top", '34.79%'],
                ["style", "display", 'none'],
                ["style", "height", '11.94%'],
                ["style", "left", '77.83%'],
                ["style", "width", '15%']
            ],
            "${_PHRB_3}": [
                ["style", "top", '28.9%'],
                ["transform", "scaleY", '0.47916'],
                ["transform", "scaleX", '-0.48937'],
                ["style", "display", 'none'],
                ["style", "height", '24.92%'],
                ["style", "left", '63.68%'],
                ["style", "width", '30.66%']
            ],
            "${_PHRB_6}": [
                ["style", "top", '35.19%'],
                ["style", "display", 'none'],
                ["style", "height", '11.94%'],
                ["style", "left", '78.45%'],
                ["style", "width", '15%']
            ],
            "${_PHRB_12}": [
                ["style", "top", '34.98%'],
                ["style", "display", 'none'],
                ["style", "height", '11.94%'],
                ["style", "left", '79.98%'],
                ["style", "width", '15%']
            ],
            "${_PHRB_9}": [
                ["style", "top", '35.42%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'none'],
                ["style", "height", '11.94%'],
                ["style", "left", '77.11%'],
                ["style", "width", '15%']
            ],
            "${_PHRB_0}": [
                ["style", "top", '34.79%'],
                ["style", "display", 'none'],
                ["style", "height", '11.94%'],
                ["style", "left", '72.43%'],
                ["style", "width", '15%']
            ],
            "${_PHRB_2}": [
                ["style", "top", '34.59%'],
                ["transform", "scaleX", '1.15928'],
                ["style", "display", 'none'],
                ["style", "height", '11.94%'],
                ["style", "opacity", '1'],
                ["style", "left", '74.53%'],
                ["style", "width", '12.94%']
            ],
            "${_PHRB_10}": [
                ["style", "border-top-left-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.40987'],
                ["style", "left", '66.77%'],
                ["style", "width", '36.6%'],
                ["style", "top", '30.31%'],
                ["style", "border-bottom-left-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '0.54054'],
                ["style", "height", '22.09%'],
                ["style", "display", 'none'],
                ["style", "border-top-right-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 302,
            autoPlay: true,
            timeline: [
                { id: "eid3605", tween: [ "style", "${_PHRB_4}", "width", '15.51%', { fromValue: '15.51%'}], position: 0, duration: 0 },
                { id: "eid3589", tween: [ "style", "${_PHRB_7}", "top", '28.94%', { fromValue: '28.94%'}], position: 0, duration: 0 },
                { id: "eid3656", tween: [ "style", "${_PHRB_14}", "height", '8.16%', { fromValue: '8.16%'}], position: 0, duration: 0 },
                { id: "eid3162", tween: [ "style", "${_PHRB_14}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3606", tween: [ "style", "${_PHRB_0}", "height", '11.94%', { fromValue: '11.94%'}], position: 0, duration: 0 },
                { id: "eid3583", tween: [ "style", "${_PHRB_13}", "height", '11.94%', { fromValue: '11.94%'}], position: 0, duration: 0 },
                { id: "eid3592", tween: [ "style", "${_PHRB_7}", "width", '45.52%', { fromValue: '45.52%'}], position: 0, duration: 0 },
                { id: "eid3636", tween: [ "style", "${_PHRB_5}", "top", '30.07%', { fromValue: '30.07%'}], position: 0, duration: 0 },
                { id: "eid3657", tween: [ "style", "${_PHRB_14}", "width", '8.5%', { fromValue: '8.5%'}], position: 0, duration: 0 },
                { id: "eid3585", tween: [ "style", "${_PHRB_11}", "top", '28.58%', { fromValue: '28.58%'}], position: 0, duration: 0 },
                { id: "eid3600", tween: [ "style", "${_PHRB_10}", "width", '36.6%', { fromValue: '36.6%'}], position: 0, duration: 0 },
                { id: "eid3595", tween: [ "style", "${_PHRB_12}", "height", '11.94%', { fromValue: '11.94%'}], position: 0, duration: 0 },
                { id: "eid3644", tween: [ "style", "${_PHRB_3}", "left", '63.68%', { fromValue: '63.68%'}], position: 0, duration: 0 },
                { id: "eid3170", tween: [ "style", "${_PHRB_6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3653", tween: [ "style", "${_PHRB_8}", "top", '28.42%', { fromValue: '28.42%'}], position: 0, duration: 0 },
                { id: "eid3623", tween: [ "style", "${_PHRB_3}", "height", '24.92%', { fromValue: '24.92%'}], position: 0, duration: 0 },
                { id: "eid3578", tween: [ "style", "${_PHRB_2}", "width", '12.94%', { fromValue: '12.94%'}], position: 0, duration: 0 },
                { id: "eid3596", tween: [ "style", "${_PHRB_12}", "width", '15%', { fromValue: '15%'}], position: 0, duration: 0 },
                { id: "eid3641", tween: [ "style", "${_PHRB_6}", "width", '15%', { fromValue: '15%'}], position: 0, duration: 0 },
                { id: "eid3165", tween: [ "style", "${_PHRB_11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3640", tween: [ "style", "${_PHRB_6}", "height", '11.94%', { fromValue: '11.94%'}], position: 0, duration: 0 },
                { id: "eid3173", tween: [ "style", "${_PHRB_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3614", tween: [ "style", "${_PHRB_8}", "width", '35.73%', { fromValue: '35.73%'}], position: 0, duration: 0 },
                { id: "eid3176", tween: [ "style", "${_PHRB_0}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3582", tween: [ "style", "${_PHRB_15}", "width", '53.27%', { fromValue: '53.27%'}], position: 0, duration: 0 },
                { id: "eid3576", tween: [ "style", "${_PHRB_2}", "height", '11.94%', { fromValue: '11.94%'}], position: 0, duration: 0 },
                { id: "eid3593", tween: [ "style", "${_PHRB_9}", "height", '11.94%', { fromValue: '11.94%'}], position: 0, duration: 0 },
                { id: "eid3163", tween: [ "style", "${_PHRB_13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3579", tween: [ "style", "${_PHRB_15}", "top", '33.32%', { fromValue: '33.32%'}], position: 0, duration: 0 },
                { id: "eid3607", tween: [ "style", "${_PHRB_0}", "width", '15%', { fromValue: '15%'}], position: 0, duration: 0 },
                { id: "eid3171", tween: [ "style", "${_PHRB_5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3603", tween: [ "style", "${_PHRB_4}", "height", '11.94%', { fromValue: '11.94%'}], position: 0, duration: 0 },
                { id: "eid3168", tween: [ "style", "${_PHRB_8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3586", tween: [ "style", "${_PHRB_11}", "height", '22.88%', { fromValue: '22.88%'}], position: 0, duration: 0 },
                { id: "eid3166", tween: [ "style", "${_PHRB_10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3615", tween: [ "style", "${_PHRB_3}", "top", '28.9%', { fromValue: '28.9%'}], position: 0, duration: 0 },
                { id: "eid3520", tween: [ "style", "${__22}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3521", tween: [ "style", "${__22}", "display", 'none', { fromValue: 'block'}], position: 129, duration: 0 },
                { id: "eid3588", tween: [ "style", "${_PHRB_11}", "width", '45.8%', { fromValue: '45.8%'}], position: 0, duration: 0 },
                { id: "eid3637", tween: [ "style", "${_PHRB_5}", "height", '22.71%', { fromValue: '22.71%'}], position: 0, duration: 0 },
                { id: "eid3174", tween: [ "style", "${_PHRB_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3598", tween: [ "style", "${_PHRB_10}", "height", '22.09%', { fromValue: '22.09%'}], position: 0, duration: 0 },
                { id: "eid3169", tween: [ "style", "${_PHRB_7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3650", tween: [ "style", "${_PHRB_5}", "left", '58.96%', { fromValue: '58.96%'}], position: 0, duration: 0 },
                { id: "eid3651", tween: [ "style", "${_PHRB_4}", "left", '72.64%', { fromValue: '72.64%'}], position: 0, duration: 0 },
                { id: "eid3639", tween: [ "style", "${_PHRB_5}", "width", '44.63%', { fromValue: '44.63%'}], position: 0, duration: 0 },
                { id: "eid3581", tween: [ "style", "${_PHRB_15}", "left", '57.49%', { fromValue: '57.49%'}], position: 0, duration: 0 },
                { id: "eid3587", tween: [ "style", "${_PHRB_11}", "left", '67.58%', { fromValue: '67.58%'}], position: 0, duration: 0 },
                { id: "eid3609", tween: [ "style", "${_PHRB_1}", "width", '15%', { fromValue: '15%'}], position: 0, duration: 0 },
                { id: "eid3167", tween: [ "style", "${_PHRB_9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3518", tween: [ "style", "${__42}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3524", tween: [ "style", "${__42}", "display", 'block', { fromValue: 'none'}], position: 302, duration: 0 },
                { id: "eid3594", tween: [ "style", "${_PHRB_9}", "width", '15%', { fromValue: '15%'}], position: 0, duration: 0 },
                { id: "eid3608", tween: [ "style", "${_PHRB_1}", "height", '11.94%', { fromValue: '11.94%'}], position: 0, duration: 0 },
                { id: "eid3590", tween: [ "style", "${_PHRB_7}", "height", '19.01%', { fromValue: '19.01%'}], position: 0, duration: 0 },
                { id: "eid3599", tween: [ "style", "${_PHRB_10}", "left", '66.77%', { fromValue: '66.77%'}], position: 0, duration: 0 },
                { id: "eid3172", tween: [ "style", "${_PHRB_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3175", tween: [ "style", "${_PHRB_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3654", tween: [ "style", "${_PHRB_8}", "left", '66.04%', { fromValue: '66.04%'}], position: 0, duration: 0 },
                { id: "eid3612", tween: [ "style", "${_PHRB_8}", "height", '23.29%', { fromValue: '23.29%'}], position: 0, duration: 0 },
                { id: "eid3161", tween: [ "style", "${_PHRB_15}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3164", tween: [ "style", "${_PHRB_12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3577", tween: [ "style", "${_PHRB_2}", "left", '74.53%', { fromValue: '74.53%'}], position: 0, duration: 0 },
                { id: "eid3597", tween: [ "style", "${_PHRB_10}", "top", '30.31%', { fromValue: '30.31%'}], position: 0, duration: 0 },
                { id: "eid3580", tween: [ "style", "${_PHRB_15}", "height", '15.85%', { fromValue: '15.85%'}], position: 0, duration: 0 },
                { id: "eid3584", tween: [ "style", "${_PHRB_13}", "width", '15%', { fromValue: '15%'}], position: 0, duration: 0 },
                { id: "eid3635", tween: [ "style", "${_PHRB_3}", "width", '30.66%', { fromValue: '30.66%'}], position: 0, duration: 0 },
                { id: "eid3519", tween: [ "style", "${__32}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3522", tween: [ "style", "${__32}", "display", 'block', { fromValue: 'none'}], position: 129, duration: 0 },
                { id: "eid3523", tween: [ "style", "${__32}", "display", 'none', { fromValue: 'block'}], position: 302, duration: 0 },
                { id: "eid3591", tween: [ "style", "${_PHRB_7}", "left", '68.88%', { fromValue: '68.88%'}], position: 0, duration: 0 }            ]
        }
    }
},
"body_ani_plate_1": {
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
                    rect: ['11%', '3.5%', '146.2%', '110.1%', 'auto', 'auto'],
                    id: '_2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/girl/2.png', '0px', '0px']
                },
                {
                    rect: ['11.7%', '3.5%', '146.2%', '110.1%', 'auto', 'auto'],
                    id: '_4',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/girl/4.png', '0px', '0px']
                },
                {
                    rect: ['11.7%', '3.5%', '146.2%', '110.1%', 'auto', 'auto'],
                    id: '_3',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/girl/3.png', '0px', '0px']
                },
                {
                    rect: ['0%', '20.1%', '146.2%', '110.1%', 'auto', 'auto'],
                    id: '_2C',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/girl/2C.png', '0px', '0px']
                },
                {
                    rect: ['0%', '20%', '146.2%', '110.1%', 'auto', 'auto'],
                    id: '_3C',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/girl/3C.png', '0px', '0px']
                },
                {
                    rect: ['0%', '20%', '146.2%', '110.1%', 'auto', 'auto'],
                    id: '_4C',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/girl/4C.png', '0px', '0px']
                },
                {
                    rect: ['-26.2%', '0%', '146.2%', '110.1%', 'auto', 'auto'],
                    id: 'B14',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/girl/14.png', '0px', '0px']
                },
                {
                    display: 'block',
                    type: 'rect',
                    rect: ['35.9%', '17.1%', 'auto', 'auto', 'auto', 'auto'],
                    id: 'eye1'
                },
                {
                    rect: ['-27.6%', '-0.6%', '146.2%', '110.1%', 'auto', 'auto'],
                    id: '_18',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/girl/18.png', '0px', '0px']
                },
                {
                    rect: ['-27.6%', '-0.6%', '146.2%', '110.1%', 'auto', 'auto'],
                    id: '_19',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/girl/19.png', '0px', '0px']
                },
                {
                    rect: ['6.2%', '6%', '146.2%', '110.1%', 'auto', 'auto'],
                    id: '_19C',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/girl/19C.png', '0px', '0px']
                },
                {
                    rect: ['6.2%', '6.1%', '146.2%', '110.1%', 'auto', 'auto'],
                    id: '_18C',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/girl/18C.png', '0px', '0px']
                },
                {
                    rect: ['-31%', '-9.6%', '146.2%', '110.1%', 'auto', 'auto'],
                    id: 'b25',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/girl/25.png', '0px', '0px']
                },
                {
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/ing/bankimgBackup.png', '0px', '0px'],
                    id: 'blankimageonplate',
                    rect: ['92.4%', '23.8%', '35.2%', '13.6%', 'auto', 'auto'],
                    display: 'block',
                    tag: 'img'
                },
                {
                    rect: ['89.5%', '27.6%', '8.3%', '6.1%', 'auto', 'auto'],
                    id: 'PizzaOnHendGrp1',
                    display: 'block',
                    type: 'group',
                    c: [
                    {
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/ing/bankimage.png', '0px', '0px'],
                        id: 'PH2_0',
                        rect: ['0%', '50%', '414.3%', '143.8%', 'auto', 'auto'],
                        display: 'block',
                        tag: 'img'
                    },
                    {
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/ing/bankimage.png', '0px', '0px'],
                        rect: ['14.3%', '50%', '378.6%', '126%', 'auto', 'auto'],
                        id: 'PH2_1',
                        opacity: 0.6,
                        display: 'block',
                        tag: 'img'
                    },
                    {
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/ing/bankimage.png', '0px', '0px'],
                        id: 'PH2_2',
                        rect: ['21.4%', '43.8%', '364.4%', '137.5%', 'auto', 'auto'],
                        display: 'block',
                        tag: 'img'
                    },
                    {
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/ing/bankimage.png', '0px', '0px'],
                        transform: [[0, 0], [], [], ['-0.48937', '0.47916']],
                        id: 'PH2_3',
                        rect: ['61.4%', '12.7%', '17.8%', '15.9%', 'auto', 'auto'],
                        display: 'block',
                        tag: 'img'
                    },
                    {
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/ing/bankimage.png', '0px', '0px'],
                        transform: [[0, 0], [], [], ['-0.96774']],
                        id: 'PH2_4',
                        rect: ['44.7%', '23.6%', '7.8%', '6.9%', 'auto', 'auto'],
                        display: 'block',
                        tag: 'img'
                    },
                    {
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/ing/bankimage.png', '0px', '0px'],
                        transform: [[0, 0], [], [], ['-0.33617', '0.52577']],
                        id: 'PH2_5',
                        rect: ['55%', '16.4%', '29.6%', '16.1%', 'auto', 'auto'],
                        display: 'block',
                        tag: 'img'
                    },
                    {
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/ing/bankimage.png', '0px', '0px'],
                        id: 'PH2_6',
                        rect: ['17.6%', '19.2%', '11.4%', '6.7%', 'auto', 'auto'],
                        display: 'block',
                        tag: 'img'
                    },
                    {
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/ing/bankimage.png', '0px', '0px'],
                        transform: [[0, 0], ['-55'], ['0', '42'], ['0.32955', '0.62797']],
                        id: 'PH2_7',
                        rect: ['-5.5%', '36.4%', '28.1%', '17%', 'auto', 'auto'],
                        display: 'block',
                        tag: 'img'
                    },
                    {
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/ing/bankimage.png', '0px', '0px'],
                        transform: [[0, 0], [], [], ['0.41991', '-0.51261']],
                        id: 'PH2_8',
                        rect: ['9.9%', '66.5%', '29.1%', '19.9%', 'auto', 'auto'],
                        display: 'block',
                        tag: 'img'
                    },
                    {
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/ing/bankimage.png', '0px', '0px'],
                        id: 'PH2_9',
                        rect: ['28.3%', '36.2%', '7.9%', '5.6%', 'auto', 'auto'],
                        display: 'block',
                        tag: 'img'
                    },
                    {
                        fill: ['rgba(0,0,0,0)', 'images/ing/bankimage.png', '0px', '0px'],
                        transform: [[0, 0], [], [], ['0.40987', '0.54054']],
                        borderRadius: ['0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px'],
                        type: 'image',
                        id: 'PH2_10',
                        rect: ['17.3%', '27.1%', '18.2%', '12.2%', 'auto', 'auto'],
                        display: 'block',
                        tag: 'img'
                    },
                    {
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/ing/bankimage.png', '0px', '0px'],
                        transform: [[0, 0], [], [], ['0.32758', '0.52173']],
                        id: 'PH2_11',
                        rect: ['7.7%', '11.4%', '29.1%', '15.3%', 'auto', 'auto'],
                        display: 'block',
                        tag: 'img'
                    },
                    {
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/ing/bankimage.png', '0px', '0px'],
                        id: 'PH2_12',
                        rect: ['16.7%', '12.1%', '61.8%', '70.7%', 'auto', 'auto'],
                        display: 'block',
                        tag: 'img'
                    },
                    {
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/ing/bankimage.png', '0px', '0px'],
                        id: 'PH2_13',
                        rect: ['21%', '19.2%', '61%', '72%', 'auto', 'auto'],
                        display: 'block',
                        tag: 'img'
                    },
                    {
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/ing/bankimage.png', '0px', '0px'],
                        id: 'PH2_14',
                        rect: ['53.9%', '23.4%', '3.3%', '4.3%', 'auto', 'auto'],
                        display: 'block',
                        tag: 'img'
                    },
                    {
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/ing/bankimage.png', '0px', '0px'],
                        transform: [[0, 0], [], [], ['0.28163', '0.75342']],
                        id: 'PH2_15',
                        rect: ['19.2%', '8.9%', '30.6%', '12.2%', 'auto', 'auto'],
                        display: 'block',
                        tag: 'img'
                    }]
                }
            ],
            symbolInstances: [
            {
                id: 'eye1',
                symbolName: 'eye1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_PH2_1}": [
                ["style", "top", '50%'],
                ["style", "display", 'block'],
                ["style", "height", '126%'],
                ["style", "opacity", '0.6'],
                ["style", "left", '14.29%'],
                ["style", "width", '378.58%']
            ],
            "${_blankimageonplate}": [
                ["style", "top", '34.2%'],
                ["style", "height", '8.25%'],
                ["transform", "scaleY", '1.56409'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '39.00965'],
                ["style", "display", 'block'],
                ["style", "left", '98.62%'],
                ["style", "width", '1.72%']
            ],
            "${_b25}": [
                ["style", "display", 'none'],
                ["style", "left", '-88.28%'],
                ["style", "top", '-12.17%']
            ],
            "${_PH2_3}": [
                ["style", "top", '4.76%'],
                ["transform", "scaleY", '0.47916'],
                ["style", "display", 'block'],
                ["transform", "scaleX", '-0.48937'],
                ["style", "height", '196.58%'],
                ["style", "left", '-41.67%'],
                ["style", "width", '362.59%']
            ],
            "${_PH2_10}": [
                ["style", "border-top-left-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.40987'],
                ["style", "left", '-66.67%'],
                ["style", "width", '439.82%'],
                ["style", "top", '22.08%'],
                ["style", "border-bottom-left-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '0.54054'],
                ["style", "height", '170.84%'],
                ["style", "display", 'block'],
                ["style", "border-top-right-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_PH2_11}": [
                ["style", "top", '42.86%'],
                ["style", "display", 'block'],
                ["transform", "scaleY", '0.52173'],
                ["transform", "rotateZ", '-29deg'],
                ["style", "height", '136.46%'],
                ["transform", "scaleX", '0.32758'],
                ["style", "left", '-133.33%'],
                ["style", "width", '739.17%']
            ],
            "${_PH2_4}": [
                ["style", "top", '47.62%'],
                ["style", "display", 'block'],
                ["style", "height", '114.73%'],
                ["transform", "scaleX", '-0.96774'],
                ["style", "left", '83.33%'],
                ["style", "width", '214.04%']
            ],
            "${_eye1}": [
                ["style", "top", '21.16%'],
                ["style", "left", '28.97%'],
                ["style", "display", 'block']
            ],
            "${_PH2_8}": [
                ["style", "top", '-9.52%'],
                ["transform", "scaleY", '-0.51261'],
                ["style", "display", 'block'],
                ["transform", "scaleX", '0.41991'],
                ["style", "height", '225.91%'],
                ["style", "left", '-116.67%'],
                ["style", "width", '591.67%']
            ],
            "${_PH2_14}": [
                ["style", "top", '71.43%'],
                ["style", "height", '52.38%'],
                ["style", "display", 'block'],
                ["style", "left", '58.33%'],
                ["style", "width", '116.67%']
            ],
            "${__19C}": [
                ["style", "top", '4.93%'],
                ["style", "left", '-2.76%'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '57.5%'],
                ["style", "width", '18.13%']
            ],
            "${__19}": [
                ["transform", "scaleX", '1'],
                ["style", "display", 'none'],
                ["style", "left", '-35.17%'],
                ["style", "top", '3.48%']
            ],
            "${_PH2_6}": [
                ["style", "top", '57.14%'],
                ["style", "height", '85.71%'],
                ["style", "display", 'block'],
                ["style", "left", '91.67%'],
                ["style", "width", '175%']
            ],
            "${__3C}": [
                ["style", "display", 'none'],
                ["style", "left", '-53.79%'],
                ["style", "top", '3.48%']
            ],
            "${_PH2_7}": [
                ["transform", "rotateZ", '-55deg'],
                ["transform", "scaleX", '0.32955'],
                ["style", "left", '-16.67%'],
                ["style", "width", '500.33%'],
                ["style", "top", '-23.81%'],
                ["transform", "scaleY", '0.62797'],
                ["style", "height", '261.38%'],
                ["style", "display", 'block'],
                ["transform", "skewY", '0deg']
            ],
            "${_B14}": [
                ["style", "display", 'block'],
                ["style", "left", '-26.21%'],
                ["style", "top", '0%']
            ],
            "${__18C}": [
                ["style", "top", '4.93%'],
                ["style", "left", '-2.76%'],
                ["style", "display", 'none']
            ],
            "${__4C}": [
                ["style", "display", 'none'],
                ["style", "left", '-53.79%'],
                ["style", "top", '3.48%']
            ],
            "${_PH2_13}": [
                ["style", "top", '52.38%'],
                ["style", "height", '100%'],
                ["style", "display", 'block'],
                ["style", "left", '58.33%'],
                ["style", "width", '225%']
            ],
            "${__3}": [
                ["transform", "scaleX", '1'],
                ["style", "display", 'none'],
                ["style", "left", '-4.14%'],
                ["style", "top", '3.48%']
            ],
            "${__4}": [
                ["transform", "scaleX", '1'],
                ["style", "display", 'none'],
                ["style", "left", '-4.14%'],
                ["style", "top", '3.48%']
            ],
            "${__2}": [
                ["style", "top", '3.48%'],
                ["transform", "scaleY", '1'],
                ["style", "display", 'none'],
                ["style", "height", '110.14%'],
                ["transform", "scaleX", '1'],
                ["style", "left", '-4.83%'],
                ["style", "width", '146.21%']
            ],
            "${_PH2_15}": [
                ["style", "top", '34.42%'],
                ["transform", "scaleY", '0.75342'],
                ["style", "display", 'block'],
                ["transform", "scaleX", '0.28163'],
                ["style", "height", '117.28%'],
                ["style", "left", '-175%'],
                ["style", "width", '626.61%']
            ],
            "${__18}": [
                ["transform", "scaleX", '1'],
                ["style", "display", 'none'],
                ["style", "left", '-35.17%'],
                ["style", "top", '3.48%']
            ],
            "${_PH2_2}": [
                ["style", "top", '43.75%'],
                ["style", "height", '137.5%'],
                ["style", "display", 'block'],
                ["style", "left", '21.43%'],
                ["style", "width", '364.36%']
            ],
            "${_PH2_5}": [
                ["style", "top", '28.57%'],
                ["transform", "scaleY", '0.52577'],
                ["style", "display", 'block'],
                ["transform", "scaleX", '-0.33617'],
                ["style", "height", '166.73%'],
                ["style", "left", '-133.33%'],
                ["style", "width", '663.44%']
            ],
            "${_PH2_0}": [
                ["style", "top", '50%'],
                ["style", "height", '143.75%'],
                ["style", "display", 'block'],
                ["style", "left", '0%'],
                ["style", "width", '414.29%']
            ],
            "${_PH2_12}": [
                ["style", "top", '42.86%'],
                ["style", "height", '119.05%'],
                ["style", "display", 'block'],
                ["style", "left", '66.67%'],
                ["style", "width", '250%']
            ],
            "${_PizzaOnHendGrp1}": [
                ["style", "top", '34.78%'],
                ["style", "height", '4.7%'],
                ["style", "display", 'block'],
                ["style", "left", '80%'],
                ["style", "width", '9.7%']
            ],
            "${_PH2_9}": [
                ["style", "top", '54.61%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '106.99%'],
                ["style", "display", 'block'],
                ["style", "left", '83.33%'],
                ["style", "width", '179.04%']
            ],
            "${__2C}": [
                ["style", "top", '3.48%'],
                ["style", "left", '-53.79%'],
                ["style", "display", 'none']
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
                { id: "eid5817", tween: [ "style", "${_PH2_0}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4171", tween: [ "style", "${__19}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid4681", tween: [ "style", "${__19}", "display", 'block', { fromValue: 'block'}], position: 3377, duration: 0 },
                { id: "eid4682", tween: [ "style", "${__19}", "display", 'none', { fromValue: 'block'}], position: 3685, duration: 0 },
                { id: "eid5152", tween: [ "style", "${_blankimageonplate}", "top", '34.2%', { fromValue: '34.2%'}], position: 0, duration: 0 },
                { id: "eid5156", tween: [ "style", "${_blankimageonplate}", "top", '37.97%', { fromValue: '34.2%'}], position: 1116, duration: 1 },
                { id: "eid5160", tween: [ "style", "${_blankimageonplate}", "top", '34.49%', { fromValue: '37.97%'}], position: 1999, duration: 1 },
                { id: "eid5164", tween: [ "style", "${_blankimageonplate}", "top", '38.26%', { fromValue: '34.49%'}], position: 2091, duration: 1 },
                { id: "eid5168", tween: [ "style", "${_blankimageonplate}", "top", '34.2%', { fromValue: '38.26%'}], position: 2999, duration: 1 },
                { id: "eid5172", tween: [ "style", "${_blankimageonplate}", "top", '35.94%', { fromValue: '34.2%'}], position: 3139, duration: 1 },
                { id: "eid5193", tween: [ "style", "${_blankimageonplate}", "top", '34.49%', { fromValue: '35.94%'}], position: 3999, duration: 1 },
                { id: "eid5198", tween: [ "style", "${_blankimageonplate}", "top", '38.55%', { fromValue: '34.49%'}], position: 4115, duration: 1 },
                { id: "eid5202", tween: [ "style", "${_blankimageonplate}", "top", '33.91%', { fromValue: '38.55%'}], position: 4999, duration: 1 },
                { id: "eid5075", tween: [ "style", "${_PizzaOnHendGrp1}", "left", '95.17%', { fromValue: '80%'}], position: 1116, duration: 1 },
                { id: "eid5081", tween: [ "style", "${_PizzaOnHendGrp1}", "left", '81.38%', { fromValue: '95.17%'}], position: 1999, duration: 1 },
                { id: "eid5085", tween: [ "style", "${_PizzaOnHendGrp1}", "left", '-23.45%', { fromValue: '81.38%'}], position: 2091, duration: 1 },
                { id: "eid5089", tween: [ "style", "${_PizzaOnHendGrp1}", "left", '80%', { fromValue: '-23.45%'}], position: 2999, duration: 1 },
                { id: "eid5093", tween: [ "style", "${_PizzaOnHendGrp1}", "left", '70.34%', { fromValue: '80%'}], position: 3139, duration: 1 },
                { id: "eid5097", tween: [ "style", "${_PizzaOnHendGrp1}", "left", '81.38%', { fromValue: '70.34%'}], position: 3999, duration: 1 },
                { id: "eid5101", tween: [ "style", "${_PizzaOnHendGrp1}", "left", '3.45%', { fromValue: '81.38%'}], position: 4115, duration: 1 },
                { id: "eid5105", tween: [ "style", "${_PizzaOnHendGrp1}", "left", '79.22%', { fromValue: '3.45%'}], position: 4999, duration: 1 },
                { id: "eid4646", tween: [ "style", "${__4C}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid4675", tween: [ "style", "${__4C}", "display", 'block', { fromValue: 'none'}], position: 2642, duration: 0 },
                { id: "eid4676", tween: [ "style", "${__4C}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid5076", tween: [ "style", "${_PizzaOnHendGrp1}", "top", '40.58%', { fromValue: '34.78%'}], position: 1116, duration: 1 },
                { id: "eid5082", tween: [ "style", "${_PizzaOnHendGrp1}", "top", '36.23%', { fromValue: '40.58%'}], position: 1999, duration: 1 },
                { id: "eid5086", tween: [ "style", "${_PizzaOnHendGrp1}", "top", '41.45%', { fromValue: '36.23%'}], position: 2091, duration: 1 },
                { id: "eid5090", tween: [ "style", "${_PizzaOnHendGrp1}", "top", '36.81%', { fromValue: '41.45%'}], position: 2999, duration: 1 },
                { id: "eid5094", tween: [ "style", "${_PizzaOnHendGrp1}", "top", '39.42%', { fromValue: '36.81%'}], position: 3139, duration: 1 },
                { id: "eid5098", tween: [ "style", "${_PizzaOnHendGrp1}", "top", '36.52%', { fromValue: '39.42%'}], position: 3999, duration: 1 },
                { id: "eid5102", tween: [ "style", "${_PizzaOnHendGrp1}", "top", '40%', { fromValue: '36.52%'}], position: 4115, duration: 1 },
                { id: "eid5106", tween: [ "style", "${_PizzaOnHendGrp1}", "top", '36.81%', { fromValue: '40%'}], position: 4999, duration: 1 },
                { id: "eid4525", tween: [ "style", "${_B14}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4649", tween: [ "style", "${_B14}", "display", 'none', { fromValue: 'block'}], position: 1117, duration: 0 },
                { id: "eid4655", tween: [ "style", "${_B14}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid4671", tween: [ "style", "${_B14}", "display", 'none', { fromValue: 'block'}], position: 2092, duration: 0 },
                { id: "eid4677", tween: [ "style", "${_B14}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid4678", tween: [ "style", "${_B14}", "display", 'none', { fromValue: 'block'}], position: 3140, duration: 0 },
                { id: "eid4685", tween: [ "style", "${_B14}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid4689", tween: [ "style", "${_B14}", "display", 'none', { fromValue: 'block'}], position: 4116, duration: 0 },
                { id: "eid4695", tween: [ "style", "${_B14}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid4160", tween: [ "style", "${_b25}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid4172", tween: [ "style", "${__18}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid4679", tween: [ "style", "${__18}", "display", 'block', { fromValue: 'none'}], position: 3140, duration: 0 },
                { id: "eid4680", tween: [ "style", "${__18}", "display", 'none', { fromValue: 'block'}], position: 3377, duration: 0 },
                { id: "eid4683", tween: [ "style", "${__18}", "display", 'block', { fromValue: 'none'}], position: 3685, duration: 0 },
                { id: "eid4684", tween: [ "style", "${__18}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid4168", tween: [ "style", "${__4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid4652", tween: [ "style", "${__4}", "display", 'block', { fromValue: 'block'}], position: 1380, duration: 0 },
                { id: "eid4653", tween: [ "style", "${__4}", "display", 'none', { fromValue: 'block'}], position: 1643, duration: 0 },
                { id: "eid3224", tween: [ "style", "${_PH2_13}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4687", tween: [ "style", "${__19C}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid4688", tween: [ "style", "${__19C}", "display", 'block', { fromValue: 'none'}], position: 4116, duration: 0 },
                { id: "eid4690", tween: [ "style", "${__19C}", "display", 'none', { fromValue: 'block'}], position: 4366, duration: 0 },
                { id: "eid4693", tween: [ "style", "${__19C}", "display", 'block', { fromValue: 'none'}], position: 4676, duration: 0 },
                { id: "eid4694", tween: [ "style", "${__19C}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
                { id: "eid3233", tween: [ "style", "${_PH2_4}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid518", tween: [ "style", "${_eye1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid5077", tween: [ "style", "${_eye1}", "display", 'none', { fromValue: 'block'}], position: 1170, duration: 0 },
                { id: "eid5078", tween: [ "style", "${_eye1}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid6049", tween: [ "style", "${_eye1}", "display", 'none', { fromValue: 'block'}], position: 2094, duration: 0 },
                { id: "eid6050", tween: [ "style", "${_eye1}", "display", 'block', { fromValue: 'none'}], position: 3057, duration: 0 },
                { id: "eid6051", tween: [ "style", "${_eye1}", "display", 'none', { fromValue: 'block'}], position: 3140, duration: 0 },
                { id: "eid6052", tween: [ "style", "${_eye1}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid6053", tween: [ "style", "${_eye1}", "display", 'none', { fromValue: 'block'}], position: 4115, duration: 0 },
                { id: "eid6054", tween: [ "style", "${_eye1}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid3227", tween: [ "style", "${_PH2_10}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4167", tween: [ "style", "${__2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid4650", tween: [ "style", "${__2}", "display", 'block', { fromValue: 'none'}], position: 1117, duration: 0 },
                { id: "eid4651", tween: [ "style", "${__2}", "display", 'none', { fromValue: 'block'}], position: 1380, duration: 0 },
                { id: "eid4648", tween: [ "style", "${__2C}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid4658", tween: [ "style", "${__2C}", "display", 'block', { fromValue: 'none'}], position: 2092, duration: 0 },
                { id: "eid4672", tween: [ "style", "${__2C}", "display", 'none', { fromValue: 'block'}], position: 2373, duration: 0 },
                { id: "eid3222", tween: [ "style", "${_PH2_15}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3230", tween: [ "style", "${_PH2_7}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3226", tween: [ "style", "${_PH2_11}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3223", tween: [ "style", "${_PH2_14}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3234", tween: [ "style", "${_PH2_3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid5818", tween: [ "style", "${_PH2_1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid399", tween: [ "style", "${_blankimageonplate}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3229", tween: [ "style", "${_PH2_8}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3228", tween: [ "style", "${_PH2_9}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3231", tween: [ "style", "${_PH2_6}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4647", tween: [ "style", "${__3C}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid4673", tween: [ "style", "${__3C}", "display", 'block', { fromValue: 'none'}], position: 2373, duration: 0 },
                { id: "eid4674", tween: [ "style", "${__3C}", "display", 'none', { fromValue: 'block'}], position: 2642, duration: 0 },
                { id: "eid5031", tween: [ "style", "${_PizzaOnHendGrp1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid5037", tween: [ "style", "${_PizzaOnHendGrp1}", "display", 'block', { fromValue: 'block'}], position: 5000, duration: 0 },
                { id: "eid5819", tween: [ "style", "${_PH2_2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4169", tween: [ "style", "${__3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid4654", tween: [ "style", "${__3}", "display", 'block', { fromValue: 'block'}], position: 1643, duration: 0 },
                { id: "eid4656", tween: [ "style", "${__3}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid3232", tween: [ "style", "${_PH2_5}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid260", tween: [ "style", "${_GC2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid588", tween: [ "style", "${_GC2}", "display", 'none', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid3225", tween: [ "style", "${_PH2_12}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid5143", tween: [ "style", "${_blankimageonplate}", "left", '98.62%', { fromValue: '98.62%'}], position: 0, duration: 0 },
                { id: "eid5155", tween: [ "style", "${_blankimageonplate}", "left", '111.72%', { fromValue: '98.62%'}], position: 1116, duration: 1 },
                { id: "eid5159", tween: [ "style", "${_blankimageonplate}", "left", '94.48%', { fromValue: '111.72%'}], position: 1999, duration: 1 },
                { id: "eid5163", tween: [ "style", "${_blankimageonplate}", "left", '-6.21%', { fromValue: '94.48%'}], position: 2091, duration: 1 },
                { id: "eid5167", tween: [ "style", "${_blankimageonplate}", "left", '99.31%', { fromValue: '-6.21%'}], position: 2999, duration: 1 },
                { id: "eid5171", tween: [ "style", "${_blankimageonplate}", "left", '86.9%', { fromValue: '99.31%'}], position: 3139, duration: 1 },
                { id: "eid5194", tween: [ "style", "${_blankimageonplate}", "left", '97.93%', { fromValue: '86.9%'}], position: 3999, duration: 1 },
                { id: "eid5197", tween: [ "style", "${_blankimageonplate}", "left", '20%', { fromValue: '97.93%'}], position: 4115, duration: 1 },
                { id: "eid5201", tween: [ "style", "${_blankimageonplate}", "left", '100.69%', { fromValue: '20%'}], position: 4999, duration: 1 },
                { id: "eid4686", tween: [ "style", "${__18C}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid4691", tween: [ "style", "${__18C}", "display", 'block', { fromValue: 'block'}], position: 4366, duration: 0 },
                { id: "eid4692", tween: [ "style", "${__18C}", "display", 'none', { fromValue: 'block'}], position: 4676, duration: 0 }            ]
        }
    }
},
"back_up_L_1": {
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
                    id: '_22',
                    fill: ['rgba(0,0,0,0)', 'images/girl/22.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: '_32',
                    fill: ['rgba(0,0,0,0)', 'images/girl/32.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: '_42',
                    fill: ['rgba(0,0,0,0)', 'images/girl/42.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.29149', '0.33016']],
                    id: 'plate7',
                    type: 'image',
                    rect: ['-34.9%', '23.7%', '100.5%', '32.2%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/plate2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'blankimageonplate',
                    tag: 'img',
                    rect: ['-11.8%', '31.6%', '51.9%', '11.1%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ing/bankimg2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['3.6%', '35.8%', '15.2%', '12.7%', 'auto', 'auto'],
                    id: 'PHLB_0',
                    fill: ['rgba(0,0,0,0)', 'images/pizza/pizzabase3.png', '0px', '0px']
                },
                {
                    type: 'image',
                    rect: ['5.6%', '35.6%', '79.2%', '80.7%', 'auto', 'auto'],
                    id: 'PHLB_1',
                    opacity: 0.66666666666667,
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/pizza/sauceonpizza2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['1.15928']],
                    type: 'image',
                    display: 'block',
                    id: 'PHLB_2',
                    opacity: 1,
                    rect: ['9.9%', '35.6%', '14.1%', '12.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pizza/cheese2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['-0.48937', '0.47916']],
                    type: 'image',
                    id: 'PHLB_3',
                    display: 'block',
                    rect: ['-26.2%', '10.3%', '17.8%', '15.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/leaves1_On_pizza2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['-0.96774']],
                    type: 'image',
                    id: 'PHLB_4',
                    display: 'block',
                    rect: ['-18.5%', '36%', '7.8%', '6.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/leave2_on_face2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['-0.33617', '0.52577']],
                    type: 'image',
                    id: 'PHLB_5',
                    display: 'block',
                    rect: ['-47%', '16.6%', '29.6%', '16.1%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/red_cutcapsicum_on_face2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['9.6%', '36.2%', '11.4%', '6.7%', 'auto', 'auto'],
                    id: 'PHLB_6',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/green_cutcaps_on_pizza2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['-55'], ['0', '42'], ['0.32955', '0.62797']],
                    type: 'image',
                    id: 'PHLB_7',
                    display: 'block',
                    rect: ['8.1%', '6.2%', '28.1%', '17%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/tomato_on_pizza2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.41991', '-0.51261']],
                    type: 'image',
                    id: 'PHLB_8',
                    display: 'block',
                    rect: ['-12%', '-22.8%', '29.1%', '19.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/olive_on_pizza2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['8.2%', '36.5%', '7.9%', '5.6%', 'auto', 'auto'],
                    id: 'PHLB_9',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/ham_on_pizza2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.40987', '0.54054']],
                    borderRadius: ['0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px'],
                    rect: ['-22.4%', '18.2%', '18.2%', '12.2%', 'auto', 'auto'],
                    id: 'PHLB_10',
                    display: 'block',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/mushroom_on_pizza2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.32758', '0.52173']],
                    type: 'image',
                    id: 'PHLB_11',
                    display: 'block',
                    rect: ['-9.1%', '10.9%', '29.1%', '15.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/stick_on_pizza2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['11.1%', '36%', '61.8%', '70.7%', 'auto', 'auto'],
                    id: 'PHLB_12',
                    fill: ['rgba(0,0,0,0)', 'images/chiliflakes/chili_on_pizza2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['9%', '35.8%', '61%', '72%', 'auto', 'auto'],
                    id: 'PHLB_13',
                    fill: ['rgba(0,0,0,0)', 'images/chiliflakes/oregano_on_pizza2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['14.4%', '37%', '3.3%', '4.3%', 'auto', 'auto'],
                    id: 'PHLB_14',
                    fill: ['rgba(0,0,0,0)', 'images/tunna/tuna1]2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.28163', '0.75342']],
                    type: 'image',
                    id: 'PHLB_15',
                    display: 'block',
                    rect: ['-62.2%', '29.4%', '30.6%', '12.2%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/shrimp2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${__32}": [
                ["transform", "scaleX", '-1'],
                ["style", "display", 'none'],
                ["style", "left", '0%'],
                ["style", "top", '0%']
            ],
            "${_blankimageonplate}": [
                ["style", "top", '31.58%'],
                ["style", "height", '11.05%'],
                ["style", "left", '-11.79%'],
                ["style", "width", '51.85%']
            ],
            "${__22}": [
                ["style", "top", '0%'],
                ["transform", "scaleX", '-1'],
                ["style", "height", '100.3%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${_PHLB_12}": [
                ["style", "top", '36.04%'],
                ["style", "height", '5.36%'],
                ["style", "display", 'block'],
                ["style", "left", '11.11%'],
                ["style", "width", '15%']
            ],
            "${_PHLB_6}": [
                ["style", "top", '36.24%'],
                ["style", "height", '5.36%'],
                ["style", "display", 'block'],
                ["style", "left", '9.58%'],
                ["style", "width", '15%']
            ],
            "${_PHLB_0}": [
                ["style", "top", '35.84%'],
                ["style", "height", '5.36%'],
                ["style", "display", 'block'],
                ["style", "left", '3.56%'],
                ["style", "width", '15%']
            ],
            "${_PHLB_8}": [
                ["style", "top", '33.95%'],
                ["transform", "scaleY", '-0.51261'],
                ["style", "display", 'block'],
                ["transform", "scaleX", '0.41991'],
                ["style", "height", '10.46%'],
                ["style", "left", '1.42%'],
                ["style", "width", '35.73%']
            ],
            "${_PHLB_7}": [
                ["transform", "rotateZ", '-55deg'],
                ["transform", "scaleX", '0.32955'],
                ["style", "left", '-4.82%'],
                ["style", "width", '45.52%'],
                ["style", "top", '33.35%'],
                ["transform", "scaleY", '0.62797'],
                ["style", "height", '8.54%'],
                ["style", "display", 'block'],
                ["transform", "skewY", '0deg']
            ],
            "${_PHLB_9}": [
                ["style", "top", '36.47%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '5.36%'],
                ["style", "display", 'block'],
                ["style", "left", '8.24%'],
                ["style", "width", '15%']
            ],
            "${_plate7}": [
                ["style", "top", '23.68%'],
                ["transform", "scaleY", '0.33016'],
                ["transform", "scaleX", '0.29149'],
                ["style", "height", '32.24%'],
                ["style", "left", '-34.91%'],
                ["style", "width", '100.48%']
            ],
            "${_PHLB_11}": [
                ["style", "top", '33.06%'],
                ["style", "display", 'block'],
                ["transform", "scaleY", '0.52173'],
                ["transform", "rotateZ", '-29deg'],
                ["transform", "scaleX", '0.32758'],
                ["style", "height", '10.27%'],
                ["style", "left", '-4.15%'],
                ["style", "width", '45.8%']
            ],
            "${_PHLB_10}": [
                ["style", "border-top-left-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.40987'],
                ["style", "left", '-2.1%'],
                ["style", "width", '36.6%'],
                ["style", "top", '34.17%'],
                ["style", "border-bottom-left-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '0.54054'],
                ["style", "height", '9.92%'],
                ["style", "display", 'block'],
                ["style", "border-top-right-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${__42}": [
                ["transform", "scaleX", '-1'],
                ["style", "display", 'none'],
                ["style", "left", '0%'],
                ["style", "top", '0%']
            ],
            "${_PHLB_2}": [
                ["style", "top", '35.64%'],
                ["style", "display", 'block'],
                ["transform", "scaleX", '1.15928'],
                ["style", "height", '5.36%'],
                ["style", "opacity", '1'],
                ["style", "left", '5.66%'],
                ["style", "width", '12.94%']
            ],
            "${_PHLB_14}": [
                ["style", "top", '36.96%'],
                ["style", "height", '5.36%'],
                ["style", "display", 'block'],
                ["style", "left", '14.36%'],
                ["style", "width", '15%']
            ],
            "${_PHLB_1}": [
                ["style", "top", '35.64%'],
                ["style", "display", 'block'],
                ["style", "height", '5.36%'],
                ["style", "opacity", '0.6666666865348816'],
                ["style", "left", '5.57%'],
                ["style", "width", '15%']
            ],
            "${_PHLB_15}": [
                ["style", "top", '35.44%'],
                ["transform", "scaleY", '0.75342'],
                ["style", "display", 'block'],
                ["transform", "scaleX", '0.28163'],
                ["style", "height", '7.11%'],
                ["style", "left", '-11.38%'],
                ["style", "width", '53.27%']
            ],
            "${_PHLB_3}": [
                ["style", "top", '33.52%'],
                ["transform", "scaleY", '0.47916'],
                ["style", "display", 'block'],
                ["transform", "scaleX", '-0.48937'],
                ["style", "height", '11.19%'],
                ["style", "left", '-0.94%'],
                ["style", "width", '30.66%']
            ],
            "${_PHLB_4}": [
                ["style", "top", '36.01%'],
                ["style", "display", 'block'],
                ["style", "height", '5.36%'],
                ["transform", "scaleX", '-0.96774'],
                ["style", "left", '3.77%'],
                ["style", "width", '15.51%']
            ],
            "${_PHLB_5}": [
                ["style", "top", '34.09%'],
                ["transform", "scaleY", '0.52577'],
                ["style", "display", 'block'],
                ["transform", "scaleX", '-0.33617'],
                ["style", "height", '10.2%'],
                ["style", "left", '-11.79%'],
                ["style", "width", '44.63%']
            ],
            "${symbolSelector}": [
                ["style", "height", '110.14%'],
                ["style", "width", '146.21%']
            ],
            "${_PHLB_13}": [
                ["style", "top", '35.84%'],
                ["style", "height", '5.36%'],
                ["style", "display", 'block'],
                ["style", "left", '8.96%'],
                ["style", "width", '15%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 293,
            autoPlay: true,
            timeline: [
                { id: "eid3517", tween: [ "style", "${_PHLB_0}", "width", '15%', { fromValue: '15%'}], position: 0, duration: 0 },
                { id: "eid3506", tween: [ "style", "${_PHLB_14}", "height", '5.36%', { fromValue: '5.36%'}], position: 0, duration: 0 },
                { id: "eid3543", tween: [ "style", "${_PHLB_10}", "top", '34.17%', { fromValue: '34.17%'}], position: 0, duration: 0 },
                { id: "eid3551", tween: [ "style", "${_PHLB_7}", "left", '-4.82%', { fromValue: '-4.82%'}], position: 0, duration: 0 },
                { id: "eid3502", tween: [ "style", "${_PHLB_1}", "height", '5.36%', { fromValue: '5.36%'}], position: 0, duration: 0 },
                { id: "eid3513", tween: [ "style", "${_PHLB_13}", "width", '15%', { fromValue: '15%'}], position: 0, duration: 0 },
                { id: "eid3518", tween: [ "style", "${__42}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid355", tween: [ "style", "${__42}", "display", 'block', { fromValue: 'none'}], position: 293, duration: 0 },
                { id: "eid3514", tween: [ "style", "${_PHLB_0}", "height", '5.36%', { fromValue: '5.36%'}], position: 0, duration: 0 },
                { id: "eid3531", tween: [ "style", "${_PHLB_4}", "height", '5.36%', { fromValue: '5.36%'}], position: 0, duration: 0 },
                { id: "eid3496", tween: [ "style", "${_PHLB_15}", "top", '35.44%', { fromValue: '35.44%'}], position: 0, duration: 0 },
                { id: "eid3245", tween: [ "style", "${_PHLB_8}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3512", tween: [ "style", "${_PHLB_13}", "height", '5.36%', { fromValue: '5.36%'}], position: 0, duration: 0 },
                { id: "eid3546", tween: [ "style", "${_PHLB_10}", "width", '36.6%', { fromValue: '36.6%'}], position: 0, duration: 0 },
                { id: "eid3242", tween: [ "style", "${_PHLB_11}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3249", tween: [ "style", "${_PHLB_4}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3540", tween: [ "style", "${_PHLB_2}", "height", '5.36%', { fromValue: '5.36%'}], position: 0, duration: 0 },
                { id: "eid3553", tween: [ "style", "${_PHLB_3}", "top", '33.52%', { fromValue: '33.52%'}], position: 0, duration: 0 },
                { id: "eid3499", tween: [ "style", "${_PHLB_15}", "width", '53.27%', { fromValue: '53.27%'}], position: 0, duration: 0 },
                { id: "eid3511", tween: [ "style", "${_PHLB_5}", "width", '44.63%', { fromValue: '44.63%'}], position: 0, duration: 0 },
                { id: "eid3575", tween: [ "style", "${_PHLB_3}", "left", '-0.94%', { fromValue: '-0.94%'}], position: 0, duration: 0 },
                { id: "eid3533", tween: [ "style", "${_PHLB_4}", "width", '15.51%', { fromValue: '15.51%'}], position: 0, duration: 0 },
                { id: "eid3549", tween: [ "style", "${_PHLB_7}", "top", '33.35%', { fromValue: '33.35%'}], position: 0, duration: 0 },
                { id: "eid3239", tween: [ "style", "${_PHLB_14}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3570", tween: [ "style", "${_PHLB_3}", "width", '30.66%', { fromValue: '30.66%'}], position: 0, duration: 0 },
                { id: "eid3244", tween: [ "style", "${_PHLB_9}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3544", tween: [ "style", "${_PHLB_10}", "height", '9.92%', { fromValue: '9.92%'}], position: 0, duration: 0 },
                { id: "eid3541", tween: [ "style", "${_PHLB_2}", "left", '5.66%', { fromValue: '5.66%'}], position: 0, duration: 0 },
                { id: "eid3547", tween: [ "style", "${_PHLB_6}", "height", '5.36%', { fromValue: '5.36%'}], position: 0, duration: 0 },
                { id: "eid3534", tween: [ "style", "${_PHLB_11}", "top", '33.06%', { fromValue: '33.06%'}], position: 0, duration: 0 },
                { id: "eid3504", tween: [ "style", "${_PHLB_9}", "height", '5.36%', { fromValue: '5.36%'}], position: 0, duration: 0 },
                { id: "eid3505", tween: [ "style", "${_PHLB_9}", "width", '15%', { fromValue: '15%'}], position: 0, duration: 0 },
                { id: "eid3529", tween: [ "style", "${_PHLB_12}", "height", '5.36%', { fromValue: '5.36%'}], position: 0, duration: 0 },
                { id: "eid3526", tween: [ "style", "${_PHLB_8}", "height", '10.46%', { fromValue: '10.46%'}], position: 0, duration: 0 },
                { id: "eid3248", tween: [ "style", "${_PHLB_5}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3538", tween: [ "style", "${_PHLB_11}", "left", '-4.15%', { fromValue: '-4.15%'}], position: 0, duration: 0 },
                { id: "eid3528", tween: [ "style", "${_PHLB_8}", "width", '35.73%', { fromValue: '35.73%'}], position: 0, duration: 0 },
                { id: "eid3251", tween: [ "style", "${_PHLB_2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3550", tween: [ "style", "${_PHLB_7}", "height", '8.54%', { fromValue: '8.54%'}], position: 0, duration: 0 },
                { id: "eid3240", tween: [ "style", "${_PHLB_13}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3571", tween: [ "style", "${_PHLB_5}", "left", '-11.79%', { fromValue: '-11.79%'}], position: 0, duration: 0 },
                { id: "eid3542", tween: [ "style", "${_PHLB_2}", "width", '12.94%', { fromValue: '12.94%'}], position: 0, duration: 0 },
                { id: "eid3509", tween: [ "style", "${_PHLB_5}", "height", '10.2%', { fromValue: '10.2%'}], position: 0, duration: 0 },
                { id: "eid3545", tween: [ "style", "${_PHLB_10}", "left", '-2.1%', { fromValue: '-2.1%'}], position: 0, duration: 0 },
                { id: "eid3243", tween: [ "style", "${_PHLB_10}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3535", tween: [ "style", "${_PHLB_11}", "height", '10.27%', { fromValue: '10.27%'}], position: 0, duration: 0 },
                { id: "eid3246", tween: [ "style", "${_PHLB_7}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3554", tween: [ "style", "${_PHLB_3}", "height", '11.19%', { fromValue: '11.19%'}], position: 0, duration: 0 },
                { id: "eid3572", tween: [ "style", "${_PHLB_8}", "left", '1.42%', { fromValue: '1.42%'}], position: 0, duration: 0 },
                { id: "eid3497", tween: [ "style", "${_PHLB_15}", "height", '7.11%', { fromValue: '7.11%'}], position: 0, duration: 0 },
                { id: "eid3503", tween: [ "style", "${_PHLB_1}", "width", '15%', { fromValue: '15%'}], position: 0, duration: 0 },
                { id: "eid3520", tween: [ "style", "${__22}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3521", tween: [ "style", "${__22}", "display", 'none', { fromValue: 'block'}], position: 141, duration: 0 },
                { id: "eid3498", tween: [ "style", "${_PHLB_15}", "left", '-11.38%', { fromValue: '-11.38%'}], position: 0, duration: 0 },
                { id: "eid3548", tween: [ "style", "${_PHLB_6}", "width", '15%', { fromValue: '15%'}], position: 0, duration: 0 },
                { id: "eid3238", tween: [ "style", "${_PHLB_15}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3507", tween: [ "style", "${_PHLB_14}", "width", '15%', { fromValue: '15%'}], position: 0, duration: 0 },
                { id: "eid3552", tween: [ "style", "${_PHLB_7}", "width", '45.52%', { fromValue: '45.52%'}], position: 0, duration: 0 },
                { id: "eid3247", tween: [ "style", "${_PHLB_6}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3539", tween: [ "style", "${_PHLB_11}", "width", '45.8%', { fromValue: '45.8%'}], position: 0, duration: 0 },
                { id: "eid3574", tween: [ "style", "${_PHLB_4}", "left", '3.77%', { fromValue: '3.77%'}], position: 0, duration: 0 },
                { id: "eid3241", tween: [ "style", "${_PHLB_12}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3253", tween: [ "style", "${_PHLB_0}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3530", tween: [ "style", "${_PHLB_12}", "width", '15%', { fromValue: '15%'}], position: 0, duration: 0 },
                { id: "eid3252", tween: [ "style", "${_PHLB_1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3250", tween: [ "style", "${_PHLB_3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3573", tween: [ "style", "${_PHLB_8}", "top", '33.95%', { fromValue: '33.95%'}], position: 0, duration: 0 },
                { id: "eid3519", tween: [ "style", "${__32}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3522", tween: [ "style", "${__32}", "display", 'block', { fromValue: 'none'}], position: 141, duration: 0 },
                { id: "eid354", tween: [ "style", "${__32}", "display", 'none', { fromValue: 'block'}], position: 293, duration: 0 },
                { id: "eid3508", tween: [ "style", "${_PHLB_5}", "top", '34.09%', { fromValue: '34.09%'}], position: 0, duration: 0 }            ]
        }
    }
},
"b18andb19_F_1": {
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
                    id: 'b18',
                    fill: ['rgba(0,0,0,0)', 'images/girl/182.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'b19',
                    fill: ['rgba(0,0,0,0)', 'images/girl/192.png', '0px', '0px']
                },
                {
                    id: 'plate5',
                    type: 'image',
                    rect: ['-4.2%', '33.1%', '31.1%', '9.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/plate2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'blankimageonplate',
                    tag: 'img',
                    rect: ['-16%', '29.4%', '54.9%', '11.1%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TMT.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['-0.99421']],
                    type: 'image',
                    id: '_14',
                    display: 'none',
                    rect: ['40.1%', '18.7%', '24.2%', '6.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/girl/eye%20patch/13.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['-1.6%', '34.5%', '15.2%', '12.7%', 'auto', 'auto'],
                    id: 'PHR_0',
                    fill: ['rgba(0,0,0,0)', 'images/pizza/pizzabase3.png', '0px', '0px']
                },
                {
                    type: 'image',
                    rect: ['0.4%', '34.3%', '79.2%', '80.7%', 'auto', 'auto'],
                    id: 'PHR_1',
                    opacity: 0.66666666666667,
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/pizza/sauceonpizza2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['1.15928']],
                    type: 'image',
                    display: 'block',
                    id: 'PHR_2',
                    opacity: 1,
                    rect: ['4.7%', '34.3%', '14.1%', '12.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pizza/cheese2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['-0.48937', '0.47916']],
                    type: 'image',
                    id: 'PHR_3',
                    display: 'block',
                    rect: ['-31.4%', '8.9%', '17.8%', '15.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/leaves1_On_pizza2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['-0.96774']],
                    type: 'image',
                    id: 'PHR_4',
                    display: 'block',
                    rect: ['-23.6%', '34.7%', '7.8%', '6.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/leave2_on_face2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['-0.33617', '0.52577']],
                    type: 'image',
                    id: 'PHR_5',
                    display: 'block',
                    rect: ['-52.2%', '15.1%', '29.6%', '16.1%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/red_cutcapsicum_on_face2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['4.4%', '34.9%', '11.4%', '6.7%', 'auto', 'auto'],
                    id: 'PHR_6',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/green_cutcaps_on_pizza2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['-55'], ['0', '42'], ['0.32955', '0.62797']],
                    type: 'image',
                    id: 'PHR_7',
                    display: 'block',
                    rect: ['3.1%', '4.8%', '28.1%', '17%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/tomato_on_pizza2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.41991', '-0.51261']],
                    type: 'image',
                    id: 'PHR_8',
                    display: 'block',
                    rect: ['-17.2%', '-24.4%', '29.1%', '19.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/olive_on_pizza2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['3.1%', '34.9%', '7.9%', '5.6%', 'auto', 'auto'],
                    id: 'PHR_9',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/ham_on_pizza2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.40987', '0.54054']],
                    borderRadius: ['0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px'],
                    rect: ['-27.6%', '16.8%', '18.2%', '12.2%', 'auto', 'auto'],
                    id: 'PHR_10',
                    display: 'block',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/mushroom_on_pizza2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.32758', '0.52173']],
                    type: 'image',
                    id: 'PHR_11',
                    display: 'block',
                    rect: ['-14.2%', '9.4%', '29.1%', '15.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/stick_on_pizza2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['5.9%', '34.7%', '61.8%', '70.7%', 'auto', 'auto'],
                    id: 'PHR_12',
                    fill: ['rgba(0,0,0,0)', 'images/chiliflakes/chili_on_pizza2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['3.8%', '34.5%', '61%', '72%', 'auto', 'auto'],
                    id: 'PHR_13',
                    fill: ['rgba(0,0,0,0)', 'images/chiliflakes/oregano_on_pizza2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['9.2%', '35.4%', '3.3%', '4.3%', 'auto', 'auto'],
                    id: 'PHR_14',
                    fill: ['rgba(0,0,0,0)', 'images/tunna/tuna1]2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.28163', '0.75342']],
                    type: 'image',
                    id: 'PHR_15',
                    display: 'block',
                    rect: ['-67.3%', '27.8%', '30.6%', '12.2%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/shrimp2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_PHR_13}": [
                ["style", "top", '34.53%'],
                ["style", "display", 'block'],
                ["style", "height", '5.1%'],
                ["style", "left", '3.77%'],
                ["style", "width", '15%']
            ],
            "${_blankimageonplate}": [
                ["style", "top", '29.38%'],
                ["style", "height", '11.05%'],
                ["style", "left", '-16.04%'],
                ["style", "width", '54.94%']
            ],
            "${_PHR_10}": [
                ["style", "border-top-left-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.40987'],
                ["style", "left", '-7.29%'],
                ["style", "width", '36.6%'],
                ["style", "top", '32.86%'],
                ["style", "border-bottom-left-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '0.54054'],
                ["style", "height", '9.43%'],
                ["style", "border-top-right-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "display", 'block']
            ],
            "${_PHR_6}": [
                ["style", "top", '34.92%'],
                ["style", "display", 'block'],
                ["style", "height", '5.1%'],
                ["style", "left", '4.39%'],
                ["style", "width", '15%']
            ],
            "${_PHR_8}": [
                ["style", "top", '31.41%'],
                ["transform", "scaleY", '-0.51261'],
                ["transform", "scaleX", '0.41991'],
                ["style", "display", 'block'],
                ["style", "height", '9.94%'],
                ["style", "left", '-6.07%'],
                ["style", "width", '35.73%']
            ],
            "${_plate5}": [
                ["style", "height", '9.74%'],
                ["style", "top", '33.13%'],
                ["style", "left", '-4.25%'],
                ["style", "width", '31.14%']
            ],
            "${symbolSelector}": [
                ["style", "height", '110.14%'],
                ["style", "width", '146.21%']
            ],
            "${_PHR_12}": [
                ["style", "top", '34.72%'],
                ["style", "display", 'block'],
                ["style", "height", '5.1%'],
                ["style", "left", '5.92%'],
                ["style", "width", '15%']
            ],
            "${_PHR_9}": [
                ["style", "top", '34.89%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "height", '5.1%'],
                ["style", "left", '3.05%'],
                ["style", "width", '15%']
            ],
            "${_PHR_4}": [
                ["style", "top", '34.69%'],
                ["transform", "scaleX", '-0.96774'],
                ["style", "height", '5.1%'],
                ["style", "display", 'block'],
                ["style", "left", '0%'],
                ["style", "width", '15.51%']
            ],
            "${_PHR_1}": [
                ["style", "top", '34.33%'],
                ["style", "display", 'block'],
                ["style", "height", '5.1%'],
                ["style", "opacity", '0.6666666865348816'],
                ["style", "left", '0.38%'],
                ["style", "width", '15%']
            ],
            "${_b18}": [
                ["style", "display", 'block'],
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["transform", "scaleX", '-1']
            ],
            "${_PHR_15}": [
                ["style", "top", '33.88%'],
                ["transform", "scaleY", '0.75342'],
                ["transform", "scaleX", '0.28163'],
                ["style", "display", 'block'],
                ["style", "height", '6.77%'],
                ["style", "left", '-16.57%'],
                ["style", "width", '53.27%']
            ],
            "${_PHR_5}": [
                ["style", "top", '32.79%'],
                ["transform", "scaleY", '0.52577'],
                ["transform", "scaleX", '-0.33617'],
                ["style", "display", 'block'],
                ["style", "height", '9.7%'],
                ["style", "left", '-13.68%'],
                ["style", "width", '44.63%']
            ],
            "${_PHR_14}": [
                ["style", "top", '35.38%'],
                ["style", "height", '5.1%'],
                ["style", "display", 'block'],
                ["style", "left", '9.17%'],
                ["style", "width", '15%']
            ],
            "${_PHR_11}": [
                ["style", "top", '31.76%'],
                ["transform", "scaleX", '0.32758'],
                ["transform", "scaleY", '0.52173'],
                ["transform", "rotateZ", '-29deg'],
                ["style", "display", 'block'],
                ["style", "height", '9.77%'],
                ["style", "left", '-9.82%'],
                ["style", "width", '45.8%']
            ],
            "${_b19}": [
                ["style", "display", 'none'],
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["transform", "scaleX", '-1']
            ],
            "${_PHR_7}": [
                ["transform", "rotateZ", '-55deg'],
                ["transform", "scaleX", '0.32955'],
                ["style", "left", '-10%'],
                ["style", "width", '45.52%'],
                ["style", "top", '31.76%'],
                ["transform", "scaleY", '0.62797'],
                ["style", "height", '8.12%'],
                ["transform", "skewY", '0deg'],
                ["style", "display", 'block']
            ],
            "${__14}": [
                ["style", "top", '18.68%'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '-0.99421'],
                ["style", "left", '40.09%'],
                ["style", "width", '24.19%']
            ],
            "${_PHR_0}": [
                ["style", "top", '34.53%'],
                ["style", "display", 'block'],
                ["style", "height", '5.1%'],
                ["style", "left", '-1.62%'],
                ["style", "width", '15%']
            ],
            "${_PHR_3}": [
                ["style", "top", '32.22%'],
                ["transform", "scaleY", '0.47916'],
                ["transform", "scaleX", '-0.48937'],
                ["style", "display", 'block'],
                ["style", "height", '10.64%'],
                ["style", "left", '-5.66%'],
                ["style", "width", '30.66%']
            ],
            "${_PHR_2}": [
                ["style", "top", '34.33%'],
                ["style", "display", 'block'],
                ["transform", "scaleX", '1.15928'],
                ["style", "height", '5.1%'],
                ["style", "opacity", '1'],
                ["style", "left", '0.47%'],
                ["style", "width", '12.94%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 605,
            autoPlay: true,
            timeline: [
                { id: "eid2867", tween: [ "style", "${_PHR_12}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3491", tween: [ "style", "${_PHR_2}", "left", '0.47%', { fromValue: '0.47%'}], position: 0, duration: 0 },
                { id: "eid3446", tween: [ "style", "${_PHR_15}", "height", '6.77%', { fromValue: '6.77%'}], position: 0, duration: 0 },
                { id: "eid3451", tween: [ "style", "${_PHR_9}", "height", '5.1%', { fromValue: '5.1%'}], position: 0, duration: 0 },
                { id: "eid2857", tween: [ "style", "${_PHR_2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3459", tween: [ "style", "${_PHR_11}", "top", '31.76%', { fromValue: '31.76%'}], position: 0, duration: 0 },
                { id: "eid3484", tween: [ "style", "${_PHR_5}", "top", '32.79%', { fromValue: '32.79%'}], position: 0, duration: 0 },
                { id: "eid3475", tween: [ "style", "${_PHR_7}", "width", '45.52%', { fromValue: '45.52%'}], position: 0, duration: 0 },
                { id: "eid3479", tween: [ "style", "${_PHR_3}", "width", '30.66%', { fromValue: '30.66%'}], position: 0, duration: 0 },
                { id: "eid3445", tween: [ "style", "${_PHR_15}", "top", '33.88%', { fromValue: '33.88%'}], position: 0, duration: 0 },
                { id: "eid3494", tween: [ "style", "${_PHR_4}", "left", '0%', { fromValue: '0%'}], position: 0, duration: 0 },
                { id: "eid2858", tween: [ "style", "${_PHR_3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3458", tween: [ "style", "${_PHR_10}", "width", '36.6%', { fromValue: '36.6%'}], position: 0, duration: 0 },
                { id: "eid3473", tween: [ "style", "${_PHR_7}", "height", '8.12%', { fromValue: '8.12%'}], position: 0, duration: 0 },
                { id: "eid3668", tween: [ "style", "${_PHR_8}", "top", '31.41%', { fromValue: '31.41%'}], position: 0, duration: 0 },
                { id: "eid2865", tween: [ "style", "${_PHR_10}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2860", tween: [ "style", "${_PHR_5}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3457", tween: [ "style", "${_PHR_10}", "left", '-7.29%', { fromValue: '-7.29%'}], position: 0, duration: 0 },
                { id: "eid3469", tween: [ "style", "${_PHR_8}", "height", '9.94%', { fromValue: '9.94%'}], position: 0, duration: 0 },
                { id: "eid2868", tween: [ "style", "${_PHR_13}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3455", tween: [ "style", "${_PHR_10}", "top", '32.86%', { fromValue: '32.86%'}], position: 0, duration: 0 },
                { id: "eid2855", tween: [ "style", "${_PHR_0}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3465", tween: [ "style", "${_PHR_4}", "height", '5.1%', { fromValue: '5.1%'}], position: 0, duration: 0 },
                { id: "eid3462", tween: [ "style", "${_PHR_11}", "width", '45.8%', { fromValue: '45.8%'}], position: 0, duration: 0 },
                { id: "eid2864", tween: [ "style", "${_PHR_9}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3485", tween: [ "style", "${_PHR_5}", "height", '9.7%', { fromValue: '9.7%'}], position: 0, duration: 0 },
                { id: "eid3467", tween: [ "style", "${_PHR_4}", "width", '15.51%', { fromValue: '15.51%'}], position: 0, duration: 0 },
                { id: "eid3456", tween: [ "style", "${_PHR_10}", "height", '9.43%', { fromValue: '9.43%'}], position: 0, duration: 0 },
                { id: "eid3464", tween: [ "style", "${_PHR_12}", "width", '15%', { fromValue: '15%'}], position: 0, duration: 0 },
                { id: "eid3453", tween: [ "style", "${_PHR_14}", "height", '5.1%', { fromValue: '5.1%'}], position: 0, duration: 0 },
                { id: "eid3663", tween: [ "style", "${_PHR_8}", "left", '-6.07%', { fromValue: '-6.07%'}], position: 0, duration: 0 },
                { id: "eid3490", tween: [ "style", "${_PHR_2}", "height", '5.1%', { fromValue: '5.1%'}], position: 0, duration: 0 },
                { id: "eid3471", tween: [ "style", "${_PHR_8}", "width", '35.73%', { fromValue: '35.73%'}], position: 0, duration: 0 },
                { id: "eid3477", tween: [ "style", "${_PHR_3}", "height", '10.64%', { fromValue: '10.64%'}], position: 0, duration: 0 },
                { id: "eid3493", tween: [ "style", "${_PHR_5}", "left", '-13.68%', { fromValue: '-13.68%'}], position: 0, duration: 0 },
                { id: "eid3492", tween: [ "style", "${_PHR_2}", "width", '12.94%', { fromValue: '12.94%'}], position: 0, duration: 0 },
                { id: "eid3449", tween: [ "style", "${_PHR_13}", "height", '5.1%', { fromValue: '5.1%'}], position: 0, duration: 0 },
                { id: "eid3447", tween: [ "style", "${_PHR_15}", "left", '-16.57%', { fromValue: '-16.57%'}], position: 0, duration: 0 },
                { id: "eid3480", tween: [ "style", "${_PHR_0}", "height", '5.1%', { fromValue: '5.1%'}], position: 0, duration: 0 },
                { id: "eid515", tween: [ "style", "${__14}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid516", tween: [ "style", "${__14}", "display", 'block', { fromValue: 'none'}], position: 365, duration: 0 },
                { id: "eid517", tween: [ "style", "${__14}", "display", 'none', { fromValue: 'block'}], position: 570, duration: 0 },
                { id: "eid3476", tween: [ "style", "${_PHR_3}", "top", '32.22%', { fromValue: '32.22%'}], position: 0, duration: 0 },
                { id: "eid3463", tween: [ "style", "${_PHR_12}", "height", '5.1%', { fromValue: '5.1%'}], position: 0, duration: 0 },
                { id: "eid3482", tween: [ "style", "${_PHR_6}", "height", '5.1%', { fromValue: '5.1%'}], position: 0, duration: 0 },
                { id: "eid2866", tween: [ "style", "${_PHR_11}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3495", tween: [ "style", "${_PHR_3}", "left", '-5.66%', { fromValue: '-5.66%'}], position: 0, duration: 0 },
                { id: "eid3489", tween: [ "style", "${_PHR_1}", "width", '15%', { fromValue: '15%'}], position: 0, duration: 0 },
                { id: "eid3483", tween: [ "style", "${_PHR_6}", "width", '15%', { fromValue: '15%'}], position: 0, duration: 0 },
                { id: "eid3452", tween: [ "style", "${_PHR_9}", "width", '15%', { fromValue: '15%'}], position: 0, duration: 0 },
                { id: "eid3488", tween: [ "style", "${_PHR_1}", "height", '5.1%', { fromValue: '5.1%'}], position: 0, duration: 0 },
                { id: "eid3109", tween: [ "style", "${_b18}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3113", tween: [ "style", "${_b18}", "display", 'none', { fromValue: 'block'}], position: 208, duration: 0 },
                { id: "eid3115", tween: [ "style", "${_b18}", "display", 'block', { fromValue: 'none'}], position: 412, duration: 0 },
                { id: "eid3117", tween: [ "style", "${_b18}", "display", 'none', { fromValue: 'block'}], position: 605, duration: 0 },
                { id: "eid3487", tween: [ "style", "${_PHR_5}", "width", '44.63%', { fromValue: '44.63%'}], position: 0, duration: 0 },
                { id: "eid3108", tween: [ "style", "${_b19}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3112", tween: [ "style", "${_b19}", "display", 'block', { fromValue: 'none'}], position: 208, duration: 0 },
                { id: "eid3114", tween: [ "style", "${_b19}", "display", 'none', { fromValue: 'block'}], position: 412, duration: 0 },
                { id: "eid3116", tween: [ "style", "${_b19}", "display", 'block', { fromValue: 'none'}], position: 605, duration: 0 },
                { id: "eid3454", tween: [ "style", "${_PHR_14}", "width", '15%', { fromValue: '15%'}], position: 0, duration: 0 },
                { id: "eid2861", tween: [ "style", "${_PHR_6}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2859", tween: [ "style", "${_PHR_4}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3460", tween: [ "style", "${_PHR_11}", "height", '9.77%', { fromValue: '9.77%'}], position: 0, duration: 0 },
                { id: "eid3481", tween: [ "style", "${_PHR_0}", "width", '15%', { fromValue: '15%'}], position: 0, duration: 0 },
                { id: "eid3450", tween: [ "style", "${_PHR_13}", "width", '15%', { fromValue: '15%'}], position: 0, duration: 0 },
                { id: "eid3448", tween: [ "style", "${_PHR_15}", "width", '53.27%', { fromValue: '53.27%'}], position: 0, duration: 0 },
                { id: "eid3474", tween: [ "style", "${_PHR_7}", "left", '-10%', { fromValue: '-10%'}], position: 0, duration: 0 },
                { id: "eid2862", tween: [ "style", "${_PHR_7}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2869", tween: [ "style", "${_PHR_14}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2856", tween: [ "style", "${_PHR_1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2870", tween: [ "style", "${_PHR_15}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3461", tween: [ "style", "${_PHR_11}", "left", '-9.82%', { fromValue: '-9.82%'}], position: 0, duration: 0 },
                { id: "eid3472", tween: [ "style", "${_PHR_7}", "top", '31.76%', { fromValue: '31.76%'}], position: 0, duration: 0 },
                { id: "eid2863", tween: [ "style", "${_PHR_8}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"b18andb19_1": {
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
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'b18',
                    fill: ['rgba(0,0,0,0)', 'images/girl/182.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'b19',
                    fill: ['rgba(0,0,0,0)', 'images/girl/192.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['79.3%', '32.1%', '31.1%', '9.5%', 'auto', 'auto'],
                    id: 'plate5',
                    fill: ['rgba(0,0,0,0)', 'images/plate2.png', '0px', '0px']
                },
                {
                    rect: ['83.5%', '31.3%', '21.2%', '9%', 'auto', 'auto'],
                    tag: 'img',
                    id: 'blankimageonplate',
                    display: 'block',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/ing/bankimg2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['35.9%', '18.4%', '25.5%', '6.3%', 'auto', 'auto'],
                    id: '_13',
                    fill: ['rgba(0,0,0,0)', 'images/girl/eye%20patch/13.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['74.7%', '33.9%', '15.2%', '12.7%', 'auto', 'auto'],
                    id: 'PHL_0',
                    fill: ['rgba(0,0,0,0)', 'images/pizza/pizzabase3.png', '0px', '0px']
                },
                {
                    type: 'image',
                    rect: ['75.8%', '33.4%', '79.2%', '80.7%', 'auto', 'auto'],
                    id: 'PHL_1',
                    opacity: 0.66666666666667,
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/pizza/sauceonpizza2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['1.15928']],
                    type: 'image',
                    display: 'block',
                    id: 'PHL_2',
                    opacity: 1,
                    rect: ['101.1%', '33.4%', '14.1%', '12.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pizza/cheese2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['-0.48937', '0.47916']],
                    type: 'image',
                    id: 'PHL_3',
                    display: 'block',
                    rect: ['-177.8%', '-16.8%', '17.8%', '15.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/leaves1_On_pizza2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['-0.96774']],
                    type: 'image',
                    id: 'PHL_4',
                    display: 'block',
                    rect: ['-116.3%', '33.9%', '7.8%', '6.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/leave2_on_face2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['-0.33617', '0.52577']],
                    type: 'image',
                    id: 'PHL_5',
                    display: 'block',
                    rect: ['-346.7%', '-5.2%', '29.6%', '16.1%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/red_cutcapsicum_on_face2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['81.3%', '34.5%', '11.4%', '6.7%', 'auto', 'auto'],
                    id: 'PHL_6',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/green_cutcaps_on_pizza2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['-55'], ['0', '42'], ['0.32955', '0.62797']],
                    type: 'image',
                    id: 'PHL_7',
                    display: 'block',
                    rect: ['-2.9%', '-84.6%', '28.1%', '17%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/tomato_on_pizza2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.41991', '-0.51261']],
                    type: 'image',
                    id: 'PHL_8',
                    display: 'block',
                    rect: ['-91.7%', '-132%', '29.1%', '19.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/olive_on_pizza2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['83.3%', '34.1%', '7.9%', '5.6%', 'auto', 'auto'],
                    id: 'PHL_9',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/ham_on_pizza2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.40987', '0.54054']],
                    borderRadius: ['0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px', '0.67578125000009px 0.67578125000009px'],
                    rect: ['-46.9%', '-4.6%', '18.2%', '12.2%', 'auto', 'auto'],
                    id: 'PHL_10',
                    display: 'block',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/mushroom_on_pizza2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.32758', '0.52173']],
                    type: 'image',
                    id: 'PHL_11',
                    display: 'block',
                    rect: ['-153.3%', '-31.7%', '29.1%', '15.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/stick_on_pizza2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['79.7%', '33.6%', '61.8%', '70.7%', 'auto', 'auto'],
                    id: 'PHL_12',
                    fill: ['rgba(0,0,0,0)', 'images/chiliflakes/chili_on_pizza2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['80.5%', '34.2%', '61%', '72%', 'auto', 'auto'],
                    id: 'PHL_13',
                    fill: ['rgba(0,0,0,0)', 'images/chiliflakes/oregano_on_pizza2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['84.1%', '35.1%', '3.3%', '4.3%', 'auto', 'auto'],
                    id: 'PHL_14',
                    fill: ['rgba(0,0,0,0)', 'images/tunna/tuna1]2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.28163', '0.75342']],
                    type: 'image',
                    id: 'PHL_15',
                    display: 'block',
                    rect: ['-143.3%', '19.5%', '30.6%', '12.2%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cut_all/shrimp2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_PHL_6}": [
                ["style", "top", '34.51%'],
                ["style", "display", 'block'],
                ["style", "height", '6%'],
                ["style", "left", '83.96%'],
                ["style", "width", '12.01%']
            ],
            "${_blankimageonplate}": [
                ["style", "top", '26.58%'],
                ["style", "display", 'block'],
                ["style", "height", '13.68%'],
                ["style", "left", '56.6%'],
                ["style", "width", '58.32%']
            ],
            "${_PHL_11}": [
                ["style", "top", '33.33%'],
                ["transform", "scaleX", '0.32758'],
                ["transform", "scaleY", '0.52173'],
                ["transform", "rotateZ", '-29deg'],
                ["style", "display", 'block'],
                ["style", "height", '11.5%'],
                ["style", "left", '70.28%'],
                ["style", "width", '36.64%']
            ],
            "${_PHL_7}": [
                ["transform", "rotateZ", '-55deg'],
                ["transform", "scaleX", '0.32955'],
                ["style", "left", '72.64%'],
                ["style", "width", '36.42%'],
                ["style", "top", '30.97%'],
                ["transform", "scaleY", '0.62797'],
                ["style", "height", '9.55%'],
                ["transform", "skewY", '0deg'],
                ["style", "display", 'block']
            ],
            "${_PHL_13}": [
                ["style", "top", '34.22%'],
                ["style", "display", 'block'],
                ["style", "height", '6%'],
                ["style", "left", '77.83%'],
                ["style", "width", '12.01%']
            ],
            "${_plate5}": [
                ["style", "top", '33.16%'],
                ["style", "display", 'none'],
                ["style", "height", '8.68%'],
                ["style", "left", '70.75%'],
                ["style", "width", '33.5%']
            ],
            "${symbolSelector}": [
                ["style", "height", '110.14%'],
                ["style", "width", '146.21%']
            ],
            "${_PHL_0}": [
                ["style", "top", '33.94%'],
                ["style", "display", 'block'],
                ["style", "height", '8.5%'],
                ["style", "left", '74.69%'],
                ["style", "width", '22.81%']
            ],
            "${_PHL_4}": [
                ["style", "top", '33.86%'],
                ["transform", "scaleX", '-0.96774'],
                ["style", "height", '0.73%'],
                ["style", "display", 'block'],
                ["style", "left", '75.02%'],
                ["style", "width", '1.04%']
            ],
            "${_PHL_1}": [
                ["style", "top", '33.36%'],
                ["style", "display", 'block'],
                ["style", "height", '7.6%'],
                ["style", "opacity", '0.6666666865348816'],
                ["style", "left", '81.13%'],
                ["style", "width", '13.81%']
            ],
            "${_PHL_5}": [
                ["style", "top", '31.57%'],
                ["transform", "scaleY", '0.52577'],
                ["transform", "scaleX", '-0.33617'],
                ["style", "display", 'block'],
                ["style", "height", '11.41%'],
                ["style", "left", '71.23%'],
                ["style", "width", '35.7%']
            ],
            "${__13}": [
                ["style", "display", 'none'],
                ["style", "top", '18.42%'],
                ["style", "left", '35.85%'],
                ["style", "width", '25.53%']
            ],
            "${_PHL_9}": [
                ["style", "top", '34.08%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "height", '6%'],
                ["style", "left", '83.02%'],
                ["style", "width", '12.01%']
            ],
            "${_b18}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'none']
            ],
            "${_PHL_2}": [
                ["style", "top", '33.36%'],
                ["style", "display", 'block'],
                ["transform", "scaleX", '1.15928'],
                ["style", "height", '8.8%'],
                ["style", "opacity", '1'],
                ["style", "left", '77.66%'],
                ["style", "width", '17.95%']
            ],
            "${_PHL_8}": [
                ["style", "top", '-80%'],
                ["transform", "scaleY", '-0.51261'],
                ["transform", "scaleX", '0.41991'],
                ["style", "display", 'block'],
                ["style", "height", '11.7%'],
                ["style", "left", '68.87%'],
                ["style", "width", '28.58%']
            ],
            "${_PHL_10}": [
                ["style", "border-top-left-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.40987'],
                ["style", "left", '74.06%'],
                ["style", "width", '29.28%'],
                ["style", "top", '32.06%'],
                ["style", "border-bottom-left-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '0.54054'],
                ["style", "height", '11.1%'],
                ["style", "border-top-right-radius", [0.67578125000009,0.67578125000009], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "display", 'block']
            ],
            "${_PHL_3}": [
                ["style", "top", '30.91%'],
                ["transform", "scaleY", '0.47916'],
                ["transform", "scaleX", '-0.48937'],
                ["style", "display", 'block'],
                ["style", "height", '13.36%'],
                ["style", "left", '65.37%'],
                ["style", "width", '37.4%']
            ],
            "${_b19}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'none']
            ],
            "${_PHL_14}": [
                ["style", "top", '35.11%'],
                ["style", "height", '1.9%'],
                ["style", "display", 'block'],
                ["style", "left", '78.77%'],
                ["style", "width", '7.81%']
            ],
            "${_PHL_15}": [
                ["style", "top", '33.41%'],
                ["transform", "scaleY", '0.75342'],
                ["transform", "scaleX", '0.28163'],
                ["style", "display", 'block'],
                ["style", "height", '3.05%'],
                ["style", "left", '65.13%'],
                ["style", "width", '27.34%']
            ],
            "${_PHL_12}": [
                ["style", "top", '33.65%'],
                ["style", "display", 'block'],
                ["style", "height", '6%'],
                ["style", "left", '81.13%'],
                ["style", "width", '12.01%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 397,
            autoPlay: true,
            timeline: [
                { id: "eid3362", tween: [ "style", "${_PHL_12}", "width", '12.01%', { fromValue: '12.01%'}], position: 0, duration: 0 },
                { id: "eid3325", tween: [ "style", "${_PHL_1}", "height", '7.6%', { fromValue: '7.6%'}], position: 0, duration: 0 },
                { id: "eid3266", tween: [ "style", "${_PHL_4}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3350", tween: [ "style", "${_PHL_5}", "width", '35.7%', { fromValue: '35.7%'}], position: 0, duration: 0 },
                { id: "eid3428", tween: [ "style", "${_PHL_6}", "left", '83.96%', { fromValue: '83.96%'}], position: 0, duration: 0 },
                { id: "eid3353", tween: [ "style", "${_PHL_11}", "width", '36.64%', { fromValue: '36.64%'}], position: 0, duration: 0 },
                { id: "eid3314", tween: [ "style", "${_PHL_4}", "width", '1.04%', { fromValue: '1.04%'}], position: 0, duration: 0 },
                { id: "eid3360", tween: [ "style", "${_PHL_10}", "width", '29.28%', { fromValue: '29.28%'}], position: 0, duration: 0 },
                { id: "eid3430", tween: [ "style", "${_PHL_7}", "left", '72.64%', { fromValue: '72.64%'}], position: 0, duration: 0 },
                { id: "eid3256", tween: [ "style", "${_PHL_14}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3611", tween: [ "style", "${_plate5}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3410", tween: [ "style", "${_PHL_5}", "height", '11.41%', { fromValue: '11.41%'}], position: 0, duration: 0 },
                { id: "eid3261", tween: [ "style", "${_PHL_9}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3264", tween: [ "style", "${_PHL_6}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3439", tween: [ "style", "${_PHL_15}", "left", '65.13%', { fromValue: '65.13%'}], position: 0, duration: 0 },
                { id: "eid3434", tween: [ "style", "${_PHL_10}", "left", '74.06%', { fromValue: '74.06%'}], position: 0, duration: 0 },
                { id: "eid3335", tween: [ "style", "${_PHL_4}", "left", '75.02%', { fromValue: '75.02%'}], position: 0, duration: 0 },
                { id: "eid3424", tween: [ "style", "${_PHL_6}", "height", '6%', { fromValue: '6%'}], position: 0, duration: 0 },
                { id: "eid3440", tween: [ "style", "${_PHL_15}", "width", '27.34%', { fromValue: '27.34%'}], position: 0, duration: 0 },
                { id: "eid3331", tween: [ "style", "${_PHL_3}", "left", '65.37%', { fromValue: '65.37%'}], position: 0, duration: 0 },
                { id: "eid3422", tween: [ "style", "${_PHL_9}", "height", '6%', { fromValue: '6%'}], position: 0, duration: 0 },
                { id: "eid3425", tween: [ "style", "${_PHL_8}", "height", '11.7%', { fromValue: '11.7%'}], position: 0, duration: 0 },
                { id: "eid3259", tween: [ "style", "${_PHL_11}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3436", tween: [ "style", "${_PHL_13}", "left", '77.83%', { fromValue: '77.83%'}], position: 0, duration: 0 },
                { id: "eid3322", tween: [ "style", "${_PHL_0}", "height", '8.5%', { fromValue: '8.5%'}], position: 0, duration: 0 },
                { id: "eid3258", tween: [ "style", "${_PHL_12}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3427", tween: [ "style", "${_PHL_5}", "left", '71.23%', { fromValue: '71.23%'}], position: 0, duration: 0 },
                { id: "eid3269", tween: [ "style", "${_PHL_1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3441", tween: [ "style", "${_PHL_15}", "height", '3.05%', { fromValue: '3.05%'}], position: 0, duration: 0 },
                { id: "eid3333", tween: [ "style", "${_PHL_3}", "height", '13.36%', { fromValue: '13.36%'}], position: 0, duration: 0 },
                { id: "eid3435", tween: [ "style", "${_PHL_12}", "left", '81.13%', { fromValue: '81.13%'}], position: 0, duration: 0 },
                { id: "eid3442", tween: [ "style", "${_PHL_15}", "top", '33.41%', { fromValue: '33.41%'}], position: 0, duration: 0 },
                { id: "eid3412", tween: [ "style", "${_PHL_11}", "height", '11.5%', { fromValue: '11.5%'}], position: 0, duration: 0 },
                { id: "eid3263", tween: [ "style", "${_PHL_7}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3328", tween: [ "style", "${_PHL_2}", "width", '17.95%', { fromValue: '17.95%'}], position: 0, duration: 0 },
                { id: "eid3267", tween: [ "style", "${_PHL_3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3415", tween: [ "style", "${_PHL_7}", "height", '9.55%', { fromValue: '9.55%'}], position: 0, duration: 0 },
                { id: "eid3443", tween: [ "style", "${_PHL_14}", "width", '7.81%', { fromValue: '7.81%'}], position: 0, duration: 0 },
                { id: "eid3326", tween: [ "style", "${_PHL_1}", "left", '81.13%', { fromValue: '81.13%'}], position: 0, duration: 0 },
                { id: "eid3421", tween: [ "style", "${_PHL_10}", "top", '32.06%', { fromValue: '32.06%'}], position: 0, duration: 0 },
                { id: "eid3411", tween: [ "style", "${_PHL_5}", "top", '31.57%', { fromValue: '31.57%'}], position: 0, duration: 0 },
                { id: "eid3324", tween: [ "style", "${_PHL_1}", "width", '13.81%', { fromValue: '13.81%'}], position: 0, duration: 0 },
                { id: "eid3431", tween: [ "style", "${_PHL_8}", "left", '68.87%', { fromValue: '68.87%'}], position: 0, duration: 0 },
                { id: "eid3408", tween: [ "style", "${_PHL_13}", "height", '6%', { fromValue: '6%'}], position: 0, duration: 0 },
                { id: "eid3270", tween: [ "style", "${_PHL_0}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3356", tween: [ "style", "${_PHL_7}", "width", '36.42%', { fromValue: '36.42%'}], position: 0, duration: 0 },
                { id: "eid3420", tween: [ "style", "${_PHL_10}", "height", '11.1%', { fromValue: '11.1%'}], position: 0, duration: 0 },
                { id: "eid3432", tween: [ "style", "${_PHL_11}", "left", '70.28%', { fromValue: '70.28%'}], position: 0, duration: 0 },
                { id: "eid3109", tween: [ "style", "${_b18}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3646", tween: [ "style", "${_b18}", "display", 'none', { fromValue: 'block'}], position: 197, duration: 0 },
                { id: "eid390", tween: [ "style", "${_b18}", "display", 'block', { fromValue: 'none'}], position: 397, duration: 0 },
                { id: "eid3361", tween: [ "style", "${_PHL_9}", "width", '12.01%', { fromValue: '12.01%'}], position: 0, duration: 0 },
                { id: "eid3265", tween: [ "style", "${_PHL_5}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3334", tween: [ "style", "${_PHL_3}", "top", '30.91%', { fromValue: '30.91%'}], position: 0, duration: 0 },
                { id: "eid3108", tween: [ "style", "${_b19}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3645", tween: [ "style", "${_b19}", "display", 'block', { fromValue: 'none'}], position: 197, duration: 0 },
                { id: "eid389", tween: [ "style", "${_b19}", "display", 'none', { fromValue: 'block'}], position: 397, duration: 0 },
                { id: "eid3423", tween: [ "style", "${_PHL_12}", "height", '6%', { fromValue: '6%'}], position: 0, duration: 0 },
                { id: "eid3437", tween: [ "style", "${_PHL_14}", "left", '78.77%', { fromValue: '78.77%'}], position: 0, duration: 0 },
                { id: "eid3262", tween: [ "style", "${_PHL_8}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3444", tween: [ "style", "${_PHL_14}", "height", '1.9%', { fromValue: '1.9%'}], position: 0, duration: 0 },
                { id: "eid3433", tween: [ "style", "${_PHL_9}", "left", '83.02%', { fromValue: '83.02%'}], position: 0, duration: 0 },
                { id: "eid3268", tween: [ "style", "${_PHL_2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3429", tween: [ "style", "${_blankimageonplate}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid510", tween: [ "style", "${__13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid511", tween: [ "style", "${__13}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid512", tween: [ "style", "${__13}", "display", 'none', { fromValue: 'block'}], position: 397, duration: 0 },
                { id: "eid3323", tween: [ "style", "${_PHL_0}", "width", '22.81%', { fromValue: '22.81%'}], position: 0, duration: 0 },
                { id: "eid3363", tween: [ "style", "${_PHL_6}", "width", '12.01%', { fromValue: '12.01%'}], position: 0, duration: 0 },
                { id: "eid3332", tween: [ "style", "${_PHL_3}", "width", '37.4%', { fromValue: '37.4%'}], position: 0, duration: 0 },
                { id: "eid3329", tween: [ "style", "${_PHL_2}", "height", '8.8%', { fromValue: '8.8%'}], position: 0, duration: 0 },
                { id: "eid3327", tween: [ "style", "${_PHL_2}", "left", '77.66%', { fromValue: '77.66%'}], position: 0, duration: 0 },
                { id: "eid3257", tween: [ "style", "${_PHL_13}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3347", tween: [ "style", "${_PHL_13}", "width", '12.01%', { fromValue: '12.01%'}], position: 0, duration: 0 },
                { id: "eid3365", tween: [ "style", "${_PHL_8}", "width", '28.58%', { fromValue: '28.58%'}], position: 0, duration: 0 },
                { id: "eid3260", tween: [ "style", "${_PHL_10}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3255", tween: [ "style", "${_PHL_15}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3417", tween: [ "style", "${_PHL_7}", "top", '30.97%', { fromValue: '30.97%'}], position: 0, duration: 0 },
                { id: "eid3414", tween: [ "style", "${_PHL_11}", "top", '33.33%', { fromValue: '33.33%'}], position: 0, duration: 0 },
                { id: "eid3312", tween: [ "style", "${_PHL_4}", "height", '0.73%', { fromValue: '0.73%'}], position: 0, duration: 0 },
                { id: "eid3426", tween: [ "style", "${_PHL_8}", "top", '-80%', { fromValue: '-80%'}], position: 0, duration: 0 }            ]
        }
    }
},
"cust_6": {
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
                    id: 'normalface',
                    fill: ['rgba(0,0,0,0)', 'images/customer6/cus_1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'worryface',
                    fill: ['rgba(0,0,0,0)', 'images/customer6/cus_2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'sadface',
                    fill: ['rgba(0,0,0,0)', 'images/customer6/cus_3.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['49.3%', '-5.9%', '22%', '20%', 'auto', 'auto'],
                    id: 'qus6',
                    fill: ['rgba(0,0,0,0)', 'images/false_icon/qus.png', '0px', '0px']
                },
                {
                    id: 'eye82',
                    type: 'rect',
                    rect: ['42%', '31.7%', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'eye82',
                symbolName: 'eye8',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_worryface}": [
                ["style", "display", 'none'],
                ["style", "height", '100%'],
                ["style", "top", '4.95%'],
                ["style", "width", '100%']
            ],
            "${_normalface}": [
                ["style", "display", 'block'],
                ["style", "left", '0%'],
                ["style", "top", '4.95%']
            ],
            "${_eye82}": [
                ["transform", "scaleY", '1.035'],
                ["style", "top", '31.99%']
            ],
            "${_sadface}": [
                ["style", "display", 'none'],
                ["style", "height", '100%'],
                ["style", "top", '4.95%'],
                ["style", "width", '100%']
            ],
            "${_qus6}": [
                ["style", "top", '-5.94%'],
                ["transform", "scaleY", '1'],
                ["style", "height", '20%'],
                ["transform", "scaleX", '1'],
                ["style", "display", 'none'],
                ["style", "left", '49.28%'],
                ["style", "width", '22%']
            ],
            "${symbolSelector}": [
                ["style", "height", '39%'],
                ["style", "width", '23.38%']
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
                { id: "eid5702", tween: [ "transform", "${_qus6}", "scaleY", '0.8', { fromValue: '1'}], position: 2000, duration: 1000 },
                { id: "eid5703", tween: [ "transform", "${_qus6}", "scaleY", '1', { fromValue: '0.8'}], position: 3000, duration: 1000 },
                { id: "eid996", tween: [ "style", "${_sadface}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1222", tween: [ "style", "${_sadface}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid1206", tween: [ "style", "${_normalface}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1219", tween: [ "style", "${_normalface}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid5694", tween: [ "style", "${_qus6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5695", tween: [ "style", "${_qus6}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid5700", tween: [ "transform", "${_qus6}", "scaleX", '0.8', { fromValue: '1'}], position: 2000, duration: 1000 },
                { id: "eid5701", tween: [ "transform", "${_qus6}", "scaleX", '1', { fromValue: '0.8'}], position: 3000, duration: 1000 },
                { id: "eid997", tween: [ "style", "${_worryface}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1220", tween: [ "style", "${_worryface}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid1221", tween: [ "style", "${_worryface}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 }            ]
        }
    }
},
"cust_7": {
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
                    id: 'worryface',
                    fill: ['rgba(0,0,0,0)', 'images/customer7/g2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'normalface',
                    fill: ['rgba(0,0,0,0)', 'images/customer7/g1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'sadface',
                    fill: ['rgba(0,0,0,0)', 'images/customer7/g3.png', '0px', '0px']
                },
                {
                    id: 'eye72',
                    type: 'rect',
                    rect: ['33.3%', '26.7%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['37.7%', '-8.9%', '22%', '20%', 'auto', 'auto'],
                    id: 'qus7',
                    fill: ['rgba(0,0,0,0)', 'images/false_icon/qus.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'eye72',
                symbolName: 'eye7',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_worryface}": [
                ["style", "top", '4.95%'],
                ["style", "display", 'block'],
                ["style", "height", '100%'],
                ["style", "left", '-5.8%'],
                ["style", "width", '100%']
            ],
            "${_normalface}": [
                ["style", "display", 'none'],
                ["style", "left", '-5.8%'],
                ["style", "top", '4.95%']
            ],
            "${_qus7}": [
                ["style", "top", '-8.91%'],
                ["transform", "scaleY", '1'],
                ["style", "height", '20%'],
                ["transform", "scaleX", '1'],
                ["style", "display", 'none'],
                ["style", "left", '47.83%'],
                ["style", "width", '22%']
            ],
            "${_sadface}": [
                ["style", "top", '4.95%'],
                ["style", "display", 'none'],
                ["style", "height", '100%'],
                ["style", "left", '-5.8%'],
                ["style", "width", '100%']
            ],
            "${_eye72}": [
                ["style", "left", '43.48%'],
                ["style", "top", '22.77%']
            ],
            "${symbolSelector}": [
                ["style", "height", '39%'],
                ["style", "width", '23.38%']
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
                { id: "eid5722", tween: [ "transform", "${_qus7}", "scaleY", '0.8', { fromValue: '1'}], position: 2000, duration: 1000 },
                { id: "eid5723", tween: [ "transform", "${_qus7}", "scaleY", '1', { fromValue: '0.8'}], position: 3000, duration: 1000 },
                { id: "eid5720", tween: [ "transform", "${_qus7}", "scaleX", '0.8', { fromValue: '1'}], position: 2000, duration: 1000 },
                { id: "eid5721", tween: [ "transform", "${_qus7}", "scaleX", '1', { fromValue: '0.8'}], position: 3000, duration: 1000 },
                { id: "eid5714", tween: [ "style", "${_qus7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5715", tween: [ "style", "${_qus7}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid1206", tween: [ "style", "${_normalface}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1219", tween: [ "style", "${_normalface}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid996", tween: [ "style", "${_sadface}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1222", tween: [ "style", "${_sadface}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid997", tween: [ "style", "${_worryface}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1220", tween: [ "style", "${_worryface}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid1221", tween: [ "style", "${_worryface}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0 }            ]
        }
    }
},
"cust_8": {
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
                    id: 'normalface',
                    fill: ['rgba(0,0,0,0)', 'images/customer8/g8_1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'worryface',
                    fill: ['rgba(0,0,0,0)', 'images/customer8/g8_2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'sadface',
                    fill: ['rgba(0,0,0,0)', 'images/customer8/g8_3.png', '0px', '0px']
                },
                {
                    id: 'eye8g',
                    type: 'rect',
                    rect: ['31.9%', '46.5%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['40.6%', '9.9%', '22%', '20%', 'auto', 'auto'],
                    id: 'qus8',
                    fill: ['rgba(0,0,0,0)', 'images/false_icon/qus.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'eye8g',
                symbolName: 'eye8g',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_worryface}": [
                ["style", "display", 'none'],
                ["style", "height", '109%'],
                ["style", "top", '-4.95%'],
                ["style", "width", '84.21%']
            ],
            "${_normalface}": [
                ["style", "top", '-4.95%'],
                ["style", "height", '109%'],
                ["style", "display", 'block'],
                ["style", "left", '0%'],
                ["style", "width", '84.21%']
            ],
            "${_qus8}": [
                ["style", "top", '9.9%'],
                ["transform", "scaleY", '1'],
                ["style", "height", '20%'],
                ["transform", "scaleX", '1'],
                ["style", "display", 'none'],
                ["style", "left", '40.58%'],
                ["style", "width", '22%']
            ],
            "${symbolSelector}": [
                ["style", "height", '39%'],
                ["style", "width", '23.38%']
            ],
            "${_eye8g}": [
                ["style", "top", '39.6%']
            ],
            "${_sadface}": [
                ["style", "display", 'none'],
                ["style", "height", '109%'],
                ["style", "top", '-4.95%'],
                ["style", "width", '84.21%']
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
                { id: "eid5761", tween: [ "transform", "${_qus8}", "scaleX", '0.8', { fromValue: '1'}], position: 2000, duration: 1000 },
                { id: "eid5762", tween: [ "transform", "${_qus8}", "scaleX", '1', { fromValue: '0.8'}], position: 3000, duration: 1000 },
                { id: "eid5755", tween: [ "style", "${_qus8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5756", tween: [ "style", "${_qus8}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid996", tween: [ "style", "${_sadface}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1222", tween: [ "style", "${_sadface}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid1206", tween: [ "style", "${_normalface}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1219", tween: [ "style", "${_normalface}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid5763", tween: [ "transform", "${_qus8}", "scaleY", '0.8', { fromValue: '1'}], position: 2000, duration: 1000 },
                { id: "eid5764", tween: [ "transform", "${_qus8}", "scaleY", '1', { fromValue: '0.8'}], position: 3000, duration: 1000 },
                { id: "eid997", tween: [ "style", "${_worryface}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1220", tween: [ "style", "${_worryface}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid1221", tween: [ "style", "${_worryface}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 }            ]
        }
    }
},
"I5": {
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
                    rect: ['48.5%', '6.4%', '39.4%', '80.8%', 'auto', 'auto'],
                    transform: [[0, 0], ['-90']],
                    id: 'green_cap2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing/RC.png', '0px', '0px']
                },
                {
                    rect: ['54.2%', '10.6%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cuting',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/RC_forCut.png', '0px', '0px']
                },
                {
                    rect: ['0%', '0.4%', '100.2%', '99.6%', 'auto', 'auto'],
                    id: 'knife2',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/ing/knife.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/RC_forCut.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/RC_forCut.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy3',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/RC_forCut.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy4',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/RC_forCut.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy5',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/RC_forCut.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy6',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/RC_forCut.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_green_cuting}": [
                ["style", "top", '6.38%'],
                ["style", "height", '35%'],
                ["style", "display", 'none'],
                ["style", "left", '21.5%'],
                ["style", "width", '15%']
            ],
            "${_green_cap2}": [
                ["style", "top", '2.13%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '42.55%'],
                ["style", "display", 'none'],
                ["style", "left", '16.82%'],
                ["style", "width", '20.13%']
            ],
            "${_green_cutingCopy6}": [
                ["style", "top", '8.51%'],
                ["style", "display", 'none'],
                ["style", "height", '34%'],
                ["style", "left", '25.23%'],
                ["style", "width", '15%']
            ],
            "${_green_cutingCopy3}": [
                ["style", "top", '8.51%'],
                ["style", "display", 'none'],
                ["style", "height", '34%'],
                ["style", "left", '25.23%'],
                ["style", "width", '15%']
            ],
            "${_green_cutingCopy}": [
                ["style", "top", '4.26%'],
                ["style", "height", '34%'],
                ["style", "display", 'none'],
                ["style", "left", '21.5%'],
                ["style", "width", '15%']
            ],
            "${symbolSelector}": [
                ["style", "height", '7.83%'],
                ["style", "width", '13.38%']
            ],
            "${_green_cutingCopy5}": [
                ["style", "top", '10.64%'],
                ["style", "display", 'none'],
                ["style", "height", '34%'],
                ["style", "left", '28.97%'],
                ["style", "width", '15%']
            ],
            "${_knife2}": [
                ["style", "-webkit-transform-origin", [40.95,28.26], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "display", 'block'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '48.97%'],
                ["style", "top", '0%'],
                ["style", "left", '-11.21%'],
                ["style", "width", '56.08%']
            ],
            "${_green_cutingCopy4}": [
                ["style", "top", '6.38%'],
                ["style", "display", 'none'],
                ["style", "height", '34%'],
                ["style", "left", '28.97%'],
                ["style", "width", '15%']
            ],
            "${_green_cutingCopy2}": [
                ["style", "top", '8.51%'],
                ["style", "display", 'none'],
                ["style", "height", '34%'],
                ["style", "left", '28.97%'],
                ["style", "width", '15%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3858,
            autoPlay: true,
            timeline: [
                { id: "eid5389", tween: [ "style", "${_green_cutingCopy6}", "top", '31.92%', { fromValue: '8.51%'}], position: 3195, duration: 454 },
                { id: "eid30", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 250, duration: 250 },
                { id: "eid31", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 500, duration: 250 },
                { id: "eid32", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 855, duration: 250 },
                { id: "eid33", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 1105, duration: 250 },
                { id: "eid34", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 1500, duration: 250 },
                { id: "eid35", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 1750, duration: 250 },
                { id: "eid36", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 2105, duration: 250 },
                { id: "eid37", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 2355, duration: 250 },
                { id: "eid38", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 2750, duration: 250 },
                { id: "eid39", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 3000, duration: 250 },
                { id: "eid40", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 3358, duration: 250 },
                { id: "eid41", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 3608, duration: 250 },
                { id: "eid58", tween: [ "style", "${_green_cutingCopy2}", "top", '14.89%', { fromValue: '8.51%'}], position: 1000, duration: 355 },
                { id: "eid5387", tween: [ "style", "${_green_cutingCopy5}", "top", '27.66%', { fromValue: '10.64%'}], position: 2550, duration: 450 },
                { id: "eid52", tween: [ "style", "${_green_cutingCopy}", "left", '32.71%', { fromValue: '21.5%'}], position: 500, duration: 355 },
                { id: "eid5385", tween: [ "style", "${_green_cutingCopy4}", "top", '25.53%', { fromValue: '6.38%'}], position: 2000, duration: 315 },
                { id: "eid46", tween: [ "style", "${_green_cutingCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid47", tween: [ "style", "${_green_cutingCopy}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid5415", tween: [ "style", "${_green_cutingCopy}", "top", '10.64%', { fromValue: '4.26%'}], position: 500, duration: 355 },
                { id: "eid83", tween: [ "style", "${_green_cutingCopy5}", "left", '44.86%', { fromValue: '28.97%'}], position: 2550, duration: 450 },
                { id: "eid2405", tween: [ "style", "${_green_cutingCopy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid54", tween: [ "style", "${_green_cutingCopy2}", "display", 'block', { fromValue: 'none'}], position: 855, duration: 0 },
                { id: "eid2406", tween: [ "style", "${_green_cutingCopy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid59", tween: [ "style", "${_green_cutingCopy3}", "display", 'block', { fromValue: 'none'}], position: 1355, duration: 0 },
                { id: "eid78", tween: [ "style", "${_green_cutingCopy4}", "left", '36.45%', { fromValue: '28.97%'}], position: 2000, duration: 315 },
                { id: "eid70", tween: [ "style", "${_green_cutingCopy3}", "left", '40.19%', { fromValue: '25.23%'}], position: 1500, duration: 286 },
                { id: "eid90", tween: [ "style", "${_green_cutingCopy6}", "left", '29.91%', { fromValue: '25.23%'}], position: 3195, duration: 454 },
                { id: "eid5346", tween: [ "style", "${_knife2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6015", tween: [ "style", "${_knife2}", "display", 'none', { fromValue: 'block'}], position: 3858, duration: 0 },
                { id: "eid2408", tween: [ "style", "${_green_cutingCopy5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid80", tween: [ "style", "${_green_cutingCopy5}", "display", 'block', { fromValue: 'none'}], position: 2550, duration: 0 },
                { id: "eid2409", tween: [ "style", "${_green_cutingCopy6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid87", tween: [ "style", "${_green_cutingCopy6}", "display", 'block', { fromValue: 'none'}], position: 3195, duration: 0 },
                { id: "eid64", tween: [ "style", "${_green_cap2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid67", tween: [ "style", "${_green_cap2}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid6014", tween: [ "style", "${_green_cap2}", "display", 'none', { fromValue: 'block'}], position: 3858, duration: 0 },
                { id: "eid2407", tween: [ "style", "${_green_cutingCopy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid75", tween: [ "style", "${_green_cutingCopy4}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid65", tween: [ "style", "${_green_cuting}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid66", tween: [ "style", "${_green_cuting}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid5383", tween: [ "style", "${_green_cutingCopy3}", "top", '23.4%', { fromValue: '8.51%'}], position: 1500, duration: 286 },
                { id: "eid57", tween: [ "style", "${_green_cutingCopy2}", "left", '37.38%', { fromValue: '28.97%'}], position: 1000, duration: 355 }            ]
        }
    }
},
"I7": {
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
                    transform: [[0, 0], ['-90']],
                    type: 'image',
                    id: 'green_cap2',
                    display: 'none',
                    rect: ['48.5%', '6.4%', '39.4%', '80.8%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/TMT_forCut.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['54.2%', '10.6%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cuting',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/TMT_forCut.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0%', '0.4%', '100.2%', '99.6%', 'auto', 'auto'],
                    id: 'knife2',
                    fill: ['rgba(0,0,0,0)', 'images/ing/knife.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/TMT_forCut.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy2',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/TMT_forCut.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy3',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/TMT_forCut.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy4',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/TMT_forCut.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy5',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/TMT_forCut.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy6',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/TMT_forCut.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_green_cutingCopy5}": [
                ["style", "top", '10.64%'],
                ["style", "display", 'none'],
                ["style", "height", '34%'],
                ["style", "left", '28.97%'],
                ["style", "width", '15%']
            ],
            "${_green_cap2}": [
                ["style", "top", '4.85%'],
                ["transform", "rotateZ", '-90deg'],
                ["style", "height", '40%'],
                ["style", "display", 'none'],
                ["style", "left", '22.05%'],
                ["style", "width", '13%']
            ],
            "${_green_cutingCopy6}": [
                ["style", "top", '8.51%'],
                ["style", "display", 'none'],
                ["style", "height", '34%'],
                ["style", "left", '25.23%'],
                ["style", "width", '15%']
            ],
            "${_green_cutingCopy3}": [
                ["style", "top", '8.51%'],
                ["style", "display", 'none'],
                ["style", "height", '34%'],
                ["style", "left", '25.23%'],
                ["style", "width", '15%']
            ],
            "${_green_cutingCopy}": [
                ["style", "top", '4.26%'],
                ["style", "height", '34%'],
                ["style", "display", 'none'],
                ["style", "left", '21.5%'],
                ["style", "width", '15%']
            ],
            "${symbolSelector}": [
                ["style", "height", '7.83%'],
                ["style", "width", '13.38%']
            ],
            "${_green_cuting}": [
                ["style", "top", '6.38%'],
                ["style", "height", '35%'],
                ["style", "display", 'none'],
                ["style", "left", '21.5%'],
                ["style", "width", '15%']
            ],
            "${_green_cutingCopy4}": [
                ["style", "top", '6.38%'],
                ["style", "display", 'none'],
                ["style", "height", '34%'],
                ["style", "left", '28.97%'],
                ["style", "width", '15%']
            ],
            "${_knife2}": [
                ["style", "-webkit-transform-origin", [40.95,28.26], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "display", 'block'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '48.97%'],
                ["style", "top", '0%'],
                ["style", "left", '-11.21%'],
                ["style", "width", '56.08%']
            ],
            "${_green_cutingCopy2}": [
                ["style", "top", '8.51%'],
                ["style", "display", 'none'],
                ["style", "height", '34%'],
                ["style", "left", '28.97%'],
                ["style", "width", '15%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3858,
            autoPlay: true,
            timeline: [
                { id: "eid5389", tween: [ "style", "${_green_cutingCopy6}", "top", '31.92%', { fromValue: '8.51%'}], position: 3195, duration: 454 },
                { id: "eid30", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 250, duration: 250 },
                { id: "eid31", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 500, duration: 250 },
                { id: "eid32", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 855, duration: 250 },
                { id: "eid33", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 1105, duration: 250 },
                { id: "eid34", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 1500, duration: 250 },
                { id: "eid35", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 1750, duration: 250 },
                { id: "eid36", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 2105, duration: 250 },
                { id: "eid37", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 2355, duration: 250 },
                { id: "eid38", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 2750, duration: 250 },
                { id: "eid39", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 3000, duration: 250 },
                { id: "eid40", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 3358, duration: 250 },
                { id: "eid41", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 3608, duration: 250 },
                { id: "eid58", tween: [ "style", "${_green_cutingCopy2}", "top", '14.89%', { fromValue: '8.51%'}], position: 1000, duration: 355 },
                { id: "eid5387", tween: [ "style", "${_green_cutingCopy5}", "top", '27.66%', { fromValue: '10.64%'}], position: 2550, duration: 450 },
                { id: "eid52", tween: [ "style", "${_green_cutingCopy}", "left", '32.71%', { fromValue: '21.5%'}], position: 500, duration: 355 },
                { id: "eid5383", tween: [ "style", "${_green_cutingCopy3}", "top", '23.4%', { fromValue: '8.51%'}], position: 1500, duration: 286 },
                { id: "eid46", tween: [ "style", "${_green_cutingCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid47", tween: [ "style", "${_green_cutingCopy}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid5415", tween: [ "style", "${_green_cutingCopy}", "top", '10.64%', { fromValue: '4.26%'}], position: 500, duration: 355 },
                { id: "eid83", tween: [ "style", "${_green_cutingCopy5}", "left", '44.86%', { fromValue: '28.97%'}], position: 2550, duration: 450 },
                { id: "eid90", tween: [ "style", "${_green_cutingCopy6}", "left", '29.91%', { fromValue: '25.23%'}], position: 3195, duration: 454 },
                { id: "eid2406", tween: [ "style", "${_green_cutingCopy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid59", tween: [ "style", "${_green_cutingCopy3}", "display", 'block', { fromValue: 'none'}], position: 1355, duration: 0 },
                { id: "eid78", tween: [ "style", "${_green_cutingCopy4}", "left", '36.45%', { fromValue: '28.97%'}], position: 2000, duration: 315 },
                { id: "eid70", tween: [ "style", "${_green_cutingCopy3}", "left", '40.19%', { fromValue: '25.23%'}], position: 1500, duration: 286 },
                { id: "eid64", tween: [ "style", "${_green_cap2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid67", tween: [ "style", "${_green_cap2}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid6017", tween: [ "style", "${_green_cap2}", "display", 'none', { fromValue: 'block'}], position: 3858, duration: 0 },
                { id: "eid2409", tween: [ "style", "${_green_cutingCopy6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid87", tween: [ "style", "${_green_cutingCopy6}", "display", 'block', { fromValue: 'none'}], position: 3195, duration: 0 },
                { id: "eid2408", tween: [ "style", "${_green_cutingCopy5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid80", tween: [ "style", "${_green_cutingCopy5}", "display", 'block', { fromValue: 'none'}], position: 2550, duration: 0 },
                { id: "eid2405", tween: [ "style", "${_green_cutingCopy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid54", tween: [ "style", "${_green_cutingCopy2}", "display", 'block', { fromValue: 'none'}], position: 855, duration: 0 },
                { id: "eid5385", tween: [ "style", "${_green_cutingCopy4}", "top", '25.53%', { fromValue: '6.38%'}], position: 2000, duration: 315 },
                { id: "eid2407", tween: [ "style", "${_green_cutingCopy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid75", tween: [ "style", "${_green_cutingCopy4}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid65", tween: [ "style", "${_green_cuting}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid66", tween: [ "style", "${_green_cuting}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid5346", tween: [ "style", "${_knife2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6016", tween: [ "style", "${_knife2}", "display", 'none', { fromValue: 'block'}], position: 3858, duration: 0 },
                { id: "eid57", tween: [ "style", "${_green_cutingCopy2}", "left", '37.38%', { fromValue: '28.97%'}], position: 1000, duration: 355 }            ]
        }
    }
},
"I8": {
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
                    rect: ['48.5%', '6.4%', '39.4%', '80.8%', 'auto', 'auto'],
                    transform: [[0, 0], ['-90']],
                    id: 'green_cap2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/olives/olive2.png', '0px', '0px']
                },
                {
                    rect: ['54.2%', '10.6%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cuting',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/OLI_forCut.png', '0px', '0px']
                },
                {
                    rect: ['0%', '0.4%', '100.2%', '99.6%', 'auto', 'auto'],
                    id: 'knife2',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/ing/knife.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/OLI_forCut.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/OLI_forCut.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy3',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/OLI_forCut.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy4',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/OLI_forCut.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy5',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/OLI_forCut.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy6',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/OLI_forCut.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_green_cutingCopy5}": [
                ["style", "top", '10.64%'],
                ["style", "display", 'none'],
                ["style", "height", '34%'],
                ["style", "left", '28.97%'],
                ["style", "width", '15%']
            ],
            "${_green_cap2}": [
                ["style", "top", '4.85%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '40.43%'],
                ["style", "display", 'none'],
                ["style", "left", '22.05%'],
                ["style", "width", '18.14%']
            ],
            "${_green_cutingCopy6}": [
                ["style", "top", '8.51%'],
                ["style", "display", 'none'],
                ["style", "height", '34%'],
                ["style", "left", '25.23%'],
                ["style", "width", '15%']
            ],
            "${_green_cutingCopy3}": [
                ["style", "top", '8.51%'],
                ["style", "display", 'none'],
                ["style", "height", '34%'],
                ["style", "left", '25.23%'],
                ["style", "width", '15%']
            ],
            "${_green_cutingCopy}": [
                ["style", "top", '4.26%'],
                ["style", "height", '34%'],
                ["style", "display", 'none'],
                ["style", "left", '21.5%'],
                ["style", "width", '15%']
            ],
            "${symbolSelector}": [
                ["style", "height", '7.83%'],
                ["style", "width", '13.38%']
            ],
            "${_green_cuting}": [
                ["style", "top", '6.38%'],
                ["style", "height", '35%'],
                ["style", "display", 'none'],
                ["style", "left", '21.5%'],
                ["style", "width", '15%']
            ],
            "${_green_cutingCopy4}": [
                ["style", "top", '6.38%'],
                ["style", "display", 'none'],
                ["style", "height", '34%'],
                ["style", "left", '28.97%'],
                ["style", "width", '15%']
            ],
            "${_knife2}": [
                ["style", "-webkit-transform-origin", [40.95,28.26], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "display", 'block'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '48.97%'],
                ["style", "top", '0%'],
                ["style", "left", '-11.21%'],
                ["style", "width", '56.08%']
            ],
            "${_green_cutingCopy2}": [
                ["style", "top", '8.51%'],
                ["style", "display", 'none'],
                ["style", "height", '34%'],
                ["style", "left", '28.97%'],
                ["style", "width", '15%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3858,
            autoPlay: true,
            timeline: [
                { id: "eid5389", tween: [ "style", "${_green_cutingCopy6}", "top", '31.92%', { fromValue: '8.51%'}], position: 3195, duration: 454 },
                { id: "eid2407", tween: [ "style", "${_green_cutingCopy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid75", tween: [ "style", "${_green_cutingCopy4}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid58", tween: [ "style", "${_green_cutingCopy2}", "top", '14.89%', { fromValue: '8.51%'}], position: 1000, duration: 355 },
                { id: "eid5387", tween: [ "style", "${_green_cutingCopy5}", "top", '27.66%', { fromValue: '10.64%'}], position: 2550, duration: 450 },
                { id: "eid52", tween: [ "style", "${_green_cutingCopy}", "left", '32.71%', { fromValue: '21.5%'}], position: 500, duration: 355 },
                { id: "eid64", tween: [ "style", "${_green_cap2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid67", tween: [ "style", "${_green_cap2}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid6019", tween: [ "style", "${_green_cap2}", "display", 'none', { fromValue: 'block'}], position: 3858, duration: 0 },
                { id: "eid46", tween: [ "style", "${_green_cutingCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid47", tween: [ "style", "${_green_cutingCopy}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid5415", tween: [ "style", "${_green_cutingCopy}", "top", '10.64%', { fromValue: '4.26%'}], position: 500, duration: 355 },
                { id: "eid83", tween: [ "style", "${_green_cutingCopy5}", "left", '44.86%', { fromValue: '28.97%'}], position: 2550, duration: 450 },
                { id: "eid90", tween: [ "style", "${_green_cutingCopy6}", "left", '29.91%', { fromValue: '25.23%'}], position: 3195, duration: 454 },
                { id: "eid2406", tween: [ "style", "${_green_cutingCopy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid59", tween: [ "style", "${_green_cutingCopy3}", "display", 'block', { fromValue: 'none'}], position: 1355, duration: 0 },
                { id: "eid78", tween: [ "style", "${_green_cutingCopy4}", "left", '36.45%', { fromValue: '28.97%'}], position: 2000, duration: 315 },
                { id: "eid70", tween: [ "style", "${_green_cutingCopy3}", "left", '40.19%', { fromValue: '25.23%'}], position: 1500, duration: 286 },
                { id: "eid5383", tween: [ "style", "${_green_cutingCopy3}", "top", '23.4%', { fromValue: '8.51%'}], position: 1500, duration: 286 },
                { id: "eid2409", tween: [ "style", "${_green_cutingCopy6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid87", tween: [ "style", "${_green_cutingCopy6}", "display", 'block', { fromValue: 'none'}], position: 3195, duration: 0 },
                { id: "eid2408", tween: [ "style", "${_green_cutingCopy5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid80", tween: [ "style", "${_green_cutingCopy5}", "display", 'block', { fromValue: 'none'}], position: 2550, duration: 0 },
                { id: "eid2405", tween: [ "style", "${_green_cutingCopy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid54", tween: [ "style", "${_green_cutingCopy2}", "display", 'block', { fromValue: 'none'}], position: 855, duration: 0 },
                { id: "eid5385", tween: [ "style", "${_green_cutingCopy4}", "top", '25.53%', { fromValue: '6.38%'}], position: 2000, duration: 315 },
                { id: "eid30", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 250, duration: 250 },
                { id: "eid31", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 500, duration: 250 },
                { id: "eid32", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 855, duration: 250 },
                { id: "eid33", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 1105, duration: 250 },
                { id: "eid34", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 1500, duration: 250 },
                { id: "eid35", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 1750, duration: 250 },
                { id: "eid36", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 2105, duration: 250 },
                { id: "eid37", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 2355, duration: 250 },
                { id: "eid38", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 2750, duration: 250 },
                { id: "eid39", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 3000, duration: 250 },
                { id: "eid40", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 3358, duration: 250 },
                { id: "eid41", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 3608, duration: 250 },
                { id: "eid65", tween: [ "style", "${_green_cuting}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid66", tween: [ "style", "${_green_cuting}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid5346", tween: [ "style", "${_knife2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6018", tween: [ "style", "${_knife2}", "display", 'none', { fromValue: 'block'}], position: 3858, duration: 0 },
                { id: "eid57", tween: [ "style", "${_green_cutingCopy2}", "left", '37.38%', { fromValue: '28.97%'}], position: 1000, duration: 355 }            ]
        }
    }
},
"I10": {
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
                    rect: ['48.5%', '6.4%', '39.4%', '80.8%', 'auto', 'auto'],
                    transform: [[0, 0], ['-90']],
                    id: 'green_cap2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/MUS_forCut.png', '0px', '0px']
                },
                {
                    rect: ['54.2%', '10.6%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cuting',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/MUS_forCut.png', '0px', '0px']
                },
                {
                    rect: ['0%', '0.4%', '100.2%', '99.6%', 'auto', 'auto'],
                    id: 'knife2',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/ing/knife.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/MUS_forCut.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/MUS_forCut.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy3',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/MUS_forCut.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy4',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/MUS_forCut.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy5',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/MUS_forCut.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy6',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/MUS_forCut.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_green_cutingCopy5}": [
                ["style", "top", '10.64%'],
                ["style", "display", 'none'],
                ["style", "height", '34%'],
                ["style", "left", '28.97%'],
                ["style", "width", '15%']
            ],
            "${_green_cap2}": [
                ["style", "top", '4.85%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '40%'],
                ["style", "display", 'none'],
                ["style", "left", '22.05%'],
                ["style", "width", '13%']
            ],
            "${_green_cutingCopy6}": [
                ["style", "top", '8.51%'],
                ["style", "display", 'none'],
                ["style", "height", '34%'],
                ["style", "left", '25.23%'],
                ["style", "width", '15%']
            ],
            "${_green_cutingCopy3}": [
                ["style", "top", '8.51%'],
                ["style", "display", 'none'],
                ["style", "height", '34%'],
                ["style", "left", '25.23%'],
                ["style", "width", '15%']
            ],
            "${_green_cutingCopy}": [
                ["style", "top", '4.26%'],
                ["style", "height", '34%'],
                ["style", "display", 'none'],
                ["style", "left", '21.5%'],
                ["style", "width", '15%']
            ],
            "${symbolSelector}": [
                ["style", "height", '7.83%'],
                ["style", "width", '13.38%']
            ],
            "${_green_cuting}": [
                ["style", "top", '6.38%'],
                ["style", "height", '35%'],
                ["style", "display", 'none'],
                ["style", "left", '21.5%'],
                ["style", "width", '15%']
            ],
            "${_green_cutingCopy4}": [
                ["style", "top", '6.38%'],
                ["style", "display", 'none'],
                ["style", "height", '34%'],
                ["style", "left", '28.97%'],
                ["style", "width", '15%']
            ],
            "${_knife2}": [
                ["style", "-webkit-transform-origin", [40.95,28.26], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "display", 'block'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '48.97%'],
                ["style", "top", '0%'],
                ["style", "left", '-11.21%'],
                ["style", "width", '56.08%']
            ],
            "${_green_cutingCopy2}": [
                ["style", "top", '8.51%'],
                ["style", "display", 'none'],
                ["style", "height", '34%'],
                ["style", "left", '28.97%'],
                ["style", "width", '15%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3858,
            autoPlay: true,
            timeline: [
                { id: "eid5389", tween: [ "style", "${_green_cutingCopy6}", "top", '31.92%', { fromValue: '8.51%'}], position: 3195, duration: 454 },
                { id: "eid30", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 250, duration: 250 },
                { id: "eid31", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 500, duration: 250 },
                { id: "eid32", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 855, duration: 250 },
                { id: "eid33", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 1105, duration: 250 },
                { id: "eid34", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 1500, duration: 250 },
                { id: "eid35", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 1750, duration: 250 },
                { id: "eid36", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 2105, duration: 250 },
                { id: "eid37", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 2355, duration: 250 },
                { id: "eid38", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 2750, duration: 250 },
                { id: "eid39", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 3000, duration: 250 },
                { id: "eid40", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 3358, duration: 250 },
                { id: "eid41", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 3608, duration: 250 },
                { id: "eid58", tween: [ "style", "${_green_cutingCopy2}", "top", '14.89%', { fromValue: '8.51%'}], position: 1000, duration: 355 },
                { id: "eid5387", tween: [ "style", "${_green_cutingCopy5}", "top", '27.66%', { fromValue: '10.64%'}], position: 2550, duration: 450 },
                { id: "eid52", tween: [ "style", "${_green_cutingCopy}", "left", '32.71%', { fromValue: '21.5%'}], position: 500, duration: 355 },
                { id: "eid5346", tween: [ "style", "${_knife2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6020", tween: [ "style", "${_knife2}", "display", 'none', { fromValue: 'block'}], position: 3858, duration: 0 },
                { id: "eid46", tween: [ "style", "${_green_cutingCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid47", tween: [ "style", "${_green_cutingCopy}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid5469", tween: [ "transform", "${_green_cap2}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid5415", tween: [ "style", "${_green_cutingCopy}", "top", '10.64%', { fromValue: '4.26%'}], position: 500, duration: 355 },
                { id: "eid83", tween: [ "style", "${_green_cutingCopy5}", "left", '44.86%', { fromValue: '28.97%'}], position: 2550, duration: 450 },
                { id: "eid90", tween: [ "style", "${_green_cutingCopy6}", "left", '29.91%', { fromValue: '25.23%'}], position: 3195, duration: 454 },
                { id: "eid2406", tween: [ "style", "${_green_cutingCopy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid59", tween: [ "style", "${_green_cutingCopy3}", "display", 'block', { fromValue: 'none'}], position: 1355, duration: 0 },
                { id: "eid78", tween: [ "style", "${_green_cutingCopy4}", "left", '36.45%', { fromValue: '28.97%'}], position: 2000, duration: 315 },
                { id: "eid70", tween: [ "style", "${_green_cutingCopy3}", "left", '40.19%', { fromValue: '25.23%'}], position: 1500, duration: 286 },
                { id: "eid2409", tween: [ "style", "${_green_cutingCopy6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid87", tween: [ "style", "${_green_cutingCopy6}", "display", 'block', { fromValue: 'none'}], position: 3195, duration: 0 },
                { id: "eid64", tween: [ "style", "${_green_cap2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid67", tween: [ "style", "${_green_cap2}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid2408", tween: [ "style", "${_green_cutingCopy5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid80", tween: [ "style", "${_green_cutingCopy5}", "display", 'block', { fromValue: 'none'}], position: 2550, duration: 0 },
                { id: "eid2405", tween: [ "style", "${_green_cutingCopy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid54", tween: [ "style", "${_green_cutingCopy2}", "display", 'block', { fromValue: 'none'}], position: 855, duration: 0 },
                { id: "eid5385", tween: [ "style", "${_green_cutingCopy4}", "top", '25.53%', { fromValue: '6.38%'}], position: 2000, duration: 315 },
                { id: "eid2407", tween: [ "style", "${_green_cutingCopy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid75", tween: [ "style", "${_green_cutingCopy4}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid65", tween: [ "style", "${_green_cuting}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid66", tween: [ "style", "${_green_cuting}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid5383", tween: [ "style", "${_green_cutingCopy3}", "top", '23.4%', { fromValue: '8.51%'}], position: 1500, duration: 286 },
                { id: "eid57", tween: [ "style", "${_green_cutingCopy2}", "left", '37.38%', { fromValue: '28.97%'}], position: 1000, duration: 355 }            ]
        }
    }
},
"I11": {
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
                    rect: ['48.5%', '6.4%', '39.4%', '80.8%', 'auto', 'auto'],
                    transform: [[0, 0], ['-90']],
                    id: 'green_cap2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/STIK_forCut.png', '0px', '0px']
                },
                {
                    rect: ['54.2%', '10.6%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cuting',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/STIK_forCut.png', '0px', '0px']
                },
                {
                    rect: ['0%', '0.4%', '100.2%', '99.6%', 'auto', 'auto'],
                    id: 'knife2',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/ing/knife.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/STIK_forCut.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/STIK_forCut.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy3',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/STIK_forCut.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy4',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/STIK_forCut.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy5',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/STIK_forCut.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy6',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/STIK_forCut.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_green_cuting}": [
                ["style", "top", '6.38%'],
                ["style", "display", 'none'],
                ["style", "height", '35%'],
                ["style", "left", '21.5%'],
                ["style", "width", '15%']
            ],
            "${_green_cap2}": [
                ["style", "top", '4.85%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '40%'],
                ["style", "display", 'none'],
                ["style", "left", '22.05%'],
                ["style", "width", '13%']
            ],
            "${_green_cutingCopy6}": [
                ["style", "top", '8.51%'],
                ["style", "height", '34%'],
                ["style", "display", 'none'],
                ["style", "left", '25.23%'],
                ["style", "width", '15%']
            ],
            "${_green_cutingCopy3}": [
                ["style", "top", '8.51%'],
                ["style", "height", '34%'],
                ["style", "display", 'none'],
                ["style", "left", '25.23%'],
                ["style", "width", '15%']
            ],
            "${_green_cutingCopy}": [
                ["style", "top", '4.26%'],
                ["style", "display", 'none'],
                ["style", "height", '34%'],
                ["style", "left", '21.5%'],
                ["style", "width", '15%']
            ],
            "${symbolSelector}": [
                ["style", "height", '7.83%'],
                ["style", "width", '13.38%']
            ],
            "${_green_cutingCopy2}": [
                ["style", "top", '8.51%'],
                ["style", "height", '34%'],
                ["style", "display", 'none'],
                ["style", "left", '28.97%'],
                ["style", "width", '15%']
            ],
            "${_knife2}": [
                ["style", "-webkit-transform-origin", [40.95,28.26], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "display", 'block'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '48.97%'],
                ["style", "top", '0%'],
                ["style", "left", '-11.21%'],
                ["style", "width", '56.08%']
            ],
            "${_green_cutingCopy4}": [
                ["style", "top", '6.38%'],
                ["style", "height", '34%'],
                ["style", "display", 'none'],
                ["style", "left", '28.97%'],
                ["style", "width", '15%']
            ],
            "${_green_cutingCopy5}": [
                ["style", "top", '10.64%'],
                ["style", "height", '34%'],
                ["style", "display", 'none'],
                ["style", "left", '28.97%'],
                ["style", "width", '15%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3858,
            autoPlay: true,
            timeline: [
                { id: "eid5389", tween: [ "style", "${_green_cutingCopy6}", "top", '31.92%', { fromValue: '8.51%'}], position: 3195, duration: 454 },
                { id: "eid30", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 250, duration: 250 },
                { id: "eid31", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 500, duration: 250 },
                { id: "eid32", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 855, duration: 250 },
                { id: "eid33", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 1105, duration: 250 },
                { id: "eid34", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 1500, duration: 250 },
                { id: "eid35", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 1750, duration: 250 },
                { id: "eid36", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 2105, duration: 250 },
                { id: "eid37", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 2355, duration: 250 },
                { id: "eid38", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 2750, duration: 250 },
                { id: "eid39", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 3000, duration: 250 },
                { id: "eid40", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 3358, duration: 250 },
                { id: "eid41", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 3608, duration: 250 },
                { id: "eid2409", tween: [ "style", "${_green_cutingCopy6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid87", tween: [ "style", "${_green_cutingCopy6}", "display", 'block', { fromValue: 'none'}], position: 3195, duration: 0 },
                { id: "eid5387", tween: [ "style", "${_green_cutingCopy5}", "top", '27.66%', { fromValue: '10.64%'}], position: 2550, duration: 450 },
                { id: "eid52", tween: [ "style", "${_green_cutingCopy}", "left", '32.71%', { fromValue: '21.5%'}], position: 500, duration: 355 },
                { id: "eid5346", tween: [ "style", "${_knife2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6022", tween: [ "style", "${_knife2}", "display", 'none', { fromValue: 'block'}], position: 3858, duration: 0 },
                { id: "eid46", tween: [ "style", "${_green_cutingCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid47", tween: [ "style", "${_green_cutingCopy}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid5469", tween: [ "transform", "${_green_cap2}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid5415", tween: [ "style", "${_green_cutingCopy}", "top", '10.64%', { fromValue: '4.26%'}], position: 500, duration: 355 },
                { id: "eid83", tween: [ "style", "${_green_cutingCopy5}", "left", '44.86%', { fromValue: '28.97%'}], position: 2550, duration: 450 },
                { id: "eid90", tween: [ "style", "${_green_cutingCopy6}", "left", '29.91%', { fromValue: '25.23%'}], position: 3195, duration: 454 },
                { id: "eid2406", tween: [ "style", "${_green_cutingCopy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid59", tween: [ "style", "${_green_cutingCopy3}", "display", 'block', { fromValue: 'none'}], position: 1355, duration: 0 },
                { id: "eid78", tween: [ "style", "${_green_cutingCopy4}", "left", '36.45%', { fromValue: '28.97%'}], position: 2000, duration: 315 },
                { id: "eid57", tween: [ "style", "${_green_cutingCopy2}", "left", '37.38%', { fromValue: '28.97%'}], position: 1000, duration: 355 },
                { id: "eid5383", tween: [ "style", "${_green_cutingCopy3}", "top", '23.4%', { fromValue: '8.51%'}], position: 1500, duration: 286 },
                { id: "eid64", tween: [ "style", "${_green_cap2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid67", tween: [ "style", "${_green_cap2}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid2408", tween: [ "style", "${_green_cutingCopy5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid80", tween: [ "style", "${_green_cutingCopy5}", "display", 'block', { fromValue: 'none'}], position: 2550, duration: 0 },
                { id: "eid2407", tween: [ "style", "${_green_cutingCopy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid75", tween: [ "style", "${_green_cutingCopy4}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid5385", tween: [ "style", "${_green_cutingCopy4}", "top", '25.53%', { fromValue: '6.38%'}], position: 2000, duration: 315 },
                { id: "eid2405", tween: [ "style", "${_green_cutingCopy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid54", tween: [ "style", "${_green_cutingCopy2}", "display", 'block', { fromValue: 'none'}], position: 855, duration: 0 },
                { id: "eid65", tween: [ "style", "${_green_cuting}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid66", tween: [ "style", "${_green_cuting}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid58", tween: [ "style", "${_green_cutingCopy2}", "top", '14.89%', { fromValue: '8.51%'}], position: 1000, duration: 355 },
                { id: "eid70", tween: [ "style", "${_green_cutingCopy3}", "left", '40.19%', { fromValue: '25.23%'}], position: 1500, duration: 286 }            ]
        }
    }
},
"I9": {
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
                    transform: [[0, 0], ['-90']],
                    display: 'none',
                    rect: ['48.5%', '6.4%', '39.4%', '80.8%', 'auto', 'auto'],
                    id: 'green_cap2',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/ham_forCut.png', '0px', '0px']
                },
                {
                    rect: ['54.2%', '10.6%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cuting',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/ham_forCut.png', '0px', '0px']
                },
                {
                    rect: ['0%', '0.4%', '100.2%', '99.6%', 'auto', 'auto'],
                    id: 'knife2',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/ing/knife.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/ham_forCut.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/ham_forCut.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy3',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/ham_forCut.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy4',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/ham_forCut.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy5',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/ham_forCut.png', '0px', '0px']
                },
                {
                    rect: ['61.7%', '12.8%', '31.8%', '66%', 'auto', 'auto'],
                    id: 'green_cutingCopy6',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/ing_forCut/ham_forCut.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_green_cuting}": [
                ["style", "top", '6.38%'],
                ["style", "display", 'none'],
                ["style", "height", '35%'],
                ["style", "left", '21.5%'],
                ["style", "width", '15%']
            ],
            "${_green_cap2}": [
                ["style", "top", '4.85%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '40.43%'],
                ["style", "display", 'none'],
                ["style", "left", '22.05%'],
                ["style", "width", '18.14%']
            ],
            "${_green_cutingCopy6}": [
                ["style", "top", '8.51%'],
                ["style", "height", '34%'],
                ["style", "display", 'none'],
                ["style", "left", '25.23%'],
                ["style", "width", '15%']
            ],
            "${_green_cutingCopy3}": [
                ["style", "top", '8.51%'],
                ["style", "height", '34%'],
                ["style", "display", 'none'],
                ["style", "left", '25.23%'],
                ["style", "width", '15%']
            ],
            "${_green_cutingCopy}": [
                ["style", "top", '4.26%'],
                ["style", "display", 'none'],
                ["style", "height", '34%'],
                ["style", "left", '21.5%'],
                ["style", "width", '15%']
            ],
            "${symbolSelector}": [
                ["style", "height", '7.83%'],
                ["style", "width", '13.38%']
            ],
            "${_green_cutingCopy2}": [
                ["style", "top", '8.51%'],
                ["style", "height", '34%'],
                ["style", "display", 'none'],
                ["style", "left", '28.97%'],
                ["style", "width", '15%']
            ],
            "${_knife2}": [
                ["style", "-webkit-transform-origin", [40.95,28.26], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [40.95,28.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "display", 'block'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '48.97%'],
                ["style", "top", '0%'],
                ["style", "left", '-11.21%'],
                ["style", "width", '56.08%']
            ],
            "${_green_cutingCopy4}": [
                ["style", "top", '6.38%'],
                ["style", "height", '34%'],
                ["style", "display", 'none'],
                ["style", "left", '28.97%'],
                ["style", "width", '15%']
            ],
            "${_green_cutingCopy5}": [
                ["style", "top", '10.64%'],
                ["style", "height", '34%'],
                ["style", "display", 'none'],
                ["style", "left", '28.97%'],
                ["style", "width", '15%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3858,
            autoPlay: true,
            timeline: [
                { id: "eid5389", tween: [ "style", "${_green_cutingCopy6}", "top", '31.92%', { fromValue: '8.51%'}], position: 3195, duration: 454 },
                { id: "eid2407", tween: [ "style", "${_green_cutingCopy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid75", tween: [ "style", "${_green_cutingCopy4}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid2409", tween: [ "style", "${_green_cutingCopy6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid87", tween: [ "style", "${_green_cutingCopy6}", "display", 'block', { fromValue: 'none'}], position: 3195, duration: 0 },
                { id: "eid5387", tween: [ "style", "${_green_cutingCopy5}", "top", '27.66%', { fromValue: '10.64%'}], position: 2550, duration: 450 },
                { id: "eid52", tween: [ "style", "${_green_cutingCopy}", "left", '32.71%', { fromValue: '21.5%'}], position: 500, duration: 355 },
                { id: "eid5383", tween: [ "style", "${_green_cutingCopy3}", "top", '23.4%', { fromValue: '8.51%'}], position: 1500, duration: 286 },
                { id: "eid46", tween: [ "style", "${_green_cutingCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid47", tween: [ "style", "${_green_cutingCopy}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid5415", tween: [ "style", "${_green_cutingCopy}", "top", '10.64%', { fromValue: '4.26%'}], position: 500, duration: 355 },
                { id: "eid83", tween: [ "style", "${_green_cutingCopy5}", "left", '44.86%', { fromValue: '28.97%'}], position: 2550, duration: 450 },
                { id: "eid90", tween: [ "style", "${_green_cutingCopy6}", "left", '29.91%', { fromValue: '25.23%'}], position: 3195, duration: 454 },
                { id: "eid2406", tween: [ "style", "${_green_cutingCopy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid59", tween: [ "style", "${_green_cutingCopy3}", "display", 'block', { fromValue: 'none'}], position: 1355, duration: 0 },
                { id: "eid78", tween: [ "style", "${_green_cutingCopy4}", "left", '36.45%', { fromValue: '28.97%'}], position: 2000, duration: 315 },
                { id: "eid57", tween: [ "style", "${_green_cutingCopy2}", "left", '37.38%', { fromValue: '28.97%'}], position: 1000, duration: 355 },
                { id: "eid5346", tween: [ "style", "${_knife2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6023", tween: [ "style", "${_knife2}", "display", 'none', { fromValue: 'block'}], position: 3858, duration: 0 },
                { id: "eid58", tween: [ "style", "${_green_cutingCopy2}", "top", '14.89%', { fromValue: '8.51%'}], position: 1000, duration: 355 },
                { id: "eid2408", tween: [ "style", "${_green_cutingCopy5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid80", tween: [ "style", "${_green_cutingCopy5}", "display", 'block', { fromValue: 'none'}], position: 2550, duration: 0 },
                { id: "eid30", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 250, duration: 250 },
                { id: "eid31", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 500, duration: 250 },
                { id: "eid32", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 855, duration: 250 },
                { id: "eid33", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 1105, duration: 250 },
                { id: "eid34", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 1500, duration: 250 },
                { id: "eid35", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 1750, duration: 250 },
                { id: "eid36", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 2105, duration: 250 },
                { id: "eid37", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 2355, duration: 250 },
                { id: "eid38", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 2750, duration: 250 },
                { id: "eid39", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 3000, duration: 250 },
                { id: "eid40", tween: [ "transform", "${_knife2}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 3358, duration: 250 },
                { id: "eid41", tween: [ "transform", "${_knife2}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 3608, duration: 250 },
                { id: "eid5385", tween: [ "style", "${_green_cutingCopy4}", "top", '25.53%', { fromValue: '6.38%'}], position: 2000, duration: 315 },
                { id: "eid2405", tween: [ "style", "${_green_cutingCopy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid54", tween: [ "style", "${_green_cutingCopy2}", "display", 'block', { fromValue: 'none'}], position: 855, duration: 0 },
                { id: "eid65", tween: [ "style", "${_green_cuting}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid66", tween: [ "style", "${_green_cuting}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid64", tween: [ "style", "${_green_cap2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid67", tween: [ "style", "${_green_cap2}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid70", tween: [ "style", "${_green_cutingCopy3}", "left", '40.19%', { fromValue: '25.23%'}], position: 1500, duration: 286 }            ]
        }
    }
},
"eye8": {
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
                    rect: ['0%', '0%', '100%', '96%', 'auto', 'auto'],
                    id: 'eye8',
                    fill: ['rgba(0,0,0,0)', 'images/customer6/eye8.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '7.92%'],
                ["style", "width", '24.64%']
            ],
            "${_eye8}": [
                ["style", "top", '0%'],
                ["style", "display", 'none'],
                ["style", "height", '96%'],
                ["style", "left", '0%'],
                ["style", "width", '100%']
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
                { id: "eid5704", tween: [ "style", "${_eye8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5705", tween: [ "style", "${_eye8}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid5706", tween: [ "style", "${_eye8}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 }            ]
        }
    }
},
"eye7": {
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
                    rect: ['0%', '0%', '100%', '98.8%', 'auto', 'auto'],
                    id: 'eye7',
                    fill: ['rgba(0,0,0,0)', 'images/customer7/eye7.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_eye7}": [
                ["style", "top", '0%'],
                ["style", "display", 'none'],
                ["style", "height", '98.78%'],
                ["style", "left", '0%'],
                ["style", "width", '100%']
            ],
            "${symbolSelector}": [
                ["style", "height", '8.91%'],
                ["style", "width", '24.64%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2184,
            autoPlay: true,
            timeline: [
                { id: "eid5709", tween: [ "style", "${_eye7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5710", tween: [ "style", "${_eye7}", "display", 'block', { fromValue: 'none'}], position: 1158, duration: 0 },
                { id: "eid5711", tween: [ "style", "${_eye7}", "display", 'none', { fromValue: 'block'}], position: 1386, duration: 0 },
                { id: "eid5712", tween: [ "style", "${_eye7}", "display", 'block', { fromValue: 'none'}], position: 1658, duration: 0 },
                { id: "eid5713", tween: [ "style", "${_eye7}", "display", 'none', { fromValue: 'block'}], position: 1886, duration: 0 }            ]
        }
    }
},
"eye8g": {
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
                    rect: ['0%', '0%', '100.8%', '100%', 'auto', 'auto'],
                    id: 'eye83',
                    fill: ['rgba(0,0,0,0)', 'images/customer8/eye8.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_eye83}": [
                ["style", "top", '0%'],
                ["transform", "scaleY", '1'],
                ["style", "height", '100%'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '1'],
                ["style", "left", '0%'],
                ["style", "width", '100.84%']
            ],
            "${symbolSelector}": [
                ["style", "height", '8.91%'],
                ["style", "width", '26.09%']
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
                { id: "eid5750", tween: [ "style", "${_eye83}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5751", tween: [ "style", "${_eye83}", "display", 'block', { fromValue: 'none'}], position: 632, duration: 0 },
                { id: "eid5752", tween: [ "style", "${_eye83}", "display", 'none', { fromValue: 'block'}], position: 825, duration: 0 },
                { id: "eid5753", tween: [ "style", "${_eye83}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid5754", tween: [ "style", "${_eye83}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 }            ]
        }
    }
},
"pendui_ani": {
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
                    id: 'pendulum',
                    type: 'image',
                    rect: ['0%', '0%', '100%', '99.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/All_btn/clock_img/pendulum.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_pendulum}": [
                ["style", "-webkit-transform-origin", [51.42,26.05], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [51.42,26.05],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [51.42,26.05],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [51.42,26.05],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [51.42,26.05],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '20deg'],
                ["style", "height", '99.34%'],
                ["style", "top", '-0.03%'],
                ["style", "left", '0%'],
                ["style", "width", '100.29%']
            ],
            "${symbolSelector}": [
                ["style", "height", '10.17%'],
                ["style", "width", '3.51%']
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
                { id: "eid5838", tween: [ "transform", "${_pendulum}", "rotateZ", '0deg', { fromValue: '20deg'}], position: 0, duration: 500 },
                { id: "eid5842", tween: [ "transform", "${_pendulum}", "rotateZ", '-20deg', { fromValue: '0deg'}], position: 500, duration: 500 },
                { id: "eid5843", tween: [ "transform", "${_pendulum}", "rotateZ", '0deg', { fromValue: '-20deg'}], position: 1000, duration: 500 },
                { id: "eid5844", tween: [ "transform", "${_pendulum}", "rotateZ", '20deg', { fromValue: '0deg'}], position: 1500, duration: 500 }            ]
        }
    }
},
"wrong_ing": {
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
                    id: 'wrong_ing',
                    type: 'image',
                    rect: ['-17.4%', '8.9%', '185.7%', '268.1%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/false_icon/wrong_ing.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '7.83%'],
                ["style", "width", '8.75%']
            ],
            "${_wrong_ing}": [
                ["style", "top", '0%'],
                ["transform", "scaleY", '1'],
                ["style", "height", '98.94%'],
                ["transform", "scaleX", '1'],
                ["style", "left", '0.06%'],
                ["style", "width", '99.55%']
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
                { id: "eid5877", tween: [ "transform", "${_wrong_ing}", "scaleX", '0.5', { fromValue: '1'}], position: 0, duration: 292 },
                { id: "eid5878", tween: [ "transform", "${_wrong_ing}", "scaleX", '0.8', { fromValue: '0.5'}], position: 292, duration: 73 },
                { id: "eid5881", tween: [ "transform", "${_wrong_ing}", "scaleX", '0.5', { fromValue: '0.8'}], position: 365, duration: 93 },
                { id: "eid5883", tween: [ "transform", "${_wrong_ing}", "scaleX", '1', { fromValue: '0.5'}], position: 458, duration: 168 },
                { id: "eid5879", tween: [ "transform", "${_wrong_ing}", "scaleY", '0.5', { fromValue: '1'}], position: 0, duration: 292 },
                { id: "eid5880", tween: [ "transform", "${_wrong_ing}", "scaleY", '0.8', { fromValue: '0.5'}], position: 292, duration: 73 },
                { id: "eid5882", tween: [ "transform", "${_wrong_ing}", "scaleY", '0.5', { fromValue: '0.8'}], position: 365, duration: 93 },
                { id: "eid5884", tween: [ "transform", "${_wrong_ing}", "scaleY", '1', { fromValue: '0.5'}], position: 458, duration: 168 }            ]
        }
    }
},
"line_shado": {
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
                    rect: ['26.3%', '-59.6%', '46%', '217.4%', 'auto', 'auto'],
                    id: 'line_shadow',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/All_btn/line_shadow.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_line_shadow}": [
                ["style", "top", '-59.63%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '26.29%'],
                ["transform", "rotateZ", '90deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '268.33%'],
                ["style", "width", '144.63%']
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
                { id: "eid6001", tween: [ "style", "${_line_shadow}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 500 },
                { id: "eid6002", tween: [ "style", "${_line_shadow}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 }            ]
        }
    }
},
"StageTimeTxt": {
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
                    rect: ['15.2%', '16.7%', '100%', '100%', 'auto', 'auto'],
                    font: ['arbutus, sans-serif', [0.83, 'em'], 'rgba(63,247,20,1.00)', '400', 'none', 'italic'],
                    id: 'StageTimeTxt',
                    text: '.',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_StageTimeTxt}": [
                ["color", "color", 'rgba(63,247,20,1.00)'],
                ["style", "left", '15.22%'],
                ["style", "width", '100%'],
                ["style", "top", '16.67%'],
                ["style", "font-size", '0.83em'],
                ["style", "height", '100%'],
                ["style", "font-family", 'arbutus, sans-serif'],
                ["style", "text-decoration", 'none'],
                ["style", "font-style", 'italic']
            ],
            "${symbolSelector}": [
                ["style", "height", '3%'],
                ["style", "width", '5.75%']
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
"IngSeatNo": {
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
                    rect: ['0.4%', '13.3%', '100%', '74.5%', 'auto', 'auto'],
                    font: ['arbutus, sans-serif', [1.19, 'em'], 'rgba(232,232,9,1.00)', '100', 'none', 'normal'],
                    id: 'IngSeatNo',
                    text: 'T',
                    align: 'center',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '23.81%'],
                ["style", "width", '6.38%']
            ],
            "${_IngSeatNo}": [
                ["style", "top", '13.33%'],
                ["style", "font-size", '1.19em'],
                ["color", "color", 'rgba(232,232,9,1.00)'],
                ["style", "height", '74.54%'],
                ["style", "left", '0.05%'],
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
"dustbin_ani": {
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
                    id: 'dustbin',
                    fill: ['rgba(0,0,0,0)', 'images/dustbin.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_dustbin}": [
                ["style", "top", '0.02%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '21%'],
                ["style", "width", '13.88%']
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
                { id: "eid6297", tween: [ "style", "${_dustbin}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6299", tween: [ "style", "${_dustbin}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-2233007131");
