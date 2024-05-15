/*!
 *
 * Bryntum Gantt 5.6.10 (TRIAL VERSION)
 *
 * Copyright(c) 2024 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
(function(g,i){var s=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],i);else if(typeof module=="object"&&module.exports)module.exports=i();else{var u=i(),m=s?exports:g;for(var p in u)m[p]=u[p]}})(typeof self<"u"?self:void 0,()=>{var g={},i={exports:g},s=Object.defineProperty,u=Object.getOwnPropertyDescriptor,m=Object.getOwnPropertyNames,p=Object.prototype.hasOwnProperty,k=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t)s(e,n,{get:t[n],enumerable:!0})},y=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of m(t))!p.call(e,r)&&r!==n&&s(e,r,{get:()=>t[r],enumerable:!(a=u(t,r))||a.enumerable});return e},b=e=>y(s({},"__esModule",{value:!0}),e),S=(e,t,n)=>(k(e,typeof t!="symbol"?t+"":t,n),n),f={};h(f,{default:()=>M}),i.exports=b(f);var o=typeof self<"u"?self:typeof globalThis<"u"?globalThis:null,v=class c{static mergeLocales(...t){let n={};return t.forEach(a=>{Object.keys(a).forEach(r=>{typeof a[r]=="object"?n[r]={...n[r],...a[r]}:n[r]=a[r]})}),n}static trimLocale(t,n){let a=(r,l)=>{t[r]&&(l?t[r][l]&&delete t[r][l]:delete t[r])};Object.keys(n).forEach(r=>{Object.keys(n[r]).length>0?Object.keys(n[r]).forEach(l=>a(r,l)):a(r)})}static normalizeLocale(t,n){if(!t)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof t=="string"){if(!n)throw new Error('"config" parameter can not be empty');n.locale?n.name=t||n.name:n.localeName=t}else n=t;let a={};if(n.name||n.locale)a=Object.assign({localeName:n.name},n.locale),n.desc&&(a.localeDesc=n.desc),n.code&&(a.localeCode=n.code),n.path&&(a.localePath=n.path);else{if(!n.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);a=Object.assign({},n)}for(let r of["name","desc","code","path"])a[r]&&delete a[r];if(!a.localeName)throw new Error("Locale name can not be empty");return a}static get locales(){return o.bryntum.locales||{}}static set locales(t){o.bryntum.locales=t}static get localeName(){return o.bryntum.locale||"En"}static set localeName(t){o.bryntum.locale=t||c.localeName}static get locale(){return c.localeName&&this.locales[c.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(t,n){let{locales:a}=o.bryntum,r=c.normalizeLocale(t,n),{localeName:l}=r;return!a[l]||n===!0?a[l]=r:a[l]=this.mergeLocales(a[l]||{},r||{}),a[l]}};S(v,"skipLocaleIntegrityCheck",!1);var d=v;o.bryntum=o.bryntum||{},o.bryntum.locales=o.bryntum.locales||{},d._$name="LocaleHelper";var D={localeName:"Da",localeDesc:"Dansk",localeCode:"da",RemoveDependencyCycleEffectResolution:{descriptionTpl:"Fjern afhængighed"},DeactivateDependencyCycleEffectResolution:{descriptionTpl:"Deaktiver afhængighed"},CycleEffectDescription:{descriptionTpl:"En cirkulær reference blev fundet mellem følgende opgaver: {0}"},EmptyCalendarEffectDescription:{descriptionTpl:'"{0}"-kalenderen har ingen arbejdsintervaller.'},Use24hrsEmptyCalendarEffectResolution:{descriptionTpl:"Brug 24-timers kalenderen (mandag - fredag)."},Use8hrsEmptyCalendarEffectResolution:{descriptionTpl:"Brug 8-timers kalenderen (mandag - fredag 08:00 - 12:00, 13:00 - 17:00)."},IgnoreProjectConstraintResolution:{descriptionTpl:"Ignorer projektgrænsen og fortsæt med ændringen."},ProjectConstraintConflictEffectDescription:{startDescriptionTpl:'Du flyttede "{0}" opgave til at starte {1}. Dette er før projektets startdato {2}.',endDescriptionTpl:'Du flyttede "{0}" opgave til at afslutte {1}. Dette er efter projektets slutdato {2}.'},HonorProjectConstraintResolution:{descriptionTpl:"Juster opgaven for at ære projektgrænsen."},ConflictEffectDescription:{descriptionTpl:"Denne handling forårsager en planlægningskonflikt for: {0} og {1}"},ConstraintIntervalDescription:{dateFormat:"LL"},ProjectConstraintIntervalDescription:{startDateDescriptionTpl:"Projektets startdato {0}",endDateDescriptionTpl:"Projektets slutdato {0}"},DependencyType:{long:["Start-til-Start","Start-til-Slut","Slut-til-Start","Slut-til-Slut"]},ManuallyScheduledParentConstraintIntervalDescription:{startDescriptionTpl:'Manuelt planlagt "{2}" tvinger sine underliggende elementer til ikke at starte tidligere end {0}',endDescriptionTpl:'Manuelt planlagt "{2}" tvinger sine underliggende elementer til ikke at slutte senere end {1}'},DisableManuallyScheduledConflictResolution:{descriptionTpl:'Deaktivér manuel planlægning for "{0}"'},DependencyConstraintIntervalDescription:{descriptionTpl:'Afhængighed ({2}) fra "{3}" til "{4}"'},RemoveDependencyResolution:{descriptionTpl:'Slet afhængighed af "{1}" til "{2}"'},DeactivateDependencyResolution:{descriptionTpl:'Deaktivér afhængighed af "{1}" til "{2}"'},DateConstraintIntervalDescription:{startDateDescriptionTpl:'Opgave "{2}" {3} {0} begrænsning',endDateDescriptionTpl:'Opgave "{2}" {3} {1} begrænsning',constraintTypeTpl:{startnoearlierthan:"Start ikke tidligere end",finishnoearlierthan:"Afslut ikke tidligere end",muststarton:"Skal starte på",mustfinishon:"Skal slutte på",startnolaterthan:"Start ikke senere end",finishnolaterthan:"Afslut ikke senere end"}},RemoveDateConstraintConflictResolution:{descriptionTpl:'Fjern "{1}" begrænsningen på opgave "{0}"'}},P=d.publishLocale(D),T={localeName:"Da",localeDesc:"Dansk",localeCode:"da",Object:{Yes:"Ja",No:"Nej",Cancel:"Annullér",Ok:"OK",Week:"Uge",None:"Ingen"},ColorPicker:{noColor:"Ingen farve"},Combo:{noResults:"Ingen resultater",recordNotCommitted:"Række kunne ikke tilføjes",addNewValue:e=>`Tilføj ${e}`},FilePicker:{file:"Fil"},Field:{badInput:"Ugyldig feltværdi",patternMismatch:"Værdien skal matche et bestemt mønster",rangeOverflow:e=>`Værdien skal være mindre end eller lig med ${e.max}`,rangeUnderflow:e=>`Værdien skal være større end eller lig med ${e.min}`,stepMismatch:"Værdien skal passe til trinnet",tooLong:"Værdien skal være kortere",tooShort:"Værdien skal være længere",typeMismatch:"Værdien skal være i et særligt format",valueMissing:"dette felt er påkrævet",invalidValue:"Ugyldig feltværdi",minimumValueViolation:"Overtrædelse af minimumsværdien",maximumValueViolation:"Maksimal værdikrænkelse",fieldRequired:"Dette felt er påkrævet",validateFilter:"Værdien skal vælges på listen"},DateField:{invalidDate:"Ugyldig datoinput"},DatePicker:{gotoPrevYear:"Gå til forrige år",gotoPrevMonth:"Gå til forrige måned",gotoNextMonth:"Gå til næste måned",gotoNextYear:"Gå til næste år"},NumberFormat:{locale:"da",currency:"DKK"},DurationField:{invalidUnit:"Ugyldig enhed"},TimeField:{invalidTime:"Ugyldig tidsangivelse"},TimePicker:{hour:"Time",minute:"Minut",second:"Sekund"},List:{loading:"Indlæser...",selectAll:"Vælg alle"},GridBase:{loadMask:"Indlæser...",syncMask:"Gemmer ændringer, vent venligst..."},PagingToolbar:{firstPage:"Gå til første side",prevPage:"Gå til forrige side",page:"Side",nextPage:"Gå til næste side",lastPage:"Gå til sidste side",reload:"Genindlæs den aktuelle side",noRecords:"Ingen poster at vise",pageCountTemplate:e=>`af ${e.lastPage}`,summaryTemplate:e=>`Viser poster ${e.start} - ${e.end} af ${e.allCount}`},PanelCollapser:{Collapse:"Kollaps",Expand:"Udvide"},Popup:{close:"Luk dialog"},UndoRedo:{Undo:"Fortryd",Redo:"Gentag",UndoLastAction:"Fortryd foregående handling",RedoLastAction:"Gentag den foregående fortrudte handling",NoActions:"Ingen handlinger registreret"},FieldFilterPicker:{equals:"lig med",doesNotEqual:"er ikke lig",isEmpty:"er tom",isNotEmpty:"er ikke tom",contains:"indeholder",doesNotContain:"indeholder ikke",startsWith:"starter med",endsWith:"slutter med",isOneOf:"er en af",isNotOneOf:"er ikke en af",isGreaterThan:"er større end",isLessThan:"er mindre end",isGreaterThanOrEqualTo:"er større end eller lig med",isLessThanOrEqualTo:"er mindre end eller lig med",isBetween:"er mellem",isNotBetween:"er ikke mellem",isBefore:"er før",isAfter:"er efter",isToday:"er i dag",isTomorrow:"er i morgen",isYesterday:"er i går",isThisWeek:"er denne uge",isNextWeek:"er i næste uge",isLastWeek:"er i sidste uge",isThisMonth:"er denne måned",isNextMonth:"er næste måned",isLastMonth:"er sidste måned",isThisYear:"er i år",isNextYear:"er næste år",isLastYear:"er sidste år",isYearToDate:"er år til dato",isTrue:"er sand",isFalse:"er falsk",selectAProperty:"Vælg en ejendom",selectAnOperator:"Vælg en operatør",caseSensitive:"Stillende mellem store og små bogstaver",and:"og",dateFormat:"D/M/YY",selectValue:"Vælg værdi",selectOneOrMoreValues:"Vælg en eller flere værdier",enterAValue:"Indtast en værdi",enterANumber:"Indtast et tal",selectADate:"Vælg en dato",selectATime:"Vælg tid"},FieldFilterPickerGroup:{addFilter:"Tilføj filter"},DateHelper:{locale:"da",weekStartDay:1,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"Millisekund",plural:"Millisekunder",abbrev:"ms"},{single:"Sekund",plural:"Sekunder",abbrev:"s"},{single:"Minut",plural:"Minutter",abbrev:"min"},{single:"Time",plural:"Timer",abbrev:"t"},{single:"Dag",plural:"Dage",abbrev:"d"},{single:"Uge",plural:"Uger",abbrev:"u"},{single:"Måned",plural:"Måneder",abbrev:"mdr"},{single:"Kvartal",plural:"Kvartaler",abbrev:"kv"},{single:"År",plural:"År",abbrev:"år"},{single:"Årti",plural:"Årtier",abbrev:"årti(er)"}],unitAbbreviations:[["mil","ms"],["s","sek"],["m","min"],["t"],["d"],["u"],["m","mdr"],["k","kv"],["å","år"],["årti","årtier"]],parsers:{L:"DD.MM.YYYY",LT:"HH:mm",LTS:"HH:mm:ss"},ordinalSuffix:e=>e}},N=d.publishLocale(T),C=new String,E={localeName:"Da",localeDesc:"Dansk",localeCode:"da",ColumnPicker:{column:"Kolonne",columnsMenu:"Kolonner",hideColumn:"Skjul kolonne",hideColumnShort:"Skjul",newColumns:"Nye kolonner"},Filter:{applyFilter:"Anvend filter",filter:"Filter",editFilter:"Redigér filter",on:"Aktiv",before:"Før",after:"Efter",equals:"Ligmed",lessThan:"Mindre end",moreThan:"Større end",removeFilter:"Fjern filter",disableFilter:"Deaktiver filter"},FilterBar:{enableFilterBar:"Vis filtreringspanel",disableFilterBar:"Skjul filtreringspanel"},Group:{group:"Gruppér",groupAscending:"Gruppér stigende",groupDescending:"Gruppér faldende",groupAscendingShort:"Stigende",groupDescendingShort:"Faldende",stopGrouping:"Stop gruppering",stopGroupingShort:"Stop"},HeaderMenu:{moveBefore:e=>`Flyt før '${e}'`,moveAfter:e=>`Flyt efter '${e}'`,collapseColumn:"Kollaps kolonne",expandColumn:"Udvid kolonne"},ColumnRename:{rename:"Omdøb"},MergeCells:{mergeCells:"Flet celler",menuTooltip:"Flet celler med samme værdi, når de sorteres efter denne kolonne"},Search:{searchForValue:"Søg efter værdi"},Sort:{sort:"Sortér",sortAscending:"Sorter stigende",sortDescending:"Sorter faldende",multiSort:"Multi sortering",removeSorter:"Fjern sorteringsenheden",addSortAscending:"Tilføj stigende sortering",addSortDescending:"Tilføj faldende sortering",toggleSortAscending:"Skift til stigende",toggleSortDescending:"Skift til faldende",sortAscendingShort:"Stigende",sortDescendingShort:"Faldende",removeSorterShort:"Fjerne",addSortAscendingShort:"+ Stigende",addSortDescendingShort:"+ Faldende"},Split:{split:"Opdel",unsplit:"Ikke opdelt",horizontally:"Vandret",vertically:"Lodret",both:"Begge"},Column:{columnLabel:e=>`${e.text?`${e.text} kolonne. `:""}MELLEMRUM for kontekstmenu${e.sortable?",ENTER for at sortere":""}`,cellLabel:C},Checkbox:{toggleRowSelect:"Skift rækkevalg",toggleSelection:"Skift valg af hele datasættet"},RatingColumn:{cellLabel:e=>{var t;return`${e.text?e.text:""} ${(t=e.location)!=null&&t.record?` bedømmelse : ${e.location.record.get(e.field)||0}`:""}`}},GridBase:{loadFailedMessage:"Dataindlæsning mislykkedes!",syncFailedMessage:"Datasynkronisering mislykkedes!",unspecifiedFailure:"Uspecificeret fejl",networkFailure:"Netværksfejl",parseFailure:"Kunne ikke parse serversvar",serverResponse:"Serversvar:",noRows:"Ingen poster at vise",moveColumnLeft:"Flyt til venstre sektion",moveColumnRight:"Flyt til højre sektion",moveColumnTo:e=>`Flyt kolonne til ${e}`},CellMenu:{removeRow:"Slet"},RowCopyPaste:{copyRecord:"Kopi",cutRecord:"klip",pasteRecord:"sæt ind",rows:"rækker",row:"række"},CellCopyPaste:{copy:"Kopi",cut:"Skære",paste:"Sæt ind"},PdfExport:{"Waiting for response from server":"Venter på svar fra serveren...","Export failed":"Eksporten mislykkedes","Server error":"Serverfejl","Generating pages":"Generering af sider...","Click to abort":"Afbestille"},ExportDialog:{width:"40em",labelWidth:"12em",exportSettings:"Eksporter indstillinger",export:"Eksport",printSettings:"Udskriftsindstillinger",print:"Udskriv",exporterType:"Styr paginering",cancel:"Afbestille",fileFormat:"Filformat",rows:"Rækker",alignRows:"Juster rækker",columns:"Kolonner",paperFormat:"Papirformat",orientation:"Orientering",repeatHeader:"Gentag overskriften"},ExportRowsCombo:{all:"Alle rækker",visible:"Synlige rækker"},ExportOrientationCombo:{portrait:"Portræt",landscape:"Landskab"},SinglePageExporter:{singlepage:"Enkelt side"},MultiPageExporter:{multipage:"Flere sider",exportingPage:({currentPage:e,totalPages:t})=>`Eksporterer side ${e}/${t}`},MultiPageVerticalExporter:{multipagevertical:"Flere sider (lodret)",exportingPage:({currentPage:e,totalPages:t})=>`Eksporterer side ${e}/${t}`},RowExpander:{loading:"Indlæser",expand:"Udvide",collapse:"Kollaps"},TreeGroup:{group:"Gruppér efter",stopGrouping:"Stop gruppering",stopGroupingThisColumn:"Fjern gruppe på kolonne"}},I=d.publishLocale(E),F={localeName:"Da",localeDesc:"Dansk",localeCode:"da",Object:{newEvent:"ny begivenhed"},ResourceInfoColumn:{eventCountText:e=>e+" begivenhed"+(e!==1?"er":"")},Dependencies:{from:"Fra",to:"Til",valid:"Gyldig",invalid:"Ugyldig"},DependencyType:{SS:"SS",SF:"SA",FS:"AS",FF:"AA",StartToStart:"Start-til-Start",StartToEnd:"Start-til-Afslutning",EndToStart:"Afslutning-til-Start",EndToEnd:"Afslutning-til-Afslutning",short:["SS","SA","AS","AA"],long:["Start-til-Start","Start-til-Afslutning","Afslutning-til-Start","Afslutning-til-Afslutning"]},DependencyEdit:{From:"Fra",To:"Til",Type:"Type",Lag:"Forsinkelse","Edit dependency":"Redigér afhængighed",Save:"Gem",Delete:"Slet",Cancel:"Annullér",StartToStart:"Start-Start",StartToEnd:"Start-Afslutning",EndToStart:"Afslutning-Start",EndToEnd:"Afslutning-Afslutning"},EventEdit:{Name:"Navn",Resource:"Ressource",Start:"Start",End:"Afslutning",Save:"Gem",Delete:"Slet",Cancel:"Annullér","Edit event":"Redigér begivenhed",Repeat:"Gentag"},EventDrag:{eventOverlapsExisting:"Begivenhed overlapper med eksisterende begivenhed for denne ressource",noDropOutsideTimeline:"Begivenhed må ikke slippes helt uden for tidslinjen"},SchedulerBase:{"Add event":"Tilføj begivenhed","Delete event":"Slet begivenhed","Unassign event":"Fjern tilknytning til begivenhed",color:"Farve"},TimeAxisHeaderMenu:{pickZoomLevel:"Zoom",activeDateRange:"Datointerval",startText:"Startdato",endText:"Slutdato",todayText:"Idag"},EventCopyPaste:{copyEvent:"Kopiér begivenhed",cutEvent:"Klip begivenhed",pasteEvent:"Indsæt begivenhed"},EventFilter:{filterEvents:"Filtrér opgaver",byName:"Efter navn"},TimeRanges:{showCurrentTimeLine:"Vis aktuel tidslinje"},PresetManager:{secondAndMinute:{displayDateFormat:"ll LTS",name:"Sekunder"},minuteAndHour:{topDateFormat:"ddd DD.MM, HH:mm",displayDateFormat:"ll LST"},hourAndDay:{topDateFormat:"ddd DD.MM",middleDateFormat:"LST",displayDateFormat:"ll LST",name:"Dag"},day:{name:"Dag/timer"},week:{name:"Uge/timer"},dayAndWeek:{displayDateFormat:"ll LST",name:"Uge/dage"},dayAndMonth:{name:"Måned"},weekAndDay:{displayDateFormat:"ll LST",name:"Uge"},weekAndMonth:{name:"Uger"},weekAndDayLetter:{name:"Uger/hverdage"},weekDateAndMonth:{name:"Måneder/uger"},monthAndYear:{name:"Måneder"},year:{name:"Flere år"},manyYears:{name:"Flere år"}},RecurrenceConfirmationPopup:{"delete-title":"Du er ved at slette en begivenhed","delete-all-message":"Vil du slette alle forekomster af denne begivenhed?","delete-further-message":"Vil du slette denne og alle fremtidige forekomster af denne begivenhed, eller kun den valgte forekomst?","delete-further-btn-text":"Slet alle fremtidige begivenheder","delete-only-this-btn-text":"Slet kun denne begivenhed","update-title":"Du er ved at ændre en gentagende begivenhed","update-all-message":"Vil du ændre alle forekomster af denne begivenhed?","update-further-message":"Vil du ændre netop denne forekomst af begivenheden, eller denne og alle fremtidige forekomster?","update-further-btn-text":"Alle fremtidige begivenheder","update-only-this-btn-text":"Kun denne begivenhed",Yes:"Ja",Cancel:"Annullér",width:600},RecurrenceLegend:{" and ":" og ",Daily:"Daglig","Weekly on {1}":({days:e})=>`Ugentligt ${e}`,"Monthly on {1}":({days:e})=>`Månedligt ${e}`,"Yearly on {1} of {2}":({days:e,months:t})=>`Årligt ${e} af ${t}`,"Every {0} days":({interval:e})=>`For hver ${e} dage`,"Every {0} weeks on {1}":({interval:e,days:t})=>`For hver ${e} uger ${t}`,"Every {0} months on {1}":({interval:e,days:t})=>`For hver ${e} måneder ${t}`,"Every {0} years on {1} of {2}":({interval:e,days:t,months:n})=>`For hver ${e} år ${t} i ${n}`,position1:"den første",position2:"den anden",position3:"den tredje",position4:"den fjerde",position5:"den femte","position-1":"den sidste",day:"dag",weekday:"ugedag","weekend day":"dag i weekenden",daysFormat:({position:e,days:t})=>`${e} ${t}`},RecurrenceEditor:{"Repeat event":"Gentag begivenhed",Cancel:"Annullér",Save:"Gem",Frequency:"Frekvens",Every:"Alle",DAILYintervalUnit:"dag(e)",WEEKLYintervalUnit:"uge(r)",MONTHLYintervalUnit:"Måned(er)",YEARLYintervalUnit:"År",Each:"For hver","On the":"på","End repeat":"Stop gentagelse","time(s)":"tid(er)"},RecurrenceDaysCombo:{day:"dag",weekday:"ugedag","weekend day":"dag i weekenden"},RecurrencePositionsCombo:{position1:"første",position2:"anden",position3:"tredje",position4:"fjerde",position5:"femte","position-1":"sidste"},RecurrenceStopConditionCombo:{Never:"Aldrig",After:"Efter","On date":"På dato"},RecurrenceFrequencyCombo:{None:"Ingen gentagelse",Daily:"Dagligt",Weekly:"Ugentligt",Monthly:"Månedligt",Yearly:"Årligt"},RecurrenceCombo:{None:"Ingen",Custom:"Tilpasset..."},Summary:{"Summary for":e=>`Resumé for ${e}`},ScheduleRangeCombo:{completeview:"Komplet tidsplan",currentview:"Synlig tidsplan",daterange:"Datointerval",completedata:"Komplet tidsplan (for alle arrangementer)"},SchedulerExportDialog:{"Schedule range":"Tidsplan rækkevidde","Export from":"Fra","Export to":"Til"},ExcelExporter:{"No resource assigned":"Ingen ressourcer tilknyttet"},CrudManagerView:{serverResponseLabel:"Svar fra server:"},DurationColumn:{Duration:"Varighed"}},O=d.publishLocale(F),A={localeName:"Da",localeDesc:"Dansk",localeCode:"da",ConstraintTypePicker:{none:"Ingen",assoonaspossible:"Så hurtigt som muligt",aslateaspossible:"Så sent som muligt",muststarton:"Skal starte på",mustfinishon:"Skal slutte på",startnoearlierthan:"Start ikke tidligere end",startnolaterthan:"Start ikke senere end",finishnoearlierthan:"Afslut ikke tidligere end",finishnolaterthan:"Afslut ikke senere end"},SchedulingDirectionPicker:{Forward:"Fremad",Backward:"Bagud",inheritedFrom:"Arvet fra",enforcedBy:"Pålagt af"},CalendarField:{"Default calendar":"Standardkalender"},TaskEditorBase:{Information:"Information",Save:"Gem",Cancel:"Annullér",Delete:"Slet",calculateMask:"Beregner...",saveError:"Kan ikke gemme, ret venligst fejl først",repeatingInfo:"Viser en gentagende begivenhed",editRepeating:"Redigere"},TaskEdit:{editEvent:"Rediger begivenhed",ConfirmDeletionTitle:"Bekræft sletning",ConfirmDeletionMessage:"Er du sikker på at du vil slette denne opgave?"},GanttTaskEditor:{editorWidth:"44em"},SchedulerTaskEditor:{editorWidth:"32em"},SchedulerGeneralTab:{labelWidth:"6em",General:"Generelt",Name:"Navn",Resources:"Ressourcer","% complete":"% færdig",Duration:"Varighed",Start:"Start",Finish:"Afslutning",Effort:"Indsats",Preamble:"Præambel",Postamble:"Postambel"},GeneralTab:{labelWidth:"6.5em",General:"Generelt",Name:"Navn","% complete":"% færdig",Duration:"Varighed",Start:"Start",Finish:"Afslutning",Effort:"Indsats",Dates:"Datoer"},SchedulerAdvancedTab:{labelWidth:"13em",Advanced:"Avanceret",Calendar:"Kalender","Scheduling mode":"Planlægningstilstand","Effort driven":"Indsatsdrevet","Manually scheduled":"Manuelt planlagt","Constraint type":"Begrænsningstype","Constraint date":"Begrænsningsdato",Inactive:"Inaktiv","Ignore resource calendar":"Ignorer ressourcekalender"},AdvancedTab:{labelWidth:"11.5em",Advanced:"Avanceret",Calendar:"Kalender","Scheduling mode":"Planlægningstilstand","Effort driven":"Indsatsbaseret","Manually scheduled":"Manuelt planlagt","Constraint type":"Begrænsningstype","Constraint date":"Begrænsningsdato",Constraint:"Begrænsning",Rollup:"Oprulning",Inactive:"Inaktiv","Ignore resource calendar":"Ignorer ressourcekalender","Scheduling direction":"Planlægningsretning",projectBorder:"Projektgrænse",ignore:"Ignorere",honor:"Ære",askUser:"Spørg brugeren"},DependencyTab:{Predecessors:"Forgængere",Successors:"Efterfølgere",ID:"ID",Name:"Navn",Type:"Type",Lag:"Forsinkelse",cyclicDependency:"Cirkulær afhængighed",invalidDependency:"Ugyldig afhængighed"},NotesTab:{Notes:"Noter"},ResourcesTab:{unitsTpl:({value:e})=>e?e+"%":"",Resources:"Ressourcer",Resource:"Ressource",Units:"Enheder"},RecurrenceTab:{title:"Gentage"},SchedulingModePicker:{Normal:"Normal","Fixed Duration":"Fast varighed","Fixed Units":"Faste enheder","Fixed Effort":"Fast arbejde"},ResourceHistogram:{barTipInRange:"<b>{resource}</b> {startDate} - {endDate}<br>{allocated} af {available} allokeret",barTipOnDate:"<b>{resource}</b> am {startDate}<br>{allocated} af {available} allokeret",groupBarTipAssignment:'<b>{resource}</b> - <span class="{cls}">{allocated} af {available}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} af {available}</span> allokeret:<br>{assignments}',groupBarTipOnDate:'Am {startDate}<br><span class="{cls}">{allocated} af {available}</span> allokeret:<br>{assignments}',plusMore:"+{value} mere"},ResourceUtilization:{barTipInRange:'<b>{event}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated}</span> allokeret',barTipOnDate:'<b>{event}</b> den {startDate}<br><span class="{cls}">{allocated}</span> allokeret',groupBarTipAssignment:'<b>{event}</b> - <span class="{cls}">{allocated}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} af {available}</span> allokeret:<br>{assignments}',groupBarTipOnDate:'Den {startDate}<br><span class="{cls}">{allocated} af {available}</span> allokeret:<br>{assignments}',plusMore:"+{value} mere",nameColumnText:"Ressource / begivenhed"},SchedulingIssueResolutionPopup:{"Cancel changes":"Annullér ændringer",schedulingConflict:"Planlægningskonflikt",emptyCalendar:"Kalenderfejl (tom)",cycle:"Cirkulær reference",Apply:"Anvend"},CycleResolutionPopup:{dependencyLabel:"Vælg venligst en afhængighed:",invalidDependencyLabel:"Der er ugyldige afhængigheder involveret som skal håndteres:"},DependencyEdit:{Active:"Aktiv"},SchedulerProBase:{propagating:"Beregner projekt",storePopulation:"Loading data",finalizing:"Færdiggør resultater"},EventSegments:{splitEvent:"Opdelt begivenhed",renameSegment:"Omdøb"},NestedEvents:{deNestingNotAllowed:"Udpakning ikke tilladt",nestingNotAllowed:"Indlejring ikke tilladt"},VersionGrid:{compare:"Sammenlign",description:"Beskrivelse",occurredAt:"Skete ved",rename:"Omdøb",restore:"Gendan",stopComparing:"Stop sammenligning"},Versions:{entityNames:{TaskModel:"opgave",AssignmentModel:"opgave",DependencyModel:"link",ProjectModel:"projekt",ResourceModel:"ressource",other:"objekt"},entityNamesPlural:{TaskModel:"opgave",AssignmentModel:"opgave",DependencyModel:"link",ProjectModel:"projekt",ResourceModel:"ressource",other:"objekt"},transactionDescriptions:{update:"Ændret {n} {entities}",add:"Tilføjet {n} {entities}",remove:"Fjernede {n} {entities}",move:"Flyttet {n} {entities}",mixed:"Ændret {n} {entities}"},addEntity:"Tilføjede {type} **{navn}**",removeEntity:"Fjernet {type} **{navn}**",updateEntity:"Ændret {type} **{navn}**",moveEntity:"Flyttede {type} **{navn}** fra {from} til {to}",addDependency:"Tilføjet link fra **{from}** til **{to}**",removeDependency:"Fjernet link fra **{from}** til **{to}**",updateDependency:"Redigeret link fra **{from}** til **{to}**",addAssignment:"Tildelt **{ressource}** til **{event}**",removeAssignment:"Fjernet tildeling af **{ressource}** fra **{event}**",updateAssignment:"Redigeret tildeling af **{ressource}** til **{event}**",noChanges:"Ingen ændringer",nullValue:"ingen",versionDateFormat:"M/D/YYYY h:mm a",undid:"Undrede ændringer",redid:"Generede ændringer",editedTask:"Redigerede opgaveegenskaber",deletedTask:"Slettede en opgave",movedTask:"Flyttet en opgave",movedTasks:"Flyttede opgaver"}},w=d.publishLocale(A),R={localeName:"Da",localeDesc:"Dansk",localeCode:"da",Object:{Save:"Gem"},IgnoreResourceCalendarColumn:{"Ignore resource calendar":"Ignorer ressourcekalender"},InactiveColumn:{Inactive:"Inaktiv"},AddNewColumn:{"New Column":"Tilføj ny kolonne..."},BaselineStartDateColumn:{baselineStart:"Oprindelig startdato"},BaselineEndDateColumn:{baselineEnd:"Oprindelig slutdato"},BaselineDurationColumn:{baselineDuration:"Oprindelig varighed"},BaselineStartVarianceColumn:{startVariance:"Startdatoafvigelse"},BaselineEndVarianceColumn:{endVariance:"Slutdatoafvigelse"},BaselineDurationVarianceColumn:{durationVariance:"Varighedsafvigelse"},CalendarColumn:{Calendar:"Kalender"},EarlyStartDateColumn:{"Early Start":"Tidlig start"},EarlyEndDateColumn:{"Early End":"Tidlig afslutning"},LateStartDateColumn:{"Late Start":"Sen start"},LateEndDateColumn:{"Late End":"Sen afslutning"},TotalSlackColumn:{"Total Slack":"Samlet buffertid"},ConstraintDateColumn:{"Constraint Date":"Begrænsningsdato"},ConstraintTypeColumn:{"Constraint Type":"Begrænsningstype"},DeadlineDateColumn:{Deadline:"Tidsfrist"},DependencyColumn:{"Invalid dependency":"Ugyldig afhængighed, ændringen blev annulleret"},DurationColumn:{Duration:"Varighed"},EffortColumn:{Effort:"Indsats"},EndDateColumn:{Finish:"Færdig"},EventModeColumn:{"Event mode":"Begivenhedstilstand",Manual:"Manuel",Auto:"Automatisk"},ManuallyScheduledColumn:{"Manually scheduled":"Manuelt planlagt"},MilestoneColumn:{Milestone:"Milepæl"},NameColumn:{Name:"Navn"},NoteColumn:{Note:"Note"},PercentDoneColumn:{"% Done":"% færdig"},PredecessorColumn:{Predecessors:"Forgængere"},ResourceAssignmentColumn:{"Assigned Resources":"Tildelte ressourcer","more resources":"Yderligere ressourcer"},RollupColumn:{Rollup:"Oprulning"},SchedulingModeColumn:{"Scheduling Mode":"Planlægningstilstand"},SchedulingDirectionColumn:{schedulingDirection:"Planlægningsretning",inheritedFrom:"Arvet fra",enforcedBy:"Pålagt af"},SequenceColumn:{Sequence:"#"},ShowInTimelineColumn:{"Show in timeline":"Vis på tidslinje"},StartDateColumn:{Start:"Start"},SuccessorColumn:{Successors:"Efterfølgere"},TaskCopyPaste:{copyTask:"Kopi",cutTask:"klip",pasteTask:"sæt ind"},WBSColumn:{WBS:"WBS",renumber:"Omnummer"},DependencyField:{invalidDependencyFormat:"Ugyldigt afhængighedsformat"},ProjectLines:{"Project Start":"Start","Project End":"Slut"},TaskTooltip:{Start:"Start",End:"Afslutning",Duration:"Varighed",Complete:"Færdig"},AssignmentGrid:{Name:"Ressourcenavn",Units:"Enheder",unitsTpl:({value:e})=>e?e+"%":""},Gantt:{Edit:"Redigér",Indent:"Ryk ind",Outdent:"Ryk ud","Convert to milestone":"Konvertér til milepæl",Add:"Tilføj...","New task":"Ny opgave","New milestone":"Ny milepæl","Task above":"Opgave over","Task below":"Opgave under","Delete task":"Slet",Milestone:"Milepæl","Sub-task":"Underopgave",Successor:"Efterfølger",Predecessor:"Forgænger",changeRejected:"Ændring afvist",linkTasks:"Tilføj afhængigheder",unlinkTasks:"Fjern afhængigheder",color:"Farve"},EventSegments:{splitTask:"Opdelt opgave"},Indicators:{earlyDates:"Tidlig start/afslutning",lateDates:"Sen start/afslutning",Start:"Start",End:"Afslutning",deadlineDate:"Frist"},Versions:{indented:"indrykket",outdented:"Overdenen",cut:"Skære",pasted:"Indsat",deletedTasks:"Slettede opgaver"}},M=d.publishLocale(R);if(typeof i.exports=="object"&&typeof g=="object"){var j=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Object.getOwnPropertyNames(t))!Object.prototype.hasOwnProperty.call(e,r)&&r!==n&&Object.defineProperty(e,r,{get:()=>t[r],enumerable:!(a=Object.getOwnPropertyDescriptor(t,r))||a.enumerable});return e};i.exports=j(i.exports,g)}return i.exports});
