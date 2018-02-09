---
layout: default
title: Pit
---
<div class="container-fluid" style="background-color: #f0f0f0; margin-bottom: 15px">
	<form>
        <div class="row">
            <div class="col-md">
				<label class="mr-sm-2" for="teamNumber">Team Number</label>
				<input id="teamNumber" type="tel" class="form-control" placeholder="Team Number">
			</div>
        </div>
        <div class="row">
            <div class="col-lg-4 col-md-6">
                <label class="mr-sm-2" style="display: block" for="manipulatorType">Cube Manipulator Type:</label>
				<div id="manipulatorType" class="btn-group btn-group-toggle" data-toggle="buttons">
					<label class="btn btn-secondary">
						<input type="radio" value="arm" name="manipulatorType" id="manipulatorArm" autocomplete="off"> Arm
					</label>
					<label class="btn btn-secondary">
						<input type="radio" value="elevator" name="manipulatorType" id="manipulatorElevator" autocomplete="off"> Elevator
					</label>
					<label class="btn btn-secondary">
						<input type="radio" value="pusher" name="manipulatorType" id="maipulatorPusher" autocomplete="off"> Pusher
					</label>
					<label class="btn btn-secondary">
						<input type="radio" value="other" name="manipulatorType" id="manipulatorOther" autocomplete="off"> Other
					</label>
				</div>
            </div>
            <div class="col-lg-4 col-md-6">
                <label class="mr-sm-2" style="display: block" for="placeCubes">Can Place Cubes In:</label>
				<div id="placeCubes" class="btn-group btn-group-toggle" data-toggle="buttons">
					<label class="btn btn-secondary">
						<input type="checkbox" value="switch" name="placeCubes" id="cubeSwitch" autocomplete="off"> Switch
					</label>
					<label class="btn btn-secondary">
						<input type="checkbox" value="scale" name="placeCubes" id="cubeScale" autocomplete="off"> Scale
					</label>
					<label class="btn btn-secondary">
						<input type="checkbox" value="exchange" name="placeCubes" id="cubeExchange" autocomplete="off"> Exchange
					</label>
				</div>
            </div>
            <div class="col-md-4">
                <label class="mr-sm-2" style="display: block" for="robotSize">Size:</label>
				<div id="robotSize" class="btn-group btn-group-toggle" data-toggle="buttons">
					<label class="btn btn-secondary">
						<input type="radio" value="small" name="robotSize" id="sizeSmall" autocomplete="off"> Small
					</label>
					<label class="btn btn-secondary">
						<input type="radio" value="medium" name="robotSize" id="sizeMedium" autocomplete="off"> Medium
					</label>
					<label class="btn btn-secondary">
						<input type="radio" value="large" name="robotSize" id="sizeLarge" autocomplete="off"> Large
					</label>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-4 col-md-6">
                <label class="mr-sm-2" style="display: block" for="robotAppearance">Overall Appearance:</label>
				<div id="robotAppearance" class="btn-group btn-group-toggle" data-toggle="buttons">
					<label class="btn btn-secondary">
						<input type="radio" value="1" name="robotAppearance" id="appearance1" autocomplete="off"> 1
					</label>
					<label class="btn btn-secondary">
						<input type="radio" value="2" name="robotAppearance" id="appearance2" autocomplete="off"> 2
					</label>
					<label class="btn btn-secondary">
						<input type="radio" value="3" name="robotAppearance" id="appearance3" autocomplete="off"> 3
					</label>
					<label class="btn btn-secondary">
						<input type="radio" value="4" name="robotAppearance" id="appearance4" autocomplete="off"> 4
					</label>
					<label class="btn btn-secondary">
						<input type="radio" value="5" name="robotAppearance" id="appearance5" autocomplete="off"> 5
					</label>
					<label class="btn btn-secondary">
						<input type="radio" value="6" name="robotAppearance" id="appearance6" autocomplete="off"> 6
					</label>
					<label class="btn btn-secondary">
						<input type="radio" value="7" name="robotAppearance" id="appearance7" autocomplete="off"> 7
					</label>
					<label class="btn btn-secondary">
						<input type="radio" value="8" name="robotAppearance" id="appearance8" autocomplete="off"> 8
					</label>
					<label class="btn btn-secondary">
						<input type="radio" value="9" name="robotAppearance" id="appearance9" autocomplete="off"> 9
					</label>
					<label class="btn btn-secondary">
						<input type="radio" value="10" name="robotAppearance" id="appearance10" autocomplete="off"> 10
					</label>
				</div>
            </div>
            <div class="col-xl-4 col-md-6">
            <label class="mr-sm-2" style="display: block" for="pitSkill">Pit Crew Skill:</label>
				<div id="pitSkill" class="btn-group btn-group-toggle" data-toggle="buttons">
					<label class="btn btn-secondary">
						<input type="radio" value="1" name="pitSkill" id="pit1" autocomplete="off"> 1
					</label>
					<label class="btn btn-secondary">
						<input type="radio" value="2" name="pitSkill" id="pit2" autocomplete="off"> 2
					</label>
					<label class="btn btn-secondary">
						<input type="radio" value="3" name="pitSkill" id="pit3" autocomplete="off"> 3
					</label>
					<label class="btn btn-secondary">
						<input type="radio" value="4" name="pitSkill" id="pit4" autocomplete="off"> 4
					</label>
					<label class="btn btn-secondary">
						<input type="radio" value="5" name="pitSkill" id="pit5" autocomplete="off"> 5
					</label>
					<label class="btn btn-secondary">
						<input type="radio" value="6" name="pitSkill" id="pit6" autocomplete="off"> 6
					</label>
					<label class="btn btn-secondary">
						<input type="radio" value="7" name="pitSkill" id="pit7" autocomplete="off"> 7
					</label>
					<label class="btn btn-secondary">
						<input type="radio" value="8" name="pitSkill" id="pit8" autocomplete="off"> 8
					</label>
					<label class="btn btn-secondary">
						<input type="radio" value="9" name="pitSkill" id="pit9" autocomplete="off"> 9
					</label>
					<label class="btn btn-secondary">
						<input type="radio" value="10" name="pitSkill" id="pit10" autocomplete="off"> 10
					</label>
				</div>
                </div>
                <div class="col-xl-4 col-md-4">
                <label class="mr-sm-2" style="display: block" for="robotClimber">Climber:</label>
				<div id="robotClimber" class="btn-group btn-group-toggle" data-toggle="buttons">
					<label class="btn btn-secondary">
						<input type="radio" value="rung" name="robotClimber" id="climberRung" autocomplete="off"> Rung Climber
					</label>
					<label class="btn btn-secondary">
						<input type="radio" value="ramp" name="robotClimber" id="climberRamp" autocomplete="off"> Ramp
					</label>
					<label class="btn btn-secondary">
						<input type="radio" value="none" name="robotClimber" id="climberNone" autocomplete="off"> None
					</label>
                    <label class="btn btn-secondary">
						<input type="radio" value="other" name="robotClimber" id="climberOther" autocomplete="off"> Other
					</label>
				</div>
            </div>
        </div>
		<div class="row">
            <div class="col-md">
				<label class="mr-sm-2" style="display: block" for="robotPhoto">Take Robot Photo</label>
                <input style="margin-bottom: 15px" type="file" capture="camera" accept="image/*" id="robotPhoto" name="robotPhoto">
			</div>
        </div>
        <div class="row">
			<div class="col">
			<label class="mr-sm-2" style="display: block" for="commentSection">Notes and Comments</label>
				<textarea style="width: 100%; height:100px" id="commentSection"></textarea>
			</div>
		</div>
        <button id="Submit" class="btn btn-success" type="button" style="margin-top: 15px; margin-bottom: 15px">Submit</button>
    </form>
</div>