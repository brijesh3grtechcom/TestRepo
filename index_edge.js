/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
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
                id: 'start_screen',
                type: 'group',
                rect: ['0%', '0%','100%','100%','auto', 'auto'],
                c: [
                {
                    id: 'bg1',
                    type: 'image',
                    rect: ['0%', '0%','100%','100%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"bg1.png",'0px','0px']
                },
                {
                    id: 'star',
                    type: 'rect',
                    rect: ['17.8%', '17.5%','auto','auto','auto', 'auto']
                },
                {
                    id: 'more_sym4',
                    type: 'rect',
                    rect: ['70.1%', '76.9%','auto','auto','auto', 'auto']
                },
                {
                    id: 'play_sym',
                    type: 'rect',
                    rect: ['75.6%', '40.7%','auto','auto','auto', 'auto']
                }]
            },
            {
                id: 'two_screen',
                display: 'none',
                type: 'group',
                rect: ['0%', '0%','100%','100%','auto', 'auto'],
                c: [
                {
                    id: 'bg2',
                    type: 'image',
                    rect: ['0%', '0%','100%','100%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"bg2.png",'0px','0px']
                },
                {
                    id: 'Girl1',
                    type: 'rect',
                    rect: ['55%', '10.2%','auto','auto','auto', 'auto']
                },
                {
                    id: 'Girl2',
                    type: 'rect',
                    rect: ['26.9%', '8.8%','auto','auto','auto', 'auto']
                },
                {
                    id: 'brownbox',
                    type: 'image',
                    rect: ['23.1%', '63.2%','54%','36.5%','auto', 'auto'],
                    opacity: 1,
                    fill: ["rgba(0,0,0,0)",im+"cloth_box.png",'0px','0px'],
                    transform: [[],[],[],['1.0787','0.93593']]
                },
                {
                    id: 'dress2',
                    display: 'block',
                    type: 'image',
                    rect: ['25.9%', '58.8%','48.5%','22.7%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"cloth5.png",'0px','0px']
                },
                {
                    id: 'dress3',
                    display: 'block',
                    type: 'image',
                    rect: ['28.6%', '53.3%','48%','19.7%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"cloth4.png",'0px','0px']
                },
                {
                    id: 'Search_anim_1',
                    type: 'rect',
                    rect: ['20%', '25%','auto','auto','auto', 'auto']
                },
                {
                    id: 'greebox',
                    type: 'image',
                    rect: ['74.5%', '65%','27%','33.3%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gree_box1.png",'0px','0px']
                },
                {
                    id: 'image_bottom',
                    type: 'image',
                    rect: ['78.6%', '77.5%','20.6%','16.7%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"cloth2.png",'0px','0px']
                },
                {
                    id: 'image_top',
                    type: 'image',
                    rect: ['75.6%', '61.5%','23.9%','14.5%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"cloth3.png",'0px','0px']
                },
                {
                    id: 'boxdoor',
                    type: 'image',
                    rect: ['77.1%', '73%','24.4%','24.3%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gree_box2.png",'0px','0px']
                },
                {
                    id: 'div32',
                    display: 'block',
                    type: 'rect',
                    rect: ['18%', '65.5%','20.4%','31.2%','auto', 'auto'],
                    fill: ["rgba(249,245,245,0)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'div31',
                    display: 'block',
                    type: 'rect',
                    rect: ['2.6%', '1.2%','20.4%','28.7%','auto', 'auto'],
                    fill: ["rgba(249,245,245,0)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'div30',
                    display: 'block',
                    type: 'rect',
                    rect: ['73.8%', '19.2%','24.4%','35.8%','auto', 'auto'],
                    fill: ["rgba(249,245,245,0)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'div29',
                    display: 'block',
                    type: 'rect',
                    rect: ['60.3%', '2.2%','25%','36.5%','auto', 'auto'],
                    fill: ["rgba(249,245,245,0)"],
                    stroke: [3,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'div28',
                    display: 'block',
                    type: 'rect',
                    rect: ['70.1%', '2.2%','21.9%','28.8%','auto', 'auto'],
                    fill: ["rgba(249,245,245,0)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'div27',
                    display: 'block',
                    type: 'rect',
                    rect: ['52.7%', '78.2%','18.3%','23.5%','auto', 'auto'],
                    fill: ["rgba(249,245,245,0)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'div26',
                    display: 'block',
                    type: 'rect',
                    rect: ['48.1%', '1.2%','23.1%','33%','auto', 'auto'],
                    fill: ["rgba(249,245,245,0)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'div25',
                    display: 'block',
                    type: 'rect',
                    rect: ['13.4%', '42.8%','25%','29%','auto', 'auto'],
                    fill: ["rgba(249,245,245,0)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'div24',
                    display: 'block',
                    type: 'rect',
                    rect: ['17.8%', '1.5%','23.3%','33.3%','auto', 'auto'],
                    fill: ["rgba(249,245,245,0)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'div23',
                    display: 'block',
                    type: 'rect',
                    rect: ['73.4%', '31%','18.3%','26.3%','auto', 'auto'],
                    fill: ["rgba(249,245,245,0)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'div22',
                    display: 'block',
                    type: 'rect',
                    rect: ['65%', '1.2%','0%','32%','auto', 'auto'],
                    fill: ["rgba(249,245,245,0)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'div21',
                    display: 'block',
                    type: 'rect',
                    rect: ['12%', '43.3%','23.8%','26.3%','auto', 'auto'],
                    fill: ["rgba(249,245,245,0)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'div20',
                    display: 'block',
                    type: 'rect',
                    rect: ['32.5%', '1.2%','23.5%','26.7%','auto', 'auto'],
                    fill: ["rgba(249,245,245,0)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'div19',
                    display: 'block',
                    type: 'rect',
                    rect: ['19.9%', '64.5%','22.6%','33.8%','auto', 'auto'],
                    fill: ["rgba(249,245,245,0)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'div18',
                    display: 'block',
                    type: 'rect',
                    rect: ['2.6%', '1.2%','24.3%','26.2%','auto', 'auto'],
                    fill: ["rgba(249,245,245,0)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'div17',
                    display: 'block',
                    type: 'rect',
                    rect: ['77%', '33.2%','21.7%','19.3%','auto', 'auto'],
                    fill: ["rgba(249,245,245,0)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'div16',
                    display: 'block',
                    type: 'rect',
                    rect: ['70.1%', '2.2%','0%','0%','auto', 'auto'],
                    fill: ["rgba(249,245,245,0)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'div15',
                    display: 'block',
                    type: 'rect',
                    rect: ['14.6%', '71.8%','20.3%','25.7%','auto', 'auto'],
                    fill: ["rgba(249,245,245,0)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'div14',
                    display: 'block',
                    type: 'rect',
                    rect: ['48.1%', '1.2%','24.4%','24.8%','auto', 'auto'],
                    fill: ["rgba(249,245,245,0)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'div13',
                    display: 'block',
                    type: 'rect',
                    rect: ['16.1%', '69.5%','22.3%','28.8%','auto', 'auto'],
                    fill: ["rgba(249,245,245,0)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'div12',
                    display: 'block',
                    type: 'rect',
                    rect: ['17.8%', '1.5%','22.8%','27.3%','auto', 'auto'],
                    fill: ["rgba(249,245,245,0)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'div11',
                    display: 'block',
                    type: 'rect',
                    rect: ['75.6%', '19.5%','23.3%','28.5%','auto', 'auto'],
                    fill: ["rgba(249,245,245,0)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'div10',
                    display: 'block',
                    type: 'rect',
                    rect: ['68.5%', '1.2%','23.5%','32.1%','auto', 'auto'],
                    fill: ["rgba(249,245,245,0)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'div9',
                    display: 'block',
                    type: 'rect',
                    rect: ['11.3%', '46.8%','20.8%','20.5%','auto', 'auto'],
                    fill: ["rgba(249,245,245,0)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'div8',
                    display: 'block',
                    type: 'rect',
                    rect: ['32.5%', '1.2%','22.5%','26.7%','auto', 'auto'],
                    fill: ["rgba(249,245,245,0)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'div7',
                    display: 'block',
                    type: 'rect',
                    rect: ['17%', '67.3%','22.2%','31.2%','auto', 'auto'],
                    fill: ["rgba(249,245,245,0)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'div6',
                    display: 'block',
                    type: 'rect',
                    rect: ['2.6%', '1.2%','24.3%','36.7%','auto', 'auto'],
                    fill: ["rgba(249,245,245,0)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'div5',
                    display: 'block',
                    type: 'rect',
                    rect: ['17.8%', '69.2%','21.6%','30%','auto', 'auto'],
                    fill: ["rgba(249,245,245,0)"],
                    stroke: [3,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'div4',
                    display: 'block',
                    type: 'rect',
                    rect: ['19.9%', '2.2%','18.5%','26.7%','auto', 'auto'],
                    fill: ["rgba(249,245,245,0)"],
                    stroke: [3,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'div3',
                    display: 'block',
                    type: 'rect',
                    rect: ['70.3%', '14.5%','0%','0%','auto', 'auto'],
                    fill: ["rgba(249,245,245,0)"],
                    stroke: [3,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'div2',
                    display: 'block',
                    type: 'rect',
                    rect: ['32%', '82.5%','16.9%','16.3%','auto', 'auto'],
                    fill: ["rgba(249,245,245,0)"],
                    stroke: [3,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'div1',
                    type: 'rect',
                    rect: ['50%', '6.2%','17.1%','21.7%','auto', 'auto'],
                    fill: ["rgba(249,245,245,0)"],
                    stroke: [0,"rgba(37,170,0,1.00)","solid"]
                },
                {
                    id: 'Rectangle',
                    type: 'rect',
                    rect: ['72.5%', '62.2%','26.8%','36.6%','auto', 'auto'],
                    fill: ["rgba(249,245,245,0)"],
                    stroke: [0,"rgba(248,0,0,1.00)","solid"]
                },
                {
                    id: 'progressbarnew',
                    display: 'none',
                    type: 'group',
                    rect: ['4.3%', '27.3%','5.4%','41.8%','auto', 'auto'],
                    c: [
                    {
                        id: 'redbar',
                        type: 'rect',
                        rect: ['-0.4%', '-0.1%','81.1%','97.1%','auto', 'auto'],
                        fill: ["rgba(249,0,0,1.00)"],
                        stroke: [4,"rgb(248, 0, 0)","solid"]
                    },
                    {
                        id: 'greenbar2',
                        type: 'rect',
                        rect: ['-1.9%', 'auto','81.1%','96.8%','auto', '-1%'],
                        fill: ["rgba(0,225,70,1.00)"],
                        stroke: [4,"rgb(248, 0, 0)","solid"]
                    }]
                },
                {
                    id: 'newpro',
                    type: 'group',
                    rect: ['2.5%', '22.7%','8%','46%','auto', 'auto'],
                    transform: [[],[],[],['1','0.92029']],
                    c: [
                    {
                        id: 'backgraund',
                        type: 'image',
                        rect: ['17.2%', '10.1%','62.5%','85.5%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"backgraund1.png",'0px','0px'],
                        transform: [[],[],[],['1','1.12204']]
                    },
                    {
                        id: 'greenbar',
                        type: 'image',
                        rect: ['18.8%', '12.3%','62.5%','85.5%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"line.png",'0px','0px'],
                        transform: [[],[],[],['1','1.1705']]
                    },
                    {
                        id: 'border',
                        type: 'image',
                        rect: ['15.6%', '5.2%','62.5%','94.8%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"border1.png",'0px','0px']
                    }]
                },
                {
                    id: 'hand_sym',
                    type: 'rect',
                    rect: ['68.4%', '56.5%','auto','auto','auto', 'auto']
                }]
            },
            {
                id: 'Next_Screen',
                display: 'none',
                type: 'group',
                rect: ['0%', '0%','100%','100%','auto', 'auto'],
                c: [
                {
                    id: 'bg3',
                    display: 'block',
                    type: 'image',
                    rect: ['0%', '0%','100%','100%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"bg2.png",'0px','0px']
                },
                {
                    id: 'gril_1',
                    type: 'rect',
                    rect: ['27%', '12.2%','auto','auto','auto', 'auto']
                },
                {
                    id: 'gril_2',
                    type: 'rect',
                    rect: ['51.1%', '11.7%','auto','auto','auto', 'auto']
                },
                {
                    id: 'boxC',
                    type: 'image',
                    rect: ['22.6%', '62%','55.8%','36.5%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"cloth_box.png",'0px','0px']
                },
                {
                    id: 'next_sym1',
                    type: 'rect',
                    rect: ['45.3%', '79.3%','auto','auto','auto', 'auto']
                }]
            },
            {
                id: 'wardrobe_set',
                display: 'block',
                type: 'group',
                rect: ['0%', '0%','100%','100.2%','auto', 'auto'],
                c: [
                {
                    id: 'bg',
                    type: 'image',
                    rect: ['0%', '0%','100%','100%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"wardrobe%20setting/bg.png",'0px','0px']
                },
                {
                    id: 'carpet_sym',
                    type: 'rect',
                    rect: ['8.4%', '60.2%','auto','auto','auto', 'auto']
                },
                {
                    id: 'curtain_sym',
                    type: 'rect',
                    rect: ['38.3%', '-0.2%','auto','auto','auto', 'auto']
                },
                {
                    id: 'wardreobe_sym',
                    type: 'rect',
                    rect: ['0%', '0%','auto','auto','auto', 'auto']
                },
                {
                    id: 'jew_frame_sym',
                    type: 'rect',
                    rect: ['25.3%', '-1.2%','auto','auto','auto', 'auto']
                },
                {
                    id: 'carpet',
                    type: 'image',
                    rect: ['17.4%', '83.9%','16%','16%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"wardrobe%20setting/icon/carpet.png",'0px','0px']
                },
                {
                    id: 'curtain',
                    type: 'image',
                    rect: ['32.6%', '83.9%','16%','16%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"wardrobe%20setting/icon/curtain.png",'0px','0px']
                },
                {
                    id: 'jewellary_frame',
                    type: 'image',
                    rect: ['50.9%', '83.9%','16%','16%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"wardrobe%20setting/icon/jewellary%20frame.png",'0px','0px']
                },
                {
                    id: 'wardrobe',
                    type: 'image',
                    rect: ['67.4%', '83.9%','16%','16%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"wardrobe%20setting/icon/wardrobe.png",'0px','0px']
                },
                {
                    id: 'next_sym2',
                    type: 'rect',
                    rect: ['85.1%', '86.7%','auto','auto','auto', 'auto']
                }]
            },
            {
                id: 'Girl1_Wardrobe',
                display: 'block',
                type: 'group',
                rect: ['0%', '0%','100%','100%','auto', 'auto'],
                c: [
                {
                    id: 'MyTrigger1',
                    type: 'rect',
                    rect: ['91.1%', '88.5%','auto','auto','auto', 'auto']
                },
                {
                    id: 'j_five',
                    type: 'image',
                    rect: ['31.3%', '33%','4.8%','5.4%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_Jewl/Gril1_jew/G1J5.png",'0px','0px']
                },
                {
                    id: 'j_four',
                    type: 'image',
                    rect: ['31.4%', '28.2%','4.8%','5.4%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_Jewl/Gril1_jew/G1J4.png",'0px','0px']
                },
                {
                    id: 'j_three',
                    type: 'image',
                    rect: ['31.6%', '23.2%','4.8%','5.4%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_Jewl/Gril1_jew/G1J3.png",'0px','0px']
                },
                {
                    id: 'j_two',
                    type: 'image',
                    rect: ['31.5%', '17.8%','4.8%','5.3%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_Jewl/Gril1_jew/G1J2.png",'0px','0px']
                },
                {
                    id: 'j_one',
                    type: 'image',
                    rect: ['31.5%', '12.7%','4.8%','5.4%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_Jewl/Gril1_jew/G1J1.png",'0px','0px']
                },
                {
                    id: 'd_three',
                    type: 'image',
                    rect: ['14%', '11.3%','16%','42.2%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hanger_dress/hd3.png",'0px','0px']
                },
                {
                    id: 'd_five',
                    type: 'image',
                    rect: ['12%', '10%','13.3%','32.7%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hanger_dress/hd5.png",'0px','0px']
                },
                {
                    id: 'd_four',
                    type: 'image',
                    rect: ['9.3%', '7.7%','12.1%','35.2%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hanger_dress/hd4.png",'0px','0px']
                },
                {
                    id: 'd_six',
                    type: 'image',
                    rect: ['5%', '6%','12.3%','29%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hanger_dress/hd6.png",'0px','0px']
                },
                {
                    id: 'd_two',
                    type: 'image',
                    rect: ['-0.1%', '3.8%','15.8%','42.5%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hanger_dress/hd2.png",'0px','0px']
                },
                {
                    id: 'd_one',
                    type: 'image',
                    rect: ['-7.2%', '1%','22.3%','45%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hanger_dress/hd1.png",'0px','0px']
                },
                {
                    id: 's_five',
                    type: 'image',
                    rect: ['15.1%', '52%','8.1%','8.9%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_shoes/G1_Shoes/1ws5.png",'0px','0px'],
                    transform: [[],[],[],['0.72548','0.85753']]
                },
                {
                    id: 's_four',
                    type: 'image',
                    rect: ['12.5%', '54.3%','8.1%','11.9%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_shoes/G1_Shoes/1ws4.png",'0px','0px'],
                    transform: [[],[],[],['0.84833','0.68334']]
                },
                {
                    id: 's_three',
                    type: 'image',
                    rect: ['7.9%', '60.5%','8.3%','9.4%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_shoes/G1_Shoes/1ws3.png",'0px','0px'],
                    transform: [[],[],[],['0.80501','0.95085']]
                },
                {
                    id: 's_two',
                    type: 'image',
                    rect: ['4.1%', '64%','7.4%','11.2%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_shoes/G1_Shoes/1ws2.png",'0px','0px'],
                    transform: [[],[],[],['1','0.86127']]
                },
                {
                    id: 's_one',
                    type: 'image',
                    rect: ['-1.1%', '71%','8.4%','9.1%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_shoes/waddrobe%20shoes/1ws1.png",'0px','0px'],
                    transform: [[],[],[],['0.82456','0.99429']]
                },
                {
                    id: 'girl1',
                    type: 'rect',
                    rect: ['51.1%', '10.2%','auto','auto','auto', 'auto']
                },
                {
                    id: 'girl2',
                    type: 'rect',
                    rect: ['23%', '8.8%','auto','auto','auto', 'auto']
                },
                {
                    id: 'green_box',
                    type: 'image',
                    rect: ['55.6%', '64.3%','24.8%','33.3%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gree_box1.png",'0px','0px']
                },
                {
                    id: 'lower1',
                    type: 'image',
                    rect: ['57.5%', '68.8%','22.6%','24.3%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"cloth2.png",'0px','0px']
                },
                {
                    id: 'upper1',
                    type: 'image',
                    rect: ['56.9%', '63.5%','21.9%','13.2%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"cloth3.png",'0px','0px']
                },
                {
                    id: 'green_box2',
                    type: 'image',
                    rect: ['58.5%', '77.5%','20.6%','16.7%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gree_box2.png",'0px','0px'],
                    transform: [[],[],[],['1.0606','1.2']]
                },
                {
                    id: 'G1_div16',
                    type: 'rect',
                    rect: ['60.5%', '31.3%','13.6%','17.3%','auto', 'auto'],
                    fill: ["rgba(255,255,255,0)"],
                    stroke: [0,"rgb(249, 0, 0)","solid"]
                },
                {
                    id: 'G1_div15',
                    type: 'rect',
                    rect: ['60.5%', '31.3%','13.6%','17.3%','auto', 'auto'],
                    fill: ["rgba(255,255,255,0)"],
                    stroke: [0,"rgb(249, 0, 0)","solid"]
                },
                {
                    id: 'G1_div14',
                    type: 'rect',
                    rect: ['60.5%', '31.3%','13.6%','17.3%','auto', 'auto'],
                    fill: ["rgba(255,255,255,0)"],
                    stroke: [0,"rgb(249, 0, 0)","solid"]
                },
                {
                    id: 'G1_div13',
                    type: 'rect',
                    rect: ['60.5%', '31.3%','13.6%','17.3%','auto', 'auto'],
                    fill: ["rgba(255,255,255,0)"],
                    stroke: [0,"rgb(249, 0, 0)","solid"]
                },
                {
                    id: 'G1_div12',
                    type: 'rect',
                    rect: ['60.5%', '31.3%','13.6%','17.3%','auto', 'auto'],
                    fill: ["rgba(255,255,255,0)"],
                    stroke: [0,"rgb(249, 0, 0)","solid"]
                },
                {
                    id: 'G1_div11',
                    type: 'rect',
                    rect: ['60.5%', '31.3%','13.6%','17.3%','auto', 'auto'],
                    fill: ["rgba(255,255,255,0)"],
                    stroke: [0,"rgb(249, 0, 0)","solid"]
                },
                {
                    id: 'G1_div10',
                    type: 'rect',
                    rect: ['60.5%', '31.3%','13.6%','17.3%','auto', 'auto'],
                    fill: ["rgba(255,255,255,0)"],
                    stroke: [0,"rgb(249, 0, 0)","solid"]
                },
                {
                    id: 'G1_div9',
                    type: 'rect',
                    rect: ['60.5%', '31.3%','13.6%','17.3%','auto', 'auto'],
                    fill: ["rgba(255,255,255,0)"],
                    stroke: [0,"rgb(249, 0, 0)","solid"]
                },
                {
                    id: 'G1_div8',
                    type: 'rect',
                    rect: ['60.5%', '31.3%','13.6%','17.3%','auto', 'auto'],
                    fill: ["rgba(255,255,255,0)"],
                    stroke: [0,"rgb(249, 0, 0)","solid"]
                },
                {
                    id: 'G1_div7',
                    type: 'rect',
                    rect: ['60.5%', '31.3%','13.6%','17.3%','auto', 'auto'],
                    fill: ["rgba(255,255,255,0)"],
                    stroke: [0,"rgb(249, 0, 0)","solid"]
                },
                {
                    id: 'G1_div6',
                    type: 'rect',
                    rect: ['60.5%', '31.3%','13.6%','17.3%','auto', 'auto'],
                    fill: ["rgba(255,255,255,0)"],
                    stroke: [0,"rgb(249, 0, 0)","solid"]
                },
                {
                    id: 'G1_div5',
                    type: 'rect',
                    rect: ['60.5%', '31.3%','13.6%','17.3%','auto', 'auto'],
                    fill: ["rgba(255,255,255,0)"],
                    stroke: [0,"rgb(249, 0, 0)","solid"]
                },
                {
                    id: 'G1_div4',
                    type: 'rect',
                    rect: ['60.5%', '31.3%','13.6%','17.3%','auto', 'auto'],
                    fill: ["rgba(255,255,255,0)"],
                    stroke: [0,"rgb(249, 0, 0)","solid"]
                },
                {
                    id: 'G1_div3',
                    type: 'rect',
                    rect: ['60.5%', '31.3%','13.6%','17.3%','auto', 'auto'],
                    fill: ["rgba(255,255,255,0)"],
                    stroke: [0,"rgb(249, 0, 0)","solid"]
                },
                {
                    id: 'G1_div2',
                    type: 'rect',
                    rect: ['60.5%', '31.3%','13.6%','17.3%','auto', 'auto'],
                    fill: ["rgba(255,255,255,0)"],
                    stroke: [0,"rgb(249, 0, 0)","solid"]
                },
                {
                    id: 'G1_div1',
                    type: 'rect',
                    rect: ['60.5%', '31.3%','13.6%','17.3%','auto', 'auto'],
                    fill: ["rgba(255,255,255,0)"],
                    stroke: [0,"rgb(249, 0, 0)","solid"]
                },
                {
                    id: 'Jwe_Drop1',
                    type: 'rect',
                    rect: ['27.4%', '2.2%','11.6%','38.7%','auto', 'auto'],
                    fill: ["rgba(255,255,255,0)"],
                    stroke: [0,"rgb(249, 0, 0)","solid"]
                },
                {
                    id: 'Dress_Drop1',
                    type: 'rect',
                    rect: ['0.1%', '1.2%','25.5%','51.8%','auto', 'auto'],
                    fill: ["rgba(255,255,255,0)"],
                    stroke: [0,"rgb(249, 0, 0)","solid"]
                },
                {
                    id: 'Shoe_Drop1',
                    type: 'rect',
                    rect: ['0.1%', '54.5%','25%','33%','auto', 'auto'],
                    fill: ["rgba(255,255,255,0)"],
                    stroke: [0,"rgb(249, 0, 0)","solid"]
                },
                {
                    id: 'my_hand1',
                    type: 'rect',
                    rect: ['63.5%', '45.7%','auto','auto','auto', 'auto']
                },
                {
                    id: 'my_hand2',
                    display: 'none',
                    type: 'rect',
                    rect: ['62.8%', '49.2%','auto','auto','auto', 'auto']
                },
                {
                    id: 'my_hand3',
                    display: 'none',
                    type: 'rect',
                    rect: ['63.5%', '52.3%','auto','auto','auto', 'auto']
                }]
            },
            {
                id: 'Girl2_Wardrobe',
                display: 'block',
                type: 'group',
                rect: ['0%', '0%','100%','100%','auto', 'auto'],
                c: [
                {
                    id: 'MyTrigger22',
                    type: 'rect',
                    rect: ['88.9%', '90.7%','auto','auto','auto', 'auto']
                },
                {
                    id: 'Group',
                    display: 'block',
                    type: 'group',
                    rect: ['-1.9%', '3.2%','37.9%','82%','auto', 'auto'],
                    c: [
                    {
                        id: 'j_fiveCopy',
                        type: 'image',
                        rect: ['86.3%', '32.3%','12.7%','6.4%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"Jewlery/image-1252.png",'0px','0px']
                    },
                    {
                        id: 'j_fourCopy',
                        type: 'image',
                        rect: ['86.8%', '27.3%','12.7%','6.4%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"Jewlery/image-2782.png",'0px','0px']
                    },
                    {
                        id: 'j_threeCopy',
                        type: 'image',
                        rect: ['87.2%', '22%','12.4%','6.4%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"Jewlery/image-2762.png",'0px','0px']
                    },
                    {
                        id: 'j_twoCopy',
                        type: 'image',
                        rect: ['86.8%', '15.6%','12.7%','6.6%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"Jewlery/image-1162.png",'0px','0px']
                    },
                    {
                        id: 'j_oneCopy',
                        type: 'image',
                        rect: ['87.4%', '9.6%','12.7%','6.4%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"Jewlery/image-1042.png",'0px','0px']
                    },
                    {
                        id: 'd_sixCopy',
                        type: 'image',
                        rect: ['39.9%', '8.9%','44%','53.1%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"dress%20with%20hanger/image-435.png",'0px','0px']
                    },
                    {
                        id: 'd_fiveCopy',
                        type: 'image',
                        rect: ['38.6%', '7.1%','33%','53.4%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"dress%20with%20hanger/image-4412.png",'0px','0px'],
                        transform: [[],['-4']]
                    },
                    {
                        id: 'd_fourCopy',
                        type: 'image',
                        rect: ['35.3%', '0.8%','29.2%','61%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"dress%20with%20hanger/image-4482.png",'0px','0px']
                    },
                    {
                        id: 'd_threeCopy',
                        type: 'image',
                        rect: ['16.2%', '2.6%','42.7%','57.1%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"dress%20with%20hanger/image-4542.png",'0px','0px']
                    },
                    {
                        id: 'd_twoCopy',
                        type: 'image',
                        rect: ['10.9%', '2.2%','39.3%','44.8%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"dress%20with%20hanger/image-4602.png",'0px','0px']
                    },
                    {
                        id: 'd_oneCopy',
                        type: 'image',
                        rect: ['-1.3%', '-0.1%','38.4%','54.8%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"dress%20with%20hanger/image-4642.png",'0px','0px']
                    },
                    {
                        id: 's_fiveCopy',
                        type: 'image',
                        rect: ['52.3%', '61.9%','20%','13.6%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"shoes/image-4232.png",'0px','0px']
                    },
                    {
                        id: 's_fourCopy',
                        type: 'image',
                        rect: ['42.1%', '67.4%','22.4%','15.5%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"shoes/image-4262.png",'0px','0px']
                    },
                    {
                        id: 's_threeCopy',
                        type: 'image',
                        rect: ['32.6%', '73.3%','17%','11%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"shoes/image-1072.png",'0px','0px']
                    },
                    {
                        id: 's_twoCopy',
                        type: 'image',
                        rect: ['18.3%', '80.9%','19.6%','12.7%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"shoes/image-4322.png",'0px','0px']
                    },
                    {
                        id: 's_oneCopy',
                        type: 'image',
                        rect: ['9.2%', '89.8%','17%','10.1%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"shoes/image-1282.png",'0px','0px']
                    }]
                },
                {
                    id: 's2_five',
                    type: 'image',
                    rect: ['76.4%', '53.3%','6.5%','6.9%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_shoes/waddrobe%20shoes/2ws5.png",'0px','0px']
                },
                {
                    id: 's2_four',
                    type: 'image',
                    rect: ['80.5%', '57.2%','6.8%','7.3%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_shoes/G2_Shoes/2ws4.png",'0px','0px']
                },
                {
                    id: 's2_three',
                    type: 'image',
                    rect: ['84.8%', '61.7%','7.4%','7.8%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_shoes/G2_Shoes/2ws3.png",'0px','0px']
                },
                {
                    id: 's2_two',
                    type: 'image',
                    rect: ['89%', '66.2%','6.8%','7.7%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_shoes/G2_Shoes/2ws2.png",'0px','0px']
                },
                {
                    id: 's2_one',
                    type: 'image',
                    rect: ['92.9%', '70.7%','7.1%','9.3%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_shoes/G2_Shoes/2ws1.png",'0px','0px']
                },
                {
                    id: 'j2_five',
                    type: 'image',
                    rect: ['65.5%', '27.8%','5%','5.5%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_Jewl/Gril2_jew/GJ5.png",'0px','0px']
                },
                {
                    id: 'j2_four',
                    type: 'image',
                    rect: ['65.5%', '32.3%','5.4%','4.8%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_Jewl/Gril2_jew/GJ4.png",'0px','0px']
                },
                {
                    id: 'j2_three',
                    type: 'image',
                    rect: ['65.1%', '22.5%','5.4%','5%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_Jewl/Gril2_jew/GJ3.png",'0px','0px']
                },
                {
                    id: 'j2_two',
                    type: 'image',
                    rect: ['65.4%', '17.5%','5.4%','5%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_Jewl/Gril2_jew/GJ2.png",'0px','0px']
                },
                {
                    id: 'j2_one',
                    type: 'image',
                    rect: ['65.5%', '12.7%','4.8%','4.8%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_Jewl/Gril2_jew/GJ1.png",'0px','0px']
                },
                {
                    id: 'd2_one',
                    type: 'image',
                    rect: ['71%', '11%','14.1%','43.2%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hanger_dress/1hd1.png",'0px','0px']
                },
                {
                    id: 'd2_six',
                    type: 'image',
                    rect: ['73.3%', '8.8%','15.4%','38.2%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hanger_dress/1hd6.png",'0px','0px']
                },
                {
                    id: 'd2_five',
                    type: 'image',
                    rect: ['78.9%', '7.3%','11.1%','33.8%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hanger_dress/1hd5.png",'0px','0px']
                },
                {
                    id: 'd2_four',
                    type: 'image',
                    rect: ['80.9%', '5.5%','15.1%','36.2%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hanger_dress/1hd4.png",'0px','0px']
                },
                {
                    id: 'd2_three',
                    type: 'image',
                    rect: ['84%', '3%','17.9%','34.8%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hanger_dress/1hd3.png",'0px','0px']
                },
                {
                    id: 'd2_two',
                    type: 'image',
                    rect: ['86%', '1.3%','19.9%','38.5%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"hanger_dress/1hd2.png",'0px','0px']
                },
                {
                    id: 'g1',
                    type: 'rect',
                    rect: ['55%', '10.2%','auto','auto','auto', 'auto']
                },
                {
                    id: 'g2',
                    type: 'rect',
                    rect: ['26.9%', '8.8%','auto','auto','auto', 'auto']
                },
                {
                    id: 'green_box3',
                    type: 'image',
                    rect: ['35.6%', '64.3%','24.8%','33.3%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gree_box1.png",'0px','0px']
                },
                {
                    id: 'dress1',
                    type: 'image',
                    rect: ['38.8%', '77.5%','20.6%','16.7%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"cloth2.png",'0px','0px']
                },
                {
                    id: 'green_box4',
                    type: 'image',
                    rect: ['37.8%', '72.2%','22.6%','24.3%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gree_box2.png",'0px','0px']
                },
                {
                    id: 'dress4',
                    display: 'block',
                    type: 'image',
                    rect: ['43.1%', '63.5%','21.9%','13.2%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"cloth3.png",'0px','0px']
                },
                {
                    id: 'G2_div16',
                    type: 'rect',
                    rect: ['41.6%', '33.8%','13.6%','17.3%','auto', 'auto'],
                    fill: ["rgba(255,255,255,0)"],
                    stroke: [0,"rgb(249, 0, 0)","solid"]
                },
                {
                    id: 'G2_div15',
                    type: 'rect',
                    rect: ['41.6%', '33.8%','13.6%','17.3%','auto', 'auto'],
                    fill: ["rgba(255,255,255,0)"],
                    stroke: [0,"rgb(249, 0, 0)","solid"]
                },
                {
                    id: 'G2_div14',
                    type: 'rect',
                    rect: ['41.6%', '33.8%','13.6%','17.3%','auto', 'auto'],
                    fill: ["rgba(255,255,255,0)"],
                    stroke: [0,"rgb(249, 0, 0)","solid"]
                },
                {
                    id: 'G2_div13',
                    type: 'rect',
                    rect: ['41.6%', '33.8%','13.6%','17.3%','auto', 'auto'],
                    fill: ["rgba(255,255,255,0)"],
                    stroke: [0,"rgb(249, 0, 0)","solid"]
                },
                {
                    id: 'G2_div12',
                    type: 'rect',
                    rect: ['41.6%', '33.8%','13.6%','17.3%','auto', 'auto'],
                    fill: ["rgba(255,255,255,0)"],
                    stroke: [0,"rgb(249, 0, 0)","solid"]
                },
                {
                    id: 'G2_div11',
                    type: 'rect',
                    rect: ['41.6%', '33.8%','13.6%','17.3%','auto', 'auto'],
                    fill: ["rgba(255,255,255,0)"],
                    stroke: [0,"rgb(249, 0, 0)","solid"]
                },
                {
                    id: 'G2_div10',
                    type: 'rect',
                    rect: ['41.6%', '33.8%','13.6%','17.3%','auto', 'auto'],
                    fill: ["rgba(255,255,255,0)"],
                    stroke: [0,"rgb(249, 0, 0)","solid"]
                },
                {
                    id: 'G2_div9',
                    type: 'rect',
                    rect: ['41.6%', '33.8%','13.6%','17.3%','auto', 'auto'],
                    fill: ["rgba(255,255,255,0)"],
                    stroke: [0,"rgb(249, 0, 0)","solid"]
                },
                {
                    id: 'G2_div8',
                    type: 'rect',
                    rect: ['41.6%', '33.8%','13.6%','17.3%','auto', 'auto'],
                    fill: ["rgba(255,255,255,0)"],
                    stroke: [0,"rgb(249, 0, 0)","solid"]
                },
                {
                    id: 'G2_div7',
                    type: 'rect',
                    rect: ['41.6%', '33.8%','13.6%','17.3%','auto', 'auto'],
                    fill: ["rgba(255,255,255,0)"],
                    stroke: [0,"rgb(249, 0, 0)","solid"]
                },
                {
                    id: 'G2_div6',
                    type: 'rect',
                    rect: ['41.6%', '33.8%','13.6%','17.3%','auto', 'auto'],
                    fill: ["rgba(255,255,255,0)"],
                    stroke: [0,"rgb(249, 0, 0)","solid"]
                },
                {
                    id: 'G2_div5',
                    type: 'rect',
                    rect: ['41.6%', '33.8%','13.6%','17.3%','auto', 'auto'],
                    fill: ["rgba(255,255,255,0)"],
                    stroke: [0,"rgb(249, 0, 0)","solid"]
                },
                {
                    id: 'G2_div4',
                    type: 'rect',
                    rect: ['41.6%', '33.8%','13.6%','17.3%','auto', 'auto'],
                    fill: ["rgba(255,255,255,0)"],
                    stroke: [0,"rgb(249, 0, 0)","solid"]
                },
                {
                    id: 'G2_div3',
                    type: 'rect',
                    rect: ['41.6%', '33.8%','13.6%','17.3%','auto', 'auto'],
                    fill: ["rgba(255,255,255,0)"],
                    stroke: [0,"rgb(249, 0, 0)","solid"]
                },
                {
                    id: 'G2_div2',
                    type: 'rect',
                    rect: ['41.6%', '33.8%','13.6%','17.3%','auto', 'auto'],
                    fill: ["rgba(255,255,255,0)"],
                    stroke: [0,"rgb(249, 0, 0)","solid"]
                },
                {
                    id: 'G2_div1',
                    type: 'rect',
                    rect: ['41.6%', '33.8%','13.6%','17.3%','auto', 'auto'],
                    fill: ["rgba(255,255,255,0)"],
                    stroke: [0,"rgb(249, 0, 0)","solid"]
                },
                {
                    id: 'Shoe_Drop_2',
                    type: 'rect',
                    rect: ['73.4%', '49.6%','33.5%','36.7%','auto', 'auto'],
                    fill: ["rgba(192,192,192,0)"],
                    stroke: [0,"rgba(255,0,0,1.00)","solid"]
                },
                {
                    id: 'dress_drop2',
                    type: 'rect',
                    rect: ['73.6%', '0%','40%','51.8%','auto', 'auto'],
                    fill: ["rgba(192,192,192,0)"],
                    stroke: [0,"rgb(255, 0, 0)","solid"]
                },
                {
                    id: 'Jwe_Drop_2',
                    type: 'rect',
                    rect: ['60.3%', '4.3%','13.9%','39%','auto', 'auto'],
                    fill: ["rgba(192,192,192,0)"],
                    stroke: [0,"rgb(255, 0, 0)","solid"]
                },
                {
                    id: 'my_hand4',
                    type: 'rect',
                    rect: ['51.3%', '47%','auto','auto','auto', 'auto']
                }]
            },
            {
                id: 'Girl1_Dressup1',
                display: 'none',
                type: 'group',
                rect: ['0%', '0%','100%','100%','auto', 'auto'],
                c: [
                {
                    id: 'G2_dress',
                    display: 'block',
                    type: 'group',
                    rect: ['65.3%', '2.7%','35.8%','78.5%','auto', 'auto'],
                    c: [
                    {
                        id: 's2_fiveCopy',
                        type: 'image',
                        rect: ['31%', '64.5%','18.1%','8.7%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"gril_shoes/G2_Shoes/2ws5.png",'0px','0px']
                    },
                    {
                        id: 's2_fourCopy',
                        type: 'image',
                        rect: ['42.5%', '69.6%','18.8%','9.1%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"gril_shoes/G2_Shoes/2ws4.png",'0px','0px']
                    },
                    {
                        id: 's2_threeCopy',
                        type: 'image',
                        rect: ['54.4%', '75.2%','20.6%','10%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"gril_shoes/G2_Shoes/2ws3.png",'0px','0px']
                    },
                    {
                        id: 's2_twoCopy',
                        type: 'image',
                        rect: ['66.7%', '80.9%','18.5%','9.8%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"gril_shoes/G2_Shoes/2ws2.png",'0px','0px']
                    },
                    {
                        id: 's2_oneCopy',
                        type: 'image',
                        rect: ['77%', '86.6%','19.9%','11.9%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"gril_shoes/G2_Shoes/2ws1.png",'0px','0px']
                    },
                    {
                        id: 'j2_fiveCopy',
                        type: 'image',
                        rect: ['0.7%', '32.1%','13.9%','7.1%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"gril_Jewl/Gril2_jew/GJ5.png",'0px','0px']
                    },
                    {
                        id: 'j2_fourCopy',
                        type: 'image',
                        rect: ['0.4%', '37.8%','15.2%','6.1%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"gril_Jewl/Gril2_jew/GJ4.png",'0px','0px']
                    },
                    {
                        id: 'j2_threeCopy',
                        type: 'image',
                        rect: ['-0.7%', '25.1%','15.2%','6.5%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"gril_Jewl/Gril2_jew/GJ3.png",'0px','0px']
                    },
                    {
                        id: 'j2_twoCopy',
                        type: 'image',
                        rect: ['0%', '18.7%','15.2%','6.5%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"gril_Jewl/Gril2_jew/GJ2.png",'0px','0px']
                    },
                    {
                        id: 'j2_oneCopy',
                        type: 'image',
                        rect: ['0.7%', '13.6%','12.6%','5.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"gril_Jewl/Gril2_jew/GJ1.png",'0px','0px']
                    },
                    {
                        id: 'd2_oneCopy',
                        type: 'image',
                        rect: ['15.7%', '10.2%','39.4%','55%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"hanger_dress/1hd1.png",'0px','0px']
                    },
                    {
                        id: 'd2_sixCopy',
                        type: 'image',
                        rect: ['19.2%', '7.9%','48.8%','44.8%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"hanger_dress/1hd6.png",'0px','0px']
                    },
                    {
                        id: 'd2_fiveCopy',
                        type: 'image',
                        rect: ['37.6%', '5.9%','31%','43.1%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"hanger_dress/1hd5.png",'0px','0px']
                    },
                    {
                        id: 'd2_fourCopy',
                        type: 'image',
                        rect: ['43.2%', '3.4%','42.2%','46.1%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"hanger_dress/1hd4.png",'0px','0px']
                    },
                    {
                        id: 'd2_threeCopy',
                        type: 'image',
                        rect: ['52.3%', '0.4%','49.8%','44.4%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"hanger_dress/1hd3.png",'0px','0px']
                    },
                    {
                        id: 'd2_towCopy',
                        type: 'image',
                        rect: ['57.5%', '-1.9%','55.4%','49%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"hanger_dress/1hd2.png",'0px','0px']
                    }]
                },
                {
                    id: 'd_six2',
                    type: 'image',
                    rect: ['10.3%', '14.7%','7.1%','25.2%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"dress%20with%20hanger/image-4352.png",'0px','0px']
                },
                {
                    id: 'd_five2',
                    type: 'image',
                    rect: ['17.6%', '14.2%','5.3%','28%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"dress%20with%20hanger/image-4413.png",'0px','0px']
                },
                {
                    id: 'd_four2',
                    type: 'image',
                    rect: ['13.6%', '11.3%','5.8%','30.7%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"dress%20with%20hanger/image-4483.png",'0px','0px']
                },
                {
                    id: 'd_three2',
                    type: 'image',
                    rect: ['20.4%', '20%','8.3%','32.2%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"dress%20with%20hanger/image-4543.png",'0px','0px']
                },
                {
                    id: 'd_two2',
                    type: 'image',
                    rect: ['4.3%', '8.5%','7.5%','36.7%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"dress%20with%20hanger/image-4603.png",'0px','0px']
                },
                {
                    id: 'd_one2',
                    type: 'image',
                    rect: ['-3%', '6%','9.6%','37.7%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"dress%20with%20hanger/image-4642.png",'0px','0px']
                },
                {
                    id: 's_five2',
                    type: 'image',
                    rect: ['18%', '53.8%','5.1%','7%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"shoes/image-4233.png",'0px','0px']
                },
                {
                    id: 's_fou2',
                    type: 'image',
                    rect: ['12.9%', '57.5%','6.5%','6.8%','auto', 'auto'],
                    opacity: 1,
                    fill: ["rgba(0,0,0,0)",im+"shoes/waddrobe%20shoes/1ws4.png",'0px','0px']
                },
                {
                    id: 's_three2',
                    type: 'image',
                    rect: ['10.3%', '61.7%','4.8%','7.1%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"shoes/waddrobe%20shoes/1ws3.png",'0px','0px']
                },
                {
                    id: 's_two2',
                    type: 'image',
                    rect: ['5.6%', '66%','5.9%','7%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"shoes/waddrobe%20shoes/1ws2.png",'0px','0px']
                },
                {
                    id: 's_one2',
                    type: 'image',
                    rect: ['0.1%', '72.5%','6.9%','8%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"shoes/waddrobe%20shoes/1ws1.png",'0px','0px']
                },
                {
                    id: 'girl1_dresup',
                    display: 'block',
                    type: 'rect',
                    rect: ['55%', '10.2%','auto','auto','auto', 'auto']
                },
                {
                    id: 'girl2_dresup',
                    display: 'block',
                    type: 'rect',
                    rect: ['26.9%', '8.8%','auto','auto','auto', 'auto']
                },
                {
                    id: 'next_sym',
                    type: 'image',
                    rect: ['85.3%', '87.3%','9.8%','13.2%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"icon/next.png",'0px','0px']
                },
                {
                    id: 'j_five2',
                    type: 'image',
                    rect: ['31%', '32.5%','4.8%','5.4%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"Jewlery/G1/J5.png",'0px','0px']
                },
                {
                    id: 'j_four2',
                    type: 'image',
                    rect: ['31.3%', '27.5%','4.8%','5.4%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"Jewlery/G1/J4.png",'0px','0px']
                },
                {
                    id: 'j_three2',
                    type: 'image',
                    rect: ['31.8%', '23.2%','4.8%','5.4%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"Jewlery/G1/J3.png",'0px','0px']
                },
                {
                    id: 'j_two2',
                    type: 'image',
                    rect: ['31.9%', '18%','4.8%','5.3%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"Jewlery/G1/J2.png",'0px','0px']
                },
                {
                    id: 'j_one2',
                    type: 'image',
                    rect: ['31.9%', '12.5%','4.8%','5.4%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"Jewlery/G1/J1.png",'0px','0px']
                },
                {
                    id: 'jw_five1',
                    type: 'image',
                    rect: ['39.4%', '32.3%','6.1%','7.9%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_Jewl/Gril1_jew/G1J5.png",'0px','0px'],
                    transform: [[],[],[],['0.7551','0.61702']]
                },
                {
                    id: 'jw_four1',
                    type: 'image',
                    rect: ['39.6%', '33.5%','4.9%','6.9%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_Jewl/Gril1_jew/G1J4.png",'0px','0px']
                },
                {
                    id: 'jw_three1',
                    type: 'image',
                    rect: ['39.8%', '33.2%','4.4%','4.7%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_Jewl/Gril1_jew/G1J3.png",'0px','0px']
                },
                {
                    id: 'jw_two1',
                    type: 'image',
                    rect: ['39.9%', '33.3%','4.5%','4.8%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_Jewl/Gril1_jew/G1J2.png",'0px','0px']
                },
                {
                    id: 'jw_one1',
                    type: 'image',
                    rect: ['39.9%', '34%','4.3%','4.3%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_Jewl/Gril1_jew/G1J1.png",'0px','0px'],
                    transform: [[],[],[],['1.20859']]
                },
                {
                    id: 'hand_dresup',
                    type: 'rect',
                    rect: ['21.8%', '36.5%','auto','auto','auto', 'auto']
                }]
            },
            {
                id: 'Girl2_Dressup2',
                display: 'none',
                type: 'group',
                rect: ['0%', '0%','100%','100%','auto', 'auto'],
                c: [
                {
                    id: 'next_sym3',
                    display: 'block',
                    type: 'image',
                    rect: ['85.3%', '80%','12.8%','17.3%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"icon/next.png",'0px','0px']
                },
                {
                    id: 's2_five2',
                    display: 'block',
                    type: 'image',
                    rect: ['77.3%', '54.8%','5.9%','6.5%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"shoes/G2/S52.png",'0px','0px']
                },
                {
                    id: 's2_four2',
                    display: 'block',
                    type: 'image',
                    rect: ['81.5%', '59.5%','5.6%','5.8%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"shoes/G2/S42.png",'0px','0px']
                },
                {
                    id: 's2_three2',
                    display: 'block',
                    type: 'image',
                    rect: ['85.6%', '63.3%','5.1%','7%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"shoes/G2/S32.png",'0px','0px']
                },
                {
                    id: 's2_two2',
                    display: 'block',
                    type: 'image',
                    rect: ['89.1%', '67.8%','6.8%','7.7%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"shoes/G2/S22.png",'0px','0px']
                },
                {
                    id: 's2_one2',
                    display: 'block',
                    type: 'image',
                    rect: ['95.4%', '73.3%','6%','8%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"shoes/G2/S12.png",'0px','0px']
                },
                {
                    id: 'd2_one2',
                    display: 'block',
                    type: 'image',
                    rect: ['90.6%', '2.7%','9.6%','42.2%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"dress%20with%20hanger/1hd1.png",'0px','0px']
                },
                {
                    id: 'd2_six2',
                    display: 'block',
                    type: 'image',
                    rect: ['74.1%', '12.5%','7.4%','36.3%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"dress%20with%20hanger/6hd6.png",'0px','0px']
                },
                {
                    id: 'd2_five2',
                    display: 'block',
                    type: 'image',
                    rect: ['76.1%', '10.3%','10.4%','38.9%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"dress%20with%20hanger/5hd5.png",'0px','0px']
                },
                {
                    id: 'd2_four2',
                    display: 'block',
                    type: 'image',
                    rect: ['78.8%', '8.7%','11%','42.6%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"dress%20with%20hanger/4hd4.png",'0px','0px']
                },
                {
                    id: 'd2_three2',
                    display: 'block',
                    type: 'image',
                    rect: ['81.6%', '5.2%','13.7%','45.5%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"dress%20with%20hanger/3hd3.png",'0px','0px']
                },
                {
                    id: 'd2_two2',
                    display: 'block',
                    type: 'image',
                    rect: ['84.9%', '3.5%','15.3%','42.1%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"dress%20with%20hanger/2hd2.png",'0px','0px']
                },
                {
                    id: 'girl2_body',
                    type: 'image',
                    rect: ['49.4%', '18.5%','16.8%','75.7%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_body_part/body2.png",'0px','0px']
                },
                {
                    id: 'G2_dress_shoes',
                    type: 'image',
                    rect: ['55%', '52.2%','11.9%','43.8%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_body_part/b_lag2.png",'0px','0px'],
                    transform: [[],[],[],['0.92296','0.96958']]
                },
                {
                    id: 'G2_dress_7',
                    type: 'image',
                    rect: ['49%', '35.2%','22.8%','36.2%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"Gril_dress/Gril2/Gd7.png",'0px','0px']
                },
                {
                    id: 'shoe_one2',
                    display: 'none',
                    type: 'image',
                    rect: ['54.8%', '85.7%','11.4%','10%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_shoes/G2_Shoes/G2_S1.png",'0px','0px'],
                    transform: [[],[],[],['0.93406','0.91228']]
                },
                {
                    id: 'shoe_two2',
                    display: 'none',
                    type: 'image',
                    rect: ['54.9%', '86%','11.4%','10%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_shoes/G2_Shoes/G2_S2.png",'0px','0px'],
                    transform: [[],[],[],['0.90361','0.93334']]
                },
                {
                    id: 'shoe_three2',
                    display: 'none',
                    type: 'image',
                    rect: ['54.8%', '86.3%','11.4%','10%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_shoes/G2_Shoes/G2_S3.png",'0px','0px'],
                    transform: [[],[],[],['0.93406','0.76666']]
                },
                {
                    id: 'shoe_four2',
                    display: 'none',
                    type: 'image',
                    rect: ['54.6%', '86%','11.4%','10%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_shoes/G2_Shoes/G2_S4.png",'0px','0px'],
                    transform: [[],[],[],['0.89705','0.96492']]
                },
                {
                    id: 'shoe_five2',
                    display: 'none',
                    type: 'image',
                    rect: ['54.8%', '85.7%','11.4%','10.5%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_shoes/G2_Shoes/G2_S5.png",'0px','0px'],
                    transform: [[],[],[],['0.86812','0.90476']]
                },
                {
                    id: 'dress_one2',
                    display: 'none',
                    type: 'image',
                    rect: ['50.6%', '30.5%','20%','60.5%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"Gril_dress/Gril2/Gd1.png",'0px','0px']
                },
                {
                    id: 'dress_two2',
                    display: 'none',
                    type: 'image',
                    rect: ['45.6%', '29.7%','27.9%','42.3%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"Gril_dress/Gril2/Gd2.png",'0px','0px']
                },
                {
                    id: 'dress_three2',
                    display: 'none',
                    type: 'image',
                    rect: ['48.6%', '30.8%','22.8%','40.3%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"Gril_dress/Gril2/Gd3.png",'0px','0px']
                },
                {
                    id: 'dress_four2',
                    display: 'none',
                    type: 'image',
                    rect: ['51.3%', '30.2%','16.4%','41.8%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"Gril_dress/Gril2/Gd4.png",'0px','0px']
                },
                {
                    id: 'dress_five2',
                    display: 'none',
                    type: 'image',
                    rect: ['51.8%', '35.8%','13.9%','38.8%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"Gril_dress/Gril2/Gd5.png",'0px','0px']
                },
                {
                    id: 'dress_six2',
                    type: 'image',
                    rect: ['46.5%', '35.2%','25.6%','47.7%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"Gril_dress/Gril2/Gd6.png",'0px','0px']
                },
                {
                    id: 'jwel_five2',
                    display: 'block',
                    type: 'image',
                    rect: ['57.4%', '32.2%','5.3%','5.7%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_Jewl/Gril2_jew/GJ5.png",'0px','0px'],
                    transform: [[],['-5']]
                },
                {
                    id: 'jwel_four2',
                    display: 'block',
                    type: 'image',
                    rect: ['57%', '32%','5.3%','5.7%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_Jewl/Gril2_jew/GJ4.png",'0px','0px']
                },
                {
                    id: 'jwel_three2',
                    display: 'block',
                    type: 'image',
                    rect: ['57.3%', '31.8%','5.3%','6.5%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_Jewl/Gril2_jew/GJ3.png",'0px','0px']
                },
                {
                    id: 'jwel_two2',
                    display: 'block',
                    type: 'image',
                    rect: ['57.3%', '32.3%','5.3%','6.5%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_Jewl/Gril2_jew/GJ2.png",'0px','0px']
                },
                {
                    id: 'jwel_one2',
                    display: 'block',
                    type: 'image',
                    rect: ['57.3%', '31.5%','5.3%','6.3%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_Jewl/Gril2_jew/GJ1.png",'0px','0px']
                },
                {
                    id: 'hand_right',
                    type: 'image',
                    rect: ['63.5%', '42.3%','7.3%','15.2%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_body_part/hand_left.png",'0px','0px']
                },
                {
                    id: 'eye3',
                    type: 'rect',
                    rect: ['56.1%', '23.3%','auto','auto','auto', 'auto']
                },
                {
                    id: 'hair24',
                    type: 'image',
                    rect: ['53.5%', '16.7%','12.6%','27%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_body_part/hair2.png",'0px','0px']
                },
                {
                    id: 'j2_five2',
                    display: 'block',
                    type: 'image',
                    rect: ['65.4%', '32.2%','5%','7.3%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_Jewl/Gril2_jew/GJ5.png",'0px','0px']
                },
                {
                    id: 'j2_four2',
                    display: 'block',
                    type: 'image',
                    rect: ['64.9%', '26.2%','5.4%','4.8%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_Jewl/Gril2_jew/GJ4.png",'0px','0px']
                },
                {
                    id: 'j2_three2',
                    display: 'block',
                    type: 'image',
                    rect: ['64.6%', '20.7%','5.4%','5%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_Jewl/Gril2_jew/GJ3.png",'0px','0px']
                },
                {
                    id: 'j2_two2',
                    display: 'block',
                    type: 'image',
                    rect: ['64.9%', '15%','5.4%','5%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_Jewl/Gril2_jew/GJ2.png",'0px','0px']
                },
                {
                    id: 'j2_one2',
                    display: 'block',
                    type: 'image',
                    rect: ['65.4%', '10%','4.8%','3.8%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"gril_Jewl/Gril2_jew/GJ1.png",'0px','0px']
                },
                {
                    id: 'hand2',
                    display: 'block',
                    type: 'rect',
                    rect: ['65.4%', '28.2%','auto','auto','auto', 'auto']
                }]
            },
            {
                id: 'Last_page',
                display: 'none',
                type: 'group',
                rect: ['0%', '0%','100%','100%','auto', 'auto'],
                c: [
                {
                    id: 'icon',
                    type: 'group',
                    rect: ['11.5%', '78.8%','51.3%','17.7%','auto', 'auto'],
                    c: [
                    {
                        id: 'more_sym2',
                        type: 'rect',
                        rect: ['116.3%', '7.6%','auto','auto','auto', 'auto']
                    },
                    {
                        id: 'replay_sym1',
                        type: 'rect',
                        rect: ['7.8%', '-0.9%','auto','auto','auto', 'auto']
                    }]
                }]
            },
            {
                id: 'play',
                type: 'image',
                rect: ['46.4%', '91.5%','6%','7.8%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"icon/sound_off.png",'0px','0px']
            },
            {
                id: 'pause',
                type: 'image',
                rect: ['46.3%', '91%','6.3%','8.3%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"icon/sound_on.png",'0px','0px']
            }],
            symbolInstances: [
            {
                id: 'MyTrigger22',
                symbolName: 'mytrigger2',
                autoPlay: {

                }
            },
            {
                id: 'replay_sym1',
                symbolName: 'replay_sym',
                autoPlay: {

                }
            },
            {
                id: 'hand_sym',
                symbolName: 'symhand1',
                autoPlay: {

                }
            },
            {
                id: 'jew_frame_sym',
                symbolName: 'jew_frame_sym',
                autoPlay: {

                }
            },
            {
                id: 'girl2_dresup',
                symbolName: 'girl2fyn',
                autoPlay: {

                }
            },
            {
                id: 'next_sym1',
                symbolName: 'next_sym',
                autoPlay: {

                }
            },
            {
                id: 'Girl1',
                symbolName: 'full_girl1',
                autoPlay: {

                }
            },
            {
                id: 'gril_1',
                symbolName: 'gril_1',
                autoPlay: {

                }
            },
            {
                id: 'hand2',
                symbolName: 'hand2',
                autoPlay: {

                }
            },
            {
                id: 'girl1_dresup',
                symbolName: 'girl1fyn',
                autoPlay: {

                }
            },
            {
                id: 'more_sym2',
                symbolName: 'more_sym',
                autoPlay: {

                }
            },
            {
                id: 'curtain_sym',
                symbolName: 'curtain_sym',
                autoPlay: {

                }
            },
            {
                id: 'eye3',
                symbolName: 'eye3',
                autoPlay: {

                }
            },
            {
                id: 'star',
                symbolName: 'star_sym',
                autoPlay: {

                }
            },
            {
                id: 'hand_dresup',
                symbolName: 'hand1',
                autoPlay: {

                }
            },
            {
                id: 'my_hand4',
                symbolName: 'my_handsym3',
                autoPlay: {

                }
            },
            {
                id: 'g1',
                symbolName: 'g111',
                autoPlay: {

                }
            },
            {
                id: 'my_hand2',
                symbolName: 'my_hand2',
                autoPlay: {

                }
            },
            {
                id: 'my_hand3',
                symbolName: 'my_hand3',
                autoPlay: {

                }
            },
            {
                id: 'g2',
                symbolName: 'g222',
                autoPlay: {

                }
            },
            {
                id: 'Girl2',
                symbolName: 'full_girl2',
                autoPlay: {

                }
            },
            {
                id: 'my_hand1',
                symbolName: 'my_handsym2',
                autoPlay: {

                }
            },
            {
                id: 'girl2',
                symbolName: 'girl22',
                autoPlay: {

                }
            },
            {
                id: 'Search_anim_1',
                symbolName: 'Search_anim',
                autoPlay: {

                }
            },
            {
                id: 'next_sym2',
                symbolName: 'next_sym2',
                autoPlay: {

                }
            },
            {
                id: 'girl1',
                symbolName: 'girl11',
                autoPlay: {

                }
            },
            {
                id: 'MyTrigger1',
                symbolName: 'mytrigger1',
                autoPlay: {

                }
            },
            {
                id: 'wardreobe_sym',
                symbolName: 'wardreobe_sym',
                autoPlay: {

                }
            },
            {
                id: 'gril_2',
                symbolName: 'gril_2',
                autoPlay: {

                }
            },
            {
                id: 'more_sym4',
                symbolName: 'more_sym',
                autoPlay: {

                }
            },
            {
                id: 'play_sym',
                symbolName: 'startbtn',
                autoPlay: {

                }
            },
            {
                id: 'carpet_sym',
                symbolName: 'carpet_sym',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_G2_div6}": [
                ["style", "top", '33.83%'],
                ["style", "left", '41.63%'],
                ["style", "border-width", '0px']
            ],
            "${_G1_div9}": [
                ["style", "border-width", '0px']
            ],
            "${_dress2}": [
                ["style", "top", '58.83%'],
                ["style", "height", '22.67%'],
                ["style", "display", 'block'],
                ["style", "left", '25.87%'],
                ["style", "width", '48.5%']
            ],
            "${_d2_two2}": [
                ["style", "top", '12.33%'],
                ["style", "height", '26%'],
                ["style", "display", 'block'],
                ["style", "left", '93%'],
                ["style", "width", '9.38%']
            ],
            "${_s_fiveCopy}": [
                ["style", "height", '13.61%'],
                ["style", "top", '61.93%'],
                ["style", "left", '52.32%'],
                ["style", "width", '20.04%']
            ],
            "${_Girl2_Wardrobe}": [
                ["style", "display", 'block'],
                ["style", "top", '0%']
            ],
            "${_G2_div8}": [
                ["style", "top", '33.83%'],
                ["style", "left", '41.63%'],
                ["style", "border-width", '0px']
            ],
            "${_jwel_five2}": [
                ["style", "display", 'block'],
                ["style", "top", '31.67%'],
                ["style", "left", '57.13%'],
                ["transform", "rotateZ", '-5deg']
            ],
            "${_j_one2}": [
                ["style", "top", '12.5%'],
                ["style", "height", '5.4%'],
                ["style", "left", '31.87%'],
                ["style", "width", '4.8%']
            ],
            "${_j_four}": [
                ["style", "height", '5.4%'],
                ["style", "top", '28.17%'],
                ["style", "left", '31.37%'],
                ["style", "width", '4.8%']
            ],
            "${_progressbarnew}": [
                ["style", "display", 'none'],
                ["style", "top", '27.33%'],
                ["style", "left", '4.25%'],
                ["style", "overflow", 'hidden']
            ],
            "${_d_five2}": [
                ["style", "top", '14.17%'],
                ["style", "height", '27.98%'],
                ["style", "left", '17.63%'],
                ["style", "width", '5.25%']
            ],
            "${_div1}": [
                ["style", "top", '6.17%'],
                ["style", "left", '50%'],
                ["style", "height", '21.67%'],
                ["color", "border-color", 'rgb(37, 170, 0)'],
                ["style", "border-width", '0px'],
                ["style", "width", '17.13%']
            ],
            "${_j2_five}": [
                ["style", "height", '5.5%'],
                ["style", "top", '27.83%'],
                ["style", "left", '65.5%'],
                ["style", "width", '5%']
            ],
            "${_j_fourCopy}": [
                ["style", "top", '27.33%'],
                ["style", "height", '6.42%'],
                ["style", "left", '86.78%'],
                ["style", "width", '12.72%']
            ],
            "${_s2_twoCopy}": [
                ["style", "height", '9.77%'],
                ["style", "top", '80.89%'],
                ["style", "left", '66.72%'],
                ["style", "width", '18.47%']
            ],
            "${_d2_three}": [
                ["style", "left", '84%'],
                ["style", "top", '3%']
            ],
            "${_j_two}": [
                ["style", "height", '5.33%'],
                ["style", "top", '17.83%'],
                ["style", "left", '31.5%'],
                ["style", "width", '4.8%']
            ],
            "${_girl2_dresup}": [
                ["style", "top", '18.41%'],
                ["transform", "scaleY", '0.96203'],
                ["transform", "scaleX", '0.90322'],
                ["style", "left", '26.38%'],
                ["style", "display", 'block']
            ],
            "${_bg}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "height", '100%']
            ],
            "${_d2_four2}": [
                ["style", "top", '13.17%'],
                ["style", "height", '27.67%'],
                ["style", "display", 'block'],
                ["style", "left", '84.75%'],
                ["style", "width", '8.01%']
            ],
            "${_div20}": [
                ["style", "top", '1.17%'],
                ["style", "display", 'block'],
                ["style", "height", '26.67%'],
                ["style", "left", '32.5%'],
                ["style", "border-width", '0px'],
                ["style", "width", '23.5%']
            ],
            "${_j_threeCopy}": [
                ["style", "top", '21.98%'],
                ["style", "height", '6.42%'],
                ["style", "left", '87.24%'],
                ["style", "width", '12.39%']
            ],
            "${_G1_div14}": [
                ["style", "border-width", '0px']
            ],
            "${_div5}": [
                ["style", "top", '69.17%'],
                ["style", "height", '30%'],
                ["style", "display", 'block'],
                ["style", "left", '17.75%'],
                ["style", "border-width", '0px'],
                ["style", "width", '21.63%']
            ],
            "${_girl2}": [
                ["style", "top", '10.17%'],
                ["transform", "scaleY", '0.89494'],
                ["style", "left", '29.5%']
            ],
            "${_s2_two2}": [
                ["style", "top", '66.83%'],
                ["style", "height", '6.33%'],
                ["style", "display", 'block'],
                ["style", "left", '89%'],
                ["style", "width", '6.75%']
            ],
            "${_d_two}": [
                ["style", "left", '-0.12%'],
                ["style", "top", '3.83%']
            ],
            "${_s_two2}": [
                ["style", "top", '66%'],
                ["style", "height", '6.98%'],
                ["style", "left", '5.63%'],
                ["style", "width", '5.88%']
            ],
            "${_jw_two1}": [
                ["style", "left", '39.88%'],
                ["style", "top", '33.33%']
            ],
            "${_dress_six2}": [
                ["style", "left", '46.5%'],
                ["style", "top", '35.17%']
            ],
            "${_my_hand2}": [
                ["style", "top", '50.14%'],
                ["style", "left", '63.38%'],
                ["style", "display", 'none']
            ],
            "${_d_fourCopy}": [
                ["style", "height", '60.98%'],
                ["style", "top", '0.81%'],
                ["style", "left", '35.31%'],
                ["style", "width", '29.15%']
            ],
            "${_jwel_two2}": [
                ["style", "top", '31%'],
                ["style", "left", '57.5%'],
                ["style", "display", 'block']
            ],
            "${_s2_four}": [
                ["style", "height", '7.33%'],
                ["style", "top", '57.17%'],
                ["style", "left", '80.5%'],
                ["style", "width", '6.75%']
            ],
            "${_j2_two}": [
                ["style", "height", '5%'],
                ["style", "top", '17.5%'],
                ["style", "left", '65.38%'],
                ["style", "width", '5.38%']
            ],
            "${_carpet}": [
                ["style", "left", '17.38%'],
                ["style", "top", '83.86%']
            ],
            "${_d_six2}": [
                ["style", "top", '14.67%'],
                ["style", "height", '25.17%'],
                ["style", "left", '10.25%'],
                ["style", "width", '7.13%']
            ],
            "${_hair24}": [
                ["style", "top", '16.67%'],
                ["style", "height", '27%'],
                ["style", "left", '53.5%'],
                ["style", "width", '12.63%']
            ],
            "${_div27}": [
                ["style", "top", '78.17%'],
                ["style", "display", 'block'],
                ["style", "height", '23.5%'],
                ["style", "left", '52.66%'],
                ["style", "border-width", '0px'],
                ["style", "width", '18.25%']
            ],
            "${_j2_one2}": [
                ["style", "top", '13.5%'],
                ["style", "height", '3.83%'],
                ["style", "display", 'block'],
                ["style", "left", '65.5%'],
                ["style", "width", '4.75%']
            ],
            "${_s_oneCopy}": [
                ["style", "height", '10.13%'],
                ["style", "top", '89.84%'],
                ["style", "left", '9.22%'],
                ["style", "width", '16.96%']
            ],
            "${_div31}": [
                ["style", "top", '1.17%'],
                ["style", "display", 'block'],
                ["style", "height", '28.65%'],
                ["style", "border-width", '0px'],
                ["style", "left", '2.63%'],
                ["style", "width", '20.38%']
            ],
            "${_Rectangle}": [
                ["style", "top", '62.17%'],
                ["style", "left", '72.5%'],
                ["style", "height", '36.63%'],
                ["color", "border-color", 'rgb(248, 0, 0)'],
                ["style", "border-width", '0px'],
                ["style", "width", '26.79%']
            ],
            "${_div21}": [
                ["style", "top", '43.33%'],
                ["style", "display", 'block'],
                ["style", "height", '26.33%'],
                ["style", "border-width", '0px'],
                ["style", "left", '11.97%'],
                ["style", "width", '23.76%']
            ],
            "${_s_five}": [
                ["style", "top", '52%'],
                ["transform", "scaleY", '0.85753'],
                ["transform", "scaleX", '0.72548'],
                ["style", "height", '8.86%'],
                ["style", "left", '15.13%'],
                ["style", "width", '8.14%']
            ],
            "${_my_hand3}": [
                ["style", "top", '50.33%'],
                ["style", "left", '63.25%'],
                ["style", "display", 'none']
            ],
            "${_G1_div11}": [
                ["style", "border-width", '0px']
            ],
            "${_two_screen}": [
                ["style", "display", 'none']
            ],
            "${_my_hand1}": [
                ["style", "left", '63.25%'],
                ["style", "top", '50.14%']
            ],
            "${_div8}": [
                ["style", "top", '1.17%'],
                ["style", "display", 'block'],
                ["style", "height", '26.67%'],
                ["style", "border-width", '0px'],
                ["style", "left", '32.5%'],
                ["style", "width", '22.51%']
            ],
            "${_G2_div16}": [
                ["style", "top", '33.83%'],
                ["style", "left", '41.63%'],
                ["style", "border-width", '0px']
            ],
            "${_Shoe_Drop1}": [
                ["style", "height", '33%'],
                ["style", "left", '0.12%'],
                ["style", "border-width", '0px'],
                ["style", "width", '25%']
            ],
            "${_j2_four2}": [
                ["style", "top", '32.33%'],
                ["style", "height", '4.83%'],
                ["style", "display", 'block'],
                ["style", "left", '65.5%'],
                ["style", "width", '5.38%']
            ],
            "${_div17}": [
                ["style", "top", '33.17%'],
                ["style", "display", 'block'],
                ["style", "height", '19.33%'],
                ["style", "left", '77%'],
                ["style", "border-width", '0px'],
                ["style", "width", '21.74%']
            ],
            "${_G1_div1}": [
                ["style", "border-width", '0px']
            ],
            "${_div24}": [
                ["style", "top", '1.5%'],
                ["style", "display", 'block'],
                ["style", "height", '33.33%'],
                ["style", "border-width", '0px'],
                ["style", "left", '17.75%'],
                ["style", "width", '23.25%']
            ],
            "${_green_box4}": [
                ["style", "left", '37.75%'],
                ["style", "top", '72.17%']
            ],
            "${_boxC}": [
                ["style", "top", '62%'],
                ["style", "height", '36.5%'],
                ["style", "left", '22.63%'],
                ["style", "width", '55.75%']
            ],
            "${_G1_div4}": [
                ["style", "border-width", '0px']
            ],
            "${_play}": [
                ["style", "height", '7.83%'],
                ["style", "left", '46.38%'],
                ["style", "width", '6%']
            ],
            "${_s2_three2}": [
                ["style", "top", '61.33%'],
                ["style", "height", '7%'],
                ["style", "display", 'block'],
                ["style", "left", '85.37%'],
                ["style", "width", '5.13%']
            ],
            "${_div28}": [
                ["style", "top", '2.17%'],
                ["style", "display", 'block'],
                ["style", "height", '28.83%'],
                ["style", "left", '70.13%'],
                ["style", "border-width", '0px'],
                ["style", "width", '21.88%']
            ],
            "${_G2_div10}": [
                ["style", "top", '33.83%'],
                ["style", "left", '41.63%'],
                ["style", "border-width", '0px']
            ],
            "${_G2_dress_shoes}": [
                ["style", "top", '52.17%'],
                ["transform", "scaleY", '0.96958'],
                ["transform", "scaleX", '0.92296'],
                ["style", "left", '55%'],
                ["style", "-webkit-transform-origin", [31.68,50.78], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [31.68,50.78],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [31.68,50.78],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [31.68,50.78],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [31.68,50.78],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_d_five}": [
                ["style", "left", '12%'],
                ["style", "top", '10%']
            ],
            "${_greenbar2}": [
                ["color", "background-color", 'rgba(0,225,70,1)'],
                ["style", "top", 'auto'],
                ["style", "bottom", '-0.96%'],
                ["style", "height", '96.81%'],
                ["style", "right", 'auto'],
                ["style", "left", '-1.86%'],
                ["style", "width", '81.14%']
            ],
            "${_s_four}": [
                ["style", "top", '54.33%'],
                ["transform", "scaleY", '0.68334'],
                ["transform", "scaleX", '0.84833'],
                ["style", "height", '11.85%'],
                ["style", "left", '12.5%'],
                ["style", "width", '8.14%']
            ],
            "${_s_one2}": [
                ["style", "top", '72.5%'],
                ["style", "height", '8%'],
                ["style", "left", '0.13%'],
                ["style", "width", '6.88%']
            ],
            "${_d2_sixCopy}": [
                ["style", "left", '19.16%'],
                ["style", "top", '7.86%']
            ],
            "${_G1_div12}": [
                ["style", "border-width", '0px']
            ],
            "${_j2_three}": [
                ["style", "height", '5%'],
                ["style", "top", '22.5%'],
                ["style", "left", '65.13%'],
                ["style", "width", '5.38%']
            ],
            "${_lower1}": [
                ["style", "left", '57.5%'],
                ["style", "top", '68.83%']
            ],
            "${_jw_one1}": [
                ["style", "top", '34%'],
                ["style", "left", '39.88%'],
                ["transform", "scaleX", '1.20859']
            ],
            "${_Girl2_Dressup2}": [
                ["style", "display", 'none'],
                ["style", "top", '0%']
            ],
            "${_next_sym}": [
                ["style", "top", '87.33%'],
                ["style", "height", '13.17%'],
                ["style", "left", '85.25%'],
                ["style", "width", '9.76%']
            ],
            "${_d_six}": [
                ["style", "left", '5%'],
                ["style", "top", '6%']
            ],
            "${_green_box2}": [
                ["style", "top", '77.5%'],
                ["transform", "scaleY", '1.2'],
                ["style", "left", '58.5%'],
                ["transform", "scaleX", '1.0606']
            ],
            "${_jw_three1}": [
                ["style", "top", '33.17%'],
                ["style", "left", '39.75%']
            ],
            "${_Next_Screen}": [
                ["style", "display", 'none']
            ],
            "${_div22}": [
                ["style", "top", '1.17%'],
                ["style", "display", 'block'],
                ["style", "height", '32%'],
                ["style", "border-width", '0px'],
                ["style", "left", '65%'],
                ["style", "width", '27%']
            ],
            "${_start_screen}": [
                ["style", "left", '0%'],
                ["style", "top", '0%']
            ],
            "${_d_three2}": [
                ["style", "top", '20%'],
                ["style", "height", '32.17%'],
                ["style", "left", '20.37%'],
                ["style", "width", '8.26%']
            ],
            "${_j2_four}": [
                ["style", "height", '4.83%'],
                ["style", "top", '32.33%'],
                ["style", "left", '65.5%'],
                ["style", "width", '5.38%']
            ],
            "${_j2_fourCopy}": [
                ["style", "height", '6.1%'],
                ["style", "top", '37.79%'],
                ["style", "left", '0.35%'],
                ["style", "width", '15.17%']
            ],
            "${_jewellary_frame}": [
                ["style", "top", '83.86%'],
                ["style", "left", '50.87%']
            ],
            "${_j_five}": [
                ["style", "height", '5.4%'],
                ["style", "top", '33%'],
                ["style", "left", '31.25%'],
                ["style", "width", '4.8%']
            ],
            "${_green_box3}": [
                ["style", "left", '35.63%'],
                ["style", "top", '64.33%']
            ],
            "${_girl2_body}": [
                ["style", "top", '18.5%'],
                ["style", "height", '75.67%'],
                ["style", "left", '49.38%'],
                ["style", "width", '16.75%']
            ],
            "${_div18}": [
                ["style", "top", '1.17%'],
                ["style", "display", 'block'],
                ["style", "height", '26.17%'],
                ["style", "left", '2.63%'],
                ["style", "border-width", '0px'],
                ["style", "width", '24.26%']
            ],
            "${_div7}": [
                ["style", "top", '67.33%'],
                ["style", "display", 'block'],
                ["style", "height", '31.17%'],
                ["style", "left", '17%'],
                ["style", "border-width", '0px'],
                ["style", "width", '22.18%']
            ],
            "${_G1_div7}": [
                ["style", "border-width", '0px']
            ],
            "${_border}": [
                ["style", "top", '5.23%'],
                ["style", "left", '15.62%'],
                ["style", "height", '94.8%']
            ],
            "${_dress3}": [
                ["style", "height", '19.67%'],
                ["style", "display", 'block'],
                ["style", "left", '28.63%'],
                ["style", "top", '53.33%']
            ],
            "${_pause}": [
                ["style", "height", '8.33%'],
                ["style", "top", '91%'],
                ["style", "left", '46.25%'],
                ["style", "width", '6.25%']
            ],
            "${_G2_div14}": [
                ["style", "top", '33.83%'],
                ["style", "left", '41.63%'],
                ["style", "border-width", '0px']
            ],
            "${_s2_fiveCopy}": [
                ["style", "height", '8.7%'],
                ["style", "top", '64.54%'],
                ["style", "left", '31.01%'],
                ["style", "width", '18.12%']
            ],
            "${_s2_two}": [
                ["style", "height", '7.67%'],
                ["style", "top", '66.17%'],
                ["style", "left", '89%'],
                ["style", "width", '6.75%']
            ],
            "${_g2}": [
                ["style", "top", '8%'],
                ["transform", "scaleY", '0.89494'],
                ["style", "left", '18.38%']
            ],
            "${_div4}": [
                ["style", "top", '2.17%'],
                ["style", "display", 'block'],
                ["style", "height", '26.67%'],
                ["style", "left", '19.87%'],
                ["style", "border-width", '0px'],
                ["style", "width", '18.45%']
            ],
            "${_G2_dress}": [
                ["style", "display", 'block']
            ],
            "${_div30}": [
                ["style", "top", '19.17%'],
                ["style", "display", 'block'],
                ["style", "height", '35.83%'],
                ["style", "border-width", '0px'],
                ["style", "left", '73.75%'],
                ["style", "width", '24.38%']
            ],
            "${_s2_threeCopy}": [
                ["style", "height", '9.98%'],
                ["style", "top", '75.15%'],
                ["style", "left", '54.36%'],
                ["style", "width", '20.56%']
            ],
            "${_star}": [
                ["style", "top", '24.33%'],
                ["transform", "scaleY", '1.09412'],
                ["style", "left", '51.47%'],
                ["transform", "scaleX", '0.69122']
            ],
            "${_hand_sym}": [
                ["style", "left", '62.5%'],
                ["style", "top", '41.17%']
            ],
            "${_div6}": [
                ["style", "top", '1.17%'],
                ["style", "display", 'block'],
                ["style", "height", '36.67%'],
                ["style", "border-width", '0px'],
                ["style", "left", '2.63%'],
                ["style", "width", '24.26%']
            ],
            "${_image_top}": [
                ["style", "height", '14.5%'],
                ["style", "top", '61.5%'],
                ["style", "left", '75.63%'],
                ["style", "width", '23.88%']
            ],
            "${_j2_threeCopy}": [
                ["style", "height", '6.49%'],
                ["style", "top", '25.05%'],
                ["style", "left", '-0.7%'],
                ["style", "width", '15.17%']
            ],
            "${_d_sixCopy}": [
                ["style", "height", '53.05%'],
                ["style", "top", '8.94%'],
                ["style", "left", '39.93%'],
                ["style", "width", '43.99%']
            ],
            "${_G1_div3}": [
                ["style", "border-width", '0px']
            ],
            "${_jwel_one2}": [
                ["style", "top", '31.17%'],
                ["style", "left", '57.25%'],
                ["style", "display", 'block']
            ],
            "${_greebox}": [
                ["style", "top", '65.04%'],
                ["style", "left", '74.5%'],
                ["style", "width", '26.97%']
            ],
            "${_d_four2}": [
                ["style", "top", '11.34%'],
                ["style", "height", '30.67%'],
                ["style", "left", '13.63%'],
                ["style", "width", '5.76%']
            ],
            "${_G1_div8}": [
                ["style", "border-width", '0px']
            ],
            "${_G1_div10}": [
                ["style", "border-width", '0px']
            ],
            "${_div13}": [
                ["style", "top", '69.5%'],
                ["style", "display", 'block'],
                ["style", "height", '28.83%'],
                ["style", "border-width", '0px'],
                ["style", "left", '16.13%'],
                ["style", "width", '22.25%']
            ],
            "${_shoe_four2}": [
                ["style", "top", '85.83%'],
                ["transform", "scaleY", '0.96492'],
                ["transform", "scaleX", '0.89705'],
                ["style", "left", '54.87%'],
                ["style", "display", 'none']
            ],
            "${_s_three2}": [
                ["style", "top", '61.67%'],
                ["style", "height", '7.1%'],
                ["style", "left", '10.25%'],
                ["style", "width", '4.75%']
            ],
            "${_redbar}": [
                ["color", "background-color", 'rgba(249,0,0,1)'],
                ["style", "height", '97.07%'],
                ["style", "top", '-0.08%'],
                ["style", "left", '-0.43%'],
                ["style", "width", '81.12%']
            ],
            "${_Shoe_Drop_2}": [
                ["style", "top", '49.63%'],
                ["style", "left", '73.37%'],
                ["style", "height", '36.67%'],
                ["color", "border-color", 'rgb(255, 0, 0)'],
                ["style", "border-width", '0px'],
                ["style", "width", '33.5%']
            ],
            "${_j_fiveCopy}": [
                ["style", "top", '32.31%'],
                ["style", "height", '6.42%'],
                ["style", "left", '86.33%'],
                ["style", "width", '12.72%']
            ],
            "${_div26}": [
                ["style", "top", '1.17%'],
                ["style", "display", 'block'],
                ["style", "height", '33%'],
                ["style", "border-width", '0px'],
                ["style", "left", '48.13%'],
                ["style", "width", '23.13%']
            ],
            "${_Girl1}": [
                ["style", "left", '50.75%']
            ],
            "${_d2_five2}": [
                ["style", "top", '14%'],
                ["style", "height", '26.83%'],
                ["style", "display", 'block'],
                ["style", "left", '80.5%'],
                ["style", "width", '7.88%']
            ],
            "${_div32}": [
                ["style", "top", '65.5%'],
                ["style", "display", 'block'],
                ["style", "height", '31.17%'],
                ["style", "left", '18%'],
                ["style", "border-width", '0px'],
                ["style", "width", '20.38%']
            ],
            "${_dress_two2}": [
                ["style", "top", '29.67%'],
                ["style", "left", '45.63%'],
                ["style", "display", 'none']
            ],
            "${_div10}": [
                ["style", "top", '1.17%'],
                ["style", "display", 'block'],
                ["style", "height", '32.05%'],
                ["style", "left", '68.5%'],
                ["style", "border-width", '0px'],
                ["style", "width", '23.51%']
            ],
            "${_MyTrigger1}": [
                ["transform", "scaleX", '0.49529'],
                ["style", "top", '92.04%'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '93.18%']
            ],
            "${_bg2}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "width", '100%']
            ],
            "${_G2_div11}": [
                ["style", "top", '33.83%'],
                ["style", "left", '41.63%'],
                ["style", "border-width", '0px']
            ],
            "${_jw_five1}": [
                ["style", "top", '32.33%'],
                ["transform", "scaleY", '0.61702'],
                ["style", "left", '39.38%'],
                ["transform", "scaleX", '0.7551']
            ],
            "${_MyTrigger22}": [
                ["style", "left", '89.6%'],
                ["style", "top", '91.97%']
            ],
            "${_s2_five}": [
                ["style", "height", '6.91%'],
                ["style", "top", '53.33%'],
                ["style", "left", '76.38%'],
                ["style", "width", '6.5%']
            ],
            "${_dress1}": [
                ["style", "left", '38.75%'],
                ["style", "top", '77.5%']
            ],
            "${_Dress_Drop1}": [
                ["style", "border-width", '0px'],
                ["style", "left", '0.12%'],
                ["style", "width", '25.5%']
            ],
            "${_green_box}": [
                ["style", "left", '55.63%'],
                ["style", "top", '64.33%']
            ],
            "${_dress_one2}": [
                ["style", "top", '30.5%'],
                ["style", "left", '50.63%'],
                ["style", "display", 'none']
            ],
            "${_j_three2}": [
                ["style", "top", '23.17%'],
                ["style", "height", '5.4%'],
                ["style", "left", '31.75%'],
                ["style", "width", '4.8%']
            ],
            "${_Last_page}": [
                ["style", "display", 'none']
            ],
            "${_s2_one2}": [
                ["style", "top", '70.67%'],
                ["style", "height", '8%'],
                ["style", "display", 'block'],
                ["style", "left", '94%'],
                ["style", "width", '6%']
            ],
            "${_j_twoCopy}": [
                ["style", "top", '15.59%'],
                ["style", "height", '6.55%'],
                ["style", "left", '86.78%'],
                ["style", "width", '12.72%']
            ],
            "${_s2_one}": [
                ["style", "height", '9.33%'],
                ["style", "top", '70.67%'],
                ["style", "left", '92.88%'],
                ["style", "width", '7.13%']
            ],
            "${_s2_fourCopy}": [
                ["style", "height", '9.13%'],
                ["style", "top", '69.64%'],
                ["style", "left", '42.51%'],
                ["style", "width", '18.82%']
            ],
            "${_play_sym}": [
                ["style", "top", '44.83%'],
                ["transform", "scaleY", '0.54518'],
                ["style", "left", '34.72%'],
                ["transform", "scaleX", '0.51847']
            ],
            "${_eye3}": [
                ["style", "top", '23.33%']
            ],
            "${_dress_three2}": [
                ["style", "top", '30.83%'],
                ["style", "left", '48.63%'],
                ["style", "display", 'none']
            ],
            "${_next_sym3}": [
                ["style", "top", '86.67%'],
                ["style", "display", 'block'],
                ["style", "height", '13.67%'],
                ["style", "left", '84.75%'],
                ["style", "width", '10.38%']
            ],
            "${_Group}": [
                ["style", "display", 'block']
            ],
            "${_d2_six}": [
                ["style", "left", '73.25%'],
                ["style", "top", '8.83%']
            ],
            "${_G2_div15}": [
                ["style", "top", '33.83%'],
                ["style", "left", '41.63%'],
                ["style", "border-width", '0px']
            ],
            "${_G2_div12}": [
                ["style", "top", '33.83%'],
                ["style", "left", '41.63%'],
                ["style", "border-width", '0px']
            ],
            "${_dress_drop2}": [
                ["style", "height", '51.83%'],
                ["style", "top", '0%'],
                ["style", "border-width", '0px'],
                ["style", "width", '40%']
            ],
            "${_G2_div2}": [
                ["style", "top", '33.83%'],
                ["style", "left", '41.63%'],
                ["style", "border-width", '0px']
            ],
            "${_greenbar}": [
                ["style", "top", '12.29%'],
                ["style", "left", '18.75%'],
                ["transform", "scaleY", '1.1705']
            ],
            "${_j2_fiveCopy}": [
                ["style", "height", '7.07%'],
                ["style", "top", '32.06%'],
                ["style", "left", '0.7%'],
                ["style", "width", '13.94%']
            ],
            "${_div19}": [
                ["style", "top", '64.5%'],
                ["style", "display", 'block'],
                ["style", "height", '33.83%'],
                ["style", "border-width", '0px'],
                ["style", "left", '19.87%'],
                ["style", "width", '22.63%']
            ],
            "${_s_two}": [
                ["style", "top", '64%'],
                ["transform", "scaleY", '0.86127'],
                ["style", "height", '11.22%'],
                ["style", "left", '4.13%'],
                ["style", "width", '7.41%']
            ],
            "${_s2_three}": [
                ["style", "height", '7.83%'],
                ["style", "top", '61.66%'],
                ["style", "left", '84.75%'],
                ["style", "width", '7.38%']
            ],
            "${_shoe_one2}": [
                ["style", "top", '85.67%'],
                ["transform", "scaleY", '0.91228'],
                ["transform", "scaleX", '0.93406'],
                ["style", "left", '54.75%'],
                ["style", "display", 'none']
            ],
            "${_d_three}": [
                ["style", "left", '14%'],
                ["style", "top", '11.33%']
            ],
            "${_d2_oneCopy}": [
                ["style", "top", '10.19%'],
                ["style", "left", '15.68%'],
                ["transform", "skewY", '0deg']
            ],
            "${_div11}": [
                ["style", "top", '19.5%'],
                ["style", "display", 'block'],
                ["style", "height", '28.5%'],
                ["style", "border-width", '0px'],
                ["style", "left", '75.63%'],
                ["style", "width", '23.25%']
            ],
            "${_G1_div6}": [
                ["style", "border-width", '0px']
            ],
            "${_jwel_three2}": [
                ["style", "top", '30.67%'],
                ["style", "left", '57.25%'],
                ["style", "display", 'block']
            ],
            "${_image_bottom}": [
                ["style", "left", '78.63%'],
                ["style", "top", '77.5%']
            ],
            "${_j_five2}": [
                ["style", "top", '32.5%'],
                ["style", "height", '5.4%'],
                ["style", "left", '31%'],
                ["style", "width", '4.8%']
            ],
            "${_G1_div2}": [
                ["style", "border-width", '0px']
            ],
            "${_G2_div5}": [
                ["style", "top", '33.83%'],
                ["style", "left", '41.63%'],
                ["style", "border-width", '0px']
            ],
            "${_div25}": [
                ["style", "top", '42.83%'],
                ["style", "display", 'block'],
                ["style", "height", '29%'],
                ["style", "left", '13.37%'],
                ["style", "border-width", '0px'],
                ["style", "width", '25.04%']
            ],
            "${_Girl1_Dressup1}": [
                ["style", "display", 'none'],
                ["style", "height", '100%']
            ],
            "${_Jwe_Drop1}": [
                ["style", "top", '2.16%'],
                ["style", "border-width", '0px'],
                ["style", "height", '38.67%']
            ],
            "${_d2_four}": [
                ["style", "left", '80.88%'],
                ["style", "top", '5.5%']
            ],
            "${_more_sym4}": [
                ["style", "top", '35.23%'],
                ["style", "left", '63.32%'],
                ["transform", "scaleY", '0.16675'],
                ["transform", "scaleX", '0.47324']
            ],
            "${_G1_div5}": [
                ["style", "border-width", '0px']
            ],
            "${_j_three}": [
                ["style", "height", '5.4%'],
                ["style", "top", '23.17%'],
                ["style", "left", '31.62%'],
                ["style", "width", '4.8%']
            ],
            "${_upper1}": [
                ["style", "left", '56.88%'],
                ["style", "top", '63.5%']
            ],
            "${_d_one}": [
                ["style", "left", '-7.25%'],
                ["style", "top", '1%']
            ],
            "${_wardrobe}": [
                ["style", "left", '67.38%'],
                ["style", "top", '83.86%']
            ],
            "${_wardrobe_set}": [
                ["style", "display", 'block']
            ],
            "${_j2_twoCopy}": [
                ["style", "height", '6.49%'],
                ["style", "top", '18.68%'],
                ["style", "left", '0%'],
                ["style", "width", '15.17%']
            ],
            "${_girl1_dresup}": [
                ["style", "top", '16.5%'],
                ["transform", "scaleY", '0.96628'],
                ["transform", "scaleX", '0.9233'],
                ["style", "left", '48.28%'],
                ["style", "display", 'block']
            ],
            "${_d2_one}": [
                ["style", "left", '71%'],
                ["style", "top", '11%']
            ],
            "${_G2_dress_7}": [
                ["style", "top", '35.17%'],
                ["style", "height", '36.17%'],
                ["style", "left", '49%'],
                ["style", "width", '22.75%']
            ],
            "${_div29}": [
                ["style", "top", '2.17%'],
                ["style", "display", 'block'],
                ["style", "height", '36.5%'],
                ["style", "border-width", '0px'],
                ["style", "left", '60.25%'],
                ["style", "width", '25.04%']
            ],
            "${_d2_one2}": [
                ["style", "top", '18.17%'],
                ["style", "display", 'block'],
                ["style", "height", '35.67%'],
                ["style", "opacity", '0'],
                ["style", "left", '72.63%'],
                ["style", "width", '6.75%']
            ],
            "${_d2_fiveCopy}": [
                ["style", "left", '37.63%'],
                ["style", "top", '5.94%']
            ],
            "${_j2_three2}": [
                ["style", "top", '22.5%'],
                ["style", "height", '5%'],
                ["style", "display", 'block'],
                ["style", "left", '65.13%'],
                ["style", "width", '5.38%']
            ],
            "${_G2_div3}": [
                ["style", "top", '33.83%'],
                ["style", "left", '41.63%'],
                ["style", "border-width", '0px']
            ],
            "${_s_one}": [
                ["style", "top", '71%'],
                ["transform", "scaleY", '0.99429'],
                ["transform", "scaleX", '0.82456'],
                ["style", "height", '9.12%'],
                ["style", "left", '-1.12%'],
                ["style", "width", '8.37%']
            ],
            "${_shoe_five2}": [
                ["style", "top", '85.67%'],
                ["transform", "scaleY", '0.90476'],
                ["transform", "scaleX", '0.86812'],
                ["style", "left", '54.75%'],
                ["style", "display", 'none']
            ],
            "${_jew_frame_sym}": [
                ["style", "top", '-0.33%'],
                ["transform", "scaleY", '1.03667'],
                ["style", "left", '24.88%']
            ],
            "${_div3}": [
                ["style", "top", '14.5%'],
                ["style", "display", 'block'],
                ["style", "height", '22.5%'],
                ["style", "left", '70.25%'],
                ["style", "border-width", '0px'],
                ["style", "width", '10.75%']
            ],
            "${_s2_oneCopy}": [
                ["style", "height", '11.89%'],
                ["style", "top", '86.63%'],
                ["style", "left", '77%'],
                ["style", "width", '19.87%']
            ],
            "${_g1}": [
                ["style", "top", '9.17%'],
                ["transform", "scaleY", '0.89494'],
                ["style", "left", '43.63%']
            ],
            "${_s2_four2}": [
                ["style", "top", '57.83%'],
                ["style", "height", '5.83%'],
                ["style", "display", 'block'],
                ["style", "left", '81%'],
                ["style", "width", '6.26%']
            ],
            "${_j2_one}": [
                ["style", "top", '12.67%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '4.83%'],
                ["style", "left", '65.5%'],
                ["style", "width", '4.75%']
            ],
            "${_j_oneCopy}": [
                ["style", "top", '9.58%'],
                ["style", "height", '6.42%'],
                ["style", "left", '87.36%'],
                ["style", "width", '12.72%']
            ],
            "${_s_five2}": [
                ["style", "height", '7%'],
                ["style", "top", '53.83%'],
                ["style", "left", '18%'],
                ["style", "width", '5.13%']
            ],
            "${_hand_dresup}": [
                ["style", "left", '13.58%'],
                ["style", "top", '35.5%']
            ],
            "${_G1_div13}": [
                ["style", "border-width", '0px']
            ],
            "${_jw_four1}": [
                ["style", "left", '39.63%'],
                ["style", "top", '33.5%']
            ],
            "${_d2_three2}": [
                ["style", "top", '11.84%'],
                ["style", "height", '25.83%'],
                ["style", "display", 'block'],
                ["style", "left", '88.5%'],
                ["style", "width", '7.38%']
            ],
            "${_div16}": [
                ["style", "top", '2.17%'],
                ["style", "display", 'block'],
                ["style", "height", '44.33%'],
                ["style", "border-width", '0px'],
                ["style", "left", '70.13%'],
                ["style", "width", '27%']
            ],
            "${_d2_fourCopy}": [
                ["style", "left", '43.21%'],
                ["style", "top", '3.4%']
            ],
            "${_d_oneCopy}": [
                ["style", "height", '54.76%'],
                ["style", "top", '-0.08%'],
                ["style", "left", '-1.32%'],
                ["style", "width", '38.36%']
            ],
            "${_d_threeCopy}": [
                ["style", "height", '57.07%'],
                ["style", "top", '2.64%'],
                ["style", "left", '16.17%'],
                ["style", "width", '42.7%']
            ],
            "${_d_four}": [
                ["style", "left", '9.25%'],
                ["style", "top", '7.67%']
            ],
            "${_div14}": [
                ["style", "top", '1.17%'],
                ["style", "display", 'block'],
                ["style", "height", '24.83%'],
                ["style", "left", '48.13%'],
                ["style", "border-width", '0px'],
                ["style", "width", '24.38%']
            ],
            "${_girl1}": [
                ["style", "top", '11.5%'],
                ["transform", "scaleY", '0.89494'],
                ["style", "left", '54.5%']
            ],
            "${_shoe_two2}": [
                ["style", "top", '86%'],
                ["transform", "scaleY", '0.93334'],
                ["transform", "scaleX", '0.90361'],
                ["style", "left", '54.88%'],
                ["style", "display", 'none']
            ],
            "${_s_twoCopy}": [
                ["style", "height", '12.74%'],
                ["style", "top", '80.88%'],
                ["style", "left", '18.33%'],
                ["style", "width", '19.61%']
            ],
            "${_d2_threeCopy}": [
                ["style", "left", '52.26%'],
                ["style", "top", '0.42%']
            ],
            "${_shoe_three2}": [
                ["style", "top", '86.33%'],
                ["transform", "scaleY", '0.76666'],
                ["transform", "scaleX", '0.93406'],
                ["style", "left", '54.75%'],
                ["style", "display", 'none']
            ],
            "${_G2_div7}": [
                ["style", "top", '33.83%'],
                ["style", "left", '41.63%'],
                ["style", "border-width", '0px']
            ],
            "${_jwel_four2}": [
                ["style", "top", '31.17%'],
                ["style", "left", '57%'],
                ["style", "display", 'block']
            ],
            "${_Jwe_Drop_2}": [
                ["style", "top", '4.33%'],
                ["style", "height", '39%'],
                ["style", "left", '60.28%'],
                ["style", "border-width", '0px'],
                ["style", "width", '13.88%']
            ],
            "${_bg3}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${_dress_five2}": [
                ["style", "top", '35.5%'],
                ["style", "left", '52%'],
                ["style", "display", 'none']
            ],
            "${_d2_towCopy}": [
                ["style", "left", '57.49%'],
                ["style", "top", '-1.91%']
            ],
            "${_j_four2}": [
                ["style", "top", '27.5%'],
                ["style", "height", '5.4%'],
                ["style", "left", '31.25%'],
                ["style", "width", '4.8%']
            ],
            "${_div2}": [
                ["style", "top", '82.5%'],
                ["style", "display", 'block'],
                ["style", "height", '16.33%'],
                ["style", "left", '32%'],
                ["style", "border-width", '0px'],
                ["style", "width", '16.9%']
            ],
            "${_curtain}": [
                ["style", "left", '32.63%'],
                ["style", "top", '83.86%']
            ],
            "${_div15}": [
                ["style", "top", '71.83%'],
                ["style", "display", 'block'],
                ["style", "height", '25.67%'],
                ["style", "border-width", '0px'],
                ["style", "left", '14.61%'],
                ["style", "width", '20.25%']
            ],
            "${_j_one}": [
                ["style", "height", '5.4%'],
                ["style", "top", '12.67%'],
                ["style", "left", '31.5%'],
                ["style", "width", '4.8%']
            ],
            "${_d_one2}": [
                ["style", "top", '6%'],
                ["style", "height", '37.67%'],
                ["style", "left", '-3%'],
                ["style", "width", '9.63%']
            ],
            "${_Girl1_Wardrobe}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${_j2_oneCopy}": [
                ["style", "height", '5.33%'],
                ["style", "top", '13.59%'],
                ["style", "left", '0.7%'],
                ["style", "width", '12.55%']
            ],
            "${_next_sym1}": [
                ["style", "top", '73.5%'],
                ["style", "left", '42.63%'],
                ["transform", "scaleY", '0.66774'],
                ["transform", "scaleX", '0.66789']
            ],
            "${_G2_div13}": [
                ["style", "top", '33.83%'],
                ["style", "left", '41.63%'],
                ["style", "border-width", '0px']
            ],
            "${_dress_four2}": [
                ["style", "top", '30.17%'],
                ["style", "left", '51.25%'],
                ["style", "display", 'none']
            ],
            "${_j2_five2}": [
                ["style", "top", '27.83%'],
                ["style", "height", '5.36%'],
                ["style", "display", 'block'],
                ["style", "left", '65.5%'],
                ["style", "width", '5%']
            ],
            "${_G2_div9}": [
                ["style", "top", '33.83%'],
                ["style", "left", '41.63%'],
                ["style", "border-width", '0px']
            ],
            "${_dress4}": [
                ["style", "top", '63.5%'],
                ["style", "left", '37.13%'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ],
            "${_G2_div1}": [
                ["style", "top", '33.83%'],
                ["style", "left", '41.63%'],
                ["style", "border-width", '0px']
            ],
            "${_d_fiveCopy}": [
                ["style", "top", '7.11%'],
                ["transform", "rotateZ", '-4deg'],
                ["style", "height", '53.35%'],
                ["style", "left", '38.61%'],
                ["style", "width", '32.96%']
            ],
            "${_G1_div15}": [
                ["style", "border-width", '0px']
            ],
            "${_div9}": [
                ["style", "top", '46.83%'],
                ["style", "display", 'block'],
                ["style", "height", '20.5%'],
                ["style", "left", '11.25%'],
                ["style", "border-width", '0px'],
                ["style", "width", '20.76%']
            ],
            "${_d2_two}": [
                ["style", "top", '1.33%'],
                ["style", "left", '86%']
            ],
            "${_s2_five2}": [
                ["style", "top", '51%'],
                ["style", "height", '8.83%'],
                ["style", "display", 'block'],
                ["style", "left", '76.37%'],
                ["style", "width", '6.75%']
            ],
            "${_d2_five}": [
                ["style", "left", '78.88%'],
                ["style", "top", '7.33%']
            ],
            "${_newpro}": [
                ["style", "top", '22.67%'],
                ["style", "left", '2.5%'],
                ["transform", "scaleY", '0.92029'],
                ["style", "overflow", 'hidden']
            ],
            "${_backgraund}": [
                ["style", "top", '10.11%'],
                ["style", "left", '17.19%'],
                ["transform", "scaleY", '1.12204']
            ],
            "${_brownbox}": [
                ["style", "top", '63.17%'],
                ["transform", "scaleX", '1.0787'],
                ["transform", "scaleY", '0.93593'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '36.5%'],
                ["style", "opacity", '1'],
                ["style", "left", '23.13%'],
                ["style", "width", '53.97%']
            ],
            "${_j_two2}": [
                ["style", "top", '18%'],
                ["style", "height", '5.33%'],
                ["style", "left", '31.87%'],
                ["style", "width", '4.8%']
            ],
            "${_boxdoor}": [
                ["style", "top", '73%'],
                ["style", "left", '77.13%'],
                ["style", "width", '24.38%']
            ],
            "${_d_twoCopy}": [
                ["style", "height", '44.83%'],
                ["style", "top", '2.15%'],
                ["style", "left", '10.89%'],
                ["style", "width", '39.32%']
            ],
            "${_s_fou2}": [
                ["style", "top", '57.5%'],
                ["style", "height", '6.83%'],
                ["style", "opacity", '1'],
                ["style", "left", '12.88%'],
                ["style", "width", '6.5%']
            ],
            "${_j2_two2}": [
                ["style", "top", '17.5%'],
                ["style", "height", '5%'],
                ["style", "display", 'block'],
                ["style", "left", '65.38%'],
                ["style", "width", '5.38%']
            ],
            "${_s_fourCopy}": [
                ["style", "top", '67.44%'],
                ["style", "height", '15.52%'],
                ["style", "left", '42.05%'],
                ["style", "width", '22.37%']
            ],
            "${_s_three}": [
                ["style", "top", '60.5%'],
                ["transform", "scaleY", '0.95085'],
                ["transform", "scaleX", '0.80501'],
                ["style", "height", '9.36%'],
                ["style", "left", '7.88%'],
                ["style", "width", '8.33%']
            ],
            "${_s_threeCopy}": [
                ["style", "height", '11.03%'],
                ["style", "top", '73.29%'],
                ["style", "left", '32.61%'],
                ["style", "width", '16.96%']
            ],
            "${_G1_div16}": [
                ["style", "border-width", '0px']
            ],
            "${_div12}": [
                ["style", "top", '1.5%'],
                ["style", "display", 'block'],
                ["style", "height", '27.33%'],
                ["style", "left", '17.75%'],
                ["style", "border-width", '0px'],
                ["style", "width", '22.75%']
            ],
            "${_G2_div4}": [
                ["style", "top", '33.83%'],
                ["style", "left", '41.63%'],
                ["style", "border-width", '0px']
            ],
            "${_hand_right}": [
                ["style", "top", '42.33%'],
                ["style", "height", '15.17%'],
                ["style", "left", '63.5%'],
                ["style", "width", '7.25%']
            ],
            "${_bg1}": [
                ["style", "top", '0%'],
                ["style", "left", '0%']
            ],
            "${_div23}": [
                ["style", "top", '31%'],
                ["style", "display", 'block'],
                ["style", "height", '26.33%'],
                ["style", "left", '73.38%'],
                ["style", "border-width", '0px'],
                ["style", "width", '18.25%']
            ],
            "${_d2_six2}": [
                ["style", "top", '16%'],
                ["style", "height", '26%'],
                ["style", "display", 'block'],
                ["style", "left", '77.13%'],
                ["style", "width", '7.21%']
            ],
            "${_hand2}": [
                ["style", "top", '34.53%'],
                ["transform", "scaleY", '0.93333'],
                ["style", "display", 'block'],
                ["style", "left", '73.35%'],
                ["transform", "scaleX", '-1.05509']
            ],
            "${_d_two2}": [
                ["style", "top", '8.5%'],
                ["style", "height", '36.67%'],
                ["style", "left", '4.26%'],
                ["style", "width", '7.5%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7333,
            autoPlay: true,
            timeline: [
                { id: "eid11683", tween: [ "style", "${_wardrobe_set}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8467", tween: [ "style", "${_next_sym3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid20447", tween: [ "style", "${_d2_two2}", "top", '12.33%', { fromValue: '12.33%'}], position: 0, duration: 0 },
                { id: "eid20451", tween: [ "style", "${_d2_five2}", "top", '14%', { fromValue: '14%'}], position: 0, duration: 0 },
                { id: "eid20456", tween: [ "style", "${_d2_six2}", "left", '77.13%', { fromValue: '77.13%'}], position: 0, duration: 0 },
                { id: "eid18416", tween: [ "style", "${_next_sym1}", "left", '42.63%', { fromValue: '42.63%'}], position: 0, duration: 0 },
                { id: "eid18192", tween: [ "style", "${_shoe_one2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid18332", tween: [ "style", "${_jwel_five2}", "left", '57.13%', { fromValue: '57.13%'}], position: 0, duration: 0 },
                { id: "eid11682", tween: [ "style", "${_Girl1_Wardrobe}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8464", tween: [ "style", "${_s2_three2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid18299", tween: [ "style", "${_shoe_four2}", "left", '54.87%', { fromValue: '54.87%'}], position: 0, duration: 0 },
                { id: "eid9543", tween: [ "style", "${_jwel_two2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid20458", tween: [ "style", "${_d2_one2}", "width", '6.75%', { fromValue: '6.75%'}], position: 0, duration: 0 },
                { id: "eid18579", tween: [ "style", "${_Girl2_Wardrobe}", "top", '0%', { fromValue: '0%'}], position: 0, duration: 0 },
                { id: "eid20453", tween: [ "style", "${_d2_six2}", "top", '16%', { fromValue: '16%'}], position: 0, duration: 0 },
                { id: "eid18190", tween: [ "style", "${_shoe_three2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid18302", tween: [ "style", "${_shoe_four2}", "top", '85.83%', { fromValue: '85.83%'}], position: 0, duration: 0 },
                { id: "eid8895", tween: [ "style", "${_dress_three2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid8455", tween: [ "style", "${_d2_five2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid20448", tween: [ "style", "${_d2_three2}", "left", '88.5%', { fromValue: '88.5%'}], position: 0, duration: 0 },
                { id: "eid8453", tween: [ "style", "${_d2_three2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8458", tween: [ "style", "${_j2_two2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid20449", tween: [ "style", "${_d2_four2}", "left", '84.75%', { fromValue: '84.75%'}], position: 0, duration: 0 },
                { id: "eid8463", tween: [ "style", "${_s2_two2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8461", tween: [ "style", "${_j2_five2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8452", tween: [ "style", "${_d2_two2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid18414", tween: [ "style", "${_next_sym1}", "top", '73.5%', { fromValue: '73.5%'}], position: 0, duration: 0 },
                { id: "eid20450", tween: [ "style", "${_d2_five2}", "left", '80.5%', { fromValue: '80.5%'}], position: 0, duration: 0 },
                { id: "eid18189", tween: [ "style", "${_shoe_four2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid9542", tween: [ "style", "${_jwel_one2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8451", tween: [ "style", "${_d2_one2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3141", tween: [ "style", "${_bg3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8459", tween: [ "style", "${_j2_three2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid18191", tween: [ "style", "${_shoe_two2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid8462", tween: [ "style", "${_s2_one2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid19800", tween: [ "style", "${_play_sym}", "left", '34.72%', { fromValue: '34.72%'}], position: 0, duration: 0 },
                { id: "eid3142", tween: [ "style", "${_Next_Screen}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid8894", tween: [ "style", "${_dress_four2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid8427", tween: [ "style", "${_hand2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid9901", tween: [ "style", "${_G2_dress}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid20446", tween: [ "style", "${_d2_two2}", "left", '93%', { fromValue: '93%'}], position: 0, duration: 0 },
                { id: "eid18330", tween: [ "style", "${_jwel_four2}", "top", '31.17%', { fromValue: '31.17%'}], position: 0, duration: 0 },
                { id: "eid18333", tween: [ "style", "${_jwel_five2}", "top", '31.67%', { fromValue: '31.67%'}], position: 0, duration: 0 },
                { id: "eid20455", tween: [ "style", "${_d2_six2}", "width", '7.21%', { fromValue: '7.21%'}], position: 0, duration: 0 },
                { id: "eid20", tween: [ "style", "${_two_screen}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid9544", tween: [ "style", "${_jwel_three2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6764", tween: [ "style", "${_my_hand3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid20452", tween: [ "style", "${_d2_four2}", "top", '13.17%', { fromValue: '13.17%'}], position: 0, duration: 0 },
                { id: "eid8426", tween: [ "style", "${_Girl2_Dressup2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid11680", tween: [ "style", "${_Last_page}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid8893", tween: [ "style", "${_dress_five2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid20540", tween: [ "style", "${_d2_one2}", "left", '72.63%', { fromValue: '72.63%'}], position: 0, duration: 0 },
                { id: "eid6935", tween: [ "style", "${_dress4}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid11681", tween: [ "style", "${_Girl2_Wardrobe}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8460", tween: [ "style", "${_j2_four2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid475", tween: [ "style", "${_progressbarnew}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid18323", tween: [ "style", "${_jwel_one2}", "top", '31.17%', { fromValue: '31.17%'}], position: 0, duration: 0 },
                { id: "eid20457", tween: [ "style", "${_d2_one2}", "top", '18.17%', { fromValue: '18.17%'}], position: 0, duration: 0 },
                { id: "eid18327", tween: [ "style", "${_jwel_two2}", "left", '57.5%', { fromValue: '57.5%'}], position: 0, duration: 0 },
                { id: "eid6278", tween: [ "style", "${_my_hand2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid7176", tween: [ "style", "${_Girl1_Dressup1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid8897", tween: [ "style", "${_dress_one2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid9545", tween: [ "style", "${_jwel_four2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8456", tween: [ "style", "${_d2_six2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid18328", tween: [ "style", "${_jwel_three2}", "top", '30.67%', { fromValue: '30.67%'}], position: 0, duration: 0 },
                { id: "eid9546", tween: [ "style", "${_jwel_five2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid18188", tween: [ "style", "${_shoe_five2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid8454", tween: [ "style", "${_d2_four2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8466", tween: [ "style", "${_s2_five2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8465", tween: [ "style", "${_s2_four2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8457", tween: [ "style", "${_j2_one2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid18325", tween: [ "style", "${_jwel_two2}", "top", '31%', { fromValue: '31%'}], position: 0, duration: 0 },
                { id: "eid8896", tween: [ "style", "${_dress_two2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid6933", tween: [ "style", "${_Group}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"startbtn": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'play',
                    type: 'image',
                    rect: ['0%', '-0.1%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icon/play.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_play}": [
                ["style", "top", '-0.11%'],
                ["transform", "scaleY", '1'],
                ["style", "height", '100%'],
                ["transform", "scaleX", '1'],
                ["style", "left", '-0.02%'],
                ["style", "width", '100.03%']
            ],
            "${symbolSelector}": [
                ["style", "height", '33%'],
                ["style", "width", '24.38%']
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
                { id: "eid131670", tween: [ "transform", "${_play}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid131671", tween: [ "transform", "${_play}", "scaleX", '1', { fromValue: '0.8'}], position: 500, duration: 500 },
                { id: "eid131672", tween: [ "transform", "${_play}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid131673", tween: [ "transform", "${_play}", "scaleY", '1', { fromValue: '0.8'}], position: 500, duration: 500 }            ]
        }
    }
},
"star_sym": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
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
                    transform: [[0, 0], [], [], ['1.23529']],
                    display: 'none',
                    rect: ['9.5%', '0%', '81%', '100.1%', 'auto', 'auto'],
                    id: 'star',
                    fill: ['rgba(0,0,0,0)', 'images/star1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['1.23529']],
                    display: 'block',
                    rect: ['9.5%', '0%', '81%', '100.1%', 'auto', 'auto'],
                    id: 'starCopy',
                    fill: ['rgba(0,0,0,0)', 'images/star1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['1.23529']],
                    display: 'none',
                    rect: ['9.5%', '0%', '81%', '100.1%', 'auto', 'auto'],
                    id: 'starCopy2',
                    fill: ['rgba(0,0,0,0)', 'images/star13.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['1.23529']],
                    display: 'block',
                    rect: ['9.5%', '0%', '81%', '100.1%', 'auto', 'auto'],
                    id: 'starCopy3',
                    fill: ['rgba(0,0,0,0)', 'images/star.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['1.23529']],
                    display: 'none',
                    rect: ['9.5%', '0%', '81%', '100.1%', 'auto', 'auto'],
                    id: 'starCopy5',
                    fill: ['rgba(0,0,0,0)', 'images/star1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['1.23529']],
                    display: 'block',
                    rect: ['9.5%', '0%', '81%', '100.1%', 'auto', 'auto'],
                    id: 'starCopy6',
                    fill: ['rgba(0,0,0,0)', 'images/star1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['1.23529']],
                    display: 'none',
                    rect: ['9.5%', '0%', '81%', '100.1%', 'auto', 'auto'],
                    id: 'starCopy7',
                    fill: ['rgba(0,0,0,0)', 'images/star1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['1.23529']],
                    display: 'none',
                    rect: ['9.5%', '0%', '81%', '100.1%', 'auto', 'auto'],
                    id: 'starCopy4',
                    fill: ['rgba(0,0,0,0)', 'images/star1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['1.23529']],
                    display: 'none',
                    rect: ['9.5%', '0%', '81%', '100.1%', 'auto', 'auto'],
                    id: 'starCopy8',
                    fill: ['rgba(0,0,0,0)', 'images/star.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['1.23529']],
                    display: 'none',
                    rect: ['9.5%', '0%', '81%', '100.1%', 'auto', 'auto'],
                    id: 'starCopy9',
                    fill: ['rgba(0,0,0,0)', 'images/star.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['1.23529']],
                    display: 'none',
                    rect: ['9.5%', '0%', '81%', '100.1%', 'auto', 'auto'],
                    id: 'starCopy10',
                    fill: ['rgba(0,0,0,0)', 'images/star.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['1.23529']],
                    display: 'none',
                    rect: ['9.5%', '0%', '81%', '100.1%', 'auto', 'auto'],
                    id: 'starCopy11',
                    fill: ['rgba(0,0,0,0)', 'images/star.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['1.23529']],
                    display: 'none',
                    rect: ['9.5%', '0%', '81%', '100.1%', 'auto', 'auto'],
                    id: 'starCopy12',
                    fill: ['rgba(0,0,0,0)', 'images/star1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_starCopy6}": [
                ["style", "top", '320.59%'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1.23529'],
                ["style", "left", '-232.78%'],
                ["style", "display", 'block']
            ],
            "${_starCopy8}": [
                ["style", "top", '574.17%'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1.23529'],
                ["style", "display", 'none'],
                ["style", "left", '-289.23%'],
                ["style", "-webkit-transform-origin", [85.16,49.08], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [85.16,49.08],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [85.16,49.08],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [85.16,49.08],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [85.16,49.08],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_starCopy12}": [
                ["style", "top", '296.78%'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1.23529'],
                ["style", "display", 'none'],
                ["style", "left", '-2.93%'],
                ["style", "-webkit-transform-origin", [85.16,49.08], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [85.16,49.08],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [85.16,49.08],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [85.16,49.08],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [85.16,49.08],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_starCopy3}": [
                ["style", "top", '474.26%'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1.23529'],
                ["style", "left", '464.88%'],
                ["style", "display", 'block']
            ],
            "${_starCopy10}": [
                ["style", "-webkit-transform-origin", [85.16,49.08], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [85.16,49.08],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [85.16,49.08],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [85.16,49.08],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [85.16,49.08],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1.23529'],
                ["style", "display", 'none'],
                ["style", "left", '-20.17%'],
                ["style", "top", '887.95%']
            ],
            "${_starCopy5}": [
                ["style", "top", '187.32%'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1.23529'],
                ["style", "left", '289.92%'],
                ["style", "display", 'none']
            ],
            "${_starCopy11}": [
                ["style", "-webkit-transform-origin", [85.16,49.08], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [85.16,49.08],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [85.16,49.08],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [85.16,49.08],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [85.16,49.08],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1.23529'],
                ["style", "top", '838.14%'],
                ["style", "left", '298.29%'],
                ["style", "display", 'none']
            ],
            "${_starCopy4}": [
                ["style", "-webkit-transform-origin", [85.16,49.08], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [85.16,49.08],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [85.16,49.08],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [85.16,49.08],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [85.16,49.08],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1.23529'],
                ["style", "top", '319.81%'],
                ["style", "left", '-262.06%'],
                ["style", "display", 'none']
            ],
            "${_starCopy9}": [
                ["style", "top", '752.6%'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1.23529'],
                ["style", "-webkit-transform-origin", [85.16,49.08], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [85.16,49.08],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [85.16,49.08],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [85.16,49.08],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [85.16,49.08],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-213.02%'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '5.67%'],
                ["style", "width", '5.25%']
            ],
            "${_starCopy7}": [
                ["style", "top", '346.32%'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1.23529'],
                ["style", "left", '363.73%'],
                ["style", "display", 'none']
            ],
            "${_starCopy}": [
                ["style", "top", '0%'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1.23529'],
                ["style", "left", '9.52%'],
                ["style", "display", 'block']
            ],
            "${_starCopy2}": [
                ["style", "top", '0%'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1.23529'],
                ["style", "left", '9.52%'],
                ["style", "display", 'none']
            ],
            "${_star}": [
                ["style", "top", '187.5%'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1.23529'],
                ["style", "left", '290.48%'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4405,
            autoPlay: true,
            timeline: [
                { id: "eid130325", tween: [ "style", "${_star}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid130329", tween: [ "style", "${_star}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid130333", tween: [ "style", "${_star}", "display", 'none', { fromValue: 'block'}], position: 1123, duration: 0 },
                { id: "eid130495", tween: [ "style", "${_star}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid130500", tween: [ "style", "${_star}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid130447", tween: [ "style", "${_starCopy9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid130448", tween: [ "style", "${_starCopy9}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid130473", tween: [ "style", "${_starCopy9}", "display", 'none', { fromValue: 'block'}], position: 1901, duration: 0 },
                { id: "eid130487", tween: [ "style", "${_starCopy9}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid130509", tween: [ "style", "${_starCopy9}", "display", 'none', { fromValue: 'block'}], position: 4405, duration: 0 },
                { id: "eid130347", tween: [ "style", "${_starCopy5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid130348", tween: [ "style", "${_starCopy5}", "display", 'block', { fromValue: 'none'}], position: 1123, duration: 0 },
                { id: "eid130364", tween: [ "style", "${_starCopy5}", "display", 'none', { fromValue: 'block'}], position: 1901, duration: 0 },
                { id: "eid130482", tween: [ "style", "${_starCopy5}", "display", 'block', { fromValue: 'none'}], position: 2639, duration: 0 },
                { id: "eid130492", tween: [ "style", "${_starCopy5}", "display", 'block', { fromValue: 'block'}], position: 3500, duration: 0 },
                { id: "eid130498", tween: [ "style", "${_starCopy5}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid130514", tween: [ "style", "${_starCopy5}", "display", 'none', { fromValue: 'none'}], position: 4405, duration: 0 },
                { id: "eid130322", tween: [ "style", "${_starCopy3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid130335", tween: [ "style", "${_starCopy3}", "display", 'block', { fromValue: 'block'}], position: 1123, duration: 0 },
                { id: "eid130365", tween: [ "style", "${_starCopy3}", "display", 'block', { fromValue: 'block'}], position: 1901, duration: 0 },
                { id: "eid130483", tween: [ "style", "${_starCopy3}", "display", 'none', { fromValue: 'block'}], position: 2639, duration: 0 },
                { id: "eid130493", tween: [ "style", "${_starCopy3}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid130501", tween: [ "style", "${_starCopy3}", "display", 'block', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid130515", tween: [ "style", "${_starCopy3}", "display", 'none', { fromValue: 'block'}], position: 4405, duration: 0 },
                { id: "eid130324", tween: [ "style", "${_starCopy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid130326", tween: [ "style", "${_starCopy}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
                { id: "eid130334", tween: [ "style", "${_starCopy}", "display", 'block', { fromValue: 'none'}], position: 1123, duration: 0 },
                { id: "eid130494", tween: [ "style", "${_starCopy}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
                { id: "eid130499", tween: [ "style", "${_starCopy}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid130353", tween: [ "style", "${_starCopy6}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid130354", tween: [ "style", "${_starCopy6}", "display", 'block', { fromValue: 'block'}], position: 1123, duration: 0 },
                { id: "eid130366", tween: [ "style", "${_starCopy6}", "display", 'none', { fromValue: 'block'}], position: 1901, duration: 0 },
                { id: "eid130481", tween: [ "style", "${_starCopy6}", "display", 'block', { fromValue: 'none'}], position: 2639, duration: 0 },
                { id: "eid130491", tween: [ "style", "${_starCopy6}", "display", 'block', { fromValue: 'block'}], position: 3500, duration: 0 },
                { id: "eid130513", tween: [ "style", "${_starCopy6}", "display", 'block', { fromValue: 'block'}], position: 4405, duration: 0 },
                { id: "eid130443", tween: [ "style", "${_starCopy8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid130444", tween: [ "style", "${_starCopy8}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid130479", tween: [ "style", "${_starCopy8}", "display", 'block', { fromValue: 'block'}], position: 2639, duration: 0 },
                { id: "eid130488", tween: [ "style", "${_starCopy8}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
                { id: "eid130496", tween: [ "style", "${_starCopy8}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid130510", tween: [ "style", "${_starCopy8}", "display", 'none', { fromValue: 'block'}], position: 4405, duration: 0 },
                { id: "eid130455", tween: [ "style", "${_starCopy10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid130456", tween: [ "style", "${_starCopy10}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid130477", tween: [ "style", "${_starCopy10}", "display", 'none', { fromValue: 'block'}], position: 2639, duration: 0 },
                { id: "eid130486", tween: [ "style", "${_starCopy10}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid130505", tween: [ "style", "${_starCopy10}", "display", 'block', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid130508", tween: [ "style", "${_starCopy10}", "display", 'none', { fromValue: 'block'}], position: 4405, duration: 0 },
                { id: "eid130359", tween: [ "style", "${_starCopy7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid130360", tween: [ "style", "${_starCopy7}", "display", 'none', { fromValue: 'none'}], position: 1123, duration: 0 },
                { id: "eid130363", tween: [ "style", "${_starCopy7}", "display", 'block', { fromValue: 'none'}], position: 1901, duration: 0 },
                { id: "eid130480", tween: [ "style", "${_starCopy7}", "display", 'none', { fromValue: 'block'}], position: 2639, duration: 0 },
                { id: "eid130490", tween: [ "style", "${_starCopy7}", "display", 'none', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid130497", tween: [ "style", "${_starCopy7}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid130512", tween: [ "style", "${_starCopy7}", "display", 'block', { fromValue: 'block'}], position: 4405, duration: 0 },
                { id: "eid130323", tween: [ "style", "${_starCopy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid130502", tween: [ "style", "${_starCopy2}", "display", 'none', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid130463", tween: [ "style", "${_starCopy11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid130464", tween: [ "style", "${_starCopy11}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid130474", tween: [ "style", "${_starCopy11}", "display", 'none', { fromValue: 'block'}], position: 1901, duration: 0 },
                { id: "eid130484", tween: [ "style", "${_starCopy11}", "display", 'block', { fromValue: 'none'}], position: 2639, duration: 0 },
                { id: "eid130485", tween: [ "style", "${_starCopy11}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
                { id: "eid130504", tween: [ "style", "${_starCopy11}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid130507", tween: [ "style", "${_starCopy11}", "display", 'none', { fromValue: 'block'}], position: 4405, duration: 0 },
                { id: "eid130321", tween: [ "style", "${_starCopy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid130338", tween: [ "style", "${_starCopy4}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid130478", tween: [ "style", "${_starCopy4}", "display", 'none', { fromValue: 'block'}], position: 2639, duration: 0 },
                { id: "eid130489", tween: [ "style", "${_starCopy4}", "display", 'none', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid130511", tween: [ "style", "${_starCopy4}", "display", 'none', { fromValue: 'none'}], position: 4405, duration: 0 },
                { id: "eid130467", tween: [ "style", "${_starCopy12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid130468", tween: [ "style", "${_starCopy12}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid130475", tween: [ "style", "${_starCopy12}", "display", 'none', { fromValue: 'block'}], position: 1901, duration: 0 },
                { id: "eid130476", tween: [ "style", "${_starCopy12}", "display", 'block', { fromValue: 'none'}], position: 2639, duration: 0 },
                { id: "eid130503", tween: [ "style", "${_starCopy12}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid130506", tween: [ "style", "${_starCopy12}", "display", 'block', { fromValue: 'none'}], position: 4405, duration: 0 }            ]
        }
    }
},
"symhand1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'lefthand',
                    type: 'image',
                    rect: ['0%', '-0.2%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/lefthand.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_lefthand}": [
                ["style", "top", '-0.22%'],
                ["style", "height", '100%'],
                ["style", "left", '0.05%'],
                ["style", "width", '100%']
            ],
            "${symbolSelector}": [
                ["style", "height", '9%'],
                ["style", "width", '10%']
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
                { id: "eid106810", tween: [ "style", "${_lefthand}", "left", '265.12%', { fromValue: '0.05%'}], position: 0, duration: 1500 },
                { id: "eid106811", tween: [ "style", "${_lefthand}", "top", '218.16%', { fromValue: '-0.22%'}], position: 0, duration: 1500 }            ]
        }
    }
},
"base_symbol": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
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
                    id: 'image-110',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/dress/image-110.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '55.17%'],
                ["style", "width", '20.25%']
            ],
            "${_image-110}": [
                ["style", "top", '-0.01%'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "display", 'block'],
                ["style", "height", '100.01%'],
                ["style", "left", '0%'],
                ["style", "width", '100%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            timeline: [
                { id: "eid7358", tween: [ "transform", "${_image-110}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 4000 },
                { id: "eid7357", tween: [ "transform", "${_image-110}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 4000 },
                { id: "eid7282", tween: [ "style", "${_image-110}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"Search_anim": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'lag2',
                    type: 'image',
                    rect: ['59.1%', '61.4%', '26.1%', '18.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/gril2_lag.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['25'], [], [], ['72.9897%', '47.084%']],
                    id: 'gril1_lag',
                    type: 'image',
                    rect: ['7.3%', '54.6%', '39.2%', '18.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/gril1_lag.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['-19'], [], [], ['24.3453%', '41.7095%']],
                    id: 'gril2_lag',
                    type: 'image',
                    rect: ['54.1%', '57.4%', '40.2%', '18.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/gril2_lag.png', '0px', '0px']
                },
                {
                    id: 'gril2',
                    type: 'image',
                    rect: ['46.6%', '0.9%', '36.6%', '82%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/gril_2.png', '0px', '0px']
                },
                {
                    rect: ['48.7%', '31.1%', '13.8%', '25.4%', 'auto', 'auto'],
                    id: 'G1_lef_h',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/hand_left2.png', '0px', '0px']
                },
                {
                    rect: ['66.4%', '31.7%', '13.6%', '25.7%', 'auto', 'auto'],
                    id: 'G1_right_h',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/hand_right.png', '0px', '0px']
                },
                {
                    rect: ['42.6%', '9.1%', '10.6%', '29.1%', 'auto', 'auto'],
                    id: 'G1_lefth_up',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/hand_up1.png', '0px', '0px']
                },
                {
                    rect: ['76.4%', '9.1%', '10.6%', '29.1%', 'auto', 'auto'],
                    id: 'G1_righth_up',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/hand_up2.png', '0px', '0px']
                },
                {
                    id: 'lag1',
                    type: 'image',
                    rect: ['10.8%', '61.4%', '27%', '18.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/gril1_lag.png', '0px', '0px']
                },
                {
                    id: 'gril1',
                    type: 'image',
                    rect: ['14.1%', '0.9%', '40%', '84.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/gril_1.png', '0px', '0px']
                },
                {
                    rect: ['16.7%', '31.1%', '13.8%', '25.4%', 'auto', 'auto'],
                    id: 'G2_left_h',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/hand_left2.png', '0px', '0px']
                },
                {
                    rect: ['34.6%', '32%', '13.6%', '25.7%', 'auto', 'auto'],
                    id: 'G2_right_h',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/hand_right2.png', '0px', '0px']
                },
                {
                    rect: ['10.2%', '8.9%', '10.6%', '29.1%', 'auto', 'auto'],
                    id: 'G2_righth_up',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/hand_up1.png', '0px', '0px']
                },
                {
                    rect: ['44.2%', '9.1%', '10.6%', '29.1%', 'auto', 'auto'],
                    id: 'G2_lefth_up',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/hand_up2.png', '0px', '0px']
                },
                {
                    id: 'brownbox2',
                    type: 'image',
                    rect: ['1.6%', '66.5%', '86.4%', '59.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloth_box.png', '0px', '0px']
                },
                {
                    rect: ['9.8%', '32.9%', '76.8%', '67.2%', 'auto', 'auto'],
                    id: 'cloth1',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/cloth5.png', '0px', '0px']
                },
                {
                    rect: ['14.9%', '37.4%', '71.4%', '40.9%', 'auto', 'auto'],
                    id: 'cloth2',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/cloth4.png', '0px', '0px']
                },
                {
                    rect: ['13.4%', '2.3%', '55.8%', '85.7%', 'auto', 'auto'],
                    id: 'sparkl1',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/CREATE2.png', '0px', '0px']
                },
                {
                    rect: ['25.8%', '0%', '55.8%', '85.7%', 'auto', 'auto'],
                    id: 'sparkl2',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/CREATE1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_sparkl2}": [
                ["style", "top", '20.86%'],
                ["style", "height", '76%'],
                ["style", "display", 'block'],
                ["style", "left", '23.42%'],
                ["style", "width", '59.11%']
            ],
            "${_G1_right_h}": [
                ["style", "-webkit-transform-origin", [100,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "border-top-left-radius", [5.5900878906253,5.5900878906253], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "rotateZ", '0deg'],
                ["style", "left", '65.43%'],
                ["style", "top", '32%'],
                ["style", "border-bottom-left-radius", [5.5900878906253,5.5900878906253], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "display", 'block'],
                ["style", "border-bottom-right-radius", [5.5900878906253,5.5900878906253], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [5.5900878906253,5.5900878906253], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_gril1}": [
                ["style", "left", '14.11%'],
                ["style", "top", '0.86%']
            ],
            "${symbolSelector}": [
                ["style", "height", '58.33%'],
                ["style", "width", '67.25%']
            ],
            "${_G2_right_h}": [
                ["style", "-webkit-transform-origin", [100,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "left", '35.13%'],
                ["style", "top", '32%']
            ],
            "${_cloth1}": [
                ["style", "top", '57.14%'],
                ["style", "display", 'block'],
                ["style", "height", '36.29%'],
                ["style", "left", '6.32%'],
                ["style", "width", '76.72%']
            ],
            "${_gril2_lag}": [
                ["style", "top", '57.36%'],
                ["style", "-webkit-transform-origin", [24.35,41.71], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [24.35,41.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [24.35,41.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [24.35,41.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [24.35,41.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '54.08%'],
                ["transform", "rotateZ", '-19deg']
            ],
            "${_gril1_lag}": [
                ["style", "-webkit-transform-origin", [72.99,47.08], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [72.99,47.08],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [72.99,47.08],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [72.99,47.08],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [72.99,47.08],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "skewY", '0deg'],
                ["transform", "rotateZ", '25deg'],
                ["style", "left", '7.25%'],
                ["style", "top", '54.57%']
            ],
            "${_G2_left_h}": [
                ["style", "-webkit-transform-origin", [28.18,19.56], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [28.18,19.56],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [28.18,19.56],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [28.18,19.56],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [28.18,19.56],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "left", '16.73%'],
                ["style", "top", '31.43%']
            ],
            "${_lag1}": [
                ["style", "top", '61.42%'],
                ["style", "left", '10.78%'],
                ["style", "width", '27%']
            ],
            "${_G1_lef_h}": [
                ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "left", '48.51%'],
                ["style", "top", '31.71%']
            ],
            "${_gril2}": [
                ["style", "top", '0.86%'],
                ["style", "left", '46.65%']
            ],
            "${_G2_lefth_up}": [
                ["style", "top", '9.14%'],
                ["style", "left", '44.24%'],
                ["style", "display", 'none']
            ],
            "${_G1_lefth_up}": [
                ["style", "top", '9.14%'],
                ["style", "left", '42.57%'],
                ["style", "display", 'none']
            ],
            "${_G1_righth_up}": [
                ["style", "display", 'none'],
                ["style", "left", '75.46%'],
                ["style", "top", '8.86%']
            ],
            "${_G2_righth_up}": [
                ["style", "top", '8.86%'],
                ["style", "left", '10.23%'],
                ["style", "display", 'none']
            ],
            "${_cloth2}": [
                ["style", "top", '41.71%'],
                ["style", "left", '13.75%'],
                ["style", "display", 'block']
            ],
            "${_lag2}": [
                ["style", "top", '61.43%'],
                ["style", "left", '59.11%'],
                ["style", "width", '26.11%']
            ],
            "${_sparkl1}": [
                ["style", "top", '23.42%'],
                ["style", "height", '64.57%'],
                ["style", "display", 'none'],
                ["style", "left", '13.38%'],
                ["style", "width", '55.77%']
            ],
            "${_brownbox2}": [
                ["style", "top", '66.53%'],
                ["style", "height", '59.71%'],
                ["style", "left", '1.62%'],
                ["style", "width", '86.44%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7333,
            autoPlay: true,
            timeline: [
                { id: "eid186", tween: [ "transform", "${_G1_lef_h}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid197", tween: [ "transform", "${_G1_lef_h}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 500, duration: 500 },
                { id: "eid198", tween: [ "transform", "${_G1_lef_h}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
                { id: "eid195", tween: [ "transform", "${_G1_lef_h}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 1500, duration: 500 },
                { id: "eid200", tween: [ "transform", "${_G1_lef_h}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 2000, duration: 500 },
                { id: "eid202", tween: [ "transform", "${_G1_lef_h}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 2500, duration: 500 },
                { id: "eid204", tween: [ "transform", "${_G1_lef_h}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 3000, duration: 500 },
                { id: "eid206", tween: [ "transform", "${_G1_lef_h}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 3500, duration: 500 },
                { id: "eid208", tween: [ "transform", "${_G1_lef_h}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 4000, duration: 500 },
                { id: "eid234", tween: [ "transform", "${_G1_lef_h}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 4500, duration: 500 },
                { id: "eid236", tween: [ "transform", "${_G1_lef_h}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 5000, duration: 500 },
                { id: "eid327", tween: [ "transform", "${_G1_lef_h}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 5500, duration: 500 },
                { id: "eid328", tween: [ "transform", "${_G1_lef_h}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 6000, duration: 500 },
                { id: "eid70", tween: [ "style", "${_G2_lefth_up}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid552", tween: [ "style", "${_G2_lefth_up}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid556", tween: [ "style", "${_G2_lefth_up}", "display", 'none', { fromValue: 'block'}], position: 6500, duration: 0 },
                { id: "eid110", tween: [ "transform", "${_G2_right_h}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid111", tween: [ "transform", "${_G2_right_h}", "rotateZ", '-10deg', { fromValue: '10deg'}], position: 500, duration: 500 },
                { id: "eid113", tween: [ "transform", "${_G2_right_h}", "rotateZ", '10deg', { fromValue: '-10deg'}], position: 1000, duration: 500 },
                { id: "eid115", tween: [ "transform", "${_G2_right_h}", "rotateZ", '-10deg', { fromValue: '10deg'}], position: 1500, duration: 500 },
                { id: "eid117", tween: [ "transform", "${_G2_right_h}", "rotateZ", '10deg', { fromValue: '-10deg'}], position: 2000, duration: 500 },
                { id: "eid118", tween: [ "transform", "${_G2_right_h}", "rotateZ", '-10deg', { fromValue: '10deg'}], position: 2500, duration: 500 },
                { id: "eid120", tween: [ "transform", "${_G2_right_h}", "rotateZ", '10deg', { fromValue: '-10deg'}], position: 3000, duration: 500 },
                { id: "eid122", tween: [ "transform", "${_G2_right_h}", "rotateZ", '-10deg', { fromValue: '10deg'}], position: 3500, duration: 500 },
                { id: "eid124", tween: [ "transform", "${_G2_right_h}", "rotateZ", '10deg', { fromValue: '-10deg'}], position: 4000, duration: 500 },
                { id: "eid126", tween: [ "transform", "${_G2_right_h}", "rotateZ", '-10deg', { fromValue: '10deg'}], position: 4500, duration: 500 },
                { id: "eid128", tween: [ "transform", "${_G2_right_h}", "rotateZ", '10deg', { fromValue: '-10deg'}], position: 5000, duration: 500 },
                { id: "eid333", tween: [ "transform", "${_G2_right_h}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 5500, duration: 500 },
                { id: "eid334", tween: [ "transform", "${_G2_right_h}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 6000, duration: 500 },
                { id: "eid73", tween: [ "style", "${_G1_lefth_up}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid444", tween: [ "style", "${_G1_lefth_up}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid445", tween: [ "style", "${_G1_lefth_up}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
                { id: "eid301", tween: [ "transform", "${_G1_right_h}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid303", tween: [ "transform", "${_G1_right_h}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 500, duration: 500 },
                { id: "eid304", tween: [ "transform", "${_G1_right_h}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
                { id: "eid319", tween: [ "transform", "${_G1_right_h}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 1500, duration: 500 },
                { id: "eid320", tween: [ "transform", "${_G1_right_h}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 2000, duration: 500 },
                { id: "eid316", tween: [ "transform", "${_G1_right_h}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 2500, duration: 500 },
                { id: "eid317", tween: [ "transform", "${_G1_right_h}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 3000, duration: 500 },
                { id: "eid313", tween: [ "transform", "${_G1_right_h}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 3500, duration: 500 },
                { id: "eid314", tween: [ "transform", "${_G1_right_h}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 4000, duration: 500 },
                { id: "eid310", tween: [ "transform", "${_G1_right_h}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 4500, duration: 500 },
                { id: "eid311", tween: [ "transform", "${_G1_right_h}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 5000, duration: 500 },
                { id: "eid325", tween: [ "transform", "${_G1_right_h}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 5500, duration: 500 },
                { id: "eid326", tween: [ "transform", "${_G1_right_h}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 6000, duration: 500 },
                { id: "eid81", tween: [ "transform", "${_G2_left_h}", "rotateZ", '-5deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid83", tween: [ "transform", "${_G2_left_h}", "rotateZ", '10deg', { fromValue: '-5deg'}], position: 500, duration: 500 },
                { id: "eid85", tween: [ "transform", "${_G2_left_h}", "rotateZ", '-10deg', { fromValue: '10deg'}], position: 1000, duration: 500 },
                { id: "eid87", tween: [ "transform", "${_G2_left_h}", "rotateZ", '10deg', { fromValue: '-10deg'}], position: 1500, duration: 500 },
                { id: "eid89", tween: [ "transform", "${_G2_left_h}", "rotateZ", '-10deg', { fromValue: '10deg'}], position: 2000, duration: 500 },
                { id: "eid91", tween: [ "transform", "${_G2_left_h}", "rotateZ", '10deg', { fromValue: '-10deg'}], position: 2500, duration: 500 },
                { id: "eid93", tween: [ "transform", "${_G2_left_h}", "rotateZ", '-10deg', { fromValue: '10deg'}], position: 3000, duration: 500 },
                { id: "eid95", tween: [ "transform", "${_G2_left_h}", "rotateZ", '10deg', { fromValue: '-10deg'}], position: 3500, duration: 500 },
                { id: "eid97", tween: [ "transform", "${_G2_left_h}", "rotateZ", '-10deg', { fromValue: '10deg'}], position: 4000, duration: 500 },
                { id: "eid99", tween: [ "transform", "${_G2_left_h}", "rotateZ", '10deg', { fromValue: '-10deg'}], position: 4500, duration: 500 },
                { id: "eid101", tween: [ "transform", "${_G2_left_h}", "rotateZ", '-10deg', { fromValue: '10deg'}], position: 5000, duration: 500 },
                { id: "eid330", tween: [ "transform", "${_G2_left_h}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 5500, duration: 500 },
                { id: "eid331", tween: [ "transform", "${_G2_left_h}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 6000, duration: 500 },
                { id: "eid554", tween: [ "style", "${_G2_right_h}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
                { id: "eid555", tween: [ "style", "${_G2_right_h}", "display", 'block', { fromValue: 'none'}], position: 6500, duration: 0 },
                { id: "eid156", tween: [ "style", "${_G1_lef_h}", "-webkit-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 0, duration: 0 },
                { id: "eid20701", tween: [ "style", "${_G1_lef_h}", "-moz-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 0, duration: 0 },
                { id: "eid20702", tween: [ "style", "${_G1_lef_h}", "-ms-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 0, duration: 0 },
                { id: "eid20703", tween: [ "style", "${_G1_lef_h}", "msTransformOrigin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 0, duration: 0 },
                { id: "eid20704", tween: [ "style", "${_G1_lef_h}", "-o-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 0, duration: 0 },
                { id: "eid157", tween: [ "style", "${_G1_lef_h}", "-webkit-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 500, duration: 0 },
                { id: "eid20705", tween: [ "style", "${_G1_lef_h}", "-moz-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 500, duration: 0 },
                { id: "eid20706", tween: [ "style", "${_G1_lef_h}", "-ms-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 500, duration: 0 },
                { id: "eid20707", tween: [ "style", "${_G1_lef_h}", "msTransformOrigin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 500, duration: 0 },
                { id: "eid20708", tween: [ "style", "${_G1_lef_h}", "-o-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 500, duration: 0 },
                { id: "eid158", tween: [ "style", "${_G1_lef_h}", "-webkit-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 1000, duration: 0 },
                { id: "eid20709", tween: [ "style", "${_G1_lef_h}", "-moz-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 1000, duration: 0 },
                { id: "eid20710", tween: [ "style", "${_G1_lef_h}", "-ms-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 1000, duration: 0 },
                { id: "eid20711", tween: [ "style", "${_G1_lef_h}", "msTransformOrigin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 1000, duration: 0 },
                { id: "eid20712", tween: [ "style", "${_G1_lef_h}", "-o-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 1000, duration: 0 },
                { id: "eid159", tween: [ "style", "${_G1_lef_h}", "-webkit-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 1500, duration: 0 },
                { id: "eid20713", tween: [ "style", "${_G1_lef_h}", "-moz-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 1500, duration: 0 },
                { id: "eid20714", tween: [ "style", "${_G1_lef_h}", "-ms-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 1500, duration: 0 },
                { id: "eid20715", tween: [ "style", "${_G1_lef_h}", "msTransformOrigin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 1500, duration: 0 },
                { id: "eid20716", tween: [ "style", "${_G1_lef_h}", "-o-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 1500, duration: 0 },
                { id: "eid485", tween: [ "style", "${_G1_lef_h}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid486", tween: [ "style", "${_G1_lef_h}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid482", tween: [ "style", "${_G2_left_h}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid483", tween: [ "style", "${_G2_left_h}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid553", tween: [ "style", "${_G2_left_h}", "display", 'block', { fromValue: 'block'}], position: 6000, duration: 0 },
                { id: "eid4730", tween: [ "style", "${_cloth2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2223", tween: [ "style", "${_cloth2}", "display", 'block', { fromValue: 'block'}], position: 3500, duration: 0 },
                { id: "eid2224", tween: [ "style", "${_cloth1}", "display", 'block', { fromValue: 'block'}], position: 3500, duration: 0 },
                { id: "eid442", tween: [ "style", "${_G2_right_h}", "left", '34.9%', { fromValue: '35.13%'}], position: 0, duration: 2000 },
                { id: "eid519", tween: [ "style", "${_G1_righth_up}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid560", tween: [ "style", "${_G1_righth_up}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid557", tween: [ "style", "${_G1_righth_up}", "display", 'none', { fromValue: 'block'}], position: 6500, duration: 0 },
                { id: "eid106", tween: [ "style", "${_G2_right_h}", "-webkit-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 0, duration: 0 },
                { id: "eid20717", tween: [ "style", "${_G2_right_h}", "-moz-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 0, duration: 0 },
                { id: "eid20718", tween: [ "style", "${_G2_right_h}", "-ms-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 0, duration: 0 },
                { id: "eid20719", tween: [ "style", "${_G2_right_h}", "msTransformOrigin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 0, duration: 0 },
                { id: "eid20720", tween: [ "style", "${_G2_right_h}", "-o-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 0, duration: 0 },
                { id: "eid41", tween: [ "style", "${_sparkl1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid43", tween: [ "style", "${_sparkl1}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid45", tween: [ "style", "${_sparkl1}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid47", tween: [ "style", "${_sparkl1}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid49", tween: [ "style", "${_sparkl1}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid51", tween: [ "style", "${_sparkl1}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid53", tween: [ "style", "${_sparkl1}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid55", tween: [ "style", "${_sparkl1}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid57", tween: [ "style", "${_sparkl1}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid59", tween: [ "style", "${_sparkl1}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
                { id: "eid61", tween: [ "style", "${_sparkl1}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
                { id: "eid63", tween: [ "style", "${_sparkl1}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0 },
                { id: "eid65", tween: [ "style", "${_sparkl1}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
                { id: "eid67", tween: [ "style", "${_sparkl1}", "display", 'block', { fromValue: 'none'}], position: 6500, duration: 0 },
                { id: "eid69", tween: [ "style", "${_sparkl1}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0 },
                { id: "eid71", tween: [ "style", "${_G2_righth_up}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid400", tween: [ "style", "${_G2_righth_up}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid484", tween: [ "style", "${_G2_righth_up}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
                { id: "eid559", tween: [ "style", "${_G1_right_h}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
                { id: "eid558", tween: [ "style", "${_G1_right_h}", "display", 'block', { fromValue: 'none'}], position: 6500, duration: 0 },
                { id: "eid40", tween: [ "style", "${_sparkl2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid42", tween: [ "style", "${_sparkl2}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
                { id: "eid44", tween: [ "style", "${_sparkl2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid46", tween: [ "style", "${_sparkl2}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
                { id: "eid48", tween: [ "style", "${_sparkl2}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid50", tween: [ "style", "${_sparkl2}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
                { id: "eid52", tween: [ "style", "${_sparkl2}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid54", tween: [ "style", "${_sparkl2}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
                { id: "eid56", tween: [ "style", "${_sparkl2}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid58", tween: [ "style", "${_sparkl2}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
                { id: "eid60", tween: [ "style", "${_sparkl2}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid62", tween: [ "style", "${_sparkl2}", "display", 'none', { fromValue: 'block'}], position: 5500, duration: 0 },
                { id: "eid64", tween: [ "style", "${_sparkl2}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid66", tween: [ "style", "${_sparkl2}", "display", 'none', { fromValue: 'block'}], position: 6500, duration: 0 },
                { id: "eid68", tween: [ "style", "${_sparkl2}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 }            ]
        }
    }
},
"full_girl2": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'girl1_body',
                    type: 'image',
                    rect: ['29.9%', '4.2%', '68.2%', '95.8%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/body1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0%', '29.4%', '45.2%', '17.3%', 'auto', 'auto'],
                    id: 'girl1_hand',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/hand_right.png', '0px', '0px']
                },
                {
                    id: 'g1_ex1',
                    type: 'image',
                    rect: ['44.2%', '4.2%', '31.3%', '15.4%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/g1_ex1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['44.2%', '4.2%', '31.3%', '15.4%', 'auto', 'auto'],
                    id: 'g1_ex2',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/g1_ex2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['44.2%', '4.2%', '31.3%', '15.4%', 'auto', 'auto'],
                    id: 'g1_ex3',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/g1_ex3.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['52.1%', '5.3%', '22.6%', '6.8%', 'auto', 'auto'],
                    id: 'g_eye1',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/girl2_eye.png', '0px', '0px']
                },
                {
                    id: 'girl_dress1',
                    type: 'image',
                    rect: ['10.6%', '22.4%', '95.9%', '47.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Gril_dress/Gril1/Sd7.png', '0px', '0px']
                },
                {
                    id: 'hair1',
                    type: 'image',
                    rect: ['34.1%', '0%', '41.9%', '25.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/hair1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['36.2%', '11.8%', '25.4%', '25.3%', 'auto', 'auto'],
                    id: 'girl1handup',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/girl2_h_up.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_girl1handup}": [
                ["style", "-webkit-transform-origin", [24.03,87.28], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [24.03,87.28],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [24.03,87.28],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [24.03,87.28],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [24.03,87.28],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '7deg'],
                ["style", "display", 'none'],
                ["style", "left", '36.18%'],
                ["style", "top", '11.82%']
            ],
            "${_girl1_body}": [
                ["style", "left", '29.88%'],
                ["style", "top", '4.22%']
            ],
            "${_hair1}": [
                ["style", "left", '34.1%'],
                ["style", "top", '0%']
            ],
            "${_g1_ex1}": [
                ["style", "left", '44.24%'],
                ["style", "top", '4.22%']
            ],
            "${_g1_ex3}": [
                ["style", "top", '4.22%'],
                ["style", "left", '44.24%'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '79%'],
                ["style", "width", '27.13%']
            ],
            "${_g1_ex2}": [
                ["style", "top", '4.22%'],
                ["style", "left", '44.24%'],
                ["style", "display", 'none']
            ],
            "${_girl1_hand}": [
                ["style", "top", '29.54%'],
                ["style", "left", '0.46%'],
                ["style", "display", 'block']
            ],
            "${_g_eye1}": [
                ["style", "top", '6.14%'],
                ["transform", "scaleY", '0.55357'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '1.04081'],
                ["style", "height", '7.48%'],
                ["style", "left", '52.53%'],
                ["style", "width", '21.66%']
            ],
            "${_girl_dress1}": [
                ["style", "left", '10.6%'],
                ["style", "top", '22.36%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6132,
            autoPlay: true,
            timeline: [
                { id: "eid37", tween: [ "style", "${_girl1handup}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid38", tween: [ "style", "${_girl1handup}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid19", tween: [ "style", "${_g_eye1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid27", tween: [ "style", "${_g_eye1}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid36", tween: [ "style", "${_g_eye1}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid28", tween: [ "style", "${_g_eye1}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid35", tween: [ "style", "${_g_eye1}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid29", tween: [ "style", "${_g_eye1}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid34", tween: [ "style", "${_g_eye1}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid30", tween: [ "style", "${_g_eye1}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid33", tween: [ "style", "${_g_eye1}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid31", tween: [ "style", "${_g_eye1}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
                { id: "eid32", tween: [ "style", "${_g_eye1}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
                { id: "eid4980", tween: [ "style", "${_g1_ex2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid4981", tween: [ "style", "${_g1_ex2}", "display", 'block', { fromValue: 'none'}], position: 392, duration: 0 },
                { id: "eid4982", tween: [ "style", "${_g1_ex2}", "display", 'none', { fromValue: 'block'}], position: 1656, duration: 0 },
                { id: "eid4985", tween: [ "style", "${_g1_ex2}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
                { id: "eid4986", tween: [ "style", "${_g1_ex2}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
                { id: "eid4987", tween: [ "style", "${_g1_ex2}", "display", 'block', { fromValue: 'none'}], position: 4334, duration: 0 },
                { id: "eid4989", tween: [ "style", "${_g1_ex2}", "display", 'none', { fromValue: 'block'}], position: 5673, duration: 0 },
                { id: "eid4979", tween: [ "style", "${_g1_ex3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid4983", tween: [ "style", "${_g1_ex3}", "display", 'block', { fromValue: 'none'}], position: 1656, duration: 0 },
                { id: "eid4984", tween: [ "style", "${_g1_ex3}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
                { id: "eid4988", tween: [ "style", "${_g1_ex3}", "display", 'block', { fromValue: 'none'}], position: 5093, duration: 0 },
                { id: "eid4990", tween: [ "style", "${_g1_ex3}", "display", 'none', { fromValue: 'block'}], position: 5673, duration: 0 },
                { id: "eid39", tween: [ "style", "${_girl1_hand}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 }            ]
        }
    }
},
"full_girl1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'gril2_body',
                    type: 'image',
                    rect: ['5.4%', '2.1%', '79.6%', '95.8%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/body2.png', '0px', '0px']
                },
                {
                    rect: ['39.3%', '7%', '32.3%', '11.2%', 'auto', 'auto'],
                    id: 'g2_ex1',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/g2_ex1.png', '0px', '0px']
                },
                {
                    rect: ['39.3%', '7%', '32.3%', '11.2%', 'auto', 'auto'],
                    id: 'g2_ex2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/g2_ex2.png', '0px', '0px']
                },
                {
                    rect: ['39.3%', '7%', '32.3%', '11.2%', 'auto', 'auto'],
                    id: 'g3_ex3',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/g3_ex3.png', '0px', '0px']
                },
                {
                    rect: ['33.3%', '4%', '28.5%', '9.1%', 'auto', 'auto'],
                    id: 'g_eye2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/girl1_eye.png', '0px', '0px']
                },
                {
                    id: 'girl2_dress',
                    type: 'image',
                    rect: ['1.6%', '21.8%', '110.2%', '47.5%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Gril_dress/Gril2/Gd7.png', '0px', '0px']
                },
                {
                    rect: ['72%', '31.7%', '32.8%', '19.8%', 'auto', 'auto'],
                    id: 'girl2hand',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/hand_left.png', '0px', '0px']
                },
                {
                    id: 'hair2',
                    type: 'image',
                    rect: ['25.3%', '-0.4%', '60.2%', '35.2%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/hair2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], ['-5']],
                    display: 'none',
                    rect: ['53.2%', '13.1%', '29.6%', '25.1%', 'auto', 'auto'],
                    id: 'girl2handup',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/girl1_h_up.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hair2}": [
                ["style", "left", '25.27%'],
                ["style", "top", '-0.42%']
            ],
            "${_girl2_dress}": [
                ["style", "left", '1.61%'],
                ["style", "top", '21.83%']
            ],
            "${_g_eye2}": [
                ["style", "top", '6.54%'],
                ["transform", "scaleY", '0.52833'],
                ["style", "display", 'none'],
                ["style", "height", '7.57%'],
                ["transform", "scaleX", '1.03862'],
                ["style", "left", '38.71%'],
                ["style", "width", '24.86%']
            ],
            "${_gril2_body}": [
                ["style", "left", '5.38%'],
                ["style", "top", '2.11%']
            ],
            "${_g3_ex3}": [
                ["style", "top", '6.96%'],
                ["style", "left", '39.25%'],
                ["style", "display", 'none']
            ],
            "${_girl2hand}": [
                ["style", "top", '31.65%'],
                ["style", "left", '72.04%'],
                ["style", "display", 'block']
            ],
            "${_g2_ex1}": [
                ["style", "top", '6.96%'],
                ["style", "left", '39.25%'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '79%'],
                ["style", "width", '23.25%']
            ],
            "${_g2_ex2}": [
                ["style", "top", '6.96%'],
                ["style", "left", '39.25%'],
                ["style", "display", 'none']
            ],
            "${_girl2handup}": [
                ["style", "-webkit-transform-origin", [81.22,88.42], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [81.22,88.42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [81.22,88.42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [81.22,88.42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [81.22,88.42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-5deg'],
                ["style", "display", 'none'],
                ["style", "left", '54.3%'],
                ["style", "top", '12.45%']
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
                { id: "eid10", tween: [ "style", "${_g_eye2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid13", tween: [ "style", "${_g_eye2}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid11", tween: [ "style", "${_g_eye2}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid14", tween: [ "style", "${_g_eye2}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid12", tween: [ "style", "${_g_eye2}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid15", tween: [ "style", "${_g_eye2}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid8", tween: [ "style", "${_g_eye2}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid16", tween: [ "style", "${_g_eye2}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid9", tween: [ "style", "${_g_eye2}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid17", tween: [ "style", "${_g_eye2}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
                { id: "eid18", tween: [ "style", "${_g_eye2}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
                { id: "eid3652", tween: [ "style", "${_girl2hand}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid4992", tween: [ "style", "${_g2_ex2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid4998", tween: [ "style", "${_g2_ex2}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
                { id: "eid5001", tween: [ "style", "${_g2_ex2}", "display", 'none', { fromValue: 'block'}], position: 4889, duration: 0 },
                { id: "eid3662", tween: [ "style", "${_girl2handup}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid4993", tween: [ "style", "${_g2_ex1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid4994", tween: [ "style", "${_g2_ex1}", "display", 'block', { fromValue: 'none'}], position: 863, duration: 0 },
                { id: "eid4995", tween: [ "style", "${_g2_ex1}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid4991", tween: [ "style", "${_g3_ex3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid4999", tween: [ "style", "${_g3_ex3}", "display", 'block', { fromValue: 'none'}], position: 3250, duration: 0 },
                { id: "eid5000", tween: [ "style", "${_g3_ex3}", "display", 'none', { fromValue: 'block'}], position: 4889, duration: 0 }            ]
        }
    }
},
"my_handsym2": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
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
                    id: 'lefthand1',
                    rect: ['-24.1%', '16.3%', '148.2%', '67.5%', 'auto', 'auto'],
                    transform: [[0, 0], ['90']],
                    fill: ['rgba(0,0,0,0)', 'images/lefthand.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_lefthand1}": [
                ["style", "top", '16.26%'],
                ["style", "left", '-24.06%'],
                ["transform", "rotateZ", '90deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '13.33%'],
                ["style", "width", '6.75%']
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
                { id: "eid107314", tween: [ "style", "${_lefthand1}", "top", '-52.41%', { fromValue: '16.26%'}], position: 0, duration: 1500 },
                { id: "eid107313", tween: [ "style", "${_lefthand1}", "left", '-759.6%', { fromValue: '-24.06%'}], position: 0, duration: 1500 }            ]
        }
    }
},
"girl22": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'girl2',
                    type: 'image',
                    rect: ['29.5%', '4.2%', '68.2%', '95.8%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/body1.png', '0px', '0px']
                },
                {
                    id: 'b_lag1',
                    type: 'image',
                    rect: ['29%', '46.4%', '48.9%', '55.1%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/b_lag1.png', '0px', '0px']
                },
                {
                    rect: ['14.4%', '29.3%', '45.4%', '17.3%', 'auto', 'auto'],
                    id: 'girl2_han',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/hand_right.png', '0px', '0px']
                },
                {
                    rect: ['43.8%', '4.2%', '31.3%', '15.4%', 'auto', 'auto'],
                    id: 'g1_ex14',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/g1_ex1.png', '0px', '0px']
                },
                {
                    rect: ['66.4%', '5.3%', '22.5%', '6.7%', 'auto', 'auto'],
                    id: 'girl2_closed_eye',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/girl2_eye.png', '0px', '0px']
                },
                {
                    id: 'girl2_dress',
                    type: 'image',
                    rect: ['10.1%', '21.8%', '95.9%', '47.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Gril_dress/Gril1/Sd7.png', '0px', '0px']
                },
                {
                    id: 'hair14',
                    type: 'image',
                    rect: ['33.6%', '-0.2%', '41.9%', '25.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/hair1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_girl2}": [
                ["style", "left", '29.49%'],
                ["style", "top", '4.22%']
            ],
            "${_girl2_closed_eye}": [
                ["style", "display", 'none'],
                ["style", "left", '51.61%'],
                ["transform", "scaleY", '0.57462'],
                ["style", "top", '6.54%']
            ],
            "${_girl2_dress}": [
                ["style", "left", '10.14%'],
                ["style", "top", '21.76%']
            ],
            "${symbolSelector}": [
                ["style", "height", '79%'],
                ["style", "width", '27.13%']
            ],
            "${_girl2_han}": [
                ["style", "top", '29.35%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${_g1_ex14}": [
                ["style", "top", '4.22%'],
                ["style", "left", '43.78%'],
                ["style", "display", 'none']
            ],
            "${_hair14}": [
                ["style", "left", '33.64%'],
                ["style", "top", '-0.21%']
            ],
            "${_b_lag1}": [
                ["style", "left", '29.03%'],
                ["style", "top", '46.41%']
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
                { id: "eid15463", tween: [ "style", "${_girl2_han}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid15462", tween: [ "style", "${_girl2_closed_eye}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid15906", tween: [ "style", "${_girl2_closed_eye}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid15907", tween: [ "style", "${_girl2_closed_eye}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid15908", tween: [ "style", "${_girl2_closed_eye}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid15909", tween: [ "style", "${_girl2_closed_eye}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid15910", tween: [ "style", "${_girl2_closed_eye}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid15911", tween: [ "style", "${_girl2_closed_eye}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid15912", tween: [ "style", "${_girl2_closed_eye}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid15913", tween: [ "style", "${_girl2_closed_eye}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid15914", tween: [ "style", "${_girl2_closed_eye}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
                { id: "eid15915", tween: [ "style", "${_girl2_closed_eye}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
                { id: "eid15916", tween: [ "style", "${_girl2_closed_eye}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0 },
                { id: "eid7821", tween: [ "style", "${_g1_ex14}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid7822", tween: [ "style", "${_g1_ex14}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid7823", tween: [ "style", "${_g1_ex14}", "display", 'none', { fromValue: 'block'}], position: 3095, duration: 0 },
                { id: "eid7824", tween: [ "style", "${_g1_ex14}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
                { id: "eid7825", tween: [ "style", "${_g1_ex14}", "display", 'none', { fromValue: 'block'}], position: 5250, duration: 0 }            ]
        }
    }
},
"girl11": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'body2',
                    type: 'image',
                    rect: ['-2.7%', '-1.7%', '79%', '99.2%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/body2.png', '0px', '0px']
                },
                {
                    id: 'b_lag2',
                    type: 'image',
                    rect: ['25.3%', '43.3%', '51.1%', '55.5%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/b_lag2.png', '0px', '0px']
                },
                {
                    rect: ['31.2%', '3.6%', '32.3%', '11.2%', 'auto', 'auto'],
                    id: 'g2_ex12',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/g2_ex1.png', '0px', '0px']
                },
                {
                    rect: ['50.2%', '4%', '28.4%', '9.1%', 'auto', 'auto'],
                    id: 'girl2_eye',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/girl1_eye.png', '0px', '0px']
                },
                {
                    id: 'girl1_dress',
                    type: 'image',
                    rect: ['-2.7%', '19.2%', '110.2%', '47.5%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Gril_dress/Gril2/Gd7.png', '0px', '0px']
                },
                {
                    rect: ['83.8%', '32.3%', '32.7%', '19.9%', 'auto', 'auto'],
                    id: 'girl1_hand',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/hand_left.png', '0px', '0px']
                },
                {
                    id: 'hair2',
                    type: 'image',
                    rect: ['16.1%', '-3.8%', '60.2%', '35.2%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/hair2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hair2}": [
                ["style", "left", '16.13%'],
                ["style", "top", '-3.8%']
            ],
            "${_body2}": [
                ["style", "left", '-2.69%'],
                ["style", "top", '-1.69%']
            ],
            "${_g2_ex12}": [
                ["style", "top", '3.59%'],
                ["style", "left", '31.18%'],
                ["style", "display", 'none']
            ],
            "${_girl1_dress}": [
                ["style", "left", '-2.69%'],
                ["style", "top", '19.2%']
            ],
            "${_girl1_hand}": [
                ["style", "top", '30.8%'],
                ["style", "left", '65.05%'],
                ["style", "display", 'block']
            ],
            "${_girl2_eye}": [
                ["style", "top", '4.85%'],
                ["style", "height", '4.01%'],
                ["style", "display", 'none'],
                ["style", "left", '29.57%'],
                ["style", "width", '25.82%']
            ],
            "${_b_lag2}": [
                ["style", "left", '25.27%'],
                ["style", "top", '43.25%']
            ],
            "${symbolSelector}": [
                ["style", "height", '79%'],
                ["style", "width", '23.25%']
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
                { id: "eid7830", tween: [ "style", "${_g2_ex12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid7831", tween: [ "style", "${_g2_ex12}", "display", 'block', { fromValue: 'none'}], position: 393, duration: 0 },
                { id: "eid7832", tween: [ "style", "${_g2_ex12}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
                { id: "eid7833", tween: [ "style", "${_g2_ex12}", "display", 'block', { fromValue: 'none'}], position: 2358, duration: 0 },
                { id: "eid7834", tween: [ "style", "${_g2_ex12}", "display", 'none', { fromValue: 'block'}], position: 3598, duration: 0 },
                { id: "eid7835", tween: [ "style", "${_g2_ex12}", "display", 'block', { fromValue: 'none'}], position: 4409, duration: 0 },
                { id: "eid7836", tween: [ "style", "${_g2_ex12}", "display", 'none', { fromValue: 'block'}], position: 5250, duration: 0 },
                { id: "eid15468", tween: [ "style", "${_girl2_eye}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid15831", tween: [ "style", "${_girl2_eye}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid15832", tween: [ "style", "${_girl2_eye}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid15833", tween: [ "style", "${_girl2_eye}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid15834", tween: [ "style", "${_girl2_eye}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid15835", tween: [ "style", "${_girl2_eye}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid15836", tween: [ "style", "${_girl2_eye}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid15837", tween: [ "style", "${_girl2_eye}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid15838", tween: [ "style", "${_girl2_eye}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid15839", tween: [ "style", "${_girl2_eye}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
                { id: "eid15840", tween: [ "style", "${_girl2_eye}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
                { id: "eid15841", tween: [ "style", "${_girl2_eye}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0 },
                { id: "eid15469", tween: [ "style", "${_girl1_hand}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"mytrigger1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Rectangle8',
                    stroke: [2, 'rgba(249,0,0,0.00)', 'solid'],
                    rect: ['0%', '0%', '93.7%', '92.9%', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,0)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle8}": [
                ["style", "top", '0%'],
                ["color", "border-color", 'rgba(249,0,0,0.00)'],
                ["style", "left", '0%']
            ],
            "${symbolSelector}": [
                ["style", "height", '9.33%'],
                ["style", "width", '7.88%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"next_sym": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'image-158',
                    type: 'image',
                    rect: ['0.4%', '-0.2%', '99.8%', '100.2%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icon/next.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_image-158}": [
                ["style", "top", '-0.02%'],
                ["transform", "scaleY", '1'],
                ["style", "height", '100.2%'],
                ["transform", "scaleX", '1'],
                ["style", "left", '0%'],
                ["style", "width", '99.8%']
            ],
            "${symbolSelector}": [
                ["style", "height", '17.67%'],
                ["style", "width", '13.63%']
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
                { id: "eid4034", tween: [ "style", "${_image-158}", "left", '22.02%', { fromValue: '0%'}], position: 0, duration: 500 },
                { id: "eid4035", tween: [ "style", "${_image-158}", "left", '0%', { fromValue: '22.02%'}], position: 500, duration: 500 }            ]
        }
    }
},
"carpet_sym": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
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
                    rect: ['19%', '7%', '63.2%', '93%', 'auto', 'auto'],
                    id: 'carpet3',
                    fill: ['rgba(0,0,0,0)', 'images/wardrobe%20setting/Carpet/carpet3.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['19.6%', '3.2%', '64.6%', '96.8%', 'auto', 'auto'],
                    id: 'carpet4',
                    fill: ['rgba(0,0,0,0)', 'images/wardrobe%20setting/Carpet/carpet4.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['19.3%', '2.3%', '64.6%', '96.8%', 'auto', 'auto'],
                    id: 'carpet5',
                    fill: ['rgba(0,0,0,0)', 'images/wardrobe%20setting/Carpet/carpet5.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['1.4%', '-0.2%', '98.7%', '97.6%', 'auto', 'auto'],
                    id: 'carpet1',
                    fill: ['rgba(0,0,0,0)', 'images/wardrobe%20setting/Carpet/carpet1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0%', '0.7%', '98.7%', '97.6%', 'auto', 'auto'],
                    id: 'carpet2',
                    fill: ['rgba(0,0,0,0)', 'images/wardrobe%20setting/Carpet/carpet2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_carpet1}": [
                ["style", "top", '-0.18%'],
                ["style", "left", '1.36%'],
                ["style", "display", 'none']
            ],
            "${_carpet5}": [
                ["style", "top", '2.34%'],
                ["style", "left", '19.31%'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '39.77%'],
                ["style", "width", '82.88%']
            ],
            "${_carpet4}": [
                ["style", "top", '3.2%'],
                ["style", "left", '19.61%'],
                ["style", "display", 'none']
            ],
            "${_carpet2}": [
                ["style", "top", '0.68%'],
                ["style", "left", '0.01%'],
                ["style", "display", 'none']
            ],
            "${_carpet3}": [
                ["style", "top", '6.97%'],
                ["style", "left", '19.01%'],
                ["style", "display", 'block']
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
                { id: "eid5724", tween: [ "style", "${_carpet2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5734", tween: [ "style", "${_carpet2}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid5722", tween: [ "style", "${_carpet3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid5727", tween: [ "style", "${_carpet3}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid5725", tween: [ "style", "${_carpet4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5729", tween: [ "style", "${_carpet4}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid5730", tween: [ "style", "${_carpet4}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid5723", tween: [ "style", "${_carpet1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5732", tween: [ "style", "${_carpet1}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid5735", tween: [ "style", "${_carpet1}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid5726", tween: [ "style", "${_carpet5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5731", tween: [ "style", "${_carpet5}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid5733", tween: [ "style", "${_carpet5}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 }            ]
        }
    }
},
"curtain_sym": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
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
                    rect: ['1%', '0.3%', '99%', '99.6%', 'auto', 'auto'],
                    id: 'curtain4',
                    fill: ['rgba(0,0,0,0)', 'images/wardrobe%20setting/Curtain/Curtain/curtain4.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['1%', '0.3%', '99%', '99.6%', 'auto', 'auto'],
                    id: 'curtain5',
                    fill: ['rgba(0,0,0,0)', 'images/wardrobe%20setting/Curtain/Curtain/curtain5.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0%', '0.3%', '99%', '99.6%', 'auto', 'auto'],
                    id: 'curtain1',
                    fill: ['rgba(0,0,0,0)', 'images/wardrobe%20setting/Curtain/Curtain/curtain1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0%', '0%', '99%', '99.6%', 'auto', 'auto'],
                    id: 'curtain2',
                    fill: ['rgba(0,0,0,0)', 'images/wardrobe%20setting/Curtain/Curtain/curtain2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0%', '0.3%', '99%', '99.6%', 'auto', 'auto'],
                    id: 'curtain3',
                    fill: ['rgba(0,0,0,0)', 'images/wardrobe%20setting/Curtain/Curtain/curtain3.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_curtain5}": [
                ["style", "display", 'none'],
                ["style", "height", '99.61%'],
                ["style", "left", '1.02%'],
                ["style", "top", '0.27%']
            ],
            "${_curtain4}": [
                ["style", "display", 'block'],
                ["style", "height", '99.61%'],
                ["style", "left", '1.02%'],
                ["style", "top", '0.27%']
            ],
            "${_curtain1}": [
                ["style", "display", 'none'],
                ["style", "height", '99.61%'],
                ["style", "left", '0%'],
                ["style", "top", '0.27%']
            ],
            "${symbolSelector}": [
                ["style", "height", '60.9%'],
                ["style", "width", '24.51%']
            ],
            "${_curtain2}": [
                ["style", "display", 'none'],
                ["style", "height", '99.61%'],
                ["style", "left", '0%'],
                ["style", "top", '-0.01%']
            ],
            "${_curtain3}": [
                ["style", "display", 'none'],
                ["style", "height", '99.61%'],
                ["style", "left", '0%'],
                ["style", "top", '0.27%']
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
                { id: "eid5737", tween: [ "style", "${_curtain1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5746", tween: [ "style", "${_curtain1}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid5747", tween: [ "style", "${_curtain1}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid5738", tween: [ "style", "${_curtain2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5748", tween: [ "style", "${_curtain2}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid5751", tween: [ "style", "${_curtain2}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid5740", tween: [ "style", "${_curtain5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5744", tween: [ "style", "${_curtain5}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid5745", tween: [ "style", "${_curtain5}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid5739", tween: [ "style", "${_curtain3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5750", tween: [ "style", "${_curtain3}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid5736", tween: [ "style", "${_curtain4}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid5743", tween: [ "style", "${_curtain4}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 }            ]
        }
    }
},
"wardreobe_sym": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
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
                    rect: ['0%', '0%', '100%', '99.8%', 'auto', 'auto'],
                    id: 'wardrobe4',
                    fill: ['rgba(0,0,0,0)', 'images/wardrobe%20setting/Wardrobe/wardrobe4.png', '0px', '0px']
                },
                {
                    type: 'image',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'wardrobe1',
                    opacity: 1,
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/wardrobe%20setting/Wardrobe/wardrobe1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    rect: ['0%', '0%', '100%', '99.8%', 'auto', 'auto'],
                    id: 'wardrobe2',
                    opacity: 1,
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/wardrobe%20setting/Wardrobe/wardrobe2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0%', '0%', '100%', '99.8%', 'auto', 'auto'],
                    id: 'wardrobe3',
                    fill: ['rgba(0,0,0,0)', 'images/wardrobe%20setting/Wardrobe/wardrobe3.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0%', '0%', '100%', '99.8%', 'auto', 'auto'],
                    id: 'wardrobe5',
                    fill: ['rgba(0,0,0,0)', 'images/wardrobe%20setting/Wardrobe/wardrobe5.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_wardrobe3}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'none']
            ],
            "${_wardrobe2}": [
                ["style", "top", '0%'],
                ["style", "opacity", '1'],
                ["style", "left", '0%'],
                ["style", "display", 'none']
            ],
            "${_wardrobe1}": [
                ["style", "top", '0%'],
                ["style", "height", '100%'],
                ["style", "opacity", '1'],
                ["style", "left", '0%'],
                ["style", "display", 'none']
            ],
            "${_wardrobe4}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${_wardrobe5}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'none']
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
                { id: "eid5756", tween: [ "style", "${_wardrobe5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5763", tween: [ "style", "${_wardrobe5}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid5753", tween: [ "style", "${_wardrobe1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5757", tween: [ "style", "${_wardrobe1}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid5759", tween: [ "style", "${_wardrobe1}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid5754", tween: [ "style", "${_wardrobe2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5760", tween: [ "style", "${_wardrobe2}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid5762", tween: [ "style", "${_wardrobe2}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid5752", tween: [ "style", "${_wardrobe4}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid5758", tween: [ "style", "${_wardrobe4}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid5755", tween: [ "style", "${_wardrobe3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5761", tween: [ "style", "${_wardrobe3}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid5764", tween: [ "style", "${_wardrobe3}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 }            ]
        }
    }
},
"jew_frame_sym": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0.8%', '4%', '101.5%', '90%', 'auto', 'auto'],
                    id: 'jewellary_frame12',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/wardrobe%20setting/Jewellary%20frame/jewellary%20frame1.png', '0px', '0px']
                },
                {
                    rect: ['-1%', '2.7%', '107%', '96%', 'auto', 'auto'],
                    id: 'jewellary_frame22',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/wardrobe%20setting/Jewellary%20frame/jewellary%20frame2.png', '0px', '0px']
                },
                {
                    rect: ['-0.7%', '7%', '104%', '87.3%', 'auto', 'auto'],
                    id: 'jewellary_frame32',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/wardrobe%20setting/Jewellary%20frame/jewellary%20frame3.png', '0px', '0px']
                },
                {
                    rect: ['-0.7%', '9%', '104%', '87.3%', 'auto', 'auto'],
                    id: 'jewellary_frame42',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/wardrobe%20setting/Jewellary%20frame/jewellary%20frame4.png', '0px', '0px']
                },
                {
                    rect: ['0%', '11%', '104%', '87.3%', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['1.02878', '1.15326']],
                    id: 'jewellary_frame52',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/wardrobe%20setting/Jewellary%20frame/jewellary%20frame5.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_jewellary_frame12}": [
                ["style", "top", '4.01%'],
                ["style", "left", '0.75%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '49.75%'],
                ["style", "width", '50.13%']
            ],
            "${_jewellary_frame22}": [
                ["style", "top", '-2.01%'],
                ["style", "left", '-1%'],
                ["style", "display", 'none']
            ],
            "${_jewellary_frame32}": [
                ["style", "top", '7.02%'],
                ["style", "left", '-0.75%'],
                ["style", "display", 'none']
            ],
            "${_jewellary_frame42}": [
                ["style", "top", '9.03%'],
                ["style", "left", '-0.75%'],
                ["style", "display", 'none']
            ],
            "${_jewellary_frame52}": [
                ["style", "top", '14.05%'],
                ["transform", "scaleY", '1.2221'],
                ["transform", "scaleX", '1.02878'],
                ["style", "left", '0%'],
                ["style", "display", 'none']
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
                { id: "eid17790", tween: [ "style", "${_jewellary_frame42}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid17797", tween: [ "style", "${_jewellary_frame42}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid17798", tween: [ "style", "${_jewellary_frame42}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid17788", tween: [ "style", "${_jewellary_frame22}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid17793", tween: [ "style", "${_jewellary_frame22}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid17795", tween: [ "style", "${_jewellary_frame22}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid17791", tween: [ "style", "${_jewellary_frame52}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid17799", tween: [ "style", "${_jewellary_frame52}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid17789", tween: [ "style", "${_jewellary_frame32}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid17794", tween: [ "style", "${_jewellary_frame32}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid17796", tween: [ "style", "${_jewellary_frame32}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid17787", tween: [ "style", "${_jewellary_frame12}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid17792", tween: [ "style", "${_jewellary_frame12}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 }            ]
        }
    }
},
"next_sym2": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'next',
                    type: 'image',
                    rect: ['0.1%', '0%', '100.1%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icon/next.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_next}": [
                ["style", "top", '0.01%'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '0.05%']
            ],
            "${symbolSelector}": [
                ["style", "height", '13.14%'],
                ["style", "width", '9.88%']
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
                { id: "eid6101", tween: [ "style", "${_next}", "left", '22.78%', { fromValue: '0.05%'}], position: 0, duration: 500 },
                { id: "eid6102", tween: [ "style", "${_next}", "left", '0.05%', { fromValue: '22.78%'}], position: 500, duration: 500 }            ]
        }
    }
},
"my_hand2": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
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
                    type: 'image',
                    id: 'lefthand2',
                    display: 'block',
                    rect: ['-24.1%', '16.3%', '148.2%', '67.5%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/lefthand.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '13.33%'],
                ["style", "width", '6.75%']
            ],
            "${_lefthand2}": [
                ["style", "top", '16.26%'],
                ["style", "display", 'block'],
                ["style", "left", '-24.06%'],
                ["transform", "rotateZ", '90deg']
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
                { id: "eid107313", tween: [ "style", "${_lefthand2}", "left", '-534.06%', { fromValue: '-24.06%'}], position: 0, duration: 1500 },
                { id: "eid6714", tween: [ "style", "${_lefthand2}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid107314", tween: [ "style", "${_lefthand2}", "top", '-128.71%', { fromValue: '16.26%'}], position: 0, duration: 1500 }            ]
        }
    }
},
"my_hand3": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
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
                    rect: ['-24.1%', '16.3%', '148.2%', '67.5%', 'auto', 'auto'],
                    display: 'block',
                    id: 'lefthand3',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/lefthand.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '13.33%'],
                ["style", "width", '6.75%']
            ],
            "${_lefthand3}": [
                ["style", "top", '16.26%'],
                ["style", "display", 'block'],
                ["style", "left", '-24.06%'],
                ["transform", "rotateZ", '90deg']
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
                { id: "eid107313", tween: [ "style", "${_lefthand3}", "left", '-840.62%', { fromValue: '-24.06%'}], position: 0, duration: 1500 },
                { id: "eid6715", tween: [ "style", "${_lefthand3}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid107314", tween: [ "style", "${_lefthand3}", "top", '220.15%', { fromValue: '16.26%'}], position: 0, duration: 1500 }            ]
        }
    }
},
"my_handsym3": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
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
                    id: 'lefthand_4',
                    rect: ['-24.1%', '16.3%', '148.2%', '67.5%', 'auto', 'auto'],
                    transform: [[0, 0], ['90']],
                    fill: ['rgba(0,0,0,0)', 'images/lefthand.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '13.33%'],
                ["style", "width", '6.75%']
            ],
            "${_lefthand_4}": [
                ["style", "top", '16.27%'],
                ["style", "left", '-38.05%'],
                ["transform", "rotateZ", '90deg']
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
                { id: "eid107865", tween: [ "style", "${_lefthand_4}", "left", '441.16%', { fromValue: '-38.05%'}], position: 0, duration: 1500 },
                { id: "eid10887", tween: [ "style", "${_lefthand_4}", "top", '-66.3%', { fromValue: '16.27%'}], position: 0, duration: 1500 }            ]
        }
    }
},
"g222": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'body13',
                    type: 'image',
                    rect: ['30%', '4.2%', '68.2%', '95.8%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/body1.png', '0px', '0px']
                },
                {
                    id: 'b_lag12',
                    type: 'image',
                    rect: ['29.5%', '46.4%', '48.9%', '55.1%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/b_lag1.png', '0px', '0px']
                },
                {
                    rect: ['0.1%', '29.3%', '45.4%', '17.3%', 'auto', 'auto'],
                    id: 'girl2_h',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/hand_right.png', '0px', '0px']
                },
                {
                    rect: ['52.1%', '8%', '22.6%', '3.8%', 'auto', 'auto'],
                    id: 'girl1_eye',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/girl2_eye.png', '0px', '0px']
                },
                {
                    rect: ['44.2%', '4.2%', '31.3%', '15.4%', 'auto', 'auto'],
                    id: 'g1_ex15',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/g1_ex1.png', '0px', '0px']
                },
                {
                    id: 'girl1_d',
                    type: 'image',
                    rect: ['10.1%', '21.7%', '95.9%', '47.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Gril_dress/Gril1/Sd7.png', '0px', '0px']
                },
                {
                    id: 'hair12',
                    type: 'image',
                    rect: ['34.1%', '-0.2%', '41.9%', '25.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/hair1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_g1_ex15}": [
                ["style", "top", '4.22%'],
                ["style", "left", '44.24%'],
                ["style", "display", 'none']
            ],
            "${_girl1_eye}": [
                ["style", "top", '8.02%'],
                ["style", "left", '52.07%'],
                ["style", "display", 'none']
            ],
            "${_body13}": [
                ["style", "left", '29.95%'],
                ["style", "top", '4.22%']
            ],
            "${symbolSelector}": [
                ["style", "height", '79%'],
                ["style", "width", '27.13%']
            ],
            "${_b_lag12}": [
                ["style", "left", '29.49%'],
                ["style", "top", '46.41%']
            ],
            "${_girl2_h}": [
                ["style", "top", '29.35%'],
                ["style", "left", '0.02%'],
                ["style", "display", 'block']
            ],
            "${_hair12}": [
                ["style", "left", '34.1%'],
                ["style", "top", '-0.21%']
            ],
            "${_girl1_d}": [
                ["style", "left", '10.14%'],
                ["style", "top", '21.73%']
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
                { id: "eid7878", tween: [ "style", "${_g1_ex15}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid7879", tween: [ "style", "${_g1_ex15}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
                { id: "eid7880", tween: [ "style", "${_g1_ex15}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid7873", tween: [ "style", "${_girl1_eye}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid7874", tween: [ "style", "${_girl1_eye}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid7875", tween: [ "style", "${_girl1_eye}", "display", 'none', { fromValue: 'block'}], position: 1867, duration: 0 },
                { id: "eid7876", tween: [ "style", "${_girl1_eye}", "display", 'block', { fromValue: 'none'}], position: 3361, duration: 0 },
                { id: "eid7877", tween: [ "style", "${_girl1_eye}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
                { id: "eid16961", tween: [ "style", "${_girl2_h}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"g111": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'body24',
                    type: 'image',
                    rect: ['0%', '0.8%', '79%', '99.2%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/body2.png', '0px', '0px']
                },
                {
                    id: 'b_lag22',
                    type: 'image',
                    rect: ['28%', '45.8%', '51.1%', '55.5%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/b_lag2.png', '0px', '0px']
                },
                {
                    rect: ['32.3%', '7.4%', '25.8%', '4%', 'auto', 'auto'],
                    id: 'girl2_eye',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/girl1_eye.png', '0px', '0px']
                },
                {
                    id: 'd76',
                    type: 'image',
                    rect: ['-1.6%', '23%', '110.2%', '47.5%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Gril_dress/Gril2/Gd7.png', '0px', '0px']
                },
                {
                    rect: ['67.1%', '32.3%', '32.7%', '19.9%', 'auto', 'auto'],
                    id: 'girl1_handCopy3',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/hand_left.png', '0px', '0px']
                },
                {
                    rect: ['33.9%', '6.1%', '32.3%', '11.2%', 'auto', 'auto'],
                    id: 'g2_ex13',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/g2_ex1.png', '0px', '0px']
                },
                {
                    id: 'hair2',
                    type: 'image',
                    rect: ['19.9%', '-1.5%', '60.2%', '35.2%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/hair2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hair2}": [
                ["style", "left", '19.89%'],
                ["style", "top", '-1.48%']
            ],
            "${_hair22}": [
                ["style", "height", '60.3%']
            ],
            "${_g2_ex13}": [
                ["style", "top", '6.12%'],
                ["style", "left", '33.87%'],
                ["style", "display", 'none']
            ],
            "${_d76}": [
                ["style", "left", '-1.61%'],
                ["style", "top", '23%']
            ],
            "${_girl1_handCopy3}": [
                ["style", "top", '29.96%'],
                ["style", "left", '66.13%'],
                ["style", "display", 'block']
            ],
            "${_b_lag22}": [
                ["style", "left", '27.96%'],
                ["style", "top", '45.78%']
            ],
            "${symbolSelector}": [
                ["style", "height", '79%'],
                ["style", "width", '23.25%']
            ],
            "${_girl2_eye}": [
                ["style", "top", '7.38%'],
                ["style", "left", '32.26%'],
                ["style", "display", 'none']
            ],
            "${_body24}": [
                ["style", "left", '0%'],
                ["style", "top", '0.84%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2603,
            autoPlay: true,
            timeline: [
                { id: "eid7867", tween: [ "style", "${_girl2_eye}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid7868", tween: [ "style", "${_girl2_eye}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid7869", tween: [ "style", "${_girl2_eye}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
                { id: "eid16967", tween: [ "style", "${_girl1_handCopy3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid7870", tween: [ "style", "${_g2_ex13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid7871", tween: [ "style", "${_g2_ex13}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid7872", tween: [ "style", "${_g2_ex13}", "display", 'none', { fromValue: 'block'}], position: 2603, duration: 0 }            ]
        }
    }
},
"mytrigger2": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [2, 'rgba(0,0,0,0.00)', 'solid'],
                    rect: ['0.1%', '0.1%', '94.3%', '90%', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '6.67%'],
                ["style", "width", '8.75%']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["color", "border-color", 'rgba(0,0,0,0.00)'],
                ["style", "border-width", '2px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0.06%'],
                ["style", "top", '0.05%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"hand1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'dressuphand1',
                    type: 'image',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/lefthand.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '9%'],
                ["style", "width", '10%']
            ],
            "${_dressuphand1}": [
                ["style", "left", '0%'],
                ["style", "top", '0%']
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
                { id: "eid108065", tween: [ "style", "${_dressuphand1}", "left", '-38.75%', { fromValue: '0%'}], position: 0, duration: 500 },
                { id: "eid108067", tween: [ "style", "${_dressuphand1}", "left", '0%', { fromValue: '-38.75%'}], position: 500, duration: 500 }            ]
        }
    }
},
"girl2fyn": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'body14',
                    type: 'image',
                    rect: ['30%', '4.2%', '68.2%', '95.8%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/body1.png', '0px', '0px']
                },
                {
                    id: 'sw_default1',
                    type: 'image',
                    rect: ['29.5%', '46.2%', '48.9%', '55.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/b_lag1.png', '0px', '0px']
                },
                {
                    id: 'sw_five2',
                    type: 'image',
                    rect: ['25.8%', '85.2%', '52.5%', '17.1%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_shoes/G1_Shoes/G1_S5.png', '0px', '0px']
                },
                {
                    id: 'sw_four2',
                    type: 'image',
                    rect: ['25.8%', '88.2%', '53%', '14.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_shoes/G1_Shoes/G1_S4.png', '0px', '0px']
                },
                {
                    id: 'sw_three2',
                    type: 'image',
                    rect: ['26.7%', '88.2%', '50.7%', '13.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_shoes/G1_Shoes/G1_S3.png', '0px', '0px']
                },
                {
                    id: 'sw_two2',
                    type: 'image',
                    rect: ['28.6%', '86.9%', '49.3%', '13.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_shoes/G1_Shoes/G1_S2.png', '0px', '0px']
                },
                {
                    id: 'sw_one2',
                    type: 'image',
                    rect: ['25.4%', '88.8%', '52.5%', '12%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_shoes/G1_Shoes/G1_S1.png', '0px', '0px']
                },
                {
                    id: 'girl2_handr',
                    type: 'image',
                    rect: ['0%', '29.4%', '45.4%', '17.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/hand_right.png', '0px', '0px']
                },
                {
                    rect: ['44.2%', '4.2%', '31.3%', '15.4%', 'auto', 'auto'],
                    id: 'g1_ex16',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/g1_ex1.png', '0px', '0px']
                },
                {
                    rect: ['51.6%', '8%', '22.6%', '3.8%', 'auto', 'auto'],
                    id: 'girl1_eye',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/girl2_eye.png', '0px', '0px']
                },
                {
                    rect: ['10.2%', '11.8%', '89.9%', '50.4%', 'auto', 'auto'],
                    id: 'girl2_dress',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/dress/image-2574.png', '0px', '0px']
                },
                {
                    id: 'dress_sym',
                    type: 'rect',
                    rect: ['10.6%', '16.9%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'hair13',
                    type: 'image',
                    rect: ['34.1%', '-0.2%', '41.9%', '25.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/hair1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'dress_sym',
                symbolName: 'dress_change_sym1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_g1_ex16}": [
                ["style", "top", '4.22%'],
                ["style", "left", '44.24%'],
                ["style", "display", 'block']
            ],
            "${_girl1_eye}": [
                ["style", "top", '8.02%'],
                ["style", "left", '51.61%'],
                ["style", "display", 'none']
            ],
            "${_sw_three2}": [
                ["style", "left", '26.73%'],
                ["style", "top", '88.19%']
            ],
            "${_sw_four2}": [
                ["style", "left", '25.81%'],
                ["style", "top", '88.19%']
            ],
            "${_sw_two2}": [
                ["style", "top", '86.92%'],
                ["style", "left", '28.57%']
            ],
            "${_sw_one2}": [
                ["style", "top", '88.82%'],
                ["style", "left", '25.35%']
            ],
            "${_sw_five2}": [
                ["style", "top", '85.23%'],
                ["style", "left", '25.81%']
            ],
            "${_sw_default1}": [
                ["style", "left", '29.49%'],
                ["style", "top", '46.19%']
            ],
            "${_body14}": [
                ["style", "left", '29.95%'],
                ["style", "top", '4.22%']
            ],
            "${_girl2_handr}": [
                ["style", "left", '0.02%'],
                ["style", "top", '29.35%']
            ],
            "${_girl2_dress}": [
                ["style", "top", '20.18%'],
                ["style", "height", '50.21%'],
                ["style", "display", 'none'],
                ["style", "left", '8.29%'],
                ["style", "width", '113.83%']
            ],
            "${symbolSelector}": [
                ["style", "height", '79%'],
                ["style", "width", '27.13%']
            ],
            "${_hair13}": [
                ["style", "left", '34.1%'],
                ["style", "top", '-0.21%']
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
                { id: "eid7915", tween: [ "style", "${_girl1_eye}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid7917", tween: [ "style", "${_girl1_eye}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid7918", tween: [ "style", "${_girl1_eye}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
                { id: "eid7919", tween: [ "style", "${_g1_ex16}", "display", 'none', { fromValue: 'block'}], position: 1595, duration: 0 },
                { id: "eid7920", tween: [ "style", "${_g1_ex16}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid71272", tween: [ "style", "${_girl2_dress}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"dress_change_sym": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'default',
                    type: 'image',
                    rect: ['19%', '11.2%', '84.2%', '52.2%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/dress/G2/d7.png', '0px', '0px']
                },
                {
                    id: 'd1',
                    type: 'image',
                    rect: ['32.8%', '6.8%', '74.5%', '55.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/dress/G1/d1.png', '0px', '0px']
                },
                {
                    id: 'd2',
                    type: 'image',
                    rect: ['24.3%', '4.2%', '75.7%', '57.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/dress/G1/d22.png', '0px', '0px']
                },
                {
                    id: 'd22',
                    type: 'image',
                    rect: ['95px', '28px', '127px', '223px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/dress/G1/d2.png', '0px', '0px']
                },
                {
                    id: 'd3',
                    type: 'image',
                    rect: ['31.2%', '5.2%', '63.2%', '58.2%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/dress/G1/d32.png', '0px', '0px']
                },
                {
                    id: 'd4',
                    type: 'image',
                    rect: ['42.1%', '4.6%', '51.4%', '77.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/dress/G1/d42.png', '0px', '0px']
                },
                {
                    id: 'd5',
                    type: 'image',
                    rect: ['20.3%', '7.7%', '77.3%', '92.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/dress/G1/d52.png', '0px', '0px']
                },
                {
                    id: 'd6',
                    type: 'image',
                    rect: ['0%', '5.2%', '90.7%', '92.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/dress/G1/d62.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_d3}": [
                ["style", "top", '5.13%'],
                ["style", "left", '31.17%'],
                ["style", "width", '63.16%']
            ],
            "${_d2}": [
                ["style", "height", '57.58%'],
                ["style", "top", '4.19%'],
                ["style", "left", '24.29%'],
                ["style", "width", '75.72%']
            ],
            "${_d6}": [
                ["style", "height", '92.3%'],
                ["style", "top", '5.13%'],
                ["style", "left", '0%'],
                ["style", "width", '90.7%']
            ],
            "${_d4}": [
                ["style", "height", '77.32%'],
                ["style", "top", '4.66%'],
                ["style", "left", '42.11%'],
                ["style", "width", '51.43%']
            ],
            "${_d5}": [
                ["style", "left", '20.24%'],
                ["style", "top", '7.7%']
            ],
            "${symbolSelector}": [
                ["style", "height", '90.51%'],
                ["style", "width", '113.83%']
            ],
            "${_default}": [
                ["style", "left", '19.03%'],
                ["style", "top", '11.19%']
            ],
            "${_d1}": [
                ["style", "left", '32.79%'],
                ["style", "top", '6.76%']
            ],
            "${_d22}": [
                ["style", "left", '95px'],
                ["style", "top", '28px']
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
"girl1fyn": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'body2',
                    type: 'image',
                    rect: ['0%', '0.8%', '79%', '99.2%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/body2.png', '0px', '0px']
                },
                {
                    id: 'b_lag23',
                    type: 'image',
                    rect: ['28%', '45.8%', '51.1%', '55.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/b_lag2.png', '0px', '0px']
                },
                {
                    rect: ['33.9%', '6.1%', '32.3%', '11.2%', 'auto', 'auto'],
                    id: 'g2_ex14',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/g2_ex1.png', '0px', '0px']
                },
                {
                    rect: ['32.3%', '7.2%', '25.8%', '4%', 'auto', 'auto'],
                    id: 'girl2_eye',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/girl1_eye.png', '0px', '0px']
                },
                {
                    id: 'd77',
                    type: 'image',
                    rect: ['-2.7%', '22.8%', '110.2%', '47.5%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Gril_dress/Gril2/Gd7.png', '0px', '0px']
                },
                {
                    rect: ['67.1%', '32.3%', '32.7%', '19.9%', 'auto', 'auto'],
                    id: 'girl_hand',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/hand_left.png', '0px', '0px']
                },
                {
                    id: 'hair23',
                    type: 'image',
                    rect: ['19.4%', '-1.3%', '60.2%', '35.2%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/hair2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_b_lag23}": [
                ["style", "left", '27.96%'],
                ["style", "top", '45.76%']
            ],
            "${_hair23}": [
                ["style", "left", '19.35%'],
                ["style", "top", '-1.27%']
            ],
            "${_body2}": [
                ["style", "left", '0%'],
                ["style", "top", '0.84%']
            ],
            "${symbolSelector}": [
                ["style", "height", '79%'],
                ["style", "width", '23.25%']
            ],
            "${_g2_ex14}": [
                ["style", "top", '6.12%'],
                ["style", "left", '33.87%'],
                ["style", "display", 'block']
            ],
            "${_girl2_eye}": [
                ["style", "top", '7.17%'],
                ["style", "left", '32.26%'],
                ["style", "display", 'none']
            ],
            "${_d77}": [
                ["style", "left", '-2.69%'],
                ["style", "top", '22.78%']
            ],
            "${_girl_hand}": [
                ["style", "top", '32.28%'],
                ["style", "left", '67.23%'],
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
                { id: "eid7908", tween: [ "style", "${_girl2_eye}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid7909", tween: [ "style", "${_girl2_eye}", "display", 'block', { fromValue: 'none'}], position: 663, duration: 0 },
                { id: "eid7910", tween: [ "style", "${_girl2_eye}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid7911", tween: [ "style", "${_girl2_eye}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid7912", tween: [ "style", "${_girl2_eye}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid7905", tween: [ "style", "${_g2_ex14}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid7906", tween: [ "style", "${_g2_ex14}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
                { id: "eid7907", tween: [ "style", "${_g2_ex14}", "display", 'none', { fromValue: 'block'}], position: 2874, duration: 0 },
                { id: "eid17520", tween: [ "style", "${_girl_hand}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"gril_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'body1',
                    type: 'image',
                    rect: ['28.3%', '0%', '64.4%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/body1.png', '0px', '0px']
                },
                {
                    id: 'exp_1',
                    type: 'rect',
                    rect: ['41.7%', '0%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'eye_1',
                    type: 'rect',
                    rect: ['49.1%', '4%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'left_hand',
                    type: 'image',
                    rect: ['0.4%', '124px', '42.6%', '18.1%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/hand_right.png', '0px', '0px']
                },
                {
                    id: 'd72',
                    type: 'image',
                    rect: ['9.6%', '18.9%', '90.4%', '49.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Gril_dress/Gril1/Sd7.png', '0px', '0px']
                },
                {
                    id: 'hair1',
                    type: 'image',
                    rect: ['32.2%', '-4.6%', '39.6%', '26.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/hair1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'eye_1',
                symbolName: 'eye_1',
                autoPlay: {

               }
            },
            {
                id: 'exp_1',
                symbolName: 'exp_1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '75.67%'],
                ["style", "width", '28.75%']
            ],
            "${_hair1}": [
                ["style", "left", '32.17%'],
                ["style", "top", '-4.63%']
            ],
            "${_body1}": [
                ["style", "top", '0%'],
                ["style", "left", '28.28%']
            ],
            "${_left_hand}": [
                ["style", "left", '0.43%'],
                ["style", "top", '124px']
            ],
            "${_d72}": [
                ["style", "left", '9.57%'],
                ["style", "top", '18.94%']
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
            ]
        }
    }
},
"gril_2": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'body2',
                    type: 'image',
                    rect: ['3.4%', '0%', '71.7%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/body2.png', '0px', '0px']
                },
                {
                    id: 'd73',
                    type: 'image',
                    rect: ['0%', '20.2%', '100%', '47.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Gril_dress/Gril2/Gd7.png', '0px', '0px']
                },
                {
                    id: 'right_hand',
                    type: 'image',
                    rect: ['63.4%', '30%', '29.8%', '20%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/hand_left.png', '0px', '0px']
                },
                {
                    id: 'eye2',
                    type: 'rect',
                    rect: ['32.7%', '6.6%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'exp_2',
                    type: 'rect',
                    rect: ['34.2%', '5.3%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'hair2',
                    type: 'image',
                    rect: ['21.5%', '-2%', '54.6%', '35.5%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/hair2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'exp_2',
                symbolName: 'exp_2',
                autoPlay: {

               }
            },
            {
                id: 'eye2',
                symbolName: 'eye2',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_hair2}": [
                ["style", "left", '21.46%'],
                ["style", "top", '-2.05%']
            ],
            "${_right_hand}": [
                ["style", "left", '63.43%'],
                ["style", "top", '30%']
            ],
            "${_body2}": [
                ["style", "top", '0%'],
                ["style", "left", '3.41%']
            ],
            "${symbolSelector}": [
                ["style", "height", '78.33%'],
                ["style", "width", '25.63%']
            ],
            "${_d73}": [
                ["style", "left", '0%'],
                ["style", "top", '20.21%']
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
            ]
        }
    }
},
"eye_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0%', '-0.1%', '100%', '99.9%', 'auto', 'auto'],
                    id: 'girl1_eye',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/girl2_eye.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_girl1_eye}": [
                ["style", "top", '-0.11%'],
                ["style", "left", '0%'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '3.96%'],
                ["style", "width", '21.31%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1646,
            autoPlay: true,
            timeline: [
                { id: "eid7568", tween: [ "style", "${_girl1_eye}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid7569", tween: [ "style", "${_girl1_eye}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid7570", tween: [ "style", "${_girl1_eye}", "display", 'none', { fromValue: 'block'}], position: 1646, duration: 0 }            ]
        }
    }
},
"exp_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
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
                    id: 'g1_ex1',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/g1_ex1.png', '0px', '0px']
                },
                {
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'g1_ex2',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/g1_ex2.png', '0px', '0px']
                },
                {
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    id: 'g1_ex3',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/g1_ex3.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_g1_ex2}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${_g1_ex3}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${_g1_ex1}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '16.08%'],
                ["style", "width", '29.57%']
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
                { id: "eid7573", tween: [ "style", "${_g1_ex1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid7574", tween: [ "style", "${_g1_ex1}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid7576", tween: [ "style", "${_g1_ex1}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
                { id: "eid7572", tween: [ "style", "${_g1_ex2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid7575", tween: [ "style", "${_g1_ex2}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid7578", tween: [ "style", "${_g1_ex2}", "display", 'none', { fromValue: 'block'}], position: 4912, duration: 0 },
                { id: "eid7571", tween: [ "style", "${_g1_ex3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid7577", tween: [ "style", "${_g1_ex3}", "display", 'block', { fromValue: 'none'}], position: 4912, duration: 0 }            ]
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
                    rect: ['0%', '0.1%', '100%', '100%', 'auto', 'auto'],
                    id: 'girl2_eye',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/girl1_eye.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_girl2_eye}": [
                ["style", "top", '0.11%'],
                ["style", "left", '-0.02%'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '4.04%'],
                ["style", "width", '23.42%']
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
                { id: "eid7579", tween: [ "style", "${_girl2_eye}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid7580", tween: [ "style", "${_girl2_eye}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
                { id: "eid12369", tween: [ "style", "${_girl2_eye}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 }            ]
        }
    }
},
"exp_2": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
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
                    id: 'g2_ex1',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/g2_ex1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_g2_ex1}": [
                ["style", "top", '0%'],
                ["style", "left", '0.02%'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '11.28%'],
                ["style", "width", '29.27%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2849,
            autoPlay: true,
            timeline: [
                { id: "eid7629", tween: [ "style", "${_g2_ex1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid7630", tween: [ "style", "${_g2_ex1}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid12370", tween: [ "style", "${_g2_ex1}", "display", 'none', { fromValue: 'block'}], position: 2849, duration: 0 }            ]
        }
    }
},
"dress_change_sym1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'dres7',
                    type: 'image',
                    rect: ['0%', '6.9%', '97.2%', '67.1%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Gril_dress/Gril1/Sd7.png', '0px', '0px']
                },
                {
                    rect: ['14%', '0%', '86%', '71.9%', 'auto', 'auto'],
                    id: 'dres1',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/Gril_dress/Gril1/Sd1.png', '0px', '0px']
                },
                {
                    rect: ['20.1%', '0.6%', '59.4%', '66.8%', 'auto', 'auto'],
                    id: 'dres2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/Gril_dress/Gril1/Sd2.png', '0px', '0px']
                },
                {
                    rect: ['14.5%', '1.5%', '70.6%', '98.5%', 'auto', 'auto'],
                    id: 'dres3',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/Gril_dress/Gril1/Sd3.png', '0px', '0px']
                },
                {
                    rect: ['19.2%', '1.5%', '62.6%', '72.5%', 'auto', 'auto'],
                    id: 'dres4',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/Gril_dress/Gril1/Sd4.png', '0px', '0px']
                },
                {
                    rect: ['18.7%', '4.5%', '61.2%', '68.6%', 'auto', 'auto'],
                    id: 'dres5',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/Gril_dress/Gril1/Sd5.png', '0px', '0px']
                },
                {
                    rect: ['18.2%', '1.2%', '64%', '63.2%', 'auto', 'auto'],
                    id: 'dres6',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/Gril_dress/Gril1/Sd6.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_dres7}": [
                ["style", "left", '0%'],
                ["style", "top", '6.89%']
            ],
            "${symbolSelector}": [
                ["style", "height", '70.46%'],
                ["style", "width", '98.62%']
            ],
            "${_dres2}": [
                ["style", "top", '0.6%'],
                ["style", "left", '20.09%'],
                ["style", "display", 'none']
            ],
            "${_dres6}": [
                ["style", "top", '1.19%'],
                ["style", "left", '18.22%'],
                ["style", "display", 'none']
            ],
            "${_dres1}": [
                ["style", "top", '0%'],
                ["style", "left", '14.01%'],
                ["style", "display", 'none']
            ],
            "${_dres4}": [
                ["style", "top", '1.49%'],
                ["style", "left", '19.15%'],
                ["style", "display", 'none']
            ],
            "${_dres5}": [
                ["style", "top", '4.49%'],
                ["style", "left", '18.69%'],
                ["style", "display", 'none']
            ],
            "${_dres3}": [
                ["style", "top", '1.49%'],
                ["style", "left", '14.48%'],
                ["style", "display", 'none']
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
                { id: "eid8541", tween: [ "style", "${_dres1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid8545", tween: [ "style", "${_dres5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid8544", tween: [ "style", "${_dres4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid8546", tween: [ "style", "${_dres6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid8542", tween: [ "style", "${_dres2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid8543", tween: [ "style", "${_dres3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"hand2": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'righthand2',
                    type: 'image',
                    rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/lefthand.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '9%'],
                ["style", "width", '10%']
            ],
            "${_righthand2}": [
                ["style", "top", '0.04%'],
                ["style", "left", '0.05%']
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
                { id: "eid108170", tween: [ "style", "${_righthand2}", "left", '20%', { fromValue: '0.05%'}], position: 0, duration: 500 },
                { id: "eid108171", tween: [ "style", "${_righthand2}", "left", '0.05%', { fromValue: '20%'}], position: 500, duration: 500 }            ]
        }
    }
},
"Symbol_1eyye1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
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
                    rect: ['0%', '0%', '99.1%', '101%', 'auto', 'auto'],
                    id: 'girl1_closed_eye',
                    fill: ['rgba(0,0,0,0)', 'images/character/girl1_closed_eye2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '7%'],
                ["style", "width", '6.75%']
            ],
            "${_girl1_closed_eye}": [
                ["style", "top", '-0.05%'],
                ["style", "height", '101%'],
                ["style", "display", 'none'],
                ["style", "left", '0%'],
                ["style", "width", '99.12%']
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
                { id: "eid120495", tween: [ "style", "${_girl1_closed_eye}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid120496", tween: [ "style", "${_girl1_closed_eye}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid120498", tween: [ "style", "${_girl1_closed_eye}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 }            ]
        }
    }
},
"eye3": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0.1%', '-0.1%', '100%', '100.1%', 'auto', 'auto'],
                    id: 'girl1_closed_eye4',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/gril_body_part/girl1_eye.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '3.17%'],
                ["style", "width", '6%']
            ],
            "${_girl1_closed_eye4}": [
                ["style", "top", '-0.11%'],
                ["style", "left", '0.08%'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1750,
            autoPlay: true,
            timeline: [
                { id: "eid9125", tween: [ "style", "${_girl1_closed_eye4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid9126", tween: [ "style", "${_girl1_closed_eye4}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid9127", tween: [ "style", "${_girl1_closed_eye4}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 }            ]
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
                    id: 'replay',
                    type: 'image',
                    rect: ['0%', '0.5%', '100.1%', '100.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icon/replay.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_replay}": [
                ["style", "top", '0.52%'],
                ["transform", "scaleY", '1'],
                ["style", "height", '100.69%'],
                ["transform", "scaleX", '1'],
                ["style", "left", '-0.02%'],
                ["style", "width", '99.88%']
            ],
            "${symbolSelector}": [
                ["style", "height", '100%'],
                ["style", "width", '26.59%']
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
                { id: "eid9616", tween: [ "transform", "${_replay}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid9617", tween: [ "transform", "${_replay}", "scaleX", '1', { fromValue: '0.8'}], position: 500, duration: 500 },
                { id: "eid9618", tween: [ "transform", "${_replay}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid9619", tween: [ "transform", "${_replay}", "scaleY", '1', { fromValue: '0.8'}], position: 500, duration: 500 }            ]
        }
    }
},
"more_sym": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'image-166',
                    type: 'image',
                    rect: ['0%', '0%', '99.7%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icon/more.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '100%'],
                ["style", "width", '26.59%']
            ],
            "${_image-166}": [
                ["style", "top", '0%'],
                ["transform", "scaleY", '1'],
                ["style", "height", '98.77%'],
                ["transform", "scaleX", '1'],
                ["style", "left", '-0.01%'],
                ["style", "width", '100.01%']
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
                { id: "eid15149", tween: [ "style", "${_image-166}", "width", '100.01%', { fromValue: '100.01%'}], position: 0, duration: 0 },
                { id: "eid15148", tween: [ "style", "${_image-166}", "height", '98.77%', { fromValue: '98.77%'}], position: 0, duration: 0 },
                { id: "eid9624", tween: [ "transform", "${_image-166}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid9625", tween: [ "transform", "${_image-166}", "scaleX", '1', { fromValue: '0.8'}], position: 500, duration: 500 },
                { id: "eid9626", tween: [ "transform", "${_image-166}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid9627", tween: [ "transform", "${_image-166}", "scaleY", '1', { fromValue: '0.8'}], position: 500, duration: 500 }            ]
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
})(jQuery, AdobeEdge, "EDGE-2495312617");
