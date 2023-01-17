const newsletter_form = window.document.querySelector('#newsletter-form');
const input = window.document.querySelector('#email');
const data = {emails: []};

newsletter_form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    if(input.value != undefined && input.value != null & input.value != '') {
        let email = input.value.trim();
        window.alert(`Email: ${email} cadastrado com sucesso!`);
        data.emails.push(email);
        sessionStorage.setItem('emails', JSON.stringify(data));
        let myData = JSON.parse(sessionStorage.getItem('emails')); 
        console.log(myData.emails);
    } else {
        window.alert('Preencha o campo corretamente...');
    }

    input.value = '';
});