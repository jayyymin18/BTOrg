/*!
 *
 * Bryntum Gantt 5.3.6
 *
 * Copyright(c) 2023 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
(function(i,r){var l=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],r);else if(typeof module=="object"&&module.exports)module.exports=r();else{var c=r(),p=l?exports:i;for(var u in c)p[u]=c[u]}})(typeof self<"u"?self:void 0,()=>{var i={},r={exports:i},l=Object.defineProperty,c=Object.getOwnPropertyDescriptor,p=Object.getOwnPropertyNames,u=Object.prototype.hasOwnProperty,h=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t)l(e,n,{get:t[n],enumerable:!0})},y=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of p(t))!u.call(e,o)&&o!==n&&l(e,o,{get:()=>t[o],enumerable:!(a=c(t,o))||a.enumerable});return e},v=e=>y(l({},"__esModule",{value:!0}),e),f=(e,t,n)=>(h(e,typeof t!="symbol"?t+"":t,n),n),m={};g(m,{default:()=>w}),r.exports=v(m);var d=class{static mergeLocales(...e){let t={};return e.forEach(n=>{Object.keys(n).forEach(a=>{typeof n[a]=="object"?t[a]={...t[a],...n[a]}:t[a]=n[a]})}),t}static trimLocale(e,t){let n=(a,o)=>{e[a]&&(o?e[a][o]&&delete e[a][o]:delete e[a])};Object.keys(t).forEach(a=>{Object.keys(t[a]).length>0?Object.keys(t[a]).forEach(o=>n(a,o)):n(a)})}static normalizeLocale(e,t){if(!e)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof e=="string"){if(!t)throw new Error('"config" parameter can not be empty');t.locale?t.name=e||t.name:t.localeName=e}else t=e;let n={};if(t.name||t.locale)n=Object.assign({localeName:t.name},t.locale),t.desc&&(n.localeDesc=t.desc),t.code&&(n.localeCode=t.code),t.path&&(n.localePath=t.path);else{if(!t.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);n=Object.assign({},t)}for(let a of["name","desc","code","path"])n[a]&&delete n[a];if(!n.localeName)throw new Error("Locale name can not be empty");return n}static get locales(){return globalThis.bryntum.locales||{}}static set locales(e){globalThis.bryntum.locales=e}static get localeName(){return globalThis.bryntum.locale||"En"}static set localeName(e){globalThis.bryntum.locale=e||d.localeName}static get locale(){return d.localeName&&this.locales[d.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(e,t){let{locales:n}=globalThis.bryntum,a=d.normalizeLocale(e,t),{localeName:o}=a;return!n[o]||t===!0?n[o]=a:n[o]=this.mergeLocales(n[o]||{},a||{}),n[o]}},s=d;f(s,"skipLocaleIntegrityCheck",!1),globalThis.bryntum=globalThis.bryntum||{},globalThis.bryntum.locales=globalThis.bryntum.locales||{},s._$name="LocaleHelper";var b={localeName:"En",localeDesc:"English (US)",localeCode:"en-US",RemoveDependencyCycleEffectResolution:{descriptionTpl:"Remove dependency"},DeactivateDependencyCycleEffectResolution:{descriptionTpl:"Deactivate dependency"},CycleEffectDescription:{descriptionTpl:"A cycle has been found, formed by: {0}"},EmptyCalendarEffectDescription:{descriptionTpl:'"{0}" calendar does not provide any working time intervals.'},Use24hrsEmptyCalendarEffectResolution:{descriptionTpl:"Use 24 hours calendar with non-working Saturdays and Sundays."},Use8hrsEmptyCalendarEffectResolution:{descriptionTpl:"Use 8 hours calendar (08:00-12:00, 13:00-17:00) with non-working Saturdays and Sundays."},ConflictEffectDescription:{descriptionTpl:"A scheduling conflict has been found: {0} is conflicting with {1}"},ConstraintIntervalDescription:{dateFormat:"LLL"},ProjectConstraintIntervalDescription:{startDateDescriptionTpl:"Project start date {0}",endDateDescriptionTpl:"Project end date {0}"},DependencyType:{long:["Start-to-Start","Start-to-Finish","Finish-to-Start","Finish-to-Finish"]},ManuallyScheduledParentConstraintIntervalDescription:{startDescriptionTpl:'Manually scheduled "{2}" forces its children to start no earlier than {0}',endDescriptionTpl:'Manually scheduled "{2}" forces its children to finish no later than {1}'},DisableManuallyScheduledConflictResolution:{descriptionTpl:'Disable manual scheduling for "{0}"'},DependencyConstraintIntervalDescription:{descriptionTpl:'Dependency ({2}) from "{3}" to "{4}"'},RemoveDependencyResolution:{descriptionTpl:'Remove dependency from "{1}" to "{2}"'},DeactivateDependencyResolution:{descriptionTpl:'Deactivate dependency from "{1}" to "{2}"'},DateConstraintIntervalDescription:{startDateDescriptionTpl:'Task "{2}" {3} {0} constraint',endDateDescriptionTpl:'Task "{2}" {3} {1} constraint',constraintTypeTpl:{startnoearlierthan:"Start-No-Earlier-Than",finishnoearlierthan:"Finish-No-Earlier-Than",muststarton:"Must-Start-On",mustfinishon:"Must-Finish-On",startnolaterthan:"Start-No-Later-Than",finishnolaterthan:"Finish-No-Later-Than"}},RemoveDateConstraintConflictResolution:{descriptionTpl:'Remove "{1}" constraint of task "{0}"'}},M=s.publishLocale(b),S={localeName:"En",localeDesc:"English (US)",localeCode:"en-US",Object:{Yes:"Yes",No:"No",Cancel:"Cancel",Ok:"OK",Week:"Week"},Combo:{noResults:"No results",recordNotCommitted:"Record could not be added",addNewValue:e=>`Add ${e}`},FilePicker:{file:"File"},Field:{badInput:"Invalid field value",patternMismatch:"Value should match a specific pattern",rangeOverflow:e=>`Value must be less than or equal to ${e.max}`,rangeUnderflow:e=>`Value must be greater than or equal to ${e.min}`,stepMismatch:"Value should fit the step",tooLong:"Value should be shorter",tooShort:"Value should be longer",typeMismatch:"Value is required to be in a special format",valueMissing:"This field is required",invalidValue:"Invalid field value",minimumValueViolation:"Minimum value violation",maximumValueViolation:"Maximum value violation",fieldRequired:"This field is required",validateFilter:"Value must be selected from the list"},DateField:{invalidDate:"Invalid date input"},DatePicker:{gotoPrevYear:"Go to previous year",gotoPrevMonth:"Go to previous month",gotoNextMonth:"Go to next month",gotoNextYear:"Go to next year"},NumberFormat:{locale:"en-US",currency:"USD"},DurationField:{invalidUnit:"Invalid unit"},TimeField:{invalidTime:"Invalid time input"},TimePicker:{hour:"Hour",minute:"Minute",second:"Second"},List:{loading:"Loading..."},GridBase:{loadMask:"Loading...",syncMask:"Saving changes, please wait..."},PagingToolbar:{firstPage:"Go to first page",prevPage:"Go to previous page",page:"Page",nextPage:"Go to next page",lastPage:"Go to last page",reload:"Reload current page",noRecords:"No records to display",pageCountTemplate:e=>`of ${e.lastPage}`,summaryTemplate:e=>`Displaying records ${e.start} - ${e.end} of ${e.allCount}`},PanelCollapser:{Collapse:"Collapse",Expand:"Expand"},Popup:{close:"Close"},UndoRedo:{Undo:"Undo",Redo:"Redo",UndoLastAction:"Undo last action",RedoLastAction:"Redo last undone action",NoActions:"No items in the undo queue"},FieldFilterPicker:{equals:"equals",doesNotEqual:"does not equal",isEmpty:"is empty",isNotEmpty:"is not empty",contains:"contains",doesNotContain:"does not contain",startsWith:"starts with",endsWith:"ends with",isOneOf:"is one of",isNotOneOf:"is not one of",isGreaterThan:"is greater than",isLessThan:"is less than",isGreaterThanOrEqualTo:"is greater than or equal to",isLessThanOrEqualTo:"is less than or equal to",isBetween:"is between",isNotBetween:"is not between",isBefore:"is before",isAfter:"is after",isToday:"is today",isTomorrow:"is tomorrow",isYesterday:"is yesterday",isThisWeek:"is this week",isNextWeek:"is next week",isLastWeek:"is last week",isThisMonth:"is this month",isNextMonth:"is next month",isLastMonth:"is last month",isThisYear:"is this year",isNextYear:"is next year",isLastYear:"is last year",isYearToDate:"is year to date",isTrue:"is true",isFalse:"is false",selectAProperty:"Select a property",selectAnOperator:"Select an operator",caseSensitive:"Case-sensitive",and:"and",dateFormat:"D/M/YY",selectOneOrMoreValues:"Select one or more values",enterAValue:"Enter a value",enterANumber:"Enter a number",selectADate:"Select a date"},FieldFilterPickerGroup:{addFilter:"Add filter"},DateHelper:{locale:"en-US",weekStartDay:0,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"millisecond",plural:"ms",abbrev:"ms"},{single:"second",plural:"seconds",abbrev:"s"},{single:"minute",plural:"minutes",abbrev:"min"},{single:"hour",plural:"hours",abbrev:"h"},{single:"day",plural:"days",abbrev:"d"},{single:"week",plural:"weeks",abbrev:"w"},{single:"month",plural:"months",abbrev:"mon"},{single:"quarter",plural:"quarters",abbrev:"q"},{single:"year",plural:"years",abbrev:"yr"},{single:"decade",plural:"decades",abbrev:"dec"}],unitAbbreviations:[["mil"],["s","sec"],["m","min"],["h","hr"],["d"],["w","wk"],["mo","mon","mnt"],["q","quar","qrt"],["y","yr"],["dec"]],parsers:{L:"MM/DD/YYYY",LT:"HH:mm A",LTS:"HH:mm:ss A"},ordinalSuffix:e=>{let t=["11","12","13"].find(a=>e.endsWith(a)),n="th";if(!t){let a=e[e.length-1];n={1:"st",2:"nd",3:"rd"}[a]||"th"}return e+n}}},F=s.publishLocale(S),D=new String,C={localeName:"En",localeDesc:"English (US)",localeCode:"en-US",ColumnPicker:{column:"Column",columnsMenu:"Columns",hideColumn:"Hide column",hideColumnShort:"Hide",newColumns:"New columns"},Filter:{applyFilter:"Apply filter",filter:"Filter",editFilter:"Edit filter",on:"On",before:"Before",after:"After",equals:"Equals",lessThan:"Less than",moreThan:"More than",removeFilter:"Remove filter",disableFilter:"Disable filter"},FilterBar:{enableFilterBar:"Show filter bar",disableFilterBar:"Hide filter bar"},Group:{group:"Group",groupAscending:"Group ascending",groupDescending:"Group descending",groupAscendingShort:"Ascending",groupDescendingShort:"Descending",stopGrouping:"Stop grouping",stopGroupingShort:"Stop"},HeaderMenu:{moveBefore:e=>`Move before "${e}"`,moveAfter:e=>`Move after "${e}"`,collapseColumn:"Collapse column",expandColumn:"Expand column"},ColumnRename:{rename:"Rename"},MergeCells:{mergeCells:"Merge cells",menuTooltip:"Merge cells with same value when sorted by this column"},Search:{searchForValue:"Search for value"},Sort:{sort:"Sort",sortAscending:"Sort ascending",sortDescending:"Sort descending",multiSort:"Multi sort",removeSorter:"Remove sorter",addSortAscending:"Add ascending sorter",addSortDescending:"Add descending sorter",toggleSortAscending:"Change to ascending",toggleSortDescending:"Change to descending",sortAscendingShort:"Ascending",sortDescendingShort:"Descending",removeSorterShort:"Remove",addSortAscendingShort:"+ Ascending",addSortDescendingShort:"+ Descending"},Column:{columnLabel:e=>`${e.text?`${e.text} column. `:""}SPACE for context menu${e.sortable?", ENTER to sort":""}`,cellLabel:D},Checkbox:{toggleRowSelect:"Toggle row selection",toggleSelection:"Toggle selection of entire dataset"},RatingColumn:{cellLabel:e=>{var t;return`${e.text?e.text:""} ${(t=e.location)!=null&&t.record?`rating : ${e.location.record[e.field]||0}`:""}`}},GridBase:{loadFailedMessage:"Data loading failed!",syncFailedMessage:"Data synchronization failed!",unspecifiedFailure:"Unspecified failure",networkFailure:"Network error",parseFailure:"Failed to parse server response",serverResponse:"Server response:",noRows:"No records to display",moveColumnLeft:"Move to left section",moveColumnRight:"Move to right section",moveColumnTo:e=>`Move column to ${e}`},CellMenu:{removeRow:"Delete"},RowCopyPaste:{copyRecord:"Copy",cutRecord:"Cut",pasteRecord:"Paste",rows:"rows",row:"row"},CellCopyPaste:{copy:"Copy",cut:"Cut",paste:"Paste"},PdfExport:{"Waiting for response from server":"Waiting for response from server...","Export failed":"Export failed","Server error":"Server error","Generating pages":"Generating pages...","Click to abort":"Cancel"},ExportDialog:{width:"40em",labelWidth:"12em",exportSettings:"Export settings",export:"Export",exporterType:"Control pagination",cancel:"Cancel",fileFormat:"File format",rows:"Rows",alignRows:"Align rows",columns:"Columns",paperFormat:"Paper format",orientation:"Orientation",repeatHeader:"Repeat header"},ExportRowsCombo:{all:"All rows",visible:"Visible rows"},ExportOrientationCombo:{portrait:"Portrait",landscape:"Landscape"},SinglePageExporter:{singlepage:"Single page"},MultiPageExporter:{multipage:"Multiple pages",exportingPage:({currentPage:e,totalPages:t})=>`Exporting page ${e}/${t}`},MultiPageVerticalExporter:{multipagevertical:"Multiple pages (vertical)",exportingPage:({currentPage:e,totalPages:t})=>`Exporting page ${e}/${t}`},RowExpander:{loading:"Loading",expand:"Expand",collapse:"Collapse"}},N=s.publishLocale(C),E={localeName:"En",localeDesc:"English (US)",localeCode:"en-US",Object:{newEvent:"New event"},ResourceInfoColumn:{eventCountText:e=>e+" event"+(e!==1?"s":"")},Dependencies:{from:"From",to:"To",valid:"Valid",invalid:"Invalid"},DependencyType:{SS:"SS",SF:"SF",FS:"FS",FF:"FF",StartToStart:"Start-to-Start",StartToEnd:"Start-to-Finish",EndToStart:"Finish-to-Start",EndToEnd:"Finish-to-Finish",short:["SS","SF","FS","FF"],long:["Start-to-Start","Start-to-Finish","Finish-to-Start","Finish-to-Finish"]},DependencyEdit:{From:"From",To:"To",Type:"Type",Lag:"Lag","Edit dependency":"Edit dependency",Save:"Save",Delete:"Delete",Cancel:"Cancel",StartToStart:"Start to Start",StartToEnd:"Start to End",EndToStart:"End to Start",EndToEnd:"End to End"},EventEdit:{Name:"Name",Resource:"Resource",Start:"Start",End:"End",Save:"Save",Delete:"Delete",Cancel:"Cancel","Edit event":"Edit event",Repeat:"Repeat"},EventDrag:{eventOverlapsExisting:"Event overlaps existing event for this resource",noDropOutsideTimeline:"Event may not be dropped completely outside the timeline"},SchedulerBase:{"Add event":"Add event","Delete event":"Delete event","Unassign event":"Unassign event"},TimeAxisHeaderMenu:{pickZoomLevel:"Zoom",activeDateRange:"Date range",startText:"Start date",endText:"End date",todayText:"Today"},EventCopyPaste:{copyEvent:"Copy event",cutEvent:"Cut event",pasteEvent:"Paste event"},EventFilter:{filterEvents:"Filter tasks",byName:"By name"},TimeRanges:{showCurrentTimeLine:"Show current timeline"},PresetManager:{secondAndMinute:{displayDateFormat:"ll LTS",name:"Seconds"},minuteAndHour:{topDateFormat:"ddd MM/DD, hA",displayDateFormat:"ll LST"},hourAndDay:{topDateFormat:"ddd MM/DD",middleDateFormat:"LST",displayDateFormat:"ll LST",name:"Day"},day:{name:"Day/hours"},week:{name:"Week/hours"},dayAndWeek:{displayDateFormat:"ll LST",name:"Week/days"},dayAndMonth:{name:"Month"},weekAndDay:{displayDateFormat:"ll LST",name:"Week"},weekAndMonth:{name:"Weeks"},weekAndDayLetter:{name:"Weeks/weekdays"},weekDateAndMonth:{name:"Months/weeks"},monthAndYear:{name:"Months"},year:{name:"Years"},manyYears:{name:"Multiple years"}},RecurrenceConfirmationPopup:{"delete-title":"You are deleting an event","delete-all-message":"Do you want to delete all occurrences of this event?","delete-further-message":"Do you want to delete this and all future occurrences of this event, or only the selected occurrence?","delete-further-btn-text":"Delete All Future Events","delete-only-this-btn-text":"Delete Only This Event","update-title":"You are changing a repeating event","update-all-message":"Do you want to change all occurrences of this event?","update-further-message":"Do you want to change only this occurrence of the event, or this and all future occurrences?","update-further-btn-text":"All Future Events","update-only-this-btn-text":"Only This Event",Yes:"Yes",Cancel:"Cancel",width:600},RecurrenceLegend:{" and ":" and ",Daily:"Daily","Weekly on {1}":({days:e})=>`Weekly on ${e}`,"Monthly on {1}":({days:e})=>`Monthly on ${e}`,"Yearly on {1} of {2}":({days:e,months:t})=>`Yearly on ${e} of ${t}`,"Every {0} days":({interval:e})=>`Every ${e} days`,"Every {0} weeks on {1}":({interval:e,days:t})=>`Every ${e} weeks on ${t}`,"Every {0} months on {1}":({interval:e,days:t})=>`Every ${e} months on ${t}`,"Every {0} years on {1} of {2}":({interval:e,days:t,months:n})=>`Every ${e} years on ${t} of ${n}`,position1:"the first",position2:"the second",position3:"the third",position4:"the fourth",position5:"the fifth","position-1":"the last",day:"day",weekday:"weekday","weekend day":"weekend day",daysFormat:({position:e,days:t})=>`${e} ${t}`},RecurrenceEditor:{"Repeat event":"Repeat event",Cancel:"Cancel",Save:"Save",Frequency:"Frequency",Every:"Every",DAILYintervalUnit:"day(s)",WEEKLYintervalUnit:"week(s)",MONTHLYintervalUnit:"month(s)",YEARLYintervalUnit:"year(s)",Each:"Each","On the":"On the","End repeat":"End repeat","time(s)":"time(s)"},RecurrenceDaysCombo:{day:"day",weekday:"weekday","weekend day":"weekend day"},RecurrencePositionsCombo:{position1:"first",position2:"second",position3:"third",position4:"fourth",position5:"fifth","position-1":"last"},RecurrenceStopConditionCombo:{Never:"Never",After:"After","On date":"On date"},RecurrenceFrequencyCombo:{None:"No repeat",Daily:"Daily",Weekly:"Weekly",Monthly:"Monthly",Yearly:"Yearly"},RecurrenceCombo:{None:"None",Custom:"Custom..."},Summary:{"Summary for":e=>`Summary for ${e}`},ScheduleRangeCombo:{completeview:"Complete schedule",currentview:"Visible schedule",daterange:"Date range",completedata:"Complete schedule (for all events)"},SchedulerExportDialog:{"Schedule range":"Schedule range","Export from":"From","Export to":"To"},ExcelExporter:{"No resource assigned":"No resource assigned"},CrudManagerView:{serverResponseLabel:"Server response:"},DurationColumn:{Duration:"Duration"}},A=s.publishLocale(E),T={localeName:"En",localeDesc:"English (US)",localeCode:"en-US",ConstraintTypePicker:{none:"None",muststarton:"Must start on",mustfinishon:"Must finish on",startnoearlierthan:"Start no earlier than",startnolaterthan:"Start no later than",finishnoearlierthan:"Finish no earlier than",finishnolaterthan:"Finish no later than"},CalendarField:{"Default calendar":"Default calendar"},TaskEditorBase:{Information:"Information",Save:"Save",Cancel:"Cancel",Delete:"Delete",calculateMask:"Calculating...",saveError:"Can't save, please correct errors first",repeatingInfo:"Viewing a repeating event",editRepeating:"Edit"},TaskEdit:{"Edit task":"Edit task",ConfirmDeletionTitle:"Confirm deletion",ConfirmDeletionMessage:"Are you sure you want to delete the event?"},GanttTaskEditor:{editorWidth:"44em"},SchedulerTaskEditor:{editorWidth:"34em"},SchedulerGeneralTab:{labelWidth:"6em",General:"General",Name:"Name",Resources:"Resources","% complete":"% complete",Duration:"Duration",Start:"Start",Finish:"Finish",Effort:"Effort",Preamble:"Preamble",Postamble:"Postamble"},GeneralTab:{labelWidth:"6.5em",General:"General",Name:"Name","% complete":"% complete",Duration:"Duration",Start:"Start",Finish:"Finish",Effort:"Effort",Dates:"Dates"},SchedulerAdvancedTab:{labelWidth:"13em",Advanced:"Advanced",Calendar:"Calendar","Scheduling mode":"Scheduling mode","Effort driven":"Effort driven","Manually scheduled":"Manually scheduled","Constraint type":"Constraint type","Constraint date":"Constraint date",Inactive:"Inactive","Ignore resource calendar":"Ignore resource calendar"},AdvancedTab:{labelWidth:"11.5em",Advanced:"Advanced",Calendar:"Calendar","Scheduling mode":"Scheduling mode","Effort driven":"Effort driven","Manually scheduled":"Manually scheduled","Constraint type":"Constraint type","Constraint date":"Constraint date",Constraint:"Constraint",Rollup:"Rollup",Inactive:"Inactive","Ignore resource calendar":"Ignore resource calendar"},DependencyTab:{Predecessors:"Predecessors",Successors:"Successors",ID:"ID",Name:"Name",Type:"Type",Lag:"Lag",cyclicDependency:"Cyclic dependency",invalidDependency:"Invalid dependency"},NotesTab:{Notes:"Notes"},ResourcesTab:{unitsTpl:({value:e})=>`${e}%`,Resources:"Resources",Resource:"Resource",Units:"Units"},RecurrenceTab:{title:"Repeat"},SchedulingModePicker:{Normal:"Normal","Fixed Duration":"Fixed Duration","Fixed Units":"Fixed Units","Fixed Effort":"Fixed Effort"},ResourceHistogram:{barTipInRange:'<b>{resource}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated} of {available}</span> allocated',barTipOnDate:'<b>{resource}</b> on {startDate}<br><span class="{cls}">{allocated} of {available}</span> allocated',groupBarTipAssignment:'<b>{resource}</b> - <span class="{cls}">{allocated} of {available}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} of {available}</span> allocated:<br>{assignments}',groupBarTipOnDate:'On {startDate}<br><span class="{cls}">{allocated} of {available}</span> allocated:<br>{assignments}',plusMore:"+{value} more"},ResourceUtilization:{barTipInRange:'<b>{event}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated}</span> allocated',barTipOnDate:'<b>{event}</b> on {startDate}<br><span class="{cls}">{allocated}</span> allocated',groupBarTipAssignment:'<b>{event}</b> - <span class="{cls}">{allocated}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} of {available}</span> allocated:<br>{assignments}',groupBarTipOnDate:'On {startDate}<br><span class="{cls}">{allocated} of {available}</span> allocated:<br>{assignments}',plusMore:"+{value} more",nameColumnText:"Resource / Event"},SchedulingIssueResolutionPopup:{"Cancel changes":"Cancel the change and do nothing",schedulingConflict:"Scheduling conflict",emptyCalendar:"Calendar configuration error",cycle:"Scheduling cycle",Apply:"Apply"},CycleResolutionPopup:{dependencyLabel:"Please select a dependency:",invalidDependencyLabel:"There are invalid dependencies involved that need to be addressed:"},DependencyEdit:{Active:"Active"},SchedulerProBase:{propagating:"Calculating project",storePopulation:"Loading data",finalizing:"Finalizing results"},EventSegments:{splitEvent:"Split event",renameSegment:"Rename"},NestedEvents:{deNestingNotAllowed:"De-nesting not allowed",nestingNotAllowed:"Nesting not allowed"},VersionGrid:{compare:"Compare",description:"Description",occurredAt:"Occurred At",rename:"Rename",restore:"Restore",stopComparing:"Stop Comparing"},Versions:{entityNames:{TaskModel:"task",AssignmentModel:"assignment",DependencyModel:"link",ProjectModel:"project",ResourceModel:"resource",other:"object"},entityNamesPlural:{TaskModel:"tasks",AssignmentModel:"assignments",DependencyModel:"links",ProjectModel:"projects",ResourceModel:"resources",other:"objects"},transactionDescriptions:{update:"Changed {n} {entities}",add:"Added {n} {entities}",remove:"Removed {n} {entities}",move:"Moved {n} {entities}",mixed:"Changed {n} {entities}"},addEntity:"Added {type} **{name}**",removeEntity:"Removed {type} **{name}**",updateEntity:"Changed {type} **{name}**",moveEntity:"Moved {type} **{name}** from {from} to {to}",addDependency:"Added link from **{from}** to **{to}**",removeDependency:"Removed link from **{from}** to **{to}**",updateDependency:"Edited link from **{from}** to **{to}**",addAssignment:"Assigned **{resource}** to **{event}**",removeAssignment:"Removed assignment of **{resource}** from **{event}**",updateAssignment:"Edited assignment of **{resource}** to **{event}**",noChanges:"No changes",nullValue:"none",versionDateFormat:"M/D/YYYY h:mm a",undid:"Undid changes",redid:"Redid changes",editedTask:"Edited task properties",deletedTask:"Deleted a task",movedTask:"Moved a task",movedTasks:"Moved tasks"}},P=s.publishLocale(T),k={localeName:"En",localeDesc:"English (US)",localeCode:"en-US",Object:{Save:"Save"},IgnoreResourceCalendarColumn:{"Ignore resource calendar":"Ignore resource calendar"},InactiveColumn:{Inactive:"Inactive"},AddNewColumn:{"New Column":"New Column"},CalendarColumn:{Calendar:"Calendar"},EarlyStartDateColumn:{"Early Start":"Early Start"},EarlyEndDateColumn:{"Early End":"Early End"},LateStartDateColumn:{"Late Start":"Late Start"},LateEndDateColumn:{"Late End":"Late End"},TotalSlackColumn:{"Total Slack":"Total Slack"},ConstraintDateColumn:{"Constraint Date":"Constraint Date"},ConstraintTypeColumn:{"Constraint Type":"Constraint Type"},DeadlineDateColumn:{Deadline:"Deadline"},DependencyColumn:{"Invalid dependency":"Invalid dependency"},DurationColumn:{Duration:"Duration"},EffortColumn:{Effort:"Effort"},EndDateColumn:{Finish:"Finish"},EventModeColumn:{"Event mode":"Event mode",Manual:"Manual",Auto:"Auto"},ManuallyScheduledColumn:{"Manually scheduled":"Manually scheduled"},MilestoneColumn:{Milestone:"Milestone"},NameColumn:{Name:"Name"},NoteColumn:{Note:"Note"},PercentDoneColumn:{"% Done":"% Done"},PredecessorColumn:{Predecessors:"Predecessors"},ResourceAssignmentColumn:{"Assigned Resources":"Assigned Resources","more resources":"more resources"},RollupColumn:{Rollup:"Rollup"},SchedulingModeColumn:{"Scheduling Mode":"Scheduling Mode"},SequenceColumn:{Sequence:"Sequence"},ShowInTimelineColumn:{"Show in timeline":"Show in timeline"},StartDateColumn:{Start:"Start"},SuccessorColumn:{Successors:"Successors"},TaskCopyPaste:{copyTask:"Copy",cutTask:"Cut",pasteTask:"Paste"},WBSColumn:{WBS:"WBS",renumber:"Renumber"},DependencyField:{invalidDependencyFormat:"Invalid dependency format"},ProjectLines:{"Project Start":"Project start","Project End":"Project end"},TaskTooltip:{Start:"Start",End:"End",Duration:"Duration",Complete:"Complete"},AssignmentGrid:{Name:"Resource name",Units:"Units",unitsTpl:({value:e})=>e?e+"%":""},Gantt:{Edit:"Edit",Indent:"Indent",Outdent:"Outdent","Convert to milestone":"Convert to milestone",Add:"Add...","New task":"New task","New milestone":"New milestone","Task above":"Task above","Task below":"Task below","Delete task":"Delete",Milestone:"Milestone","Sub-task":"Subtask",Successor:"Successor",Predecessor:"Predecessor",changeRejected:"Scheduling engine rejected the changes",linkTasks:"Add dependencies",unlinkTasks:"Remove dependencies"},EventSegments:{splitTask:"Split task"},Indicators:{earlyDates:"Early start/end",lateDates:"Late start/end",Start:"Start",End:"End",deadlineDate:"Deadline"},Versions:{indented:"Indented",outdented:"Outdented",cut:"Cut",pasted:"Pasted",deletedTasks:"Deleted tasks"}},w=s.publishLocale(k);if(typeof r.exports=="object"&&typeof i=="object"){var R=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Object.getOwnPropertyNames(t))!Object.prototype.hasOwnProperty.call(e,o)&&o!==n&&Object.defineProperty(e,o,{get:()=>t[o],enumerable:!(a=Object.getOwnPropertyDescriptor(t,o))||a.enumerable});return e};r.exports=R(r.exports,i)}return r.exports});
