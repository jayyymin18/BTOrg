/*!
 *
 * Bryntum Gantt 5.6.10 (TRIAL VERSION)
 *
 * Copyright(c) 2024 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
(function(m,o){var i=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],o);else if(typeof module=="object"&&module.exports)module.exports=o();else{var p=o(),z=i?exports:m;for(var g in p)z[g]=p[g]}})(typeof self<"u"?self:void 0,()=>{var m={},o={exports:m},i=Object.defineProperty,p=Object.getOwnPropertyDescriptor,z=Object.getOwnPropertyNames,g=Object.prototype.hasOwnProperty,v=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t)i(e,a,{get:t[a],enumerable:!0})},b=(e,t,a,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of z(t))!g.call(e,s)&&s!==a&&i(e,s,{get:()=>t[s],enumerable:!(n=p(t,s))||n.enumerable});return e},h=e=>b(i({},"__esModule",{value:!0}),e),f=(e,t,a)=>(v(e,typeof t!="symbol"?t+"":t,a),a),u={};y(u,{default:()=>N}),o.exports=h(u);var r=typeof self<"u"?self:typeof globalThis<"u"?globalThis:null,k=class c{static mergeLocales(...t){let a={};return t.forEach(n=>{Object.keys(n).forEach(s=>{typeof n[s]=="object"?a[s]={...a[s],...n[s]}:a[s]=n[s]})}),a}static trimLocale(t,a){let n=(s,l)=>{t[s]&&(l?t[s][l]&&delete t[s][l]:delete t[s])};Object.keys(a).forEach(s=>{Object.keys(a[s]).length>0?Object.keys(a[s]).forEach(l=>n(s,l)):n(s)})}static normalizeLocale(t,a){if(!t)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof t=="string"){if(!a)throw new Error('"config" parameter can not be empty');a.locale?a.name=t||a.name:a.localeName=t}else a=t;let n={};if(a.name||a.locale)n=Object.assign({localeName:a.name},a.locale),a.desc&&(n.localeDesc=a.desc),a.code&&(n.localeCode=a.code),a.path&&(n.localePath=a.path);else{if(!a.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);n=Object.assign({},a)}for(let s of["name","desc","code","path"])n[s]&&delete n[s];if(!n.localeName)throw new Error("Locale name can not be empty");return n}static get locales(){return r.bryntum.locales||{}}static set locales(t){r.bryntum.locales=t}static get localeName(){return r.bryntum.locale||"En"}static set localeName(t){r.bryntum.locale=t||c.localeName}static get locale(){return c.localeName&&this.locales[c.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(t,a){let{locales:n}=r.bryntum,s=c.normalizeLocale(t,a),{localeName:l}=s;return!n[l]||a===!0?n[l]=s:n[l]=this.mergeLocales(n[l]||{},s||{}),n[l]}};f(k,"skipLocaleIntegrityCheck",!1);var d=k;r.bryntum=r.bryntum||{},r.bryntum.locales=r.bryntum.locales||{},d._$name="LocaleHelper";var E={localeName:"Hu",localeDesc:"Magyar",localeCode:"hu",RemoveDependencyCycleEffectResolution:{descriptionTpl:"Függőség eltávolítása"},DeactivateDependencyCycleEffectResolution:{descriptionTpl:"Függőség deaktiválása"},CycleEffectDescription:{descriptionTpl:"Ciklus észlelhető, létrehozta: {0}"},EmptyCalendarEffectDescription:{descriptionTpl:'A(z) "{0}" naptár nem tartalmaz munkaidő-intervallumokat.'},Use24hrsEmptyCalendarEffectResolution:{descriptionTpl:"24 órás naptár használata, a szombatok és vasárnapok nem munkanapok."},Use8hrsEmptyCalendarEffectResolution:{descriptionTpl:"8 órás naptár (8:00–12:00, 13:00–17:00) használata, a szombatok és vasárnapok nem munkanapok."},IgnoreProjectConstraintResolution:{descriptionTpl:"Ne hagyja figyelmen kívül a projekt határát, és folytassa a változást."},ProjectConstraintConflictEffectDescription:{startDescriptionTpl:'Ön áthelyezte a "{0}" feladat elindításához {1}. Ez a projekt kezdési dátuma előtt van {2}.',endDescriptionTpl:'A "{0}" feladatot áthelyezte a {1} befejezéséhez. Ez a projekt befejezési dátuma után van {2}.'},HonorProjectConstraintResolution:{descriptionTpl:"Állítsa be a projekt határának tiszteletben tartásának feladatát."},ConflictEffectDescription:{descriptionTpl:"Ütemezési ütközés észlelhető: {0} és {1} ütközik"},ConstraintIntervalDescription:{dateFormat:"LLL"},ProjectConstraintIntervalDescription:{startDateDescriptionTpl:"Projekt kezdő dátuma {0}",endDateDescriptionTpl:"Projekt befejező dátuma {0}"},DependencyType:{long:["Kezdéstől kezdésig","Kezdéstől a végéig","Végétől a kezdésig","Végétől a végéig"]},ManuallyScheduledParentConstraintIntervalDescription:{startDescriptionTpl:'A kézileg ütemezett "{2}" kényszeríti a leszármazottait, hogy nem kezdődhetnek előbb mint {0}',endDescriptionTpl:'A kézileg ütemezett "{2}" kényszeríti a leszármazottait, hogy nem kezdődhetnek később mint {1}'},DisableManuallyScheduledConflictResolution:{descriptionTpl:'"{0}" kézi ütemezésének kikapcsolása'},DependencyConstraintIntervalDescription:{descriptionTpl:'Függőség ({2}) ettől: "{3}"; eddig: "{4}"'},RemoveDependencyResolution:{descriptionTpl:'Függőség eltávolítása ettől: "{1}"; eddig: "{2}"'},DeactivateDependencyResolution:{descriptionTpl:'Függőség deaktiválása ettől: "{1}"; eddig: "{2}"'},DateConstraintIntervalDescription:{startDateDescriptionTpl:'A(z) "{2}" feladat {3} {0} korlátozás',endDateDescriptionTpl:'A(z) "{2}" feladat {3} {1} korlátozás',constraintTypeTpl:{startnoearlierthan:"Nem kezdődhet előbb mint",finishnoearlierthan:"Nem érhet véget előbb mint",muststarton:"El kell kezdődnie ekkor:",mustfinishon:"Be kell fejeződnie ekkor:",startnolaterthan:"Nem kezdődhet később mint",finishnolaterthan:"Nem érhet véget később mint"}},RemoveDateConstraintConflictResolution:{descriptionTpl:'"{0}" feladat "{1}" korlátozásának eltávolítása'}},F=d.publishLocale(E),C={localeName:"Hu",localeDesc:"Magyar",localeCode:"hu",Object:{Yes:"Igen",No:"Nem",Cancel:"Mégse",Ok:"OK",Week:"Hét",None:"Nincs"},ColorPicker:{noColor:"Nincs szín"},Combo:{noResults:"Nincs eredmény",recordNotCommitted:"A bejegyzés nem adható hozzá",addNewValue:e=>`${e} hozzáadása`},FilePicker:{file:"Fájl"},Field:{badInput:"A mező értéke érvénytelen",patternMismatch:"Az értéknek illeszkednie kell egy adott mintába",rangeOverflow:e=>`Az érték legyen kisebb vagy egyenlő mint ${e.max}`,rangeUnderflow:e=>`Az érték legyen nagyobb vagy egyenlő mint ${e.min}`,stepMismatch:"Az értéknek illeszkednie kell a lépésbe",tooLong:"Az érték legyen rövidebb",tooShort:"Az érték legyen hosszabb",typeMismatch:"Az értéknek speciális formátumúnak kell lennie",valueMissing:"A mező kitöltése kötelező",invalidValue:"A mező értéke érvénytelen",minimumValueViolation:"Minimumérték hiba",maximumValueViolation:"Maximumérték hiba",fieldRequired:"A mező kitöltése kötelező",validateFilter:"Az értéket a listáról kell kiválasztani"},DateField:{invalidDate:"Érvénytelen dátumérték"},DatePicker:{gotoPrevYear:"Ugrás az előző évre",gotoPrevMonth:"Ugrás az előző hónapra",gotoNextMonth:"Ugrás a következő hónapra",gotoNextYear:"Ugrás a következő évre"},NumberFormat:{locale:"hu",currency:"HUF"},DurationField:{invalidUnit:"Érvénytelen egység"},TimeField:{invalidTime:"Érvénytelen időérték"},TimePicker:{hour:"Óra",minute:"Perc",second:"Másodperc"},List:{loading:"Betöltés...",selectAll:"Összes kiválasztása"},GridBase:{loadMask:"Betöltés...",syncMask:"Módosítások mentése, várjon..."},PagingToolbar:{firstPage:"Ugrás az első oldalra",prevPage:"Ugrás az előző oldalra",page:"Oldal",nextPage:"Ugrás a következő oldalra",lastPage:"Ugrás az utolsó oldalra",reload:"Aktuális oldal újratöltése",noRecords:"Nincs megjeleníthető bejegyzés",pageCountTemplate:e=>`/ ${e.lastPage}`,summaryTemplate:e=>`Megjelenített bejegyzések: ${e.start} - ${e.end} / ${e.allCount}`},PanelCollapser:{Collapse:"Összecsukás",Expand:"Kibontás"},Popup:{close:"Felugró ablak bezárása"},UndoRedo:{Undo:"Mégse",Redo:"Mégis",UndoLastAction:"Utolsó művelet visszavonása",RedoLastAction:"Utolsó művelet helyreállítása",NoActions:"Nincsen visszavonható művelet"},FieldFilterPicker:{equals:"egyenlő",doesNotEqual:"nem egyenlő",isEmpty:"üres",isNotEmpty:"nem üres",contains:"tartalmazza",doesNotContain:"nem tartalmazza",startsWith:"ezzel kezdődik",endsWith:"ezzel végződik",isOneOf:"ezek egyike",isNotOneOf:"nem ezek egyike",isGreaterThan:"nagyobb mint",isLessThan:"kisebb mint",isGreaterThanOrEqualTo:"nagyobb vagy egyenlő",isLessThanOrEqualTo:"kisebb vagy egyenlő",isBetween:"a következők közötti",isNotBetween:"nem a következők közötti",isBefore:"korábbi, mint",isAfter:"későbbi mint",isToday:"ma lesz",isTomorrow:"holnap lesz",isYesterday:"tegnap volt",isThisWeek:"ezen a héten lesz",isNextWeek:"következő héten lesz",isLastWeek:"múlt héten volt",isThisMonth:"ebben a hónapban lesz",isNextMonth:"következő hónapban lesz",isLastMonth:"múlt hónapban volt",isThisYear:"ebben az évben lesz",isNextYear:"következő évben lesz",isLastYear:"múlt évben volt",isYearToDate:"a dátum évében lesz",isTrue:"igaz",isFalse:"hamis",selectAProperty:"Jelöljön ki egy tulajdonságot",selectAnOperator:"Válasszon egy kezelőt",caseSensitive:"Kis- és nagybetűk felismerése",and:"és",dateFormat:"D/M/YY",selectValue:"Válasszon értéket",selectOneOrMoreValues:"Válasszon ki legalább egy értéket",enterAValue:"Adjon meg egy értéket",enterANumber:"Adjon meg egy számot",selectADate:"Válasszon ki egy dátumot",selectATime:"Válassz időt"},FieldFilterPickerGroup:{addFilter:"Szűrő hozzáadása"},DateHelper:{locale:"hu",weekStartDay:1,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"milliszekundum",plural:"ms",abbrev:"ms"},{single:"másodperc",plural:"másodpercs",abbrev:"mp"},{single:"perc",plural:"perc",abbrev:"p"},{single:"óra",plural:"óra",abbrev:"ó"},{single:"nap",plural:"nap",abbrev:"n"},{single:"hét",plural:"hét",abbrev:"h"},{single:"hónap",plural:"hónap",abbrev:"hó"},{single:"negyedév",plural:"negyedév",abbrev:"n.é."},{single:"év",plural:"év",abbrev:"év"},{single:"évtized",plural:"évtized",abbrev:"é.t."}],unitAbbreviations:[["ms"],["mp","mp"],["p","perc"],["ó","ó"],["n"],["h","h"],["h","hó","hn"],["né","n.év","n.é."],["é","év"],["évt."]],parsers:{L:"YYYY. MM. DD.",LT:"HH:mm",LTS:"HH:mm:ss A"},ordinalSuffix:e=>e+"."}},R=d.publishLocale(C),D=new String,T={localeName:"Hu",localeDesc:"Magyar",localeCode:"hu",ColumnPicker:{column:"Oszlop",columnsMenu:"Oszlopok",hideColumn:"Oszlop elrejtése",hideColumnShort:"Elrejtés",newColumns:"Új oszlopok"},Filter:{applyFilter:"Szűrő alkalmazása",filter:"Szűrő",editFilter:"Szűrő szerkesztése",on:"Feltétel",before:"Előtte",after:"Utána",equals:"Egyenlő",lessThan:"Kevesebb mint",moreThan:"Több mint",removeFilter:"Szűrő törlése",disableFilter:"Szűrő tiltása"},FilterBar:{enableFilterBar:"Szűrősáv megjelenítése",disableFilterBar:"Szűrősáv elrejtése"},Group:{group:"Csoportosítás",groupAscending:"Csoport növekvő",groupDescending:"Csoport csökkenő",groupAscendingShort:"Növekvő",groupDescendingShort:"Csökkenő",stopGrouping:"Csoportbontás",stopGroupingShort:"Befejezés"},HeaderMenu:{moveBefore:e=>`Áthelyezés elé "${e}"`,moveAfter:e=>`Áthelyezés mögé "${e}"`,collapseColumn:"Oszlop összecsukása",expandColumn:"Oszlop kibontása"},ColumnRename:{rename:"Átnevezés"},MergeCells:{mergeCells:"Cellák egyesítése",menuTooltip:"Azonos értékű cellák egyesítése az oszlop alapján történő rendezéskor"},Search:{searchForValue:"Érték keresése"},Sort:{sort:"Rendezés",sortAscending:"Növekvő sorrend",sortDescending:"Csökkenő sorrend",multiSort:"Többszörös rendezés",removeSorter:"Rendező törlése",addSortAscending:"Növekvő rendező hozzáadása",addSortDescending:"Csökkenő rendező hozzáadása",toggleSortAscending:"Váltás növekvőre",toggleSortDescending:"Váltás csökkenőre",sortAscendingShort:"Növekvő",sortDescendingShort:"Csökkenő",removeSorterShort:"Eltávolítás",addSortAscendingShort:"+ Növekvő",addSortDescendingShort:"+ Csökkenő"},Split:{split:"Szétválasztás",unsplit:"Egybeválasztás",horizontally:"Vízszintesen",vertically:"Függőlegesen",both:"Mindkettő"},Column:{columnLabel:e=>`${e.text?`${e.text} oszlop. `:""}SZÓKÖZ a helyi menühöz${e.sortable?", ENTER a rendezéshez":""}`,cellLabel:D},Checkbox:{toggleRowSelect:"Sorválasztás váltása",toggleSelection:"Teljes adatlap kiválasztásának váltása"},RatingColumn:{cellLabel:e=>{var t;return`${e.text?e.text:""} ${(t=e.location)!=null&&t.record?`értékelés : ${e.location.record.get(e.field)||0}`:""}`}},GridBase:{loadFailedMessage:"Adatok betöltése sikertelen!",syncFailedMessage:"Adatszinkronizálás sikertelen!",unspecifiedFailure:"Ismeretlen hiba",networkFailure:"Hálózati hiba",parseFailure:"Szerverválasz értelmezési hiba",serverResponse:"Szerverválasz:",noRows:"Nincs megjeleníthető bejegyzés",moveColumnLeft:"Áthelyezés a bal oldalra",moveColumnRight:"Áthelyezés a jobb oldalra",moveColumnTo:e=>`Oszlop áthelyezése ide: ${e}`},CellMenu:{removeRow:"Törlés"},RowCopyPaste:{copyRecord:"Másolás",cutRecord:"Kivágás",pasteRecord:"Beillesztés",rows:"sorok",row:"sor"},CellCopyPaste:{copy:"Másolás",cut:"Kivágás",paste:"Beillesztés"},PdfExport:{"Waiting for response from server":"Várakozás a szerver válaszára...","Export failed":"Sikertelen exportálás","Server error":"Szerverhiba","Generating pages":"Oldalak létrehozása...","Click to abort":"Mégse"},ExportDialog:{width:"40em",labelWidth:"12em",exportSettings:"Beállítások exportálása",export:"Exportálás",printSettings:"Nyomtatási beállítások",print:"Nyomtatás",exporterType:"Oldalszámozás szabályozása",cancel:"Mégse",fileFormat:"Fájlformátum",rows:"Sorok",alignRows:"Sorok igazítása",columns:"Oszlopok",paperFormat:"Papírformátum",orientation:"Tájolás",repeatHeader:"Fejléc ismétlése"},ExportRowsCombo:{all:"Összes sor",visible:"Látható sorok"},ExportOrientationCombo:{portrait:"Álló",landscape:"Fekvő"},SinglePageExporter:{singlepage:"Egy oldal"},MultiPageExporter:{multipage:"Több oldal",exportingPage:({currentPage:e,totalPages:t})=>`Oldal exportálása ${e}/${t}`},MultiPageVerticalExporter:{multipagevertical:"Több oldal (függőleges)",exportingPage:({currentPage:e,totalPages:t})=>`Oldal exportálása ${e}/${t}`},RowExpander:{loading:"Betöltés",expand:"Kibontás",collapse:"Összecsukás"},TreeGroup:{group:"Csoportosítás",stopGrouping:"Csoportosítás megszakítása",stopGroupingThisColumn:"Oszlop szétbontása"}},P=d.publishLocale(T),S={localeName:"Hu",localeDesc:"Magyar",localeCode:"hu",Object:{newEvent:"Új esemény"},ResourceInfoColumn:{eventCountText:e=>e+" esemény"},Dependencies:{from:"Kezdete",to:"Vége",valid:"Érvényes",invalid:"Érvénytelen"},DependencyType:{SS:"KK",SF:"KV",FS:"VK",FF:"VV",StartToStart:"Kezdéstől a kezdésig",StartToEnd:"Kezdéstől a végéig",EndToStart:"Végétől a kezdésig",EndToEnd:"Végétől a végéig",short:["KK","KV","VK","VV"],long:["Kezdéstől kezdésig","Kezdéstől a végéig","Végétől a kezdésig","Végétől a végéig"]},DependencyEdit:{From:"Kezdete",To:"Vége",Type:"Típus",Lag:"Késés","Edit dependency":"Függőség szerkesztése",Save:"Mentés",Delete:"Törlés",Cancel:"Mégse",StartToStart:"Kezdéstől a kezdésig",StartToEnd:"Kezdéstől a végéig",EndToStart:"Végétől a kezdésig",EndToEnd:"Végétől a végéig"},EventEdit:{Name:"Név",Resource:"Erőforrás",Start:"Kezdés",End:"Vége",Save:"Mentés",Delete:"Törlés",Cancel:"Mégse","Edit event":"Esemény szerkesztése",Repeat:"Ismét"},EventDrag:{eventOverlapsExisting:"Az esemény átfedésben van az erőforrás eseményével",noDropOutsideTimeline:"Az esemény nem ejthető teljesen az idővonalon kívülre"},SchedulerBase:{"Add event":"Esemény hozzáadása","Delete event":"Esemény törlése","Unassign event":"Esemény hozzárendelésének törlése",color:"Szín"},TimeAxisHeaderMenu:{pickZoomLevel:"Nagyítás",activeDateRange:"Dátumtartomány",startText:"Kezdő dátum",endText:"Befejező dátum",todayText:"Ma"},EventCopyPaste:{copyEvent:"Esemény másolása",cutEvent:"Esemény kivágása",pasteEvent:"Esemény beillesztése"},EventFilter:{filterEvents:"Események szűrése",byName:"Név szerint"},TimeRanges:{showCurrentTimeLine:"Jelenlegi idővonal megjelenítése"},PresetManager:{secondAndMinute:{displayDateFormat:"ll LTS",name:"Másodperc"},minuteAndHour:{topDateFormat:"ddd MM. DD., H",displayDateFormat:"ll LST"},hourAndDay:{topDateFormat:"ddd MM. DD.",middleDateFormat:"LST",displayDateFormat:"ll LST",name:"Nap"},day:{name:"Nap/óra"},week:{name:"Hét/óra"},dayAndWeek:{displayDateFormat:"ll LST",name:"Hét/nap"},dayAndMonth:{name:"Hónap"},weekAndDay:{displayDateFormat:"ll LST",name:"Hét"},weekAndMonth:{name:"Hét"},weekAndDayLetter:{name:"Hét/hétköznap"},weekDateAndMonth:{name:"Hónap/hét"},monthAndYear:{name:"Hónap"},year:{name:"Év"},manyYears:{name:"Több év"}},RecurrenceConfirmationPopup:{"delete-title":"Töröl egy eseményt","delete-all-message":"Törli az esemény minden előfordulását?","delete-further-message":"Szeretné törölni ezt és az esemény összes jövőbeli előfordulását, vagy csak a kiválasztott előfordulást?","delete-further-btn-text":"Minden jövőbeli esemény törlése","delete-only-this-btn-text":"Csak ezt az eseményt törölje","update-title":"Egy ismétlődő eseményt módosít","update-all-message":"Módosítja az esemény minden előfordulását?","update-further-message":"Csak ezt az eseményt módosítja, vagy annak összes többi előfordulását is?","update-further-btn-text":"Minden jövőbeli esemény","update-only-this-btn-text":"Csak ez az esemény",Yes:"Igen",Cancel:"Mégse",width:600},RecurrenceLegend:{" and ":" és ",Daily:"Naponta","Weekly on {1}":({days:e})=>`Hetente ${e}`,"Monthly on {1}":({days:e})=>`Havonta ${e}`,"Yearly on {1} of {2}":({days:e,months:t})=>`Évente, minden ${t}, ${e}`,"Every {0} days":({interval:e})=>`Minden ${e}. napon`,"Every {0} weeks on {1}":({interval:e,days:t})=>`Minden ${e} . héten, ${t}`,"Every {0} months on {1}":({interval:e,days:t})=>`Minden ${e} . hónapban, ${t}`,"Every {0} years on {1} of {2}":({interval:e,days:t,months:a})=>`Minden ${e} . évben,  ${t} , ${a}`,position1:"első",position2:"második",position3:"harmadik",position4:"negyedik",position5:"ötödik","position-1":"utolsó",day:"nap",weekday:"hétköznap","weekend day":"hétvége",daysFormat:({position:e,days:t})=>`${e} ${t}`},RecurrenceEditor:{"Repeat event":"Esemény ismétlése",Cancel:"Mégse",Save:"Mentés",Frequency:"Gyakoriság",Every:"Minden",DAILYintervalUnit:"nap",WEEKLYintervalUnit:"hét",MONTHLYintervalUnit:"hónap",YEARLYintervalUnit:"év",Each:"Mindegyik","On the":"Ekkor:","End repeat":"Ismétlés vége","time(s)":"alkalom"},RecurrenceDaysCombo:{day:"nap",weekday:"hétköznap","weekend day":"hétvége"},RecurrencePositionsCombo:{position1:"első",position2:"második",position3:"harmadik",position4:"negyedik",position5:"ötödik","position-1":"utolsó"},RecurrenceStopConditionCombo:{Never:"Soha",After:"Utána","On date":"Aznap"},RecurrenceFrequencyCombo:{None:"Nincs ismétlés",Daily:"Naponta",Weekly:"Hetente",Monthly:"Havonta",Yearly:"Évente"},RecurrenceCombo:{None:"Nincs",Custom:"Egyedi..."},Summary:{"Summary for":e=>`Összefoglaló, ${e}`},ScheduleRangeCombo:{completeview:"Teljes ütemterv",currentview:"Látható ütemterv",daterange:"Dátumtartomány",completedata:"Teljes ütemterv (minden eseményhez)"},SchedulerExportDialog:{"Schedule range":"Ütemezési tartomány","Export from":"Kezdete","Export to":"Vége"},ExcelExporter:{"No resource assigned":"Nincs hozzárendelt erőforrás"},CrudManagerView:{serverResponseLabel:"Szerverválasz:"},DurationColumn:{Duration:"Időtartam"}},x=d.publishLocale(S),M={localeName:"Hu",localeDesc:"Magyar",localeCode:"hu",ConstraintTypePicker:{none:"Nincs",assoonaspossible:"Amint lehetséges",aslateaspossible:"Amennyire csak lehetséges",muststarton:"Muszáj elkezdődnie ekkor:",mustfinishon:"Muszáj befejeződnie ekkor:",startnoearlierthan:"Nem kezdődhet előbb mint",startnolaterthan:"Nem kezdődhet később mint",finishnoearlierthan:"Nem érhet véget előbb mint",finishnolaterthan:"Nem érhet véget később mint"},SchedulingDirectionPicker:{Forward:"Előre",Backward:"Hátra",inheritedFrom:"Örökölt",enforcedBy:"Kényszerítve"},CalendarField:{"Default calendar":"Alapértelmezett naptár"},TaskEditorBase:{Information:"Információ",Save:"Mentés",Cancel:"Mégse",Delete:"Törlés",calculateMask:"Számítás...",saveError:"Nem menthető, előbb javítsa a hibákat",repeatingInfo:"Ismétlődő esemény megjelenítése",editRepeating:"Szerkesztés"},TaskEdit:{editEvent:"Esemény szerkesztése",ConfirmDeletionTitle:"Törlés jóváhagyása",ConfirmDeletionMessage:"Biztosan törli az eseményt?"},GanttTaskEditor:{editorWidth:"45em"},SchedulerTaskEditor:{editorWidth:"35em"},SchedulerGeneralTab:{labelWidth:"6em",General:"Általános",Name:"Név",Resources:"Erőforrások","% complete":"% kész",Duration:"Időtartam",Start:"Kezdés",Finish:"Vége",Effort:"Effort",Preamble:"Bevezető",Postamble:"Lezárás"},GeneralTab:{labelWidth:"6.5em",General:"Általános",Name:"Név","% complete":"% kész",Duration:"Időtartam",Start:"Kezdés",Finish:"Vége",Effort:"Effort",Dates:"Dátumok"},SchedulerAdvancedTab:{labelWidth:"13em",Advanced:"Speciális",Calendar:"Naptár","Scheduling mode":"Ütemezési mód","Effort driven":"Munkaalapú","Manually scheduled":"Manuálisan ütemezve","Constraint type":"Korlátozás típusa","Constraint date":"Korlátozás dátuma",Inactive:"Inaktív","Ignore resource calendar":"Erőforrásnaptár figyelmen kívül hagyása"},AdvancedTab:{labelWidth:"11.5em",Advanced:"Speciális",Calendar:"Naptár","Scheduling mode":"Ütemezési mód","Effort driven":"Munkaalapú","Manually scheduled":"Manuálisan ütemezve","Constraint type":"Korlátozás típusa","Constraint date":"Korlátozás dátuma",Constraint:"Korlátozás",Rollup:"Összesítés",Inactive:"Inaktív","Ignore resource calendar":"Erőforrásnaptár figyelmen kívül hagyása","Scheduling direction":"Menetrend iránya",projectBorder:"Projekt határ",ignore:"Figyelmen kívül hagyni",honor:"Becsület",askUser:"Kérdezze meg a felhasználót"},DependencyTab:{Predecessors:"Elődök",Successors:"Utódok",ID:"Azonosító",Name:"Név",Type:"Típus",Lag:"Késés",cyclicDependency:"Ciklikus függőség",invalidDependency:"Érvénytelen függőség"},NotesTab:{Notes:"Jegyzetek"},ResourcesTab:{unitsTpl:({value:e})=>`${e}%`,Resources:"Erőforrások",Resource:"Erőforrás",Units:"Egységek"},RecurrenceTab:{title:"Ismétlés"},SchedulingModePicker:{Normal:"Normál","Fixed Duration":"Rögzített időtartam","Fixed Units":"Rögzített egységek","Fixed Effort":"Rögzített munka"},ResourceHistogram:{barTipInRange:'<b>{resource}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated} / {available}</span> hozzárendelve',barTipOnDate:'<b>{resource}</b> on {startDate}<br><span class="{cls}">{allocated} / {available}</span> > hozzárendelve',groupBarTipAssignment:'<b>{resource}</b> - <span class="{cls}">{allocated} / {available}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} / {available}</span> allocated:<br>{assignments}',groupBarTipOnDate:'{startDate} napon<br><span class="{cls}">{allocated} / {available}</span>hozzárendelve:<br>{assignments}',plusMore:"+{value} további"},ResourceUtilization:{barTipInRange:'<b>{event}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated}</span> hozzárendelve',barTipOnDate:'<b>{event}</b> / {startDate}<br><span class="{cls}">{allocated}</span> hozzárendelve',groupBarTipAssignment:'<b>{event}</b> - <span class="{cls}">{allocated}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} / {available}</span> hozzárendelve:<br>{assignments}',groupBarTipOnDate:'{startDate} napon<br><span class="{cls}">{allocated} / {available}</span> allocated:<br>{assignments}',plusMore:"+{value} további",nameColumnText:"Erőforrás / esemény"},SchedulingIssueResolutionPopup:{"Cancel changes":"Törli a módosítást és nem tesz semmit",schedulingConflict:"Ütemezési ütközés",emptyCalendar:"Naptárbeállítási hiba",cycle:"Ütemezési ciklus",Apply:"Alkalmazás"},CycleResolutionPopup:{dependencyLabel:"Válasszon egy függőséget:",invalidDependencyLabel:"Érvénytelen függőségek állnak fenn, amelyeket kezelni kell:"},DependencyEdit:{Active:"Aktív"},SchedulerProBase:{propagating:"Projekt kiszámítása",storePopulation:"Adatok betöltése",finalizing:"Eredmények véglegesítése"},EventSegments:{splitEvent:"Esemény megszakítása",renameSegment:"Átnevezés"},NestedEvents:{deNestingNotAllowed:"A beágyazás bontása tilos",nestingNotAllowed:"A beágyazás tilos"},VersionGrid:{compare:"Összehasonlítás",description:"Leírás",occurredAt:"Bekövetkezett",rename:"Átnevezés",restore:"Visszaállítás",stopComparing:"Összehasonlítás befejezése"},Versions:{entityNames:{TaskModel:"feladat",AssignmentModel:"hozzárendelés",DependencyModel:"csatolás",ProjectModel:"projekt",ResourceModel:"erőforrás",other:"objektum"},entityNamesPlural:{TaskModel:"feladatok",AssignmentModel:"hozzárendelések",DependencyModel:"csatolások",ProjectModel:"projektek",ResourceModel:"erőforrások",other:"objektumok"},transactionDescriptions:{update:"Lecserélt {n} {entities}",add:"Hozzáadott {n} {entities}",remove:"Eltávolított {n} {entities}",move:"Áthelyezett {n} {entities}",mixed:"Lecserélt {n} {entities}"},addEntity:"Hozzáadott {type} **{name}**",removeEntity:"Eltávolított {type} **{name}**",updateEntity:"Lecserélt {type} **{name}**",moveEntity:"Áthelyezett {type} **{name}** ettől {from} eddig {to}",addDependency:"Hozzáadott csatolás ettől **{from}** eddig **{to}**",removeDependency:"Eltávolított csatolás ettől **{from}** eddig **{to}**",updateDependency:"Szerkesztett csatolás ettől **{from}** eddig **{to}**",addAssignment:"Hozzárendelt **{resource}** a következőhöz **{event}**",removeAssignment:"Eltávolított hozzárendelés **{resource}** a következőtől **{event}**",updateAssignment:"Szerkesztett hozzárendelés **{resource}** a következőhöz **{event}**",noChanges:"Nincs módosítás",nullValue:"nincs",versionDateFormat:"M/D/YYYY h:mm a",undid:"Módosítások törlése",redid:"Módosítások visszaállítása",editedTask:"Szerkesztett feladatok tulajdonságai",deletedTask:"Törölt feladat",movedTask:"Áthelyezett feladat",movedTasks:"Áthelyezett feladatok"}},L=d.publishLocale(M),j={localeName:"Hu",localeDesc:"Magyar",localeCode:"hu",Object:{Save:"Mentés"},IgnoreResourceCalendarColumn:{"Ignore resource calendar":"Erőforrásnaptár figyelmen kívül hagyása"},InactiveColumn:{Inactive:"Inaktív"},AddNewColumn:{"New Column":"Új oszlop"},BaselineStartDateColumn:{baselineStart:"Eredeti kezdés"},BaselineEndDateColumn:{baselineEnd:"Eredeti befejezés"},BaselineDurationColumn:{baselineDuration:"Eredeti időtartam"},BaselineStartVarianceColumn:{startVariance:"Kezdés eltérése"},BaselineEndVarianceColumn:{endVariance:"Befejezés eltérése"},BaselineDurationVarianceColumn:{durationVariance:"Időtartam eltérése"},CalendarColumn:{Calendar:"Naptár"},EarlyStartDateColumn:{"Early Start":"Korai kezdés"},EarlyEndDateColumn:{"Early End":"Korai befejezés"},LateStartDateColumn:{"Late Start":"Késői kezdés"},LateEndDateColumn:{"Late End":"Késői befejezés"},TotalSlackColumn:{"Total Slack":"Összes rugalmasság"},ConstraintDateColumn:{"Constraint Date":"Korlátozás dátuma"},ConstraintTypeColumn:{"Constraint Type":"Korlátozás típusa"},DeadlineDateColumn:{Deadline:"Határidő"},DependencyColumn:{"Invalid dependency":"Érvénytelen függőség"},DurationColumn:{Duration:"Időtartam"},EffortColumn:{Effort:"Erőfeszítés"},EndDateColumn:{Finish:"Vége"},EventModeColumn:{"Event mode":"Esemény mód",Manual:"Manuális",Auto:"Automata"},ManuallyScheduledColumn:{"Manually scheduled":"Manuálisan ütemezve"},MilestoneColumn:{Milestone:"Mérföldkő"},NameColumn:{Name:"Név"},NoteColumn:{Note:"Jegyzet"},PercentDoneColumn:{"% Done":"% kész"},PredecessorColumn:{Predecessors:"Elődök"},ResourceAssignmentColumn:{"Assigned Resources":"Hozzárendelt erőforrások","more resources":"további erőforrás"},RollupColumn:{Rollup:"Felhalmozódás"},SchedulingModeColumn:{"Scheduling Mode":"Ütemezési mód"},SchedulingDirectionColumn:{schedulingDirection:"Ütemterv iránya",inheritedFrom:"Örökölt",enforcedBy:"Kényszerítve"},SequenceColumn:{Sequence:"Sorrend"},ShowInTimelineColumn:{"Show in timeline":"Megjelenítés idővonalon"},StartDateColumn:{Start:"Kezdés"},SuccessorColumn:{Successors:"Utódok"},TaskCopyPaste:{copyTask:"Másolás",cutTask:"Kivágás",pasteTask:"Beillesztés"},WBSColumn:{WBS:"WBS",renumber:"Újraszámozás"},DependencyField:{invalidDependencyFormat:"Érvénytelen függőségi formátum"},ProjectLines:{"Project Start":"Projekt kezdete","Project End":"Projekt vége"},TaskTooltip:{Start:"Kezdés",End:"Vége",Duration:"Időtartam",Complete:"Kész"},AssignmentGrid:{Name:"Erőforrás neve",Units:"Egységek",unitsTpl:({value:e})=>e?e+"%":""},Gantt:{Edit:"Szerkesztés",Indent:"Behúzás",Outdent:"Kihúzás","Convert to milestone":"Mérföldkővé alakítás",Add:"Hozzáadás...","New task":"Új feladat","New milestone":"Új mérföldkő","Task above":"Fenti feladat","Task below":"Lenti feladat","Delete task":"Törlés",Milestone:"Mérföldkő","Sub-task":"Részfeladat",Successor:"Utód",Predecessor:"Előd",changeRejected:"Az ütemező elutasította a módosításokat",linkTasks:"Függőségek hozzáadása",unlinkTasks:"Függőségek eltávolítása",color:"Szín"},EventSegments:{splitTask:"Tevékenység megszakítása"},Indicators:{earlyDates:"Korai kezdés/befejezés",lateDates:"Késői kezdés/befejezés",Start:"Kezdés",End:"Vége",deadlineDate:"Határidő"},Versions:{indented:"Behúzott",outdented:"Kihúzott",cut:"Kivágott",pasted:"Beillesztett",deletedTasks:"Törölt feladatok"}},N=d.publishLocale(j);if(typeof o.exports=="object"&&typeof m=="object"){var A=(e,t,a,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Object.getOwnPropertyNames(t))!Object.prototype.hasOwnProperty.call(e,s)&&s!==a&&Object.defineProperty(e,s,{get:()=>t[s],enumerable:!(n=Object.getOwnPropertyDescriptor(t,s))||n.enumerable});return e};o.exports=A(o.exports,m)}return o.exports});
