/*!
 *
 * Bryntum Gantt 5.6.10 (TRIAL VERSION)
 *
 * Copyright(c) 2024 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
(function(d,s){var l=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],s);else if(typeof module=="object"&&module.exports)module.exports=s();else{var g=s(),m=l?exports:d;for(var h in g)m[h]=g[h]}})(typeof self<"u"?self:void 0,()=>{var d={},s={exports:d},l=Object.defineProperty,g=Object.getOwnPropertyDescriptor,m=Object.getOwnPropertyNames,h=Object.prototype.hasOwnProperty,f=(e,n,t)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,E=(e,n)=>{for(var t in n)l(e,t,{get:n[t],enumerable:!0})},v=(e,n,t,a)=>{if(n&&typeof n=="object"||typeof n=="function")for(let r of m(n))!h.call(e,r)&&r!==t&&l(e,r,{get:()=>n[r],enumerable:!(a=g(n,r))||a.enumerable});return e},D=e=>v(l({},"__esModule",{value:!0}),e),S=(e,n,t)=>(f(e,typeof n!="symbol"?n+"":n,t),t),p={};E(p,{default:()=>M}),s.exports=D(p);var o=typeof self<"u"?self:typeof globalThis<"u"?globalThis:null,b=class u{static mergeLocales(...n){let t={};return n.forEach(a=>{Object.keys(a).forEach(r=>{typeof a[r]=="object"?t[r]={...t[r],...a[r]}:t[r]=a[r]})}),t}static trimLocale(n,t){let a=(r,i)=>{n[r]&&(i?n[r][i]&&delete n[r][i]:delete n[r])};Object.keys(t).forEach(r=>{Object.keys(t[r]).length>0?Object.keys(t[r]).forEach(i=>a(r,i)):a(r)})}static normalizeLocale(n,t){if(!n)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof n=="string"){if(!t)throw new Error('"config" parameter can not be empty');t.locale?t.name=n||t.name:t.localeName=n}else t=n;let a={};if(t.name||t.locale)a=Object.assign({localeName:t.name},t.locale),t.desc&&(a.localeDesc=t.desc),t.code&&(a.localeCode=t.code),t.path&&(a.localePath=t.path);else{if(!t.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);a=Object.assign({},t)}for(let r of["name","desc","code","path"])a[r]&&delete a[r];if(!a.localeName)throw new Error("Locale name can not be empty");return a}static get locales(){return o.bryntum.locales||{}}static set locales(n){o.bryntum.locales=n}static get localeName(){return o.bryntum.locale||"En"}static set localeName(n){o.bryntum.locale=n||u.localeName}static get locale(){return u.localeName&&this.locales[u.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(n,t){let{locales:a}=o.bryntum,r=u.normalizeLocale(n,t),{localeName:i}=r;return!a[i]||t===!0?a[i]=r:a[i]=this.mergeLocales(a[i]||{},r||{}),a[i]}};S(b,"skipLocaleIntegrityCheck",!1);var c=b;o.bryntum=o.bryntum||{},o.bryntum.locales=o.bryntum.locales||{},c._$name="LocaleHelper";var y={localeName:"De",localeDesc:"Deutsch",localeCode:"de-DE",RemoveDependencyCycleEffectResolution:{descriptionTpl:"Abhängigkeiten entfernen"},DeactivateDependencyCycleEffectResolution:{descriptionTpl:"Abhängigkeit deaktivieren"},CycleEffectDescription:{descriptionTpl:"Es wurde ein Zyklus gefunden, bestehend aus: {0}"},EmptyCalendarEffectDescription:{descriptionTpl:'"{0}" Kalender bietet keine Arbeitszeitintervalle.'},Use24hrsEmptyCalendarEffectResolution:{descriptionTpl:"24-Stunden-Kalender mit arbeitsfreien Samstagen und Sonntagen verwenden."},Use8hrsEmptyCalendarEffectResolution:{descriptionTpl:"8-Stunden-Kalender (08:00-12:00, 13:00-17:00) mit arbeitsfreien Samstagen und Sonntagen verwenden."},IgnoreProjectConstraintResolution:{descriptionTpl:"Ignorieren Sie die Projektgrenze und fahren Sie mit der Änderung fort."},ProjectConstraintConflictEffectDescription:{startDescriptionTpl:'Sie haben die Aufgabe "{0}" bewegt, {1} zu starten. Dies ist vor dem Projekt Startdatum {2}.',endDescriptionTpl:'Sie haben die Aufgabe "{0}" bewegt, {1} zu beenden. Dies ist nach dem Projektenddatum {2}.'},HonorProjectConstraintResolution:{descriptionTpl:"Passen Sie die Aufgabe an, die Projektgrenze zu ehren."},ConflictEffectDescription:{descriptionTpl:"Es wurde ein Terminkonflikt gefunden: {0} steht im Konflikt mit {1}"},ConstraintIntervalDescription:{dateFormat:"LLL"},ProjectConstraintIntervalDescription:{startDateDescriptionTpl:"Datum Projektbeginn {0}",endDateDescriptionTpl:" Datum Projektende {0}"},DependencyType:{long:["Start-zu-Start","Start-zu-Ende","Ende-zu-Start","Ende-zu-Ende"]},ManuallyScheduledParentConstraintIntervalDescription:{startDescriptionTpl:'Manuell terminiertes  "{2}" zwingt seine untergeordneten Elemente, nicht früher zu starten als {0}',endDescriptionTpl:'Manuell terminiertes  "{2}" zwingt seine untergeordneten Elemente, spätestens am {1} zu enden'},DisableManuallyScheduledConflictResolution:{descriptionTpl:'Manuelle Terminierung deaktivieren für "{0}"'},DependencyConstraintIntervalDescription:{descriptionTpl:'Abhängigkeit ({2}) von "{3}" bis "{4}"'},RemoveDependencyResolution:{descriptionTpl:'Abhängigkeit von "{1}" bis "{2}" entfernen'},DeactivateDependencyResolution:{descriptionTpl:'Abhängigkeit von "{1}" bis "{2}" deaktivieren'},DateConstraintIntervalDescription:{startDateDescriptionTpl:'Aufgabe "{2}" {3} {0} Einschränkung',endDateDescriptionTpl:'Aufgabe "{2}" {3} {1} Einschränkung',constraintTypeTpl:{startnoearlierthan:"Darf nicht fürher als (starten)",finishnoearlierthan:"Nicht früher als (enden)",muststarton:"Muss starten am",mustfinishon:"Muss fertig sein am",startnolaterthan:"Nicht später als (starten)",finishnolaterthan:"Nicht später als (enden)"}},RemoveDateConstraintConflictResolution:{descriptionTpl:'Einschränkung "{1}" der Aufgabe "{0}" entfernen'}},R=c.publishLocale(y),k={localeName:"De",localeDesc:"Deutsch",localeCode:"de-DE",Object:{Yes:"Ja",No:"Nein",Cancel:"Abbrechen",Ok:"OK",Week:"Woche",None:"Keine"},ColorPicker:{noColor:"Keine Farbe"},Combo:{noResults:"Keine Ergebnisse",recordNotCommitted:"Datensatz konnte nicht hinzugefügt werden",addNewValue:e=>`Hinzufügen ${e}`},FilePicker:{file:"Datei"},Field:{badInput:"Ungültiger Feldwert",patternMismatch:"Wert sollte einem bestimmten Muster entsprechen",rangeOverflow:e=>`Der Wert muss kleiner oder gleich sein als ${e.max}`,rangeUnderflow:e=>`Der Wert muss größer oder gleich sein als ${e.min}`,stepMismatch:"Der Wert sollte zum Schritt passen",tooLong:"Der Wert sollte kürzer sein",tooShort:"Wert sollte länger sein",typeMismatch:"Wert muss in einem speziellen Format vorliegen",valueMissing:"Dieses Feld ist erforderlich",invalidValue:"Ungültiger Feldwert",minimumValueViolation:"Verletzung des Mindestwerts",maximumValueViolation:"Verletzung des Maximalwerts",fieldRequired:"Dieses Feld ist erforderlich",validateFilter:"Wert muss aus der Liste ausgewählt werden"},DateField:{invalidDate:"Ungültige Datumseingabe"},DatePicker:{gotoPrevYear:"Zum vorherigen Jahr gehen",gotoPrevMonth:"Zum vorherigen Monat gehen",gotoNextMonth:"Zum nächsten Monat gehen",gotoNextYear:"Zum nächsten Jahr gehen"},NumberFormat:{locale:"de-DE",currency:"EUR"},DurationField:{invalidUnit:"Ungültige Einheit"},TimeField:{invalidTime:"Ungültige Zeiteingabe"},TimePicker:{hour:"Stunde",minute:"Minute",second:"Sekunde"},List:{loading:"Wird geladen...",selectAll:"Alle auswählen"},GridBase:{loadMask:"Wird geladen...",syncMask:"Änderung werden gespeichert, bitte warten..."},PagingToolbar:{firstPage:"Zur ersten Seite gehen",prevPage:"Zur vorherigen Seite gehen",page:"Seite",nextPage:"Zur nächsten Seite gehen",lastPage:"Zur letzten Seite gehen",reload:"Aktuelle Seite neu laden",noRecords:"Keine Datensätze anzuzeigen",pageCountTemplate:e=>`von${e.lastPage}`,summaryTemplate:e=>` Datensätze anzeigen ${e.start} - ${e.end} von ${e.allCount}`},PanelCollapser:{Collapse:"Zusammenklappen",Expand:"Aufklappen"},Popup:{close:"Popup schließen"},UndoRedo:{Undo:"Rückgängig machen",Redo:"Wiederholen",UndoLastAction:"Letzte Aktion rückgängig machen",RedoLastAction:"Letzte rückgängig gemachte Aktion wiederholen",NoActions:"Keine Einträge in der Rückgängig-Warteschlange"},FieldFilterPicker:{equals:"ist gleich",doesNotEqual:"ist nicht gleich",isEmpty:"ist leer",isNotEmpty:"ist nicht leer",contains:"enthält",doesNotContain:"enthält nicht",startsWith:"beginnt mit",endsWith:"endet mit",isOneOf:"ist eins von",isNotOneOf:"ist nicht eins von",isGreaterThan:"ist größer als",isLessThan:"ist kleiner als",isGreaterThanOrEqualTo:"ist größer oder gleich wie",isLessThanOrEqualTo:"ist kleiner oder gleich wie",isBetween:"ist zwischen",isNotBetween:"ist nicht zwischen",isBefore:"ist vor",isAfter:"ist nach",isToday:"ist heute",isTomorrow:"ist morgen",isYesterday:"ist gestern",isThisWeek:"ist diese Woche",isNextWeek:"ist nächste Woche",isLastWeek:"ist letzte Woche",isThisMonth:"ist dieser Monat",isNextMonth:"ist nächster Monat",isLastMonth:"ist letzter Monat",isThisYear:"ist dieses Jahr",isNextYear:"ist nächstes Jahr",isLastYear:"ist letztes Jahr",isYearToDate:"ist Jahr bis dato",isTrue:"ist wahr",isFalse:"ist falsch",selectAProperty:"Eine Eigenschaft auswählen",selectAnOperator:"Einen Operator auswählen",caseSensitive:"Groß-/Kleinschreibung",and:"und",dateFormat:"D/M/YY",selectValue:"Wert auswählen",selectOneOrMoreValues:"Einen oder mehrere Wert(e) auswählen",enterAValue:"Einen Wert eingeben",enterANumber:"Eine Zahl eingeben",selectADate:"Ein Datum auswählen",selectATime:"Uhrzeit auswählen"},FieldFilterPickerGroup:{addFilter:"Filter hinzufügen"},DateHelper:{locale:"de-DE",weekStartDay:1,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"millisekunde",plural:"ms",abbrev:"ms"},{single:"sekunde",plural:"sekunden",abbrev:"s"},{single:"minute",plural:"minuten",abbrev:"min"},{single:"stunde",plural:"stunden",abbrev:"std"},{single:"tag",plural:"tage",abbrev:"t"},{single:"woche",plural:"wochen",abbrev:"w"},{single:"monat",plural:"monate",abbrev:"mon"},{single:"quartal",plural:"quartale",abbrev:"q"},{single:"jahr",plural:"jahre",abbrev:"yr"},{single:"jahrzehnt",plural:"jahrzehnte",abbrev:"jahrz"}],unitAbbreviations:[["mil"],["s","sek"],["m","min"],["std","hr"],["t"],["w","wn"],["mo","mon","mnt"],["q","quar","qrt"],["j","jr"],["jahrz"]],parsers:{L:"DD.MM.YYYY",LT:"HH:mm",LTS:"HH:mm:ss"},ordinalSuffix:e=>e+"."}},P=c.publishLocale(k),A=new String,w={localeName:"De",localeDesc:"Deutsch",localeCode:"de-DE",ColumnPicker:{column:"Spalte",columnsMenu:"Spalten",hideColumn:"Spalten verbergen",hideColumnShort:"Verbergen",newColumns:"Neue Spalten"},Filter:{applyFilter:"Filter anwenden",filter:"filtern",editFilter:"Filter bearbeiten",on:"An",before:"Davor",after:"Danach",equals:"Ist gleich",lessThan:"Weniger als",moreThan:"Mehr als",removeFilter:"Filter löschen",disableFilter:"Filter deaktivieren"},FilterBar:{enableFilterBar:"Filterleiste anzeigen",disableFilterBar:"Filterleiste verbergen"},Group:{group:"Gruppieren",groupAscending:"Gruppierung aufsteigend",groupDescending:"Gruppierung absteigend",groupAscendingShort:"Absteigend",groupDescendingShort:"Aufsteigend",stopGrouping:"Gruppierung stoppen",stopGroupingShort:"Stop"},HeaderMenu:{moveBefore:e=>`Verschieben vor "${e}"`,moveAfter:e=>`Verschieben nach "${e}"`,collapseColumn:"Spalte einklappen",expandColumn:"Spalte ausklappen"},ColumnRename:{rename:"Umbenennen"},MergeCells:{mergeCells:"Zellen zusammenführen",menuTooltip:"Zellen mit gleichem Wert bei Sortierung nach dieser Spalte zusammenführen"},Search:{searchForValue:"Nach Wert suchen"},Sort:{sort:"Sortieren",sortAscending:"Aufsteigend sortieren",sortDescending:"Absteigend sortieren",multiSort:"Multi sortieren",removeSorter:"Sortierer entfernen",addSortAscending:"Aufsteigenden Sortierer hinzufügen",addSortDescending:"Absteigenden Sortierer hinzufügen",toggleSortAscending:"Zu Aufsteigend wechseln",toggleSortDescending:"Zu Absteigend wechseln",sortAscendingShort:"Aufsteigend",sortDescendingShort:"Absteigend",removeSorterShort:"Entfernen",addSortAscendingShort:"+ Aufsteigend",addSortDescendingShort:"+ Absteigend"},Split:{split:"Teilen",unsplit:"Nicht teilen",horizontally:"Horizontal",vertically:"Vertikal",both:"Beides"},Column:{columnLabel:e=>`${e.text?`${e.text} spalte. `:""}LEERTASTE für Kontextmenü${e.sortable?", ENTER um zu sortieren":""}`,cellLabel:A},Checkbox:{toggleRowSelect:"Zeilenauswahl umschalten",toggleSelection:"Auswahl des gesamten Datensatzes umschalten"},RatingColumn:{cellLabel:e=>{var n;return`${e.text?e.text:""} ${(n=e.location)!=null&&n.record?`Bewertung : ${e.location.record.get(e.field)||0}`:""}`}},GridBase:{loadFailedMessage:"Das Laden der Daten ist fehlgeschlagen!",syncFailedMessage:"Das synchronisieren der Daten ist fehlgeschlagen!",unspecifiedFailure:"Nicht spezifizierter Fehler",networkFailure:"Netzwerkfehler",parseFailure:"Antwort des Servers konnte nicht analysiert werden",serverResponse:"Server Antwort:",noRows:" Keine Datensätze zum Anzeigen",moveColumnLeft:"In den linken Bereich verschieben",moveColumnRight:"In den rechten Bereich verschieben",moveColumnTo:e=>`Spalte verschieben zu ${e}`},CellMenu:{removeRow:"Löschen"},RowCopyPaste:{copyRecord:"Kopieren",cutRecord:"Ausschneiden",pasteRecord:"Einfügen",rows:"Zeilen",row:"Zeile"},CellCopyPaste:{copy:"Kopieren",cut:"Ausschneiden",paste:"Einfügen"},PdfExport:{"Waiting for response from server":"Warte auf Antwort vom Server...","Export failed":"Export fehlgeschlagen","Server error":"Serverfehler","Generating pages":"Seiten werden generiert","Click to abort":"Abbrechen"},ExportDialog:{width:"40em",labelWidth:"12em",exportSettings:"Einstellungen exportieren",export:"Exportieren",printSettings:"Druckeinstellungen",print:"Drucken",exporterType:"Kontrolle des Umbruchs",cancel:"Abbrechen",fileFormat:"Dateiformat",rows:"Reihen",alignRows:"Zeilen ausrichten",columns:"Spalten",paperFormat:"Papierformat",orientation:"Orientierung",repeatHeader:"Kopfzeile wiederholen"},ExportRowsCombo:{all:"Alle Zeilen",visible:"Sichtbare Zeilen"},ExportOrientationCombo:{portrait:"Hochformat",landscape:"Querformat"},SinglePageExporter:{singlepage:"Einzelne Seite"},MultiPageExporter:{multipage:"Mehrere Seiten",exportingPage:({currentPage:e,totalPages:n})=>`Seite ${e}/${n} wird exportiert`},MultiPageVerticalExporter:{multipagevertical:"Mehrere Seiten (vertikal)",exportingPage:({currentPage:e,totalPages:n})=>`Seite ${e}/${n} wird exportiert`},RowExpander:{loading:"Wird geladen",expand:"Aufklappen",collapse:"Zusammenklappen"},TreeGroup:{group:"Gruppieren nach",stopGrouping:"Gruppierung beenden",stopGroupingThisColumn:"Gruppierung dieser Spalte aufheben"}},F=c.publishLocale(w),T={localeName:"De",localeDesc:"Deutsch",localeCode:"de-DE",Object:{newEvent:"Neues Ereignis"},ResourceInfoColumn:{eventCountText:e=>e+" Ereignis"+(e!==1?"se":"")},Dependencies:{from:"Von",to:"Bis",valid:"Gültig",invalid:"Ungültig"},DependencyType:{SS:"SS",SF:"SE",FS:"ES",FF:"EE",StartToStart:"Start-zu-Start",StartToEnd:"Start-zu-Ende",EndToStart:"Ende-zu-Start",EndToEnd:"Ende-zu-Ende",short:["SS","SE","ES","EE"],long:["Start-zu-Start","Start-zu-Ende","Ende-zu-Start","Ende-zu-Ende"]},DependencyEdit:{From:"Von",To:"Bis",Type:"Typ",Lag:"Lag","Edit dependency":"Abhängigkeit bearbeiten",Save:"Speichern",Delete:"Löschen",Cancel:"Abbrechen",StartToStart:"Start-zu-Start",StartToEnd:"Start-zu-Ende",EndToStart:"Ende-zu-Start",EndToEnd:"Ende-zu-Ende"},EventEdit:{Name:"Name",Resource:"Ressource",Start:"Start",End:"Ende",Save:"Speichern",Delete:"Löschen",Cancel:"Abbrechen","Edit event":"Ereignis bearbeiten",Repeat:"Wiederholen"},EventDrag:{eventOverlapsExisting:"Ereignis überschneidet sich mit bestehendem Ereignis für diese Ressource",noDropOutsideTimeline:"Das Ereignis darf nicht vollständig außerhalb der Zeitspanne liegen"},SchedulerBase:{"Add event":"Ereignis hinzufügen","Delete event":"Ereignis löschen","Unassign event":"Zuordnung des Ereignisses aufheben",color:"Farbe"},TimeAxisHeaderMenu:{pickZoomLevel:"Zoom",activeDateRange:"Datumspanne",startText:"Startdatum",endText:"Enddatum",todayText:"Heute"},EventCopyPaste:{copyEvent:"Ereignis kopieren",cutEvent:"Ereignis ausschneiden",pasteEvent:"Ereignis einfügen"},EventFilter:{filterEvents:"Aufgaben filtern",byName:"Nach Namen"},TimeRanges:{showCurrentTimeLine:"Aktuelle Zeitleiste anzeigen"},PresetManager:{secondAndMinute:{displayDateFormat:"ll LTS",name:"Sekunden"},minuteAndHour:{topDateFormat:"ddd DD.MM, H",displayDateFormat:"ll LST"},hourAndDay:{topDateFormat:"ddd DD.MM",middleDateFormat:"LST",displayDateFormat:"ll LST",name:"Tag"},day:{name:"Tag/Stunden"},week:{name:"Woche/Stunden"},dayAndWeek:{displayDateFormat:"ll LST",name:"Woche/Tage"},dayAndMonth:{name:"Monat"},weekAndDay:{displayDateFormat:"ll LST",name:"Woche"},weekAndMonth:{name:"Wochen"},weekAndDayLetter:{name:"Woche/Wochentage"},weekDateAndMonth:{name:"Monate/Wochen"},monthAndYear:{name:"Monate"},year:{name:"Jahre"},manyYears:{name:"Mehrere Jahre"}},RecurrenceConfirmationPopup:{"delete-title":"Sie löschen ein Ereignis","delete-all-message":"Möchten Sie alle Vorkommnisse dieses Ereignisses löschen?","delete-further-message":"Möchten Sie dieses und alle zukünftigen Ereignisse dieses Ereignisses löschen, oder nur das ausgewählte Vorkommnis?","delete-further-btn-text":"Alle zukünftigen Ereignisse löschen","delete-only-this-btn-text":"Nur dieses Ereignis löschen","update-title":"Sie ändern ein sich wiederholendes Ereignis","update-all-message":"Möchten Sie alle Vorkommnisse dieses Ereignisses ändern?","update-further-message":"Möchten Sie nur dieses Ereignis oder dieses und alle zukünftigen Vorkommnisse ändern?","update-further-btn-text":"Alle zukünftigen Ereignisse","update-only-this-btn-text":"Nur dieses Ereignis",Yes:"Ja",Cancel:"Abbrechen",width:600},RecurrenceLegend:{" and ":" und ",Daily:"Täglich","Weekly on {1}":({days:e})=>`Wöchentlich an ${e}`,"Monthly on {1}":({days:e})=>`Monatlich an ${e}`,"Yearly on {1} of {2}":({days:e,months:n})=>`Jährlich an ${e} von ${n}`,"Every {0} days":({interval:e})=>`Alle ${e} Tage`,"Every {0} weeks on {1}":({interval:e,days:n})=>`Alle ${e} Wochen an ${n}`,"Every {0} months on {1}":({interval:e,days:n})=>`Alle ${e} Monate an ${n}`,"Every {0} years on {1} of {2}":({interval:e,days:n,months:t})=>`Alle ${e} Jahre an ${n} von ${t}`,position1:"der erste",position2:"der zweite",position3:"der dritte",position4:"der vierte",position5:"der fünfte","position-1":"der letzte",day:"tag",weekday:"wochentag","weekend day":"wochenend tag",daysFormat:({position:e,days:n})=>`${e} ${n}`},RecurrenceEditor:{"Repeat event":"Ereignis wiederholen",Cancel:"Abbrechen",Save:"Speichern",Frequency:"Frequenz",Every:"Alle",DAILYintervalUnit:"tag(e)",WEEKLYintervalUnit:"woche(n)",MONTHLYintervalUnit:"monat(e)",YEARLYintervalUnit:"jahr(e)",Each:"jede","On the":"am","End repeat":"Wiederholung beenden","time(s)":"mal(e)"},RecurrenceDaysCombo:{day:"tag",weekday:"wochentag","weekend day":"wochend tag"},RecurrencePositionsCombo:{position1:"erste",position2:"zweite",position3:"dritte",position4:"vierte",position5:"fünfte","position-1":"letzte"},RecurrenceStopConditionCombo:{Never:"Nie",After:"Nach","On date":"Am Datum"},RecurrenceFrequencyCombo:{None:"Keine Wiederholung",Daily:"Täglich",Weekly:"Wöchentlich",Monthly:"Monatlich",Yearly:"Jährlich"},RecurrenceCombo:{None:"Kein",Custom:"Benutzerdefiniert..."},Summary:{"Summary for":e=>`Zusammenfassung für ${e}`},ScheduleRangeCombo:{completeview:"Vollständiger Zeitplan",currentview:"Sichtbarer Zeitplan",daterange:"Datumsspanne",completedata:"Vollständiger Zeitplan (für alle Ereignisse)"},SchedulerExportDialog:{"Schedule range":"Zeitplanbereich","Export from":"Von","Export to":"Bis"},ExcelExporter:{"No resource assigned":"Keine Ressource zugewiesen"},CrudManagerView:{serverResponseLabel:"Server Antwort:"},DurationColumn:{Duration:"Dauer"}},x=c.publishLocale(T),C={localeName:"De",localeDesc:"Deutsch",localeCode:"de-DE",ConstraintTypePicker:{none:"Keine",assoonaspossible:"So bald wie möglich",aslateaspossible:"So spät wie möglich",muststarton:"Muss starten am",mustfinishon:"Muss fertig sein am",startnoearlierthan:"Darf nicht fürher als starten",startnolaterthan:"Nicht später als starten",finishnoearlierthan:"Nicht früher als enden",finishnolaterthan:"Nicht später als enden"},SchedulingDirectionPicker:{Forward:"Vorwärts",Backward:"Rückwärts",inheritedFrom:"Geerbt von",enforcedBy:"Erzwungen von"},CalendarField:{"Default calendar":"Hauptkalender"},TaskEditorBase:{Information:"Information",Save:"Speichern",Cancel:"Abbrechen",Delete:"Löschen",calculateMask:"Wird berechnet...",saveError:"Kann nicht gespeichert werden, bitte korrigieren Sie zuerst die Fehler",repeatingInfo:"Ein sich wiederholendes Ereignis anzeigen",editRepeating:"Bearbeiten"},TaskEdit:{editEvent:"Ereignis bearbeiten",ConfirmDeletionTitle:"Löschung bestätigen",ConfirmDeletionMessage:"Sind Sie sicher, dass Sie das Ereignis löschen möchten?"},GanttTaskEditor:{editorWidth:"44em"},SchedulerTaskEditor:{editorWidth:"32em"},SchedulerGeneralTab:{labelWidth:"6em",General:"Generell",Name:"Name",Resources:"Ressourcen","% complete":"% vollständig",Duration:"Dauer",Start:"Start",Finish:"Ende",Effort:"Anstrengung",Preamble:"Präambel",Postamble:"Postambel"},GeneralTab:{labelWidth:"6.5em",General:"Allgemein",Name:"Name","% complete":"% Abgeschlossen",Duration:"Dauer",Start:"Anfang",Finish:"Ende",Effort:"Aufwand",Dates:"Termine"},SchedulerAdvancedTab:{labelWidth:"13em",Advanced:"Fortgeschritten",Calendar:"Kalender","Scheduling mode":"Planungsmodus","Effort driven":"Durch Aufwand gesteuert","Manually scheduled":"Manuell terminiert","Constraint type":"Art der Einschränkung","Constraint date":"Einschränkungsdatum",Inactive:"Inaktiv","Ignore resource calendar":"Ressourcenkalender ignorieren"},AdvancedTab:{labelWidth:"11.5em",Advanced:"Erweitert",Calendar:"Kalender","Scheduling mode":"Planungsmodus","Effort driven":"Leistungsgesteuert","Manually scheduled":"Manuell geplant","Constraint type":"Einschränkungsart","Constraint date":"Einschränkungsdatum",Constraint:"Einschränkung",Rollup:"Rollup",Inactive:"Inaktiv","Ignore resource calendar":"Terminplanung ignoriert Ressourcenkalender","Scheduling direction":"Terminierungsrichtung",projectBorder:"Projektgrenze",ignore:"Ignorieren",honor:"Ehre",askUser:"Fragen Sie den Benutzer"},DependencyTab:{Predecessors:"Vorgänger",Successors:"Nachfolger",ID:"ID",Name:"Name",Type:"Typ",Lag:"Zeitabstand",cyclicDependency:"Zyklische Abhängigkeit",invalidDependency:"Ungültige Abhängigkeit"},NotesTab:{Notes:"Notizen"},ResourcesTab:{unitsTpl:({value:e})=>`${e}%`,Resources:"Ressourcen",Resource:"Ressource",Units:"Einheiten"},RecurrenceTab:{title:"Wiederholen"},SchedulingModePicker:{Normal:"Normal","Fixed Duration":"Fixierte Dauer","Fixed Units":"Fixierte Einheiten","Fixed Effort":"Fixierter Effort"},ResourceHistogram:{barTipInRange:'<b>{resource}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated} von {available}</span> zugewiesen',barTipOnDate:'<b>{resource}</b> on {startDate}<br><span class="{cls}">{allocated} von {available}</span> zugewiesen',groupBarTipAssignment:'<b>{resource}</b> - <span class="{cls}">{allocated} von {available}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} von {available}</span> allocated:<br>{assignments}',groupBarTipOnDate:'Am {startDate}<br><span class="{cls}">{allocated} vom {available}</span> zugewiesen:<br>{assignments}',plusMore:"+{value} mehr"},ResourceUtilization:{barTipInRange:'<b>{event}</b> {startDate} - {endDate}<br><span class="{cls}">{zugewiesem}</span> zugewiesen',barTipOnDate:'<b>{event}</b> am {startDate}<br><span class="{cls}">{allocated}</span> zugewiesen',groupBarTipAssignment:'<b>{event}</b> - <span class="{cls}">{allocated}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} von {available}</span> zugewiesen:<br>{assignments}',groupBarTipOnDate:'Am {startDate}<br><span class="{cls}">{allocated} von {available}</span> zugewiesen:<br>{assignments}',plusMore:"+{value} mehr",nameColumnText:"Ressource / Ereignis"},SchedulingIssueResolutionPopup:{"Cancel changes":"Die Änderung rückgängig machen und nichts tun",schedulingConflict:"Terminkonflikt",emptyCalendar:"Kalenderkonfigurationsfehler",cycle:"Planungszyklus",Apply:"Anwenden"},CycleResolutionPopup:{dependencyLabel:"Bitte wählen Sie eine Abhängigkeit:",invalidDependencyLabel:"Es gibt ungültige Abhängigkeiten, die behoben werden müssen:"},DependencyEdit:{Active:"Aktiv"},SchedulerProBase:{propagating:"Projekt wird berechnet",storePopulation:"Daten werden geladen",finalizing:"Ergebnisse werden finalisiert"},EventSegments:{splitEvent:"Ereignis aufteilen",renameSegment:"Umbenennen"},NestedEvents:{deNestingNotAllowed:"De-nesting nicht erlaubt",nestingNotAllowed:"Nesting nicht erlaubt"},VersionGrid:{compare:"Vergleichen",description:"Beschreibung",occurredAt:"Trat auf bei",rename:"Umbenennen",restore:"Wiederherstellen",stopComparing:"Vergleichen beenden"},Versions:{entityNames:{TaskModel:"Aufgabe",AssignmentModel:"Zuweisung",DependencyModel:"Verknüpfung",ProjectModel:"Projekt",ResourceModel:"Ressource",other:"Objekt"},entityNamesPlural:{TaskModel:"Aufgaben",AssignmentModel:"Zuweisungen",DependencyModel:"Verknüpfungen",ProjectModel:"Projekte",ResourceModel:"Ressourcen",other:"Objekte"},transactionDescriptions:{update:"{n} geändert(e) {entities}",add:"{n} hinzugefügt(e) {entities}",remove:"{n} entfernt(e) {entities}",move:"{n} verschoben(e) {entities}",mixed:"{n} geändert(e) {entities}"},addEntity:"{type} **{name}** hinzugefügt",removeEntity:"{type} **{name}** entfernt",updateEntity:"{type} **{name}** geändert",moveEntity:"{type} **{name}** von {from} nach {to} verschoben",addDependency:"Verknüpfung von **{from}** nach **{to}** hinzugefügt",removeDependency:"Verknüpfung von **{from}** nach **{to}** entfernt",updateDependency:"Verknüpfung von **{from}** nach **{to}** bearbeitet",addAssignment:"**{resource}** zugewiesen zu **{event}**",removeAssignment:"Zuweisung von **{resource}** von **{event}** entfernt",updateAssignment:"Zuweisung von **{resource}** von **{event}** bearbeitet",noChanges:"Keine Änderungen",nullValue:"keine",versionDateFormat:"M/D/YYYY h:mm a",undid:"Änderungen rückgängig gemacht",redid:"Änderungen rückgängig gemacht",editedTask:"Aufgabeneigenschaften bearbeitet",deletedTask:"Eine Aufgabe gelöscht",movedTask:"Eine Aufgabe verschoben",movedTasks:"Aufgaben verschoben"}},L=c.publishLocale(C),z={localeName:"De",localeDesc:"Deutsch",localeCode:"de-DE",Object:{Save:"Speichern"},IgnoreResourceCalendarColumn:{"Ignore resource calendar":"Ressourcenkalender ignorieren"},InactiveColumn:{Inactive:"Inaktiv"},AddNewColumn:{"New Column":"Neue Spalte"},BaselineStartDateColumn:{baselineStart:"Geplanter Anfang"},BaselineEndDateColumn:{baselineEnd:"Geplantes Ende"},BaselineDurationColumn:{baselineDuration:"Geplante Dauer"},BaselineStartVarianceColumn:{startVariance:"Abweichung Anfang"},BaselineEndVarianceColumn:{endVariance:"Abweichung Ende"},BaselineDurationVarianceColumn:{durationVariance:"Dauerabweichung"},CalendarColumn:{Calendar:"Kalender"},EarlyStartDateColumn:{"Early Start":"Früher Anfang"},EarlyEndDateColumn:{"Early End":"Frühes Ende"},LateStartDateColumn:{"Late Start":"Später Anfang"},LateEndDateColumn:{"Late End":"Spätes Ende"},TotalSlackColumn:{"Total Slack":"Gesamtes Slack"},ConstraintDateColumn:{"Constraint Date":"Einschränkung Datum"},ConstraintTypeColumn:{"Constraint Type":"Einschränkung Typ"},DeadlineDateColumn:{Deadline:"Stichtag"},DependencyColumn:{"Invalid dependency":"Ungültige Abhängigkeit"},DurationColumn:{Duration:"Dauer"},EffortColumn:{Effort:"Aufwand"},EndDateColumn:{Finish:"Ende"},EventModeColumn:{"Event mode":"Ereignismodus",Manual:"Manuell",Auto:"Auto"},ManuallyScheduledColumn:{"Manually scheduled":"Manuell geplant"},MilestoneColumn:{Milestone:"Meilenstein"},NameColumn:{Name:"Vorgangsname"},NoteColumn:{Note:"Notizen"},PercentDoneColumn:{"% Done":"% Abgeschlossen"},PredecessorColumn:{Predecessors:"Vorgänger"},ResourceAssignmentColumn:{"Assigned Resources":"Zugewiesene Ressourcen","more resources":"mehr Ressourcen"},RollupColumn:{Rollup:"Rollup"},SchedulingModeColumn:{"Scheduling Mode":"Planungsmodus"},SchedulingDirectionColumn:{schedulingDirection:"Planungsrichtung",inheritedFrom:"Geerbt von",enforcedBy:"Erzwungen von"},SequenceColumn:{Sequence:"Sequenz"},ShowInTimelineColumn:{"Show in timeline":"In der Chronik anzeigen"},StartDateColumn:{Start:"Anfang"},SuccessorColumn:{Successors:"Nachfolger"},TaskCopyPaste:{copyTask:"Kopieren",cutTask:"Ausschneiden",pasteTask:"Einfügen"},WBSColumn:{WBS:"PSP",renumber:"Erneut nummerieren"},DependencyField:{invalidDependencyFormat:"Ungültiges Abhängigkeitsformat"},ProjectLines:{"Project Start":"Projektanfang","Project End":"Projektende"},TaskTooltip:{Start:"Anfang",End:"Ende",Duration:"Dauer",Complete:"Vollständig"},AssignmentGrid:{Name:"Ressourcenname",Units:"Einheiten",unitsTpl:({value:e})=>e?e+"%":""},Gantt:{Edit:"Bearbeiten",Indent:"Einrücken",Outdent:"Ausrücken","Convert to milestone":"Zu Meilenstein konvertieren",Add:"Hinzufügen...","New task":"Neue Aufgabe","New milestone":"Neuer Meilenstein","Task above":"Aufgabe oben","Task below":"Aufgabe unten","Delete task":"Löschen",Milestone:"Meilenstein","Sub-task":"Unteraufgabe",Successor:"Nachfolger",Predecessor:"Vorgänger ",changeRejected:"Zeitplanungsmodul lehnte die Änderungen ab",linkTasks:"Abhängigkeiten hinzufügen",unlinkTasks:"Abhängigkeiten entfernen",color:"Farbe"},EventSegments:{splitTask:"Aufgabe aufteilen"},Indicators:{earlyDates:"Früher Anfang/Ende",lateDates:"Später Anfang/Ende",Start:"Anfang",End:"Ende",deadlineDate:"Deadline"},Versions:{indented:"Eingerückt",outdented:"Ausgestellt",cut:"Ausgeschnitten",pasted:"Kopieren",deletedTasks:"Gelöschte Aufgaben"}},M=c.publishLocale(z);if(typeof s.exports=="object"&&typeof d=="object"){var N=(e,n,t,a)=>{if(n&&typeof n=="object"||typeof n=="function")for(let r of Object.getOwnPropertyNames(n))!Object.prototype.hasOwnProperty.call(e,r)&&r!==t&&Object.defineProperty(e,r,{get:()=>n[r],enumerable:!(a=Object.getOwnPropertyDescriptor(n,r))||a.enumerable});return e};s.exports=N(s.exports,d)}return s.exports});
