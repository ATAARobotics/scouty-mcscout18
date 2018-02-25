---
layout: default
title: Pit
files: |
 <script src="../resources/js/pit.js"></script>
---
<div id='spinner'></div>
<div id='page' class="container-fluid" style="background-color: #f0f0f0; margin-bottom: 15px">
	<form>
		<div class="row">
			<div class="col">
				<label class="mr-sm-2" for="teamNumber">Team Number</label>
				<input id="teamNumber" type="tel" class="form-control" placeholder="Team Number">
			</div>
		</div>
		<div class="row">
			<div class="col-lg-4 col-md-6">
				<label class="mr-sm-2" style="display: block" for="manipulatorType">Cube Manipulator Type:</label>
				<div id="manipulatorType" class="btn-group btn-group-toggle" data-toggle="buttons">
					<label id="manipulatorArm" class="btn btn-secondary">
						<input type="radio" value="arm" name="manipulatorType" id="manipulatorArm" autocomplete="off"> Arm
					</label>
					<label id="manipulatorElevator" class="btn btn-secondary">
						<input type="radio" value="elevator" name="manipulatorType" id="manipulatorElevator" autocomplete="off"> Elevator
					</label>
					<label id="maipulatorPusher" class="btn btn-secondary">
						<input type="radio" value="pusher" name="manipulatorType" id="maipulatorPusher" autocomplete="off"> Pusher
					</label>
					<label id="manipulatorOther" class="btn btn-secondary">
						<input type="radio" value="other" name="manipulatorType" id="manipulatorOther" autocomplete="off"> Other
					</label>
				</div>
			</div>
			<div class="col-lg-4 col">
				<label class="mr-sm-2" style="display: block" for="placeCubes">Can Place Cubes In:</label>
				<div id="placeCubes" class="btn-group btn-group-toggle" data-toggle="buttons">
					<label id="cubeSwitch" class="btn btn-secondary">
						<input type="checkbox" value="switch" name="placeCubes" id="cubeSwitch" autocomplete="off"> Switch
					</label>
					<label id="cubeScale" class="btn btn-secondary">
						<input type="checkbox" value="scale" name="placeCubes" id="cubeScale" autocomplete="off"> Scale
					</label>
					<label id="cubeExchange" class="btn btn-secondary">
						<input type="checkbox" value="exchange" name="placeCubes" id="cubeExchange" autocomplete="off"> Exchange
					</label>
				</div>
			</div>
			<div class="col-md-4 col">
				<label class="mr-sm-2" style="display: block" for="robotSize">Size:</label>
				<div id="robotSize" class="btn-group btn-group-toggle" data-toggle="buttons">
					<label id="sizeSmall" class="btn btn-secondary">
						<input type="radio" value="small" name="robotSize" id="sizeSmall" autocomplete="off"> Small
					</label>
					<label id="sizeMedium" class="btn btn-secondary">
						<input type="radio" value="medium" name="robotSize" id="sizeMedium" autocomplete="off"> Medium
					</label>
					<label id="sizeLarge" class="btn btn-secondary">
						<input type="radio" value="large" name="robotSize" id="sizeLarge" autocomplete="off"> Large
					</label>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-xl-4 col-md-6">
				<label class="mr-sm-2" style="display: block" for="robotAppearance">Overall Appearance:</label>
				<div id="robotAppearance" class="btn-group btn-group-toggle" data-toggle="buttons">
					<label id="appearance1" class="btn btn-secondary">
						<input type="radio" value="1" name="robotAppearance" id="appearance1" autocomplete="off"> 1
					</label>
					<label id="appearance2" class="btn btn-secondary">
						<input type="radio" value="2" name="robotAppearance" id="appearance2" autocomplete="off"> 2
					</label>
					<label id="appearance3" class="btn btn-secondary">
						<input type="radio" value="3" name="robotAppearance" id="appearance3" autocomplete="off"> 3
					</label>
					<label id="appearance4" class="btn btn-secondary">
						<input type="radio" value="4" name="robotAppearance" id="appearance4" autocomplete="off"> 4
					</label>
					<label id="appearance5" class="btn btn-secondary">
						<input type="radio" value="5" name="robotAppearance" id="appearance5" autocomplete="off"> 5
					</label>
					<label id="appearance6" class="btn btn-secondary">
						<input type="radio" value="6" name="robotAppearance" id="appearance6" autocomplete="off"> 6
					</label>
					<label id="appearance7" class="btn btn-secondary">
						<input type="radio" value="7" name="robotAppearance" id="appearance7" autocomplete="off"> 7
					</label>
					<label id="appearance8" class="btn btn-secondary">
						<input type="radio" value="8" name="robotAppearance" id="appearance8" autocomplete="off"> 8
					</label>
					<label id="appearance9" class="btn btn-secondary">
						<input type="radio" value="9" name="robotAppearance" id="appearance9" autocomplete="off"> 9
					</label>
					<label id="appearance10" class="btn btn-secondary">
						<input type="radio" value="10" name="robotAppearance" id="appearance10" autocomplete="off"> 10
					</label>
				</div>
			</div>
			<div class="col-xl-4 col-md-6">
				<label class="mr-sm-2" style="display: block" for="pitSkill">Pit Crew Skill:</label>
				<div id="pitSkill" class="btn-group btn-group-toggle" data-toggle="buttons">
					<label id="pit1" class="btn btn-secondary">
						<input type="radio" value="1" name="pitSkill" id="pit1" autocomplete="off"> 1
					</label>
					<label id="pit2" class="btn btn-secondary">
						<input type="radio" value="2" name="pitSkill" id="pit2" autocomplete="off"> 2
					</label>
					<label id="pit3" class="btn btn-secondary">
						<input type="radio" value="3" name="pitSkill" id="pit3" autocomplete="off"> 3
					</label>
					<label id="pit4" class="btn btn-secondary">
						<input type="radio" value="4" name="pitSkill" id="pit4" autocomplete="off"> 4
					</label>
					<label id="pit5" class="btn btn-secondary">
						<input type="radio" value="5" name="pitSkill" id="pit5" autocomplete="off"> 5
					</label>
					<label id="pit6" class="btn btn-secondary">
						<input type="radio" value="6" name="pitSkill" id="pit6" autocomplete="off"> 6
					</label>
					<label id="pit7" class="btn btn-secondary">
						<input type="radio" value="7" name="pitSkill" id="pit7" autocomplete="off"> 7
					</label>
					<label id="pit8" class="btn btn-secondary">
						<input type="radio" value="8" name="pitSkill" id="pit8" autocomplete="off"> 8
					</label>
					<label id="pit9" class="btn btn-secondary">
						<input type="radio" value="9" name="pitSkill" id="pit9" autocomplete="off"> 9
					</label>
					<label id="pit10" class="btn btn-secondary">
						<input type="radio" value="10" name="pitSkill" id="pit10" autocomplete="off"> 10
					</label>
				</div>
			</div>
			<div class="col-xl-4 col-md-4">
				<label class="mr-sm-2" style="display: block" for="robotClimber">Climber:</label>
				<div id="robotClimber" class="btn-group btn-group-toggle" data-toggle="buttons">
					<label id="climberRung" class="btn btn-secondary">
						<input type="radio" value="rung" name="robotClimber" id="climberRung" autocomplete="off"> Rung Climber
					</label>
					<label id="climberRamp" class="btn btn-secondary">
						<input type="radio" value="ramp" name="robotClimber" id="climberRamp" autocomplete="off"> Ramp
					</label>
					<label id="climberNone" class="btn btn-secondary">
						<input type="radio" value="none" name="robotClimber" id="climberNone" autocomplete="off"> None
					</label>
					<label id="climberOther" class="btn btn-secondary">
						<input type="radio" value="other" name="robotClimber" id="climberOther" autocomplete="off"> Other
					</label>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-4 col-6">
				<label class="mr-sm-2" style="display: block" for="robotDone">Robot Done</label>
				<div id="robotDone" class="btn-group btn-group-toggle" data-toggle="buttons">
					<label id="robotDoneNo" class="btn btn-secondary">
						<input type="radio" value="0" name="robotDone" id="robotDoneNo" autocomplete="off"> No
					</label>
					<label id="robotDoneYes" class="btn btn-secondary">
						<input type="radio" value="1" name="robotDone" id="robotDoneYes" autocomplete="off"> Yes
					</label>
				</div>
			</div>
			<div class="col-lg-4 col-6">
				<label class="mr-sm-2" style="display: block" for="robotBroken">Anything Broken?</label>
				<div id="robotBroken" class="btn-group btn-group-toggle" data-toggle="buttons">
					<label id="robotBrokenNo" class="btn btn-secondary">
						<input type="radio" value="0" name="robotBroken" id="robotBrokenNo" autocomplete="off"> No
					</label>
					<label id="robotBrokenYes" class="btn btn-secondary">
						<input type="radio" value="1" name="robotBroken" id="robotBrokenYes" autocomplete="off"> Yes
					</label>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-3 col-md-4 col-6">
				<label class="mr-sm-2" style="display: block" for="robotPhoto">Robot Photo Front</label>
				<input style="margin-bottom: 15px; width:100%" type="file" accept="image/*" id="robotPhotoFront" name="robotPhotoFront">
			</div>
			<div class="col-lg-3 col-md-4 col-6">
				<label class="mr-sm-2" style="display: block" for="robotPhoto">Robot Photo Back</label>
				<input style="margin-bottom: 15px; width:100%" type="file" accept="image/*" id="robotPhotoBack" name="robotPhotoBack">
			</div>
			<div class="col-lg-3 col-md-4 col-6">
				<label class="mr-sm-2" style="display: block" for="robotPhoto">Robot Photo Left</label>
				<input style="margin-bottom: 15px; width:100%" type="file" accept="image/*" id="robotPhotoLeft" name="robotPhotoLeft">
			</div>
			<div class="col-lg-3 col-md-4 col-6">
				<label class="mr-sm-2" style="display: block" for="robotPhoto">Robot Photo Right</label>
				<input style="margin-bottom: 15px; width:100%" type="file" accept="image/*" id="robotPhotoRight" name="robotPhotoRight">
			</div>
			<div class="col-lg-3 col-md-4 col-6">
				<label class="mr-sm-2" style="display: block" for="robotPhoto">Robot Photo Top</label>
				<input style="margin-bottom: 15px; width:100%" type="file" accept="image/*" id="robotPhotoTop" name="robotPhotoTop">
			</div>
		</div>
		<div class="row">
			<div class="col">
				<label class="mr-sm-2" style="display: block" for="commentSection">Notes and Comments</label>
				<textarea style="width: 100%; height:100px" id="commentSection"></textarea>
			</div>
		</div>
		<button id="Submit" class="btn btn-success" type="button" style="margin-top: 15px; margin-bottom: 15px">Submit</button>
		<button id="Edit" class="btn btn-success" type="button" style="margin-top: 15px; margin-bottom: 15px">Edit</button>
	</form>
</div>