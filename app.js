const notes=require('./notes.js')
const chalk=require('chalk')
const yargs =require('yargs')

// const getNotes =notes()

yargs.version('1.1.0')
// Adding Add Cammand

yargs.command({
	command:'add',
	describe:'Add a new Node',
	builder:{
       title:{
       	describe:'Please Enter Note Title',
       	demandOption:true,
       	type:'string'
       },
       body:{
       	describe:'Body of the note',
       	demandOption:true,
       	type:'string'
       }
	},
	handler:function(argv){
		notes.addNotes(argv.title,argv.body)
	}
})

// Adding a remove command

yargs.command({
	command:'remove',
	describe:'Remove a node',
	builder:{
		title:{
         describe:'Title to remove',
         demandOption:true,
         type:'string'
		}
	},
	handler:function(argv){
		notes.removeNotes(argv.title)
	}
})


//Adding a list cammand

yargs.command({
	command:'list',
	describe:'list the notes..',
	handler:function(){
		console.log('listing your notes.....')
	}
})


//Adding Read Cammand

yargs.command({
	command:'read',
	describe:'Read Notes',
	handler:function(){
		console.log('Read your Notes..')
	}
})


yargs.parse()
// console.log(yargs.argv)



//Cammand line Arguments
/*
const cammand=process.argv[2]
console.log(process.argv)

if(cammand==='Add'){
	console.log('Adding Node')
}
else if(cammand==='Remove'){
	console.log('Removing node')
}
*/

// How to use chalk?
// const chalk=require('chalk')
// console.log(chalk.white('MY name Is Akash Kunwar')+'HI'+chalk.bgRed('Suraj')+chalk.bold('HI BOSS!'))
// console.log(chalk.green.bold.bgRed.inverse('Success!'))
// console.log(process.argv[2])

// validator package>
// const validator=require('validator')
// console.log(validator.isEmail('akash@gmail.com'))
// console.log(validator.isURL('https://Gmail.com'))


// importing function from other file
// const notes=require('./notes.js')
// console.log(notes())



// const add=require('./utils.js')
//const name="Akash Kunwar"
// console.log(add(5,2))




