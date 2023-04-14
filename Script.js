let  coation = [
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

let done = document.getElementById('done');
let title = document.querySelector('.text');
let option = document.querySelector('.option ul');

let counter = 0;
let score = 0;


function Next(){
    Scoure();
    counter++;
    if (counter === coation.length) {
        title.innerHTML = `<h1>${score} Form ${counter}</h1>`;
        done.innerHTML = "إعادة";
        option.remove();
    }
    else if(counter === coation.length+1)
    {
        location.reload();
    }
    else{
        addcoation(coation[counter].Q);
    }
    console.log(score);
}

addcoation(coation[counter].Q);

function Scoure() {
    let answers = document.getElementsByName('radio');
    let youranswer;
    
    for(let i = 0; i < answers.length; i++){
        if(answers[i].checked){
            let y = document.getElementById(`${answers[i].id}_id`);
            console.log(coation.length +" length");
            console.log(counter + ' counter');
            
            if (y.innerText === coation[counter].ATrue) {
                score ++;
            }
        }
    }
}

function addcoation(text){
    title.innerHTML = '';
    option.innerHTML = '';
    let q = document.createElement("h2");
    let qtext = document.createTextNode(text);
    q.appendChild(qtext);
    title.appendChild(q);
    
    
    for(let i = 0; i < coation[counter].A.length; i++)
    {
        //create lablel
        let thelabel = document.createElement("label");
        thelabel.htmlFor = `A_${i}`;
        thelabel.id = `A_${i}_id`
        let Atext = document.createTextNode(coation[counter].A[i]);
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