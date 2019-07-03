var person = 
{
	fname:'raghu',
	lname:'prasad',
	city:'bengaluru',
	fullname:function  ()
	{
		return this.fname + ' '+this.lname;
	}
}

console.log('first name ',person.fname);

console.log('full name ',person.fullname());
