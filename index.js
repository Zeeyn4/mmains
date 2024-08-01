
const yourPickcha = 'images/images.jpg'

document.getElementById('post').addEventListener('change', function(event) {
    
    const selectedValue = event.target.value;
    const textareaContainer = document.getElementById('textareaContainer');
    textareaContainer.innerHTML = '';

    if (selectedValue === "other") {
        
        const textarea = document.createElement('textarea');
        textarea.maxLength = "50";
        textarea.id = 'otherText';
        textarea.placeholder = 'Ваша палитра...';
        textareaContainer.appendChild(textarea);
        
    }
});


const ass = document.getElementById('ass');
const getBlock = document.getElementById('contact-form')

ass.addEventListener('click', function() {
    const t = document.getElementById("xx")

    if (t === null) { 
        ass.textContent = "Пойман"
        const img = document.createElement('img');
        img.id = "xx";
        img.src = yourPickcha;
        img.style.maxWidth = '100%'; 
        getBlock.appendChild(img);

    } else { 
        ass.textContent = "Не нажимать"
        getBlock.removeChild(t)
    }

});


const go = document.getElementById("go")
const counter = document.getElementById("counter")

let count = 0;


go.addEventListener('click', () => {



if(count < 10)  {
    
    counter.innerHTML = count++;

}else if(count = 10) { 
    counter.innerHTML = "Остановись" 
}
   


})

