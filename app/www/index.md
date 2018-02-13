---
layout: default
title: Match
---
<div class="container-fluid" style="background-color: #f0f0f0; margin-bottom: 15px">
	<form>
		<div class="row">
			<div class="col-md">
				<h2>General</h2>
			</div>
		</div>
		<div class="row">
			<div class="col-md">
				<label class="mr-sm-2" for="matchType">Match Type</label>
				<select class="custom-select mr-sm-2" id="matchType">
					<option selected>Choose...</option>
					<option value="p">Practice</option>
					<option value="q">Qualification</option>
				</select>
			</div>
			<div class="col-md">
				<label class="mr-sm-2" for="matchNumber">Match Number</label>
				<input id="matchNumber" type="tel" class="form-control" placeholder="Match Number">
			</div>
			<div class="col-md">
				<label class="mr-sm-2" for="teamNumber">Team Number</label>
				<input id="teamNumber" type="tel" class="form-control" placeholder="Team Number">
			</div>
		</div>
		<div class="row">
			<div class="col">
				<label class="mr-sm-2" style="display: block" for="allianceColor">Alliance Color</label>
				<div id="allianceColor" class="btn-group btn-group-toggle" data-toggle="buttons">
					<label class="btn btn-danger">
						<input type="radio" value="red" name="allianceColor" id="allianceColorRed" autocomplete="off"> Red
					</label>
					<label class="btn btn-primary">
						<input type="radio" value="blue" name="allianceColor" id="allianceColorBlue" autocomplete="off"> Blue
					</label>
				</div>
			</div>
			<div class="col">
				<label class="mr-sm-2" style="display: block" for="startingPosition">Starting Position</label>
				<div id="startingPosition" class="btn-group btn-group-toggle" data-toggle="buttons">
					<label class="btn btn-secondary">
						<input type="radio" value="left" name="startingPosition" id="startingPositionLeft" autocomplete="off"> Left
					</label>
					<label class="btn btn-secondary">
						<input type="radio" value="middle" name="startingPosition" id="startingPositionMiddle" autocomplete="off"> Middle
					</label>
					<label class="btn btn-secondary">
						<input type="radio" value="right" name="startingPosition" id="startingPositionRight" autocomplete="off"> Right
					</label>
				</div>
			</div>
		</div>
				<hr/>
				<div class="row">
					<div class="col-md">
						<h2>Auto</h2>
					</div>
				</div>
				<div class="row">
					<div class="col">
						<label class="mr-sm-2" style="display: block" for="autoCrossedBaseline">Crossed Baseline</label>
						<div id="autoCrossedBaseline" class="btn-group btn-group-toggle" data-toggle="buttons">
							<label class="btn btn-secondary">
								<input type="radio" value="0" name="autoCrossedBaseline" id="autoBaselineNo" autocomplete="off"> No
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="1" name="autoCrossedBaseline" id="autoBaselineYes" autocomplete="off"> Yes
							</label>
						</div>
					</div>
					<div class="col">
						<label class="mr-sm-2" style="display: block" for="autoSwitch">Cube in Switch</label>
						<div id="autoSwitch" class="btn-group btn-group-toggle" data-toggle="buttons">
							<label class="btn btn-secondary">
								<input type="radio" value="0" name="autoSwitch" id="autoSwitchNo" autocomplete="off"> No
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="1" name="autoSwitch" id="autoSwitchYes" autocomplete="off"> Yes
							</label>
						</div>
					</div>
					<div class="col">
						<label class="mr-sm-2" style="display: block" for="autoScale">Cube in Scale</label>
						<div id="autoSwitch" class="btn-group btn-group-toggle" data-toggle="buttons">
							<label class="btn btn-secondary">
								<input type="radio" value="0" name="autoScale" id="autoScaleNo" autocomplete="off"> No
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="1" name="autoScale" id="autoScaleYes" autocomplete="off"> Yes
							</label>
						</div>
					</div>
				</div>
				<hr/>
				<div class="row">
					<div class="col-md">
						<h2>Teleop</h2>
					</div>
				</div>
				<div class="row">
					<div class="col-md">
						<label style="margin-bottom: 0px" for="teleopScaleCubes">Cubes on Scale</label>
					</div>
				</div>
				<div class="row" style="margin-top:15px">
					<div class="col-md input-group">
						<a onclick="modifyScale_qty(-1)" class="btn btn-danger btn-lg" style="width: 50px; height: 50px; margin-right: 15px;" role="button">-</a>
						<input id="teleopScaleCubes" type="tel" class="form-control" value="0">
						<a onclick="modifyScale_qty(1)" class="btn btn-success btn-lg" style="width: 50px; height: 50px; margin-left: 15px;" role="button">+</a>
					</div>
				</div>
				<div class="row" style="margin-top:15px">
					<div class="col-md">
						<label style="margin-bottom: 0px" for="teleopSwitchCubes">Cubes on Switch</label>
					</div>
				</div>
				<div class="row" style="margin-top:15px">
					<div class="col-md input-group">
						<a onclick="modifySwitch_qty(-1)" class="btn btn-danger btn-lg" style="width: 50px; height: 50px; margin-right: 15px;" role="button">-</a>
						<input id="teleopSwitchCubes" type="tel" class="form-control" value="0">
						<a onclick="modifySwitch_qty(1)" class="btn btn-success btn-lg" style="width: 50px; height: 50px; margin-left: 15px;" role="button">+</a>
					</div>
				</div>
				<div class="row" style="margin-top:15px">
					<div class="col-md">
						<label style="margin-bottom: 0px" for="teleopExchangeCubes">Cubes in Exchange</label>
					</div>
				</div>
				<div class="row" style="margin-top:15px">
					<div class="col-md input-group">
						<a onclick="modifyExchange_qty(-1)" class="btn btn-danger btn-lg" style="width: 50px; height: 50px; margin-right: 15px;"
						 role="button">-</a>
						<input id="teleopExchangeCubes" type="tel" class="form-control" value="0">
						<a onclick="modifyExchange_qty(1)" class="btn btn-success btn-lg" style="width: 50px; height: 50px; margin-left: 15px;" role="button">+</a>
					</div>
				</div>
				<div class="row">
					<div class="col-md">
						<label class="mr-sm-2" for="climbingType">Climbing</label>
						<select class="custom-select mr-sm-2" id="climbingType">
							<option selected>Choose...</option>
							<option value="did not climb or park">Did Not Climb or Park</option>
							<option value="failed to climb">Failed to Climb</option>
							<option value="parked">Parked</option>
							<option value="climbed on rung">Climbed on Rung</option>
							<option value="climbed on another robot off rung">Climbed on Another Robot Off Rung</option>
							<option value="deployed ramp">Deployed Ramp</option>
							<option value="deployed ramp and levitated">Deployed Ramp and Levitated</option>
							<option value="used another robots ramp">Used Another Robot's Ramp</option>
							<option value="levitated">Levitated</option>
							<option value="other">Other Describe in Notes</option>
						</select>
					</div>
				</div>
				<div class="row">
					<div class="col-xl-4 col-lg-6 col-md-12">
						<label class="mr-sm-2" style="display: block" for="speedRating">Speed</label>
						<div id="speedRating" class="btn-group btn-group-toggle" data-toggle="buttons">
							<label class="btn btn-secondary">
								<input type="radio" value="1" name="speedRating" id="speed1" autocomplete="off"> 1
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="2" name="speedRating" id="speed2" autocomplete="off"> 2
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="3" name="speedRating" id="speed3" autocomplete="off"> 3
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="4" name="speedRating" id="speed4" autocomplete="off"> 4
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="5" name="speedRating" id="speed5" autocomplete="off"> 5
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="6" name="speedRating" id="speed6" autocomplete="off"> 6
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="7" name="speedRating" id="speed7" autocomplete="off"> 7
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="8" name="speedRating" id="speed8" autocomplete="off"> 8
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="9" name="speedRating" id="speed9" autocomplete="off"> 9
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="10" name="speedRating" id="speed10" autocomplete="off"> 10
							</label>
						</div>
					</div>
					<div class="col-xl-4 col-lg-6 col-md-12">
						<p style="margin-bottom: 5px">Cube Cycle Time, Pickup to Dropoff to Pickup</p>
						<div style="display: inline-block">
						<p style="margin-bottom: 0px"><span style="font-size: 24px;" id="cubeCycleSeconds">00</span><span style="font-size: 24px;">:</span><span style="font-size: 24px;" id="cubeCycleTenths">00</span></p>
						</div>
						<div style="display: inline-block">
						<a style="color:#fff" class="btn btn-secondary" id="cubeTimerStart">Start</a>
						<a style="color:#fff" class="btn btn-secondary" id="cubeTimerStop">Stop</a>
						<a style="color:#fff" class="btn btn-secondary" id="cubeTimerReset">Reset</a>
						</div>
					</div>
					<div class="col-xl-4 col-lg-6 col-md-12">
						<label class="mr-sm-2" style="display: block" for="stabilityRating">Stability</label>
						<div id="stabilityRating" class="btn-group btn-group-toggle" data-toggle="buttons">
							<label class="btn btn-secondary">
								<input type="radio" value="1" name="stabilityRating" id="stability1" autocomplete="off"> 1
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="2" name="stabilityRating" id="stability2" autocomplete="off"> 2
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="3" name="stabilityRating" id="stability3" autocomplete="off"> 3
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="4" name="stabilityRating" id="stability4" autocomplete="off"> 4
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="5" name="stabilityRating" id="stability5" autocomplete="off"> 5
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="6" name="stabilityRating" id="stability6" autocomplete="off"> 6
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="7" name="stabilityRating" id="stability7" autocomplete="off"> 7
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="8" name="stabilityRating" id="stability8" autocomplete="off"> 8
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="9" name="stabilityRating" id="stability9" autocomplete="off"> 9
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="10" name="stabilityRating" id="stability10" autocomplete="off"> 10
							</label>
						</div>
					</div>
					<div class="col-xl-4 col-lg-6 col-md-12">
						<label class="mr-sm-2" style="display: block" for="skillRating">Driver Skill</label>
						<div id="skillRating" class="btn-group btn-group-toggle" data-toggle="buttons">
							<label class="btn btn-secondary">
								<input type="radio" value="1" name="skillRating" id="skill1" autocomplete="off"> 1
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="2" name="skillRating" id="skill2" autocomplete="off"> 2
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="3" name="skillRating" id="skill3" autocomplete="off"> 3
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="4" name="skillRating" id="skill4" autocomplete="off"> 4
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="5" name="skillRating" id="skill5" autocomplete="off"> 5
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="6" name="skillRating" id="skill6" autocomplete="off"> 6
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="7" name="skillRating" id="skill7" autocomplete="off"> 7
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="8" name="skillRating" id="skill8" autocomplete="off"> 8
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="9" name="skillRating" id="skill9" autocomplete="off"> 9
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="10" name="skillRating" id="skill10" autocomplete="off"> 10
							</label>
						</div>
					</div>
					<div class="col-xl-4 col-lg-6 col-md-12">
						<label class="mr-sm-2" style="display: block" for="defenceRating">Defence</label>
						<div id="defenceRating" class="btn-group btn-group-toggle" data-toggle="buttons">
							<label class="btn btn-secondary">
								<input type="radio" value="1" name="defenceRating" id="defence1" autocomplete="off"> 1
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="2" name="defenceRating" id="defence2" autocomplete="off"> 2
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="3" name="defenceRating" id="defence3" autocomplete="off"> 3
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="4" name="defenceRating" id="defence4" autocomplete="off"> 4
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="5" name="defenceRating" id="defence5" autocomplete="off"> 5
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="6" name="defenceRating" id="defence6" autocomplete="off"> 6
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="7" name="defenceRating" id="defence7" autocomplete="off"> 7
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="8" name="defenceRating" id="defence8" autocomplete="off"> 8
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="9" name="defenceRating" id="defence9" autocomplete="off"> 9
							</label>
							<label class="btn btn-secondary">
								<input type="radio" value="10" name="defenceRating" id="defence10" autocomplete="off"> 10
							</label>
						</div>
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