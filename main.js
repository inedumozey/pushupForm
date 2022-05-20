function moform(option){
    const documentBody = document.body.children;

    const formGroupStyle = `
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        position: relative;
    `;
    const formLabelStyle = `
        position: absolute;
        bottom:10px;
        left:10px;
        transition: all .4s;
    `;
    const focusFormLabelStyle = `
        position: absolute;
        left:0;
        top:8px;
        font-size: .8rem;
        transition: all .4s;
    `;
    const formInputStyle = `
        padding: 15px 30px 15px 10px;
        display: block;
        width:100%;
    `;
    const passwordToggleStyle = `
        user-select: none;
        width:25px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right:3px;
        cursor: pointer;
        border-radius: 50%;
        bottom: 12px;
        height: 25px;
        width: 25px;
    `;


    [...documentBody].forEach(body=>{
        if(body.classList[0] === 'moform'){
            const forms = body
            
            //handle form groups
            const formGroups = forms.children;
            [...formGroups].forEach(formGroup=>{
                if(formGroup.classList[0] === 'form-group'){
                    formGroup.style.cssText = formGroupStyle
                }

                const formChildren = formGroup.children;
                [...formChildren].forEach(formChild=>{

                    //handle label
                    if(formChild.classList[0] === 'label'){
                        const formLabel = formChild
                        formLabel.style.cssText = formLabelStyle
                    }

                    //handle input
                    if(formChild.classList[0] === 'input'){
                        const formInput = formChild;
                        formInput.style.cssText = formInputStyle;
                        
                        formInput.oninput =(e)=>{
                            [...e.target.parentNode.children].forEach(parentChild=>{
                                if(parentChild.classList[0] === 'label'){
                                    const label = parentChild;
                                    if(e.target.value){
                                        label.style.cssText = focusFormLabelStyle 
                                    }else if(!e.target.value){
                                        label.style.cssText = formLabelStyle 
                                    }
                                }
                            })
                        }
                        
                    }

                    //handle show password toggle
                    if(formChild.classList[0] === 'passwordToggle'){

                        const passwordToggle = formChild
                        passwordToggle.innerHTML = `&uArr;`
                        passwordToggle.style.cssText = passwordToggleStyle;

                        let isShown = false;

                        passwordToggle.onclick =(e)=>{
                            isShown = !isShown
                            if(isShown){
                                e.target.innerHTML = `&dArr;`;
                                [...e.target.parentNode.children].forEach(parentChild=>{
                                    if(parentChild.classList[1] === 'password'){
                                        parentChild.setAttribute('type', 'text')
                                    }
                                })

                            }else{
                                e.target.innerHTML = `&uArr;`;
                                [...e.target.parentNode.children].forEach(parentChild=>{
                                    if(parentChild.classList[1] === 'password'){
                                        parentChild.setAttribute('type', 'password')
                                    }
                                })
                            } 
                        }
                    }
                })
            }) 
        }
    })

}

moform()
