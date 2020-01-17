const fs=require('fs')
const chalk=require('chalk')
const getNotes=function(){
	return 'Your notes....'
}
const addNotes=function(title,body){
	const note=load()

	const duplicateNotes=note.filter(function(n){
          return n.title===title
	})

	if(duplicateNotes.length===0){
		note.push({
		title:title,
		body:body
	})
	save(note)
	console.log('Note Added Succesfully')
	}
	else{
		console.log('Duplicate Entry Found')
	}
}

const removeNotes=function(title){
     const data =load()

     const removeData=data.filter(function(note){
     	return title===note.title
     })

     if(removeData.length===0){
     	console.log(chalk.red.bgWhite('Note not present!'))
     }
     else{
     	data.pop({
     		title:title
     	})
     	console.log(chalk.green.bgWhite('Note Removed Succesfully!'))
     }
     save(data)
}


const load=function(){
	try{
	const dataBuffer=fs.readFileSync('notes.json')
	const dataString=dataBuffer.toString();
	const data=JSON.parse(dataString);
	return data
    }catch(e){

    	return []


	}
	
}


const save=function(data){
	const dataJson=JSON.stringify(data)
	fs.writeFileSync('notes.json',dataJson)

}
module.exports={
	getNotes:getNotes,
	addNotes:addNotes,
	removeNotes:removeNotes
}