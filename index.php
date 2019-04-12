<!DOCTYPE html>
<html lang="en">
<head>
  <title>PHP Program Test</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
  <link rel="stylesheet" href="custom.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
  <script src="script.js"></script>
</head>
<body>
<div class="container">
  <div class="row p-10">
    <div class="col-sm-8 center-block">
      <h2><i class="fa fa-group"></i> Choose Number of People</h2>
      <div class="fakeimg ">
			<div class="row p-20 ">
				<div class="col-sm-12 border-bottom-line">
				<div class="col-sm-6">
					<span class="text-title"><i class="fa fa-bed"></i> Rooms</span>
				</div>
				<div class="col-sm-2">
					<button class="button-operator" id="RoomMinusBtn" onclick="return calculateRoom('-');"><i class="fa fa-minus-circle"></i></button>
				</div>
				<div class="col-sm-2">
					<span id="RoomNumber">1</span>
				</div>
				<div class="col-sm-2">
					<button class="button-operator" id="RoomPlusBtn" onclick="return calculateRoom('+');"><i class="fa fa-plus-circle"></i></button>
				</div>
				</div>
			</div>
			<div class="row p-20 ">
				<div class="col-sm-12 border-bottom-line">
					<div class="col-sm-6">
						<span class="text-title"><i class="fa fa-user"></i> Adults</span>
					</div>
					<div class="col-sm-2">
						<button class="button-operator" id="AdultsMinusBtn" onclick="return calculateAdults('-');"><i class="fa fa-minus-circle"></i></button>
					</div>
					<div class="col-sm-2">
						<span id="AdultsNumber">1</span>
					</div>
					<div class="col-sm-2">
						<button class="button-operator" id="AdultsPlusBtn" onclick="return calculateAdults('+');"><i class="fa fa-plus-circle"></i></button>
					</div>
				</div>
			</div>
			<div class="row p-20 ">
				<div class="col-sm-12 ">
					<div class="col-sm-6">
						<span class="text-title"><i class="fa fa-child"></i> Children</span>
					</div>
					<div class="col-sm-2">
						<button class="button-operator" id="ChildrenMinusBtn" onclick="return calculateChildren('-');"><i class="fa fa-minus-circle"></i></button>
					</div>
					<div class="col-sm-2">
						<span id="ChildrenNumber">0</span>
					</div>
					<div class="col-sm-2">
						<button class="button-operator" id="ChildrenPlusBtn" onclick="return calculateChildren('+');"><i class="fa fa-plus-circle"></i></button>
					</div>
				</div>
			</div>
	  </div>
    </div>
  </div>
</div>
</body>
</html>