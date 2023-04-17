let  Q_A = [
    {
        "Q":"اجور عمال بالمصنع يمكن تبويها إلي تكاليف اجور",
        "A":[
            "صناعية",
            "تسويقية",
            "إدارية وتمويلية",
            "راسمالية",
            ],
        "ATrue":"صناعية"
    },
    {
        "Q":"المصروف هو تكلفة مستفدة لا يترتب عليها عائد ويعد من الخسائر التي ترحل إلي ق ا.خ",
        "A":[
            "صح",
            "غلط",
            ],
            "ATrue":"غلط"
        },
    {
        "Q":"عنصر تكلفة الاجور يتمثل في السلع والمعدات والادوات وكافة المستلزمات السلعية التي تتميز بانها غير ملموسة وقابلة للتخزين",
        "A":[
            "صح",
            "غلط",
            ],
        "ATrue":"غلط"
    },
    {
        "Q":"يعد من الخسائر اي تلف غير مسموح به او قيمة إهلاك أله لم تستخدم في الإنتاج",
        "A":[
            "صح",
            "غلط",
            ],
        "ATrue":"صح"
    },
]
let  Q_B = [
    {
        "Q":"اجور عمال بالمصنع يمكن تبويها إلي تكاليف اجور",
        "A":[
            "صناعية",
            "تسويقية",
            "إدارية وتمويلية",
            "راسمالية",
            ],
        "ATrue":"صناعية"
    },
]
let  Q_C = [
    {
        "Q":"اجور عمال بالمصنع يمكن تبويها إلي تكاليف اجور",
        "A":[
            "صناعية",
            "تسويقية",
            "إدارية وتمويلية",
            "راسمالية",
            ],
        "ATrue":"صناعية"
    },
]
let  Q_D = [
    {
        "Q":"اجور عمال بالمصنع يمكن تبويها إلي تكاليف اجور",
        "A":[
            "صناعية",
            "تسويقية",
            "إدارية وتمويلية",
            "راسمالية",
            ],
        "ATrue":"صناعية"
    },
]
let  Q_E = [
    {
        "Q":"اجور عمال بالمصنع يمكن تبويها إلي تكاليف اجور",
        "A":[
            "صناعية",
            "تسويقية",
            "إدارية وتمويلية",
            "راسمالية",
            ],
        "ATrue":"صناعية"
    },
]
let  Q_F = [
    {
        "Q":"اجور عمال بالمصنع يمكن تبويها إلي تكاليف اجور",
        "A":[
            "صناعية",
            "تسويقية",
            "إدارية وتمويلية",
            "راسمالية",
            ],
        "ATrue":"صناعية"
    },
]
let Matrials =[
    {
        "Matrial":"محاسبة تكاليف",
    },{
        "Matrial":"دراسات ادارية باللغة الانجليزية",
    },{
        "Matrial":"اقتصاد كلي",
    },{
        "Matrial":"تحليل وتصميم نظم المعلومات",
    },{
        "Matrial":"التسويق والتجارة الكترونية",
    },{
        "Matrial":"إدارة مشتريات",
    }
]
let select = Q_A;

let done = document.getElementById('done');
let title = document.querySelector('.text');
let option = document.querySelector('.option ul');
let row = document.querySelector(".row");
let counter = 0;
let score = 0;


function Next(){
    let answers = document.getElementsByName('radio');
    if(counter === select.length+1)
    {
        location.reload();
    }
    for(let i = 0; i < answers.length; i++){
        if(answers[i].checked){
        Scoure();
        counter++;
        if (counter === select.length) {
            title.innerHTML = `<h1 id="End">${score} From ${counter}</h1>`;
            done.innerHTML = "إعادة";
            option.remove();
            counter++;
        }
        else{
            addQuestion(select);
        }
    }
    }
    // console.log(score);
}
function Scoure() {
    let answers = document.getElementsByName('radio');
    let youranswer;
    
    for(let i = 0; i < answers.length; i++){
        if(answers[i].checked){
            let y = document.getElementById(`${answers[i].id}_id`);
            // console.log(Q_A.length +" length");
            // console.log(counter + ' counter');
            
            if (y.innerText === Q_A[counter].ATrue) {
                score ++;
            }
        }
    }
}

function addQuestion(text){
    select = text;
    title.innerHTML = '';
    option.innerHTML = '';
    let title_text = document.createElement("div");
    title_text.id = "text";
    row.appendChild(title_text);
    title.style.display = "block";
    done.style.display = "block";
    let q = document.createElement("h2");
    let qtext = document.createTextNode(text[counter].Q);
    q.appendChild(qtext);
    title.appendChild(q);
    
    
    for(let i = 0; i < text[counter].A.length; i++)
    {
        //create lablel
        let thelabel = document.createElement("label");
        thelabel.htmlFor = `A_${i}`;
        thelabel.id = `A_${i}_id`
        let Atext = document.createTextNode(text[counter].A[i]);
        thelabel.appendChild(Atext);
        
        //Create input radio
        let inputradio = document.createElement('input')
        inputradio.type = 'radio';
        inputradio.className = 'radio';
        inputradio.id = `A_${i}`;
        inputradio.name = 'radio';

        thelabel.appendChild(inputradio);
        option.append(thelabel);
    }
}
SelectQuestions();

function SelectQuestions(){
    // option.innerHTML = '';
    for (let i = 0; i < Matrials.length; i++) {
        document.getElementById(`a${i+1}`).innerHTML = Matrials[i].Matrial;
    }
    document.getElementById('a2').style.display = "none";
    document.getElementById('a3').style.display = "none";
    document.getElementById('a4').style.display = "none";
    document.getElementById('a5').style.display = "none";
    document.getElementById('a6').style.display = "none";
    done.style.display = "none";
    title.style.display = "none";
}
