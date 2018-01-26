---
layout: default
title: Match
---
<div class="container">
	<div class="row">
		<div class="col-sm-12" style="background-color: #f0f0f0; padding-top: 20px; padding-bottom: 20px">
			Round:<input type="tel" id="roundNumber" name="round"><br><br>Team Number:
			<input type="tel" id="teamNumber" name="fname"><br>Last name:
			<input id="lname" name="lname" type="text"><br><br>
			Round Type:<select id="roundType">
			<option value="q">Qualification</option>
			<option value="qf">Quarter Final</option>
			<option value="sf">Semi Final</option>
			<option value="f">Final</option>
			</select>
			<br>Number of Things:
			<br><input type="radio" name="numberThings" value="1" /> 1 <br />
			<input type="radio" name="numberThings" value="2" /> 2 <br />
			<input type="radio" name="numberThings" value="3" /> 3 <br />
			<div class="row">
			<div class="col-sm-12" style="background-color: #f0f0f0; padding-top: 20px;">
			<button id="Submit" class="btn btn-success" style="margin-right: 15px" type="button">
			Submit</button></div></div></div>
	</div>
</div>