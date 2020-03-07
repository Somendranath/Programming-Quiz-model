











const screen= document.querySelector('.screen')

	

let preque='0'
let currentque='0'



const ques= document.querySelectorAll(".que")

ques.forEach((que)=>{
	que.addEventListener(("click"),(event)=>{
		inputQue(event.target.value)
		updateScreen(currentque)
		event.target.value='0'
	}
	)
})


const updateScreen=(que)=>{
	switch(que){
		case"1":
screen.value="Q1) what is c? \n A)promamming language \n B)a game \n  C)a sport \n D)a magazine"
break
case"2":
screen.value="Q2) 2/1 is \n A)0 \n B)6 \n C)2 \n D)1"
break
case"3":
screen.value="Q3) 2-1 is \n A)0 \n B)6 \n C)2 \n D)1"
break
case"4":
screen.value="Q4) 21+7 is \n A)0 \n B)28 \n C)2 \n D)1"
break
case"5":
screen.value="Q5) 27%2 is \n A)0 \n B)6 \n C)2 \n D)1"
break

case"0":
screen.value="answered already"
break



}

}


const inputQue=(que)=>{
	
currentque=que
}
	let preOption='0'
let currentOption='0'

	
	
const screeno= document.querySelector('.screeno')	
const options= document.querySelectorAll(".option")

options.forEach((option)=>{
	option.addEventListener(("click"),(event)=>{
		inputOption(event.target.value)
		updateScreeno(currentOption)
		
	}
	)
})
const updateScreeno=(option)=>{
screeno.value=option
}




const inputOption=(option)=>{
currentOption=option
}








let currentr=0


	const screenr= document.querySelector('.screenr')	
const submit= document.querySelector(".submit")


	submit.addEventListener(("click"),()=>{
		
		
	



switch(currentque){
	case"1":
	if(currentOption==="A")
	{currentr=4+currentr
screenr.value="Right"
	}
else
{
screenr.value="wrong"
currentr=-1+currentr
}
break


case"2":
	if(currentOption==="C")
	{
screenr.value="Right"
currentr=4+currentr
	}
else
{currentr=-1+currentr
screenr.value="wrong"
}
break
case"3":
	if(currentOption==="D")
	{currentr=4+currentr
screenr.value="Right"
	}
	else
	{currentr=-1+currentr
		screenr.value="wrong"

	}
	break
case"4":
	if(currentOption==="B")
	{currentr=4+currentr
		screenr.value="Right"
	}else
	{currentr=-1+currentr
	screenr.value="wrong"}

break
case"5":
	if(currentOption==="D")
	{currentr=4+currentr
	screenr.value="Right"}
else
{currentr=-1+currentr
screenr.value="wrong"
}
break
case"0":
screenr.value="answered already"
break
}




})

















	const screenf= document.querySelector('.screenf')	
const finish= document.querySelector(".finish")


	finish.addEventListener(("click"),()=>{
		
screenf.value=parseInt(currentr)


	})
	
	
	
	
	
	