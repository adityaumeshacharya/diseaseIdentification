'use strict';

var app = angular.module('demo', ['ngSanitize', 'ui.select']);

app.controller('DemoCtrl', function($scope, $http, $window) {
    var prediction = [];
    //$scope.prediction = func();
    $scope.arr = [['Aditya', 'Acharya'],['Adesh','Gautam']];
    $scope.clear = function() {
        $scope.tags.selected = undefined;
        $scope.tags.selected1 = undefined;
    };
    $scope.patientName = "";
    $scope.patientPhone = "";
    $scope.identity = function(e) {
        return e;
    };

    var prediction = [];
    var count = 0;
    var data = "";

    $scope.spliceFromArray1 = function() {
        //var data = "";
        count = count + 1;
        $scope.splicifiy($scope.tags.abc);
        console.log(prediction);
        for (var j = 0, len = prediction.length; j < len; j++) {}
        if (count % 2 == 0) {
            console.log("hiii from count1!!! : " + count);
            var k = j - 1;
            prediction.splice(k, 1);
            console.log("latest prediction is:");
            console.log(prediction);
            data = prediction.join();
            var dataToSend = {
                symptoms: data
            }
            console.log("data is:");
            console.log(dataToSend);
            count = 0;

        }
    }
    $scope.spliceFromArray2 = function() {
        //var data = "";
        count = count + 1;
        $scope.splicifiy($scope.tags.def);
        for (var j = 0, len = prediction.length; j < len; j++) {}
        if (count % 2 == 0) {
            console.log("hiii from count2!!! : " + count);
            var k = j - 1;
            prediction.splice(k, 1);
            console.log("latest prediction is:");
            console.log(prediction);
            data = prediction.join();
            var dataToSend = {
                symptoms: data
            }
            console.log("data is:");
            console.log(dataToSend);
            count = 0;

        }
    }
    $scope.spliceFromArray3 = function() {
        //var data = "";
        count = count + 1;
        $scope.splicifiy($scope.tags.ghi);
        for (var j = 0, len = prediction.length; j < len; j++) {}
        if (count % 2 == 0) {
            console.log("hiii from count3!!! : " + count);
            var k = j - 1;
            prediction.splice(k, 1);
            console.log("latest prediction is:");
            console.log(prediction);
            data = prediction.join();
            var dataToSend = {
                symptoms: data
            }
            console.log("data is:");
            console.log(dataToSend);
            count = 0;

        }
    }
    $scope.spliceFromArray4 = function() {
        //var data = "";
        count = count + 1;
        $scope.splicifiy($scope.tags.jkl);
        for (var j = 0, len = prediction.length; j < len; j++) {}
        if (count % 2 == 0) {
            console.log("hiii from count4!!! : " + count);
            var k = j - 1;
            prediction.splice(k, 1);
            console.log("latest prediction is:");
            console.log(prediction);
            data = prediction.join();
            var dataToSend = {
                symptoms: data
            }
            console.log("data is:");
            console.log(dataToSend);
            count = 0;

        }
    }

    // $scope.addBasicSymptom1 = function() {
    //     $scope.splicifiy($scope.tags.abc);
    //     console.log($scope.tags.abc);
    //     $http.post("/users/symptom", { val: $scope.tags.abc }).then(function(res) {
    //         $scope.data = res.data;
    //         console.log($scope.data);
    //         $scope.tags.available.splice($scope.tags.abc, 1);
    //         console.log($scope.tags.available);
    //         prediction.push($scope.tags.abc);
    //         console.log(prediction);
    //         $scope.subSymptom = {
    //             create: function(text) {
    //                 return {
    //                     name: text[0].toUpperCase() + text.slice(1),
    //                 };
    //             },
    //             available: $scope.data
    //         };
    //     })
    // };
    // $scope.addBasicSymptom2 = function() {
    //     $scope.splicifiy($scope.tags.def);
    //     console.log($scope.tags.def);
    //     $http.post("/users/symptom", { val: $scope.tags.def }).then(function(res) {
    //         $scope.data = res.data;
    //         console.log($scope.data);
    //         $scope.tags.available.splice($scope.tags.def, 1);
    //         //console.log($scope.tags.available);
    //         prediction.push($scope.tags.def);
    //         console.log(prediction);
    //         $scope.subSymptom = {
    //             create: function(text) {
    //                 return {
    //                     name: text[0].toUpperCase() + text.slice(1),
    //                 };
    //             },
    //             available: $scope.data
    //         };
    //     })
    // };
    // $scope.addBasicSymptom3 = function() {
    //     $scope.splicifiy($scope.tags.ghi);
    //     console.log($scope.tags.ghi);
    //     $http.post("/users/symptom", { val: $scope.tags.ghi }).then(function(res) {
    //         $scope.data = res.data;
    //         console.log($scope.data);
    //         $scope.tags.available.splice($scope.tags.ghi, 1);
    //         console.log($scope.tags.available);
    //         prediction.push($scope.tags.ghi);
    //         console.log(prediction);
    //         $scope.subSymptom = {
    //             create: function(text) {
    //                 return {
    //                     name: text[0].toUpperCase() + text.slice(1),
    //                 };
    //             },
    //             available: $scope.data
    //         };
    //     })
    // };
    // $scope.addBasicSymptom4 = function() {
    //     $scope.splicifiy($scope.tags.jkl);
    //     console.log($scope.tags.jkl);
    //     $http.post("/users/symptom", { val: $scope.tags.jkl }).then(function(res) {
    //         $scope.data = res.data;
    //         console.log($scope.data);
    //         $scope.tags.available.splice($scope.tags.jkl, 1);
    //         console.log($scope.tags.available);
    //         prediction.push($scope.tags.jkl);
    //         console.log(prediction);
    //         $scope.subSymptom = {
    //             create: function(text) {
    //                 return {
    //                     name: text[0].toUpperCase() + text.slice(1),
    //                 };
    //             },
    //             available: $scope.data
    //         };
    //     })
    // };
    $scope.parseJson = (diseases)=>{
        var json = diseases;
            var stringJson = JSON.stringify(json);
            var parse = function(json) {
                json = json.replace(/[*+?^${}()' |[\]\\]/g, "");
                var arr = json.split(',');
                // console.log("array: ", arr);
                var arr1 = [];
                    //arr2 = [];

                for (var i = 0; i < arr.length; i++) {
                    var t = arr[i].split(':');
                    arr1.push([t[0],parseFloat(t[1])*100]);
                    //arr2.push(t[1]);
                }
                // console.log(arr1);
                // console.log(arr2);
                //var ret = [];
                //ret.push(arr1, arr2);
                return arr1;
            }
            return (parse(stringJson));
            

    }
    // $scope.redirect = ()=>{
    //     var c=0;
    //     if(c==0){
    //         $window.location.href = '/users/prediction';
    //         c=1;
    //     }
    //     if(c==1){
    //         $scope.predictDisease();
    //     }
        
    //}

    $scope.predictDisease = function() {
        var dataToSend = {
            "name": $scope.patientName,
            "phone": $scope.patientPhone,
            "symptoms": data
        }
        console.log("dataToSend is:");
        console.log(dataToSend);
        $http.post("https://disease-id-helper.herokuapp.com/process_symptoms/", dataToSend).then(function(res) {
            console.log("The response is:");
            $scope.diseases = res.data.diseases;
            console.log($scope.diseases);
            $scope.prediction = $scope.parseJson($scope.diseases);
            data = {
                "name": $scope.patientName,
                "phone": $scope.patientPhone,
                "symptoms": data,
                "prediction":$scope.prediction[0]
            }
            $http.post("/users/prediction/", data).success((data,res)=>{
                console.log('Data posted successfully');
            })
            
            
        });

    }

    $scope.splicifiy = function(identifier) {
        var j = 0;
        console.log(identifier);
        prediction.push(identifier);
        console.log(prediction);
        for (var j = 0, len = prediction.length; j < len; j++) {}
        console.log("j is: " + j);
        for (var i = 0, n = $scope.tags.available.length; i < n; i++) {
            if ($scope.tags.available[i] == identifier) {
                console.log($scope.tags.available[i]);
                $scope.tags.available.splice(i, 1);
                break;
            }
        }
    }




    $scope.tags = {
        create: function(text) {
            return text[0].toUpperCase() + text.slice(1);
        },
        available: [
            "Abnormal gait (walking)",
            "Abnormal muscle enlargement (hypertrophy)",
            "Abnormally round face",
            "Agitation",
            "Anxiety",
            "Apathy",
            "Bad breath",
            "Bad taste in mouth",
            "Bald spots (hair)",
            "Belching",
            "Binge drinking (alcohol)",
            "Binge eating",
            "Bitter almond odor on breath",
            "Black (tar) colored stools",
            "Black colored skin",
            "Blackouts (memory time loss)",
            "Blank stare",
            "Bleeding",
            "Bleeding from nipple",
            "Bleeding gums",
            "Bleeding in eye",
            "Blind spot in vision",
            "Blindness",
            "Blinking eyes",
            "Bloating or fullness",
            "Blood in toilet",
            "Blood on stool surface",
            "Blood on toilet tissue",
            "Blood or red colored urine",
            "Bloody or red colored stools",
            "Bloody or red colored vomit",
            "Blue colored skin",
            "Blue coloured lips",
            "Blurred vision",
            "Body aches or pains",
            "Brittle hair",
            "Broken bone (single fracture)",
            "Broken bones (multiple fractures)",
            "Bruising or discoloration",
            "Bulging eyes",
            "Bulging neck veins",
            "Bulging veins",
            "Change in bowel habits",
            "Change in hair texture",
            "Change in stools",
            "Change in vision",
            "Chills",
            "Choking",
            "Choking on food",
            "Clicking or popping sound from jaw",
            "Cloudy urine with strong odor",
            "Cloudy vision",
            "Coarse hair",
            "Coated or furry tongue",
            "Coffee grounds colored vomit",
            "Cold",
            "Cold feet",
            "Cold hands",
            "Color change",
            "Coma",
            "Compulsive behavior",
            "Confusion",
            "Constipation",
            "Cough",
            "Cracks at corner of mouth",
            "Craving alcohol",
            "Craving to eat ice, dirt or paper",
            "Crying during sleep",
            "Curved fingernails",
            "Curved or bent penis during erection",
            "Curved spine",
            "Damaged teeth enamel",
            "Dark colored (brown) urine",
            "Decreased appetite",
            "Decreased night vision",
            "Decreased school performance",
            "Decreased smell",
            "Decreased sweating",
            "Decreased taste",
            "Decreased tears when crying",
            "Decreased urination",
            "Delayed language skills",
            "Delayed motor development",
            "Delusions",
            "Depressed mood",
            "Developmental delays",
            "Diarrhea",
            "Difficult to wake from sleep",
            "Difficulty breathing through nose",
            "Difficulty concentrating",
            "Difficulty falling asleep",
            "Difficulty finding words",
            "Difficulty learning new things",
            "Difficulty moving arm",
            "Difficulty opening mouth",
            "Difficulty relaxing muscles after contracting them",
            "Difficulty sleeping",
            "Difficulty solving problems",
            "Difficulty standing",
            "Difficulty starting urine stream",
            "Difficulty staying asleep",
            "Difficulty staying awake during day",
            "Difficulty stopping urine stream",
            "Difficulty swallowing",
            "Difficulty talking",
            "Difficulty urinating",
            "Discharge from nipple",
            "Discharge from penis",
            "Discharge or mucus in eyes",
            "Dislikes change in daily routine",
            "Disorientation",
            "Distended stomach",
            "Distorted body image",
            "Distortion of part of visual field",
            "Dizziness",
            "Double vision (with one eye covered)",
            "Double vision (without one eye covered)",
            "Drainage or pus",
            "Drinking excessive fluids",
            "Drooling",
            "Drooping eyelid",
            "Drooping of one side of face",
            "Drowsiness",
            "Dry eyes",
            "Dry mouth",
            "Dry skin",
            "Ear ache",
            "Early breast development",
            "Early morning waking",
            "Easily distracted",
            "Easy bleeding",
            "Easy bruising",
            "Emotional detachment",
            "Enlarged (dilated) pupils",
            "Enlarged (dilated) veins",
            "Enlarged finger tips",
            "Enlarged or swollen glands",
            "Episodes of not breathing during sleep",
            "Erectile dysfunction",
            "Excessive body hair growth",
            "Excessive crying",
            "Excessive exercising",
            "Excessive facial hair growth (female)",
            "Excessive facial hair growth (male)",
            "Excessive mouth watering",
            "Excessive sweating",
            "Excessively salty sweat or skin",
            "Eye crusting with sleep",
            "Eye irritation",
            "Eyelashes falling out",
            "Eyelid redness",
            "Eyes do not track together",
            "Eyes rolling back",
            "Fainting",
            "Fatigue",
            "Fear of air",
            "Fear of gaining weight",
            "Fear of water",
            "Fearful",
            "Feeling faint",
            "Feeling of being detached from reality",
            "Feeling of not being able to get enough air",
            "Feeling smothered",
            "Fever",
            "Fits of rage",
            "Flaking skin",
            "Flashbacks",
            "Flickering lights in vision",
            "Flickering uncolored zig-zag line in vision",
            "Floating spots or strings in vision",
            "Flushed skin",
            "Food cravings",
            "Food getting stuck (swallowing)",
            "Forgetfulness",
            "Foul smelling stools",
            "Frequent bowel movements",
            "Frequent changes in eye glass prescription",
            "Frequent chewing",
            "Frequent infections",
            "Frequent laxative use",
            "Frequent nighttime urination",
            "Frequent squinting",
            "Frequent urge to have bowel movement",
            "Frequent urge to urinate",
            "Frequent urination",
            "Frightening dreams",
            "Frightening thoughts",
            "Fruity odor on breath",
            "Gagging",
            "Giddiness",
            "Grinding teeth",
            "Gritty or scratchy eyes",
            "Grooved tongue",
            "Guarding or favoring joint",
            "Gum sores",
            "Hair loss",
            "Hallucinations",
            "Headache",
            "Headache (worst ever)",
            "Hearing loss",
            "Hearing voices",
            "Heartburn",
            "Heavy menstrual bleeding",
            "High blood pressure",
            "Hives",
            "Hoarse voice",
            "Holding bowel movements",
            "Holding objects closer to read",
            "Holding objects further away to read",
            "Hot flashes",
            "Hot, dry skin",
            "Hunched or stooped posture",
            "Hunger",
            "Hyperactive behavior",
            "Hyperventilating (rapid/deep breathing)",
            "Impaired color vision",
            "Impaired judgement",
            "Impaired social skills",
            "Impulsive behavior",
            "Inability to care for self",
            "Inability to move",
            "Inappropriate behavior",
            "Increased passing gas",
            "Increased sensitivity to cold",
            "Increased sensitivity to heat",
            "Increased speech volume",
            "Increased talkativeness",
            "Increased thirst",
            "Intentional vomiting (purging)",
            "Involuntary head turning or twisting",
            "Involuntary movements (picking, lip smacking etc.)",
            "Irregular heartbeat",
            "Irregular menstrual periods",
            "Itching or burning",
            "Jaw locking",
            "Jerking eye movements",
            "Joint aches",
            "Joint instability",
            "Joint locking or catching",
            "Joint pain",
            "Jumpiness or easily startled",
            "Labored breathing",
            "Lack of emotion",
            "Lack of motivation",
            "Lack of pleasure",
            "Lightheadedness",
            "Loss of balance",
            "Loss of consciousness",
            "Loss of coordination",
            "Loss of height",
            "Loss of outside 1/3 of eyebrow (unintentional)",
            "Loss of side vision",
            "Loss of voice",
            "Low blood pressure",
            "Low self-esteem",
            "Lump or bulge",
            "Memory problems",
            "Metallic taste in mouth",
            "Missed or late menstrual period",
            "Mood swings",
            "Morning alcohol drinking (eye-opener)",
            "Morning joint stiffness",
            "Mouth sores",
            "Muffled voice",
            "Multiple bruises of different ages",
            "Muscle cramps or spasms (painful)",
            "Muscle stiffness (rigidity)",
            "Muscle twitching (painless)",
            "Muscle wasting",
            "Muscle weakness",
            "Nasal congestion",
            "Nasal symptoms and one red eye",
            "Nausea or vomiting",
            "Need brighter light to read",
            "Nervousness",
            "New onset asthma",
            "Night sweats",
            "Nighttime wheezing",
            "No menstrual periods",
            "Noisy breathing",
            "Nosebleed",
            "Numbness or tingling",
            "Overweight",
            "Pain during erection",
            "Pain or discomfort",
            "Pain when moving eyes",
            "Pain when swallowing",
            "Pain with sexual intercourse (female)",
            "Pain with sexual intercourse (male)",
            "Pain with urination",
            "Painful bowel movements",
            "Painful ejaculation",
            "Painful red lump on eyelid",
            "Pale skin",
            "Palpitations (fluttering in chest)",
            "Paranoid behavior",
            "Partial vision loss",
            "Personality changes",
            "Poor concentration",
            "Poor personal hygiene",
            "Popping or snapping sound from joint",
            "Post nasal drip",
            "Pounding heart (pulse)",
            "Premature ejaculation",
            "Pressure or fullness",
            "Pressure or heaviness",
            "Prolonged bleeding",
            "Prolonged breathing pauses",
            "Protruding rectal material",
            "Protruding vaginal material",
            "Puffy eyelids",
            "Pulling out beard",
            "Pulling out eyebrows",
            "Pulling out eyelashes",
            "Pulling out hair",
            "Pulsating sensation",
            "Punching or kicking in sleep",
            "Rapid breathing",
            "Rapid heart rate (pulse)",
            "Rapid speech",
            "Recent (short-term) memory loss",
            "Red (bloodshot) eyes",
            "Red (strawberry) tongue",
            "Red eye (single)",
            "Red gums",
            "Red or black spots on fingernails",
            "Red spots",
            "Red spots inside lower eyelid",
            "Reduced productivity at work",
            "Regurgitation of food or liquid",
            "Repeats phrases",
            "Repetitive behaviors",
            "Restless (tossing and turning) sleep",
            "Restless (urge to move) legs",
            "Restless or irritability",
            "Restrictive dieting",
            "Ringing in ears",
            "Runny nose",
            "Sadness",
            "Scaley skin on eyelids",
            "See letters, numbers or musical notes as colors",
            "Seizures (uncontrollable jerking of limbs)",
            "Sensation of something in eye",
            "Sense of impending doom",
            "Sensitive to light",
            "Sensitive to noise",
            "Shadow over part of vision",
            "Shaking",
            "Shaking chills (rigors)",
            "Shaking hands or tremor",
            "Short arms and legs",
            "Short attention span",
            "Short stature",
            "Short, wide neck",
            "Shortening of limb",
            "Shortness of breath",
            "Shuffling gait (feet)",
            "Single palm crease",
            "Skin blisters",
            "Skin bumps",
            "Skin darkening",
            "Skin hardening",
            "Skin irritation",
            "Skin open sore",
            "Skin peeling, cracking or scaling",
            "Skin rash",
            "Skin redness",
            "Skin thickening",
            "Sleep walking",
            "Slow growth (failure to thrive)",
            "Slow heart rate (pulse)",
            "Slow or irregular breathing",
            "Slow or weak urine stream",
            "Slow thinking",
            "Slurred speech",
            "Small (constricted) pupils",
            "Smooth tongue",
            "Sneezing",
            "Snoring",
            "Socially withdrawn",
            "Sore or burning eyes",
            "Sore throat",
            "Sore tongue",
            "Soreness or burning inside of mouth",
            "Spinning sensation",
            "Spots on throat",
            "Spots on tonsils",
            "Squatting",
            "Squinting eyes",
            "Stiff neck",
            "Stiffness or decreased movement",
            "Stomach cramps",
            "Stool leaking (incontinence)",
            "Straining with bowel movements",
            "Strange smell or taste",
            "Sudden flash of lights",
            "Sudden numbness or weakness on one side of body",
            "Sudden urge to urinate",
            "Sunken eyes",
            "Sunken soft spot on top of head",
            "Swelling",
            "Swollen gums",
            "Swollen lips",
            "Swollen tongue",
            "Swollen tonsils",
            "Taste of acid in mouth",
            "Taste words when they are heard",
            "Tearing in one eye",
            "Teeth do not fit like they used to",
            "Tender glands",
            "Tenderness to touch",
            "Testicles shrinkage",
            "Testicular pain",
            "Thick saliva or mucus",
            "Thin (pencil) stools",
            "Throat tightness",
            "Tightness",
            "Tilts head to look at something",
            "Tires quickly",
            "Trembling",
            "Trouble distinguishing color shades",
            "Twisting or rotation of limb",
            "Unable to bear weight",
            "Unable to bend foot down",
            "Unable to blink or close eyelid",
            "Unable to grip (hands)",
            "Unable to move arm",
            "Unable to move joint",
            "Unable to move leg",
            "Unable to obtain or maintain erection",
            "Unable to open mouth (jaw)",
            "Uncontrollable verbal outbursts",
            "Unequal pupils (size)",
            "Unusual behavior",
            "Unusual facial expression",
            "Unusual or suspicious mole",
            "Unusual taste in mouth",
            "Unusually short forth fingers",
            "Upset stomach",
            "Upward curving (spooning) of nails",
            "Urine leaking (incontinence)",
            "Vaginal bleeding",
            "Vaginal bleeding after menopause",
            "Vaginal bleeding between periods",
            "Vaginal discharge",
            "Vaginal dryness",
            "Vaginal odor",
            "Visible bugs or parasites",
            "Visible deformity",
            "Visible pulsations",
            "Vision fading of colors",
            "Visual halos around lights",
            "Warm to touch",
            "Watery eyes",
            "Weakness",
            "Weakness (generalized)",
            "Weight gain",
            "Weight loss (intentional)",
            "Weight loss (unintentional)",
            "Welts",
            "Wheezing",
            "White patches inside mouth",
            "White patches on tongue",
            "Worms in stool",
            "Yelling out during sleep",
            "Yellow eyes",
            "Yellow skin"
        ]
    };

});