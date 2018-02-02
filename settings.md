---
layout: default
title: Settings
---
<div class="container" style="background-color: #f0f0f0; margin-bottom: 15px">
	<form>
		<div class="row">
			<div class="col-md">
				<label class="mr-sm-2" for="serverIp">Server IP:</label>
				<input id="serverIp" class="form-control" placeholder="Server IP">
			</div>
			<div class="col-md">
				<label class="mr-sm-2" for="databaseName">Database Name:</label>
				<input id="databaseName" class="form-control" placeholder="Database Name">
			</div>
			<div class="col-md">
				<label class="mr-sm-2" for="scoutName">Scout Name:</label>
				<input id="scoutName" class="form-control" placeholder="Scout Name">
			</div>
		</div>
		<button id="Save" class="btn btn-success" style="margin-right:15px; margin-top:15px; margin-bottom: 15px" type="button">Save</button>
		<button id="Delete" class="btn btn-danger" type="button" style="margin-top:15px; margin-bottom: 15px">Delete Local Database</button>
	</form>
</div>