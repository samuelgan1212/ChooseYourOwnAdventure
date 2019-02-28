// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {
        start: {
            message: "Set in year 2045, You are an 11-year-old orphan living in Grace Field House, a small orphanage housing you and your 37 siblings. Life had never been better; with food that tasted gourmet, plush beds, snow-white uniforms, and the love of your Mother (the caretaker). But one day, when the Mother bring your friend to outside, your friend left a toy in your house. Do you bring it to her or not?",
            choices: [
                {
                    text: "Bring it to her",
                    nextLevel: "questions",
                },

                {
                    text: "Nah. Too lazy",
                    nextLevel: "Stayhome",
                },
            ]
        },

        questions: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "When you walk to outside, you see a car. Your curiousity make you open the car's door. When you opened the door, you see your friend's dead body. Suddenly, you hear footstep sound",
            choices: [
                {
                    text: "Run away",
                    nextLevel: "Backedhome",
                },
                {
                    text:"Stay under the car",
                    nextLevel:"Badending1",
                }
            ]
        },

        Stayhome: {
            message: "When you stay at home and after a while, your Mother walked to you and ask you to go out with her",
            choices: [
                {
                    text: "Stay home",
                    nextLevel: "outhome",
                },
                {
                    text:"Go out with her",
                    nextLevel:"Badending2",
                }
      
            ]
        },
         Backedhome:{
            message:"During the way you walked back home, your Mother saw you and ask you where did you go?",
            choices:[
                {
                    text:"Tell her honestly",
                    nextLevel:"Badending3",
                },
                {
                    text:"Lie to her",
                    nextLevel:"",
                }
                ]
        },
        Badending1:{
            message:"You tried to hide under the car and closed your eyes. Suddenly, you open your eyes and saw a demon's face in the front of you. THe last word you heard is Good Night"
        },
        outhome:{
            message:"You went out with your mother. When you guys walked near to gate, you suddenly felt weird and choose different way with your Mother. Suddenly you saw a monster that looks like a demon",
            choices:[
                {
                    text:"Stay under bushes",
                    nextLevel:"",
                    
                },
                ]
        },

    }
};
