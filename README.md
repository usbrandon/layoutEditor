
# Layout Editor

#Instruction to get the project working 
(This document is Work In Progress)
===

We can start the project in 1 of 2 ways
* CBF2
* Manual

## Start project using CBF2

Use CFB2 as in [https://github.com/webdetails/cbf2](https://github.com/webdetails/cbf2)

NOTE: The dockerfile of this specific project was not yest tested

## Start project manually 

1. Stop you pentaho server
2. Copy plugins/layoutEditor folder into pentaho-server/pentaho-solutions/system
3. Start your pentaho server
4. Zip the solution folder
5. Upload the ziped file in 4) into Pentaho repository
6. Open the Layout Editor from the menu 

# Implementation details

## Dashboard: 

The main dashboard can be called from the Pentaho User Console (PUC) menu, by selecting Tools->Layout Editor

## Component:

Once the plugin is deployed into Pentaho, there will be one aditional component available in all Dashboards. The component name is Layout Editor and just need to be added to a dashboard and give it a name.  

NOTE: Only users with "Create Content" permissions will be able to add new widgets into the dashboard. Some endpoints will fail if the user does not have "Create Content" permissions. 

## Endpoints:

* [main]:
    id=main 
    type=Dashboard
    name=can_create, 
    filePath=${PENTAHO_SOLUTION_FOLDER}/system/layoutEditor/endpoints/kettle/main.wcdf
    adminOnly=false
    parameters=
    example: http://${hotname}:${port}/pentaho/plugin/layoutEditor/api/main


* [can_create]:
    id=can_create 
    type=Kettle
    name=can_create, 
    filePath=${PENTAHO_SOLUTION_FOLDER}/system/layoutEditor/endpoints/kettle/can_create.ktr
    adminOnly=false
    parameters=
    example: http://${hotname}:${port}/pentaho/plugin/layoutEditor/api/can_create

* [list_parameters]: 	
    id=list_parameters, 
    type=Kettle, 
    name=list_parameters
    filePath=${PENTAHO_SOLUTION_FOLDER}/system/layoutEditor/endpoints/kettle/list_parameters.ktr
    adminOnly=false
    parameters=file
    example: http://${hotname}:${port}/pentaho/plugin/layoutEditor/api/list_parameters?paramfile=/public/tests/tests.cdfde

* [load_dashboard]: 	
    id=load_dashboard, 
    type=Kettle, 
    name=load_dashboard
    filePath=${PENTAHO_SOLUTION_FOLDER}/system/layoutEditor/endpoints/kettle/load_dashboard.ktr
    adminOnly=false
    parameters=file
    example: http://${hotname}:${port}/pentaho/plugin/layoutEditor/api/load_dashboard?paramfile=/public/tests/tests.cdfde

* [list_widgets]: 	
    id=list_widgets, 
    type=Kettle, 
    name=list_widgets
    filePath=${PENTAHO_SOLUTION_FOLDER}/system/layoutEditor/endpoints/kettle/list_widgets.ktr
    adminOnly=false

* [save_dashboard]: NOT YET IMPLEMENTED
    id=save_dashboard, 
    type=Kettle, 
    name=save_dashboard
    filePath=${PENTAHO_SOLUTION_FOLDER}/system/layoutEditor/endpoints/kettle/save_dashboard.ktr
    adminOnly=false
    parameters=file,content
    example: http://${hotname}:${port}/pentaho/plugin/layoutEditor/api/load_dashboard?paramfile=/public/tests/tests.cdfde&content="{...}"
