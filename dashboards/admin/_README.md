# Instructions 

Set configurations on config file in: 
* {File System} : .../pentaho-solution/system/layoutEditor/config.xml
* {Pentaho Repository} : /public/layout-editor/config.xml

NOTE: The options in the file system will have higher priority and configurations will overwrite the configurations in the file placed in the repository.

Options on config file:
* configname: configuration group name 
* basepaths: multiple xml nodes with path to the folders where widgets will be placed. All the wcdf files will be considered widgtes to be included 
* whitelist: It's the regular expression to filter the files that are being returned. This wa developed having in consideration Multitenant environments
* showgroups: it gets the parent folder name of the widget to be used as the group where the widgets should be placed 
* filetype: allow a first filter when getting the files. In this case our widgets are allways wcdf files (the only supported by now)
* showhidden: to include or not inlcude the hidden files 


```xml
	<config>
		<configname>default</configname>
		<basepaths>
			<path>/public/dashboardEditFramework</path>
			<path>/public/clp</path>
		</basepaths>	
		<whitelist>(/tenants/.*/widgets.*|/public/.*/widgets.*)</whitelist>
		<showgroups>true</showgroups>
		<filetype>*.wcdf|FILES</filetype>
		<showhidden>false</showhidden>
	</config>
```

