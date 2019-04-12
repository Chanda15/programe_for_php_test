
	$(document).ready(function(){
		var RoomNumber = $('#RoomNumber').text();
		enableDisableRoom(RoomNumber);
		var AdultsNumber = $('#AdultsNumber').text();
		enableDisableAdults(AdultsNumber);
		var ChildrenNumber = $('#ChildrenNumber').text();
		enableDisableChildren(ChildrenNumber)
	});
	function enableDisableRoom(RoomNumber){
		if(RoomNumber==1){
			$('#RoomMinusBtn').prop('disabled', true);
		}else{
			$('#RoomMinusBtn').prop('disabled', false);
		}
		if(RoomNumber==5){
			$('#RoomPlusBtn').prop('disabled', true);
		}else{
			$('#RoomPlusBtn').prop('disabled', false);
		}
	}
	function enableDisableAdults(AdultsNumber){
		if(AdultsNumber==1){
			$('#AdultsMinusBtn').prop('disabled', true);
		}else{
			$('#AdultsMinusBtn').prop('disabled', false);
		}
		var ChildrenNumber = $('#ChildrenNumber').text();
		var RoomNumber = $('#RoomNumber').text();
		var TotalPerson = parseInt(RoomNumber)*parseInt(4);
		var TotalAdultChild = parseInt(ChildrenNumber)+parseInt(AdultsNumber);
		if(TotalPerson==TotalAdultChild){
			$('#AdultsPlusBtn').prop('disabled', true);
			$('#ChildrenPlusBtn').prop('disabled', true);
		}else{
			$('#AdultsPlusBtn').prop('disabled', false);
			$('#ChildrenPlusBtn').prop('disabled', false);
		}
	}
	function enableDisableChildren(ChildrenNumber, TotalPerson){
		if(ChildrenNumber==0){
			$('#ChildrenMinusBtn').prop('disabled', true);
		}else{
			$('#ChildrenMinusBtn').prop('disabled', false);
		}
		var AdultsNumber = $('#AdultsNumber').text();
		var TotalAdultChild = parseInt(ChildrenNumber)+parseInt(AdultsNumber);
		if(TotalPerson==TotalAdultChild){
			$('#AdultsPlusBtn').prop('disabled', true);
			$('#ChildrenPlusBtn').prop('disabled', true);
		}else{
			$('#AdultsPlusBtn').prop('disabled', false);
			$('#ChildrenPlusBtn').prop('disabled', false);
		}
	}
	function calculateRoom(Operator){
		//alert(Operator);
		var RoomNumber = $('#RoomNumber').text();
		if(Operator=='-'){
			if(RoomNumber>1)
			RoomNumber = parseInt(RoomNumber)-parseInt(1);
		}else{
			if(RoomNumber<5){
				RoomNumber = parseInt(RoomNumber)+parseInt(1);
			}	
		}
		validateAdult(RoomNumber, Operator);
		validateChildren(RoomNumber,Operator, 'Room');
		$('#RoomNumber').text(RoomNumber);
		enableDisableRoom(RoomNumber);
	}
	function calculateAdults(Operator){
		//alert(Operator);
		var AdultsNumber = $('#AdultsNumber').text();
		var RoomNumber = $('#RoomNumber').text();
		validateAdult(RoomNumber, Operator);
	}
	function calculateChildren(Operator){
		//alert(Operator);
		var ChildrenNumber = $('#ChildrenNumber').text();
		var RoomNumber = $('#RoomNumber').text();
		validateChildren(RoomNumber,Operator);
		
	}
	function validateAdult(RoomNumber,Operator){
		var ChildrenNumber = $('#ChildrenNumber').text();
		if(ChildrenNumber=='')
			ChildrenNumber=0;
		var AdultsNumber = $('#AdultsNumber').text();
		var Person = parseInt(RoomNumber)*parseInt(4);
		var TotalAdults = Math.round(parseInt(Person)/parseInt(RoomNumber));
		var Remainingperson = parseInt(Person)-parseInt(ChildrenNumber);
		console.log(AdultsNumber+' <= Rem '+Remainingperson+' TotAdult '+TotalAdults);
		if(Operator=='+'){
			if(AdultsNumber<Remainingperson){
				console.log(AdultsNumber+' <=tot '+Remainingperson);
				if(RoomNumber==5){
					if(AdultsNumber<=TotalAdults){
						console.log(AdultsNumber+'<'+TotalAdults);
						AdultsNumber = parseInt(AdultsNumber)+parseInt(1);
					}
				}else{
					if(AdultsNumber<TotalAdults){
						console.log(AdultsNumber+'<'+TotalAdults);
						AdultsNumber = parseInt(AdultsNumber)+parseInt(1);
					}
				}
				
			}
		}else{
			if(AdultsNumber>1){
				AdultsNumber = parseInt(AdultsNumber)-parseInt(1);
			}
		}
		
		$('#AdultsNumber').text(AdultsNumber);
		enableDisableAdults(AdultsNumber);
	}
	function validateChildren(RoomNumber,Operator,PersonType=''){
		var ChildrenNumber = $('#ChildrenNumber').text();
		var OldChildrenNumber = $('#ChildrenNumber').text();
		if(ChildrenNumber=='')
			ChildrenNumber=0;
		if(PersonType=='Room'){
			if(Operator=='-')
				ChildrenNumber=0;
		}
		var AdultsNumber = $('#AdultsNumber').text();
		var Person = parseInt(RoomNumber)*parseInt(4);
		var Remainingperson = parseInt(Person)-parseInt(AdultsNumber);
		if(Remainingperson<0)
			Remainingperson=0;
		console.log('Rem Children '+Remainingperson+' ch '+ChildrenNumber);
		if(Operator=='+'){
			if(ChildrenNumber<Remainingperson)
				ChildrenNumber = parseInt(ChildrenNumber)+parseInt(1);
		}
		else{
			//var RemChild=1;
			//if(ChildrenNumber>OldChildrenNumber)
				var RemChild = parseInt(ChildrenNumber)-parseInt(Remainingperson);
				if(PersonType==''){
					RemChild=1;
				}
			if(ChildrenNumber>=0)
			ChildrenNumber = parseInt(ChildrenNumber)-parseInt(RemChild);
		}
		$('#ChildrenNumber').text(ChildrenNumber);
		enableDisableChildren(ChildrenNumber, Person);
	}